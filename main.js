let cantNum= Number(prompt("Ingresar la cantidad de numeros que desea hacer el calculo:"));

for (let i=1; i<cantNum; i++){
    num1= Number(prompt("Ingresar el primer numero:"));
    num2= Number(prompt("Ingresar el segundo numero:"));

    let sum= num1+num2;
    let res= num1-num2;
    let multi= num1*num2;
    let divi= num1/num2;

    alert('El resultado de la suma es de:' +sum);
    alert('El resultado de la resta es de:' +res);
    alert('El resultado de la multiplicacion es de:' +multi);
    alert('El resultado de la division es de:' +divi);
}