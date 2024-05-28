//The arrays containing the English translations are naturally very large, so I placed each one in its own file and just import them to keep this file tidier.
import nounArray from './englishWordArrays/Nouns/englishNouns.js';
import nounArrayPlural from './englishWordArrays/Nouns/englishPluralNouns.js';
import transitiveVerbArray from './englishWordArrays/Verbs/englishTransitiveVerbs.js';
import intransitiveVerbArray from './englishWordArrays/Verbs/englishIntransitiveVerbs.js';
import transitiveVerbPastArray from './englishWordArrays/Verbs/englishTransitiveVerbsPast.js'
import intransitiveVerbPastArray from './englishWordArrays/Verbs/englishIntransitiveVerbsPast.js'
import adjectiveArray from './englishWordArrays/Adjectives/englishAdjectives.js';
import comparativeAdjectiveArray from './englishWordArrays/Adjectives/EnglishComparative Adjectives.js'
import intransitiveVerb3SArray from './englishWordArrays/Verbs/englishIntransitiveVerbs3S.js'
import transitiveVerb3SArray from './englishWordArrays/Verbs/englishTransitiveVerbs3S.js'
import conjunctionArray from './englishWordArrays/conjunctions.js'
import adverbArray from './englishWordArrays/adverbs.js'
import {soundChange} from './soundchange.js'
import {consonants, vowels} from './generatePhonology.js';



let verbArray = transitiveVerbArray.concat(intransitiveVerbArray); //combines both transitive and intransitive verbs into one list for cases where transitivity is irrelevant
let verbPastArray = transitiveVerbPastArray.concat(intransitiveVerbPastArray);;
let verbThirdPersonSingularArray = intransitiveVerb3SArray.concat(transitiveVerb3SArray);

//These arrays will be filled with the randomly generated words
let generatedNouns = [];
let generatedAdjectives = [];
let generatedTransitiveVerbs = [];
let generatedIntransitiveVerbs = [];
let generatedConjunctions = [];
let generatedAdverbs = [];


/* CHANGES LANGUAGE NAME---------------------*/

let changeNameButton = document.getElementById("change-name");
changeNameButton.addEventListener("click", nameChanger);
let changeName = document.getElementById("changeName");
let newSpan = document.getElementsByClassName("language-name");
function nameChanger() {
    for(let i = 0; i < newSpan.length; i++) {
        if (newSpan[i].innerHTML != changeName.value) {
            newSpan[i].innerHTML = changeName.value;
        }
    }
}

/* CHANGES LANGUAGE NAME^^^^^---------------------*/


//Without this, every single generated noun from every single generation would remain in the arrays, causing words from
//previous generations to show up in current ones! This clears the arrays upon each click of the button, before they are
//refilled.
function clearGeneratedArrays() {
    generatedNouns = [];
    generatedAdjectives = [];
    generatedTransitiveVerbs = [];
    generatedIntransitiveVerbs = [];
    generatedConjunctions = [];
    generatedAdverbs = [];
}


//randomly generates roots according to the root structure, as well as assigning them randomly selected meanings
function generateNouns() {
    for(let i = 0; i < nounArray.length; i++) {
        let randomNum = Math.floor(Math.random() * 6);
        if (randomNum === 0) { 
            //generates a CV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
            let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
            let CV = firstC + firstV;     
            generatedNouns.push(CV)
        } else if(randomNum === 1 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVC = firstC + firstV + secondC;
            generatedNouns.push(CVC)
        } else if(randomNum === 2 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCV = firstC + firstV + secondC + secondV;
            generatedNouns.push(CVCV)

        } else if(randomNum === 3 ) {
            //generates a CVCVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCVC = firstC + firstV + secondC + secondV + thirdC;
            generatedNouns.push(CVCVC)

        } else if(randomNum === 4 ) {
            //generates a CVCC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCC = firstC + firstV + secondC + thirdC;
            generatedNouns.push(CVCC)

        } else if(randomNum === 5 ) {
            //generates a CVCCV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCCV = firstC + firstV + secondC + thirdC + secondV;
            generatedNouns.push(CVCCV)
        }
    }

}

//randomly generates roots according to the root structure, as well as assigning them randomly selected meanings
function generateAdjectives() {
    // let adjectiveInput = document.getElementById("inputRootAdj");
    // let randomAdjectiveArray = [] 

    // let numberOfAdjectives = document.getElementById("select-amount").value;
    // numberOfAdjectives = Number(numberOfAdjectives);

    for(let i = 0; i < adjectiveArray.length; i++) {
        let randomNum = Math.floor(Math.random() * 6);

        if (randomNum === 0) { 
            //generates a CV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
            let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
            let CV = firstC + firstV;     
            generatedAdjectives.push(CV)

        } else if(randomNum === 1 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVC = firstC + firstV + secondC;
            generatedAdjectives.push(CVC)

        } else if(randomNum === 2 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCV = firstC + firstV + secondC + secondV;
            generatedAdjectives.push(CVCV)

        } else if(randomNum === 3 ) {
            //generates a CVCVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCVC = firstC + firstV + secondC + secondV + thirdC;
            generatedAdjectives.push(CVCVC)

        } else if(randomNum === 4 ) {
            //generates a CVCC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCC = firstC + firstV + secondC + thirdC;
            generatedAdjectives.push(CVCC)
        } else if(randomNum === 5 ) {
            //generates a CVCCV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCCV = firstC + firstV + secondC + thirdC + secondV;
            generatedAdjectives.push(CVCCV)
        }
    }
        
    // let generatedWordsArray = [];
    // for(let i = 0; i < numberOfAdjectives; i++) {
    //     generatedWordsArray.push(randomAdjectiveArray[i])
    // }

    // adjectiveInput.value = generatedWordsArray.join(" ");
}

//randomly generates a verb root for "to be"
function generateCopula() {
    let copulaInput = "";
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        copulaInput = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        copulaInput = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        copulaInput = CVC;

    } else if(randomNum === 3 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        copulaInput = CVCV;

    } 
    let spanCopula = document.getElementsByClassName("copula");
    for(let i = 0; i < spanCopula.length; i++) {
        spanCopula[i].innerHTML = copulaInput;
    }

}

//randomly generates roots according to the root structure, as well as assigning them randomly selected meanings
function generateTransitiveVerbs() {
    // let verbInput = document.getElementById("inputRootTransitiveVerb");
    // let randomVerbArray = [] 

    // let numberOfVerbs = document.getElementById("select-amount").value;
    // numberOfVerbs = Number(numberOfVerbs);
    
    for(let i = 0; i < transitiveVerbArray.length; i++) {
        let randomNum = Math.floor(Math.random() * 6);

        if (randomNum === 0) { 
            //generates a CV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
            let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
            let CV = firstC + firstV;     
            generatedTransitiveVerbs.push(CV)

        } else if(randomNum === 1 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVC = firstC + firstV + secondC;
            generatedTransitiveVerbs.push(CVC)

        } else if(randomNum === 2 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCV = firstC + firstV + secondC + secondV;
            generatedTransitiveVerbs.push(CVCV)

        } else if(randomNum === 3 ) {
            //generates a CVCVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCVC = firstC + firstV + secondC + secondV + thirdC;
            generatedTransitiveVerbs.push(CVCVC)

        } else if(randomNum === 4 ) {
            //generates a CVCC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCC = firstC + firstV + secondC + thirdC;
            generatedTransitiveVerbs.push(CVCC)

        } else if(randomNum === 5 ) {
            //generates a CVCCV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCCV = firstC + firstV + secondC + thirdC + secondV;
            generatedTransitiveVerbs.push(CVCCV)
        }
    }


    //collects each generated word from each loop and puts them into one array, which is then joined into a single string 
    // let generatedWordsArray = [];
    // for(let i = 0; i < numberOfVerbs; i++) {
    //     generatedWordsArray.push(randomVerbArray[i])
    // }

    // verbInput.value = generatedWordsArray.join(" ");
}

function generateIntransitiveVerbs() {
    // let verbInput = document.getElementById("inputRootIntransitiveVerb");
    // let randomVerbArray = [] 

    // let numberOfVerbs = document.getElementById("select-amount").value;
    // numberOfVerbs = Number(numberOfVerbs);
    
    for(let i = 0; i < intransitiveVerbArray.length; i++) {
        let randomNum = Math.floor(Math.random() * 6);

        if (randomNum === 0) { 
            //generates a CV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
            let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
            let CV = firstC + firstV;     
            generatedIntransitiveVerbs.push(CV)

        } else if(randomNum === 1 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVC = firstC + firstV + secondC;
            generatedIntransitiveVerbs.push(CVC)

        } else if(randomNum === 2 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCV = firstC + firstV + secondC + secondV;
            generatedIntransitiveVerbs.push(CVCV)

        } else if(randomNum === 3 ) {
            //generates a CVCVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCVC = firstC + firstV + secondC + secondV + thirdC;
            generatedIntransitiveVerbs.push(CVCVC)

        } else if(randomNum === 4 ) {
            //generates a CVCC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCC = firstC + firstV + secondC + thirdC;
            generatedIntransitiveVerbs.push(CVCC)

        } else if(randomNum === 5 ) {
            //generates a CVCCV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCCV = firstC + firstV + secondC + thirdC + secondV;
            generatedIntransitiveVerbs.push(CVCCV)
        }
    }
}

