function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  // let mesesPedidos = ["Enero", "Marzo", "Noviembre"];
  // let mesesOrdenados = [];
  // array.forEach((mes) => {
  //   if (array.includes(mes)) {
  //     mesesOrdenados.push(mes);
  //   }
  // });

  // if (mesesOrdenados.length === mesesPedidos.length) {
  //   return mesesOrdenados;
  // } else {
  //   return "No se encontraron los meses pedidos";
  // }
  const mesesPedidos = ["Enero", "Marzo", "Noviembre"];
  const resultado = [];

  for (let mes of array) {
    if (mesesPedidos.includes(mes)) {
      resultado.push(mes);
    }
  }

  if (resultado.length === mesesPedidos.length) {
    return resultado;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
