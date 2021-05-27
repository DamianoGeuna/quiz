///Sicuramente da togliere

const numeri=[1,2,3,4,5]

const somma=numeri.reduce((accumulatore,corrente)=>{
    console.log(accumulatore,corrente);
    return accumulatore + corrente
},0)
console.log("somma: ",somma)