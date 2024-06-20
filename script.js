//The arrays containing the English translations are naturally very large, so I placed each one in its own file and just import them to keep this file tidier.
//import nounArray from './englishWordArrays/Nouns/englishNouns.js';
import countNounArray from './englishWordArrays/Nouns/countNouns.js';
import countNounArrayPlural from './englishWordArrays/Nouns/countNounsPlural.js';
import massNounArray from './englishWordArrays/Nouns/massNouns.js';
import singulativeMassNounArray from './englishWordArrays/Nouns/singulativeMassNouns.js';
import pluralSingulativeMassNounArray from './englishWordArrays/Nouns/pluralSingulativeMassNounArray.js'
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
import animInanMass from './nounGender/anim_inan_mass.js';
import mascFem from './nounGender/masc_fem.js'
import mascFemNeut from './nounGender/masc_fem_neut.js'
import humanAnimalInan from './nounGender/human_animal_inan.js'
import activePassive from './nounGender/active_passive.js'
import naturalArtificial from './nounGender/natural_artificial.js'
import divineNonDivine from './nounGender/divine_nondivine.js';
import {smallQuantifiersArray, middingQuantifierArray, bigQuantifierArray, opinionQuantifierArray} from './englishWordArrays/quantifierArray.js'

import {soundChange, voiced, chosenSoundChanges, checkIfWordFinalConsonantsArePossible, wordFinalDevoicingTrueOrFalse,selectSoundChanges, resonants, plosives, randomNumForlenitionofPlosivebeforeOtherPlosive, lenitionFromPlosives1, lenitionFromPlosives2, nonHighVowels, randomNumForWordInitialPlosiveClusters} from './soundchange.js'
import {spell, checkIfCanUseMacron} from './orthography.js'
import {consonants, vowels, selectedSyllables, selectApproximants, selectFricatives, selectNasals, selectPlosives, selectAffricates, selectRhotics, selectLateralApproximants, allAspiratesArray, chooseLength, allLongVowels, allLongConsonants, allHighVowels} from './generatePhonology.js';
import {allWordOrders, subjectFinalWordOrders, objectFinalWordOrders, verbFinalWordOrders} from './allPossibleWordOrders.js'



//combines both transitive and intransitive verbs into one list for cases where transitivity is irrelevant
let verbArray = transitiveVerbArray.concat(intransitiveVerbArray); 
let verbPastArray = transitiveVerbPastArray.concat(intransitiveVerbPastArray);;
let verbThirdPersonSingularArray = intransitiveVerb3SArray.concat(transitiveVerb3SArray);

//combines both count and mass nouns into one list for cases where number is irrelevant
let nounArray = countNounArray.concat(massNounArray);

//These arrays will be filled with the randomly generated words
let generatedCountNouns = [];
let generatedMassNouns = [];
let generatedAdjectives = [];
let generatedTransitiveVerbs = [];
let generatedIntransitiveVerbs = [];
let generatedConjunctions = [];
let generatedAdverbs = [];
let generatedAdpositions = [];
let generatedIntensifiers = [];
let generatedSmallQuanitifiers = [];
let generatedMiddlingQuanitifers = [];
let generatedBigQuantifiers = [];
let generatedOpinionQuantifiers = [];

let chosenNounCases = [];
let grammaticalNumberArray = [];
let nounGenderArray = [];
let animateArray = [];
let inanimateArray = [];
let animateMassArray = [];
let inanimateMassArray = [];
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
let masculine1MassArray = [];
let feminine1MassArray = [];
let masculine2MassArray = [];
let feminine2MassArray = [];
let neuterMassArray = [];
let humanMassArray = [];
let animalMassArray = [];
let inanimateMassArray2 = [];
let activeMassArray = [];
let passiveMassArray = [];
let naturalMassArray = [];
let artificialMassArray = [];
let divineMassArray = [];
let profaneMassArray = [];

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
let dualAffix = "";
let collectiveAffix = "";
let trialAffix = "";
let quadralAffix = "";
let greaterPluralAffix = "";
let generalAffix = "";
let singulativeAffix = "";
let accusativeAffix  = "";
let genitiveAffix = "";
let dativeAffix = "";
let locativeAffix = "";
let ablativeAffix = "";
let delativeAffix = "";
let inessiveAffix = "";
let instrumentalAffix = "";
let allativeAffix = "";
let animateAffix = "";
let inanimateAffix = "";
let masculineAffix = "";
let feminineAffix = "";
let masculine2Affix = "";
let feminine2Affix = "";
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
let numberSuffixOrPrefix = "";
let caseSuffixOrPrefix = "";
let randomNumForMarkedSingular = "";

let allPossibleVowels = ["a", "e", "i", "o", "u", "æ", "ɐ", "ɑ", "ə", "ɵ", "ɘ", "ɛ", "ɜ", "ɞ", "ɪ", "ɨ", "ɔ", "ɒ", "œ", "ø", "ʌ", "ʉ", "ɯ", "ɤ", "y", "ʏ"]

let allPossibleConsonants = ["m", "n", "ŋ", "ɲ", "ɳ", "p", "ʰp", "pʰ", "b", "bʰ", "t", "tʰ", "ʰt", "ʈ", "d", "dʰ", "ɖ", "k", "ʰk", "kʰ", "g", "gʰ", "q", "ɢ", "ʔ", "ʕ", "β", "ɸ", "f", "v", "r", "l", "s", "ʃ", "ʂ", "z", "ʐ", "ʒ", "tʃ", "dʒ", "ʁ", "χ", "w", "j", "ʋ", "h", "ħ", "ɦ", "ɣ", "x", "ts", "θ", "ð", "ʝ", "ç", "c", "ɟ", "ʟ", "ɮ", "ɬ", "ʎ"]


//Without this, every single generated noun from every single generation would remain in the arrays, causing words from
//previous generations to show up in current ones! This clears the arrays upon each click of the button, before they are
//refilled.
function clearGeneratedArrays() {
    generatedCountNouns = [];
    generatedMassNouns = [];
    generatedAdjectives = [];
    generatedTransitiveVerbs = [];
    generatedIntransitiveVerbs = [];
    generatedConjunctions = [];
    generatedAdverbs = [];
    generatedAdpositions = [];
    generatedIntensifiers = [];
    generatedSmallQuanitifiers = [];
    generatedMiddlingQuanitifers = [];
    generatedBigQuantifiers = [];
    generatedOpinionQuantifiers = [];
    chosenNounCases = [];
    grammaticalNumberArray = [];
    nounGenderArray = [];
    animateArray = [];
    animateMassArray = [];
    inanimateArray = [];
    inanimateMassArray = [];
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
    masculine1MassArray = [];
    feminine1MassArray = [];
    masculine2MassArray = [];
    feminine2MassArray = [];
    neuterMassArray = [];
    humanMassArray = [];
    animalMassArray = [];
    inanimateMassArray2 = [];
    activeMassArray = [];
    passiveMassArray = [];
    naturalMassArray = [];
    artificialMassArray = [];
    divineMassArray = [];
    profaneMassArray = [];

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
    dualAffix = "";
    collectiveAffix = "";
    trialAffix = "";
    quadralAffix = "";
    greaterPluralAffix = "";
    generalAffix = "";
    singulativeAffix = "";
    accusativeAffix  = "";
    genitiveAffix = "";
    dativeAffix = "";
    locativeAffix = "";
    ablativeAffix = "";
    delativeAffix = "";
    inessiveAffix = "";
    instrumentalAffix = "";
    allativeAffix = "";
    animateAffix = "";
    inanimateAffix = "";
    masculineAffix = "";
    feminineAffix = "";
    masculine2Affix = "";
    feminine2Affix = "";
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
    caseSuffixOrPrefix = "";
    randomNumForMarkedSingular = "";


    document.getElementById("orthography").replaceChildren();
    document.getElementById("language-to-english").replaceChildren();
    document.getElementById("english-to-language").replaceChildren();
    document.getElementById("lenition-before-list").replaceChildren();
    document.getElementById("masc-fem-gender-switch1").replaceChildren();
    document.getElementById("masc-fem-gender-switch2").replaceChildren();
    document.getElementById("human-animal-gender-switch").replaceChildren();
    document.getElementById("quantifier-table").replaceChildren();
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
    countNounArray.forEach((element) => generatedCountNouns.push(generateWords()));
    massNounArray.forEach((element) => generatedMassNouns.push(generateWords()));
    adjectiveArray.forEach((element) => generatedAdjectives.push(generateWords()));
    transitiveVerbArray.forEach((element) => generatedTransitiveVerbs.push(generateWords()));
    intransitiveVerbArray.forEach((element) => generatedIntransitiveVerbs.push(generateWords()));
    conjunctionArray.forEach((element) => generatedConjunctions.push(generateWords()));
    adverbArray.forEach((element) => generatedAdverbs.push(generateWords()));
    adpositionArray.forEach((element) => generatedAdpositions.push(generateWords()));
    intensifierArray.forEach((element) => generatedIntensifiers.push(generateWords()));
    smallQuantifiersArray.forEach((element) => generatedSmallQuanitifiers.push(generateWords()));
    middingQuantifierArray.forEach((element) => generatedMiddlingQuanitifers.push(generateWords()));
    bigQuantifierArray.forEach((element) => generatedBigQuantifiers.push(generateWords()));
    opinionQuantifierArray.forEach((element) => generatedOpinionQuantifiers.push(generateWords()));
    wordThere = generateWords();
    wordHere = generateWords();
    firstPersonPronoun = generateWords();
    secondPersonPronoun = generateWords();   
}

//Since almost every had had at least one long vowel, the below function serves to randomly shorten vowels in words to bring the number of long vowels down to a more agreeable number.
function reduceAmountOfLongVowels(array) {
    for(let i = 0; i < array.length; i++) {
        let wordArray = Array.from(array[i])
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ː" && Math.floor(Math.random() * 3) !== 2) {
            wordArray.splice(i, 1)
        }
    }
        let joinedWord = wordArray.join("");
        array[i] = joinedWord;
    }   
}

//if the syllable structures allows for consonants in the coda, then the function makes it possible for  asuffix to be a single consonant
let selectedSyllablesAffixes = [];
function makeSyllableArrayForAffixes() {
    selectedSyllables.forEach((element) => selectedSyllablesAffixes.push(element))
    if(selectedSyllablesAffixes.includes("CVC") || selectedSyllablesAffixes.includes("CVCC") || selectedSyllablesAffixes.includes("VC") || selectedSyllablesAffixes.includes("VCC")|| selectedSyllablesAffixes.includes("VVCC")|| selectedSyllablesAffixes.includes("CVN")) {
        if(randomNumForWordInitialPlosiveClusters === 5) {
            selectedSyllablesAffixes.push("C");
        }
    }
}

