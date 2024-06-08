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
import adpositionArray from './englishWordArrays/adpositions.js';
import intensifierArray from './englishWordArrays/intensifier.js';
import nounCases from './allPossibleNounCases.js'

import {soundChange, voiced, chosenSoundChanges, checkIfWordFinalConsonantsArePossible, wordFinalDevoicingTrueOrFalse,selectSoundChanges, resonants, plosives, randomNumForlenitionofPlosivebeforeOtherPlosive, lenitionFromPlosives1, lenitionFromPlosives2, nonHighVowels} from './soundchange.js'
import {spell, checkIfCanUseMacron} from './orthography.js'
import {consonants, vowels, selectedSyllables, selectApproximants, selectFricatives, selectNasals, selectPlosives, selectAffricates, selectRhotics, selectLateralApproximants, allAspiratesArray, chooseLength, allLongVowels, allLongConsonants, allHighVowels} from './generatePhonology.js';
import {allWordOrders, subjectFinalWordOrders, objectFinalWordOrders, verbFinalWordOrders} from './allPossibleWordOrders.js'


//combines both transitive and intransitive verbs into one list for cases where transitivity is irrelevant
let verbArray = transitiveVerbArray.concat(intransitiveVerbArray); 
let verbPastArray = transitiveVerbPastArray.concat(intransitiveVerbPastArray);;
let verbThirdPersonSingularArray = intransitiveVerb3SArray.concat(transitiveVerb3SArray);

//These arrays will be filled with the randomly generated words
let generatedNouns = [];
let generatedAdjectives = [];
let generatedTransitiveVerbs = [];
let generatedIntransitiveVerbs = [];
let generatedConjunctions = [];
let generatedAdverbs = [];
let generatedAdpositions = [];
let generatedIntensifiers = [];
let chosenNounCases = [];
let grammaticalNumberArray = [];
let nounGenderArray = [];

let wordThere = "";
let wordHere = "";
let firstPersonPronoun = "";
let secondPersonPronoun = "";
let habitual = "";
let pluralVerb = "";
let nonPast = "";
let adverbialAffix = "";
let nominaliser = "";
let singularAffix = "";
let pluralAffix = "";
let accusativeAffix  = "";
let genitiveAffix = "";



let allPossibleVowels = ["a", "e", "i", "o", "u", "æ", "ɐ", "ɑ", "ə", "ɵ", "ɘ", "ɛ", "ɜ", "ɞ", "ɪ", "ɨ", "ɔ", "ɒ", "œ", "ø", "ʌ", "ʉ", "ɯ", "ɤ", "y", "ʏ"]

let allPossibleConsonants = ["m", "n", "ŋ", "ɲ", "ɳ", "p", "ʰp", "pʰ", "b", "bʰ", "t", "tʰ", "ʰt", "ʈ", "d", "dʰ", "ɖ", "k", "ʰk", "kʰ", "g", "gʰ", "q", "ɢ", "ʔ", "ʕ", "β", "ɸ", "f", "v", "r", "l", "s", "ʃ", "ʂ", "z", "ʐ", "ʒ", "tʃ", "dʒ", "ʁ", "χ", "w", "j", "ʋ", "h", "ħ", "ɦ", "ɣ", "x", "ts", "θ", "ð", "ʝ", "ç", "c", "ɟ", "ʟ", "ɮ", "ɬ", "ʎ"]


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
    generatedAdpositions = [];
    generatedIntensifiers = [];
    chosenNounCases = [];
    grammaticalNumberArray = [];
    nounGenderArray = [];

    wordThere = "";
    wordHere = "";
    firstPersonPronoun = "";
    secondPersonPronoun = "";
    habitual = "";
    pluralVerb = "";
    nonPast = "";
    adverbialAffix = "";
    nominaliser = "";
    singularAffix = "";
    pluralAffix = "";
    accusativeAffix  = "";
    genitiveAffix = "";

    document.getElementById("orthography").replaceChildren();
    document.getElementById("language-to-english").replaceChildren();
    document.getElementById("english-to-language").replaceChildren();
    document.getElementById("lenition-before-list").replaceChildren();
    document.getElementById("nouns").replaceChildren();

}

function showGrammarAndDictionary() {
    document.getElementById("grammar").style.display = "block";
    document.getElementById("dictionary").style.display = "block";
}

