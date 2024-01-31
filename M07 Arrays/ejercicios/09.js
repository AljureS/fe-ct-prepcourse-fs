function contarElementosMayoresA10(array) {
  let array2 =[]

  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      array2.push(array[i])
    }
    
  }

  return array2.length
}


module.exports = contarElementosMayoresA10;
