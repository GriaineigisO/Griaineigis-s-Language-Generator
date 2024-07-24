//@collapse

import { countNounArray, countNounArrayPlural, animInan, mascFem, mascFemNeut, humanAnimalInan, activePassive, naturalArtificial, shapeClassifierArray, animacyClassifierArray, shortGenericClassifierArray, divineNonDivine} from './englishWordArrays/Nouns/countNouns.js';
import {massNounArray, singulativeMassNounArray, pluralSingulativeMassNounArray, activePassiveMass, animInanMass, divineNonDivineMass, humanAnimalInanMass, mascFemMass,  mascFemNeutMass, naturalArtificialMass, animacyClassifierMassArray, shapeClassifierMassArray, shortGenericClassifierMassArray} from './englishWordArrays/Nouns/massNouns.js'
import {adjectiveArray, comparativeAdjectiveArray } from './englishWordArrays/Adjectives/englishAdjectives.js';
import {intransitiveVerbArray, intransitiveVerb3SArray, intransitiveVerbPastArray} from './englishWordArrays/Verbs/englishIntransitiveVerbs.js';
import {transitiveVerbArray, transitiveVerb3SArray, transitiveVerbPastArray} from './englishWordArrays/Verbs/englishTransitiveVerbs.js';
import conjunctionArray from './englishWordArrays/conjunctions.js'
import adverbArray from './englishWordArrays/adverbs.js'
import adpositionArray from './englishWordArrays/adpositions.js';
import intensifierArray from './englishWordArrays/intensifier.js';
import nounCases from './allPossibleNounCases.js'

import {smallQuantifiersArray, middingQuantifierArray, bigQuantifierArray, opinionQuantifierArray} from './englishWordArrays/quantifierArray.js';

import {addedVowels, addedConsonants, soundChange, voiced, chosenSoundChanges, checkIfWordFinalConsonantsArePossible, wordFinalDevoicingTrueOrFalse,selectSoundChanges, resonants, plosives, randomNumForlenitionofPlosivebeforeOtherPlosive, lenitionFromPlosives1, lenitionFromPlosives2, nonHighVowels, randomNumForWordInitialPlosiveClusters, clearPreviousOutput} from './soundchange.js'
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
let longAndSlenderArray = [];
let shortAndWideArray = [];
let roundArray = [];
let pointedArray = [];
let flatArray = [];
let shapelessArray = [];
let shapelessMassArray = [];
let exampleArray = [];
let allGeneratedWordsArray = [];
let manArray = [];
let womanArray = [];
let childArray = [];
let wildAnimalArray = [];
let meatArray = [];
let furArray = [];
let labourArray = [];
let milkArray = [];
let edibleArray = [];
let inedibleArray = [];
let humanClassifierArray = [];
let treeClassifierArray = [];
let grassClassifierArray = [];
let longAndSlenderMassArray = [];
let shortAndWideMassArray = [];
let roundMassArray = [];
let pointedMassArray = [];
let flatMassArray = [];
let exampleMassArray = [];
let allGeneratedWordsMassArray = [];
let manMassArray = [];
let womanMassArray = [];
let childMassArray = [];
let wildAnimalMassArray = [];
let meatMassArray = [];
let furMassArray = [];
let labourMassArray = [];
let milkMassArray = [];
let edibleMassArray = [];
let inedibleMassArray = [];
let humanClassifierMassArray = [];
let treeClassifierMassArray = [];
let grassClassifierMassArray = [];
let flowerClassifierArray = [];
let flowerClassifierMassArray = [];
let landAnimalClassifierArray = [];
let landAnimalClassifierMassArray = [];
let waterAnimalClassifierArray = [];
let waterAnimalClassifierMassArray = [];
let flyingAnimalClassifierMassArray = [];
let flyingAnimalClassifierArray = [];
let wordClassifierArray = [];
let wordClassifierMassArray = [];
let toolClassifierArray = [];
let toolClassifierMassArray = [];
let naturalInanimateClassifierArray = [];
let naturalInanimateClassifierMassArray = [];
let liquidClassifierArray = [];
let liquidClassifierMassArray = [];
let chosenClassifiers = [];


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
let nominativeAffix = "";
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
let longAndSlenderClassifier = "";
let shortAndWideClassifier = "";
let roundClassifier = "";
let pointedClassifier = "";
let flatClassifier = "";
let shapelessClassifier = "";
let manClassifier = "";
let womanClassifier = "";
let childClassifier = "";
let wildAnimalClassifier = "";
let meatClassifier = "";
let furClassifier = "";
let labourClassifier = "";
let milkClassifier = "";
let edibleClassifier = "";
let inedibleClassifier = "";
let humanClassifier = "";
let treeClassifier = "";
let grassClassifier = "";
let flowerClassifier = "";
let landAnimalClassifier = "";
let waterAnimalClassifier = "";
let flyingAnimalClassifier = "";
let wordClassifier = "";
let toolClassifier = "";
let naturalInanimateClassifier = "";
let liquidClassifier = "";
let protrudingClassifier = "";
let gatheringClassifier = "";
let smallRoundClassifier = "";
let smallFlatClassifier = "";
let buildingClassifier = "";
let songClassifier = "";
let sliceClassifier = "";
let entranceClassifier = "";
let domesticAnimalClassifier =  "";
let longNonRigidClassifier =  "";
let longRigidClassifier = "";
let broadClassifier = "";
let mentalClassifier = "";
let violenceClassifier = "";
let loveClassifier = "";
let reciprocalClassifier = "";
let movementClassifier = "";
let protrusionClassifier = "";
let intrusionClassifier = "";
let enclosedClassifier = "";
let piercingClassifier = "";
let percussiveClassifier = "";
let instanceClassifier = "";
let completedClassifier = "";

let allPossibleVowels = ["a", "e", "i", "o", "u", "æ", "ɐ", "ɑ", "ə", "ɵ", "ɘ", "ɛ", "ɜ", "ɞ", "ɪ", "ɨ", "ɔ", "ɒ", "œ", "ø", "ʌ", "ʉ", "ɯ", "ɤ", "y", "ʏ"]

let allPossibleConsonants = ["m", "n", "ŋ", "ɲ", "ɳ", "p", "ʰp", "pʰ", "b", "bʰ", "t", "tʰ", "ʰt", "ʈ", "d", "dʰ", "ɖ", "k", "ʰk", "kʰ", "g", "gʰ", "q", "ɢ", "ʔ", "ʕ", "β", "ɸ", "f", "v", "r", "l", "s", "ʃ", "ʂ", "z", "ʐ", "ʒ", "tʃ", "dʒ", "ʁ", "χ", "w", "j", "ʋ", "h", "ħ", "ɦ", "ɣ", "x", "ts", "θ", "ð", "ʝ", "ç", "c", "ɟ", "ʟ", "ɮ", "ɬ", "ʎ", "tʲ", "dʲ", "kʲ", "gʲ", "pʲ", "bʲ", "qʲ", "ɢʲ", "sʲ", "zʲ", "vʲ", "fʲ", "lʲ", "rʲ", "mʲ", "nʲ", "hʲ", "xʲ", "ʒʲ", "θʲ", "ðʲ", "ʃʲ", "ŋʲ", "tʰʲ", "qʰʲ", "tʷ", "dʷ", "cʷ", "ɟʷ", "kʷ", "gʷ", "qʷ", "ɢʷ", "sʷ", "zʷ", "ʃʷ", "ʒʷ", "hʷ", "xʷ", "ɣʷ", "χʷ", "ʁʷ", "rʷ", "lʷ", "tʷʰ", "dʷʰ", "cʰʷ", "ɟʷʰ", "kʷʰ", "gʷʰ", "qʷʰ", "ɢʷʰ", "sʷʰ", "zʷʰ", "ʃʷʰ", "ʒʷʰ", "hʷ", "xʷʰ", "ɣʷʰ", "χʷʰ", "ʁʷʰ", "rʷʰ", "lʷʰ"]

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
    longAndSlenderArray = [];
    shortAndWideArray = [];
    roundArray = [];
    pointedArray = [];
    flatArray = [];
    shapelessArray = [];
    shapelessMassArray = [];
    exampleArray = [];
    allGeneratedWordsArray = [];
    manArray = [];
    womanArray = [];
    childArray = [];
    wildAnimalArray = [];
    meatArray = [];
    furArray = [];
    labourArray = [];
    milkArray = [];
    edibleArray = [];
    inedibleArray = [];
    humanClassifierArray = [];
    treeClassifierArray = [];
    grassClassifierArray = [];
    longAndSlenderMassArray = [];
    shortAndWideMassArray = [];
    roundMassArray = [];
    pointedMassArray = [];
    flatMassArray = [];
    exampleMassArray = [];
    allGeneratedWordsMassArray = [];
    manMassArray = [];
    womanMassArray = [];
    childMassArray = [];
    wildAnimalMassArray = [];
    meatMassArray = [];
    furMassArray = [];
    labourMassArray = [];
    milkMassArray = [];
    edibleMassArray = [];
    inedibleMassArray = [];
    humanClassifierMassArray = [];
    treeClassifierMassArray = [];
    grassClassifierMassArray = [];
    flowerClassifierArray = [];
    landAnimalClassifierArray = [];
    landAnimalClassifierMassArray = [];
    waterAnimalClassifierArray = [];
    waterAnimalClassifierMassArray = [];
    flyingAnimalClassifierMassArray = [];
    flyingAnimalClassifierArray = [];
    wordClassifierArray = [];
    wordClassifierMassArray = [];
    toolClassifierArray = [];
    toolClassifierMassArray = [];
    naturalInanimateClassifierArray = [];
    naturalInanimateClassifierMassArray = [];
    liquidClassifierArray = [];
    liquidClassifierMassArray = [];
    chosenClassifiers = [];

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
    longAndSlenderClassifier = "";
    shortAndWideClassifier = "";
    roundClassifier = "";
    pointedClassifier = "";
    flatClassifier = "";
    shapelessClassifier = "";
    manClassifier = "";
    womanClassifier = "";
    childClassifier = "";
    wildAnimalClassifier = "";
    meatClassifier = "";
    furClassifier = "";
    labourClassifier = "";
    milkClassifier = "";
    edibleClassifier = "";
    inedibleClassifier = "";
    humanClassifier = "";
    treeClassifier = "";
    grassClassifier = "";
    flowerClassifier = "";
    landAnimalClassifier = "";
    waterAnimalClassifier = "";
    flyingAnimalClassifier = "";
    wordClassifier = "";
    toolClassifier = "";
    naturalInanimateClassifier = "";
    liquidClassifier = "";

    document.getElementById("orthography").replaceChildren();
    document.getElementById("language-to-english").replaceChildren();
    document.getElementById("english-to-language").replaceChildren();
    document.getElementById("lenition-before-list").replaceChildren();
    document.getElementById("masc-fem-gender-switch1").replaceChildren();
    document.getElementById("masc-fem-gender-switch2").replaceChildren();
    document.getElementById("human-animal-gender-switch").replaceChildren();
    document.getElementById("quantifier-table-1").replaceChildren();
    document.getElementById("long-classifiers").replaceChildren();
    document.getElementById("measure-words").replaceChildren();
}

function showGrammarAndDictionary() {
    document.getElementById("grammar").style.display = "block";
    document.getElementById("dictionary").style.display = "block";
}

//if the generateWord() function below produces a homophone, this function is invoked within removeHomophones() to replace that homophone with a newly generated word
function generateSecondWord() {
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

//As far too many homophones were made with some regularity, this function replaces most homophones with new words
function removeHomophones(word) {
    //1% of homophones will be allowed to remain
    if(Math.floor(Math.random() * 100) !== 1) {
        if(allGeneratedWordsArray.includes(word)) {
            //console.log(`homophone found! - ${word} is the same as ${allGeneratedWordsArray[allGeneratedWordsArray.indexOf(word)]}`)
            let replacement = generateSecondWord()
            //console.log(`replaced with ${replacement}`)
            return replacement;
        } else {
            allGeneratedWordsArray.push(word);
            return word;
        }
    } else {
        return word
    }
}

//generates the words by giving each one a random amount of syllables, and choosing each syllable to be structured according to a randomly chosen syllable structure from the language's chosen options of syllable structures.
function generateWords() {
    let resonants = selectRhotics().concat(selectLateralApproximants())
    let newSyllableArray = [];
    let newWord = "";

    let numberOfSyllables = 0;
    //if an inventory is small, then it needs more syllables per word to prevent large amounts of homophones
    let numOfAllSounds = vowels.length + consonants.length
    if(numOfAllSounds < 20 ) {
        numberOfSyllables = Math.floor(Math.random() * (4 - 2) + 2);
    } else if (numOfAllSounds < 15 ) {
        numberOfSyllables = Math.floor(Math.random() * (5 - 3) + 3);
    } else if (numOfAllSounds <= 10 ) {
        numberOfSyllables = Math.floor(Math.random() * (6 - 4) + 4);
    }else {
        numberOfSyllables = Math.floor(Math.random() * (4 - 2) + 2);
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
    //let randomNum = Math.floor(Math.random() * 100);
	//if the generated word is a homophone with an already existing word
    //The solution to prevent homophones didn't work and threw errors, try another solution
	// if (allGeneratedWordsArray.includes(newWord)) {
	// 	if (randomNum === 6) {
	// 		//homophone accepted
    //         allGeneratedWordsArray.push(newWord);
	// 		return newWord;
	// 	} else {
    //         //homophone rejected and replaced with a new word
    //         let newWordReplacement = generateSecondWord();
    //         allGeneratedWordsArray.push(newWordReplacement);
    //         return newWordReplacement;		
	// 	}
	// } else {
    //     allGeneratedWordsArray.push(newWord);
	// 	return newWord;
	// }

    return removeHomophones(newWord);
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
    shortAndWideClassifier = generateWords();
    roundClassifier = generateWords();
    pointedClassifier = generateWords();
    flatClassifier = generateWords();
    shapelessClassifier = generateWords();
    protrudingClassifier = generateWords();
    gatheringClassifier = generateWords();
    smallRoundClassifier = generateWords();
    smallRoundClassifier = generateWords();
    smallFlatClassifier = generateWords();
    buildingClassifier = generateWords();
    songClassifier = generateWords();
    sliceClassifier = generateWords();
    entranceClassifier = generateWords();
    domesticAnimalClassifier =  generateWords();
    longNonRigidClassifier = generateWords();
    longRigidClassifier = generateWords();
    broadClassifier = generateWords();
    mentalClassifier = generateWords();
    violenceClassifier = generateWords();
    loveClassifier = generateWords();
    reciprocalClassifier = generateWords();
    movementClassifier = generateWords();
    protrusionClassifier = generateWords();
    intrusionClassifier = generateWords();
    enclosedClassifier = generateWords();
    piercingClassifier = generateWords();
    percussiveClassifier = generateWords();
    wordThere = generateWords();
    wordHere = generateWords();
    firstPersonPronoun = generateWords();
    secondPersonPronoun = generateWords();   
}

//This is simply a placeholder until I have created derivational methodfs suitable to create a name with an actual etymology. Until then, a purely generated and meaningless name will suffice
let languageName = "";
function generateRandomNameForLanguage () {
    let languageNameSpan = document.getElementsByClassName("language-name");
    let newName = spell(soundChange(generateWords()));
    for(let i = 0; i < languageNameSpan.length; i++) {
        languageNameSpan[i].innerHTML = newName;
    }
    languageName = newName;
}

//Since almost every word had had at least one long vowel, the below function serves to randomly shorten vowels in words to bring the number of long vowels down to a more agreeable number.
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
    nominativeAffix = generateAffixes();
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
        if(letter[i+1] === "ʲ") {
            letter[i] = letter[i] + letter[i+1];
        }
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
    //WordFinalDevoicingExample();
    nonHighNonInitialVowelsBecomeAExample();
    lowerWordFinalHighVowelsExample();
    noResonantBeforeConsonant();
    lenitePlosivesBeforeOtherPlosives();
    noNasalsAfterConsonants();

}

// function WordFinalDevoicingExample() {
//     let exampleNoun = "";
//     let exampleNoun2 = ""
//     let compoundNoun = ""
//     let randomNounMeaning = "";
//     let randomNounMeaning2 = ""
//     let possibleExamples = [];
//     let randomNum = Math.floor(Math.random() * generatedCountNouns.length)
//     if(voiced.length === 0) {
//         //console.log("no voicing!")
//         document.getElementById("wordFinalDevoicing").style.display = "none"; 
//     }
//     for(let i = 0; i < generatedCountNouns.length; i++) {
//         let newArray = Array.from(generatedCountNouns[i]);
//         if(voiced.includes(newArray[newArray.length - 1])) {
//             let joinedString = newArray.join("")
//             possibleExamples.push(joinedString)
//         }  
//     }
//     if(possibleExamples.length === 0) {
//         document.getElementById("wordFinalDevoicing").style.display = "none"; 
//     } else {
//         exampleNoun = possibleExamples[Math.floor(Math.random() * possibleExamples.length)];
//         exampleNoun2 =  generatedCountNouns[randomNum];
//         compoundNoun = exampleNoun + exampleNoun2;
//         randomNounMeaning = countNounArray[generatedCountNouns.indexOf(exampleNoun)];
//         randomNounMeaning2 = countNounArray[randomNum] 
//     }
            
//     document.getElementById("word-final-devoicing-examplenoun").innerHTML = spell(soundChange(exampleNoun))
//     document.getElementById("word-final-devoicing-examplenounmeaning").innerHTML = randomNounMeaning;
//     document.getElementById("word-final-devoicing-example-compound").innerHTML = spell(soundChange(compoundNoun));
//     document.getElementById("word-final-devoicing-example-compound-meaning").innerHTML = `${randomNounMeaning}-${randomNounMeaning2}` 
// }

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
            let randomNounMeaningForCompound = countNounArray[generatedCountNouns.indexOf(randomNounForCompound)]
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
    typologyNum = 2//Math.floor(Math.random() * 3) //change to 3 once fusional is added
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
    //if the language is isolating, then by default there will be no gender
    if(typologyNum === 0) {
        genderNum = 0;
    } else {
        genderNum = 0//Math.floor(Math.random() * 16);
    }
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
    let beforeOrAfter = document.getElementsByClassName("before-or-after-numbers");
    if(wordOrderNum === 0 || wordOrderNum === 1 || wordOrderNum === 5 ) {
        for(let i = 0; i < beforeOrAfter.length; i++) {
            beforeOrAfter[i].innerHTML = "after";
        }
        return "headFirst";
    } else if (wordOrderNum === 2 ||wordOrderNum === 3 || wordOrderNum === 4) {
        for(let i = 0; i < beforeOrAfter.length; i++) {
            beforeOrAfter[i].innerHTML = "before";
        }
        return "headFinal"
    };
}

/**ISOLATING NOUNS****/
let grammaticalNumIsolating = 0;
function randomNumForIsolatingGrammaticalNumbers() {
    grammaticalNumIsolating = Math.floor(Math.random() * 16)
    if(grammaticalNumIsolating < 5) {
        document.getElementById("isolating-quanitifers-only").style.display = "block";
        document.getElementById("isolating-quanitifers-and-classifiers-purely-numerical").style.display = "none";
        document.getElementById("isolating-sg-pl").style.display = "none";
        document.getElementById("quantifiers2").style.display = "none";
    } 
    if(grammaticalNumIsolating >= 5 && grammaticalNumIsolating < 10) {
        document.getElementById("isolating-quanitifers-and-classifiers-purely-numerical").style.display = "block";
        document.getElementById("isolating-quanitifers-only").style.display = "none";
        document.getElementById("isolating-sg-pl").style.display = "none";
        document.getElementById("quantifiers2").style.display = "block";
    }
    if(grammaticalNumIsolating >= 10 && grammaticalNumIsolating < 15) {
        document.getElementById("isolating-sg-pl").style.display = "block";
        document.getElementById("isolating-quanitifers-only").style.display = "none";
        document.getElementById("isolating-quanitifers-and-classifiers-purely-numerical").style.display = "none";
        document.getElementById("quantifiers2").style.display = "block";
        
    }
}

let randomClassifierNum = 0;
function chooseClassifierSystem() {
    if(typologyNum === 0 && grammaticalNumIsolating >=5 && grammaticalNumIsolating < 10 ) {
        randomClassifierNum = Math.floor(Math.random() * 4);
        if(randomClassifierNum === 0) {
            document.getElementById("classifier-text").innerHTML = `Nouns are divided into several categories based on their shape.`
            document.getElementById("shape-based-classifier-tables").style.display = "block";
            document.getElementById("animacy-based-classifier-tables").style.display = "none";
            document.getElementById("short-generic-based-classifier-tables").style.display = "none";
            document.getElementById("long-classifier-system").style.display = "none";
        } else if(randomClassifierNum === 1) {
            document.getElementById("classifier-text").innerHTML = `The categorization of nouns is focused on animacy, with nouns for living things having various categories while all non-living things are lumped into just two categories, edible and inedible.`
            document.getElementById("shape-based-classifier-tables").style.display = "none";
            document.getElementById("animacy-based-classifier-tables").style.display = "block";
            document.getElementById("short-generic-based-classifier-tables").style.display = "none";
            document.getElementById("long-classifier-system").style.display = "none";
        } else if(randomClassifierNum === 2) {
            document.getElementById("classifier-text").innerHTML = `Nouns are assigned classifiers based on which semantic category they fall into, based more on folk taxonomy than anything else.`
            document.getElementById("shape-based-classifier-tables").style.display = "none";
            document.getElementById("animacy-based-classifier-tables").style.display = "none";
            document.getElementById("short-generic-based-classifier-tables").style.display = "block";
            document.getElementById("long-classifier-system").style.display = "none";
        }  else if(randomClassifierNum === 3) {
            document.getElementById("classifier-text").innerHTML = `Often the most important form of categorisation is the shape of the object, though other, often secondary forms of categorization have developed.`
            document.getElementById("shape-based-classifier-tables").style.display = "none";
            document.getElementById("animacy-based-classifier-tables").style.display = "none";
            document.getElementById("short-generic-based-classifier-tables").style.display = "none";
            document.getElementById("long-classifier-system").style.display = "block";
        }

        let headFirstClassifierTable = document.getElementsByClassName("headFirst");
        let headFinalClassifierTable = document.getElementsByClassName("headFinal");
        if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
            for(let i = 0; i < headFirstClassifierTable.length; i++) {
                headFirstClassifierTable[i].style.display = "block";
                headFinalClassifierTable[i].style.display = "none";
            }
        } else {
        for(let i = 0; i < headFirstClassifierTable.length; i++) {
                headFirstClassifierTable[i].style.display = "none";
                headFinalClassifierTable[i].style.display = "block";
            } 
        }
    }
}

