import { registry, datoUser } from './index.js'
export function registryView() {
    let registro = document.getElementById('root');
    registro.innerHTML = '';
    const desplegaRegistry = `
    <div class="logo-registry">
        <img src='img/logo-weservice.png'>
    </div>
    <form class='form-registry'>
        <div form-field'>
            <label class='letter'> Nombre </label>
            <input type='text' id='nombre' class='input' placeholder='ingresa Nombre'  >
        </div>
        <div form-field'>
            <label class='letter'> Apellido </label>
            <input type='text' id='apellido' class='input' placeholder='ingresa Apellido'  >
        </div>
        <div form-field'>
            <label class='letter'> UserName </label>
            <input type='text' id='nick2' class='input'  placeholder='nombre usuario' >
        </div>
        <div form-field'>
            <label class='letter'> Email </label>
            <input type='text' id='email2' class='input' placeholder='ingresa email' >
        </div>
        <div form-field'>
            <label class='letter'> Contraseña </label>
            <input type='password' id='password2' class='input' placeholder='ingresa contrasena' >
        </div>
        </form>

        

    <button id='enterTheWall'class='btnStart'>Crear Cuenta</button>
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


