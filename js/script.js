// -------------------------------------------
//           Variables Globales
// -------------------------------------------


// -------------------------------------------
//           Funciones Globales
// -------------------------------------------

/* Dibujo las tarjetas de los menú en el Index */
function cargarProductos() {
    
    var cards = ''
    
    /* Cargo productos desde archivo */
    if(productos.length) {
        for(var i=0; i<productos.length; i++) {            
            cards += '<div id="section-cards">'+
                        '<h3>' + productos[i].nombre + '</h3>' +
                        '<img src="' + productos[i].foto + '">' +
                        '<p><b>Precio:</b> $' + productos[i].precio + '</p>' +
                        '<button class="ver" value="' + productos[i].id + '">VER</button>' +                        
                        '<button class="comprar" value="' + productos[i].id + '">COMPRAR</button>' +
                        '<button class="favorito" value="' + productos[i].id + '"><i class="fa fa-heart"></i></button>' +                        
                    '</div>'                    
        }
    }
    else cards += '<h2 class="msg-error">No se encontraron productos para mostrar</h2>'
    
    document.querySelector('section').innerHTML = cards
}

/* Dibujo las reseñas Cuando presiono el botón VER */
function cargarResenias() {
    console.log('cargarResenias')
}

/* Agrego a Favoritos cuando presiono el corazón */
function agregarAFavoritos() {
    console.log('agregarAFavoritos')
}

/* Agrego al Carrito cuando presiono el botón comprar */
function agregarAlCarrito() {
    console.log('agregarAlCarrito')    
    /* Con el ID de Producto debo recuperar los datos del producto seleccionado */    
    const productoElegido = productos.find((numero) => numero.id == idProducto)

    const carrito = []
    productoElegido.cantidad =+ 1

    /* Elijo los campos que quiero mostrar */
    const {id, descripcion, foto, precio, cantidad} = productoElegido

    const nuevoProductoElegido = {
        id: id,
        descripcion: descripcion,
        foto: foto,
        precio: precio,
        cantidad: cantidad
    }
    
    carrito.push(nuevoProductoElegido)    

    /*  Guardo los datos en LocalStorage */
    localStorage.setItem('producto', JSON.stringify(carrito))

    /* Remover de LocalStorage */
    /* localStorage.removeItem('producto') */
    /* localStorage.clear() */


    /* window.open('./pedidos.html', '_blank') */
}

/* Escucho los botones */
function escucharBotones() {

    const botones = document.querySelectorAll('button')
    
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', () => {
            /* console.log(botones[i].className)  */
            idProducto = botones[i].value
            console.log(idProducto)
            switch (botones[i].className) {
                case 'ver':                   
                    guardarLocalStorage(idProducto) 
                    confirm('¿Desea ver las reseñas?') ? cargarResenias(idProducto) : null
                    /* cargarResenias(idProducto) */
                    break
                case 'comprar':                    
                    agregarAlCarrito(idProducto)                    
                    /* confirm('¿Desea agregar al carrito?') ? guardarLocalStorage(idProducto) : null */
                    
                    break
                case 'favorito':
                    guardarLocalStorage(idProducto)
                    confirm('¿Desea agregar a Favoritos?') ? agregarAFavoritos(idProducto) : null
                    /* agregarAFavoritos(idProducto) */
                    break
            }
        })
    }

    
}


function startInicio() {
    cargarProductos()
    escucharBotones()
}


// -------------------------------------------
//               Ejecución
// -------------------------------------------
window.onload = startInicio

