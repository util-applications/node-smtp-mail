// const handlebars = require("handlebars");

const TemplateEngineBaseHelper = require("../template-engine-base-helper");

class HandlebarsHelper extends TemplateEngineBaseHelper {

  constructor() {
    super();
  }

  async compile(html, replacements) {

    return html;
  }
}

module.exports = HandlebarsHelper;