//randomly generates a Nominaliser suffix
function generateNominaliser() {
    let nominaliserInput = "";
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        nominaliserInput = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        nominaliserInput = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        nominaliserInput = CVC;
    } 
    let spanNominaliser = document.getElementsByClassName("nominaliser-suffix");
    for(let i = 0; i < spanNominaliser.length; i++) {
        spanNominaliser[i].innerHTML = nominaliserInput;
    }


}

//randomly generates a word for "also"
function generateConjunctions() { 
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        generatedConjunctions.push(CV);

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        generatedConjunctions.push(VC);

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        generatedConjunctions.push(CVC);
    } 
}

//randomly generates a word for "also"
function generateAdverbs() {
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 0) { 
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        generatedAdverbs.push(CVC);

    } else if(randomNum === 1 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        generatedAdverbs.push(CVCV);

    } else if(randomNum === 2 ) {
        //generates a CVCVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCVC = firstC + firstV + secondC + secondV + thirdC;
        generatedAdverbs.push(CVCVC);

    } else if(randomNum === 3 ) {
        //generates a CVCC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCC = firstC + firstV + secondC + thirdC;
        generatedAdverbs.push(CVCC);

    } else if(randomNum === 4 ) {
        //generates a CVCCV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCCV = firstC + firstV + secondC + thirdC + secondV;
        generatedAdverbs.push(CVCCV);
    }


}

//randomly generates a word for "here"
function generateHere() {
    let hereInput = "";
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        hereInput = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        hereInput = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        hereInput = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        hereInput = V;
    } 
    let wordHere = document.getElementsByClassName("here");
    for(let i = 0; i < wordHere.length; i++) {
        wordHere[i].innerHTML = hereInput;
    }


}

//randomly generates a word for "there"
function generateThere() {
    let thereInput = "";
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        thereInput = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        thereInput = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        thereInput = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        thereInput = V;
    } 
    let wordThere = document.getElementsByClassName("there");
    for(let i = 0; i < wordThere.length; i++) {
        wordThere[i].innerHTML = thereInput;
    }


}

//randomly generates an adverbial suffix
function generateAdverbialSuffix() {
    let adverbialSuffix = "";
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        adverbialSuffix = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        adverbialSuffix = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        adverbialSuffix = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        adverbialSuffix = V;
    } 

    let spanAdverb = document.getElementsByClassName("adverbial-suffix");
    for(let i = 0; i < spanAdverb.length; i++) {
        spanAdverb[i].innerHTML = adverbialSuffix;
    }



}

//randomly generates an first person pronoun
function generateFirstPersonPronoun() {
    let firstPersonPronoun = "";
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        firstPersonPronoun = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        firstPersonPronoun = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        firstPersonPronoun = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        firstPersonPronoun = V;
    } 

    let spanPronoun = document.getElementsByClassName("firstPersonPronoun");
    for(let i = 0; i < spanPronoun.length; i++) {
        spanPronoun[i].innerHTML = firstPersonPronoun;
    }
    return firstPersonPronoun;


}

//randomly generates an second person pronoun
function generateSecondPersonPronoun() {
    let secondPersonPronoun = "";
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        secondPersonPronoun = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        secondPersonPronoun = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        secondPersonPronoun = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        secondPersonPronoun = V;
    } 

    let spanPronoun = document.getElementsByClassName("secondPersonPronoun");
    for(let i = 0; i < spanPronoun.length; i++) {
        spanPronoun[i].innerHTML = secondPersonPronoun;
    }
    return secondPersonPronoun;


}

//randomly generates an non-past suffix
function generateNonPastSuffix() {
    let nonPastSuffix = "";
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        nonPastSuffix = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        nonPastSuffix = VC;

    } else if(randomNum === 2 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        nonPastSuffix = V;
    } 
    let spanNonPastSuffix = document.getElementsByClassName("non-past");
    for(let i = 0; i < spanNonPastSuffix.length; i++) {
        spanNonPastSuffix[i].innerHTML = nonPastSuffix;
    }
    document.getElementById("non-past").innerHTML = nonPastSuffix;
    return nonPastSuffix;

}

function generatePluralVerbSuffix() {
    let pluralVerb = "";
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        pluralVerb = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        pluralVerb = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let secondC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let CVC = firstC + firstV + secondC;    
        pluralVerb = CVC;
    } 
    document.getElementById("plural-verb-suffix").innerHTML = pluralVerb;
    return pluralVerb
}

function generateHabitualSuffix() {
    let habitual = "";
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        habitual = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        habitual = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let secondC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let CVC = firstC + firstV + secondC;    
        habitual = CVC;
    } 
    document.getElementById("habitual-suffix").innerHTML = habitual;
    return habitual;
}

//randomly generates a singular suffix
function generateSg() {
    let sgInput = "";
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        sgInput = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        sgInput = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        sgInput = CVC;
    } 
    let spanSgSuffix = document.getElementsByClassName("sg-suffix");
    for(let i = 0; i < spanSgSuffix.length; i++) {
        spanSgSuffix[i].innerHTML = sgInput;
    }
    


}

//randomly generates a singular suffix
function generatePl() {
    let plInput = "";
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        plInput = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        plInput = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        plInput = CVC;
    } 
    let spanPlSuffix = document.getElementsByClassName("pl-suffix");
    for(let i = 0; i < spanPlSuffix.length; i++) {
        spanPlSuffix[i].innerHTML = plInput;
    }


}

//randomly generates a accusative prefix
function generateAcc() {
    let accPrefix = "";
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        accPrefix = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        accPrefix = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        accPrefix = CVC;
    } 
    let spanAccSuffix = document.getElementsByClassName("acc-prefix");
    for(let i = 0; i < spanAccSuffix.length; i++) {
        spanAccSuffix[i].innerHTML = accPrefix;
    }


}

//randomly generates a accusative prefix
function generateGen() {
    let genPrefix = "";
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        genPrefix = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        genPrefix = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        genPrefix = CVC;
    } 
    let spanGenSuffix = document.getElementsByClassName("gen-prefix");
    for(let i = 0; i < spanGenSuffix.length; i++) {
        spanGenSuffix[i].innerHTML = genPrefix;
    }


}



/*-------------------------CREATE SECTION----------------*/




/*-------CREATE WORDS-------------------------------*/
//The functions below take the words input by the users, or words randomly generated by the 'generate' functions below, and then send them to the appriopiate elements in the HTML.

//Takes the words from both text fields and splits them into arrays, then it creates an object using both arrays.
//REDUCE THIS NOW THAT THERE ARE HUNDREDS UPON HUNDREDS OF NOUNS, THIS IS NOT A GOOD IDEA TO SHOW TABLES FOR EVERY SINGLE WORD INFLECTED. INSTEAD, USE ONLY A FEW TABLES AS EXAMPLES IN THE APPROPIATE SECTION. SHOWING THEM ALL SERIOUSLY SLOWED DOWN THE PAGE
// function createNounInflectionTables() {
//     let outputSection = document.getElementById("outputSectionNoun");
//     outputSection.replaceChildren(); //clears the previous output upon refreshing the page

//     //Creates a div to contain the root inflection tables, and adds an h1 to it.
//     let inflectionDiv = document.createElement("div");
//     inflectionDiv.classList.add("inflection-output", "scroll-container");
//     let inflectionH1 = document.createElement("h1");
//     inflectionH1.innerHTML = "Inflected Roots";
//     outputSection.appendChild(inflectionH1);
//     inflectionH1.setAttribute("id", "inflectionH1");

//     outputSection.appendChild(inflectionDiv);

//     //Creates a div to contain the compound inflection tables, and adds an h1 to it.
//     let compoundDiv = document.createElement("div");
//     compoundDiv.classList.add("compound-output", "scroll-container");
//     let compoundH1 = document.createElement("h1");
//     outputSection.appendChild(compoundH1);
//     compoundH1.innerHTML = "Compounds";
//     outputSection.appendChild(compoundDiv);

//     // let inputRoot = document.getElementById("inputRootNoun").value;
//     // let splitInputRoot = inputRoot.split(" ");
//     // let inputMeaning = document.getElementById("inputMeaningNoun").value;
//     // let splitInputMeaning = inputMeaning.split(" ");


//     /*the below are the same as some functions above, I had to place them inside this function also, instead of just calling the functions because that caused an infinite loop for a reason that I do not know*/
//     //makes the singular suffix
//     let sgSuffix = document.getElementsByClassName("sg-suffix")[0].innerHTML;
//     let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;
//     let accPrefix = document.getElementsByClassName("acc-prefix")[0].innerHTML;
//     let genPrefix = document.getElementsByClassName("gen-prefix")[0].innerHTML;
   




//     /*-----------------------INFLECTION HEADWORD--------------------------------------------------------------*
       
//    /* Generates the headword above each inflection table, showing the root and it's meaning as a title */
//     for(let i = 0; i < generatedNouns.length; i++) {
//         let root = generatedNouns[i];
//         let rootMeaning = nounArray[i];

//         /*Creates a new p element to which is appended the root*/
//         let newHeadingProot = document.createElement("P");
//         newHeadingProot.classList.add("headingProot");
//         let newHeadingProotContent = document.createTextNode("-" + root + "-");
//         newHeadingProot.appendChild(newHeadingProotContent);

