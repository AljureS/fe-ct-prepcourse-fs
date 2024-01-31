function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  do {
    switch (mes) {
      case 1:
        return 31
        break;
      case 2:
        return 28
        break;
      case 3:
        return 31
        break;
      case 4:
        return 30
        break;
      case 5:
        return 31
        break;
      case 6:
        return 30
        break;
      case 7:
        return 31
        break;
      case 8:
        return 31
        break;
      case 9:
        return 30
        break;
      case 10:
        return 31
        break;
      case 11:
        return 30
        break;
      case 12:
        return 31
        break;
      default:
        return 0
        break;
    }
  } while ((mes <= 12) && (mes >=1))
return 0
}

module.exports = diasEnMes;
