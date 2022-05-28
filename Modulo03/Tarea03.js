let nombre = prompt('Digite el nombre del articulo: ')
let precio = parseInt(prompt('Digite el precio del articulo:'))
let clave = prompt('Digite la clave del articulo:')

let descuento = 0

switch (clave) {
    case "01":
        descuento = precio - (precio * 0.1) 
        document.write(`Nombre: ${nombre} 
        Clave: ${clave} 
        Precio original: ${precio} 
        Precio con descuento: ${descuento}`)
        break
    case "02":
        descuento = precio - (precio * 0.2) 
        document.write(`Nombre: ${nombre} \n
        Clave: ${clave} \n
        Precio original: ${precio} \n
        Precio con descuento: ${descuento}`)
        break
    default:
        console.log('Digite una clave valida')
        break
}