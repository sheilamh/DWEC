//accedemos a los inputs de nuestro formulario, guardandolo en un arreglo
const inputs = document.querySelectorAll('#formulario input');

window.onload = function () {
    alert("DDunciona");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");
    const constrasena = document.getElementById("constrasena");
    const nacimiento = document.getElementById("nacimiento");
    const nacionalidad = document.getElementsByName("nacionalidad");
    const sexo = document.getElementsByName("sexo");
    const boton = document.getElementById("boton");
    const span1 = document.getElementById("span_nombre");
    const span2 = document.getElementById("span_apellido");
    const span3 = document.getElementById("span_telefono");
    const imagen = document.getElementById("imagen");
    

    alert("FUNCIONA");
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, //letras y espacios con acentos, no mas de 30 caracteres
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,100}$/, //letras y espacios con acentos, no mas de 100 caracteres
        telefono: /^\d{6,14}$/, // de 6 a 14 caracteres numericos
        contrasena: /^.{4,12}$/, // de 4 a 12 caracteres
        textarea: /^[a-zA-ZÀ-ÿ\s]{1,100}$/ //de 50 a 200 caracteres, letras y espacion con acentos. 
    }

    const Validacion = (e) => {
        switch (e.target.name) {
            case "usuario":
                
            
            break;
            case "nombre":
                
            
            break;
            case "password":
                
            
            break;
            case "password2":
                
            
            break;
            case "correo":
                

            break;
            case "telefono":


            break;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('blur', Validacion);
    });

    nombre.addEventListener("blur", function () {
        /*compruebo que la referencia que le pase a traves de las expreciones se cumple*/
        alert (expresiones.nombre.test(nombre.value));
        if (nombre.value.length <= 0) {
            span1.classList.add("mostrar");
            imagen.classList.add("mostrar");
        } else {
            span1.classList.remove("mostrar");

        }

    });
    apellido.addEventListener("blur", function () {
        const nombre2 = nombre.value.toLowerCase();
        const nombre3 = nombre2.charAt(0).toUpperCase() + nombre2.slice(1);
        /*alert(nombre3);*/

        if (apellido.value.length <= 0) {
            span2.classList.add("mostrar");

        } else {
            span2.classList.remove("mostrar");
        }
    });
    telefono.addEventListener("blur", function () {
        if (telefono.value.length <= 6) {
            span3.classList.add("mostrar");
        } else {
            span3.classList.remove("mostrar");
            document.getElementById("nombre").innerHTML = "First Paragraph";
        }
    });

}
