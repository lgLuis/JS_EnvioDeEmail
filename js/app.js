//VARIABLES
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');



//VARIABLES PARA CAMPOS
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListeners();
function eventListeners() {
    //CUANDO LA APP ARRANCA
    document.addEventListener('DOMContentLoader', iniciarApp);
    //CAMPOS DEL FORMULARIO
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)

}

//FUNCIONES
function iniciarApp() {
    // console.log('Iniciando');
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

}


// VALIDAR EL FORMULARIO
function validarFormulario(e){
    // console.log('validando-----')
    if(e.target.value.length > 0){
        console.log('Oki doki')
    } else{
        e.target.classList.add('border', 'border-red-500');
        mostrarError();
    }
}

function mostrarError(){
    const mensajeError = document.createElement('p');
    mensajeError.textContent='Todos los campos son obligatorios';
    mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'uppercase', 'text-center', 'mt-2', 'error');

    const errores = document.querySelectorAll('.error');
    if(errores.length===0){
        formulario.appendChild(mensajeError);
    }
    
    
}