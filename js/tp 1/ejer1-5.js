// parseInt ("numero") se transforma en formato entero

/*

let numero1 = parseInt(prompt("ingrese un numero"));
let numero2 = 50;

console.log(numero1);

console.log(numero1+numero2);

document.write("el resultado de la suma es <br>" + (numero1 + numero2));


*/
/*

a="pp"
alert(a)
*/

let numero1 = parseInt(prompt("ingrese un numero"));
let numero2 = parseInt(prompt("ingrese un numero"));
let numero3 = parseInt(prompt("ingrese un numero"));

if (numero1 > numero2 && numero1 > numero3) {
  document.write(numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    document.write(numero2);
} else {
  document.write(numero3);
}
