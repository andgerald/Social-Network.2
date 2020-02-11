export function secondView (){
    let registro= document.getElementById('root');
    const desplegaRegistry=`
    <div class='containerRegistry'>
        <div class 'registry'>
            <p class='letter'> Nombre <input type='text' placeholder='ingresa Nombre' class='input' id='name'></p>
            <p class='letter'>Apellido <input type='text' placeholder='ingresa email' class='input' id='lastName'></p>
            <p class='letter'> Nick<input type='text' placeholder='ingresa email' class='input' id='Nick'></p>
            <p class='letter'> Email<input type='text' placeholder='ingresa email' class='input' id='email2'></p>
            <p class='letter'> Contraseña<input type='text' placeholder='ingresa email' class='input' id='password'></p>
        </div>
    </div>
    <button id='enterTheWall'class='btnStart'>Crear Cuenta</button>
    `
    registro.innerHTML= desplegaRegistry;
}
