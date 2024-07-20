import { soundChange, voiced, unvoiced } from "./soundchange.js";


let possibleExampleArray = [];

let num = 0;

function clearArrays() {
    possibleExampleArray = [];
    num = 0;
}


function soundChangeExample(word) {
    if(num > 0) {
        possibleExampleArray.push(word)
    }
    num++


    wordFinalDevoicing(possibleExampleArray)


    return word;
}


let before = "";
let after = "";
let afterAll = "";
function wordFinalDevoicing(word) {
    // for(let i = 0; i < word.length; i++) {
    //     if(voiced.includes(word[i][word[i].length -1])) {
    //         before = word[i];
    //         afterAll = word[i];

    //         let voicedIndex = voiced.indexOf(word[i][word[i].length -1]);
    //         word[i][word[i].length -1] = word[i][voicedIndex];
    //         if(voiced.includes(word[i][word[i].length -2])) {
    //             let voicedIndex = voiced.indexOf(word[i][word[i].length -2]);
    //             word[i][word[i].length -2] = unvoiced[voicedIndex];
    //         } 
    //         after = word[i];

    //     }
    // }

    // document.getElementById("wordFinalDevoicing").innerHTML = `${before} > ${after} (${soundChange(afterAll)})`;
}





let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    clearArrays();
}

export {soundChangeExample}