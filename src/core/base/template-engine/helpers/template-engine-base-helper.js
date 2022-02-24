/** @class Classe base - Classe concreta do helper extends a esta classe base */
class TemplateEngineBaseHelper {

  constructor() { }
  
  /** 
   * Assinatura do método compile - Deve ser implementado por todo helper de template engine concreto
   * 
   * @param {string} html Conteúdo HTML do template que deve ser compilado e aplicado variáveis
   * @param {*} replacements Conteúdo que deverá ser substituído no template
   * 
   * @returns {Promise<string>} Template compilado com as variáveis aplicadas
   */
  async compile(html, replacements) {}
}

module.exports = TemplateEngineBaseHelper;