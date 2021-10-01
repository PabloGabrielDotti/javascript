let texto = prompt("ingrese texto");

let textoAlreves = "";

for (i = texto.length; i > 0; i--) {
  textoAlreves = textoAlreves + texto.charAt(i-1);
}

document.write(textoAlreves);
