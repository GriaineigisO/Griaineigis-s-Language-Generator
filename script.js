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
import animInan from './nounGender/anim_inan.js'
import mascFem from './nounGender/masc_fem.js'
import mascFemNeut from './nounGender/masc_fem_neut.js'
import humanAnimalInan from './nounGender/human_animal_inan.js'
import activePassive from './nounGender/active_passive.js'
import naturalArtificial from './nounGender/natural_artificial.js'
import divineNonDivine from './nounGender/divine_nondivine.js';


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
let animateArray = [];
let inanimateArray = [];
let masculine1Array = [];
let feminine1Array = [];
let masculine2Array = [];
let feminine2Array = [];
let neuterArray = [];
let humanArray = [];
let animalArray = [];
let inanimateArray2 = [];
let activeArray = [];
let passiveArray = [];
let naturalArray = [];
let artificialArray = [];
let divineArray = [];
let profaneArray = [];

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
let animateAffix = "";
let inanimateAffix = "";
let masculineAffix = "";
let feminineAffix = "";
let neuterAffix = "";
let divineAffix = "";
let profaneAffix = "";
let humanAffix = "";
let animalAffix = "";
let inanimate2Affix = "";
let activeAffix = "";
let passiveAffix = "";
let naturalAffix = "";
let artificialAffix = "";
let genderSuffixOrPrefix = "";

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
    animateArray = [];
    inanimateArray = [];
    masculine1Array = [];
    feminine1Array = [];
    masculine2Array = [];
    feminine2Array = [];
    neuterArray = [];
    humanArray = [];
    animalArray = [];
    inanimateArray2 = [];
    activeArray = [];
    passiveArray = [];
    naturalArray = [];
    artificialArray = [];
    divineArray = [];
    profaneArray = [];

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
    animateAffix = "";
    inanimateAffix = "";
    masculineAffix = "";
    feminineAffix = "";
    neuterAffix = "";
    divineAffix = "";
    profaneAffix = "";
    humanAffix = "";
    animalAffix = "";
    inanimate2Affix = "";
    activeAffix = "";
    passiveAffix = "";
    naturalAffix = "";
    artificialAffix = "";
    genderSuffixOrPrefix = "";


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
    typologyNum = 1//Math.floor(Math.random() * 3)
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

/*****CHOOSE IF SOMETHING IS MARKED WITH SUFFIX OR PREFIX****/
function suffixOrPrefix() {
    if(Math.floor(Math.random() * 5) !== 2) {
        return "suffix";
    } else {
        return "prefix";
    }
}


/*****Noun Gender*******/

let genderNum = 0;
function randomNumForNounGender() {
    genderNum = 7//Math.floor(Math.random() * 9)
}

