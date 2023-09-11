function calculateTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

function printBillAndTip(bills) {
    for (let i = 0; i < bills.length; i++) {
        const bill = bills[i];
        const tip = calculateTip(bill);
        const total = bill + tip;
        console.log(`Hóa đơn là ${bill}, tiền boa là ${tip}, và tổng giá trị là ${total}`);
    }
}

// Dữ liệu kiểm tra
printBillAndTip([275, 40, 430]);
