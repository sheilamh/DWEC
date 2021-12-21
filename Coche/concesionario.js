class Marcas {
    constructor(marca_nombre) {
        this.marca_nombre = marca_nombre;
        this.modelos = [];
    };

    añadirModelo(modelo) {
        //Se comprobará si el modelo existe o no. Si este no existe, lo añadirá
        if (!this.modelos.includes(modelo)) {
            this.modelos.push(modelo);
        } else {
            estado_section.innerHTML = (modelo + "está dentro");
        }
    };

    eliminarModelo(modelo) {
        const indexMdelo = this.modelos.indexOf(modelo);
        if (indexMdelo != -1) {
            this.modelos.splice(modelo);
            estado_section.innerHTML = (modelo + "se ha borrado");
        } else {
            estado_section.innerHTML = (modelo + "no se ha borrado");
        }
    };

    getModelo() {
        return this.modelos;
        //Devolverá todos los modelos que estén en el array
    };

};

class listasMarcas {
    constructor() {
        this.MarcaArray = [];
    };

    comprobarMarcas(marca_nombre) {
        for (let i = 0; i < this.MarcaArray.length; i++) {
            if (this.MarcaArray[i].marca_nombre==marca_nombre.marca_nombre) {
                return true
            }
        }
        return false;
        // let state = false;
        // let ret_index = 0;
        // this.MarcaArray.forEach(function (element, index) {
        //     const properties = Object.values(element);
        //     if (properties[0] == marca_nombre) {
        //         state = true;
        //         ret_index = index;
        //     }
        // });
    };

    addMarca(marca_nombre) {
        // Se comprobará si el modelo existe o no. Si este no existe, lo añadirá
        // if (this.comprobarMarcas(marca_nombre)[0]) {
            estado_section.innerHTML = ("Error: " + marca_nombre + "ya existe en nuestro catálogo.");
        // } else {
            this.MarcaArray.push(marca_nombre);
            estado_section.innerHTML = (marca_nombre) + ("se añadió correctamente");
        // }
    };

    borrarMarca(marca_nombre) {
        if (this.MarcaArray.includes(marca_nombre)) {
            this.MarcaArray.splice(marca_nombre);
        };
    };

    listaMarca() {
        return this.marca_nombre;
    };
};

class Estado {
    constructor() {

    };
};

window.onload = function () {

    //Aquí se declararán todos los botones, eventos y funciones auxiliares para esos eventos

    let focused_man = undefined;
    let focused_model = undefined;

    const text_manufacturer = document.getElementById("text_manufacturer");

    const man_section = document.getElementById("manufactures_section");
    const add_man_boton = document.getElementById("add_manufacturer_boton");
    const del_man_boton = document.getElementById("del_manufacturer_boton");

    const text_model = document.getElementById("add_model_boton");
    const models_section = document.getElementById("models_section");
    const add_mod_boton = document.getElementById("add_model_boton");
    const del_mod_boton = document.getElementById("del_model_boton");

    const estado_section = document.getElementById("estado_section");
    const logger_section = document.getElementById("logger_section");

    const newPool = new listasMarcas();

    function añadirModelo() {
        if (focused_man == undefined) {
            añadirModelo.innerHTML = ("Debes seleccionar una marca.")
        } else {
            const manufacturer = newPool.getModelo(focused_man.innerHTML);
            manufacturer.añadirModelo(text_model.value);
            updateModels();
        }
    };

    function updateMan() {
        man_section.innerHTML = "";
        const list = newPool.listaMarca();
        list.forEach(function (element) {
            const new_li = document.createElement("li");
            new_li.setAttribute("class", "li_man");
            new_li.addEventListener("click", focusMan);
            man_section.appendChild(new_li);
            const attr = Object.values(element);
            new_li.innerHTML = attr[0];
        });
    };

    function updateModels() {
        models_section.innerHTML = "";
        const man_selected = newPool.getManufacturer(focused_man.innerHTML);
        const models_list = man_selected.getModelo();
        models_list.forEach(function (element) {
            const new_li = document.createElement("li");
            new_li.setAttribute("class", "li_model");
            new_li.innerHTML = element;
            new_li.addEventListener("click", focusModel());
            models_section.appendChild(new_li);

        })

    };

    function focusMan() {
        if (focused_man != undefined) {
            focused_man.style.backgroundColor = "";
        } else {
            focused_man = this;
            focused_man.style.backgroundColor = "grey";
            updateModels(this.innerHTML);
        }
    };

    function focusModels() {
        if (focused_model != undefined) {
            focused_model.style.backgroundColor = "";
        } else {
            focused_model = this;
            focused_model.style.backgroundColor = "grey";
        }
    };

    function eliminarModelo() {
        const manufacturer = newPool.getManufacturer(focused_man.innerHTML);
        manufacturer.eliminarModelo(text_model.value);
        updateModels();
    };

    add_man_boton.addEventListener("click", function () { newPool.addMarca(text_manufacturer.value) });
    del_man_boton.addEventListener("click", function () { newPool.borrarMarca(text_manufacturer.value) });

    add_man_boton.addEventListener("click", añadirModelo);
    del_man_boton.addEventListener("click", eliminarModelo);

};


