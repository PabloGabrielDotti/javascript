let resultados = [];

for (let index = 1; index <= 50; index++) {
  let numero1 = Math.floor(Math.random() * 7);
  console.log(numero1);
  let numero2 = Math.floor(Math.random() * 7);
  console.log(numero2);
  let multiplicacion = numero1 * numero2;
  resultados.push(multiplicacion);
}

console.log(resultados);
