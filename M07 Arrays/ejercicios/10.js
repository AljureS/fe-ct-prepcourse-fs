function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length === 0) {
    return 0; 
  }

  let indiceMayor = 0;
  let comparativo = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > comparativo) {
      comparativo = array[i];
      indiceMayor = i;
    }
  }

  return indiceMayor;

}

console.log(encontrarIndiceMayor([]));


module.exports = encontrarIndiceMayor;
