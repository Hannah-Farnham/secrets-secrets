
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
    { text: "Text it to yourself. Schedule it to send next Tuesday. Reflect.", class: "green", img: "assets/Images/Personas/cat-green-1.png" },
    { text: "Let it marinate. If it still matters tomorrow, we’ll talk.", class: "green", img: "assets/Images/Personas/cat-green-2.png"  },
    { text: "Put that one in rice.", class: "green", img: "assets/Images/Personas/cat-green-3.png"  },

    { text: "Say it in a British accent. Suddenly less scary, right?", class: "yellow", img: "assets/Images/Personas/cat-yellow-1.png"  },
    { text: "Write it on a sticky note. Burn the note. Dance around the ashes.", class: "yellow", img: "assets/Images/Personas/cat-yellow-2.png"  },
    { text: "You didn’t just spill tea—you opened a whole café.", class: "yellow", img: "assets/Images/Personas/cat-yellow-3.png"  },

    { text: "Keep it buried—deep.", class: "orange", img: "assets/Images/Personas/cat-orange-1.png"  },
    { text: "Do not say that at brunch!", class: "orange", img: "assets/Images/Personas/cat-orange-2.png"  },
    { text: "Slam it in the vault and throw the vault in the ocean.", class: "orange", img: "assets/Images/Personas/cat-orange-3.png"  },

    { text: "Okay wow. I need a nap and a drink.", class: "pink", img: "assets/Images/Personas/cat-pink-1.png"  },
    { text: "You’re gonna need a lawyer and a priest.", class: "pink", img: "assets/Images/Personas/cat-pink-2.png"  },
    { text: "You need a burner phone and a new haircut.", class: "pink", img: "assets/Images/Personas/cat-pink-3.png"  },
    { text: "My eyebrows are in orbit.", class: "pink", img: "assets/Images/Personas/cat-pink-1.png"  },
    { text: "You need to get ahead of this. Or behind it. Or beneath a blanket.", class: "pink", img: "assets/Images/Personas/cat-pink-2.png"  },

    { text: "You should whisper that to the moon.", class: "blue", img: "assets/Images/Personas/cat-blue-1.png"  },
    { text: "Whisper it into your pillow. Then flip the pillow and move on.", class: "blue", img: "assets/Images/Personas/cat-blue-2.png"  },
    { text: "This might be your sign to open up—just a little.", class: "blue", img: "assets/Images/Personas/cat-blue-3.png"  },
    { text: "Tell your plant, see if it wilts.", class: "blue", img: "assets/Images/Personas/cat-blue-1.png"  },
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

    let oldNewest = historyList.querySelector(".newest");
    if (oldNewest) oldNewest.classList.remove("newest");

    let listItem = document.createElement("li");
    listItem.classList.add("entry");
    listItem.classList.add("newest");
    listItem.classList.add("fade-in");
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
            <h3 class="scrambled-text" data-original="${input}">${scrambled}</h3>
        </div>
    `;
    historyList.insertBefore(listItem, historyList.firstChild);

    const yOffset = -400;
    const y = listItem.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({ top: y, behavior: 'smooth' });
    //scrolls to the response

let scrambledEl = listItem.querySelector(".scrambled-text");

scrambledEl.addEventListener("mouseenter", function () {
    this.textContent = this.dataset.original;
});

scrambledEl.addEventListener("mouseleave", function () {
    this.textContent = scrambled;
});
//unscrambles the secret

    document.getElementById("wordInput").value = "";
    document.getElementById("reset-link").style.display = "inline";
}

document.getElementById("reset-link").addEventListener("click", function (e) {
    e.preventDefault();

    const confirmReset = confirm("Are you sure you want to destroy all your secrets?");

    if (confirmReset) {
        document.getElementById("secret-list").innerHTML = "";
        this.style.display = "none";
    }
});

document.getElementById("jumbleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    scrambleAndSave();
});