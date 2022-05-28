let actividad = parseInt(prompt('Digite 1 si estuvo sentado o 2 si estudo dormido'))
let horas = parseInt(prompt('Digite la cantidad de horas haciendo la actividad: '))
let totalCalorias = 0
switch (actividad) {
    case 1:
        totalCalorias = (horas * 60) * 1.66
        document.write('El numero de calorias quemadas mientras estas sentado es: ', totalCalorias)
        break
    case 2:
        
        totalCalorias = (horas * 60) * 1.08 
        document.write('El numero de calorias quemadas mientras estas dormido es: ', totalCalorias)
        break

    default:
        alert('Digite un numero valido')
        break
}