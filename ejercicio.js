 let numero = Math.floor(Math.random()*100) + 1;
 let adivinar = prompt("es PAR o IMPAR").toLowerCase();
    

if ( (numero % 2 === 0 && adivinar === "par")|| 
( numero % 2 !== 0 && adivinar === "impar")){
    console.log("felicitaciones", numero);
} else {
    console.log( " se equivoco", numero);
}





    
    
    
    
    


