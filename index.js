let btn = document.querySelector(".generate");
let serial = document.querySelector(".serial");
let everyLi = document.querySelectorAll(".gallery li");
let arrayLi = Array.from(everyLi);

arrayLi.forEach((li) => {
  li.addEventListener("click", function (e) {
    arrayLi.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    if (e.currentTarget.classList.contains("active")) {
      if (e.currentTarget.dataset.custom === "three") {
        btn.onclick = function () {
          let chars = "1234567890qwertyuioplkjhgfdsazxcvbnm";
          let result = "";
          for (let i = 0; i < 3; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
          }
          serial.innerHTML = result;
          serial.style.width = "100px";
        };
      } else if (e.currentTarget.dataset.custom === "four") {
        btn.onclick = function () {
            let chars = "1234567890qwertyuioplkjhgfdsazxcvbnm";
            let result = "";
            for (let i = 0; i < 4; i++) {
              result += chars[Math.floor(Math.random() * chars.length)];
            }
            serial.innerHTML = result;
            serial.style.width = "100px";
          };
      }
    }
  });
});
