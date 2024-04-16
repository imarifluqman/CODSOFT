console.log("conneted");
var display = document.getElementById("display");
var answere = document.getElementById("answere");
var btns = document.querySelectorAll("button");
function calculator(num) {
    display.value += num;
    answere.value = "";
}
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        var value = e.target.innerText;
        if (value === "AC") {
            display.value = "";
            answere.value = "";
        }
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
            answere.value = "";
        }
        else if (value === "=") {
            answere.value = eval(display.value);
        }
        else {
            calculator(value);
        }
    });
});
