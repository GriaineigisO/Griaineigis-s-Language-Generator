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
    genderNum = 7//Math.floor(Math.random() * 8)
}



function randomNouns() {
    const randomAnimateNoun = generatedNouns[nounArray.indexOf(animateArray[Math.floor(Math.random() * animateArray.length)])];

    const randomInanimateNoun = generatedNouns[nounArray.indexOf(inanimateArray[Math.floor(Math.random() * inanimateArray.length)])];

    const randomMasculineNoun = generatedNouns[nounArray.indexOf(masculine1Array[Math.floor(Math.random() * masculine1Array.length)])];
 
    const randomFeminineNoun = generatedNouns[nounArray.indexOf(feminine1Array[Math.floor(Math.random() * feminine1Array.length)])];

    const randomMasculine2Noun = generatedNouns[nounArray.indexOf(masculine2Array[Math.floor(Math.random() * masculine2Array.length)])];
 
    const randomFeminine2Noun = generatedNouns[nounArray.indexOf(feminine2Array[Math.floor(Math.random() * feminine2Array.length)])];

    const randomNeuterNoun = generatedNouns[nounArray.indexOf(neuterArray[Math.floor(Math.random() * neuterArray.length)])];

    const randomDivineNoun = generatedNouns[nounArray.indexOf(divineArray[Math.floor(Math.random() * divineArray.length)])];

    const randomProfaneNoun = generatedNouns[nounArray.indexOf(profaneArray[Math.floor(Math.random() * profaneArray.length)])];

    const randomHumanNoun = generatedNouns[nounArray.indexOf(humanArray[Math.floor(Math.random() * humanArray.length)])];

    const randomAnimalNoun = generatedNouns[nounArray.indexOf(animalArray[Math.floor(Math.random() * animalArray.length)])];

    const randomInanimate2Noun = generatedNouns[nounArray.indexOf(inanimateArray2[Math.floor(Math.random() * inanimateArray2.length)])];

    const randomActiveNoun = generatedNouns[nounArray.indexOf(activeArray[Math.floor(Math.random() * activeArray.length)])];

    const randomPassiveNoun = generatedNouns[nounArray.indexOf(passiveArray[Math.floor(Math.random() * passiveArray.length)])];

    const randomnaturalNoun = generatedNouns[nounArray.indexOf(naturalArray[Math.floor(Math.random() * naturalArray.length)])];

    const randomArtificialNoun = generatedNouns[nounArray.indexOf(artificialArray[Math.floor(Math.random() * artificialArray.length)])];

    return {
        randomAnimateNoun: randomAnimateNoun,
        randomInanimateNoun: randomInanimateNoun,
        randomMasculineNoun: randomMasculineNoun,
        randomFeminineNoun: randomFeminineNoun,
        randomMasculine2Noun: randomMasculine2Noun,
        randomFeminine2Noun: randomFeminine2Noun,
        randomNeuterNoun: randomNeuterNoun,
        randomDivineNoun: randomDivineNoun,
        randomProfaneNoun: randomProfaneNoun,
        randomHumanNoun: randomHumanNoun,
        randomAnimalNoun: randomAnimalNoun,
        randomInanimate2Noun: randomInanimate2Noun,
        randomActiveNoun: randomActiveNoun,
        randomPassiveNoun: randomPassiveNoun,
        randomnaturalNoun: randomnaturalNoun,
        randomArtificialNoun: randomArtificialNoun,
    }
}

