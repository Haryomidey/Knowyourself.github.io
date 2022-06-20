

const submitBtn = document.getElementById("submit-btn");
const wrapper_1 = document.querySelector(".wrapper");
const wrapper_2 = document.querySelector(".wrapper-two");
const input = document.getElementById("first-input");
const display_2 = document.querySelector("#name");
const submit = document.querySelector(".submit-2");
const backBtn = document.querySelector(".back-btn");

backBtn.addEventListener("click", () => {
    wrapper_1.style.display = "block";
    wrapper_2.style.display = "none";
})

submitBtn.addEventListener("click", () => {
    if (input.value == "") {
        return false;
    }
    else {
        wrapper_1.style.display = "none";
        wrapper_2.style.display = "block";
        display_2.textContent = input.value;
    }
})

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

submit.addEventListener("click", () => {
    window.open
        (`whatsapp://send?text=${input.value} You Are LOYAL- ${random(60, 100)}% 😘 RICH - ${random(60, 100)}% 😎 SMART - ${random(60, 100)}% 😊 CARING - ${random(60, 100)}% 🤗 ANGRY - ${random(60, 100)}% 😡 CUTENESS - ${random(60, 100)}% 😜 LOVING - ${random(60, 100)}% ❤ Check Yours 👇👇 ${"https://haryomidey.github.io/Knowyourself.github.io/"}`);
})

