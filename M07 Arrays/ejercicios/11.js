function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let array2 = []

  for (let i = 0; i < array.length; i++) {
    
    array2.push(array[i] * array.indexOf(array[i]))
    
  }

    return array2
}

console.log(multiplicarElementosPorIndice([1,2,3,4]));

module.exports = multiplicarElementosPorIndice;
