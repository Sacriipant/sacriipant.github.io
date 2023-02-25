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


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// suit la souris

const souris = document.querySelector(".mousemove");
const questionContainer = document.querySelector(".box")



window.addEventListener("mousemove", (e) => {
    souris.style.left = e.pageX + "px";
    souris.style.top = e.pageY + "px"; 
});

window.addEventListener("mouseup", () => {
    souris.style.transform = "scale(1) translate(-50%, -50%)";
    souris.style.transition = "none"
})

window.addEventListener("mousedown", () => {
    souris.style.transform = "scale(2) translate(-25%, -25%)";
    souris.style.transition = "0.3s ease"
 })
 
questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.opacity = "50%"
})

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.opacity = "100%"
})

