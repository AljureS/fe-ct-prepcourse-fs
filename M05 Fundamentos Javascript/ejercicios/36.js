// ⛔️ Recuerda que debes utilizar el objeto global "Math".
let numero = 1
let exponente = 5
function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  if ((typeof num === "number") && (typeof exponent === "number")){
    return Math.pow(num, exponent)
  }
  
}

console.log(elevar(numero,exponente));

module.exports = elevar;