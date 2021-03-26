// File system
const fs = require('fs');
const util = require('util');

class Reader {
  constructor() {
    // Transforma a função readFile em promise e salva ela no atributo reader
    this.reader = util.promisify(fs.readFile);
  }

  // Agora podemos trabalhar com o async/await devido ao promisify
  async read(filepath) {
    try {
      return await this.reader(filepath, 'utf-8');
    } catch (error) {
      return undefined;
    }
  }
}

module.exports = Reader;
