const handlebars = require("handlebars");

const TemplateEngineBaseHelper = require("../template-engine-factory").TemplateEngineBaseHelper;

class HandlebarsHelper extends TemplateEngineBaseHelper {

  constructor() {
    super();
  }

  compile(replacements) {

  }
}

module.exports = HandlebarsHelper;