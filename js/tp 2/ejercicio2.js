let resultado = "";
do{
    let palabra = prompt("ingrese una palabra");
    resultado= resultado+palabra+"-"
    console.log(resultado);
    

}while(confirm("¿desea continuar?"))

document.write(resultado)