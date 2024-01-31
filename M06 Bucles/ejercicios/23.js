function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  for (let i = 1 ; i <= 8 ; i++) {
    num = num +5
  }
  return num
}

module.exports = doWhile;