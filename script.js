
// // Sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://www.youtube.com/watch?v=wiozYyXQEVk
// https://www.youtube.com/watch?v=rVcphsUupws
// https://www.youtube.com/watch?v=kOp5dcmutCk
// https://www.youtube.com/watch?v=b0pxAb_yy2U
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

// ARRAY to generate a random response

const secretResponses = [
    { text: "Text it to yourself. Schedule it to send next Tuesday. Reflect.", class: "green", img: "assets/Images/Personas/cat-green-1.png" },
    { text: "Create a moodboard that matches how this feels.", class: "green", img: "assets/Images/Personas/cat-green-2.png" },
    { text: "Learn how to say this in German.", class: "green", img: "assets/Images/Personas/cat-green-3.png" },
    { text: "Tell one person you trust.", class: "green", img: "assets/Images/Personas/cat-green-1.png" },

    { text: "Say it in a British accent. Suddenly less scary, right?", class: "yellow", img: "assets/Images/Personas/cat-yellow-1.png"  },
    { text: "Write it on a sticky note. Burn the note. Dance around the ashes.", class: "yellow", img: "assets/Images/Personas/cat-yellow-2.png"  },
    { text: "Change your phone wallpaper.", class: "yellow", img: "assets/Images/Personas/cat-yellow-3.png"  },
    { text: "Walk until you find a weird rock.", class: "yellow", img: "assets/Images/Personas/cat-yellow-3.png"  },

    { text: "Send a text, make a phone call.", class: "orange", img: "assets/Images/Personas/cat-orange-1.png"  },
    { text: "Confront the situation head-on.", class: "orange", img: "assets/Images/Personas/cat-orange-2.png"  },
    { text: "Go to the grocery store and only buy red items.", class: "orange", img: "assets/Images/Personas/cat-orange-3.png"  },
    { text: "Handle it now, before it handles you.", class: "orange", img: "assets/Images/Personas/cat-orange-1.png"  },

    { text: "Start planning a trip.", class: "pink", img: "assets/Images/Personas/cat-pink-2.png"  },
    { text: "You need a new haircut.", class: "pink", img: "assets/Images/Personas/cat-pink-3.png"  },
    { text: "Open your camera roll, and find a photo from 04/02/2022", class: "pink", img: "assets/Images/Personas/cat-pink-1.png"  },
    { text: "You need to get ahead of this. Or behind it. Or beneath a blanket.", class: "pink", img: "assets/Images/Personas/cat-pink-2.png"  },

    { text: "You should whisper that to the moon.", class: "blue", img: "assets/Images/Personas/cat-blue-1.png"  },
    { text: "Shuffle your saved songs. This is your answer.", class: "blue", img: "assets/Images/Personas/cat-blue-1.png"  },
    { text: "This might be your sign to open up—just a little.", class: "blue", img: "assets/Images/Personas/cat-blue-3.png"  },
    { text: "Tell your plant, see if it wilts.", class: "blue", img: "assets/Images/Personas/cat-blue-1.png"  },
];
// These are my different secret responses. "secretResponses" is an array and it's full of objects, which are the different responses someone can get when they enter a secret into the form. 


// FUNCTION to scramble a word

function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}
// The math assigns a number to each letter, then this randomly rearranges the letters. Join puts everything back together.


// FUNCTION to scramble and save the word

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
//Finds the list in the html
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

    let oldNewest = historyList.querySelector(".newest");
    if (oldNewest) oldNewest.classList.remove("newest");
//resets previous newest answer
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
    `;//the inner HTML for each entry
    historyList.insertBefore(listItem, historyList.firstChild);
//this makes sure the newest secret appears first
//https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
    const yOffset = -400;
    const y = listItem.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    //scrolls to the response
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo

let scrambledEl = listItem.querySelector(".scrambled-text");

scrambledEl.addEventListener("mouseenter", function () {
    this.textContent = this.dataset.original;
});

scrambledEl.addEventListener("mouseleave", function () {
    this.textContent = scrambled;
});
//unscrambles the secret on hover
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

    document.getElementById("wordInput").value = "";
    document.getElementById("reset-link").style.display = "inline";
}
//clears the input and shows the reset button

document.getElementById("reset-link").addEventListener("click", function (e) {
    e.preventDefault();

    const confirmReset = confirm("Are you sure you want to destroy all your secrets?");

    if (confirmReset) {
        document.getElementById("secret-list").innerHTML = "";
        this.style.display = "none";
    }
});
//when reset link is clicked, this asks for confirmation and then removes all secrets

document.getElementById("jumbleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    scrambleAndSave();
});