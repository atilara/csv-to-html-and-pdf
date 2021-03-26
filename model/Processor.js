class Processor {
  static Process(data) {
    // Consegue dividir uma string em partes
    var string = data.split('\r\n');
    var rows = [];

    string.forEach((row) => {
      var arr = row.split(',');
      // Empurra os elementos dentro do array rows
      rows.push(arr);
    });
    return rows;
  }
}

module.exports = Processor;
