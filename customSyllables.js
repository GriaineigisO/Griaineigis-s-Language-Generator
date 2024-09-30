import { cloneArray } from './library.js';
import {selectedSyllables} from './generatePhonology.js'

let selectedAffixSyllables = [];

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

let categoryAffixA = [];
let categoryAffixB = [];
let categoryAffixD = [];
let categoryAffixE = [];
let categoryAffixF = [];
let categoryAffixG = [];
let categoryAffixH = [];
let categoryAffixI = [];
let categoryAffixJ = [];
let categoryAffixK = [];
let categoryAffixL = [];
let categoryAffixM = [];
let categoryAffixN = [];
let categoryAffixO = [];
let categoryAffixP = [];
let categoryAffixQ = [];
let categoryAffixR = [];
let categoryAffixS = [];
let categoryAffixT = [];
let categoryAffixU = [];
let categoryAffixW = [];
let categoryAffixX = [];
let categoryAffixY = [];
let categoryAffixZ = [];


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

        //makes delete button
        let newDeleteButton = document.createElement("input");
        newDeleteButton.type = "submit";
        let newDeleteButtonID = "cat-button-" + clickCount;
        newDeleteButton.setAttribute("id", newDeleteButtonID);
        newDeleteButton.value = "Remove";
        newDiv.appendChild(newDeleteButton);

        newDeleteButton.addEventListener("click", () => {
            newDiv.remove()
            }
        );

        clickCount++;
    };
};

document.getElementById("add-new-syllable-category-button").addEventListener('click', addNewCategory);

//adds new syllable category dropdown menu and text field when "Add New Category" is clicked
let affixClickCount = 0;
function addNewAffixCategory() {
    if(randomOption === false) {
        let arrayIndex = 0;

        //makes new div to contain the dropdown menu and textfield
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "affix-syllable-category-container");
        document.getElementById("affix-syllable-category-div").appendChild(newDiv);

        //makes label for the dropdown menu
        let newLabel = document.createElement("label");
        let labelID = "affix-syllable-category-form" + affixClickCount;
        newLabel.setAttribute('for', labelID);
        newLabel.innerHTML = "Sound Category ";
        newDiv.appendChild(newLabel);

        //makes new select/dropdown menu
        let newSelect = document.createElement("select");
        let selectID = "affix-syllable-category-form" + affixClickCount;
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
        let inputID = "affix-cat-" + affixClickCount;
        newInput.setAttribute("id", inputID);
        newDiv.appendChild(newInput);

        //makes delete button
        let newDeleteButton = document.createElement("input");
        newDeleteButton.type = "submit";
        let newDeleteButtonID = "affix-cat-button-" + affixClickCount;
        newDeleteButton.setAttribute("id", newDeleteButtonID);
        newDeleteButton.value = "Remove";
        newDiv.appendChild(newDeleteButton);

        newDeleteButton.addEventListener("click", () => {
            newDiv.remove()
            }
        );

        affixClickCount++;
    };
};

document.getElementById("add-new-affix-syllable-category-button").addEventListener('click', addNewAffixCategory);


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

            let arrayWithoutSpace = [];

            for(let j = 0; j < inputArray.length; j++) {
                //if the next index is not a white space, then the character in the next index is meant to be part of the same sound, usually if the next character is a superscript like ʷ ʰ ʲ 
                if(j !== inputArray.length - 1) {
                    if(inputArray[j+1] !== " " && inputArray[j] !== " ") {
                    inputArray[j] = inputArray[j] + inputArray[j+1];
                    inputArray[j+1] = " "
                    };
                };
                
                //with the desired characters now merged, the white space can be removed
                if(inputArray[j] !== " ") {
                    arrayWithoutSpace.push(inputArray[j]);
                };


                //clones the array to an array named with the appropiate category letter
                if(document.getElementById("syllable-category-form" + i).value === "A") {
                    categoryA = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "B") {
                    categoryB = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "D") {
                    categoryD = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "E") {
                    categoryB = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "F") {
                    categoryE = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "B") {
                    categoryF = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "G") {
                    categoryG = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "H") {
                    categoryH = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "I") {
                    categoryI = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "J") {
                    categoryJ = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "K") {
                    categoryK = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "L") {
                    categoryL = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "M") {
                    categoryM = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "N") {
                    categoryN = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "O") {
                    categoryO = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "P") {
                    categoryP = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "Q") {
                    categoryQ = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "R") {
                    categoryR = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "S") {
                    categoryS = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "T") {
                    categoryT = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "U") {
                    categoryU = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "W") {
                    categoryW = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "X") {
                    categoryX = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "Y") {
                    categoryY = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("syllable-category-form" + i).value === "Z") {
                    categoryZ = cloneArray(arrayWithoutSpace);
                };
            };
        };
    };
};

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", defineCategory);