//generates the words by giving each one a random amount of syllables, and choosing each syllable to be structured according to a randomly chosen syllable structure from the language's chosen options of syllable structures.
function generateWords() {
    let resonants = selectRhotics().concat(selectLateralApproximants())
    let newSyllableArray = [];
    let newWord = "";


    let numberOfSyllables = 0;
    //if an inventory is small, then it needs more syllables per work to prevent large amounts of homophones
    let numOfAllSounds = vowels.length + consonants.length
    if(numOfAllSounds < 20 ) {
        numberOfSyllables = Math.floor(Math.random() * (3 - 2) + 2);
    } else if (numOfAllSounds < 15 ) {
        numberOfSyllables = Math.floor(Math.random() * (4 - 3) + 3);
    } else if (numOfAllSounds <= 10 ) {
        numberOfSyllables = Math.floor(Math.random() * (5 - 4) + 4);
    }else {
        numberOfSyllables = Math.floor(Math.random() * (3 - 2) + 2);
    }

    for(let i = 0; i < numberOfSyllables; i++) {
        let syllable = selectedSyllables[Math.floor(Math.random() * selectedSyllables.length)]; //chooses a random syllable from array of selected syllables
        let syllableArray = Array.from(syllable); //turns that syllable into it's own array, with each letter now being it's own item e.g ["CV"] > ["C", "V"]
        for(let j = 0; j < syllableArray.length; j++) {
            if(syllableArray[j] === "C") {
                newSyllableArray.push(consonants[Math.floor(Math.random() * consonants.length)]);
            } else if (syllableArray[j] === "V"){
                newSyllableArray.push(vowels[Math.floor(Math.random() * vowels.length)]);  
            } else if (syllableArray[j] === "F"){
                newSyllableArray.push(selectFricatives()[Math.floor(Math.random() * selectFricatives().length)]);  
            } else if (syllableArray[j] === "A"){
                newSyllableArray.push(selectApproximants()[Math.floor(Math.random() * selectApproximants().length)]);  
            } else if (syllableArray[j] === "N"){
                newSyllableArray.push(selectNasals()[Math.floor(Math.random() * selectNasals().length)]);  
            } else if (syllableArray[j] === "R"){
                newSyllableArray.push(resonants[Math.floor(Math.random() * resonants.length)]);  
            }else if (syllableArray[j] === "H"){
                newSyllableArray.push(allAspiratesArray[Math.floor(Math.random() * allAspiratesArray.length)]);  
            }
        }  
    }
    newWord = newSyllableArray.join("");
    return newWord;
}

//sends each word, generated by the function above, to the appropriate array
function sendGeneratedWordsToArray() {
    nounArray.forEach((element) => generatedNouns.push(generateWords()));
    adjectiveArray.forEach((element) => generatedAdjectives.push(generateWords()));
    transitiveVerbArray.forEach((element) => generatedTransitiveVerbs.push(generateWords()));
    intransitiveVerbArray.forEach((element) => generatedIntransitiveVerbs.push(generateWords()));
    conjunctionArray.forEach((element) => generatedConjunctions.push(generateWords()));
    adverbArray.forEach((element) => generatedAdverbs.push(generateWords()));
    adpositionArray.forEach((element) => generatedAdpositions.push(generateWords()));
    intensifierArray.forEach((element) => generatedIntensifiers.push(generateWords()));
    wordThere = generateWords();
    wordHere = generateWords();
    firstPersonPronoun = generateWords();
    secondPersonPronoun = generateWords();   
}

//I wish to avoid affixes becoming to long, lest they result in very unreasonably long words, especially if a word gains multiple affixes. So This function does the same as generateWords() but prevents overly complex syllable structures and demands that all affixes be monosyllablic. This function may also be used for other morphemes that I'd prefer not be too long.
function generateAffixes() {
    let resonants = selectRhotics().concat(selectLateralApproximants())
    let newSyllableArray = [];
    let newAffix = "";
    let numberOfSyllables = 1;    
    for(let i = 0; i < numberOfSyllables; i++) {
        let syllable = selectedSyllables[Math.floor(Math.random() * selectedSyllables.length)]; //chooses a random syllable from array of selected syllables
        let syllableArray = Array.from(syllable); //turns that syllable into it's own array, with each letter now being it's own item e.g ["CV"] > ["C", "V"]
        for(let j = 0; j < syllableArray.length; j++) {
            if(syllableArray[j] === "C") {
                newSyllableArray.push(consonants[Math.floor(Math.random() * consonants.length)]);
            }  else if (syllableArray[j] === "V"){
                    newSyllableArray.push(vowels[Math.floor(Math.random() * vowels.length)]);  
                } else if (syllableArray[j] === "F"){
                    newSyllableArray.push(selectFricatives()[Math.floor(Math.random() * selectFricatives().length)]);  
                } else if (syllableArray[j] === "A"){
                    newSyllableArray.push(selectApproximants()[Math.floor(Math.random() * selectApproximants().length)]);  
                } else if (syllableArray[j] === "N"){
                    newSyllableArray.push(selectNasals()[Math.floor(Math.random() * selectNasals().length)]);  
                } else if (syllableArray[j] === "R"){
                    newSyllableArray.push(resonants[Math.floor(Math.random() * resonants.length)]);  
                }else if (syllableArray[j] === "H"){
                    newSyllableArray.push(allAspiratesArray[Math.floor(Math.random() * allAspiratesArray.length)]);  
                }  
        }  
    }
    newAffix = newSyllableArray.join("");
    return newAffix;
}

function sendGeneratedAffixesToArray() {
    habitual = generateAffixes();
    pluralVerb = generateAffixes();
    nonPast = generateAffixes();
    adverbialAffix = generateAffixes();
    nominaliser = generateAffixes();
    singularAffix = generateAffixes();
    pluralAffix = generateAffixes();
    accusativeAffix = generateAffixes();
    genitiveAffix = generateAffixes();
}

/*************GENERATES EXAMPLES FOR SYLLABLE STRUCTURE************ */

