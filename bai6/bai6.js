// Tạo hàm calcTip để tính tiền boa
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Tạo mảng bills chứa dữ liệu kiểm tra
let bills = [125, 555, 44];

// Tạo mảng tips chứa giá trị tiền boa cho mỗi hóa đơn
let tips = bills.map(bill => calcTip(bill));

// Tạo mảng total chứa tổng các giá trị (hóa đơn + tiền boa)
let total = bills.map((bill, i) => bill + tips[i]);

console.log(bills);
console.log(tips);
console.log(total);
