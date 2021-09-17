/*

ejercicio 4

let usuario=(prompt("ingrese nombre de usuario"))

document.write ("Hola " + usuario)

*/

/* ejercicio 6

let numero1 = parseInt(prompt("ingrese un numero entero"));
let numero2 = parseInt(prompt("ingrese otro numero entero"));

if (numero1 > numero2) {
  document.write(numero1 + " este es mayor");
} else if (numero1 < numero2) {
  document.write(numero2 + " este es mayor");
} else {
  document.write("los numeros son iguales");
}
*/

/*
let numero1 = parseInt(prompt("ingrese un numero entero"));
let numero2 = parseInt(prompt("ingrese otro numero entero"));
let numero3 = parseInt(prompt("ingrese otro numero entero"));

if (numero1 > numero2 && numero1 > numero3) {
  document.write(numero1 + " este es mayor");
} else if (numero2 > numero1 && numero2 > numero3) {
  document.write(numero2 + " este es mayor");
} else if (numero3 > numero1 && numero3 > numero2) {
  document.write(numero3 + " este es mayor");
} else {
  document.write("los numeros son iguales");
}

*/
/* ejercicio 8 

let numero = parseInt(prompt("ingrese un numero"));

if (numero % 2 === 0) {
  document.write("el numero es divisible por dos");
} else document.write("el numero no es divisible por dos");

*/

let numero = parseInt(prompt("ingrese un numero"));

let divisibleDos = " no es divisible por dos ";
let divisibleTres = " no es divisible por tres ";
let divisibleCinco = " no es divisible por cinco ";
let divisibleSiete = " no es divisible por siete ";

if (numero % 2 === 0) {
  divisibleDos = " es divisible por dos ";
}
if (numero % 3 === 0) {
  divisibleTres = " es divisible por tres ";
}
if (numero % 5 === 0) {
  divisibleCinco = " es divisible por cinco ";
}
if (numero % 7 === 0) {
  divisibleSiete = " es divisible por siete ";
}

document.write("</br>"+divisibleDos);
document.write("</br>"+divisibleTres);
document.write("</br>"+divisibleCinco);
document.write("</br>"+divisibleSiete);