//The key is the list showing what each letter in syllable structure notation stands for. Each item only appears if the language has the relevant syllable structure e.g "A 'approximant' will only show if the language has a syllable structure such as CAV, CVA" and so on.
function showSyllableStructureKey() {
    let syllableA = document.getElementById("a-syllable");
    let syllableF = document.getElementById("f-syllable");
    let syllableR = document.getElementById("r-syllable");
    let syllableN = document.getElementById("n-syllable");
    let syllableH = document.getElementById("h-syllable");

    //I joined the whole array of selected syllables and then turn them into an array again, so that each indivudual letter was it's own item
    let syllableJoin = selectedSyllables.join("")
    let syllableSplit = Array.from(syllableJoin) 

    if(syllableSplit.includes("A") && selectApproximants() > 0) {
        syllableA.style.display = "block";
    } else {
        syllableA.style.display = "none";
    }

    if(syllableSplit.includes("F")) {
        syllableF.style.display = "block";
    } else {
        syllableF.style.display = "none";
    }
    
    if(syllableSplit.includes("R")) {
        syllableR.style.display = "block";
    } else {
        syllableR.style.display = "none";
    }

    if(syllableSplit.includes("N")) {
        syllableN.style.display = "block";
    } else {
        syllableN.style.display = "none";
    }

    if(syllableSplit.includes("H")) {
        syllableH.style.display = "block";
    } else {
        syllableH.style.display = "none";
    }

}

function syllableStructureExamples() {
    let resonants = selectRhotics().concat(selectLateralApproximants())
    let exampleUl = document.getElementById("syllable-example-list")
    exampleUl.style.display = "block"

    for(let i = 0; i <  selectedSyllables.length; i++) {
        let example = []
        let syllableArray = Array.from(selectedSyllables[i]); //turns that syllable into it's own array, with each letter now being it's own item e.g ["CV"] > ["C", "V"]
        for(let x = 0; x < Math.floor(Math.random()* 6) + 2; x++) {
            example.push("[")
            for(let j = 0; j < syllableArray.length; j++) {
                if(syllableArray[j] === "C") {
                    example.push(consonants[Math.floor(Math.random() * consonants.length)]);
                } else if (syllableArray[j] === "V"){
                    example.push(vowels[Math.floor(Math.random() * vowels.length)]);  
                } else if (syllableArray[j] === "F"){
                    example.push(selectFricatives()[Math.floor(Math.random() * selectFricatives().length)]);  
                } else if (syllableArray[j] === "A"){
                    example.push(selectApproximants()[Math.floor(Math.random() * selectApproximants().length)]);  
                } else if (syllableArray[j] === "N"){
                    example.push(selectNasals()[Math.floor(Math.random() * selectNasals().length)]);  
                } else if (syllableArray[j] === "R"){
                    example.push(resonants[Math.floor(Math.random() * resonants.length)]);  
                }else if (syllableArray[j] === "H"){
                    example.push(allAspiratesArray[Math.floor(Math.random() * allAspiratesArray.length)]);  
                }
            }  
            example.push("]")
            example.push(", ")
        }
        example.pop();
        
        let newLi = document.createElement("li")
        let spanExample = document.createElement("span");
        let exampleHeadword = document.createElement("span");
        
        exampleHeadword.innerHTML = `${selectedSyllables[i]}: `;

        spanExample.innerHTML = example.join("");

       // newLi.innerHTML = `${selectedSyllables[i]}: ${spanExample.innerHTML}`
        exampleUl.appendChild(newLi);
        newLi.appendChild(exampleHeadword)
        newLi.appendChild(spanExample)
    }
}

function makeOrthoGuide(letter) {
let orthoUl = document.getElementById("orthography");
    for(let i = 0; i < letter.length; i++) {
    if(vowels.includes(letter[i]) || consonants.includes(letter[i])) {
        let newLi = document.createElement("li");
        let ipa = letter[i];
        let ortho = spell(ipa);
        newLi.innerHTML = `[${ipa}] ⟨${ortho}⟩`
        orthoUl.appendChild(newLi);
        }
    }
}

let lengthExplanationText = document.createElement("span")
lengthExplanationText.setAttribute("id", "length-explanation")
function lengthExplanation() {
    if (allLongVowels.length === 0 && allLongConsonants.length > 0) {
        lengthExplanationText.innerHTML = ` Long consonants are marked by doubling the letter e.g ⟨pp⟩.`
    }
    if (allLongVowels.length > 0 && allLongConsonants.length === 0) {
        if(checkIfCanUseMacron()) {
            lengthExplanationText.innerHTML = ` Long vowels are marked by placing a macron on the letter e.g ⟨ī⟩.`
        } else {
            lengthExplanationText.innerHTML = ` Long vowels are marked by doubling the letter e.g ⟨ii⟩.`
        }
    }
    if (allLongVowels.length > 0 && allLongConsonants.length > 0) {
        if(checkIfCanUseMacron()) {
            lengthExplanationText.innerHTML = ` Long vowels are marked by placing a macron on the letter e.g ⟨ī⟩ and long consonants are marked by doubling the letter e.g ⟨pp⟩.`
        } else {
            lengthExplanationText.innerHTML = ` Long vowels and long consonants are both marked by doubling the letter e.g ⟨ii⟩ and ⟨pp⟩.`
        }
    }
    if (allLongVowels.length === 0 && allLongConsonants.length === 0) {
        lengthExplanationText.innerHTML = "";
    }
    document.getElementById("orthography-text").appendChild(lengthExplanationText)
}


/*Lists each phonotactic rule with examples*/

function showPhonotacticRules() {
    WordFinalDevoicingExample();
    nonHighNonInitialVowelsBecomeAExample();
    lowerWordFinalHighVowelsExample();
    noResonantBeforeConsonant();
    lenitePlosivesBeforeOtherPlosives();
    noNasalsAfterConsonants();

}

