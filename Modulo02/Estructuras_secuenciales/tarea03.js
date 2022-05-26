let nota1 = parseFloat(prompt("Digite la nota1: "))
let nota2 = parseFloat(prompt("Digite la nota2: "))
let nota3 = parseFloat(prompt("Digite la nota3: "))
let examenFinal = parseFloat(prompt("Digite la nota del examen final: "))
let trabajoFInal = parseFloat(prompt("Digite la nota del trabajo final: "))
let promedio = (nota1+nota2+nota3)/3
let notaFinal = (promedio * 0.55) + (examenFinal * 0.3) + (trabajoFInal * 0.15)
document.write("La calificacion final es: ", notaFinal)
