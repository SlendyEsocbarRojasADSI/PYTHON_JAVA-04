const iva= 0.16;
const descu= 0.15;
const preci= 1000000;

    let total= 0;
    let canti= Number(prompt("Ingresar la cantidad de productos:"));

    for (let i=1; i<=canti; i++){
        total+= preci;
    }

    let totalPagar= total+(total*iva);

    if (totalPagar> 500000){
        let totalDesc= totalPagar-(totalPagar*descu);
        alert('El total a pagar es de:' +totalDesc);
    } else {
        alert('El total a pagar es de:' +totalPagar);
    }