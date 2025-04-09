
// // Sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://www.youtube.com/watch?v=wiozYyXQEVk
// https://www.youtube.com/watch?v=rVcphsUupws
// https://www.youtube.com/watch?v=kOp5dcmutCk
// https://www.youtube.com/watch?v=b0pxAb_yy2U


const funnyResponses = [
    { text: "You should keep that to yourself.", class: "green", img: "assets/Images/cat-painting.jpg"},
    { text: "As I see it, you're doomed.", class: "yellow" },
    { text: "Why would you hide that? Tell everybody.", class: "orange" },
    { text: "Very interesting...lol.", class: "pink" },
    { text: "You should do something about that!", class: "blue" }
];

// Function to scramble a word

function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

// Function to scramble and save the word

function scrambleAndSave() {
    let input = document.getElementById("wordInput").value.trim();
    if (input === "") {
        alert("Please enter a secret.");
        return;
    }
    
    let scrambled = scrambleWord(input);
    let randomIndex = Math.floor(Math.random() * funnyResponses.length);
    let randomResponse = funnyResponses[randomIndex];

    let historyList = document.getElementById("secret-list");
    
    let listItem = document.createElement("li");
    listItem.classList.add("entry");
    listItem.innerHTML = `
        <p class="response ${randomResponse.class}">${randomResponse.text}</p>
        <div>
            <h3 class="label">Your <em>hidden</em> secret</h3>
            <h3>${scrambled}</h3>
        </div>
    `;
    historyList.appendChild(listItem);
    
    document.getElementById("wordInput").value = "";
}

document.getElementById("jumbleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    scrambleAndSave();
});


// Function to generate one random answer
// Source: https://www.w3schools.com/js/js_random.asp

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
    answersList.innerHTML = ""; 

    let listItem = document.createElement("li");
    listItem.textContent = randomAnswer;
    answersList.appendChild(listItem);

    document.getElementById("questionInput").value = "";
}
