function duplicarElementos(array) {
  let array2 =[]
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      array2.push(array[i] * 2)
    }
    
  }

  return array2
}

console.log(duplicarElementos([-1, -2, -3]))
console.log(duplicarElementos([]))

module.exports = duplicarElementos;
