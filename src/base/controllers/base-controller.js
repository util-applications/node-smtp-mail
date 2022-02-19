/**
 * @class
 * 
 * Node SMTP Mail application base controller class
 * 
 * Esta classe contém as instâncias de requisição e resposta recebidas via `Express`.
 * As demais controllers da aplicação podem estender a esta classe e utilizar as referências de
 * - req { `Request` - https://expressjs.com/en/api.html#req }
 * - res { `Response` - https://expressjs.com/en/api.html#res }
 * 
 * @example
 * ```js
 * class MyClass extends BaseController {
 * 
 *  constructor(req, res, next) {
 *    super(req, res, next);
 *  }
 * 
 *  async myMethod() {
 *    console.log('Request body is =>', this.req.body);
 * 
 *    // Finishing request
 *    this.res.json('Hello world');
 *  }
 * }
 * ```
 */
class BaseController {

  /**
   * @param {import('express').Request} req 
   * @param {import('express').Response} res 
   * @param {import('express').NextFunction} next 
   */
  constructor(req, res, next = undefined) {
    this.req = req;
    this.res = res;
    this.next = next;
  }
}

module.exports = BaseController;