//I wish to avoid affixes becoming to long, lest they result in very unreasonably long words, especially if a word gains multiple affixes. So This function does the same as generateWords() but prevents overly complex syllable structures and demands that all affixes be monosyllablic. This function may also be used for other morphemes that I'd prefer not be too long.
function generateAffixes() {
    let resonants = selectRhotics().concat(selectLateralApproximants())
    let newSyllableArray = [];
    let newAffix = "";
    let numberOfSyllables = 1;   
    
    for(let i = 0; i < numberOfSyllables; i++) {
        let syllable = selectedSyllablesAffixes[Math.floor(Math.random() * selectedSyllablesAffixes.length)]; //chooses a random syllable from array of selected syllables
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
    dualAffix = generateAffixes();
    trialAffix = generateAffixes();
    quadralAffix = generateAffixes();
    greaterPluralAffix = generateAffixes();
    generalAffix = generateAffixes();
    collectiveAffix = generateAffixes();
    singulativeAffix = generateAffixes();
    accusativeAffix = generateAffixes();
    genitiveAffix = generateAffixes();
    dativeAffix = generateAffixes();
    locativeAffix = generateAffixes();
    ablativeAffix = generateAffixes();
    delativeAffix = generateAffixes();
    inessiveAffix = generateAffixes();
    instrumentalAffix = generateAffixes();
    allativeAffix = generateAffixes();
    animateAffix = generateAffixes();
    inanimateAffix = generateAffixes();
    masculineAffix = generateAffixes();
    feminineAffix = generateAffixes();
    masculine2Affix = generateAffixes();
    feminine2Affix = generateAffixes();
    neuterAffix = generateAffixes();
    humanAffix = generateAffixes();
    animalAffix = generateAffixes();
    inanimate2Affix = generateAffixes();  
    divineAffix = generateAffixes();
    profaneAffix = generateAffixes(); 
    activeAffix = generateAffixes();
    passiveAffix = generateAffixes();
    naturalAffix = generateAffixes();
    artificialAffix = generateAffixes();   
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
    let randomNum = Math.floor(Math.random() * generatedCountNouns.length)
    if(voiced.length === 0) {
        //console.log("no voicing!")
        document.getElementById("wordFinalDevoicing").style.display = "none"; 
    }
    for(let i = 0; i < generatedCountNouns.length; i++) {
        let newArray = Array.from(generatedCountNouns[i]);
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
        exampleNoun2 =  generatedCountNouns[randomNum];
        compoundNoun = exampleNoun + exampleNoun2;
        randomNounMeaning = countNounArray[generatedCountNouns.indexOf(exampleNoun)];
        randomNounMeaning2 = countNounArray[randomNum] 
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
        for(let j = 0; j < generatedCountNouns.length; j++) {
            let noun = generatedCountNouns[j];
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
       
            let randomNoun = generatedCountNouns[Math.floor(Math.random() * generatedCountNouns.length)];
            let randomNounMeaning = countNounArray[generatedCountNouns.indexOf(randomNoun)]
            example[i].innerHTML = spell(soundChange(randomNoun));
            exampleMeaning[i].innerHTML = randomNounMeaning;

            let secondNoun = containsNonHighVowel[Math.floor(Math.random() * containsNonHighVowel.length)];
            let secondNounMeaning = countNounArray[generatedCountNouns.indexOf(secondNoun)]
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
        for(let j = 0; j < generatedCountNouns.length; j++) {
            let noun = generatedCountNouns[j];
            if(resonants.includes(noun[noun.length -1])) {
                endsInAResonantArray.push(noun)
            }
            if(consonants.includes(noun[0])) {
                beginsInConsonantArray.push(noun)
            }
        }
        
        if(endsInAResonantArray.length !== 0 && beginsInConsonantArray !== 0) {
           
       
            let randomNoun = endsInAResonantArray[Math.floor(Math.random() * endsInAResonantArray.length)];
            let randomNounMeaning = countNounArray[generatedCountNouns.indexOf(randomNoun)]
            example[i].innerHTML = spell(soundChange(randomNoun));
            exampleMeaning[i].innerHTML = randomNounMeaning;

            let randomNounForCompound = beginsInConsonantArray[Math.floor(Math.random() * beginsInConsonantArray.length)];
            let randomNounMeaningForCompound = nounArray[generatedCountNouns.indexOf(randomNounForCompound)]
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
        for(let j = 0; j < generatedCountNouns.length; j++) {
            let noun = generatedCountNouns[j];
            if(plosives.includes(noun[noun.length -1])) {
                endsInConsonantArray.push(noun)
            }
            if(plosives.includes(noun[0])) {
                beginsInConsonantArray.push(noun)
            }
        }

        if(endsInConsonantArray.length !== 0 && beginsInConsonantArray !== 0) {
           
       
            let randomNoun = endsInConsonantArray[Math.floor(Math.random() * endsInConsonantArray.length)];
            let randomNounMeaning = countNounArray[generatedCountNouns.indexOf(randomNoun)]
            example[i].innerHTML = spell(soundChange(randomNoun));
            exampleMeaning[i].innerHTML = randomNounMeaning;

            let randomNounForCompound = beginsInConsonantArray[Math.floor(Math.random() * beginsInConsonantArray.length)];
            let randomNounMeaningForCompound = countNounArray[generatedCountNouns.indexOf(randomNounForCompound)]
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
        for(let j = 0; j < generatedCountNouns.length; j++) {
            let noun = generatedCountNouns[j];
            if(consonants.includes(noun[noun.length -1])) {
                endsInConsonantArray.push(noun)
            }
            if(selectNasals().includes(noun[0]) && vowels.includes(noun[1])) {
                beginsInANasalArray.push(noun)
            }
        }
        
        if(endsInConsonantArray.length !== 0 && beginsInANasalArray !== 0) {
           
       
            let randomNoun = endsInConsonantArray[Math.floor(Math.random() * endsInConsonantArray.length)];
            let randomNounMeaning = countNounArray[generatedCountNouns.indexOf(randomNoun)]
            example[i].innerHTML = spell(soundChange(randomNoun));
            exampleMeaning[i].innerHTML = randomNounMeaning;

            let randomNounForCompound = beginsInANasalArray[Math.floor(Math.random() * beginsInANasalArray.length)];
            let randomNounMeaningForCompound = countNounArray[generatedCountNouns.indexOf(randomNounForCompound)]
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
    typologyNum = Math.floor(Math.random() * 2) //change to 3 once fusional is added
}

function chooseTypology() {
    let typology = "";
    if(typologyNum === 0) {
        document.getElementById("typology").innerHTML = `an isolating language, meaning that there are no affixes in this language and that every morpheme is an independent word.`
        typology = "isolating"
        document.getElementById("isolating-nouns").style.display = "block";
    } else {
        document.getElementById("isolating-nouns").style.display = "none";
    }
    if(typologyNum === 1) {
        document.getElementById("typology").innerHTML = `an agglutinative language, meaning that every morpheme has just one meaning assigned to it, and that these morphemes may stack up together. Some aspects of the language may be slightly fusional where sound changes have blended some affixes together.`
        typology = "agglutinative"
        document.getElementById("agglutinative-nouns").style.display = "block";
    } else {
        document.getElementById("agglutinative-nouns").style.display = "none";
    }
    if(typologyNum === 2) {
        document.getElementById("typology").innerHTML = `a fusional language, meaning that a morpheme may bear more than one unit of meaning.`
        typology = "fusional"
        document.getElementById("fusional-nouns").style.display = "block";
    } else {
        document.getElementById("fusional-nouns").style.display = "none";
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

//each type of affix has its own function to determine if it is marked with a suffix or prefix, to prevent each affix having different outcomes, i.e one gender being marked with a prefix and another with a suffix. =
function genderMarkedWithSuffixOrPrefix() {
    genderSuffixOrPrefix = suffixOrPrefix()
}

function numberMarkedWithSuffixOrPrefix() {
    numberSuffixOrPrefix = suffixOrPrefix();
}

function caseMarkedWithSuffixOrPrefix() {
    caseSuffixOrPrefix = suffixOrPrefix();
}

function fixAffixes() {
    //if the sound change of non-initial mid vowels lowering to /a/ applies, it causes a bug where the vowels in the suffix correctly change but only when applied to a word. The suffix listed alone does not experience the change since the vowel in the bare suffix is initial. To fix this, the below function replaces the vowel in each suffix to the correct value of /a/
    let midVowels = ["e", "o", "ø", "ɤ", "ɘ", "ɵ", "ə", "ɛ", "œ", "ɜ", "ɞ", "ʌ", "ɔ", "ɑ", "ɒ", "ɐ", "æ"];
    if(genderSuffixOrPrefix === "suffix" && document.getElementById("nonHighNonInitialVowelsLowerToA").style.display === "block") {
        let suffixArray = [];
        let newSuffixArray = [];
        suffixArray.push(animateAffix, inanimateAffix, masculineAffix, feminineAffix, masculine2Affix, feminine2Affix, neuterAffix, divineAffix, profaneAffix, humanAffix, animalAffix, inanimate2Affix, activeAffix, passiveAffix, naturalAffix, artificialAffix);
        if(document.getElementById("lowersFinalHighVowels").style.display === "block") {
            midVowels.push("i", "u")
        }
        for(let i = 0; i < suffixArray.length; i++) {
            let suffix = Array.from(suffixArray[i])
            for(let j = 0; j < suffix.length; j++) {
                if(midVowels.includes(suffix[j])) {
                    suffix[j] = "a";
                }    
            }
            let joinedSuffix = suffix.join("")
            newSuffixArray.push(joinedSuffix)
        }
        animateAffix = newSuffixArray[0];
        inanimateAffix = newSuffixArray[1];
        masculineAffix = newSuffixArray[2];
        feminineAffix = newSuffixArray[3];
        masculine2Affix = newSuffixArray[4];
        feminine2Affix = newSuffixArray[5];
        neuterAffix = newSuffixArray[6];
        divineAffix = newSuffixArray[7];
        profaneAffix = newSuffixArray[8];
        humanAffix = newSuffixArray[9];
        animalAffix = newSuffixArray[10];
        inanimate2Affix =  newSuffixArray[11];
        activeAffix = newSuffixArray[12];
        passiveAffix = newSuffixArray[13];
        naturalAffix = newSuffixArray[14];
        artificialAffix = newSuffixArray[15];
    }
    if(numberSuffixOrPrefix === "suffix" && document.getElementById("nonHighNonInitialVowelsLowerToA").style.display === "block") {
        let suffixArray = [];
        let newSuffixArray = [];
        suffixArray.push(singularAffix, pluralAffix, dualAffix, collectiveAffix, trialAffix, quadralAffix, greaterPluralAffix, generalAffix);
        if(document.getElementById("lowersFinalHighVowels").style.display === "block") {
            midVowels.push("i", "u")
        }
        for(let i = 0; i < suffixArray.length; i++) {
            let suffix = Array.from(suffixArray[i])
            for(let j = 0; j < suffix.length; j++) {
                if(midVowels.includes(suffix[j])) {
                    suffix[j] = "a";
                }    
            }
            let joinedSuffix = suffix.join("")
            newSuffixArray.push(joinedSuffix)
        }
        singularAffix = newSuffixArray[0];
        pluralAffix = newSuffixArray[1];
        dualAffix = newSuffixArray[2];
        collectiveAffix = newSuffixArray[3];
        trialAffix = newSuffixArray[4];
        quadralAffix = newSuffixArray[5];
        greaterPluralAffix = newSuffixArray[6];
        generalAffix = newSuffixArray[7];
    }

    //if word final high vowels lower to mid vowels word finally, then this sound change applies to prefixes listed in isolation which is not good, so this shall fix that
    if(numberSuffixOrPrefix === "prefix" && document.getElementById("lowersFinalHighVowels").style.display === "block") {
        let prefixArray = [];
        let newPrefixArray = [];
        prefixArray.push(singularAffix, pluralAffix, dualAffix, collectiveAffix, trialAffix, quadralAffix, greaterPluralAffix, generalAffix);
       
        for(let i = 0; i < prefixArray.length; i++) {
            let prefix = Array.from(prefixArray[i])
            for(let j = 0; j < prefix.length; j++) {
                if(prefix[j] === "e") {
                    prefix[j] = "i";
                }  
                if(prefix[j] === "ø") {
                    prefix[j] = "y";
                } 
                if(prefix[j] === "o") {
                    prefix[j] = "u";
                } 
                if(prefix[j] === "ɘ") {
                    prefix[j] = "ɨ";
                } 
                if(prefix[j] === "ɵ") {
                    prefix[j] = "ʉ";
                }    
                if(prefix[j] === "ɯ") {
                    prefix[j] = "ɤ";
                }  
            }
            let joinedPrefix = prefix.join("")
            newPrefixArray.push(joinedPrefix)
        }
        singularAffix = newPrefixArray[0];
        pluralAffix = newPrefixArray[1];
        dualAffix = newPrefixArray[2];
        collectiveAffix = newPrefixArray[3];
        trialAffix = newPrefixArray[4];
        quadralAffix = newPrefixArray[5];
        greaterPluralAffix = newPrefixArray[6];
        generalAffix = newPrefixArray[7];
    }
    if(numberSuffixOrPrefix === "prefix" && document.getElementById("lowersFinalHighVowels").style.display === "block") {
        let prefixArray = [];
        let newPrefixArray = [];
        prefixArray.push(animateAffix, inanimateAffix, masculineAffix, feminineAffix, masculine2Affix, feminine2Affix, neuterAffix, divineAffix, profaneAffix, humanAffix, animalAffix, inanimate2Affix, activeAffix, passiveAffix, naturalAffix, artificialAffix);
       
        for(let i = 0; i < prefixArray.length; i++) {
            let prefix = Array.from(prefixArray[i])
            for(let j = 0; j < prefix.length; j++) {
                if(prefix[j] === "e") {
                    prefix[j] = "i";
                }  
                if(prefix[j] === "ø") {
                    prefix[j] = "y";
                } 
                if(prefix[j] === "o") {
                    prefix[j] = "u";
                } 
                if(prefix[j] === "ɘ") {
                    prefix[j] = "ɨ";
                } 
                if(prefix[j] === "ɵ") {
                    prefix[j] = "ʉ";
                }    
                if(prefix[j] === "ɯ") {
                    prefix[j] = "ɤ";
                }  
            }
            let joinedPrefix = prefix.join("")
            newPrefixArray.push(joinedPrefix)
        }
        animateAffix = newPrefixArray[0];
        inanimateAffix = newPrefixArray[1];
        masculineAffix = newPrefixArray[2];
        feminineAffix = newPrefixArray[3];
        masculine2Affix = newPrefixArray[4];
        feminine2Affix = newPrefixArray[5];
        neuterAffix = newPrefixArray[6];
        divineAffix = newPrefixArray[7];
        profaneAffix = newPrefixArray[8];
        humanAffix = newPrefixArray[9];
        animalAffix = newPrefixArray[10];
        inanimate2Affix =  newPrefixArray[11];
        activeAffix = newPrefixArray[12];
        passiveAffix = newPrefixArray[13];
        naturalAffix = newPrefixArray[14];
        artificialAffix = newPrefixArray[15];
    }
 }

/*****CHOOSE IF THE LANGUAGE HAS A MARKED SINGULAR****/
function randomNumMarkedSingular() {
    randomNumForMarkedSingular = Math.floor(Math.random() * 4)
}
function markedSingularOrNot() {
    if(typologyNum === 1 && randomNumForMarkedSingular === 1) {
        return true;
    } else if(typologyNum === 2 && randomNumForMarkedSingular !== 2) {
        return true;
    } else {
        return false;
    };
}

/*****Noun Gender*******/

let genderNum = 0;
function randomNumForNounGender() {
    genderNum = Math.floor(Math.random() * 16)
    if(genderNum < 9) {
        document.getElementById("agglutinative-gender").style.display = "none";
        document.getElementById("no-gender-singulative-example").style.display = "block";
    } else {
        document.getElementById("no-gender-singulative-example").style.display = "none";
    }
    if(genderNum === 9) {
        nounGenderArray.push("animate", "inanimate");
        document.getElementById("agglutinative-gender").style.display = "block";
        document.getElementById("agglutinative-gender1").style.display = "block";
        document.getElementById("anim-inan-singulative-example").style.display = "block";
    } else {
        document.getElementById("agglutinative-gender1").style.display = "none";
        document.getElementById("anim-inan-singulative-example").style.display = "none";
    }
    if(genderNum === 10) {
        nounGenderArray.push("masculine1", "feminine1");
        document.getElementById("agglutinative-gender").style.display = "block";
        document.getElementById("agglutinative-gender2").style.display = "block";
        document.getElementById("masc-fem-singulative-example").style.display = "block";
    } else {
        document.getElementById("agglutinative-gender2").style.display = "none";
        document.getElementById("masc-fem-singulative-example").style.display = "none";
    }
    if(genderNum === 11) {
        nounGenderArray.push("masculine2", "feminine2", "neuter");
        document.getElementById("agglutinative-gender").style.display = "block";
        document.getElementById("agglutinative-gender3").style.display = "block";
        document.getElementById("masc-fem-neut-singulative-example").style.display = "block";
    } else {
        document.getElementById("agglutinative-gender3").style.display = "none";
        document.getElementById("masc-fem-neut-singulative-example").style.display = "none";
    }
    if(genderNum === 12) {
        nounGenderArray.push("human", "animal", "secondinanimate");
        document.getElementById("agglutinative-gender").style.display = "block";
        document.getElementById("agglutinative-gender4").style.display = "block";
        document.getElementById("human-anim-inan-singulative-example").style.display = "block";
    } else {
        document.getElementById("agglutinative-gender4").style.display = "none";
        document.getElementById("human-anim-inan-singulative-example").style.display = "none";
    }
    if(genderNum === 13) {
        nounGenderArray.push("divine", "profane");
        document.getElementById("agglutinative-gender").style.display = "block";
        document.getElementById("agglutinative-gender5").style.display = "block";
        document.getElementById("divine-profane-singulative-example").style.display = "block";
    } else {
        document.getElementById("agglutinative-gender5").style.display = "none";
        document.getElementById("divine-profane-singulative-example").style.display = "none";
    }
    if(genderNum === 14) {
        nounGenderArray.push("active", "passive");
        document.getElementById("agglutinative-gender").style.display = "block";
         document.getElementById("agglutinative-gender6").style.display = "block";
         document.getElementById("active-passive-singulative-example").style.display = "block";
    } else {
        document.getElementById("agglutinative-gender6").style.display = "none";
        document.getElementById("active-passive-singulative-example").style.display = "none";
    }
    if(genderNum === 15) {
        nounGenderArray.push("natural", "artificial");
        document.getElementById("agglutinative-gender").style.display = "block";
        document.getElementById("agglutinative-gender7").style.display = "block";
        document.getElementById("natural-artificial-singulative-example").style.display = "block";
    } else {
        document.getElementById("agglutinative-gender7").style.display = "none";
        document.getElementById("natural-artificial-singulative-example").style.display = "none";
    }
}

//whether the language is head initial or final depends on the word order
function checkIfHeadInitialOrHeadFinal() {
    //if the word order is OV, or else VO
    if(wordOrderNum === 0 || wordOrderNum === 1 || wordOrderNum === 5 ) {
        document.getElementById("before-or-after-numbers").innerHTML = "after";
        // document.getElementById("quantifier-few-example-head-first").style.display = "block";
        // document.getElementById("few-translation-head-first").style.display = "block";
        return "headFirst";
    } else if (wordOrderNum === 2 ||wordOrderNum === 3 || wordOrderNum === 4) {
        document.getElementById("before-or-after-numbers").innerHTML = "before";
        // document.getElementById("quantifier-few-example-head-final").style.display = "block";
        // document.getElementById("few-translation-head-final").style.display = "block";
        return "headFinal"
    };
}

/**ISOLATING NOUNS****/
let grammaticalNumIsolating = 0;
function randomNumForIsolatingGrammaticalNumbers() {
    grammaticalNumIsolating = 3//Math.floor(Math.random() * 31)
    if(grammaticalNumIsolating < 5) {
        document.getElementById("isolating-quanitifers-only").style.display = "block";
    }
}


function chooseQuanitifers() {
    
    if(typologyNum === 0) {
    let table = document.getElementById("quantifier-table");

    let headerRow = document.createElement("tr")
    let quantifierTH = document.createElement("th");
    quantifierTH.innerHTML = "Quantifier";
    headerRow.appendChild(quantifierTH);

    let exampleTH = document.createElement("th");
    exampleTH.innerHTML = "Example";
    headerRow.appendChild(exampleTH);

    let translationTH = document.createElement("th");
    translationTH.innerHTML = "Translation";
    headerRow.appendChild(translationTH);
    table.appendChild(headerRow);

    //for the quantifier "few"
    let fewRow = document.createElement("tr");
    fewRow.setAttribute("id", "quantifier-few");
    let fewTD = document.createElement("td");
    fewTD.innerHTML = `<span class="few sound-change"></span> "a few"`
    fewRow.appendChild(fewTD);
    if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="noun sound-change" id="noun29"></span> <span class="few sound-change"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"a few <span class="noun-meaning29 plural-meaning"></span>"`
        fewRow.appendChild(exampleTD);
        fewRow.appendChild(translationTD);
    } else {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="few sound-change"></span> <span class="noun sound-change" id="noun29"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"a few <span class="noun-meaning29 plural-meaning"></span>"`
        fewRow.appendChild(exampleTD);
        fewRow.appendChild(translationTD);
    }
    table.appendChild(fewRow);

    //for the quantifier "several"
    let severalRow = document.createElement("tr");
    severalRow.setAttribute("id", "quantifier-several");
    let severalTD = document.createElement("td");
    severalTD.innerHTML = `<span class="several sound-change"></span> "several"`
    severalRow.appendChild(severalTD);
    if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="noun sound-change" id="noun30"></span> <span class="several sound-change"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"several <span class="noun-meaning30 plural-meaning"></span>"`
        severalRow.appendChild(exampleTD);
        severalRow.appendChild(translationTD);
    } else {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="several sound-change"></span> <span class="noun sound-change" id="noun29"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"several <span class="noun-meaning30 plural-meaning"></span>"`
        severalRow.appendChild(exampleTD);
        severalRow.appendChild(translationTD);
    }
    table.appendChild(severalRow);

    //for the quantifier "a lot of"
    let aLotOfRow = document.createElement("tr");
    aLotOfRow.setAttribute("id", "quantifier-a-lot-of");
    let aLotOfTD = document.createElement("td");
    aLotOfTD.innerHTML = `<span class="a-lot-of sound-change"></span> "a lot of, many, much"`
    aLotOfRow.appendChild(aLotOfTD);
    if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="noun sound-change" id="noun31"></span> <span class="a-lot-of sound-change"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"a lot of <span class="noun-meaning31 plural-meaning"></span>"`
        aLotOfRow.appendChild(exampleTD);
        aLotOfRow.appendChild(translationTD);
    } else {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="a-lot-of sound-change"></span> <span class="noun sound-change" id="noun31"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"a lot of <span class="noun-meaning31 plural-meaning"></span>"`
        aLotOfRow.appendChild(exampleTD);
        aLotOfRow.appendChild(translationTD);
    }
    table.appendChild(aLotOfRow);
    
    for(let i = 0; i < generatedSmallQuanitifiers.length; i++) {
        
    }
}
}

function createQuantifiers() {
    let few = document.getElementsByClassName("few")
    for(let i = 0; i < few.length; i++) {
        few[i].innerHTML = generatedSmallQuanitifiers[0];
    }

    let several = document.getElementsByClassName("several")
    for(let i = 0; i < several.length; i++) {
        several[i].innerHTML = generatedMiddlingQuanitifers[0];
    }

    let aLotOf = document.getElementsByClassName("a-lot-of")
    for(let i = 0; i < aLotOf.length; i++) {
        aLotOf[i].innerHTML = generatedBigQuantifiers[0];
    }
}

/***AGGLUTINATIVE NOUNS****/

let grammaticalNumAgglutinative = 0;
function randomNumForAgglutinativeGrammaticalNumbers() {
    grammaticalNumAgglutinative = Math.floor(Math.random() * 31)
    if(grammaticalNumAgglutinative < 4) {
        grammaticalNumberArray.push("singular", "plural");
        document.getElementById("singular-plural").style.display = "block";
        if(markedSingularOrNot()) {
            document.getElementById("singular-plural-marked-singular").style.display = "inline";
        } else {
        document.getElementById("singular-plural-marked-singular").style.display = "none";
    }

        //hides or shows examples of singular and plural nouns based on what noun gender is present
        if(genderNum < 9) {
            document.getElementById("no-gender-singular-plural").style.display = "block";
        } else {
            document.getElementById("no-gender-singular-plural").style.display = "none";
        }
        if(genderNum === 9) {
            document.getElementById("anim-inan-singular-plural").style.display = "block";
        } else {
            document.getElementById("anim-inan-singular-plural").style.display = "none";
        }
        if(genderNum === 10) {
            document.getElementById("masc-fem-singular-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-singular-plural").style.display = "none";
        }
        if(genderNum === 11) {
            document.getElementById("masc-fem-neut-singular-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-neut-singular-plural").style.display = "none";
        }
        if(genderNum === 12) {
            document.getElementById("human-animal-inan-singular-plural").style.display = "block";
        } else {
            document.getElementById("human-animal-inan-singular-plural").style.display = "none";
        }
        if(genderNum === 13) {
            document.getElementById("divine-profane-singular-plural").style.display = "block";
        } else {
            document.getElementById("divine-profane-singular-plural").style.display = "none";
        }
        if(genderNum === 14) {
            document.getElementById("active-passive-singular-plural").style.display = "block";
        } else {
            document.getElementById("active-passive-singular-plural").style.display = "none";
        }
        if(genderNum === 15) {
            document.getElementById("natural-artificial-singular-plural").style.display = "block";
        } else {
            document.getElementById("natural-artificial-singular-plural").style.display = "none";
        }
    } else {
        document.getElementById("singular-plural").style.display = "none";
    }

    if(grammaticalNumAgglutinative >= 4 && grammaticalNumAgglutinative < 7) {
        grammaticalNumberArray.push("singular", "dual", "plural");
        document.getElementById("singular-dual-plural").style.display = "block";
        if(markedSingularOrNot()) {
            document.getElementById("singular-dual-plural-marked-singular").style.display = "inline";
        } else {
        document.getElementById("singular-dual-plural-marked-singular").style.display = "none";
        }
         //hides or shows examples of singular and plural nouns based on what noun gender is present
        if(genderNum < 9) {
            document.getElementById("no-gender-singular-dual-plural").style.display = "block";
        } else {
            document.getElementById("no-gender-singular-dual-plural").style.display = "none";
        }
        if(genderNum === 9) {
            document.getElementById("anim-inan-singular-dual-plural").style.display = "block";
        } else {
            document.getElementById("anim-inan-singular-dual-plural").style.display = "none";
        }
        if(genderNum === 10) {
            document.getElementById("masc-fem-singular-dual-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-singular-dual-plural").style.display = "none";
        }
        if(genderNum === 11) {
            document.getElementById("masc-fem-neut-singular-dual-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-neut-singular-dual-plural").style.display = "none";
        }
        if(genderNum === 12) {
            document.getElementById("human-animal-inan-singular-dual-plural").style.display = "block";
        } else {
            document.getElementById("human-animal-inan-singular-dual-plural").style.display = "none";
        }
        if(genderNum === 13) {
            document.getElementById("divine-profane-singular-dual-plural").style.display = "block";
        } else {
            document.getElementById("divine-profane-singular-dual-plural").style.display = "none";
        }
        if(genderNum === 14) {
            document.getElementById("active-passive-singular-dual-plural").style.display = "block";
        } else {
            document.getElementById("active-passive-singular-dual-plural").style.display = "none";
        }
        if(genderNum === 15) {
            document.getElementById("natural-artificial-singular-dual-plural").style.display = "block";
        } else {
            document.getElementById("natural-artificial-singular-dual-plural").style.display = "none";
        }
    } else {
        document.getElementById("singular-dual-plural").style.display = "none";
    }

    if(grammaticalNumAgglutinative >= 7 && grammaticalNumAgglutinative < 12) {
        grammaticalNumberArray.push("singular", "plural", "collective");
        document.getElementById("singular-dual-plural-collective").style.display = "block";
        if(markedSingularOrNot()) {
            document.getElementById("singular-dual-plural-collective-marked-singular").style.display = "inline";
        } else {
        document.getElementById("singular-dual-plural-collective-marked-singular").style.display = "none";
        }
        //hides or shows examples of singular and plural nouns based on what noun gender is present
        if(genderNum < 9) {
            document.getElementById("no-gender-singular-dual-plural-collective").style.display = "block";
        } else {
            document.getElementById("no-gender-singular-dual-plural-collective").style.display = "none";
        }
        if(genderNum === 9) {
            document.getElementById("anim-inan-singular-dual-plural-collective").style.display = "block";
        } else {
            document.getElementById("anim-inan-singular-dual-plural-collective").style.display = "none";
        }
        if(genderNum === 10) {
            document.getElementById("masc-fem-singular-dual-plural-collective").style.display = "block";
        } else {
            document.getElementById("masc-fem-singular-dual-plural-collective").style.display = "none";
        }
        if(genderNum === 11) {
            document.getElementById("masc-fem-neut-singular-dual-plural-collective").style.display = "block";
        } else {
            document.getElementById("masc-fem-neut-singular-dual-plural-collective").style.display = "none";
        }
        if(genderNum === 12) {
            document.getElementById("human-animal-inan-singular-dual-plural-collective").style.display = "block";
        } else {
            document.getElementById("human-animal-inan-singular-dual-plural-collective").style.display = "none";
        }
        if(genderNum === 13) {
            document.getElementById("divine-profane-singular-dual-plural-collective").style.display = "block";
        } else {
            document.getElementById("divine-profane-singular-dual-plural-collective").style.display = "none";
        }
        if(genderNum === 14) {
            document.getElementById("active-passive-singular-dual-plural-collective").style.display = "block";
        } else {
            document.getElementById("active-passive-singular-dual-plural-collective").style.display = "none";
        }
        if(genderNum === 15) {
            document.getElementById("natural-artificial-singular-dual-plural-collective").style.display = "block";
        } else {
            document.getElementById("natural-artificial-singular-dual-plural-collective").style.display = "none";
        }
    } else {
        document.getElementById("singular-dual-plural-collective").style.display = "none";
    }
    

    if(grammaticalNumAgglutinative >= 12 && grammaticalNumAgglutinative < 15) {
        grammaticalNumberArray.push("singular", "dual", "trial", "plural");
        document.getElementById("singular-dual-trial-plural").style.display = "block";
        if(markedSingularOrNot()) {
            document.getElementById("singular-dual-trial-plural-marked-singular").style.display = "inline";
        } else {
        document.getElementById("singular-dual-trial-plural-marked-singular").style.display = "none";
        }
        //hides or shows examples of singular and plural nouns based on what noun gender is present
        if(genderNum < 9) {
            document.getElementById("no-gender-singular-dual-trial-plural").style.display = "block";
        } else {
            document.getElementById("no-gender-singular-dual-trial-plural").style.display = "none";
        }
        if(genderNum === 9) {
            document.getElementById("anim-inan-singular-dual-trial-plural").style.display = "block";
        } else {
            document.getElementById("anim-inan-singular-dual-trial-plural").style.display = "none";
        }
        if(genderNum === 10) {
            document.getElementById("masc-fem-singular-dual-trial-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-singular-dual-trial-plural").style.display = "none";
        }
        if(genderNum === 11) {
            document.getElementById("masc-fem-neut-singular-dual-trial-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-neut-singular-dual-trial-plural").style.display = "none";
        }
        if(genderNum === 12) {
            document.getElementById("human-animal-inan-singular-dual-trial-plural").style.display = "block";
        } else {
            document.getElementById("human-animal-inan-singular-dual-trial-plural").style.display = "none";
        }
        if(genderNum === 13) {
            document.getElementById("divine-profane-singular-dual-trial-plural").style.display = "block";
        } else {
            document.getElementById("divine-profane-singular-dual-trial-plural").style.display = "none";
        }
        if(genderNum === 14) {
            document.getElementById("active-passive-singular-dual-trial-plural").style.display = "block";
        } else {
            document.getElementById("active-passive-singular-dual-trial-plural").style.display = "none";
        }
        if(genderNum === 15) {
            document.getElementById("natural-artificial-singular-dual-trial-plural").style.display = "block";
        } else {
            document.getElementById("natural-artificial-singular-dual-trial-plural").style.display = "none";
        }
    } else {
        document.getElementById("singular-dual-trial-plural").style.display = "none";
    }
    
    if(grammaticalNumAgglutinative >= 15 && grammaticalNumAgglutinative < 18) {
        grammaticalNumberArray.push("singular", "dual", "trial", "quadral", "plural");
        document.getElementById("singular-dual-trial-quadral-plural").style.display = "block";
        if(markedSingularOrNot()) {
            document.getElementById("singular-dual-trial-quadral-plural-marked-singular").style.display = "inline";
        } else {
        document.getElementById("singular-dual-trial-quadral-plural-marked-singular").style.display = "none";
        }
        //hides or shows examples of singular and plural nouns based on what noun gender is present
        if(genderNum < 9) {
            document.getElementById("no-gender-singular-dual-trial-quadral-plural").style.display = "block";
        } else {
            document.getElementById("no-gender-singular-dual-trial-quadral-plural").style.display = "none";
        }
        if(genderNum === 9) {
            document.getElementById("anim-inan-singular-dual-trial-quadral-plural").style.display = "block";
        } else {
            document.getElementById("anim-inan-singular-dual-trial-quadral-plural").style.display = "none";
        }
        if(genderNum === 10) {
            document.getElementById("masc-fem-singular-dual-trial-quadral-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-singular-dual-trial-quadral-plural").style.display = "none";
        }
        if(genderNum === 11) {
            document.getElementById("masc-fem-neut-singular-dual-trial-quadral-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-neut-singular-dual-trial-quadral-plural").style.display = "none";
        }
        if(genderNum === 12) {
            document.getElementById("human-animal-inan-singular-dual-trial-quadral-plural").style.display = "block";
        } else {
            document.getElementById("human-animal-inan-singular-dual-trial-quadral-plural").style.display = "none";
        }
        if(genderNum === 13) {
            document.getElementById("divine-profane-singular-dual-trial-quadral-plural").style.display = "block";
        } else {
            document.getElementById("divine-profane-singular-dual-trial-quadral-plural").style.display = "none";
        }
        if(genderNum === 14) {
            document.getElementById("active-passive-singular-dual-trial-quadral-plural").style.display = "block";
        } else {
            document.getElementById("active-passive-singular-dual-trial-quadral-plural").style.display = "none";
        }
        if(genderNum === 15) {
            document.getElementById("natural-artificial-singular-dual-trial-quadral-plural").style.display = "block";
        } else {
            document.getElementById("natural-artificial-singular-dual-trial-quadral-plural").style.display = "none";
        }
    } else {
       document.getElementById("singular-dual-trial-quadral-plural").style.display = "none";
    }
    
    if(grammaticalNumAgglutinative >= 18 && grammaticalNumAgglutinative < 21) {
        grammaticalNumberArray.push("singular", "plural", "greater plural");
        document.getElementById("singular-plural-greater-plural").style.display = "block";
        if(markedSingularOrNot()) {
            document.getElementById("singular-plural-greater-plural-marked-singular").style.display = "inline";
        } else {
        document.getElementById("singular-plural-greater-plural-marked-singular").style.display = "none";
        }
        //hides or shows examples of singular and plural nouns based on what noun gender is present
        if(genderNum < 9) {
            document.getElementById("no-gender-singular-plural-greater-plural").style.display = "block";
        } else {
            document.getElementById("no-gender-singular-plural-greater-plural").style.display = "none";
        }
        if(genderNum === 9) {
            document.getElementById("anim-inan-singular-plural-greater-plural").style.display = "block";
        } else {
            document.getElementById("anim-inan-singular-plural-greater-plural").style.display = "none";
        }
        if(genderNum === 10) {
            document.getElementById("masc-fem-singular-plural-greater-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-singular-plural-greater-plural").style.display = "none";
        }
        if(genderNum === 11) {
            document.getElementById("masc-fem-neut-singular-plural-greater-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-neut-singular-plural-greater-plural").style.display = "none";
        }
        if(genderNum === 12) {
            document.getElementById("human-animal-inan-singular-plural-greater-plural").style.display = "block";
        } else {
            document.getElementById("human-animal-inan-singular-plural-greater-plural").style.display = "none";
        }
        if(genderNum === 13) {
            document.getElementById("divine-profane-singular-plural-greater-plural").style.display = "block";
        } else {
            document.getElementById("divine-profane-singular-plural-greater-plural").style.display = "none";
        }
        if(genderNum === 14) {
            document.getElementById("active-passive-singular-plural-greater-plural").style.display = "block";
        } else {
            document.getElementById("active-passive-singular-plural-greater-plural").style.display = "none";
        }
        if(genderNum === 15) {
            document.getElementById("natural-artificial-singular-plural-greater-plural").style.display = "block";
        } else {
            document.getElementById("natural-artificial-singular-plural-greater-plural").style.display = "none";
        }
    } else {
       document.getElementById("singular-plural-greater-plural").style.display = "none";
    }
    
    if(grammaticalNumAgglutinative >= 21 && grammaticalNumAgglutinative < 24) {
        grammaticalNumberArray.push("singular", "plural", "general");
        document.getElementById("singular-plural-general").style.display = "block";
        if(markedSingularOrNot()) {
            document.getElementById("singular-plural-general-marked-singular").style.display = "inline";
        } else {
        document.getElementById("singular-plural-general-marked-singular").style.display = "none";
        }
        //hides or shows examples of singular and plural nouns based on what noun gender is present
        if(genderNum < 9) {
            document.getElementById("no-gender-singular-plural-general").style.display = "block";
        } else {
            document.getElementById("no-gender-singular-plural-general").style.display = "none";
        }
        if(genderNum === 9) {
            document.getElementById("anim-inan-singular-plural-general").style.display = "block";
        } else {
            document.getElementById("anim-inan-singular-plural-general").style.display = "none";
        }
        if(genderNum === 10) {
            document.getElementById("masc-fem-singular-plural-general").style.display = "block";
        } else {
            document.getElementById("masc-fem-singular-plural-general").style.display = "none";
        }
        if(genderNum === 11) {
            document.getElementById("masc-fem-neut-singular-plural-general").style.display = "block";
        } else {
            document.getElementById("masc-fem-neut-singular-plural-general").style.display = "none";
        }
        if(genderNum === 12) {
            document.getElementById("human-animal-inan-singular-plural-general").style.display = "block";
        } else {
            document.getElementById("human-animal-inan-singular-plural-general").style.display = "none";
        }
        if(genderNum === 13) {
            document.getElementById("divine-profane-singular-plural-general").style.display = "block";
        } else {
            document.getElementById("divine-profane-singular-plural-general").style.display = "none";
        }
        if(genderNum === 14) {
            document.getElementById("active-passive-singular-plural-general").style.display = "block";
        } else {
            document.getElementById("active-passive-singular-plural-general").style.display = "none";
        }
        if(genderNum === 15) {
            document.getElementById("natural-artificial-singular-plural-general").style.display = "block";
        } else {
            document.getElementById("natural-artificial-singular-plural-general").style.display = "none";
        }
    } else {
       document.getElementById("singular-plural-general").style.display = "none";
    }
    
    if(grammaticalNumAgglutinative >= 24 && grammaticalNumAgglutinative < 27) {
        grammaticalNumberArray.push("general", "plural");
        document.getElementById("general-plural").style.display = "block";
        //hides or shows examples of singular and plural nouns based on what noun gender is present
        if(genderNum < 9) {
            document.getElementById("no-gender-general-plural").style.display = "block";
        } else {
            document.getElementById("no-gender-general-plural").style.display = "none";
        }
        if(genderNum === 9) {
            document.getElementById("anim-inan-general-plural").style.display = "block";
        } else {
            document.getElementById("anim-inan-general-plural").style.display = "none";
        }
        if(genderNum === 10) {
            document.getElementById("masc-fem-general-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-general-plural").style.display = "none";
        }
        if(genderNum === 11) {
            document.getElementById("masc-fem-neut-general-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-neut-general-plural").style.display = "none";
        }
        if(genderNum === 12) {
            document.getElementById("human-animal-inan-general-plural").style.display = "block";
        } else {
            document.getElementById("human-animal-inan-general-plural").style.display = "none";
        }
        if(genderNum === 13) {
            document.getElementById("divine-profane-general-plural").style.display = "block";
        } else {
            document.getElementById("divine-profane-general-plural").style.display = "none";
        }
        if(genderNum === 14) {
            document.getElementById("active-passive-general-plural").style.display = "block";
        } else {
            document.getElementById("active-passive-general-plural").style.display = "none";
        }
        if(genderNum === 15) {
            document.getElementById("natural-artificial-general-plural").style.display = "block";
        } else {
            document.getElementById("natural-artificial-general-plural").style.display = "none";
        }
    } else {
       document.getElementById("general-plural").style.display = "none";
    }
    
    if(grammaticalNumAgglutinative >= 27 && grammaticalNumAgglutinative < 30) {
        grammaticalNumberArray.push("general", "singulative", "plural");
        document.getElementById("general-singulative-plural").style.display = "block";
        if(genderNum < 9) {
            document.getElementById("no-gender-general-singulative-plural").style.display = "block";
        } else {
            document.getElementById("no-gender-general-singulative-plural").style.display = "none";
        }
        if(genderNum === 9) {
            document.getElementById("anim-inan-general-singulative-plural").style.display = "block";
        } else {
            document.getElementById("anim-inan-general-singulative-plural").style.display = "none";
        }
        if(genderNum === 10) {
            document.getElementById("masc-fem-general-singulative-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-general-singulative-plural").style.display = "none";
        }
        if(genderNum === 11) {
            document.getElementById("masc-fem-neut-general-singulative-plural").style.display = "block";
        } else {
            document.getElementById("masc-fem-neut-general-singulative-plural").style.display = "none";
        }
        if(genderNum === 12) {
            document.getElementById("human-animal-inan-general-singulative-plural").style.display = "block";
        } else {
            document.getElementById("human-animal-inan-general-singulative-plural").style.display = "none";
        }
        if(genderNum === 13) {
            document.getElementById("divine-profane-general-singulative-plural").style.display = "block";
        } else {
            document.getElementById("divine-profane-general-singulative-plural").style.display = "none";
        }
        if(genderNum === 14) {
            document.getElementById("active-passive-general-singulative-plural").style.display = "block";
        } else {
            document.getElementById("active-passive-general-singulative-plural").style.display = "none";
        }
        if(genderNum === 15) {
            document.getElementById("natural-artificial-general-singulative-plural").style.display = "block";
        } else {
            document.getElementById("natural-artificial-general-singulative-plural").style.display = "none";
        }
    } else {
       document.getElementById("general-singulative-plural").style.display = "none";
    }
    
}

function inflectGenderlessNouns() {
    let spanNoun = document.getElementsByClassName("noun");
    let num = 1;
    for(let i = 0; i < spanNoun.length; i++) {
        let randomNumber = Math.floor(Math.random() * countNounArray.length);
        let randomNoun = generatedCountNouns[randomNumber];
        document.getElementById("noun" + num.toString()).innerHTML = randomNoun;
        for(let i = 0; i < document.getElementsByClassName("noun-meaning" + num.toString()).length; i++) {
            document.getElementsByClassName("noun-meaning" + num.toString())[i].innerHTML = countNounArray[randomNumber]
        }
        num++;
    }

    //copy of the noun is made by taking the original noun's meaning, finding the index of it in nounArray, and then finding the equivalent item in the generatedNouns array
    let copyNum2 = 1;
    for(let i = 0; i < document.getElementsByClassName("noun-copy").length; i++) {  
        let nounMeaning = document.getElementsByClassName("noun-meaning" + copyNum2.toString())[0]
        let nounCopy = document.getElementsByClassName("noun-copy" + copyNum2.toString())
            for(let j = 0; j < nounCopy.length; j++) {
                nounCopy[j].innerHTML = generatedCountNouns[countNounArray.indexOf(nounMeaning.innerHTML)];
            }
        copyNum2++;
        }
}

function inflectGenderlessMassNouns() {
    let spanNoun = document.getElementsByClassName("mass-noun");
    let num = 1;
    for(let i = 0; i < spanNoun.length; i++) {
        let randomNumber = Math.floor(Math.random() * massNounArray.length);
        let randomNoun = generatedMassNouns[randomNumber];
        document.getElementById("mass-noun" + num.toString()).innerHTML = randomNoun;
        for(let i = 0; i < document.getElementsByClassName("mass-noun-meaning" + num.toString()).length; i++) {
            document.getElementsByClassName("mass-noun-meaning" + num.toString())[i].innerHTML = massNounArray[randomNumber]
        }
        num++;
    }

    //copy of the noun is made by taking the original noun's meaning, finding the index of it in nounArray, and then finding the equivalent item in the generatedNouns array
    let copyNum2 = 1;
    for(let i = 0; i < document.getElementsByClassName("mass-noun-copy").length; i++) {  
        let nounMeaning = document.getElementsByClassName("mass-noun-meaning" + copyNum2.toString())[0]
        let nounCopy = document.getElementsByClassName("mass-noun-copy" + copyNum2.toString())
            for(let j = 0; j < nounCopy.length; j++) {
                nounCopy[j].innerHTML = generatedMassNouns[massNounArray.indexOf(nounMeaning.innerHTML)];
            }
        copyNum2++;
        }
}

function selectNounsGender(genderArray, array, gender) {
    for(let i = 0; i < countNounArray.length; i++) {
        let index = countNounArray.indexOf(countNounArray[i])
        if(genderArray[index] === gender) {
            array.push(countNounArray[i]);
        }
    }
    let spanNoun = document.getElementsByClassName(gender + "-noun");
    let num = 1;
    for(let i = 0; i < spanNoun.length; i++) {
        let randomNumber = Math.floor(Math.random() * array.length);
        let randomNoun = generatedCountNouns[countNounArray.indexOf(array[randomNumber])] 
        document.getElementById("noun" + num.toString() + gender).innerHTML = randomNoun;
        for(let i = 0; i < document.getElementsByClassName("noun-meaning" + num.toString() + gender).length; i++) {
            document.getElementsByClassName("noun-meaning" + num.toString() + gender)[i].innerHTML = array[randomNumber]
        }
        num++;
    }
}

function selectMassNounsGender(genderArray, array, gender) {
    for(let i = 0; i < massNounArray.length; i++) {
        let index = massNounArray.indexOf(massNounArray[i])
        if(genderArray[index] === gender) {
            array.push(massNounArray[i]);
        }
    }
    let spanNoun = document.getElementsByClassName(gender + "-mass-noun");
    let num = 1;
    for(let i = 0; i < spanNoun.length; i++) {
        let randomNumber = Math.floor(Math.random() * array.length);
        let randomNoun = generatedMassNouns[massNounArray.indexOf(array[randomNumber])] 
        document.getElementById("mass-noun" + num.toString() + gender).innerHTML = randomNoun;
        for(let i = 0; i < document.getElementsByClassName("mass-noun-meaning" + num.toString() + gender).length; i++) {
            document.getElementsByClassName("mass-noun-meaning" + num.toString() + gender)[i].innerHTML = array[randomNumber]
        }
        num++;
    }
}

function inflectNounsGender(affix, gender) {
    let spanNoun = document.getElementsByClassName(gender + "-noun");
    //adds gender affix
    let genderAffix = document.getElementsByClassName(gender +"-noun-suffix-or-prefix")
    if(genderSuffixOrPrefix === "suffix") {
        for(let i = 0; i < genderAffix.length; i++) {
            genderAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + affix))}</i>`
        }
        for(let i = 0; i < spanNoun.length; i++) {
            let genderRoot = spanNoun[i].innerHTML;
            let genderInflected = genderRoot + affix;
            spanNoun[i].innerHTML = genderInflected;
        }
    } else if (genderSuffixOrPrefix === "prefix") {
        for(let i = 0; i < genderAffix.length; i++) {
            genderAffix[i].innerHTML = `prefix <i>${spell(soundChange(affix + "A"))}-</i>`
        }
         for(let i = 0; i < spanNoun.length; i++) {
            let genderRoot = spanNoun[i].innerHTML;
            let genderInflected = affix + genderRoot ;
            spanNoun[i].innerHTML = genderInflected;
        }
    }
    //creates copy of the noun's meaning
    let copyNum = 5;
    for(let i = 0; i < document.getElementsByClassName("noun-meaning-copy" + copyNum.toString() + gender).length; i++) {   
        let nounMeaning =  document.getElementById("noun-meaning" + copyNum.toString() + gender)
        let nounMeaningCopy = document.getElementsByClassName("noun-meaning-copy" + copyNum.toString() + gender)
        for(let j = 0; j < nounMeaningCopy.length; j++) {
            nounMeaningCopy[j].innerHTML = nounMeaning.innerHTML;
        }
        copyNum++;
    }
//creates copies of the noun
    let copyNum2 = 5;
    for(let i = 0; i < document.getElementsByClassName(gender + "-noun-copy").length; i++) {   
        let nounMeaning = document.getElementsByClassName("noun-meaning" + copyNum2.toString() + gender)[0]
        let nounCopy = document.getElementsByClassName("noun-copy" + copyNum2.toString() + gender)
        if(genderSuffixOrPrefix === "suffix") {
            for(let j = 0; j < nounCopy.length; j++) {
                nounCopy[j].innerHTML = generatedCountNouns[countNounArray.indexOf(nounMeaning.innerHTML)] + affix;
            }
        } else if (genderSuffixOrPrefix === "prefix") {
            for(let j = 0; j < nounCopy.length; j++) {
                nounCopy[j].innerHTML = affix + generatedCountNouns[countNounArray.indexOf(nounMeaning.innerHTML)];
            }
        }
        copyNum2++;
        }
}

function inflectMassNounsGender(affix, gender) {
    let spanNoun = document.getElementsByClassName(gender + "-mass-noun");
    //adds gender affix
    let genderAffix = document.getElementsByClassName(gender +"-noun-suffix-or-prefix")
    if(genderSuffixOrPrefix === "suffix") {
        for(let i = 0; i < genderAffix.length; i++) {
            genderAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + affix))}</i>`
        }
        for(let i = 0; i < spanNoun.length; i++) {
            let genderRoot = spanNoun[i].innerHTML;
            let genderInflected = genderRoot + affix;
            spanNoun[i].innerHTML = genderInflected;
        }
    } else if (genderSuffixOrPrefix === "prefix") {
        for(let i = 0; i < genderAffix.length; i++) {
            genderAffix[i].innerHTML = `prefix <i>${spell(soundChange(affix + "A"))}-</i>`
        }
         for(let i = 0; i < spanNoun.length; i++) {
            let genderRoot = spanNoun[i].innerHTML;
            let genderInflected = affix + genderRoot ;
            spanNoun[i].innerHTML = genderInflected;
        }
    }
    //creates copy of the noun's meaning
    let copyNum = 1;
    for(let i = 0; i < document.getElementsByClassName("mass-noun-meaning-copy" + copyNum.toString() + gender).length; i++) {   
        let nounMeaning =  document.getElementById("mass-noun-meaning" + copyNum.toString() + gender)
        let nounMeaningCopy = document.getElementsByClassName("mass-noun-meaning-copy" + copyNum.toString() + gender)
        for(let j = 0; j < nounMeaningCopy.length; j++) {
            nounMeaningCopy[j].innerHTML = nounMeaning.innerHTML;
        }
        copyNum++;
    }
//creates copies of the noun
    let copyNum2 = 1;
    for(let i = 0; i < document.getElementsByClassName(gender + "-mass-noun-copy").length; i++) {   
        let nounMeaning = document.getElementsByClassName("mass-noun-meaning" + copyNum2.toString() + gender)[0]
        let nounCopy = document.getElementsByClassName("mass-noun-copy" + copyNum2.toString() + gender)
        if(genderSuffixOrPrefix === "suffix") {
            for(let j = 0; j < nounCopy.length; j++) {
                nounCopy[j].innerHTML = generatedMassNouns[massNounArray.indexOf(nounMeaning.innerHTML)] + affix;
            }
        } else if (genderSuffixOrPrefix === "prefix") {
            for(let j = 0; j < nounCopy.length; j++) {
                nounCopy[j].innerHTML = affix + generatedMassNouns[massNounArray.indexOf(nounMeaning.innerHTML)];
            }
        }
        copyNum2++;
        }
}

//for agglutinative languages with a marked singular
function inflectNounsSingular() {
    let spanNoun = document.getElementsByClassName("singular-noun");
    
    let spanSingularAffix = document.getElementsByClassName("singular-affix")
    if(markedSingularOrNot()) {
        document.getElementById("singular-plural-marked-singular").style.display = "inline";
        if(numberSuffixOrPrefix === "suffix") {
            for(let i = 0; i < spanSingularAffix.length; i++) {
                spanSingularAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + singularAffix))}</i>`
            }
            for(let i = 0; i < spanNoun.length; i++) {
                let root = spanNoun[i].innerHTML;
                let singularInflected = root + singularAffix;
                spanNoun[i].innerHTML = singularInflected;
            }
        } else if (numberSuffixOrPrefix === "prefix") {
            for(let i = 0; i < spanSingularAffix.length; i++) {
                spanSingularAffix[i].innerHTML = `prefix <i>${spell(soundChange(singularAffix + "A"))}-</i>`
            }
            for(let i = 0; i < spanNoun.length; i++) {
                let root = spanNoun[i].innerHTML;
                let singularInflected = singularAffix + root ;
                spanNoun[i].innerHTML = singularInflected;
            }
        }
    } else {
        document.getElementById("singular-plural-marked-singular").style.display = "none";
    }
}

function inflectNounsPlural() {
    let spanNoun = document.getElementsByClassName("plural-noun");
    let spanPluralAffix = document.getElementsByClassName("plural-affix")

    if(numberSuffixOrPrefix === "suffix") {
        for(let i = 0; i < spanPluralAffix.length; i++) {
            spanPluralAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + pluralAffix))}</i>`
        }
        for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let pluralnflected = root + pluralAffix;
            spanNoun[i].innerHTML = pluralnflected;
        }
    } else if (numberSuffixOrPrefix === "prefix") {
        for(let i = 0; i < spanPluralAffix.length; i++) {
            spanPluralAffix[i].innerHTML = `prefix <i>${spell(soundChange(pluralAffix + "A"))}-</i>`
        }
         for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let pluralnflected = pluralAffix + root ;
            spanNoun[i].innerHTML = pluralnflected;
        }
    }
    //makes the noun's translation plural
    let copyNum = 5;
    let nounSgMeaning = document.getElementsByClassName("plural-meaning");
    for(let i = 0; i < nounSgMeaning.length; i++) { 
        let pluralMeaning = countNounArrayPlural[nounArray.indexOf(nounSgMeaning[i].innerHTML)];
       nounSgMeaning[i].innerHTML = pluralMeaning;
        copyNum++;
    }
}

