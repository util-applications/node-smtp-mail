const handlebars = require("handlebars");

const TemplateEngineBaseHelper = require("../template-engine-base-helper");

class HandlebarsHelper extends TemplateEngineBaseHelper {

  constructor() {
    super();
  }

  async compile(html, replacements) {

    const template = handlebars.compile(html);

    return template(replacements);
  }
}

module.exports = HandlebarsHelper;