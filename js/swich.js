let estacion = prompt(
  "ingrese su estacion favorita del año: 1- verano 2 otoño 3 invierno 4 primavera"
);

switch (estacion) {
  case "1":
    document.write("el usuario eligio verano");
    break;
  case "2":
    document.write("el usuario eligio otoño");
    break;
  default:
    document.write("escribiste cualca");
}
