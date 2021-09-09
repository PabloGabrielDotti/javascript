let resultado = 0;
do {
  let numero = parseInt(prompt("ingrese un número"));
  if (isNaN(numero)) {
    alert("no es un numero");
  }
  resultado = resultado + numero;
  console.log(resultado);
} while (confirm("¿desea continuar?"));

console.log("el resultado es ", resultado)
document.write(resultado);

/*if (resultado = isNaN(NaN)) {
  alert("el numero ingresado es incorrecto");
} else {
  ;
}

*/
