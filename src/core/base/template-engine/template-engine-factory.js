const HandlebarsHelper = require("./helpers/handlebars/handlebars-helper");
const TEMPLATE_ENGINE = require("./available-template-engines");

/**
 * @class
 * 
 * Factory para obter Helper do template engine
 */
class TemplateEngineFactory {

  /** @param {string} templateEngine */
  constructor(templateEngine) {
    this._templateEngine = templateEngine;
  }

  /**
   * Obtém uma instância de Template Engine com base no template configurado neste Factory
   * @returns {import('./helpers/template-engine-base-helper')}
   */
  getHelper() {

    switch(this._templateEngine) {

      case TEMPLATE_ENGINE.Handlebars:
        return new HandlebarsHelper();
    }

    throw new Error("O template engine " + this._templateEngine + " não é suportado");
  }
}

module.exports = TemplateEngineFactory;