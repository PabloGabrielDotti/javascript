let persona1 = prompt("ingrese el nombre de la primer persona");
let edad1 = parseInt(prompt("ingrese la edad de la primer persona"));
let persona2 = prompt("ingrese el nombre de la segunda persona");
let edad2 = parseInt(prompt("ingrese la edad de la segunda persona"));
let persona3 = prompt("ingrese el nombre de la tercer persona");
let edad3 = parseInt(prompt("ingrese la edad de la tercer persona"));

console.log(Math.max(edad1, edad2, edad3));


if(Math.max(edad1, edad2, edad3)==edad1){
    document.write(edad1+" "+persona1)
}
if(Math.max(edad1, edad2, edad3)==edad2){
    document.write(edad2+" "+persona2)
}
if(Math.max(edad1, edad2, edad3)==edad3){
    document.write(edad3+" "+persona3)
}