import {entrar, googleRegistration} from './index.js';
import{thirdView} from './muro.js';
export function firstView(){
    
    let inicio = document.getElementById('root');
    inicio.innerHTML=''
    const desplegar= 
    `<img src='img/time-service1.jpg' class='topImg'>
    <img src='img/logo-weservice.png' class='logo'>
    <div class='containerStart'>
        <div class='start'>
           <p class='letter'> Email<input type='text' placeholder='ingresa email' class='input' id='email'></p>
           <p class='letter'>Contraseña <input type='text' placeholder='igresa contraseña' class='input' id='password'></p>
        </div>
    </div>
    <button id='enter' class='btnStart'>Ingresar</button>
    <button id='createAccount'class='btnStart'>Crear Cuenta</button>
    <button id='createGoogle'class='btnStart'>Ingresa con Google</button>`
    
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
    })   
    const btnGoogle = document.getElementById('createGoogle');
    btnGoogle.addEventListener('click',()=>{
     console.log('yeeess')
     googleRegistration();
    })
}
