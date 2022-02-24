const fs = require("fs");
const env = require("../../env/environment");

const TemplateEngineFactory = require("../base/template-engine/template-engine-factory");

class TemplateHelper {

  constructor() {
    // Starts file encoding
    this._encoding = "utf-8";
    // Starts template engine
    this._templateEngine = env.template.engine;
  }

  /**
   * Check if directory exists - used to templates directory
   * @param {string} directory 
   * @returns {boolean}
   */
  directoryExists(directory) {
    return fs.existsSync(directory);
  }

  /**
   * Update file encoding - Default file encoding is UTF-8
   * @param {*} encoding 
   */
  updateEncoding(encoding) {
    this._encoding = encoding;
  }

  /**
   * Update Template Engine - Default Template Engine is defined in `template` key, at `environment`
   * @param {"handlebars"|"ejs"} templateEngine 
   */
  updateTemplateEngine(templateEngine) {
    this._templateEngine = templateEngine;
  }

  /**
   * Read file content
   * @param {string} path Template path
   * @param {(err: Error, data: string) => void} callback `data` is the contents of the file
   */
  readTemplate(path, callback) {

    fs.readFile(path, { encoding: this._encoding }, (err, data) => {
    
      if (err) {
        callback(err);
        throw err;
      }
      callback(null, data);
    });
  }

  /**
   * Compile the HTML template, applying the replacements variables
   * @param {string} html Content of template - get by `readTemplate` method
   * @param {*} replacements Variables to replace in HTML template
   * 
   * @returns {Promise<string>}
   */
  async compileTemplate(html, replacements) {

    // Template Engine Factory - obtém instância de helper com base no template engine configurado
    const templateEngineHelper = (new TemplateEngineFactory(this._templateEngine)).getHelper();
    
    // Compile html and apply replacements with template enginer
    return await templateEngineHelper.compile(html, replacements);
  }
}

module.exports = new TemplateHelper();