function inflectMassNounsPlural() {
    let spanNoun = document.getElementsByClassName("plural-mass-noun");
    let spanPluralAffix = document.getElementsByClassName("plural-affix")

    if(numberSuffixOrPrefix === "suffix") {
        for(let i = 0; i < spanPluralAffix.length; i++) {
            spanPluralAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + pluralAffix))}</i>`
        }
        for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let pluralnflected = root + pluralAffix;
            spanNoun[i].innerHTML = pluralnflected;
        }
    } else if (numberSuffixOrPrefix === "prefix") {
        for(let i = 0; i < spanPluralAffix.length; i++) {
            spanPluralAffix[i].innerHTML = `prefix <i>${spell(soundChange(pluralAffix + "A"))}-</i>`
        }
         for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let pluralnflected = pluralAffix + root ;
            spanNoun[i].innerHTML = pluralnflected;
        }
    }

    let copyNum = 5;
    let nounSgMeaning = document.getElementsByClassName("plural-mass-meaning");
    for(let i = 0; i < nounSgMeaning.length; i++) { 
        let pluralMeaning = pluralSingulativeMassNounArray[massNounArray.indexOf(nounSgMeaning[i].innerHTML)];
       nounSgMeaning[i].innerHTML = pluralMeaning;
        copyNum++;
    }
}

function inflectNounsDual() {
    let spanNoun = document.getElementsByClassName("dual-noun");
    let spanDualAffix = document.getElementsByClassName("dual-affix")
    if(numberSuffixOrPrefix === "suffix") {
        for(let i = 0; i < spanDualAffix.length; i++) {
            spanDualAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + dualAffix))}</i>`
        }
        for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let dualInflected = root + dualAffix;
            spanNoun[i].innerHTML = dualInflected;
        }
    } else if (numberSuffixOrPrefix === "prefix") {
        for(let i = 0; i < spanDualAffix.length; i++) {
            spanDualAffix[i].innerHTML = `prefix <i>${spell(soundChange(dualAffix + "A"))}-</i>`
        }
         for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let dualInflected = dualAffix + root ;
            spanNoun[i].innerHTML = dualInflected;
        }
    }
    //makes the noun's translation dual
    let copyNum = 4;
    let nounSgMeaning = document.getElementsByClassName("dual-meaning");
    
    for(let i = 0; i < nounSgMeaning.length; i++) { 
        let pluralMeaning =  countNounArrayPlural[nounArray.indexOf(nounSgMeaning[i].innerHTML)];
       nounSgMeaning[i].innerHTML = ` two ${pluralMeaning}`;
        copyNum++;
    }
}

