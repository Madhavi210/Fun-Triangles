var formQuize = document.querySelector(".quize-form");
var submitBtn = document.querySelector(".submit-btn");
var output = document.querySelector(".output");

const answers = ['55°', "Isosceles", " 4 cm", "BF = CE"];

function calculateScore() {
    let score = 0;
    let index = 0;