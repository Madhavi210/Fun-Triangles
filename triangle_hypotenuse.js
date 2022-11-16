const length = document.querySelectorAll(".length");
const calculateBtn = document.querySelector(".calculate-btn");
const lengthHypotenuse = document.querySelector(".result");

let hypotenuse;
function calculateHypotenuse() {

    if (Number(length[0].value) > 0 && Number(length[1].value) > 0) {
        hypotenuse = Math.sqrt(Number(length[0].value) ** 2 + Number(length[1].value) ** 2);
        lengthHypotenuse.innerText = "Length of Hypotenuse is: " + hypotenuse + "cm";
        lengthHypotenuse.style.color = "green";
    }
    else {
        lengthHypotenuse.innerText = "Please enter values of sides above zero!";
        lengthHypotenuse.style.color = "red";
    }


calculateBtn.addEventListener("click", calculateHypotenuse);