function inflectNounsCollective() {
    let spanNoun = document.getElementsByClassName("collective-noun");
    let spanCollectiveAffix = document.getElementsByClassName("collective-affix")
    if(numberSuffixOrPrefix === "suffix") {
        for(let i = 0; i < spanCollectiveAffix.length; i++) {
            spanCollectiveAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + collectiveAffix))}</i>`
        }
        for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let collectiveInflected = root + collectiveAffix;
            spanNoun[i].innerHTML = spell(soundChange(collectiveInflected));
        }
    } else if (numberSuffixOrPrefix === "prefix") {
        for(let i = 0; i < spanCollectiveAffix.length; i++) {
            spanCollectiveAffix[i].innerHTML = `prefix <i>${spell(soundChange(collectiveAffix + "A"))}-</i>`
        }
         for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let collectiveInflected = collectiveAffix + root ;
            spanNoun[i].innerHTML = collectiveInflected;
        }
    }
    //makes the noun's translation collective
    let copyNum = 4;
    let nounSgMeaning = document.getElementsByClassName("collective-meaning");
    
    for(let i = 0; i < nounSgMeaning.length; i++) { 
       nounSgMeaning[i].innerHTML = `every ${nounSgMeaning[i].innerHTML}`;
        copyNum++;
    }
}

function inflectNounsTrial() {
    let spanNoun = document.getElementsByClassName("trial-noun");
    let spanTrialAffix = document.getElementsByClassName("trial-affix")
    if(numberSuffixOrPrefix === "suffix") {
        for(let i = 0; i < spanTrialAffix.length; i++) {
            spanTrialAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + trialAffix))}</i>`
        }
        for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let spanTrialAffix = root + trialAffix;
            spanNoun[i].innerHTML = spell(soundChange(spanTrialAffix));
        }
    } else if (numberSuffixOrPrefix === "prefix") {
        for(let i = 0; i < spanTrialAffix.length; i++) {
            spanTrialAffix[i].innerHTML = `prefix <i>${spell(soundChange(trialAffix + "A"))}-</i>`
        }
         for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let trialInflected = trialAffix + root ;
            spanNoun[i].innerHTML = trialInflected;
        }
    }
    //makes the noun's translation trial
    let copyNum = 4;
    let nounSgMeaning = document.getElementsByClassName("trial-meaning");
    
    for(let i = 0; i < nounSgMeaning.length; i++) { 
        let pluralMeaning =  countNounArrayPlural[nounArray.indexOf(nounSgMeaning[i].innerHTML)];
        // for(let j = 0; j < nounSgMeaning.length; j++) {
       nounSgMeaning[i].innerHTML = `three ${pluralMeaning}`;
        // }
        copyNum++;
    }
}

