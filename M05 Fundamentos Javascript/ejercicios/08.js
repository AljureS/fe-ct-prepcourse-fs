let num = 5.23
function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  return Number.isInteger(numero);
}

console.log(esNumeroEntero(num))

module.exports = esNumeroEntero;