//assigns either a randomly generated word to be a classifier, or it chooses a relevant pre-existing noun to be used as a classifier. 
let randomNumForLongAndSlender = 0;
let randomNumForShortAndWide = 0;
let randomNumForRound = 0;
let randomNumForPointed = 0;
let randomNumForFlat = 0;
let randomNumForShapeless = 0;
function createShapeClassifiers() {
    if(typologyNum === 0) {
        //to count how many classifiers are derived from pre-existing words vs which are generated 
        let classifiersWithEtymology = 0;
        let longAndSlenderExample = "";
        let shortAndWideExample = "";
        let roundExample = "";
        let pointedExample = "";
        let flatExample = "";
        let shapelessExample = "";
        let classifierEtymologyArray = [];
        
        let longAndSlender = document.getElementsByClassName("long-and-slender");
        randomNumForLongAndSlender = Math.floor(Math.random() * 4);
        if(randomNumForLongAndSlender === 0) {
            longAndSlenderClassifier = generatedCountNouns[countNounArray.indexOf("branch")]
            classifiersWithEtymology++;
            longAndSlenderExample = `<i>${spell(soundChange(longAndSlenderClassifier))}</i> "branch"`;
            classifierEtymologyArray.push(longAndSlenderExample);
        } else if (randomNumForLongAndSlender === 1) {
            longAndSlenderClassifier = generatedCountNouns[countNounArray.indexOf("pole")]
            classifiersWithEtymology++;
            longAndSlenderExample = `<i>${spell(soundChange(longAndSlenderClassifier))}</i> "pole"`;
        classifierEtymologyArray.push(longAndSlenderExample);
        } else if (randomNumForLongAndSlender > 1) {
            longAndSlenderClassifier = generateWords();
            
        }
        for(let i = 0; i < longAndSlender.length; i++) {
            longAndSlender[i].innerHTML = spell(soundChange(longAndSlenderClassifier));
        }

        let shortAndWide = document.getElementsByClassName("short-and-wide");
        randomNumForShortAndWide = Math.floor(Math.random() * 4);
        if(randomNumForShortAndWide === 0) {
            shortAndWideClassifier = generatedCountNouns[countNounArray.indexOf("shoulder")]
            classifiersWithEtymology++;
            shortAndWideExample = `<i>${spell(soundChange(shortAndWideClassifier))}</i> "shoulder"`;
            classifierEtymologyArray.push(shortAndWideExample);
        } else if(randomNumForShortAndWide === 1) {
            shortAndWideClassifier = generatedCountNouns[countNounArray.indexOf("wedge")]
            classifiersWithEtymology++;
            shortAndWideExample = `<i>${spell(soundChange(shortAndWideClassifier))}</i> "wedge"`;
            classifierEtymologyArray.push(shortAndWideExample);
        } else if (randomNumForShortAndWide > 1) {
            shortAndWideClassifier = generateWords(); 
        }
        for(let i = 0; i < shortAndWide.length; i++) {
            shortAndWide[i].innerHTML = spell(soundChange(shortAndWideClassifier));
        }

        let round = document.getElementsByClassName("round");
        randomNumForRound = Math.floor(Math.random() * 5);
        if(randomNumForRound === 0) {
            roundClassifier = generatedCountNouns[countNounArray.indexOf("apple")]
            classifiersWithEtymology++;
            roundExample = `<i>${spell(soundChange(roundClassifier))}</i> "apple"`;
            classifierEtymologyArray.push(roundExample);
        } else if(randomNumForRound === 1) {
            roundClassifier = generatedCountNouns[countNounArray.indexOf("pebble")]
            classifiersWithEtymology++;
            roundExample = `<i>${spell(soundChange(roundClassifier))}</i> "pebble"`;
            classifierEtymologyArray.push(roundExample);
        }else if(randomNumForRound === 2) {
            roundClassifier = generatedCountNouns[countNounArray.indexOf("ball")]
            classifiersWithEtymology++;
            roundExample = `<i>${spell(soundChange(roundClassifier))}</i> "ball"`;
            classifierEtymologyArray.push(roundExample);
        } else if (randomNumForRound > 2) {
            roundClassifier = generateWords(); 
        }
        for(let i = 0; i < round.length; i++) {
            round[i].innerHTML = spell(soundChange(roundClassifier));
        }

        let pointed = document.getElementsByClassName("pointed");
        randomNumForPointed = Math.floor(Math.random() * 5);
        if(randomNumForPointed === 0) {
            pointedClassifier = generatedCountNouns[countNounArray.indexOf("arrow")]
            classifiersWithEtymology++;
            pointedExample = `<i>${spell(soundChange(pointedClassifier))}</i> "arrow"`;
            classifierEtymologyArray.push(pointedExample);
        } else if(randomNumForPointed === 1) {
            pointedClassifier = generatedCountNouns[countNounArray.indexOf("thorn")]
            classifiersWithEtymology++;
            pointedExample = `<i>${spell(soundChange(pointedClassifier))}</i> "thorn"`;
            classifierEtymologyArray.push(pointedExample);
        } else if(randomNumForPointed === 2) {
            pointedClassifier = generatedCountNouns[countNounArray.indexOf("fork")]
            classifiersWithEtymology++;
            pointedExample = `<i>${spell(soundChange(pointedClassifier))}</i> "fork"`;
            classifierEtymologyArray.push(pointedExample);
        } else if (randomNumForPointed> 2) {
            pointedClassifier = generateWords(); 
        }
        for(let i = 0; i < pointed.length; i++) {
            pointed[i].innerHTML = spell(soundChange(pointedClassifier));
        }

        let flat = document.getElementsByClassName("flat");
        randomNumForFlat = Math.floor(Math.random() * 5);
        if(randomNumForFlat === 0) {
            flatClassifier = generatedCountNouns[countNounArray.indexOf("slab")]
            classifiersWithEtymology++;
            flatExample = `<i>${spell(soundChange(flatClassifier))}</i> "slab"`;
            classifierEtymologyArray.push(flatExample);
        } else if(randomNumForFlat === 1) {
            flatClassifier = generatedCountNouns[countNounArray.indexOf("face")]
            classifiersWithEtymology++;
            flatExample = `<i>${spell(soundChange(flatClassifier))}</i> "face"`;
            classifierEtymologyArray.push(flatExample);
        } else if (randomNumForFlat > 1) {
            flatClassifier = generateWords(); 
        }
        for(let i = 0; i < flat.length; i++) {
            flat[i].innerHTML = spell(soundChange(flatClassifier));
        }

        let shapeless = document.getElementsByClassName("shapeless");
        randomNumForShapeless = Math.floor(Math.random() * 4);
        if(randomNumForShapeless === 0) {
            shapelessClassifier = generatedMassNouns[massNounArray.indexOf("air")]
            classifiersWithEtymology++;
            shapelessExample = `<i>${spell(soundChange(shapelessClassifier))}</i> "air"`;
            classifierEtymologyArray.push(shapelessExample);
        } else if (randomNumForShapeless > 0) {
            shapelessClassifier = generateWords(); 
        }
        for(let i = 0; i < shapeless.length; i++) {
            shapeless[i].innerHTML = spell(soundChange(shapelessClassifier));
        }

        if(classifiersWithEtymology > 0) {
            document.getElementById("shape-classifiers-etymology").style.display = "block";
        } else {
            document.getElementById("shape-classifiers-etymology").style.display = "none";
        }

        const listOfSpans = [];
        if(classifierEtymologyArray.length === 1) {
            let joinedString = classifierEtymologyArray.join();
            document.getElementById("shape-classifiers-etymology-examples").innerHTML = `${joinedString}.`;
        } else {
        classifierEtymologyArray.forEach((element) => listOfSpans.push(element));
            listOfSpans.pop()
            listOfSpans.push(` and ${classifierEtymologyArray[classifierEtymologyArray.length -1]}.`)
            let listOfSpansString =  listOfSpans.join(", ")
            document.getElementById("shape-classifiers-etymology-examples").innerHTML = listOfSpansString;
        }
    }
}

let randomNumForMan = 0;
let randomNumForWoman = 0;
let randomNumForChild = 0;
let randomNumForWildAnimal = 0;
let randomNumForMeat = 0;
let randomNumForFur = 0;
let randomNumForLabour = 0;
let randomNumForMilk = 0;
let randomNumForEdible = 0;
let randomNumForInEdible = 0;
function createAnimacyClassifiers() {
    if(typologyNum === 0) {
        //to count how many classifiers are derived from pre-existing words vs which are generated 
        let classifiersWithEtymology = 0;
        let manExample = "";
        let womanExample = "";
        let childExample = "";
        let wildAnimalExample = "";
        let meatExample = "";
        let furExample = "";
        let labourExample = "";
        let milkExample = "";
        let edibleExample = "";
        let inedibleExample = "";
        let classifierEtymologyArray = [];
        
        let man = document.getElementsByClassName("man");
        randomNumForMan = Math.floor(Math.random() * 2);
        if(randomNumForMan === 0) {
            manClassifier = generatedCountNouns[countNounArray.indexOf("man")]
            classifiersWithEtymology++;
            manExample = `<i>${spell(soundChange(manClassifier))}</i> "man"`;
            classifierEtymologyArray.push(manExample);
        } else if (randomNumForMan === 1) {
            manClassifier = generateWords();
            
        }
        for(let i = 0; i < man.length; i++) {
            man[i].innerHTML = spell(soundChange(manClassifier));
        }

        let woman = document.getElementsByClassName("woman");
        randomNumForWoman = Math.floor(Math.random() * 2);
        if(randomNumForWoman === 0) {
            womanClassifier = generatedCountNouns[countNounArray.indexOf("woman")]
            classifiersWithEtymology++;
            womanExample = `<i>${spell(soundChange(womanClassifier))}</i> "woman"`;
            classifierEtymologyArray.push(womanExample);
        } else if (randomNumForWoman === 1) {
            womanClassifier = generateWords();
            
        }
        for(let i = 0; i < woman.length; i++) {
            woman[i].innerHTML = spell(soundChange(womanClassifier));
        }

        let child = document.getElementsByClassName("child");
        randomNumForChild = Math.floor(Math.random() * 2);
        if(randomNumForChild === 0) {
            childClassifier = generatedCountNouns[countNounArray.indexOf("child")]
            classifiersWithEtymology++;
            childExample = `<i>${spell(soundChange(childClassifier))}</i> "child"`;
            classifierEtymologyArray.push(childExample);
        } else if (randomNumForChild === 1) {
            childClassifier = generateWords();
        }
        for(let i = 0; i < child.length; i++) {
            child[i].innerHTML = spell(soundChange(childClassifier));
        }

        let wildAnimal = document.getElementsByClassName("wild-animal");
        randomNumForWildAnimal = Math.floor(Math.random() * 5);
        if(randomNumForWildAnimal === 0) {
            wildAnimalClassifier = generatedCountNouns[countNounArray.indexOf("wolf")]
            classifiersWithEtymology++;
            wildAnimalExample = `<i>${spell(soundChange(wildAnimalClassifier))}</i> "wolf"`;
            classifierEtymologyArray.push(wildAnimalExample);
        } else if(randomNumForWildAnimal === 1) {
            wildAnimalClassifier = generatedCountNouns[countNounArray.indexOf("bear")]
            classifiersWithEtymology++;
            wildAnimalExample = `<i>${spell(soundChange(wildAnimalClassifier))}</i> "bear"`;
            classifierEtymologyArray.push(wildAnimalExample);
        } else if (randomNumForWildAnimal > 1) {
            wildAnimalClassifier = generateWords();
        }
        for(let i = 0; i < wildAnimal.length; i++) {
            wildAnimal[i].innerHTML = spell(soundChange(wildAnimalClassifier));
        }

        let meat = document.getElementsByClassName("meat");
        randomNumForMeat = Math.floor(Math.random() * 2);
        if(randomNumForMeat === 0) {
            meatClassifier = generatedCountNouns[countNounArray.indexOf("goat")]
            classifiersWithEtymology++;
            meatExample = `<i>${spell(soundChange(meatClassifier))}</i> "goat"`;
            classifierEtymologyArray.push(meatExample);
        } else if (randomNumForMeat === 1) {
            meatClassifier = generateWords();
        }
        for(let i = 0; i < meat.length; i++) {
            meat[i].innerHTML = spell(soundChange(meatClassifier));
        }

        let fur = document.getElementsByClassName("fur");
        randomNumForFur = Math.floor(Math.random() * 5);
        if(randomNumForFur === 0) {
            furClassifier = generatedMassNouns[massNounArray.indexOf("skin")]
            classifiersWithEtymology++;
            furExample = `<i>${spell(soundChange(furClassifier))}</i> "skin"`;
            classifierEtymologyArray.push(furExample);
        } else if(randomNumForFur === 1) {
            furClassifier = generatedCountNouns[countNounArray.indexOf("sheep")]
            classifiersWithEtymology++;
            furExample = `<i>${spell(soundChange(furClassifier))}</i> "sheep"`;
            classifierEtymologyArray.push(furExample);
        } else if (randomNumForFur > 1) {
            furClassifier = generateWords();
        }
        for(let i = 0; i < fur.length; i++) {
            fur[i].innerHTML = spell(soundChange(furClassifier));
        }

        let labour = document.getElementsByClassName("labour");
        randomNumForLabour = Math.floor(Math.random() * 7);
        if(randomNumForLabour === 0) {
            labourClassifier = generatedMassNouns[massNounArray.indexOf("labour")]
            classifiersWithEtymology++;
            labourExample = `<i>${spell(soundChange(labourClassifier))}</i> "labour"`;
            classifierEtymologyArray.push(labourExample);
        } else if(randomNumForLabour === 1) {
            labourClassifier = generatedTransitiveVerbs[transitiveVerbArray.indexOf("push")]
            classifiersWithEtymology++;
            labourExample = `<i>${spell(soundChange(labourClassifier))}</i> "push"`;
            classifierEtymologyArray.push(labourExample);
        } else if(randomNumForLabour === 2) {
            labourClassifier = generatedCountNouns[countNounArray.indexOf("horse")]
            classifiersWithEtymology++;
            labourExample = `<i>${spell(soundChange(labourClassifier))}</i> "horse"`;
            classifierEtymologyArray.push(labourExample);
        } else if(randomNumForLabour === 3) {
            labourClassifier = generatedCountNouns[countNounArray.indexOf("hoof")]
            classifiersWithEtymology++;
            labourExample = `<i>${spell(soundChange(labourClassifier))}</i> "hoof"`;
            classifierEtymologyArray.push(labourExample);
        } else if(randomNumForLabour === 4) {
            labourClassifier = generatedCountNouns[countNounArray.indexOf("donkey")]
            classifiersWithEtymology++;
            labourExample = `<i>${spell(soundChange(labourClassifier))}</i> "donkey"`;
            classifierEtymologyArray.push(labourExample);
        } else if (randomNumForLabour > 4) {
            labourClassifier = generateWords();
        }
        for(let i = 0; i < labour.length; i++) {
            labour[i].innerHTML = spell(soundChange(labourClassifier));
        }

        let milk = document.getElementsByClassName("milk");
        randomNumForMilk = Math.floor(Math.random() * 4);
        if(randomNumForMilk === 0) {
            milkClassifier = generatedMassNouns[massNounArray.indexOf("milk")]
            classifiersWithEtymology++;
            milkExample = `<i>${spell(soundChange(milkClassifier))}</i> "milk"`;
            classifierEtymologyArray.push(milkExample);
        } if(randomNumForMilk === 1) {
            milkClassifier = generatedCountNouns[countNounArray.indexOf("udder")]
            classifiersWithEtymology++;
            milkExample = `<i>${spell(soundChange(milkClassifier))}</i> "udder"`;
            classifierEtymologyArray.push(milkExample);
        } if(randomNumForMilk === 2) {
            milkClassifier = generatedCountNouns[countNounArray.indexOf("cow")]
            classifiersWithEtymology++;
            milkExample = `<i>${spell(soundChange(milkClassifier))}</i> "cow"`;
            classifierEtymologyArray.push(milkExample);
        } else if (randomNumForMilk > 2) {
            milkClassifier = generateWords();
            
        }
        for(let i = 0; i < milk.length; i++) {
            milk[i].innerHTML = spell(soundChange(milkClassifier));
        }

        let inedible = document.getElementsByClassName("inedible");
        randomNumForInEdible = Math.floor(Math.random() * 4);
        if(randomNumForInEdible === 0) {
            inedibleClassifier = generatedCountNouns[countNounArray.indexOf("thing")]
            classifiersWithEtymology++;
            inedibleExample = `<i>${spell(soundChange(inedibleClassifier))}</i> "thing"`;
            classifierEtymologyArray.push(inedibleExample);
        } else if(randomNumForInEdible === 1) {
            inedibleClassifier = generatedCountNouns[countNounArray.indexOf("rock")]
            classifiersWithEtymology++;
            inedibleExample = `<i>${spell(soundChange(inedibleClassifier))}</i> "rock"`;
            classifierEtymologyArray.push(inedibleExample);
        } else if (randomNumForInEdible > 1) {
            inedibleClassifier = generateWords();
            
        }
        for(let i = 0; i < inedible.length; i++) {
            inedible[i].innerHTML = spell(soundChange(inedibleClassifier));
        }

        let edible = document.getElementsByClassName("edible");
        randomNumForEdible = Math.floor(Math.random() * 4);
        if(randomNumForEdible === 0) {
            edibleClassifier = generatedCountNouns[countNounArray.indexOf("basket")]
            classifiersWithEtymology++;
            edibleExample = `<i>${spell(soundChange(inedibleClassifier))}</i> "basket"`;
            classifierEtymologyArray.push(edibleExample);
        } else if(randomNumForEdible === 1) {
            edibleClassifier = generatedCountNouns[countNounArray.indexOf("berry")]
            classifiersWithEtymology++;
            edibleExample = `<i>${spell(soundChange(inedibleClassifier))}</i> "berry"`;
            classifierEtymologyArray.push(edibleExample);
        }else if (randomNumForEdible > 1) {
            edibleClassifier = generateWords();
        }
        for(let i = 0; i < edible.length; i++) {
            edible[i].innerHTML = spell(soundChange(edibleClassifier));
        }

        const listOfSpans = [];
        if(classifierEtymologyArray.length === 1) {
            let joinedString = classifierEtymologyArray.join();
            document.getElementById("animacy-classifiers-etymology-examples").innerHTML = `${joinedString}.`;
        } else {
        classifierEtymologyArray.forEach((element) => listOfSpans.push(element));
            listOfSpans.pop()
            listOfSpans.push(` and ${classifierEtymologyArray[classifierEtymologyArray.length -1]}.`)
            let listOfSpansString =  listOfSpans.join(", ")
            document.getElementById("animacy-classifiers-etymology-examples").innerHTML = listOfSpansString;
        }
    }
}

let randomNumForHuman = 0;
let randomNumForTree = 0;
let randomNumForGrass = 0;
let randomNumForFlower = 0;
let randomNumForLandAnimal = 0;
let randomNumForWaterAnimal = 0;
let randomNumForFlyingAnimal = 0;
let randomNumForWord = 0;
let randomNumForTool = 0;
let randomNumForNatural = 0;
let randomNumForLiquid = 0;
function createShortGenericClassifiers() {
    if(typologyNum === 0) {
        let classifiersWithEtymology = 0;
        let classifierEtymologyArray = [];
        let humanExample = "";
        let treeExample = "";
        let grassExample = "";
        let flowerExample = "";
        let landAnimalExample = "";
        let waterAnimalExample = "";
        let flyingAnimalExample = "";
        let wordExample = "";
        let toolExample = "";
        let naturalExample = "";
        let liquidExample = "";

        let human = document.getElementsByClassName("human2");
    randomNumForHuman = Math.floor(Math.random() * 5);
    if(randomNumForHuman === 0) {
        humanClassifier = generatedCountNouns[countNounArray.indexOf("man")]
        classifiersWithEtymology++;
        humanExample = `<i>${spell(soundChange(humanClassifier))}</i> "man"`;
        classifierEtymologyArray.push(humanExample);
    } else if(randomNumForHuman === 1) {
        humanClassifier = generatedCountNouns[countNounArray.indexOf("human")]
        classifiersWithEtymology++;
        humanExample = `<i>${spell(soundChange(humanClassifier))}</i> "human"`;
        classifierEtymologyArray.push(humanExample);
    } else if(randomNumForHuman === 2) {
        humanClassifier = generatedCountNouns[countNounArray.indexOf("person")]
        classifiersWithEtymology++;
        humanExample = `<i>${spell(soundChange(humanClassifier))}</i> "person"`;
        classifierEtymologyArray.push(humanExample);
    }else if (randomNumForHuman > 2) {
        humanClassifier = generateWords();
    }
    for(let i = 0; i < human.length; i++) {
        human[i].innerHTML = spell(soundChange(humanClassifier));
    }

    let tree = document.getElementsByClassName("tree");
    randomNumForTree = Math.floor(Math.random() * 5);
    if(randomNumForTree === 0) {
        treeClassifier = generatedCountNouns[countNounArray.indexOf("oak")]
        classifiersWithEtymology++;
        treeExample = `<i>${spell(soundChange(treeClassifier))}</i> "oak"`;
        classifierEtymologyArray.push(treeExample);
    } else if(randomNumForTree === 1) {
        treeClassifier = generatedCountNouns[countNounArray.indexOf("alder")]
        classifiersWithEtymology++;
        treeExample = `<i>${spell(soundChange(treeClassifier))}</i> "alder"`;
        classifierEtymologyArray.push(treeExample);
    } else if(randomNumForTree === 2) {
        treeClassifier = generatedCountNouns[countNounArray.indexOf("elm")]
        classifiersWithEtymology++;
        treeExample = `<i>${spell(soundChange(treeClassifier))}</i> "elm"`;
        classifierEtymologyArray.push(treeExample);
    } else if(randomNumForTree === 3) {
        treeClassifier = generatedCountNouns[countNounArray.indexOf("beech")]
        classifiersWithEtymology++;
        treeExample = `<i>${spell(soundChange(treeClassifier))}</i> "beech"`;
        classifierEtymologyArray.push(treeExample);
    } else if (randomNumForTree > 3) {
        treeClassifier = generateWords();
    }
    for(let i = 0; i < tree.length; i++) {
        tree[i].innerHTML = spell(soundChange(treeClassifier));
    }

    let grass = document.getElementsByClassName("grass");
    randomNumForGrass = Math.floor(Math.random() * 2);
    if(randomNumForGrass === 0) {
        grassClassifier = generatedMassNouns[massNounArray.indexOf("grass")]
        classifiersWithEtymology++;
        grassExample = `<i>${spell(soundChange(grassClassifier))}</i> "grass"`;
        classifierEtymologyArray.push(grassExample);
    } else if (randomNumForGrass === 1) {
        grassClassifier = generateWords();
    }
    for(let i = 0; i < grass.length; i++) {
        grass[i].innerHTML = spell(soundChange(grassClassifier));
    }

    let flower = document.getElementsByClassName("flower");
    randomNumForFlower = Math.floor(Math.random() * 2);
    if(randomNumForFlower === 0) {
        flowerClassifier = generatedCountNouns[countNounArray.indexOf("flower")]
        classifiersWithEtymology++;
        flowerExample = `<i>${spell(soundChange(flowerClassifier))}</i> "flower"`;
        classifierEtymologyArray.push(flowerExample);
    } else if (randomNumForFlower === 1) {
        flowerClassifier = generateWords();
    }
    for(let i = 0; i < flower.length; i++) {
        flower[i].innerHTML = spell(soundChange(flowerClassifier));
    }

    let landAnimal = document.getElementsByClassName("land-animal");
    randomNumForLandAnimal = Math.floor(Math.random() * 2);
    if(randomNumForLandAnimal === 0) {
        landAnimalClassifier = generatedCountNouns[countNounArray.indexOf("land")]
        classifiersWithEtymology++;
        landAnimalExample = `<i>${spell(soundChange(landAnimalClassifier))}</i> "land"`;
        classifierEtymologyArray.push(landAnimalExample);
    } else if (randomNumForLandAnimal === 1) {
        landAnimalClassifier = generateWords();
    }
    for(let i = 0; i < landAnimal.length; i++) {
        landAnimal[i].innerHTML = spell(soundChange(landAnimalClassifier));
    }

    let waterAnimal = document.getElementsByClassName("water-animal");
    randomNumForWaterAnimal = Math.floor(Math.random() * 5);
    if(randomNumForWaterAnimal === 0) {
        waterAnimalClassifier = generatedMassNouns[massNounArray.indexOf("water")]
        classifiersWithEtymology++;
        waterAnimalExample = `<i>${spell(soundChange(waterAnimalClassifier))}</i> "water"`;
        classifierEtymologyArray.push(waterAnimalExample);
    } if(randomNumForWaterAnimal === 1) {
        waterAnimalClassifier = generatedCountNouns[countNounArray.indexOf("sea")]
        classifiersWithEtymology++;
        waterAnimalExample = `<i>${spell(soundChange(waterAnimalClassifier))}</i> "sea"`;
        classifierEtymologyArray.push(waterAnimalExample);
    }  if(randomNumForWaterAnimal === 2) {
        waterAnimalClassifier = generatedCountNouns[countNounArray.indexOf("fish")]
        classifiersWithEtymology++;
        waterAnimalExample = `<i>${spell(soundChange(waterAnimalClassifier))}</i> "fish"`;
        classifierEtymologyArray.push(waterAnimalExample);
    }else if (randomNumForWaterAnimal > 2) {
        waterAnimalClassifier = generateWords();
    }
    for(let i = 0; i < waterAnimal.length; i++) {
        waterAnimal[i].innerHTML = spell(soundChange(waterAnimalClassifier));
    }

    let flyingAnimal = document.getElementsByClassName("flying-animal");
    randomNumForFlyingAnimal = 3//Math.floor(Math.random() * 5);
    if(randomNumForFlyingAnimal === 0) {
        flyingAnimalClassifier = generatedCountNouns[countNounArray.indexOf("sky")]
        classifiersWithEtymology++;
        flyingAnimalExample = `<i>${spell(soundChange(flyingAnimalClassifier))}</i> "sky"`;
        classifierEtymologyArray.push(flyingAnimalExample);
    } else if(randomNumForFlyingAnimal === 1) {
        flyingAnimalClassifier = generatedCountNouns[countNounArray.indexOf("cloud")]
        classifiersWithEtymology++;
        flyingAnimalExample = `<i>${spell(soundChange(flyingAnimalClassifier))}</i> "cloud"`;
        classifierEtymologyArray.push(flyingAnimalExample);
    }  else if(randomNumForFlyingAnimal === 2) {
        flyingAnimalClassifier = generatedCountNouns[countNounArray.indexOf("wing")]
        classifiersWithEtymology++;
        flyingAnimalExample = `<i>${spell(soundChange(flyingAnimalClassifier))}</i> "wing"`;
        classifierEtymologyArray.push(flyingAnimalExample);
    } else if (randomNumForFlyingAnimal > 2) {
        flyingAnimalClassifier = generateWords();
    }
    for(let i = 0; i < flyingAnimal.length; i++) {
        flyingAnimal[i].innerHTML = spell(soundChange(flyingAnimalClassifier));
    }

    let word = document.getElementsByClassName("word");
    randomNumForWord = Math.floor(Math.random() * 5);
    if(randomNumForWord === 0) {
        wordClassifier = generatedCountNouns[countNounArray.indexOf("word")]
        classifiersWithEtymology++;
        wordExample = `<i>${spell(soundChange(wordClassifier))}</i> "word"`;
        classifierEtymologyArray.push(wordExample);
    } else if(randomNumForWord === 1) {
        wordClassifier = generatedCountNouns[countNounArray.indexOf("mouth")]
        classifiersWithEtymology++;
        wordExample = `<i>${spell(soundChange(wordClassifier))}</i> "mouth"`;
        classifierEtymologyArray.push(wordExample);
    } else if (randomNumForWord > 1) {
        wordClassifier = generateWords();
    }
    for(let i = 0; i < word.length; i++) {
        word[i].innerHTML = spell(soundChange(wordClassifier));
    }

    let tool = document.getElementsByClassName("tool");
    randomNumForTool = Math.floor(Math.random() * 5);
    if(randomNumForTool === 0) {
        toolClassifier = generatedCountNouns[countNounArray.indexOf("axe")]
        classifiersWithEtymology++;
        toolExample = `<i>${spell(soundChange(toolClassifier))}</i> "axe"`;
        classifierEtymologyArray.push(toolExample);
    } else if(randomNumForTool === 1) {
        toolClassifier = generatedCountNouns[countNounArray.indexOf("handle")]
        classifiersWithEtymology++;
        toolExample = `<i>${spell(soundChange(toolClassifier))}</i> "handle"`;
        classifierEtymologyArray.push(toolExample);
    } else if(randomNumForTool === 2) {
        toolClassifier = generatedCountNouns[countNounArray.indexOf("hammer")]
        classifiersWithEtymology++;
        toolExample = `<i>${spell(soundChange(toolClassifier))}</i> "hammer"`;
        classifierEtymologyArray.push(toolExample);
    }  else if(randomNumForTool === 3) {
        toolClassifier = generatedCountNouns[countNounArray.indexOf("plough")]
        classifiersWithEtymology++;
        toolExample = `<i>${spell(soundChange(toolClassifier))}</i> "plough"`;
        classifierEtymologyArray.push(toolExample);
    }else if (randomNumForTool > 3) {
        toolClassifier = generateWords();
    }
    for(let i = 0; i < tool.length; i++) {
        tool[i].innerHTML = spell(soundChange(toolClassifier));
    }

    let naturalInan = document.getElementsByClassName("natural-inanimate");
    randomNumForNatural = Math.floor(Math.random() * 5);
    if(randomNumForNatural === 0) {
        naturalInanimateClassifier = generatedCountNouns[countNounArray.indexOf("rock")]
        classifiersWithEtymology++;
        naturalExample = `<i>${spell(soundChange(naturalInanimateClassifier))}</i> "rock"`;
        classifierEtymologyArray.push(naturalExample);
    } if(randomNumForNatural === 1) {
        naturalInanimateClassifier = generatedMassNouns[massNounArray.indexOf("dirt")]
        classifiersWithEtymology++;
        naturalExample = `<i>${spell(soundChange(naturalInanimateClassifier))}</i> "dirt"`;
        classifierEtymologyArray.push(naturalExample);
    }  if(randomNumForNatural === 2) {
        naturalInanimateClassifier = generatedMassNouns[massNounArray.indexOf("mud")]
        classifiersWithEtymology++;
        naturalExample = `<i>${spell(soundChange(naturalInanimateClassifier))}</i> "mud"`;
        classifierEtymologyArray.push(naturalExample);
    } else if (randomNumForNatural > 2) {
        naturalInanimateClassifier = generateWords();
    }
    for(let i = 0; i < naturalInan.length; i++) {
        naturalInan[i].innerHTML = spell(soundChange(naturalInanimateClassifier));
    }

    let liquid = document.getElementsByClassName("liquid");
    randomNumForLiquid = Math.floor(Math.random() * 5);
    if(randomNumForLiquid === 0) {
        liquidClassifier = generatedCountNouns[countNounArray.indexOf("drop")]
        classifiersWithEtymology++;
        liquidExample = `<i>${spell(soundChange(liquidClassifier))}</i> "drop"`;
        classifierEtymologyArray.push(liquidExample);
    } if(randomNumForLiquid === 1) {
        liquidClassifier = generatedCountNouns[countNounArray.indexOf("pool")]
        classifiersWithEtymology++;
        liquidExample = `<i>${spell(soundChange(liquidClassifier))}</i> "pool"`;
        classifierEtymologyArray.push(liquidExample);
    }  if(randomNumForLiquid === 2) {
        liquidClassifier = generatedCountNouns[countNounArray.indexOf("cup")]
        classifiersWithEtymology++;
        liquidExample = `<i>${spell(soundChange(liquidClassifier))}</i> "cup"`;
        classifierEtymologyArray.push(liquidExample);
    } else if (randomNumForLiquid > 2) {
        liquidClassifier = generateWords();
    }
    for(let i = 0; i < liquid.length; i++) {
        liquid[i].innerHTML = spell(soundChange(liquidClassifier));
    }

        const listOfSpans = [];
    if(classifierEtymologyArray.length === 1) {
        let joinedString = classifierEtymologyArray.join();
        document.getElementById("short-generic-classifiers-etymology-examples").innerHTML = `${joinedString}.`;
    } else {
        classifierEtymologyArray.forEach((element) => listOfSpans.push(element));
        listOfSpans.pop()
        listOfSpans.push(` and ${classifierEtymologyArray[classifierEtymologyArray.length -1]}.`)
        let listOfSpansString =  listOfSpans.join(", ")
        document.getElementById("short-generic-classifiers-etymology-examples").innerHTML = listOfSpansString;
        }
    }
}

