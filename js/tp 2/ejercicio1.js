/*let edad = parseInt(prompt("indicar edad"));

if (edad >= 18) {
  document.write("puede conducir");
} else if (edad < 18) {
  document.write("no puede conducir");
} else if {
  document.write("ingrese una edad valida");
}

*/

let nota = parseInt(prompt("ingrese una nota"));

while (nota < 0 || nota > 10) {
  nota = parseInt(prompt("Ingrese una nota correcta"));
}
if (nota >= 0 && nota <= 2) {
  document.write("Muy deficiente");
}
if (nota >= 3 && nota <= 4) {
  document.write("insuficiente");
}
if (nota >= 5 && nota <= 6) {
  document.write("suficiente");
}
if (nota === 7) {
  document.write("bien");
}
if (nota >= 8 && nota <= 9) {
  document.write("notable");
}
if (nota === 10) {
  document.write("sobresaliente");
}
