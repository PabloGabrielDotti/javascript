let letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];
let resultado = "";
do {
  let numeroDni = parseInt(prompt("ingrese un dni"));
  if (isNaN(numeroDni)) {
    alert("no es un numero");
  }
  resultado = numeroDni % 23;
  console.log(resultado);
  console.log(letras[resultado]);
  document.write(letras[resultado]);
} while (confirm("¿desea cntinuar?"));

document.write(resultado);
