console.log("conneted");

let display = document.getElementById("display") as HTMLInputElement;
let answere = document.getElementById("answere") as HTMLInputElement;
let btns = document.querySelectorAll("button") as NodeListOf<HTMLButtonElement>;

function calculator(num: string) {
  display.value += num;
    answere.value = "";
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = (e.target as HTMLButtonElement).innerText;
    if (value === "AC") {
      display.value = "";
      answere.value = "";
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
      answere.value = "";
    } else if (value === "=") {
      answere.value = eval(display.value);
    } else {
      calculator(value);
    }
  });
});
