// Obtengo los NodeList de las clases: horas, minutos y segundos
const $horas = document.querySelectorAll(".horas");
const $minutos = document.querySelectorAll(".minutos");
const $segundos = document.querySelectorAll(".segundos");

// Creo un array vacio para cada uno
const arraySegundos = [];
const arrayMinutos = [];
const arrayHoras = [];

// paso el NodeList por un bucle para separar los valores y agregarlos al array vacio
// la mismo tiempo los convierto en números para después poder sumarlos.
//Segundos:
for(let i=0; i<$segundos.length; i++){
  arraySegundos.push(parseInt($segundos[i].value));
}

let resultadoSumaSegundos =0;

// Sumo todos los números del arraySegundos y al total lo divido en 60 para saber cuántos minutos tengo
for(let i=0; i<arraySegundos.length; i++){
  resultadoSumaSegundos = resultadoSumaSegundos + arraySegundos[i]/60
}

let segundosEnteros = Math.floor(resultadoSumaSegundos);// separo los minutos obtenidos
let segundosDecimales = Math.trunc((resultadoSumaSegundos - segundosEnteros)*100);//dejo solo los segundos restantes y multiplico por 100 par que qeude un numero entero a mostrar
arrayMinutos.push(segundosEnteros);// agrego los minutos al array correspondiente

//Imprimo en la consola para comprobar que funcione (comparar resultados)
console.log("los segundos finales son: "+segundosDecimales);//56
console.log("los minutos a sumar son: " +segundosEnteros);//10

//Repito el proceso pero pasando los minutos a horas
for(let i=0; i<$minutos.length; i++){
  arrayMinutos.push(parseInt($minutos[i].value));
}

let resultadoSumaMinutos =0;

for(let i=0; i<arrayMinutos.length; i++){
  resultadoSumaMinutos = resultadoSumaMinutos + arrayMinutos[i]/60
}

let minutosEnteros = Math.floor(resultadoSumaMinutos);
let minutosDecimales = Math.trunc((resultadoSumaMinutos - minutosEnteros)*100);
arrayHoras.push(minutosEnteros);

console.log("los minutos finales son: "+minutosDecimales);//3
console.log("las horas a sumar son: " +minutosEnteros);//11

//Por último sumo las horas
for(let i=0; i<$horas.length; i++){
  arrayHoras.push(parseInt($horas[i].value));
}

let resultadoSumaHoras =0;

for(let i=0; i<arrayHoras.length; i++){
  resultadoSumaHoras = resultadoSumaHoras + arrayHoras[i]
}

console.log("las horas finales son: "+resultadoSumaHoras);//41

//Ahora cambio el strong para que muestre el resultado.
const $botonCalcular = document.querySelector("#botonCalcular");
$botonCalcular.onclick = function(){
  document.querySelector("#textoTiempoToal").innerText = `El timpo total de los videos son: ${resultadoSumaHoras} horas, ${minutosDecimales} minutos y ${segundosDecimales} segundos`
}
