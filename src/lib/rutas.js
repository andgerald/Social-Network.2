import { loginView } from "./views";
import { registryView } from "./registro";
import { publicationsView } from "./muro";

//RUTAS DE CADA VISTA
window.addEventListener('hashchange', () =>  {
    if (window.location.hash ==='#start'){
        loginView();
    }
    else if (window.location.hash ==='#registry'){
        registryView();
    }
    else if (window.location.hash==='#publications'){
        publicationsView();
    }
});