function WordFinalDevoicingExample() {
    let exampleNoun = "";
    let exampleNoun2 = ""
    let compoundNoun = ""
    let randomNounMeaning = "";
    let randomNounMeaning2 = ""
    let possibleExamples = [];
    let randomNum = Math.floor(Math.random() * generatedNouns.length)
    if(voiced.length === 0) {
        //console.log("no voicing!")
        document.getElementById("wordFinalDevoicing").style.display = "none"; 
    }
    for(let i = 0; i < generatedNouns.length; i++) {
        let newArray = Array.from(generatedNouns[i]);
        if(voiced.includes(newArray[newArray.length - 1])) {
            let joinedString = newArray.join("")
            possibleExamples.push(joinedString)
        }  
    }
    if(possibleExamples.length === 0) {
        document.getElementById("wordFinalDevoicing").style.display = "none"; 
        //console.log("no nouns ending in voiced consonants!")
    } else {
        exampleNoun = possibleExamples[Math.floor(Math.random() * possibleExamples.length)];
        exampleNoun2 =  generatedNouns[randomNum];
        compoundNoun = exampleNoun + exampleNoun2;
        randomNounMeaning = nounArray[generatedNouns.indexOf(exampleNoun)];
        randomNounMeaning2 = nounArray[randomNum] 
    }
            
    document.getElementById("word-final-devoicing-examplenoun").innerHTML = spell(soundChange(exampleNoun))
    document.getElementById("word-final-devoicing-examplenounmeaning").innerHTML = randomNounMeaning;
    document.getElementById("word-final-devoicing-example-compound").innerHTML = spell(soundChange(compoundNoun));
    document.getElementById("word-final-devoicing-example-compound-meaning").innerHTML = `${randomNounMeaning}-${randomNounMeaning2}` 
}

function nonHighNonInitialVowelsBecomeAExample() {
    let containsNonHighVowel = [];
    let example = document.getElementsByClassName("non-high-non-initial-example");
    let exampleMeaning = document.getElementsByClassName("non-high-non-initial-example-meaning");
    let example2 = document.getElementsByClassName("non-high-non-initial-example2");
    let exampleMeaning2 = document.getElementsByClassName("non-high-non-initial-example-meaning2");
    
    //since /a/ if the target vowel, I don't want words that only have the vowels /i u a/
    for(let i = 0; i < nonHighVowels.length; i++) {
        if(nonHighVowels[i] === "a" || nonHighVowels[i] === "aː") {
            nonHighVowels.splice(i, 1)
        }
    }

    for(let i = 0; i < example.length; i++) {
        for(let j = 0; j < generatedNouns.length; j++) {
            let noun = generatedNouns[j];
            let num = 0;
            for(let i = 0; i < noun.length; i++) {
                if(nonHighVowels.includes(noun[i]) && num === 0) {
                    containsNonHighVowel.push(noun)
                }
                if(vowels.includes(noun[i])) {
                    num++;
                }
             }
        }
        

        if(containsNonHighVowel.length !== 0) {
       
            let randomNoun = generatedNouns[Math.floor(Math.random() * generatedNouns.length)];
            let randomNounMeaning = nounArray[generatedNouns.indexOf(randomNoun)]
            example[i].innerHTML = spell(soundChange(randomNoun));
            exampleMeaning[i].innerHTML = randomNounMeaning;

            let secondNoun = containsNonHighVowel[Math.floor(Math.random() * containsNonHighVowel.length)];
            let secondNounMeaning = nounArray[generatedNouns.indexOf(secondNoun)]
            example2[i].innerHTML = spell(soundChange(secondNoun));
            exampleMeaning2[i].innerHTML = secondNounMeaning;

            let compound = randomNoun + secondNoun     
            document.getElementsByClassName("non-high-non-initial-compound")[i].innerHTML = spell(soundChange(compound));

            let compoundMeaning = `${randomNounMeaning}-${secondNounMeaning}`     
            document.getElementsByClassName("non-high-non-initial-compound-meaning")[i].innerHTML = compoundMeaning;
            }
    }
}

function lowerWordFinalHighVowelsExample() {
    let highVowelListSpan = document.getElementsByClassName("high-vowels");
    for(let i = 0 ; i < highVowelListSpan.length; i++) {
        highVowelListSpan[i].innerHTML = `/${allHighVowels.join(", ")}/`
    }
    let possibleExamples = [];
    let example = document.getElementsByClassName("lower-high-vowel-example");
    let exampleMeaning = document.getElementsByClassName("lower-high-vowel-example-meaning");
    for(let i = 0; i < example.length; i++) {
        for(let j = 0; j < generatedAdjectives.length; j++) {
            let randomAdj = generatedAdjectives[j]
            if(allHighVowels.includes(randomAdj[randomAdj.length -1])) {
                possibleExamples.push(randomAdj)
            }
        }
        let randomAdj = possibleExamples[Math.floor(Math.random() * possibleExamples.length)];
        let randomAdjMeaning = adjectiveArray[generatedAdjectives.indexOf(randomAdj)];
        example[i].innerHTML = spell(soundChange(randomAdj));
        exampleMeaning[i].innerHTML = randomAdjMeaning;
    }
}

