const BaseController = require("../../core/base/base-controller");

const env = require("../../env/environment");

const emailTemplates = require("../../templates/templates");
const emailHelper = require("../../core/helpers/email-helper");

class MainController extends BaseController {

  constructor(req, res, next) {
    super(req, res, next);
  }

  /**
   * Controller main method
   * @returns {Promise<void>}
   */
  async main() {

    const response = {
      message: 'Hello World!'
    };

    const destinatario = this.req.body.email ?? env.email.smtp.account.username;

    emailHelper.useTemplate(emailTemplates.helloWorld).send({
      to: destinatario,
      subject: response.message
    }, response, (err, res) => {

      this.res.json(response);
    });
  }
}

module.exports = (req, res, next) => new MainController(req, res, next);