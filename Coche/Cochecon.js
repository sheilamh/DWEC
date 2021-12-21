class Marca{

    constructor(marca){
        this.marca = marca;
        this.modelos = [];
    }

    addModelo(modelo){
                                                                                //con includes nos dearrayMarcasolarrayMarcasera true si existe el elemento en el array y false si no existe
        let existe = this.modelos.includes(modelo);
        if (!existe){
            this.modelos.push(modelo);
            //estado_section.innerHTML = ("Se ha añadido");
            console.log("Se añadio el modelo: "+ modelo);
        }else{
            console.log ("El modelo "+modelo+" ya existe");
        }
    }

    deleteModelo(modelo){
                                                                                    //indexOf me dearrayMarcasolarrayMarcasera la posicion en la que se encuentra el elemento 
        let pos = this.modelos.indexOf(modelo);
        if(pos != -1){                                                              //con splice eliminamos el modelo seleccionado
            this.modelos.splice(pos,1);
            console.log( "EL modelo se ha eliminado");

        }else
        console.log ("El modelo no existe");
                                                                                    // con splice eleminaremos el elemento del array que hemos seleccionado

    }

    mostrarModelo(){
        return this.modelos;
    }
}



class listaMarcas{
    constructor(){
        this.listamarca = [];
    }
    comprobarMarca(marca){
        let estado = false;
        let dearrayMarcas_indice = 0;
        this.listamarca.forEach (function (element, index){                 //El método Object.arrayMarcasalues() dearrayMarcasuelarrayMarcase un array con los arrayMarcasalores correspondientes a las propiedades enumerables de un objeto
            const propiedades = Object.arrayMarcasalues (element);
                                                                            //la marca como es el primer elemento del contructor coche se guardaria el la posicion 0
            if(propiedades[0] == marca) {
                estado = true;
                dearrayMarcas_indice = index;
            }
        });
        return [estado, dearrayMarcas_indice];


    }
    addMarca(marca){
        let indice = this.comprobarMarca(marca)[0];
                                                                        //Si no existe la marca la añadimos
        if (indice == false){                                           
                                                                       //Creamos el objeto coche
            const anadir = new Coche(marca);
            this.listamarca.push(anadir);
            console.log("Se añadio la marca: "+ marca);
        }else{
            console.log ("La marca "+marca+" ya existe");
        }
    }
    deleteMarca(marca){
        let indice = this.comprobarMarca(marca);
                                                           //Si existe eliminamos la marca seleccionada
        if (indice[0]){                                           

            this.listamarca.splice(indice[1],1);
            console.log("Se elimino la marca: "+ marca);
        }else{                                              //Si no existe mandar un mensaje
            console.log ("La marca "+marca+" no existe");
        }
    }
    mostrarMarca(){
        this.listamarca.forEach (function (element ){                 //El método Object.arrayMarcasalues() dearrayMarcasuelarrayMarcase un array con los arrayMarcasalores correspondientes a las propiedades enumerables de un objeto
            const propiedades = Object.arrayMarcasalues (element);
            console.log (propiedades);
        });
    }
}

                                                                                        //Funciones Principales
                                                                                        //En la siguiente función nos aseguraremos atraves de window.onload que la página se ha cargado por completo antes de ejecutar el javascript
window.onload = function() {

                                                                                     // creo las variables de los focos que mas adelante nos guiara para saber si ha seleccionado alguna opcion
    let foco_marca= undefined;
    let foco_modelo= undefined;
                                                                                        // creo las siguientes constantes con los elementos con los que vamos a interactuar, para despues poder acceder a los valores que guardan
    const mostrar_marca = document.getElementById("marca");
    const mostrar_modelo = document.getElementById("modelo");
    const texto_marca = document.getElementById("texto_marca");
    const anadir_marca = document.getElementById("anadir_marca");
    const eliminar_marca = document.getElementById("eliminar_marca");
    const texto_modelo = document.getElementById("texto_modelo");
    const anadir_modelo = document.getElementById("anadir_modelo");
    const eliminar_modelo = document.getElementById("eliminar_modelo");

    const NuevoArray = new Coche();

    function actualizarMarca(){

        mostrar_marca.innerHTML = "";
        const lista = NuevoArray.listaMarcas();
        lista.forEach(function(element){
            const nueva_lista = document.createElement("li");
            nueva_lista.addEventListener("click", foco_marca);
            mostrar_marca.appendChild(nueva_lista);
            const attr = Object.values(element);
            nueva_lista.innerHTML = attr[0];
        });      
    }
   function actualizarModelo (){
        mostrar_modelo.innerHTML = "";
        const marca_seleccion = NuevoArray.mostrarMarca(foco_marca.innerHTML);
        const lista_modelos = marca_seleccion.mostrarModelo();
        lista_modelos.forEach(function(element){
            const new_li = document.createElement("li");
            new_li.setAttribute("class","li_model");
            new_li.innerHTML = element;
            new_li.addEventListener("click", foco_modelo);
            mostrar_modelo.appendChild(new_li);
        });
    }

    function dellModelo(){
        const listaMarc = NuevoArray.mostrarMarca(foco_marca.innerHTML);
        listaMarc.eliminar_marca(texto_modelo.values);
        actualizarModelo();
    }
    
    function adModelo(){
        
    }

    anadir_marca.addEventListener("click", function(){NuevoArray.addMarca(mostrar_marca.values);actualizarMarca()});
    eliminar_marca.addEventListener("click", function(){NuevoArray.deleteMarca(mostrar_marca.values);actualizarMarca()});

    anadir_modelo.addEventListener("click", adModelo);
    eliminar_modelo.addEventListener("click", dellModelo);


}
//añadir oyente evento a los botones add listen, evento click
// evento : click
//funcion add model, remove model
//elemento.addEventdisener("evento",funcion, false)
