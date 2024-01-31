function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let acumulador = 0

  for (let i = 0; i < arrayOfNums.length; i++) {
    acumulador = acumulador + arrayOfNums[i]
  }
  return acumulador
}

module.exports = agregarNumeros;
