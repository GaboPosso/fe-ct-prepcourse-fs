function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return num.toString().length === 3 ? true : false;
}

// console.log(tieneTresDigitos(823))
module.exports = tieneTresDigitos;
