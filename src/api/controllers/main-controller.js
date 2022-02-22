const BaseController = require("../../core/base/base-controller");

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
      message: 'Hello world!'
    };

    this.res.json(response);
  }
}

module.exports = (req, res, next) => new MainController(req, res, next);