//when the generate language button is pushed, each category, signified by a capital letter, becomes associated with whatever letters were inserted into the associated text field
function defineAffixCategory() {
    let arrayWithoutSpace = [];
    if(randomOption === false) {
        //iterate through syllable-category-div's children
        let syllableCategoryDiv = document.getElementById("affix-syllable-category-div");
        let children = syllableCategoryDiv.children;

        for (let i = 0; i < children.length; i++) {

            //make an array out of the inserted text
            let inputID = "affix-cat-" + i;
            let textField = document.getElementById(inputID).value;
            let inputArray = Array.from(textField);

            for(let j = 0; j < inputArray.length; j++) {
                //if the next index is not a comma, then the character in the next index is meant to be part of the same sound, usually if the next character is a superscript like ʷ ʰ ʲ 
                if(j !== inputArray.length - 1) {
                    if(inputArray[j+1] !== " " && inputArray[j] !== " ") {
                        inputArray[j] = inputArray[j] + inputArray[j+1];
                        inputArray[j+1] = " ";
                    };
                }
                
                //with the desired characters now merged, the white space can be removed
                if(inputArray[j] !== " ") {
                    arrayWithoutSpace.push(inputArray[j]);
                };

                //clones the array to an array named with the appropiate category letter
                if(document.getElementById("affix-syllable-category-form" + i).value === "A") {
                    categoryAffixA = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "B") {
                    categoryAffixB = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "D") {
                    categoryAffixD = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "E") {
                    categoryAffixB = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "F") {
                    categoryAffixE = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "B") {
                    categoryAffixF = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "G") {
                    categoryAffixG = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "H") {
                    categoryAffixH = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "I") {
                    categoryAffixI = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "J") {
                    categoryAffixJ = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "K") {
                    categoryAffixK = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "L") {
                    categoryAffixL = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "M") {
                    categoryAffixM = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "N") {
                    categoryAffixN = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "O") {
                    categoryAffixO = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "P") {
                    categoryAffixP = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "Q") {
                    categoryAffixQ = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "R") {
                    categoryAffixR = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "S") {
                    categoryAffixS = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "T") {
                    categoryAffixT = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "U") {
                    categoryAffixU = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "W") {
                    categoryAffixW = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "X") {
                    categoryAffixX = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "Y") {
                    categoryAffixY = cloneArray(arrayWithoutSpace);
                };
                if(document.getElementById("affix-syllable-category-form" + i).value === "Z") {
                    categoryAffixZ = cloneArray(arrayWithoutSpace);
                };
            };

        };
    };
};

generateLanguageButton.addEventListener("click", defineAffixCategory);

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

//takes the syllable structures entered into #chosen-syllables and inserts them into selectedAffixSyllables 
function acceptGivenAffixSyllableStructures() {
    if(randomOption === false) {
        let chosenSyllableInput = document.getElementById("affix-chosen-syllables").value;
        let newArray = Array.from(chosenSyllableInput);

        //the selectedAffixSyllables array is emptied of its former, random, contents
        selectedAffixSyllables.length = 0;

        for(let i = 0; i < newArray.length; i++) {
            //if the next index is not a comma, then the character in the next index is meant to be part of the same sound, usually if the next character is a superscript like ʷ ʰ ʲ 
            if(i !== 0 && newArray[i] !== " " && newArray[i-1] !== " ") {
                newArray[i] = newArray[i-1] + newArray[i];
                newArray[i-1] = "!"
            };
        };

        for(let i = 0; i < newArray.length; i++) {
            //with the desired characters now merged, the desired indexes "ones that are not " ", or "!", are left behind as the other indexes are pushed to selectedAffixSyllables 
            if(newArray[i] !== " " && newArray[i] !== "!") {
                selectedAffixSyllables.push(newArray[i]);
            };
        };
    }
};

generateLanguageButton.addEventListener("click", acceptGivenAffixSyllableStructures);


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
    categoryAffixA,
    categoryAffixB,
    categoryAffixD,
    categoryAffixE,
    categoryAffixF,
    categoryAffixG,
    categoryAffixH,
    categoryAffixI,
    categoryAffixJ,
    categoryAffixK,
    categoryAffixL,
    categoryAffixM,
    categoryAffixN,
    categoryAffixO,
    categoryAffixP,
    categoryAffixQ,
    categoryAffixR,
    categoryAffixS,
    categoryAffixT,
    categoryAffixU,
    categoryAffixW,
    categoryAffixX,
    categoryAffixY,
    categoryAffixZ,
    selectedSyllables,
    selectedAffixSyllables
};