let texto = prompt("ingrese texto");

console.log(texto.length);

let output = "";

for (i = 0; i < texto.length; i++) {
  output += texto.charAt(i);
  if (i < texto.length-1) {
      output += "-"
  }
}


document.write(output);
