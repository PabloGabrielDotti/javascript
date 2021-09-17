let numero1 = parseInt(prompt("ingrese un numero"))
let numero2 = parseInt(prompt("ingrese otro numero"))

for(let i=1;i>=(numero1*numero2);i++){

   for (let vuelta=1;vuelta<=(numero1*numero2)-i;vuelta++){
       document.write(i)
   }
   document.write("<br>")
}