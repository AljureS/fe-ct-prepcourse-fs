function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  let acumulador = 0
  
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    acumulador = acumulador + arrayOfNumbers[i]
  }
  cb(acumulador)

}

module.exports = sumarArray;
