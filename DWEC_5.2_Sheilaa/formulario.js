
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
    /*const span1 = document.getElementsById('span_nombre');
    const span2 = document.getElementById("span_apellido");
    const span3 = document.getElementById("span_telefono");*/

    alert("FUNCIONA");
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        contrasena: /^.{4,12}$/,
        textarea: /^\d{50,200}$/
    }


    nombre.addEventListener("keyup", function () {
        if (nombre.value.length <= 0) {
            alert("funciona");

            span1.classList.add("mostrar");
        } else {
            span1.document.classList.remove("mostrar");

        }

    });
    apellido.addEventListener("keyup", function () {
        const nombre2 = nombre.value.toLowerCase();
        const nombre3 = nombre2.charAt(0).toUpperCase() + nombre2.slice(1);
        alert(nombre3);

        if (apellido.value.length <= 0) {
            span2.classList.add("mostrar");

        } else {
            span2.classList.remove("mostrar");
        }
    });
    telefono.addEventListener("keyup", function () {
        if (telefono.value.length <= 6) {
            span3.classList.add("mostrar");
        } else {
            span3.classList.remove("mostrar");

            document.getElementById("nombre").innerHTML = "First Paragraph";
        }
    });

}
