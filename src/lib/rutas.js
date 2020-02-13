import { firstView } from "./views"
import { secondView } from "./registro";
import { thirdView } from "./muro";

//RUTAS DE CADA VISTA
window.addEventListener('hashchange', () =>  {
    if (window.location.hash ==='#start'){
        firstView();
    }
    else if (window.location.hash ==='#registry'){
        secondView();
    }
    else if (window.location.hash==='#publications'){
        thirdView();
    }
});