let val1 : string | undefined ;
let val2 : string | undefined = "London" ;
let val3 : number | undefined = 0 ;
let coalesced1 = val1 ?? "valeur de repli";
let coalesced2 = val2 ?? "valeur de repli" ;
let coalesced3 = val3 ?? 100 ;
console.log(`Résultat 1 : ${coalesced1}`) ;
console.log(`Résultat 2 : ${coalesced2}`) ;
console.log(`Résultat 3 : ${coalesced3}`) ;
