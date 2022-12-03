const menu= document.querySelector('.boton-hamburgueza');
const navegacion= document.querySelector('.navegacion')
const imagenes = document.querySelectorAll('img');
const btnTodos=document.querySelector('.Todos');

const btnDescartables=document.querySelector('.descartables');
const btnProtesis=document.querySelector('.protesis');
const btnCirugia=document.querySelector('.cirugia');
const btnEndodoncia=document.querySelector('.endodoncia');
const btnAnestesia=document.querySelector('.anestesia');
const contenedorProductos =document.querySelector ('.productos');

document.addEventListener('DOMContentLoaded',()=>{
   eventos();
   productos();
});

const eventos = () =>{
    menu.addEventListener('click',abriMenu);
}


const abriMenu = () =>{
 navegacion.classList.remove('ocultar');
    botonCerrar();
}


const botonCerrar = () =>{
    const btCerrar= document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body= document.querySelector('body');

    if(document.querySelectorAll('.pantalla-completa').length> 0)return;
    body.appendChild(overlay);
    btCerrar.textContent = 'X';
    btCerrar.classList.add('boton-cerrar');
    console.log(navegacion.children);
    
    /*while(navegacion.children(4)){
        navegacion.removeChild(navegacion.children(4));
    }*/
    navegacion.appendChild(btCerrar);
    cerrarMenu(btCerrar,overlay);
}




const cerrarMenu = (boton,overlay) =>{
boton.addEventListener('click',()=>{
    navegacion.classList.add('ocultar');
    overlay.remove();
    boton.remove();
});

overlay.onclick = function(){
    overlay.remove();
    navegacion.classList.add('ocultar');
    boton.remove();
}
}
// A medida que se deja de observar la imagen se desaparezcan de la page

const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen =entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    })
});

// A medida que recorres la pagina se vayan agregando las imagenes a la page

imagenes.forEach(imagen=>{
    
    observer.observe(imagen);
})

// funcion para filtrar las categorias

const productos = () => {
    let productosArreglo =[];
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto=>productosArreglo=[...productosArreglo,producto])
    
    const arrDescartables = productosArreglo.filter(descartables=> descartables.getAttribute('data-producto')==='descartable');

    
    const arrProtesis = productosArreglo.filter(protesis=> protesis.getAttribute('data-producto')==='protesis');

    const arrCirugias = productosArreglo.filter(cirugia=> cirugia.getAttribute('data-producto')==='cirugia');

    const arrEndodoncias = productosArreglo.filter(endodoncia=> endodoncia.getAttribute('data-producto')==='endodoncia');

    const arrAnestesias = productosArreglo.filter(anestesia=> anestesia.getAttribute('data-producto')==='anestesia');
   
    mostrarProductos(arrDescartables,arrProtesis,arrCirugias,arrEndodoncias,arrAnestesias,productosArreglo);

}

const mostrarProductos = (arrDescartables,arrProtesis,arrCirugias,arrEndodoncias,arrAnestesias, todos)=> {
    btnDescartables.addEventListener('click',()=>{
        limpiarPagina(contenedorProductos);
        arrDescartables.forEach(descartables => contenedorProductos.appendChild(descartables));
    });
    
    btnCirugia.addEventListener('click',()=>{
        limpiarPagina(contenedorProductos);
        arrCirugias.forEach(cirugia => contenedorProductos.appendChild(cirugia));
    });

    

   btnEndodoncia.addEventListener('click',()=>{
        limpiarPagina(contenedorProductos);
        arrEndodoncias.forEach(endodoncia => contenedorProductos.appendChild(endodoncia));
    });

    btnProtesis.addEventListener('click',()=>{
        limpiarPagina(contenedorProductos);
        arrProtesis.forEach(protesis => contenedorProductos.appendChild(protesis));
    });

    btnAnestesia.addEventListener('click',()=>{
        limpiarPagina(contenedorProductos);
        arrAnestesias.forEach(anestesia => contenedorProductos.appendChild(anestesia));
    });

   btnTodos.addEventListener('click',()=>{
    limpiarPagina(contenedorProductos);
    todos.forEach(todo=>contenedorProductos.appendChild(todo));
   })

    



}



const limpiarPagina = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    
    }
}

