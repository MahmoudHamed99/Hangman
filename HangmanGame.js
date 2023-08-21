let letters = "abcdefghijklmnopqrstuvwxyz",
    lettersArray = Array.from(letters),
    lettersCont = document.querySelector(".letters");

lettersArray.forEach(letter => {
    let span = document.createElement("span"),
        spanText = document.createTextNode(letter);
        span.appendChild(spanText);
        span.classList.add("letter-box");
        lettersCont.appendChild(span);
})

const words = {
    programming: ["php", "javascript", "scala", "go", "python", "java", "swift", "mysql"],
    movies: ["avengers", "resala", "inception", "interstellar", "room", "coco", "up", "soul"],
    people: ["abu bakr", "omar ibn khattab", "othman", "ali", "khaled ibn walid"],
    countries: ["egypt","syria","palestine","saudi","emirates","sudan"]
}

let allkeys = Object.keys(words),
    randomNo1 = Math.floor(Math.random() * allkeys.length),
    randomKey = allkeys[randomNo1],
    randomKeyValues = words[randomKey],
    randomNo2 = Math.floor(Math.random() * randomKeyValues.length),
    randomValue = randomKeyValues[randomNo2];

document.querySelector(".category span").innerHTML = randomKey;

let guessLettersCont = document.querySelector(".letters-guess"),
    guessLetters = Array.from(randomValue);

guessLetters.forEach(guessLetter => {
    guessSpan = document.createElement("span");
    guessLettersCont.appendChild(guessSpan);
    if (guessLetter === " ") {
        guessSpan.classList.add("has-space");
    }
})

let clickedSpan = document.querySelectorAll(".letters-guess span"),
    wrongAttempts = 0,
    theDraw = document.querySelector(".game-draw");

document.addEventListener("click", (e) => {
    let theStatus = false;
    if (e.target.className == "letter-box") {
        e.target.classList.add("clicked");
        let clickedLetter = e.target.innerHTML.toLowerCase();
        guessLetters.forEach((wordLetter, index) => {
            if (wordLetter == clickedLetter) {
                theStatus = true;
                clickedSpan.forEach((span, spanIndex) => {
                    if (index == spanIndex) {
                        span.innerHTML = clickedLetter;
                    }
                })
            }
        })
    }
    if (theStatus !== true) {
        wrongAttempts++;
        theDraw.classList.add(`wrong-${wrongAttempts}`);
        if (wrongAttempts === 8) {
            endGame();
            lettersCont.classList.add("finished");
        }
    }
})
function endGame() {
    let div = document.createElement("div"),
        screen = document.createElement("div"),
        textDiv = document.createTextNode(`Game Over, The Word Is \"${randomValue}\"`);
    div.appendChild(textDiv);
    div.className = "popup";
    screen.className = "black";
    document.body.appendChild(div);
    document.body.appendChild(screen);
}