//         /*Creates a new p element to which is appended the root's meaning*/
//         let newHeadingPmeaning = document.createElement("p");
//         newHeadingPmeaning.classList.add("headingPmeaning");
//         let newHeadingPmeaningContent = document.createTextNode('"' + rootMeaning + '"');
//         newHeadingPmeaning.appendChild(newHeadingPmeaningContent);

//         /* Creates a new div element to contain both the p elements.*/
//         let newHeadWordDiv = document.createElement("div");
//         newHeadWordDiv.classList.add("headWordDiv");
//         newHeadWordDiv.appendChild(newHeadingProot);
//         newHeadWordDiv.appendChild(newHeadingPmeaning);


//         inflectionDiv.appendChild(newHeadWordDiv);


//         /*----------------------^^^-HEADWORD-^^^-------------------------------------------------------------*/

//         /*-----------------------INFLECTION TABLE--------------------------------------------------------------*/
//         /*Generates a table below the headword, showing how the root is inflected.*/

//         let newTable = document.createElement("table");
//         inflectionDiv.appendChild(newTable);

//         for (let j = 0; j < 4; j++) {
//             let newRow = document.createElement("tr");
//             newTable.appendChild(newRow);

//             let newTD1 = document.createElement("td");
//             newTD1.style.fontWeight = "bold";
//             newTD1.style.border = "1px solid black";

//             let newTD2 = document.createElement("td");
//             newTD2.style.border = "1px solid black";
//             newTD2.style.borderRightStyle = "none";

//             let newTD3 = document.createElement("td")
//             newTD3.style.fontStyle = "italic";
//             newTD3.style.border = "1px solid black";
//             newTD3.style.borderLeftStyle = "none";

//             let newTD4 = document.createElement("td");
//             newTD4.style.border = "1px solid black";
//             newTD4.style.borderRightStyle = "none";

//             let newTD5 = document.createElement("td");
//             newTD5.style.fontStyle = "italic";
//             newTD5.style.border = "1px solid black";
//             newTD5.style.borderLeftStyle = "none";

//             let newTH1 = document.createElement("th");
//             newTH1.style.border = "1px solid black";

//             let newTH2 = document.createElement("th");
//             newTH2.style.border = "1px solid black";

//             let newTH3 = document.createElement("th");
//             newTH3.style.border = "1px solid black";

//             let nomSg = root + sgSuffix;
//             let nomPl = root + plSuffix;

//             let nomSgEtymology = " " + " <" + " " + root + "-" + sgSuffix;
//             let nomPlEtymology = " " + " <" + " " + root + "-" + plSuffix;

//             let accSg = accPrefix + root + sgSuffix
//             let accPl = accPrefix + root + plSuffix

//             let accSgEtymology = " " + "<" + " " + accPrefix + "-" + root + "-" + sgSuffix;
//             let accPlEtymology = " " + "<" + " " + accPrefix + "-" + root + "-" + plSuffix;

//             let genSg = genPrefix + root + sgSuffix
//             let genPl = genPrefix + root + plSuffix

//             let genSgEtymology = " " + "<" + " " + genPrefix + "-" + root + "-" + sgSuffix;
//             let genPlEtymology = " " + "<" + " " + genPrefix + "-" + root + "-" + plSuffix;

//             if (j == 0) {
//                 newTH1.innerHTML = " "
//                 newTH1.setAttribute("colspan", 1)
//                 newRow.appendChild(newTH1)

//                 newTH2.innerHTML = "Sg"
//                 newTH2.setAttribute("colspan", 2)
//                 newRow.appendChild(newTH2)

//                 newTH3.innerHTML = "Pl"
//                 newTH3.setAttribute("colspan", 2)
//                 newRow.appendChild(newTH3)

//             } else if (j == 1) {
//                 newTD1.innerHTML = "Nom"
//                 newRow.appendChild(newTD1);

//                 newTD2.innerHTML = soundChange(nomSg);
//                 newRow.appendChild(newTD2);

//                 newTD3.innerHTML = nomSgEtymology
//                 newRow.appendChild(newTD3);

//                 newTD4.innerHTML = soundChange(nomPl);
//                 newRow.appendChild(newTD4);

//                 newTD5.innerHTML = nomPlEtymology
//                 newRow.appendChild(newTD5);

//             } else if (j == 2) {
//                 newTD1.innerHTML = "Acc"
//                 newRow.appendChild(newTD1);

//                 newTD2.innerHTML = soundChange(accSg);
//                 newRow.appendChild(newTD2);

//                 newTD3.innerHTML = accSgEtymology;
//                 newRow.appendChild(newTD3);

//                 newTD4.innerHTML = soundChange(accPl);
//                 newRow.appendChild(newTD4);

//                 newTD5.innerHTML = accPlEtymology
//                 newRow.appendChild(newTD5);

//             } else if (j == 3) {
//                 newTD1.innerHTML = "Gen"
//                 newRow.appendChild(newTD1);

//                 newTD2.innerHTML = soundChange(genSg);
//                 newRow.appendChild(newTD2);

//                 newTD3.innerHTML = genSgEtymology;
//                 newRow.appendChild(newTD3);

//                 newTD4.innerHTML = soundChange(genPl);
//                 newRow.appendChild(newTD4);

//                 newTD5.innerHTML = genPlEtymology;
//                 newRow.appendChild(newTD5);

//             }
//         }
//     }

//     /*----------------------^^^INFLECTION TABLE-^^^-------------------------------------------------------------*/

//     /*-------------COMPOUND------------------------*/
//     //DO NOT COMPOUND EVERY POSSIBLE NOUN. Now that there are hundreds of nouns, the resulting output is too big,
//     //when I get to making a noun derivation section, use only a few compounds as an example
//     let compound = ""
//     let compoundArray = [];
//     let compoundMeaningArray = [];
//     for(let i = 0; i < 4; i++) {
//         for(let j = 0; j < 4; j++) {
//             if (generatedNouns[i] == generatedNouns[j]) { //prevents a root being compounded with itself
//                 continue;
//             }
//             compound = generatedNouns[i] + generatedNouns[j];
//             let compoundMeaning = nounArray[i] + "-" + nounArray[j];

//             compoundMeaningArray.push(compoundMeaning);

//         }
//     }

//     /*-----------------------COMPOUND HEADWORD--------------------------------------------------------------*
       
//    /* Generates the headword above each compound table, showing the compound and it's meaning as a title */
//     for (let x = 0; x < compoundArray.length; x++) {
//         let compoundFromArray = compoundArray[x];
//         let compoundMeaningFromArray = compoundMeaningArray[x];

//         /*Creates a new p element to which is appended the root*/
//         let newHeadingPcompound = document.createElement("p");
//         newHeadingPcompound.classList.add("headingProot");
//         newHeadingPcompound.innerHTML = compoundFromArray;


//         /*Creates a new p element to which is appended the root's meaning */
//         let newHeadingPCompoundmeaning = document.createElement("p");
//         newHeadingPCompoundmeaning.classList.add("headingPmeaning");
//         newHeadingPCompoundmeaning.innerHTML = '"' + compoundMeaningFromArray + '"';

//         /* Creates a new div element to contain both the p elements.*/
//         let newCompoundHeadWordDiv = document.createElement("div");
//         newCompoundHeadWordDiv.classList.add("headWordDiv");
//         newCompoundHeadWordDiv.appendChild(newHeadingPcompound);
//         newCompoundHeadWordDiv.appendChild(newHeadingPCompoundmeaning);


//         compoundDiv.appendChild(newCompoundHeadWordDiv);


//         /* ----------------------^^^-HEADWORD-^^^-------------------------------------------------------------*/

//         /*-----------------------COMPOUND TABLE--------------------------------------------------------------*/
//         /*Generates a table below the headword, showing how the root is inflected.*/
//         let newCompoundTable = document.createElement("table");
//         compoundDiv.appendChild(newCompoundTable);

//         for (let y = 0; y < 4; y++) {
//             let newRowCompound = document.createElement("tr");
//             newCompoundTable.appendChild(newRowCompound);

//             let newTD1Compound = document.createElement("td");
//             newTD1Compound.style.fontWeight = "bold";
//             newTD1Compound.style.border = "1px solid black";

//             let newTD2Compound = document.createElement("td");
//             newTD2Compound.style.border = "1px solid black";
//             newTD2Compound.style.borderRightStyle = "none";

//             let newTD3Compound = document.createElement("td")
//             newTD3Compound.style.fontStyle = "italic";
//             newTD3Compound.style.border = "1px solid black";
//             newTD3Compound.style.borderLeftStyle = "none";

//             let newTD4Compound = document.createElement("td");
//             newTD4Compound.style.border = "1px solid black";
//             newTD4Compound.style.borderRightStyle = "none";

//             let newTD5Compound = document.createElement("td");
//             newTD5Compound.style.fontStyle = "italic";
//             newTD5Compound.style.border = "1px solid black";
//             newTD5Compound.style.borderLeftStyle = "none";

//             let newTH1Compound = document.createElement("th");
//             newTH1Compound.style.border = "1px solid black";

//             let newTH2Compound = document.createElement("th");
//             newTH2Compound.style.border = "1px solid black";

//             let newTH3Compound = document.createElement("th");
//             newTH3Compound.style.border = "1px solid black";

