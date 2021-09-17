let listaCiudades = [];

var r = confirm("ingrese el nombre de una ciudad");
while (r == true) {
  let ciudad = prompt("inserte");
  listaCiudades.push(ciudad);
}

if(r==false)
document.write(listaCiudades);
