// Câu 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
// Cách 1: Sử dụng loop
function tinhGiaiThua(n) {
    let rs = 1
    for (let i = 1; i <= n; i++) {
        rs*=i;
    }
    console.log(rs)
}
tinhGiaiThua(5)

// Cách 2: Sử dụng đệ quy (factorial)
function tinhGiaiThuaFactorial(n) {

}


// Câu 2: Đảo ngược chuỗi
function reverseString(str) {
    let rs = ""
    for (let i = str.length - 1; i >= 0; i--) {
        rs += str[i];
    }
    console.log(rs)
}
reverseString("hello")

// Câu 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, 
// tương ứng với mã quốc gia được truyền vào
function translate(str) {
    switch (str) {
        case "VN":
            console.log("Xin chào")
            break;
            
        case "EN":
            console.log("Hello")
            break;

        default:
            console.log("Hello !!!")
            break;
    }
}
translate("EN")

// Câu 4:Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. 
// Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
function subString(str) {
    let newStr = ""
    let newStr1 = ""
    newStr += str.slice(0,10)+"..."
    for (let i  = 0; i  <= 9; i ++) {
        newStr1 += str[i]
    }
    return newStr1 + "..."
}
console.log(subString("xinchaocacbandenvoiTechmaster"))

// Câu 5:
