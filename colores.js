/* seleccionar los elementos */

const cantidad = document.lastElementChild("cantidad");
const formato = document.lastElementChild ("formato");
const botonGenerar = document.lastElementChild (".generar");
const generador = document.lastElementChild(".gererador");

/*funciones que necesitamos:
funcion generarHex();
funcion generarRgba();
funcion generarPaleta();*/

/* Genera el color Hex */
function generarHex(){
    const caracteres = "0123456789ABCDEF";

    let color = "#";

    for(let i=0; i < 6; i++){

        const nroAleatorio = Math.floor(Math.random()* 16);
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