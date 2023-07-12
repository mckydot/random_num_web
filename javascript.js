let generateNum1 = document.querySelector(".countNumber1");
let generateNum2 = document.querySelector(".countNumber2");
let generateNum3 = document.querySelector(".countNumber3");
let generateNum4 = document.querySelector(".countNumber4");
let generateNum5 = document.querySelector(".countNumber5");
let generateNum6 = document.querySelector(".countNumber6");
let button = document.querySelector(".generate");

function generator() {
    const randomNum1 = Math.floor(Math.random() * 45 + 1);
    const randomNum2 = Math.floor(Math.random() * 45 + 1);
    const randomNum3 = Math.floor(Math.random() * 45 + 1);
    const randomNum4 = Math.floor(Math.random() * 45 + 1);
    const randomNum5 = Math.floor(Math.random() * 45 + 1);
    const randomNum6 = Math.floor(Math.random() * 45 + 1);
    //Math.random 0~1 사이의 난수 생성
    //Math.floor 소수점을 내림시켜 정수로 만듦
    generateNum1.innerHTML = randomNum1;
    generateNum2.innerHTML = randomNum2;
    generateNum3.innerHTML = randomNum3;
    generateNum4.innerHTML = randomNum4;
    generateNum5.innerHTML = randomNum5;
    generateNum6.innerHTML = randomNum6;
}

button.addEventListener("click", generator);