//to create the most extensive classifier system, a different approach is taken. Each classifier will receive its own paragraph instead of using tables, with more elaborate examples and explanations. There will be greater randomization as to what categories are even included.
function makeExamples(word, classifier, countOrMass, quantifier) {
    let generatedArray = "";
    let nounArray = "";
    if (countOrMass === "count") {
        generatedArray = generatedCountNouns;
        nounArray = countNounArray;
    } else if (countOrMass === "mass") {
        generatedArray = generatedMassNouns;
        nounArray = singulativeMassNounArray;
    }

    let fixedWord = word;
    let replacement = quantifier + `&nbspof&nbsp`;

    if(fixedWord.includes("handful&nbspof")) {
        fixedWord = fixedWord.replace("handful&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("chunk&nbspof")) {
        fixedWord = fixedWord.replace("chunk&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("pinch&nbspof")) {
        fixedWord = fixedWord.replace("pinch&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("grain&nbspof")) {
        fixedWord = fixedWord.replace("grain&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("sheet&nbspof")) {
        fixedWord = fixedWord.replace("sheet&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("drop&nbspof")) {
        fixedWord = fixedWord.replace("drop&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("dollop&nbspof")) {
        fixedWord = fixedWord.replace("dollop&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("portion&nbspof")) {
        fixedWord = fixedWord.replace("portion&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("slice&nbspof")) {
        fixedWord = fixedWord.replace("slice&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("cut&nbspof")) {
        fixedWord = fixedWord.replace("cut&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("amount&nbspof")) {
        fixedWord = fixedWord.replace("amount&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("bale&nbspof")) {
        fixedWord = fixedWord.replace("bale&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("wisp&nbspof")) {
        fixedWord = fixedWord.replace("wisp&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("length&nbspof")) {
        fixedWord = fixedWord.replace("length&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("ounce&nbspof")) {
        fixedWord = fixedWord.replace("ounce&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("glass&nbspof")) {
        fixedWord = fixedWord.replace("ounce&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("clump&nbspof")) {
        fixedWord = fixedWord.replace("clump&nbspof&nbsp", replacement)
    }
    if(fixedWord.includes("jar&nbspof")) {
        fixedWord = fixedWord.replace("jar&nbspof&nbsp", replacement)
    }
    if(countNounArray.includes(word) && quantifier !== "") {
        fixedWord = quantifier + `&nbspof&nbsp` + countNounArrayPlural[countNounArray.indexOf(word)]
    }
    

    if(fixedWord === "pair&nbspof&nbspspouses") {
        fixedWord = "pair&nbspof&nbspspouses (i.e a romantic couple)"
    }
    if(fixedWord === "pair&nbspof&nbspspouses") {
        fixedWord = "pair&nbspof&nbspspouses (i.e heartbeat)"
    }
    if(fixedWord === "cluster&nbspof&nbspstars") {
        fixedWord = "cluster&nbspof&nbspstars (i.e constellation)"
    }
    if(fixedWord === "cluster&nbspof&nbspmountains") {
        fixedWord = "cluster&nbspof&nbspmountains (i.e mountain range)"
    }
    if(fixedWord === "cluster&nbspof&nbspfish") {
        fixedWord = "cluster&nbspof&nbspfish (i.e a school or a shoal)"
    }
    if(fixedWord === "cluster&nbspof&nbspboats") {
        fixedWord = "cluster&nbspof&nbspboats (i.e a fleet)"
    }
    if(fixedWord === "fieldful&nbspof&nbspcrowds") {
        fixedWord = "fieldful&nbspof&nbspcrowds (i.e gatherings of people in fields or open natural spaces)"
    }
    if(fixedWord === "stick&nbspof&nbspcandle&nbspwax") {
        fixedWord = "stick&nbspof&nbspcandle&nbspwax (i.e a candle)"
    }
    
    if (checkIfHeadInitialOrHeadFinal() === "headFirst") {
        return `<i>${spell(soundChange(generatedArray[nounArray.indexOf(word)]))} ${spell(soundChange(classifier))}</i> "${fixedWord}"`;
    } else {
        return `<i>${spell(soundChange(classifier))} ${spell(soundChange(generatedArray[nounArray.indexOf(word)]))}</i> "${fixedWord}"`;
    }
}

function createLongClassifiers() {
    if(typologyNum === 0) {
        if(randomClassifierNum === 3) {
            let allClassifiers = ["protruding-top", "orginised-gathering", "small-round", "small-flat", "building", "song", "slice", "entrance", "domestic-animal", "long-non-rigid", "long-rigid",  "revolution",  "rounded-top", "smattering", "broad-flat",  "mental-sensory", "violent-action", "loving-action", "reciprocal-action", "movement",  "protrusions", "intrusions", "enclosed-space", "piercing-cutting", "percussive",  "instance", "completed-action", ];

            let randomNum = Math.floor(Math.random() * (allClassifiers.length - 12)) + 12;

            for(let i = 0; i < randomNum; i++) {
                let randomIndex = Math.floor(Math.random() * allClassifiers.length);
                chosenClassifiers.push(allClassifiers[randomIndex])
                allClassifiers.splice(randomIndex, 1)
            }

            /*chooses if each classifier is formatted as it's own paragraph with an h4 title, or as a new line in one large paragraph. Each if-statement below contains an if-statement to determine which is chosen based on the below random number.*/
            let randomClassifierFormattingNum = Math.floor(Math.random() * 3);

            /*Protruding top********************/
            if(chosenClassifiers.includes("protruding-top")) {
                let allExamples = [];
                allExamples.push(
                    makeExamples("spear", protrudingClassifier, "count", ""),
                    makeExamples("hat", protrudingClassifier, "count", ""),
                    makeExamples("mountain", protrudingClassifier, "count", ""),
                    makeExamples("hill", protrudingClassifier, "count", ""),
                    makeExamples("dorsal&nbspfin", protrudingClassifier, "count", ""),
                    makeExamples("tower", protrudingClassifier, "count", ""),
                    makeExamples("roof", protrudingClassifier, "count", ""),
                    makeExamples("barrow", protrudingClassifier, "count", ""),
                    makeExamples("teat", protrudingClassifier, "count", ""),
                    makeExamples("breast", protrudingClassifier, "count", ""),
                    makeExamples("brow", protrudingClassifier, "count", ""),
                    makeExamples("bump", protrudingClassifier, "count", ""),
                    makeExamples("knuckle", protrudingClassifier, "count", ""),
                    makeExamples("wart", protrudingClassifier, "count", "")
                )

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let protrudingExamples =  listOfExamples.join(", ")
                let description = `<strong><i>${spell(soundChange(protrudingClassifier))}</i></strong> is used for objects with a protruding top, or those that are protruding tops: ${protrudingExamples}</br>`

                if(randomClassifierFormattingNum === 1) {
                    let protrudingDiv = document.createElement("div");
                    protrudingDiv.classList.add("long-classifier-div");
                    protrudingDiv.setAttribute("id", "protruding-classifiers");
                    let protrudingH4 = document.createElement("h4");
                    protrudingH4.innerHTML = `Protruding Objects - <i>${spell(soundChange(protrudingClassifier))}</i>`;
                    let protrudingP = document.createElement("p");
                    protrudingP.innerHTML = description;

                    document.getElementById("long-classifiers").appendChild(protrudingDiv);
                    document.getElementById("protruding-classifiers").appendChild(protrudingH4);
                    document.getElementById("protruding-classifiers").appendChild(protrudingP);
                } else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

            /*organized gathering********************/
            if(chosenClassifiers.includes("orginised-gathering")) {
               
                
                let allExamples = [];
                allExamples.push(
                    makeExamples("army", gatheringClassifier, "count", ""),
                    makeExamples("band", gatheringClassifier, "count", ""),
                    makeExamples("troop", gatheringClassifier, "count", ""),
                    makeExamples("family", gatheringClassifier, "count", ""),
                    makeExamples("lineage", gatheringClassifier, "count", ""),
                    makeExamples("clan", gatheringClassifier, "count", ""),
                    makeExamples("tribe", gatheringClassifier, "count", ""),
                    makeExamples("council", gatheringClassifier, "count", ""),
                    makeExamples("meeting", gatheringClassifier, "count", ""),
                    makeExamples("buffet", gatheringClassifier, "count", ""),
                    makeExamples("feast", gatheringClassifier, "count", ""),
                    makeExamples("festival", gatheringClassifier, "count", ""),
                    makeExamples("audience", gatheringClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ")
                let description = `<strong><i>${spell(soundChange(gatheringClassifier))}</i></strong> is used for orginised gatherings of people, social organizations and kinship groups. Incidental gatherings such as public crowds are not included: ${examples}</br>`;

                if(randomClassifierFormattingNum === 1) {
                let gatheringDiv = document.createElement("div");
                gatheringDiv.classList.add("long-classifier-div");
                gatheringDiv.setAttribute("id", "gathering-classifiers");
                let gatheringH4 = document.createElement("h4");
                gatheringH4.innerHTML = `Gatherings of people - <i>${spell(soundChange(gatheringClassifier))}</i>`;
                let gatheringP = document.createElement("p");
                gatheringP.innerHTML = description;
                
                    document.getElementById("long-classifiers").appendChild(gatheringDiv);
                    document.getElementById("gathering-classifiers").appendChild(gatheringH4);
                    document.getElementById("gathering-classifiers").appendChild(gatheringP);
                } else {
                    let descriptionSpan = document.createElement("span");
descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

            /*small round objects********************/
            if(chosenClassifiers.includes("small-round")) {
           
                
                let allExamples = [];
                allExamples.push(
                    makeExamples("grain", smallRoundClassifier, "count", ""),
                    makeExamples("bead", smallRoundClassifier, "count", ""),
                    makeExamples("seed", smallRoundClassifier, "count", ""),
                    makeExamples("turnip", smallRoundClassifier, "count", ""),
                    makeExamples("onion", smallRoundClassifier, "count", ""),
                    makeExamples("kidney", smallRoundClassifier, "count", ""),
                    makeExamples("kernel", smallRoundClassifier, "count", ""),
                    makeExamples("egg", smallRoundClassifier, "count", ""),
                    makeExamples("cherry", smallRoundClassifier, "count", ""),
                    makeExamples("berry", smallRoundClassifier, "count", ""),
                    makeExamples("bee", smallRoundClassifier, "count", ""),
                    makeExamples("bean", smallRoundClassifier, "count", ""),
                    makeExamples("apple", smallRoundClassifier, "count", ""),
                    makeExamples("acorn", smallRoundClassifier, "count", ""),
                    makeExamples("eye", smallRoundClassifier, "count", ""),
                    makeExamples("clove&nbspof&nbspgarlic", smallRoundClassifier, "mass", ""),
                    makeExamples("ball", smallRoundClassifier, "count", ""),
                    makeExamples("pea", smallRoundClassifier, "count", ""),
                    makeExamples("fist", smallRoundClassifier, "count", ""),
                    makeExamples("knee", smallRoundClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ")
                let description = `<strong><i>${spell(soundChange(smallRoundClassifier))}</i></strong> is used for small round objects: ${examples} <span id="small-round-bug"></span><br>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("small-round-div");
                    classifierDiv.setAttribute("id", "small-round");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Small round objects - <i>${spell(soundChange(smallRoundClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description

                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("small-round").appendChild(classifierH4);
                    document.getElementById("small-round").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }

                /*extensions to classifier usage*/
                /*Decides if the classifier is extended in use to refer to bugs*/
                let beeWord = spell(soundChange(generatedCountNouns[countNounArray.indexOf("bee")]));
                let randomNumForBugExtension = Math.floor(Math.random() * 5);
                if (randomNumForBugExtension === 3) {
                    let allBugExamples = [];
                    allBugExamples.push(
                        makeExamples("spider", smallRoundClassifier, "count", ""),
                        makeExamples("louse", smallRoundClassifier, "count", ""),
                        makeExamples("weevil", smallRoundClassifier, "count", ""),
                        makeExamples("worm", smallRoundClassifier, "count", ""),
                        makeExamples("leech", smallRoundClassifier, "count", ""),
                        makeExamples("maggot", smallRoundClassifier, "count", ""),
                        makeExamples("tick", smallRoundClassifier, "count", ""),
                    );
                    let chosenBugExamples = []; 
                    let randomBugExampleNum = Math.floor(Math.random() * (allBugExamples.length - 4)) + 4;
                    for(let i= 0; i < randomBugExampleNum; i++) {
                        let randomIndex = Math.floor(Math.random() * allBugExamples.length);
                        chosenBugExamples.push(allBugExamples[randomIndex]);
                        allBugExamples.splice(randomIndex, 1);
                    }
                    const listOfBugExamples = [];
                    chosenBugExamples.forEach((element) => listOfBugExamples.push(element));
                    listOfBugExamples.pop()
                    listOfBugExamples.push(` and ${chosenBugExamples[chosenBugExamples.length -1]}.`)
                    let bugExamples =  listOfBugExamples.join(", ")
                
                    document.getElementById("small-round-bug").innerHTML = `Due to being applied to <i>${beeWord}</i> "bee", the classifer <i>${spell(soundChange(smallRoundClassifier))}</i> may also be used with any nouns referring to bugs regardless of the shape of the bug itself: ${bugExamples}`;
                }
            }

            /*small flat********************/
            if(chosenClassifiers.includes("small-flat")) {
                
                let allExamples = [];
                allExamples.push(
                    makeExamples("pebble", smallFlatClassifier, "count", ""),
                    makeExamples("ring", smallFlatClassifier, "count", ""),
                    makeExamples("coin", smallFlatClassifier, "count", ""),
                    makeExamples("shell", smallFlatClassifier, "count", ""),
                    makeExamples("ear", smallFlatClassifier, "count", ""),
                    makeExamples("leaf", smallFlatClassifier, "count", ""),
                    makeExamples("hand", smallFlatClassifier, "count", ""),
                    makeExamples("palm", smallFlatClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ")
                let description = `<strong><i>${spell(soundChange(smallFlatClassifier))}</i></strong> is used for small flat objects: ${examples} <span id="small-flat-jewelry"></span><br>`;

                if (randomClassifierFormattingNum === 1) {
                        let smallFlatDiv = document.createElement("div");
                        smallFlatDiv.classList.add("small-flat-div");
                        smallFlatDiv.setAttribute("id", "small-flat");
                        let smallFlatH3 = document.createElement("h3");
                        smallFlatH3.innerHTML = `Small flat objects- <i>${spell(soundChange(smallFlatClassifier))}</i>`;
                        let smallFlatP = document.createElement("p");
                        smallFlatP.innerHTML = description;

                        document.getElementById("long-classifiers").appendChild(smallFlatDiv);
                        document.getElementById("small-flat").appendChild(smallFlatH3);
                        document.getElementById("small-flat").appendChild(smallFlatP);
                } else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }

                /*extensions to classifier usage*/
                /*Decides if the classifier is extended in use to refer to jewelry*/
                let jewelWord = spell(soundChange(generatedCountNouns[countNounArray.indexOf("ring")]));
                let randomNumForJewelExtension = Math.floor(Math.random() * 5);
                if (randomNumForJewelExtension === 3) {
                    let allJewelExamples = [];
                    allJewelExamples.push(
                        makeExamples("bracelet", smallFlatClassifier, "count", ""),
                        makeExamples("jewel", smallFlatClassifier, "count", ""),
                        makeExamples("necklace", smallFlatClassifier, "count", ""),
                        makeExamples("pendant", smallFlatClassifier, "count", ""),
                    )
                    let chosenJewelExamples = []; 
                    let randomJewelExampleNum = Math.floor(Math.random() * (allJewelExamples.length - 4)) + 4;
                    for(let i= 0; i < randomJewelExampleNum; i++) {
                        let randomIndex = Math.floor(Math.random() * allJewelExamples.length);
                        chosenJewelExamples.push(allJewelExamples[randomIndex]);
                        allJewelExamples.splice(randomIndex, 1);
                    }
                    const listOfJewelExamples = [];
                    chosenJewelExamples.forEach((element) => listOfJewelExamples.push(element));
                    listOfJewelExamples.pop()
                    listOfJewelExamples.push(` and ${chosenJewelExamples[chosenJewelExamples.length -1]}.`)
                    let jewelExamples =  listOfJewelExamples.join(", ")
                
                    document.getElementById("small-flat-jewelry").innerHTML = `This classifier extended in usage to also be used with nouns referring to jewelry, thanks to originally referring to the small flat piece of jewelry <i>${jewelWord}</i> "ring": ${jewelExamples}`;
                }
            }

            /*building********************/
            if(chosenClassifiers.includes("building")) {
                let allExamples = [];
                allExamples.push(
                    makeExamples("bedroom", buildingClassifier, "count", ""),
                    makeExamples("hall", buildingClassifier, "count", ""),
                    makeExamples("stable", buildingClassifier, "count", ""),
                    makeExamples("temple", buildingClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ")
                let description = `<strong><i>${spell(soundChange(buildingClassifier))}</i></strong> is used for buildings with explicit and singular purposes: ${examples}<br>`;

                if(randomClassifierFormattingNum === 1) {
                    let buildingDiv = document.createElement("div");
                    buildingDiv.classList.add("building-div");
                    buildingDiv.setAttribute("id", "building");
                    let buildingH3 = document.createElement("h3");
                    buildingH3.innerHTML = `Buildings with purposes- <i>${spell(soundChange(buildingClassifier))}</i>`;
                    let buildingP = document.createElement("p");
                    buildingP.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(buildingDiv);
                    document.getElementById("building").appendChild(buildingH3);
                    document.getElementById("building").appendChild(buildingP);
                }  else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

            /*songs********************/
            if(chosenClassifiers.includes("song")) {  
                let allExamples = [];
                allExamples.push(
                    makeExamples("song", songClassifier, "count", ""),
                    makeExamples("prayer", songClassifier, "count", ""),
                    makeExamples("proverb", songClassifier, "count", ""),
                    makeExamples("work&nbspof&nbspprose", songClassifier, "mass", ""),
                    makeExamples("spell", songClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ")
                let description = `<strong><i>${spell(soundChange(songClassifier))}</i></strong> is used for forms of verbal art: ${examples}<br>`;

                if(randomClassifierFormattingNum === 1) {
                    let songDiv = document.createElement("div");
                    songDiv.classList.add("song-div");
                    songDiv.setAttribute("id", "song");
                    let songH3 = document.createElement("h3");
                    songH3.innerHTML = `Verbal Art Forms- <i>${spell(soundChange(songClassifier))}</i>`;
                    let songP = document.createElement("p");
                    songP.innerHTML = description;

                    document.getElementById("long-classifiers").appendChild(songDiv);
                    document.getElementById("song").appendChild(songH3);
                    document.getElementById("song").appendChild(songP);
                }  else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

            /*slice********************/
            if(chosenClassifiers.includes("slice")) {
                
                let allExamples = [];
                allExamples.push(
                    makeExamples("leaf", sliceClassifier, "count", ""),
                    makeExamples("rag", sliceClassifier, "count", ""),
                    makeExamples("membrane", sliceClassifier, "count", ""),
                    makeExamples("page", sliceClassifier, "count", ""),
                    makeExamples("sheet", sliceClassifier, "count", ""),
                    makeExamples("tongue", sliceClassifier, "count", ""),
                    makeExamples("slice", sliceClassifier, "count", ""),
                    makeExamples("slice&nbspof&nbspbread", sliceClassifier, "mass", ""),
                    makeExamples("strip&nbspof&nbspleather", sliceClassifier, "mass", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(sliceClassifier))}</i></strong> is used for slices of things, or any flimsy and flat objects: ${examples}</br>`;

                if(randomClassifierFormattingNum === 1) {
                    let sliceDiv = document.createElement("div");
                    sliceDiv.classList.add("slice-div");
                    sliceDiv.setAttribute("id", "slice");
                    let sliceH3 = document.createElement("h3");
                    sliceH3.innerHTML = `Flimsy Flat Objects- <i>${spell(soundChange(sliceClassifier))}</i>`;
                    let sliceP = document.createElement("p");
                    sliceP.innerHTML = description;

                    document.getElementById("long-classifiers").appendChild(sliceDiv);
                    document.getElementById("slice").appendChild(sliceH3);
                    document.getElementById("slice").appendChild(sliceP);
                }  else {
                    let descriptionSpan = document.createElement("span");
descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

            /*entrances********************/
            if(chosenClassifiers.includes("entrance")) {    
                let allExamples = [];
                allExamples.push(
                    makeExamples("door", entranceClassifier, "count", ""),
                    makeExamples("wagon", entranceClassifier, "count", ""),
                    makeExamples("horse", entranceClassifier, "count", ""),
                    makeExamples("estuary", entranceClassifier, "count", ""),
                    makeExamples("boat", entranceClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = ` <strong><i>${spell(soundChange(entranceClassifier))}</i></strong> is used for entrances, and more generally, places of transition such as an entrances or a mode of transport. The classifier also applies to nouns denoting phases of transition both locative and temporal: ${examples}<br>`;

                if (randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("entrance-div");
                    classifierDiv.setAttribute("id", "entrance");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Entrances - <i>${spell(soundChange(entranceClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description;

                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("entrance").appendChild(classifierH4);
                    document.getElementById("entrance").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

             /*domestic animals********************/
            if(chosenClassifiers.includes("domestic-animal")) {
                let classifier = "";
                let randomClassifierNum = Math.floor(Math.random() * 2);
                if(randomClassifierNum === 0) {
                    domesticAnimalClassifier = generatedCountNouns[countNounArray.indexOf("head")];
                }
                
                
                let allExamples = [];
                allExamples.push(
                    makeExamples("horse", domesticAnimalClassifier, "count", ""),
                    makeExamples("bull", domesticAnimalClassifier, "count", ""),
                    makeExamples("cow", domesticAnimalClassifier, "count", ""),
                    makeExamples("donkey", domesticAnimalClassifier, "count", ""),
                    makeExamples("chicken", domesticAnimalClassifier, "count", ""),
                    makeExamples("pig", domesticAnimalClassifier, "count", ""),
                    makeExamples("goat", domesticAnimalClassifier, "count", ""),
                    makeExamples("ram", domesticAnimalClassifier, "count", ""),
                    makeExamples("ewe", domesticAnimalClassifier, "count", ""),
                    makeExamples("sheep", domesticAnimalClassifier, "count", ""),
                    makeExamples("mare", domesticAnimalClassifier, "count", ""),
                    makeExamples("ox", domesticAnimalClassifier, "count", ""),
                    makeExamples("rooster", domesticAnimalClassifier, "count", ""),
                    makeExamples("dog", domesticAnimalClassifier, "count", ""),
                    makeExamples("cat", domesticAnimalClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(domesticAnimalClassifier))}</i></strong> is used for domestic animals<span id="domestic-animal-head">, the classifier is taken from the noun <i>${spell(soundChange(domesticAnimalClassifier))}</i> "head"</span>: ${examples}<br>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("domestic-animals-div");
                    classifierDiv.setAttribute("id", "domestic-animals");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Domestic Animals - <i>${spell(soundChange(domesticAnimalClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description

                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("domestic-animals").appendChild(classifierH4);
                    document.getElementById("domestic-animals").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }

                if(randomClassifierNum === 0) {
                    document.getElementById("domestic-animal-head").style.display = "none";
                }
            }

             /*long-non-rigid********************/
            if(chosenClassifiers.includes("long-non-rigid")) {
                
                let allExamples = [];
                allExamples.push(
                    makeExamples("sinew", longNonRigidClassifier, "count", ""),
                    makeExamples("road", longNonRigidClassifier, "count", ""),
                    makeExamples("bale&nbspof&nbspstraw", longNonRigidClassifier, "mass", ""),
                    makeExamples("eel", longNonRigidClassifier, "count", ""),
                    makeExamples("length&nbspof&nbspstring", longNonRigidClassifier, "mass", ""),
                    makeExamples("length&nbspof&nbsprope", longNonRigidClassifier, "mass", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(longNonRigidClassifier))}</i></strong> is used for lengths of long and non-rigid objects: ${examples}<span id="long-non-rigid-aqautic"></span> <span id="long-non-rigid-road"></span><br>`;

                if(randomClassifierFormattingNum === 1) {
                let classifierDiv = document.createElement("div");
                classifierDiv.classList.add("long-non-rigid-div");
                classifierDiv.setAttribute("id", "long-non-rigid");
                let classifierH4 = document.createElement("h4");
                classifierH4.innerHTML = `Long Non-rigid Objects - <i>${spell(soundChange(longNonRigidClassifier))}</i>`;
                let classifierP = document.createElement("p");
                classifierP.innerHTML = description

                document.getElementById("long-classifiers").appendChild(classifierDiv);
                document.getElementById("long-non-rigid").appendChild(classifierH4);
                document.getElementById("long-non-rigid").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }

                /*extensions to classifier usage*/
                /*Decides if the classifier is extended in use to refer to aquatic life*/
                let aquaticWord = spell(soundChange(generatedCountNouns[countNounArray.indexOf("eel")]));
                let randomNumForaquaticExtension = Math.floor(Math.random() * 5);
                if (randomNumForaquaticExtension === 3) {
                    let allAquaticExamples = [];
                    allAquaticExamples.push(
                        makeExamples("fish", longNonRigidClassifier, "count", ""),
                        makeExamples("salmon", longNonRigidClassifier, "count", ""),
                        makeExamples("trout", longNonRigidClassifier, "count", ""),
                        makeExamples("dolphin", longNonRigidClassifier, "count", ""),
                        makeExamples("shark", longNonRigidClassifier, "count", ""),
                        makeExamples("carp", longNonRigidClassifier, "count", ""),
                        makeExamples("frog", longNonRigidClassifier, "count", ""),
                        makeExamples("mussel", longNonRigidClassifier, "count", ""),
                        makeExamples("whale", longNonRigidClassifier, "count", ""),
                    );
                    let chosenAquaticExamples = []; 
                    let randomAquaticExampleNum = Math.floor(Math.random() * (allAquaticExamples.length - 4)) + 4;
                    for(let i= 0; i < randomAquaticExampleNum; i++) {
                        let randomIndex = Math.floor(Math.random() * allAquaticExamples.length);
                        chosenAquaticExamples.push(allAquaticExamples[randomIndex]);
                        allAquaticExamples.splice(randomIndex, 1);
                    }
                    const listOfAquaticExamples = [];
                    chosenAquaticExamples.forEach((element) => listOfAquaticExamples.push(element));
                    listOfAquaticExamples.pop()
                    listOfAquaticExamples.push(` and ${chosenAquaticExamples[chosenAquaticExamples.length -1]}.`)
                    let aquaticExamples =  listOfAquaticExamples.join(", ")
                
                    document.getElementById("long-non-rigid-aqautic").innerHTML = `Due to being applied to <i>${aquaticWord}</i> "eel", the classifer <i>${spell(soundChange(longNonRigidClassifier))}</i> may also be used with any nouns referring to aquatic wildlife regardless of the shape of the animal: ${aquaticExamples}`;
                }

                /*Decides if the classifier is extended in use to refer to directions*/
                let roadWord = spell(soundChange(generatedCountNouns[countNounArray.indexOf("road")]));
                let randomNumForRoadExtension = Math.floor(Math.random() * 5);
                if (randomNumForRoadExtension === 3) {
                    let allRoadExamples = [];
                    allRoadExamples.push(
                        makeExamples("direction", longNonRigidClassifier, "count", ""),
                        makeExamples("route", longNonRigidClassifier, "count", ""),
                        makeExamples("way", longNonRigidClassifier, "count", ""),
                        makeExamples("map", longNonRigidClassifier, "count", ""),
                    );
                    let chosenRoadExamples = []; 
                    let randomRoadExampleNum = Math.floor(Math.random() * (allRoadExamples.length - 4)) + 4;
                    for(let i= 0; i < randomRoadExampleNum; i++) {
                        let randomIndex = Math.floor(Math.random() * allRoadExamples.length);
                        chosenRoadExamples.push(allRoadExamples[randomIndex]);
                        allRoadExamples.splice(randomIndex, 1);
                    }
                    const listOfRoadExamples = [];
                    chosenRoadExamples.forEach((element) => listOfRoadExamples.push(element));
                    listOfRoadExamples.pop()
                    listOfRoadExamples.push(` and ${chosenRoadExamples[chosenRoadExamples.length -1]}.`)
                    let roadExamples =  listOfRoadExamples.join(", ")
                
                    document.getElementById("long-non-rigid-road").innerHTML = `Due to being applied to <i>${roadWord}</i> "road", the classifer <i>${spell(soundChange(longNonRigidClassifier))}</i> may also be used with any nouns referring to routes and directions: ${roadExamples}`;
                }
            }

             /*long-rigid********************/
            if(chosenClassifiers.includes("long-rigid")) {
                
                let allExamples = [];
                allExamples.push(
                    makeExamples("shaft", longRigidClassifier, "count", ""),
                    makeExamples("branch", longRigidClassifier, "count", ""),
                    makeExamples("pole", longRigidClassifier, "count", ""),
                    makeExamples("stake", longRigidClassifier, "count", ""),
                    makeExamples("post", longRigidClassifier, "count", ""),
                    makeExamples("stick", longRigidClassifier, "count", ""),
                    makeExamples("icicle", longRigidClassifier, "count", ""),
                    makeExamples("bar", longRigidClassifier, "count", ""),
                    makeExamples("pike", longRigidClassifier, "count", ""),
                    makeExamples("splint", longRigidClassifier, "count", ""),
                    makeExamples("stalagmite", longRigidClassifier, "count", ""),
                    makeExamples("trunk", longRigidClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(longRigidClassifier))}</i></strong> is used for lengths of long and rigid objects: ${examples}<br>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("long-rigid-div");
                    classifierDiv.setAttribute("id", "long-rigid");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Long Rigid Objects - <i>${spell(soundChange(longRigidClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description;

                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("long-rigid").appendChild(classifierH4);
                    document.getElementById("long-rigid").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

            /*broad-flat********************/
            if(chosenClassifiers.includes("broad-flat")) {
                
                let allExamples = [];
                allExamples.push(
                    makeExamples("board", broadClassifier, "count", ""),
                    makeExamples("floor", broadClassifier, "count", ""),
                    makeExamples("slab", broadClassifier, "count", ""),
                    makeExamples("table", broadClassifier, "count", ""),
                    makeExamples("door", broadClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(broadClassifier))}</i></strong> is used for broad, flat and solid surfaces: ${examples}</br>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("broad-flat-div");
                    classifierDiv.setAttribute("id", "broad-flat");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Broad Flat Surface - <i>${spell(soundChange(broadClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description
                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("broad-flat").appendChild(classifierH4);
                    document.getElementById("broad-flat").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

            /*mental********************/
            if(chosenClassifiers.includes("mental-sensory")) {
                let allExamples = [];
                allExamples.push(
                    makeExamples("ounce&nbspof&nbspconfusion", mentalClassifier, "mass"),
                    makeExamples("glimpse&nbspof&nbspsight", mentalClassifier, "mass"),
                    makeExamples("memory", mentalClassifier, "count", ""),
                    makeExamples("scent", mentalClassifier, "count", ""),
                    makeExamples("sniff", mentalClassifier, "count", ""),
                    makeExamples("sound", mentalClassifier, "count", ""),
                    makeExamples("texture", mentalClassifier, "count", ""),
                    makeExamples("thought", mentalClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(mentalClassifier))}</i></strong> is used for sensations, senses and mental processes: ${examples}</br>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("mental-sensory-div");
                    classifierDiv.setAttribute("id", "mental-sensory");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Mental or Sensory Process - <i>${spell(soundChange(mentalClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description
                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("mental-sensory").appendChild(classifierH4);
                    document.getElementById("mental-sensory").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

            /*act of voilence********************/
            if(chosenClassifiers.includes("violent-action")) {
                
                let allExamples = [];
                allExamples.push(
                    makeExamples("attack", violenceClassifier, "count", ""),
                    makeExamples("blow", violenceClassifier, "count", ""),
                    makeExamples("genocide", violenceClassifier, "count", ""),
                    makeExamples("massacre", violenceClassifier, "count", ""),
                    makeExamples("strike", violenceClassifier, "count", ""),
                    makeExamples("act&nbspof&nbsphatred", violenceClassifier, "mass"),
                    makeExamples("act&nbspof&nbsphostility", violenceClassifier, "mass"),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(violenceClassifier))}</i></strong> is used for acts of violence: ${examples}</br>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("violent-action-div");
                    classifierDiv.setAttribute("id", "violent-action");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Act of Violence - <i>${spell(soundChange(violenceClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description
                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("violent-action").appendChild(classifierH4);
                    document.getElementById("violent-action").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

            /*act of love********************/
            if(chosenClassifiers.includes("loving-action")) {
               let allExamples = [];
                allExamples.push(
                    makeExamples("kiss", loveClassifier, "count", ""),
                    makeExamples("embrace", loveClassifier, "count", ""),
                    makeExamples("hug", loveClassifier, "count", ""),
                    makeExamples("relationship", loveClassifier, "count", ""),
                    makeExamples("wedding", loveClassifier, "count", ""),
                    makeExamples("act&nbspof&nbspadmiration", loveClassifier, "mass"),
                    makeExamples("act&nbspof&nbspadoration", loveClassifier, "mass"),
                    makeExamples("act&nbspof&nbsplove", loveClassifier, "mass"),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(loveClassifier))}</i></strong> is used for acts of love: ${examples}</br>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("loving-action-div");
                    classifierDiv.setAttribute("id", "loving-action");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Act of Love - <i>${spell(soundChange(loveClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description
                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("loving-action").appendChild(classifierH4);
                    document.getElementById("loving-action").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

            /*reciprocal acts*******************/
            if(chosenClassifiers.includes("reciprocal-action")) {
               
                let allExamples = [];
                allExamples.push(
                    makeExamples("exchange", reciprocalClassifier, "count", ""),
                    makeExamples("favour", reciprocalClassifier, "count", ""),
                    makeExamples("purchase", reciprocalClassifier, "count", ""),
                    makeExamples("swap", reciprocalClassifier, "count", ""),
                    makeExamples("trade", reciprocalClassifier, "count", ""),
                    makeExamples("act&nbspof&nbsprevenge", reciprocalClassifier, "mass"),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(reciprocalClassifier))}</i></strong> is used for reciprocal acts: ${examples}</br>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("reciprocal-action-div");
                    classifierDiv.setAttribute("id", "reciprocal-action");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Reciprocal Acts - <i>${spell(soundChange(reciprocalClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description
                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("reciprocal-action").appendChild(classifierH4);
                    document.getElementById("reciprocal-action").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

            /*movement*******************/
            if(chosenClassifiers.includes("movement")) {
                let allExamples = [];
                allExamples.push(
                    makeExamples("change", movementClassifier, "count", ""),
                    makeExamples("journey", movementClassifier, "count", ""),
                    makeExamples("transformation", movementClassifier, "count", ""),
                    makeExamples("transition", movementClassifier, "count", ""),
                    makeExamples("walk", movementClassifier, "count", ""),
                    makeExamples("boat", movementClassifier, "count", ""),
                    makeExamples("chariot", movementClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(movementClassifier))}</i></strong> is used for nouns of movement, including forms of transport, and transition: ${examples}</br>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("movement-div");
                    classifierDiv.setAttribute("id", "movement");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Movement - <i>${spell(soundChange(movementClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description
                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("movement").appendChild(classifierH4);
                    document.getElementById("movement").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

             /*protrusions*******************/
             if(chosenClassifiers.includes("protrusions")) {
                let allExamples = [];
                allExamples.push(
                    makeExamples("boulder", protrusionClassifier, "count", ""),
                    makeExamples("shelf", protrusionClassifier, "count", ""),
                    makeExamples("branch", protrusionClassifier, "count", ""),
                    makeExamples("cliff", protrusionClassifier, "count", ""),
                    makeExamples("fort", protrusionClassifier, "count", ""),
                    makeExamples("fortification", protrusionClassifier, "count", ""),
                    makeExamples("limb", protrusionClassifier, "count", ""),
                    makeExamples("wall", protrusionClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(protrusionClassifier))}</i></strong> is used for protrusions from surfaces: ${examples}</br>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("protrusions-div");
                    classifierDiv.setAttribute("id", "protrusions");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Protrusions - <i>${spell(soundChange(protrusionClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description
                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("protrusions").appendChild(classifierH4);
                    document.getElementById("protrusions").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

             /*intrusions*******************/
            if(chosenClassifiers.includes("intrusions")) {
               let allExamples = [];
                allExamples.push(
                    makeExamples("furrow", intrusionClassifier, "count", ""),
                    makeExamples("ravine", intrusionClassifier, "count", ""),
                    makeExamples("valley", intrusionClassifier, "count", ""),
                    makeExamples("cavity", intrusionClassifier, "count", ""),
                    makeExamples("crease", intrusionClassifier, "count", ""),
                    makeExamples("dent", intrusionClassifier, "count", ""),
                    makeExamples("ditch", intrusionClassifier, "count", ""),
                    makeExamples("grave", intrusionClassifier, "count", ""),
                    makeExamples("groove", intrusionClassifier, "count", ""),
                    makeExamples("gulley", intrusionClassifier, "count", ""),
                    makeExamples("hole", intrusionClassifier, "count", ""),
                    makeExamples("notch", intrusionClassifier, "count", ""),
                    makeExamples("pit", intrusionClassifier, "count", ""),
                    makeExamples("slit", intrusionClassifier, "count", ""),
                    makeExamples("slot", intrusionClassifier, "count", ""),
                    makeExamples("well", intrusionClassifier, "count", ""),
                    makeExamples("window", intrusionClassifier, "count", ""),
                    makeExamples("wound", intrusionClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(intrusionClassifier))}</i></strong> is used for intrusions into surfaces: ${examples}</br>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("intrusions-div");
                    classifierDiv.setAttribute("id", "intrusions");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Intrusions - <i>${spell(soundChange(intrusionClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description
                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("intrusions").appendChild(classifierH4);
                    document.getElementById("intrusions").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

             /*enclosed-space*******************/
            if(chosenClassifiers.includes("enclosed-space")) {
                let allExamples = [];
                allExamples.push(
                    makeExamples("cabin", enclosedClassifier, "count", ""),
                    makeExamples("cage", enclosedClassifier, "count", ""),
                    makeExamples("cave", enclosedClassifier, "count", ""),
                    makeExamples("cell", enclosedClassifier, "count", ""),
                    makeExamples("realm", enclosedClassifier, "count", ""),
                    makeExamples("snare", enclosedClassifier, "count", ""),
                    makeExamples("tent", enclosedClassifier, "count", ""),
                    makeExamples("trap", enclosedClassifier, "count", ""),
                    makeExamples("world", enclosedClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(enclosedClassifier))}</i></strong> is used for enclosed spaces that a person may enter: ${examples}</br><span id="enclosed-space-trap"></span>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("enclosed-space");
                    classifierDiv.setAttribute("id", "enclosed-space");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Enclosed Spaces - <i>${spell(soundChange(enclosedClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description
                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("enclosed-space").appendChild(classifierH4);
                    document.getElementById("enclosed-space").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }

                /*extensions to classifier usage*/
                /*Decides if the classifier is extended in use to refer to captivity*/
                let cageWord = spell(soundChange(generatedCountNouns[countNounArray.indexOf("trap")]));
                let randomNumForCageExtension = Math.floor(Math.random() * 5);
                if (randomNumForCageExtension === 3) {
                    let allCageExamples = [];
                    allCageExamples.push(
                        makeExamples("period&nbspof&nbspcaptivity", enclosedClassifier, "mass"),
                        makeExamples("act&nbspof&nbspdeception", enclosedClassifier, "mass"),
                        makeExamples("act&nbspof&nbsptrickery", enclosedClassifier, "mass")
                    );
                    let chosenCageExamples = []; 
                    let randomCageExampleNum = Math.floor(Math.random() * (allCageExamples.length - 4)) + 4;
                    for(let i= 0; i < randomCageExampleNum; i++) {
                        let randomIndex = Math.floor(Math.random() * allCageExamples.length);
                        chosenCageExamples.push(allCageExamples[randomIndex]);
                        allCageExamples.splice(randomIndex, 1);
                    }
                    const listOfCageExamples = [];
                    chosenCageExamples.forEach((element) => listOfCageExamples.push(element));
                    listOfCageExamples.pop()
                    listOfCageExamples.push(` and ${chosenCageExamples[chosenCageExamples.length -1]}.`)
                    let cageExamples =  listOfCageExamples.join(", ")
                
                    document.getElementById("enclosed-space-trap").innerHTML = `Due to being applied to <i>${cageWord}</i> "trap", the classifer <i>${spell(soundChange(enclosedClassifier))}</i> may also be used with any nouns referring to captivity and deception: ${cageExamples}<br>`;
                }
            }

            /*piercing-cutting*******************/
            if(chosenClassifiers.includes("piercing-cutting")) {
                let allExamples = [];
                allExamples.push(
                    makeExamples("arrow", piercingClassifier, "count", ""),
                    makeExamples("axe", piercingClassifier, "count", ""),
                    makeExamples("blade", piercingClassifier, "count", ""),
                    makeExamples("edge", piercingClassifier, "count", ""),
                    makeExamples("javelin", piercingClassifier, "count", ""),
                    makeExamples("knife", piercingClassifier, "count", ""),
                    makeExamples("needle", piercingClassifier, "count", ""),
                    makeExamples("pick", piercingClassifier, "count", ""),
                    makeExamples("pin", piercingClassifier, "count", ""),
                    makeExamples("plough", piercingClassifier, "count", ""),
                    makeExamples("scythe", piercingClassifier, "count", ""),
                    makeExamples("splinter", piercingClassifier, "count", ""),
                    makeExamples("stinger", piercingClassifier, "count", ""),
                    makeExamples("sword", piercingClassifier, "count", ""),
                    makeExamples("thorn", piercingClassifier, "count", ""),
                    makeExamples("tooth", piercingClassifier, "count", ""),
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(piercingClassifier))}</i></strong> is used for piercing and cutting objects: ${examples}</br><span id="piercing-cutting"></span>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("piercing-cutting");
                    classifierDiv.setAttribute("id", "piercing-cutting");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Piercing and Cutting Objects - <i>${spell(soundChange(piercingClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description
                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("piercing-cutting").appendChild(classifierH4);
                    document.getElementById("piercing-cutting").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }
            }

            /*percussive*******************/
            if(chosenClassifiers.includes("percussive")) {
                let allExamples = [];
                allExamples.push(
                    makeExamples("bow", percussiveClassifier, "count", ""),
                    makeExamples("club", percussiveClassifier, "count", ""),
                    makeExamples("hammer", percussiveClassifier, "count", ""),
                    makeExamples("mace", percussiveClassifier, "count", ""),
                    makeExamples("mallet", percussiveClassifier, "count", ""),
                    makeExamples("rod", percussiveClassifier, "count", "")
                );

                let chosenExamples = []; 
                let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
                for(let i= 0; i < randomExampleNum; i++) {
                    let randomIndex = Math.floor(Math.random() * allExamples.length);
                    chosenExamples.push(allExamples[randomIndex]);
                    allExamples.splice(randomIndex, 1);
                }
                
                const listOfExamples = [];
                chosenExamples.forEach((element) => listOfExamples.push(element));
                listOfExamples.pop()
                listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
                let examples =  listOfExamples.join(", ");
                let description = `<strong><i>${spell(soundChange(percussiveClassifier))}</i></strong> is used for percussive objects: ${examples}</br><span id="percussive-bow"></span><span id="percussive-bow2"></span><span id="percussive-music"></span>`;

                if(randomClassifierFormattingNum === 1) {
                    let classifierDiv = document.createElement("div");
                    classifierDiv.classList.add("percussive");
                    classifierDiv.setAttribute("id", "percussive");
                    let classifierH4 = document.createElement("h4");
                    classifierH4.innerHTML = `Percussive Objects - <i>${spell(soundChange(percussiveClassifier))}</i>`;
                    let classifierP = document.createElement("p");
                    classifierP.innerHTML = description
                    document.getElementById("long-classifiers").appendChild(classifierDiv);
                    document.getElementById("percussive").appendChild(classifierH4);
                    document.getElementById("percussive").appendChild(classifierP);
                }  else {
                    let descriptionSpan = document.createElement("span");
                    descriptionSpan.classList.add("indent-except-first-line");
                    descriptionSpan.innerHTML = description;
                    document.getElementById("long-classifiers").appendChild(descriptionSpan);
                }

                /*extensions to classifier usage*/
                /*Decides if the classifier is extended in use to refer to bent elongated objects*/
                let bowWord = spell(soundChange(generatedCountNouns[countNounArray.indexOf("bow")]));
                let randomNumForBowxtension = Math.floor(Math.random() * 5);
                if (randomNumForBowxtension === 3) {
                    let allBowExamples = [];
                    allBowExamples.push(
                        makeExamples("arch", percussiveClassifier, "count", ""),
                        makeExamples("curved&nbspbeam", percussiveClassifier, "count", ""),
                        makeExamples("hook", percussiveClassifier, "count", ""),
                        makeExamples("rib", percussiveClassifier, "count", ""),
                    );
                    let chosenBowExamples = []; 
                    let randomBowExampleNum = Math.floor(Math.random() * (allBowExamples.length - 4)) + 4;
                    for(let i= 0; i < randomBowExampleNum; i++) {
                        let randomIndex = Math.floor(Math.random() * allBowExamples.length);
                        chosenBowExamples.push(allBowExamples[randomIndex]);
                        allBowExamples.splice(randomIndex, 1);
                    }
                    const listOfBowExamples = [];
                    chosenBowExamples.forEach((element) => listOfBowExamples.push(element));
                    listOfBowExamples.pop()
                    listOfBowExamples.push(` and ${chosenBowExamples[chosenBowExamples.length -1]}.`)
                    let bowExamples =  listOfBowExamples.join(", ")
                
                    document.getElementById("percussive-bow").innerHTML = `Due to being applied to <i>${bowWord}</i> "bow", the classifer <i>${spell(soundChange(percussiveClassifier))}</i> may also be used with any nouns referring to bent elongated objects: ${bowExamples}<br>`;
                }

                /*Decides if the classifier is extended in use to refer to stringed instruments*/
                let bowWord2 = spell(soundChange(generatedCountNouns[countNounArray.indexOf("bow")]));
                let randomNumForBowxtension2 = Math.floor(Math.random() * 5);
                if (randomNumForBowxtension2 === 3) {
                    let allBowExamples2 = [];
                    allBowExamples2.push(
                        makeExamples("guitar", percussiveClassifier, "count", ""),
                        makeExamples("harp", percussiveClassifier, "count", ""),
                        makeExamples("violin", percussiveClassifier, "count", ""),
                    );
                    let chosenBowExamples2 = []; 
                    let randomBowExampleNum2 = Math.floor(Math.random() * (allBowExamples2.length - 4)) + 4;
                    for(let i= 0; i < randomBowExampleNum2; i++) {
                        let randomIndex = Math.floor(Math.random() * allBowExamples2.length);
                        chosenBowExamples2.push(allBowExamples2[randomIndex]);
                        allBowExamples2.splice(randomIndex, 1);
                    }
                    const listOfBowExamples2 = [];
                    chosenBowExamples2.forEach((element) => listOfBowExamples2.push(element));
                    listOfBowExamples2.pop()
                    listOfBowExamples2.push(` and ${chosenBowExamples2[chosenBowExamples2.length -1]}.`)
                    let bowExamples2 =  listOfBowExamples2.join(", ")
                
                    document.getElementById("percussive-bow2").innerHTML = `Due to being applied to <i>${bowWord2}</i> "bow", the classifer <i>${spell(soundChange(percussiveClassifier))}</i> may also be used with any stringed instrument: ${bowExamples2}<br>`;

                    let randomNumForMusicExtension = Math.floor(Math.random() * 2);
                    if (randomNumForMusicExtension === 1) {
                        let allMusicExamples = [];
                        allMusicExamples.push(
                            makeExamples("piece&nbspof&nbspmusic", percussiveClassifier, "mass"),
                            makeExamples("tune", percussiveClassifier, "count", ""),
                            makeExamples("birdsong", percussiveClassifier, "count", ""),
                            makeExamples("rhythm", percussiveClassifier, "count", ""),
                        );
                        let chosenMusicExamples = []; 
                        for(let i= 0; i < randomBowExampleNum2; i++) {
                            let randomIndex = Math.floor(Math.random() * allMusicExamples.length);
                            chosenMusicExamples.push(allMusicExamples[randomIndex]);
                            allMusicExamples.splice(randomIndex, 1);
                        }
                        const listOfMusicExamples = [];
                        chosenMusicExamples.forEach((element) => listOfMusicExamples.push(element));
                        listOfMusicExamples.pop()
                        listOfMusicExamples.push(` and ${chosenMusicExamples[chosenMusicExamples.length -1]}.`)
                        let musicExamples =  listOfMusicExamples.join(", ")
                    
                        document.getElementById("percussive-music").innerHTML = `Due to being applied to stringed instruments, the classifer <i>${spell(soundChange(percussiveClassifier))}</i> may also be used with nouns referring to music in general: ${musicExamples}<br>`;
                    }

                }
            }

            /*General Classifier***************/
            let generalClassifier = generateWords();

            let generalDescription = `<strong><i>${spell(soundChange(generalClassifier))}</i></strong> is used for any noun which does not fit any other category mentioned above. It may also be used with any noun, where the speaker is unsure of which specific classifier to use, either due to the noun being fairly obscure or perhaps a loanword. It is also fairly common for children to use this classifier extensively while they are still in the process of acquiring the language.`
            
            if(randomClassifierFormattingNum === 1) {
                let generalDiv = document.createElement("div");
                generalDiv.classList.add("long-classifier-div");
                generalDiv.setAttribute("id", "general-classifiers");
                let generalH3 = document.createElement("h3");
                generalH3.innerHTML = `General Classifier - <i>${spell(soundChange(generalClassifier))}</i>`

                let generalP = document.createElement("p");
                generalP.innerHTML = generalDescription

                document.getElementById("long-classifiers").appendChild(generalDiv);
                document.getElementById("general-classifiers").appendChild(generalH3);
                document.getElementById("general-classifiers").appendChild(generalP);
            }  else {
                let descriptionSpan = document.createElement("span");
                descriptionSpan.classList.add("indent-except-first-line");
                descriptionSpan.innerHTML = generalDescription;
                document.getElementById("long-classifiers").appendChild(descriptionSpan);
            }
        }
    }
}

function createMeasureWords() {
    if(typologyNum === 0) {    
    let allMeasureWords = ["handful", "bagful", "stack", "droplet", "pair", "cup", "serving-food", "row", "bundle", "barrel", "strand", "set","gust", "pouring", "chunk", "shovelful", "netful", "cluster", "fieldful", "spoonful","eon", "day", "strip", "cutting", "selection", "wisp", "roll", "degradable", "revolution", "splatter"]

    let chosenMeasureWords = [];
    let randomNum2 = Math.floor(Math.random() * (allMeasureWords.length - 12)) + 12;   
    for(let i = 0; i < randomNum2; i++) {
        let randomIndex = Math.floor(Math.random() * allMeasureWords.length);
        chosenMeasureWords.push(allMeasureWords[randomIndex])
        allMeasureWords.splice(randomIndex, 1)
    }

    /*chooses if each classifier is formatted as it's own paragraph with an h4 title, or as a new line in one large paragraph. Each if-statement below contains an if-statement to determine which is chosen based on the below random number.*/
    let randomClassifierFormattingNum = Math.floor(Math.random() * 3);

        /*handful********************/
    if(allMeasureWords.includes("handful")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("hand")];
        
        let allExamples = [];
        allExamples.push(
            makeExamples("pinch&nbspof&nbspash", classifier, "mass", "handful"),
            makeExamples("handful&nbspof&nbspflour", classifier, "mass", "handful"),
            makeExamples("handful&nbspof&nbspsnow", classifier, "mass", "handful"),
            makeExamples("grain&nbspof&nbspsand", classifier, "mass", "handful"),
            makeExamples("handful&nbspof&nbspdirt", classifier, "mass", "handful"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for handfuls of things: ${examples}<br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("handful-div");
            classifierDiv.setAttribute("id", "handful");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Handful - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description

            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("handful").appendChild(classifierH4);
            document.getElementById("handful").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

        /*bagful********************/
        if(allMeasureWords.includes("bagful")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("bag")]
        
        let allExamples = [];
        allExamples.push(
            makeExamples("grain", classifier, "count", "bagful"),
            makeExamples("handful&nbspof&nbspflour", classifier, "mass", "sackful"),
            makeExamples("coin", classifier, "count", "pouchful"),
            makeExamples("dice", classifier, "count", "pouchful"),
            makeExamples("amount&nbspof&nbspmoney", classifier, "mass", "pouchful"),
            makeExamples("chunk&nbspof&nbspsmoked&nbspmeat", classifier, "mass", "pocketful"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for bagfuls, pocketfuls, packetfuls and sackfuls of things: ${examples}<br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("bagful-div");
            classifierDiv.setAttribute("id", "bagful");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Bagful - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description;

            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("bagful").appendChild(classifierH4);
            document.getElementById("bagful").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }


    }

        /*stack********************/
    if(allMeasureWords.includes("stack")) {
        let classifier = generateWords();
        
        let allExamples = [];
        allExamples.push(
            makeExamples("tile", classifier, "count", "stack"),
            makeExamples("sheet&nbspof&nbsppaper", classifier, "mass", "stack"),
            makeExamples("sheet", classifier, "count", "layer"),
            makeExamples("plank", classifier, "count", "stack"),
            makeExamples("log", classifier, "count", "pile"),
            makeExamples("book", classifier, "count", "pile"),
            makeExamples("coin", classifier, "count", "stack"),
            makeExamples("bowl", classifier, "count", "stack"),
            makeExamples("grain&nbspof&nbspsand", classifier, "mass", "pile"),
            makeExamples("handful&nbspof&nbspflour", classifier, "mass", "pile"),
            makeExamples("pinch&nbspof&nbspash", classifier, "mass", "pile"),
            makeExamples("handful&nbspof&nbspdirt", classifier, "mass", "pile"),
            makeExamples("piece&nbspof&nbspskin", classifier, "mass", "layer"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for vertical collections of objects: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("stack-div");
            classifierDiv.setAttribute("id", "stack");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Vertical Collections - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description;
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("stack").appendChild(classifierH4);
            document.getElementById("stack").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }

        countNounArray.push("stack");
        countNounArrayPlural.push("stacks");
        activePassive.push("passive");
        animInan.push("inan");
        divineNonDivine.push("profane");
        humanAnimalInan.push("secondinanimate");
        mascFemNeut.push("neuter");
        mascFem.push("feminine1");
        naturalArtificial.push("natural");
        animacyClassifierArray.push("inedible");
        shapeClassifierArray.push("long-and-slender");
        shortGenericClassifierArray.push("natural-inanimate");
        generatedCountNouns.push(classifier);

    }

        /*drop********************/
    if(allMeasureWords.includes("droplet")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("drop")];
        
        let allExamples = [];
        allExamples.push(
            makeExamples("drop&nbspof&nbspblood", classifier, "mass", "drop"),
            makeExamples("drop&nbspof&nbspwater", classifier, "mass", "drop"),
            makeExamples("raindrop", classifier, "mass"),
            makeExamples("drop&nbspof&nbspmilk", classifier, "mass", "drop"),
            makeExamples("bead&nbspof&nbspsweat", classifier, "mass", "bead"),
            makeExamples("drop&nbspof&nbspsaliva", classifier, "mass", "drop"),
            makeExamples("drop&nbspof&nbspoil", classifier, "mass", "drop"),
            makeExamples("drop&nbspof&nbspoil", classifier, "mass", "drop"),
            
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for liquids, to mean "drop of", "droplet": ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("droplet-div");
            classifierDiv.setAttribute("id", "droplet");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Droplets - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description;
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("droplet").appendChild(classifierH4);
            document.getElementById("droplet").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

        /*pair********************/
        if(allMeasureWords.includes("pair")) {
        let classifier = generateWords();
        
        let allExamples = [];
        allExamples.push(
            makeExamples("shoe", classifier, "count", "pair"),
            makeExamples("leg", classifier, "count", "pair"),
            makeExamples("arm", classifier, "count", "pair"),
            makeExamples("hand", classifier, "count", "pair"),
            makeExamples("eye", classifier, "count", "pair"),
            makeExamples("sock", classifier, "count", "pair"),
            makeExamples("ear", classifier, "count", "pair"),
            makeExamples("glove", classifier, "count", "pair"),
            makeExamples("spouse", classifier, "count", "pair"),
            makeExamples("ox", classifier, "count", "pair"),
            makeExamples("trouser&nbspleg", classifier, "count", "pair"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ")
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is objects that often occur in pairs: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("pair-div");
            classifierDiv.setAttribute("id", "pair");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Pair of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("pair").appendChild(classifierH4);
            document.getElementById("pair").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }

        countNounArray.push("pair");
        countNounArrayPlural.push("pairs");
        activePassive.push("passive");
        animInan.push("inan");
        divineNonDivine.push("profane");
        humanAnimalInan.push("secondinanimate");
        mascFemNeut.push("neuter");
        mascFem.push("feminine1");
        naturalArtificial.push("natural");
        animacyClassifierArray.push("inedible");
        shapeClassifierArray.push("long-and-slender");
        shortGenericClassifierArray.push("natural-inanimate");
        generatedCountNouns.push(classifier);

    }

        /*cup********************/
    if(allMeasureWords.includes("cup")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("cup")];
        
        let allExamples = [];
        allExamples.push(
            makeExamples("drop&nbspof&nbspmilk", classifier, "mass", "glass"),
            makeExamples("drop&nbspof&nbspwater", classifier, "mass", "glass"),
            makeExamples("glass&nbspof&nbspwine", classifier, "mass"),
            makeExamples("dollop&nbspof&nbspcream", classifier, "mass", "jar"),
            makeExamples("portion&nbspof&nbspsauce", classifier, "mass", "jar"),
            makeExamples("pint&nbspof&nbspbeer", classifier, "mass"),
            makeExamples("pint&nbspof&nbspmead", classifier, "mass"),
            makeExamples("drop&nbspof&nbspvinegar", classifier, "mass", "jar"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ")
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for cups, or glasses of, drinks or other edible non-solid substances: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("cup-div");
            classifierDiv.setAttribute("id", "cup");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Cup of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description;
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("cup").appendChild(classifierH4);
            document.getElementById("cup").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

        /*serving********************/
    if(allMeasureWords.includes("serving-food")) {
        let classifier = generateWords();
        let allExamples = [];
        allExamples.push(
            makeExamples("cut&nbspof&nbspmeat", classifier, "mass", "plate"),
            makeExamples("slice&nbspof&nbspbread", classifier, "mass", "loaf"),
            makeExamples("bowl&nbspof&nbspsoup", classifier, "mass"),
            makeExamples("bowl&nbspof&nbspporridge", classifier, "mass"),
        );
        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for servings of food: ${examples}</br>`;
        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("serving-food-div");
            classifierDiv.setAttribute("id", "serving-food");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Serving of Food - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("serving-food").appendChild(classifierH4);
            document.getElementById("serving-food").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
        countNounArray.push("serving&nbspof&nbspfood");
        countNounArrayPlural.push("servings&nbspof&nbspfood");
        activePassive.push("passive");
        animInan.push("inan");
        divineNonDivine.push("profane");
        humanAnimalInan.push("secondinanimate");
        mascFemNeut.push("neuter");
        mascFem.push("feminine1");
        naturalArtificial.push("natural");
        animacyClassifierArray.push("inedible");
        shapeClassifierArray.push("round");
        shortGenericClassifierArray.push("natural-inanimate");
        generatedCountNouns.push(classifier);
    }

    /*row********************/
    if(allMeasureWords.includes("row")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("row")]
        
        let allExamples = [];
        allExamples.push(
            makeExamples("tree", classifier, "count", "row"),
            makeExamples("building", classifier, "count", "row"),
            makeExamples("post", classifier, "count", "row"),
            makeExamples("pillar", classifier, "count", "row"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for rows of things: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("row-div");
            classifierDiv.setAttribute("id", "row");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Row of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("row").appendChild(classifierH4);
            document.getElementById("row").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

    /*bundle********************/
    if(allMeasureWords.includes("bundle")) {
        let classifier = generateWords();
        
        let allExamples = [];
        allExamples.push(
            makeExamples("stick", classifier, "count", "bundle"),
            makeExamples("pole", classifier, "count", "bundle"),
            makeExamples("branch", classifier, "count", "bundle"),
            makeExamples("javelin", classifier, "count", "bundle"),
            makeExamples("spear", classifier, "count", "bundle"),
            makeExamples("arrow", classifier, "count", "bundle"),
            makeExamples("row", classifier, "count", "bundle"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for bundles of things: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("bundle-div");
            classifierDiv.setAttribute("id", "bundle");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Bundle of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("bundle").appendChild(classifierH4);
            document.getElementById("bundle").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }

        countNounArray.push("bundle");
        countNounArrayPlural.push("bundles");
        activePassive.push("passive");
        animInan.push("inan");
        divineNonDivine.push("profane");
        humanAnimalInan.push("secondinanimate");
        mascFemNeut.push("neuter");
        mascFem.push("feminine1");
        naturalArtificial.push("natural");
        animacyClassifierArray.push("inedible");
        shapeClassifierArray.push("long-and-slender");
        shortGenericClassifierArray.push("artificial");
        generatedCountNouns.push(classifier);
    }

    /*barrel********************/
    if(allMeasureWords.includes("barrel")) {
        let classifier = generateWords();
        
        let allExamples = [];
        allExamples.push(
            makeExamples("acorn", classifier, "count", "barrel"),
            makeExamples("apple", classifier, "count", "barrel"),
            makeExamples("axe", classifier, "count", "wagonful"),
            makeExamples("blade", classifier, "count", "shipment"),
            makeExamples("drop&nbspof&nbspwater", classifier, "mass", "barrel"),
            makeExamples("glass&nbspof&nbspwine", classifier, "mass", "barrel"),
            makeExamples("grain", classifier, "count", "wagonful"),
            makeExamples("cut&nbspof&nbspmeat", classifier, "mass", "boatful"),
            makeExamples("handful&nbspof&nbspflour", classifier, "mass", "wagonful"),
            makeExamples("fish", classifier, "count", "boatful"),
            makeExamples("pint&nbspof&nbspmead", classifier, "mass", "barrel"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for barrels of, wagonfuls of, boatfuls of, shipments of, etc items packed into a mode of transport of things: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("barrel-div");
            classifierDiv.setAttribute("id", "barrel");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Shipments of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("barrel").appendChild(classifierH4);
            document.getElementById("barrel").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }

        countNounArray.push("shipment");
        countNounArrayPlural.push("shipments");
        activePassive.push("passive");
        animInan.push("inan");
        divineNonDivine.push("profane");
        humanAnimalInan.push("secondinanimate");
        mascFemNeut.push("neuter");
        mascFem.push("feminine1");
        naturalArtificial.push("artificial");
        animacyClassifierArray.push("inedible");
        shapeClassifierArray.push("short-and-wide");
        shortGenericClassifierArray.push("tool");
        generatedCountNouns.push(classifier);
    }

        /*strand********************/
    if(allMeasureWords.includes("strand")) {
        let classifier = generateWords();
        
        let allExamples = [];
        allExamples.push(
            makeExamples("strand&nbspof&nbsphair", classifier, "mass", "strand"),
            makeExamples("wisp&nbspof&nbspsmoke", classifier, "mass", "strand"),
            makeExamples("blade&nbspof&nbspgrass", classifier, "mass", "strand"),
            makeExamples("bale&nbspof&nbspstraw", classifier, "mass", "strand"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for strands of things: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("strand-div");
            classifierDiv.setAttribute("id", "strand");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Strands of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("strand").appendChild(classifierH4);
            document.getElementById("strand").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }

        countNounArray.push("strand");
        countNounArrayPlural.push("strands");
        activePassive.push("passive");
        animInan.push("inan");
        divineNonDivine.push("profane");
        humanAnimalInan.push("secondinanimate");
        mascFemNeut.push("neuter");
        mascFem.push("feminine1");
        naturalArtificial.push("natural");
        animacyClassifierArray.push("inedible");
        shapeClassifierArray.push("long-and-slender");
        shortGenericClassifierArray.push("natural-inanimate");
        generatedCountNouns.push(classifier);
    }

    /*set********************/
    if(allMeasureWords.includes("set")) {
        let classifier = generateWords();
        
        let allExamples = [];
        allExamples.push(
            makeExamples("bowl", classifier, "count", "set"),
            makeExamples("song", classifier, "count", "set"),
            makeExamples("hammer", classifier, "count", "set"),
            makeExamples("jewel", classifier, "count", "set"),
            makeExamples("wheel", classifier, "count", "set")
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for sets of or complete collections of a set number of items of things: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("set-div");
            classifierDiv.setAttribute("id", "set");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Sets of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("set").appendChild(classifierH4);
            document.getElementById("set").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }

        countNounArray.push("set");
        countNounArrayPlural.push("sets");
        activePassive.push("passive");
        animInan.push("inan");
        divineNonDivine.push("profane");
        humanAnimalInan.push("secondinanimate");
        mascFemNeut.push("neuter");
        mascFem.push("feminine1");
        naturalArtificial.push("natural");
        animacyClassifierArray.push("inedible");
        shapeClassifierArray.push("long-and-slender");
        shortGenericClassifierArray.push("natural-inanimate");
        generatedCountNouns.push(classifier);
    }

    /*revolution********************/
    if(allMeasureWords.includes("revolution")) {
        let classifier = generateWords();
        
        let allExamples = [];
        allExamples.push(
            makeExamples("wheel", classifier, "count", "turning"),
            makeExamples("lever", classifier, "count", "cranking"),
            makeExamples("season", classifier, "count", "turning"),
            makeExamples("heart", classifier, "count", "beating"),
            makeExamples("year", classifier, "count", "passing"),
            makeExamples("length&nbspof&nbsprope", classifier, "mass", "winding")
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for revolutions, or turnings, of things: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("revolution-div");
            classifierDiv.setAttribute("id", "revolution");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Revolution of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("revolution").appendChild(classifierH4);
            document.getElementById("revolution").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }

        countNounArray.push("revolution");
        countNounArrayPlural.push("revolution");
        activePassive.push("active");
        animInan.push("inan");
        divineNonDivine.push("divine");
        humanAnimalInan.push("secondinanimate");
        mascFemNeut.push("neuter");
        mascFem.push("feminine1");
        naturalArtificial.push("natural");
        animacyClassifierArray.push("inedible");
        shapeClassifierArray.push("shapeless");
        shortGenericClassifierArray.push("natural-inanimate");
        generatedCountNouns.push(classifier);
    }

    /*gust********************/
    if(allMeasureWords.includes("gust")) {
        let classifier = generateWords();
        
        let allExamples = [];
        allExamples.push(
            makeExamples("gust&nbspof&nbspwind", classifier, "mass", "gust"),
            makeExamples("confession", classifier, "count", "outburst"),
            makeExamples("emotion", classifier, "count", "outburst"),
            makeExamples("drop&nbspof&nbspwater", classifier, "mass", "flood"),
            makeExamples("ounce&nbspof&nbsptruth", classifier, "mass", "revelation"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for gusts and outbursts of things: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("gust-div");
            classifierDiv.setAttribute("id", "gust");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Outbursts of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("gust").appendChild(classifierH4);
            document.getElementById("gust").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }

        countNounArray.push("gust");
        countNounArrayPlural.push("gusts");
        activePassive.push("active");
        animInan.push("anim");
        divineNonDivine.push("profane");
        humanAnimalInan.push("secondinanimate");
        mascFemNeut.push("neuter");
        mascFem.push("feminine1");
        naturalArtificial.push("natural");
        animacyClassifierArray.push("inedible");
        shapeClassifierArray.push("shapeless");
        shortGenericClassifierArray.push("natural-inanimate");
        generatedCountNouns.push(classifier);
    }

    /*pouring********************/
    if(allMeasureWords.includes("pouring")) {
        let classifier = generatedTransitiveVerbs[transitiveVerbArray.indexOf("pour")];
        
        let allExamples = [];
        allExamples.push(
            makeExamples("libation", classifier, "count", "pouring"),
            makeExamples("glass&nbspof&nbspwine", classifier, "mass", "pouring"),
            makeExamples("portion&nbspof&nbspsauce", classifier, "mass", "pouring"),
            makeExamples("drop&nbspof&nbspwater", classifier, "mass", "pouring"),
            makeExamples("drop&nbspof&nbspoil", classifier, "mass", "pouring"),
            makeExamples("drop&nbspof&nbspmilk", classifier, "mass", "pouring"),
            makeExamples("pint&nbspof&nbspmead", classifier, "mass", "pouring"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for pourings of liquids, usually servings of drinks: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("pouring-div");
            classifierDiv.setAttribute("id", "pouring");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Pourings of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("pouring").appendChild(classifierH4);
            document.getElementById("pouring").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

    /*chunk********************/
    if(allMeasureWords.includes("chunk")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("chunk")]
        
        let allExamples = [];
        allExamples.push(
            makeExamples("chunk&nbspof&nbspwood", classifier, "mass", "chunk"),
            makeExamples("piece&nbspof&nbspflint", classifier, "mass", "chunk"),
            makeExamples("shard&nbspof&nbspglass", classifier, "mass", "shard"),
            makeExamples("clump&nbspof&nbspcharcoal", classifier, "mass", "stick"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for chunks or clumps of things, or more generally an irregularly shaped breaking off from a larger mass: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("chunk-div");
            classifierDiv.setAttribute("id", "chunk");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Chunk of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("chunk").appendChild(classifierH4);
            document.getElementById("chunk").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

    /*shovelful********************/
    if(allMeasureWords.includes("shovelful")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("shovel")]
        
        let allExamples = [];
        allExamples.push(
            makeExamples("handful&nbspof&nbspsnow", classifier, "mass", "shovelful"),
            makeExamples("handful&nbspof&nbspdirt", classifier, "mass", "shovelful"),
            makeExamples("clump&nbspof&nbspcharcoal", classifier, "mass", "shovelful"),
            makeExamples("grain&nbspof&nbspsand", classifier, "mass", "shovelful"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for shovelfuls of material: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("shovelful-div");
            classifierDiv.setAttribute("id", "shovelful");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Shovelful of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("shovelful").appendChild(classifierH4);
            document.getElementById("shovelful").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

    /*netful********************/
    if(allMeasureWords.includes("netful")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("net")]
        
        let allExamples = [];
        allExamples.push(
            makeExamples("fish", classifier, "count", "netful"),
            makeExamples("crab", classifier, "count", "netful"),
            makeExamples("trout", classifier, "count", "netful"),
            makeExamples("eel", classifier, "count", "netful"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for netfuls of aquatic animals: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("netful-div");
            classifierDiv.setAttribute("id", "netful");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Netful of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("netful").appendChild(classifierH4);
            document.getElementById("netful").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

    /*cluster********************/
    if(allMeasureWords.includes("cluster")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("cluster")]
        
        let allExamples = [];
        allExamples.push(
            makeExamples("star", classifier, "count", "cluster"),
            makeExamples("mountain", classifier, "count", "cluster"),
            makeExamples("boulder", classifier, "count", "cluster"),
            makeExamples("fish", classifier, "count", "cluster"),
            makeExamples("boat", classifier, "count", "cluster"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for collections of things in fields: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("cluster-div");
            classifierDiv.setAttribute("id", "cluster");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Cluster of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("cluster").appendChild(classifierH4);
            document.getElementById("cluster").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

    /*fieldful********************/
    if(allMeasureWords.includes("fieldful")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("field")]
        
        let allExamples = [];
        allExamples.push(
            makeExamples("herd", classifier, "count", "fieldful"),
            makeExamples("crowd", classifier, "count", "fieldful"),
            makeExamples("cow", classifier, "count", "fieldful"),
            makeExamples("sheep", classifier, "count", "fieldful"),
            makeExamples("blade&nbspof&nbspgrass", classifier, "mass", "fieldful"),
            makeExamples("horse", classifier, "count", "fieldful"),
            makeExamples("wagon", classifier, "count", "fieldful"),
        );

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for spaced out groups of solid objects: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("fieldful-div");
            classifierDiv.setAttribute("id", "fieldful");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Fieldful of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("fieldful").appendChild(classifierH4);
            document.getElementById("fieldful").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

    /*spoonful********************/
    if(allMeasureWords.includes("spoonful")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("spoon")]
        
        let allExamples = [];
        allExamples.push(
            makeExamples("bowl&nbspof&nbspporridge", classifier, "mass", "spoonful"),
            makeExamples("portion&nbspof&nbspsauce", classifier, "mass", "spoonful"),
            makeExamples("spoonful&nbspof&nbsphoney", classifier, "mass", "spoonful"),
            makeExamples("pinch&nbspof&nbspsalt", classifier, "mass", "spoonful"),
            makeExamples("dollop&nbspof&nbspcream", classifier, "mass", "spoonful"),
            makeExamples("drop&nbspof&nbspoil", classifier, "mass", "spoonful"),
            makeExamples("jar&nbspof&nbspjam", classifier, "mass", "spoonful"),
            makeExamples("jar&nbspof&nbspmustard", classifier, "mass", "spoonful"),
        );
        

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for spoonfuls of substances: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("spoonful-div");
            classifierDiv.setAttribute("id", "spoonful");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Spoonful of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("spoonful").appendChild(classifierH4);
            document.getElementById("spoonful").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

    /*strip********************/
    if(allMeasureWords.includes("strip")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("strip")]
        
        let allExamples = [];
        allExamples.push(
            makeExamples("strip&nbspof&nbspbark", classifier, "mass", "strip"),
            makeExamples("strip&nbspof&nbspleather", classifier, "mass", "strip"),
            makeExamples("sheet&nbspof&nbsppaper", classifier, "mass", "strip"),

        );
        

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for strips of materials: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("strip-div");
            classifierDiv.setAttribute("id", "strip");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Strip of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("strip").appendChild(classifierH4);
            document.getElementById("strip").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

    /*splatter********************/
    if(allMeasureWords.includes("splatter")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("splatter")]
        
        let allExamples = [];
        allExamples.push(
            makeExamples("drop&nbspof&nbspblood", classifier, "mass", "splattering"),
            makeExamples("rock", classifier, "count", "smattering"),
            makeExamples("seed", classifier, "count", "smattering"),

        );
        

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for smatterings or splatterings of loosely grouped together collection of irregularly shaped objects, mostly liquids: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("splatter-div");
            classifierDiv.setAttribute("id", "splatter");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Splattering of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("splatter").appendChild(classifierH4);
            document.getElementById("splatter").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

    /*degradable********************/
    if(allMeasureWords.includes("degradable")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("stick")]
        
        let allExamples = [];
        allExamples.push(
            makeExamples("stick&nbspof&nbspcandle&nbspwax", classifier, "mass", "stick"),
            makeExamples("stick&nbspof&nbspchalk", classifier, "mass", "stick"),
            makeExamples("clump&nbspof&nbspcharcoal", classifier, "mass", "stick"),
            makeExamples("stick&nbspof&nbspincense", classifier, "mass", "stick"),

        );
        

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for sticks of degradable materials: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("degradable-div");
            classifierDiv.setAttribute("id", "degradable");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Splattering of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("degradable").appendChild(classifierH4);
            document.getElementById("degradable").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

    /*roll********************/
    if(allMeasureWords.includes("roll")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("roll")]
        
        let allExamples = [];
        allExamples.push(
            makeExamples("scroll", classifier, "count", "roll"),
            makeExamples("sheet&nbspof&nbsppaper", classifier, "mass", "roll"),
            makeExamples("rug", classifier, "count", "roll"),
            makeExamples("sail", classifier, "count", "roll"),
        );
        

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for rools or sheets of wrappable materials: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("roll-div");
            classifierDiv.setAttribute("id", "roll");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Roll of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("roll").appendChild(classifierH4);
            document.getElementById("roll").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }

    /*cutting********************/
    if(allMeasureWords.includes("cutting")) {
        let classifier = generatedCountNouns[countNounArray.indexOf("roll")]
        
        let allExamples = [];
        allExamples.push(
            makeExamples("chunk&nbspof&nbspwood", classifier, "mass", "shaving"),
            makeExamples("strand&nbspof&nbsphair", classifier, "mass", "lock"),
            makeExamples("downpour&nbspof&nbsphail", classifier, "mass", "downpour"),
            makeExamples("handful&nbspof&nbspsnow", classifier, "mass", "downpour"),
            makeExamples("chunk&nbspof&nbspiron", classifier, "mass", "shaving"),
        );
        

        let chosenExamples = []; 
        let randomExampleNum = Math.floor(Math.random() * (allExamples.length - 4)) + 4;
        for(let i= 0; i < randomExampleNum; i++) {
            let randomIndex = Math.floor(Math.random() * allExamples.length);
            chosenExamples.push(allExamples[randomIndex]);
            allExamples.splice(randomIndex, 1);
        }
        
        const listOfExamples = [];
        chosenExamples.forEach((element) => listOfExamples.push(element));
        listOfExamples.pop()
        listOfExamples.push(` and ${chosenExamples[chosenExamples.length -1]}.`)
        let examples =  listOfExamples.join(", ");
        let description = `<strong><i>${spell(soundChange(classifier))}</i></strong> is used for cuttings or shavings of materials. It may also be used for outpours or outbursts of droplets or particles: ${examples}</br>`;

        if(randomClassifierFormattingNum === 1) {
            let classifierDiv = document.createElement("div");
            classifierDiv.classList.add("cutting-div");
            classifierDiv.setAttribute("id", "cutting");
            let classifierH4 = document.createElement("h4");
            classifierH4.innerHTML = `Cutting of - <i>${spell(soundChange(classifier))}</i>`;
            let classifierP = document.createElement("p");
            classifierP.innerHTML = description
            document.getElementById("measure-words").appendChild(classifierDiv);
            document.getElementById("cutting").appendChild(classifierH4);
            document.getElementById("cutting").appendChild(classifierP);
        }  else {
            let descriptionSpan = document.createElement("span");
            descriptionSpan.classList.add("indent-except-first-line");
            descriptionSpan.innerHTML = description;
            document.getElementById("measure-words").appendChild(descriptionSpan);
        }
    }
    }
}

function selectNounsClassifier(classifierArray, array, category) {
    if(typologyNum === 0) {
        for(let i = 0; i < countNounArray.length; i++) {
            let index = countNounArray.indexOf(countNounArray[i])
            if(classifierArray[index] === category) {
                array.push(countNounArray[i]);
            }
        }
        let spanNoun = document.getElementsByClassName(category + "-noun");
        let num = 1;
        for(let i = 0; i < spanNoun.length; i++) {
            let randomNumber = Math.floor(Math.random() * array.length);
            let randomNoun = generatedCountNouns[countNounArray.indexOf(array[randomNumber])] 
            document.getElementById("noun" + num.toString() + category).innerHTML = randomNoun;
            for(let i = 0; i < document.getElementsByClassName("noun-meaning" + num.toString() + category).length; i++) {
                document.getElementsByClassName("noun-meaning" + num.toString() + category)[i].innerHTML = array[randomNumber]
            }
            num++;
        }
    }

}

function selectMassNounsClassifier(classifierArray, array, category) {
    if(typologyNum === 0) {
        for(let i = 0; i < massNounArray.length; i++) {
            let index = massNounArray.indexOf(massNounArray[i])
            if(classifierArray[index] === category) {
                array.push(massNounArray[i]);
            }
        }

        let spanNoun = document.getElementsByClassName(category + "-mass-noun");
        let num = 1;
        for(let i = 0; i < spanNoun.length; i++) {
            let randomNumber = Math.floor(Math.random() * array.length);
            let randomNoun = generatedMassNouns[massNounArray.indexOf(array[randomNumber])] 
            document.getElementById("mass-noun" + num.toString() + category).innerHTML = randomNoun;
            for(let i = 0; i < document.getElementsByClassName("mass-noun-meaning" + num.toString() + category).length; i++) {
                document.getElementsByClassName("mass-noun-meaning" + num.toString() + category)[i].innerHTML = array[randomNumber]
            }
            num++;
        }
    }
}

let branchExample = "";
let poleExample = "";
let shoulderExample = "";
let wedgeExample = "";
let appleExample = "";
let pebbleExample = "";
let ballExample = "";
let arrowExample = "";
let thornExample = "";
let forkExample = "";
let slabExample = "";
let faceExample = "";
let airExample = "";
let manExample = "";
let womanExample = "";
let childExample = "";
let wolfExample = "";
let bearExample = "";
let goatExample = "";
let skinExample = "";
let sheepExample = "";
let labourExample = "";
let pushExample = "";
let horseExample = "";
let hoofExample = "";
let donkeyExample = "";
let milkExample = "";
let udderExample = "";
let cowExample = "";
let thingExample = "";
let rockExample = "";
let basketExample = "";
let berryExample = "";
let manExample2 = "";
let humanExample = "";
let personExample = "";
let oakExample = "";
let alderExample = "";
let elmExample = "";
let beechExample = "";
let grassExample = "";
let flowerExample = "";
let landExample = "";
let waterExample = "";
let seaExample = "";
let fishExample = "";
let skyExample = "";
let cloudExample = "";
let wingExample = "";
let wordExample = "";
let mouthExample = "";
let axeExample = "";
let handleExample = "";
let hammerExample = "";
let ploughExample = "";
let rockExample2 = "";
let dirtExample = "";
let mudExample = "";
let dropExample = "";
let poolExample = "";
let cupExample = "";

function classifierExamplesInDictionaryEntries(word, array, countOrMassWord, countOrMassRandomWord) {
    if(typologyNum === 0) {
        let classifier = "";
        if(countOrMassWord === "count") { 
            classifier = generatedCountNouns[countNounArray.indexOf(word)]
        } else if (countOrMassWord === "mass") {
            classifier = generatedMassNouns[massNounArray.indexOf(word)]
        }

        let randomNoun = "";
        let randomNounEnglishTranslation = "";
        if(countOrMassRandomWord === "count") {
            randomNoun = generatedCountNouns[countNounArray.indexOf(array[Math.floor(Math.random() * array.length)])];
            randomNounEnglishTranslation = countNounArrayPlural[generatedCountNouns.indexOf(randomNoun)]; 
            //console.log(`count ${word} - ${array}  - ${randomNoun} -  ${randomNounEnglishTranslation} `)
        } else if (countOrMassRandomWord === "mass") {
            randomNoun = generatedMassNouns[massNounArray.indexOf(array[Math.floor(Math.random() * array.length)])];
            randomNounEnglishTranslation = pluralSingulativeMassNounArray[generatedMassNouns.indexOf(randomNoun)];
        }

        if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
            let example = `<strong><i>${spell(soundChange(randomNoun))} ${spell(soundChange(classifier))}</strong></i> "${randomNounEnglishTranslation}"`
            exampleArray.push(example);
            //console.log(example)
        } else if (checkIfHeadInitialOrHeadFinal() === "headFinal") {
            let example = `<strong><i>${spell(soundChange(classifier))} ${spell(soundChange(randomNoun))}</strong></i> "${randomNounEnglishTranslation}"`
            exampleArray.push(example);
            //console.log(example)
        }
    }

    
}

function verbClassifierExamplesInDictionaryEntries(word, array, transitiveOrIntransitive, countOrMassRandomWord) {
    if(typologyNum === 0) {
        let classifier = "";
        if(transitiveOrIntransitive === "transitive") { 
            classifier = generatedTransitiveVerbs[transitiveVerbArray.indexOf(word)]
        } else if (transitiveOrIntransitive === "intransitive") {
            classifier = generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(word)]
        }

        let randomNoun = "";
        let randomNounEnglishTranslation = "";
        if(countOrMassRandomWord === "count") {
            
            randomNoun = generatedCountNouns[countNounArray.indexOf(array[Math.floor(Math.random() * array.length)])];
            randomNounEnglishTranslation = countNounArrayPlural[generatedCountNouns.indexOf(randomNoun)];
        } else if (countOrMassRandomWord === "mass") {
            randomNoun = generatedMassNouns[massNounArray.indexOf(array[Math.floor(Math.random() * array.length)])];
            randomNounEnglishTranslation = pluralSingulativeMassNounArray[generatedMassNouns.indexOf(randomNoun)];
        }
    
        if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
            let example = `<strong><i>${spell(soundChange(randomNoun))} ${spell(soundChange(classifier))}</strong></i> "${randomNounEnglishTranslation}"`
            exampleArray.push(example);
        } else if (checkIfHeadInitialOrHeadFinal() === "headFinal") {
            let example = `<strong><i>${spell(soundChange(classifier))} ${spell(soundChange(randomNoun))}</strong></i> "${randomNounEnglishTranslation}"`
            exampleArray.push(example);
        };
    }
}

// function adjectiveClassifierExamplesInDictionaryEntries(word, array, countOrMassRandomWord) {
    
//     let classifier = generatedAdjectives[adjectiveArray.indexOf(word)]
//     let randomNoun = "";
//     let randomNounEnglishTranslation = "";
//     if(countOrMassRandomWord === "count") {
        
//         randomNoun = generatedCountNouns[countNounArray.indexOf(array[Math.floor(Math.random() * array.length)])];
//         randomNounEnglishTranslation = countNounArrayPlural[generatedCountNouns.indexOf(randomNoun)];
//     } else if (countOrMassRandomWord === "mass") {
//         randomNoun = generatedMassNouns[massNounArray.indexOf(array[Math.floor(Math.random() * array.length)])];
//         randomNounEnglishTranslation = pluralSingulativeMassNounArray[generatedMassNouns.indexOf(randomNoun)];
//     }
   
//     if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
//         let example = `<strong><i>${spell(soundChange(randomNoun))} ${spell(soundChange(classifier))}</strong></i> "${randomNounEnglishTranslation}"`
//         exampleArray.push(example);
//     } else if (checkIfHeadInitialOrHeadFinal() === "headFinal") {
//         let example = `<strong><i>${spell(soundChange(classifier))} ${spell(soundChange(randomNoun))}</strong></i> "${randomNounEnglishTranslation}"`
//         exampleArray.push(example);
//     }
// }

function callClassifierExamples() {
    if(typologyNum === 0) {
        classifierExamplesInDictionaryEntries("branch", longAndSlenderArray, "count", "count");
        branchExample = exampleArray[0];

        classifierExamplesInDictionaryEntries("pole", longAndSlenderArray, "count", "count");
        poleExample = exampleArray[1];

        classifierExamplesInDictionaryEntries("shoulder", shortAndWideArray, "count", "count");
        shoulderExample = exampleArray[2];

        classifierExamplesInDictionaryEntries("wedge", shortAndWideArray, "count", "count");
        wedgeExample = exampleArray[3];

        classifierExamplesInDictionaryEntries("apple", roundArray, "count", "count");
        appleExample = exampleArray[4];

        classifierExamplesInDictionaryEntries("pebble", roundArray, "count", "count");
        pebbleExample = exampleArray[5];

        classifierExamplesInDictionaryEntries("ball", roundArray, "count", "count");
        ballExample = exampleArray[6];

        classifierExamplesInDictionaryEntries("arrow", pointedArray, "count", "count");
        arrowExample = exampleArray[7];

        classifierExamplesInDictionaryEntries("thorn", pointedArray, "count", "count");
        thornExample = exampleArray[8];

        classifierExamplesInDictionaryEntries("fork", pointedArray, "count", "count");
        forkExample = exampleArray[9];

        classifierExamplesInDictionaryEntries("slab", flatArray, "count", "count");
        slabExample = exampleArray[10];

        classifierExamplesInDictionaryEntries("face", flatArray, "count", "count");
        faceExample = exampleArray[11];

        classifierExamplesInDictionaryEntries("air", shapelessMassArray, "mass", "mass");
        airExample = exampleArray[12];

        classifierExamplesInDictionaryEntries("man", manArray, "count", "count");
        manExample = exampleArray[13];

        classifierExamplesInDictionaryEntries("woman", womanArray, "count", "count");
        womanExample = exampleArray[14];

        classifierExamplesInDictionaryEntries("child", childArray, "count", "count");
        childExample = exampleArray[15];

        classifierExamplesInDictionaryEntries("wolf", wildAnimalArray, "count", "count");
        wolfExample = exampleArray[16];

        classifierExamplesInDictionaryEntries("bear", wildAnimalArray, "count", "count");
        bearExample = exampleArray[17];

        classifierExamplesInDictionaryEntries("goat", meatArray, "count", "count");
        goatExample = exampleArray[18];

        classifierExamplesInDictionaryEntries("skin", furArray, "mass", "count");
        skinExample = exampleArray[19];

        classifierExamplesInDictionaryEntries("sheep", furArray, "count", "count");
        sheepExample = exampleArray[20];

        classifierExamplesInDictionaryEntries("labour", labourArray, "mass", "count");
        labourExample = exampleArray[21];

        verbClassifierExamplesInDictionaryEntries("push", labourArray, "transitive", "count");
        pushExample = exampleArray[22];

        classifierExamplesInDictionaryEntries("horse", labourArray, "count", "count");
        horseExample = exampleArray[23];

        classifierExamplesInDictionaryEntries("hoof", labourArray, "count", "count");
        hoofExample = exampleArray[24];

        classifierExamplesInDictionaryEntries("donkey", labourArray, "count", "count");
        donkeyExample = exampleArray[25];

        classifierExamplesInDictionaryEntries("milk", milkArray, "mass", "count");
        milkExample = exampleArray[26];

        classifierExamplesInDictionaryEntries("udder", milkArray, "count", "count");
        udderExample = exampleArray[27];

        classifierExamplesInDictionaryEntries("cow", milkArray, "count", "count");
        cowExample = exampleArray[28];

        classifierExamplesInDictionaryEntries("thing", inedibleArray, "count", "count");
        thingExample = exampleArray[29];

        classifierExamplesInDictionaryEntries("rock", inedibleArray, "count", "count");
        rockExample = exampleArray[30];

        classifierExamplesInDictionaryEntries("basket", edibleArray, "count", "count");
        basketExample = exampleArray[31];

        classifierExamplesInDictionaryEntries("berry", edibleArray, "count", "count");
        berryExample = exampleArray[32];

        classifierExamplesInDictionaryEntries("man", humanClassifierArray, "count", "count");
        manExample2 = exampleArray[33];

        classifierExamplesInDictionaryEntries("human", humanClassifierArray, "count", "count");
        humanExample = exampleArray[34];

        classifierExamplesInDictionaryEntries("person", humanClassifierArray, "count", "count");
        personExample = exampleArray[35];

        classifierExamplesInDictionaryEntries("oak", treeClassifierArray, "count", "count");
        oakExample = exampleArray[36];

        classifierExamplesInDictionaryEntries("alder", treeClassifierArray, "count", "count");
        alderExample = exampleArray[37];

        classifierExamplesInDictionaryEntries("elm", treeClassifierArray, "count", "count");
        elmExample = exampleArray[38];

        classifierExamplesInDictionaryEntries("beech", treeClassifierArray, "count", "count");
        beechExample = exampleArray[39];

        classifierExamplesInDictionaryEntries("grass", grassClassifierArray, "mass", "count");
        grassExample = exampleArray[40];

        classifierExamplesInDictionaryEntries("flower", flowerClassifierArray, "count", "count");
        flowerExample = exampleArray[41];

        classifierExamplesInDictionaryEntries("land", landAnimalClassifierArray, "count", "count");
        landExample = exampleArray[42];

        classifierExamplesInDictionaryEntries("water", waterAnimalClassifierArray, "mass", "count");
        waterExample = exampleArray[43];

        classifierExamplesInDictionaryEntries("sea", waterAnimalClassifierArray, "count", "count");
        seaExample = exampleArray[44];

        classifierExamplesInDictionaryEntries("fish", waterAnimalClassifierArray, "count", "count");
        fishExample = exampleArray[45];

        classifierExamplesInDictionaryEntries("sky", flyingAnimalClassifierArray, "count", "count");
        skyExample = exampleArray[46];

        classifierExamplesInDictionaryEntries("cloud", flyingAnimalClassifierArray, "count", "count");
        cloudExample = exampleArray[47];

        classifierExamplesInDictionaryEntries("wing", flyingAnimalClassifierArray, "count", "count");
        wingExample = exampleArray[48];

        classifierExamplesInDictionaryEntries("word", wordClassifierArray, "count", "count");
        wordExample = exampleArray[49];

        classifierExamplesInDictionaryEntries("mouth", wordClassifierArray, "count", "count");
        mouthExample = exampleArray[50];

        classifierExamplesInDictionaryEntries("axe", toolClassifierArray, "count", "count");
        axeExample = exampleArray[51];

        classifierExamplesInDictionaryEntries("handle", toolClassifierArray, "count", "count");
        handleExample = exampleArray[52];

        classifierExamplesInDictionaryEntries("hammer", toolClassifierArray, "count", "count");
        hammerExample = exampleArray[53];

        classifierExamplesInDictionaryEntries("plough", toolClassifierArray, "count", "count");
        ploughExample = exampleArray[54];

        classifierExamplesInDictionaryEntries("rock", naturalInanimateClassifierArray, "count", "count");
        rockExample2 = exampleArray[55];

        classifierExamplesInDictionaryEntries("dirt", naturalInanimateClassifierArray, "mass", "count");
        dirtExample = exampleArray[56];

        classifierExamplesInDictionaryEntries("mud", naturalInanimateClassifierArray, "mass", "count");
        mudExample = exampleArray[57];

        classifierExamplesInDictionaryEntries("drop", liquidClassifierArray, "count", "count");
        dropExample = exampleArray[58];

        classifierExamplesInDictionaryEntries("pool", liquidClassifierArray, "count", "count");
        poolExample = exampleArray[59];

        classifierExamplesInDictionaryEntries("cup", liquidClassifierArray, "count", "count");
        cupExample = exampleArray[60];
    }
}

function IsolatingNouns() {
    if(typologyNum === 0) {
        selectNounsClassifier(shapeClassifierArray, longAndSlenderArray, "long-and-slender");
        selectNounsClassifier(shapeClassifierArray, shortAndWideArray, "short-and-wide");
        selectNounsClassifier(shapeClassifierArray, roundArray, "round");
        selectNounsClassifier(shapeClassifierArray, pointedArray, "pointed");
        selectNounsClassifier(shapeClassifierArray, flatArray, "flat");
        selectNounsClassifier(shapeClassifierArray, shapelessArray , "shapeless");

        selectNounsClassifier(animacyClassifierArray, manArray, "man");
        selectNounsClassifier(animacyClassifierArray, womanArray, "woman");
        selectNounsClassifier(animacyClassifierArray, childArray, "child");
        selectNounsClassifier(animacyClassifierArray, wildAnimalArray, "wild-animal");
        selectNounsClassifier(animacyClassifierArray, meatArray, "meat");
        selectNounsClassifier(animacyClassifierArray, furArray, "fur");
        selectNounsClassifier(animacyClassifierArray, labourArray, "labour");
        selectNounsClassifier(animacyClassifierArray, milkArray, "milk");
        selectNounsClassifier(animacyClassifierArray, inedibleArray, "inedible");
        selectNounsClassifier(animacyClassifierArray, edibleArray, "edible");

        selectNounsClassifier(shortGenericClassifierArray, humanClassifierArray, "human2");
        selectNounsClassifier(shortGenericClassifierArray, treeClassifierArray, "tree");
        selectNounsClassifier(shortGenericClassifierArray, grassClassifierArray, "grass");
        selectNounsClassifier(shortGenericClassifierArray, flowerClassifierArray, "flower");
        selectNounsClassifier(shortGenericClassifierArray, landAnimalClassifierArray, "land-animal");
        selectNounsClassifier(shortGenericClassifierArray, waterAnimalClassifierArray, "water-animal");
        selectNounsClassifier(shortGenericClassifierArray, flyingAnimalClassifierArray, "flying-animal");
        selectNounsClassifier(shortGenericClassifierArray, wordClassifierArray, "word");
        selectNounsClassifier(shortGenericClassifierArray, toolClassifierArray, "tool");
        selectNounsClassifier(shortGenericClassifierArray, naturalInanimateClassifierArray, "natural-inanimate");
        selectNounsClassifier(shortGenericClassifierArray, liquidClassifierArray, "liquid");


        selectMassNounsClassifier(shapeClassifierMassArray, longAndSlenderMassArray, "long-and-slender");
        selectMassNounsClassifier(shapeClassifierMassArray, shortAndWideMassArray, "short-and-wide");
        selectMassNounsClassifier(shapeClassifierMassArray, roundMassArray, "round");
        selectMassNounsClassifier(shapeClassifierMassArray, pointedMassArray, "pointed");
        selectMassNounsClassifier(shapeClassifierMassArray, flatMassArray, "flat");
        selectMassNounsClassifier(shapeClassifierMassArray, shapelessMassArray , "shapeless");

        selectMassNounsClassifier(animacyClassifierMassArray, manMassArray, "man");
        selectMassNounsClassifier(animacyClassifierMassArray, womanMassArray, "woman");
        selectMassNounsClassifier(animacyClassifierMassArray, childMassArray, "child");
        selectMassNounsClassifier(animacyClassifierMassArray, wildAnimalMassArray, "wild-animal");
        selectMassNounsClassifier(animacyClassifierMassArray, meatMassArray, "meat");
        selectMassNounsClassifier(animacyClassifierMassArray, furMassArray, "fur");
        selectMassNounsClassifier(animacyClassifierMassArray, labourMassArray, "labour");
        selectMassNounsClassifier(animacyClassifierMassArray, milkMassArray, "milk");
        selectMassNounsClassifier(animacyClassifierMassArray, inedibleMassArray, "inedible");
        selectMassNounsClassifier(animacyClassifierMassArray, edibleMassArray, "edible");

        selectMassNounsClassifier(shortGenericClassifierMassArray, humanClassifierMassArray, "human2");
        selectMassNounsClassifier(shortGenericClassifierMassArray, treeClassifierMassArray, "tree");
        selectMassNounsClassifier(shortGenericClassifierMassArray, grassClassifierMassArray, "grass");
        selectMassNounsClassifier(shortGenericClassifierMassArray, flowerClassifierMassArray, "flower");
        selectMassNounsClassifier(shortGenericClassifierMassArray, landAnimalClassifierMassArray, "land-animal");
        selectMassNounsClassifier(shortGenericClassifierMassArray, waterAnimalClassifierMassArray, "water-animal");
        selectMassNounsClassifier(shortGenericClassifierMassArray, flyingAnimalClassifierMassArray, "flying-animal");
        selectMassNounsClassifier(shortGenericClassifierMassArray, wordClassifierMassArray, "word");
        selectMassNounsClassifier(shortGenericClassifierMassArray, toolClassifierMassArray, "tool");
        selectMassNounsClassifier(shortGenericClassifierMassArray, naturalInanimateClassifierMassArray, "natural-inanimate");
        selectMassNounsClassifier(shortGenericClassifierMassArray, liquidClassifierMassArray, "liquid");
    }
}

let isolatingPluralNum = 0;
let isolatingPluralParticle = "";
function isolatingPlural() {
    if(typologyNum === 0 && grammaticalNumIsolating >= 10 && grammaticalNumIsolating < 15) {
        isolatingPluralNum = Math.floor(Math.random() * 2);
        if(isolatingPluralNum === 0) {
            //plural is marked by placing a plural particle before of after the noun
            document.getElementById("plural-with-particle").style.display = "block";
            document.getElementById("plural-with-reduplication").style.display = "none";

            let plural = document.getElementsByClassName("isolating-plural");
            
            let wordsToMarkPluralArray = ["man", "child", "group", "person"];
            let randomNumForPlural = Math.floor(Math.random() * wordsToMarkPluralArray.length)
            for(let i = 0; i < plural.length; i++) {
                plural[i].innerHTML = `<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(wordsToMarkPluralArray[randomNumForPlural])]))}</i>`;
                isolatingPluralParticle = spell(soundChange(generatedCountNouns[countNounArray.indexOf(wordsToMarkPluralArray[randomNumForPlural])]));

            }
            if(randomNumForPlural === 0) {
                document.getElementById("isolating-plural-particle-etymology").innerHTML = `<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf("man")]))}</i> meaning "man"`;
            } else if(randomNumForPlural === 1) {
                document.getElementById("isolating-plural-particle-etymology").innerHTML = `<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf("child")]))}</i> meaning "child"`;
            } else if(randomNumForPlural === 2) {
                document.getElementById("isolating-plural-particle-etymology").innerHTML = `<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf("group")]))}</i> meaning "group"`;
            } else if(randomNumForPlural === 3) {
                document.getElementById("isolating-plural-particle-etymology").innerHTML = `<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf("person")]))}</i> meaning "person"`;
            }

            let examples = document.getElementById("isolating-plural-particle-examples");
            if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
                let exampleArray = [];
                for(let i = 0; i < 10; i++) {
                    let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
                    let randomExample = `<i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))} ${isolatingPluralParticle}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                    exampleArray.push(randomExample);
                }
                let joinedArray = exampleArray.join(", ")
                examples.innerHTML = joinedArray;
            } else {
                let exampleArray = [];
                for(let i = 0; i < 10; i++) {
                    let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
                    let randomExample = `<i>${isolatingPluralParticle} ${spell(soundChange(generatedCountNouns[randomNumForExamples]))} </i> "${countNounArrayPlural[randomNumForExamples]}"`;
                    exampleArray.push(randomExample);
                }
                let joinedArray = exampleArray.join(", ")
                examples.innerHTML = joinedArray;
            }

        } else {
            //the plural is marked by repeating the noun twice
            document.getElementById("plural-with-particle").style.display = "none";
            document.getElementById("plural-with-reduplication").style.display = "block";

            let examples = document.getElementById("isolating-plural-reduplication-examples");
   
            let exampleArray = [];
            for(let i = 0; i < 10; i++) {
                let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
                let randomExample = `<i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))} ${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
            let joinedArray = exampleArray.join(", ")
            examples.innerHTML = joinedArray;
        
        }
    }
}

function chooseQuanitifers() {
    //the quantifiers "few, several" and "a lot of" are always shown by default, the rest are randomly shown or not shown.
    if(typologyNum === 0) {
    let table = document.createElement("table");
    table.classList.add("example-table")

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
    fewTD.innerHTML = `<span class="few sound-change"></span> "a few"`;
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

    //for the quantifier "barely any"
    let barelyAnyRow = document.createElement("tr");
    let barelyAnyTD = document.createElement("td");
    barelyAnyTD.innerHTML = `<span class="barely-any sound-change"></span> "barely any"`
    barelyAnyRow.appendChild(barelyAnyTD);
    if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="noun sound-change" id="noun32"></span> <span class="barely-any sound-change"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"barely any <span class="noun-meaning32 plural-meaning"></span>"`
        barelyAnyRow.appendChild(exampleTD);
        barelyAnyRow.appendChild(translationTD);
    } else {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="barely-any sound-change"></span> <span class="noun sound-change" id="noun32"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"barely any <span class="noun-meaning32 plural-meaning"></span>"`
        barelyAnyRow.appendChild(exampleTD);
        barelyAnyRow.appendChild(translationTD);
    }
    table.appendChild(barelyAnyRow);
    if(Math.floor(Math.random() * 4) !== 2) {
        barelyAnyRow.style.display = "none";
    }

    //for the quantifier "several"
    let severalRow = document.createElement("tr");
    severalRow.setAttribute("id", "quantifier-several");
    let severalTD = document.createElement("td");
    severalTD.innerHTML = `<span class="several sound-change"></span> "several"`
    severalRow.appendChild(severalTD);
    if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="noun sound-change" id="noun30"></span> <span class="several sound-change" id="noun30"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"several <span class="noun-meaning30 plural-meaning"></span>"`
        severalRow.appendChild(exampleTD);
        severalRow.appendChild(translationTD);
    } else {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="several sound-change"></span> <span class="noun sound-change" id="noun30"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"several <span class="noun-meaning30 plural-meaning"></span>"`
        severalRow.appendChild(exampleTD);
        severalRow.appendChild(translationTD);
    }
    table.appendChild(severalRow);

    //for the quantifier "some"
    let someRow = document.createElement("tr");
    let someTD = document.createElement("td");
    someTD.innerHTML = `<span class="some sound-change"></span> "some"`
    someRow.appendChild(someTD);
    if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="noun sound-change" id="noun33"></span> <span class="some sound-change"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"some <span class="noun-meaning33 plural-meaning"></span>"`
        someRow.appendChild(exampleTD);
        someRow.appendChild(translationTD);
    } else {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="some sound-change"></span> <span class="noun sound-change" id="noun33"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"some <span class="noun-meaning33 plural-meaning"></span>"`
        someRow.appendChild(exampleTD);
        someRow.appendChild(translationTD);
    }
        table.appendChild(someRow);
    if(Math.floor(Math.random() * 4) !== 2) {
        someRow.style.display = "none";
    } 

    //for the quantifier "a lot of"
    let aLotOfRow = document.createElement("tr");
    aLotOfRow.setAttribute("id", "quantifier-a-lot-of");
    let aLotOfTD = document.createElement("td");
    aLotOfTD.innerHTML = `<span class="a-lot-of sound-change"></span> <br/>"a lot of, many, much"`
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

    //for the quantifier "great-amount"
    let greatAmountRow = document.createElement("tr");
    let greatAmountTD = document.createElement("td");
    greatAmountTD.innerHTML = `<span class="great-amount sound-change"></span> <br/> "a great amount of, a multitude of"`
    greatAmountRow.appendChild(greatAmountTD);
    if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="noun sound-change" id="noun34"></span> <span class="great-amount sound-change"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"a great amount of <span class="noun-meaning34 plural-meaning"></span>"`
        greatAmountRow.appendChild(exampleTD);
        greatAmountRow.appendChild(translationTD);
    } else {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="great-amount sound-change"></span> <span class="noun sound-change" id="noun34"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"a great amount of <span class="noun-meaning34 plural-meaning"></span>"`
        greatAmountRow.appendChild(exampleTD);
        greatAmountRow.appendChild(translationTD);
    }
        table.appendChild(greatAmountRow);
    if(Math.floor(Math.random() * 4) !== 2) {
        greatAmountRow.style.display = "none";
    } 

    //for the quantifier "enough"
    let enoughRow = document.createElement("tr");
    let enoughTD = document.createElement("td");
    enoughTD.innerHTML = `<span class="enough sound-change"></span> "enough"`
    enoughRow.appendChild(enoughTD);
    if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="noun sound-change" id="noun35"></span> <span class="enough sound-change"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"enough <span class="noun-meaning35 plural-meaning"></span>"`
        enoughRow.appendChild(exampleTD);
        enoughRow.appendChild(translationTD);
    } else {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="enough sound-change"></span> <span class="noun sound-change" id="noun35"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"enough <span class="noun-meaning35 plural-meaning"></span>"`
        enoughRow.appendChild(exampleTD);
        enoughRow.appendChild(translationTD);
    }
        table.appendChild(enoughRow);
    if(Math.floor(Math.random() * 4) !== 2) {
        enoughRow.style.display = "none";
    }

    //for the quantifier "too much"
    let tooMuchRow = document.createElement("tr");
    let tooMuchTD = document.createElement("td");
    tooMuchTD.innerHTML = `<span class="too-much sound-change"></span> <br/>"too much, to many"`
    tooMuchRow.appendChild(tooMuchTD);
    if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="noun sound-change" id="noun36"></span> <span class="too-much sound-change"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"too many <span class="noun-meaning36 plural-meaning"></span>"`
        tooMuchRow.appendChild(exampleTD);
        tooMuchRow.appendChild(translationTD);
    } else {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="too-much sound-change"></span> <span class="noun sound-change" id="noun36"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"too many <span class="noun-meaning36 plural-meaning"></span>"`
        tooMuchRow.appendChild(exampleTD);
        tooMuchRow.appendChild(translationTD);
    }
        table.appendChild(tooMuchRow);
    if(Math.floor(Math.random() * 4) !== 2) {
        tooMuchRow.style.display = "none";
    }

    //for the quantifier "enough"
    let notEnoughRow = document.createElement("tr");
    let notEnoughTD = document.createElement("td");
    notEnoughTD.innerHTML = `<span class="not-enough sound-change"></span> "not enough"`
    notEnoughRow.appendChild(notEnoughTD);
    if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="noun sound-change" id="noun37"></span> <span class="not-enough sound-change"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"not enough <span class="noun-meaning37 plural-meaning"></span>"`
        notEnoughRow.appendChild(exampleTD);
        notEnoughRow.appendChild(translationTD);
    } else {
        let exampleTD = document.createElement("td");
        exampleTD.innerHTML = `<span class="not-enough sound-change"></span> <span class="noun sound-change" id="noun37"></span>`;
        let translationTD = document.createElement("td");
        translationTD.innerHTML = `"not enough <span class="noun-meaning37 plural-meaning"></span>"`
        notEnoughRow.appendChild(exampleTD);
        notEnoughRow.appendChild(translationTD);
    }
        table.appendChild(notEnoughRow);
    if(Math.floor(Math.random() * 4) !== 2) {
        notEnoughRow.style.display = "none";
    }

    if(grammaticalNumIsolating < 5) {
        document.getElementById("quantifier-table-1").appendChild(table);
    } 
}
}

function createQuantifiers() {
    if(typologyNum === 0) {
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

    let barelyAny = document.getElementsByClassName("barely-any")
    for(let i = 0; i < barelyAny.length; i++) {
        barelyAny[i].innerHTML = generatedSmallQuanitifiers[1];
    }
    if(Math.floor(Math.random() * 4) !== 2) {
        document.getElementById("barely-any").style.display = "none";
    }

    let some = document.getElementsByClassName("some")
    for(let i = 0; i < some.length; i++) {
        some[i].innerHTML = generatedMiddlingQuanitifers[1];
    }
    if(Math.floor(Math.random() * 4) !== 2) {
        document.getElementById("some").style.display = "none";
    }

    let greatAmount = document.getElementsByClassName("great-amount")
    for(let i = 0; i < greatAmount.length; i++) {
        greatAmount[i].innerHTML = generatedBigQuantifiers[1];
    }
    if(Math.floor(Math.random() * 4) !== 2) {
        document.getElementById("great-amount").style.display = "none";
    }

    let enough = document.getElementsByClassName("enough")
    for(let i = 0; i < enough.length; i++) {
        enough[i].innerHTML = generatedOpinionQuantifiers[0];
    }
    if(Math.floor(Math.random() * 4) !== 2) {
        document.getElementById("enough").style.display = "none";
    }

    let notEnough = document.getElementsByClassName("not-enough")
    for(let i = 0; i < notEnough.length; i++) {
        notEnough[i].innerHTML = generatedOpinionQuantifiers[2];
    }
    if(Math.floor(Math.random() * 4) !== 2) {
        document.getElementById("not-enough").style.display = "none";
    }

    let tooMuch = document.getElementsByClassName("too-much")
    for(let i = 0; i < tooMuch.length; i++) {
        tooMuch[i].innerHTML = generatedOpinionQuantifiers[1];
    }
    if(Math.floor(Math.random() * 4) !== 2) {
        document.getElementById("too-much").style.display = "none";
    }


    let fewExample = document.getElementById("few-example");
    let barelyAnyExample = document.getElementById("barely-any-example");
    let severalExample = document.getElementById("several-example")
    let aLotOfExample = document.getElementById("a-lot-of-example")
    let someExample = document.getElementById("some-example")
    let greatAmountExample = document.getElementById("great-amount-example")
    let enoughExample = document.getElementById("enough-example")
    let notEnoughExample = document.getElementById("not-enough-example")
    let tooMuchExample = document.getElementById("too-much-example")
    let classifier = "";
    let translation = "";

    function createExampleLongClassifier(exampleWord, classifierType, quantifierEnglish, quantifierLanguage, pluralWord, quantifierExample) {
        let exampleNoun = spell(soundChange(generatedCountNouns[countNounArray.indexOf(exampleWord)]));
        classifier = spell(soundChange(classifierType));
        translation = `"${quantifierEnglish} ${pluralWord}"`;
        
        if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
            quantifierExample.innerHTML = `<i>${exampleNoun} ${classifier} ${quantifierLanguage}</i> ${translation}`;
        } else if (checkIfHeadInitialOrHeadFinal() === "headFinal") {
            quantifierExample.innerHTML = `<i>${quantifierLanguage} ${classifier} ${exampleNoun}</i> ${translation}`;
        }
    }

    function createNoClassifierReduplicatingPluralExample(example, quantifierEnglish, quantifierLanguage) {
        let randomNoun = countNounArray[Math.floor(Math.random() * countNounArray.length)];
        if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
            example.innerHTML = `<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(randomNoun)]))} ${spell(soundChange(generatedCountNouns[countNounArray.indexOf(randomNoun)]))} ${quantifierLanguage}</i> "${quantifierEnglish} ${countNounArrayPlural[countNounArray.indexOf(randomNoun)]}"`;
        } else if(checkIfHeadInitialOrHeadFinal() === "headFinal") {
            example.innerHTML = `<i>${spell(soundChange(quantifierLanguage))} ${spell(soundChange(generatedCountNouns[countNounArray.indexOf(randomNoun)]))} ${spell(soundChange(generatedCountNouns[countNounArray.indexOf(randomNoun)]))}</i> "${quantifierEnglish} ${countNounArrayPlural[countNounArray.indexOf(randomNoun)]}"`;
        }
    };

    function createNoClassifierPluralExample(example, quantifierEnglish, quantifierLanguage) {
        let randomNoun = countNounArray[Math.floor(Math.random() * countNounArray.length)];
        if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
            example.innerHTML = `<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(randomNoun)]))} ${isolatingPluralParticle} ${quantifierLanguage}</i> "${quantifierEnglish} ${countNounArrayPlural[countNounArray.indexOf(randomNoun)]}"`;
        } else if(checkIfHeadInitialOrHeadFinal() === "headFinal") {
            example.innerHTML = `<i>${quantifierLanguage} ${isolatingPluralParticle} ${spell(soundChange(generatedCountNouns[countNounArray.indexOf(randomNoun)]))} </i> "${quantifierEnglish} ${countNounArrayPlural[countNounArray.indexOf(randomNoun)]}"`;
        }
    }


    function createExample(classifier, classifierArray, example, quantifierEnglish, quantifierLanguage) {
        let randomNoun = classifierArray[Math.floor(Math.random() * classifierArray.length)];
        if(checkIfHeadInitialOrHeadFinal() === "headFirst") {
            example.innerHTML = `<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(randomNoun)]))} ${spell(soundChange(classifier))} ${quantifierLanguage}</i> "${quantifierEnglish} ${countNounArrayPlural[countNounArray.indexOf(randomNoun)]}"`;
        } else if(checkIfHeadInitialOrHeadFinal() === "headFinal") {
            example.innerHTML = `<i>${spell(soundChange(quantifierLanguage))} ${spell(soundChange(classifier))} ${spell(soundChange(generatedCountNouns[countNounArray.indexOf(randomNoun)]))}</i> "${quantifierEnglish} ${countNounArrayPlural[countNounArray.indexOf(randomNoun)]}"`;
        }
    }

    if(isolatingPluralNum === 1 && grammaticalNumIsolating >= 10 &&  grammaticalNumIsolating < 15) {
        document.getElementById("quantifier-with-classifiers").style.display = "none";
        createNoClassifierReduplicatingPluralExample(fewExample, "a few", spell(soundChange(generatedSmallQuanitifiers[0])));
        createNoClassifierReduplicatingPluralExample(barelyAnyExample, "barely any", spell(soundChange(generatedMiddlingQuanitifers[0])));
        createNoClassifierReduplicatingPluralExample(severalExample, "several", spell(soundChange(generatedMiddlingQuanitifers[0])));
        createNoClassifierReduplicatingPluralExample(aLotOfExample, "a lot of", spell(soundChange(generatedBigQuantifiers[0])))
        createNoClassifierReduplicatingPluralExample(someExample, "some", spell(soundChange(generatedMiddlingQuanitifers[1])));
        createNoClassifierReduplicatingPluralExample(greatAmountExample, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])));
        createNoClassifierReduplicatingPluralExample(enoughExample, "enough", spell(soundChange(generatedOpinionQuantifiers[0])));
        createNoClassifierReduplicatingPluralExample(notEnoughExample, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])));
        createNoClassifierReduplicatingPluralExample(tooMuchExample, "too much", spell(soundChange(generatedOpinionQuantifiers[1])));
    }
    if(isolatingPluralNum === 0 && grammaticalNumIsolating >= 10 &&  grammaticalNumIsolating < 15) {
        document.getElementById("quantifier-with-classifiers").style.display = "none";
        createNoClassifierPluralExample(fewExample, "a few", spell(soundChange(generatedSmallQuanitifiers[0])));
        createNoClassifierPluralExample(barelyAnyExample, "barely any", spell(soundChange(generatedMiddlingQuanitifers[0])));
        createNoClassifierPluralExample(severalExample, "several", spell(soundChange(generatedMiddlingQuanitifers[0])));
        createNoClassifierPluralExample(aLotOfExample, "a lot of", spell(soundChange(generatedBigQuantifiers[0])))
        createNoClassifierPluralExample(someExample, "some", spell(soundChange(generatedMiddlingQuanitifers[1])));
        createNoClassifierPluralExample(greatAmountExample, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])));
        createNoClassifierPluralExample(enoughExample, "enough", spell(soundChange(generatedOpinionQuantifiers[0])));
        createNoClassifierPluralExample(notEnoughExample, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])));
        createNoClassifierPluralExample(tooMuchExample, "too much", spell(soundChange(generatedOpinionQuantifiers[1])));
    }
    if(randomClassifierNum === 0 && grammaticalNumIsolating >= 5 &&  grammaticalNumIsolating < 10) {
        createExample(longAndSlenderClassifier, longAndSlenderArray, fewExample, "a few", spell(soundChange(generatedSmallQuanitifiers[0])));
        createExample(shortAndWideClassifier, shortAndWideArray, barelyAnyExample, "barely any", spell(soundChange(generatedMiddlingQuanitifers[0])));
        createExample(roundClassifier, roundArray, severalExample, "several", spell(soundChange(generatedMiddlingQuanitifers[0])));
        createExample(pointedClassifier, pointedArray, aLotOfExample, "a lot of", spell(soundChange(generatedBigQuantifiers[0])))
        createExample(flatClassifier, flatArray, someExample, "some", spell(soundChange(generatedMiddlingQuanitifers[1])));
        createExample(longAndSlenderClassifier, longAndSlenderArray, greatAmountExample, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])));
        createExample(flatClassifier, flatArray, enoughExample, "enough", spell(soundChange(generatedOpinionQuantifiers[0])));
        createExample(roundClassifier, roundArray, notEnoughExample, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])));
        createExample(flatClassifier, flatArray, tooMuchExample, "too much", spell(soundChange(generatedOpinionQuantifiers[1])));
    }
    if(randomClassifierNum === 1 && grammaticalNumIsolating >= 5 &&  grammaticalNumIsolating < 10) {
        createExample(manClassifier, manArray, fewExample, "a few", spell(soundChange(generatedSmallQuanitifiers[0])));
        createExample(womanClassifier, womanArray, barelyAnyExample, "barely any", spell(soundChange(generatedMiddlingQuanitifers[0])));
        createExample(childClassifier, childArray, severalExample, "several", spell(soundChange(generatedMiddlingQuanitifers[0])));
        createExample(wildAnimalClassifier, wildAnimalArray, aLotOfExample, "a lot of", spell(soundChange(generatedBigQuantifiers[0])))
        createExample(meatClassifier, meatArray, someExample, "some", spell(soundChange(generatedMiddlingQuanitifers[1])));
        createExample(furClassifier, furArray, greatAmountExample, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])));
        createExample(labourClassifier, labourArray, enoughExample, "enough", spell(soundChange(generatedOpinionQuantifiers[0])));
        createExample(edibleClassifier, edibleArray, notEnoughExample, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])));
        createExample(inedibleClassifier, inedibleArray, tooMuchExample, "too much", spell(soundChange(generatedOpinionQuantifiers[1])));
    }
    if(randomClassifierNum === 2 && grammaticalNumIsolating >= 5 &&  grammaticalNumIsolating < 10) {
        createExample(humanClassifier, humanClassifierArray, fewExample, "a few", spell(soundChange(generatedSmallQuanitifiers[0])));
        createExample(treeClassifier, treeClassifierArray, barelyAnyExample, "barely any", spell(soundChange(generatedMiddlingQuanitifers[0])));
        createExample(toolClassifier, toolClassifierArray, severalExample, "several", spell(soundChange(generatedMiddlingQuanitifers[0])));
        createExample(landAnimalClassifier, landAnimalClassifierArray, aLotOfExample, "a lot of", spell(soundChange(generatedBigQuantifiers[0])))
        createExample(waterAnimalClassifier, waterAnimalClassifierArray, someExample, "some", spell(soundChange(generatedMiddlingQuanitifers[1])));
        createExample(wordClassifier, wordClassifierArray, greatAmountExample, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])));
        createExample(naturalInanimateClassifier, naturalInanimateClassifierArray, enoughExample, "enough", spell(soundChange(generatedOpinionQuantifiers[0])));
        createExample(toolClassifier, toolClassifierArray, notEnoughExample, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])));
        createExample(liquidClassifier, liquidClassifierArray, tooMuchExample, "too much", spell(soundChange(generatedOpinionQuantifiers[1])));
    }
    if(randomClassifierNum === 3 && grammaticalNumIsolating >= 5 &&  grammaticalNumIsolating < 10) {
        if(chosenClassifiers.includes("protruding-top")) {
            createExampleLongClassifier("spear", protrudingClassifier, "a few", spell(soundChange(generatedSmallQuanitifiers[0])), "spears", fewExample);
            createExampleLongClassifier("hill", protrudingClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "hills", barelyAnyExample);
            createExampleLongClassifier("hat", protrudingClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "hats", severalExample);
            createExampleLongClassifier("tower", protrudingClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "towers", aLotOfExample);
            createExampleLongClassifier("bump", protrudingClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "bumps", someExample);
            createExampleLongClassifier("brow", protrudingClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "brows", greatAmountExample);
            createExampleLongClassifier("knuckle", protrudingClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "knuckles", enoughExample);
            createExampleLongClassifier("breast", protrudingClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "breasts", notEnoughExample);
            createExampleLongClassifier("wart", protrudingClassifier, "too much", spell(soundChange(generatedOpinionQuantifiers[1])), "warts", tooMuchExample);
        
        } else if(chosenClassifiers.includes("orginised-gathering")) {
            createExampleLongClassifier("clan", gatheringClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "clans", fewExample);
            createExampleLongClassifier("family", gatheringClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "families", barelyAnyExample);
            createExampleLongClassifier("meeting", gatheringClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "meetings", severalExample);
            createExampleLongClassifier("tribe", gatheringClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "tribes", aLotOfExample);
            createExampleLongClassifier("feast", gatheringClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "feast", someExample);
            createExampleLongClassifier("army", gatheringClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "armies", greatAmountExample);
            createExampleLongClassifier("band", gatheringClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "bands", enoughExample);
            createExampleLongClassifier("lineage", gatheringClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "lineages", notEnoughExample);
            createExampleLongClassifier("troop", gatheringClassifier, "too much", spell(soundChange(generatedOpinionQuantifiers[1])), "troops", tooMuchExample);
        
        } else if(chosenClassifiers.includes("small-round")) {
            createExampleLongClassifier("bead", smallRoundClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "beads", fewExample);
            createExampleLongClassifier("bee", protrudingClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "bees", barelyAnyExample);
            createExampleLongClassifier("berry", smallRoundClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "berries", severalExample);
            createExampleLongClassifier("seed", smallRoundClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "seeds", aLotOfExample);
            createExampleLongClassifier("onion", smallRoundClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "onions", someExample);
            createExampleLongClassifier("egg", smallRoundClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "eggs", greatAmountExample);
            createExampleLongClassifier("bean", smallRoundClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "beans", enoughExample);
            createExampleLongClassifier("grain", smallRoundClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "grains", notEnoughExample);
            createExampleLongClassifier("turnip", smallRoundClassifier, "too much", spell(soundChange(generatedOpinionQuantifiers[1])), "turnips", tooMuchExample);
        
        } else if(chosenClassifiers.includes("small-flat")) {
            createExampleLongClassifier("coin", smallFlatClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "coins", fewExample);
            createExampleLongClassifier("ring", smallFlatClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "ring", barelyAnyExample);
            createExampleLongClassifier("shell", smallFlatClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "shells", severalExample);
            createExampleLongClassifier("pebble", smallFlatClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "pebbles", aLotOfExample);
            createExampleLongClassifier("ear", smallFlatClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "ears", someExample);
            createExampleLongClassifier("hand", smallFlatClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "hands", greatAmountExample);
            createExampleLongClassifier("leaf", smallFlatClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "leaves", enoughExample);
            createExampleLongClassifier("palm", smallFlatClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "palms", notEnoughExample);
            createExampleLongClassifier("jewel", smallFlatClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "jewels", tooMuchExample);
        }  else if(chosenClassifiers.includes("building")) {
            createExampleLongClassifier("temple", buildingClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "temples", fewExample);
            createExampleLongClassifier("hall", buildingClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "halls", barelyAnyExample);
            createExampleLongClassifier("bedroom", buildingClassifier, spell(soundChange(generatedMiddlingQuanitifers[0])), "several", "bedrooms", severalExample);
            createExampleLongClassifier("temple", buildingClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "temples", aLotOfExample);
            createExampleLongClassifier("hall", buildingClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "halls", someExample);
            createExampleLongClassifier("bedroom", buildingClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "bedrooms", greatAmountExample);
            createExampleLongClassifier("temple", buildingClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "temples", enoughExample);
            createExampleLongClassifier("hall", buildingClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "halls", notEnoughExample);
            createExampleLongClassifier("bedroom", buildingClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "bedrooms", tooMuchExample);
       
        }  else if(chosenClassifiers.includes("song")) {
            createExampleLongClassifier("spell", songClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "spells", fewExample);
            createExampleLongClassifier("song", songClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "songs", barelyAnyExample);
            createExampleLongClassifier("proverb", songClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "proverbs", severalExample);
            createExampleLongClassifier("prayer", songClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "prayers", aLotOfExample);
            createExampleLongClassifier("prayer", songClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "prayers", someExample);
            createExampleLongClassifier("spell", songClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "spells", greatAmountExample);
            createExampleLongClassifier("song", songClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "songs", enoughExample);
            createExampleLongClassifier("prayer", songClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "prayers", notEnoughExample);
            createExampleLongClassifier("song", songClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "songs", tooMuchExample);
        
        }  else if(chosenClassifiers.includes("slice")) {
            createExampleLongClassifier("leaf", sliceClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "leaves", fewExample);
            createExampleLongClassifier("page", sliceClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "pages", barelyAnyExample);
            createExampleLongClassifier("tongue", sliceClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "tongues", severalExample);
            createExampleLongClassifier("rag", sliceClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "rags", aLotOfExample);
            createExampleLongClassifier("sheet", sliceClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "sheets", someExample);
            createExampleLongClassifier("slice", sliceClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "slices", greatAmountExample);
            createExampleLongClassifier("membrane", sliceClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "membranes", enoughExample);
            createExampleLongClassifier("rag", sliceClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "rags", notEnoughExample);
            createExampleLongClassifier("page", sliceClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "pages", tooMuchExample);
       
        }  else if(chosenClassifiers.includes("entrance")) {
            createExampleLongClassifier("door", entranceClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "doors", fewExample);
            createExampleLongClassifier("wagon", entranceClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "wagons", barelyAnyExample);
            createExampleLongClassifier("estuary", entranceClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "estuaries", severalExample);
            createExampleLongClassifier("horse", entranceClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "horse", aLotOfExample);
            createExampleLongClassifier("boat", entranceClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "boats", someExample);
            createExampleLongClassifier("door", entranceClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "doors", greatAmountExample);
            createExampleLongClassifier("wagon", entranceClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "wagons", enoughExample);
            createExampleLongClassifier("estuary", entranceClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "estuaries", notEnoughExample);
            createExampleLongClassifier("wagon", entranceClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "wagons", tooMuchExample);
       
        }  else if(chosenClassifiers.includes("domestic-animal")) {
            createExampleLongClassifier("horse", domesticAnimalClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "horses", fewExample);
            createExampleLongClassifier("bull", domesticAnimalClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "bulls", barelyAnyExample);
            createExampleLongClassifier("cow", domesticAnimalClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "cows", severalExample);
            createExampleLongClassifier("donkey", domesticAnimalClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "donkeys", aLotOfExample);
            createExampleLongClassifier("mare", domesticAnimalClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "mares", someExample);
            createExampleLongClassifier("ox", domesticAnimalClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "oxen", greatAmountExample);
            createExampleLongClassifier("ewe", domesticAnimalClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "ewes", enoughExample);
            createExampleLongClassifier("chicken", domesticAnimalClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "chickens", notEnoughExample);
            createExampleLongClassifier("dog", domesticAnimalClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "dog", tooMuchExample);
       
        }  else if(chosenClassifiers.includes("long-non-rigid")) {
            createExampleLongClassifier("road", longNonRigidClassifier, "a few", spell(soundChange(generatedSmallQuanitifiers[0])),  "roads", fewExample);
            createExampleLongClassifier("eel", longNonRigidClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "eels", barelyAnyExample);
            createExampleLongClassifier("sinew", longNonRigidClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "sinews", severalExample);
            createExampleLongClassifier("fish", longNonRigidClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "fish", aLotOfExample);
            createExampleLongClassifier("shark", longNonRigidClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "sharks", someExample);
            createExampleLongClassifier("whale", longNonRigidClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "whales", greatAmountExample);
            createExampleLongClassifier("frog", longNonRigidClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "frogs", enoughExample);
            createExampleLongClassifier("dolphin", longNonRigidClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "dolphins", notEnoughExample);
            createExampleLongClassifier("map", longNonRigidClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "maps", tooMuchExample);
        
        }  else if(chosenClassifiers.includes("long-rigid")) {
            createExampleLongClassifier("branch", longRigidClassifier, "a few", spell(soundChange(generatedSmallQuanitifiers[0])),  "branches", fewExample);
            createExampleLongClassifier("stick", longRigidClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "sticks", barelyAnyExample);
            createExampleLongClassifier("icicle", longRigidClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "iciles", severalExample);
            createExampleLongClassifier("pike", longRigidClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "pikes", aLotOfExample);
            createExampleLongClassifier("trunk", longRigidClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "trunks", someExample);
            createExampleLongClassifier("bar", longRigidClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "bars", greatAmountExample);
            createExampleLongClassifier("pole", longRigidClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "poles", enoughExample);
            createExampleLongClassifier("splint", longRigidClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "splints", notEnoughExample);
            createExampleLongClassifier("stake", longRigidClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "stakes", tooMuchExample);
       
        }  else if(chosenClassifiers.includes("broad-flat")) {
            createExampleLongClassifier("slab", broadClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "slabs", fewExample);
            createExampleLongClassifier("board", broadClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "boards", barelyAnyExample);
            createExampleLongClassifier("table", broadClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "tables", severalExample);
            createExampleLongClassifier("floor", broadClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "floors", aLotOfExample);
            createExampleLongClassifier("slab", broadClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "slabs", someExample);
            createExampleLongClassifier("board", broadClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "boards", greatAmountExample);
            createExampleLongClassifier("table", broadClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "tables", enoughExample);
            createExampleLongClassifier("floor", broadClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "floors", notEnoughExample);
            createExampleLongClassifier("slab", broadClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "slabs", tooMuchExample);
       
        }  else if(chosenClassifiers.includes("mental-sensory")) {
            createExampleLongClassifier("memory", mentalClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "memories", fewExample);
            createExampleLongClassifier("sound", mentalClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "sounds", barelyAnyExample);
            createExampleLongClassifier("thought", mentalClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "thoughts", severalExample);
            createExampleLongClassifier("texture", mentalClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "textures", aLotOfExample);
            createExampleLongClassifier("sniff", mentalClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "sniffs", someExample);
            createExampleLongClassifier("scent", mentalClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "scents", greatAmountExample);
            createExampleLongClassifier("sound", mentalClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "sounds", enoughExample);
            createExampleLongClassifier("memory", mentalClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "memories", notEnoughExample);
            createExampleLongClassifier("texture", mentalClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "textures", tooMuchExample);
        

        }  else if(chosenClassifiers.includes("violent-action")) {
            createExampleLongClassifier("attack", violenceClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "attacks", fewExample);
            createExampleLongClassifier("strike", violenceClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "strikes", barelyAnyExample);
            createExampleLongClassifier("genocide", violenceClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "genocides", severalExample);
            createExampleLongClassifier("blow", violenceClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "blows", aLotOfExample);
            createExampleLongClassifier("massacre", violenceClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "massacres", someExample);
            createExampleLongClassifier("attack", violenceClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "attacks", greatAmountExample);
            createExampleLongClassifier("genocide", violenceClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "genocides", enoughExample);
            createExampleLongClassifier("massacre", violenceClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "massacres", notEnoughExample);
            createExampleLongClassifier("strike", violenceClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "strikes", tooMuchExample);
      
        }  else if(chosenClassifiers.includes("loving-action")) {
            createExampleLongClassifier("kiss", loveClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "kisses", fewExample);
            createExampleLongClassifier("hug", loveClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "hugs", barelyAnyExample);
            createExampleLongClassifier("embrace", loveClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "embraces", severalExample);
            createExampleLongClassifier("wedding", loveClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "weddings", aLotOfExample);
            createExampleLongClassifier("relationship", loveClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "relationships", someExample);
            createExampleLongClassifier("kiss", loveClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "kisses", greatAmountExample);
            createExampleLongClassifier("hug", loveClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "hugs", enoughExample);
            createExampleLongClassifier("embrace", loveClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "embraces", notEnoughExample);
            createExampleLongClassifier("kiss", loveClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "kisses", tooMuchExample);
       
        } else if(chosenClassifiers.includes("reciprocal-action")) {
            createExampleLongClassifier("favour", reciprocalClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "favours", fewExample);
            createExampleLongClassifier("exchange", reciprocalClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "exchanges", barelyAnyExample);
            createExampleLongClassifier("purchase", reciprocalClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "purchases", severalExample);
            createExampleLongClassifier("trade", reciprocalClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "trades", aLotOfExample);
            createExampleLongClassifier("swap", reciprocalClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "swaps", someExample);
            createExampleLongClassifier("favour", reciprocalClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "favours", greatAmountExample);
            createExampleLongClassifier("purchase", reciprocalClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "purchases", enoughExample);
            createExampleLongClassifier("trade", reciprocalClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "trade", notEnoughExample);
            createExampleLongClassifier("exchange", reciprocalClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "exchanges", tooMuchExample);
      
        } else if(chosenClassifiers.includes("movement")) {
            createExampleLongClassifier("chariot", movementClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "chariots", fewExample);
            createExampleLongClassifier("journey", movementClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "journeys", barelyAnyExample);
            createExampleLongClassifier("walk", movementClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "walks", severalExample);
            createExampleLongClassifier("change", movementClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "changes", aLotOfExample);
            createExampleLongClassifier("transformation", movementClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "transformations", someExample);
            createExampleLongClassifier("transition", movementClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "transitions", greatAmountExample);
            createExampleLongClassifier("chariot", movementClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "chariots", enoughExample);
            createExampleLongClassifier("journey", movementClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "journeys", notEnoughExample);
            createExampleLongClassifier("walk", movementClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "walks", tooMuchExample);
      
        } else if(chosenClassifiers.includes("protrusions")) {
            createExampleLongClassifier("fort", protrusionClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "forts", fewExample);
            createExampleLongClassifier("shelf", protrusionClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "shelves", barelyAnyExample);
            createExampleLongClassifier("fort", protrusionClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "forts", severalExample);
            createExampleLongClassifier("boulder", protrusionClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "boulders", aLotOfExample);
            createExampleLongClassifier("cliff", protrusionClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "cliffs", someExample);
            createExampleLongClassifier("limb", protrusionClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "limbs", greatAmountExample);
            createExampleLongClassifier("wall", protrusionClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "walls", enoughExample);
            createExampleLongClassifier("fort", protrusionClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "forts", notEnoughExample);
            createExampleLongClassifier("shelf", protrusionClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "shelves", tooMuchExample);
      
        } else if(chosenClassifiers.includes("intrusions")) {
            createExampleLongClassifier("ravine", intrusionClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "ravines", fewExample);
            createExampleLongClassifier("valley", intrusionClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "valleys", barelyAnyExample);
            createExampleLongClassifier("grave", intrusionClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "graves", severalExample);
            createExampleLongClassifier("furrow", intrusionClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "furrows", aLotOfExample);
            createExampleLongClassifier("crease", intrusionClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "creases", someExample);
            createExampleLongClassifier("dent", intrusionClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "dents", greatAmountExample);
            createExampleLongClassifier("groove", intrusionClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "grooves", enoughExample);
            createExampleLongClassifier("hole", intrusionClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "holes", notEnoughExample);
            createExampleLongClassifier("pit", intrusionClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "pits", tooMuchExample);
     
        } else if(chosenClassifiers.includes("enclosed-space")) {
            createExampleLongClassifier("cabin", enclosedClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "cabins", fewExample);
            createExampleLongClassifier("cave", enclosedClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "caves", barelyAnyExample);
            createExampleLongClassifier("world", enclosedClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "world", severalExample);
            createExampleLongClassifier("cage", enclosedClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "cages", aLotOfExample);
            createExampleLongClassifier("cell", enclosedClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "cells", someExample);
            createExampleLongClassifier("realm", enclosedClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "realms", greatAmountExample);
            createExampleLongClassifier("snare", enclosedClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "snares", enoughExample);
            createExampleLongClassifier("tent", enclosedClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "tents", notEnoughExample);
            createExampleLongClassifier("world", enclosedClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "worlds", tooMuchExample);
      
        } else if(chosenClassifiers.includes("piercing-cutting")) {
            createExampleLongClassifier("axe", piercingClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "axes", fewExample);
            createExampleLongClassifier("needle", piercingClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "needles", barelyAnyExample);
            createExampleLongClassifier("knife", piercingClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "knives", severalExample);
            createExampleLongClassifier("javelin", piercingClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "javelins", aLotOfExample);
            createExampleLongClassifier("plough", piercingClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "ploughs", someExample);
            createExampleLongClassifier("scythe", piercingClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "scythes", greatAmountExample);
            createExampleLongClassifier("splinter", piercingClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "splinters", enoughExample);
            createExampleLongClassifier("stinger", piercingClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "stingers", notEnoughExample);
            createExampleLongClassifier("tooth", piercingClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "teeth", tooMuchExample);
     
        } else if(chosenClassifiers.includes("percussive")) {
            createExampleLongClassifier("hammer", percussiveClassifier, "a few",  spell(soundChange(generatedSmallQuanitifiers[0])), "hammers", fewExample);
            createExampleLongClassifier("club", percussiveClassifier, "barely any", spell(soundChange(generatedSmallQuanitifiers[1])), "clubs", barelyAnyExample);
            createExampleLongClassifier("rod", percussiveClassifier, "several", spell(soundChange(generatedMiddlingQuanitifers[0])), "rods", severalExample);
            createExampleLongClassifier("mace", percussiveClassifier, "a lot of", spell(soundChange(generatedBigQuantifiers[0])), "maces", aLotOfExample);
            createExampleLongClassifier("mallet", percussiveClassifier, "some", spell(soundChange(generatedMiddlingQuanitifers[1])), "mallets", someExample);
            createExampleLongClassifier("arch", percussiveClassifier, "a great amount of", spell(soundChange(generatedBigQuantifiers[1])), "arches", greatAmountExample);
            createExampleLongClassifier("rib", percussiveClassifier, "enough", spell(soundChange(generatedOpinionQuantifiers[0])), "ribs", enoughExample);
            createExampleLongClassifier("harp", percussiveClassifier, "not enough", spell(soundChange(generatedOpinionQuantifiers[2])), "harps", notEnoughExample);
            createExampleLongClassifier("hook", percussiveClassifier, "too many", spell(soundChange(generatedOpinionQuantifiers[1])), "hooks", tooMuchExample);
        }
    }
}
}

/***AGGLUTINATIVE NOUNS****/
let grammaticalNumAgglutinative = 0;
function randomNumForAgglutinativeGrammaticalNumbers() {
    if(typologyNum === 1) {
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
}

function inflectGenderlessNouns() {
    if(typologyNum === 1) {
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
}

function inflectGenderlessMassNouns() {
    if(typologyNum === 1) {
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
}

function selectNounsGender(genderArray, array, gender) {
    if(typologyNum === 1) {
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
}

function selectMassNounsGender(genderArray, array, gender) {
    if(typologyNum === 1) {
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
}

function inflectNounsGender(affix, gender) {
    if(typologyNum === 1) {
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
}

function inflectMassNounsGender(affix, gender) {
    if(typologyNum === 1) {
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
}

//for agglutinative languages with a marked singular
function inflectNounsSingular() {
    if(typologyNum === 1) {
    let spanNoun = document.getElementsByClassName("singular-noun");
    
    let spanSingularAffix = document.getElementsByClassName("singular-affix")
    if(markedSingularOrNot()) {
        document.getElementById("singular-plural-marked-singular").style.display = "inline";
        if(numberSuffixOrPrefix === "suffix") {
            for(let i = 0; i < spanSingularAffix.length; i++) {
                spanSingularAffix[i].innerHTML = `suffix <i>-${spell(soundChange("A" + singularAffix + "X"))}</i>`
            }
            for(let i = 0; i < spanNoun.length; i++) {
                let root = spanNoun[i].innerHTML;
                let singularInflected = root + singularAffix;
                spanNoun[i].innerHTML = singularInflected;
            }
        } else if (numberSuffixOrPrefix === "prefix") {
            for(let i = 0; i < spanSingularAffix.length; i++) {
                spanSingularAffix[i].innerHTML = `prefix <i>${spell(soundChange("X" + singularAffix + "A"))}-</i>`
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
}

function inflectNounsPlural() {
    if(typologyNum === 1) {
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
            let pluralMeaning = countNounArrayPlural[countNounArray.indexOf(nounSgMeaning[i].innerHTML)];
        nounSgMeaning[i].innerHTML = pluralMeaning;
            copyNum++;
        }
    }
}

function inflectMassNounsPlural() {
    if(typologyNum === 1) {
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
}

function inflectNounsDual() {
    if(typologyNum === 1) {
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
        let pluralMeaning =  countNounArrayPlural[countNounArray.indexOf(nounSgMeaning[i].innerHTML)];
       nounSgMeaning[i].innerHTML = ` two ${pluralMeaning}`;
        copyNum++;
    }
}
}

function inflectNounsCollective() {
    if(typologyNum === 1) {
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
}

function inflectNounsTrial() {
    if(typologyNum === 1) {
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
        let pluralMeaning =  countNounArrayPlural[countNounArray.indexOf(nounSgMeaning[i].innerHTML)];
        // for(let j = 0; j < nounSgMeaning.length; j++) {
       nounSgMeaning[i].innerHTML = `three ${pluralMeaning}`;
        // }
        copyNum++;
    }
}
}

function inflectNounsQuadral() {
    if(typologyNum === 1) {
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
        let pluralMeaning =  countNounArrayPlural[countNounArray.indexOf(nounSgMeaning[i].innerHTML)];
        // for(let j = 0; j < nounSgMeaning.length; j++) {
       nounSgMeaning[i].innerHTML = `four ${pluralMeaning}`;
        // }
        copyNum++;
    }
}
}

function inflectNounsGreaterPlural() {
    if(typologyNum === 1) {
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
        let pluralMeaning =  countNounArrayPlural[countNounArray.indexOf(nounSgMeaning[i].innerHTML)];
        // for(let j = 0; j < nounSgMeaning.length; j++) {
       nounSgMeaning[i].innerHTML = `a lot of ${pluralMeaning}`;
        // }
        copyNum++;
    }
}
}

function inflectNounsGeneral() {
    if(typologyNum === 1) {
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
        let pluralMeaning =  countNounArrayPlural[countNounArray.indexOf(nounSgMeaning[i].innerHTML)];
       nounSgMeaning[i].innerHTML = `${pluralMeaning}`;
        copyNum++;
    }
}
}

//used specifically for the general number in the general-plural system
function inflectNounsGeneral1() {
    if(typologyNum === 1) {
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
}

function inflectNounsSingulative() {
    if(typologyNum === 1) {
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
}

function inflectMassNounsSingulative() {
    if(typologyNum === 1) {
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
}

function switchNounGenderMascFem(englishWord) {
    if(typologyNum === 1) {
    const newLi = document.createElement("li");
    let nounIndex = countNounArray.indexOf(englishWord);
    let bareRoot = generatedCountNouns[nounIndex];
    let mascNoun = "";
    let femNoun = "";
    
    if(genderNum === 10) {
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
    }
}

function switchNounGenderMascFemNeut(englishWord) {
    if(typologyNum === 1) {
    const newLi = document.createElement("li");
    let nounIndex = countNounArray.indexOf(englishWord);
    let bareRoot = generatedCountNouns[nounIndex];
    let mascNoun = "";
    let femNoun = "";
    if(genderNum === 11) {
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
}
}

function switchNounGenderHumanAnimal(englishWord) {
    if(typologyNum === 1) {
    const newLi = document.createElement("li");
    let nounIndex = countNounArray.indexOf(englishWord);
    let bareRoot = generatedCountNouns[nounIndex];
    let animalNoun = "";
    let humanNoun = "";
    
    if(genderNum === 12) {
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
}
}

function AgglutinativeNouns() {
    if(typologyNum === 1) {
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
    if(Math.floor(Math.random() * 5) !== 4) {
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
    clearPreviousOutput();
    selectSoundChanges();
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
    chooseClassifierSystem();
    createShapeClassifiers();
    createAnimacyClassifiers();
    createShortGenericClassifiers();
    createLongClassifiers();
    createMeasureWords();
    IsolatingNouns();
    isolatingPlural();
    callClassifierExamples();
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
    generateRandomNameForLanguage();
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
    console.log(spell(soundChange("kigarli")))
    console.log(spell(soundChange("igadgonm")))
   }


export {generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, genderNum, nounGenderArray, grammaticalNumAgglutinative as grammaticalNum, typologyNum, singularAffix, animateAffix, inanimateAffix, genderSuffixOrPrefix, masculineAffix, feminineAffix, neuterAffix, divineAffix, profaneAffix, divineArray, profaneArray, humanAffix, animalAffix, inanimate2Affix, activeAffix, passiveAffix, naturalAffix, artificialAffix, markedSingularOrNot, numberSuffixOrPrefix, randomClassifierNum, grammaticalNumIsolating, longAndSlenderClassifier, randomNumForLongAndSlender, randomNumForShortAndWide, randomNumForRound, randomNumForPointed, randomNumForFlat, branchExample, poleExample, shoulderExample, wedgeExample, appleExample, pebbleExample, ballExample, arrowExample, thornExample, forkExample, slabExample, faceExample, airExample, randomNumForShapeless, manExample, randomNumForMan, womanExample, randomNumForWoman, randomNumForChild, childExample, randomNumForWildAnimal, wolfExample, bearExample, randomNumForMeat, goatExample, randomNumForFur, skinExample, sheepExample, randomNumForLabour,labourExample, pushExample, horseExample, hoofExample, donkeyExample, randomNumForMilk, milkExample, udderExample, cowExample, randomNumForInEdible, thingExample, rockExample, randomNumForEdible, basketExample, berryExample, randomNumForHuman, manExample2, humanExample, personExample, randomNumForTree, oakExample, alderExample, elmExample, beechExample, grassExample, randomNumForGrass, randomNumForFlower, flowerExample, randomNumForLandAnimal, landExample, waterExample, randomNumForWaterAnimal, seaExample, fishExample, skyExample, randomNumForFlyingAnimal, cloudExample, wingExample, randomNumForWord, wordExample, mouthExample, randomNumForTool, axeExample, handleExample, hammerExample, ploughExample, rockExample2, dirtExample, mudExample, randomNumForNatural, randomNumForLiquid, dropExample, poolExample, cupExample, countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, adjectiveArray, conjunctionArray, adverbArray, adpositionArray, intensifierArray, countNounArrayPlural, activePassive, animInan, divineNonDivine, humanAnimalInan, mascFemNeut, mascFem, naturalArtificial, animacyClassifierArray,
    shapeClassifierArray,
    shortGenericClassifierArray, singulativeMassNounArray, pluralSingulativeMassNounArray, activePassiveMass, animInanMass, divineNonDivineMass, humanAnimalInanMass, mascFemMass,  mascFemNeutMass, naturalArtificialMass, animacyClassifierMassArray, shapeClassifierMassArray, shortGenericClassifierMassArray, pluralAffix, dualAffix, generalAffix, collectiveAffix, trialAffix, quadralAffix, singulativeAffix, greaterPluralAffix, chooseTypology, checkIfHeadInitialOrHeadFinal, suffixOrPrefix, grammaticalNumAgglutinative, nominativeAffix, accusativeAffix, genitiveAffix, dativeAffix, locativeAffix, ablativeAffix, delativeAffix, inessiveAffix, instrumentalAffix, allativeAffix, generateAffixes, languageName};