let cuenta = {
  titular: "alex",
  saldo: 0,
};

console.log(cuenta);
let ingreso = parseInt(prompt("importe a ingresar"));
cuenta.saldo = cuenta.saldo + ingreso;
console.log(cuenta);

let egreso = parseInt(prompt("importe a retirar"));
cuenta.saldo = cuenta.saldo - egreso;
console.log(cuenta);



function informar(){

    document.write(cuenta.saldo);
}

informar();