function chooseNounGender() {
    const genderHeader = document.createElement("h3")
    genderHeader.innerHTML = "Noun Gender"
    const genderP = document.createElement("p");
    const genderPAffixes = document.createElement("p");

    //sorts nouns by their gender
   for(let i = 0; i < nounArray.length; i++) {
        let index = nounArray.indexOf(nounArray[i])
        if(animInan[index] === "anim") {
            animateArray.push(nounArray[i]);
        } else if (animInan[index] === "inan"){
            inanimateArray.push(nounArray[i]);
        }
        if(mascFem[index] === "masc") {
            masculine1Array.push(nounArray[i]);
        } else if (mascFem[index] === "fem"){
            feminine1Array.push(nounArray[i]);
        }
        if(mascFemNeut[index] === "masc") {
            masculine2Array.push(nounArray[i]);
        } else if (mascFemNeut[index] === "fem"){
            feminine2Array.push(nounArray[i]);
        }else if (mascFemNeut[index] === "neut"){
            neuterArray.push(nounArray[i]);
        }
        if(humanAnimalInan[index] === "human") {
            humanArray.push(nounArray[i]);
        } else if (humanAnimalInan[index] === "animal"){
            animalArray.push(nounArray[i]);
        }else if (humanAnimalInan[index] === "inanimate"){
            inanimateArray2.push(nounArray[i]);
        }
        if(activePassive[index] === "active") {
            activeArray.push(nounArray[i]);
        } else if (activePassive[index] === "passive"){
            passiveArray.push(nounArray[i]);
        }
        if(naturalArtificial[index] === "natural") {
            naturalArray.push(nounArray[i]);
        } else if (naturalArtificial[index] === "artificial"){
            artificialArray.push(nounArray[i]);
        }
        if(divineNonDivine[index] === "divine") {
            divineArray.push(nounArray[i]);
        } else if (divineNonDivine[index] === "profane"){
            profaneArray.push(nounArray[i]);
        }
    }

    const randomAnimateNoun1 = generatedNouns[nounArray.indexOf(animateArray[Math.floor(Math.random() * animateArray.length)])];
    const randomAnimateNounMeaning1 = nounArray[generatedNouns.indexOf(randomAnimateNoun1)]
 
    const randomAnimateNoun2 = generatedNouns[nounArray.indexOf(animateArray[Math.floor(Math.random() * animateArray.length)])];
    const randomAnimateNounMeaning2 = nounArray[generatedNouns.indexOf(randomAnimateNoun2)]

    const randomAnimateNoun3 = generatedNouns[nounArray.indexOf(animateArray[Math.floor(Math.random() * animateArray.length)])];
    const randomAnimateNounMeaning3 = nounArray[generatedNouns.indexOf(randomAnimateNoun3)]

    const randomAnimateNoun4 = generatedNouns[nounArray.indexOf(animateArray[Math.floor(Math.random() * animateArray.length)])];
    const randomAnimateNounMeaning4 = nounArray[generatedNouns.indexOf(randomAnimateNoun4)]

    const randomInanimateNoun1 = generatedNouns[nounArray.indexOf(inanimateArray[Math.floor(Math.random() * inanimateArray.length)])];
    const randomInanimateNounMeaning1 = nounArray[generatedNouns.indexOf(randomInanimateNoun1)]
 
    const randomInanimateNoun2 = generatedNouns[nounArray.indexOf(inanimateArray[Math.floor(Math.random() * inanimateArray.length)])];
    const randomInanimateNounMeaning2 = nounArray[generatedNouns.indexOf(randomInanimateNoun2)]

    const randomInanimateNoun3 = generatedNouns[nounArray.indexOf(inanimateArray[Math.floor(Math.random() * inanimateArray.length)])];
    const randomInanimateNounMeaning3 = nounArray[generatedNouns.indexOf(randomInanimateNoun3)]

    const randomInanimateNoun4 = generatedNouns[nounArray.indexOf(inanimateArray[Math.floor(Math.random() * inanimateArray.length)])];
    const randomInanimateNounMeaning4 = nounArray[generatedNouns.indexOf(randomInanimateNoun4)]

    const randomMasculineNoun1 = generatedNouns[nounArray.indexOf(masculine1Array[Math.floor(Math.random() * masculine1Array.length)])];
    const randomMasculineNounMeaning1 = nounArray[generatedNouns.indexOf(randomMasculineNoun1)]
 
    const randomMasculineNoun2 = generatedNouns[nounArray.indexOf(masculine1Array[Math.floor(Math.random() * masculine1Array.length)])];
    const randomMasculineNounMeaning2 = nounArray[generatedNouns.indexOf(randomMasculineNoun2)]

    const randomMasculineNoun3 = generatedNouns[nounArray.indexOf(masculine1Array[Math.floor(Math.random() * masculine1Array.length)])];
    const randomMasculineNounMeaning3 = nounArray[generatedNouns.indexOf(randomMasculineNoun3)]

    const randomMasculineNoun4 = generatedNouns[nounArray.indexOf(masculine1Array[Math.floor(Math.random() * masculine1Array.length)])];
    const randomMasculineNounMeaning4 = nounArray[generatedNouns.indexOf(randomMasculineNoun4)]

    const randomFeminineNoun1 = generatedNouns[nounArray.indexOf(feminine1Array[Math.floor(Math.random() * feminine1Array.length)])];
    const randomFeminineNounMeaning1 = nounArray[generatedNouns.indexOf(randomFeminineNoun1)]

    const randomFeminineNoun2 = generatedNouns[nounArray.indexOf(feminine1Array[Math.floor(Math.random() * feminine1Array.length)])];
    const randomFeminineNounMeaning2 = nounArray[generatedNouns.indexOf(randomFeminineNoun2)]

    const randomFeminineNoun3 = generatedNouns[nounArray.indexOf(feminine1Array[Math.floor(Math.random() * feminine1Array.length)])];
    const randomFeminineNounMeaning3 = nounArray[generatedNouns.indexOf(randomFeminineNoun3)]

    const randomFeminineNoun4 = generatedNouns[nounArray.indexOf(feminine1Array[Math.floor(Math.random() * feminine1Array.length)])];
    const randomFeminineNounMeaning4 = nounArray[generatedNouns.indexOf(randomFeminineNoun4)]

    const randomMasculine2Noun1 = generatedNouns[nounArray.indexOf(masculine2Array[Math.floor(Math.random() * masculine2Array.length)])];
    const randomMasculineNoun2Meaning1 = nounArray[generatedNouns.indexOf(randomMasculine2Noun1)]
 
    const randomMasculine2Noun2 = generatedNouns[nounArray.indexOf(masculine2Array[Math.floor(Math.random() * masculine2Array.length)])];
    const randomMasculineNoun2Meaning2 = nounArray[generatedNouns.indexOf(randomMasculine2Noun2)]

    const randomMasculine2Noun3 = generatedNouns[nounArray.indexOf(masculine2Array[Math.floor(Math.random() * masculine2Array.length)])];
    const randomMasculineNoun2Meaning3 = nounArray[generatedNouns.indexOf(randomMasculine2Noun3)]

    const randomMasculine2Noun4 = generatedNouns[nounArray.indexOf(masculine2Array[Math.floor(Math.random() * masculine2Array.length)])];
    const randomMasculineNoun2Meaning4 = nounArray[generatedNouns.indexOf(randomMasculine2Noun4)]

    const randomFeminine2Noun1 = generatedNouns[nounArray.indexOf(feminine2Array[Math.floor(Math.random() * feminine2Array.length)])];
    const randomFeminineNoun2Meaning1 = nounArray[generatedNouns.indexOf(randomFeminine2Noun1)]

    const randomFeminine2Noun2 = generatedNouns[nounArray.indexOf(feminine2Array[Math.floor(Math.random() * feminine2Array.length)])];
    const randomFeminineNoun2Meaning2 = nounArray[generatedNouns.indexOf(randomFeminine2Noun2)]

    const randomFeminine2Noun3 = generatedNouns[nounArray.indexOf(feminine2Array[Math.floor(Math.random() * feminine2Array.length)])];
    const randomFeminineNoun2Meaning3 = nounArray[generatedNouns.indexOf(randomFeminine2Noun3)]

    const randomFeminine2Noun4 = generatedNouns[nounArray.indexOf(feminine2Array[Math.floor(Math.random() * feminine2Array.length)])];
    const randomFeminineNoun2Meaning4 = nounArray[generatedNouns.indexOf(randomFeminine2Noun4)]

    const randomNeuterNoun1 = generatedNouns[nounArray.indexOf(neuterArray[Math.floor(Math.random() * neuterArray.length)])];
    const randomNeuterNounMeaning1 = nounArray[generatedNouns.indexOf(randomNeuterNoun1)]

    const randomNeuterNoun2 = generatedNouns[nounArray.indexOf(neuterArray[Math.floor(Math.random() * neuterArray.length)])];
    const randomNeuterNounMeaning2 = nounArray[generatedNouns.indexOf(randomNeuterNoun2)]

    const randomNeuterNoun3 = generatedNouns[nounArray.indexOf(neuterArray[Math.floor(Math.random() * neuterArray.length)])];
    const randomNeuterNounMeaning3 = nounArray[generatedNouns.indexOf(randomNeuterNoun3)]

    const randomNeuterNoun4 = generatedNouns[nounArray.indexOf(neuterArray[Math.floor(Math.random() * neuterArray.length)])];
    const randomNeuterNounMeaning4 = nounArray[generatedNouns.indexOf(randomNeuterNoun4)]

    const randomDivineNoun1 = generatedNouns[nounArray.indexOf(divineArray[Math.floor(Math.random() * divineArray.length)])];
    const DivineNounMeaning1 = nounArray[generatedNouns.indexOf(randomDivineNoun1)]

    const randomDivineNoun2 = generatedNouns[nounArray.indexOf(divineArray[Math.floor(Math.random() * divineArray.length)])];
    const DivineNounMeaning2 = nounArray[generatedNouns.indexOf(randomDivineNoun2)]

    const randomDivineNoun3 = generatedNouns[nounArray.indexOf(divineArray[Math.floor(Math.random() * divineArray.length)])];
    const DivineNounMeaning3 = nounArray[generatedNouns.indexOf(randomDivineNoun3)]

    const randomDivineNoun4 = generatedNouns[nounArray.indexOf(divineArray[Math.floor(Math.random() * divineArray.length)])];
    const DivineNounMeaning4 = nounArray[generatedNouns.indexOf(randomDivineNoun4)]

    const randomProfaneNoun1 = generatedNouns[nounArray.indexOf(profaneArray[Math.floor(Math.random() * profaneArray.length)])];
    const profaneNounMeaning1 = nounArray[generatedNouns.indexOf(randomProfaneNoun1)]

    const randomProfaneNoun2 = generatedNouns[nounArray.indexOf(profaneArray[Math.floor(Math.random() * profaneArray.length)])];
    const profaneNounMeaning2 = nounArray[generatedNouns.indexOf(randomProfaneNoun2)]

    const randomProfaneNoun3 = generatedNouns[nounArray.indexOf(profaneArray[Math.floor(Math.random() * profaneArray.length)])];
    const profaneNounMeaning3 = nounArray[generatedNouns.indexOf(randomProfaneNoun3)]

    const randomProfaneNoun4 = generatedNouns[nounArray.indexOf(profaneArray[Math.floor(Math.random() * profaneArray.length)])];
    const profaneNounMeaning4 = nounArray[generatedNouns.indexOf(randomProfaneNoun4)]

    const randomHumanNoun1 = generatedNouns[nounArray.indexOf(humanArray[Math.floor(Math.random() * humanArray.length)])];
    const humanNounMeaning1 = nounArray[generatedNouns.indexOf(randomHumanNoun1)]

    const randomHumanNoun2 = generatedNouns[nounArray.indexOf(humanArray[Math.floor(Math.random() * humanArray.length)])];
    const humanNounMeaning2 = nounArray[generatedNouns.indexOf(randomHumanNoun2)]

    const randomHumanNoun3 = generatedNouns[nounArray.indexOf(humanArray[Math.floor(Math.random() * humanArray.length)])];
    const humanNounMeaning3 = nounArray[generatedNouns.indexOf(randomHumanNoun3)]

    const randomHumanNoun4 = generatedNouns[nounArray.indexOf(humanArray[Math.floor(Math.random() * humanArray.length)])];
    const humanNounMeaning4 = nounArray[generatedNouns.indexOf(randomHumanNoun4)]

    const randomAnimalNoun1 = generatedNouns[nounArray.indexOf(animalArray[Math.floor(Math.random() * animalArray.length)])];
    const animalNounMeaning1 = nounArray[generatedNouns.indexOf(randomAnimalNoun1)]

    const randomAnimalNoun2 = generatedNouns[nounArray.indexOf(animalArray[Math.floor(Math.random() * animalArray.length)])];
    const animalNounMeaning2 = nounArray[generatedNouns.indexOf(randomAnimalNoun2)]

    const randomAnimalNoun3 = generatedNouns[nounArray.indexOf(animalArray[Math.floor(Math.random() * animalArray.length)])];
    const animalNounMeaning3 = nounArray[generatedNouns.indexOf(randomAnimalNoun3)]

    const randomAnimalNoun4 = generatedNouns[nounArray.indexOf(animalArray[Math.floor(Math.random() * animalArray.length)])];
    const animalNounMeaning4 = nounArray[generatedNouns.indexOf(randomAnimalNoun4)]

    const randomInanimate2Noun1 = generatedNouns[nounArray.indexOf(inanimateArray2[Math.floor(Math.random() * inanimateArray2.length)])];
    const inanimate2NounMeaning1 = nounArray[generatedNouns.indexOf(randomInanimate2Noun1)]

    const randomInanimate2Noun2 = generatedNouns[nounArray.indexOf(inanimateArray2[Math.floor(Math.random() * inanimateArray2.length)])];
    const inanimate2NounMeaning2 = nounArray[generatedNouns.indexOf(randomInanimate2Noun2)]

    const randomInanimate2Noun3 = generatedNouns[nounArray.indexOf(inanimateArray2[Math.floor(Math.random() * inanimateArray2.length)])];
    const inanimate2NounMeaning3 = nounArray[generatedNouns.indexOf(randomInanimate2Noun3)]

    const randomInanimate2Noun4 = generatedNouns[nounArray.indexOf(inanimateArray2[Math.floor(Math.random() * inanimateArray2.length)])];
    const inanimate2NounMeaning4 = nounArray[generatedNouns.indexOf(randomInanimate2Noun4)];

    const randomActiveNoun1 = generatedNouns[nounArray.indexOf(activeArray[Math.floor(Math.random() * activeArray.length)])];
    const activeNounMeaning1 = nounArray[generatedNouns.indexOf(randomActiveNoun1)];

    const randomActiveNoun2 = generatedNouns[nounArray.indexOf(activeArray[Math.floor(Math.random() * activeArray.length)])];
    const activeNounMeaning2 = nounArray[generatedNouns.indexOf(randomActiveNoun2)];

    const randomActiveNoun3 = generatedNouns[nounArray.indexOf(activeArray[Math.floor(Math.random() * activeArray.length)])];
    const activeNounMeaning3 = nounArray[generatedNouns.indexOf(randomActiveNoun3)];

    const randomActiveNoun4 = generatedNouns[nounArray.indexOf(activeArray[Math.floor(Math.random() * activeArray.length)])];
    const activeNounMeaning4 = nounArray[generatedNouns.indexOf(randomActiveNoun4)];

    const randomPassiveNoun1 = generatedNouns[nounArray.indexOf(passiveArray[Math.floor(Math.random() * passiveArray.length)])];
    const passiveNounMeaning1 = nounArray[generatedNouns.indexOf(randomPassiveNoun1)];

    const randomPassiveNoun2 = generatedNouns[nounArray.indexOf(passiveArray[Math.floor(Math.random() * passiveArray.length)])];
    const passiveNounMeaning2 = nounArray[generatedNouns.indexOf(randomPassiveNoun2)];

    const randomPassiveNoun3 = generatedNouns[nounArray.indexOf(passiveArray[Math.floor(Math.random() * passiveArray.length)])];
    const passiveNounMeaning3 = nounArray[generatedNouns.indexOf(randomPassiveNoun3)];

    const randomPassiveNoun4 = generatedNouns[nounArray.indexOf(passiveArray[Math.floor(Math.random() * passiveArray.length)])];
    const passiveNounMeaning4 = nounArray[generatedNouns.indexOf(randomPassiveNoun4)];

    const randomnaturalNoun1 = generatedNouns[nounArray.indexOf(naturalArray[Math.floor(Math.random() * naturalArray.length)])];
    const naturalNounMeaning1 = nounArray[generatedNouns.indexOf(randomnaturalNoun1)];

    const randomnaturalNoun2 = generatedNouns[nounArray.indexOf(naturalArray[Math.floor(Math.random() * naturalArray.length)])];
    const naturalNounMeaning2 = nounArray[generatedNouns.indexOf(randomnaturalNoun2)];

    const randomnaturalNoun3 = generatedNouns[nounArray.indexOf(naturalArray[Math.floor(Math.random() * naturalArray.length)])];
    const naturalNounMeaning3 = nounArray[generatedNouns.indexOf(randomnaturalNoun3)];

    const randomnaturalNoun4 = generatedNouns[nounArray.indexOf(naturalArray[Math.floor(Math.random() * naturalArray.length)])];
    const naturalNounMeaning4 = nounArray[generatedNouns.indexOf(randomnaturalNoun4)];

    const randomArtificialNoun1 = generatedNouns[nounArray.indexOf(artificialArray[Math.floor(Math.random() * artificialArray.length)])];
    const artificialNounMeaning1 = nounArray[generatedNouns.indexOf(randomArtificialNoun1)];

    const randomArtificialNoun2 = generatedNouns[nounArray.indexOf(artificialArray[Math.floor(Math.random() * artificialArray.length)])];
    const artificialNounMeaning2 = nounArray[generatedNouns.indexOf(randomArtificialNoun2)];

    const randomArtificialNoun3 = generatedNouns[nounArray.indexOf(artificialArray[Math.floor(Math.random() * artificialArray.length)])];
    const artificialNounMeaning3 = nounArray[generatedNouns.indexOf(randomArtificialNoun3)];

    const randomArtificialNoun4 = generatedNouns[nounArray.indexOf(artificialArray[Math.floor(Math.random() * artificialArray.length)])];
    const artificialNounMeaning4 = nounArray[generatedNouns.indexOf(randomArtificialNoun4)];

    genderSuffixOrPrefix = suffixOrPrefix();
    //if there is no gender
    if(genderNum === 0) {
        genderHeader.style.display = "none";
        genderP.style.display = "none";
    }
    if(genderNum === 1) {
        nounGenderArray.push("animate", "inanimate");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "animate" and "inanimate". The animate gender encompasses all nouns that refer to living things, as well as some non-living but "dynamic" things such as fire and moving water. Trees and plants are animate, though their produce, seeds and individual parts are inanimate.`;
        //if agglutinative
        if(typologyNum === 1) {
           animateAffix = generateAffixes();
           inanimateAffix = generateAffixes(); 
           if(genderSuffixOrPrefix === "suffix") {
                let animateNoun1 = randomAnimateNoun1 + animateAffix
                let animateNoun2 = randomAnimateNoun2 + animateAffix
                let animateNoun3 = randomAnimateNoun3 + animateAffix
                let animateNoun4 = randomAnimateNoun4 + animateAffix
                let inanimateNoun1 = randomInanimateNoun1 + inanimateAffix
                let inanimateNoun2 = randomInanimateNoun2 + inanimateAffix
                let inanimateNoun3 = randomInanimateNoun3 + inanimateAffix
                let inanimateNoun4 = randomInanimateNoun4 + inanimateAffix
                genderPAffixes.innerHTML = `Animate nouns take the suffix <i>-${spell(soundChange(animateAffix))}</i>:
                <i>${spell(soundChange(animateNoun1))}</i> "${randomAnimateNounMeaning1}",
                <i>${spell(soundChange(animateNoun2))}</i> "${randomAnimateNounMeaning2}",
                <i>${spell(soundChange(animateNoun3))}</i> "${randomAnimateNounMeaning3}",
                <i>${spell(soundChange(animateNoun4))}</i> "${randomAnimateNounMeaning4}".<br/>
                Inanimate nouns take the suffix <i>-${spell(soundChange(inanimateAffix))}</i>: 
                <i>${spell(soundChange(inanimateNoun1))}</i> "${randomInanimateNounMeaning1}", 
                <i>${spell(soundChange(inanimateNoun2))}</i> "${randomInanimateNounMeaning2}", 
                <i>${spell(soundChange(inanimateNoun3))}</i> "${randomInanimateNounMeaning3}", 
                <i>${spell(soundChange(inanimateNoun4))}</i> "${randomInanimateNounMeaning4}".`
           } else if(genderSuffixOrPrefix === "prefix") {
                let animateNoun1 = animateAffix + randomAnimateNoun1;
                let animateNoun2 = animateAffix + randomAnimateNoun2;
                let animateNoun3 = animateAffix + randomAnimateNoun3;
                let animateNoun4 = animateAffix + randomAnimateNoun4; 
                let inanimateNoun1 = inanimateAffix + randomInanimateNoun1;
                let inanimateNoun2 = inanimateAffix + randomInanimateNoun2;
                let inanimateNoun3 = inanimateAffix + randomInanimateNoun3;
                let inanimateNoun4 = inanimateAffix + randomInanimateNoun4;
                genderPAffixes.innerHTML = `Animate nouns take the prefix <i>${spell(soundChange(animateAffix))}-</i>: 
                <i>${spell(soundChange(animateNoun1))}</i> "${randomAnimateNounMeaning1}",
                <i>${spell(soundChange(animateNoun2))}</i> "${randomAnimateNounMeaning2}",
                <i>${spell(soundChange(animateNoun3))}</i> "${randomAnimateNounMeaning3}",
                <i>${spell(soundChange(animateNoun4))}</i> "${randomAnimateNounMeaning4}".<br/>
                Inanimate nouns take the prefix <i>${spell(soundChange(inanimateAffix))}-</i>:
                <i>${spell(soundChange(inanimateNoun1))}</i> "${randomInanimateNounMeaning1}",
                <i>${spell(soundChange(inanimateNoun2))}</i> "${randomInanimateNounMeaning2}",
                <i>${spell(soundChange(inanimateNoun3))}</i> "${randomInanimateNounMeaning3}",
                <i>${spell(soundChange(inanimateNoun4))}</i> "${randomInanimateNounMeaning4}".`
           }
        }
    }
    if(genderNum === 2) {
        nounGenderArray.push("masculine", "feminine");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "masculine" and "feminine". Non-living entities are assigned to either gender based on whether the item is thought to be associated more with men or woman, or at random. All animals are masculine by default, though they can be listed in the feminine to refer to a female instance of an animal. Nouns referring to meat are masculine, but all other food is feminine. Weapons, trees, clothing and items of knowledge are masculine. Cutlery, pottery and all other household utilities are feminine, as are body parts (except male body parts like "beard" and "penis"), geographical features ("forest", "mountain" etc), any words relating to time and words relating to noise.`;
        //if agglutinative
        if(typologyNum === 1) {
            masculineAffix = generateAffixes();
            feminineAffix = generateAffixes(); 
            if(genderSuffixOrPrefix === "suffix") {
                let masculineNoun1 = randomMasculineNoun1 + masculineAffix;
                let masculineNoun2 = randomMasculineNoun2 + masculineAffix;
                let masculineNoun3 = randomMasculineNoun3 + masculineAffix;
                let masculineNoun4 = randomMasculineNoun4 + masculineAffix;
                let feminineNoun1 = randomFeminineNoun1 + feminineAffix;
                let feminineNoun2 = randomFeminineNoun2 + feminineAffix;
                let feminineNoun3 = randomFeminineNoun3 + feminineAffix;
                let feminineNoun4 = randomFeminineNoun4 + feminineAffix;
                genderPAffixes.innerHTML = `Masculine nouns take the suffix <i>-${spell(soundChange(masculineAffix))}</i>:
                <i>${spell(soundChange(masculineNoun1))}</i> "${randomMasculineNounMeaning1}",
                <i>${spell(soundChange(masculineNoun2))}</i> "${randomMasculineNounMeaning2}",
                <i>${spell(soundChange(masculineNoun3))}</i> "${randomMasculineNounMeaning3}",
                <i>${spell(soundChange(masculineNoun4))}</i> "${randomMasculineNounMeaning4}".<br/>
                Feminine nouns take the suffix <i>-${spell(soundChange(feminineAffix))}</i>:
                <i>${spell(soundChange(feminineNoun1))}</i> "${randomFeminineNounMeaning1}",
                <i>${spell(soundChange(feminineNoun2))}</i> "${randomFeminineNounMeaning2}",
                <i>${spell(soundChange(feminineNoun3))}</i> "${randomFeminineNounMeaning3}",
                <i>${spell(soundChange(feminineNoun4))}</i> "${randomFeminineNounMeaning4}".`
            } else if(genderSuffixOrPrefix === "prefix") {
                let masculineNoun1 = masculineAffix + randomMasculineNoun1;
                let masculineNoun2 = masculineAffix + randomMasculineNoun2;
                let masculineNoun3 = masculineAffix + randomMasculineNoun3;
                let masculineNoun4 = masculineAffix + randomMasculineNoun4;
                let feminineNoun1 = feminineAffix + randomFeminineNoun1;
                let feminineNoun2 = feminineAffix + randomFeminineNoun2;
                let feminineNoun3 = feminineAffix + randomFeminineNoun3;
                let feminineNoun4 = feminineAffix + randomFeminineNoun4;
                genderPAffixes.innerHTML = `Masculine nouns take the prefix <i>${spell(soundChange(masculineAffix))}-</i>:
                <i>${spell(soundChange(masculineNoun1))}</i> "${randomMasculineNounMeaning1}",
                <i>${spell(soundChange(masculineNoun2))}</i> "${randomMasculineNounMeaning2}",
                <i>${spell(soundChange(masculineNoun3))}</i> "${randomMasculineNounMeaning3}",
                <i>${spell(soundChange(masculineNoun4))}</i> "${randomMasculineNounMeaning4}".<br/>
                Feminine nouns take the prefix <i>${spell(soundChange(feminineAffix))}-</i>:
                <i>${spell(soundChange(feminineNoun1))}</i> "${randomFeminineNounMeaning1}",
                <i>${spell(soundChange(feminineNoun2))}</i> "${randomFeminineNounMeaning2}",
                <i>${spell(soundChange(feminineNoun3))}</i> "${randomFeminineNounMeaning3}",
                <i>${spell(soundChange(feminineNoun4))}</i> "${randomFeminineNounMeaning4}".`
            }
        }
    }
    if(genderNum === 3) {
        nounGenderArray.push("masculine", "feminine", "neuter");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has three grammatical genders which are "masculine", "feminine" and "neuter". The neuter gender encompasses all non-living things but also the young of both animals and humans. Nouns referring to groups of living things are in the neuter. Animals are masculine by default, though small animals, fish, birds and bugs are feminine, though birds of prey are masculine. An animal can be referred to in the opposite gender when referring to a specific individual animal.`;
        //if agglutinative
        if(typologyNum === 1) {
            masculineAffix = generateAffixes();
            feminineAffix = generateAffixes(); 
            neuterAffix = generateAffixes(); 
            if(genderSuffixOrPrefix === "suffix") {
                let masculineNoun1 = randomMasculine2Noun1 + masculineAffix;
                let masculineNoun2 = randomMasculine2Noun2 + masculineAffix;
                let masculineNoun3 = randomMasculine2Noun3 + masculineAffix;
                let masculineNoun4 = randomMasculine2Noun4 + masculineAffix;
                let feminineNoun1 = randomFeminine2Noun1 + feminineAffix;
                let feminineNoun2 = randomFeminine2Noun2 + feminineAffix;
                let feminineNoun3 = randomFeminine2Noun3 + feminineAffix;
                let feminineNoun4 = randomFeminine2Noun4 + feminineAffix;
                let neuterNoun1 = randomNeuterNoun1 + neuterAffix;
                let neuterNoun2 = randomNeuterNoun2 + neuterAffix;
                let neuterNoun3 = randomNeuterNoun3 + neuterAffix;
                let neuterNoun4 = randomNeuterNoun4 + neuterAffix;
                genderPAffixes.innerHTML = `Masculine nouns take the suffix <i>-${spell(soundChange(masculineAffix))}</i>:
                <i>${spell(soundChange(masculineNoun1))}</i> "${randomMasculineNoun2Meaning1}",
                <i>${spell(soundChange(masculineNoun2))}</i> "${randomMasculineNoun2Meaning2}",
                <i>${spell(soundChange(masculineNoun3))}</i> "${randomMasculineNoun2Meaning3}",
                <i>${spell(soundChange(masculineNoun4))}</i> "${randomMasculineNoun2Meaning4}".<br/>
                Feminine nouns take the suffix <i>-${spell(soundChange(feminineAffix))}</i>:
                <i>${spell(soundChange(feminineNoun1))}</i> "${randomFeminineNoun2Meaning1}",
                <i>${spell(soundChange(feminineNoun2))}</i> "${randomFeminineNoun2Meaning2}",
                <i>${spell(soundChange(feminineNoun3))}</i> "${randomFeminineNoun2Meaning3}",
                <i>${spell(soundChange(feminineNoun4))}</i> "${randomFeminineNoun2Meaning4}".<br/>
                Neuter nouns take the suffix <i>-${spell(soundChange(neuterAffix))}</i>:
                <i>${spell(soundChange(neuterNoun1))}</i> "${randomNeuterNounMeaning1}",
                <i>${spell(soundChange(neuterNoun2))}</i> "${randomNeuterNounMeaning2}",
                <i>${spell(soundChange(neuterNoun3))}</i> "${randomNeuterNounMeaning3}",
                <i>${spell(soundChange(neuterNoun4))}</i> "${randomNeuterNounMeaning4}".`
                
            } else if(genderSuffixOrPrefix === "prefix") {
                let masculineNoun1 = masculineAffix + randomMasculineNoun1;
                let masculineNoun2 = masculineAffix + randomMasculineNoun2;
                let masculineNoun3 = masculineAffix + randomMasculineNoun3;
                let masculineNoun4 = masculineAffix + randomMasculineNoun4;
                let feminineNoun1 = feminineAffix + randomFeminineNoun1;
                let feminineNoun2 = feminineAffix + randomFeminineNoun2;
                let feminineNoun3 = feminineAffix + randomFeminineNoun3;
                let feminineNoun4 = feminineAffix + randomFeminineNoun4;
                let neuterNoun1 = neuterAffix + randomNeuterNoun1;
                let neuterNoun2 = neuterAffix + randomNeuterNoun2;
                let neuterNoun3 = neuterAffix + randomNeuterNoun3;
                let neuterNoun4 = neuterAffix + randomNeuterNoun4;
                genderPAffixes.innerHTML = `Masculine nouns take the prefix <i>${spell(soundChange(masculineAffix))}-</i>:
                <i>${spell(soundChange(masculineNoun1))}</i> "${randomMasculineNounMeaning1}",
                <i>${spell(soundChange(masculineNoun2))}</i> "${randomMasculineNounMeaning2}",
                <i>${spell(soundChange(masculineNoun3))}</i> "${randomMasculineNounMeaning3}",
                <i>${spell(soundChange(masculineNoun4))}</i> "${randomMasculineNounMeaning4}".<br/>
                Feminine nouns take the prefix <i>${spell(soundChange(feminineAffix))}</i>:
                <i>${spell(soundChange(feminineNoun1))}</i> "${randomFeminineNounMeaning1}",
                <i>${spell(soundChange(feminineNoun2))}</i> "${randomFeminineNounMeaning2}",
                <i>${spell(soundChange(feminineNoun3))}</i> "${randomFeminineNounMeaning3}",
                <i>${spell(soundChange(feminineNoun4))}</i> "${randomFeminineNounMeaning4}".<br/>
                Neuter nouns take the suffix <i>-${spell(soundChange(neuterAffix))}</i>:
                <i>${spell(soundChange(neuterNoun1))}</i> "${randomNeuterNounMeaning1}",
                <i>${spell(soundChange(neuterNoun2))}</i> "${randomNeuterNounMeaning2}",
                <i>${spell(soundChange(neuterNoun3))}</i> "${randomNeuterNounMeaning3}",
                <i>${spell(soundChange(neuterNoun4))}</i> "${randomNeuterNounMeaning4}".`
            }
        }
    }
    if(genderNum === 4) {
        nounGenderArray.push("human", "animal", "inanimate");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has three grammatical genders which are "human", "animal" and "inanimate". The genders are quite literally as their names describe, with the inanimate gender encompassing plants and non-living things.`;
        if(typologyNum === 1) {
            humanAffix = generateAffixes();
            animalAffix = generateAffixes();
            inanimate2Affix = generateAffixes(); 
            if(genderSuffixOrPrefix === "suffix") {
                let humanNoun1 = randomHumanNoun1 + humanAffix;
                let humanNoun2 = randomHumanNoun2 + humanAffix;
                let humanNoun3 = randomHumanNoun3 + humanAffix;
                let humanNoun4 = randomHumanNoun4 + humanAffix;
                let animalNoun1 = randomAnimalNoun1 + animalAffix;
                let animalNoun2 = randomAnimalNoun2 + animalAffix;
                let animalNoun3 = randomAnimalNoun3 + animalAffix;
                let animalNoun4 = randomAnimalNoun4 + animalAffix;
                let inanimateNoun1 = randomInanimate2Noun1 + inanimate2Affix;
                let inanimateNoun2 = randomInanimate2Noun2 + inanimate2Affix;
                let inanimateNoun3 = randomInanimate2Noun3 + inanimate2Affix;
                let inanimateNoun4 = randomInanimate2Noun4 + inanimate2Affix;
                genderPAffixes.innerHTML = `Human nouns take the suffix <i>-${spell(soundChange(humanAffix))}</i>:
                <i>${spell(soundChange(humanNoun1))}</i> "${humanNounMeaning1}",
                <i>${spell(soundChange(humanNoun2))}</i> "${humanNounMeaning2}",
                <i>${spell(soundChange(humanNoun3))}</i> "${humanNounMeaning3}",
                <i>${spell(soundChange(humanNoun4))}</i> "${humanNounMeaning4}".<br/>
                Animal nouns take the suffix <i>-${spell(soundChange(animalAffix))}</i>:
                <i>${spell(soundChange(animalNoun1))}</i> "${animalNounMeaning1}",
                <i>${spell(soundChange(animalNoun2))}</i> "${animalNounMeaning2}",
                <i>${spell(soundChange(animalNoun3))}</i> "${animalNounMeaning3}",
                <i>${spell(soundChange(animalNoun4))}</i> "${animalNounMeaning4}".<br/>
                Inanimate nouns take the suffix <i>-${spell(soundChange(inanimate2Affix))}</i>:
                <i>${spell(soundChange(inanimateNoun1))}</i> "${inanimate2NounMeaning1}",
                <i>${spell(soundChange(inanimateNoun2))}</i> "${inanimate2NounMeaning2}",
                <i>${spell(soundChange(inanimateNoun3))}</i> "${inanimate2NounMeaning3}",
                <i>${spell(soundChange(inanimateNoun4))}</i> "${inanimate2NounMeaning4}".<br/>`
            } else if(genderSuffixOrPrefix === "prefix") {
                let humanNoun1 = humanAffix + randomHumanNoun1;
                let humanNoun2 = humanAffix + randomHumanNoun2;
                let humanNoun3 = humanAffix + randomHumanNoun3;
                let humanNoun4 = humanAffix + randomHumanNoun4;
                let animalNoun1 = animalAffix + randomAnimalNoun1;
                let animalNoun2 = animalAffix + randomAnimalNoun2;
                let animalNoun3 = animalAffix + randomAnimalNoun3;
                let animalNoun4 = animalAffix + randomAnimalNoun4;
                let inanimateNoun1 = inanimate2Affix + randomInanimate2Noun1;
                let inanimateNoun2 = inanimate2Affix + randomInanimate2Noun2;
                let inanimateNoun3 = inanimate2Affix + randomInanimate2Noun3;
                let inanimateNoun4 = inanimate2Affix + randomInanimate2Noun4;
                genderPAffixes.innerHTML = `Human nouns take the prefix <i>${spell(soundChange(humanAffix))}-</i>:
                <i>${spell(soundChange(humanNoun1))}</i> "${humanNounMeaning1}",
                <i>${spell(soundChange(humanNoun2))}</i> "${humanNounMeaning2}",
                <i>${spell(soundChange(humanNoun3))}</i> "${humanNounMeaning3}",
                <i>${spell(soundChange(humanNoun4))}</i> "${humanNounMeaning4}".<br/>
                Animal nouns take the prefix <i>${spell(soundChange(animalAffix))}-</i>:
                <i>${spell(soundChange(animalNoun1))}</i> "${animalNounMeaning1}",
                <i>${spell(soundChange(animalNoun2))}</i> "${animalNounMeaning2}",
                <i>${spell(soundChange(animalNoun3))}</i> "${animalNounMeaning3}",
                <i>${spell(soundChange(animalNoun4))}</i> "${animalNounMeaning4}".<br/>
                Inanimate nouns take the prefix <i>${spell(soundChange(inanimate2Affix))}-</i>:
                <i>${spell(soundChange(inanimateNoun1))}</i> "${inanimate2NounMeaning1}",
                <i>${spell(soundChange(inanimateNoun2))}</i> "${inanimate2NounMeaning2}",
                <i>${spell(soundChange(inanimateNoun3))}</i> "${inanimate2NounMeaning3}",
                <i>${spell(soundChange(inanimateNoun4))}</i> "${inanimate2NounMeaning4}".<br/>`
            }
        }
        
    }
    if(genderNum === 5) {
        nounGenderArray.push("divine", "profane");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "divine" and "non-divine". The divine encompasses any noun referring to gods, whether the noun itself is animate or inanimate i.e an object or place associated with a god is part of the divine gender. Parts of the landscape considered sacred are also divine, such as graves, bodies of water and trees. Celestial bodies, like the sun, the moon, stars and clouds are divine, as are certain elements of nature like fire, water and stone. Finally, anything associated with wisdom, knowledge and poetry are divine. Anything else is profane.`;
        //if agglutinative
        if(typologyNum === 1) {
            divineAffix = generateAffixes();
            profaneAffix = generateAffixes(); 
            if(genderSuffixOrPrefix === "suffix") {
                let divineNoun1 = randomDivineNoun1 + divineAffix;
                let divineNoun2 = randomDivineNoun2 + divineAffix;
                let divineNoun3 = randomDivineNoun3 + divineAffix;
                let divineNoun4 = randomDivineNoun4 + divineAffix;
                let profaneNoun1 = randomProfaneNoun1 + profaneAffix;
                let profaneNoun2 = randomProfaneNoun2 + profaneAffix;
                let profaneNoun3 = randomProfaneNoun3 + profaneAffix;
                let profaneNoun4 = randomProfaneNoun4 + profaneAffix;
                genderPAffixes.innerHTML = `Divine nouns take the suffix <i>-${spell(soundChange(divineAffix))}</i>:
                <i>${spell(soundChange(divineNoun1))}</i> "${DivineNounMeaning1}",
                <i>${spell(soundChange(divineNoun2))}</i> "${DivineNounMeaning2}",
                <i>${spell(soundChange(divineNoun3))}</i> "${DivineNounMeaning3}",
                <i>${spell(soundChange(divineNoun4))}</i> "${DivineNounMeaning4}".<br/>
                Profane nouns take the suffix <i>-${spell(soundChange(profaneAffix))}</i>:
                <i>${spell(soundChange(profaneNoun1))}</i> "${profaneNounMeaning1}",
                <i>${spell(soundChange(profaneNoun2))}</i> "${profaneNounMeaning2}",
                <i>${spell(soundChange(profaneNoun3))}</i> "${profaneNounMeaning3}",
                <i>${spell(soundChange(profaneNoun4))}</i> "${profaneNounMeaning4}".<br/>`
            } else if(genderSuffixOrPrefix === "prefix") {
                let divineNoun1 = divineAffix + randomDivineNoun1;
                let divineNoun2 = divineAffix + randomDivineNoun2;
                let divineNoun3 = divineAffix + randomDivineNoun3;
                let divineNoun4 = divineAffix + randomDivineNoun4;
                let profaneNoun1 = profaneAffix + randomProfaneNoun1;
                let profaneNoun2 = profaneAffix + randomProfaneNoun2;
                let profaneNoun3 = profaneAffix + randomProfaneNoun3;
                let profaneNoun4 = profaneAffix + randomProfaneNoun4;
                genderPAffixes.innerHTML = `Divine nouns take the prefix <i>-${spell(soundChange(divineAffix))}-</i>:
                <i>${spell(soundChange(divineNoun1))}</i> "${DivineNounMeaning1}",
                <i>${spell(soundChange(divineNoun2))}</i> "${DivineNounMeaning2}",
                <i>${spell(soundChange(divineNoun3))}</i> "${DivineNounMeaning3}",
                <i>${spell(soundChange(divineNoun4))}</i> "${DivineNounMeaning4}".<br/>
                Profane nouns take the prefix <i>${spell(soundChange(profaneAffix))}-</i>:
                <i>${spell(soundChange(profaneNoun1))}</i> "${profaneNounMeaning1}",
                <i>${spell(soundChange(profaneNoun2))}</i> "${profaneNounMeaning2}",
                <i>${spell(soundChange(profaneNoun3))}</i> "${profaneNounMeaning3}",
                <i>${spell(soundChange(profaneNoun4))}</i> "${profaneNounMeaning4}".<br/>`
            }
        }
    }
    if(genderNum === 6) {
        nounGenderArray.push("active", "passive");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "active" and "passive". The active refers to a noun which can act as an agent of a transitive verb, while the passive is any noun that can't be an agent, even if the subject of a middle voice verb. Nouns referring to living things are active, as well as tools, as they can be agents of transitive verbs e.g "The man saw a deer", "The bat flew in the sky", "The knife cut the cloth". Compare this to passive nouns which can only be subjects of intransitive/middle verbs e.g "The door opened" ("someone opened the door") or "The milk was poured" ("someone poured the milk").`;
        //if agglutinative
        if(typologyNum === 1) {
            activeAffix = generateAffixes();
            passiveAffix = generateAffixes(); 
            if(genderSuffixOrPrefix === "suffix") {
                let activeNoun1 = randomActiveNoun1 + activeAffix;
                let activeNoun2 = randomActiveNoun2 + activeAffix;
                let activeNoun3 = randomActiveNoun3 + activeAffix;
                let activeNoun4 = randomActiveNoun4 + activeAffix;
                let passiveNoun1 = randomProfaneNoun1 + passiveAffix;
                let passiveNoun2 = randomProfaneNoun2 + passiveAffix;
                let passiveNoun3 = randomProfaneNoun3 + passiveAffix;
                let passiveNoun4 = randomProfaneNoun4 + passiveAffix;
                genderPAffixes.innerHTML = `Active nouns take the suffix <i>-${spell(soundChange(activeAffix))}</i>:
                <i>${spell(soundChange(activeNoun1))}</i> "${activeNounMeaning1}",
                <i>${spell(soundChange(activeNoun2))}</i> "${activeNounMeaning2}",
                <i>${spell(soundChange(activeNoun3))}</i> "${activeNounMeaning3}",
                <i>${spell(soundChange(activeNoun4))}</i> "${activeNounMeaning4}".<br/>
                Passive nouns take the suffix <i>-${spell(soundChange(passiveAffix))}</i>:
                <i>${spell(soundChange(passiveNoun1))}</i> "${passiveNounMeaning1}",
                <i>${spell(soundChange(passiveNoun2))}</i> "${passiveNounMeaning2}",
                <i>${spell(soundChange(passiveNoun3))}</i> "${passiveNounMeaning3}",
                <i>${spell(soundChange(passiveNoun4))}</i> "${passiveNounMeaning4}".<br/>`
            } else if(genderSuffixOrPrefix === "prefix") {
                let activeNoun1 = activeAffix + randomActiveNoun1;
                let activeNoun2 = activeAffix + randomActiveNoun2;
                let activeNoun3 = activeAffix + randomActiveNoun3;
                let activeNoun4 = activeAffix + randomActiveNoun4 ;
                let passiveNoun1 = passiveAffix + randomProfaneNoun1;
                let passiveNoun2 = passiveAffix + randomProfaneNoun2;
                let passiveNoun3 = passiveAffix + randomProfaneNoun3;
                let passiveNoun4 = passiveAffix + randomProfaneNoun4;
                genderPAffixes.innerHTML = `Active nouns take the prefix <i>${spell(soundChange(activeAffix))}-</i>:
                <i>${spell(soundChange(activeNoun1))}</i> "${activeNounMeaning1}",
                <i>${spell(soundChange(activeNoun2))}</i> "${activeNounMeaning2}",
                <i>${spell(soundChange(activeNoun3))}</i> "${activeNounMeaning3}",
                <i>${spell(soundChange(activeNoun4))}</i> "${activeNounMeaning4}".<br/>
                Passive nouns take the prefix <i>${spell(soundChange(passiveAffix))}-</i>:
                <i>${spell(soundChange(passiveNoun1))}</i> "${passiveNounMeaning1}",
                <i>${spell(soundChange(passiveNoun2))}</i> "${passiveNounMeaning2}",
                <i>${spell(soundChange(passiveNoun3))}</i> "${passiveNounMeaning3}",
                <i>${spell(soundChange(passiveNoun4))}</i> "${passiveNounMeaning4}".<br/>`
            }
        }
    }
    if(genderNum === 7) {
        nounGenderArray.push("natural", "artificial");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "natural" and "artificial". The artificial gender encompasses all things made by humans, while the natural gender encompasses everything else. The exact distinction can get quite idiosyncratic however, as abstract concepts thought to be borne purely by humans, such as "mercy" or "hospitality" are part of the artificial gender.`;
        if(typologyNum === 1) {
            naturalAffix = generateAffixes();
            artificialAffix = generateAffixes(); 
            if(genderSuffixOrPrefix === "suffix") {
                let naturalNoun1 = randomnaturalNoun1 + naturalAffix;
                let naturalNoun2 = randomnaturalNoun2 + naturalAffix;
                let naturalNoun3 = randomnaturalNoun3 + naturalAffix;
                let naturalNoun4 = randomnaturalNoun4 + naturalAffix;
                let artificialNoun1 = randomArtificialNoun1 + artificialAffix;
                let artificialNoun2 = randomArtificialNoun2 + artificialAffix;
                let artificialNoun3 = randomArtificialNoun3 + artificialAffix;
                let artificialNoun4 = randomArtificialNoun4 + artificialAffix;
                genderPAffixes.innerHTML = `Natural nouns take the suffix <i>-${spell(soundChange(naturalAffix))}</i>:
                <i>${spell(soundChange(naturalNoun1))}</i> "${naturalNounMeaning1}",
                <i>${spell(soundChange(naturalNoun2))}</i> "${naturalNounMeaning2}",
                <i>${spell(soundChange(naturalNoun3))}</i> "${naturalNounMeaning3}",
                <i>${spell(soundChange(naturalNoun4))}</i> "${naturalNounMeaning4}".<br/>
                Artificial nouns take the suffix <i>-${spell(soundChange(artificialAffix))}</i>:
                <i>${spell(soundChange(artificialNoun1))}</i> "${artificialNounMeaning1}",
                <i>${spell(soundChange(artificialNoun2))}</i> "${artificialNounMeaning2}",
                <i>${spell(soundChange(artificialNoun3))}</i> "${artificialNounMeaning3}",
                <i>${spell(soundChange(artificialNoun4))}</i> "${artificialNounMeaning4}".<br/>`
            } else if(genderSuffixOrPrefix === "prefix") {
                let naturalNoun1 = naturalAffix + randomnaturalNoun1;
                let naturalNoun2 = naturalAffix + randomnaturalNoun2;
                let naturalNoun3 = naturalAffix + randomnaturalNoun3;
                let naturalNoun4 = naturalAffix + randomnaturalNoun4;
                let artificialNoun1 = artificialAffix + randomArtificialNoun1;
                let artificialNoun2 = artificialAffix + randomArtificialNoun2;
                let artificialNoun3 = artificialAffix + randomArtificialNoun3;
                let artificialNoun4 = artificialAffix + randomArtificialNoun4;
                genderPAffixes.innerHTML = `Natural nouns take the prefix <i>${spell(soundChange(naturalAffix))}-</i>:
                <i>${spell(soundChange(naturalNoun1))}</i> "${naturalNounMeaning1}",
                <i>${spell(soundChange(naturalNoun2))}</i> "${naturalNounMeaning2}",
                <i>${spell(soundChange(naturalNoun3))}</i> "${naturalNounMeaning3}",
                <i>${spell(soundChange(naturalNoun4))}</i> "${naturalNounMeaning4}".<br/>
                Artificial nouns take the prefix <i>${spell(soundChange(artificialAffix))}-</i>:
                <i>${spell(soundChange(artificialNoun1))}</i> "${artificialNounMeaning1}",
                <i>${spell(soundChange(artificialNoun2))}</i> "${artificialNounMeaning2}",
                <i>${spell(soundChange(artificialNoun3))}</i> "${artificialNounMeaning3}",
                <i>${spell(soundChange(artificialNoun4))}</i> "${artificialNounMeaning4}".<br/>`
            }
        }
    }
    document.getElementById("nouns").appendChild(genderHeader);
    document.getElementById("nouns").appendChild(genderP);
    document.getElementById("nouns").appendChild(genderPAffixes);
}

/**********CASE RELATED SECTION***********/


function chooseIfMarkedNominative() {
    if(Math.floor(Math.random() * 5) !== 4) {
        return true;
    } else {
        return false;
    }
}

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

/******CASE AND NUMBER******/

// function agglutinativeCaseAndNouns() {
//         //singular and plural and no gender
//         if(grammaticalNum < 4 && genderNum === 0) {
           
//         }
// }

// function caseAndNumber() {
    
//     //if the language is agglutinative, case and number are marked with different affixes
//     if(typologyNum === 1) {
//         agglutinativeCaseAndNouns();
//     }

//     //if the language is fusional, case and number will be marked with the same suffix
//     if(typologyNum === 2) {
//         fusionalCaseAndNouns();
//     }
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
    suffixOrPrefix();
    //caseAndNumber();
    chooseIfMarkedNominative();
    chooseCases();
    explainCases();
    randomNumForNounGender();
    chooseNounGender();
    randomNumForGrammaticalNumber();
    chooseGrammaticalNumbers();


    
    
   }

export {generatedNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, genderNum, nounGenderArray, grammaticalNum, typologyNum, singularAffix, animateAffix, inanimateAffix, genderSuffixOrPrefix, masculineAffix, feminineAffix, neuterAffix, divineAffix, profaneAffix, divineArray, profaneArray, humanAffix, animalAffix, inanimate2Affix, activeAffix, passiveAffix, naturalAffix, artificialAffix};