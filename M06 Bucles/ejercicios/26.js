
function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  let palabra1 = str1.toLowerCase().replace(" ","").split("").sort().join("")
  let palabra2 = str2.toLowerCase().replace(" ","").split("").sort().join("")

  if (palabra1 === palabra2){
    return true
  } else return false 
2
}

console.log(esAnagrama ("Hola mundo", "mundo hola"))
module.exports = esAnagrama;
