
function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
    // Intenta crear un objeto Date con el argumento

  
  if (fecha.toString()== "Invalid Date"){
    return false
  }
  //Si la fecha / se creo a partir / del objeto Date
  if (fecha instanceof Date){
    return true
  } else return false 

}



module.exports = esFechaValida;