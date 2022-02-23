// const handlebars = require("handlebars");

const TemplateEngineBaseHelper = require("../template-engine-factory").TemplateEngineBaseHelper;

class HandlebarsHelper extends TemplateEngineBaseHelper {

  constructor() {
    super();
  }

  async compile(html, replacements) {

    return html;
  }
}

module.exports = HandlebarsHelper;