let numeros = [];
let numero = 0;
let i = 1;
while (i <= 15){

    numero = parseInt(prompt('Digite el numero negativo')) 
    if(numero < 0){
        numeros.push(numero * (-1))
        i++
    }else{
        continue
    }
}

numeros.forEach(element => console.log(element))

    
