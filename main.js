addEventListener("DOMContentLoaded", (e)=>{
    let form= document.querySelector("#form");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        let num= document.querySelector("#num").value;
        for (let i=1; i<=10; i++){
            alert('El resultado de multiplicar ${num} por ${i} es de ${numero*i}');
        }
    })
})