function noResonantBeforeConsonant() {
    let endsInAResonantArray = [];
    let beginsInConsonantArray = [];
    let example = document.getElementsByClassName("no-resonant-before-consonant-example");
    let exampleMeaning = document.getElementsByClassName("no-resonant-before-consonant-example-meaning");
    let example2 = document.getElementsByClassName("no-resonant-before-consonant-example2");
    let exampleMeaning2 = document.getElementsByClassName("no-resonant-before-consonant-example-meaning2");
    
    for(let i = 0; i < example.length; i++) {
        for(let j = 0; j < generatedNouns.length; j++) {
            let noun = generatedNouns[j];
            if(resonants.includes(noun[noun.length -1])) {
                endsInAResonantArray.push(noun)
            }
            if(consonants.includes(noun[0])) {
                beginsInConsonantArray.push(noun)
            }
        }
        
        if(endsInAResonantArray.length !== 0 && beginsInConsonantArray !== 0) {
           
       
            let randomNoun = endsInAResonantArray[Math.floor(Math.random() * endsInAResonantArray.length)];
            let randomNounMeaning = nounArray[generatedNouns.indexOf(randomNoun)]
            example[i].innerHTML = spell(soundChange(randomNoun));
            exampleMeaning[i].innerHTML = randomNounMeaning;

            let randomNounForCompound = beginsInConsonantArray[Math.floor(Math.random() * beginsInConsonantArray.length)];
            let randomNounMeaningForCompound = nounArray[generatedNouns.indexOf(randomNounForCompound)]
            example2[i].innerHTML = spell(soundChange(randomNounForCompound));
            exampleMeaning2[i].innerHTML = randomNounMeaningForCompound;

            let compound = randomNoun + randomNounForCompound     
            document.getElementsByClassName("no-resonant-before-consonant-compound")[i].innerHTML = spell(soundChange(compound));

            let compoundMeaning = `${randomNounMeaning}-${randomNounMeaningForCompound}`     
            document.getElementsByClassName("no-resonant-before-consonant-compound-meaning")[i].innerHTML = compoundMeaning;
        }
    }
        
        
    
}

function lenitePlosivesBeforeOtherPlosives() {
    let beginsInConsonantArray = [];
    let endsInConsonantArray = [];
    let example = document.getElementsByClassName("lenite-plosive-before-other-plosive-example");
    let exampleMeaning = document.getElementsByClassName("lenite-plosive-before-other-plosive-example-meaning");
    let example2 = document.getElementsByClassName("lenite-plosive-before-other-plosive-example2");
    let exampleMeaning2 = document.getElementsByClassName("lenite-plosive-before-other-plosive-example-meaning2");

    for(let i = 0; i < example.length; i++) {
        for(let j = 0; j < generatedNouns.length; j++) {
            let noun = generatedNouns[j];
            if(plosives.includes(noun[noun.length -1])) {
                endsInConsonantArray.push(noun)
            }
            if(plosives.includes(noun[0])) {
                beginsInConsonantArray.push(noun)
            }
        }

        if(endsInConsonantArray.length !== 0 && beginsInConsonantArray !== 0) {
           
       
            let randomNoun = endsInConsonantArray[Math.floor(Math.random() * endsInConsonantArray.length)];
            let randomNounMeaning = nounArray[generatedNouns.indexOf(randomNoun)]
            example[i].innerHTML = spell(soundChange(randomNoun));
            exampleMeaning[i].innerHTML = randomNounMeaning;

            let randomNounForCompound = beginsInConsonantArray[Math.floor(Math.random() * beginsInConsonantArray.length)];
            let randomNounMeaningForCompound = nounArray[generatedNouns.indexOf(randomNounForCompound)]
            example2[i].innerHTML = spell(soundChange(randomNounForCompound));
            exampleMeaning2[i].innerHTML = randomNounMeaningForCompound;

            let compound = randomNoun + randomNounForCompound     
            document.getElementsByClassName("lenite-plosive-before-other-plosive-example-compound")[i].innerHTML = spell(soundChange(compound));

            let compoundMeaning = `${randomNounMeaning}-${randomNounMeaningForCompound}`     
            document.getElementsByClassName("lenite-plosive-before-other-plosive-example-compound-meaning")[i].innerHTML = compoundMeaning;
            }
        }


    for(let i = 0; i < plosives.length; i++) {
        if(randomNumForlenitionofPlosivebeforeOtherPlosive === 0 && consonants.includes(plosives[i])) {
            let newLi = document.createElement("li");
            newLi.innerHTML = `${plosives[i]} > [${lenitionFromPlosives1[i]}] ⟨${spell(lenitionFromPlosives1[i])}⟩`
            document.getElementById("lenition-before-list").appendChild(newLi)
        } else if (randomNumForlenitionofPlosivebeforeOtherPlosive === 1 && consonants.includes(plosives[i])) {
             let newLi = document.createElement("li");
            newLi.innerHTML = `${plosives[i]} > [${lenitionFromPlosives2[i]}] ⟨${spell(lenitionFromPlosives2[i])}⟩`
            document.getElementById("lenition-before-list").appendChild(newLi)
        }
    }
}

