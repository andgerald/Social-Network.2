import {registry} from './index.js'
export function secondView (){
    let registro= document.getElementById('root');
    const desplegaRegistry=`
    <div class='containerRegistry'>
        <div class 'registry'>
            <p class='letter'> Nombre <input type='text' placeholder='ingresa Nombre' class='input' id='nombre'></p>
            <p class='letter'> Apellido <input type='text' placeholder='ingresa Apellido' class='input' id='apellido'></p>
            <p class='letter'> UserName <input type='text' placeholder='nombre usuario' class='input' id='nick2'></p>
            <p class='letter'> Email <input type='text' placeholder='ingresa email' class='input' id='email2'></p>
            <p class='letter'> Contraseña <input type='text' placeholder='ingresa contrasena' class='input' id='password2'></p>
        </div>
    </div>
    <button id='enterTheWall'class='btnStart'>Crear Cuenta</button>
    `
    registro.innerHTML= desplegaRegistry;
    const btnEnterWall = document.getElementById('enterTheWall');
    btnEnterWall.addEventListener('click', ()=> {    
        const name = document.getElementById('nombre').value;
        const lastName =document.getElementById('apellido').value;
        const nusuario= document.getElementById('nick2').value;
        const correoRegistry= document.getElementById('email2').value;
        const claveRegistry = document.getElementById('password2').value;
        registry(correoRegistry, claveRegistry)
        console.log(name)
        console.log(lastName)
        console.log(nusuario)
        console.log(correoRegistry)
        console.log(claveRegistry)
        thridView();
    });
}
