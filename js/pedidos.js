// -------------------------------------------
//           Variables Globales
// -------------------------------------------


// -------------------------------------------
//           Funciones Globales
// -------------------------------------------

/* Recupero datos en LocalStorage */

console.log("Hola")

/* const datosCarrito = localStorage.getItem('producto')
const productoElegido = JSON.parse(datosCarrito)
 */



function muestroCarrito() {
    console.log(localStorage.getItem('producto'))
    /* '<div id="section-cards">'+
        '<h3>' + productoElegido.nombre + '</h3>' +
        '<img src="' + productos[i].foto + '">' +
        '<p><b>Precio:</b> $' + productos[i].precio + '</p>' +
        '<button class="ver" value="' + [i] + '">VER</button>' +                        
        '<button class="comprar" value="' + [i] + '">COMPRAR</button>' +
        '<button class="favorito" value="' + [i] + '"><i class="fa fa-heart"></i></button>' +                        
'</div>'       */
}


// -------------------------------------------
//               Ejecución
// -------------------------------------------
window.onload = muestroCarrito