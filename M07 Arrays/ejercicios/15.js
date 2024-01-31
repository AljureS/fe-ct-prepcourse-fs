function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let comparativo = array[0] 
  let contador = 0

  for (let i = 0; i < array.length; i++) {
    if (comparativo === array[i]) {
      contador = contador +1
    }
  }

  if (contador === array.length) {
    return true
  } else return false
}

module.exports = todosIguales;
