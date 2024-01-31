let ex = 10
let ex2 = 10

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if ((Number.isInteger(x)===true) && (Number.isInteger(y)===true)){
    if (x > y){
      return x
    } else if (x < y){
      return y
    } else {
      return x
    }
  }
}

console.log(obtenerMayor(ex, ex2));
module.exports = obtenerMayor;
