const menu= document.querySelector('.boton-hamburgueza');
const navegacion= document.querySelector('.navegacion')

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
    navegacion.appendChild(btCerrar);
    cerrarMenu(btCerrar,overlay);
}


const cerrarMenu = (boton,overlay) =>{
boton.addEventListener('click',()=>{
    navegacion.classList.add('ocultar');
    overlay.remove();
});

overlay.onclick = function(){
    overlay.remove();
    navegacion.classList.add('ocultar');
}
}