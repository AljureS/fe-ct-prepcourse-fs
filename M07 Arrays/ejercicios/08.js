function filtrarNumerosPares(array) {
  let array2 = []
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array2.push(array[i])
    } else {
      //
    }
    
  }
  return array2
}

console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6]));

module.exports = filtrarNumerosPares;