function noNasalsAfterConsonants() {
    let beginsInANasalArray = [];
    let endsInConsonantArray = [];
    let example = document.getElementsByClassName("insert-i-before-nasal-example");
    let exampleMeaning = document.getElementsByClassName("insert-i-before-nasal-example-meaning");
    let example2 = document.getElementsByClassName("insert-i-before-nasal-example2");
    let exampleMeaning2 = document.getElementsByClassName("insert-i-before-nasal-example-meaning2");
    
    for(let i = 0; i < example.length; i++) {
        for(let j = 0; j < generatedNouns.length; j++) {
            let noun = generatedNouns[j];
            if(consonants.includes(noun[noun.length -1])) {
                endsInConsonantArray.push(noun)
            }
            if(selectNasals().includes(noun[0]) && vowels.includes(noun[1])) {
                beginsInANasalArray.push(noun)
            }
        }
        
        if(endsInConsonantArray.length !== 0 && beginsInANasalArray !== 0) {
           
       
            let randomNoun = endsInConsonantArray[Math.floor(Math.random() * endsInConsonantArray.length)];
            let randomNounMeaning = nounArray[generatedNouns.indexOf(randomNoun)]
            example[i].innerHTML = spell(soundChange(randomNoun));
            exampleMeaning[i].innerHTML = randomNounMeaning;

            let randomNounForCompound = beginsInANasalArray[Math.floor(Math.random() * beginsInANasalArray.length)];
            let randomNounMeaningForCompound = nounArray[generatedNouns.indexOf(randomNounForCompound)]
            example2[i].innerHTML = spell(soundChange(randomNounForCompound));
            exampleMeaning2[i].innerHTML = randomNounMeaningForCompound;

            let compound = randomNoun + randomNounForCompound     
            document.getElementsByClassName("insert-i-before-nasal-example-compound")[i].innerHTML = spell(soundChange(compound));

            let compoundMeaning = `${randomNounMeaning}-${randomNounMeaningForCompound}`     
            document.getElementsByClassName("insert-i-before-nasal-example-compound-meaning")[i].innerHTML = compoundMeaning;
        }
    }
        
        
    
}

/*********TYPOLOGY RELATED SECTION*********/

let typologyNum = 0;
function randomNumForTypology() {
    typologyNum = Math.floor(Math.random() * 3)
}

function chooseTypology() {
    let typology = "";
    if(typologyNum === 0) {
        document.getElementById("typology").innerHTML = `an isolating language, meaning that there are no affixes in this language and that every morpheme is an independent word.`
        typology = "isolating"
    }
    if(typologyNum === 1) {
        document.getElementById("typology").innerHTML = `an agglutinative language, meaning that every morpheme has just one meaning assigned to it, and that these morphemes may stack up together. Some aspects of the language may be slightly fusional where sound changes have blended some affixes together.`
        typology = "agglutinative"
    }
    if(typologyNum === 2) {
        document.getElementById("typology").innerHTML = `a fusional language, meaning that a morpheme may bear more than one unit of meaning.`
        typology = "fusional"
    }
    return typology;
}

/****************WORD ORDER RELATED SECTION*******/
let wordOrderNum = 0;
function randomNumForWordOrder() {
    wordOrderNum = Math.floor(Math.random() * 6)
}

function chooseWordOrder() {
    if(wordOrderNum === 0) {
        document.getElementById("word-order").innerHTML = `OSV (Object Subject Verb) so a sentence like "The man loves the woman" is phrased "The woman the man loves".`
        return allWordOrders[0];
    }
    if(wordOrderNum === 1) {
        document.getElementById("word-order").innerHTML = `SOV (Subject Object Verb) so a sentence like "the man loves the woman" is phrased "the man the woman loves".`
        return allWordOrders[1];
    }
    if(wordOrderNum === 2) {
        document.getElementById("word-order").innerHTML = `SVO (Subject Verb Object) so a sentence like "the man loves the woman" is phrased just as in English.`
        return allWordOrders[2];
    }
    if(wordOrderNum === 3) {
        document.getElementById("word-order").innerHTML = `VSO (Verb Subject Object) so a sentence like "the man loves the woman" is phrased "loves the man the woman."`
        return allWordOrders[3];
    }
    if(wordOrderNum === 4) {
        document.getElementById("word-order").innerHTML = `VOS (Verb Subject Object) so a sentence like "the man loves the woman" is phrased "loves the woman the man."`
        return allWordOrders[4];
    }
    if(wordOrderNum === 5) {
        document.getElementById("word-order").innerHTML = `OVS (Object Verb Subject) so a sentence like "the man loves the woman" is phrased "the woman loves the man".`
        return allWordOrders[5];
    }
}

/*****Noun Gender*******/

let genderNum = 0;
function randomNumForNounGender() {
    genderNum = Math.floor(Math.random() * 4)
}

