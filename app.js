const rs = require("readline-sync");
let worth = rs.question("Podaj słowo do zamiany ").split("");
//console.log(worth);
let anagram = "";

let limit = worth.length;
for (let n = 0; n < limit; n++) {
    let los = Math.floor(Math.random() * worth.length);
    anagram += worth[los];
    worth.splice(los, 1);
}
console.log(anagram);

/*
for (let c = worth.length; c > 0; c--) {
    //    
    //     // console.log(los);
    
    //     worth[los] = worth[worth.length - 1];
    // }
    
    */
