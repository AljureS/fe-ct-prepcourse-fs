let bool1 = true
let bool2 = true

function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  if ((booleano1 === true) && (booleano2 === true)) {
    return true
  } else {
    return false
  }
}

console.log(esVerdaderoYFalso(bool1, bool2));
module.exports = esVerdaderoYFalso;
