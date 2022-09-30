let angu= document.querySelector("#angu").value;
let serie= document.querySelector("#serie").value;
let res= 0, num= 3, facto= 1;

for (let i=1; i<=serie; i++){
    for (let j=1; j<=num; j++){
        facto *= j;
    }
    if (i%2==0){
        res+= (angu*num)/facto;
        num+= 2;
    } else{
        res-= (angu*num)/facto;
        num+= 2;
    }
    alert('El seno del angulo, ${angu} es, ${res}');
}