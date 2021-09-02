// funciones sin parametros (los parentesis no se llenan)

function aumentarPrecio(){

    let disney= 385;
    let inflacion= 150;
    document.write("valor total del servicio disney plus $"+ (disney + inflacion))
}

// invocar o llamar funcion

aumentarPrecio();

function actualizarPrecio(monto,producto,precio){
let calculo=precio + monto;
document.write ("<br>El producto: " + producto + " precio total $" + calculo)

}


let coeficienteInflacion = parseInt(prompt ("inserte inflacion del mes"))

actualizarPrecio(coeficienteInflacion,"zapatillas", 9700)