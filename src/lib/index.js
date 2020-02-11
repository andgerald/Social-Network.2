// aqui exportaras las funciones que necesites 
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const entrar = (correo , clave) =>{
  firebase.auth().signInWithEmailAndPassword(correo , clave)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

export const registry = (correoRegistry, claveRegistry) => {
  firebase.auth().createUserWithEmailAndPassword( correoRegistry , claveRegistry)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode)
    var errorMessage = error.message;
    console.log(errorMessage)
    // ...
  });
};


