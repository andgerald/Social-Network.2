import {closeSesion} from './index.js';
import { firstView } from './views.js';
export function thirdView (){
    let loLograste= document.getElementById('root');
    loLograste.innerHTML='';
    const alfin = `
    <p> WENAAAAA!! porfiiiiiiiinnn!!!</p>
    <button id='chaito'>cerrar sesion</button> `
    loLograste.innerHTML=alfin;
    const close = document.getElementById('chaito');
    close.addEventListener('click', ()=> {
        closeSesion();
    })
}
