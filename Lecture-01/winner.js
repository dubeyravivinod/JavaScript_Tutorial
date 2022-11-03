const totalScoreDolphins = (96 + 108 + 89) / 3;
const totalScoreKoalas = (88 + 91 + 110) / 3;

// if(totalScoreDolphins > totalScoreKoalas) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if(totalScoreKoalas > totalScoreDolphins) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if(totalScoreDolphins === totalScoreKoalas && totalScoreDolphins >= 100 && totalScoreKoalas >= 100){
//     console.log("Both wins the trophy 🏆");
// }
// else {
//     console.log("No one wins the trophy 🏆");
// }

console.log(`Winner of this tornament is ${totalScoreDolphins > totalScoreKoalas ? "Dolphins win the trophy 🏆": "Koalas win the trophy 🏆"}`)
