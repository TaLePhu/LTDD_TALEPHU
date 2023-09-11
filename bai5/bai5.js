// Tạo hàm calcAverage để tính trung bình của 3 điểm
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Tính trung bình cho cả hai đội
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

// Tạo hàm checkWinner để kiểm tra người chiến thắng
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins chiến thắng (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas chiến thắng (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('Không có đội nào chiến thắng!');
    }
};

// Kiểm tra người chiến thắng cho Data 1 và Data 2
checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);
