class Table {
  constructor(array) {
    this.header = array[0];
    // Função que remove o primeiro elemento de um array
    array.shift();
    this.rows = array;
  }

  // Campos virtuais
  get RowCount() {
    return this.rows.length;
  }

  get ColumnCount() {
    return this.header.length;
  }
}

module.exports = Table;