function chooseNounGender() {
    const genderHeader = document.createElement("h3")
    genderHeader.innerHTML = "Noun Gender"
    const genderP = document.createElement("p");

    if(genderNum === 0) {
        genderHeader.style.display = "none";
        genderP.style.display = "none";
    }
    if(genderNum === 1) {
        nounGenderArray.push("animate", "inanimate");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "animate" and "inanimate". The animate gender encompasses all nouns that refer to living things, as well as some non-living but "dynamic" things such as fire and moving water.`
    }
    if(genderNum === 2) {
        nounGenderArray.push("masculine", "feminine");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "masculine" and "feminine". Non-living entities are assigned to either gender based on whether the item is thought to be associated more with men or woman, or at random.`
    }
    if(genderNum === 3) {
        nounGenderArray.push("masculine", "feminine", "neuter");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has three grammatical genders which are "masculine", "feminine" and "neuter". The neuter gender encompasses all non-living things as well as wild animals. Abstract concepts may be masculine or feminine if thought to be associated more with either, or neuter if not.`
    }
    if(genderNum === 4) {
        nounGenderArray.push("human", "animal", "inanimate");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has three grammatical genders which are "human", "animal" and "inanimate". The genders are quite literally as their names describe, with the inanimate gender encompassing plants and non-living things.`
    }
    if(genderNum === 5) {
        nounGenderArray.push("divine", "non-divine");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "divine" and "non-divine". The divine encompasses any noun referring to gods, whether the noun itself is animate or inanimate i.e an object or place associated with a god is part of the divine gender.`
    }
    if(genderNum === 6) {
        nounGenderArray.push("active", "passive");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "active" and "passive". The active refers to a noun which can act as an agent of a transitive verb, while the passive is any noun that can't be an agent, even if the subject of a middle voice verb. Nouns referring to living things are active, as well as tools, as they can be agents of transitive verbs e.g "The man saw a deer", "The bat flew in the sky", "The knife cut the cloth". Compare this to passive nouns which can only be subjects of intransitive/middle verbs e.g "The door opened" ("someone opened the door") or "The milk was poured" ("someone poured the milk").`
    }
    if(genderNum === 6) {
        nounGenderArray.push("natural", "artificial");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "natural" and "artificial". The artificial gender encompasses all nthings made by humans, while the natural gender encompasses everything else. The exact distinction can get quite idiosyncretic however, as abstract concepts thought to be borne purely by humans, such as "mercy" or "hospitality" are part of the artificial gender.`
    }
    document.getElementById("nouns").appendChild(genderHeader);
    document.getElementById("nouns").appendChild(genderP);
    


}

/**********CASE RELATED SECTION***********/

function chooseCases() {
    //there will be no cases if language is isolating
    if(chooseTypology() !== "isolating") {
        //decides if the language has cases or not
        if(Math.floor(Math.random() * 2) !== 0) {
            const randomNum = Math.floor(Math.random() * 8);
            if(randomNum <= 4) {
                chosenNounCases.push("Nominative");
                chosenNounCases.push("Accusative");
                chosenNounCases.push("Genitive");
                chosenNounCases.push("Dative");
                }
            if(randomNum > 4) {
                chosenNounCases.push("Nominative");
                chosenNounCases.push("Accusative");
                chosenNounCases.push("Genitive");
                chosenNounCases.push("Dative");
                //chooses additional cases
                const randomCase = Math.floor(Math.random() * nounCases.length);
                while(chosenNounCases.length < Math.floor(Math.random() * 15) + 4) {
                    chosenNounCases.push(nounCases[Math.floor(Math.random() * nounCases.length)])
                }       
            }   
        }
    }
}

function explainCases() {
    if(chosenNounCases.length > 0) {
        const caseHeader = document.createElement("h3");
        caseHeader.innerHTML = "Case";
        document.getElementById("nouns").appendChild(caseHeader)

        const listOfCases = [];
        chosenNounCases.forEach((element) => listOfCases.push(element));
        listOfCases.pop()
        listOfCases.push(` and ${chosenNounCases[chosenNounCases.length -1]}`)
        let listOfCasesString =  listOfCases.join(", ")

        const caseP = document.createElement("p");
        caseP.innerHTML = `There are ${chosenNounCases.length} noun cases in <span class="language-name">Kerbekulo</span> which are ${listOfCasesString}.`
        document.getElementById("nouns").appendChild(caseP)

        if(chosenNounCases.includes("Nominative")) {
            const nominative = document.createElement("p");
            nominative.innerHTML = `The <strong>Nominative</strong> case is used to mark the subject of a verb, the noun which is the performer of an action.`
            document.getElementById("nouns").appendChild(nominative);
        }
        if(chosenNounCases.includes("Accusative")) {
            const accusative = document.createElement("p");
            accusative.innerHTML = `The <strong>Accusative</strong> case is used to mark the object of a verb, the noun which is the recipient of an action.`
            document.getElementById("nouns").appendChild(accusative);
        }
        if(chosenNounCases.includes("Genitive")) {
            const genitive = document.createElement("p");
            genitive.innerHTML = `The <strong>Genitive</strong> case is used to mark possession.`
            document.getElementById("nouns").appendChild(genitive);
        }
        if(chosenNounCases.includes("Dative")) {
            const dative = document.createElement("p");
            dative.innerHTML = `The <strong>Dative</strong> case is used to mark indirect objects, nouns that are not the direct recipients of an action. Such nouns in English occur after prepositions e.g the noun "boy" in "I gave a book to the boy.`
            document.getElementById("nouns").appendChild(dative);
        }
        if(chosenNounCases.includes("Ablative")) {
            const ablative = document.createElement("p");
            ablative.innerHTML = `The <strong>Ablative</strong> case is used to mark motion away from a noun.`
            document.getElementById("nouns").appendChild(ablative);
        }
        if(chosenNounCases.includes("Locative")) {
            const locative = document.createElement("p");
            if(chosenNounCases.includes("Ablative") === false) {
                locative.innerHTML = `The <strong>Locative</strong> case is used to mark a noun used with an adposition e.g "in the forest" or "on a mountain".`
            } else {
                locative.innerHTML = `The <strong>Locative</strong> case is used to a mark a noun alongside an adposition with a static/non-moving meaning e.g "next to a house".`
            }
            document.getElementById("nouns").appendChild(locative);
        }
        if(chosenNounCases.includes("Inessive")) {
            const inessive = document.createElement("p");
            inessive.innerHTML = `The <strong>Inessive</strong> case is used to mark "inside" e.g "in a house", "in a forest".`
            document.getElementById("nouns").appendChild(inessive);
        }
        if(chosenNounCases.includes("Delative")) {
            const delative = document.createElement("p");
            delative.innerHTML = `The <strong>Delative</strong> case is used to mark "from" e.g "from a house".`
            document.getElementById("nouns").appendChild(delative);
        }
        if(chosenNounCases.includes("Allative")) {
            const allative = document.createElement("p");
            allative.innerHTML = `The <strong>Allative</strong> case is used to mark "to, at" e.g "to a house".`
            document.getElementById("nouns").appendChild(allative);
        }
        if(chosenNounCases.includes("Instrumental")) {
            const instrumental = document.createElement("p");
            instrumental.innerHTML = `The <strong>Instrumental</strong> case is used to mark a noun used to do something e.g "the man was stabbed <u>with a knife</u>" or "I traveled <u>by train</u>".`
            document.getElementById("nouns").appendChild(instrumental);
        }

    }
}

