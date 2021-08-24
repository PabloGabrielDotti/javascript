//document.write ("elemento 1 <br>");
//document.write ("elemento 2 <br>");
//document.write ("elemento 3 <br>");
//document.write ("elemento 4 <br>");
//document.write ("elemento 5 <br>");
//document.write ("elemento 6 <br>");

// while

/*
while(condicion){

    codigo a ejecutar si se ccumple la condcion
    cambiar condicion

}



*/

let contador = 1;

while (contador <= 100) {
  document.write("Elemento" + contador + "<br>");
  contador++;
}

//do-while ... (mientras se cumpla la condicion)
/* 

do{
    codigo a ejecutar
    cambio la condicion
}while (condicion)
*/

let elemento = 1;

do {
  document.write("elemento do-while" + elemento + "<br>");
  elemento++;
} while (elemento <= 100);

//estructura FOR
/*
for(crear la variable; condicion;incremento o decrecimiento de el valor de la variable){
    codigo a ejecutar
}
*/

for (let i = 1; i <= 100; i++) {
  document.write("elemento " + i + "<br>");
}
