import {thirdView} from './muro.js'
import { firstView } from './views.js';
// aqui exportaras las funciones que necesites 
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
// FUNCION PARA ENTRAR A LA PAGINA
export const entrar = (correo , clave) =>{
  firebase.auth().signInWithEmailAndPassword(correo , clave)
  .then(()=>{
    window.location.hash='#/publications'
    })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode)
    var errorMessage = error.message;
    console.log(errorMessage)
    // ...
  });
}
export function observador () {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      thirdView();  
      console.log('activooo');
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      window.location.hash='start'
      console.log('inaactivo');
      // User is signed out.
      // ...
    }
  });
}
observador();

// FUNCION DEL REGISTRO DE USUARIOS
export const registry = (correoRegistry, claveRegistry) => {
  firebase.auth().createUserWithEmailAndPassword( correoRegistry , claveRegistry)
  .then(function(){
    check();
    window.location.hash='#start'
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode)
    var errorMessage = error.message;
    console.log(errorMessage)
    // ...  
  });
};
// FUNCION PARA VERIFICACION DE EMAIL
function check (){
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
    // Email sent.
    console.log('enviando correo');
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}

// INGRESO CON GOOGLE
export const googleRegistration= ()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
   var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

//CERRAR SESION
export function closeSesion (){
  firebase.auth().signOut()
  .then(function(){
    console.log('saliendo');
    window.location.hash='start';
    firstView();

  })
  .catch(function(error){
    console.log(error);
  })
  
}