let num= Number(prompt("Digitar la cantidad de numeros que desee hacer:"));
let num1= 1;
let sum= 0;

for (let i=1; i<num; i++){
    let total= i**b;
    sum= total+sum;

    alert('El resultado de elevar' +i+ 'a' +num+ 'es' +total);
    num1+=1;
}
alert('El resultado de sumar los otros resultados es de:' +sum);