let numeroImpar = 10

function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  if ((num/2) === Math.round(num/2)) {
    return false
  } else {
    return true
  }
}

console.log(esImpar(numeroImpar));
module.exports = esImpar;