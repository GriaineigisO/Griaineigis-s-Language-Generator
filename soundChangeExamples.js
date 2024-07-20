import {beforeWordFinalDevoicing, afterWordFinalDevoicing, beforeWordFinalDevoicing} from './soundchange.js';
import { generatedCountNouns, generatedAdverbs, generatedMassNouns, generatedAdpositions, generatedIntransitiveVerbs, generatedTransitiveVerbs, generatedAdjectives, generatedConjunctions, countNounArray, adverbArray, massNounArray, adpositionArray, intransitiveVerbArray, transitiveVerbArray, adjectiveArray, conjunctionArray} from './script.js';

// let examples = [];

// function clearArrays() {
//     examples = [];
// }

// function wordFinalDevoicingExample() {
    
//     if(afterWordFinalDevoicing.length < 5) {
//         for(let i = 0; i < afterWordFinalDevoicing.length; i++) {
//             let joinedBefore = beforeWordFinalDevoicing[i].join("");
//             let joinedAfter = afterWordFinalDevoicing[i].join("");
//             examples.push(`<i>${joinedBefore}</i> > <i>${joinedAfter}</i>`)
//         }
//     } else {
//         for(let i = 0; i < 5; i++) {
//             let joinedBefore = beforeWordFinalDevoicing[i].join("");
//             let joinedAfter = afterWordFinalDevoicing[i].join("");
//             examples.push(`<i>${joinedBefore} > ${joinedAfter}</i>`)
//         }
//     }

//     let joined = examples.join(", ")

//     document.getElementById("wordFinalDevoicing").innerHTML = joined;
// }

function wordFinalDevoicingExample() {
    let example = "";
    for(let i = 0; i < generatedCountNouns.length; i++) {
        if(beforeWordFinalDevoicing.includes(generatedCountNouns[i])) {

            example = `${}`
        }
    }
    document.getElementById("wordFinalDevoicingExample")
}

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    clearArrays();
    wordFinalDevoicingExample()
}