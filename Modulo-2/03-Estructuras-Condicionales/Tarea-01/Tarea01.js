let horas = parseInt(prompt("Digite el numero de horas trabajadas: "));
let extras = 0;
let total = 0;
if (horas <= 40) {
  total = horas * 16;
  console.log("Su sueldo a pagar es: ", total);
} else {
  extras = horas - 40;
  horas = horas - extras;
  total = extras * 20 + horas * 16;
  console.log("Su sueldo a pagar es: ", total);
}

