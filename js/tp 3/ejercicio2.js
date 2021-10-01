let listaCiudades = [];


var r = true

while (r == true) {
 
  let ciudad = prompt("inserte una ciudad");
  listaCiudades.push(ciudad);
  r= confirm("desea ingresar otra ciudad?");
}

document.write(listaCiudades + "<br>");

document.write(listaCiudades.length)

document.write("<br>")

document.write(listaCiudades[0])
document.write("<br>")

document.write(listaCiudades[2])
document.write("<br>")

document.write(listaCiudades[listaCiudades.length-1])
document.write("<br>")

listaCiudades.push("paris")


document.write(listaCiudades)
document.write("<br>")

listaCiudades[1]="barcelona"


document.write(listaCiudades)