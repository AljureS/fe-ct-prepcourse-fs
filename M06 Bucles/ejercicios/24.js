function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let string1 = texto.split("")
  let invString = string1.reverse()
  
  let textFinal = invString.join("")
  
  return textFinal
}

invertirTexto("dias")
console.log(invertirTexto('pixies'));

module.exports = invertirTexto;