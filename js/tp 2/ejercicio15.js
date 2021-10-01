let texto = prompt("ingrese texto");

let cantidad = 0;

for (i = 0; i < texto.length; i++) {
  let letra = texto.charAt(i);
  letra = letra.toUpperCase();

  if (
    letra == "A" ||
    letra == "E" ||
    letra == "I" ||
    letra == "O" ||
    letra == "U"
  ) {
    cantidad += 1;
  }

  /*
  if ("AEIOU".indexOf(letra) != -1) {
    cantidad += 1
  }
  */
}

document.write ("la cantiad de vocales es "+ cantidad);