/************grammatical number related section********/

let grammaticalNum = 0;
function randomNumForGrammaticalNumber() {
    grammaticalNum = Math.floor(Math.random() * 24)

}

function chooseGrammaticalNumbers() {
    const grammaticalNumHeader = document.createElement("h3");
    grammaticalNumHeader.innerHTML = "Grammatical Number"
    const grammaticalNumberP = document.createElement("p");
    if(grammaticalNum < 4) {
        grammaticalNumberArray.push("singular", "plural");
        grammaticalNumberP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical numbers; singular and plural.`

    } else if(grammaticalNum < 7) {
        grammaticalNumberArray.push("singular", "dual", "plural");
        grammaticalNumberP.innerHTML = `<span class="language-name">Kerbekulo</span> has three grammatical numbers; singular, dual and plural. The dual number is used to mark when there are two of a thing.`
    } else if(grammaticalNum < 10) {
        grammaticalNumberArray.push("singular", "plural", "collective");
        grammaticalNumberP.innerHTML = `<span class="language-name">Kerbekulo</span> has three grammatical numbers; singular, dual, plural and collective. The collective is used to mean "all" or "every".`
    } else if(grammaticalNum < 12) {
        grammaticalNumberArray.push("singular", "dual", "plural", "collective");
        grammaticalNumberP.innerHTML = `<span class="language-name">Kerbekulo</span> has four grammatical numbers; singular, dual, plural and collective. The dual number is used to mark when there are two of a thing and the collective is used to mean "all" or "every".`
    } else if(grammaticalNum < 14) {
        grammaticalNumberArray.push("singular", "dual", "trial", "plural");
        grammaticalNumberP.innerHTML = `<span class="language-name">Kerbekulo</span> has four grammatical numbers; singular, dual, trial and plural. The dual number is used to mark when there are two of a thing and the trial is to mark when there are three.`
    } else if(grammaticalNum < 16) {
        grammaticalNumberArray.push("singular", "dual", "trial", "quadral", "plural");
        grammaticalNumberP.innerHTML = `<span class="language-name">Kerbekulo</span> has five grammatical numbers; singular, dual, trial, quadral, and plural. The dual number is used to mark when there are two of a thing and the trial is to mark when there are three. The quadral marks when there are four of a thing.`
    } else if(grammaticalNum < 18) {
        grammaticalNumberArray.push("singular", "plural", "greater plural");
        grammaticalNumberP.innerHTML = `<span class="language-name">Kerbekulo</span> has three grammatical numbers; singular, plural and greater plural. The greater plural signifies "a lot of X" or "many X".`
    } else if(grammaticalNum < 20) {
        grammaticalNumberArray.push("singular", "plural", "general");
        grammaticalNumberP.innerHTML = `<span class="language-name">Kerbekulo</span> has three grammatical numbers; singular, plural and general. The general number is used when the amount of a noun is irrelevant, or to refer to unnumbered instances of the noun in general e.g "I like dogs" (not specific dogs, just dogs in general).`
    } else if(grammaticalNum < 21) {
        grammaticalNumberArray.push("general", "plural");
        grammaticalNumberP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical numbers; general and plural. The general number is used when the amount of a noun is irrelevant, or to refer to unnumbered instances of the noun in general e.g "I like dogs" (not specific dogs, just dogs in general). Given the context it may also refer to a single noun. It is broadly a "non-plural" number.`
    } else if(grammaticalNum <= 23) {
        grammaticalNumberArray.push("general", "singulative", "plural");
        grammaticalNumberP.innerHTML = `<span class="language-name">Kerbekulo</span> has three grammatical numbers; general, singulative and plural. The general number is used when the amount of a noun is irrelevant, or to refer to unnumbered instances of the noun in general e.g "I like dogs" (not specific dogs, just dogs in general). The singulative is derived from the plural and marks a specific and singular instance of a noun.`
    }
    document.getElementById("nouns").appendChild(grammaticalNumHeader);
    document.getElementById("nouns").appendChild(grammaticalNumberP);
}

/********CASE AND NOUN SECTION, IF CASES EXIST******/

// function caseAndNumber() {

// }

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    selectSoundChanges()
    showGrammarAndDictionary()
    clearGeneratedArrays();
    generateWords();
    sendGeneratedWordsToArray();
    generateAffixes();
    sendGeneratedAffixesToArray();
    showSyllableStructureKey();
    syllableStructureExamples();
    makeOrthoGuide(allPossibleVowels);
    makeOrthoGuide(allPossibleConsonants);
    lengthExplanation();
    showPhonotacticRules();
    randomNumForTypology();
    chooseTypology();
    randomNumForWordOrder();
    chooseWordOrder();
    randomNumForNounGender();
    chooseNounGender();
    randomNumForGrammaticalNumber();
    chooseGrammaticalNumbers();
    chooseCases();
    explainCases();
   }

export {generatedNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers};