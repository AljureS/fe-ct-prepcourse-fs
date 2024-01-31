function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let array2 = []

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "Marzo":
        array2.push("Marzo")
        break;
      case "Enero":
        array2.push("Enero")
        break;
      case "Noviembre":
        array2.push("Noviembre")
        break;
    }
  }
  if (array2.length !== 3) {
    return "No se encontraron los meses pedidos"
  } else return array2
}

module.exports = mesesDelAño;
