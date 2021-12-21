//13.Definir una función que muestre información sobre una cadena de texto que se le pasa como 
//argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

let cadenatxt= prompt ("Escriba una cadena de texto para analizarla");
let mayuscula =cadenatxt.toUpperCase();
let minuscula= cadenatxt.toLowerCase();
if (cadenatxt == mayuscula){
    alert("Esta en mayuscula");
}if(cadenatxt == minuscula){
    alert ("Esta en minuscula");
}if (!(cadenatxt == mayuscula) && !(cadenatxt == minuscula)){
    alert ("Contiene mayuscula y minuscula");
}