//             let nomSgCompound = compoundFromArray + sgSuffix
//             let nomPlCompound = compoundFromArray + plSuffix

//             let nomSgEtymologyCompound = " " + " <" + " " + compoundFromArray + "-" + sgSuffix;
//             let nomPlEtymologyCompound = " " + " <" + " " + compoundFromArray + "-" + plSuffix;

//             let accSgCompound = accPrefix + compoundFromArray + sgSuffix
//             let accPlCompound = accPrefix + compoundFromArray + plSuffix

//             let accSgEtymologyCompound = " " + "<" + " " + accPrefix + "-" + compoundFromArray + "-" + sgSuffix;
//             let accPlEtymologyCompound = " " + "<" + " " + accPrefix + "-" + compoundFromArray + "-" + plSuffix;

//             let genSgCompound = genPrefix + compoundFromArray + sgSuffix
//             let genPlCompound = genPrefix + compoundFromArray + plSuffix

//             let genSgEtymologyCompound = " " + "<" + " " + genPrefix + "-" + compoundFromArray + "-" + sgSuffix;
//             let genPlEtymologyCompound = " " + "<" + " " + genPrefix + "-" + compoundFromArray + "-" + plSuffix;

//             if (y == 0) {
//                 newTH1Compound.innerHTML = " "
//                 newTH1Compound.setAttribute("colspan", 1)
//                 newRowCompound.appendChild(newTH1Compound)

//                 newTH2Compound.innerHTML = "Sg"
//                 newTH2Compound.setAttribute("colspan", 2)
//                 newRowCompound.appendChild(newTH2Compound)

//                 newTH3Compound.innerHTML = "Pl"
//                 newTH3Compound.setAttribute("colspan", 2)
//                 newRowCompound.appendChild(newTH3Compound)

//             } else if (y == 1) {
//                 newTD1Compound.innerHTML = "Nom"
//                 newRowCompound.appendChild(newTD1Compound);

//                 newTD2Compound.innerHTML = soundChange(nomSgCompound);
//                 newRowCompound.appendChild(newTD2Compound);

//                 newTD3Compound.innerHTML = nomSgEtymologyCompound
//                 newRowCompound.appendChild(newTD3Compound);

//                 newTD4Compound.innerHTML = soundChange(nomPlCompound);
//                 newRowCompound.appendChild(newTD4Compound);

//                 newTD5Compound.innerHTML = nomPlEtymologyCompound
//                 newRowCompound.appendChild(newTD5Compound);

//             } else if (y == 2) {
//                 newTD1Compound.innerHTML = "Acc"
//                 newRowCompound.appendChild(newTD1Compound);

//                 newTD2Compound.innerHTML = soundChange(accSgCompound);
//                 newRowCompound.appendChild(newTD2Compound);

//                 newTD3Compound.innerHTML = accSgEtymologyCompound;
//                 newRowCompound.appendChild(newTD3Compound);

//                 newTD4Compound.innerHTML = soundChange(accPlCompound);
//                 newRowCompound.appendChild(newTD4Compound);

//                 newTD5Compound.innerHTML = accPlEtymologyCompound
//                 newRowCompound.appendChild(newTD5Compound);

//             } else if (y == 3) {
//                 newTD1Compound.innerHTML = "Gen"
//                 newRowCompound.appendChild(newTD1Compound);

//                 newTD2Compound.innerHTML = soundChange(genSgCompound);
//                 newRowCompound.appendChild(newTD2Compound);

//                 newTD3Compound.innerHTML = genSgEtymologyCompound;
//                 newRowCompound.appendChild(newTD3Compound);

//                 newTD4Compound.innerHTML = soundChange(genPlCompound);
//                 newRowCompound.appendChild(newTD4Compound);

//                 newTD5Compound.innerHTML = genPlEtymologyCompound;
//                 newRowCompound.appendChild(newTD5Compound);

//             }

//         }

//     }


//     /*----------------------^^^COMPOUND TABLE-^^^-------------------------------------------------------------*/

// }

//Generates the word for "here"
function createHere() {
    let wordHere = document.getElementsByClassName("here")[0].innerHTML;
    let spanHere = document.getElementsByClassName("here");
    for(let i = 0; i < spanHere.length; i++) {
        if (wordHere != "") { //if no word has been input by the user, then nothing happens
            if (spanHere[i].innerHTML != soundChange(wordHere)) {
                spanHere[i].innerHTML = soundChange(wordHere);
            }
        }
    }
    return wordHere
}

//Generates the word for "here"
function createThere() {
    let wordThere = document.getElementsByClassName("there")[0].innerHTML;
    let spanThere = document.getElementsByClassName("there");
    for(let i = 0; i < spanThere.length; i++) {
        if (wordThere != "") { //if no word has been input by the user, then nothing happens
            if (spanThere[i].innerHTML != soundChange(wordThere)) {
                spanThere[i].innerHTML = soundChange(wordThere);
            }
        }
    }
    return wordThere
}

//Creates a word for "these" by adding the plural suffix to "this"
function createThese() {
    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;

    let thisWord = createThis();
    let thesePronoun = thisWord + plSuffix;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanThese = document.getElementsByClassName("these-pronoun");
    for(let i = 0; i < spanThese.length; i++) {
        if (thesePronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanThese[i].innerHTML != soundChange(thesePronoun)) {
                spanThese[i].innerHTML = soundChange(thesePronoun);
            }
        }
    }
    return thesePronoun
}

//Merges the word for "there" and the adverbial suffix to create the demonstrative pronoun "that"
function createThat() {
    let wordThere = createThere(); //assigns the word "there"
    let wordAdverbialSuffix = document.getElementsByClassName("adverbial-suffix")[0].innerHTML;
    let thatPronoun = wordThere + wordAdverbialSuffix;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanThat = document.getElementsByClassName("that-pronoun");
    for(let i = 0; i < spanThat.length; i++) {
        if (thatPronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanThat[i].innerHTML != soundChange(thatPronoun)) {
                spanThat[i].innerHTML = soundChange(thatPronoun);
            }
        }
    }
    return thatPronoun
}

//Creates a word for "those" by adding the plural suffix to "that"
function createThose() {
    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;

    let thatWord = createThat();
    let thosePronoun = thatWord + plSuffix;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanThose = document.getElementsByClassName("those-pronoun");
    for(let i = 0; i < spanThose.length; i++) {
        if (thosePronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanThose[i].innerHTML != soundChange(thosePronoun)) {
                spanThose[i].innerHTML = soundChange(thosePronoun);
            }
        }
    }
    return thosePronoun
}

//Merges the word for "here" and the adverbial suffix to create the demonstrative pronoun "this"
function createThis() {
    let wordHere = createHere(); //assigns the word "here"
    let wordAdverbialSuffix = document.getElementsByClassName("adverbial-suffix")[0].innerHTML;
    let pronounThis = wordHere + wordAdverbialSuffix;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanThis = document.getElementsByClassName("this-pronoun");
    for(let i = 0; i < spanThis.length; i++) {
        if (pronounThis != "") { //if no word has been input by the user, then nothing happens
            if (spanThis[i].innerHTML != soundChange(pronounThis)) {
                spanThis[i].innerHTML = soundChange(pronounThis);
            }
        }
    }
    return soundChange(pronounThis);
}

//Creates accusative forms for the demonstrative pronouns. This has a distinct function from the one that creates accusative plural nouns, since demonstratives do not take on an overt singular suffix.
//takes a randomly selected noun and puts it in the nominative singular
function createAccDemonstrative() {
    let accPrefix = document.getElementsByClassName("acc-prefix")[0].innerHTML;
    let spanDem = document.getElementsByClassName("accusative-pronoun");
        for(let i = 0; i < spanDem.length; i++) {
            let accDemonstrative = accPrefix + spanDem[i].innerHTML;
            if (accDemonstrative != "") { //if no word has been input by the user, then nothing happens
                if (spanDem[i].innerHTML != soundChange(accDemonstrative)) {
                    spanDem[i].innerHTML = soundChange(accDemonstrative);

            }
        }
    }
}

//Creates genitive forms for the demonstrative pronouns. This has a distinct function from the one that creates accusative plural nouns, since demonstratives do not take on an overt singular suffix.
function createGenDemonstrative() {
    let genPrefix = document.getElementsByClassName("gen-prefix")[0].innerHTML;
    let spanDem = document.getElementsByClassName("genitive-pronoun");
        for(let i = 0; i < spanDem.length; i++) {
            let genDemonstrative = genPrefix + spanDem[i].innerHTML;
            if (genDemonstrative != "") { //if no word has been input by the user, then nothing happens
                if (spanDem[i].innerHTML != soundChange(genDemonstrative)) {
                    spanDem[i].innerHTML = soundChange(genDemonstrative);
                }
            }
        }
       
}

//Generates the word for "also"
function createAlso() {
    let num = conjunctionArray.indexOf("also");
    let wordAlso = generatedConjunctions[num];
    let spanAlso = document.getElementsByClassName("also");
    for(let i = 0; i < spanAlso.length; i++) {
        if (wordAlso != "") {
            if (spanAlso[i].innerHTML != soundChange(wordAlso)) {
                spanAlso[i].innerHTML = soundChange(wordAlso);
            }
        }
    }
    return wordAlso;
}

