let numHombres = parseInt(prompt("Digite cantidad de hombres: "))
let numMujeres = parseInt(prompt("Digite cantidad de mujeres: "))
let totalAlumnos = numHombres + numMujeres
document.write("El porcentaje de hombres es: ", (numHombres * 100) / totalAlumnos )
document.write("El porcentaje de mujeres es: ", (numMujeres * 100) / totalAlumnos )