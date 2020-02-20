import {closeSesion, savingPost} from './index.js';
import { loginView } from './views.js';
export function publicationsView (){
    let loLograste= document.getElementById('root');
    loLograste.innerHTML='';
    const alfin = `
    <div class='containerPost'>
        <p> Publicaciones</p>
        <textarea id='post' placeholder='ingresar texto'></textarea>
        <div id='deletePost'> </div>
        <button class='btn'  id='toPost'>Publicar</button> 
        <button class='btn' id='closeView'>cerrar sesion</button>   
    </div>
   `
    loLograste.innerHTML=alfin;

    const posteo=document.getElementById('toPost');
    posteo.addEventListener('click',() => {
        const infoPost= document.getElementById('post').value;
        savingPost(infoPost);
        document.getElementById('post').value='';
    });
    const close = document.getElementById('closeView');
    close.addEventListener('click', ()=> {
        closeSesion();
    })
    
}