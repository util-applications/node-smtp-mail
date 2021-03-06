const BaseController = require("../../core/base/controller/base-controller");

const MainRepository = require("../repositories/main-repository");

const emailTemplates = require("../../templates/templates");
const emailHelper = require("../../core/helpers/email-helper");

class MainController extends BaseController {

  /**
   * @param {MainRepository} repository 
   */
  constructor(req, res, next, repository) {
    super(req, res, next);
    this._repository = repository;
  }

  /**
   * Controller main method
   * @returns {Promise<void>}
   */
  async main() {

    const destinatario = await this._repository.obterDestinatario(this.req);

    const response = {
      message: await this._repository.obterResponseMessage()
    };

    const data = {
      user: {
        name: this.req.body.name,
        email: destinatario,
      }
    };

    const subject = "Hello World, " + data.user.name;

    // Definindo template a ser utilizado e enviando e-mail
    emailHelper.useTemplate(emailTemplates.helloWorld).send({
      to: destinatario,
      subject: subject
    }, data, (err, res) => {

      return this.res.json(response);
    });
  }
}

module.exports = (req, res, next) => new MainController(req, res, next, new MainRepository());