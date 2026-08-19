/* seleccionar los elementos */

const cantidad = document.querySelector("#cantidad");
const formato = document.querySelector ("#formato");
const botonGenerar = document.querySelector (".generar");
const generador = document.querySelector(".generador");

/*funciones que necesitamos:
funcion generarHsl();
funcion generarHexRgba();
funcion generarPaleta();*/

/* Genera el color Hex */
function generarHex(){
    const caracteres = "0123456789ABCDEF";

    let color = "#";

    for(let i=0; i < 6; i++){

        const nroAleatorio = Math.floor(Math.random() * 16);
        color += caracteres[nroAleatorio];
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

        if(formatoSeleccionado === "hex"){
            color = generarHex();
        }else{
            color = generarRgba();
        }
        
        const cuadrado = document.createElement("div"); /* se crea el cuadro */

        cuadrado.style.backgroundColor = color; /*le pone color al cuadrado */

        cuadrado.classList.add("color"); /* se le agrega clase a a css */

        cuadrado.textContent = color; /*mostrar el codigo */

        generador.appendChild(cuadrado); /* se le agrega cuadrado al generador */
    }
}       

botonGenerar.addEventListener("click", generarPaleta); /*boton generar */
