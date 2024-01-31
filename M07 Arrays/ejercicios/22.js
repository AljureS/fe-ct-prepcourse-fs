function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:
  let primerElemento = array.shift()

  return primerElemento
}

console.log(devolverPrimerElemento([1]));

module.exports = devolverPrimerElemento;
