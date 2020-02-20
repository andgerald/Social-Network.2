import {publicationsView} from './muro.js'
import {loginView } from './views.js';
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
      publicationsView();
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
      loginView();
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
    closeSesion();
    window.location.hash='#start'
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode)
    var errorMessage = error.message;
    alert('Verifica tu mail')
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
    loginView();

  })
  .catch(function(error){
    console.log(error);
  })
  
}

//AGREGAR DATOS A FIREBASE
var  dataBase= firebase.firestore();
export function datoUser(name,lastName,nusuario,correoRegistry,claveRegistry) {
  dataBase.collection("infoUser").add({
    nameUser: name,
    last: lastName,
    userName: nusuario,
    email:correoRegistry,
    clave:claveRegistry,
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
}

//POST FIREBASE
export function savingPost(infoPost) {
  dataBase.collection("Posteos").add({
    correo: firebase.auth().currentUser.uid,
    posteando:infoPost,
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
}

// VER COMENTARIOS
const printPost=document.getElementById('deletePost');
dataBase.collection("Posteos").onSnapshot((querySnapshot) => {
  printPost.innerHTML='';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().posteando}`);
    printPost.innerHTML+=`
    <div class=containerPost>
      <div class='cajas' id='postViews-${doc.id}'>
       ${doc.data().posteando}
      </div>
      <button class='btn' id='delete-${doc.id}'>Eliminar</button> 
      <button class='btn'  id='edit-${doc.id}','${doc.data().posteando}'>Editar</button>
    </div> 
    `
    const remove= document.getElementById(`delete-${doc.id}`);
    remove.addEventListener('click', () => { 
      chabelaPost(doc.id);
    })
    const postEdit=document.getElementById(`edit-${doc.id}`);
    postEdit.addEventListener('click', () => {
      const infoPost= document.getElementById('infoPost');
      editPost(doc.id,infoPost);
  
    })
  });
});
// BORRAR COMENTARIOS
function chabelaPost (id) {
  dataBase.collection("Posteos").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
    alert('su comentario  fue eliminado')
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
}
// // EDITAR POST
// function editPost (id,infoPost){
//   document.getElementById('infoPost').value = infoPost;
//   var washingtonRef = db.collection("Posteos").doc(id);

//   // Set the "capital" field of the city 'DC'
//   return washingtonRef.update({
//     correo: firebase.auth().currentUser.uid,
//     posteando:infoPost,
//   })
//   .then(function() {
//     console.log("Document successfully updated!");
//   })
//   .catch(function(error) {
//     // The document probably doesn't exist.
//     console.error("Error updating document: ", error);
//   });
// }



  
  


    
    
