let numero = 65665

function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:

  //return num < 90 ? true : false

  if (num < 90){
    return true 
  } else {
    return false 
  }
}

console.log(menosQueNoventa(numero));
module.exports = menosQueNoventa;