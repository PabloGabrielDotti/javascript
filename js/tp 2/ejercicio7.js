/*let j = parseInt(prompt("ingrese un numero del 1 al 50"));

for (let i = j; i >= 0; i--) {
  for (let x = 1; x <= i; x++) {
    document.write(i);
  }
  document.write("<br>");
}
*/

for(let numero=1; numero<=500;numero++){
    document.write(numero);
    if(numero % 4 == 0){
        document.write (" multiplo de 4")
    }
    if(numero % 9== 0){
        document.write (" multiplo de 9")
    }
    if(numero % 5== 0){
        document.write ("<br>---------------------")
    }
    document.write("<br>")
}