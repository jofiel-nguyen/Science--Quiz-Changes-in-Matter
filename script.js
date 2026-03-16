const questions = [
    {
        image: "https://images.unsplash.com/photo-1516339901600-2e3a8ad0f1d5?w=500", // Ice melting
        answer: "physical",
        desc: "Correct! Melting ice is a physical change because it's still water."
    },
    {
        image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=500", // Fire/Burning
        answer: "chemical",
        desc: "Correct! Burning wood creates ash and smoke—new substances!"
    },
    {
        image: "https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?w=500", // Rusty metal
        answer: "chemical",
        desc: "Correct! Rust is a chemical reaction between iron and oxygen."
    }
];

let currentIndex = 0;

function loadQuestion() {
    const question = questions[currentIndex];
    document.getElementById("change-image").src = question.image;
    document.getElementById("feedback").innerText = "";
    document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(userChoice) {
    const question = questions[currentIndex];
    const feedback = document.getElementById("feedback");

    if (userChoice === question.answer) {
        feedback.innerText = question.desc;
        feedback.style.color = "green";
        document.getElementById("next-btn").style.display = "inline-block";
    } else {
        feedback.innerText = "Try again! Think about if a new substance was made.";
        feedback.style.color = "red";
    }
}

function nextQuestion() {
    currentIndex = (currentIndex + 1) % questions.length;
    loadQuestion();
}

// Attach the next button to the logic
document.getElementById("next-btn").onclick = nextQuestion;

// Initialize the first question
loadQuestion();
