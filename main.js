// //Setting Game Name
// let gameName = "Guess The Word";
// document.title = gameName;
// document.querySelector("h1").innerHTML = gameName;
// document.querySelector("footer").innerHTML = `${gameName} Game Created by Ahmad`;

// //Setting Game-Options 
// let numberOfTries = 6;
// let numberOfLetters = 5;
// let CurrentTry = 1;

// function generateInput(){
//     const inputsContainer = document.querySelector(".inputs");
//     //Create Main Try Div
//     for(let i = 1;i<= numberOfTries ;i++){
//         const tryDiv = document.createElement("div");
//         tryDiv.classList.add(`try-${i}`);
//         tryDiv.innerHTML = `<span>try ${i}</span>`;

//         if(i!==1) tryDiv.classList.add("disabled-inputs");

//         //Create inputs
//         for(let j = 1;j<=numberOfLetters;j++){
//             const input = document.createElement("input");
//             input.type = "text";
//             input.id = `guess-${i}-letter-${j}`;
//             input.setAttribute("maxlength","1");
//             tryDiv.appendChild(input);
//         }

//         inputsContainer.appendChild(tyrDiv);
//     }
// }

// window.addEventListener("load",generateInput());

//the code from Hamza.......................................................................................................................

// sitting game name
let gameName = "Game The Word";
document.title=gameName;
document.querySelector("h1").innerHTML=gameName;
document.querySelector("footer").innerHTML=`${gameName}  Created By Hamza `;

// sitting game options
let numbersOfTries = 5;
let numbersOfLetters = 6;
let currentTry = 1;


// Manage Words 

let wordToGuess = "";

const words =["Create", "Ahmada", "Ahlana" , "Google" , "Lalalo" , "Foqaha"];

wordToGuess = words[Math.floor(Math.random() * words.length)].toLowerCase();

console.log(wordToGuess);
let messageArea = document.querySelector(".message");


function generateInput(){
const inputsContainer = document.querySelector(".inputs");

// creat main try div
for (let i = 1; i <=numbersOfTries; i++) {
const tryDiv = document.createElement("div");
tryDiv.classList.add(`try-${i}`); 
tryDiv.innerHTML=`<span>Try${i}</span> `;

if (i!==1) tryDiv.classList.add("disabled-inputs"); 

// creat inputs

for (let j = 1; j <=numbersOfLetters; j++) {
    const input = document.createElement("input");
    input.type = "text";
    input.id = `guess-${i}-letter-${j}`
    input.setAttribute("max-length","1");
    tryDiv.appendChild(input);
}
inputsContainer.appendChild(tryDiv);
}
inputsContainer.children[0].children[1].focus();

// disaple all inputs except first one 

const inputsInDisabledDiv = document.querySelectorAll(".disabled-inpts input");
inputsInDisabledDiv.forEach((input) =>(input.disabled=true));

const inputs = document.querySelectorAll("input");
inputs.forEach((input, index) => {

    // Convert Input To Uppercase
input.addEventListener("input",function () {
        this.value=this.value.toUpperCase();
        const nextInput = inputs[index + 1];
        if (nextInput) nextInput.focus();
    });

    input.addEventListener("keydown", function (event) {
        // consol.log(event);
        const currentIndex = Array.from(inputs).indexOf(event.target); //Or this
        // console.log(currentIndex);
        if(event.key === "ArrowRight"){
            const nextInput =currentIndex + 1;
            if(nextInput < inputs.length) inputs[nextInput].focus();
        }
        if(event.key === "ArrowLeft"){
            const prevInput =currentIndex - 1;
            if(prevInput >= 0) inputs[prevInput].focus();
        }
        
    });
});
}

const guessButton = document.querySelector(".check");
guessButton.addEventListener("click", handleGuesses);

function handleGuesses(){
    console.log(wordToGuess);
let successGuess = true ;
console.log(wordToGuess);
for (let i = 1;i <= numbersOfLetters ;i++){
    const inputField = document.querySelector(`#guess-${currentTry}-letter-${i}`);
    const letter =inputField.value.toLowerCase();
    const actualLetter = wordToGuess[i - 1];

    //Game Logic 
    if(letter == actualLetter) {
        //Letter is Correct and in place
        inputField.classList.add("yes-in-place");
    } else if (wordToGuess.includes(letter)) {
        //Letter is Correct but not in place
        inputField.classList.add("not-in-place");
        successGuess=false;
    } else {
        //Letter is Wrong and not in place 
        inputField.classList.add("no");
        successGuess = false;
    }
    
}

// Check if the User Win Or Lose 

    if(successGuess) {
        messageArea.innerHTML = `You Win The Word is <span>${wordToGuess}</span>`;
        // To disable all thing after success 

        let allTries = document.querySelectorAll(".inputs > div");
        allTries.forEach((tryDiv) => tryDiv.classList.add("disabled-inputs")); 

        // Disable Guess Button 
        guessButton.disabled = true;

    } else {

    }


}


window.onload = function(){
    generateInput();
};



