const button = document.querySelector(".press-button");
const onclick = document.querySelector(".press-button");
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const answer = document.querySelector('p');




btn1.addEventListener('click', () => {
    answer.classList.add('showAnswer')
    answer.style.background = "red";
})

btn2.addEventListener('click', () => {
    answer.classList.add('showAnswer')
    answer.style.background = "green";
})


