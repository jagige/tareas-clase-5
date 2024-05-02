const $numerosEnLi = document.querySelectorAll("li");
const arrayDeNumerosEnLi = []

for(let i =0; i<$numerosEnLi.length; i++){
    arrayDeNumerosEnLi.push(parseInt($numerosEnLi[i].innerText));
}

function CalcularPromedio(numeros){
    let resultado = 0;
    for(let i =0; i < numeros.length; i++){
      resultado = resultado + numeros[i]
    }
    return resultado/numeros.length;
}

console.log("El promedio es: "+ CalcularPromedio(arrayDeNumerosEnLi));
console.log("El número más pequeño es: "+Math.min(...arrayDeNumerosEnLi));
console.log("El número más grande es: "+Math.max(...arrayDeNumerosEnLi));

let arrayOrdenado = arrayDeNumerosEnLi.sort();
let unicosElementos =[];
let vecesRepetidas =[];
let contador =1;
//Al haber ordenado los números puedo comparar si el siguiente es igual al anterior y
//sumarlo al contador para saber las veces que se repite, si no (else) suma el número a vecesRepetidas
//así se cuántas repeticiones tuvo y el contador regresa a uno para empezar el proceso con el siguiente número
for(let i=0; i<arrayOrdenado.length; i++){
    if(arrayOrdenado[i+1] === arrayOrdenado[i]){
        contador++;
    }else{
        unicosElementos.push(arrayOrdenado[i]);
        vecesRepetidas.push(contador);
        contador = 1;
    }
}
//Con el valor mas alto, busco el numero correspondiente ya que estaban en orden
let valorMaximo = Math.max(...vecesRepetidas);
let numeroMasRepetido = 0;

for(let i =0; i<vecesRepetidas.length; i++){
    if(vecesRepetidas[i] === valorMaximo){
        numeroMasRepetido = unicosElementos[i];
    }
}

console.log("El número más frecuente es el "+ numeroMasRepetido + ", que se repite " +valorMaximo+ " veces");

document.querySelector("#promedio").innerText = "El promedio es: "+ CalcularPromedio(arrayDeNumerosEnLi);
document.querySelector("#numeroMasChico").innerText = "El número más pequeño es: "+Math.min(...arrayDeNumerosEnLi);
document.querySelector("#numeroMasGrande").innerText = "El número más grande es: "+Math.max(...arrayDeNumerosEnLi);
document.querySelector("#numeroMasFrecuente").innerText = "El número más frecuente es el "+ numeroMasRepetido + ", que se repite " +valorMaximo+ " veces";
