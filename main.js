let  estu= document.querySelector("#estu").value;
let notaFin= 0,menor=10, mayor=0;

for (let i=1; estu>=i; i++){
    let cali= parseInt(prompt("Ingresar la calificacion de la cafeteria:"));
    notaFin= notaFin+cali;

    if (cali>mayor){
        mayor= cali;
    }else if (cali<menor){
        menor= cali;
    }
    let pro= notaFin/estu;
    alert('La calificacion mayor es de:' +mayor);
    alert('La calificacion menor es de:' +menor);

    alert('El promedio es de:' +pro);
}