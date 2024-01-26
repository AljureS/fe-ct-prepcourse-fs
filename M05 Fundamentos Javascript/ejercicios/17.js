let numeroPar = 9
function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  if ((num/2) === Math.round(num/2)) {
    return true
  } else {
    return false
  }
}

console.log(esPar(numeroPar));
module.exports = esPar;
