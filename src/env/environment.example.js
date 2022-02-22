/**
 * Environment variables - Example File
 * 
 * Este arquivo deve ser substituido por um arquivo de environment local.
 * Para fazer a substituição, duplique este arquivo e remova a extensão '.example', mantendo apenas '.js'
 * 
 * - O novo arquivo deve conter o nome 'environment.js'
 * 
 * O novo arquivo criado será ignorado pelo git changes, 
 * evitando que suas credenciais locais de desenvolvimento sejam publicadas,
 * considerando que será utilizado de acordo com o ambiente local de desenvolvimento
 */

module.exports = {

  /** Application name */
  applicationName: 'Node SMTP Mail',

  /** Server port */
  port: 3000,

  /** E-mail structure */
  email: {

    /** Location of e-mail templates (inside this project) */
    templatesDirectory: 'src/templates',

    /** Sender name */
    from: 'Hello World Bot',

    /** SMTP settings */
    smtp: {

      host: 'smtp.mail.com', // Your e-mail provider host
      port: 587, // Your e-mail provider port number
      secure: false, // true for 465, false for other ports

      /** SMTP Account config */
      account: {
        username: 'your_email@mail.com',
        password: 'your_password'
      }
    }
  }
};