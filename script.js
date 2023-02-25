const reponse = document.getElementById('reponse'); 
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const prvsBtn = document.getElementById('prvsBtn');
const nextBtn = document.getElementById('nextBtn');
const question1 = document.getElementById("question");


const Questions = [{
        id: 0,
        q: "Question 1",
        a: [{ text: "i-btn1", isCorrect: false },
            { text: "i-btn2", isCorrect: true }
        ]
 
    },
    {
        id: 1,
        q: "Question 2",
        a: [{ text: "1", isCorrect: true},
            { text: "2", isCorrect: false }
        ]
 
    },
    {
        id: 2,
        q: "Question 3",
        a: [{ text: "1", isCorrect: false },
            { text: "2", isCorrect: true }
        ]
    }
 
]


var step = 0;
question1.innerText = Questions[step].q;

function nav(step) {
    question1.innerText = Questions[step].q;
    btn1.innerText = Questions[step].a[0].text;
    btn2.innerText = Questions[step].a[1].text; 
}



btn1.addEventListener('click', () => {
    reponse.classList.add('showGoodAnswer')
})

btn2.addEventListener('click', () => {
    reponse.classList.add('showBadAnswer')
})

prvsBtn.addEventListener('click', () => {
    if (step > 0) {
        --step;
        nav(step);
    }
})

nextBtn.addEventListener('click', () => {
    if (step < 2) {
        ++step;
        nav(step);
    }
})

