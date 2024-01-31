function sumarHastaNConBreak(n) {
    // La función recibe un numero n por argumento.
    // Devuelve la suma de todos los números desde 1 hasta n.
    // Si la suma supera a 100, detén el bucle usando break.
    // Tu código:
    let acumulador = 0
  
    for (let i = 1; i <= n; i++) {
        acumulador = acumulador + i
        console.log("El iteraor va: " + i);
        console.log("El acumulador va: " + acumulador);

        if (i >= 100) break
    } 
  
    return acumulador
    
}

sumarHastaNConBreak(200)

