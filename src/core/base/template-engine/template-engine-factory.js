const HandlebarsHelper = require("./handlebars/handlebars-helper");

/** Enumeração dos template engines suportados */
const TEMPLATE_ENGINE = {
  Handlebars: "handlebars"
};

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
   * @returns {TemplateEngineBaseHelper}
   */
  getHelper() {

    switch(this._templateEngine) {

      case TEMPLATE_ENGINE.Handlebars:
        return new HandlebarsHelper();
    }

    throw new Error("O template engine " + this._templateEngine + " não é suportado");
  }
}

/** @class Classe base - Classe concreta do helper extends a esta classe base */
class TemplateEngineBaseHelper {

  /** 
   * Assinatura do método compile - Deve ser implementado por todo helper de template engine concreto
   * 
   * @param {string} html Conteúdo HTML do template que deve ser compilado e aplicado variáveis
   * @param {*} replacements Conteúdo que deverá ser substituído no template
   * 
   * @returns {string} Template compilado com as variáveis aplicadas
   */
  compile(html, replacements);
}

module.exports = {TEMPLATE_ENGINE, TemplateEngineFactory, TemplateEngineBaseHelper};