/*/ funciones sin parametros
function aumentarPrecio(){
    console.log('prueba');
    let disney= 385;
    let inflacion = 150;
    document.write('Valor total del servicio disney plus $'+ (disney + inflacion));
};

// funcion con parametros
function actualizarPrecio(monto, producto, precio){
    document.write('<br>El producto: '+producto+' precio total $'+ (precio +monto))
}

// invocar o llamar a una funcion
aumentarPrecio();

let coeficienteInflacion = parseInt(prompt('Ingrese el monto total de la inflacion del mes'));

actualizarPrecio(coeficienteInflacion, 'Teclado hyperx ',9000);
actualizarPrecio(coeficienteInflacion, 'Teclado Logitec ',14000);
actualizarPrecio('mouse logitec', 9000 , 100);

*/

let monto = parseInt(prompt("ingrese el valor del producto en usd"));
let precioDolar = parseInt(prompt("ingrese el valor de dolar de hoy"));

function convertirDolaresPesos(monto, precioDolar) {
  return (monto * precioDolar);
}

convertirDolaresPesos(monto, precioDolar);
