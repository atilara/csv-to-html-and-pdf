// File system
const fs = require('fs');
const util = require('util');

class Writer {
  constructor() {
    // Transforma a função writeFile em promise e salva ela no atributo writer
    this.writer = util.promisify(fs.writeFile);
  }

  // Agora podemos trabalhar com o async/await devido ao promisify
  async write(filepath, data) {
    try {
      await this.writer(filepath, data);
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = Writer;