function inflectNounsQuadral() {
    let spanNoun = document.getElementsByClassName("quadral-noun");
    let spanQuadralAffix = document.getElementsByClassName("quadral-affix")
    if(numberSuffixOrPrefix === "suffix") {
        for(let i = 0; i < spanQuadralAffix.length; i++) {
            spanQuadralAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + quadralAffix))}</i>`
        }
        for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let spanQuadralAffix = root + quadralAffix;
            spanNoun[i].innerHTML = spanQuadralAffix;
        }
    } else if (numberSuffixOrPrefix === "prefix") {
        for(let i = 0; i < spanQuadralAffix.length; i++) {
            spanQuadralAffix[i].innerHTML = `prefix <i>${spell(soundChange(quadralAffix + "A"))}-</i>`
        }
         for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let quadralInflected = quadralAffix + root ;
            spanNoun[i].innerHTML = quadralInflected;
        }
    }
    //makes the noun's translation quadral
    let copyNum = 4;
    let nounSgMeaning = document.getElementsByClassName("quadral-meaning");
    
    for(let i = 0; i < nounSgMeaning.length; i++) { 
        let pluralMeaning =  countNounArrayPlural[nounArray.indexOf(nounSgMeaning[i].innerHTML)];
        // for(let j = 0; j < nounSgMeaning.length; j++) {
       nounSgMeaning[i].innerHTML = `four ${pluralMeaning}`;
        // }
        copyNum++;
    }
}

function inflectNounsGreaterPlural() {
    let spanNoun = document.getElementsByClassName("greater-plural-noun");
    let spanGreaterPluralAffix = document.getElementsByClassName("greater-plural-affix")
    if(numberSuffixOrPrefix === "suffix") {
        for(let i = 0; i < spanGreaterPluralAffix.length; i++) {
            spanGreaterPluralAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + greaterPluralAffix))}</i>`
        }
        for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let greaterPluralInflected = root + greaterPluralAffix;
            spanNoun[i].innerHTML = spell(soundChange(greaterPluralInflected));
        }
    } else if (numberSuffixOrPrefix === "prefix") {
        for(let i = 0; i < spanGreaterPluralAffix.length; i++) {
            spanGreaterPluralAffix[i].innerHTML = `prefix <i>${spell(soundChange(greaterPluralAffix + "A"))}-</i>`
        }
         for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let greaterPluralInflected = greaterPluralAffix + root ;
            spanNoun[i].innerHTML = greaterPluralInflected;
        }
    }
    //makes the noun's translation greater plural
    let copyNum = 4;
    let nounSgMeaning = document.getElementsByClassName("greater-plural-meaning");
    
    for(let i = 0; i < nounSgMeaning.length; i++) { 
        let pluralMeaning =  countNounArrayPlural[nounArray.indexOf(nounSgMeaning[i].innerHTML)];
        // for(let j = 0; j < nounSgMeaning.length; j++) {
       nounSgMeaning[i].innerHTML = `a lot of ${pluralMeaning}`;
        // }
        copyNum++;
    }
}

