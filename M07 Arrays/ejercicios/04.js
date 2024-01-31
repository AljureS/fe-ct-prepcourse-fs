function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  let min = 0
  let max = array.length -1
  console.log(max);
  let posicionAleatorio = Math.floor(Math.random()* (max - min + 1)) +min
  
  return array[posicionAleatorio]
}

console.log(obtenerElementoAleatorio([1,2,3,4,5]));

module.exports = obtenerElementoAleatorio;
