//14.Definir una función que determine si la cadena de texto que se le pasa como parámetro es un 
//palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
//Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".


let cadenatxt= prompt("Escriba una cadena de texto");
cadenatxt = cadenatxt.toLowerCase();
cadenatxt = cadenatxt.replace(/\s+/g, '')
let cadenarevertida = "";
   
//Itero la cadena de manera inversa
for(let i = cadenatxt.length-1; i>=0; i--)
{
  //Voy concatenando el valor a la cadena resultado
  cadenarevertida += cadenatxt[i];
}

console.log(cadenatxt);

if (cadenatxt == cadenarevertida){
    alert("Esta cadena es un palidromo");
}else{
    alert("Esta cadena NO es un palidromo");
}
