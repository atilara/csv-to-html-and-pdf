// File system
const fs = require('fs');
const util = require('util');

class Reader {
  read(filepath) {
    // Função utiliza callbacks e não conseguimos retornar dados dela, já que não utilizamos async / await
    // Por isso vamos utilizar o promisify e converter em promise
    fs.readFile(filepath, 'utf-8', (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }
}

module.exports = Reader;
