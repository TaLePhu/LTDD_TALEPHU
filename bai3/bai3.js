function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(dolphinsAverage, koalasAverage) {
    if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
        console.log(`Dolphins win with an average score of ${dolphinsAverage}`);
    } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
        console.log(`Koalas win with an average score of ${koalasAverage}`);
    } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100) {
        console.log(`It's a draw with both teams scoring an average of ${dolphinsAverage}`);
    } else {
        console.log("No team wins the trophy");
    }
}

// Test Data 1
let dolphinsAverage = calculateAverage(96, 108, 89);
let koalasAverage = calculateAverage(88, 91, 110);
checkWinner(dolphinsAverage, koalasAverage);

// Test Data Bonus 1
dolphinsAverage = calculateAverage(97, 112, 101);
koalasAverage = calculateAverage(109, 95, 123);
checkWinner(dolphinsAverage, koalasAverage);

// Test Data Bonus 2
dolphinsAverage = calculateAverage(97, 112, 101);
koalasAverage = calculateAverage(109, 95, 106);
checkWinner(dolphinsAverage, koalasAverage);
