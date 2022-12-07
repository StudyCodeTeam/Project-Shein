const init = () => {

    const email = document.querySelector('#email')
    const senha = document.querySelector('#senha')
    const enviar = document.querySelector('#enviar')
    const body = document.querySelector('body')
    const modalContainer = document.querySelector('.modal-container')
    const modal = document.querySelector('.modal')
    const x = document.querySelector('.button')

    enviar.addEventListener('click', event =>{

        event.preventDefault();

        const clik = event.target.classList[0];
        
        if(email.value.length <= 9 || senha.value.length <= 6){

            modalContainer.style.display = 'block';
            
            return;
        }
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', senha.value);
        window.location = './index.html'
    })

    email.addEventListener('input', event => {

        const clik = event.target.classList[0]

        if(email.value.length <= 9){
            enviar.setAttribute('disabled', 'disabled');
            enviar.classList.add('desabilitado');
            return;
        }
            
            enviar.removeAttribute('disabled');
            enviar.classList.remove('desabilitado');

    });


    senha.addEventListener('input', event => {

        const clik = event.target.classList[0];

        if(senha.value.length <= 6){

            enviar.setAttribute('disabled', 'disabled');
            enviar.classList.add('desabilitado');
            return;
        }

            enviar.removeAttribute('disabled');
            enviar.classList.remove('desabilitado')

    });


        
        
        modalContainer.addEventListener('click', event => {
        
        const itemclicked = event.target.classList[0];
        const closeModalItems = ['modal-container', 'button'];
        const closeModal = closeModalItems.some(closeModalItems => closeModalItems === itemclicked);

        if (closeModal){

            modalContainer.style.display = 'none';
            // console.log(`o objeto ${itemclicked} foi precionado`);
        }
    });

};


window.onload = init