//Generates the word for "again"
function createAgain() {
    let num = adverbArray.indexOf("again");
    let wordAgain = generatedAdverbs[num];
    let spanAgain = document.getElementsByClassName("again");
    for(let i = 0; i < spanAgain.length; i++) {
        if (wordAgain != "") {
            if (spanAgain[i].innerHTML != soundChange(wordAgain)) {
                spanAgain[i].innerHTML = soundChange(wordAgain);
            }
        }
    }
    return wordAgain;
}

//Generates the word for interrogative suffix
function createInterrogativeSuffix() {
    let wordAgain = createAgain()
    let firstTwoLetters = [];
    firstTwoLetters.push(wordAgain[0]);
    firstTwoLetters.push(wordAgain[1]);
    let interrogativePrefix = firstTwoLetters.join("")

    let spanAgain = document.getElementsByClassName("interrogative");
    for(let i = 0; i < spanAgain.length; i++) {
        if (interrogativePrefix != "") {
            if (spanAgain[i].innerHTML != soundChange(interrogativePrefix)) {
                spanAgain[i].innerHTML = soundChange(interrogativePrefix);
            }
        }
    }
    return interrogativePrefix
}

//Generates the word for "place"
function createPlace() {
    let num = nounArray.indexOf("place");
    let wordPlace = generatedNouns[num];
    let spanPlace = document.getElementsByClassName("place");
    for(let i = 0; i < spanPlace.length; i++) {
        if (wordPlace != "") {
            if (spanPlace[i].innerHTML != soundChange(wordPlace)) {
                spanPlace[i].innerHTML = soundChange(wordPlace);
            }
        }
    }
    return wordPlace;
}

//Generates the word for "man"
function createMan() {
    let num = nounArray.indexOf("man");
    let wordMan = generatedNouns[num];
    let spanMan = document.getElementsByClassName("man");
    for(let i = 0; i < spanMan.length; i++) {
        if (wordMan != "") {
            if (spanMan[i].innerHTML != soundChange(wordMan)) {
                spanMan[i].innerHTML = soundChange(wordMan);
            }
        }
    }
    return wordMan;
}

//Generates the word for "path"
function createPath() {
    let num = nounArray.indexOf("path");
    let wordPath = generatedNouns[num];
    let spanPath = document.getElementsByClassName("path");
    for(let i = 0; i < spanPath.length; i++) {
        if (wordPath != "") {
            if (spanPath[i].innerHTML != soundChange(wordPath)) {
                spanPath[i].innerHTML = soundChange(wordPath);
            }
        }
    }
    return wordPath;
}

//Generates the word for "origin"
function createOrigin() {
    let num = nounArray.indexOf("origin");
    let wordOrigin = generatedNouns[num];
    let spanOrigin = document.getElementsByClassName("origin");
    for(let i = 0; i < spanOrigin.length; i++) {
        if (wordOrigin != "") {
            if (spanOrigin[i].innerHTML != soundChange(wordOrigin)) {
                spanOrigin[i].innerHTML = soundChange(wordOrigin);
            }
        }
    }
    return wordOrigin;
}

//Generates the word for "time"
function createTime() {
    let num = nounArray.indexOf("time");
    let wordTime = generatedNouns[num];
    let spanTime = document.getElementsByClassName("time");
    for(let i = 0; i < spanTime.length; i++) {
        if (wordTime != "") {
            if (spanTime[i].innerHTML != soundChange(wordTime)) {
                spanTime[i].innerHTML = soundChange(wordTime);
            }
        }
    }
    return wordTime;
}

//Generates the word for "where"
function createWhere() {
    let place = createPlace();
    let affix = createInterrogativeSuffix();
    let where = affix + soundChange(place);
    let spanWhen = document.getElementsByClassName("where");
    for(let i = 0; i < spanWhen.length; i++) {
        if (where != " ") {
            if (spanWhen[i].innerHTML != soundChange(where)) {
                spanWhen[i].innerHTML = soundChange(where);
            }
        }
    }
    return where
}

//Generates the word for "who"
function createWho() {
    let man = createMan();
    let affix = createInterrogativeSuffix();
    let who = affix + soundChange(man);
    let spanWho = document.getElementsByClassName("who");
    for(let i = 0; i < spanWho.length; i++) {
        if (who != " ") {
            if (spanWho[i].innerHTML != soundChange(who)) {
                spanWho[i].innerHTML = soundChange(who);
            }
        }
    }
    return who
}

//Generates the word for "when"
function createWhen() {
    let time = createTime();
    let affix = createInterrogativeSuffix();
    let when = affix + soundChange(time);
    let spanWhen = document.getElementsByClassName("when");
    for(let i = 0; i < spanWhen.length; i++) {
        if (when != " ") {
            if (spanWhen[i].innerHTML != soundChange(when)) {
                spanWhen[i].innerHTML = soundChange(when);
            }
        }
    }
    return when
}

//Generates the word for "what"
function createWhat() {
    let thisWord = createThis();
    let affix = createInterrogativeSuffix();
    let what = affix + thisWord;
    let spanWhat = document.getElementsByClassName("what");
    for(let i = 0; i < spanWhat.length; i++) {
        if (what != " ") {
            if (spanWhat[i].innerHTML != soundChange(what)) {
                spanWhat[i].innerHTML = soundChange(what);
            }
        }
    }
    return what
}

//Generates the word for "how"
function createHow() {
    let path = createPath();
    let affix = createInterrogativeSuffix();
    let how = affix + path;
    let spanHow = document.getElementsByClassName("how");
    for(let i = 0; i < spanHow.length; i++) {
        if (how != " ") {
            if (spanHow[i].innerHTML != soundChange(how)) {
                spanHow[i].innerHTML = soundChange(how);
            }
        }
    }
    return soundChange(how);
}

//Generates the word for "why"
function createWhy() {
    let origin = createOrigin();
    let affix = createInterrogativeSuffix();
    let why = affix + origin;
    let spanWhy = document.getElementsByClassName("why");
    for(let i = 0; i < spanWhy.length; i++) {
        if (why != " ") {
            if (spanWhy[i].innerHTML != soundChange(why)) {
                spanWhy[i].innerHTML = soundChange(why);
            }
        }
    }
    return soundChange(why);
}

function createToday() {
    let day = nounArray[nounArray.indexOf("day")];
    let thisWord = createThis();
    let today = thisWord + day;
    let spanToday = document.getElementsByClassName("today");
    for(let i = 0; i < spanToday.length; i++) {
        if (today != " ") {
            if (spanToday[i].innerHTML != soundChange(today)) {
                spanToday[i].innerHTML = soundChange(today);
            }
        }
    }
    return soundChange(today);
}

//Generates the relative pronoun by merging the word for "this" and "also"
function createRelativePronoun() {
    let wordThis = createThis(); //assigns the word "this"
    let wordAlso = createAlso(); //assigns the word "also"
    let RelativePronoun = wordThis + wordAlso;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanRelativePronoun = document.getElementsByClassName("relative-pronoun");
    for(let i = 0; i < spanRelativePronoun.length; i++) {
        if (RelativePronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanRelativePronoun[i].innerHTML != soundChange(RelativePronoun)) {
                spanRelativePronoun[i].innerHTML = soundChange(RelativePronoun);
            }
        }
    }
    return soundChange(RelativePronoun)
}

//Generates the first person pronoun
function createFirstPersonPronoun() {
    let FirstPersonPronoun = generateFirstPersonPronoun();
    let spanFirstPersonPronoun = document.getElementsByClassName("firstPersonPronoun");
    for(let i = 0; i < spanFirstPersonPronoun.length; i++) {
        if (FirstPersonPronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanFirstPersonPronoun[i].innerHTML != soundChange(FirstPersonPronoun)) {
                spanFirstPersonPronoun[i].innerHTML = soundChange(FirstPersonPronoun);
            }
        }
    }
    return FirstPersonPronoun
}

//Generates the first person pronoun
function createSecondPersonPronoun() {
    let SecondPersonPronoun = generateSecondPersonPronoun();
    let spanSecondPersonPronoun = document.getElementsByClassName("secondPersonPronoun");
    for(let i = 0; i < spanSecondPersonPronoun.length; i++) {
        if (SecondPersonPronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanSecondPersonPronoun[i].innerHTML != soundChange(SecondPersonPronoun)) {
                spanSecondPersonPronoun[i].innerHTML = soundChange(SecondPersonPronoun);
            }
        }
    }
    return SecondPersonPronoun
}


function createCopulaSgNonPast() {
    let copula = document.getElementsByClassName("copula")[0].innerHTML;
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let CopulaSgNonPast = copula + nonPastSuffix

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanRelativeCopulaSgNonPast = document.getElementsByClassName("copula-sg-non-past");
    for(let i = 0; i < spanRelativeCopulaSgNonPast.length; i++) {
        if (copula != "") { //if no word has been input by the user, then nothing happens
            if (spanRelativeCopulaSgNonPast[i].innerHTML != soundChange(CopulaSgNonPast)) {
                spanRelativeCopulaSgNonPast[i].innerHTML = soundChange(CopulaSgNonPast);
            }
        }
    }
    return CopulaSgNonPast;
}

