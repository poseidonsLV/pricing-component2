const switchElement = document.querySelector(".switch");
const switchCircle = document.querySelector(".switch-circle");
const annuallyText = document.querySelector(".annually");
const monthlyText = document.querySelector(".monthly");
const annuallyPriceText = document.querySelectorAll("#price-text");
switchElement.addEventListener("click", changeState);

let state = "monthly";
monthlyText.style.fontWeight = "700";

function changeState() {
  if (switchCircle.className.includes("right-side")) {
    switchCircle.setAttribute("class", "switch-circle left-side");
    monthlyText.style.fontWeight = "";
    annuallyText.style.fontWeight = "700";
    state = "annually";
  } else if (switchCircle.className.includes("left-side")) {
    switchCircle.setAttribute("class", "switch-circle right-side");
    annuallyText.style.fontWeight = "";
    monthlyText.style.fontWeight = "700";
    state = "monthly";
  }
  changePrices();
}

function changePrices() {
  if (state === "annually") {
    annuallyPriceText[0].innerText = "199.99";
    annuallyPriceText[1].innerText = "249.99";
    annuallyPriceText[2].innerText = "399.99";
  } else {
    annuallyPriceText[0].innerText = "19.00";
    annuallyPriceText[1].innerText = "24.99";
    annuallyPriceText[2].innerText = "39.99";
  }
}
