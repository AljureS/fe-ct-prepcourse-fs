let numEntero = -7

function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  let string 

  if (num < 0){
    string = "Es negativo"
    return string
  } else if (num > 0){
    string = "Es positivo"
    return string
  } else {
    return false 
  }

}

console.log(esPositivo(numEntero));

module.exports = esPositivo;