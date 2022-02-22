"use strict";
const environment = require("../../env/environment");

const nodemailer = require("nodemailer");
// const handlebars = require("handlebars");

const templateHelper = require("./template-helper");

const transporterConfig = {
  host: null,
  port: null,
  secure: false, // true for 465, false for other ports
  tls: {
    ciphers: "SSLv3",
  },
};

class EmailHelper {

  constructor() { }

  /**
   * @param {string} name 
   * @returns {void}
   */
  updateFromName(name) {

    if (!name)
      throw new Error("Invalid from name");

    this._from = name;
  }

  /**
   * 
   * @param {string} templatePath Path relativo do arquivo de template a ser utilizado, 
   * considerado a partir do diretório de templates definido no `environment`
   * 
   * ### Observação importante: 
   * O argumento `templatePath` será pesquisado a partir da variável de ambiente `templatesDirectory`, 
   * definida no `environment` da aplicação, na chave `email` (`environment.email.templatesDirectory`)
   * 
   * @example
   * Considerando:
   * ```js
   * const environment = {
   *  email: {
   *    templatesDirectory: '/templates'
   *  }
   * }
   * ```
   * Caso o template desejado esteja localizado em:
   * - `/templates/main/hello-world-template.html`,
   * 
   * o argumento `templatePath` deverá ser: 
   * - `main/hello-world-template.html`
   * 
   * @returns {void}
   */
  useTemplate(templatePath) {

    const path = environment.email.templatesDirectory + '/' + templatePath;

    if (!templateHelper.directoryExists(path))
      throw new Error("Template path not found. Searching by " + path);

    // this._template = templatePath;
    this._template = path;
  }

  /**
   * Enviar e-mail
   * 
   * @param {{to: string|string[], subject: string}} config 
   * @param {*} data 
   * 
   * @returns {void}
   */
  send(config, data) {

    // Teste receiver address with Regex

    const emailEnv = environment.email;

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({

      host: emailEnv.smtp.host,
      port: emailEnv.smtp.port,
      secure: emailEnv.smtp.secure, 
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: emailEnv.smtp.account.username,
        pass: emailEnv.smtp.account.password,
      },
    });

    console.info('Lendo template selecionado:', this._template, '...');

    // send mail with defined transport object
    templateHelper.readTemplate(this._template, (error, html) => {

      const replacements = {
        ...data,
        appName: environment.applicationName,
      };

      console.info('Compilando template...', 'Substituindo variáveis...');
      
      const template = templateHelper.compileTemplate(html, replacements);

      const mailOptions = {
        from: this._from ?? environment.email.from, 
        to: config.to, 
        subject: config.subject, 
        html: template
      };

      console.info('Destinatário:', mailOptions.to);
      console.info('Assunto:', mailOptions.subject);

      console.info('Enviando e-mail...');

      transporter.sendMail(mailOptions, function (error, response) {
        if (error)
          console.error(error);
        else
          console.info(response.response);
      });
      

    });
  }

}

module.exports = new EmailHelper();