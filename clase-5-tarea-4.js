const $numerosEnLi = document.querySelectorAll("li");
const arrayDeNumerosEnLi = []

for(let i =0; i<$numerosEnLi.length; i++){
    arrayDeNumerosEnLi.push(parseInt($numerosEnLi[i].innerText));
}

function promedioArray(numeros){
    let resultado = 0;
    for(let i =0; i < numeros.length; i++){
      resultado = resultado + numeros[i]
    }
    return resultado/numeros.length;
  }

console.log("el numero minimo es "+Math.min(...arrayDeNumerosEnLi));
console.log("el numero máximo es "+Math.max(...arrayDeNumerosEnLi));
console.log("el promedio es: "+ promedioArray(arrayDeNumerosEnLi));

