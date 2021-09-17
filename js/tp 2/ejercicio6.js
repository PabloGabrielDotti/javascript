//estructura FOR
/*
for(crear la variable; condicion;incremento o decrecimiento de el valor de la variable){
    codigo a ejecutar
}
*/
/*
for (let i = 1; i <= 100; i++) {
    document.write("elemento " + i + "<br>");
  }
*/

/*

for(let i=1; i<=30;i++){


    for (let x=1; x<=i;x++){


        document.write(i)
    
    }
document.write("<br>")
}
*/

for (let fila = 1; fila <= 30; fila++) {


    for (let columna = 1; columna <= 30-fila; columna++) {
        document.write("x");
    }

    document.write("<br>");

}
