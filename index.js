const Reader = require('./model/Reader');
const Processor = require('./model/Processor');
var reader = new Reader();

// Precisa ser async para que o await seja usado para esperar pelo retorno
async function main() {
  var data = await reader.read('./files/advance.csv');
  var processedValues = Processor.Process(data);
  console.log(processedValues);
}

main();
