const Reader = require('./model/Reader');
const Processor = require('./model/Processor');
const Table = require('./model/Table');
const HtmlParser = require('./model/HtmlParser');
var reader = new Reader();

// Precisa ser async para que o await seja usado para esperar pelo retorno
async function main() {
  var data = await reader.read('./files/advance.csv');
  var processedValues = Processor.Process(data);
  var table = new Table(processedValues);

  var html = await HtmlParser.Parse(table);
  console.log(html);
}

main();
