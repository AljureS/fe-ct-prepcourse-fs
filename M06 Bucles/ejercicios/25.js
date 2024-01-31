function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  
  let palabra = string.replace(/ /g,"").toLowerCase()
  let j = palabra.length - 1

  for (let i = 0 ; i < palabra.length; i++) {
    if (palabra[i] !== palabra[j]){
      return false
      
    } 
    j--
  }
  return true

}

console.log(esPalindromo('La ruta nos aporto otro paso natural'))

module.exports = esPalindromo;