function createCopulaPlNonPast() {

    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;

    let copula = document.getElementsByClassName("copula")[0].innerHTML;
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let CopulaPlNonPast = plSuffix + copula + nonPastSuffix
    
    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanRelativeCopulaPlNonPast = document.getElementsByClassName("copula-pl-non-past");
    for(let i = 0; i < spanRelativeCopulaPlNonPast.length; i++) {
        if (copula != "") { //if no word has been input by the user, then nothing happens
            if (spanRelativeCopulaPlNonPast[i].innerHTML != soundChange(CopulaPlNonPast)) {
                spanRelativeCopulaPlNonPast[i].innerHTML = soundChange(CopulaPlNonPast);
            }
        }
    }
    return CopulaPlNonPast;

}

//selects a random adjective from the adjective array
function createRandomAdjective() {
    let spanAdjective = document.getElementsByClassName("adjective");
    let num = 1;
    for(let i = 0; i <= spanAdjective.length; i++) {
        let randomNumber = Math.floor(Math.random() * generatedAdjectives.length);
        let randomAdjective = generatedAdjectives[randomNumber] 
        document.getElementById("adjective" + num.toString()).innerHTML = soundChange(randomAdjective);
        document.getElementById("adjective-meaning" + num.toString()).innerHTML = adjectiveArray[randomNumber]
        num++;
    }

    //creates copy of the adjectives's meaning
    let copyNum = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-adjective-meaning").length; i++) {   
        let adjectiveMeaning =  document.getElementById("adjective-meaning" + copyNum.toString())
        let adjectiveMeaningCopy = document.getElementsByClassName("adjective-meaning-copy" + copyNum.toString())
        for(let j = 0; j < adjectiveMeaningCopy.length; j++) {
            adjectiveMeaningCopy[j].innerHTML = adjectiveMeaning.innerHTML;
        }
        copyNum++;
    }
    
    //creates copies of the adjective
    let copyNum2 = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-adjective").length; i++) {  
        let adjective =  document.getElementById("adjective" + copyNum2.toString())
        let adjectiveCopy = document.getElementsByClassName("adjective-copy" + copyNum2.toString())
        for(let j = 0; j < adjectiveCopy.length; j++) {
            adjectiveCopy[j].innerHTML = adjective.innerHTML;
            adjectiveCopy[j].style.fontStyle = "italic"
        }
         copyNum2++;
    }
}

//selects a random noun from the nouns entered by the user
function createRandomNoun() {
    let spanNoun = document.getElementsByClassName("noun");
    
    let num = 1;
    for(let i = 0; i < spanNoun.length; i++) {
        let randomNumber = Math.floor(Math.random() * generatedNouns.length);
        let randomNoun = generatedNouns[randomNumber] 
        document.getElementById("noun" + num.toString()).innerHTML = soundChange(randomNoun);
        document.getElementById("noun-meaning" + num.toString()).innerHTML = nounArray[randomNumber]
        num++;
    }
    //creates copy of the noun's meaning
    let copyNum = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-noun-meaning").length; i++) {   
        let nounMeaning =  document.getElementById("noun-meaning" + copyNum.toString())
        let nounMeaningCopy = document.getElementsByClassName("noun-meaning-copy" + copyNum.toString())
        for(let j = 0; j < nounMeaningCopy.length; j++) {
            nounMeaningCopy[j].innerHTML = nounMeaning.innerHTML;
        }
        copyNum++;
        }
    //creates copies of the noun
    let copyNum2 = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-noun").length; i++) {   
        let noun =  document.getElementById("noun" + copyNum2.toString())
        let nounCopy = document.getElementsByClassName("noun-copy" + copyNum2.toString())
            for(let j = 0; j < nounCopy.length; j++) {
                nounCopy[j].innerHTML = noun.innerHTML;
            }
        copyNum2++;
        }
}

//selects both transitive and intransitive verbs
function createRandomVerb() {
    let spanVerb = document.getElementsByClassName("verb");
    let allGeneratedVerbs = generatedTransitiveVerbs.concat(generatedIntransitiveVerbs);
    let num = 1;
    for(let i = 0; i < spanVerb.length; i++) {
        let randomNumber = Math.floor(Math.random() * allGeneratedVerbs.length);
        let randomVerb = allGeneratedVerbs[randomNumber] //random verb from the array
        
        document.getElementById("verb" + num.toString()).innerHTML = soundChange(randomVerb);
        document.getElementById("verb-meaning" + num.toString()).innerHTML = verbArray[randomNumber]
        document.getElementById("verb-past-meaning" + num.toString()).innerHTML = verbArray[randomNumber]
    
        num++;
    
    }
    //creates copy of the verb's meaning
    let copyNum = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-verb-meaning").length; i++) {   
        let verbMeaning =  document.getElementById("verb-meaning" + copyNum.toString())
        let verbMeaningCopy = document.getElementsByClassName("verb-meaning-copy" + copyNum.toString())
        for(let j = 0; j < verbMeaningCopy.length; j++) {
            verbMeaningCopy[j].innerHTML = verbMeaning.innerHTML;
        }
        copyNum++;
        }

    //creates copies of the verb
    let copyNum2 = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-verb").length; i++) {   
        let verb =  document.getElementById("verb" + copyNum2.toString())
        let verbCopy = document.getElementsByClassName("verb-copy" + copyNum2.toString())
            for(let j = 0; j < verbCopy.length; j++) {
                verbCopy[j].innerHTML = verb.innerHTML;
            }
        copyNum2++;
        }


}

function createRandomTransitiveVerb() {
    //puts all of the input verbs into one array
    // let inputVerb = document.getElementById("inputRootTransitiveVerb").value;
    // let splitVerb = inputVerb.split(" ");

    // //puts all of the input verbs meanings into one array
    // let inputVerbMeaning = document.getElementById("inputMeaningTransitiveVerb").value;
    // let splitVerbMeaning = inputVerbMeaning.split(" ");

    let spanVerb = document.getElementsByClassName("transitive-verb");

    let num = 1;
    for(let i = 0; i < spanVerb.length; i++) {
        let randomNumber = Math.floor(Math.random() * generatedTransitiveVerbs.length);
        let randomVerb = generatedTransitiveVerbs[randomNumber] //random verb from the array
        document.getElementById("transitive-verb" + num.toString()).innerHTML = soundChange(randomVerb);
        document.getElementById("transitive-verb-meaning" + num.toString()).innerHTML = transitiveVerbArray[randomNumber]
        if(document.getElementById("transitive-verb-past-meaning" + num.toString()) === null) {
            let hiddenSpan = document.createElement("span");
            hiddenSpan.classList.add("hidden");
            hiddenSpan.setAttribute("id", "transitive-verb-past-meaning" + num.toString())
            hiddenSpan.innerHTML = transitiveVerbArray[randomNumber];
            document.getElementById("hidden-section").appendChild(hiddenSpan);
        } else {
             document.getElementById("transitive-verb-past-meaning" + num.toString()).innerHTML = transitiveVerbPastArray[randomNumber];
        }
        num++;
        }

    //creates copy of the verb's meaning
    let copyNum = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-transitive-verb-meaning").length; i++) {   
        let verbMeaning =  document.getElementById("transitive-verb-meaning" + copyNum.toString())
        let verbMeaningCopy = document.getElementsByClassName("transitive-verb-meaning-copy" + copyNum.toString())
        for(let j = 0; j < verbMeaningCopy.length; j++) {
            verbMeaningCopy[j].innerHTML = verbMeaning.innerHTML;
        }
        copyNum++;
        }

    //creates copies of the verb
    let copyNum2 = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-transitive-verb").length; i++) {   
        let verb =  document.getElementById("transitive-verb" + copyNum2.toString())
        let verbCopy = document.getElementsByClassName("transitive-verb-copy" + copyNum2.toString())
            for(let j = 0; j < verbCopy.length; j++) {
                verbCopy[j].innerHTML = verb.innerHTML;
            }
        copyNum2++;
        }

    }

function createRandomIntransitiveVerb() {
    //puts all of the input verbs into one array
    // let inputVerb = document.getElementById("inputRootIntransitiveVerb").value;
    // let splitVerb = inputVerb.split(" ");

    // //puts all of the input verbs meanings into one array
    // let inputVerbMeaning = document.getElementById("inputMeaningIntransitiveVerb").value;
    // let splitVerbMeaning = inputVerbMeaning.split(" ");

    let spanVerb = document.getElementsByClassName("intransitive-verb");

    let num = 1;
    for(let i = 0; i < spanVerb.length; i++) {
        let randomNumber = Math.floor(Math.random() * generatedIntransitiveVerbs.length);
        let randomVerb = generatedIntransitiveVerbs[randomNumber] //random verb from the array
        document.getElementById("intransitive-verb" + num.toString()).innerHTML = soundChange(randomVerb);
        document.getElementById("intransitive-verb-meaning" + num.toString()).innerHTML = intransitiveVerbArray[randomNumber]
        if(document.getElementById("intransitive-verb-past-meaning" + num.toString()) === null) {
            let hiddenSpan = document.createElement("span");
            hiddenSpan.classList.add("hidden");
            hiddenSpan.setAttribute("id", "intransitive-verb-past-meaning" + num.toString())
            hiddenSpan.innerHTML = intransitiveVerbArray[randomNumber];
            document.getElementById("hidden-section").appendChild(hiddenSpan);
        } else {
             document.getElementById("intransitive-verb-past-meaning" + num.toString()).innerHTML = intransitiveVerbPastArray[randomNumber];
        }
        num++;
    
    }
    //creates copy of the verb's meaning
    let copyNum = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-intransitive-verb-meaning").length; i++) {   
        let verbMeaning =  document.getElementById("intransitive-verb-meaning" + copyNum.toString())
        let verbMeaningCopy = document.getElementsByClassName("intransitive-verb-meaning-copy" + copyNum.toString())
        for(let j = 0; j < verbMeaningCopy.length; j++) {
            verbMeaningCopy[j].innerHTML = verbMeaning.innerHTML;
        }
        copyNum++;
        }

    //creates copies of the verb
    let copyNum2 = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-intransitive-verb").length; i++) {   
        let verb =  document.getElementById("intransitive-verb" + copyNum2.toString())
        let verbCopy = document.getElementsByClassName("intransitive-verb-copy" + copyNum2.toString())
            for(let j = 0; j < verbCopy.length; j++) {
                verbCopy[j].innerHTML = verb.innerHTML;
            }
        copyNum2++;
        }


}

