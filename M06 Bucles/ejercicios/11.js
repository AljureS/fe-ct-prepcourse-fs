let num0 = 5
let num1 = 25
let num2 = 55

function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  if ((20 < num) && (num < 50)){
    return true
  } else return false 
}

console.log(estaEnRango(num0));
console.log(estaEnRango(num1));
console.log(estaEnRango(num2));
module.exports = estaEnRango;
