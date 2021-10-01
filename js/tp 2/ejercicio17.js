let texto = prompt("ingrese texto").toUpperCase();

for (i = 0; i < texto.length; i++) {
  if ("AEIOU".indexOf(texto.charAt(i)) != -1) {
    document.write("la primera vocal está en la posicion: " + i);
    break;
  } else if (i == texto.length-1) {
    document.write("no hay vocales");
  }
}
