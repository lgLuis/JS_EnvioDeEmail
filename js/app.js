//VARIABLES
const btnEnviar = document.querySelector('#enviar');
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
    }
}