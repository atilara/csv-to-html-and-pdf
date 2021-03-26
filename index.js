const Reader = require('./Reader');

var reader = new Reader();

// Precisa ser async para que o await seja usado para esperar pelo retorno
async function main() {
  var data = await reader.read('./files/advance.csv');
  console.log(data);
}

main();
