// File System para manipular arquivos
const fs = require('fs');

// Função para leitura de arquivos, utilizando callback para receber erro e dados
// Encoding para informar ao node que esse é um arquivo de texto
fs.readFile('./arquivo.txt', { encoding: 'utf-8' }, (error, data) => {
  if (error) {
    console.log('Ocorreu um erro durante a leitura');
  } else {
    console.log(data);
  }
});
