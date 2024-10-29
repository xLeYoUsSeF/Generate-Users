let btn = document.querySelector(".generate");
let serial = document.querySelector(".serial");

btn.onclick = function () {
    let chars = "1234567890qwertyuioplkjhgfdsazxcvbnm";
    let result = "";
    for (let i = 0; i < 4; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    serial.innerHTML = result;
    serial.style.width = '100px'
}