//takes a randomly selected noun and puts it in the nominative singular
function createNounNomSg() {
    let sgSuffix = document.getElementsByClassName("sg-suffix")[0].innerHTML;
    let spanNoun = document.getElementsByClassName("noun-nom-sg");
        for(let i = 0; i < spanNoun.length; i++) {
            let nounNomSg = spanNoun[i].innerHTML + sgSuffix;
            if (nounNomSg != "") { //if no word has been input by the user, then nothing happens
                if (spanNoun[i].innerHTML != soundChange(nounNomSg)) {
                    spanNoun[i].innerHTML = soundChange(nounNomSg);
                }
            }
        }
}

//takes a noun and puts it in the accusative singular
function createAccNomSg() {
    let sgSuffix = document.getElementsByClassName("sg-suffix")[0].innerHTML;
    let accPrefix = document.getElementsByClassName("acc-prefix")[0].innerHTML;

    let spanNoun = document.getElementsByClassName("noun-acc-sg")
    for(let i = 0; i < spanNoun.length; i++) {
        let nounAccSg = accPrefix + spanNoun[i].innerHTML + sgSuffix;
        if (nounAccSg != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounAccSg)) {
                spanNoun[i].innerHTML = soundChange(nounAccSg);
            }
        }
    }
}

//takes a noun and puts it in the genitive singular
function createGenNomSg() {
    let sgSuffix = document.getElementsByClassName("sg-suffix")[0].innerHTML;
    let genPrefix = document.getElementsByClassName("gen-prefix")[0].innerHTML;
    let spanNoun = document.getElementsByClassName("noun-gen-sg")
    for(let i = 0; i < spanNoun.length; i++) {
        let nounGenSg = genPrefix + spanNoun[i].innerHTML + sgSuffix;
        if (nounGenSg != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounGenSg)) {
                spanNoun[i].innerHTML = soundChange(nounGenSg);
            }
        }
    }
}

//takes a noun and puts it in the nominative plural
function createNounNomPl() {
    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;
    let spanNoun = document.getElementsByClassName("noun-nom-pl")
    for(let i = 0; i < spanNoun.length; i++) {
        let nounNomPl = spanNoun[i].innerHTML + plSuffix;
        if (nounNomPl != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounNomPl)) {
                spanNoun[i].innerHTML = soundChange(nounNomPl);
            }
        }
    }
}

//takes a noun and puts it in the accusative plural
function createNounAccPl() {
    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;
    let accPrefix = document.getElementsByClassName("acc-prefix")[0].innerHTML;

    let spanNoun = document.getElementsByClassName("noun-acc-pl")
    for(let i = 0; i < spanNoun.length; i++) {
        let nounAccPl = accPrefix + spanNoun[i].innerHTML + plSuffix;
        if (nounAccPl != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounAccPl)) {
                spanNoun[i].innerHTML = soundChange(nounAccPl);
            }
        }
    }
}

//takes a noun and puts it in the genitive plural
function createNounGenPl() {
    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;
    let genPrefix = document.getElementsByClassName("gen-prefix")[0].innerHTML;
    let spanNoun = document.getElementsByClassName("noun-gen-pl")
    for(let i = 0; i < spanNoun.length; i++) {
        let nounGenPl = genPrefix + spanNoun[i].innerHTML + plSuffix;
        if (nounGenPl != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounGenPl)) {
                spanNoun[i].innerHTML = soundChange(nounGenPl);
            }
        }
    }
}

//creates a bahuvrihi compound for the example shown in the adjective section
function createBahuvrihi() {
    let sgSuffix = document.getElementsByClassName("sg-suffix")[0].innerHTML;

    let noun = document.getElementById("noun5");
    let nominaliser = document.getElementsByClassName("nominaliser-suffix")[0].innerHTML;
    let adjective = document.getElementById("adjective5");
    let adjectiveCopy = document.getElementById("adjective5");
   
    let adjectiveNominaliserSg = adjective.innerHTML + nominaliser + sgSuffix;

    let bahuvrihi = noun.innerHTML + soundChange(adjectiveNominaliserSg);
   document.getElementById("bahuvrihi").innerHTML = soundChange(bahuvrihi);

   
   let nounInBreakdown = document.getElementById("noun5Also");
   nounInBreakdown.innerHTML = noun.innerHTML;

   let nounNomSgInBreakdown = document.getElementById("noun5AlsoNomSg");
   let nounPlusKo = noun.innerHTML + sgSuffix
   nounNomSgInBreakdown.innerHTML = soundChange(nounPlusKo);
   
    

    let adjInBreakdown = document.getElementById("adjective5Also");
    adjInBreakdown.innerHTML = adjectiveCopy.innerHTML;

    
}

//takes a randomly selected adjective, attaches the nominaliser suffix, and puts it in the nominative singular
function createAdjNomSg() {
    let sgSuffix = document.getElementsByClassName("sg-suffix")[0].innerHTML;
    let nominaliser = document.getElementsByClassName("nominaliser-suffix")[0].innerHTML;
    let spanAdj = document.getElementsByClassName("adjective-nom-sg")
    for(let i = 0; i < spanAdj.length; i++) {
        let adjNomSg = spanAdj[i].innerHTML + nominaliser + sgSuffix;
        if (adjNomSg != "") { //if no word has been input by the user, then nothing happens
            if (spanAdj[i].innerHTML != soundChange(adjNomSg)) {
                spanAdj[i].innerHTML = soundChange(adjNomSg);
            }
        }

    }
}

//takes a randomly selected noun and puts it in the nominative plural
function createAdjNomPl() {
    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;
    let nominaliser = document.getElementsByClassName("nominaliser-suffix")[0].innerHTML;
    let spanAdj = document.getElementsByClassName("adjective-nom-pl")
    for(let i = 0; i < spanAdj.length; i++) {
        let adjNomPl = spanAdj[i].innerHTML + nominaliser + plSuffix;
        if (adjNomPl != "") { //if no word has been input by the user, then nothing happens
            if (spanAdj[i].innerHTML != soundChange(adjNomPl)) {
                spanAdj[i].innerHTML = soundChange(adjNomPl);
            }
        }
    }

    
}

//if a noun is plural, this makes sure that it's English translation is also plural
function makeMeaningPlural() {
    let Plural = document.getElementsByClassName("plural-meaning")
    for(let i = 0; i < Plural.length; i++) {
        let indexNum = nounArray.indexOf(Plural[i].innerHTML);
        Plural[i].innerHTML = nounArrayPlural[indexNum];
    }
}

//if a verb is in the past tense, this makes sure that it's English translation is also past tense
function makeMeaningPast() {
    let past = document.getElementsByClassName("past")
    for(let i = 0; i < past.length; i++) {
        let indexNum = verbArray.indexOf(past[i].innerHTML);
        past[i].innerHTML = verbPastArray[indexNum];
    }
}

function createThirdPersonSingularVerb() {
    let thirdP = document.getElementsByClassName("third-person-singular")
    for(let i = 0; i < thirdP.length; i++) {
        let indexNum = verbArray.indexOf(thirdP[i].innerHTML);
        thirdP[i].innerHTML = verbThirdPersonSingularArray[indexNum];
    }
}

function createThirdPersonSingularTransitiveVerb() {
    let thirdP = document.getElementsByClassName("third-person-singular-transitive")
    for(let i = 0; i < thirdP.length; i++) {
        let indexNum = transitiveVerbArray.indexOf(thirdP[i].innerHTML);
        thirdP[i].innerHTML = transitiveVerb3SArray[indexNum];
    }
}

function createThirdPersonSingularIntransitiveVerb() {
    let thirdP = document.getElementsByClassName("third-person-singular-intransitive")
    for(let i = 0; i < thirdP.length; i++) {
        let indexNum = intransitiveVerbArray.indexOf(thirdP[i].innerHTML);
        thirdP[i].innerHTML = intransitiveVerb3SArray[indexNum];

    }
}