function inflectNounsGeneral() {
    let spanNoun = document.getElementsByClassName("general-noun");
    let spanGeneralAffix = document.getElementsByClassName("general-affix")
    if(numberSuffixOrPrefix === "suffix") {
        for(let i = 0; i < spanGeneralAffix.length; i++) {
            spanGeneralAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + generalAffix))}</i>`
        }
        for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let greaterGeneralInflected = root + generalAffix;
            spanNoun[i].innerHTML = spell(soundChange(greaterGeneralInflected));
        }
    } else if (numberSuffixOrPrefix === "prefix") {
        for(let i = 0; i < spanGeneralAffix.length; i++) {
            spanGeneralAffix[i].innerHTML = `prefix <i>${spell(soundChange(generalAffix + "A"))}-</i>`
        }
         for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let greaterGeneralInflected = generalAffix + root ;
            spanNoun[i].innerHTML = greaterGeneralInflected;
        }
    }
    //makes the noun's translation general - as plural nouns for the singular-plural-general number
    let copyNum = 4;
    let nounSgMeaning = document.getElementsByClassName("general-meaning");
    
    for(let i = 0; i < nounSgMeaning.length; i++) { 
        let pluralMeaning =  countNounArrayPlural[nounArray.indexOf(nounSgMeaning[i].innerHTML)];
       nounSgMeaning[i].innerHTML = `${pluralMeaning}`;
        copyNum++;
    }

}

//used specifically for the general number in the general-plural system
function inflectNounsGeneral1() {
    let spanNoun = document.getElementsByClassName("general1-noun");
    for(let i = 0; i < spanNoun.length; i++) {
        let root = spanNoun[i].innerHTML;
        spanNoun[i].innerHTML = root;
    }
    
    //makes the noun's translation general - as singular nouns for the general-plural number
    let copyNum1 = 4;
    let nounSgMeaning1 = document.getElementsByClassName("general1-meaning");
    
     for(let i = 0; i < nounSgMeaning1.length; i++) { 
       nounSgMeaning1[i].innerHTML = `${nounSgMeaning1[i].innerHTML}`;
        copyNum1++;
    }
}

function inflectNounsSingulative() {
    let spanNoun = document.getElementsByClassName("singulative-noun");
    let spanSingulativeAffix = document.getElementsByClassName("singulative-affix")
    if(numberSuffixOrPrefix === "suffix") {
        for(let i = 0; i < spanSingulativeAffix.length; i++) {
            spanSingulativeAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + singulativeAffix))}</i>`
        }
        for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let greaterSingulativeInflected = root + singulativeAffix;
            spanNoun[i].innerHTML = greaterSingulativeInflected;
        }
    } else if (numberSuffixOrPrefix === "prefix") {
        for(let i = 0; i < spanSingulativeAffix.length; i++) {
            spanSingulativeAffix[i].innerHTML = `prefix <i>${spell(soundChange(singulativeAffix + "A"))}-</i>`
        }
         for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let greaterSingulativeInflected = singulativeAffix + root ;
            spanNoun[i].innerHTML = greaterSingulativeInflected;
        }
    }
    //makes the noun's translation general - as plural nouns for the singular-plural-general number
    let copyNum = 4;
    let nounSgMeaning = document.getElementsByClassName("singulative-meaning");
    
    for(let i = 0; i < nounSgMeaning.length; i++) { 
       nounSgMeaning[i].innerHTML = `${nounSgMeaning[i].innerHTML}`;
        copyNum++;
    }

}

