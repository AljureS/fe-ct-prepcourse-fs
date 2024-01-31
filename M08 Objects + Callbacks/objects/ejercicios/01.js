const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  let arrayPropiedades = propiedad.split(".")

  if (arrayPropiedades.lenght >=2 ) {
    return objeto[arrayPropiedades[0]][arrayPropiedades[1]]
  } else return objeto[propiedad]
};

const objeto = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Springfield",
  },
};

console.log(obtenerValorPropiedad(objeto, "direccion.calle"))
module.exports = obtenerValorPropiedad;
