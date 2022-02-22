/**
 * @class NodeSmtpMailStartup
 * 
 * ### NodeSmtpMailStartup
 * 
 * Core Startup Class of `Node SMTP Mail` project
 */
class NodeSmtpMailStartup {

  constructor() {
    /**
     * @type {{entryPoint: string, route: import('express').Router}[]}
     */
    this._routing = [];
  }

  /**
   * Registra uma rota customizada (`routing`) no core da aplicação gerando um entry-point para a mesma (`path`)
   * @param {string} path Entry-point da rota
   * @param {import('express').Router} routing Rotas do entry-point
   * 
   * @returns {void}
   */
  addRouting(path, routing) {

    if (path == null || routing == null)
      throw new Error("Entry-point (path) e routing não podem ser null");

    const entryPointExists = this._routing.some(r => r.entryPoint == path);

    if (entryPointExists)
      throw new Error("Entry-point " + path + " registrado mais de uma vez");

    const routingInstance = {
      entryPoint: path,
      route: routing
    };

    this._routing.push(routingInstance);
  }
}

module.exports = NodeSmtpMailStartup;