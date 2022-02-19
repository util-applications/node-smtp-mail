const BaseController = require('../../base/controllers/base-controller');

class MainController extends BaseController {

  constructor(req, res, next) {
    super(req, res, next);
  }

  async main() {

    const response = 'Hello world!';

    this.res.json(response);
  }
}

module.exports = (req, res, next) => new MainController(req, res, next);