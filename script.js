
// // Sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://www.youtube.com/watch?v=wiozYyXQEVk
// https://www.youtube.com/watch?v=rVcphsUupws
// https://www.youtube.com/watch?v=kOp5dcmutCk
// https://www.youtube.com/watch?v=b0pxAb_yy2U
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

// Array to genereate a random response

const secretResponses = [
    { text: "Tell it to a plant and see if it wilts.", class: "green", img: "assets/Images/neutral-cat.png" },
    { text: "The universe knows… but won’t tell.", class: "green", img: "assets/Images/neutral-cat.png"  },
    { text: "Text it to yourself. Schedule it to send next Tuesday. Reflect.", class: "green", img: "assets/Images/neutral-cat.png"  },
    { text: "Do not say that at brunch.", class: "yellow", img: "assets/Images/yellow-cat.png"  },
    { text: "Whisper it into your pillow. Then flip the pillow and move on.", class: "yellow", img: "assets/Images/yellow-cat.png"  },
    { text: "Write it on a sticky note. Burn the note. Dance around the ashes.", class: "yellow", img: "assets/Images/yellow-cat.png"  },
    { text: "Keep it buried—deep.", class: "orange", img: "assets/Images/orange-cat.png"  },
    { text: "You’re allowed to rewrite the story.", class: "orange", img: "assets/Images/orange-cat.png"  },
    { text: "You’re gonna need a lawyer and a priest.", class: "orange", img: "assets/Images/orange-cat.png"  },
    { text: "The spirits are conflicted.", class: "pink", img: "assets/Images/pink-cat.png"  },
    { text: "Say it in a British accent. Suddenly less scary, right?", class: "pink", img: "assets/Images/pink-cat.png"  },
    { text: "Put that one in rice.", class: "pink", img: "assets/Images/pink-cat.png"  },
    { text: "This might be your sign to open up—just a little.", class: "pink", img: "assets/Images/pink-cat.png"  },
    { text: "You should whisper that to the moon.", class: "blue", img: "assets/Images/blue-cat.png"  },
    { text: "Ask yourself: will this still matter in a year?", class: "blue", img: "assets/Images/blue-cat.png"  },
    { text: "Truth is powerful—but timing is everything.", class: "blue", img: "assets/Images/blue-cat.png"  }
];

// These are my different secret responses. "secretResponses" is an array and it's full of objects, which are the different responses someone can get when they enter a secret into the form. 

// Function to scramble a word

function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

// The math assigns a number to each letter, then this randomly rearranges the letters. Join puts everything back together.

// Function to scramble and save the word

function scrambleAndSave() {
    let input = document.getElementById("wordInput").value.trim();
//Takes the text from the input, and removes white space

    if (input === "") {
        alert("Please enter a secret.");
      return;
    }
//This defines what is said in the modal when the user doesn't enter anything but presses the button

    let scrambled = scrambleWord(input);
    let randomIndex = Math.floor(Math.random() * secretResponses.length);
    let randomResponse = secretResponses[randomIndex];

//This picks a random answer from the secretResponses list  

    let historyList = document.getElementById("secret-list");
    
    let listItem = document.createElement("li");
    listItem.classList.add("entry");
    listItem.innerHTML = `
        <div class="character-bubble">
            <div class="response-image ${randomResponse.class}">
                <img src="${randomResponse.img}" alt="cat-image" class="response-img"/>
            </div>
            <div class="response-text">
                 <p class="response ${randomResponse.class}">${randomResponse.text}</p>
            </div>
        </div>
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

