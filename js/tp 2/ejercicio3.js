let resultado = 0;
do {
  let numero = parseInt(prompt("ingrese un número"));
  resultado = resultado + numero;
  console.log(resultado);
} while (confirm("¿desea cntinuar?"));

if (resultado == isNaN(NaN)) {
  alert("el numero ingresado es incorrecto");
} else {
  document.write(resultado);
}
