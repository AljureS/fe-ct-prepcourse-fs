let pruebaX = 5
let pruebaY = 5

function sonIguales(x, y) {
  // La función recibe dos argumentos "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:
  if (x === y){
    return true
  } else {
    return false 
  }
}

console.log(sonIguales(pruebaX,pruebaY));

module.exports = sonIguales;