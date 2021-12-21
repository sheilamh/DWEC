// Función isLongerThan //
// Le pasas por parámetros dos cadenas
function isLongerThan(cadena1, cadena2) {
    if (cadena1 > cadena2) {
        // Y te devuelve TRUE si es más larga la primera
        return true
    } else {
        // En el caso de que no sea más larga la primera (igual o menor),
        // devuelve false
        return false
    }
}


function ejercicio() {
    // Aquí le pido al usuario dos cadenas
    cadena1 = prompt("Escribe la cadena número 1")
    cadena2 = prompt("Escribe la cadena número 2")
    // Las muestro
    document.getElementById("c1").innerHTML = cadena1
    document.getElementById("c2").innerHTML = cadena2
    // Y aquí ejecuto la función para que aparezca lo que ha dado
    document.getElementById("return").innerHTML = isLongerThan(cadena1, cadena2);
    
    // Y un mensaje final para que se sepa si es o no más larga la cadena
    // número 1
    // Ojo, he dicho todo el rato "mas larga" porque puse un mayor que, si
    // es igual o menor que la cadena 2 sale false, eso no se controla
    if (isLongerThan(cadena1, cadena2)) {
        document.getElementById("mensajefinal").innerHTML = "La cadena 1 es mas larga que la cadena 2"
    } else {
        document.getElementById("mensajefinal").innerHTML = "La cadena 1 no es mas larga que la cadena 2"
    }
    
}