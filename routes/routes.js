const main = require('../src/api/routes/main-routes');

/**
 * @constant ROUTES
 * @type {{entryPoint: string, route: import('express').Router}[]}
 * 
 * Registro de rotas disponibilizadas por esta API
 * 
 * Objetos que representam as rotas da aplicação devem ser inseridos nesta constante
 * 
 * @example
 * ```ts
 * type NodeSmtpMailRoute = {
 *  entryPoint: string,
 *  route: import('express').Router
 * }
 * ```
 * 
 */
const ROUTES = [

  {
    entryPoint: '/',
    route: main
  }

];

module.exports = ROUTES;