//takes a randomly selected verb and puts it in the non-past-tense
function createVerbNonPast() {
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let spanNonPast = document.getElementsByClassName("verb-non-past")
        for(let i = 0; i < spanNonPast.length; i++) {
            let verbNonPast = spanNonPast[i].innerHTML + nonPastSuffix;
            if (verbNonPast != "") { //if no word has been input by the user, then nothing happens
                if (spanNonPast[i].innerHTML != soundChange(verbNonPast)) {
                    spanNonPast[i].innerHTML = soundChange(verbNonPast);
                }
            }
        }
}

function createFirstPersonVerbPrefix() {
    let pronoun = document.getElementsByClassName("firstPersonPronoun")[0].innerHTML;
    let firstTwoLetters = [];
    firstTwoLetters.push(pronoun[0]);
    firstTwoLetters.push(pronoun[1]);
    let prefix = firstTwoLetters.join("")

    let spanPrefix = document.getElementsByClassName("first-person-prefix");
    for(let i = 0; i < spanPrefix.length; i++) {
        if (prefix != "") {
            if (spanPrefix[i].innerHTML != soundChange(prefix)) {
                spanPrefix[i].innerHTML = soundChange(prefix);
            }
        }
    }
    return prefix
}

function createSecondPersonVerbPrefix() {
    let pronoun = document.getElementsByClassName("secondPersonPronoun")[0].innerHTML;
    let firstTwoLetters = [];
    firstTwoLetters.push(pronoun[0]);
    firstTwoLetters.push(pronoun[1]);
    let prefix = firstTwoLetters.join("")
    let spanPrefix = document.getElementsByClassName("second-person-prefix");
    for(let i = 0; i < spanPrefix.length; i++) {
        if (prefix != "") {
            if (spanPrefix[i].innerHTML != soundChange(prefix)) {
                spanPrefix[i].innerHTML = soundChange(prefix);
            }
        }
    }
    return prefix
}

//takes a randomly selected verb and puts it in the first-person
function createVerbFirstPerson() {
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let spanFirstPerson = document.getElementsByClassName("first-person")
        for(let i = 0; i < spanFirstPerson.length; i++) {
            let verbFirstPerson = firstPersonPrefix + spanFirstPerson[i].innerHTML;
            if (verbFirstPerson != "") { //if no word has been input by the user, then nothing happens
                if (spanFirstPerson[i].innerHTML != soundChange(verbFirstPerson)) {
                    spanFirstPerson[i].innerHTML = soundChange(verbFirstPerson);
                }
            }
        }
}

//takes a randomly selected verb and puts it in the second-person
function createVerbSecondPerson() {
    let secondPersonPrefix = createSecondPersonVerbPrefix();
    let spanSecondPerson = document.getElementsByClassName("second-person")
        for(let i = 0; i < spanSecondPerson.length; i++) {
            let verbSecondPerson = secondPersonPrefix + spanSecondPerson[i].innerHTML;
            if (verbSecondPerson != "") { //if no word has been input by the user, then nothing happens
                if (spanSecondPerson[i].innerHTML != soundChange(verbSecondPerson)) {
                    spanSecondPerson[i].innerHTML = soundChange(verbSecondPerson);
                }
            }
        }
}

function createPluralVerb() {
    let pluralVerbSuffix = document.getElementById("plural-verb-suffix").innerHTML;
    let spanVerb = document.getElementsByClassName("plural-verb")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = spanVerb[i].innerHTML + pluralVerbSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createPluralVerbNonPast() {
    let pluralVerbSuffix = document.getElementById("plural-verb-suffix").innerHTML;
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let spanVerb = document.getElementsByClassName("plural-verb-non-past")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = spanVerb[i].innerHTML + pluralVerbSuffix + nonPastSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createFirstPersonVerbNonPast() {
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let spanVerb = document.getElementsByClassName("first-person-verb-non-past")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + nonPastSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createFirstPersonVerbNonPastHabitual() {
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let habitualSuffix = document.getElementById("habitual-suffix").innerHTML;
    let spanVerb = document.getElementsByClassName("first-person-verb-non-past-habitual")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + nonPastSuffix + habitualSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createFirstPersonVerbHabitual() {
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let habitualSuffix = document.getElementById("habitual-suffix").innerHTML;
    let spanVerb = document.getElementsByClassName("first-person-verb-habitual")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + habitualSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createSecondPersonVerbNonPast() {
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let secondPersonPrefix = createSecondPersonVerbPrefix();
    let spanVerb = document.getElementsByClassName("second-person-verb-non-past")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = secondPersonPrefix + spanVerb[i].innerHTML + nonPastSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createSecondPersonVerbNonPastHabitual() {
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let secondPersonPrefix = createSecondPersonVerbPrefix();
    let habitualSuffix = document.getElementById("habitual-suffix").innerHTML;
    let spanVerb = document.getElementsByClassName("second-person-verb-non-past-habitual")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = secondPersonPrefix + spanVerb[i].innerHTML + nonPastSuffix + habitualSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createSecondPersonVerbHabitual() {
    let habitualSuffix = document.getElementById("habitual-suffix").innerHTML;
    let secondPersonPrefix = createSecondPersonVerbPrefix();
    let spanVerb = document.getElementsByClassName("second-person-verb-habitual")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = secondPersonPrefix + spanVerb[i].innerHTML + habitualSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createVerbNonPastHabitual() {
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let habitualSuffix = document.getElementById("habitual-suffix").innerHTML;
    let spanVerb = document.getElementsByClassName("verb-non-past-habitual")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = spanVerb[i].innerHTML + nonPastSuffix + habitualSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createVerbHabitual() {
    let habitualSuffix = document.getElementById("habitual-suffix").innerHTML;
    let spanVerb = document.getElementsByClassName("verb-habitual")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = spanVerb[i].innerHTML + habitualSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createFirstPersonPluralVerbNonPast() {
    let pluralVerbSuffix = document.getElementById("plural-verb-suffix").innerHTML;
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let spanVerb = document.getElementsByClassName("first-person-plural-verb-non-past")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + pluralVerbSuffix + nonPastSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createSecondPersonPluralVerbNonPast() {
    let pluralVerbSuffix = document.getElementById("plural-verb-suffix").innerHTML;
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let firstPersonPrefix = createSecondPersonVerbPrefix();
    let spanVerb = document.getElementsByClassName("second-person-plural-verb-non-past")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + pluralVerbSuffix + nonPastSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createFirstPersonPluralVerb() {
    let pluralVerbSuffix = document.getElementById("plural-verb-suffix").innerHTML;
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let spanVerb = document.getElementsByClassName("first-person-plural-verb")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + pluralVerbSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createSecondPersonPluralVerb() {
    let pluralVerbSuffix = document.getElementById("plural-verb-suffix").innerHTML;
    let firstPersonPrefix = createSecondPersonVerbPrefix();
    let spanVerb = document.getElementsByClassName("second-person-plural-verb")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + pluralVerbSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}


let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    clearGeneratedArrays()
    
    //createNounInflectionTables();
    generateNouns();
    generateAdjectives();
    generateCopula();
    generateTransitiveVerbs();
    generateIntransitiveVerbs();
    generateNominaliser();
    generateConjunctions();
    generateAdverbs();
    generateHere()
    generateThere();
    generateAdverbialSuffix();
    generateFirstPersonPronoun();
    generateSecondPersonPronoun();
    generateNonPastSuffix();
    generatePluralVerbSuffix();
    generateHabitualSuffix();
    generateSg();
    generatePl();
    generateAcc();
    generateGen();

    createHere();
    createThere()
    createThis();
    createThese();
    createThat();
    createThose();
    createAccDemonstrative();
    createGenDemonstrative();
    createAlso();
    createAgain();
    createPlace();
    createWhere();
    createMan();
    createPath();
    createOrigin();
    createTime();
    createWhere();
    createWho();
    createWhat();
    createWhen();
    createHow();
    createWhy();
    createInterrogativeSuffix();
    createRelativePronoun();
    createFirstPersonPronoun();
    createSecondPersonPronoun();
    createCopulaSgNonPast();
    createCopulaPlNonPast();
    createRandomAdjective();
    createRandomNoun();
    createRandomVerb();
    createRandomTransitiveVerb();
    createRandomIntransitiveVerb();
    createNounNomSg();
    createAccNomSg();
    createGenNomSg();
    createNounNomPl();
    createNounAccPl();
    createNounGenPl();
    createAdjNomSg();
    createAdjNomPl();
    createBahuvrihi();
    makeMeaningPlural();
    makeMeaningPast();
    createVerbNonPast();
    createFirstPersonVerbPrefix();
    createSecondPersonVerbPrefix();
    createThirdPersonSingularVerb();
    createVerbFirstPerson();
    createVerbSecondPerson();
    createPluralVerb();
    createPluralVerbNonPast();
    createFirstPersonVerbNonPast();
    createSecondPersonVerbNonPast();
    createFirstPersonPluralVerbNonPast();
    createFirstPersonVerbNonPastHabitual();
    createSecondPersonPluralVerbNonPast();
    createVerbNonPastHabitual();
    createSecondPersonVerbNonPastHabitual()
    createFirstPersonPluralVerb();
    createSecondPersonPluralVerb();
    createThirdPersonSingularTransitiveVerb();
    createThirdPersonSingularIntransitiveVerb();
    createFirstPersonVerbHabitual();
    createSecondPersonVerbHabitual();
    createVerbHabitual();
    createToday();
}