let genderHeader = ""
let genderDiv = "";
let genderP = "";
let genderPAffixes = "";
function chooseNounGender() {
    genderHeader = document.createElement("h3")
    genderHeader.innerHTML = "Noun Gender"
    genderDiv = document.createElement("div");
    genderP = document.createElement("p");
    genderPAffixes = document.createElement("p");

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

    genderSuffixOrPrefix = suffixOrPrefix();
    //if there is no gender
    if(genderNum === 0) {
        genderHeader.style.display = "none";
        genderP.style.display = "none";
        genderUl.style.display = "none"
    }
    if(genderNum === 1) {
        nounGenderArray.push("animate", "inanimate");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "animate" and "inanimate". The animate gender encompasses all nouns that refer to living things, as well as some non-living but "dynamic" things such as fire and moving water. Trees and plants are animate, though their produce, seeds and individual parts are inanimate.`;
    }
    if(genderNum === 2) {
        nounGenderArray.push("masculine", "feminine");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "masculine" and "feminine". Non-living entities are assigned to either gender based on whether the item is thought to be associated more with men or woman, or at random. All animals are masculine by default, though they can be listed in the feminine to refer to a female instance of an animal. Nouns referring to meat are masculine, but all other food is feminine. Weapons, trees, clothing and items of knowledge are masculine. Cutlery, pottery and all other household utilities are feminine, as are body parts (except male body parts like "beard" and "penis"), geographical features ("forest", "mountain" etc), any words relating to time and words relating to noise.`;

    }
    if(genderNum === 3) {
        nounGenderArray.push("masculine", "feminine", "neuter");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has three grammatical genders which are "masculine", "feminine" and "neuter". The neuter gender encompasses all non-living things but also the young of both animals and humans. Nouns referring to groups of living things are in the neuter. Animals are masculine by default, though small animals, fish, birds and bugs are feminine, though birds of prey are masculine. An animal can be referred to in the opposite gender when referring to a specific individual animal.`;
    }
    if(genderNum === 4) {
        nounGenderArray.push("human", "animal", "inanimate");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has three grammatical genders which are "human", "animal" and "inanimate". The genders are quite literally as their names describe, with the inanimate gender encompassing plants and non-living things. Body parts are inanimate. Groups of humans are human, groups of animals are animal.`;
    }
    if(genderNum === 5) {
        nounGenderArray.push("divine", "profane");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "divine" and "non-divine". The divine encompasses any noun referring to gods, whether the noun itself is animate or inanimate i.e an object or place associated with a god is part of the divine gender. Parts of the landscape considered sacred are also divine, such as graves, bodies of water and trees. Celestial bodies, like the sun, the moon, stars and clouds are divine, as are certain elements of nature like fire, water and stone. Finally, anything associated with wisdom, knowledge and poetry are divine. Anything else is profane.`;
    }
    if(genderNum === 6) {
        nounGenderArray.push("active", "passive");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "active" and "passive". The active refers to a noun which can act as an agent of a transitive verb, while the passive is any noun that can't be an agent, even if the subject of a middle voice verb. Nouns referring to living things are active, as well as tools, as they can be agents of transitive verbs e.g "The man saw a deer", "The bat flew in the sky", "The knife cut the cloth". Compare this to passive nouns which can only be subjects of intransitive/middle verbs e.g "The door opened" ("someone opened the door") or "The milk was poured" ("someone poured the milk").`;
    }
    if(genderNum === 7) {
        nounGenderArray.push("natural", "artificial");
        genderP.innerHTML = `<span class="language-name">Kerbekulo</span> has two grammatical genders which are "natural" and "artificial". The artificial gender encompasses all things made by humans, while the natural gender encompasses everything else. The exact distinction can get quite idiosyncratic however, as abstract concepts thought to be borne purely by humans, such as "mercy" or "hospitality" are part of the artificial gender. Groups of people, and people themselves, are natural although specific social roles such a strades are artificial.`;
    }
    document.getElementById("nouns").appendChild(genderDiv);
    genderDiv.appendChild(genderHeader);
    genderDiv.appendChild(genderP);
    genderDiv.appendChild(genderPAffixes);
    //genderDiv.appendChild(genderUl)
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


//Case, gender and number for agglutinative nouns
function agglutinativeNouns() {
    genderSuffixOrPrefix = suffixOrPrefix();
    let genderUl = document.createElement("ul")
    const genderPAffixes = document.createElement("p");
    if (typologyNum === 1 && genderNum === 1) {//if animate and inanimate
        animateAffix = generateAffixes();
        inanimateAffix = generateAffixes(); 
        let animateRoot1 = randomNouns().randomAnimateNoun;
        let animateRoot2 = randomNouns().randomAnimateNoun;
        let animateRoot3 = randomNouns().randomAnimateNoun;
        let animateRoot4 = randomNouns().randomAnimateNoun;
        let inanimateRoot1 = randomNouns().randomInanimateNoun;
        let inanimateRoot2 = randomNouns().randomInanimateNoun;
        let inanimateRoot3 = randomNouns().randomInanimateNoun;
        let inanimateRoot4 = randomNouns().randomInanimateNoun;
        if(genderSuffixOrPrefix === "suffix") {
                let animateNoun1 = animateRoot1 + animateAffix
                let animateNoun2 = animateRoot2 + animateAffix
                let animateNoun3 = animateRoot3 + animateAffix
                let animateNoun4 = animateRoot4 + animateAffix
                let inanimateNoun1 = inanimateRoot1 + inanimateAffix
                let inanimateNoun2 = inanimateRoot2 + inanimateAffix
                let inanimateNoun3 = inanimateRoot3 + inanimateAffix
                let inanimateNoun4 = inanimateRoot4 + inanimateAffix
                genderPAffixes.innerHTML = `Animate nouns take the suffix <i>-${spell(soundChange(animateAffix))}</i>:
                <i>${spell(soundChange(animateNoun1))}</i> "${nounArray[generatedNouns.indexOf(animateRoot1)]}",
                <i>${spell(soundChange(animateNoun2))}</i> "${nounArray[generatedNouns.indexOf(animateRoot2)]}",
                <i>${spell(soundChange(animateNoun3))}</i> "${nounArray[generatedNouns.indexOf(animateRoot3)]}",
                <i>${spell(soundChange(animateNoun4))}</i> "${nounArray[generatedNouns.indexOf(animateRoot4)]}".<br/>
                Inanimate nouns take the suffix <i>-${spell(soundChange(inanimateAffix))}</i>: 
                <i>${spell(soundChange(inanimateNoun1))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot1)]}", 
                <i>${spell(soundChange(inanimateNoun2))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot2)]}", 
                <i>${spell(soundChange(inanimateNoun3))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot3)]}", 
                <i>${spell(soundChange(inanimateNoun4))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot4)]}".`
        } else if(genderSuffixOrPrefix === "prefix") {
                let animateNoun1 = animateAffix + animateRoot1;
                let animateNoun2 = animateAffix + animateRoot2;
                let animateNoun3 = animateAffix + animateRoot3;
                let animateNoun4 = animateAffix + animateRoot4; 
                let inanimateNoun1 = inanimateAffix + inanimateRoot1;
                let inanimateNoun2 = inanimateAffix + inanimateRoot2;
                let inanimateNoun3 = inanimateAffix + inanimateRoot3;
                let inanimateNoun4 = inanimateAffix + inanimateRoot4;
                genderPAffixes.innerHTML = `Animate nouns take the prefix <i>${spell(soundChange(animateAffix))}-</i>: 
                <i>${spell(soundChange(animateNoun1))}</i> "${nounArray[generatedNouns.indexOf(animateRoot1)]}",
                <i>${spell(soundChange(animateNoun2))}</i> "${nounArray[generatedNouns.indexOf(animateRoot2)]}",
                <i>${spell(soundChange(animateNoun3))}</i> "${nounArray[generatedNouns.indexOf(animateRoot3)]}",
                <i>${spell(soundChange(animateNoun4))}</i> "${nounArray[generatedNouns.indexOf(animateRoot4)]}".<br/>
                Inanimate nouns take the prefix <i>${spell(soundChange(inanimateAffix))}-</i>: 
                <i>${spell(soundChange(inanimateNoun1))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot1)]}", 
                <i>${spell(soundChange(inanimateNoun2))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot2)]}", 
                <i>${spell(soundChange(inanimateNoun3))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot3)]}", 
                <i>${spell(soundChange(inanimateNoun4))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot4)]}".`
        }
    }
    if (typologyNum === 1 && genderNum === 2) {//if masculine and feminine
        masculineAffix = generateAffixes();
        feminineAffix = generateAffixes(); 
        let masculineRoot1 = randomNouns().randomMasculineNoun;
        let masculineRoot2 = randomNouns().randomMasculineNoun;
        let masculineRoot3 = randomNouns().randomMasculineNoun;
        let masculineRoot4 = randomNouns().randomMasculineNoun;
        let feminineRoot1 = randomNouns().randomFeminineNoun;
        let feminineRoot2 = randomNouns().randomFeminineNoun;
        let feminineRoot3 = randomNouns().randomFeminineNoun;
        let feminineRoot4 = randomNouns().randomFeminineNoun;
        if(genderSuffixOrPrefix === "suffix") {
            let masculineNoun1 = masculineRoot1 + masculineAffix;
            let masculineNoun2 = masculineRoot2 + masculineAffix;
            let masculineNoun3 = masculineRoot3 + masculineAffix;
            let masculineNoun4 = masculineRoot4 + masculineAffix;
            let feminineNoun1 = feminineRoot1 + feminineAffix;
            let feminineNoun2 = feminineRoot2 + feminineAffix;
            let feminineNoun3 = feminineRoot3 + feminineAffix;
            let feminineNoun4 = feminineRoot4 + feminineAffix;

            //takes masculine nouns and derives feminine forms
            function switchNoungender(englishWord) {
                const newLi = document.createElement("li");
                let nounIndex = nounArray.indexOf(englishWord);
                let bareRoot = generatedNouns[nounIndex];
                let mascNoun = bareRoot + masculineAffix;
                let femNoun = bareRoot + feminineAffix;
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
                    generatedNouns[nounArray.indexOf("cow")] = bareRoot;
                }
                if(englishWord === "horse") {
                    femNounMeaning = "mare";
                    generatedNouns[nounArray.indexOf("mare")] = bareRoot;
                }
                if(englishWord === "pig") {
                    femNounMeaning = "she-pig";
                }
                if(englishWord === "wolf") {
                    femNounMeaning = "she-wolf";
                }
                if(englishWord === "rooster") {
                    femNounMeaning = "chicken";
                    generatedNouns[nounArray.indexOf("chicken")] = bareRoot;
                }
                if(englishWord === "elk") {
                    femNounMeaning = "elk doe";
                }
                if(englishWord === "dog") {
                    femNounMeaning = "bitch";
                }
                if(englishWord === "ram") {
                    femNounMeaning = "ewe";
                    generatedNouns[nounArray.indexOf("ewe")] = bareRoot;
                }
                spanFemMeaning.innerHTML = ` "${femNounMeaning}"`
                newLi.appendChild(spanFemMeaning)
                genderUl.appendChild(newLi);
                
            }

            genderPAffixes.innerHTML = `Masculine nouns take the suffix <i>-${spell(soundChange(masculineAffix))}</i>:
            <i>${spell(soundChange(masculineNoun1))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot1)]}",
            <i>${spell(soundChange(masculineNoun2))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot2)]}",
            <i>${spell(soundChange(masculineNoun3))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot3)]}",
            <i>${spell(soundChange(masculineNoun4))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot4)]}".<br/>
            Feminine nouns take the suffix <i>-${spell(soundChange(feminineAffix))}</i>:
            <i>${spell(soundChange(feminineNoun1))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot1)]}",
            <i>${spell(soundChange(feminineNoun2))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot2)]}",
            <i>${spell(soundChange(feminineNoun3))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot3)]}",
            <i>${spell(soundChange(feminineNoun4))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot4)]}".<br/>
            Nouns can switch gender as a form of derivation, a common example is feminine forms of animal names, used to refer to female individuals:`
            switchNoungender("bull");
            switchNoungender("ram");
            switchNoungender("rooster");
            switchNoungender("horse");
            switchNoungender("wolf");
            switchNoungender("pig");
            switchNoungender("elk");
            switchNoungender("dog");

        } else if(genderSuffixOrPrefix === "prefix") {
            let masculineNoun1 = masculineAffix + result.randomMasculineNoun1;
            let masculineNoun2 = masculineAffix + result.randomMasculineNoun2;
            let masculineNoun3 = masculineAffix + result.randomMasculineNoun3;
            let masculineNoun4 = masculineAffix + result.randomMasculineNoun4;
            let feminineNoun1 = feminineAffix + result.randomFeminineNoun1;
            let feminineNoun2 = feminineAffix + result.randomFeminineNoun2;
            let feminineNoun3 = feminineAffix + result.randomFeminineNoun3;
            let feminineNoun4 = feminineAffix + result.randomFeminineNoun4;

            //takes masculine nouns and derives feminine forms
            function switchNoungender(englishWord) {
                const newLi = document.createElement("li");
                let nounIndex = nounArray.indexOf(englishWord);
                let bareRoot = generatedNouns[nounIndex];
                let mascNoun = masculineAffix + bareRoot;
                let femNoun = feminineAffix + bareRoot;
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
                    generatedNouns[nounArray.indexOf("cow")] = bareRoot;
                }
                if(englishWord === "horse") {
                    femNounMeaning = "mare";
                    generatedNouns[nounArray.indexOf("mare")] = bareRoot;
                }
                if(englishWord === "pig") {
                    femNounMeaning = "she-pig";
                }
                if(englishWord === "wolf") {
                    femNounMeaning = "she-wolf";
                }
                if(englishWord === "rooster") {
                    femNounMeaning = "chicken";
                    generatedNouns[nounArray.indexOf("chicken")] = bareRoot;
                }
                if(englishWord === "elk") {
                    femNounMeaning = "elk doe";
                }
                if(englishWord === "dog") {
                    femNounMeaning = "bitch";
                }
                if(englishWord === "ram") {
                    femNounMeaning = "ewe";
                    generatedNouns[nounArray.indexOf("ewe")] = bareRoot;
                }
                spanFemMeaning.innerHTML = ` "${femNounMeaning}"`
                newLi.appendChild(spanFemMeaning)
                genderUl.appendChild(newLi);
            }

            genderPAffixes.innerHTML = `Masculine nouns take the prefix <i>${spell(soundChange(masculineAffix))}-</i>:
            <i>${spell(soundChange(masculineNoun1))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot1)]}",
            <i>${spell(soundChange(masculineNoun2))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot2)]}",
            <i>${spell(soundChange(masculineNoun3))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot3)]}",
            <i>${spell(soundChange(masculineNoun4))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot4)]}".<br/>
            Feminine nouns take the prefix <i>${spell(soundChange(feminineAffix))}-</i>:
            <i>${spell(soundChange(feminineNoun1))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot1)]}",
            <i>${spell(soundChange(feminineNoun2))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot2)]}",
            <i>${spell(soundChange(feminineNoun3))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot3)]}",
            <i>${spell(soundChange(feminineNoun4))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot4)]}".<br/>
            Nouns can switch gender as a form of derivation, a common example is feminine forms of animal names, used to refer to female individuals:`
            switchNoungender("bull");
            switchNoungender("ram");
            switchNoungender("rooster");
            switchNoungender("horse");
            switchNoungender("wolf");
            switchNoungender("pig");
            switchNoungender("elk");
            switchNoungender("dog");
        }
       
    }
    if(typologyNum === 1 && genderNum === 3) {//if masculine, feminine and neuter
        masculineAffix = generateAffixes();
        feminineAffix = generateAffixes(); 
        neuterAffix = generateAffixes(); 
        let masculineRoot1 = randomNouns().randomMasculine2Noun;
        let masculineRoot2 = randomNouns().randomMasculine2Noun;
        let masculineRoot3 = randomNouns().randomMasculine2Noun;
        let masculineRoot4 = randomNouns().randomMasculine2Noun;
        let feminineRoot1 = randomNouns().randomFeminine2Noun;
        let feminineRoot2 = randomNouns().randomFeminine2Noun;
        let feminineRoot3 = randomNouns().randomFeminine2Noun;
        let feminineRoot4 = randomNouns().randomFeminine2Noun;
        let neuterRoot1 = randomNouns().randomNeuterNoun;
        let neuterRoot2 = randomNouns().randomNeuterNoun;;
        let neuterRoot3 = randomNouns().randomNeuterNoun;;
        let neuterRoot4 = randomNouns().randomNeuterNoun;;
        if(genderSuffixOrPrefix === "suffix") {
            let masculineNoun1 = masculineRoot1 + masculineAffix;
            let masculineNoun2 = masculineRoot2 + masculineAffix;
            let masculineNoun3 = masculineRoot3 + masculineAffix;
            let masculineNoun4 = masculineRoot4 + masculineAffix;
            let feminineNoun1 = feminineRoot1 + feminineAffix;
            let feminineNoun2 = feminineRoot2 + feminineAffix;
            let feminineNoun3 = feminineRoot3 + feminineAffix;
            let feminineNoun4 = feminineRoot4 + feminineAffix;
            let neuterNoun1 = neuterRoot1 + neuterAffix;
            let neuterNoun2 = neuterRoot2 + neuterAffix;
            let neuterNoun3 = neuterRoot3 + neuterAffix;
            let neuterNoun4 = neuterRoot4 + neuterAffix;

            //takes masculine nouns and derives feminine forms
            function switchNoungender(englishWord) {
                const newLi = document.createElement("li");
                let nounIndex = nounArray.indexOf(englishWord);
                let bareRoot = generatedNouns[nounIndex];
                let mascNoun = bareRoot + masculineAffix;
                let femNoun = bareRoot + feminineAffix;
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
                    generatedNouns[nounArray.indexOf("cow")] = bareRoot;
                }
                if(englishWord === "horse") {
                    femNounMeaning = "mare";
                    generatedNouns[nounArray.indexOf("mare")] = bareRoot;
                }
                if(englishWord === "pig") {
                    femNounMeaning = "she-pig";
                }
                if(englishWord === "wolf") {
                    femNounMeaning = "she-wolf";
                }
                if(englishWord === "rooster") {
                    femNounMeaning = "chicken";
                    generatedNouns[nounArray.indexOf("chicken")] = bareRoot;
                }
                if(englishWord === "elk") {
                    femNounMeaning = "elk doe";
                }
                if(englishWord === "dog") {
                    femNounMeaning = "bitch";
                }
                if(englishWord === "ram") {
                    femNounMeaning = "ewe";
                    generatedNouns[nounArray.indexOf("ewe")] = bareRoot;
                }
                spanFemMeaning.innerHTML = ` "${femNounMeaning}"`
                newLi.appendChild(spanFemMeaning)
                genderUl.appendChild(newLi);
            }

            genderPAffixes.innerHTML = `Masculine nouns take the suffix <i>-${spell(soundChange(masculineAffix))}</i>:
            <i>${spell(soundChange(masculineNoun1))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot1)]}",
            <i>${spell(soundChange(masculineNoun2))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot2)]}",
            <i>${spell(soundChange(masculineNoun3))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot3)]}",
            <i>${spell(soundChange(masculineNoun4))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot4)]}".<br/>
            Feminine nouns take the suffix <i>-${spell(soundChange(feminineAffix))}</i>:
            <i>${spell(soundChange(feminineNoun1))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot1)]}",
            <i>${spell(soundChange(feminineNoun2))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot2)]}",
            <i>${spell(soundChange(feminineNoun3))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot3)]}",
            <i>${spell(soundChange(feminineNoun4))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot4)]}".<br/>
            Neuter nouns take the suffix <i>-${spell(soundChange(neuterAffix))}</i>:
            <i>${spell(soundChange(neuterNoun1))}</i> "${nounArray[generatedNouns.indexOf(neuterRoot1)]}",
            <i>${spell(soundChange(neuterNoun2))}</i> "${nounArray[generatedNouns.indexOf(neuterRoot2)]}",
            <i>${spell(soundChange(neuterNoun3))}</i> "${nounArray[generatedNouns.indexOf(neuterRoot3)]}",
            <i>${spell(soundChange(neuterNoun4))}</i> "${nounArray[generatedNouns.indexOf(neuterRoot4)]}".<br/>
            Nouns can switch gender as a form of derivation, a common example is feminine forms of animal names, used to refer to female individuals:`
            switchNoungender("bull");
            switchNoungender("ram");
            switchNoungender("rooster");
            switchNoungender("horse");
            switchNoungender("wolf");
            switchNoungender("pig");
            switchNoungender("elk");
            switchNoungender("dog");
            
        } else if(genderSuffixOrPrefix === "prefix") {
            let masculineNoun1 = masculineAffix + masculineRoot1;
            let masculineNoun2 = masculineAffix + masculineRoot2;
            let masculineNoun3 = masculineAffix + masculineRoot3;
            let masculineNoun4 = masculineAffix + masculineRoot4;
            let feminineNoun1 = feminineAffix + feminineRoot1;
            let feminineNoun2 = feminineAffix + feminineRoot2;
            let feminineNoun3 = feminineAffix + feminineRoot3;
            let feminineNoun4 = feminineAffix + feminineRoot4;
            let neuterNoun1 = neuterAffix + neuterNoun1;
            let neuterNoun2 = neuterAffix + neuterNoun2;
            let neuterNoun3 = neuterAffix + neuterNoun3;
            let neuterNoun4 = neuterAffix + neuterNoun4;

            //takes masculine nouns and derives feminine forms
            function switchNoungender(englishWord) {
                const newLi = document.createElement("li");
                let nounIndex = nounArray.indexOf(englishWord);
                let bareRoot = generatedNouns[nounIndex];
                let mascNoun = masculineAffix + bareRoot;
                let femNoun = feminineAffix + bareRoot;
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
                    generatedNouns[nounArray.indexOf("cow")] = bareRoot;
                }
                if(englishWord === "horse") {
                    femNounMeaning = "mare";
                    generatedNouns[nounArray.indexOf("mare")] = bareRoot;
                }
                if(englishWord === "pig") {
                    femNounMeaning = "she-pig";
                }
                if(englishWord === "wolf") {
                    femNounMeaning = "she-wolf";
                }
                if(englishWord === "rooster") {
                    femNounMeaning = "chicken";
                    generatedNouns[nounArray.indexOf("chicken")] = bareRoot;
                }
                if(englishWord === "elk") {
                    femNounMeaning = "elk doe";
                }
                if(englishWord === "dog") {
                    femNounMeaning = "bitch";
                }
                if(englishWord === "ram") {
                    femNounMeaning = "ewe";
                    generatedNouns[nounArray.indexOf("ewe")] = bareRoot;
                }
                spanFemMeaning.innerHTML = ` "${femNounMeaning}"`
                newLi.appendChild(spanFemMeaning)
                genderUl.appendChild(newLi);
            }

            genderPAffixes.innerHTML = `Masculine nouns take the prefix <i>${spell(soundChange(masculineAffix))}-</i>:
            <i>${spell(soundChange(masculineNoun1))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot1)]}",
            <i>${spell(soundChange(masculineNoun2))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot2)]}",
            <i>${spell(soundChange(masculineNoun3))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot3)]}",
            <i>${spell(soundChange(masculineNoun4))}</i> "${nounArray[generatedNouns.indexOf(masculineRoot4)]}".<br/>
            Feminine nouns take the prefix <i>${spell(soundChange(feminineAffix))}</i>:
            <i>${spell(soundChange(feminineNoun1))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot1)]}",
            <i>${spell(soundChange(feminineNoun2))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot2)]}",
            <i>${spell(soundChange(feminineNoun3))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot3)]}",
            <i>${spell(soundChange(feminineNoun4))}</i> "${nounArray[generatedNouns.indexOf(feminineRoot4)]}".<br/>
            Neuter nouns take the suffix <i>-${spell(soundChange(neuterAffix))}</i>:
            <i>${spell(soundChange(neuterNoun1))}</i> "${nounArray[generatedNouns.indexOf(neuterRoot1)]}",
            <i>${spell(soundChange(neuterNoun2))}</i> "${nounArray[generatedNouns.indexOf(neuterRoot2)]}",
            <i>${spell(soundChange(neuterNoun3))}</i> "${nounArray[generatedNouns.indexOf(neuterRoot3)]}",
            <i>${spell(soundChange(neuterNoun4))}</i> "${nounArray[generatedNouns.indexOf(neuterRoot4)]}".<br/>
            Nouns can switch gender as a form of derivation, a common example is feminine forms of animal names, used to refer to female individuals:`
            switchNoungender("bull");
            switchNoungender("ram");
            switchNoungender("rooster");
            switchNoungender("horse");
            switchNoungender("wolf");
            switchNoungender("pig");
            switchNoungender("elk");
            switchNoungender("dog");
        }
        
    }
    if(typologyNum === 1 && genderNum === 4) {//human, animal and inanimate
        humanAffix = generateAffixes();
        animalAffix = generateAffixes();
        inanimate2Affix = generateAffixes(); 
        let humanRoot1 = randomNouns().randomHumanNoun;
        let humanRoot2 = randomNouns().randomHumanNoun;
        let humanRoot3 = randomNouns().randomHumanNoun;
        let humanRoot4 = randomNouns().randomHumanNoun;
        let animalRoot1 = randomNouns().randomAnimalNoun;
        let animalRoot2 = randomNouns().randomAnimalNoun;
        let animalRoot3 = randomNouns().randomAnimalNoun;
        let animalRoot4 = randomNouns().randomAnimalNoun;
        let inanimateRoot1 = randomNouns().randomInanimate2Noun;
        let inanimateRoot2 = randomNouns().randomInanimate2Noun;
        let inanimateRoot3 = randomNouns().randomInanimate2Noun;
        let inanimateRoot4 = randomNouns().randomInanimate2Noun;
        if(genderSuffixOrPrefix === "suffix") {
            let humanNoun1 = humanRoot1 + humanAffix;
            let humanNoun2 = humanRoot2 + humanAffix;
            let humanNoun3 = humanRoot3 + humanAffix;
            let humanNoun4 = humanRoot4 + humanAffix;
            let animalNoun1 = animalRoot1 + animalAffix;
            let animalNoun2 = animalRoot2 + animalAffix;
            let animalNoun3 = animalRoot3 + animalAffix;
            let animalNoun4 = animalRoot4 + animalAffix;
            let inanimateNoun1 = inanimateRoot1 + inanimate2Affix;
            let inanimateNoun2 = inanimateRoot2 + inanimate2Affix;
            let inanimateNoun3 = inanimateRoot3 + inanimate2Affix;
            let inanimateNoun4 = inanimateRoot4 + inanimate2Affix;

            //takes animal nouns and derives human forms
            function switchNoungender(englishWord) {
                const newLi = document.createElement("li");
                let nounIndex = nounArray.indexOf(englishWord);
                let bareRoot = generatedNouns[nounIndex];
                let animalNoun = bareRoot + animalAffix;
                let humanNoun = bareRoot + humanAffix;
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
                    generatedNouns[nounArray.indexOf("cowherd")] = bareRoot;
                }
                if(englishWord === "sheep") {
                    humanNounMeaning = "shepherd";
                }
                if(englishWord === "horse") {
                    humanNounMeaning = "horsegroom";
                }

                spanHumanMeaning.innerHTML = ` "${humanNounMeaning}"`
                newLi.appendChild(spanHumanMeaning)
                genderUl.appendChild(newLi);
            }

            genderPAffixes.innerHTML = `Human nouns take the suffix <i>-${spell(soundChange(humanAffix))}</i>:
            <i>${spell(soundChange(humanNoun1))}</i> "${nounArray[generatedNouns.indexOf(humanRoot1)]}",
            <i>${spell(soundChange(humanNoun2))}</i> "${nounArray[generatedNouns.indexOf(humanRoot2)]}",
            <i>${spell(soundChange(humanNoun3))}</i> "${nounArray[generatedNouns.indexOf(humanRoot3)]}",
            <i>${spell(soundChange(humanNoun4))}</i> "${nounArray[generatedNouns.indexOf(humanRoot4)]}".<br/>
            Animal nouns take the suffix <i>-${spell(soundChange(animalAffix))}</i>:
            <i>${spell(soundChange(animalNoun1))}</i> "${nounArray[generatedNouns.indexOf(animalRoot1)]}",
            <i>${spell(soundChange(animalNoun2))}</i> "${nounArray[generatedNouns.indexOf(animalRoot2)]}",
            <i>${spell(soundChange(animalNoun3))}</i> "${nounArray[generatedNouns.indexOf(animalRoot3)]}",
            <i>${spell(soundChange(animalNoun4))}</i> "${nounArray[generatedNouns.indexOf(animalRoot4)]}".<br/>
            Inanimate nouns take the suffix <i>-${spell(soundChange(inanimate2Affix))}</i>:
            <i>${spell(soundChange(inanimateNoun1))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot1)]}",
            <i>${spell(soundChange(inanimateNoun2))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot2)]}",
            <i>${spell(soundChange(inanimateNoun3))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot3)]}",
            <i>${spell(soundChange(inanimateNoun4))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot4)]}".<br/>
            Terms for keepers of animals can be derived by placing the animal noun in the human gender.`
            switchNoungender("cow");
            switchNoungender("sheep");
            switchNoungender("horse");

        } else if(genderSuffixOrPrefix === "prefix") {
            let humanNoun1 = humanAffix + humanRoot1;
            let humanNoun2 = humanAffix + humanRoot2;
            let humanNoun3 = humanAffix + humanRoot3;
            let humanNoun4 = humanAffix + humanRoot4;
            let animalNoun1 = animalAffix + animalRoot1;
            let animalNoun2 = animalAffix + animalRoot2;
            let animalNoun3 = animalAffix + animalRoot3;
            let animalNoun4 = animalAffix + animalRoot4;
            let inanimateNoun1 = inanimate2Affix + inanimateNoun1;
            let inanimateNoun2 = inanimate2Affix + inanimateNoun2;
            let inanimateNoun3 = inanimate2Affix + inanimateNoun3;
            let inanimateNoun4 = inanimate2Affix + inanimateNoun4;

            //takes animal nouns and derives human forms
            function switchNoungender(englishWord) {
                const newLi = document.createElement("li");
                let nounIndex = nounArray.indexOf(englishWord);
                let bareRoot = generatedNouns[nounIndex];
                let animalNoun = animalAffix + bareRoot;
                let humanNoun = humanAffix + bareRoot;
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
                    generatedNouns[nounArray.indexOf("cowherd")] = bareRoot;
                }
                if(englishWord === "sheep") {
                    humanNounMeaning = "shepherd";
                }
                if(englishWord === "horse") {
                    humanNounMeaning = "horsegroom";
                }

                spanHumanMeaning.innerHTML = ` "${humanNounMeaning}"`
                newLi.appendChild(spanHumanMeaning)
                genderUl.appendChild(newLi);
            }

            genderPAffixes.innerHTML = `Human nouns take the prefix <i>${spell(soundChange(humanAffix))}-</i>:
            <i>${spell(soundChange(humanNoun1))}</i> "${nounArray[generatedNouns.indexOf(humanRoot1)]}",
            <i>${spell(soundChange(humanNoun2))}</i> "${nounArray[generatedNouns.indexOf(humanRoot2)]}",
            <i>${spell(soundChange(humanNoun3))}</i> "${nounArray[generatedNouns.indexOf(humanRoot3)]}",
            <i>${spell(soundChange(humanNoun4))}</i> "${nounArray[generatedNouns.indexOf(humanRoot4)]}".<br/>
            Animal nouns take the prefix <i>${spell(soundChange(animalAffix))}-</i>:
            <i>${spell(soundChange(animalNoun1))}</i> "${nounArray[generatedNouns.indexOf(animalRoot1)]}",
            <i>${spell(soundChange(animalNoun2))}</i> "${nounArray[generatedNouns.indexOf(animalRoot2)]}",
            <i>${spell(soundChange(animalNoun3))}</i> "${nounArray[generatedNouns.indexOf(animalRoot3)]}",
            <i>${spell(soundChange(animalNoun4))}</i> "${nounArray[generatedNouns.indexOf(animalRoot4)]}".<br/>
            Inanimate nouns take the prefix <i>${spell(soundChange(inanimate2Affix))}-</i>:
            <i>${spell(soundChange(inanimateNoun1))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot1)]}",
            <i>${spell(soundChange(inanimateNoun2))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot2)]}",
            <i>${spell(soundChange(inanimateNoun3))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot3)]}",
            <i>${spell(soundChange(inanimateNoun4))}</i> "${nounArray[generatedNouns.indexOf(inanimateRoot4)]}".<br/>
            Terms for keepers of animals can be derived by placing the animal noun in the human gender.`
            switchNoungender("cow");
            switchNoungender("sheep");
            switchNoungender("horse");
        }
        
    }
    if(typologyNum === 1 && genderNum === 5) {//divine and profane
        divineAffix = generateAffixes();
        profaneAffix = generateAffixes(); 
        let divineRoot1 = randomNouns().randomDivineNoun;
        let divineRoot2 = randomNouns().randomDivineNoun;
        let divineRoot3 = randomNouns().randomDivineNoun;
        let divineRoot4 = randomNouns().randomDivineNoun;
        let profaneRoot1 = randomNouns().randomProfaneNoun;
        let profaneRoot2 = randomNouns().randomProfaneNoun;
        let profaneRoot3 = randomNouns().randomProfaneNoun;
        let profaneRoot4 = randomNouns().randomProfaneNoun;
        if(genderSuffixOrPrefix === "suffix") {
            let divineNoun1 = divineRoot1 + divineAffix;
            let divineNoun2 = divineRoot2 + divineAffix;
            let divineNoun3 = divineRoot3 + divineAffix;
            let divineNoun4 = divineRoot4 + divineAffix;
            let profaneNoun1 = profaneRoot1 + profaneAffix;
            let profaneNoun2 = profaneRoot2 + profaneAffix;
            let profaneNoun3 = profaneRoot3 + profaneAffix;
            let profaneNoun4 = profaneRoot4 + profaneAffix;
            genderPAffixes.innerHTML = `Divine nouns take the suffix <i>-${spell(soundChange(divineAffix))}</i>:
            <i>${spell(soundChange(divineNoun1))}</i> "${nounArray[generatedNouns.indexOf(divineRoot1)]}",
            <i>${spell(soundChange(divineNoun2))}</i> "${nounArray[generatedNouns.indexOf(divineRoot2)]}",
            <i>${spell(soundChange(divineNoun3))}</i> "${nounArray[generatedNouns.indexOf(divineRoot3)]}",
            <i>${spell(soundChange(divineNoun4))}</i> "${nounArray[generatedNouns.indexOf(divineRoot4)]}".<br/>
            Profane nouns take the suffix <i>-${spell(soundChange(profaneAffix))}</i>:
            <i>${spell(soundChange(profaneNoun1))}</i> "${nounArray[generatedNouns.indexOf(profaneRoot1)]}",
            <i>${spell(soundChange(profaneNoun2))}</i> "${nounArray[generatedNouns.indexOf(profaneRoot2)]}",
            <i>${spell(soundChange(profaneNoun3))}</i> "${nounArray[generatedNouns.indexOf(profaneRoot3)]}",
            <i>${spell(soundChange(profaneNoun4))}</i> "${nounArray[generatedNouns.indexOf(profaneRoot4)]}".<br/>`
        } else if(genderSuffixOrPrefix === "prefix") {
            let divineNoun1 = divineAffix + divineRoot1;
            let divineNoun2 = divineAffix + divineRoot2;
            let divineNoun3 = divineAffix + divineRoot3;
            let divineNoun4 = divineAffix + divineRoot4;
            let profaneNoun1 = profaneAffix + profaneRoot1;
            let profaneNoun2 = profaneAffix + profaneRoot2;
            let profaneNoun3 = profaneAffix + profaneRoot3;
            let profaneNoun4 = profaneAffix + profaneRoot4;
            genderPAffixes.innerHTML = `Divine nouns take the prefix <i>-${spell(soundChange(divineAffix))}-</i>:
            <i>${spell(soundChange(divineNoun1))}</i> "${nounArray[generatedNouns.indexOf(divineRoot1)]}",
            <i>${spell(soundChange(divineNoun2))}</i> "${nounArray[generatedNouns.indexOf(divineRoot2)]}",
            <i>${spell(soundChange(divineNoun3))}</i> "${nounArray[generatedNouns.indexOf(divineRoot3)]}",
            <i>${spell(soundChange(divineNoun4))}</i> "${nounArray[generatedNouns.indexOf(divineRoot4)]}".<br/>
            Profane nouns take the prefix <i>${spell(soundChange(profaneAffix))}-</i>:
            <i>${spell(soundChange(profaneNoun1))}</i> "${nounArray[generatedNouns.indexOf(profaneRoot1)]}",
            <i>${spell(soundChange(profaneNoun2))}</i> "${nounArray[generatedNouns.indexOf(profaneRoot2)]}",
            <i>${spell(soundChange(profaneNoun3))}</i> "${nounArray[generatedNouns.indexOf(profaneRoot3)]}",
            <i>${spell(soundChange(profaneNoun4))}</i> "${nounArray[generatedNouns.indexOf(profaneRoot4)]}".<br/>`
        }
        
    }
    if(typologyNum === 1 && genderNum === 6) {//active and passive
        activeAffix = generateAffixes();
        passiveAffix = generateAffixes(); 
        let activeRoot1 = randomNouns().randomActiveNoun;
        let activeRoot2 = randomNouns().randomActiveNoun;
        let activeRoot3 = randomNouns().randomActiveNoun;
        let activeRoot4 = randomNouns().randomActiveNoun;
        let passiveRoot1 = randomNouns().randomPassiveNoun;
        let passiveRoot2 = randomNouns().randomPassiveNoun;
        let passiveRoot3 = randomNouns().randomPassiveNoun;
        let passiveRoot4 = randomNouns().randomPassiveNoun;
        if(genderSuffixOrPrefix === "suffix") {
            let activeNoun1 = activeRoot1 + activeAffix;
            let activeNoun2 = activeRoot2 + activeAffix;
            let activeNoun3 = activeRoot3 + activeAffix;
            let activeNoun4 = activeRoot4 + activeAffix;
            let passiveNoun1 = passiveRoot1 + passiveAffix;
            let passiveNoun2 = passiveRoot2 + passiveAffix;
            let passiveNoun3 = passiveRoot3 + passiveAffix;
            let passiveNoun4 = passiveRoot4 + passiveAffix;
            genderPAffixes.innerHTML = `Active nouns take the suffix <i>-${spell(soundChange(activeAffix))}</i>:
            <i>${spell(soundChange(activeNoun1))}</i> "${nounArray[generatedNouns.indexOf(activeRoot1)]}",
            <i>${spell(soundChange(activeNoun2))}</i> "${nounArray[generatedNouns.indexOf(activeRoot2)]}",
            <i>${spell(soundChange(activeNoun3))}</i> "${nounArray[generatedNouns.indexOf(activeRoot3)]}",
            <i>${spell(soundChange(activeNoun4))}</i> "${nounArray[generatedNouns.indexOf(activeRoot4)]}".<br/>
            Passive nouns take the suffix <i>-${spell(soundChange(passiveAffix))}</i>:
            <i>${spell(soundChange(passiveNoun1))}</i> "${nounArray[generatedNouns.indexOf(passiveRoot1)]}",
            <i>${spell(soundChange(passiveNoun2))}</i> "${nounArray[generatedNouns.indexOf(passiveRoot2)]}",
            <i>${spell(soundChange(passiveNoun3))}</i> "${nounArray[generatedNouns.indexOf(passiveRoot3)]}",
            <i>${spell(soundChange(passiveNoun4))}</i> "${nounArray[generatedNouns.indexOf(passiveRoot4)]}".<br/>`
        } else if(genderSuffixOrPrefix === "prefix") {
            let activeNoun1 = activeAffix + activeRoot1;
            let activeNoun2 = activeAffix + activeRoot2;
            let activeNoun3 = activeAffix + activeRoot3;
            let activeNoun4 = activeAffix + activeRoot4 ;
            let passiveNoun1 = passiveAffix + passiveRoot1;
            let passiveNoun2 = passiveAffix + passiveRoot2;
            let passiveNoun3 = passiveAffix + passiveRoot3;
            let passiveNoun4 = passiveAffix + passiveRoot4;
            genderPAffixes.innerHTML = `Active nouns take the prefix <i>${spell(soundChange(activeAffix))}-</i>:
            <i>${spell(soundChange(activeNoun1))}</i> "${nounArray[generatedNouns.indexOf(activeRoot1)]}",
            <i>${spell(soundChange(activeNoun2))}</i> "${nounArray[generatedNouns.indexOf(activeRoot2)]}",
            <i>${spell(soundChange(activeNoun3))}</i> "${nounArray[generatedNouns.indexOf(activeRoot3)]}",
            <i>${spell(soundChange(activeNoun4))}</i> "${nounArray[generatedNouns.indexOf(activeRoot4)]}".<br/>
            Passive nouns take the prefix <i>${spell(soundChange(passiveAffix))}-</i>:
            <i>${spell(soundChange(passiveNoun1))}</i> "${nounArray[generatedNouns.indexOf(passiveRoot1)]}",
            <i>${spell(soundChange(passiveNoun2))}</i> "${nounArray[generatedNouns.indexOf(passiveRoot2)]}",
            <i>${spell(soundChange(passiveNoun3))}</i> "${nounArray[generatedNouns.indexOf(passiveRoot3)]}",
            <i>${spell(soundChange(passiveNoun4))}</i> "${nounArray[generatedNouns.indexOf(passiveRoot4)]}".<br/>`
        }
    }
    if(typologyNum === 1 && genderNum === 7) {//natural and artificial
        naturalAffix = generateAffixes();
        artificialAffix = generateAffixes(); 
        let naturalRoot1 = randomNouns().randomnaturalNoun;
        let naturalRoot2 = randomNouns().randomnaturalNoun;
        let naturalRoot3 = randomNouns().randomnaturalNoun;
        let naturalRoot4 = randomNouns().randomnaturalNoun;
        let artificialRoot1 = randomNouns().randomArtificialNoun;
        let artificialRoot2 = randomNouns().randomArtificialNoun;
        let artificialRoot3 = randomNouns().randomArtificialNoun;
        let artificialRoot4 = randomNouns().randomArtificialNoun;
        if(genderSuffixOrPrefix === "suffix") {
            let naturalNoun1 = naturalRoot1 + naturalAffix;
            let naturalNoun2 = naturalRoot2 + naturalAffix;
            let naturalNoun3 = naturalRoot3 + naturalAffix;
            let naturalNoun4 = naturalRoot4 + naturalAffix;
            let artificialNoun1 = artificialRoot1 + artificialAffix;
            let artificialNoun2 = artificialRoot2 + artificialAffix;
            let artificialNoun3 = artificialRoot3 + artificialAffix;
            let artificialNoun4 = artificialRoot4 + artificialAffix;
            genderPAffixes.innerHTML = `Natural nouns take the suffix <i>-${spell(soundChange(naturalAffix))}</i>:
            <i>${spell(soundChange(naturalNoun1))}</i> "${nounArray[generatedNouns.indexOf(naturalRoot1)]}",
            <i>${spell(soundChange(naturalNoun2))}</i> "${nounArray[generatedNouns.indexOf(naturalRoot2)]}",
            <i>${spell(soundChange(naturalNoun3))}</i> "${nounArray[generatedNouns.indexOf(naturalRoot3)]}",
            <i>${spell(soundChange(naturalNoun4))}</i> "${nounArray[generatedNouns.indexOf(naturalRoot4)]}".<br/>
            Artificial nouns take the suffix <i>-${spell(soundChange(artificialAffix))}</i>:
            <i>${spell(soundChange(artificialNoun1))}</i> "${nounArray[generatedNouns.indexOf(artificialRoot1)]}",
            <i>${spell(soundChange(artificialNoun2))}</i> "${nounArray[generatedNouns.indexOf(artificialRoot2)]}",
            <i>${spell(soundChange(artificialNoun3))}</i> "${nounArray[generatedNouns.indexOf(artificialRoot3)]}",
            <i>${spell(soundChange(artificialNoun4))}</i> "${nounArray[generatedNouns.indexOf(artificialRoot4)]}".<br/>`
        } else if(genderSuffixOrPrefix === "prefix") {
            let naturalNoun1 = naturalAffix + naturalRoot1;
            let naturalNoun2 = naturalAffix + naturalRoot2;
            let naturalNoun3 = naturalAffix + naturalRoot3;
            let naturalNoun4 = naturalAffix + naturalRoot4;
            let artificialNoun1 = artificialAffix + artificialRoot1;
            let artificialNoun2 = artificialAffix + artificialRoot2;
            let artificialNoun3 = artificialAffix + artificialRoot3;
            let artificialNoun4 = artificialAffix + artificialRoot4;
            genderPAffixes.innerHTML = `Natural nouns take the prefix <i>${spell(soundChange(naturalAffix))}-</i>:
            <i>${spell(soundChange(naturalNoun1))}</i> "${nounArray[generatedNouns.indexOf(naturalRoot1)]}",
            <i>${spell(soundChange(naturalNoun2))}</i> "${nounArray[generatedNouns.indexOf(naturalRoot2)]}",
            <i>${spell(soundChange(naturalNoun3))}</i> "${nounArray[generatedNouns.indexOf(naturalRoot3)]}",
            <i>${spell(soundChange(naturalNoun4))}</i> "${nounArray[generatedNouns.indexOf(naturalRoot4)]}".<br/>
            Artificial nouns take the prefix <i>${spell(soundChange(artificialAffix))}-</i>:
            <i>${spell(soundChange(artificialNoun1))}</i> "${nounArray[generatedNouns.indexOf(artificialRoot1)]}",
            <i>${spell(soundChange(artificialNoun2))}</i> "${nounArray[generatedNouns.indexOf(artificialRoot2)]}",
            <i>${spell(soundChange(artificialNoun3))}</i> "${nounArray[generatedNouns.indexOf(artificialRoot3)]}",
            <i>${spell(soundChange(artificialNoun4))}</i> "${nounArray[generatedNouns.indexOf(artificialRoot4)]}".<br/>`
        }
    }


    genderDiv.appendChild(genderPAffixes);
    genderDiv.appendChild(genderUl);
}










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
    randomNouns();
    chooseIfMarkedNominative();
    chooseCases();
    explainCases();
    randomNumForNounGender();
    chooseNounGender();
    randomNumForGrammaticalNumber();
    chooseGrammaticalNumbers();
    agglutinativeNouns();


    
    
   }

export {generatedNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, genderNum, nounGenderArray, grammaticalNum, typologyNum, singularAffix, animateAffix, inanimateAffix, genderSuffixOrPrefix, masculineAffix, feminineAffix, neuterAffix, divineAffix, profaneAffix, divineArray, profaneArray, humanAffix, animalAffix, inanimate2Affix, activeAffix, passiveAffix, naturalAffix, artificialAffix};