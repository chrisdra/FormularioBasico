function validar(){
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var correo = document.getElementById("correo").value;
  var usuario = document.getElementById("usuario").value;
  var clave = document.getElementById("clave").value;
  var telefono = document.getElementById("telefono").value;

  if (nombre === ""){
    alert("Por favor ingrese su nombre");
    return false;
  } else if (nombre.length>30){
    alert("El Nombre es muy largo");
    return false;
  }

  if (apellidos === ""){
    alert("Por favor ingrese sus apellidos");
    return false;
  } else if (apellidos.length>80){
    alert("Los apellidos son muy largos");
    return false;
  }

  if (correo === ""){
    alert("Por favor ingrese su correo");
    return false;
  } else if (correo.length>100){
    alert("El correo es muy largo");
    return false;
  }

  if (usuario === ""){
    alert("Por favor ingrese su usuario");
    return false;
  } else if (usuario.length>20){
    alert("El usuario es muy largo");
    return false;
  }

  if (clave === ""){
    alert("Por favor ingrese su clave");
    return false;
  }

  if (telefono === "") {
    alert("Por favor ingrese su telefono");
    return false;
  } else if (telefono.length>15){
    alert("El telefono es muy largo");
    return false;
  }

  alert("Bienvenido "+nombre+" "+apellidos+"\nUsuario: "+usuario+"\nClave: "+clave);

}
