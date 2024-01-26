let numTest = 5
let stringTest = "Siu"
let booleanTest = true

function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof valor; //
}
console.log(esTipoDato(stringTest));
console.log(esTipoDato(numTest));
console.log(esTipoDato(booleanTest));


module.exports = esTipoDato;