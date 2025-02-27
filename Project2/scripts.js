let cards = [];
let firstCard = null;
let secondCard = null;
let score = 0;
let highScores = { fruits: 0, emojis: 0, animals: 0, planets: 0 };
let timer;
let timeLeft = 30;
let selectedCategory = "";

const categories = {
    fruits: ["🍎", "🍌", "🍇", "🍉", "🍓", "🥭", "🍍", "🍑"],
    emojis: ["😊", "😂", "😍", "🤔", "😎", "😡", "😭", "😴"],
    animals: ["🐶", "🐱", "🐵", "🐘", "🐸", "🐢", "🦉", "🐺"],
    planets: ["🌍", "🪐", "🌕", "🌑", "☀️", "⭐", "🌟", "🌌"]
};

function startGame(category) {
    selectedCategory = category;
    document.getElementById("category-selection").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("game-over").style.display = "none";
    
    generateCards(category);
    startTimer();
}

function generateCards(category) {
    let board = document.getElementById("board");
    board.innerHTML = "";
    
    let symbols = [...categories[category], ...categories[category]];
    symbols.sort(() => Math.random() - 0.5);
    
    symbols.forEach(symbol => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol;
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    if (this.classList.contains("flipped") || secondCard) return;

    this.textContent = this.dataset.symbol;
    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        checkMatch();
    }
}

function checkMatch() {
    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        score += 10;
        firstCard = null;
        secondCard = null;
    } else {
        setTimeout(() => {
            firstCard.textContent = "";
            secondCard.textContent = "";
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            firstCard = null;
            secondCard = null;
        }, 800);
    }
}

function startTimer() {
    timeLeft = 30;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft === 0) endGame();
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    document.getElementById("final-score").textContent = score;
    
    if (score > highScores[selectedCategory]) {
        highScores[selectedCategory] = score;
    }
    
    document.getElementById("high-score").textContent = highScores[selectedCategory];
    document.getElementById("game-container").style.display = "none";
    document.getElementById("game-over").style.display = "block";
}

function restartGame(playAgain) {
    document.getElementById("game-over").style.display = "none"; // Hide Game Over section

    if (playAgain) {
        startGame(selectedCategory); // Restart game in the same category
    } else {
        document.getElementById("category-selection").style.display = "block"; // Show category selection
    }
}

