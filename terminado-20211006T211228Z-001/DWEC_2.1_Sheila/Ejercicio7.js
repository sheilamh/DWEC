//7. A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];



//• Determinar cual de los dos elementos de texto es mayor
console.log("Punto 1");
let valores = [true, 5, false, "hola", "adios", 2];

let longitud1= valores[3].length;
let longitud2=valores[4].length;
                                   
if (longitud1>longitud2){                                   //Si hola es mayor a adios 
   console.log(valores[3]+" es mayor") ;
}                                     
else if (longitud1<longitud2){                              //si adios es mayor que hola
   console.log (valores[4]+" es mayor");
}                                       
else if(longitud1=longitud2){                             //si hola y adios son iguales
   console.log(valores[3] +" es igual a "+valores[4]);
}

console.log("");

    //• Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
console.log("Punto 2");

console.log ("La operacion OR da: "+(valores[0] || valores[2]));
console.log ("La operacion AND da:"+(valores[0] && valores[2]));

console.log("");
//• Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
console.log("Punto 3");
let numero1 = parseInt(valores[1]);
let numero2 = parseInt (valores[5]);
console.log("El numero que aparece primero en el array es:" +numero1);
console.log("El segundo numero que aparece en el array es: "+numero2);
console.log ("la suma de los dos valores numericos es: "+(numero1 + numero2));
console.log ("la resta de los dos valores numericos es: "+(numero1 - numero2));
console.log ("la multiplicacion de los dos valores numericos es: "+(numero1 * numero2));
console.log ("la division de los dos valores numericos es: "+(numero1 / numero2));
console.log ("El dividendo de los dos valores numericos es: "+(numero1 % numero2));
