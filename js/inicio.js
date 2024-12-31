// -------------------------------------------
//           Variables Globales
// -------------------------------------------


// -------------------------------------------
//           Funciones Globales
// -------------------------------------------
function representarTarjetas() {

    var cards = ''

    if(productos.length) {
        for(var i=0; i<productos.length; i++) {
            cards += '<section>'+
                        '<h3>' + productos[i].nombre + '</h3>' +
                        '<img src="' + productos[i].foto + '">' +
                        '<p><b>Precio:</b> $' + productos[i].precio + '</p>' +
                        '<button>VER</button>' +
                        '<button>COMPRAR</button>' +
                        '<button class="btn"><i class="fa fa-heart"></i></button>' +
                        '<a href="#">Llevar</a>'+                   
                    '</section>'
                    
        }
    }
    else cards += '<h2 class="msg-error">No se encontraron productos para mostrar</h2>'

    document.querySelector('.section-cards-container').innerHTML = cards 
}

function startInicio() {   

    representarTarjetas()
}