window.onload = function () {
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

    nombre.addEventListener("keyup", function () {
        if (nombre.value.length <= 0) {
            span1.classList.add("mostrar");
        } else {
            span1.classList.remove("mostrar");
        }
    });
    apellido.addEventListener("keyup", function () {
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
        }
    });

}
