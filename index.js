const Reader = require('./model/Reader');
const Processor = require('./model/Processor');
const Table = require('./model/Table');
var reader = new Reader();

// Precisa ser async para que o await seja usado para esperar pelo retorno
async function main() {
  var data = await reader.read('./files/advance.csv');
  var processedValues = Processor.Process(data);
  var table = new Table(processedValues);

  console.log(table.RowCount);
  console.log(table.ColumnCount);
}

main();
