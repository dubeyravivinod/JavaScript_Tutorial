// Arrow Function to calculate the Average score
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Arrow Function to calculate the Winner team
const winner = (avgDophins, avgKoalas) => {
    if(avgDophins >= (2 * avgKoalas)) {
        console.log(`Dolphins wins trophy 🏆 by (${avgDophins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= (2 * avgDophins)) {
        console.log(`Koalas wins trophy 🏆 by (${avgKoalas}) vs. ${avgDophins})`);
    }
    else {
        console.log(`No team wins the trophy 🏆`);
    }
}


const avgDophins = calcAverage(44, 32, 71);
const avgKoalas = calcAverage(65, 54, 49);

winner(avgDophins, avgKoalas);
winner(576, 117);