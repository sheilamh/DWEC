function ejercicio() {
    // 0.- Separar números //
    // No es necesario, pero quise ponerlo
    let numeros = prompt("Escriba los números separados por un espacio");
    // Simplemente te divide los números que escribiste por un espacio y luego
    // te los muestra
    numeros = numeros.split(" ");
    // Y con "innerHTML", cambio el valor del span con ese ID
    document.getElementById("numeros").innerHTML = numeros;


    // 1.- Comprobar números negativos y positivos //
    // He ordenado la array para que primero aparezcan los negativos, así
    // tengo ordenados los negativos a un lado, el 0 y luego los positivos
    numeros = numeros.sort()
    // Aquí empiezo una cuenta con un for, haciendo que empiece a contar
    // los números negativos, y si se encuentra un 0, la i que es lo que controla
    // el for, llegue al límite, así sé que ya he pasado por todos los números
    // negativos y solo quedan o el 0 o números positivos
    let cuenta = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            cuenta++
        } else {
            i = numeros.length
        }
    }
    // Y con "innerHTML", cambio el valor del span con ese ID
    document.getElementById("negativos").innerHTML = cuenta;


    // 2.- Multiplicar cada número por 2 y guardarlo en una array //
    // Creo otra array y para no repetir funciones, uso el foreach, empujando
    // al final de cada posición la multiplicación del número actual hasta llegar
    // al final
    multnumeros = new Array()
    numeros.forEach(numero => {
        multnumeros.push(numero*2)
    });
    // Y con "innerHTML", cambio el valor del span con ese ID
    document.getElementById("multiplicados").innerHTML = multnumeros;

    
    // 3.- Suma final //
    // Simplemente creo una variable y le voy sumando a lo que ya vale la
    // variable, la array anterior de números multiplicados
    let sumafinal = 0;
    for (let i = 0; i < multnumeros.length; i++) {
        sumafinal += multnumeros[i]
    }
    // Y con "innerHTML", cambio el valor del span con ese ID
    document.getElementById("finales").innerHTML = sumafinal;
}