/* seleccionar los elementos */

const cantidad = document.querySelector("#cantidad");
const formato = document.querySelector ("#formato");
const botonGenerar = document.querySelector (".generar");
const botonGuardar = document.querySelector(".guardar");
const generador = document.querySelector(".generador");

/*funciones que necesitamos:
funcion generarHsl();
funtion generarHex();
funcion generarRgba();
funcion generarPaleta();
funcion guardarColores();
*/


/* Genera el color Hsl */
function generarHsl(){
    
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);

    return `hsl(${h}, ${s}%, ${l}%)`;
}

/*funtion generarHex(); */
function generarHex(){
    
    const caracteres = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += caracteres[Math.floor(Math.random() * 16)];
    }

    return color;
}

/* Funcion de color rgba */
function generarRgba(){

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 1;

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/* funcion de generar paletas */
function generarPaleta(){
    
    const cantidadColores = Number(cantidad.value); /* da la eleccion de 6,8,9 colores*/
    const formatoSeleccionado = formato.value; /* formato hex-rgba */

    generador.innerHTML = "" ; /* limpia la paleta de colores anterior */

    for(let i = 0; i < cantidadColores; i++){ /* GENERA LOS COLORES */
        
        let color;

        if(formatoSeleccionado === "hsl"){               
            color = generarHsl();
        }else{
            if(formatoSeleccionado === "hex"){
                color = generarHex();               
            }else{
                color = generarRgba();
            }
        }
        
        const cuadrado = document.createElement("div"); /* se crea el cuadro */

        cuadrado.style.backgroundColor = color; /*le pone color al cuadrado */

        cuadrado.classList.add("color"); /* se le agrega clase a a css */

        cuadrado.textContent = color; /*mostrar el codigo */

        generador.appendChild(cuadrado); /* se le agrega cuadrado al generador */
    }
}       

botonGenerar.addEventListener("click", generarPaleta); /*boton generar */

function guardarColores(){

    
}