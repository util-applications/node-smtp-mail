const env = require("../../env/environment");

class MainRepository {

  constructor() { }

  /**
   * Obter destinatario para o envio de e-mail
   * @param {import('express').Request} req 
   * @returns {Promise<string>}
   */
  async obterDestinatario(req) {

    return req.body['email'] ?? env.email.smtp.account.username;
  }

  /**
   * Obter mensagem de response inicial
   * @returns {Promise<string>}
   */
  async obterResponseMessage() {

    return "Hello world! Sucesso!";
  }
  
}

module.exports = MainRepository;