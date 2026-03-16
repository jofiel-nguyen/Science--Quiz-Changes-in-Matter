const questions = [
    {
        image: "https://www.sciencing.com/sciencing/ice-cubes-melting-process-5415212/be7b04f8385c4adfa1b458a1987ce567.jpg", // Ice melting
        answer: "physical",
        desc: "Correct! Melting ice is a physical change because it's still water."
    },
    {
        image: "https://rocketfiretorch.com/cdn/shop/articles/Tips_on_How_to_Keep_a_Fire_Burning_Longer-6119230.png?v=1758314909", // Fire/Burning
        answer: "chemical",
        desc: "Correct! Burning wood creates ash and smoke—new substances!"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaCkkwQlee8zyRHMgdJIaBpcFIsrUQBlnyDQ&s", // Rusty metal
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
