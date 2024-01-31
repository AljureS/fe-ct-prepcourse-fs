function sumarLikesDeUsuario(objetoUsuario) {
  // El obtejo "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  let contadorDeLikes = 0

  for (let i = 0; i < (objetoUsuario.posts).length; i++) {

    contadorDeLikes = contadorDeLikes + ((objetoUsuario.posts)[i]).likes
    
  }
  return contadorDeLikes
}

module.exports = sumarLikesDeUsuario;
