// aqui exportaras las funciones que necesites 
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
export const entrar = (correo, clave) => {
  firebase.auth().createUserWithEmailAndPassword(correo, clave)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode)
    var errorMessage = error.message;
    console.log(errorMessage)
    // ...
  });
};