const $botonResultado = document.querySelector("#botonResultado");
let textoResultado;

$botonResultado.onclick = function(){
  let $salarioAnual = Number(document.querySelector("#salarioAnual").value)
  textoResultado = $salarioAnual / 12;
  document.querySelector("#salarioMensual").value = textoResultado
}