function inflectMassNounsSingulative() {
    let spanNoun = document.getElementsByClassName("singulative-mass-noun");
    let spanSingulativeAffix = document.getElementsByClassName("singulative-affix")
    if(numberSuffixOrPrefix === "suffix") {
        for(let i = 0; i < spanSingulativeAffix.length; i++) {
            spanSingulativeAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + singulativeAffix))}</i>`
        }
        for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let greaterSingulativeInflected = root + singulativeAffix;
            spanNoun[i].innerHTML = greaterSingulativeInflected;
        }
    } else if (numberSuffixOrPrefix === "prefix") {
        for(let i = 0; i < spanSingulativeAffix.length; i++) {
            spanSingulativeAffix[i].innerHTML = `prefix <i>${spell(soundChange(singulativeAffix + "A"))}-</i>`
        }
         for(let i = 0; i < spanNoun.length; i++) {
            let root = spanNoun[i].innerHTML;
            let greaterSingulativeInflected = singulativeAffix + root ;
            spanNoun[i].innerHTML = greaterSingulativeInflected;
        }
    }

    let copyNum = 4;
    let nounSgMeaning = document.getElementsByClassName("singulative-mass-meaning");
    for(let i = 0; i < nounSgMeaning.length; i++) { 
       nounSgMeaning[i].innerHTML = `${singulativeMassNounArray[massNounArray.indexOf(nounSgMeaning[i].innerHTML)]}`;
        copyNum++;
    }

}

function switchNounGenderMascFem(englishWord) {
    const newLi = document.createElement("li");
    let nounIndex = countNounArray.indexOf(englishWord);
    let bareRoot = generatedCountNouns[nounIndex];
    let mascNoun = "";
    let femNoun = "";
    if(markedSingularOrNot() && genderSuffixOrPrefix === "suffix" && numberSuffixOrPrefix === "suffix") {
        mascNoun = bareRoot + masculineAffix + singularAffix;
        femNoun = bareRoot + feminineAffix + singularAffix;
    } else if(markedSingularOrNot() && genderSuffixOrPrefix === "prefix" && numberSuffixOrPrefix === "suffix") {
        mascNoun = masculineAffix + bareRoot + singularAffix;
        femNoun = feminineAffix + bareRoot + singularAffix;
    } else if(markedSingularOrNot() && genderSuffixOrPrefix === "prefix" && numberSuffixOrPrefix === "prefix") {
        mascNoun = singularAffix + masculineAffix + bareRoot;
        femNoun = singularAffix + feminineAffix + bareRoot;
    }else if(markedSingularOrNot() && genderSuffixOrPrefix === "suffix" && numberSuffixOrPrefix === "prefix") {
        mascNoun = singularAffix + bareRoot + masculineAffix;
        femNoun = singularAffix + bareRoot + feminineAffix;
    }
    if(markedSingularOrNot() === false && genderSuffixOrPrefix === "suffix") {
        mascNoun = bareRoot + masculineAffix;
        femNoun = bareRoot + feminineAffix;
    } else if(markedSingularOrNot() === false  && genderSuffixOrPrefix === "prefix") {
        mascNoun = masculineAffix + bareRoot;
        femNoun = feminineAffix + bareRoot;
    } else if(markedSingularOrNot() === false  && genderSuffixOrPrefix === "prefix") {
        mascNoun = masculineAffix + bareRoot;
        femNoun = feminineAffix + bareRoot;
    }else if(markedSingularOrNot() === false  && genderSuffixOrPrefix === "suffix") {
        mascNoun = bareRoot + masculineAffix;
        femNoun = bareRoot + feminineAffix;
    }
    let spanMasc = document.createElement("span");
    let spanMascMeaning = document.createElement("span");
    spanMasc.style.fontStyle = "italic";
    spanMasc.innerHTML = spell(soundChange(mascNoun));
    spanMascMeaning.innerHTML = ` "${englishWord}" > `
    newLi.appendChild(spanMasc)
    newLi.appendChild(spanMascMeaning)
    let spanFem = document.createElement("span");
    let spanFemMeaning = document.createElement("span");
    spanFem.style.fontStyle = "italic";
    spanFem.innerHTML = spell(soundChange(femNoun));
    newLi.appendChild(spanFem);
    let femNounMeaning = "";
    //replaces the previously generated word with the new feminine form derived from the masculine
    if(englishWord === "bull") {
        femNounMeaning = "cow";
        generatedCountNouns[countNounArray.indexOf("cow")] = bareRoot;
    }
    if(englishWord === "horse") {
        femNounMeaning = "mare";
        generatedCountNouns[countNounArray.indexOf("mare")] = bareRoot;
    }
    if(englishWord === "pig") {
        femNounMeaning = "she-pig";
    }
    if(englishWord === "wolf") {
        femNounMeaning = "she-wolf";
    }
    if(englishWord === "rooster") {
        femNounMeaning = "chicken";
        generatedCountNouns[countNounArray.indexOf("chicken")] = bareRoot;
    }
    if(englishWord === "elk") {
        femNounMeaning = "elk doe";
    }
    if(englishWord === "dog") {
        femNounMeaning = "bitch";
    }
    if(englishWord === "ram") {
        femNounMeaning = "ewe";
        generatedCountNouns[countNounArray.indexOf("ewe")] = bareRoot;
    }
    spanFemMeaning.innerHTML = ` "${femNounMeaning}"`
    newLi.appendChild(spanFemMeaning)
    document.getElementById("masc-fem-gender-switch1").appendChild(newLi);
}

function switchNounGenderMascFemNeut(englishWord) {
    const newLi = document.createElement("li");
    let nounIndex = nounArray.indexOf(englishWord);
    let bareRoot = generatedCountNouns[nounIndex];
    let mascNoun = "";
    let femNoun = "";
    if(markedSingularOrNot() && genderSuffixOrPrefix === "suffix" && numberSuffixOrPrefix === "suffix") {
        mascNoun = bareRoot + masculineAffix + singularAffix;
        femNoun = bareRoot + feminineAffix + singularAffix;
    } else if(markedSingularOrNot() && genderSuffixOrPrefix === "prefix" && numberSuffixOrPrefix === "suffix") {
        mascNoun = masculineAffix + bareRoot + singularAffix;
        femNoun = feminineAffix + bareRoot + singularAffix;
    } else if(markedSingularOrNot() && genderSuffixOrPrefix === "prefix" && numberSuffixOrPrefix === "prefix") {
        mascNoun = singularAffix + masculineAffix + bareRoot;
        femNoun = singularAffix + feminineAffix + bareRoot;
    }else if(markedSingularOrNot() && genderSuffixOrPrefix === "suffix" && numberSuffixOrPrefix === "prefix") {
        mascNoun = singularAffix + bareRoot + masculineAffix;
        femNoun = singularAffix + bareRoot + feminineAffix;
    }
    if(markedSingularOrNot()  === false && genderSuffixOrPrefix === "suffix") {
        mascNoun = bareRoot + masculineAffix;
        femNoun = bareRoot + feminineAffix;
    } else if(markedSingularOrNot()  === false  && genderSuffixOrPrefix === "prefix") {
        mascNoun = masculineAffix + bareRoot;
        femNoun = feminineAffix + bareRoot;
    } else if(markedSingularOrNot()  === false  && genderSuffixOrPrefix === "prefix") {
        mascNoun = masculineAffix + bareRoot;
        femNoun = feminineAffix + bareRoot;
    }else if(markedSingularOrNot()  === false  && genderSuffixOrPrefix === "suffix") {
        mascNoun = bareRoot + masculineAffix;
        femNoun = bareRoot + feminineAffix;
    }
    
    let spanMasc = document.createElement("span");
    let spanMascMeaning = document.createElement("span");
    spanMasc.style.fontStyle = "italic";
    spanMasc.innerHTML = spell(soundChange(mascNoun));
    spanMascMeaning.innerHTML = ` "${englishWord}" > `
    newLi.appendChild(spanMasc)
    newLi.appendChild(spanMascMeaning)
    let spanFem = document.createElement("span");
    let spanFemMeaning = document.createElement("span");
    spanFem.style.fontStyle = "italic";
    spanFem.innerHTML = spell(soundChange(femNoun));
    newLi.appendChild(spanFem);
    let femNounMeaning = "";
    //replaces the previously generated word with the new feminine form derived from the masculine
    if(englishWord === "bull") {
        femNounMeaning = "cow";
        generatedCountNouns[countNounArray.indexOf("cow")] = bareRoot;
    }
    if(englishWord === "horse") {
        femNounMeaning = "mare";
        generatedCountNouns[countNounArray.indexOf("mare")] = bareRoot;
    }
    if(englishWord === "pig") {
        femNounMeaning = "she-pig";
    }
    if(englishWord === "wolf") {
        femNounMeaning = "she-wolf";
    }
    if(englishWord === "rooster") {
        femNounMeaning = "chicken";
        generatedCountNouns[countNounArray.indexOf("chicken")] = bareRoot;
    }
    if(englishWord === "elk") {
        femNounMeaning = "elk doe";
    }
    if(englishWord === "dog") {
        femNounMeaning = "bitch";
    }
    if(englishWord === "ram") {
        femNounMeaning = "ewe";
        generatedCountNouns[countNounArray.indexOf("ewe")] = bareRoot;
    }
    spanFemMeaning.innerHTML = ` "${femNounMeaning}"`
    newLi.appendChild(spanFemMeaning)
    document.getElementById("masc-fem-gender-switch2").appendChild(newLi);
}

function switchNounGenderHumanAnimal(englishWord) {
    const newLi = document.createElement("li");
    let nounIndex = nounArray.indexOf(englishWord);
    let bareRoot = generatedCountNouns[nounIndex];
    let animalNoun = "";
    let humanNoun = "";
    if(markedSingularOrNot() && genderSuffixOrPrefix === "suffix" && numberSuffixOrPrefix === "suffix") {
        animalNoun = bareRoot + animalAffix + singularAffix;
        humanNoun = bareRoot + humanAffix + singularAffix;
    } else if(markedSingularOrNot() && genderSuffixOrPrefix === "prefix" && numberSuffixOrPrefix === "suffix") {
        animalNoun = animalAffix + bareRoot + singularAffix;
        humanNoun = humanAffix + bareRoot + singularAffix;
    } else if(markedSingularOrNot() && genderSuffixOrPrefix === "prefix" && numberSuffixOrPrefix === "prefix") {
        animalNoun = singularAffix + animalAffix + bareRoot;
        humanNoun = singularAffix + humanAffix + bareRoot;
    }else if(markedSingularOrNot() && genderSuffixOrPrefix === "suffix" && numberSuffixOrPrefix === "prefix") {
        animalNoun = singularAffix + bareRoot + animalAffix;
        humanNoun = singularAffix + bareRoot + humanAffix;
    }
    if(markedSingularOrNot() === false && genderSuffixOrPrefix === "suffix" && numberSuffixOrPrefix === "suffix") {
        animalNoun = bareRoot + animalAffix;
        humanNoun = bareRoot + humanAffix;
    } else if(markedSingularOrNot() === false  && genderSuffixOrPrefix === "prefix" && numberSuffixOrPrefix === "suffix") {
        animalNoun = animalAffix + bareRoot;
        humanNoun = humanAffix + bareRoot;
    } else if(markedSingularOrNot() === false  && genderSuffixOrPrefix === "prefix" && numberSuffixOrPrefix === "prefix") {
        animalNoun = animalAffix + bareRoot;
        humanNoun = humanAffix + bareRoot;
    }else if(markedSingularOrNot() === false  && genderSuffixOrPrefix === "suffix" && numberSuffixOrPrefix === "prefix") {
        animalNoun = bareRoot + animalAffix;
        humanNoun = bareRoot + humanAffix;
    }
    
    let spanAnimal = document.createElement("span");
    let spanAnimalMeaning = document.createElement("span");
    spanAnimal.style.fontStyle = "italic";
    spanAnimal.innerHTML = spell(soundChange(animalNoun));
    spanAnimalMeaning.innerHTML = ` "${englishWord}" > `
    newLi.appendChild(spanAnimal)
    newLi.appendChild(spanAnimalMeaning)
    let spanHuman = document.createElement("span");
    let spanHumanMeaning = document.createElement("span");
    spanHuman.style.fontStyle = "italic";
    spanHuman.innerHTML = spell(soundChange(humanNoun));
    newLi.appendChild(spanHuman);
    let humanNounMeaning = "";
    //replaces the previously generated word with the new feminine form derived from the masculine
    if(englishWord === "cow") {
        humanNounMeaning = "cowherd";
        generatedCountNouns[countNounArray.indexOf("cowherd")] = bareRoot;
    }
    if(englishWord === "sheep") {
        humanNounMeaning = "shepherd";
    }
    if(englishWord === "horse") {
        humanNounMeaning = "horsegroom";
    }

    spanHumanMeaning.innerHTML = ` "${humanNounMeaning}"`
    newLi.appendChild(spanHumanMeaning)
    document.getElementById("human-animal-gender-switch").appendChild(newLi);
}

function AgglutinativeNouns() {
    selectNounsGender(animInan, animateArray, "anim");
    inflectNounsGender(animateAffix, "anim");
    selectNounsGender(animInan, inanimateArray, "inan");
    inflectNounsGender(inanimateAffix, "inan");

    selectNounsGender(mascFem, masculine1Array, "masculine1");
    inflectNounsGender(masculineAffix, "masculine1");
    selectNounsGender(mascFem, feminine1Array, "feminine1");
    inflectNounsGender(feminineAffix, "feminine1");

    selectNounsGender(mascFemNeut, masculine1Array, "masculine2");
    inflectNounsGender(masculineAffix, "masculine2");
    selectNounsGender(mascFemNeut, feminine1Array, "feminine2");
    inflectNounsGender(feminineAffix, "feminine2");
    selectNounsGender(mascFemNeut, neuterArray, "neuter");
    inflectNounsGender(neuterAffix, "neuter");

    selectNounsGender(humanAnimalInan, humanArray, "human");
    inflectNounsGender(humanAffix, "human");
    selectNounsGender(humanAnimalInan, animalArray, "animal");
    inflectNounsGender(animalAffix, "animal");
    selectNounsGender(humanAnimalInan, inanimateArray2, "secondinanimate");
    inflectNounsGender(inanimate2Affix, "secondinanimate");

    selectNounsGender(activePassive, activeArray, "active");
    inflectNounsGender(activeAffix, "active");
    selectNounsGender(activePassive, passiveArray, "passive");
    inflectNounsGender(passiveAffix, "passive");

    selectNounsGender(naturalArtificial, naturalArray, "natural");
    inflectNounsGender(naturalAffix, "natural");
    selectNounsGender(naturalArtificial, artificialArray, "artificial");
    inflectNounsGender(artificialAffix, "artificial");

    selectNounsGender(divineNonDivine, divineArray, "divine");
    inflectNounsGender(divineAffix, "divine");
    selectNounsGender(divineNonDivine, profaneArray, "profane");
    inflectNounsGender(profaneAffix, "profane");


    selectMassNounsGender(animInanMass, animateMassArray, "anim");
    inflectMassNounsGender(animateAffix, "anim");
    selectMassNounsGender(animInanMass, inanimateMassArray, "inan");
    inflectMassNounsGender(inanimateAffix, "inan");

    selectMassNounsGender(mascFem, masculine1MassArray, "masculine1");
    inflectMassNounsGender(masculineAffix, "masculine1");
    selectMassNounsGender(mascFem, feminine1MassArray, "feminine1");
    inflectMassNounsGender(feminineAffix, "feminine1");

    selectMassNounsGender(mascFemNeut, masculine1MassArray, "masculine2");
    inflectMassNounsGender(masculineAffix, "masculine2");
    selectMassNounsGender(mascFemNeut, feminine1MassArray, "feminine2");
    inflectMassNounsGender(feminineAffix, "feminine2");
    selectMassNounsGender(mascFemNeut, neuterMassArray, "neuter");
    inflectMassNounsGender(neuterAffix, "neuter");

    selectMassNounsGender(humanAnimalInan, humanMassArray, "human");
    inflectMassNounsGender(humanAffix, "human");
    selectMassNounsGender(humanAnimalInan, animalMassArray, "animal");
    inflectMassNounsGender(animalAffix, "animal");
    selectMassNounsGender(humanAnimalInan, inanimateMassArray2, "secondinanimate");
    inflectMassNounsGender(inanimate2Affix, "secondinanimate");

    selectMassNounsGender(activePassive, activeMassArray, "active");
    inflectMassNounsGender(activeAffix, "active");
    selectMassNounsGender(activePassive, passiveMassArray, "passive");
    inflectMassNounsGender(passiveAffix, "passive");

    selectMassNounsGender(naturalArtificial, naturalMassArray, "natural");
    inflectMassNounsGender(naturalAffix, "natural");
    selectMassNounsGender(naturalArtificial, artificialMassArray, "artificial");
    inflectMassNounsGender(artificialAffix, "artificial");

    selectMassNounsGender(divineNonDivine, divineMassArray, "divine");
    inflectMassNounsGender(divineAffix, "divine");
    selectMassNounsGender(divineNonDivine, profaneMassArray, "profane");
    inflectMassNounsGender(profaneAffix, "profane");



}

/**********CASE RELATED SECTION***********/

function chooseIfMarkedNominative() {
    if(Math.floor(Math.random() * 5) !== 4) {
        return true;
    } else {
        return false;
    }
}

function chooseIfMarkedSingular() {
    if(/*Math.floor(Math.random() * 5)*/4 !== 4) {
        return false;
    } else {
        return true;
    }
}

function chooseCases() {
    //there will be no cases if language is isolating
    if(chooseTypology() !== "isolating") {
        //decides if the language has cases or not
        if(Math.floor(Math.random() * 2) !== 0) {
            const randomNum = Math.floor(Math.random() * 8);
            document.getElementById("agglutinative-case").style.display = "block";
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
        } else {
            document.getElementById("agglutinative-case").style.display = "none";
        }
    }
}

function explainCases() {
    if(chosenNounCases.length > 0) {
        const listOfCases = [];
        chosenNounCases.forEach((element) => listOfCases.push(element));
        listOfCases.pop()
        listOfCases.push(` and ${chosenNounCases[chosenNounCases.length -1]}`)
        let listOfCasesString =  listOfCases.join(", ")

        document.getElementById("chosen-noun-case-length").innerHTML = chosenNounCases.length;
        document.getElementById("list-of-cases-agglutinative").innerHTML = listOfCasesString;

        if(chosenNounCases.includes("Nominative")) {
            document.getElementById("nominative-case-agglutinative").style.display = "block";
        } else {
            document.getElementById("nominative-case-agglutinative").style.display = "none";
        }
        if(chosenNounCases.includes("Accusative")) {
            document.getElementById("accusative-case-agglutinative").style.display = "block";
            let accusative = document.getElementsByClassName("accusative-affix");
            for(let i = 0; i < accusative.length; i++) {
                if(caseSuffixOrPrefix === "suffix") {
                accusative[i].innerHTML = `suffix <i>-${spell(soundChange(accusativeAffix +  "A"))}</i>`;
                } else if(caseSuffixOrPrefix === "prefix") {
                accusative[i].innerHTML = `prefix <i>${spell(soundChange("X" + accusativeAffix))}-</i>`;
                }
            }
        } else {
            document.getElementById("accusative-case-agglutinative").style.display = "none";
        }
        if(chosenNounCases.includes("Genitive")) {
            document.getElementById("genitive-case-agglutinative").style.display = "block";
            let genitive = document.getElementsByClassName("genitive-affix");
            for(let i = 0; i < genitive.length; i++) {
                if(caseSuffixOrPrefix === "suffix") {
                genitive[i].innerHTML = `suffix <i>-${spell(soundChange(genitiveAffix +  "A"))}</i>`;
                } else if(caseSuffixOrPrefix === "prefix") {
                genitive[i].innerHTML = `prefix <i>${spell(soundChange("X" + genitiveAffix))}-</i>`;
                }
            }
        } else {
            document.getElementById("genitive-case-agglutinative").style.display = "none";
        }
        if(chosenNounCases.includes("Dative")) {
            document.getElementById("dative-case-agglutinative").style.display = "block";
            let dative = document.getElementsByClassName("dative-affix");
            for(let i = 0; i < dative.length; i++) {
                if(caseSuffixOrPrefix === "suffix") {
                dative[i].innerHTML = `suffix <i>-${spell(soundChange(dativeAffix +  "A"))}</i>`;
                } else if(caseSuffixOrPrefix === "prefix") {
                dative[i].innerHTML = `prefix <i>${spell(soundChange("X" + dativeAffix))}-</i>`;
                }
            }
        } else {
            document.getElementById("dative-case-agglutinative").style.display = "none";
        }
        if(chosenNounCases.includes("Ablative")) {
            document.getElementById("ablative-case-agglutinative").style.display = "block";
            let ablative = document.getElementsByClassName("ablative-affix");
            for(let i = 0; i < ablative.length; i++) {
                if(caseSuffixOrPrefix === "suffix") {
                ablative[i].innerHTML = `suffix <i>-${spell(soundChange(ablativeAffix +  "A"))}</i>`;
                } else if(caseSuffixOrPrefix === "prefix") {
                ablative[i].innerHTML = `prefix <i>${spell(soundChange("X" + ablativeAffix))}-</i>`;
                }
            }
        } else {
            document.getElementById("ablative-case-agglutinative").style.display = "none";
        }
        if(chosenNounCases.includes("Locative")) {
            document.getElementById("locative-case-agglutinative").style.display = "block";
            let locative = document.getElementsByClassName("locative-affix");
            for(let i = 0; i < locative.length; i++) {
                if(caseSuffixOrPrefix === "suffix") {
                locative[i].innerHTML = `suffix <i>-${spell(soundChange(locativeAffix +  "A"))}</i>`;
                } else if(caseSuffixOrPrefix === "prefix") {
                locative[i].innerHTML = `prefix <i>${spell(soundChange("X" +locativeAffix))}-</i>`;
                }
            }
        } else {
            document.getElementById("locative-case-agglutinative").style.display = "none";
        }
        if(chosenNounCases.includes("Inessive")) {
            document.getElementById("inessive-case-agglutinative").style.display = "block";
            let inessive = document.getElementsByClassName("inessive-affix");
            for(let i = 0; i < inessive.length; i++) {
                if(caseSuffixOrPrefix === "suffix") {
                inessive[i].innerHTML = `suffix <i>-${spell(soundChange(inessiveAffix +  "A"))}</i>`;
                } else if(caseSuffixOrPrefix === "prefix") {
                inessive[i].innerHTML = `prefix <i>${spell(soundChange("X" + inessiveAffix))}-</i>`;
                }
            }
        } else {
            document.getElementById("inessive-case-agglutinative").style.display = "none";
        }
        if(chosenNounCases.includes("Delative")) {
            document.getElementById("delative-case-agglutinative").style.display = "block";
            let delative = document.getElementsByClassName("delative-affix");
            for(let i = 0; i < delative.length; i++) {
                if(caseSuffixOrPrefix === "suffix") {
                delative[i].innerHTML = `suffix <i>-${spell(soundChange(delativeAffix +  "A"))}</i>`;
                } else if(caseSuffixOrPrefix === "prefix") {
                delative[i].innerHTML = `prefix <i>${spell(soundChange("X" + delativeAffix))}-</i>`;
                }
            }
        } else {
            document.getElementById("delative-case-agglutinative").style.display = "none";
        }
        if(chosenNounCases.includes("Allative")) {
            document.getElementById("allative-case-agglutinative").style.display = "block";
            let allative = document.getElementsByClassName("allative-affix");
            for(let i = 0; i < allative.length; i++) {
                if(caseSuffixOrPrefix === "suffix") {
                allative[i].innerHTML = `suffix <i>-${spell(soundChange(allativeAffix +  "A"))}</i>`;
                } else if(caseSuffixOrPrefix === "prefix") {
                allative[i].innerHTML = `prefix <i>${spell(soundChange("X" + allativeAffix))}-</i>`;
                }
            }
        } else {
            document.getElementById("allative-case-agglutinative").style.display = "none";
        }
        if(chosenNounCases.includes("Instrumental")) {
            document.getElementById("instrumental-case-agglutinative").style.display = "block";
            let instrumental = document.getElementsByClassName("instrumental-affix");
            for(let i = 0; i < instrumental.length; i++) {
                if(caseSuffixOrPrefix === "suffix") {
                instrumental[i].innerHTML = `suffix <i>-${spell(soundChange(instrumentalAffix +  "A"))}</i>`;
                } else if(caseSuffixOrPrefix === "prefix") {
                instrumental[i].innerHTML = `prefix <i>${spell(soundChange("X" + instrumentalAffix))}-</i>`;
                }
            }
        } else {
            document.getElementById("instrumental-case-agglutinative").style.display = "none";
        }

    }
}

function applySoundChangesAndOrtho(element) {
    for(let i = 0; i <  element.length; i++) {
        element[i].innerHTML = spell(soundChange(element[i].innerHTML));
    }
}

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    selectSoundChanges()
    showGrammarAndDictionary()
    clearGeneratedArrays();
    generateWords();
    sendGeneratedWordsToArray();
    reduceAmountOfLongVowels(generatedCountNouns);
    reduceAmountOfLongVowels(generatedMassNouns);
    reduceAmountOfLongVowels(generatedAdjectives);
    reduceAmountOfLongVowels(generatedTransitiveVerbs);
    reduceAmountOfLongVowels(generatedIntransitiveVerbs);
    reduceAmountOfLongVowels(generatedConjunctions);
    reduceAmountOfLongVowels(generatedAdverbs);
    reduceAmountOfLongVowels(generatedAdpositions);
    reduceAmountOfLongVowels(generatedIntensifiers);
    makeSyllableArrayForAffixes();
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
    genderMarkedWithSuffixOrPrefix();
    numberMarkedWithSuffixOrPrefix();
    caseMarkedWithSuffixOrPrefix();
    fixAffixes();
    chooseIfMarkedNominative();
    randomNumMarkedSingular();
    chooseIfMarkedNominative();
    chooseIfMarkedSingular();
    randomNumForNounGender();
    randomNumForIsolatingGrammaticalNumbers();
    checkIfHeadInitialOrHeadFinal();
    chooseQuanitifers();
    createQuantifiers();
    randomNumForAgglutinativeGrammaticalNumbers();
    inflectGenderlessNouns();
    inflectGenderlessMassNouns();
    switchNounGenderMascFem("bull");
    switchNounGenderMascFem("horse");
    switchNounGenderMascFem("pig");
    switchNounGenderMascFem("wolf");
    switchNounGenderMascFem("rooster");
    switchNounGenderMascFem("elk");
    switchNounGenderMascFem("dog");
    switchNounGenderMascFem("ram");
    switchNounGenderMascFemNeut("bull");
    switchNounGenderMascFemNeut("horse");
    switchNounGenderMascFemNeut("pig");
    switchNounGenderMascFemNeut("wolf");
    switchNounGenderMascFemNeut("rooster");
    switchNounGenderMascFemNeut("elk");
    switchNounGenderMascFemNeut("dog");
    switchNounGenderMascFemNeut("ram");
    switchNounGenderHumanAnimal("cow");
    switchNounGenderHumanAnimal("sheep");
    switchNounGenderHumanAnimal("horse");
    AgglutinativeNouns();
    inflectNounsPlural();
    inflectMassNounsPlural();
    inflectNounsSingular();
    inflectNounsDual();
    inflectNounsCollective();
    inflectNounsTrial();
    inflectNounsQuadral();
    inflectNounsGreaterPlural();
    inflectNounsGeneral();
    inflectNounsGeneral1();
    inflectNounsSingulative();
    inflectMassNounsSingulative();
    chooseCases();
    explainCases();
    applySoundChangesAndOrtho(document.getElementsByClassName("sound-change"));
    applySoundChangesAndOrtho(document.getElementsByClassName("singular-noun"));
    applySoundChangesAndOrtho(document.getElementsByClassName("plural-noun"));
    applySoundChangesAndOrtho(document.getElementsByClassName("singular-mass-noun"));
    applySoundChangesAndOrtho(document.getElementsByClassName("singulative-mass-noun"));
    applySoundChangesAndOrtho(document.getElementsByClassName("plural-mass-noun"));
    applySoundChangesAndOrtho(document.getElementsByClassName("dual-noun"));
    applySoundChangesAndOrtho(document.getElementsByClassName("collective-noun"));
    applySoundChangesAndOrtho(document.getElementsByClassName("trial-noun"));
    applySoundChangesAndOrtho(document.getElementsByClassName("quadral-noun"));
    applySoundChangesAndOrtho(document.getElementsByClassName("greater-plural-noun"));
    applySoundChangesAndOrtho(document.getElementsByClassName("general-noun"));
    applySoundChangesAndOrtho(document.getElementsByClassName("general1-noun"));
    applySoundChangesAndOrtho(document.getElementsByClassName("singulative-noun"));
   }

export {generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, genderNum, nounGenderArray, grammaticalNumAgglutinative as grammaticalNum, typologyNum, singularAffix, animateAffix, inanimateAffix, genderSuffixOrPrefix, masculineAffix, feminineAffix, neuterAffix, divineAffix, profaneAffix, divineArray, profaneArray, humanAffix, animalAffix, inanimate2Affix, activeAffix, passiveAffix, naturalAffix, artificialAffix, markedSingularOrNot, numberSuffixOrPrefix};