function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let times = 0;
  while ( times < 8 ) {
    num += 5;
    times++;
  }
  return num;
}

module.exports = doWhile;