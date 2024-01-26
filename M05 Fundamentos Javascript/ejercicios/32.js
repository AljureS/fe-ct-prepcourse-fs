let money = 50
function deEuroAdolar(euro) {
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  if (euro !== 0){
    return euro * 1.20
  }

}
console.log(deEuroAdolar(money));
module.exports = deEuroAdolar;
