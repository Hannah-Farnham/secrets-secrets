// // Function to scramble a word
// function scrambleWord(word) {
//     return word
//         .split('')
//         .sort(() => Math.random() - 0.5)
//         .join('');
// }

// // Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// // Source: https://javascript.info/array-methods#sort-fn

// // Function to scramble and save the word
// function scrambleAndSave() {
//     let input = document.getElementById("wordInput").value.trim();
//     if (input === "") {
//         alert("Please enter a secret.");
//         return;
//     }
    
//     let scrambled = scrambleWord(input);
//     let historyList = document.getElementById("secret-list");

//     let listItem = document.createElement("li");
//     listItem.textContent = scrambled;
//     historyList.appendChild(listItem);

//     document.getElementById("wordInput").value = "";
// }