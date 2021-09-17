function tabla(numero) {
  let multiplo = 1;
  do {
    let resultado = numero * multiplo;
    document.write(resultado);
    multiplo++;
    document.write("<br>")
  } while (multiplo <= 10);
 
}

tabla(7)
;