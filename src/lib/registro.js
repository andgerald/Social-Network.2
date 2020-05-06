import { registry, datoUser } from './index.js'
export function registryView() {
    let registro = document.getElementById('root');
    registro.innerHTML = '';
    const desplegaRegistry = `
    <div class="logo-registry">
       <a href         window.location.hash = 'start'
       > <img src='img/logo-weservice.png' ></a>
    </div>
    <form class='form-registry'>
        <div class='form-field'>
            <label class='letter'> Nombre </label>
            <input type='text' id='nombre' class='input' placeholder='ingresa Nombre'  >
        </div>
        <div class='form-field'>
            <label class='letter'> Apellido </label>
            <input type='text' id='apellido' class='input' placeholder='ingresa Apellido'  >
        </div>
        <div class='form-field'>
            <label class='letter'> UserName </label>
            <input type='text' id='nick2' class='input'  placeholder='nombre usuario' >
        </div>
        <div class='form-field'>
            <label class='letter'> Email </label>
            <input type='text' id='email2' class='input' placeholder='ingresa email' >
        </div>
        <div class='form-field'>
            <label class='letter'> Contraseña </label>
            <input type='password' id='password2' class='input' placeholder='ingresa contrasena' >
        </div>
    </form>
    <div class="buttons">
        <button id='enterTheWall' class='btnStart'>Crear Cuenta</button>
    </div>
    `
    registro.innerHTML = desplegaRegistry;
    const btnEnterWall = document.getElementById('enterTheWall');
    btnEnterWall.addEventListener('click', () => {
        const name = document.getElementById('nombre').value;
        const lastName = document.getElementById('apellido').value;
        const nusuario = document.getElementById('nick2').value;
        const correoRegistry = document.getElementById('email2').value;
        const claveRegistry = document.getElementById('password2').value;
        registry(correoRegistry, claveRegistry);
        datoUser(name, lastName, nusuario, correoRegistry, claveRegistry)
        console.log(name)
        console.log(lastName)
        console.log(nusuario)
        console.log(correoRegistry)
        console.log(claveRegistry)
        window.location.hash = 'start'
    });
}


