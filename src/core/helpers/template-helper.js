const fs = require("fs");

class TemplateHelper {

  constructor() {
    // Starts file encoding
    this._encoding = "utf-8";
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
   * @returns {void}
   */
  compileTemplate(html, replacements) {

    // Compile html and apply replacements with template enginer

    return html;
  }
}

module.exports = new TemplateHelper();