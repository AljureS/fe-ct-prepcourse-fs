let nom = "Said"
function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:
  if (typeof nombre === "string"){
    return "Hola " + nombre + "!"
  }
}
console.log(obtenerSaludo(nom));

module.exports = obtenerSaludo;