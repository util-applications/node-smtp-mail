const NodeSmtpMailStartup = require("../src/core/startup/node-smtp-mail-startup");
/**
 * @class Startup
 * 
 * Registro de rotas disponibilizadas por esta API através do método `start`
 * 
 * @method super.addRouting Adiciona ao core da aplicação um entry-point a uma rota customizada - Deve ser chamado em start
 */
class Startup extends NodeSmtpMailStartup {

  constructor() {
    super();
  }

  /**
   * Método onde é possível registrar os entry points da aplicação com suas rotas customizadas
   * @method start
   */
  start() {

    this.addRouting("/", require("../src/api/routes/main-routes"));

  }
}

module.exports = new Startup();