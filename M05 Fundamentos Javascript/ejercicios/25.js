let argX = 8
let argY = 5

function obtenerResto(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
  if ((typeof x === 'number') && (typeof y === 'number')){
    return x % y
  }
}

console.log(obtenerResto(argX,argY));

module.exports = obtenerResto;