"use strict";
const environment = require("../../env/environment");

// const nodemailer = require("nodemailer");
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
   * definida no `environment` da aplicação
   * 
   * @example
   * Considerando:
   * ```js
   * const environment = {
   *  templatesDirectory: '/templates'
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

    const path = environment.templatesDirectory + '/' + templatePath;

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
  }

}

module.exports = new EmailHelper();