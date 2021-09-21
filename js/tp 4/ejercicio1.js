let auto = {
    color: "rojo",
    modelo: "vento",
    marca: "ford"
}


let encender = (auto) =>{
    auto.encendido = true;
}

let apagar = (auto) =>{
    auto.encendido = false;
}

apagar(auto),
console.log(auto)