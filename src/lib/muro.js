import {closeSesion, savingPost} from './index.js';
export function publicationsView (){
    let loLograste= document.getElementById('root');
    loLograste.innerHTML='';
    const alfin = `
    <p> WENAAAAA!! porfiiiiiiiinnn!!!</p>
    <textarea id='post' placeholder='ingresar texto'></textarea>
    <button id='toPost'>Publicar</button> 
    <button id='chaito'>cerrar sesion</button>      
    <div id='deletePost'> </div>`
    loLograste.innerHTML=alfin;

    const posteo=document.getElementById('toPost');
    posteo.addEventListener('click',() => {
        const infoPost= document.getElementById('post').value;
        savingPost(infoPost);
        document.getElementById('post').value='';
    });
    const close = document.getElementById('chaito');
    close.addEventListener('click', ()=> {
        closeSesion();
    })
}