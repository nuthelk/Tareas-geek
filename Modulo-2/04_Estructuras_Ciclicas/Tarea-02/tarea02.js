let notas = [];
//funcion para generar un numero aleatorio
function random(min, max) {
    return Math.round((Math.random() * (max - min + 1 )) + min);
}
//funcion para llenar el array de forma aleatoria
for(let i = 1; i <= 40; i++ ){
    notas.push(random(1, 5))
}

//funcion para sumar todos los datos del arreglo 
let sumatoria = notas.reduce((a, b) => {
    return a + b
})
//saco el promedio
let promedio = sumatoria / 40
let minimo = (Math.min(...notas))


console.log(`la media es : ${promedio}  La nota minima es: ${minimo}`)