function convertirStringAMayusculas(array) {
  let array2 = []
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      array2.push(array[i].toUpperCase())
    }
    
  }

  return array2

}

console.log(convertirStringAMayusculas(["hello", "world"]));

module.exports = convertirStringAMayusculas;
