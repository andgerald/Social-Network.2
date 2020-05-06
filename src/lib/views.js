    import {entrar, googleRegistration} from './index.js';
    import { registryView } from './registro.js';
    export function loginView(){
        let inicio = document.getElementById('root');
        inicio.innerHTML=''
        const desplegar= 
        `<img src='img/time-service1.jpg' class='topImg'>
        <div class="container-logo">
            <img src='img/logo-weservice.png' class='logo'>
        </div>
        <form class='form'>
            <div class='form-field'>
                <label class='letter'> Email</label>
                <input type='text' placeholder='ingresa email' class='input' id='email'>
            </div>  
            <div class='form-field'>
                <label class='letter'>Contraseña </label>
                <input type='password' placeholder='ingresa contraseña' class='input' id='password'>
            </div>
        </form>
        <div class="buttons">
            <button id='enter' class='btnStart'>Ingresar</button>
            <button id='createAccount'class='btnStart'>Crear Cuenta</button>
            <button id='createGoogle'class='btnStart'>Ingresa con Google</button>
        </div>`
        
        inicio.innerHTML=desplegar;
        const btnEnter = document.getElementById('enter');
        btnEnter.addEventListener('click', ()=> {
            const correo=document.getElementById('email').value;
            const clave= document.getElementById('password').value;
            entrar(correo, clave);    
            console.log(clave)
            console.log(correo)
        });    
        const btnCreateAccount=document.getElementById('createAccount');
        btnCreateAccount.addEventListener('click',()=> {
            window.location.hash='registry';
            registryView();
        })   
        const btnGoogle = document.getElementById('createGoogle');
        btnGoogle.addEventListener('click',()=>{
        console.log('yeeess')
        googleRegistration();
        })
    }
