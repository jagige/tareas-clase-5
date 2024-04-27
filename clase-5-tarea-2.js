const $botonEnviar = document.querySelector("#botonEnviar");
const $botonBorrar = document.querySelector("#botonBorrar");

$botonEnviar.onclick = function(){
  let $primerNombre = document.querySelector("#primerNombre").value;
  let $segundoNombre = document.querySelector("#segundoNombre").value;
  let $apellido = document.querySelector("#apellido").value;
  let $edad = document.querySelector("#edad").value;

  let $informacion =  `${$primerNombre} ${$segundoNombre} ${$apellido} ${$edad}`
  document.querySelector("#informacion").value = $informacion
  document.querySelector("h1").innerText = `Bienvenido/a ${$primerNombre}!`
  
  return false;
}

$botonBorrar.onclick = function(){
  document.querySelector("h1").innerText = "Bienvenido!"
}
