function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  let duplicados = array.map(num => num * 2);
  return duplicados;
}

module.exports = duplicarElementos;
