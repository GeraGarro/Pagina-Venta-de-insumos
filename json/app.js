const menu= document.querySelector('.boton-hamburgueza');
const navegacion= document.querySelector('.navegacion')
const imagenes = document.querySelectorAll('img');
document.addEventListener('DOMContentLoaded',()=>{
   eventos();
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

imagenes.forEach(imagen=>{
    imagen.src = imagen.dataset.src;
})
