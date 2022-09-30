let vent= Number(prompt("Ingresar el numero de ventas:"));
let ventMen= 0;
let ventMedi= 0;
let ventMayo= 0;

for (let i; i<=vent; i++){
    let preci= Number(prompt("Digitar el precio de la venta:"));

    if (preci<500){
        ventMen++
    } else if (preci>500 && preci<100){
        ventMedi++
    } else{
        ventMayo++
    }
    alert('Las ventas menores a 500 fueron:' +ventMen);
    alert('Las ventas medianos a 1000 pero mayores a 500 fueron:' +ventMedi);
    alert('Las ventas mayores a 1000 fueron:' +ventMayo);
}