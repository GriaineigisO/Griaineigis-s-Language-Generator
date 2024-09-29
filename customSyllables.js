import { cloneArray } from './library.js';
import {selectedSyllables} from './generatePhonology.js'

let categoryA = [];
let categoryB = [];
let categoryD = [];
let categoryE = [];
let categoryF = [];
let categoryG = [];
let categoryH = [];
let categoryI = [];
let categoryJ = [];
let categoryK = [];
let categoryL = [];
let categoryM = [];
let categoryN = [];
let categoryO = [];
let categoryP = [];
let categoryQ = [];
let categoryR = [];
let categoryS = [];
let categoryT = [];
let categoryU = [];
let categoryW = [];
let categoryX = [];
let categoryY = [];
let categoryZ = [];

//shows language customisation options
let randomisedButton = document.getElementById("randomised");
let customisedButton = document.getElementById("customised");
let randomOption = true;

function randomise() {
    if(randomisedButton.checked) {
        randomOption = true;
    };
};

function customise() {
    if(customisedButton.checked) {
        randomOption = false;
    };
};
randomisedButton.addEventListener("click", randomise);
customisedButton.addEventListener("click", customise);



//C and V are purposefully omitted
let alphabetArray = ["A", "B", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "X", "Y", "Z"];

//adds new syllable category dropdown menu and text field when "Add New Category" is clicked
let clickCount = 0;
function addNewCategory() {
    if(randomOption === false) {
        let arrayIndex = 0;

        //makes new div to contain the dropdown menu and textfield
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "syllable-category-container");
        document.getElementById("syllable-category-div").appendChild(newDiv);

        //makes label for the dropdown menu
        let newLabel = document.createElement("label");
        let labelID = "syllable-category-form" + clickCount;
        newLabel.setAttribute('for', labelID);
        newLabel.innerHTML = "Sound Category ";
        newDiv.appendChild(newLabel);

        //makes new select/dropdown menu
        let newSelect = document.createElement("select");
        let selectID = "syllable-category-form" + clickCount;
        newSelect.setAttribute('id', selectID);
        newDiv.appendChild(newSelect);

        //adds all the options, letters "A" to "Z" but without "C" and "V" to the select element
        for(let i = 0; i < alphabetArray.length; i++) {
            let newOption = document.createElement("option");
            newOption.value = alphabetArray[arrayIndex];
            newOption.innerHTML = alphabetArray[arrayIndex];
            arrayIndex++;
            newSelect.appendChild(newOption);
        };

        //makes text field
        let newInput = document.createElement("input");
        newInput.type = "text";
        let inputID = "cat-" + clickCount;
        newInput.setAttribute("id", inputID);
        newDiv.appendChild(newInput);

        clickCount++;
    };
};

document.getElementById("add-new-syllable-category-button").addEventListener('click', addNewCategory);




//when the generate language button is pushed, each category, signified by a capital letter, becomes associated with whatever letters were inserted into the associated text field
function defineCategory() {
    if(randomOption === false) {
        //iterate through syllable-category-div's children
        let syllableCategoryDiv = document.getElementById("syllable-category-div");
        let children = syllableCategoryDiv.children;

        for (let i = 0; i < children.length; i++) {

            //make an array out of the inserted text
            let inputID = "cat-" + i;
            let textField = document.getElementById(inputID).value;
            let inputArray = Array.from(textField);

            for(let j = 0; j < inputArray.length; j++) {
                //if the next index is not a comma, then the character in the next index is meant to be part of the same sound, usually if the next character is a superscript like ʷ ʰ ʲ 
                if(inputArray[j+1] !== " " && inputArray[j] !== " ") {
                    inputArray[j] = inputArray[j] + inputArray[j+1];
                    inputArray.splice(j+1,1);
                };

                //with the desired characters now merged, the commas can be removed
                if(inputArray[j] === " ") {
                    inputArray.splice(j,1)
                };

                //clones the array to an array named with the appropiate category letter
                if(document.getElementById("syllable-category-form" + i).value === "A") {
                    categoryA = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "B") {
                    categoryB = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "D") {
                    categoryD = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "E") {
                    categoryB = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "F") {
                    categoryE = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "B") {
                    categoryF = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "G") {
                    categoryG = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "H") {
                    categoryH = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "I") {
                    categoryI = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "J") {
                    categoryJ = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "K") {
                    categoryK = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "L") {
                    categoryL = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "M") {
                    categoryM = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "N") {
                    categoryN = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "O") {
                    categoryO = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "P") {
                    categoryP = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "Q") {
                    categoryQ = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "R") {
                    categoryR = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "S") {
                    categoryS = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "T") {
                    categoryT = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "U") {
                    categoryU = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "W") {
                    categoryW = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "X") {
                    categoryX = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "Y") {
                    categoryY = cloneArray(inputArray);
                };
                if(document.getElementById("syllable-category-form" + i).value === "Z") {
                    categoryZ = cloneArray(inputArray);
                };
            };

        };
    };
};

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", defineCategory);

//takes the syllable structures entered into #chosen-syllables and inserts them into selectedSyllables 
function acceptGivenSyllableStructures() {
    if(randomOption === false) {
        let chosenSyllableInput = document.getElementById("chosen-syllables").value;
        let newArray = Array.from(chosenSyllableInput);

        //the selectedSyllables array is emptied of its former, random, contents
        selectedSyllables.length = 0;

        for(let i = 0; i < newArray.length; i++) {
            //if the next index is not a comma, then the character in the next index is meant to be part of the same sound, usually if the next character is a superscript like ʷ ʰ ʲ 
            if(i !== 0 && newArray[i] !== " " && newArray[i-1] !== " ") {
                newArray[i] = newArray[i-1] + newArray[i];
                newArray[i-1] = "!"
            };
        };

        for(let i = 0; i < newArray.length; i++) {
            //with the desired characters now merged, the desired indexes "ones that are not " ", or "!", are left behind as the other indexes are pushed to selectedSyllables 
            if(newArray[i] !== " " && newArray[i] !== "!") {
                selectedSyllables.push(newArray[i]);
            };
        };
    }
};

generateLanguageButton.addEventListener("click", acceptGivenSyllableStructures);


function addCustomNote() {
    let note = document.getElementById("syllable-structure-notes").value;
    let explanationInDoc = document.getElementById("custom-syllable-note");
    explanationInDoc.innerHTML = note;
}

generateLanguageButton.addEventListener("click", addCustomNote);



export {
    categoryA,
    categoryB,
    categoryD,
    categoryE,
    categoryF,
    categoryG,
    categoryH,
    categoryI,
    categoryJ,
    categoryK,
    categoryL,
    categoryM,
    categoryN,
    categoryO,
    categoryP,
    categoryQ,
    categoryR,
    categoryS,
    categoryT,
    categoryU,
    categoryW,
    categoryX,
    categoryY,
    categoryZ,
    selectedSyllables
};