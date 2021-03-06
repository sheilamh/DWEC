//10.El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A 
//partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
//El array de letras es:
//var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
//Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. 
//Con estos datos, elaborar un pequeño script que:


let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
                                                                        //• Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.
let numero = prompt("Introduce tu número de DNI sin la letra");
let letra = prompt("Introduce la letra de tu DNI ");
letra = letra.toUpperCase();
                                                                             //• En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor 
                                                                            //que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
if(numero < 0 || numero > 99999999) {
  alert("El número ingresado no es válido");
}
                                                                                //• Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
else {
  let letraCalculada = letras[numero % 23];
                                                                                 //• Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no 
                                                                                //coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es 
                                                                                //correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI 
                                                                                //son correctos.
  if(letraCalculada != letra) {
    alert("La letra o el número ingresados no son correctos");
  }
  else {
    alert("El número de DNI y la letra son correctos");
  }
}