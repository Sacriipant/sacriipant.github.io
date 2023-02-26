const reponse = document.getElementById('reponse'); 
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const prvsBtn = document.getElementById('prvsBtn');
const nextBtn = document.getElementById('nextBtn');
const question1 = document.getElementById("question");
let beat = new Audio("beat.mp3");



const Questions = [{
        id: 0,
        q: "Sur une èchel de 1 à 10 set qoi ton typ de mec ?",
        a: [{ text: "1m62", isCorrect: false },
            { text: "gaucher", isCorrect: true }
        ]
 
    },
    {
        id: 1,
        q: "T la poule ki mange l'oeuf ou l'oeuf ki mang la poule",
        a: [{ text: "la poule", isCorrect: true},
            { text: "l'oeuf", isCorrect: false }
        ]
 
    },
    {
        id: 2,
        q: "Tu pref la vie ou la mort",
        a: [{ text: "la vie", isCorrect: false },
            { text: "la mort", isCorrect: true }
        ]
    },
    {
        id: 3,
        q: "Tu sus ?",
        a: [{ text: "askip", isCorrect: false },
            { text: "vitfai", isCorrect: true }
        ]
    }
 
]


var step = 0;
question1.innerText = Questions[step].q;
btn1.innerText = Questions[step].a[0].text;
btn2.innerText = Questions[step].a[1].text;
     
function nav(step) {
    question1.innerText = Questions[step].q;
    btn1.innerText = Questions[step].a[0].text;
    btn2.innerText = Questions[step].a[1].text; 
}



btn1.addEventListener('click', () => {
    btn1.style.background = "rgba(0, 188, 0, 0.5)";
    btn2.style.background = "rgba(195, 0, 0, 0.5)";
})

btn2.addEventListener('click', () => {
    btn1.style.background = "rgba(195, 0, 0, 0.5)";
    btn2.style.background = "rgba(0, 188, 0, 0.5)";
})

prvsBtn.addEventListener('click', () => {
    if (step > 0) {
        --step;
        nav(step);
    }
})

nextBtn.addEventListener('click', () => {
    console.log(step);
    if (step < 3) {
        ++step;
        nav(step);
        btn1.style.background = "RGBA(139, 118, 165, 0.21)";
        btn2.style.background = "RGBA(139, 118, 165, 0.21)";
    }
    else if(step == 3) {
        // navigator.vibrate(200) // vibrate 200ms
        alert("Gagné tu merit de m'epouser :)");
        beat.play();
    }
})

