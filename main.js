let trabas= Number(prompt("Ingresar el numero de trabajadores:"));
    for (let i=1; i<=trabas; i++){
        let tiem= Number(prompt("Ingresar el tiempo que lleva en la empresa:"));
        
        if (tiem>0 && tiem<=5){
            alert('Usted cuenta con un aumento de 100 pesos');
        } else if(tiem>5 && tiem<=10){
            alert("Usted cuenta con un aumento de 250 pesos");
        } else if (tiem>10 && tiem>=20){
            alert('Udted cuenta con un aumento de 400 pesos');
        } else{
            alert('Usted tiene un aumento de 550 pesos');
        }
    }