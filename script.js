// Function to scramble a word
function scrambleWord(word) {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
}

// Function to scramble and save the word
function scrambleAndSave() {
    let input = document.getElementById("wordInput").value.trim();
    if (input === "") {
        alert("Please enter a secret.");
        return;
    }
    
    let scrambled = scrambleWord(input);
    let historyList = document.getElementById("secret-list");

    let listItem = document.createElement("li");
    listItem.textContent = scrambled;
    historyList.appendChild(listItem);

    document.getElementById("wordInput").value = "";
}

// Function to generate one random answer
function generateAnswers() {
    let input = document.getElementById("questionInput").value.trim();
    if (input === "") {
        alert("Please enter a question.");
        return;
    }

    let possibleAnswers = [
        "It is certain", "Without a doubt", "It is decidedly so", "Try again later", "You may rely on it",
        "As I see it, yes","Most likely","Outlook good",
        "Absolutely", "Not a chance", "It’s uncertain", "Reply hazy, try again",
        "Don't count on it", "Absolutely not", "My sources say no",
        "Definitely", "I don’t think so", "Ask again later"
    ];

    let randomAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];

    let answersList = document.getElementById("answers-list");
    answersList.innerHTML = ""; // Clear previous answers

    let listItem = document.createElement("li");
    listItem.textContent = randomAnswer;
    answersList.appendChild(listItem);

    document.getElementById("questionInput").value = "";
}