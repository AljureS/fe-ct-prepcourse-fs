let tresDigitos = 45

function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  let stringNum = num.toString()
  if (stringNum.length === 3){
    return true
  } else return false
}

console.log(tieneTresDigitos(tresDigitos));
module.exports = tieneTresDigitos;
