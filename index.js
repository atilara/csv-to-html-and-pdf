// File System para manipular arquivos
const fs = require('fs');

// Função para leitura de arquivos, utilizando callback para receber erro e dados
// Encoding para informar ao node que esse é um arquivo de texto
fs.readFile('./file.json', { encoding: 'utf-8' }, (error, data) => {
  if (error) {
    console.log('Ocorreu um erro durante a leitura');
  } else {
    var content = JSON.parse(data); // String para Objeto JS (JSON)
    content.user = 'Adriano B';
    content.age = 20;
    // Objeto JS para String
    fs.writeFile('./file.json', JSON.stringify(content), (error) => {
      if (error) {
        console.log('Ocorreu um erro durante a escrita');
      }
      console.log(content);
    });
  }
});
