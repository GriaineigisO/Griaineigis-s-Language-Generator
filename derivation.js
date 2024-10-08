//@collapse
import {generateAffixes, typologyNum, markedSingularOrNot, singularAffix, numberSuffixOrPrefix, grammaticalNum, generalAffix, genderNum, animateAffix, inanimateAffix, masculineAffix, feminineAffix, neuterAffix, humanAffix, animalAffix, inanimate2Affix, divineAffix, profaneAffix, activeAffix, passiveAffix, naturalAffix, artificialAffix, nominativeAffix, languageName, generatedSmallQuanitifiers, generatedMiddlingQuanitifers, generatedBigQuantifiers, generatedOpinionQuantifiers, checkIfHeadInitialOrHeadFinal} from './script.js';

import {countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, adjectiveArray, conjunctionArray, adverbArray, adpositionArray, intensifierArray, countNounArrayPlural, transitiveVerb3SArray, transitiveVerbPastArray, generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, activePassive, animInan, divineNonDivine, humanAnimalInan, mascFemNeut, mascFem, naturalArtificial, animacyClassifierArray, shapeClassifierArray, shortGenericClassifierArray, derivedOrInheritedCountNoun, etymologyArrayCountNoun, etymologyCountNoun, derivationListCountNoun, oldCountNounArray, animInanMass, divineNonDivineMass, humanAnimalInanMass, mascFemMass,  mascFemNeutMass, naturalArtificialMass, animacyClassifierMassArray, shapeClassifierMassArray, activePassiveMass, shortGenericClassifierMassArray} from './semanticShift.js';

import { spell } from './orthography.js';
import { soundChange} from './soundchange.js';
import {derivedOrInheritedMassNoun, etymologyArrayMassNoun, etymologyMassNoun, singulativeMassNounArray, pluralSingulativeMassNounArray, derivationListMassNoun, oldMassNounArray} from './englishWordArrays/Nouns/massNouns.js'
import {derivedOrInheritedTransVerb, etymologyArrayTransVerb, etymologyTransVerb, derivationListTransVerb} from '/englishWordArrays/Verbs/englishTransitiveVerbs.js';
import {derivedOrInheritedIntransVerb, derivationListIntransVerb, etymologyArrayIntransVerb, etymologyIntransVerb} from '/englishWordArrays/Verbs/englishIntransitiveVerbs.js';
import { etymologyArrayADJ, derivedOrInheritedADJ, etymologyADJ, comparativeAdjectiveArray, derivationListAdj} from './englishWordArrays/Adjectives/englishAdjectives.js';
import {grammaticalNumber, caseNumber, animSgAffix, inanSgAffix, grammaticalNumber as grammaticalNumberFusional, mascSgAffix, femSgAffix} from './fusionalNouns.js';
import {smallQuantifiersArray, middingQuantifierArray, bigQuantifierArray, opinionQuantifierArray, derivedOrInheritedQuantifier, quantifierArray, etymologyArrayQuantifier, etymologyQuantifier, derivationListQuantfier} from './englishWordArrays/quantifierArray.js';
import {derivedOrInheritedCONJ} from './englishWordArrays/conjunctions.js'
import {derivedOrInheritedADV, derivationListAdverb} from './englishWordArrays/adverbs.js'
import {derivedOrInheritedINTENS, derivationListIntensifier} from './englishWordArrays/intensifier.js'
import {derivedOrInheritedADPO, derivationListAdpo, etymologyADPO} from './englishWordArrays/adpositions.js'
import {randomIndexOfArray, cloneArray} from './library.js'

let proneAffix = "";
let possessorAffix = "";
let possessorQualityAffix = "";
let bodyPartAffix = "";
let adjToCausativeVerbAffix = "";
let intransToTransVerbAffix = "";
let transVerbToABleAdjectiveAffix = "";
let NtoADJPrototypicalAffix = "";
let abstractAffix = "";
let verbToInanimateAgentAffix = "";
let generatedQuantifiers = [];

function clear() {
    proneAffix = "";
    possessorAffix = "";
    possessorQualityAffix = "";
    bodyPartAffix = "";
    adjToCausativeVerbAffix = "";
    intransToTransVerbAffix = "";
    transVerbToABleAdjectiveAffix = "";
    NtoADJPrototypicalAffix = "";
    abstractAffix = "";
    verbToInanimateAgentAffix = "";
    generatedQuantifiers = [];
    document.getElementById("derivational-affixes").replaceChildren();
    document.getElementById("compounds").replaceChildren();
};

function mergeQuantifierArrays() {
        generatedSmallQuanitifiers.forEach((element) => generatedQuantifiers.push(element));
        generatedMiddlingQuanitifers.forEach((element) => generatedQuantifiers.push(element));
        generatedBigQuantifiers.forEach((element) => generatedQuantifiers.push(element));
        generatedOpinionQuantifiers.forEach((element) => generatedQuantifiers.push(element));
};

function createAffixes() {
    proneAffix = generateAffixes();
    possessorAffix = generateAffixes();
    possessorQualityAffix = generateAffixes();
    bodyPartAffix = generateAffixes();
    adjToCausativeVerbAffix = generateAffixes();
    intransToTransVerbAffix  = generateAffixes();
    transVerbToABleAdjectiveAffix = generateAffixes();
    NtoADJPrototypicalAffix = generateAffixes();
    abstractAffix = generateAffixes();
    verbToInanimateAgentAffix = generateAffixes();
};

function capitaliseLanguageName(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

function removeDistinguishingLetter(word) {
        let newArray = Array.from(word);
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i] === "V"||newArray[i] === "A") {
                newArray.splice(i, 1);
                let newWord = newArray.join("");
                return newWord;
            };
        };
        return word;
    };

//if the language requires an affix in the nominative, this function applies ther appropiate affix to the derived term
function addGrammaticalAffixes(word, partOfSpeech) {
        let inflectedWord = "";
        if(partOfSpeech === "noun") { 
                if(typologyNum === 1) {
                        if(grammaticalNum < 24 && markedSingularOrNot() && genderNum < 9) {
                        if(numberSuffixOrPrefix === "suffix") {
                                inflectedWord = word + singularAffix;
                        } else {
                                inflectedWord = singularAffix + word;
                        }
                        } if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 9) {
                        for(let i = 0; i < countNounArray.length; i++) {
                                if(generatedCountNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + animateAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + animateAffix + word;
                                } else if(generatedCountNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + inanimateAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + inanimateAffix + word;
                                };
                        };
                        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 9) {
                        for(let i = 0; i < generatedCountNouns.length; i++) {
                                if(generatedCountNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + animateAffix;
                                } else if(generatedCountNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = animateAffix + word;
                                } else if(generatedCountNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + inanimateAffix;
                                } else if(generatedCountNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = inanimateAffix + word;
                                };
                        };
                        for(let i = 0; i < generatedMassNouns.length; i++) {
                                if(generatedMassNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + animateAffix;
                                } else if(generatedMassNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = animateAffix + word;
                                } else if(generatedMassNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + inanimateAffix;
                                } else if(generatedMassNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = inanimateAffix + word;
                                };
                        };
                        } else if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 10) {
                        for(let i = 0; i < countNounArray.length; i++) {
                                if(generatedCountNouns[i] === word && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + masculineAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + masculineAffix + word;
                                } else if(generatedCountNouns[i] === word && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + feminineAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + feminineAffix + word;
                                };
                        };
                        for(let i = 0; i < massNounArray.length; i++) {
                                if(generatedMassNouns[i] === word && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + masculineAffix + singularAffix;
                                } else if(generatedMassNouns[i] === word && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + masculineAffix + word;
                                } else if(generatedMassNouns[i] === word && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + feminineAffix + singularAffix;
                                } else if(generatedMassNouns[i] === word && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + feminineAffix + word;
                                };
                        };
                        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 10) {
                        for(let i = 0; i < generatedCountNouns.length; i++) {
                                if(generatedCountNouns[i] === word && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + masculineAffix;
                                } else if(generatedCountNouns[i] === word && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = masculineAffix + word;
                                } else if(generatedCountNouns[i] === word && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + feminineAffix;
                                } else if(generatedCountNouns[i] === word && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = feminineAffix + word;
                                };
                        };
                        for(let i = 0; i < generatedMassNouns.length; i++) {
                                if(generatedMassNouns[i] === word && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + masculineAffix;
                                } else if(generatedMassNouns[i] === word && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = masculineAffix + word;
                                } else if(generatedMassNouns[i] === word && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + feminineAffix;
                                } else if(generatedMassNouns[i] === word && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = feminineAffix + word;
                                };
                        };
                        } else if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 11) {
                        for(let i = 0; i < countNounArray.length; i++) {
                                if(generatedCountNouns[i] === word && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + masculineAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + masculineAffix + word;
                                } else if(generatedCountNouns[i] === word && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + feminineAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + feminineAffix + word;
                                } else if(generatedCountNouns[i] === word && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + neuterAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + neuterAffix + word;
                                };
                        };
                        for(let i = 0; i < massNounArray.length; i++) {
                                if(generatedMassNouns[i] === word && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + masculineAffix + singularAffix;
                                } else if(generatedMassNouns[i] === word && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + masculineAffix + word;
                                } else if(generatedMassNouns[i] === word && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + feminineAffix + singularAffix;
                                } else if(generatedMassNouns[i] === word && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + feminineAffix + word;
                                } else if(generatedMassNouns[i] === word && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + neuterAffix + singularAffix;
                                } else if(generatedMassNouns[i] === word && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + neuterAffix + word;
                                };
                        };
                        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 11) {
                        for(let i = 0; i < generatedCountNouns.length; i++) {
                                if(generatedCountNouns[i] === word && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + masculineAffix;
                                } else if(generatedCountNouns[i] === word && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = masculineAffix + word;
                                } else if(generatedCountNouns[i] === word && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + feminineAffix;
                                } else if(generatedCountNouns[i] === word && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = feminineAffix + word;
                                } else if(generatedCountNouns[i] === word && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + neuterAffix;
                                } else if(generatedCountNouns[i] === word && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = neuterAffix + word;
                                };
                        };
                        for(let i = 0; i < generatedMassNouns.length; i++) {
                                if(generatedMassNouns[i] === word && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + masculineAffix;
                                } else if(generatedMassNouns[i] === word && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = masculineAffix + word;
                                } else if(generatedMassNouns[i] === word && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + feminineAffix;
                                } else if(generatedMassNouns[i] === word && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = feminineAffix + word;
                                } else if(generatedMassNouns[i] === word && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + neuterAffix;
                                } else if(generatedMassNouns[i] === word && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = neuterAffix + word;
                                };
                        };
                        } else if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 12) {
                        for(let i = 0; i < countNounArray.length; i++) {
                                if(generatedCountNouns[i] === word && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + humanAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + humanAffix + word;
                                } else if(generatedCountNouns[i] === word && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + animalAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + animalAffix + word;
                                } else if(generatedCountNouns[i] === word && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + inanimate2Affix + singularAffix;
                                } else if(generatedCountNouns[i] === word && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + inanimate2Affix + word;
                                };
                        };
                        for(let i = 0; i < massNounArray.length; i++) {
                                if(generatedMassNouns[i] === word && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + humanAffix + singularAffix;
                                } else if(generatedMassNouns[i] === word && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + humanAffix + word;
                                } else if(generatedMassNouns[i] === word && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + animalAffix + singularAffix;
                                } else if(generatedMassNouns[i] === word && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + animalAffix + word;
                                } else if(generatedMassNouns[i] === word && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + inanimate2Affix + singularAffix;
                                } else if(generatedMassNouns[i] === word && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + inanimate2Affix + word;
                                };
                        };
                        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 12) {
                        for(let i = 0; i < generatedCountNouns.length; i++) {
                                if(generatedCountNouns[i] === word && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + humanAffix;
                                } else if(generatedCountNouns[i] === word && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = humanAffix + word;
                                } else if(generatedCountNouns[i] === word && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + animalAffix;
                                } else if(generatedCountNouns[i] === word && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = animalAffix + word;
                                } else if(generatedCountNouns[i] === word && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + inanimate2Affix;
                                } else if(generatedCountNouns[i] === word && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = inanimate2Affix + word;
                                };
                        };
                        for(let i = 0; i < generatedMassNouns.length; i++) {
                                if(generatedMassNouns[i] === word && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + humanAffix;
                                } else if(generatedMassNouns[i] === word && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = humanAffix + word;
                                } else if(generatedMassNouns[i] === word && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + animalAffix;
                                } else if(generatedMassNouns[i] === word && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = animalAffix + word;
                                } else if(generatedMassNouns[i] === word && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + inanimate2Affix;
                                } else if(generatedMassNouns[i] === word && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = inanimate2Affix + word;
                                };
                        };
                        } else if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 13) {                                                                          
                        for(let i = 0; i < countNounArray.length; i++) {
                                if(generatedCountNouns[i] === word && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + divineAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + divineAffix + word;
                                } else if(generatedCountNouns[i] === word && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + profaneAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + profaneAffix + word;
                                };
                        };
                        for(let i = 0; i < massNounArray.length; i++) {
                                if(generatedMassNouns[i] === word && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + divineAffix + singularAffix;
                                } else if(generatedMassNouns[i] === word && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + divineAffix + word;
                                } else if(generatedMassNouns[i] === word && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + profaneAffix + singularAffix;
                                } else if(generatedMassNouns[i] === word && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + profaneAffix + word;
                                };
                        };
                        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 13) {
                        for(let i = 0; i < generatedCountNouns.length; i++) {
                                if(generatedCountNouns[i] === word && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + divineAffix;
                                } else if(generatedCountNouns[i] === word && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = divineAffix + word;
                                } else if(generatedCountNouns[i] === word && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + profaneAffix;
                                } else if(generatedCountNouns[i] === word && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = profaneAffix + word;
                                };
                        };
                        for(let i = 0; i < generatedMassNouns.length; i++) {
                                if(generatedMassNouns[i] === word && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + divineAffix;
                                } else if(generatedMassNouns[i] === word && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = divineAffix + word;
                                } else if(generatedMassNouns[i] === word && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + profaneAffix;
                                } else if(generatedMassNouns[i] === word && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = profaneAffix + word;
                                };
                        };
                        } else if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 14) {                                                                          
                        for(let i = 0; i < countNounArray.length; i++) {
                                if(generatedCountNouns[i] === word && activePassive[i] === "active" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + activeAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && activePassive[i] === "active" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + activeAffix + word;
                                } else if(generatedCountNouns[i] === word && activePassive[i] === "passive" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + passiveAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && activePassive[i] === "passive" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + passiveAffix + word;
                                };
                        };
                        for(let i = 0; i < massNounArray.length; i++) {
                                if(generatedMassNouns[i] === word && activePassive[i] === "active" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + activeAffix + singularAffix;
                                } else if(generatedMassNouns[i] === word && activePassive[i] === "active" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + activeAffix + word;
                                } else if(generatedMassNouns[i] === word && activePassive[i] === "passive" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + passiveAffix + singularAffix;
                                } else if(generatedMassNouns[i] === word && activePassive[i] === "passive" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + passiveAffix + word;
                                };
                        };
                        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 14) {
                        for(let i = 0; i < generatedCountNouns.length; i++) {
                                if(generatedCountNouns[i] === word && activePassive[i] === "active" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + activeAffix;
                                } else if(generatedCountNouns[i] === word && activePassive[i] === "active" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = activeAffix + word;
                                } else if(generatedCountNouns[i] === word && activePassive[i] === "passive" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + passiveAffix;
                                } else if(generatedCountNouns[i] === word && activePassive[i] === "passive" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = passiveAffix + word;
                                };
                        };
                        for(let i = 0; i < generatedMassNouns.length; i++) {
                                if(generatedMassNouns[i] === word && activePassive[i] === "active" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + activeAffix;
                                } else if(generatedMassNouns[i] === word && activePassive[i] === "active" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = activeAffix + word;
                                } else if(generatedMassNouns[i] === word && activePassive[i] === "passive" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + passiveAffix;
                                } else if(generatedMassNouns[i] === word && activePassive[i] === "passive" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = passiveAffix + word;
                                };
                        };
                        }  else if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 15) {                                                                          
                        for(let i = 0; i < countNounArray.length; i++) {
                                if(generatedCountNouns[i] === word && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + naturalAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + naturalAffix + word;
                                } else if(generatedCountNouns[i] === word && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + artificialAffix + singularAffix;
                                } else if(generatedCountNouns[i] === word && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + artificialAffix + word;
                                };
                        };
                        for(let i = 0; i < massNounArray.length; i++) {
                                if(generatedMassNouns[i] === word && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + naturalAffix + singularAffix;
                                } else if(generatedMassNouns[i] === word && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + naturalAffix + word;
                                } else if(generatedMassNouns[i] === word && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + artificialAffix + singularAffix;
                                } else if(generatedMassNouns[i] === word && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = singularAffix + artificialAffix + word;
                                };
                        };
                        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 15) {
                        for(let i = 0; i < generatedCountNouns.length; i++) {
                                if(generatedCountNouns[i] === word && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + naturalAffix;
                                } else if(generatedCountNouns[i] === word && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = naturalAffix + word;
                                } else if(generatedCountNouns[i] === word && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + artificialAffix;
                                } else if(generatedCountNouns[i] === word && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = artificialAffix + word;
                                };
                        };

                        for(let i = 0; i < generatedMassNouns.length; i++) {
                                if(generatedMassNouns[i] === word && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + naturalAffix;
                                } else if(generatedMassNouns[i] === word && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = naturalAffix + word;
                                } else if(generatedMassNouns[i] === word && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + artificialAffix;
                                } else if(generatedMassNouns[i] === word && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = artificialAffix + word;
                                };
                        };
                        };
                } else if (typologyNum === 2) {
                        if(grammaticalNumberFusional < 24 && markedSingularOrNot() && genderNum < 9 && caseNumber === 0) {
                        if(numberSuffixOrPrefix === "suffix") {
                                inflectedWord = word + soundChange(singularAffix);
                        } else {
                                inflectedWord = soundChange(singularAffix) + word;
                        };
                        } else if(grammaticalNumberFusional < 24 && markedSingularOrNot() === false && genderNum < 9 && caseNumber === 0) {
                                inflectedWord = word;
                        };
                        if(grammaticalNumberFusional < 24 && genderNum < 9 && caseNumber > 0) {
                        if(numberSuffixOrPrefix === "suffix") {
                                inflectedWord = word + soundChange(nominativeAffix);
                        } else {
                                inflectedWord = soundChange(nominativeAffix) + word;
                        };
                        };
                        if(grammaticalNumberFusional < 24 && genderNum === 9 && caseNumber === 0) {
                        for(let i = 0; i < generatedCountNouns.length; i++) {
                                if(generatedCountNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + soundChange(animSgAffix);
                                } else if(generatedCountNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = soundChange(animSgAffix) + word;
                                } else if(generatedCountNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + soundChange(inanSgAffix);
                                } else if(generatedCountNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = soundChange(inanSgAffix) + word;
                                };
                        };
                        for(let i = 0; i < generatedMassNouns.length; i++) {
                                if(generatedMassNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + soundChange(animSgAffix);
                                } else if(generatedMassNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = soundChange(animSgAffix) + word;
                                } else if(generatedMassNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "suffix") {
                                        inflectedWord = word + soundChange(inanSgAffix);
                                } else if(generatedMassNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "prefix") {
                                        inflectedWord = soundChange(inanSgAffix) + word;
                                };
                        };
                        };
                        if(grammaticalNumberFusional < 24 && genderNum === 10 && caseNumber === 0) {
                                for(let i = 0; i < generatedCountNouns.length; i++) {
                                        if(generatedCountNouns[i] === word && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "suffix") {
                                                inflectedWord = word + mascSgAffix;
                                        } else if(generatedCountNouns[i] === word && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "prefix") {
                                                inflectedWord = mascSgAffix + word;
                                        } else if(generatedCountNouns[i] === word && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "suffix") {
                                                inflectedWord = word + femSgAffix;
                                        } else if(generatedCountNouns[i] === word && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "prefix") {
                                                inflectedWord = femSgAffix + word;
                                        };
                                };
                                for(let i = 0; i < generatedMassNouns.length; i++) {
                                        if(generatedMassNouns[i] === word && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "suffix") {
                                                inflectedWord = word + soundChange(mascSgAffix);
                                        } else if(generatedMassNouns[i] === word && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "prefix") {
                                                inflectedWord = mascSgAffix + word;
                                        } else if(generatedMassNouns[i] === word && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "suffix") {
                                                inflectedWord = word + soundChange(femSgAffix);
                                        } else if(generatedMassNouns[i] === word && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "prefix") {
                                                inflectedWord = femSgAffix + word;
                                        };
                                };
                        };
                /**add more here */     
                } else {
                        inflectedWord = word;
                };
        } else {
                inflectedWord = word;
        };

    return inflectedWord;
};

let randomNumberForDerivationSelection = 0;
function selectDerivationalAffixes() {
    let chosenDerivations = [abstractNoun];
    let potentialDerivations = [
        VtoADJprone,
        NtoNPossessorOf,
        NADJtoADJpossessorOfQuality,
        bodyParts,
        ADJtoCausVerb,
        intransToTransVerb,
        transVerbToABleAdjective,
        NtoADJPrototypical,
        abstractNoun,
        verbToInanimateAgent,
        merism,
        endocentric,
        exocentric,
        comparison
    ];

     //forces a derivational method to be chosen - this is done when a word in the Old Languge has shifted meaning but the word is too essential for the modern languagr to lack it. E.g is Old Language word for "hand" gains a new meaning, then a new term for "hand" MUST be made, this ensures that the correct method which can make this new word is chosen
    let mandatorybodyPartsWords = ["hand", "tooth"];
        for(let i = 0; i < mandatorybodyPartsWords.length; i++) {
                if(oldCountNounArray.includes(mandatorybodyPartsWords[i])) {
                chosenDerivations.push(bodyParts)
                };
        };

    let mandatoryverbToInanimateAgentWords = ["sun"];
        for(let i = 0; i < mandatoryverbToInanimateAgentWords.length; i++) {
                if(oldCountNounArray.includes(mandatoryverbToInanimateAgentWords[i])) {
                        chosenDerivations.push(verbToInanimateAgent)
                };
        };

    
    //selects which derivational method will be chosen
    while(chosenDerivations.length < Math.floor(Math.random() * potentialDerivations.length) + 5) {
        randomNumberForDerivationSelection = Math.floor(Math.random() * potentialDerivations.length);
        if(chosenDerivations.includes(potentialDerivations[randomNumberForDerivationSelection]) === false) {
            chosenDerivations.push(potentialDerivations[randomNumberForDerivationSelection]) 
        };
    };
    
    //applies the chosen derivation to the word
    for(let i = 0; i < chosenDerivations.length; i++) {
        chosenDerivations[i]();
    };
    //console.log(chosenDerivations)
};

function VtoADJprone() {
    let li = document.createElement("li");
    let ul = document.createElement("ul");

    let derivedTerm = "";
    let olderDerivedTerm = "";
    let suffixOrPrefix = "";
    //decides if the affix will be a suffix or prefix
    if(Math.floor(Math.random() * 2) === 0) {
        suffixOrPrefix = "suffix";
        li.innerHTML = `<i>-${spell(soundChange("X" + proneAffix))}</i> "derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`
    } else {
        suffixOrPrefix = "prefix";
        li.innerHTML = `<i>${spell(soundChange(proneAffix + "A"))}-</i> "derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`
    };
    let exampleCounter = 0;

        function deriveTransVtoADJprone(originalWord, derivedWord, comparative) {
        let trueOrFalse = "";
        let index = "";
        let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
        if(typeof derivedWord !== "string") {
                let derivedWordArray = cloneArray(derivedWord);
                derivedWord = randomIndexOfArray(derivedWordArray);
                comparative = comparative[derivedWordArray.indexOf(derivedWord)];
        };
        if(typeof originalWord !== "string" && transitiveVerbArray.includes(randomWordFromOriginalWordArray)) {
                trueOrFalse = true;
                index = transitiveVerbArray.indexOf(randomWordFromOriginalWordArray);
                derivedWord = randomIndexOfArray(randomWordFromOriginalWordArray);
        } else if (transitiveVerbArray.includes(originalWord)){
                trueOrFalse = true;
                index = transitiveVerbArray.indexOf(originalWord)
        };
        if(trueOrFalse) {
                //decides if word will have a derivation
                if(Math.floor(Math.random() * 3) === 1) {
                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(Math.floor(Math.random() * 3) === 1) {
                                derivedInModernOrOld = "old";
                        } else {
                                derivedInModernOrOld = "modern";
                        };

                        if(suffixOrPrefix === "suffix") {
                                derivedTerm = soundChange(generatedTransitiveVerbs[index] + "A") + soundChange("X" + proneAffix);
                                olderDerivedTerm = generatedTransitiveVerbs[index] + proneAffix;
                                } else {
                                derivedTerm = soundChange(proneAffix + "A") + soundChange("X" + generatedTransitiveVerbs[index]);
                                olderDerivedTerm = proneAffix + generatedTransitiveVerbs[index];
                                };
                                
                        
                        if(adjectiveArray.includes(derivedWord)) {
                        if(derivedInModernOrOld === "old") {
                                generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = olderDerivedTerm;
                                derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                if(suffixOrPrefix === "suffix") {
                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + proneAffix)}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`;
                                } else {
                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(proneAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)`;
                                };
                        } else {
                                generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = derivedTerm;
                                derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "derived";
                                if(suffixOrPrefix === "suffix") {
                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + proneAffix))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`;
                                } else {
                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(proneAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"`;
                                };
                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                if(derivationListTransVerb[index] === "") {
                                        derivationListTransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${derivedWord}"`
                                } else {
                                        derivationListTransVerb[index] = derivationListTransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${derivedWord}"`;
                                };
                        }
                        etymologyArrayADJ[adjectiveArray.indexOf(derivedWord)] = transitiveVerbArray[index];
                        derivationListAdj[adjectiveArray.indexOf(derivedWord)] = "";
                        } else {
                        adjectiveArray.push(derivedWord);
                        comparativeAdjectiveArray.push(comparative)
                        derivationListAdj.push("");
                        if(derivedInModernOrOld === "old") {
                                generatedAdjectives.push(soundChange(olderDerivedTerm));
                                derivedOrInheritedADJ.push("inheritedOldDerived");
                                if(suffixOrPrefix === "suffix") {
                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + proneAffix)}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`;
                                } else {
                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(proneAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)`;
                                };
                        } else {
                                generatedAdjectives.push(derivedTerm) 
                                derivedOrInheritedADJ.push("derived");
                                if(suffixOrPrefix === "suffix") {
                                        etymologyADJ.push(`<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + proneAffix))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`)
                                } else {
                                        etymologyADJ.push(`<i>${spell(soundChange(proneAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])]))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"`)
                                };
                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                if(derivationListTransVerb[index] === "") {
                                        derivationListTransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${derivedWord}"`
                                } else {
                                        derivationListTransVerb[index] = derivationListTransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${derivedWord}"`;
                                };
                        }
                        etymologyArrayADJ.push(transitiveVerbArray[index]);
                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i> "to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "verb"))}</i> "${derivedWord}"`;
                        ul.appendChild(exampleLi);
                        exampleCounter++;
                };
                        
                        };
                };
        };
        };

            deriveTransVtoADJprone("accept", "accepting", "more&nbspaccepting");
            deriveTransVtoADJprone("arrange", "methodical", "more&nbspmethodical");
            deriveTransVtoADJprone("blame", "accusatory", "more&nbspaccusatory");
            deriveTransVtoADJprone("blowV", "windy", "windier");
            deriveTransVtoADJprone("choose", "selective", "more&nbspselective");
            deriveTransVtoADJprone("compel", "compelling", "more&nbspcompelling");
            deriveTransVtoADJprone("fight", "aggressive", "more&nbspaggressive");
            deriveTransVtoADJprone("follow", "loyal", "more&nbsployal");
            deriveTransVtoADJprone("forget", "forgetful", "more&nbspforgetful");
            deriveTransVtoADJprone("give", "generous", "more&nbspgenerous");
            deriveTransVtoADJprone("honourV", "honourable", "more&nbsphonourable");
            deriveTransVtoADJprone("hunt", "predatory", "more&nbsppredatory");
            deriveTransVtoADJprone("instruct", "instructive", "more&nbspinstructive");
            deriveTransVtoADJprone("insult", ["mean", "rude", "offensive", "unkind", "nasty"], ["meaner", "ruder", "more&nbspoffensive", "more&nbspunkind", "nastier"]);
            deriveTransVtoADJprone("know", ["wise", "smart", "intelligent", "clever"], ["wiser", "smarter", "more&nbspintelligent", "more&nbspclever"]);
            deriveTransVtoADJprone("lack", ["empty", "insufficient", "devoid", "bereft", "lacking"], ["emptier", "more&nbspinsufficient", "more&nbspdevoid", "more&nbspbereft", "more&nbsplacking"]);
            deriveTransVtoADJprone("learn", ["studious", "erudite", "smart", "knowledgeable", "well-versed"], ["more&nbspstudious", "more&nbsperudite", "smarter", "more&nbspknowledgeable", "more&nbspwell-versed"]);
            deriveTransVtoADJprone("leave", ["absent", "gone", "away"], ["more&nbspabsent", "more&nbspgone", "more&nbspaway"]);
            deriveTransVtoADJprone("loveV", ["loving", "affectionate", "caring", "doting"], ["more&nbsploving", "more&nbspaffectionate", "more&nbspcaring", "more&nbspdoting"]);
            deriveTransVtoADJprone("make", ["creative", "industrious"], ["more&nbspcreative", "more&nbspindustrious"]);
            deriveTransVtoADJprone("marry", ["wed", "betrothed"], ["X", "X"]);
            deriveTransVtoADJprone("need", "in&nbspneed", "more&nbspin&nbspneed");
            deriveTransVtoADJprone("praise", ["exalting", "complementive"], ["more&nbspexalting", "more&nbspcomplementive"]);
            deriveTransVtoADJprone("perceive", ["perceptive", "alert", "watchful"], ["more&nbspperceptive", "more&nbspalert", "more&nbspwatchful"]);
            deriveTransVtoADJprone("persuade", "persuasive", "more&nbsppersuasive");
            deriveTransVtoADJprone("please", ["pleasing", "delightful", "likeable", "pleasant"], ["more&nbsppleasing", "more&nbspdelightful", "more&nbsplikeable", "more&nbsppleasant"]);
            deriveTransVtoADJprone("prefer", "biased", "more&nbspbiased");
            deriveTransVtoADJprone(["protect", "defend"], ["protective", "defensive"], ["more&nbspprotective", "more&nbspdefensive"]);
            deriveTransVtoADJprone("pull", ["addictive", "entrapping", "influential", "interesting", "fascinating"], ["more&nbspaddictive", "more&nbspentrapping", "more&nbspinfluential", "more&nbspinteresting", "more&nbspfascinating"]);
            deriveTransVtoADJprone("push", ["impelling", "booming", "dynamic", "impulsive"], ["more&nbspimpelling", "more&nbspbooming", "more&nbspdynamic", "more&nbspimpulsive"]);
            deriveTransVtoADJprone("put", ["in&nbspcharge", "authorative"], ["more&nbspin&nbspcharge", "more&nbspauthorative"]);
            deriveTransVtoADJprone("read", ["literate", "studious", "erudite"], ["more&nbspliterate", "more&nbspstudious", "more&nbsperudite"]);
            deriveTransVtoADJprone("refresh", ["refreshing", "invigorating"], ["more&nbsprefreshing", "more&nbspinvigorating"]);
            deriveTransVtoADJprone("remember", ["having&nbspa&nbspgood&nbspmemory", "reminiscing", "recollective", "pensive"], ["more&nbsphaving&nbspa&nbspgood&nbspmemory", "more&nbspreminiscing", "more&nbsprecollective", "more&nbsppensive"]);
            deriveTransVtoADJprone("respect", ["respectful", "polite", "well-mannered"], ["more&nbsprespectful", "more&nbsppolite", "more&nbspwell-mannered"]);
            deriveTransVtoADJprone("revel", ["jovial", "entertained", "happy", "cheerful", "playful", "rowdy", "jolly"], ["more&nbspjovial", "more&nbspentertained", "happier", "more&nbspcheerful", "more&nbspplayful", "rowdier", "jollier"]);
            deriveTransVtoADJprone("reward", ["rewarding", "worthwhile"], ["more&nbsprewarding", "more&nbspworthwhile"]);
            deriveTransVtoADJprone("roast", ["hot", "piping-hot", "scalding"], ["hotter", "more&nbsppiping-hot", "more&nbspscalding"]);
            deriveTransVtoADJprone("run", ["fast", "quick", "swift"], ["faster", "quicker", "swifter"]);
            deriveTransVtoADJprone("say", ["vocal", "loud", "long-winded"], ["more&nbspvocal", "louder", "more&nbsplong-winded"]);
            deriveTransVtoADJprone("see", ["watchful", "observant"], ["more&nbspwatchful", "more&nbspobservant"]);
            deriveTransVtoADJprone("scratch", ["sharp", "rough", "abrasive"], ["sharper", "rougher", "more&nbspabrasive"]);
            deriveTransVtoADJprone("sell", "merchantile", "more&nbspmerchantile");
            deriveTransVtoADJprone("separate", ["divisive", "intrusive", "interruptive"], ["more&nbspdivisive", "more&nbspintrusive", "more&nbspinterruptive"]);
            deriveTransVtoADJprone("shame", ["shameful", "disgraceful", "pathetic", "degenerate"], ["more&nbspshameful", "more&nbspdisgraceful", "more&nbsppathetic", "more&nbspdegenerate"]);
            deriveTransVtoADJprone("show", ["explanatory", "instructive", "helpful"], ["more&nbspexplanatory", "more&nbspinstructive", "more&nbsphelpful"]);
            deriveTransVtoADJprone("sing", "musical", "more&nbspmusical");
            deriveTransVtoADJprone("smash", "angry", "angrier");
            deriveTransVtoADJprone("split", ["divisive", "polarising"], ["more&nbspdivisive", "more&nbsppolarising"]);
            deriveTransVtoADJprone("sprout", ["sprouting", "young"], ["more&nbspsprouting", "younger"]);
            deriveTransVtoADJprone(["stab", "kill", "murderV", "slaughter"], ["murderous", "piercing", "slaughterous", "homicidal", "blood-thirsty"], ["more&nbspmurderous", "more&nbsppiercing", "more&nbspslaughterous", "more&nbsphomicidal", "more&nbspblood-thirsty"]);
            deriveTransVtoADJprone("steal", "theftuous", "more&nbsptheftuous");
            deriveTransVtoADJprone("stick", ["sticky", "adherent"], ["stickier", "more&nbspadherent"]);
            deriveTransVtoADJprone("strikeV", ["aggressive", "threatening", "harmful", "dangerous"], ["more&nbspaggressive", "more&nbspthreatening", "more&nbspharmful", "more&nbspdangerous"]);
            deriveTransVtoADJprone("support", "supportive", "more&nbspsupportive");
            deriveTransVtoADJprone("surpass", ["excellent", "incredible", "amazing", "superior"], ["more&nbspexcellent", "more&nbspincredible", "more&nbspamazing", "more&nbspsuperior"]);
            deriveTransVtoADJprone("suit", "suitable", "suitable");
            deriveTransVtoADJprone("take", ["greedy", "interesting", "captivating", "receptive"], ["greedier", "more&nbspinteresting", "more&nbspcaptivating", "more&nbspreceptive"]);
            deriveTransVtoADJprone("teach", "educational", "more&nbspeducational");
            deriveTransVtoADJprone("thank", ["grateful", "thankful"], ["more&nbspgrateful", "more&nbspthankful"]);
            deriveTransVtoADJprone("use", "manipulative", "more&nbspgmanipulative");
            deriveTransVtoADJprone("want", ["jealous", "covetous", "envious", "lacking"], ["more&nbspjealous", "more&nbspcovetous", "more&nbspenvious", "more&nbsplacking"]);
            deriveTransVtoADJprone("wash", ["clean", "hygenic"], ["cleaner", "more&nbsphygenic"]);
            deriveTransVtoADJprone("write", ["learned", "educated"], ["more&nbspearned", "more&nbspeducated"]);
            deriveTransVtoADJprone("invite", ["inviting", "hospitable"], ["more&nbspinviting", "more&nbsphospitable"]);
            deriveTransVtoADJprone("leap", ["bouncy", "energetic", "dynamic"], ["bouncier", "more&nbspienergetic", "more&nbspidynamic"]);

            function deriveIntransVtoADJprone(originalWord, derivedWord, comparative) {
                let trueOrFalse = "";
                let index = "";
                let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
                if(typeof derivedWord !== "string") {
                        let derivedWordArray = cloneArray(derivedWord);
                        derivedWord = randomIndexOfArray(derivedWord);
                        comparative = comparative[derivedWordArray.indexOf(derivedWord)];
                };
                
                if(typeof originalWord !== "string" && originalWord.includes(intransitiveVerbArray[index])) {
                        trueOrFalse = true;
                        index = intransitiveVerbArray.indexOf(randomWordFromOriginalWordArray);
                        derivedWord = randomIndexOfArray(randomWordFromOriginalWordArray);
                } else if (intransitiveVerbArray[index] === originalWord){
                        trueOrFalse = true;
                        index = intransitiveVerbArray.indexOf(originalWord)
                };
                if(trueOrFalse) {
                        //decides if word will have a derivation
                        if(Math.floor(Math.random() * 3) === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(Math.floor(Math.random() * 3) === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedIntransitiveVerbs[index] + "A") + soundChange("X" + proneAffix);
                                        olderDerivedTerm = generatedIntransitiveVerbs[index] + proneAffix;
                                    } else {
                                        derivedTerm = soundChange(proneAffix + "A") + soundChange("X" + generatedIntransitiveVerbs[index]);
                                        olderDerivedTerm = proneAffix + generatedIntransitiveVerbs[index];
                                    };

                                if(adjectiveArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + proneAffix)}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`;
                                                } else {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(proneAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)`;
                                                };
                                        } else {
                                                generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + proneAffix))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`;
                                                } else {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(proneAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"`;
                                                };
                                                if(derivationListIntransVerb[index] === "") {
                                                        derivationListIntransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListIntransVerb[index] = derivationListIntransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayADJ[adjectiveArray.indexOf(derivedWord)] = intransitiveVerbArray[index];
                                } else {
                                        adjectiveArray.push(derivedWord);
                                        comparativeAdjectiveArray.push(comparative)
                                        derivationListAdj.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedAdjectives.push(soundChange(olderDerivedTerm));
                                                derivedOrInheritedADJ.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + proneAffix)}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`;
                                                } else {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(proneAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)`;
                                                };
                                        } else {
                                                generatedAdjectives.push(derivedTerm) 
                                                derivedOrInheritedADJ.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyADJ.push(`<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + proneAffix))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`)
                                                } else {
                                                        etymologyADJ.push(`<i>${spell(soundChange(proneAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp<i>${spell(soundChange(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])]))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"`)
                                                };
                                                if(derivationListIntransVerb[index] === "") {
                                                        derivationListIntransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListIntransVerb[index] = derivationListIntransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayADJ.push(intransitiveVerbArray[index]);
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i> "to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "verb"))}</i> "${derivedWord}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
            };

            deriveIntransVtoADJprone("aim", ["precise", "accurate"], ["more&nbspprecise", "more&nbspaccurate"]);
            deriveIntransVtoADJprone("appear", ["visible", "obvious", "apparent"], ["more&nbspvisible", "more&nbspobvious", "more&nbspapparent"]);
            deriveIntransVtoADJprone("ask", ["curious", "inquisitive"], ["more&nbspcurious", "more&nbspinquisitive"]);
            deriveIntransVtoADJprone("babble", ["illegible", "annoying", "nonsensical"], ["more&nbspillegible", "more&nbspannoying", "more&nbspnonsensical"]);
            deriveIntransVtoADJprone("bloom", ["blooming", "blossoming", "lush"], ["more&nbspblooming", "more&nbspblossoming", "lusher"]);
            deriveIntransVtoADJprone("come", ["coming", "near", "next",  "close&nbspby", "adjacent"], ["X", "nearer", "X",  "closer&nbspby", "adjacent"]);
            deriveIntransVtoADJprone("complain", ["annoyed", "irritated", "displeased"], ["more&nbspannoyed", "more&nbspirritated", "more&nbspdispleased"]);
            deriveIntransVtoADJprone("die", ["dead", "mortal"], ["deader", "more&nbspmortal"]);
            deriveIntransVtoADJprone("fail", ["wrong", "incorrect"], ["more&nbspwrong", "more&nbspincorrect"]);
            deriveIntransVtoADJprone("float", ["light", "lofty"], ["lighter", "loftier"]);
            deriveIntransVtoADJprone(["glow", "shine"], "bright", "brighter");
            deriveIntransVtoADJprone(["go", "move"], ["dynamic", "moving", "alive"], ["more&nbspdynamic", "more&nbspmoving", "more&nbspalive"]);
            deriveIntransVtoADJprone("grieve", ["grieving", "mourning"], ["more&nbspgrieving", "more&nbspmourning"]);
            deriveIntransVtoADJprone("lament", ["sad", "woeful", "in&nbspdespair"], ["sadder", "more&nbspwoeful", "more&nbspin&nbspdespair"]);
            deriveIntransVtoADJprone("live", "alive", "more&nbspalive");
            deriveIntransVtoADJprone("laughable", ["cheerful", "hysterical"], ["more&nbspcheerful", "more&nbsphysterical"]);
            deriveIntransVtoADJprone("nod", ["suggestive", "similar"], ["more&nbspsuggestive", "more&nbspsimilar"]);
            deriveIntransVtoADJprone("perish", "mortal", "more&nbspmortal");
            deriveIntransVtoADJprone("play", "playful", "more&nbspplayful");
            deriveIntransVtoADJprone("pray", ["pious", "religious", "devout"], ["more&nbsppious", "more&nbspreligious", "more&nbspdevout"]);
            deriveIntransVtoADJprone("realise", ["alert", "aware", "suspicious"], ["more&nbspalert", "more&nbspaware", "more&nbspsuspicious"]);
            deriveIntransVtoADJprone("reckon", ["pensive", "accountable", "calculating"], ["more&nbsppensive", "more&nbspaccountable", "more&nbspcalculating"]);
            deriveIntransVtoADJprone("rejoice", ["happy", "cheerful", "jolly", "blissful"], ["happier", "more&nbspcheerful", "jollier", "more&nbspblissful"]);
            deriveIntransVtoADJprone("rest", "rested","more&nbsprested");
            deriveIntransVtoADJprone("rot", ["decayed", "rotten"], ["more&nbspdecayed", "more&nbsprotten"]);
            deriveIntransVtoADJprone("rush", "hurried", "more&nbsphurried");
            deriveIntransVtoADJprone("shit", ["foul", "defiling", "corrupting"], ["fouler", "more&nbspdefiling", "more&nbspcorrupting"]);
            deriveIntransVtoADJprone("sleep", "sleepy", "sleepier");
            deriveIntransVtoADJprone("sneak", ["sneaky", "stealthy"], ["sneakier", "stealthier"]);
            deriveIntransVtoADJprone("stand", ["upright", "attentive", "erect"], ["more&nbspupright", "more&nbspattentive", "more&nbsperect"]);
            deriveIntransVtoADJprone("stink", ["smelly", "stinky", "foul", "gross", "disgusting"], ["smellier", "stinkier", "fouler", "grosser", "more&nbspdisgusting"]);
            deriveIntransVtoADJprone("suffer", ["suffering", "in&nbsppain", "tormented"], ["more&nbspsuffering", "more&nbspin&nbsppain", "more&nbsptormented"]);
            deriveIntransVtoADJprone("sweatV", ["sweaty", "physically&nbsptired", "exhausted"], ["sweatier", "more&nbspphysically&nbsptired", "more&nbspexhausted"]);
            deriveIntransVtoADJprone("suggest", "suggestive", "more&nbspsuggestive");
            deriveIntransVtoADJprone("think", ["thoughtful", "pensive"], ["more&nbspthoughtful", "more&nbsppensive"]);
            deriveIntransVtoADJprone("tremble", ["trembling", "scared", "cowardly", "afraid"], ["more&nbsptrembling", "more&nbspscared", "more&nbspcowardly", "more&nbspafraid"]);
            deriveIntransVtoADJprone("understand", "understanding", "more&nbspunderstanding");
            deriveIntransVtoADJprone("adventure", "adventurous", "more&nbspadventurous");
            deriveIntransVtoADJprone("wake", "awake", "more&nbspawake");
            deriveIntransVtoADJprone("weep", ["sad", "crying", "weeping"], ["sadder", "X", "X"]);
            deriveIntransVtoADJprone("wish", "wishful", "more&nbspwishful");
            deriveIntransVtoADJprone("workV", ["industrious", "useful", "hard-working"], ["more&nbspindustrious", "more&nbspuseful", "more&nbsphard-working"]);
            deriveIntransVtoADJprone("yawn", ["sleepy", "inattentive", "bored"], ["sleepier", "more&nbspinattentive", "more&nbspbored"]);

    document.getElementById("derivational-affixes").appendChild(li);
    li.appendChild(ul);
};

function NtoNPossessorOf() {
    let li = document.createElement("li");
    let ul = document.createElement("ul");

    let derivedTerm = "";
    let olderDerivedTerm = "";
    let suffixOrPrefix = "";
    if(Math.floor(Math.random() * 2) === 0) {
        suffixOrPrefix = "suffix";
        li.innerHTML = `<i>-${spell(soundChange("X" + possessorAffix))}</i> "possessor&nbspof"`
    } else {
        suffixOrPrefix = "prefix";
        li.innerHTML = `<i>${spell(soundChange(possessorAffix + "A"))}-</i> "possessor&nbspof"`
    };
    let exampleCounter = 0;

        //count noun to count noun
        function deriveCountNtoCountNPossessorOf(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
                let index = countNounArray.indexOf(originalWord);
                if(countNounArray.includes(originalWord)) {
                        //decides if word will have a derivation
                        if(Math.floor(Math.random() * 3) === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(Math.floor(Math.random() * 3) === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedCountNouns[index] + "A") + soundChange("X" + possessorAffix);
                                        olderDerivedTerm = generatedCountNouns[index] + possessorAffix;
                                        } else {
                                        derivedTerm = soundChange(possessorAffix + "A") + soundChange("X" + generatedCountNouns[index]);
                                        olderDerivedTerm = possessorAffix + generatedCountNouns[index];
                                        };

                                if(countNounArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[index], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + possessorAffix)}</i>&nbsp"possessor&nbspof"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(possessorAffix + "A")}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>&nbsp"${countNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + possessorAffix))}</i>&nbsp"possessor&nbspof"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(possessorAffix + "A"))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun")))}</i>&nbsp"${countNounArray[index]}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListCountNoun[index] === "") {
                                                        derivationListCountNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListCountNoun[index] = derivationListCountNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = countNounArray[index];
                                        derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        countNounArray.push(derivedWord);
                                        countNounArrayPlural.push(plural);
                                        activePassive.push(activePass);
                                        animInan.push(animateInimate);
                                        divineNonDivine.push(divineProfane);
                                        humanAnimalInan.push(humanAnimal);
                                        mascFemNeut.push(masculineFeminineNeuter);
                                        mascFem.push(masculineFeminine);
                                        naturalArtificial.push(naturalArt);
                                        animacyClassifierArray.push(animacy);
                                        shapeClassifierArray.push(shape);
                                        shortGenericClassifierArray.push(shortGeneric);
                                        derivationListCountNoun.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns.push(olderDerivedTerm);
                                                derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[index], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + possessorAffix)}</i>&nbsp"possessor&nbspof"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(possessorAffix + "A")}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns.push(derivedTerm) 
                                                derivedOrInheritedCountNoun.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>&nbsp"${countNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + possessorAffix))}</i>&nbsp"possessor&nbspof"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(possessorAffix + "A"))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun")))}</i>&nbsp"${countNounArray[index]}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListCountNoun[index] === "") {
                                                        derivationListCountNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListCountNoun[index] = derivationListCountNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };  
                                        };
                                        etymologyArrayCountNoun.push(countNounArray[index]);                       
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i> "${countNounArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
        };

            deriveCountNtoCountNPossessorOf("cave", "bear", "bears", "active", "anim", "profane", "animal", "masculine2", "masculine1", "natural", "wild-animal", "short-and-wide", "land-animal");
            deriveCountNtoCountNPossessorOf("club", "warrior", "warriors", "active", "anim", "profane", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveCountNtoCountNPossessorOf("priest", "temple", "temples", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "artificial", "inedible", "short-and-wide", "tool");
            deriveCountNtoCountNPossessorOf("sailor", "ship", "ships", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "artificial", "inedible", "short-and-wide", "tool");
            deriveCountNtoCountNPossessorOf("wound", "casulty", "casulties", "passive", "anim", "profane", "human", "neuter", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveCountNtoCountNPossessorOf("womb", "fertile&nbspwoman", "fertile&nbspwomen", "active", "anim", "profane", "human", "feminine2", "feminine1", "natural", "woman", "long-and-slender", "human2");
            deriveCountNtoCountNPossessorOf("wife", "husband", "husbands", "active", "anim", "profane", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveCountNtoCountNPossessorOf("whale", "ocean", "oceans", "passive", "anim", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
            deriveCountNtoCountNPossessorOf("well", "village", "villages", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", "shapeless", "tool");
            deriveCountNtoCountNPossessorOf("weapon", "armed&nbspman", "armed&nbspmen", "active", "anim", "profane", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveCountNtoCountNPossessorOf("way", "guide", "guides", "active", "anim", "profane", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveCountNtoCountNPossessorOf("wave", "tide", "tides", "active", "anim", "divine", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
            deriveCountNtoCountNPossessorOf("wagon", "carter", "carters", "active", "anim", "profane", "human", "masculine2", "masculine1", "artificial", "man", "long-and-slender", "human2");
            deriveCountNtoCountNPossessorOf("village", "chieftan", "chieftans", "active", "anim", "divine", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveCountNtoCountNPossessorOf("uncle", "nephew", "nephews", "active", "anim", "profane", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveCountNtoCountNPossessorOf("tribe", "chief", "chiefs", "active", "anim", "divine", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveCountNtoCountNPossessorOf("tree", "forest", "forests", "passive", "anim", "divine", "secondinanimate", "masculine2", "feminine1", "natural", "tree", "shapeless", "natural-inanimate");
            deriveCountNtoCountNPossessorOf("spider", "cobweb", "cobwebs", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "flat", "natural-inanimate");
            deriveCountNtoCountNPossessorOf("servant", "master", "masters", "active", "anim", "profane", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveCountNtoCountNPossessorOf("sheep", "shepherd", "shepherds", "active", "anim", "profane", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveCountNtoCountNPossessorOf("yoke", "yoked&nbspanimal", "yoked&nbspanimals", "active", "anim", "profane", "animal", "masculine2", "masculine1", "natural", "labour", "long-and-slender", "land-animal");
        
    

            //mass noun to count noun
            function deriveMassNtoCountNPossessorOf(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
                let index = massNounArray.indexOf(originalWord);
                if(massNounArray.includes(originalWord)) {
                        //decides if word will have a derivation
                        if(Math.floor(Math.random() * 3) === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(Math.floor(Math.random() * 3) === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedMassNouns[index] + "A") + soundChange("X" + possessorAffix);
                                        olderDerivedTerm = generatedMassNouns[index] + possessorAffix;
                                } else {
                                        derivedTerm = soundChange(possessorAffix + "A") + soundChange("X" + generatedMassNouns[index]);
                                        olderDerivedTerm = possessorAffix + generatedMassNouns[index];
                                };

                                if(countNounArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[index], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + possessorAffix)}</i>&nbsp"possessor&nbspof"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(possessorAffix + "A")}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>&nbsp"${massNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + possessorAffix))}</i>&nbsp"possessor&nbspof"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(possessorAffix + "A"))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun")))}</i>&nbsp"${massNounArray[index]}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListMassNoun[index] === "") {
                                                        derivationListMassNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListMassNoun[index] = derivationListMassNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = massNounArray[index];
                                        derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        countNounArray.push(derivedWord);
                                        countNounArrayPlural.push(plural);
                                        activePassive.push(activePass);
                                        animInan.push(animateInimate);
                                        divineNonDivine.push(divineProfane);
                                        humanAnimalInan.push(humanAnimal);
                                        mascFemNeut.push(masculineFeminineNeuter);
                                        mascFem.push(masculineFeminine);
                                        naturalArtificial.push(naturalArt);
                                        animacyClassifierArray.push(animacy);
                                        shapeClassifierArray.push(shape);
                                        shortGenericClassifierArray.push(shortGeneric);
                                        derivationListCountNoun.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns.push(olderDerivedTerm);
                                                derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[index], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + possessorAffix)}</i>&nbsp"possessor&nbspof"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(possessorAffix + "A")}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns.push(derivedTerm) 
                                                derivedOrInheritedCountNoun.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>&nbsp"${massNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + possessorAffix))}</i>&nbsp"possessor&nbspof"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(possessorAffix + "A"))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun")))}</i>&nbsp"${massNounArray[index]}"`;
                                                }; 
                                              //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListMassNoun[index] === "") {
                                                derivationListMassNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListMassNoun[index] = derivationListMassNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        };   
                                        };
                                        
                                        etymologyArrayCountNoun.push(massNounArray[index]);                       
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i> "${massNounArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
            };

            deriveMassNtoCountNPossessorOf("admiration", "admirer", "admirers", "active", "anim", "profane", "human", "masculine2", "masculine1", "natural", "man", "short-and-wide", "human2");
            deriveMassNtoCountNPossessorOf("ash", "firepit", "firepits", "passive", "anim", "divine", "secondinanimate", "neuter", "masculine1", "artificial", "inedible", "round", "tool");
            deriveMassNtoCountNPossessorOf("bark", "trunk", "trunks", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "tree", "long-and-slender", "natural-inanimate");
            deriveMassNtoCountNPossessorOf("beer", "pint", "pints", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "artificial", "edible", "long-and-slender", "tool");
            deriveMassNtoCountNPossessorOf("blood", "vein", "veins", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
            deriveMassNtoCountNPossessorOf("bread", "bread-basket", "bread-baskets", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", "round", "tool");
            deriveMassNtoCountNPossessorOf("captivity", "captor", "captors", "active", "anim", "profane", "secondinanimate", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveMassNtoCountNPossessorOf("confusion", "idiot", "idiots", "active", "anim", "profane", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveMassNtoCountNPossessorOf("deception", "liar", "liars", "active", "anim", "profane", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveMassNtoCountNPossessorOf("hair", "scalp", "scalps", "active", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
            deriveMassNtoCountNPossessorOf("honey", "beehive", "beehives", "active", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
            deriveMassNtoCountNPossessorOf("hostility", "enemy", "enemies", "active", "anim", "profane", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveMassNtoCountNPossessorOf("iron", "smith", "smiths", "active", "anim", "divine", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveMassNtoCountNPossessorOf("marrow", "bone", "bones", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
            deriveMassNtoCountNPossessorOf("money", "wallet", "wallets", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", "short-and-wide", "tool");
            deriveMassNtoCountNPossessorOf("milk", "udder", "udders", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
            deriveMassNtoCountNPossessorOf("porridge", "stomach", "stomachs", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
            deriveMassNtoCountNPossessorOf("rain", "raincloud", "rainclouds", "active", "anim", "divine", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
            deriveMassNtoCountNPossessorOf("vigour", "hero", "heroes", "active", "anim", "divine", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveMassNtoCountNPossessorOf("wind", "sky", "skies", "active", "anim", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "round", "natural-inanimate");
            deriveMassNtoCountNPossessorOf("sand", "beach", "beaches", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
            deriveMassNtoCountNPossessorOf("trickery", "trickster", "tricksters", "active", "anim", "profane", "human", "masculine2", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveMassNtoCountNPossessorOf("water", "river", "rivers", "active", "anim", "divine", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "liquid");
            deriveMassNtoCountNPossessorOf("truth", "honest&nbspperson", "honest&nbsppeople", "passive", "inan", "divine", "human", "neuter", "masculine1", "natural", "man", "long-and-slender", "human2");
            deriveMassNtoCountNPossessorOf("sight", "eye", "eyes", "active", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");    

    //count noun to mass noun
            function deriveCountNtoMassNPossessorOf(originalWord, derivedWord, singulative, singulativePlural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
                let index = countNounArray.indexOf(originalWord);
                if(countNounArray.includes(originalWord)) {
                        //decides if word will have a derivation
                        if(Math.floor(Math.random() * 3) === 1) {
                                if(typeof derivedWord !== "string") {
                                        let derivedWordArray = cloneArray(derivedWord);
                                        derivedWord = randomIndexOfArray(derivedWord);
                                        singulative = singulative[derivedWordArray.indexOf(derivedWord)];
                                        singulativePlural = singulativePlural[derivedWordArray.indexOf(derivedWord)];
                                };
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(Math.floor(Math.random() * 3) === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedCountNouns[index] + "A") + soundChange("X" + possessorAffix);
                                        olderDerivedTerm = generatedCountNouns[index] + possessorAffix;
                                } else {
                                        derivedTerm = soundChange(possessorAffix + "A") + soundChange("X" + generatedCountNouns[index]);
                                        olderDerivedTerm = possessorAffix  + generatedCountNouns[index];
                                };
                                if(massNounArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedMassNouns[massNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedMassNoun[massNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[index], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + possessorAffix)}</i>&nbsp"possessor&nbspof"`;
                                                } else {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(possessorAffix + "A")}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)`;
                                                };
                                        } else {
                                                generatedMassNouns[massNounArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedMassNoun[massNounArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>&nbsp"${countNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + possessorAffix))}</i>&nbsp"possessor&nbspof"`;
                                                } else {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(possessorAffix + "A"))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun")))}</i>&nbsp"${countNounArray[index]}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListCountNoun[index] === "") {
                                                        derivationListCountNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListCountNoun[index] = derivationListCountNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayMassNoun[massNounArray.indexOf(derivedWord)] = countNounArray[index];
                                } else {
                                        massNounArray.push(derivedWord);
                                        singulativeMassNounArray.push(singulative);
                                        pluralSingulativeMassNounArray.push(singulativePlural);
                                        activePassiveMass.push(activePass);
                                        animInanMass.push(animateInimate);
                                        divineNonDivineMass.push(divineProfane);
                                        humanAnimalInanMass.push(humanAnimal);
                                        mascFemNeutMass.push(masculineFeminineNeuter);
                                        mascFemMass.push(masculineFeminine);
                                        naturalArtificialMass.push(naturalArt);
                                        animacyClassifierMassArray.push(animacy);
                                        shapeClassifierMassArray.push(shape);
                                        shortGenericClassifierMassArray.push(shortGeneric);
                                        derivationListMassNoun.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedMassNouns.push(olderDerivedTerm);
                                                derivedOrInheritedMassNoun.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[index], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + possessorAffix)}</i>&nbsp"possessor&nbspof"`;
                                                } else {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(possessorAffix + "A")}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)`;
                                                };
                                        } else {
                                                generatedMassNouns.push(derivedTerm) 
                                                derivedOrInheritedMassNoun.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>&nbsp"${countNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + possessorAffix))}</i>&nbsp"possessor&nbspof"`;
                                                } else {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(possessorAffix + "A"))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun")))}</i>&nbsp"${countNounArray[index]}"`;
                                                }; 
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListCountNoun[index] === "") {
                                                derivationListCountNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListCountNoun[index] = derivationListCountNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        }; 
                                        };
                                        etymologyArrayMassNoun.push(countNounArray[index]);    
                                        derivationListMassNoun[massNounArray.indexOf(derivedWord)] = "";                  
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i> "${countNounArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
            };

            deriveCountNtoMassNPossessorOf("bag", ["volume", "capacity"], ["fraction&nbspof&nbspvolume", "fraction&nbspof&nbspcapacity"], ["fractions&nbspof&nbspvolume", "fractions&nbspof&nbspcapacity"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");

            deriveCountNtoMassNPossessorOf("barrow", ["undying&nbspfame", "eternal&nbspglory"], ["deed&nbspof&nbspundying&nbspfame", "deed&nbspof&nbspeternal&nbsoglory"], ["deeds&nbspof&nbspundying&nbspfame", "deeds&nbspof&nbspeternal&nbsoglory"], "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");            
    

    document.getElementById("derivational-affixes").appendChild(li);
    li.appendChild(ul);
};

function NADJtoADJpossessorOfQuality() {
    let li = document.createElement("li");
    let ul = document.createElement("ul");

    let derivedTerm = "";
    let olderDerivedTerm = "";
    let suffixOrPrefix = "";
    if(Math.floor(Math.random() * 2) === 0) {
        suffixOrPrefix = "suffix";
        li.innerHTML = `<i>-${spell(soundChange("X" + possessorQualityAffix))}</i> "derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`
    } else {
        suffixOrPrefix = "prefix";
        li.innerHTML = `<i>${spell(soundChange(possessorQualityAffix + "A"))}-</i> "derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`
    };
    let exampleCounter = 0;
    //count noun to adjective
    function deriveNADJtoADJpossessorOfQuality(originalWord, derivedWord, comparative) {
        let trueOrFalse = "";
        let index = "";
        let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
        if(typeof derivedWord !== "string") {
                let derivedWordArray = cloneArray(derivedWord);
                derivedWord = randomIndexOfArray(derivedWordArray);
                comparative = comparative[derivedWordArray.indexOf(derivedWord)];
        };
        if(typeof originalWord !== "string" && countNounArray.includes(randomWordFromOriginalWordArray)) {
                trueOrFalse = true;
                index = countNounArray.indexOf(randomWordFromOriginalWordArray);
        } else if (countNounArray.includes(originalWord)){
                trueOrFalse = true;
                index = countNounArray.indexOf(originalWord);
        };
        if(trueOrFalse) {
                //decides if word will have a derivation
                if(Math.floor(Math.random() * 3) === 1) {
                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(Math.floor(Math.random() * 3) === 1) {
                                derivedInModernOrOld = "old";
                        } else {
                                derivedInModernOrOld = "modern";
                        };

                        if(suffixOrPrefix === "suffix") {
                                derivedTerm = soundChange(generatedCountNouns[index] + "A") + soundChange("X" + possessorQualityAffix);
                                olderDerivedTerm = generatedCountNouns[index] + possessorQualityAffix;
                        } else {
                                derivedTerm = soundChange(possessorQualityAffix + "A") + soundChange("X" + generatedCountNouns[index]);
                                olderDerivedTerm = possessorQualityAffix + generatedCountNouns[index];
                        };
                        
                        if(adjectiveArray.includes(derivedWord)) {
                                if(derivedInModernOrOld === "old") {
                                        generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = olderDerivedTerm;
                                        derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[index], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + possessorQualityAffix)}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`;
                                        } else {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(possessorQualityAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)`;
                                        };
                                } else {
                                        generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = derivedTerm;
                                        derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "derived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>&nbsp"${removeDistinguishingLetter(countNounArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + possessorQualityAffix))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`;
                                        } else {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(possessorQualityAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun")))}</i>&nbsp"${removeDistinguishingLetter(countNounArray[index])}"`;
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListCountNoun[index] === "") {
                                                derivationListCountNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`
                                        } else {
                                                derivationListCountNoun[index] = derivationListCountNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`;
                                        };
                                };
                                etymologyArrayADJ[adjectiveArray.indexOf(derivedWord)] = countNounArray[index];
                                derivationListAdj[adjectiveArray.indexOf(derivedWord)] = "";
                        } else {
                                adjectiveArray.push(derivedWord);
                                comparativeAdjectiveArray.push(comparative)
                                derivationListAdj.push("");
                                if(derivedInModernOrOld === "old") {
                                        generatedAdjectives.push(soundChange(olderDerivedTerm));
                                        derivedOrInheritedADJ.push("inheritedOldDerived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[index], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + possessorQualityAffix)}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`;
                                        } else {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(possessorQualityAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)`;
                                        };
                                } else {
                                        generatedAdjectives.push(derivedTerm) 
                                        derivedOrInheritedADJ.push("derived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyADJ.push(`<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>&nbsp"${countNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + possessorQualityAffix))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`)
                                        } else {
                                                etymologyADJ.push(`<i>${spell(soundChange(possessorQualityAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[index])]))}</i>&nbsp"${countNounArray[index]}"`)
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListCountNoun[index] === "") {
                                                derivationListCountNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`
                                        } else {
                                                derivationListCountNoun[index] = derivationListCountNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`;
                                        };
                                }
                                etymologyArrayADJ.push(countNounArray[index]);
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i> "${countNounArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i> "${removeDistinguishingLetter(derivedWord)}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
                document.getElementById("derivational-affixes").appendChild(li);
                li.appendChild(ul);
        };
        document.getElementById("derivational-affixes").appendChild(li);
        li.appendChild(ul);   
    };

    deriveNADJtoADJpossessorOfQuality("affliction", "afflicted", "more&nbspafflicted");
    deriveNADJtoADJpossessorOfQuality("axe", "dangerous", "more&nbspdangerous");
    deriveNADJtoADJpossessorOfQuality("bag", "equipped", "more&nbspequipped");
    deriveNADJtoADJpossessorOfQuality("band", "accompanied", "more&nbspaccompanied");
    deriveNADJtoADJpossessorOfQuality("belt", "clothed", "more&nbspclothed");
    deriveNADJtoADJpossessorOfQuality("birth", "real", "realer");
    deriveNADJtoADJpossessorOfQuality("blade", "armed", "more&nbsparmed");
    deriveNADJtoADJpossessorOfQuality("boat", "sea-faring", "more&nbspsea-faring");
    deriveNADJtoADJpossessorOfQuality("child", "ancestral", "more&nbspancestral");
    deriveNADJtoADJpossessorOfQuality("club", "club-wielding", "more&nbspclub-wielding");
    deriveNADJtoADJpossessorOfQuality("comb", "well-kempt", "more&nbspwell-kempt");
    deriveNADJtoADJpossessorOfQuality("army", ["militaristic", "powerful", "in-charge", "in-command", "commanding"], ["more&nbspmilitaristic", "more&nbsppowerful", "more&nbspin-charge", "more&nbspin-command", "more&nbspcommanding"]);
    deriveNADJtoADJpossessorOfQuality("audience", ["famous", "well-known", "popular"], ["more&nbspfamous", "better-known", "more&nbsppopular"]);
    deriveNADJtoADJpossessorOfQuality("barrow", ["honoured&nbspin&nbspdeath", "eternally&nbspfamous"
    ], ["&nbsphonoured&nbspin&nbspdeath", "&nbspeternally&nbspfamous"
    ]);
    deriveNADJtoADJpossessorOfQuality(["burden", "basket"], ["burdened", "ladened", "troubled", "stressed"], ["more&nbspburdened", "more&nbspladened", "more&nbsptroubled", "more&nbspstressed"]);
    deriveNADJtoADJpossessorOfQuality("beard", ["manly", "virile"], ["manlier", "more&nbspvirile"]);
    deriveNADJtoADJpossessorOfQuality("body", ["alive", "living", "corporeal", "mortal"], ["more&nbspalive", "X", "more&nbspcorporeal", "more&nbspmortal"]);
    deriveNADJtoADJpossessorOfQuality("bone", ["skeletal", "emaciated"], ["more&nbspskeletal", "more&nbspemaciated"]);
    deriveNADJtoADJpossessorOfQuality("book", ["book-loving", "well-read", "learned"], ["more&nbspbook-loving", "better-read", "more&nbsplearned"]);
    deriveNADJtoADJpossessorOfQuality("border", ["territorial", "demarcated"], ["more&nbspterritorial", "more&nbspdemarcated"]);
    deriveNADJtoADJpossessorOfQuality("breath", ["alive", "living"], ["more&nbspalive", "X"]);
    deriveNADJtoADJpossessorOfQuality("chariot", ["fast-and-dangerous", "fast", "swift"], ["faster-and-more-dangerous", "faster", "swifter"]);
    deriveNADJtoADJpossessorOfQuality("cloud",["celestial", "cloudy"], ["more&nbspcelestial", "cloudier"]);
    deriveNADJtoADJpossessorOfQuality("coin", ["wealthy", "rich", "monetary"], ["wealthier", "richer", "more&nbspmonetary"]);
    deriveNADJtoADJpossessorOfQuality("cow", ["wealthy", "rich", "cattle-owning", "pastoral"], ["wealthier", "richer", "more&nbspcattle-owning", "more&nbsppastoral"]);
    

    //mass noun to adjective
    function deriveMassNtoADJPrototypical(originalWord, derivedWord, comparative) {
        let trueOrFalse = "";
        let index = "";
        let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
        if(typeof originalWord !== "string" && massNounArray.includes(randomWordFromOriginalWordArray)) {
                trueOrFalse = true;
                index = massNounArray.indexOf(randomWordFromOriginalWordArray);
        } else if (massNounArray.includes(originalWord)){
                trueOrFalse = true;
                index = massNounArray.indexOf(originalWord);
        };
        if(trueOrFalse) {
                //decides if word will have a derivation
                if(Math.floor(Math.random() * 3) === 1) {
                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(Math.floor(Math.random() * 3) === 1) {
                                derivedInModernOrOld = "old";
                        } else {
                                derivedInModernOrOld = "modern";
                        };

                        if(suffixOrPrefix === "suffix") {
                                derivedTerm = soundChange(generatedMassNouns[index] + "A") + soundChange("X" + possessorQualityAffix);
                                olderDerivedTerm = generatedMassNouns[index] + possessorQualityAffix;
                        } else {
                                derivedTerm = soundChange(possessorQualityAffix + "A") + soundChange("X" + generatedMassNouns[index]);
                                olderDerivedTerm = possessorQualityAffix + generatedMassNouns[index];
                        };

                        //if there are several possible derived derivedWords, one is chosen at random
                        if(typeof derivedWord !== "string") {
                                let derivedWordArray = cloneArray(derivedWord);
                                derivedWord = randomIndexOfArray(derivedWord);
                                comparative = comparative[derivedWordArray.indexOf(derivedWord)];
                        };
                        
                        
                        if(adjectiveArray.includes(derivedWord)) {
                                if(derivedInModernOrOld === "old") {
                                        generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = olderDerivedTerm;
                                        derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[index], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + possessorQualityAffix)}</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`;
                                        } else {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(possessorQualityAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)`;
                                        };
                                } else {
                                        generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = derivedTerm;
                                        derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "derived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>&nbsp"${removeDistinguishingLetter(massNounArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + possessorQualityAffix))}</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`;
                                        } else {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(possessorQualityAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun")))}</i>&nbsp"${removeDistinguishingLetter(massNounArray[index])}"`;
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListMassNoun[index] === "") {
                                                derivationListMassNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`
                                        } else {
                                                derivationListMassNoun[index] = derivationListMassNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`;
                                        };
                                };
                                etymologyArrayADJ[adjectiveArray.indexOf(derivedWord)] = massNounArray[index];
                                derivationListAdj[adjectiveArray.indexOf(derivedWord)] = "";
                        } else {
                                adjectiveArray.push(derivedWord);
                                comparativeAdjectiveArray.push(comparative);
                                derivationListAdj.push("");
                                if(derivedInModernOrOld === "old") {
                                        generatedAdjectives.push(soundChange(olderDerivedTerm));
                                        derivedOrInheritedADJ.push("inheritedOldDerived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[index], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + possessorQualityAffix)}</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`;
                                        } else {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(possessorQualityAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)`;
                                        };
                                } else {
                                        generatedAdjectives.push(derivedTerm) 
                                        derivedOrInheritedADJ.push("derived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyADJ.push(`<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>&nbsp"${massNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + possessorQualityAffix))}</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`)
                                        } else {
                                                etymologyADJ.push(`<i>${spell(soundChange(possessorQualityAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[index])]))}</i>&nbsp"${massNounArray[index]}"`)
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListMassNoun[index] === "") {
                                                derivationListMassNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`
                                        } else {
                                                derivationListMassNoun[index] = derivationListMassNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`;
                                        };
                                }
                                etymologyArrayADJ.push(massNounArray[index]);
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i> "${massNounArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i> "${removeDistinguishingLetter(derivedWord)}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                                
                        };
                };
                document.getElementById("derivational-affixes").appendChild(li);
                li.appendChild(ul);
        };
    };

    deriveMassNtoADJPrototypical("admiration", "admiring", "more&nbspadmiring");
    deriveMassNtoADJPrototypical("deception", "untrustworthy", "more&nbspuntrustworthy");deriveMassNtoADJPrototypical("fog", "foggy", "foggier");
    deriveMassNtoADJPrototypical("gold", "wealthy", "wealthier");
    deriveMassNtoADJPrototypical("music", "musical", "more&nbspmusic");
    deriveMassNtoADJPrototypical("grace", "graceful", "more&nbspgraceful");
    deriveMassNtoADJPrototypical("oil", "oily", "oilier");
    deriveMassNtoADJPrototypical("poison", "poisonous", "more&nbsppoison");
    deriveMassNtoADJPrototypical("prose", "prosaic", "more&nbspprosaic");
    deriveMassNtoADJPrototypical("revenge", "vengeful", "more&nbspvengeful");deriveMassNtoADJPrototypical("salt", "salty", "saltier");
    deriveMassNtoADJPrototypical("sight", ["watchful", "observant", "peering", "insightful"], ["more&nbspwatchful", "more&nbspobservant", "more&nbsppeering", "more&nbspinsightful"]);
    deriveMassNtoADJPrototypical("smoke", "smoky", "smokier");
    deriveMassNtoADJPrototypical("snow", "snowy", "snowier");
    deriveMassNtoADJPrototypical("sweat", "sweaty", "sweatier");
    deriveMassNtoADJPrototypical("truth", ["true", "honest", "real", "genuine"], ["truer", "more&nbsphonest", "realer", "more&nbspgenuine"]);
    deriveMassNtoADJPrototypical("vigour", "vigorous", "more&nbspvigorous");deriveMassNtoADJPrototypical("water", "wet", "wetter");
    deriveMassNtoADJPrototypical("work", "laborious", "more&nbsplaborious");
};

function bodyParts() {
    let li = document.createElement("li");
    let ul = document.createElement("ul");

    let derivedTerm = "";
    let olderDerivedTerm = "";
    let suffixOrPrefix = "";
    if(Math.floor(Math.random() * 2) === 0) {
        suffixOrPrefix = "suffix";
        li.innerHTML = `<i>-${spell(soundChange("X" + bodyPartAffix))}</i> "derives&nbspterms&nbspfor&nbspbody&nbspparts"`
    } else {
        suffixOrPrefix = "prefix";
        li.innerHTML = `<i>${spell(soundChange(bodyPartAffix + "A"))}-</i> "derives&nbspterms&nbspfor&nbspbody&nbspparts"`
    };
    let exampleCounter = 0;
    //count noun to count noun
    function deriveCountNtoCountNPossessorOf(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
        
        let derivedWordArray = "";
        let index = countNounArray.indexOf(originalWord);
        let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
        let trueOrFalse = "";
        if(typeof derivedWord !== "string") {
                derivedWordArray = cloneArray(derivedWord);
                derivedWord = randomIndexOfArray(derivedWordArray);
        };
        if(typeof shape !== "string") {
                shape = shape[derivedWordArray.indexOf(derivedWord)];
        };
        if(typeof plural !== "string") {
                plural = plural[derivedWordArray.indexOf(derivedWord)];
        };
        if(typeof originalWord !== "string" && countNounArray.includes(randomWordFromOriginalWordArray)) {
                trueOrFalse = true;
                index = countNounArray.indexOf(randomWordFromOriginalWordArray);
        } else if (countNounArray.includes(originalWord)){
                trueOrFalse = true;
                index = countNounArray.indexOf(originalWord);
        };
        if(trueOrFalse) {
                //decides if word will have a derivation
                if(Math.floor(Math.random() * 3) === 1) {
                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(Math.floor(Math.random() * 3) === 1) {
                                derivedInModernOrOld = "old";
                        } else {
                                derivedInModernOrOld = "modern";
                        };

                        if(suffixOrPrefix === "suffix") {
                                derivedTerm = soundChange(generatedCountNouns[index] + "A") + soundChange("X" + bodyPartAffix);
                                olderDerivedTerm = generatedCountNouns[index] + bodyPartAffix;
                                } else {
                                derivedTerm = soundChange(bodyPartAffix + "A") + soundChange("X" + generatedCountNouns[index]);
                                olderDerivedTerm = bodyPartAffix + generatedCountNouns[index];
                                };

                        if(countNounArray.includes(derivedWord)) {
                                if(derivedInModernOrOld === "old") {
                                        generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                        derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[index], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + bodyPartAffix)}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(bodyPartAffix + "A")}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)`;
                                        };
                                } else {
                                        generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                        derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>&nbsp"${countNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + bodyPartAffix))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(bodyPartAffix + "A"))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun")))}</i>&nbsp"${countNounArray[index]}"`;
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListCountNoun[index] === "") {
                                                derivationListCountNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListCountNoun[index] = derivationListCountNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        };
                                }
                                etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = countNounArray[index];
                                derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                        } else {
                                countNounArray.push(derivedWord);
                                countNounArrayPlural.push(plural);
                                activePassive.push(activePass);
                                animInan.push(animateInimate);
                                divineNonDivine.push(divineProfane);
                                humanAnimalInan.push(humanAnimal);
                                mascFemNeut.push(masculineFeminineNeuter);
                                mascFem.push(masculineFeminine);
                                naturalArtificial.push(naturalArt);
                                animacyClassifierArray.push(animacy);
                                shapeClassifierArray.push(shape);
                                shortGenericClassifierArray.push(shortGeneric);
                                derivationListCountNoun.push("");
                                if(derivedInModernOrOld === "old") {
                                        generatedCountNouns.push(olderDerivedTerm);
                                        derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[index], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + possessorAffix)}</i>&nbsp"possessor&nbspof"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(possessorAffix + "A")}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)`;
                                        };
                                } else {
                                        generatedCountNouns.push(derivedTerm) 
                                        derivedOrInheritedCountNoun.push("derived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>&nbsp"${countNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + possessorAffix))}</i>&nbsp"possessor&nbspof"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(possessorAffix + "A"))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun")))}</i>&nbsp"${countNounArray[index]}"`;
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListCountNoun[index] === "") {
                                                derivationListCountNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListCountNoun[index] = derivationListCountNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        };  
                                };
                                etymologyArrayCountNoun.push(countNounArray[index]);                       
                        };
                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                let exampleLi = document.createElement("li");
                                exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i> "${countNounArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                ul.appendChild(exampleLi);
                                exampleCounter++;
                        };
                };
        };
    };

    deriveCountNtoCountNPossessorOf("club", "penis", "penises", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveCountNtoCountNPossessorOf("coin", "nipple", "nipples", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveCountNtoCountNPossessorOf("corner", "elbow", "elbows", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveCountNtoCountNPossessorOf("crown", "forehead", "foreheads", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "flat", "natural-inanimate");
    deriveCountNtoCountNPossessorOf(["cup", "kiss"], "lip", "lips", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveCountNtoCountNPossessorOf("dent", "bellybutton", "bellybuttons", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveCountNtoCountNPossessorOf("groove", "wrinkle", "wrinkles", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveCountNtoCountNPossessorOf("hammer", "fist", "fists", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveCountNtoCountNPossessorOf(["hare", "harp"], "ear", "ears", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "flat", "natural-inanimate");
    deriveCountNtoCountNPossessorOf("bake", "claw", "claws", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "pointed", "natural-inanimate");
    deriveCountNtoCountNPossessorOf("walk", "foot", "feet", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveCountNtoCountNPossessorOf("well", "throat", "throats", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveCountNtoCountNPossessorOf("wheel", "ankle", "ankles", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveCountNtoCountNPossessorOf("whip", "ponytail", "ponytails", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveCountNtoCountNPossessorOf("cherry", "testicle", "testicles", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");

    //mass noun to count noun
    function deriveMassNtoCountNPossessorOf(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
        
        let trueOrFalse = "";
        let derivedWordArray = "";
        let index = massNounArray.indexOf(originalWord);
        let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
        if(typeof derivedWord !== "string") {
                derivedWordArray = cloneArray(derivedWord);
                derivedWord = randomIndexOfArray(derivedWordArray);
        };
        if(typeof shape !== "string") {;
                shape = shape[derivedWordArray.indexOf(derivedWord)];
        };
        if(typeof plural !== "string") {
                plural = plural[derivedWordArray.indexOf(derivedWord)];
        };
        if(typeof originalWord !== "string" && massNounArray.includes(randomWordFromOriginalWordArray)) {
                trueOrFalse = true;
                index = massNounArray.indexOf(randomWordFromOriginalWordArray);
        } else if (massNounArray.includes(originalWord)){
                trueOrFalse = true;
                index = massNounArray.indexOf(originalWord);
        };
        if(trueOrFalse) {
                //decides if word will have a derivation
                if(Math.floor(Math.random() * 3) === 1) {
                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(Math.floor(Math.random() * 3) === 1) {
                                derivedInModernOrOld = "old";
                        } else {
                                derivedInModernOrOld = "modern";
                        };

                        if(suffixOrPrefix === "suffix") {
                                derivedTerm = soundChange(generatedMassNouns[index] + "A") + soundChange("X" + bodyPartAffix);
                                olderDerivedTerm = generatedMassNouns[index] + bodyPartAffix;
                        } else {
                                derivedTerm = soundChange(bodyPartAffix + "A") + soundChange("X" + generatedMassNouns[index]);
                                olderDerivedTerm = bodyPartAffix + generatedMassNouns[index];
                        };

                        if(countNounArray.includes(derivedWord)) {
                                if(derivedInModernOrOld === "old") {
                                        generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                        derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[index], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + bodyPartAffix)}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(bodyPartAffix + "A")}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)`;
                                        };
                                } else {
                                        generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                        derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>&nbsp"${massNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + bodyPartAffix))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(bodyPartAffix + "A"))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun")))}</i>&nbsp"${massNounArray[index]}"`;
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListMassNoun[index] === "") {
                                                derivationListMassNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListMassNoun[index] = derivationListMassNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        };
                                }
                                etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = massNounArray[index];
                                derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                        } else {
                                countNounArray.push(derivedWord);
                                countNounArrayPlural.push(plural);
                                activePassive.push(activePass);
                                animInan.push(animateInimate);
                                divineNonDivine.push(divineProfane);
                                humanAnimalInan.push(humanAnimal);
                                mascFemNeut.push(masculineFeminineNeuter);
                                mascFem.push(masculineFeminine);
                                naturalArtificial.push(naturalArt);
                                animacyClassifierArray.push(animacy);
                                shapeClassifierArray.push(shape);
                                shortGenericClassifierArray.push(shortGeneric);
                                derivationListCountNoun.push("");
                                if(derivedInModernOrOld === "old") {
                                        generatedCountNouns.push(olderDerivedTerm);
                                        derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[index], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + bodyPartAffix)}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(bodyPartAffix + "A")}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)`;
                                        };
                                } else {
                                        generatedCountNouns.push(derivedTerm) 
                                        derivedOrInheritedCountNoun.push("derived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>&nbsp"${massNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + bodyPartAffix))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(bodyPartAffix + "A"))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun")))}</i>&nbsp"${massNounArray[index]}"`;
                                        }; 
                                };
                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                if(derivationListMassNoun[index] === "") {
                                        derivationListMassNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                } else {
                                        derivationListMassNoun[index] = derivationListMassNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                }; 
                                etymologyArrayCountNoun.push(massNounArray[index]);                       
                        };
                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                let exampleLi = document.createElement("li");
                                exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i> "${massNounArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                ul.appendChild(exampleLi);
                                exampleCounter++;
                        };
                };
        };
    };

    deriveMassNtoCountNPossessorOf(["admiration", "loveV"], "heart", "hearts", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "edible", "round", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("air", "lung", "lungs", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "edible", "round", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("glass", "eye", "eyes", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("meat", "muscle", "muscles", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("prose", "mind", "minds", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("rain", "tear&nbspduct", "tear&nbspducts", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("rope", ["penis", "artery"], ["penises", "arteries"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("string", "sinew", "sinews", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("vigour", "liver", "livers", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("water", "bladder", "bladders", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("wind", "nostril", "nostrils", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
   
    //transitive verb to count noun
    function deriveTransVtoCountNPossessorOf(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {

        let randomNumber = Math.floor(Math.random() * 3);
        let trueOrFalse = "";
        let derivedWordArray = "";
        let index = transitiveVerbArray.indexOf(originalWord);
        let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
        if(typeof derivedWord !== "string") {
               for(let i = 0; i < derivedWord.length; i++) {
                        if (oldCountNounArray.includes(derivedWord[i])) {
                                derivedWord = derivedWord;
                                randomNumber = 1;
                                trueOrFalse = true
                        } else {
                                derivedWordArray = cloneArray(derivedWord);
                                derivedWord = randomIndexOfArray(derivedWordArray);
                                break;
                        };
               };
        } else {
                if (oldCountNounArray.includes(derivedWord)) {
                        randomNumber = 1;
                        trueOrFalse = true
                }     
        }
        if(typeof shape !== "string") {
                shape = shape[derivedWordArray.indexOf(derivedWord)];
        };
        if(typeof plural !== "string") {
                plural = plural[derivedWordArray.indexOf(derivedWord)];
        };
        if(typeof originalWord !== "string" && transitiveVerbArray.includes(randomWordFromOriginalWordArray)) {
                trueOrFalse = true;
                index = transitiveVerbArray.indexOf(randomWordFromOriginalWordArray);
        } else if (transitiveVerbArray.includes(originalWord)){
                trueOrFalse = true;
                index = transitiveVerbArray.indexOf(originalWord);
        };
        if(trueOrFalse) {
                //decides if word will have a derivation
                if(randomNumber === 1) {
                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(randomNumber === 2) {
                                derivedInModernOrOld = "old";
                        } else {
                                derivedInModernOrOld = "modern";
                        };

                        if(suffixOrPrefix === "suffix") {
                                derivedTerm = soundChange(generatedTransitiveVerbs[index] + "A") + soundChange("X" + bodyPartAffix);
                                olderDerivedTerm = generatedTransitiveVerbs[index] + bodyPartAffix;
                        } else {
                                derivedTerm = soundChange(bodyPartAffix + "A") + soundChange("X" + generatedTransitiveVerbs[index]);
                                olderDerivedTerm = bodyPartAffix + generatedTransitiveVerbs[index];
                        };

                        if(countNounArray.includes(derivedWord)) {
                                if(derivedInModernOrOld === "old") {
                                        generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                        derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + bodyPartAffix)}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(bodyPartAffix + "A")}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "verb"))}</i>&nbsp"${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)`;
                                        };
                                } else {
                                        generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                        derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + bodyPartAffix))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(bodyPartAffix + "A"))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"`;
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListTransVerb[index] === "") {
                                                derivationListTransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListTransVerb[index] = derivationListTransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        };
                                }
                                etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = transitiveVerbArray[index];
                                derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                        } else {
                                countNounArray.push(derivedWord);
                                countNounArrayPlural.push(plural);
                                activePassive.push(activePass);
                                animInan.push(animateInimate);
                                divineNonDivine.push(divineProfane);
                                humanAnimalInan.push(humanAnimal);
                                mascFemNeut.push(masculineFeminineNeuter);
                                mascFem.push(masculineFeminine);
                                naturalArtificial.push(naturalArt);
                                animacyClassifierArray.push(animacy);
                                shapeClassifierArray.push(shape);
                                shortGenericClassifierArray.push(shortGeneric);
                                derivationListCountNoun.push("");
                                if(derivedInModernOrOld === "old") {
                                        generatedCountNouns.push(olderDerivedTerm);
                                        derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + bodyPartAffix)}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(bodyPartAffix + "A")}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "noun"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)`;
                                        };
                                } else {
                                        generatedCountNouns.push(derivedTerm) 
                                        derivedOrInheritedCountNoun.push("derived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + bodyPartAffix))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(bodyPartAffix + "A"))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"`;
                                        }; 
                                };
                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                if(derivationListTransVerb[index] === "") {
                                        derivationListTransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                } else {
                                        derivationListTransVerb[index] = derivationListTransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                }; 
                                etymologyArrayCountNoun.push(transitiveVerbArray[index]);                       
                        };
                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                let exampleLi = document.createElement("li");
                                exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i> "to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                ul.appendChild(exampleLi);
                                exampleCounter++;
                        };
                };
        };
        document.getElementById("derivational-affixes").appendChild(li);
        li.appendChild(ul);
    };

    deriveTransVtoCountNPossessorOf("hear", "ear", "ears", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "flat", "natural-inanimate");
    deriveTransVtoCountNPossessorOf(["arrange", "do", "attain", "grasp", "grip", "hold", "put", "rub"], "hand", "hands", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "flat", "natural-inanimate");
    deriveTransVtoCountNPossessorOf(["bearV", "throw", "carry"], ["arm", "shoulder"], ["arms", "shoulders"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", ["long-and-slender", "round"], "natural-inanimate");
    deriveTransVtoCountNPossessorOf("bend", ["elbow", "knee", "joint"], ["elbows", "knees", "joints"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveTransVtoCountNPossessorOf(["bite", "chew"], ["tooth", "jaw", "mouth"], ["teeth", "jaws", "mouths"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", ["pointed", "short-and-wide", "round"], "natural-inanimate");
    deriveTransVtoCountNPossessorOf("blowV", ["mouth", "pursed&nbsplip", "lip"], ["mouths", "pursed&nbsplips", "lips"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", ["round", "long-and-slender", "long-and-slender"], "natural-inanimate");
    deriveTransVtoCountNPossessorOf("breathe", "lung", "lungs", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveTransVtoCountNPossessorOf(["compel", "strike", "loveV"], "heart", "hearts", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveTransVtoCountNPossessorOf(["curse", "drink", "eat", "praise", "Invoke", "persuade", "say"], "mouth", "mouths", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveTransVtoCountNPossessorOf(["deem", "learn", "know"], ["mind", "brain", "thought"], ["minds", "brains", "thoughts"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", ["shapeless", "round", "shapeless"], "natural-inanimate");
    deriveTransVtoCountNPossessorOf("desire", ["heart", "penis", "vagina"], ["hearts", "penises", "vaginas"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", ["round", "long-and-slender", "round"], "natural-inanimate");
    deriveTransVtoCountNPossessorOf("strike", "fist", "fists", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveTransVtoCountNPossessorOf("feel", "finger", "fingers", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveTransVtoCountNPossessorOf("gird", "waist", "waists", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "short-and-wide", "natural-inanimate");
    deriveTransVtoCountNPossessorOf("hum", ["voicebox", "vocal&nbspchord", "throat"], ["voiceboxes", "vocal&nbspchords", "throats"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", ["short-and-wide", "short-and-wide", "long-and-slender"], "natural-inanimate");
    deriveTransVtoCountNPossessorOf("lick", "tongue", "tongues", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "flat", "natural-inanimate");
    deriveTransVtoCountNPossessorOf("insult", ["mouth", "anus", "ass"], ["mouths", "anuses", "asses"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveTransVtoCountNPossessorOf(["kick", "leap", "run"], ["foot", "leg"], ["feet", "legs"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveTransVtoCountNPossessorOf(["notice", "see", "read"], "eye", "eyes", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveTransVtoCountNPossessorOf("ride", ["ass", "thigh"], ["asses", "thighs"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveTransVtoCountNPossessorOf("rowV", "upper&nbspback", "upper&nbspbacks", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "flat", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("scratch", "fingernail", "fingernails", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "flat", "natural-inanimate");
    deriveMassNtoCountNPossessorOf(["sing", "swallow"], "throat", "throats", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("smear", "palm", "palms", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "flat", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("sprinkle", "fingertip", "fingertip", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveMassNtoCountNPossessorOf("suck", "nipple", "nipples", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");

    //intransitive verb to count noun
    function deriveIntransitiveVtoCountNPossessorOf(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
        
        let trueOrFalse = "";
        let derivedWordArray = "";
        let index = intransitiveVerbArray.indexOf(originalWord);
        let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
        if(typeof derivedWord !== "string") {
                derivedWordArray = cloneArray(derivedWord);
                derivedWord = randomIndexOfArray(derivedWordArray);
        };
        if(typeof shape !== "string") {
                shape = shape[derivedWordArray.indexOf(derivedWord)];
        };
        if(typeof plural !== "string") {
                plural = plural[derivedWordArray.indexOf(derivedWord)];
        };
        if(typeof originalWord !== "string" && intransitiveVerbArray.includes(randomWordFromOriginalWordArray)) {
                trueOrFalse = true;
                index = intransitiveVerbArray.indexOf(randomWordFromOriginalWordArray);
        } else if (intransitiveVerbArray.includes(originalWord)){
                trueOrFalse = true;
                index = intransitiveVerbArray.indexOf(originalWord);
        };
        if(trueOrFalse) {
                //decides if word will have a derivation
                if(Math.floor(Math.random() * 3) === 1) {
                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(Math.floor(Math.random() * 3) === 1) {
                                derivedInModernOrOld = "old";
                        } else {
                                derivedInModernOrOld = "modern";
                        };

                        if(suffixOrPrefix === "suffix") {
                                derivedTerm = soundChange(generatedIntransitiveVerbs[index] + "A") + soundChange("X" + bodyPartAffix);
                                olderDerivedTerm = generatedIntransitiveVerbs[index] + bodyPartAffix;
                        } else {
                                derivedTerm = soundChange(bodyPartAffix + "A") + soundChange("X" + generatedIntransitiveVerbs[index]);
                                olderDerivedTerm = bodyPartAffix + generatedIntransitiveVerbs[index];
                        };

                        if(countNounArray.includes(derivedWord)) {
                                if(derivedInModernOrOld === "old") {
                                        generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                        derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + bodyPartAffix)}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(bodyPartAffix + "A")}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb"))}</i>&nbsp"${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)`;
                                        };
                                } else {
                                        generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                        derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + bodyPartAffix))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(bodyPartAffix + "A"))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"`;
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListIntransVerb[index] === "") {
                                                derivationListIntransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListIntransVerb[index] = derivationListIntransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        };
                                }
                                etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = intransitiveVerbArray[index];
                                derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                        } else {
                                countNounArray.push(derivedWord);
                                countNounArrayPlural.push(plural);
                                activePassive.push(activePass);
                                animInan.push(animateInimate);
                                divineNonDivine.push(divineProfane);
                                humanAnimalInan.push(humanAnimal);
                                mascFemNeut.push(masculineFeminineNeuter);
                                mascFem.push(masculineFeminine);
                                naturalArtificial.push(naturalArt);
                                animacyClassifierArray.push(animacy);
                                shapeClassifierArray.push(shape);
                                shortGenericClassifierArray.push(shortGeneric);
                                derivationListCountNoun.push("");
                                if(derivedInModernOrOld === "old") {
                                        generatedCountNouns.push(olderDerivedTerm);
                                        derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb"))}</i>&nbsp"${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + bodyPartAffix)}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(bodyPartAffix + "A")}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "noun"))}</i>&nbsp"to&nbsp${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)`;
                                        };
                                } else {
                                        generatedCountNouns.push(derivedTerm) 
                                        derivedOrInheritedCountNoun.push("derived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + bodyPartAffix))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(bodyPartAffix + "A"))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"`;
                                        }; 
                                };
                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                if(derivationListIntransVerb[index] === "") {
                                        derivationListIntransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                } else {
                                        derivationListIntransVerb[index] = derivationListIntransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                }; 
                                etymologyArrayCountNoun.push(transitiveVerbArray[index]);                       
                        };
                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                let exampleLi = document.createElement("li");
                                exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i> "to&nbsp${intransitiveVerbArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                ul.appendChild(exampleLi);
                                exampleCounter++;
                        };
                };
        };
        document.getElementById("derivational-affixes").appendChild(li);
        li.appendChild(ul);
    };

    deriveIntransitiveVtoCountNPossessorOf("aim", "index&nbspfinger", "index&nbspfingers", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveIntransitiveVtoCountNPossessorOf(["babble", "speak", "stammer"], ["tongue", "mouth"], ["tongues", "mouths"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", ["flat", "round"], "natural-inanimate");
    deriveIntransitiveVtoCountNPossessorOf("belch", "stomach", "stomachs", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveIntransitiveVtoCountNPossessorOf(["bleat", "cackle", "howlV"], "throat", "throats", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveIntransitiveVtoCountNPossessorOf("crawl", "knee", "knees", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveIntransitiveVtoCountNPossessorOf("dream", ["brain", "mind"], ["brains", "minds"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", ["round", "shapeless"], "natural-inanimate");
    deriveIntransitiveVtoCountNPossessorOf(["fart", "shit", "sit"], "ass", "asses", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveIntransitiveVtoCountNPossessorOf(["flee", "go", "jump", "move", "stand", "step"], ["foot", "leg"], ["feet", "legs"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveIntransitiveVtoCountNPossessorOf("fly", "wing", "wings", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "flat", "natural-inanimate");
    deriveIntransitiveVtoCountNPossessorOf("realise", "brain", "brains", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveIntransitiveVtoCountNPossessorOf("swell", "penis", "penises", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
    deriveIntransitiveVtoCountNPossessorOf("urinate", "bladder", "bladders", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveIntransitiveVtoCountNPossessorOf("wade", "thigh", "thighs", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
    deriveIntransitiveVtoCountNPossessorOf("yawn", "mouth", "mouths", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
};

//derives causative verbs from adjectives
function ADJtoCausVerb() {
    let li = document.createElement("li");
    let ul = document.createElement("ul");

    let derivedTerm = "";
    let olderDerivedTerm = "";
    let suffixOrPrefix = "";
    if(Math.floor(Math.random() * 2) === 0) {
        suffixOrPrefix = "suffix";
        li.innerHTML = `<i>-${spell(soundChange("X" + adjToCausativeVerbAffix))}</i> "derives&nbspcausative&nbspverbs&nbspfrom&nbspadjectives"`
    } else {
        suffixOrPrefix = "prefix";
        li.innerHTML = `<i>${spell(soundChange(adjToCausativeVerbAffix + "A"))}-</i> "derives&nbspcausative&nbspverbs&nbspfrom&nbspadjectives"`
    };
    let exampleCounter = 0;

    function deriveADJtoCausVerb(originalWord, derivedWord, thirdsg, past) {
        let trueOrFalse = "";
        let derivedWordArray = "";
        let index = adjectiveArray.indexOf(originalWord);
        let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
        if(typeof derivedWord !== "string") {
                derivedWordArray = cloneArray(derivedWord);
                derivedWord = randomIndexOfArray(derivedWordArray);
        };
        if(typeof thirdsg !== "string") {
                thirdsg = thirdsg[derivedWordArray.indexOf(derivedWord)];
        };
        if(typeof past !== "string") {
                past = past[derivedWordArray.indexOf(derivedWord)];
        };
        if(typeof originalWord !== "string" && adjectiveArray.includes(randomWordFromOriginalWordArray)) {
                trueOrFalse = true;
                index = adjectiveArray.indexOf(randomWordFromOriginalWordArray);
        } else if (adjectiveArray.includes(originalWord)){
                trueOrFalse = true;
                index = adjectiveArray.indexOf(originalWord);
        };
        if(trueOrFalse) {
                //decides if word will have a derivation
                if(Math.floor(Math.random() * 3) === 1) {
                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(Math.floor(Math.random() * 3) === 1) {
                                derivedInModernOrOld = "old";
                        } else {
                                derivedInModernOrOld = "modern";
                        };

                        if(suffixOrPrefix === "suffix") {
                                derivedTerm = soundChange(generatedAdjectives[index] + "A") + soundChange("X" + adjToCausativeVerbAffix);
                                olderDerivedTerm = generatedAdjectives[index] + adjToCausativeVerbAffix;
                        } else {
                                derivedTerm = soundChange(adjToCausativeVerbAffix + "A") + soundChange("X" + generatedAdjectives[index]);
                                olderDerivedTerm = adjToCausativeVerbAffix + generatedAdjectives[index];
                        };

                        if(transitiveVerbArray.includes(derivedWord)) {
                                if(derivedInModernOrOld === "old") {
                                        generatedTransitiveVerbs[transitiveVerbArray.indexOf(derivedWord)] = olderDerivedTerm;
                                        derivedOrInheritedTransVerb[transitiveVerbArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "verb"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedAdjectives[index], "adjective"))}</i>&nbsp"${removeDistinguishingLetter(adjectiveArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i>)&nbsp+&nbsp<i>-${spell("X" + adjToCausativeVerbAffix)}</i>&nbsp"derives&nbspcausative&nbspverbs&nbspfrom&nbspadjectives"`;
                                        } else {
                                                etymologyTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "verb"))}</i>&nbsp"to&nbsp${derivedWord}"&nbsp<&nbsp<i>${spell(adjToCausativeVerbAffix + "A")}-</i>&nbsp"derives&nbspcausative&nbspverbs&nbspfrom&nbspadjectives"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedAdjectives[adjectiveArray.indexOf(adjectiveArray[index])], "adjective"))}</i>&nbsp"${removeDistinguishingLetter(adjectiveArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i>)`;
                                        };
                                } else {
                                        generatedTransitiveVerbs[transitiveVerbArray.indexOf(derivedWord)] = derivedTerm;
                                        derivedOrInheritedTransVerb[transitiveVerbArray.indexOf(derivedWord)] = "derived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyArrayTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i>&nbsp"${removeDistinguishingLetter(adjectiveArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + adjToCausativeVerbAffix))}</i>&nbsp"derives&nbspcausative&nbspverbs&nbspfrom&nbspadjectives"`;
                                        } else {
                                                etymologyArrayTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `<i>${spell(soundChange(adjToCausativeVerbAffix + "A"))}-</i>&nbsp"derives&nbspcausative&nbspverbs&nbspfrom&nbspadjectives"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[adjectiveArray.indexOf(adjectiveArray[index])], "adjective")))}</i>&nbsp"${removeDistinguishingLetter(adjectiveArray[index])}"`;
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListAdj[index] === "") {
                                                derivationListAdj[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "verb"))}</i></strong>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"`
                                        } else {
                                                derivationListAdj[index] = derivationListAdj[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "verb"))}</i></strong>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"`;
                                        };
                                }
                                etymologyArrayTransVerb[transitiveVerbArray.indexOf(derivedWord)] = adjectiveArray[index];
                                derivationListTransVerb[transitiveVerbArray.indexOf(derivedWord)] = "";derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                        } else {
                                transitiveVerbArray.push(derivedWord);
                                transitiveVerb3SArray.push(thirdsg);
                                transitiveVerbPastArray.push(past);
                                derivationListTransVerb.push("");
                                if(derivedInModernOrOld === "old") {
                                        generatedTransitiveVerbs.push(olderDerivedTerm);
                                        derivedOrInheritedTransVerb.push("inheritedOldDerived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedAdjectives[index], "adjective"))}</i>&nbsp"${adjectiveArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i>)&nbsp+&nbsp<i>-${spell("X" + adjToCausativeVerbAffix)}</i>&nbsp"derives&nbspcausative&nbspverbs&nbspfrom&nbspadjectives"`;
                                        } else {
                                                etymologyTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "verb"))}</i>&nbsp"to&nbsp${derivedWord}"&nbsp<&nbsp<i>${spell(adjToCausativeVerbAffix + "A")}-</i>&nbsp"derives&nbspcausative&nbspverbs&nbspfrom&nbspadjectives"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedAdjectives[adjectiveArray.indexOf(adjectiveArray[index])], "adjective"))}</i>&nbsp"${adjectiveArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i>)`;
                                        };
                                } else {
                                        generatedTransitiveVerbs.push(derivedTerm) 
                                        derivedOrInheritedTransVerb.push("derived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i>&nbsp"${adjectiveArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + adjToCausativeVerbAffix))}</i>&nbsp"derives&nbspcausative&nbspverbs&nbspfrom&nbspadjectives"`;
                                        } else {
                                                etymologyTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `<i>${spell(soundChange(adjToCausativeVerbAffix + "A"))}-</i>&nbsp"derives&nbspcausative&nbspverbs&nbspfrom&nbspadjectives"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[adjectiveArray.indexOf(adjectiveArray[index])], "adjective")))}</i>&nbsp"${adjectiveArray[index]}"`;
                                        }; 
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                if(derivationListAdj[index] === "") {
                                        derivationListAdj[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "verb"))}</i></strong>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"`
                                } else {
                                        derivationListAdj[index] = derivationListAdj[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "verb"))}</i></strong>&nbspto&nbsp${removeDistinguishingLetter(derivedWord)}"`;
                                }; 
                                };
                                etymologyArrayTransVerb.push(adjectiveArray[index]);                       
                        };
                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                let exampleLi = document.createElement("li");
                                exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i> "${adjectiveArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "verb"))}</i> "to&nbsp${removeDistinguishingLetter(derivedWord)}"`;
                                ul.appendChild(exampleLi);
                                exampleCounter++;
                        };
                };
        };
        document.getElementById("derivational-affixes").appendChild(li);
        li.appendChild(ul);
    };

    deriveADJtoCausVerb("able", "enable", "enables", "enabled");
    deriveADJtoCausVerb(["abundant", "numerous"], "multiply", "multiplies", "multiplied");
    deriveADJtoCausVerb(["afraid", "scared"], "scare", "scares", "scared");
    deriveADJtoCausVerb("alive", "invigorate", "invigorates", "invigorated");
    deriveADJtoCausVerb(["alone", "lonely"], "isolate", "isolates", "isolated");
    deriveADJtoCausVerb(["angry", "violent"], ["anger", "enrage", "infuriate"], ["angers", "enrages", "infuriates"], ["angered", "enraged", "infuriated"]);
    deriveADJtoCausVerb("awake", "wake&nbspup", "wakse&nbspup", "woke&nbspup");
    deriveADJtoCausVerb("bad", "worsen", "worsens", "worsened");
    deriveADJtoCausVerb(["bare", "bald", "naked"], ["strip", "reveal", "show"], ["strips", "reveals", "shows"], ["stripped", "revealed", "showed"]);
    deriveADJtoCausVerb(["bitter", "sour"], "enbitter", "enbitters", "enbittered");
    deriveADJtoCausVerb("blind", "blind", "blinds", "blinded");
    deriveADJtoCausVerb("brown", ["make&nbspbrown", "muddy", "corrupt"], ["makes&nbspbrown", "muddies", "corrupts"], ["made&nbspbrown", "muddied", "corrupted"]);
    deriveADJtoCausVerb("cold", "chill", "chills", "chilled");
    deriveADJtoCausVerb(["correct", "right"], "correct", "corrects", "corrected");
    deriveADJtoCausVerb("crooked", "bend", "bends", "bent");
    deriveADJtoCausVerb("damp", "dampen", "dampens", "dampened");
    deriveADJtoCausVerb("dark", "darken", "darkens", "darkened");
    deriveADJtoCausVerb("deaf", "deafen", "deafens", "deafened");
    deriveADJtoCausVerb("dear", ["cherish", "adore", "loveV", "endear"], ["cherishes", "adores", "loves", "endears"], ["cherished", "adored", "loved", "endeared"]);
    deriveADJtoCausVerb("deep", ["deepen", "expand"], ["deepens", "expands"], ["deepened", "expanded"]);
    deriveADJtoCausVerb(["difficult", "hard"], ["encumber", "burden", "entangle", "make&nbspdifficult"], ["encumbers", "burdens", "entangles", "makes&nbspdifficult"], ["encumbered", "burdened", "entangled", "made&nbspdifficult"]);
    deriveADJtoCausVerb("dry", "dry", "dries", "dried");
    deriveADJtoCausVerb(["dumb", "stupid"], ["stupify", "stun", "silence"], ["stupifies", "stuns", "silences"], ["stupified", "stunned", "silenced"]);
    deriveADJtoCausVerb(["empty", "hollow"], ["emptyV", "hollow&nbspout"], ["empties", "hollows&nbspout"], ["emptied", "hollowed&nbspout"]);
    deriveADJtoCausVerb(["evil", "cruel"], ["villify", "corrupt"], ["villifies", "corrupts"], ["villified", "corrupted"]);
    deriveADJtoCausVerb(["fast", "quick", "swift"], ["speed&nbspup", "quicken", "accelarate"], ["speeds&nbspup", "quickens", "accelarates"], ["sped&nbspup", "quickened", "accelarated"]);
    deriveADJtoCausVerb("fat", "fatten", "fattens", "fattened");
    deriveADJtoCausVerb(["fertile", "pregnant"], ["fertilise", "impregnate"], ["fertilises", "impregnates"], ["fertilised", "impregnated"]);
    deriveADJtoCausVerb(["firm", "solid", "ensure"], ["ensure", "solidify", "make&nbspsure", "confirm", "verify"], ["ensures", "solidifies", "makes&nbspsure", "confirms", "verifies"], ["ensured", "solidified", "made&nbspsure", "confirmed", "verified"]);
    deriveADJtoCausVerb("flat", ["flatten", "squish", "apply&nbsppressure", "press"], ["flattens", "squishes", "applies&nbsppressure", "presses"], ["flattened", "squished", "applied&nbsppressure", "pressed"]);
    deriveADJtoCausVerb(["foul", "nasty", "gross", "repugnant"< "disgusting"],["corrupt", "contaminate", "pollute", "infect", "ruin", "shit&nbspon", "defile"], ["corrupts", "contaminates", "pollutes", "infects", "ruins", "shits&nbspon", "defiles"], ["corrupted", "contaminated", "polluted", "infected", "ruined", "shat&nbspon", "defiled"]);
    deriveADJtoCausVerb("fresh", ["refresh", "freshen", "renew"], ["refreshes", "freshens", "renews"], ["refreshed", "freshened", "renewed"]);
    deriveADJtoCausVerb("full", "fill", "fills", "filled");
    deriveADJtoCausVerb("good", "improve", "improves", "improved");
    deriveADJtoCausVerb("grey", "make&nbspgrey", "makes&nbspgrey", "made&nbspgrey");
    deriveADJtoCausVerb("green", "make&nbspgreen", "makes&nbspgreen", "made&nbspgreen");
    deriveADJtoCausVerb("half", ["cleave", "split&nbspin&nbsphalf", "divide&nbspinto&nbsptwo"], ["cleaves", "splits&nbspin&nbsphalf", "divides&nbspinto&nbsptwo"], ["cleaved", "split&nbspin&nbsphalf", "divided&nbspinto&nbsptwo"]);
    deriveADJtoCausVerb("happy", ["cheer&nbspup", "make&nbsphappy"], ["cheers&nbspup", "makes&nbsphappy"], ["cheered&nbspup", "made&nbsphappy"]);
    deriveADJtoCausVerb("heavy", ["bulk", "add&nbspweight&nbspto", "burden"], ["bulks", "adds&nbspweight&nbspto", "burdens"], ["bulked", "added&nbspweight&nbspto", "burdened"]);
    deriveADJtoCausVerb("impure", "pollute", "pollutes", "polluted");
    deriveADJtoCausVerb("intelligent", "smarten", "smartens", "smartened");
    deriveADJtoCausVerb("intense", ["intensify", "increase"], ["intensifies", "increases"], ["intensified", "increased"]);
    deriveADJtoCausVerb("light&nbsp(of&nbspweight)", ["lighten", "ease"], ["lightens", "eases"], ["lightened", "eased"]);
    deriveADJtoCausVerb("loose", "loosen", "loosens", "loosened");
    deriveADJtoCausVerb("low", "lower", "lowers", "lowered");
    deriveADJtoCausVerb("mild", "ease", "eases", "eased");
    deriveADJtoCausVerb("moist", "moisten", "moistens", "moistened");
    deriveADJtoCausVerb("narrow", ["make&nbspnarrow", "make&nbspthin"], ["makes&nbspnarrow", "makes&nbspthin"], ["made&nbspnarrow", "made&nbspthin"]);
    deriveADJtoCausVerb("near", "place&nbspnearer", "places&nbspnearer", "placed&nbspnearer");
    deriveADJtoCausVerb("new", ["renew", "restore"], ["renews", "restores"], ["renewed", "restored"]);
    deriveADJtoCausVerb("noble", "ennoble", "ennobles", "ennobled");
    deriveADJtoCausVerb("normal", "normalise", "normalises", "normalised");
    deriveADJtoCausVerb("nourishing", "nourish", "nourishes", "nourished");
    deriveADJtoCausVerb("obvious", ["make&nbspobvious", "show", "reveal"], ["makes&nbspobvious", "shows", "reveals"], ["made&nbspobvious", "showed", "revealed"]);
    deriveADJtoCausVerb("old", ["age", "weather", "erode"], ["ages", "weathers", "erodes"], ["aged", "weathered", "eroded"]);
    deriveADJtoCausVerb("padded", "stuff", "stuffs", "stuffed");
    deriveADJtoCausVerb("pale", "bleach", "bleaches", "bleached");
    deriveADJtoCausVerb("polluted", "pollute", "pollutes", "polluted");
    deriveADJtoCausVerb("powerful", "empower", "empowers", "empowered");
    deriveADJtoCausVerb("pure", ["purify", "filter"], ["purifies", "filters"], ["purified", "filtered"]);
    deriveADJtoCausVerb("quiet", ["silence", "stiffle", "gag", "shut&nbspup"], ["silences", "stiffles", "gags", "shuts&nbspup"], ["silenced", "stiffled", "gagged", "shut&nbspup"]);
    deriveADJtoCausVerb("ready", "prepare", "prepares","prepared");
    deriveADJtoCausVerb("rich", ["endow", "enrich"], ["endows", "enriches"], ["endowed", "enriched"]);
    deriveADJtoCausVerb("rough", "roughen", "roughens", "roughened");
    deriveADJtoCausVerb("sharp", "sharpen", "sharpens", "sharpened");
    deriveADJtoCausVerb("slippery", "make&nbspslippery", "makes&nbspslippery", "made&nbspslippery");
    deriveADJtoCausVerb("smooth", "smoothen", "smoothens", "smoothened");
    deriveADJtoCausVerb("soft", "soften", "softens", "softened");
    deriveADJtoCausVerb("speckled", ["sprinkle", "spray"], ["sprinkles", "sprays"], ["sprinkled", "sprayed"]);
    deriveADJtoCausVerb(["stiff", "rigid"], "stiffen", "stiffens", "stiffened");
    deriveADJtoCausVerb(["stinky", "smelly"], "make&nbspstinky", "makes&nbspstinky", "made&nbspstinky");
    deriveADJtoCausVerb(["strong", "confident"], "strengthen", "strengthens", "strengthened");
    deriveADJtoCausVerb("thick", "thicken", "thickens", "thickened");
    deriveADJtoCausVerb("true", ["make&nbsptrue", "verify", "confirm"], ["makes&nbsptrue", "verifies", "confirms"], ["made&nbsptrue", "verified", "confirmed"]);
    deriveADJtoCausVerb(["unhealthy", "sick"], ["make&nbspunhealthy", "sicken", "poison"], ["makes&nbspunhealthy", "sickens", "poisons"], ["made&nbspunhealthy", "sickened", "poisoned"]);
    deriveADJtoCausVerb(["unusual", "weird", "other"], ["make&nbspunsusual", "make&nbspodd", "differentiate", "estrange", "cast&nbspout", "exile", "distinguish"], ["makes&nbspunsusual", "makes&nbspodd", "differentiates", "estranges", "casts&nbspout", "exiles", "distinguishes"], ["made&nbspunsusual", "made&nbspodd", "differentiated", "estranged", "cast&nbspout", "exiled", "distinguished"]);
    deriveADJtoCausVerb("useful", ["utilise", "employ", "use"], ["utilises", "employs", "uses"], ["utilised", "employed", "used"]);
    deriveADJtoCausVerb("visible", ["make&nbspvisible", "show", "reveal"], ["makse&nbspvisible", "shows", "reveals"], ["made&nbspvisible", "showed", "revealed"]);
    deriveADJtoCausVerb("weak", "weaken", "weakens", "weakened");
    deriveADJtoCausVerb("wet", "soak", "soaks", "soaked");
    deriveADJtoCausVerb("white", ["bleach", "whiten", "clean", "wash", "brighten", "improve"], ["bleaches", "whitens", "cleans", "washes", "brightens", "improves"], ["bleached", "whitened", "cleaned", "washed", "brightened", "improved"]);
    deriveADJtoCausVerb(["wide", "broad"], ["widen", "stretch", "broaden"], ["widens", "stretches", "broadens"], ["widened", "stretched", "broadened"]);
    deriveADJtoCausVerb("wild", ["madden", "bewilder"], ["maddens", "bewilders"], ["maddened", "bewildered"]);
    deriveADJtoCausVerb("young", ["invigorate", "rejuvenate"], ["invigorates", "rejuvenates"], ["invigorated", "rejuvenated"]);
    deriveADJtoCausVerb("yellow", "make&nbspyellow", "makes&nbspyellow", "made&nbspyellow");
    deriveADJtoCausVerb("short", ["shorten", "reduce", "decrease", "shrink"], ["shortens", "reduces", "decreases", "shrinks"], ["shortened", "reduced", "decreased", "shrunk"]);
    deriveADJtoCausVerb("big", ["enlarge", "increase", "expand"], ["enlarges", "increases", "expands"], ["enlarged", "increased", "expanded"]);
    deriveADJtoCausVerb("brave", "encourage", "encourages", "encouraged");
    deriveADJtoCausVerb(["confident", "powerful"], ["support", "empower"], ["supports", "empowers"], ["supported", "empowered"]);
    deriveADJtoCausVerb("dead", ["kill", "murderV", "slaughter", "slay"], ["kills", "murders", "slaughters", "slays"], ["killed", "murdered", "slaughtered", "slayed"]);
    deriveADJtoCausVerb("free", ["freeV", "release"], ["frees", "releases"], ["freed", "released"]);
    deriveADJtoCausVerb("funny", ["make&nbspfun&nbspof", "mock"], ["makes&nbspfun&nbspof", "mocks"], ["made&nbspfun&nbspof", "mocked"]);
    deriveADJtoCausVerb("healthy", "heal", "heals", "healed");
    deriveADJtoCausVerb("long", ["lengthen", "stretch"], ["lengthens", "stretches"], ["lengthened", "stretched"]);
    deriveADJtoCausVerb("slow", ["slow&nbspdown", "retard", "hamper", "delayV"], ["slows&nbspdown", "retards", "hampers", "delays"], ["slowed&nbspdown", "retarded", "hampered", "delayed"]);
    deriveADJtoCausVerb("stark", ["distinguish", "clarify"], ["distinguishes", "clarifies"], ["distinguished", "clarified"]);
    deriveADJtoCausVerb("suitable", ["customise", "adjust"], ["customises", "adjusts"], ["customised", "adjusted"]);
    deriveADJtoCausVerb("tasty", ["season", "improve&nbsptaste"], ["seasons", "improves&nbsptaste"], ["seasoned", "improved&nbsptaste"]);
    deriveADJtoCausVerb("tough", "toughen", "toughens", "toughened");
    deriveADJtoCausVerb("wonderful", ["make&nbspwonderful", "improve"], ["makes&nbspwonderful", "improves"], ["made&nbspwonderful", "improved"]);
};

//derives transitive verbs from intransitive verbs, with causative derivedWords or incausative transitive derivedWords
function intransToTransVerb() {
        let li = document.createElement("li");
        let ul = document.createElement("ul");
    
        let derivedTerm = "";
        let olderDerivedTerm = "";
        let suffixOrPrefix = "";
        if(Math.floor(Math.random() * 2) === 0) {
            suffixOrPrefix = "suffix";
            li.innerHTML = `<i>-${spell(soundChange("X" + intransToTransVerbAffix))}</i> "derives&nbsptransitive&nbspverbs&nbspfrom&nbspintransitive&nbspverbs. The resulting verb may be causative in nature, or just transitive in general, often translating to a phrasal verb in English."`
        } else {
            suffixOrPrefix = "prefix";
            li.innerHTML = `<i>${spell(soundChange(intransToTransVerbAffix + "A"))}-</i> "derives&nbsptransitive&nbspverbs&nbspfrom&nbspintransitive&nbspverbs. The resulting verb may be causative in nature, or just transitive in general, often translating to a phrasal verb in English."`
        };
        let exampleCounter = 0;

        function deriveIntransToTransVerb(originalWord, derivedWord, thirdsg, past) {
                let trueOrFalse = "";
                let derivedWordArray = "";
                let index = intransitiveVerbArray.indexOf(originalWord);
                let randomWordFromOriginalWordArray = "";
                if(typeof originalWord !== "string") {
                        randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
                };
                if(typeof derivedWord !== "string") {
                        derivedWordArray = cloneArray(derivedWord);
                        derivedWord = randomIndexOfArray(derivedWordArray);
                };
                if(typeof thirdsg !== "string") {
                        thirdsg = thirdsg[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof past !== "string") {
                        past = past[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof originalWord !== "string" && intransitiveVerbArray.includes(randomWordFromOriginalWordArray)) {
                        trueOrFalse = true;
                        index = intransitiveVerbArray.indexOf(randomWordFromOriginalWordArray);
                } else if (intransitiveVerbArray.includes(originalWord)){
                        trueOrFalse = true;
                        index = intransitiveVerbArray.indexOf(originalWord);
                };
                if(trueOrFalse) {
                        //decides if word will have a derivation
                        if(Math.floor(Math.random() * 3) === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(Math.floor(Math.random() * 3) === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };
        
                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedIntransitiveVerbs[index] + "A") + soundChange("X" + intransToTransVerbAffix);
                                        olderDerivedTerm = generatedIntransitiveVerbs[index] + intransToTransVerbAffix;
                                } else {
                                        derivedTerm = soundChange(intransToTransVerbAffix + "A") + soundChange("X" + generatedIntransitiveVerbs[index]);
                                        olderDerivedTerm = intransToTransVerbAffix + generatedIntransitiveVerbs[index];
                                };
        
                                if(transitiveVerbArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedTransitiveVerbs[transitiveVerbArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedTransVerb[transitiveVerbArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb"))}</i>&nbsp"${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + intransToTransVerbAffix)}</i>&nbsp"derives&nbsptransitive&nbspverbs&nbspfrom&nbspintransitive&nbspverbs"`;
                                                } else {
                                                        etymologyTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(intransToTransVerbAffix + "A")}-</i>&nbsp"derives&nbsptransitive&nbspverbs&nbspfrom&nbspintransitive&nbspverbs"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb"))}</i>&nbsp"${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)`;
                                                };
                                        } else {
                                                generatedTransitiveVerbs[transitiveVerbArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedTransVerb[transitiveVerbArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyArrayTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>&nbsp"${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + intransToTransVerbAffix))}</i>&nbsp"derives&nbsptransitive&nbspverbs&nbspfrom&nbspintransitive&nbspverbs"`;
                                                } else {
                                                        etymologyArrayTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `<i>${spell(soundChange(intransToTransVerbAffix + "A"))}-</i>&nbsp"derives&nbsptransitive&nbspverbs&nbspfrom&nbspintransitive&nbspverbs"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "adjective")))}</i>&nbsp"${removeDistinguishingLetter(intransitiveVerbArray[index])}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListIntransVerb[index] === "") {
                                                        derivationListIntransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "verb"))}</i></strong>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"`
                                                } else {
                                                        derivationListIntransVerb[index] = derivationListIntransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "verb"))}</i></strong>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"`;
                                                };
                                        }
                                        etymologyArrayTransVerb[transitiveVerbArray.indexOf(derivedWord)] = intransitiveVerbArray[index];
                                        derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        transitiveVerbArray.push(derivedWord);
                                        transitiveVerb3SArray.push(thirdsg);
                                        transitiveVerbPastArray.push(past);
                                        derivationListTransVerb.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedTransitiveVerbs.push(olderDerivedTerm);
                                                derivedOrInheritedTransVerb.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "adjective"))}</i>&nbsp"${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + intransToTransVerbAffix)}</i>&nbsp"derives&nbsptransitive&nbspverbs&nbspfrom&nbspintransitive&nbspverbs"`;
                                                } else {
                                                        etymologyTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(intransToTransVerbAffix + "A")}-</i>&nbsp"derives&nbsptransitive&nbspverbs&nbspfrom&nbspintransitive&nbspverbs"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)`;
                                                };
                                        } else {
                                                generatedTransitiveVerbs.push(derivedTerm) 
                                                derivedOrInheritedTransVerb.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + intransToTransVerbAffix))}</i>&nbsp"derives&nbsptransitive&nbspverbs&nbspfrom&nbspintransitive&nbspverbs"`;
                                                } else {
                                                        etymologyTransVerb[transitiveVerbArray.indexOf(derivedWord)] = `<i>${spell(soundChange(intransToTransVerbAffix + "A"))}-</i>&nbsp"derives&nbsptransitive&nbspverbs&nbspfrom&nbspintransitive&nbspverbs"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb")))}</i>&nbsp"${intransitiveVerbArray[index]}"`;
                                                }; 
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListIntransVerb[index] === "") {
                                                derivationListIntransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "verb"))}</i></strong>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"`
                                        } else {
                                                derivationListIntransVerb[index] = derivationListIntransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "verb"))}</i></strong>&nbspto&nbsp${removeDistinguishingLetter(derivedWord)}"`;
                                        }; 
                                        };
                                        etymologyArrayTransVerb.push(intransitiveVerbArray[index]);                       
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i> "to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "verb"))}</i> "to&nbsp${removeDistinguishingLetter(derivedWord)}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
                document.getElementById("derivational-affixes").appendChild(li);
                li.appendChild(ul);
        };

        deriveIntransToTransVerb("aim", ["aim&nbspat", "take&nbspaim"], ["aims&nbspat", "takes&nbspaim"], ["aimed&nbspat", "took&nbspaim"]);
        deriveIntransToTransVerb("appear", ["show", "make&nbspan&nbspappearance", "turn&nbspup", "show&nbspup", "arrive&nbspat"], ["shows", "makes&nbspan&nbspappearance", "turns&nbspup", "shows&nbspup", "arrives&nbspat"], ["showed", "made&nbspan&nbspappearance", "turned&nbspup", "showed&nbspup", "arrived&nbspat"]);
        deriveIntransToTransVerb("cackle", "cackle&nbspat", "cackles&nbspat", "cackled&nbspat");
        deriveIntransToTransVerb("come", ["send&nbspfor", "summon", "invoke"], ["sends&nbspfor", "summons", "invokes"], ["sent&nbspfor", "summoned", "invoked"]);
        deriveIntransToTransVerb("complain", ["complain&nbspto", "give&nbspgrievance"], ["complains&nbspto", "gives&nbspgrievance"], ["complained&nbspto", "gave&nbspgrievance"]);
        deriveIntransToTransVerb(["die", "perish"], ["kill", "slaughter", "murderV", "slay"], ["kills", "slaughters", "murders", "slays"], ["killed", "slaughtered", "murdered", "slew"]);
        deriveIntransToTransVerb("dream", "dream&nbspabout", "dreams&nbspabout", "dreamt&nbspabout");
        deriveIntransToTransVerb("fail", "sabotageV", "sabotages", "sabotaged");
        deriveIntransToTransVerb("fall", ["push&nbspover", "chop&nbspdown"], ["pushes&nbspover", "chops&nbspdown"], ["pushed&nbspover", "chopped&nbspdown"]);
        deriveIntransToTransVerb("fart", ["fart&nbspon", "make&nbspfart"], ["farts&nbspon", "makes&nbspfart"], ["farted&nbspon", "made&nbspfart"]);
        deriveIntransToTransVerb("ferment", "ferment", "ferments", "fermented");
        deriveIntransToTransVerb("flee", ["chase", "flee&nbspfrom"], ["chases", "flees&nbspfrom"], ["chased", "fled&nbspfrom"]);
        deriveIntransToTransVerb("float", "float&nbspon", "floats&nbspon", "floated&nbspon");
        deriveIntransToTransVerb("flow", "pour", "pours", "poured");
        deriveIntransToTransVerb("go", ["dismiss", "drive&nbspaway", "exile", "banish"], ["dismisses", "drives&nbspaway", "exiles", "banishes"], ["dismissed", "drove&nbspaway", "exiled", "banished"]);
        deriveIntransToTransVerb("grieve", ["grieve&nbspfor", "mourn&nbspfor"], ["grieves&nbspfor", "mourns&nbspfor"], ["grieved&nbspfor", "mourned&nbspfor"]);
        deriveIntransToTransVerb("grow", ["grow", "raise", "nourish", "encourage"], ["grows", "raises", "nourishes", "encourages"], ["grew", "raised", "nourished", "encouraged"]);
        deriveIntransToTransVerb("hang", "hang&nbspup", "hangs&nbspup", "hung&nbspup");
        deriveIntransToTransVerb("hiss", "hiss&nbspat", "hisses&nbspat", "hissed&nbspat");
        deriveIntransToTransVerb("howlV", "howl&nbspat", "howls&nbspat", "howled&nbspat");
        deriveIntransToTransVerb("hurry", "rush", "rushes", "rushed")
        deriveIntransToTransVerb("lament", ["disturb", "harass", "trouble"], ["disturbs", "harasses", "troubles"], ["disturbed", "harassed", "troubled"]);
        deriveIntransToTransVerb("nod", "nod&nbspat", "nods&nbspat", "nodded&nbspat");
        deriveIntransToTransVerb("play", "play&nbspwith", "plays&nbspwith", "played&nbspwith");
        deriveIntransToTransVerb("pray", "pray&nbspfor", "prays&nbspfor", "prayed&nbspfor");
        deriveIntransToTransVerb(["realise", "understand"], ["teach", "demonstrate", "show"], ["teaches", "demonstrates", "showes"], ["teached", "demonstrated", "showed"]);
        deriveIntransToTransVerb("rejoice", "celebrate", "celebrates", "celebrated");
        deriveIntransToTransVerb("shine", ["shine&nbspupon", "illuminate"], ["shines&nbspupon", "illuminates"], ["shone&nbspupon", "illuminated"]);
        deriveIntransToTransVerb("shit", "shit&nbspon", "shits&nbspon", "shat&nbspon");
        deriveIntransToTransVerb("sit", ["sit&nbspon", "make&nbspsit&nbspdown"], ["sits&nbspon", "makes&nbspsit&nbspdown"], ["sat&nbspon", "made&nbspsit&nbspdown"]);
        deriveIntransToTransVerb("sneak", "sneak&nbspupon", "sneaks&nbspupon", "snuck&nbspupon");
        deriveIntransToTransVerb("sleep", ["sleep&nbspon", "put&nbspto&nbspsleep", "tranquilize"], ["sleeps&nbspon", "puts&nbspto&nbspsleep", "tranquilizes"], ["slept&nbspon", "put&nbspto&nbspsleep", "tranquilized"]);
        deriveIntransToTransVerb("stand", "set&nbspupright", "sets&nbspupright", "set&nbspupright");
        deriveIntransToTransVerb("stink", ["make&nbspstinky", "make&nbspsmelly"], ["makes&nbspstinky", "makes&nbspsmelly"], ["made&nbspstinky", "made&nbspsmelly"]);
        deriveIntransToTransVerb("suffer", ["suffer&nbspfor", "torment", "torture"], ["suffers&nbspfor", "torments", "tortures"], ["suffered&nbspfor", "tormented", "tortured"]);
        deriveIntransToTransVerb("swell", ["increase", "make&nbspswell"], ["increases", "makes&nbspswell"], ["increased", "made&nbspswell"]);
        deriveIntransToTransVerb("urinate", "pee&nbspon", "pees&nbspon", "peed&nbspon");
        deriveIntransToTransVerb("temple", "scare", "scares", "scared");
        deriveIntransToTransVerb("weep", ["weep&nbspfor", "sadden", "distress"], ["weeps&nbspfor", "saddens", "distressed"], ["wept&nbspfor", "saddened", "distressed"]);
        deriveIntransToTransVerb("word", "work&nbspat", "works&nbspat", "worked&nbspat");
        deriveIntransToTransVerb("yawn", ["yawn&nbspat", "be&nbspbored&nbspby"], ["yawns&nbspat", "is&nbspbored&nbspby"], ["yawned&nbspat", "was&nbspbored&nbspby"]);      
};

function NtoADJPrototypical() {
        let li = document.createElement("li");  
        let ul = document.createElement("ul");

        let derivedTerm = "";
        let olderDerivedTerm = "";
        let suffixOrPrefix = "";
        //decides if the affix will be a suffix or prefix
        if(Math.floor(Math.random() * 2) === 0) {
                suffixOrPrefix = "suffix";
                li.innerHTML = `<i>-${spell(soundChange("X" + NtoADJPrototypicalAffix))}</i> "derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`
        } else {
                suffixOrPrefix = "prefix";
                li.innerHTML = `<i>${spell(soundChange(NtoADJPrototypicalAffix + "A"))}-</i> "derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`
        };
        let exampleCounter = 0;
        
        //count noun to adjective
        function deriveCountNtoADJPrototypical(originalWord, derivedWord, comparative) {
                let trueOrFalse = "";
                let index = "";
                let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
                if(typeof originalWord !== "string" && countNounArray.includes(randomWordFromOriginalWordArray)) {
                        trueOrFalse = true;
                        index = countNounArray.indexOf(randomWordFromOriginalWordArray);
                } else if (countNounArray.includes(originalWord)){
                        trueOrFalse = true;
                        index = countNounArray.indexOf(originalWord);
                };
                if(trueOrFalse) {
                        //decides if word will have a derivation
                        if(Math.floor(Math.random() * 3) === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(Math.floor(Math.random() * 3) === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedCountNouns[index] + "A") + soundChange("X" + NtoADJPrototypicalAffix);
                                        olderDerivedTerm = generatedCountNouns[index] + NtoADJPrototypicalAffix;
                                } else {
                                        derivedTerm = soundChange(NtoADJPrototypicalAffix + "A") + soundChange("X" + generatedCountNouns[index]);
                                        olderDerivedTerm = NtoADJPrototypicalAffix + generatedCountNouns[index];
                                };

                                //if there are several possible derived derivedWords, one is chosen at random
                                if(typeof derivedWord !== "string") {
                                        let derivedWordArray = cloneArray(derivedWord);
                                        derivedWord = randomIndexOfArray(derivedWord);
                                        comparative = comparative[derivedWordArray.indexOf(derivedWord)];
                                };
                                
                                
                                if(adjectiveArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[index], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + NtoADJPrototypicalAffix)}</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`;
                                                } else {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(NtoADJPrototypicalAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)`;
                                                };
                                        } else {
                                                generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>&nbsp"${removeDistinguishingLetter(countNounArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + NtoADJPrototypicalAffix))}</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`;
                                                } else {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(NtoADJPrototypicalAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun")))}</i>&nbsp"${removeDistinguishingLetter(countNounArray[index])}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListCountNoun[index] === "") {
                                                        derivationListCountNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`
                                                } else {
                                                        derivationListCountNoun[index] = derivationListCountNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`;
                                                };
                                        };
                                        etymologyArrayADJ[adjectiveArray.indexOf(derivedWord)] = countNounArray[index];
                                        derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        adjectiveArray.push(derivedWord);
                                        comparativeAdjectiveArray.push(comparative)
                                        derivationListAdj.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedAdjectives.push(soundChange(olderDerivedTerm));
                                                derivedOrInheritedADJ.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[index], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + NtoADJPrototypicalAffix)}</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`;
                                                } else {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(NtoADJPrototypicalAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)`;
                                                };
                                        } else {
                                                generatedAdjectives.push(derivedTerm) 
                                                derivedOrInheritedADJ.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyADJ.push(`<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>&nbsp"${countNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + NtoADJPrototypicalAffix))}</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`)
                                                } else {
                                                        etymologyADJ.push(`<i>${spell(soundChange(NtoADJPrototypicalAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[index])]))}</i>&nbsp"${countNounArray[index]}"`)
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListCountNoun[index] === "") {
                                                        derivationListCountNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`
                                                } else {
                                                        derivationListCountNoun[index] = derivationListCountNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`;
                                                };
                                        }
                                        etymologyArrayADJ.push(countNounArray[index]);
                                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                                let exampleLi = document.createElement("li");
                                                exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i> "${countNounArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i> "${removeDistinguishingLetter(derivedWord)}"`;
                                                ul.appendChild(exampleLi);
                                                exampleCounter++;
                                        };
                                        
                                };
                        };
                        document.getElementById("derivational-affixes").appendChild(li);
                        li.appendChild(ul);
                };
        };

        deriveCountNtoADJPrototypical("army", "militaristic", "more&nbspmilitaristic");
        deriveCountNtoADJPrototypical(["attack", "enemy"], "hostile", "more&nbsphostile");
        deriveCountNtoADJPrototypical("audience", ["observant", "keen"], ["more&nbspobservant", "keener"]);
        deriveCountNtoADJPrototypical("auger", "prophetic", "more&nbspprophetic");
        deriveCountNtoADJPrototypical("badger", "mustelid", "more&nbspmustelid");
        deriveCountNtoADJPrototypical("ball", ["spherical", "round"], ["more&nbspspherical", "rounder"]);
        deriveCountNtoADJPrototypical("bead", "beady", "beadier");
        deriveCountNtoADJPrototypical("beard", "bearded", "more&nbspbeaded");
        deriveCountNtoADJPrototypical("belt", "binding", "more&nbspbinding");
        deriveCountNtoADJPrototypical("bird", "avian", "more&nbspavian");
        deriveCountNtoADJPrototypical("birth", "natal", "more&nbspnatal");
        deriveCountNtoADJPrototypical(["boat", "sailor", "ship"], "naval", "more&nbspnaval");
        deriveCountNtoADJPrototypical("body", "corporeal", "more&nbspcorporeal");
        deriveCountNtoADJPrototypical("bone", "bony", "bonier");
        deriveCountNtoADJPrototypical("book", ["literary", "bookish", "relating&nbspto&nbspbooks"], ["more&nbspliterary", "more&nbspbookish", "X"]);
        deriveCountNtoADJPrototypical("border", ["near", "bordering", "adjacent"], ["nearer", "more&nbspbordering", "more&nbspadjacent"]);
        deriveCountNtoADJPrototypical(["bottom", "butt"], "low", "lower");
        deriveCountNtoADJPrototypical("anus", "anal", "more&nbspanal");
        deriveCountNtoADJPrototypical("bowl", ["bowl-shaped", "relating&nbspto&nbspbowls"], "X");
        deriveCountNtoADJPrototypical("boy", "boyish", "more&nbspboyish");
        deriveCountNtoADJPrototypical("branch", ["offshooting", "secondary"], "X");
        deriveCountNtoADJPrototypical("bristle", "bristly", "more&nbspbristly");
        deriveCountNtoADJPrototypical("brother", "fraternal", "more&nbspfraternal");
        deriveCountNtoADJPrototypical(["bull", "cow"], "bovine", "more&nbspbovine");
        deriveCountNtoADJPrototypical("bump", "bumpy", "bumpier");
        deriveCountNtoADJPrototypical("burden", "burdensome", "more&nbspburdensome");
        deriveCountNtoADJPrototypical("cage", "entrapping", "more&nbspentrapping");
        deriveCountNtoADJPrototypical("cat", "feline", "more&nbspfeline");
        deriveCountNtoADJPrototypical("cave", "cavernous", "more&nbspcavernous");
        deriveCountNtoADJPrototypical("change", ["different", "transient", "mobile"], ["more&nbspdifferent", "more&nbsptransient", "more&nbspmobile"]);
        deriveCountNtoADJPrototypical("child", ["childish", "childlike"], ["more&nbspchildish", "more&nbspchildlike"]);
        deriveCountNtoADJPrototypical("chunky", "chunky", "chunkier");
        deriveCountNtoADJPrototypical("circle", "circular", "more&nbspcircular");
        deriveCountNtoADJPrototypical(["clan", "tribe"], "tribal", "more&nbsptribal");
        deriveCountNtoADJPrototypical("cloud", "cloudy", "cloudier");
        deriveCountNtoADJPrototypical("coin", "monetary", "more&nbspmonetary");
        deriveCountNtoADJPrototypical(["crime", "criminal"], "criminalA", "more&nbspcriminal");
        deriveCountNtoADJPrototypical(["crow", "raven"], "corvid", "more&nbspcorvid");
        deriveCountNtoADJPrototypical(["crown", "king", "throne"], ["royal", "regal"], ["more&nbsproyal", "more&nbspregal"]);
        deriveCountNtoADJPrototypical("curve", "curvy", "curvier");
        deriveCountNtoADJPrototypical("custom", "customary", "more&nbspcustomary");
        deriveCountNtoADJPrototypical(["daughter", "son"], "filial", "more&nbspfilial");
        deriveCountNtoADJPrototypical("dawn", ["early", "auroral"], ["earlier", "more&nbspauroral"]);
        deriveCountNtoADJPrototypical("day", ["diurnal", "daily"], ["more&nbspdiurnal", "more&nbspdaily"]);
        deriveCountNtoADJPrototypical("dog", "canine", "more&nbspcanine");
        deriveCountNtoADJPrototypical("door", "liminal", "more&nbspliminal");
        deriveCountNtoADJPrototypical("dream", "dreamy", "dreamier");
        deriveCountNtoADJPrototypical("emotion", "emotional", "more&nbspemotional");
        deriveCountNtoADJPrototypical("table", "tabular", "more&nbsptabular");
        deriveCountNtoADJPrototypical("eye", ["visual", "optical"], ["more&nbspvisual", "more&nbspoptical"]);
        deriveCountNtoADJPrototypical("facial", "facial", "more&nbspfacial");
        deriveCountNtoADJPrototypical("family", "familial", "more&nbspfamilial");
        deriveCountNtoADJPrototypical("father", "paternal", "more&nbsppaternal");
        deriveCountNtoADJPrototypical("festival", "festive", "more&nbspfestive");
        deriveCountNtoADJPrototypical("fire", "firey", "more&nbspfirey");
        deriveCountNtoADJPrototypical("fish", "fishy", "fishier");
        deriveCountNtoADJPrototypical("flower", "floral", "more&nbspfloral");
        deriveCountNtoADJPrototypical("foot", "podal", "more&nbsppodal");
        deriveCountNtoADJPrototypical("foreigner", "foreign", "more&nbspforeign");
        deriveCountNtoADJPrototypical("freeman", "free", "freer");
        deriveCountNtoADJPrototypical("friend", "friendly", "friendlier");
        deriveCountNtoADJPrototypical("genocide", "genocidal", "more&nbspgenocidal");
        deriveCountNtoADJPrototypical("girl", "girly", "girlier");
        deriveCountNtoADJPrototypical("god", ["godly", "divine"], ["godlier", "more&nbspdivine"]);
        deriveCountNtoADJPrototypical("grain", "grainy", "grainier");
        deriveCountNtoADJPrototypical("granule", "granular", "more&nbspgranular");
        deriveCountNtoADJPrototypical("granddaughter", "relating&nbspto&nbspgranddaughters", "X");
        deriveCountNtoADJPrototypical("grandfather", "relating&nbspto&nbspgrandfathers", "X");
        deriveCountNtoADJPrototypical("grandmother", "relating&nbspto&nbspgrandmothers", "X");
        deriveCountNtoADJPrototypical("grandson", "relating&nbspto&nbspgrandsons", "X");
        deriveCountNtoADJPrototypical("groove", "groovy", "groovier");
        deriveCountNtoADJPrototypical("hand", "manual", "more&nbspmanual");
        deriveCountNtoADJPrototypical("head", "relating&nbspto&nbspthe&nbsphead", "X");
        deriveCountNtoADJPrototypical("heart", "cardiac", "X");
        deriveCountNtoADJPrototypical("home", ["homely", "familiar", "domestic"], ["homelier", "more&nbspfamiliar", "more&nbspdomestic"]);
        deriveCountNtoADJPrototypical("horse", "equestrian", "more&nbspequestrian");
        deriveCountNtoADJPrototypical("house", "domestic", "more&nbspdomestic");
        deriveCountNtoADJPrototypical("human", "humane", "more&nbsphumane");
        deriveCountNtoADJPrototypical("husband", "husbandly", "more&nbsphusbandly");
        deriveCountNtoADJPrototypical("island", "insular", "more&nbspinsular");
        deriveCountNtoADJPrototypical("language", "linguistic", "more&nbsplinguistic");
        deriveCountNtoADJPrototypical("larva", "larval", "more&nbsplarval");
        deriveCountNtoADJPrototypical("laugh", "funny", "funnier");
        deriveCountNtoADJPrototypical("lord", ["lordly", "noble"], ["lordlier", "nobler"]);
        deriveCountNtoADJPrototypical("man", ["manly", "masculine"], ["manlier", "more&nbspmasculine"]);
        deriveCountNtoADJPrototypical(["married&nbspcouple", "spouse"], "spousal", "more&nbspspousal");
        deriveCountNtoADJPrototypical("maternal&nbspkinsman", ["cognate", "related&&nbspthe&nbspmaternal&nbspside"], "X");
        deriveCountNtoADJPrototypical("mirror", "reflective", "more&nbspreflective");
        deriveCountNtoADJPrototypical("mistress", "adulterous", "more&nbspadulterous");
        deriveCountNtoADJPrototypical("mother", "maternal", "more&nbspmaternal");
        deriveCountNtoADJPrototypical("mountain", "mountainous", "more&nbspmountainous");
        deriveCountNtoADJPrototypical("mouth", "oral", "more&nbsporal");
        deriveCountNtoADJPrototypical("mushroom", "fungal", "more&nbspfungal");
        deriveCountNtoADJPrototypical("name", "eponymous", "more&nbspeponymous");
        deriveCountNtoADJPrototypical("neighbour", "neighbourly", "more&nbspneighbour");
        deriveCountNtoADJPrototypical("night", "nocturnal", "more&nbspnocturnal");
        deriveCountNtoADJPrototypical("noon", "relating&nbspto&nbspnoon", "relating&nbspto&nbspnoon");
        deriveCountNtoADJPrototypical("autumn", "autumnal", "more&nbspautmnal");
        deriveCountNtoADJPrototypical("nose", "nasal", "more&nbspnasal");
        deriveCountNtoADJPrototypical("oak", "oaken", "more&nbspoaken");
        deriveCountNtoADJPrototypical("oath", "juratory", "more&nbspjuratory");
        deriveCountNtoADJPrototypical(["origin", "base", "foundation"], ["original", "basal", "foundational"], ["more&nbsporiginal", "more&nbspbasal", "more&nbspfoundational"]);
        deriveCountNtoADJPrototypical("pasture", "pastoral", "more&nbsppastoral");
        deriveCountNtoADJPrototypical("paternal&nbspkinsman", "related&nbspon&nbspthe&nbsppaternal&nbspside", "X");
        deriveCountNtoADJPrototypical("penis", "penile", "more&nbsppenile");
        deriveCountNtoADJPrototypical("person", ["humane", "personal"], ["more&nbsphumane", "more&nbsppersonal"]);
        deriveCountNtoADJPrototypical("pig", "porcine", "more&nbspporcine");
        deriveCountNtoADJPrototypical(["place", "location", "area"], ["local", "locative"], ["more&nbsplocal", "more&nbsplocative"]);
        deriveCountNtoADJPrototypical(["poem", "poet"], "poetic", "more&nbsppoetic");
        deriveCountNtoADJPrototypical("priest", ["priestly", "pious", "esoteric"], ["more&nbsppriestly", "&nbsppious", "&nbspesoteric"]);
        deriveCountNtoADJPrototypical("problem", ["troublesome", "problematic"], ["more&nbsptroublesome", "morr&nbspproblematic"]);
        deriveCountNtoADJPrototypical("proverb", "proverbial", "more&nbspproverbial");
        deriveCountNtoADJPrototypical("race", "racial", "more&nbspracial");
        deriveCountNtoADJPrototypical("relation", "relative", "more&nbsprelative");
        deriveCountNtoADJPrototypical("rhythm", "rhythmic", "more&nbsprhythm");
        deriveCountNtoADJPrototypical("right", "lawful", "more&nbsplawful");
        deriveCountNtoADJPrototypical("river", "fluvial", "more&nbspfluvial");
        deriveCountNtoADJPrototypical(["sea", "ocean"], "marine", "more&nbspmarine");
        deriveCountNtoADJPrototypical("season", "seasonal", "more&nbspseasonal");
        deriveCountNtoADJPrototypical(["serpent", "snake"], "serpentine", "more&nbspserpentine");
        deriveCountNtoADJPrototypical("skull", "cranial", "more&nbspcranial");
        deriveCountNtoADJPrototypical("sky", "celestial", "more&nbspcelestial");
        deriveCountNtoADJPrototypical("snare", "ensnaring", "more&nbspensnaring");
        deriveCountNtoADJPrototypical("sound", ["noisy", "loud"], ["noisier", "louder"]);
        deriveCountNtoADJPrototypical("spider", "arachnid", "more&nbsparachnid");
        deriveCountNtoADJPrototypical("spirit", "spiritual", "more&nbspspiritual");
        deriveCountNtoADJPrototypical("star", ["starlike", "astral"], ["more&nbspstarlike", "more&nbspastral"]);
        deriveCountNtoADJPrototypical("sun", "solar", "more&nbspsolar");
        deriveCountNtoADJPrototypical("nebula", "nebular", "more&nbspnebular");
        deriveCountNtoADJPrototypical("moon", "lunar", "more&nbsplunar");
        deriveCountNtoADJPrototypical("testicle", "testicular", "more&nbsptesticular");
        deriveCountNtoADJPrototypical("thorn", "thorny", "thornier");
        deriveCountNtoADJPrototypical(["thought", "mind"], ["mindful", "mental", "thoughtful", "pensive"], ["more&nbspmindful", "more&nbspmental", "more&nbspthoughtful", "more&nbsppensive"]);
        deriveCountNtoADJPrototypical("time", "temporal", "more&nbsptemporal");
        deriveCountNtoADJPrototypical("thing", ["generic", "vague"], ["more&nbspgeneric", "more&nbspvague"]);
        deriveCountNtoADJPrototypical("tooth", "dental", "more&nbspdental");
        deriveCountNtoADJPrototypical("touch", "tactile", "more&nbsptactile");
        deriveCountNtoADJPrototypical("town", "urban", "more&nbspurban");
        deriveCountNtoADJPrototypical("transformation", "transformational", "more&nbsptransformational");
        deriveCountNtoADJPrototypical("transition", "transitional", "more&nbsptransitional");
        deriveCountNtoADJPrototypical("tree", "arboreal", "more&nbsparboreal");
        deriveCountNtoADJPrototypical("tube", ["cylindrical", "tubular"], ["more&nbspcylindrical", "more&nbsptubular"]);
        deriveCountNtoADJPrototypical("tune", "musical", "more&nbspmusical");
        deriveCountNtoADJPrototypical("twilight", "crepuscular", "more&nbspcrepuscular");
        deriveCountNtoADJPrototypical("twin", "dual", "more&nbspdual");
        deriveCountNtoADJPrototypical("uncle", "relating&nbspto&nbspuncles", "X");
        deriveCountNtoADJPrototypical("vagina", "vaginal", "more&nbspvaginal");
        deriveCountNtoADJPrototypical("vegetable", "vegetal", "more&nbspvegetal");
        deriveCountNtoADJPrototypical("village", "rural", "more&nbsprural");
        deriveCountNtoADJPrototypical("voice", "vocal", "more&nbspvocal");
        deriveCountNtoADJPrototypical("wagon", ["relating&nbspto&nbspwagons", "wagonlike"], ["X", "more&nbspwagonlike"]);
        deriveCountNtoADJPrototypical("warrior", "warlike", "more&nbspwarlike");
        deriveCountNtoADJPrototypical("weapon", ["weaponlike", "relating&nbspto&nbspweapons"], ["more&nbspweaponlike", "X"]);
        deriveCountNtoADJPrototypical("wedding", "matrimonial", "more&nbspmatrimonial");
        deriveCountNtoADJPrototypical("wheel", ["wheel-like", "relating&nbspto&nbspwheels"], ["more&nbspwheel-like", "X"]);
        deriveCountNtoADJPrototypical("wife", ["wifelike", "relating&nbspto&nbspwives"], ["more&nbspwifelike", "X"]);
        deriveCountNtoADJPrototypical("winter", "wintery", "more&nbspwintery");
        deriveCountNtoADJPrototypical("summer", "summery", "more&nbspsummery");
        deriveCountNtoADJPrototypical("wolf", "lupine", "more&nbsplupine");
        deriveCountNtoADJPrototypical("woman", ["feminine", "womanly"], ["more&nbspfeminine", "more&nbspwomanly"]);
        deriveCountNtoADJPrototypical("world", ["wordly", "global"], ["more&nbspwordly", "more&nbspglobal"]);
        deriveCountNtoADJPrototypical("year", "annual", "more&nbspannual");
        deriveCountNtoADJPrototypical("master", "dominant", "more&nbspdominant");
        deriveCountNtoADJPrototypical("vein", "veiny", "veinier");
        deriveCountNtoADJPrototypical("idiot", ["idiotic", "stupid"], "more&nbspidiotic, more&nbspstupid");
        deriveCountNtoADJPrototypical("hero", "heroic", "more&nbspheroic");
        deriveCountNtoADJPrototypical("beach", "coastal", "more&nbspcoastal");

        //mass noun to adjective
        function deriveMassNtoADJPrototypical(originalWord, derivedWord, comparative) {
                let trueOrFalse = "";
                let index = "";
                let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
                if(typeof originalWord !== "string" && massNounArray.includes(randomWordFromOriginalWordArray)) {
                        trueOrFalse = true;
                        index = massNounArray.indexOf(randomWordFromOriginalWordArray);
                } else if (massNounArray.includes(originalWord)){
                        trueOrFalse = true;
                        index = massNounArray.indexOf(originalWord);
                };
                if(trueOrFalse) {
                        //decides if word will have a derivation
                        if(Math.floor(Math.random() * 3) === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(Math.floor(Math.random() * 3) === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedMassNouns[index] + "A") + soundChange("X" + NtoADJPrototypicalAffix);
                                        olderDerivedTerm = generatedMassNouns[index] + NtoADJPrototypicalAffix;
                                } else {
                                        derivedTerm = soundChange(NtoADJPrototypicalAffix + "A") + soundChange("X" + generatedMassNouns[index]);
                                        olderDerivedTerm = NtoADJPrototypicalAffix + generatedMassNouns[index];
                                };

                                //if there are several possible derived derivedWords, one is chosen at random
                                if(typeof derivedWord !== "string") {
                                        let derivedWordArray = cloneArray(derivedWord);
                                        derivedWord = randomIndexOfArray(derivedWord);
                                        comparative = comparative[derivedWordArray.indexOf(derivedWord)];
                                };
                                
                                
                                if(adjectiveArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[index], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + NtoADJPrototypicalAffix)}</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`;
                                                } else {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(NtoADJPrototypicalAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)`;
                                                };
                                        } else {
                                                generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>&nbsp"${removeDistinguishingLetter(massNounArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + NtoADJPrototypicalAffix))}</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`;
                                                } else {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(NtoADJPrototypicalAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun")))}</i>&nbsp"${removeDistinguishingLetter(massNounArray[index])}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListMassNoun[index] === "") {
                                                        derivationListMassNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`
                                                } else {
                                                        derivationListMassNoun[index] = derivationListMassNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`;
                                                };
                                        };
                                        etymologyArrayADJ[adjectiveArray.indexOf(derivedWord)] = massNounArray[index];
                                        derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        adjectiveArray.push(derivedWord);
                                        comparativeAdjectiveArray.push(comparative)
                                        derivationListAdj.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedAdjectives.push(soundChange(olderDerivedTerm));
                                                derivedOrInheritedADJ.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[index], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + NtoADJPrototypicalAffix)}</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`;
                                                } else {
                                                        etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(NtoADJPrototypicalAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)`;
                                                };
                                        } else {
                                                generatedAdjectives.push(derivedTerm) 
                                                derivedOrInheritedADJ.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyADJ.push(`<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>&nbsp"${massNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + NtoADJPrototypicalAffix))}</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"`)
                                                } else {
                                                        etymologyADJ.push(`<i>${spell(soundChange(NtoADJPrototypicalAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspdescribing&nbspthe&nbspprototypical&nbspstate&nbspof&nbspthe&nbspnoun"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[index])]))}</i>&nbsp"${massNounArray[index]}"`)
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListMassNoun[index] === "") {
                                                        derivationListMassNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`
                                                } else {
                                                        derivationListMassNoun[index] = derivationListMassNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${removeDistinguishingLetter(derivedWord)}"`;
                                                };
                                        }
                                        etymologyArrayADJ.push(massNounArray[index]);
                                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                                let exampleLi = document.createElement("li");
                                                exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i> "${massNounArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i> "${removeDistinguishingLetter(derivedWord)}"`;
                                                ul.appendChild(exampleLi);
                                                exampleCounter++;
                                        };
                                        
                                };
                        };
                        document.getElementById("derivational-affixes").appendChild(li);
                        li.appendChild(ul);
                };
        };

        deriveMassNtoADJPrototypical("blood", "bloody", "bloodier");
        deriveMassNtoADJPrototypical("prose", "prosaic", "more&nbspprosaic");
        deriveMassNtoADJPrototypical("admiration", "admirable", "more&nbspadmirable");
        deriveMassNtoADJPrototypical("adoration", "adorable", "more&nbspadorable");
        deriveMassNtoADJPrototypical("air", "airy", "arier");
        deriveMassNtoADJPrototypical("ash", "ashy", "ashier");
        deriveMassNtoADJPrototypical("bronze", "bronzeA", "more&nbspbronze");
        deriveMassNtoADJPrototypical("dirt", "dirty", "dirtier");
        deriveMassNtoADJPrototypical("dust", "dusty", "dustier");
        deriveMassNtoADJPrototypical("cream", "creamy", "creamier");
        deriveMassNtoADJPrototypical("confusion", "confusing", "more&nbspconfusing");
        deriveMassNtoADJPrototypical("deception", "deceptive", "more&nbspdeceptive");
        deriveMassNtoADJPrototypical("flint", "flint", "more&nbspflint");
        deriveMassNtoADJPrototypical("fog", "foggy", "foggier");
        deriveMassNtoADJPrototypical("glass", "glassA", "more&nbspglass");
        deriveMassNtoADJPrototypical("gold", "golden", "more&nbspgolden");
        deriveMassNtoADJPrototypical("grace", "graceful", "more&nbspgraceful");
        deriveMassNtoADJPrototypical("grass", "grassy", "grassier");
        deriveMassNtoADJPrototypical("hair", "hairy", "hairier");
        deriveMassNtoADJPrototypical("hostility", "hostile", "more&nbsphostile");
        deriveMassNtoADJPrototypical("hatred", "hateful", "more&nbsphateful");
        deriveMassNtoADJPrototypical("ice", "icy", "icier");
        deriveMassNtoADJPrototypical("iron", "ironA", "more&nbspiron");
        deriveMassNtoADJPrototypical("labour", "labourious", "more&nbsplabourious");
        deriveMassNtoADJPrototypical("leather", "leathery", "more&nbspleathery");
        deriveMassNtoADJPrototypical("love", "lovely", "lovelier");
        deriveMassNtoADJPrototypical("meat", "meaty", "meatier");
        deriveMassNtoADJPrototypical("money", ["economic", "financial"], ["more&nbspeconomic", "more&nbspfinancial"]);
        deriveMassNtoADJPrototypical("milk", ["dairy", "milky"], ["more&nbspdairy", "milkier"]);
        deriveMassNtoADJPrototypical("mud", "muddy", "muddier");
        deriveMassNtoADJPrototypical("music", "musical", "more&nbspmusical");
        deriveMassNtoADJPrototypical("oil", "oily", "more&nbspoily");
        deriveMassNtoADJPrototypical("poison", "poisonous", "more&nbsppoisonous");
        deriveMassNtoADJPrototypical("rain", "rainy", "rainier");
        deriveMassNtoADJPrototypical("revenge", "vengeful", "more&nbspvengeful");
        deriveMassNtoADJPrototypical("salt", "salty", "saltier");
        deriveMassNtoADJPrototypical("sweat", "sweaty", "sweatier");
        deriveMassNtoADJPrototypical("sand", "sandy", "sandier");
        deriveMassNtoADJPrototypical("string", "stringy", "stringier");
        deriveMassNtoADJPrototypical("steam", "steamy", "steamier");
        deriveMassNtoADJPrototypical("truth", ["true", "honest"], ["truer", "more&nbsphonest"]);
        deriveMassNtoADJPrototypical("vigour", "vigourous", "more&nbspvigourous");
        deriveMassNtoADJPrototypical("smoke", "smoky", "smokier");
        deriveMassNtoADJPrototypical("wood", "wooden", "more&nbspwooden");
        deriveMassNtoADJPrototypical("snow", "snowy", "snowier");
        deriveMassNtoADJPrototypical("water", "wet", "wetter");
        deriveMassNtoADJPrototypical("wind", "windy", "windier");
};

//derives adjective derivedWord "-able" from transitive verbs
function transVerbToABleAdjective() {
        let li = document.createElement("li");
        let ul = document.createElement("ul");
    
        let derivedTerm = "";
        let olderDerivedTerm = "";
        let suffixOrPrefix = "";
        if(Math.floor(Math.random() * 2) === 0) {
            suffixOrPrefix = "suffix";
            li.innerHTML = `<i>-${spell(soundChange("X" + transVerbToABleAdjectiveAffix))}</i> "derives&nbspadjectives&nbspof&nbspability&nbspfrom&nbsptransitive&nbspverbs,&nbsp-able"`
        } else {
            suffixOrPrefix = "prefix";
            li.innerHTML = `<i>${spell(soundChange(transVerbToABleAdjectiveAffix + "A"))}-</i> "derives&nbspadjectives&nbspof&nbspability&nbspfrom&nbsptransitive&nbspverbs,&nbsp-able"`
        };
        let exampleCounter = 0;
        function derivetransVerbToABleAdjective(originalWord, derivedWord, comparative) {
                let trueOrFalse = "";
                let index = "";
                let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
                if(typeof derivedWord !== "string") {
                        let derivedWordArray = cloneArray(derivedWord);
                        derivedWord = randomIndexOfArray(derivedWordArray);
                        comparative = comparative[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof originalWord !== "string" && transitiveVerbArray.includes(randomWordFromOriginalWordArray)) {
                        trueOrFalse = true;
                        index = transitiveVerbArray.indexOf(randomWordFromOriginalWordArray);
                        originalWord = randomWordFromOriginalWordArray;
                } else if (transitiveVerbArray.includes(originalWord)){
                        trueOrFalse = true;
                        index = transitiveVerbArray.indexOf(originalWord)
                };
                if(trueOrFalse) {
                        //decides if word will have a derivation
                        if(Math.floor(Math.random() * 3) === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(Math.floor(Math.random() * 3) === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };
        
                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedTransitiveVerbs[index] + "A") + soundChange("X" + transVerbToABleAdjectiveAffix);
                                        olderDerivedTerm = generatedTransitiveVerbs[index] + transVerbToABleAdjectiveAffix;
                                        } else {
                                        derivedTerm = soundChange(transVerbToABleAdjectiveAffix + "A") + soundChange("X" + generatedTransitiveVerbs[index]);
                                        olderDerivedTerm = transVerbToABleAdjectiveAffix + generatedTransitiveVerbs[index];
                                        };
                                        
                                
                                if(adjectiveArray.includes(derivedWord)) {
                                if(derivedInModernOrOld === "old") {
                                        generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = olderDerivedTerm;
                                        derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + transVerbToABleAdjectiveAffix)}</i>&nbsp"derives&nbspadjectives&nbspof&nbspability&nbspfrom&nbsptransitive&nbspverbs,&nbsp-able"`;
                                        } else {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(transVerbToABleAdjectiveAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspof&nbspability&nbspfrom&nbsptransitive&nbspverbs,&nbsp-able"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)`;
                                        };
                                } else {
                                        generatedAdjectives[adjectiveArray.indexOf(derivedWord)] = derivedTerm;
                                        derivedOrInheritedADJ[adjectiveArray.indexOf(derivedWord)] = "derived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + transVerbToABleAdjectiveAffix))}</i>&nbsp"derives&nbspadjectives&nbspof&nbspability&nbspfrom&nbsptransitive&nbspverbs,&nbsp-able"`;
                                        } else {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `<i>${spell(soundChange(transVerbToABleAdjectiveAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspof&nbspability&nbspfrom&nbsptransitive&nbspverbs,&nbsp-able"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"`;
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListTransVerb[index] === "") {
                                                derivationListTransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListTransVerb[index] = derivationListTransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${derivedWord}"`;
                                        };
                                }
                                etymologyArrayADJ[adjectiveArray.indexOf(derivedWord)] = transitiveVerbArray[index];
                                derivationListAdj[adjectiveArray.indexOf(derivedWord)] = "";
                                } else {
                                adjectiveArray.push(derivedWord);
                                comparativeAdjectiveArray.push(comparative)
                                derivationListAdj.push("");
                                if(derivedInModernOrOld === "old") {
                                        generatedAdjectives.push(soundChange(olderDerivedTerm));
                                        derivedOrInheritedADJ.push("inheritedOldDerived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + transVerbToABleAdjectiveAffix)}</i>&nbsp"derives&nbspadjectives&nbspof&nbspability&nbspfrom&nbsptransitive&nbspverbs,&nbsp-able"`;
                                        } else {
                                                etymologyADJ[adjectiveArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(olderDerivedTerm)}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(transVerbToABleAdjectiveAffix + "A")}-</i>&nbsp"derives&nbspadjectives&nbspof&nbspability&nbspfrom&nbsptransitive&nbspverbs,&nbsp-able"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)`;
                                        };
                                } else {
                                        generatedAdjectives.push(derivedTerm) 
                                        derivedOrInheritedADJ.push("derived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyADJ.push(`<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + transVerbToABleAdjectiveAffix))}</i>&nbsp"derives&nbspadjectives&nbspof&nbspability&nbspfrom&nbsptransitive&nbspverbs,&nbsp-able"`)
                                        } else {
                                                etymologyADJ.push(`<i>${spell(soundChange(transVerbToABleAdjectiveAffix + "A"))}-</i>&nbsp"derives&nbspadjectives&nbspof&nbspability&nbspfrom&nbsptransitive&nbspverbs,&nbsp-able"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])]))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"`)
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListTransVerb[index] === "") {
                                                derivationListTransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListTransVerb[index] = derivationListTransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "adjective"))}</i></strong>&nbsp"${derivedWord}"`;
                                        };
                                }
                                etymologyArrayADJ.push(transitiveVerbArray[index]);
                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                let exampleLi = document.createElement("li");
                                exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i> "to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "verb"))}</i> "${derivedWord}"`;
                                ul.appendChild(exampleLi);
                                exampleCounter++;
                        };
                                
                                };
                        };
                };
        };

        derivetransVerbToABleAdjective("accept", "acceptable", "more&nbspacceptable");
        derivetransVerbToABleAdjective("arrange", "arrangeable", "more&nbsparrangeable");
        derivetransVerbToABleAdjective("attain", "attainable", "more&nbspattainable");
        derivetransVerbToABleAdjective("bearV", "bearable", "more&nbspbearable");
        derivetransVerbToABleAdjective("beat", "beatable", "more&nbspbeatable");
        derivetransVerbToABleAdjective("bend", ["bendable", "flexible"], ["more&nbspbendable", "more&nbspflexible"]);
        derivetransVerbToABleAdjective("blind", "blindable", "more&nbspblindable");
        derivetransVerbToABleAdjective("braid", "braidable", "more&nbspbraidable");
        derivetransVerbToABleAdjective("breathe", "breatheable", "more&nbspbreatheable");
        derivetransVerbToABleAdjective("build", "buildable", "more&nbspbuildable");
        derivetransVerbToABleAdjective("burn", "flammable", "more&nbspflammable");
        derivetransVerbToABleAdjective(["buy", "pay"], "for&nbspsale", "X");
        derivetransVerbToABleAdjective("carve", "carvable", "more&nbspcarvable");
        derivetransVerbToABleAdjective("chew", "chewable", "more&nbspchewable");
        derivetransVerbToABleAdjective("collect", "collectable", "more&nbspcollectable");
        derivetransVerbToABleAdjective("cook", "cookable", "more&nbspcookable");
        derivetransVerbToABleAdjective("cost", "expensive", "more&nbspexpensive");
        derivetransVerbToABleAdjective(["craft", "make"], ["craftable", "possible", "potential"], ["more&nbspcraftable", "more&nbsppossible", "more&nbsppotential"]);
        derivetransVerbToABleAdjective("cure", "curable", "more&nbspcurable");
        derivetransVerbToABleAdjective("cut", "cutable", "more&nbspcutable");
        derivetransVerbToABleAdjective(["deceive", "lie", "trick"], ["gullible", "naive", "susceptible", "prone"], ["more&nbspgullible", "more&nbspnaive", "more&nbspsusceptible", "more&nbspprone"]);
        derivetransVerbToABleAdjective("defeat", "defeatable", "more&nbspdefeatable");
        derivetransVerbToABleAdjective(["desire", "want"], "desirable", "more&nbspdesirable");
        derivetransVerbToABleAdjective(["divide", "separate"], ["separable", "divisable"], ["more&nbspseparable", "more&nbspdivisbable"]);
        derivetransVerbToABleAdjective("drink", ["drinkable", "potable"], ["more&nbspdrinkable", "more&nbsppotable"]);
        derivetransVerbToABleAdjective("do", ["doable", "achievable", "possible"], ["more&nbspdoable", "more&nbspachievable", "more&nbsppossible"]);
        derivetransVerbToABleAdjective("dye", "dyeable", "more&nbspdyeable");
        derivetransVerbToABleAdjective("employ", "employable", "more&nbspemployable");
        derivetransVerbToABleAdjective("enjoy", "enjoyable", "more&nbspenjoyable");
        derivetransVerbToABleAdjective("eat", "edible", "more&nbspedible");
        derivetransVerbToABleAdjective("extinguish", "extinguishable", "more&nbspextinguishable");
        derivetransVerbToABleAdjective(["feel", "touch"], ["material", "real", "corporeal", "present", "touchable"], ["more&nbspmaterial", "realer", "more&nbspcorporeal", "more&nbsppresent", "more&nbsptouchable"]);
        derivetransVerbToABleAdjective("forget", "forgettable", "more&nbspforgettable");
        derivetransVerbToABleAdjective("follow", ["traceable", "trackable"], ["more&nbsptraceable", "more&nbsptrackable"]);
        derivetransVerbToABleAdjective(["grip", "grasp", "hold"], ["graspable", "ergonomic", "possible", "potential", "tangible", "real"], ["more&nbspgraspable", "more&nbspergonomic", "more&nbsppossible", "more&nbsppotential", "more&nbsptangible", "realer"]);
        derivetransVerbToABleAdjective("harm", "vulnerable", "more&nbspvulnerable");
        derivetransVerbToABleAdjective(["hate", "despise"], "despicable", "more&nbspdespicable");
        derivetransVerbToABleAdjective("hear", "audible", "more&nbspaudible");
        derivetransVerbToABleAdjective("hide", "inconspicuous", "more&nbspinconspicuous");
        derivetransVerbToABleAdjective("honourV", "honourable", "more&nbsphonourable");
        derivetransVerbToABleAdjective("instruct", "instructable", "more&nbspinstructable");
        derivetransVerbToABleAdjective("invoke", "invokable", "more&nbspinvokable");
        derivetransVerbToABleAdjective("know", "knowable", "more&nbspknowable");
        derivetransVerbToABleAdjective("leap", ["vaultable", "surmountable"], ["more&nbspvaultable", "more&nbspsurmountable"]);
        derivetransVerbToABleAdjective("like", "likable", "more&nbsplikable");
        derivetransVerbToABleAdjective("loveV", "lovable", "more&nbsplovable");
        derivetransVerbToABleAdjective("marry", ["unwed", "single"], "X");
        derivetransVerbToABleAdjective("notice", "noticeable", "more&nbspnoticeable");
        derivetransVerbToABleAdjective("paint", "paintable", "more&nbsppaintable");
        derivetransVerbToABleAdjective("praise", "laudable", "more&nbsplaudable");
        derivetransVerbToABleAdjective("perceive", "perceivable", "more&nbspperceivable");
        derivetransVerbToABleAdjective("pierce", "pierceable", "more&nbsppierceable");
        derivetransVerbToABleAdjective("prefer", "preferable", "more&nbsppreferable");
        derivetransVerbToABleAdjective("protect", ["defensible", "protectable"], ["more&nbspdefensible", "more&nbspprotectable"]);
        derivetransVerbToABleAdjective("read", ["legible", "readable"], ["more&nbsplegible", "more&nbspreadable"]);
        derivetransVerbToABleAdjective("remember", "memorable", "more&nbspmemorable");
        derivetransVerbToABleAdjective("respect", "respectable", "more&nbsprespectable");
        derivetransVerbToABleAdjective("ride", "mountable", "more&nbspmountable");
        derivetransVerbToABleAdjective("say", ["known", "rumoured", "possible"], ["more&nbspknown", "more&nbsprumoured", "more&nbsppossible"]);
        derivetransVerbToABleAdjective("see", "visible", "more&nbspvisible");
        derivetransVerbToABleAdjective("smear", "viscous", "more&nbspviscous");
        derivetransVerbToABleAdjective("steal", ["easy&nbspto&nbspsteal", "unprotected"], ["easier&nbspto&nbspsteal", "more&nbspunprotected"]);
        derivetransVerbToABleAdjective("suit", "suitable", "more&nbspsuitable");
        derivetransVerbToABleAdjective("depend", "dependable", "more&nbspdependable");
        derivetransVerbToABleAdjective("surpass", "surpassible", "more&nbspsurpassible");
        derivetransVerbToABleAdjective("teach", "teachable", "more&nbspteachable");
        derivetransVerbToABleAdjective("throw", "throwable", "more&nbspthrowable");
        derivetransVerbToABleAdjective("trust", ["trustable", "trustworthy", "honest"], ["more&nbsptrustable", "more&nbsptrustworthy", "more&nbsphonest"]);
        derivetransVerbToABleAdjective("use", "usable", "more&nbspusable");
        derivetransVerbToABleAdjective("write", ["writable", "can&nbspbe&nbspwritten&nbspon", "describable"], ["more&nbspwritable", "X", "more&nbspdescribable"]);
        derivetransVerbToABleAdjective(["stab", "kill", "murderV", "slaughter"], "mortal", "more&nbspmortal");

        document.getElementById("derivational-affixes").appendChild(li);
        li.appendChild(ul);
};

//derives abstract nouns from any part of speech
function abstractNoun() {
        let li = document.createElement("li");
        let ul = document.createElement("ul");
    
        let derivedTerm = "";
        let olderDerivedTerm = "";
        let suffixOrPrefix = "";
        if(Math.floor(Math.random() * 2) === 0) {
            suffixOrPrefix = "suffix";
            li.innerHTML = `<i>-${spell(soundChange("X" + abstractAffix))}</i> "derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`
        } else {
            suffixOrPrefix = "prefix";
            li.innerHTML = `<i>${spell(soundChange(abstractAffix + "A"))}-</i> "derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`
        };
        let exampleCounter = 0;

         //count noun to count noun
         function deriveabstractNoun(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
                let index = countNounArray.indexOf(originalWord);
                if(countNounArray.includes(originalWord)) {
                        //decides if word will have a derivation
                        if(Math.floor(Math.random() * 2) === 1) {
                                if(typeof derivedWord !== "string") {
                                        let derivedWordArray = cloneArray(derivedWord);
                                        derivedWord = randomIndexOfArray(derivedWord);
                                        if(typeof plural !== "string") {
                                                plural = plural[derivedWordArray.indexOf(derivedWord)];
                                        };
                                        if(typeof divineProfane !== "string") {
                                                divineProfane = divineProfane[derivedWordArray.indexOf(derivedWord)];
                                        };
                                }

                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(Math.floor(Math.random() * 4) === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedCountNouns[index] + "A") + soundChange("X" + abstractAffix);
                                        olderDerivedTerm = generatedCountNouns[index] + abstractAffix;
                                } else {
                                        derivedTerm = soundChange(abstractAffix + "A") + soundChange("X" + generatedCountNouns[index]);
                                        olderDerivedTerm = abstractAffix  + generatedCountNouns[index];
                                };
                                if(countNounArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[index], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>&nbsp"${countNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun")))}</i>&nbsp"${countNounArray[index]}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListCountNoun[index] === "") {
                                                        derivationListCountNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListCountNoun[index] = derivationListCountNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = countNounArray[index];
                                        derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        countNounArray.push(derivedWord);
                                        countNounArrayPlural.push(plural);
                                        activePassive.push(activePass);
                                        animInan.push(animateInimate);
                                        divineNonDivine.push(divineProfane);
                                        humanAnimalInan.push(humanAnimal);
                                        mascFemNeut.push(masculineFeminineNeuter);
                                        mascFem.push(masculineFeminine);
                                        naturalArtificial.push(naturalArt);
                                        animacyClassifierArray.push(animacy);
                                        shapeClassifierArray.push(shape);
                                        shortGenericClassifierArray.push(shortGeneric);
                                        derivationListCountNoun.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns.push(olderDerivedTerm);
                                                derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[index], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun"))}</i>&nbsp"${countNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns.push(derivedTerm) 
                                                derivedOrInheritedCountNoun.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i>&nbsp"${countNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[index])], "noun")))}</i>&nbsp"${countNounArray[index]}"`;
                                                }; 
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListCountNoun[index] === "") {
                                                derivationListCountNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListCountNoun[index] = derivationListCountNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        }; 
                                        };
                                        etymologyArrayCountNoun.push(countNounArray[index]);                       
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[index], "noun")))}</i> "${countNounArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
        };

        deriveabstractNoun("army", "military", "militaries", "active", "inan", "profane", "human", "masculine2", "masculine1", "artificial", "man", "shapeless", "tool");
        deriveabstractNoun(["band", "group"], ["brotherhood", "comradery"], ["brotherhoods", "X"], "active", "inan", "profane", "human", "masculine2", "masculine1", "natural", "man", "shapeless", "tool");
        deriveabstractNoun("bed","sleep", "X", "passive", "inan", "profane", "secondinanimate", "masculine2", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("bedroom","privacy", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("blade", "danger", "dangers", "active", "inan", "profane", "secondinanimate", "masculine2", "masculine1", "natural", "inedible", "pointed", "natural-inanimate");
        deriveabstractNoun("boat","sea-travel", "X", "passive", "inan", "profane", "secondinanimate", "feminine2", "feminine1", "natural", "inedible", "shapeless", "tool");
        deriveabstractNoun("body", "anatomy", "X", "active", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "man", "shapeless", "natural-inanimate");
        deriveabstractNoun("book","literacy", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "artificial", "inedible", "shapeless", "tool");
        deriveabstractNoun("boy","boyhood", "X", "passive", "inan", "profane", "secondinanimate", "masculine2", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("brain","intelligence", "X", "active", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("branch","divergence", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun(["breath", "creature"],"life", "lives", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("brother","brotherhood", "brotherhoods", "passive", "inan", "divine", "secondinanimate", "masculine2", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("building",["shelter", "safety"], ["shelters", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("bull","virility", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun(["cage", "enclosure"],"captivity", "X", "passive", "inan", "divine", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("chariot","speed", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("child","childhood", "childhoods", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("cloak","concealment", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun(["club", "sword", "spear"],"war", "wars", "active", "inan", "divine", "secondinanimate", "masculine1", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("coin",["economy", "finance", "wealth"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", "shapeless", "tool");
        deriveabstractNoun(["confluence", "yoke"], ["convergence", "agreement", "meeting", "merger"], ["convergences", "agreements", "meetings", "mergers"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("craftsman","craftsmanship", "X", "passive", "inan", "divine", "secondinanimate", "masculine2", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("criminal",["criminality", "crime"], ["X", "crimes"], "passive", "inan", "profane", "secondinanimate", "masculine2", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun(["crowd", "group"],"consensus", "consensuses", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun(["crown", "king"],"monarchy", "monarchies", "active", "inan", "divine", "secondinanimate", "masculine2", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun(["dawn", "root"],["origin", "beginning", "start", "emergence"], ["origins", "beginnings", "starts", "emergences"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("dent","transgression", "transgressions", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("dice", ["fate", "chance"], ["X", "chances"], "passive", "inan", ["divine", "profane"], "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("door", "transition", "transitions", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("ear", ["attention", "hearing"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("embrace", ["adoption", "acceptance"], ["adoptions", "acceptances"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("enemy", "hostility", "hostilities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("eye", ["vision", "sight", "view", "insight"], ["X", "sights", "views", "insights"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("face", "identity", "identities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("father", ["fatherhood", "paternity"], "X", "passive", "inan", "profane", "secondinanimate", "masculine2", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("festival", "festivity", "festivities", "passive", "inan", "profane", "secondinanimate", "masculine2", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("fist", "conflict", "conflicts", "passive", "inan", "profane", "secondinanimate", "masculine2", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("floor", "basis", "X", "passive", "inan", "profane", "secondinanimate", "masculine2", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("fly", ["disease", "plague"], ["diseases", "plagues"], "active", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("foreign", "foreignness", "X", "active", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("forest", "tree-coverage", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "tree", "shapeless", "natural-inanimate");
        deriveabstractNoun("fort", "fortification", "fortifications", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("freeman", "freedom", "X", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("friend", ["friendship", "friendliness"], ["friendships", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("gate", "restriction", "restriction", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("gift", "generosity", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("girl", "girlhood", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("god", ["divinity", "holiness", "religion"], ["X", "X", "religions"], "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("good&nbspdeed", "kindness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("grave", "death", "deaths", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("guest", "hospitality", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("hand", "use", "uses", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("head", ["centrality", "thought", "wisdom"], ["X", "thoughts", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("heart", ["love", "life", "vigour"], ["X", "lives", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("hearth", "home", "homes", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("hill", ["hilliness", "landscape"], ["X", "landscapes"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("home", ["sense&nbspof&nbspbelonging", "origin", "safety", "comfort", "familiarity"], ["X", "origins", "X", "X", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("hood", "anonymity", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("hostage", "exchange&nbspof&nbsphostages", "exchanges&nbspof&nbsphostages", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("house", ["domestic&nbsplife", "domestic&nbspmatter"], ["X", "domestic&nbspmatters"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun(["hug", "kiss"], ["affection", "romance", "love"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("human", "humanity", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("island", ["insular&nbspnature", "isolation"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun(["language", "mouth"], ["speech", "use&nbspof&nbsplanguage", "gossip", "rumour"], ["X", "X", "X", "rumours"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("laugh", "humour", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("lord", ["lordship", "noble&nbspestate", "noble&nbsptitle"], ["X", "noble&nbspestates", "noble&nbsptitles"], "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("man", ["masculinity", "virility"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("married&nbspcouple", "marriage", "marriages", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("master", "dominance", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("mirror", "reflectiveness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("mistress", "adultery", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("mother", "motherhood", "X", "passive", "inan", "profane", "secondinanimate", "feminine2", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("name", ["fame", "glory"], "X", "passive", "inan", "divine", "secondinanimate", "masculine2", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("nose", "sense&nbspof&nbspsmell", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("notch", "reckoning", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("pasture", "ability&nbspof&nbspland&nbspto&nbspbe&nbspgrazed&nbspupon", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun(["path", "thread"], "fate", "X", "passive", "inan", "divine", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("poem", ["poetry", "widsom"], "X", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("priest", "priesthood", "X", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("servant", "servitude", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("shadow", "mystery", "mysteries", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("spell", "magic", "X", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("star", "astronomy", "X", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("stranger", "uncertainty", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("temple", ["religion", "worship"], "X", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("tongue", "taste", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("twin", "duality", "dualities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("village", "rusticness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("window", ["clarity", "insight"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("wolf", "madness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("woman", ["womanhood", "femininity"], "X", "passive", "inan", "profane", "secondinanimate", "feminine2", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("word", ["choice&nbspof&nbspwords", "wording", "vocabulary"], ["X", "X", "vocabularies"], "passive", "inan", "profane", "secondinanimate", "feminine2", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("casulty", "death&nbsptoll", "death&nbsptolls", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("guide", "guidance", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("idiot", ["idiocy", "stupidity"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("honest&nbspperson", ["honesty", "sincerity"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("muscle", ["strength", "muscularity"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNoun("liver", ["vitality", "vigour"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

         //mass noun to count noun
         function deriveabstractNounFromMass(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
                let index = massNounArray.indexOf(originalWord);
                //decides if word will have a derivation
                if(Math.floor(Math.random() * 3) === 1) {
                        if(typeof derivedWord !== "string") {
                                let derivedWordArray = cloneArray(derivedWord);
                                derivedWord = randomIndexOfArray(derivedWord);
                                if(typeof plural !== "string") {
                                        plural = plural[derivedWordArray.indexOf(derivedWord)];
                                };
                                if(typeof divineProfane !== "string") {
                                        divineProfane = divineProfane[derivedWordArray.indexOf(derivedWord)];
                                };
                        }

                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(Math.floor(Math.random() * 4) === 1) {
                                derivedInModernOrOld = "old";
                        } else {
                                derivedInModernOrOld = "modern";
                        };

                        if(suffixOrPrefix === "suffix") {
                                derivedTerm = soundChange(generatedMassNouns[index] + "A") + soundChange("X" + abstractAffix);
                                olderDerivedTerm = generatedMassNouns[index] + abstractAffix;
                        } else {
                                derivedTerm = soundChange(abstractAffix + "A") + soundChange("X" + generatedMassNouns[index]);
                                olderDerivedTerm = abstractAffix  + generatedMassNouns[index];
                        };

                        if(countNounArray.includes(derivedWord)) {
                                if(derivedInModernOrOld === "old") {
                                        generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                        derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[index], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)`;
                                        };
                                } else {
                                        generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                        derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>&nbsp"${massNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun")))}</i>&nbsp"${massNounArray[index]}"`;
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListMassNoun[index] === "") {
                                                derivationListMassNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListMassNoun[index] = derivationListMassNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        };
                                }
                                etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = massNounArray[index];
                                derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                        } else {
                                countNounArray.push(derivedWord);
                                countNounArrayPlural.push(plural);
                                activePassive.push(activePass);
                                animInan.push(animateInimate);
                                divineNonDivine.push(divineProfane);
                                humanAnimalInan.push(humanAnimal);
                                mascFemNeut.push(masculineFeminineNeuter);
                                mascFem.push(masculineFeminine);
                                naturalArtificial.push(naturalArt);
                                animacyClassifierArray.push(animacy);
                                shapeClassifierArray.push(shape);
                                shortGenericClassifierArray.push(shortGeneric);
                                derivationListCountNoun.push("");
                                if(derivedInModernOrOld === "old") {
                                        generatedCountNouns.push(olderDerivedTerm);
                                        derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[index], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun"))}</i>&nbsp"${massNounArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>)`;
                                        };
                                } else {
                                        generatedCountNouns.push(derivedTerm) 
                                        derivedOrInheritedCountNoun.push("derived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i>&nbsp"${massNounArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[index])], "noun")))}</i>&nbsp"${massNounArray[index]}"`;
                                        }; 
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                if(derivationListMassNoun[index] === "") {
                                        derivationListMassNoun[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                } else {
                                        derivationListMassNoun[index] = derivationListMassNoun[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                }; 
                                };
                                etymologyArrayCountNoun.push(massNounArray[index]);                       
                        };
                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                let exampleLi = document.createElement("li");
                                exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[index], "noun")))}</i> "${massNounArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                ul.appendChild(exampleLi);
                                exampleCounter++;
                        };
                };
        };

        deriveabstractNounFromMass("blood", ["bloodshed", "relation"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromMass("cloth", "clothing", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", "shapeless", "tool");
        deriveabstractNounFromMass("food", "nourishment", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "edible", "shapeless", "natural-inanimate");
        deriveabstractNounFromMass("honey", "sweetness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "edible", "shapeless", "natural-inanimate");
        deriveabstractNounFromMass("milk", "lactose&nbsptolerance", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");

         //adjective to count noun
         function deriveabstractNounFromAdj(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
                let index = adjectiveArray.indexOf(originalWord);
                //decides if word will have a derivation
                if(Math.floor(Math.random() * 3) === 1 && adjectiveArray.includes(originalWord)) {
                        if(typeof derivedWord !== "string") {
                                let derivedWordArray = cloneArray(derivedWord);
                                derivedWord = randomIndexOfArray(derivedWord);
                                if(typeof plural !== "string") {
                                        plural = plural[derivedWordArray.indexOf(derivedWord)];
                                };
                                if(typeof divineProfane !== "string") {
                                        divineProfane = divineProfane[derivedWordArray.indexOf(derivedWord)];
                                };
                        }

                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(Math.floor(Math.random() * 4) === 1) {
                                derivedInModernOrOld = "old";
                        } else {
                                derivedInModernOrOld = "modern";
                        };

                        if(suffixOrPrefix === "suffix") {
                                derivedTerm = soundChange(generatedAdjectives[index] + "A") + soundChange("X" + abstractAffix);
                                olderDerivedTerm = generatedAdjectives[index] + abstractAffix;
                        } else {
                                derivedTerm = soundChange(abstractAffix + "A") + soundChange("X" + generatedAdjectives[index]);
                                olderDerivedTerm = abstractAffix  + generatedAdjectives[index];
                        };

                        if(countNounArray.includes(derivedWord)) {
                                if(derivedInModernOrOld === "old") {
                                        generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                        derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedAdjectives[index], "adjective"))}</i>&nbsp"${adjectiveArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedAdjectives[adjectiveArray.indexOf(adjectiveArray[index])], "adjective"))}</i>&nbsp"${adjectiveArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i>)`;
                                        };
                                } else {
                                        generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                        derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i>&nbsp"${adjectiveArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[adjectiveArray.indexOf(adjectiveArray[index])], "adjective")))}</i>&nbsp"${adjectiveArray[index]}"`;
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListAdj[index] === "") {
                                                derivationListAdj[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListAdj[index] = derivationListAdj[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        };
                                }
                                etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = adjectiveArray[index];
                                derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                        } else {
                                countNounArray.push(derivedWord);
                                countNounArrayPlural.push(plural);
                                activePassive.push(activePass);
                                animInan.push(animateInimate);
                                divineNonDivine.push(divineProfane);
                                humanAnimalInan.push(humanAnimal);
                                mascFemNeut.push(masculineFeminineNeuter);
                                mascFem.push(masculineFeminine);
                                naturalArtificial.push(naturalArt);
                                animacyClassifierArray.push(animacy);
                                shapeClassifierArray.push(shape);
                                shortGenericClassifierArray.push(shortGeneric);
                                derivationListCountNoun.push("");
                                if(derivedInModernOrOld === "old") {
                                        generatedCountNouns.push(olderDerivedTerm);
                                        derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedAdjectives[index], "adjective"))}</i>&nbsp"${adjectiveArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${derivedWord}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedAdjectives[adjectiveArray.indexOf(adjectiveArray[index])], "adjective"))}</i>&nbsp"${adjectiveArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i>)`;
                                        };
                                } else {
                                        generatedCountNouns.push(derivedTerm) 
                                        derivedOrInheritedCountNoun.push("derived");
                                        if(suffixOrPrefix === "suffix") {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i>&nbsp"${adjectiveArray[index]}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                        } else {
                                                etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[adjectiveArray.indexOf(adjectiveArray[index])], "adjective")))}</i>&nbsp"${adjectiveArray[index]}"`;
                                        }; 
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                if(derivationListAdj[index] === "") {
                                        derivationListAdj[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                } else {
                                        derivationListAdj[index] = derivationListAdj[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                }; 
                                };
                                etymologyArrayCountNoun.push(adjectiveArray[index]);                       
                        };
                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                let exampleLi = document.createElement("li");
                                exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedAdjectives[index], "adjective")))}</i> "${adjectiveArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                ul.appendChild(exampleLi);
                                exampleCounter++;
                        };
                };
        };

        deriveabstractNounFromAdj("able", "ability", "abilities", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("clear", ["clarity", "transparency", "honesty"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("accepting", ["acceptance", "tolerance"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("abundant", "abundance", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["afraid", "scared"], ["fear", "terror"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("alive", "life", "lives", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("methodical", "method", "methods", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("accusatory", "accusation", "accusations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("loyal", "loyalty", "loyalties", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("loud", "noise", "noises", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("selective", ["pickiness", "selection"], ["X", "selection"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("agressive", "aggression", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("musical", "music", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["murderous", "homicidal"], ["blood-thirst", "desire&nbspto&nbspkill"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["adherent", "sticky"], ["adherence", "devotion", "loyalty"], ["X", "devotions", "loyalties"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("educated", ["education", "level&nbspof&nbsplearning"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("hospitable", "hospitality", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("theftuous", "theft", "thefts", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("greedy", "greed", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("excellent", "excellence", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("jealous", "jealousy", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("divisive", "division", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("intrusive", "intrusion", "intrusions", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("interruptive", "interruption", "interruptions", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("observant", "observance", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("abrasive", "abrasion", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("forgetful", ["forgetfulness", "memory&nbsploss", "dementia"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("generous", "generosity", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("honourable", "honourability", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("instructive", "instructiveness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("alone", "loneliness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("well-versed", "mastery", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["smart", "Intelligent"], "intelligence", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["absent", "away", "gone"], "absence", "absences", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["angry", "aggressive"], "anger", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["authoritive", "commanding"], "authority", "authorities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["reminiscing", "memorable"], "memory", "memories", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["complementive", "exalting"], ["compliment", "praise"], ["compliments", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["perceptive", "observant"], "perception", "perceptions", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["addictive", "sticky"], "addiction", "addictions", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("impulsive", "impulsion", "impulsions", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("pleasant", "pleasantness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("biased", "bias", "biases", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("defensive", "defensiveness", "biases", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("offensive", "offence", "offences", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("affectionate", "affection", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("caring", "care", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("wed", ["marriage", "wedding"], ["marriages", "weddings"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["awake", "alert"], "alertness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["bad", "evil"], "evil", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["bad", "evil"], "evil", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["bald", "bare"], "baldness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("wide", "width", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("wonderful", "joy", "joys", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("beautiful", "beauty", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("useful", "usefulness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("young", "youth", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("visible", "visibility", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("weak", "weakness", "weaknesses", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("violent", "violence", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["big", "tall"], ["size", "height"], ["sizes", "heights"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("blind", "blindness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["bold", "brave"], ["boldness", "bravery", "courage"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["confident", "bold"], "confidence", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["correct", "true"], "truth", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("damp", "dampness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("soft", "softness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("unhealthy",["sickness", "illness"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("tired","exhaustion", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("tough", ["toughness", "endurance", "durability"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("stiff", ["stiffness", "rigidity"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("strong", "strength", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("suitable", "suitability", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("sure", "certainty", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("stinky", "bad&nbspodour", "bad&nbspodours", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("tasty", "taste", "tastes", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("dark", "darkness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("near", "proximity", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("smooth", "smoothness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("sharp", "sharpness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("other", "distinction", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("right", "validity", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("old", "age", "ages", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("real", "reality", "realities", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["rich", "wealthy"], "wealth", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("rough", "roughness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("rude", ["rudeness", "rude&nbspbehaviour"], ["rudeness", "rude&nbspbehaviours"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("polluted", "pollution", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("powerful", "power", "powers", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("quiet", "silence", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("ready", "preparation", "preparation", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("pure", "purity", "purities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("dead", "death", "deaths", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("nourishing", "nourishment", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("new", "innovation", "innovations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("deaf", "deafness", "innovations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("noble", "noblity", "nobility", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("normal", "normalcy", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("moist", "moisture", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("mild", "mediocracy", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("dear", ["love", "affection"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("deep", "depth", "depths", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("long", "length", "lengths", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("difficult", "difficulty", "difficulties", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("dumb", "stupidity", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("intense", "intensity", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("kind", "kindness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("hard", "hardness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("healthy", "health", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("high", "height", "heights", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("hot", ["heat", "temperature"], ["X", "temperatures"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("sleepy", ["sleepiness", "tiredness"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("erect", "erection", "erections", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("book-loving", "love&nbspof&nbspbooks", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("demarcated", "demarcation", "demarcations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("ancestral", "ancestry", "ancestries", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("dangerous", "danger", "dangers", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("clothed", "modesty", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("corrupting", "corruption", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("bored", "boredom", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("hungry", "hunger", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("impure", ["impurity", "pollution"], ["impurities", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("fast", "speed", "speeds", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["wrong", "incorrect"], "error", "errors", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("bright", "brightness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("sad", "sadness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("woeful", "woe", "woes", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("in&nbspdespair", "despair", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("similar", "similarity", "similarites", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("mortal", "mortality", "mortalities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("devout", "devotion", "devotions", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("pious", "piety", "X", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("suspicious", "suspicion", "suspicions", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("accountable", "accountability", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("calculating", "calculation", "calculations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("holy", "holiness", "X", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("hostile", "hostility", "hostilities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("flexible", "flexibility", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("bearable", "tolerance", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("flammable", "flammability", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("desirable", "desirability", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("decayed", "decay", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("expensive", "expense", "expenses", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("unwed", "virginity", "virginities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("memorable", "memorability", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("trustworthy", "trustworthiness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("viscous", "viscosity", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("throwable", "range", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("usable", "usability", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("suitable", "suitability", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("dependable", "dependability", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("employable", "employability", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("edible", "edibility", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("tangible", "tangibility", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("possible", "possibility", "possibilities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("empty", "emptiness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("stressed", "stress", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("cloudy", "cloudiness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("celestial", "divinity", "divinities", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("fat", "obesity", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["cattle-owning", "pastoral"], "pastoralism", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("oily", "oiliness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("smoky", "smokiness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("fertile", "fertility", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("curious", "curiosity", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("inquisative", "inquisition", "inquisitions", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("nonsensical", "nonsense", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("irritated", "irritation", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("firm", "firmness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("flat", "flatness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("free", "freedom", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("happy", "happiness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("fresh", "freshness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("full", "satiety", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("funny", "humour", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("funA", "fun", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("good", ["goodness", "benefit", "upside"], ["X", "benefits", "upsides"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("gracious", ["graciousness", "grace"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["accurate", "precision"], ["accuracy", "precision"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("armed", "bearing&nbspof&nbspweapons", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("sea-faring", "sea-travel", "sea-travels", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("windy", "windiness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("selective", ["choice", "selection"], ["choices", "selections"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("aggressive", "aggression", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("loyal", "loyalty", "loyalties", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("honourable", "honourability", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["love", "affectionate"], "affection", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("energetic", ["life", "energy", "power"], ["lives", "energies", "powers"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["educated", "learned"], ["education", "knowledge"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("manipulative", "manipulation", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("lofty", ["loftiness", "divinity"], "X", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("industrious", "production", "production", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("adventurous", ["eagerness", "adventure"], ["X", "adventures"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["bearded", "penile"], ["manliness", "masculinity", "maturity"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("fraternal", "brotherhood", "brotherhoods", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("different", "difference", "differences", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("transient", "transience", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("mobile", "mobility", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["royal", "regal"], "royalty", "royalties", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("dreamy", "delusion", "delusions", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("paternal", "paternity", "paternities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("friendly", ["fiendliness", "manners", "decorum"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("genocidal", "desire&nbspfor&nbspgenocide", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("domestic", "domesic&nbsplife", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("insular", "isolation", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("lordly", "nobility", "nobilities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("maternal", "maternity", "maternities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("adulterous", "adultery", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("reflective", "reflectiveness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["juratory", "lawful"], ["lawfulness", "law"], ["X", "laws"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("original", "originality", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("spiritual", "spirituality", "spiritualities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["starlike", "astral"], "astronomy", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("thorny", "thorniness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("vague", "vagueness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("dual", "duality", "dualities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("rural", "rural&nbsplife", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("matrimonial", "matrimony", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["feminine", "womanly"], ["femininity", "womanhood"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("wordly", "worldliness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("heroic", "heroism", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj(["idiotic", "stupid"], ["idiocy", "stupidity"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("dominant", "dominance", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("bloody", ["bloodshed", "conflict", "war"], ["bloodsheds", "conflicts", "wars"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("dirty", "filth", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("confusing", "confusion", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("golden", ["glory", "wealth"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("salty", "saltiness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("wet", "moisture", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdj("economic", "economy", "economies", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "artificial", "inedible", "shapeless", "natural-inanimate");

        //transitive verb to count noun
        function deriveabstractNounFromTransVerb(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {

                let randomNumber = Math.floor(Math.random() * 3);
                let trueOrFalse = "";
                let derivedWordArray = "";
                let index = transitiveVerbArray.indexOf(originalWord);
                let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
                if(typeof derivedWord !== "string") {
                for(let i = 0; i < derivedWord.length; i++) {
                                if (oldCountNounArray.includes(derivedWord[i])) {
                                        derivedWord = derivedWord;
                                        randomNumber = 1;
                                        trueOrFalse = true
                                } else {
                                        derivedWordArray = cloneArray(derivedWord);
                                        derivedWord = randomIndexOfArray(derivedWordArray);
                                        break;
                                };
                };
                } else {
                        if (oldCountNounArray.includes(derivedWord)) {
                                randomNumber = 1;
                                trueOrFalse = true
                        }     
                }
                if(typeof shape !== "string") {
                        shape = shape[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof masculineFeminine !== "string") {
                        masculineFeminine = masculineFeminine[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof plural !== "string") {
                        plural = plural[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof originalWord !== "string" && transitiveVerbArray.includes(randomWordFromOriginalWordArray)) {
                        trueOrFalse = true;
                        index = transitiveVerbArray.indexOf(randomWordFromOriginalWordArray);
                } else if (transitiveVerbArray.includes(originalWord)){
                        trueOrFalse = true;
                        index = transitiveVerbArray.indexOf(originalWord);
                };
                if(trueOrFalse) {
                        //decides if word will have a derivation
                        if(randomNumber === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(randomNumber === 2) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedTransitiveVerbs[index] + "A") + soundChange("X" + abstractAffix);
                                        olderDerivedTerm = generatedTransitiveVerbs[index] + abstractAffix;
                                } else {
                                        derivedTerm = soundChange(abstractAffix + "A") + soundChange("X" + generatedTransitiveVerbs[index]);
                                        olderDerivedTerm = abstractAffix + generatedTransitiveVerbs[index];
                                };

                                if(countNounArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "verb"))}</i>&nbsp"${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListTransVerb[index] === "") {
                                                        derivationListTransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListTransVerb[index] = derivationListTransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = transitiveVerbArray[index];
                                        derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        countNounArray.push(derivedWord);
                                        countNounArrayPlural.push(plural);
                                        activePassive.push(activePass);
                                        animInan.push(animateInimate);
                                        divineNonDivine.push(divineProfane);
                                        humanAnimalInan.push(humanAnimal);
                                        mascFemNeut.push(masculineFeminineNeuter);
                                        mascFem.push(masculineFeminine);
                                        naturalArtificial.push(naturalArt);
                                        animacyClassifierArray.push(animacy);
                                        shapeClassifierArray.push(shape);
                                        shortGenericClassifierArray.push(shortGeneric);
                                        derivationListCountNoun.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns.push(olderDerivedTerm);
                                                derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "noun"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns.push(derivedTerm) 
                                                derivedOrInheritedCountNoun.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}"`;
                                                }; 
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListTransVerb[index] === "") {
                                                derivationListTransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListTransVerb[index] = derivationListTransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        }; 
                                        etymologyArrayCountNoun.push(transitiveVerbArray[index]);                       
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedTransitiveVerbs[index], "verb")))}</i> "to&nbsp${removeDistinguishingLetter(transitiveVerbArray[index])}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
                document.getElementById("derivational-affixes").appendChild(li);
                li.appendChild(ul);
        };

        deriveabstractNounFromTransVerb("accept", "acceptance", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("arrange", ["arrangement", "order", "plan"], ["arrangements", "orders", "plans"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["bearV", "carry"], ["support", "weight", "meaning", "endurance", "pregnancy", "victory"], ["arrangements", "orders", "plans", "X", "pregnancies", "victories"], "passive", "inan", "profane", "secondinanimate", "neuter", ["masculine1", "masculine1", "masculine1", "masculine1", "feminine", "masculine1"], "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("beg", ["poverty", "pittance"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("bend", ["shift", "change", "curve", "addition", "return", "surprise"], ["shifts", "changes", "curves", "additions", "returns", "surprises"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("bestow", "bestowment", "bestowments", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["bind", "join", "tie"], ["binding", "predicament", "plight", "oath", "contract", "law", "promise", "fate"], ["bindings", "predicaments", "plights", "oaths", "contracts", "laws", "promises", "fates"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("bite", ["incursion", "attack"], ["incursions", "attacks"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("blame", "accusation", "accusations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("break", ["destruction", "chaos"], ["destructions", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("breathe", ["life", "vitality", "energy", "life&nbspforce"], ["lives", "X", "energies", "life&nbspforces"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("build", "construction", "constructions", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["buy", "exchange"], ["commerce", "trade", "exchange", "trade"], ["X", "trades"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("catch", ["trap", "trick", "ploy", "invasion", "imprisonment", "complication"], ["traps", "tricks", "ploys", "invasions", "imprisonments", "complications"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("choose", ["choice", "selection"], ["choices", "selections"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("collect", "collection", "collections", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("compel", "urge", "urges", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("compensate", "compensation", "compensations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("cook", ["cooking", "cooking&nbspskills"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["cover", "hide", "decieve"], ["concealment", "coverage", "deception"], ["concealments", "coverages", "deceptions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("craft", ["craft", "skill", "talent"], ["crafts", "skills", "talents"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["cut", "split", "tear", "divide"], ["division", "partition", "severance", "exile", "banishment", "shame", "reduction", "divergence"], ["divisions", "partitions", "severances", "exiles", "banishments", "X", "reductions", "divergences"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("deem", "judgement", "judgements", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("defeat", ["defeat", "invasion", "conquest"], ["defeats", "invasions", "conquests"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("defile", ["defilement", "corruption"], ["defilements", "corruptions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("desire", ["desire", "lust", "libido"], ["desires", "X", "libidos"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("destroy", "destruction", "destructions", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("distribute", "distribution", "distributions", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("distribute", "distribution", "distributions", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["do", "make"], ["deed", "action", "act", "event"], ["deeds", "actions", "acts", "events"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("drive", ["direction", "thrust", "power", "influence"], ["directions", "thrusts", "powers", "influences"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("eat", ["consumption", "assimilation", "absorption", "conquest"], ["consumptions", "assimilations", "absorptions", "conquests"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("employ", "employment", "employments", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("enjoy", ["enjoyment", "fun"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["extinguish", "stop"], ["annihilation", "genocide", "end"], ["annihilations", "genocides", "ends"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["feel", "touchV"], ["sensation", "touch"], ["sensations", "touches"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("fightV", ["fight", "conflict", "strife"], ["fights", "conflicts", "strifes"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("flay", "skinning", "skinnings", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("follow", ["investigation", "loyalty"], ["investigations", "loyalties"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("forget", ["forgetfulness", "memory&nbsploss", "dementia"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["gather", "consolidate"], ["gathering", "consolidation"], ["gatherings", "consolidations"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["gird", "strangle", "grasp", "grip", "hold", "take"], ["tightness", "grip", "consolidation", "control", "comprehension", "understanding", "captivity","invasion", "capture"], ["X", "grips", "consolidations", "X", "X", "X", "X","invasions", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["give", "offer"], "generosity", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("grind", ["stress", "erosion", "harassment"], ["X", "erosions", "harassments"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("growl", ["hostility", "warning"], ["hostilities", "warnings"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("harvestV", ["harvest", "autumn"], ["harvests", "autumns"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("hateV", "hate", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["have", "keep"], ["possession", "control", "ownership", "retension"], ["possessions", "X", "X", "retensions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("hear", ["hearing", "attention", "fame", "renown", "agreement", "curiosity", "understanding", "comprehension", "rumour", "knowledge", "thought", "memory", "recognition"], ["X", "X", "X", "X", "agreements", "X", "understandings", "X", "rumour", "X", "thoughts", "memories", "recognitions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("helpV", ["help", "aid", "support"], ["X", "aids", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("hew", ["clearing&nbspof&nbspvegetation", "path", "road"], ["clearings&nbspof&nbspvegetation", "paths", "roads"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["hit", "kick", "strikeV"], ["strike", "attack", "provocation", "aggression"], ["strikes", "attacks", "provocations", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("honourV", "honour", "honours", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("hum", "tune", "tunes", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("hunt", "hunting", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("instruct", "instruction", "instructions", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("insultV", ["offense", "insult"], ["offenses", "insults"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("invoke", "invocation", "invocations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("invite", "invitiation", "invitiations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("know", ["knowledge", "information"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("lack", ["absence", "deficiency"], ["absences", "deficiencies"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["leap", "springV"], ["rise", "increase", "improvement"], ["rises", "increases", "improvements"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["learn", "teach"], "education", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("leave", ["exit", "banishment"], ["exits", "banishments"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["lick", "tasteV"], ["taste", "lesson"], ["tastes", "lessons"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("make", ["creation", "construction"], ["creations", "constructions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("loveV", "love", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("marry", ["marriage", "wedding"], ["marriages", "weddings"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("meet", ["meeting", "confluence"], ["meetings", "confluences"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("need", "requirement", "requirements", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("notice", "attention", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("paint", "painting", "paintings", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("praiseV", ["praise", "appraisal", "panegyric"], ["praises", "appraisals", "panegyrics"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("pay", "payment", "payments", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("percieve", ["perception", "sense", "instinct", "emotion"], ["perceptions", "senses", "instincts", "emotions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("persuade", ["persuasion", "influence"], ["persuasions", "influences"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("peirce", ["conception", "impregnation", "infiltration"], ["conceptions", "impregnations", "infiltrations"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("pin", "constraint", "constraints", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("pitch", "founding", "foundings", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("please", ["pleasure", "entertainment", "delight", "gratification", "vice", "welcoming", "reception"], ["pleasures", "entertainments", "delights", "gratifications", "vices", "welcomings", "receptions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("pour", ["libation", "downpour", "flow"],["libations", "downpours", "flows"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("prefer", ["preference", "bias"],["preferences", "biases"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("propel", ["propulsion", "energy", "encouragement"],["propulsions", "energies", "encouragements"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("protect", ["protection", "defence"],["protections", "defences"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("pull", ["temptation", "influence", "control", "guidance", "direction", "assimilation"], ["temptations", "influences", "X", "guidances", "directions", "assimilations"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("push", ["reversion", "avoidance", "disgust", "movement", "energy", "encouragement"], ["reversions", "avoidances", "X", "movements", "energies", "encouragements"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("put", ["placement", "place"], ["placements", "places"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("rake", ["consolidation", "gathering", "collection", "tax"], ["consolidations", "gatherings", "collections", "taxes"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("read", ["literacy", "literature"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("refresh", ["renewal", "invigoration"], ["renewals", "invigorations"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("remember", "memory", "memories", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("respectV", "respect", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("revel", ["celebration", "festival", "holiday"], ["celebrations", "festivals", "holidays"], "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("rewardV", ["reward", "gift"], ["rewards", "gifts"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("ride", ["journey", "travel", "expedition"], ["journeys", "travels", "expeditions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("roast", "cooking&nbspfire", "cooking&nbspfires", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("rowV", "sea-travel", "sea-travels", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["rub", "smear"], ["influence", "coating"], ["influences", "coatings"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("run", ["exile", "desertion"], ["exiles", "desertions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("sacrificeV", "sacrifice", "sacrifices", "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("say", ["phrase", "speech", "language"], ["phrases", "speeches", "languages"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("see", ["sight", "vision", "view"], ["sights", "visions", "views"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("sell", "sale", "sales", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("seperate", ["separation", "division"], ["separations", "divisions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["shake", "stir"], ["disruption", "chaos"],  ["disruptions", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("shameV", ["shame", "disgrace"],  ["X", "disgraces"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("shave", ["shearing", "reduction", "degeneration"],  ["shearings", "reduction", "degenerations"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("showV", ["display", "show", "ritual"], ["displays", "shows", "rituals"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("sing", "song", "songs", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("smash", ["destruction", "shattering", "decimation", "disintegration"], ["destructions", "shatterings", "decimations", "disintegrations"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("sprout", "gemination", "geminations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("squeeze", ["pressure", "weight"], ["pressures", "weights"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("stab", "murder", "murders", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("steal", "theft", "thefts", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("stickV", ["adhesion", "connection", "loyalty"], ["adhesions", "connections", "loyalties"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("suit", "comfort", "comforts", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("support", ["aid", "help", "support"], ["aids", "X", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("surround", ["horizon", "understanding"], ["horizons", "understandings"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("swallow", ["gulp", "drink"], ["gulps", "drinks"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("thank", ["appreciation", "gratefulness"], ["appreciations", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("throw", ["range", "distance"], ["ranges", "distances"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("trustV", ["trust", "cohesion"], ["X", "cohesions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("twist", ["surprise", "lie", "revelation", "rotation", "revolution", "contortion", "distortion", "disfigurement", "deformation", "sprain", "injury", "deception", "misquotation", "slander", "oddity", "defect", "imperfection", "weakness", "flaw", "development", "turn&nbspof&nbspevents", "history"], ["surprises", "lies", "revelations", "rotations", "revolutions", "contortions", "distortions", "disfigurements", "deformations", "sprains", "injuries", "deceptions", "misquotations", "X", "oddities", "defects", "imperfections", "weaknesses", "flaws", "developments", "turns&nbspof&nbspevents", "histories"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("useV", ["use", "usefulness"], ["uses", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("wash", "hygeine", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("weave", ["weaving", "clothing", "fate", "lore", "history", "wisdom", "poetry"], ["X", "X", "X", "X", "histories", "X", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("wipe", ["erasure", "eradication", "genocide", "annihilation", "stroke"], ["erasures", "eradications", "genocides", "annihilations", "strokes"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("write", ["text", "literature"], ["texts", "literatures"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("enable", "enabling", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("multiply", "multiplication", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("invigorate", "invigoration", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("isolate", "isolation", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("infuriate", "infuriation", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("worsen", ["worsening", "decline", "degredation", "degeneration", "fall"], ["X", "declines", "degredations", "degenerations", "falls"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("reveal", ["revelation", "confession"], ["revelations", "confessions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("corrupt", "corruption", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("adore", "adoration", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("chill", "cooling", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("correct", ["correctness", "correction", "improvement"], ["X", "corrections", "improvements"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("darken", ["darkening", "nightfall", "twilight"], ["X", "X", "twilights"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("stupefy", ["stupification", "astonishment"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("entangle", "entanglement", "entanglements", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("emptyV", ["emptying", "emptiness"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("vilify", "villification", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("accelerate", "acceleration", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("fertilise", ["fertilisation", "fertility"], ["fertilisations", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("ensure", "insurance", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("impregnate", "impregnation", "impregnations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("verify", "verification", "verifications", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("confirm", "confirmation", "confirmations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("infect", "infection", "infections", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("contaminate", "contamination", "contaminations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("press", "pressure", "pressures", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("improve", "improvement", "improvement", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["cleave", "split&nbspin&nbsphalf", "divide&nbspinto&nbsptwo"], ["division", "segregation"], ["divisions", "segregations"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("intensify", "intensification", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("ennoble", "nobility", "nobilities", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("normalise", ["normalisation", "familiarity"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("nourish", "nourishment", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb(["weather", "erode"], ["erosion", "weathering"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("empower", "power", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("sicken", ["illness", "disease", "sickness"], ["illnesses", "diseases", "sicknesses"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("enrich", "enrichment", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("whiten", "whitening", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("toughen", "toughening", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("delayV", "delayment", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("adjust", "adjustment", "adjustments", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("customise", "customisation", "customisations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("murderV", "murder", "murders", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("fart&nbspon", "disrespect", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("sabotageV", "sabotage", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("celebrate", ["celebration", "festival", "holiday"], ["celebrations", "festivals", "holidays"], "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromTransVerb("set&nbspupright", "erection", "erections", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

        //intransitive verb to count noun
        function deriveabstractNounFromIntransVerb(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
                
                let trueOrFalse = "";
                let derivedWordArray = "";
                let index = intransitiveVerbArray.indexOf(originalWord);
                let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
                if(typeof derivedWord !== "string") {
                        derivedWordArray = cloneArray(derivedWord);
                        derivedWord = randomIndexOfArray(derivedWordArray);
                };
                if(typeof shape !== "string") {
                        shape = shape[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof plural !== "string") {
                        plural = plural[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof originalWord !== "string" && intransitiveVerbArray.includes(randomWordFromOriginalWordArray)) {
                        trueOrFalse = true;
                        index = intransitiveVerbArray.indexOf(randomWordFromOriginalWordArray);
                } else if (intransitiveVerbArray.includes(originalWord)){
                        trueOrFalse = true;
                        index = intransitiveVerbArray.indexOf(originalWord);
                };
                if(trueOrFalse) {
                        //decides if word will have a derivation
                        if(Math.floor(Math.random() * 3) === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(Math.floor(Math.random() * 3) === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedIntransitiveVerbs[index] + "A") + soundChange("X" + abstractAffix);
                                        olderDerivedTerm = generatedIntransitiveVerbs[index] + abstractAffix;
                                } else {
                                        derivedTerm = soundChange(abstractAffix + "A") + soundChange("X" + generatedIntransitiveVerbs[index]);
                                        olderDerivedTerm = abstractAffix + generatedIntransitiveVerbs[index];
                                };

                                if(countNounArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb"))}</i>&nbsp"${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListIntransVerb[index] === "") {
                                                        derivationListIntransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListIntransVerb[index] = derivationListIntransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = intransitiveVerbArray[index];
                                        derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        countNounArray.push(derivedWord);
                                        countNounArrayPlural.push(plural);
                                        activePassive.push(activePass);
                                        animInan.push(animateInimate);
                                        divineNonDivine.push(divineProfane);
                                        humanAnimalInan.push(humanAnimal);
                                        mascFemNeut.push(masculineFeminineNeuter);
                                        mascFem.push(masculineFeminine);
                                        naturalArtificial.push(naturalArt);
                                        animacyClassifierArray.push(animacy);
                                        shapeClassifierArray.push(shape);
                                        shortGenericClassifierArray.push(shortGeneric);
                                        derivationListCountNoun.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns.push(olderDerivedTerm);
                                                derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb"))}</i>&nbsp"${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb"))}</i>&nbsp"to&nbsp${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns.push(derivedTerm) 
                                                derivedOrInheritedCountNoun.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"`;
                                                }; 
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListIntransVerb[index] === "") {
                                                derivationListIntransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListIntransVerb[index] = derivationListIntransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        }; 
                                        etymologyArrayCountNoun.push(transitiveVerbArray[index]);                       
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i> "to&nbsp${intransitiveVerbArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
        };

        deriveabstractNounFromIntransVerb("aim", ["target", "aiming", "goal", "intention"], ["targets", "X", "goals", "intentions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("appear", ["appearance", "arrival", "presence"], ["appearances", "arrivals", "presences"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("ask", ["question", "curiosity"], ["questions", "curiosities"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("babble", "nonsense", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("belch", "emission", "emissions", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("benefitV", ["benefit", "upside", "advantage", "improvement"], ["benefits", "upsides", "advantages", "improvements"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("bleat", ["call", "animal&nbspsound"], ["calls", "animal&nbspsounds"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("bloom", "spring", "springs", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("buzz", "commotion", "commotions", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("come", ["arrival", "conclusion"], ["arrivals", "conclusions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("complain", "complaint", "complaints", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("crawl", ["slow&nbspapproach", "gradient"], ["slow&nbspapproaches", "gradients"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("declare", "declaration", "declarations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb(["die", "perish"], "death", "deaths", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb(["dive", "fall"], ["intrusion", "degeneration", "fall", "decline"], ["intrusions", "degenerations", "falls", "declines"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("dreamV", ["dream", "prophesy"], ["dreams", "prophesies"], "passive", "inan", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("drip", "leakage", "leakages", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("fail", "failure", "failures", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("fartV", ["fart", "flatulence"], ["farts", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("fermentV", "fermentation", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("flee", ["retreat", "exile"], ["retreats", "exiles"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("float", "buoyancy", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("flyV", "flight", "flights", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("flowV", ["flow", "libation", "downpour", "transferral", "exchange"], ["flows", "libations", "downpours", "transferrals", "exchanges"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb(["gleam", "glow", "shine"], ["flash", "spark", "glimmer"], ["flashes", "sparks", "glimmers"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb(["go", "travelV"], ["travel", "adventure"], ["travels", "adventures"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("graze", "pasture", "pastures", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("grow", "growth", "growths", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb(["restV", "sleepV"], ["sleep", "rest"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("grieve", "grief", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("mean", ["intention", "meaning"], ["intentions", "meanings"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("hurry", "rush", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("nod", ["suggestion", "agreement"], ["suggestions", "agreements"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("overflow", "flood", "floods", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("rot", "decay", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("move", ["movement", "life", "action", "deed"], ["movements", "lives", "actions", "deeds"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("live", "life", "lives", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("rejoice", ["joy", "celebration"], ["joys", "celebrations"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("reckon", ["reckoning", "arithmetic", "mathematics", "investigation", "judgement", "description", "understanding", "comprehension"], ["X", "X", "X", "investigations", "judgements", "descriptions", "understandings", "comprehensions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("pray", "prayer", "prayers", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("speak", ["speech", "language", "sentence", "word", "phrase", "saying"], ["speeches", "languages", "sentences", "words", "phrases", "sayings"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("realise", "realisation", "realisations", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("sneak", "stealth", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("play", ["game", "fun"], ["games", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("impel", ["impulsion", "instinct", "emotion"], ["impulsions", "instincts", "emotions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("lament", ["lamentation", "sorrow", "sadness"], ["lamentations", "sorrows", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("shitV", ["shit", "excrement", "toilet"], ["X", "X", "toilets"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("sit", ["wait", "delay", "placement", "place", "stance", "opinion"], ["X", "delays", "placements", "places", "stances", "opinions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("stand", ["stance", "place", "area", "posture", "rank"], ["stances", "places", "areas", "postures", "ranks"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("step", ["approach", "method"], ["approaches", "methods"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("suffer", ["suffering", "pain"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("suggest", ["suggestion", "reccomendation", "advice"], ["suggestions", "reccomendations", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("stink", ["bad&nbspsmell"], ["bad&nbspsmells"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("swell", ["swelling", "surge", "rise", "increase"], ["X", "surges", "rises", "increases"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("tame", ["taming", "domestication"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("think", ["thought", "mind", "idea"], ["thoughts", "minds", "ideas"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("tremble", ["fear", "quake", "chaos", "thunder"], ["fears", "quakes", "X", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("subdue", ["subduction", "servitude"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("understand", ["comprehension", "understanding", "knowledge"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("venture", ["journey", "adventure", "expedition", "exploration", "research"], ["journeys", "adventures", "expeditions", "explorations", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("wake", ["reality", "learning"], ["realities", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("weep", ["weeping", "sorry", "sadness", "lamentation", "woe", "depression", "grief"], ["X", "X", "X", "lamentations", "woes", "depression", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("wishV", ["wish", "desire"], ["wishes", "desires"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromIntransVerb("workV", "labour", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        
        //adposition to count noun
        function deriveabstractNounFromAdpo(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
                
                let trueOrFalse = "";
                let derivedWordArray = "";
                let index = adpositionArray.indexOf(originalWord);
                let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
                if(typeof derivedWord !== "string") {
                        derivedWordArray = cloneArray(derivedWord);
                        derivedWord = randomIndexOfArray(derivedWordArray);
                };
                if(typeof shape !== "string") {
                        shape = shape[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof plural !== "string") {
                        plural = plural[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof originalWord !== "string" && adpositionArray.includes(randomWordFromOriginalWordArray)) {
                        trueOrFalse = true;
                        index = adpositionArray.indexOf(randomWordFromOriginalWordArray);
                } else if (adpositionArray.includes(originalWord)){
                        trueOrFalse = true;
                        index = adpositionArray.indexOf(originalWord);
                };
                if(trueOrFalse) {
                        //decides if word will have a derivation
                        if(Math.floor(Math.random() * 3) === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(Math.floor(Math.random() * 3) === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedAdpositions[index] + "A") + soundChange("X" + abstractAffix);
                                        olderDerivedTerm = generatedAdpositions[index] + abstractAffix;
                                } else {
                                        derivedTerm = soundChange(abstractAffix + "A") + soundChange("X" + generatedAdpositions[index]);
                                        olderDerivedTerm = abstractAffix + generatedAdpositions[index];
                                };

                                if(countNounArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedAdpositions[index], "adpo"))}</i>&nbsp"${adpositionArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdpositions[index], "adpo")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedAdpositions[adpositionArray.indexOf(adpositionArray[index])], "adpo"))}</i>&nbsp"${adpositionArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdpositions[index], "adpo")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedAdpositions[index], "adpo")))}</i>&nbsp"${removeDistinguishingLetter(adpositionArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdpositions[adpositionArray.indexOf(adpositionArray[index])], "adpo")))}</i>&nbsp"${removeDistinguishingLetter(adpositionArray[index])}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListAdpo[index] === "") {
                                                        derivationListAdpo[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListAdpo[index] = derivationListAdpo[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = adpositionArray[index];
                                        derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        countNounArray.push(derivedWord);
                                        countNounArrayPlural.push(plural);
                                        activePassive.push(activePass);
                                        animInan.push(animateInimate);
                                        divineNonDivine.push(divineProfane);
                                        humanAnimalInan.push(humanAnimal);
                                        mascFemNeut.push(masculineFeminineNeuter);
                                        mascFem.push(masculineFeminine);
                                        naturalArtificial.push(naturalArt);
                                        animacyClassifierArray.push(animacy);
                                        shapeClassifierArray.push(shape);
                                        shortGenericClassifierArray.push(shortGeneric);
                                        derivationListCountNoun.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns.push(olderDerivedTerm);
                                                derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedAdpositions[index], "adpo"))}</i>&nbsp"${adpositionArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdpositions[index], "adpo")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedAdpositions[adpositionArray.indexOf(adpositionArray[index])], "adpo"))}</i>&nbsp"${adpositionArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdpositions[index], "adpo")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns.push(derivedTerm) 
                                                derivedOrInheritedCountNoun.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedAdpositions[index], "adpo")))}</i>&nbsp"${removeDistinguishingLetter(adpositionArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdpositions[adpositionArray.indexOf(adpositionArray[index])], "adpo")))}</i>&nbsp"${removeDistinguishingLetter(adpositionArray[index])}"`;
                                                }; 
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListAdpo[index] === "") {
                                                derivationListAdpo[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListAdpo[index] = derivationListAdpo[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        }; 
                                        etymologyArrayCountNoun.push(adpositionArray[index]);                       
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedAdpositions[index], "adpo")))}</i> "${adpositionArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
        };

        deriveabstractNounFromAdpo(["with", "by"], ["companionship", "company", "relationship", "marriage"], ["X", "X", "relationships", "marriages"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

        deriveabstractNounFromAdpo(["in", "inside"], ["intrusion", "instinct", "intimacy", "introspection", "insight"], ["intrusions", "instincts", "X", "introspections", "insights"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

        deriveabstractNounFromAdpo("from", "origin", "origins", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

        deriveabstractNounFromAdpo("out", ["expulsion", "entry", "exclusion", "outside", "abroad", "unfamiliarity", "exoticness"], ["expulsions", "entries", "exclusions", "X", "X", "X", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

        deriveabstractNounFromAdpo("back", ["return", "regression", "lag", "delay"], ["returns", "regressions", "lags", "delays"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

        deriveabstractNounFromAdpo("away", ["absence", "aloofness", "distance", "distraction"], ["absences", "X", "distances", "distractions"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

        deriveabstractNounFromAdpo("to", ["direction", "directness"], ["directions", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

        deriveabstractNounFromAdpo("behind", "backwardness", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

        deriveabstractNounFromAdpo("without", ["lack", "deficiency", "stupidity", "poverty"], ["lack", "deficiencies", "X", "X"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

        //quantifier to count noun
        function deriveabstractNounFromQuantifier(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
                
                let trueOrFalse = "";
                let derivedWordArray = "";
                let index = quantifierArray.indexOf(originalWord);
                let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
                if(typeof derivedWord !== "string") {
                        derivedWordArray = cloneArray(derivedWord);
                        derivedWord = randomIndexOfArray(derivedWordArray);
                };
                if(typeof shape !== "string") {
                        shape = shape[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof plural !== "string") {
                        plural = plural[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof originalWord !== "string" && quantifierArray.includes(randomWordFromOriginalWordArray)) {
                        trueOrFalse = true;
                        index = quantifierArray.indexOf(randomWordFromOriginalWordArray);
                } else if (quantifierArray.includes(originalWord)){
                        trueOrFalse = true;
                        index = quantifierArray.indexOf(originalWord);
                };
                if(trueOrFalse) {
                        //decides if word will have a derivation
                        if(Math.floor(Math.random() * 3) === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(Math.floor(Math.random() * 3) === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedQuantifiers[index] + "A") + soundChange("X" + abstractAffix);
                                        olderDerivedTerm = generatedQuantifiers[index] + abstractAffix;
                                } else {
                                        derivedTerm = soundChange(abstractAffix + "A") + soundChange("X" + generatedQuantifiers[index]);
                                        olderDerivedTerm = abstractAffix + generatedQuantifiers[index];
                                };

                                if(countNounArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedQuantifiers[index], "adpo"))}</i>&nbsp"${quantifierArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedQuantifiers[index], "det")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedQuantifiers[quantifierArray.indexOf(quantifierArray[index])], "det"))}</i>&nbsp"${quantifierArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedQuantifiers[index], "det")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedQuantifiers[index], "det")))}</i>&nbsp"${removeDistinguishingLetter(quantifierArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedQuantifiers[quantifierArray.indexOf(quantifierArray[index])], "det")))}</i>&nbsp"${removeDistinguishingLetter(quantifierArray[index])}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListQuantfier[index] === "") {
                                                        derivationListQuantfier[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListQuantfier[index] = derivationListQuantfier[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = quantifierArray[index];
                                        derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        countNounArray.push(derivedWord);
                                        countNounArrayPlural.push(plural);
                                        activePassive.push(activePass);
                                        animInan.push(animateInimate);
                                        divineNonDivine.push(divineProfane);
                                        humanAnimalInan.push(humanAnimal);
                                        mascFemNeut.push(masculineFeminineNeuter);
                                        mascFem.push(masculineFeminine);
                                        naturalArtificial.push(naturalArt);
                                        animacyClassifierArray.push(animacy);
                                        shapeClassifierArray.push(shape);
                                        shortGenericClassifierArray.push(shortGeneric);
                                        derivationListCountNoun.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns.push(olderDerivedTerm);
                                                derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedQuantifiers[index], "det"))}</i>&nbsp"${quantifierArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedQuantifiers[index], "det")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedQuantifiers[quantifierArray.indexOf(quantifierArray[index])], "det"))}</i>&nbsp"${quantifierArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedQuantifiers[index], "det")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns.push(derivedTerm) 
                                                derivedOrInheritedCountNoun.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedQuantifiers[index], "det")))}</i>&nbsp"${removeDistinguishingLetter(quantifierArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedQuantifiers[quantifierArray.indexOf(quantifierArray[index])], "det")))}</i>&nbsp"${removeDistinguishingLetter(quantifierArray[index])}"`;
                                                }; 
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListQuantfier[index] === "") {
                                                derivationListQuantfier[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListQuantfier[index] = derivationListQuantfier[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        }; 
                                        etymologyArrayCountNoun.push(quantifierArray[index]);                       
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedQuantifiers[index], "det")))}</i> "${quantifierArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
        };

        deriveabstractNounFromQuantifier("few", "paucacity", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromQuantifier(["a&nbsplot&nbspof", "too&nbspmuch"], ["excessiveness", "gluttony"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromQuantifier("not&nbspenough", "need", "needs", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromQuantifier("enough", "satiation", "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

        //intensifier to count noun
        function deriveabstractNounFromIntensifier(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
                
                let trueOrFalse = "";
                let derivedWordArray = "";
                let index = intensifierArray.indexOf(originalWord);
                let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
                if(typeof derivedWord !== "string") {
                        derivedWordArray = cloneArray(derivedWord);
                        derivedWord = randomIndexOfArray(derivedWordArray);
                };
                if(typeof shape !== "string") {
                        shape = shape[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof plural !== "string") {
                        plural = plural[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof originalWord !== "string" && intensifierArray.includes(randomWordFromOriginalWordArray)) {
                        trueOrFalse = true;
                        index = intensifierArray.indexOf(randomWordFromOriginalWordArray);
                } else if (intensifierArray.includes(originalWord)){
                        trueOrFalse = true;
                        index = intensifierArray.indexOf(originalWord);
                };
                if(trueOrFalse) {
                        //decides if word will have a derivation
                        if(Math.floor(Math.random() * 3) === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(Math.floor(Math.random() * 3) === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedIntensifiers[index] + "A") + soundChange("X" + abstractAffix);
                                        olderDerivedTerm = generatedIntensifiers[index] + abstractAffix;
                                } else {
                                        derivedTerm = soundChange(abstractAffix + "A") + soundChange("X" + generatedIntensifiers[index]);
                                        olderDerivedTerm = abstractAffix + generatedIntensifiers[index];
                                };

                                if(countNounArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntensifiers[index], "intensifier"))}</i>&nbsp"${intensifierArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntensifiers[index], "intensifier")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntensifiers[intensifierArray.indexOf(intensifierArray[index])], "intensifier"))}</i>&nbsp"${intensifierArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntensifiers[index], "intensifier")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntensifiers[index], "intensifier")))}</i>&nbsp"${removeDistinguishingLetter(intensifierArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntensifiers[intensifierArray.indexOf(intensifierArray[index])], "intensifier")))}</i>&nbsp"${removeDistinguishingLetter(intensifierArray[index])}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListIntensifier[index] === "") {
                                                        derivationListIntensifier[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListIntensifier[index] = derivationListIntensifier[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = intensifierArray[index];
                                        derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        countNounArray.push(derivedWord);
                                        countNounArrayPlural.push(plural);
                                        activePassive.push(activePass);
                                        animInan.push(animateInimate);
                                        divineNonDivine.push(divineProfane);
                                        humanAnimalInan.push(humanAnimal);
                                        mascFemNeut.push(masculineFeminineNeuter);
                                        mascFem.push(masculineFeminine);
                                        naturalArtificial.push(naturalArt);
                                        animacyClassifierArray.push(animacy);
                                        shapeClassifierArray.push(shape);
                                        shortGenericClassifierArray.push(shortGeneric);
                                        derivationListCountNoun.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns.push(olderDerivedTerm);
                                                derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntensifiers[index], "intensifier"))}</i>&nbsp"${intensifierArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntensifiers[index], "intensifier")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntensifiers[intensifierArray.indexOf(intensifierArray[index])], "intensifier"))}</i>&nbsp"to&nbsp${intensifierArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntensifiers[index], "intensifier")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns.push(derivedTerm) 
                                                derivedOrInheritedCountNoun.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntensifiers[index], "verb")))}</i>&nbsp"${removeDistinguishingLetter(intensifierArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntensifiers[intensifierArray.indexOf(intensifierArray[index])], "verb")))}</i>&nbsp"${removeDistinguishingLetter(intensifierArray[index])}"`;
                                                }; 
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListIntensifier[index] === "") {
                                                derivationListIntensifier[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListIntensifier[index] = derivationListIntensifier[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        }; 
                                        etymologyArrayCountNoun.push(intensifierArray[index]);                       
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntensifiers[index], "intensifier")))}</i> "to&nbsp${intensifierArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
        };

        deriveabstractNounFromIntensifier("very", ["intensiveness", "severity"], "X", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

        //adverb to count noun
        function deriveabstractNounFromAdverb(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
                
                let trueOrFalse = "";
                let derivedWordArray = "";
                let index = adverbArray.indexOf(originalWord);
                let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
                if(typeof derivedWord !== "string") {
                        derivedWordArray = cloneArray(derivedWord);
                        derivedWord = randomIndexOfArray(derivedWordArray);
                };
                if(typeof shape !== "string") {
                        shape = shape[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof plural !== "string") {
                        plural = plural[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof originalWord !== "string" && adverbArray.includes(randomWordFromOriginalWordArray)) {
                        trueOrFalse = true;
                        index = adverbArray.indexOf(randomWordFromOriginalWordArray);
                } else if (adverbArray.includes(originalWord)){
                        trueOrFalse = true;
                        index = adverbArray.indexOf(originalWord);
                };

                if(/*trueOrFalse*/true) {
                        //decides if word will have a derivation
                        if(/*Math.floor(Math.random() * 3)*/1 === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(/*Math.floor(Math.random() * 3)*/2 === 1) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedAdverbs[index] + "A") + soundChange("X" + abstractAffix);
                                        olderDerivedTerm = generatedAdverbs[index] + abstractAffix;
                                } else {
                                        derivedTerm = soundChange(abstractAffix + "A") + soundChange("X" + generatedAdverbs[index]);
                                        olderDerivedTerm = abstractAffix + generatedAdverbs[index];
                                };

                                if(countNounArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedAdverbs[index], "adverb"))}</i>&nbsp"${adverbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdverbs[index], "adverb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedAdverbs[adverbArray.indexOf(adverbArray[index])], "adverb"))}</i>&nbsp"${adverbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdverbs[index], "adverb")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedAdverbs[index], "adverb")))}</i>&nbsp"${removeDistinguishingLetter(adverbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdverbs[adverbArray.indexOf(adverbArray[index])], "adverb")))}</i>&nbsp"${removeDistinguishingLetter(adverbArray[index])}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListAdverb[index] === "") {
                                                        derivationListAdverb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListAdverb[index] = derivationListAdverb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = adverbArray[index];
                                        derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        countNounArray.push(derivedWord);
                                        countNounArrayPlural.push(plural);
                                        activePassive.push(activePass);
                                        animInan.push(animateInimate);
                                        divineNonDivine.push(divineProfane);
                                        humanAnimalInan.push(humanAnimal);
                                        mascFemNeut.push(masculineFeminineNeuter);
                                        mascFem.push(masculineFeminine);
                                        naturalArtificial.push(naturalArt);
                                        animacyClassifierArray.push(animacy);
                                        shapeClassifierArray.push(shape);
                                        shortGenericClassifierArray.push(shortGeneric);
                                        derivationListCountNoun.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns.push(olderDerivedTerm);
                                                derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedAdverbs[index], "adverb"))}</i>&nbsp"${adverbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdverbs[index], "adverb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + abstractAffix)}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(abstractAffix + "A")}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedAdverbs[adverbArray.indexOf(adverbArray[index])], "adverb"))}</i>&nbsp"to&nbsp${adverbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdverbs[index], "adverb")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns.push(derivedTerm) 
                                                derivedOrInheritedCountNoun.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedAdverbs[index], "adverb")))}</i>&nbsp"${removeDistinguishingLetter(adverbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + abstractAffix))}</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(abstractAffix + "A"))}-</i>&nbsp"derives&nbspabstract&nbspnouns&nbspfrom&nbspany&nbsppart&nbspof&nbspspeech"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedAdverbs[adverbArray.indexOf(adverbArray[index])], "adverb")))}</i>&nbsp"${removeDistinguishingLetter(adverbArray[index])}"`;
                                                }; 
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListAdverb[index] === "") {
                                                derivationListAdverb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListAdverb[index] = derivationListAdverb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        }; 
                                        etymologyArrayCountNoun.push(adverbArray[index]);                       
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedAdverbs[index], "adverb")))}</i> "to&nbsp${adverbArray[index]}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
        };

        deriveabstractNounFromAdverb("again", "reoccurence", "reoccurences", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdverb("downwards", ["downpour", "decline"], ["downpours", "declines"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdverb("afterwards", ["consequence", "result"], ["consequences", "results"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveabstractNounFromAdverb("upwards", ["promotion", "elevation", "height", "improvement"], ["promotions", "elevations", "heights", "improvements"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");

        document.getElementById("derivational-affixes").appendChild(li);
        li.appendChild(ul);
};

//derives nouns of inanimate objects from verbs
function verbToInanimateAgent() {
        let li = document.createElement("li");
        let ul = document.createElement("ul");
    
        let derivedTerm = "";
        let olderDerivedTerm = "";
        let suffixOrPrefix = "";
        if(Math.floor(Math.random() * 2) === 0) {
            suffixOrPrefix = "suffix";
            li.innerHTML = `<i>-${spell(soundChange("X" + verbToInanimateAgentAffix))}</i> "derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"`
        } else {
            suffixOrPrefix = "prefix";
            li.innerHTML = `<i>${spell(soundChange(verbToInanimateAgentAffix + "A"))}-</i> "derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"`
        };
        let exampleCounter = 0;

        //intransitive verb to count noun
        function deriveIntransVerbToCountInanimateAgent(originalWord, derivedWord, plural, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
                let randomNumber = Math.floor(Math.random() * 3)
                let trueOrFalse = "";
                let derivedWordArray = "";
                let index = intransitiveVerbArray.indexOf(originalWord);
                let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
                if(typeof derivedWord !== "string") {
                        for(let i = 0; i < derivedWord.length; i++) {
                                 if (oldCountNounArray.includes(derivedWord[i])) {
                                         derivedWord = derivedWord;
                                         randomNumber = 1;
                                 } else {
                                         derivedWordArray = cloneArray(derivedWord);
                                         derivedWord = randomIndexOfArray(derivedWordArray);
                                         break;
                                 };
                        };
                 } else {
                         if (oldCountNounArray.includes(derivedWord)) {
                                 randomNumber = 1;
                         };     
                 };

                if(typeof shape !== "string") {
                        shape = shape[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof plural !== "string") {
                        plural = plural[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof shortGeneric !== "string") {
                        shortGeneric = shortGeneric[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof activePass !== "string") {
                        activePass = activePass[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof animateInimate !== "string") {
                        animateInimate = animateInimate[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof humanAnimal !== "string") {
                        humanAnimal = humanAnimal[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof animacy !== "string") {
                        animacy = animacy[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof masculineFeminine !== "string") {
                        masculineFeminine = masculineFeminine[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof naturalArt !== "string") {
                        naturalArt = naturalArt[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof originalWord !== "string" && intransitiveVerbArray.includes(randomWordFromOriginalWordArray)) {
                        trueOrFalse = true;
                        index = intransitiveVerbArray.indexOf(randomWordFromOriginalWordArray);
                } else if (intransitiveVerbArray.includes(originalWord)){
                        trueOrFalse = true;
                        index = intransitiveVerbArray.indexOf(originalWord);
                };
                if(trueOrFalse) {
                        //decides if word will have a derivation
                        if(randomNumber === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(randomNumber === 2) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedIntransitiveVerbs[index] + "A") + soundChange("X" + verbToInanimateAgentAffix);
                                        olderDerivedTerm = generatedIntransitiveVerbs[index] + verbToInanimateAgentAffix;
                                } else {
                                        derivedTerm = soundChange(verbToInanimateAgentAffix + "A") + soundChange("X" + generatedIntransitiveVerbs[index]);
                                        olderDerivedTerm = verbToInanimateAgentAffix + generatedIntransitiveVerbs[index];
                                };

                                if(countNounArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + verbToInanimateAgentAffix)}</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(verbToInanimateAgentAffix + "A")}-</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb"))}</i>&nbsp"${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns[countNounArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedCountNoun[countNounArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + verbToInanimateAgentAffix))}</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(verbToInanimateAgentAffix + "A"))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListIntransVerb[index] === "") {
                                                        derivationListIntransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListIntransVerb[index] = derivationListIntransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayCountNoun[countNounArray.indexOf(derivedWord)] = intransitiveVerbArray[index];
                                        derivationListCountNoun[countNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        countNounArray.push(derivedWord);
                                        countNounArrayPlural.push(plural);
                                        activePassive.push(activePass);
                                        animInan.push(animateInimate);
                                        divineNonDivine.push(divineProfane);
                                        humanAnimalInan.push(humanAnimal);
                                        mascFemNeut.push(masculineFeminineNeuter);
                                        mascFem.push(masculineFeminine);
                                        naturalArtificial.push(naturalArt);
                                        animacyClassifierArray.push(animacy);
                                        shapeClassifierArray.push(shape);
                                        shortGenericClassifierArray.push(shortGeneric);
                                        derivationListCountNoun.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedCountNouns.push(olderDerivedTerm);
                                                derivedOrInheritedCountNoun.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb"))}</i>&nbsp"${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + verbToInanimateAgentAffix)}</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(verbToInanimateAgentAffix + "A")}-</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "noun"))}</i>&nbsp"to&nbsp${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)`;
                                                };
                                        } else {
                                                generatedCountNouns.push(derivedTerm) 
                                                derivedOrInheritedCountNoun.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + verbToInanimateAgentAffix))}</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"`;
                                                } else {
                                                        etymologyCountNoun[countNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(verbToInanimateAgentAffix + "A"))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"`;
                                                }; 
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListIntransVerb[index] === "") {
                                                derivationListIntransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListIntransVerb[index] = derivationListIntransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        }; 
                                        etymologyArrayCountNoun.push(transitiveVerbArray[index]);                       
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i> "to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
                document.getElementById("derivational-affixes").appendChild(li);
                li.appendChild(ul);
        };

        deriveIntransVerbToCountInanimateAgent(["shine", "burn", "glow", "gleam"], "sun", "suns", "active", "anim", "divine", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("aim", "sights", "sights", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", "round", "tool");
        deriveIntransVerbToCountInanimateAgent("ask", "question", "questions", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("belch", ["stomach", "belly"], ["stomachs", "bellies"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("benefitV", ["tool", "gift"], ["tools", "gifts"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "artificial", "inedible", "round", "tool");
        deriveIntransVerbToCountInanimateAgent(["bloom", "blossoming"], ["flower", "spring"], ["flowers", "springs"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "round", "tool");
        deriveIntransVerbToCountInanimateAgent("complain", "complaint", "complaints", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "tool");
        deriveIntransVerbToCountInanimateAgent("declare", ["declaration", "warning", "sign", "flag", "banner", "tattoo"], ["declarations", "warnings", "signs", "flags", "banners", "tattoos"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", ["shapeless", "shapeless", "short-and-wide", "short-and-wide", "short-and-wide", "shapeless"], "tool");
        deriveIntransVerbToCountInanimateAgent(["die", "perish", "rot"], ["corpse", "mortal"], ["corpses", "mortals"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "tool");
        deriveIntransVerbToCountInanimateAgent("dive", ["fishing&nbsphook", "harpoon"], ["fishing&nbsphooks", "harpoons"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", ["long-and-slender", "round"], "tool");
        deriveIntransVerbToCountInanimateAgent("dreamV", "dream", "dreams", "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("drip", ["drop", "leak"], ["drops", "leaks"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("fail", ["failure", "mistake", "broken&nbspobject"], ["failures", "mistakes", "broken&nbspobjects"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent(["fartV", "shitV"], ["ass", "anus"], ["asses", "anuses"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("flee", "missed&nbspopportunity", "missed&nbspopportunities", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("float", ["boat", "albatross", "kite"], ["boats", "albatrosses", "kites"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", ["tool", "flying-animal", "tool"]);
        deriveIntransVerbToCountInanimateAgent("flowV", ["river", "stream"], ["rivers", "streams"], "active", "anim", "divine", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "liquid");
        deriveIntransVerbToCountInanimateAgent("flyV", "cloud", "clouds", "active", "anim", "divine", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("graze", "pasture", "pastures", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "flat", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("grieve", "grave", "graves", "passive", "inan", "divine", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", "flat", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("grow", "plant", "plants", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("lament", ["funeral&nbspsong", "funeral"], ["funeral&nbspsongs", "funerals"], "passive", "inan", "divine", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("laughV", "joke", "jokes", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", "shapeless", "tool");
        deriveIntransVerbToCountInanimateAgent("mean", ["word", "intention", "meaning"], ["words", "intentions", "meanings"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("move", ["speech", "wagon", "leg"], ["speeches", "wagons", "legs"], "passive", "inan", "profane", "secondinanimate", "neuter", ["masculine1", "masculine1", "feminine1"], ["artificial", "artificial", "natural"], "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent(["nod", "think"], "head", "heads", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("overflow", ["flood", "excess"], ["floods", "excesses"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("play", "dice", "die", "passive", "inan", "divine", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "short-and-wide", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("pray", "prayer", "prayers", "passive", "inan", "divine", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("reckon", ["number", "mark", "notch"], ["numbers", "marks", "notches"], "passive", "inan", "divine", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "flat", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent(["restV", "sleepV"], "bed", "beds", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", "flat", "tool");
        deriveIntransVerbToCountInanimateAgent("speak", ["tongue", "mouth", "language"], ["tongues", "mouths", "languages"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", ["flat", "round", "shapeless"], "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("stand", ["place", "leg", "prop"], ["places", "legs", "props"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", ["natural-inanimate", "natural-inanimate", "artificial"], "inedible", ["flat", "long-and-slender", "long-and-slender"], ["natural-inanimate", "natural-inanimate", "tool"]);
        deriveIntransVerbToCountInanimateAgent("stink", "bad&nbspodour", "bad&nbspodours", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("subdue", ["victory", "staff", "whip"], ["victories", "staffs", "whips"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", ["shapeless", "long-and-slender", "long-and-slender"], "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("swell", ["ball", "bladder", "blister"], ["balls", "bladders", "blisters"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "round", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("tame", ["reigns", "leash"], ["reigns", "leashes"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "long-and-slender", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("tremble", ["earthquake", "thunder"], ["earthquakes", "thunders"], "passive", "anim", "divine", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("urinate", ["urethra", "penis", "bladder"], ["urethras", "penises", "bladders"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("venture", ["journey", "adventure"], ["journeys", "adventures"], "passive", "inan", "profane", "secondinanimate", "neuter", "masculine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("wade", "boot", "boots", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "artificial", "inedible", "long-and-slender", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("wake", "sunrise", "sunrises", "passive", "inan", "divine", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("yawn", ["boring&nbspthing", "bore"], ["boring&nbspthings", "bores"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "natural-inanimate");
        deriveIntransVerbToCountInanimateAgent("weep", "tear", "tears", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "natural-inanimate");

        //intransitive verb to mass noun
        function deriveIntransVerbToMassInanimateAgent(originalWord, derivedWord, singulative, pluralSingulative, activePass, animateInimate, divineProfane, humanAnimal, masculineFeminineNeuter, masculineFeminine, naturalArt, animacy, shape, shortGeneric) {
                let randomNumber = Math.floor(Math.random() * 3)
                let trueOrFalse = "";
                let derivedWordArray = "";
                let index = intransitiveVerbArray.indexOf(originalWord);
                let randomWordFromOriginalWordArray = randomIndexOfArray(originalWord);
                if(typeof derivedWord !== "string") {
                        for(let i = 0; i < derivedWord.length; i++) {
                                 if (oldMassNounArray.includes(derivedWord[i])) {
                                         derivedWord = derivedWord;
                                         randomNumber = 1;
                                 } else {
                                         derivedWordArray = cloneArray(derivedWord);
                                         derivedWord = randomIndexOfArray(derivedWordArray);
                                         break;
                                 };
                        };
                 } else {
                         if (oldMassNounArray.includes(derivedWord)) {
                                 randomNumber = 1;
                         };     
                 };

                if(typeof shape !== "string") {
                        shape = shape[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof singulative !== "string") {
                        singulative = singulative[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof pluralSingulative !== "string") {
                        pluralSingulative = pluralSingulative[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof shortGeneric !== "string") {
                        shortGeneric = shortGeneric[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof activePass !== "string") {
                        activePass = activePass[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof animateInimate !== "string") {
                        animateInimate = animateInimate[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof humanAnimal !== "string") {
                        humanAnimal = humanAnimal[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof animacy !== "string") {
                        animacy = animacy[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof masculineFeminine !== "string") {
                        masculineFeminine = masculineFeminine[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof naturalArt !== "string") {
                        naturalArt = naturalArt[derivedWordArray.indexOf(derivedWord)];
                };
                if(typeof originalWord !== "string" && intransitiveVerbArray.includes(randomWordFromOriginalWordArray)) {
                        trueOrFalse = true;
                        index = intransitiveVerbArray.indexOf(randomWordFromOriginalWordArray);
                } else if (intransitiveVerbArray.includes(originalWord)){
                        trueOrFalse = true;
                        index = intransitiveVerbArray.indexOf(originalWord);
                };
                if(trueOrFalse) {
                        //decides if word will have a derivation
                        if(randomNumber === 1) {
                                //decides if term is derived in modern language or old language
                                let derivedInModernOrOld = "";
                                if(randomNumber === 2) {
                                        derivedInModernOrOld = "old";
                                } else {
                                        derivedInModernOrOld = "modern";
                                };

                                if(suffixOrPrefix === "suffix") {
                                        derivedTerm = soundChange(generatedIntransitiveVerbs[index] + "A") + soundChange("X" + verbToInanimateAgentAffix);
                                        olderDerivedTerm = generatedIntransitiveVerbs[index] + verbToInanimateAgentAffix;
                                } else {
                                        derivedTerm = soundChange(verbToInanimateAgentAffix + "A") + soundChange("X" + generatedIntransitiveVerbs[index]);
                                        olderDerivedTerm = verbToInanimateAgentAffix + generatedIntransitiveVerbs[index];
                                };

                                if(massNounArray.includes(derivedWord)) {
                                        if(derivedInModernOrOld === "old") {
                                                generatedMassNouns[massNounArray.indexOf(derivedWord)] = olderDerivedTerm;
                                                derivedOrInheritedMassNoun[massNounArray.indexOf(derivedWord)] = "inheritedOldDerived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb"))}</i>&nbsp"to&nbsp${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + verbToInanimateAgentAffix)}</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"`;
                                                } else {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(verbToInanimateAgentAffix + "A")}-</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb"))}</i>&nbsp"${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)`;
                                                };
                                        } else {
                                                generatedMassNouns[massNounArray.indexOf(derivedWord)] = derivedTerm;
                                                derivedOrInheritedMassNoun[massNounArray.indexOf(derivedWord)] = "derived";
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + verbToInanimateAgentAffix))}</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"`;
                                                } else {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(verbToInanimateAgentAffix + "A"))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"`;
                                                };
                                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                                if(derivationListIntransVerb[index] === "") {
                                                        derivationListIntransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                                } else {
                                                        derivationListIntransVerb[index] = derivationListIntransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                                };
                                        }
                                        etymologyArrayMassNoun[massNounArray.indexOf(derivedWord)] = intransitiveVerbArray[index];
                                        derivationListMassNoun[massNounArray.indexOf(derivedWord)] = "";
                                } else {
                                        massNounArray.push(derivedWord);
                                        singulativeMassNounArray.push(singulative);
                                        pluralSingulativeMassNounArray.push(pluralSingulative);
                                        activePassiveMass.push(activePass);
                                        animInanMass.push(animateInimate);
                                        divineNonDivineMass.push(divineProfane);
                                        humanAnimalInanMass.push(humanAnimal);
                                        mascFemNeutMass.push(masculineFeminineNeuter);
                                        mascFemMass.push(masculineFeminine);
                                        naturalArtificialMass.push(naturalArt);
                                        animacyClassifierMassArray.push(animacy);
                                        shapeClassifierMassArray.push(shape);
                                        shortGenericClassifierMassArray.push(shortGeneric);
                                        derivationListMassNoun.push("");
                                        if(derivedInModernOrOld === "old") {
                                                generatedMassNouns.push(olderDerivedTerm);
                                                derivedOrInheritedMassNoun.push("inheritedOldDerived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb"))}</i>&nbsp"${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)&nbsp+&nbsp<i>-${spell("X" + verbToInanimateAgentAffix)}</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"`;
                                                } else {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderDerivedTerm, "noun"))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(derivedWord)}"&nbsp<&nbsp<i>${spell(verbToInanimateAgentAffix + "A")}-</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "noun"))}</i>&nbsp"to&nbsp${intransitiveVerbArray[index]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>)`;
                                                };
                                        } else {
                                                generatedMassNouns.push(derivedTerm) 
                                                derivedOrInheritedMassNoun.push("derived");
                                                if(suffixOrPrefix === "suffix") {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"&nbsp+&nbsp<i>-${spell(soundChange("X" + verbToInanimateAgentAffix))}</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"`;
                                                } else {
                                                        etymologyMassNoun[massNounArray.indexOf(derivedWord)] = `<i>${spell(soundChange(verbToInanimateAgentAffix + "A"))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspinanimate&nbspobjects&nbspfrom&nbsp&nbspverbs"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[index])], "verb")))}</i>&nbsp"to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}"`;
                                                }; 
                                        };
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(derivationListIntransVerb[index] === "") {
                                                derivationListIntransVerb[index] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`
                                        } else {
                                                derivationListIntransVerb[index] = derivationListIntransVerb[index] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i></strong>&nbsp"${derivedWord}"`;
                                        }; 
                                        etymologyArrayMassNoun.push(transitiveVerbArray[index]);                       
                                };
                                if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                        let exampleLi = document.createElement("li");
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedIntransitiveVerbs[index], "verb")))}</i> "to&nbsp${removeDistinguishingLetter(intransitiveVerbArray[index])}" > <i>${spell(addGrammaticalAffixes(derivedTerm, "noun"))}</i> "${derivedWord}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;
                                };
                        };
                };
                document.getElementById("derivational-affixes").appendChild(li);
                li.appendChild(ul);
        };

        deriveIntransVerbToMassInanimateAgent("fall", ["rain", "snow"], ["raindrop", "snowball"], ["raindrops", "snowballs"], "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "round", "liquid");
        deriveIntransVerbToMassInanimateAgent("ferment", "beer", "pint&nbspof&nbspbeer", "pints&nbspof&nbspbeer", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "shapeless", "liquid");
        deriveIntransVerbToMassInanimateAgent("float", "driftwood", "piece&nbspof&nbspdriftwood", "pieces&nbspof&nbspdriftwood", "passive", "inan", "profane", "secondinanimate", "neuter", "feminine1", "natural", "inedible", "flat", "liquid");

}

//all functions below create compounds
 

//a merism is a combination of two words to refer to a greater whole
function merism() {
        let li = document.createElement("li");
        let ul = document.createElement("ul");
        let exampleCounter = 0;
        li.innerHTML = `Merisms: A merism is a combination of two words which refer to a singular greater whole.`

        function createMerism(arg) {
                let firstElement = "";
                let secondElement = "";

                let firstElementGeneratedArray = "";
                let secondElementGeneratedArray = "";
                let targetElementGeneratedArray = "";

                let firstElementEnglishWordArray = "";
                let secondElementEnglishWordArray = "";
                let targetEnglishWordArray = "";

                let derivedOrInherited = "";
                let etymology = "";

                let compound = "";
                let olderCompound = "";
                let firstElementDerivationList = "";
                let secondElementDerivationList = "";
                let targetDerivationList = "";

                let firstElementEtymologyArray = "";
                let secondElementEtymologyArray = "";
                let targetElementEtymologyArray = "";

                let targetDerivedOrInherited = "";

                let to = "";

                if(typeof arg.compoundMeaning !== "string") {
                        arg.compoundMeaning = randomIndexOfArray(arg.compoundMeaning);
                };
                
                if(arg.firstElementPartOfSpeech === "noun") {
                        if(arg.firstElementType === "count") {
                                firstElement = generatedCountNouns[countNounArray.indexOf(arg.word1)];
                                firstElementEnglishWordArray = countNounArray;
                                firstElementGeneratedArray = generatedCountNouns;
                                firstElementDerivationList = derivationListCountNoun;
                                firstElementEtymologyArray = etymologyArrayCountNoun;
                        } else if (arg.firstElementType === "mass") {
                                firstElement = generatedMassNouns[massNounArray.indexOf(arg.word1)];
                                firstElementEnglishWordArray = massNounArray;
                                firstElementGeneratedArray = generatedMassNouns;
                                firstElementDerivationList = derivationListMassNoun;
                                firstElementEtymologyArray = etymologyArrayMassNoun;
                        };
                };

                if(arg.secondElementPartOfSpeech === "noun") {
                        if(arg.secondElementType === "count") {
                                secondElement = generatedCountNouns[countNounArray.indexOf(arg.word2)];
                                secondElementEnglishWordArray = countNounArray;
                                secondElementGeneratedArray = generatedCountNouns;
                                secondElementDerivationList = derivationListCountNoun;
                                secondElementEtymologyArray = etymologyArrayCountNoun;
                        } else if (arg.secondElementType === "mass") {
                                secondElement = generatedMassNouns[massNounArray.indexOf(arg.word2)];
                                secondElementEnglishWordArray = massNounArray;
                                secondElementGeneratedArray = generatedMassNouns;
                                secondElementDerivationList = derivationListMassNoun;
                                secondElementEtymologyArray = etymologyArrayMassNoun;
                        };
                };

                if(arg.compoundPartOfSpeech === "noun") {
                        if(arg.compoundType === "count") {
                                targetEnglishWordArray = countNounArray;
                                targetElementGeneratedArray = generatedCountNouns;
                                derivedOrInherited = derivedOrInheritedCountNoun;
                                etymology = etymologyCountNoun;
                                targetElementEtymologyArray = etymologyArrayCountNoun;
                                targetDerivedOrInherited = derivedOrInheritedCountNoun;
                                targetDerivationList = derivationListCountNoun;
                        } else if (arg.compoundType === "mass") {
                                targetEnglishWordArray = massNounArray;
                                targetElementGeneratedArray = generatedMassNouns;
                                derivedOrInherited = derivedOrInheritedMassNoun;
                                etymology = etymologyMassNoun;
                                targetElementEtymologyArray = etymologyArrayMassNoun;
                                targetDerivedOrInherited = derivedOrInheritedMassNoun;
                                targetDerivationList = derivationListMassNoun;
                        };
                };

                //decides if word will have a derivation
                if(Math.floor(Math.random() * 2) === 1) {
                        let firstItemIndex = firstElementEnglishWordArray.indexOf(arg.word1);
                        let secondItemIndex = secondElementEnglishWordArray.indexOf(arg.word2);

                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(Math.floor(Math.random() * 2) === 1) {
                                derivedInModernOrOld = "old";
                                olderCompound = firstElement + secondElement;
                        } else {
                                derivedInModernOrOld = "modern";
                                compound = soundChange(firstElement) + soundChange(secondElement);
                        };

                        if(targetEnglishWordArray.includes(arg.compoundMeaning)) {
                                if(derivedInModernOrOld === "old") {
                                        targetElementGeneratedArray[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = olderCompound;
                                        targetDerivedOrInherited[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = "inheritedOldDerived";
                                        etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `
                                        Old&nbsp${capitaliseLanguageName(languageName)}&nbsp
                                        <i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp
                                        "${to}${removeDistinguishingLetter(arg.compoundMeaning)}"
                                        &nbsp<&nbsp
                                        <i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp
                                        "${to}${firstElementEnglishWordArray[firstItemIndex]}"&nbsp
                                        (cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp
                                        <i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)&nbsp
                                        +&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp
                                        "${to}${secondElementEnglishWordArray[secondItemIndex]}"&nbsp
                                        (cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp
                                        <i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                } else {
                                        targetElementGeneratedArray[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = compound;
                                        targetDerivedOrInherited[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = "derived";
                                        etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(firstElementEnglishWordArray[firstItemIndex])}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(secondElementEnglishWordArray[secondItemIndex])}"-&nbsp${arg.compoundDescription}`;

                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(firstElementDerivationList[firstItemIndex] === "") {
                                                firstElementDerivationList[firstItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                        } else {
                                                firstElementDerivationList[firstItemIndex] = firstElementDerivationList[firstItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                        };
                                        if(secondElementDerivationList[secondItemIndex] === "") {
                                                secondElementDerivationList[secondItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                        } else {
                                                secondElementDerivationList[secondItemIndex] = secondElementDerivationList[secondItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                        };
                                }
                                targetElementEtymologyArray[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = [arg.word1, arg.word2];
                                targetDerivationList[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = "";
                        } else {
                                targetEnglishWordArray.push(arg.compoundMeaning);

                                if(arg.compoundPartOfSpeech === "noun" && arg.compoundType === "count") {
                                        countNounArrayPlural.push(arg.plural);
                                        activePassive.push(arg.activePass);
                                        animInan.push(arg.animateInimate);
                                        divineNonDivine.push(arg.divineProfane);
                                        humanAnimalInan.push(arg.humanAnimal);
                                        mascFemNeut.push(arg.masculineFeminineNeuter);
                                        mascFem.push(arg.masculineFeminine);
                                        naturalArtificial.push(arg.naturalArt);
                                        animacyClassifierArray.push(arg.animacy);
                                        shapeClassifierArray.push(arg.shape);
                                        shortGenericClassifierArray.push(arg.shortGeneric);
                                };

                                if(arg.compoundPartOfSpeech === "noun" && arg.compoundType === "mass") {
                                        singulativeMassNounArray.push(arg.singulative);
                                        pluralSingulativeMassNounArray.push(arg.pluralSingulative);
                                        activePassiveMass.push(arg.activePass);
                                        animInanMass.push(arg.animateInimate);
                                        divineNonDivineMass.push(arg.divineProfane);
                                        humanAnimalInanMass.push(arg.humanAnimal);
                                        mascFemNeutMass.push(arg.masculineFeminineNeuter);
                                        mascFemMass.push(arg.masculineFeminine);
                                        naturalArtificialMass.push(arg.naturalArt);
                                        animacyClassifierMassArray.push(arg.animacy);
                                        shapeClassifierMassArray.push(arg.shape);
                                        shortGenericClassifierMassArray.push(arg.shortGeneric);
                                };
                                
                                targetDerivationList.push("");
                                if(derivedInModernOrOld === "old") {
                                        targetElementGeneratedArray.push(olderCompound);
                                        targetDerivedOrInherited.push("inheritedOldDerived");                                   
                                        etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp
                                        "${to}${removeDistinguishingLetter(arg.compoundMeaning)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp"${to}${arg.word1}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp"${to}${arg.word2}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                } else {
                                        targetElementGeneratedArray.push(compound) 
                                        targetDerivedOrInherited.push("derived");
                                        etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word1)}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word2)}"-&nbsp${arg.compoundDescription}`;
                                };

                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                if(firstElementDerivationList[firstItemIndex] === "") {
                                        firstElementDerivationList[firstItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                } else {
                                        firstElementDerivationList[firstItemIndex] = firstElementDerivationList[firstItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                }; 
                                if(secondElementDerivationList[secondItemIndex] === "") {
                                        secondElementDerivationList[secondItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                } else {
                                        secondElementDerivationList[secondItemIndex] = secondElementDerivationList[secondItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                }; 
                                targetElementEtymologyArray.push([arg.word1, arg.word2]);                       
                        };
                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                let exampleLi = document.createElement("li");
                                exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word1)}" + <i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word2)}" > <i>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i> "${arg.compoundMeaning}"`;
                                ul.appendChild(exampleLi);
                                exampleCounter++;
                        };
                };
                
                document.getElementById("compounds").appendChild(li);
                li.appendChild(ul);
        };    
        
        createMerism({
                compoundDescription: "merism&nbspcompound",
                word1: "sun",
                word2: "moon",
                compoundMeaning: ["time", "cosmos", "day"],
                //noun
                plural: ["times", "cosmoses", "days"],
                firstElementPartOfSpeech: "noun",
                secondElementPartOfSpeech: "noun",
                firstElementType: "count",
                secondElementType: "count",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "passive",
                animateInimate: "inanimate",
                divineProfane: ["profane", "divine", "profane"],
                humanAnimal: "secondinanimate",
                masculineFeminineNeuter: "neuter",
                masculineFeminine: "masculine1",
                naturalArt: "natural",
                animacy: "inedible",
                shape: "shapeless",
                shortGeneric: "natural-inanimate",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createMerism({
                compoundDescription: "merism&nbspcompound",
                word1: "world",
                word2: "wind",
                compoundMeaning: "weather",
                //noun
                plural: "weathers",
                firstElementPartOfSpeech: "noun",
                secondElementPartOfSpeech: "noun",
                firstElementType: "count",
                secondElementType: "mass",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "passive",
                animateInimate: "animate",
                divineProfane: "divine",
                humanAnimal: "secondinanimate",
                masculineFeminineNeuter: "neuter",
                masculineFeminine: "masculine1",
                naturalArt: "natural",
                animacy: "inedible",
                shape: "shapeless",
                shortGeneric: "natural-inanimate",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createMerism({
                compoundDescription: "merism&nbspcompound",
                word1: "mountain",
                word2: "steppe",
                compoundMeaning: "landscape",
                //noun
                plural: "landscapes",
                firstElementPartOfSpeech: "noun",
                secondElementPartOfSpeech: "noun",
                firstElementType: "count",
                secondElementType: "count",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "passive",
                animateInimate: "inanimate",
                divineProfane: "profane",
                humanAnimal: "secondinanimate",
                masculineFeminineNeuter: "neuter",
                masculineFeminine: "masculine1",
                naturalArt: "natural",
                animacy: "inedible",
                shape: "flat",
                shortGeneric: "natural-inanimate",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createMerism({
                compoundDescription: "merism&nbspcompound",
                word1: "wheel",
                word2: "man",
                compoundMeaning: "chariot",
                //noun
                plural: "chariots",
                firstElementPartOfSpeech: "noun",
                secondElementPartOfSpeech: "noun",
                firstElementType: "count",
                secondElementType: "count",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "passive",
                animateInimate: "inanimate",
                divineProfane: "profane",
                humanAnimal: "secondinanimate",
                masculineFeminineNeuter: "neuter",
                masculineFeminine: "masculine1",
                naturalArt: "artificial",
                animacy: "inedible",
                shape: "short-and-wide",
                shortGeneric: "natural-inanimate",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createMerism({
                compoundDescription: "merism&nbspcompound",
                word1: "husband",
                word2: "wife",
                compoundMeaning: "married&nbspcouple",
                //noun
                plural: "married&nbspcouples",
                firstElementPartOfSpeech: "noun",
                secondElementPartOfSpeech: "noun",
                firstElementType: "count",
                secondElementType: "count",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "passive",
                animateInimate: "inanimate",
                divineProfane: "profane",
                humanAnimal: "secondinanimate",
                masculineFeminineNeuter: "neuter",
                masculineFeminine: "masculine1",
                naturalArt: "artificial",
                animacy: "inedible",
                shape: "short-and-wide",
                shortGeneric: "natural-inanimate",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
};

function endocentric() {
        let li = document.createElement("li");
        let ul = document.createElement("ul");
        let exampleCounter = 0;
        li.innerHTML = `Endocentric compounds: A compound word whose meaning is derived from the central component, also known as the head.`

        function createendocentric(arg) {
                let firstElement = "";
                let secondElement = "";

                let firstElementGeneratedArray = "";
                let secondElementGeneratedArray = "";
                let targetElementGeneratedArray = "";

                let firstElementEnglishWordArray = "";
                let secondElementEnglishWordArray = "";
                let targetEnglishWordArray = "";

                let derivedOrInherited = "";
                let etymology = "";

                let compound = "";
                let olderCompound = "";
                let firstElementDerivationList = "";
                let secondElementDerivationList = "";
                let targetDerivationList = "";

                let firstElementEtymologyArray = "";
                let secondElementEtymologyArray = "";
                let targetElementEtymologyArray = "";

                let targetDerivedOrInherited = "";

                let to = "";

                if(typeof arg.compoundMeaning !== "string") {
                        arg.compoundMeaning = randomIndexOfArray(arg.compoundMeaning);
                };
                
                if(arg.firstElementPartOfSpeech === "noun") {
                        if(arg.firstElementType === "count") {
                                firstElement = generatedCountNouns[countNounArray.indexOf(arg.word1)];
                                firstElementEnglishWordArray = countNounArray;
                                firstElementGeneratedArray = generatedCountNouns;
                                firstElementDerivationList = derivationListCountNoun;
                                firstElementEtymologyArray = etymologyArrayCountNoun;
                        } else if (arg.firstElementType === "mass") {
                                firstElement = generatedMassNouns[massNounArray.indexOf(arg.word1)];
                                firstElementEnglishWordArray = massNounArray;
                                firstElementGeneratedArray = generatedMassNouns;
                                firstElementDerivationList = derivationListMassNoun;
                                firstElementEtymologyArray = etymologyArrayMassNoun;
                        };
                };

                if(arg.secondElementPartOfSpeech === "noun") {
                        if(arg.secondElementType === "count") {
                                secondElement = generatedCountNouns[countNounArray.indexOf(arg.word2)];
                                secondElementEnglishWordArray = countNounArray;
                                secondElementGeneratedArray = generatedCountNouns;
                                secondElementDerivationList = derivationListCountNoun;
                                secondElementEtymologyArray = etymologyArrayCountNoun;
                        } else if (arg.secondElementType === "mass") {
                                secondElement = generatedMassNouns[massNounArray.indexOf(arg.word2)];
                                secondElementEnglishWordArray = massNounArray;
                                secondElementGeneratedArray = generatedMassNouns;
                                secondElementDerivationList = derivationListMassNoun;
                                secondElementEtymologyArray = etymologyArrayMassNoun;
                        };
                };

                if(arg.compoundPartOfSpeech === "noun") {
                        if(arg.compoundType === "count") {
                                targetEnglishWordArray = countNounArray;
                                targetElementGeneratedArray = generatedCountNouns;
                                derivedOrInherited = derivedOrInheritedCountNoun;
                                etymology = etymologyCountNoun;
                                targetElementEtymologyArray = etymologyArrayCountNoun;
                                targetDerivedOrInherited = derivedOrInheritedCountNoun;
                                targetDerivationList = derivationListCountNoun;
                        } else if (arg.compoundType === "mass") {
                                targetEnglishWordArray = massNounArray;
                                targetElementGeneratedArray = generatedMassNouns;
                                derivedOrInherited = derivedOrInheritedMassNoun;
                                etymology = etymologyMassNoun;
                                targetElementEtymologyArray = etymologyArrayMassNoun;
                                targetDerivedOrInherited = derivedOrInheritedMassNoun;
                                targetDerivationList = derivationListMassNoun;
                        };
                };

                //decides if word will have a derivation
                if(/*Math.floor(Math.random() * 2) === 1*/true) {
                        let firstItemIndex = firstElementEnglishWordArray.indexOf(arg.word1);
                        let secondItemIndex = secondElementEnglishWordArray.indexOf(arg.word2);

                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(/*Math.floor(Math.random() * 2)*/2 === 1) {
                                derivedInModernOrOld = "old";
                                if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                        olderCompound = firstElement + secondElement;
                                } else {
                                        olderCompound = secondElement + firstElement;
                                }
                                
                        } else {
                                derivedInModernOrOld = "modern";
                                if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                        compound = soundChange(firstElement) + soundChange(secondElement);
                                } else {
                                        compound = soundChange(secondElement) + soundChange(firstElement);
                                };
                        };

                        if(targetEnglishWordArray.includes(arg.compoundMeaning)) {
                                if(derivedInModernOrOld === "old") {
                                        targetElementGeneratedArray[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = olderCompound;
                                        targetDerivedOrInherited[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = "inheritedOldDerived";
                                        if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.compoundMeaning)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp"${to}${firstElementEnglishWordArray[firstItemIndex]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp"${to}${secondElementEnglishWordArray[secondItemIndex]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp <i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                        } else {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.compoundMeaning)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp"${to}${secondElementEnglishWordArray[secondItemIndex]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp"${to}${firstElementEnglishWordArray[firstItemIndex]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp <i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                        }
                                        
                                } else {
                                        targetElementGeneratedArray[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = compound;
                                        targetDerivedOrInherited[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = "derived";
                                        if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(firstElementEnglishWordArray[firstItemIndex])}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(secondElementEnglishWordArray[secondItemIndex])}"-&nbsp${arg.compoundDescription}`;
                                        } else {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(secondElementEnglishWordArray[secondItemIndex])}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(firstElementEnglishWordArray[firstItemIndex])}"-&nbsp${arg.compoundDescription}`;
                                        }
                                        

                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(firstElementDerivationList[firstItemIndex] === "") {
                                                firstElementDerivationList[firstItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                        } else {
                                                firstElementDerivationList[firstItemIndex] = firstElementDerivationList[firstItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                        };
                                        if(secondElementDerivationList[secondItemIndex] === "") {
                                                secondElementDerivationList[secondItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                        } else {
                                                secondElementDerivationList[secondItemIndex] = secondElementDerivationList[secondItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                        };
                                }
                                targetElementEtymologyArray[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = [arg.word1, arg.word2];
                                targetDerivationList[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = "";
                        } else {
                                targetEnglishWordArray.push(arg.compoundMeaning);

                                if(arg.compoundPartOfSpeech === "noun" && arg.compoundType === "count") {
                                        countNounArrayPlural.push(arg.plural);
                                        activePassive.push(arg.activePass);
                                        animInan.push(arg.animateInimate);
                                        divineNonDivine.push(arg.divineProfane);
                                        humanAnimalInan.push(arg.humanAnimal);
                                        mascFemNeut.push(arg.masculineFeminineNeuter);
                                        mascFem.push(arg.masculineFeminine);
                                        naturalArtificial.push(arg.naturalArt);
                                        animacyClassifierArray.push(arg.animacy);
                                        shapeClassifierArray.push(arg.shape);
                                        shortGenericClassifierArray.push(arg.shortGeneric);
                                };

                                if(arg.compoundPartOfSpeech === "noun" && arg.compoundType === "mass") {
                                        singulativeMassNounArray.push(arg.singulative);
                                        pluralSingulativeMassNounArray.push(arg.pluralSingulative);
                                        activePassiveMass.push(arg.activePass);
                                        animInanMass.push(arg.animateInimate);
                                        divineNonDivineMass.push(arg.divineProfane);
                                        humanAnimalInanMass.push(arg.humanAnimal);
                                        mascFemNeutMass.push(arg.masculineFeminineNeuter);
                                        mascFemMass.push(arg.masculineFeminine);
                                        naturalArtificialMass.push(arg.naturalArt);
                                        animacyClassifierMassArray.push(arg.animacy);
                                        shapeClassifierMassArray.push(arg.shape);
                                        shortGenericClassifierMassArray.push(arg.shortGeneric);
                                };
                                
                                targetDerivationList.push("");
                                if(derivedInModernOrOld === "old") {
                                        targetElementGeneratedArray.push(olderCompound);
                                        targetDerivedOrInherited.push("inheritedOldDerived");  
                                        if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                                etymology[targetEnglishWordArray.indexOf(compoundMeaning)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.compoundMeaning)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp"${to}${arg.word1}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp"${to}${arg.word2}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                        } else {
                                                etymology[targetEnglishWordArray.indexOf(compoundMeaning)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.compoundMeaning)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp"${to}${arg.word2}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp"${to}${arg.word1}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                        }                      
                                        
                                } else {
                                        targetElementGeneratedArray.push(compound) 
                                        targetDerivedOrInherited.push("derived");
                                        if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word1)}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word2)}"-&nbsp${arg.compoundDescription}`;
                                        } else {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word2)}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word1)}"-&nbsp${arg.compoundDescription}`;
                                        }
                                        
                                };

                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                if(firstElementDerivationList[firstItemIndex] === "") {
                                        firstElementDerivationList[firstItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                } else {
                                        firstElementDerivationList[firstItemIndex] = firstElementDerivationList[firstItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                }; 
                                if(secondElementDerivationList[secondItemIndex] === "") {
                                        secondElementDerivationList[secondItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                } else {
                                        secondElementDerivationList[secondItemIndex] = secondElementDerivationList[secondItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                }; 
                                targetElementEtymologyArray.push([arg.word1, arg.word2]);                       
                        };
                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                let exampleLi = document.createElement("li");
                                if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                      exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word1)}" + <i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word2)}" > <i>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i> "${arg.compoundMeaning}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;  
                                } else {
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word2)}" + <i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word1)}" > <i>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i> "${arg.compoundMeaning}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;  
                                }
                                
                        };
                };
                
                document.getElementById("compounds").appendChild(li);
                li.appendChild(ul);
        };   

        createendocentric({
                compoundDescription: "endocentric&nbspcompound",
                word1: "oath",
                word2: "brother",
                compoundMeaning: "man&nbspwith&nbspwhom&nbspone&nbsphas&nbspsworn&nbspan&nbspoath",
                //noun
                plural: "men&nbspwith&nbspwhom&nbspone&nbsphas&nbspsworn&nbspan&nbspoath",
                firstElementPartOfSpeech: "noun",
                secondElementPartOfSpeech: "noun",
                firstElementType: "count",
                secondElementType: "count",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "active",
                animateInimate: "animate",
                divineProfane: "divine",
                humanAnimal: "human",
                masculineFeminineNeuter: "masculine2",
                masculineFeminine: "masculine1",
                naturalArt: "natural",
                animacy: "man",
                shape: "long-and-slender",
                shortGeneric: "human2",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createendocentric({
                compoundDescription: "endocentric&nbspcompound",
                word1: "plough",
                word2: "horse",
                compoundMeaning: "work-horse",
                //noun
                plural: "work-horses",
                firstElementPartOfSpeech: "noun",
                secondElementPartOfSpeech: "noun",
                firstElementType: "count",
                secondElementType: "count",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "active",
                animateInimate: "animate",
                divineProfane: "profane",
                humanAnimal: "animal",
                masculineFeminineNeuter: "masculine2",
                masculineFeminine: "masculine1",
                naturalArt: "natural",
                animacy: "labour",
                shape: "long-and-slender",
                shortGeneric: "land-animal",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createendocentric({
                compoundDescription: "endocentric&nbspcompound",
                word1: "soldier",
                word2: "horse",
                compoundMeaning: "war-horse",
                //noun
                plural: "war-horses",
                firstElementPartOfSpeech: "noun",
                secondElementPartOfSpeech: "noun",
                firstElementType: "count",
                secondElementType: "count",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "active",
                animateInimate: "animate",
                divineProfane: "profane",
                humanAnimal: "animal",
                masculineFeminineNeuter: "masculine2",
                masculineFeminine: "masculine1",
                naturalArt: "natural",
                animacy: "labour",
                shape: "long-and-slender",
                shortGeneric: "land-animal",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createendocentric({
                compoundDescription: "endocentric&nbspcompound",
                word1: "horse",
                word2: "soldier",
                compoundMeaning: ["mounted&nbspsoldier", "knight", "nobleman"],
                //noun
                plural: ["mounted&nbspsoldiers", "knights", "noblemen"],
                firstElementPartOfSpeech: "noun",
                secondElementPartOfSpeech: "noun",
                firstElementType: "count",
                secondElementType: "count",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "active",
                animateInimate: "animate",
                divineProfane: "profane",
                humanAnimal: "human",
                masculineFeminineNeuter: "masculine2",
                masculineFeminine: "masculine1",
                naturalArt: "natural",
                animacy: "man",
                shape: "long-and-slender",
                shortGeneric: "human2",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createendocentric({
                compoundDescription: "endocentric&nbspcompound",
                word1: "cloud",
                word2: "cage",
                compoundMeaning: "storm",
                //noun
                plural: "storms",
                firstElementPartOfSpeech: "noun",
                secondElementPartOfSpeech: "noun",
                firstElementType: "count",
                secondElementType: "count",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "active",
                animateInimate: "animate",
                divineProfane: "divine",
                humanAnimal: "secondinanimate",
                masculineFeminineNeuter: "feminine2",
                masculineFeminine: "masculine1",
                naturalArt: "natural",
                animacy: "inedible",
                shape: "shapeless",
                shortGeneric: "natural-inanimate",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createendocentric({
                compoundDescription: "endocentric&nbspcompound",
                word1: "fish",
                word2: "horse",
                compoundMeaning: "dolphin",
                //noun
                plural: "dolphins",
                firstElementPartOfSpeech: "noun",
                secondElementPartOfSpeech: "noun",
                firstElementType: "count",
                secondElementType: "count",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "active",
                animateInimate: "animate",
                divineProfane: "profane",
                humanAnimal: "animal",
                masculineFeminineNeuter: "masculine2",
                masculineFeminine: "masculine1",
                naturalArt: "natural",
                animacy: "wild-animal",
                shape: "long-and-slender",
                shortGeneric: "water-animal",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
}

function exocentric() {
        let li = document.createElement("li");
        let ul = document.createElement("ul");
        let exampleCounter = 0;
        li.innerHTML = `Exocentric compounds: A compound word that denotes a referent by specifying a certain characteristic or quality the referent possesses.`

        function createExocentric(arg) {
                let firstElement = "";
                let secondElement = "";

                let firstElementGeneratedArray = "";
                let secondElementGeneratedArray = "";
                let targetElementGeneratedArray = "";

                let firstElementEnglishWordArray = "";
                let secondElementEnglishWordArray = "";
                let targetEnglishWordArray = "";

                let derivedOrInherited = "";
                let etymology = "";

                let compound = "";
                let olderCompound = "";
                let firstElementDerivationList = "";
                let secondElementDerivationList = "";
                let targetDerivationList = "";

                let firstElementEtymologyArray = "";
                let secondElementEtymologyArray = "";
                let targetElementEtymologyArray = "";

                let targetDerivedOrInherited = "";

                let to = "";

                if(typeof arg.compoundMeaning !== "string") {
                        arg.compoundMeaning = randomIndexOfArray(arg.compoundMeaning);
                };
                
                if(arg.firstElementPartOfSpeech === "noun") {
                        if(arg.firstElementType === "count") {
                                firstElement = generatedCountNouns[countNounArray.indexOf(arg.word1)];
                                firstElementEnglishWordArray = countNounArray;
                                firstElementGeneratedArray = generatedCountNouns;
                                firstElementDerivationList = derivationListCountNoun;
                                firstElementEtymologyArray = etymologyArrayCountNoun;
                        } else if (arg.firstElementType === "mass") {
                                firstElement = generatedMassNouns[massNounArray.indexOf(arg.word1)];
                                firstElementEnglishWordArray = massNounArray;
                                firstElementGeneratedArray = generatedMassNouns;
                                firstElementDerivationList = derivationListMassNoun;
                                firstElementEtymologyArray = etymologyArrayMassNoun;
                        };
                } else if (arg.firstElementPartOfSpeech === "adjective") {
                        firstElement = generatedAdjectives[adjectiveArray.indexOf(arg.word1)];
                        firstElementEnglishWordArray = adjectiveArray;
                        firstElementGeneratedArray = generatedAdjectives;
                        firstElementDerivationList = derivationListAdj;
                        firstElementEtymologyArray = etymologyArrayADJ;
                }

                if(arg.secondElementPartOfSpeech === "noun") {
                        if(arg.secondElementType === "count") {
                                secondElement = generatedCountNouns[countNounArray.indexOf(arg.word2)];
                                secondElementEnglishWordArray = countNounArray;
                                secondElementGeneratedArray = generatedCountNouns;
                                secondElementDerivationList = derivationListCountNoun;
                                secondElementEtymologyArray = etymologyArrayCountNoun;
                        } else if (arg.secondElementType === "mass") {
                                secondElement = generatedMassNouns[massNounArray.indexOf(arg.word2)];
                                secondElementEnglishWordArray = massNounArray;
                                secondElementGeneratedArray = generatedMassNouns;
                                secondElementDerivationList = derivationListMassNoun;
                                secondElementEtymologyArray = etymologyArrayMassNoun;
                        };
                };

                if(arg.compoundPartOfSpeech === "noun") {
                        if(arg.compoundType === "count") {
                                targetEnglishWordArray = countNounArray;
                                targetElementGeneratedArray = generatedCountNouns;
                                derivedOrInherited = derivedOrInheritedCountNoun;
                                etymology = etymologyCountNoun;
                                targetElementEtymologyArray = etymologyArrayCountNoun;
                                targetDerivedOrInherited = derivedOrInheritedCountNoun;
                                targetDerivationList = derivationListCountNoun;
                        } else if (arg.compoundType === "mass") {
                                targetEnglishWordArray = massNounArray;
                                targetElementGeneratedArray = generatedMassNouns;
                                derivedOrInherited = derivedOrInheritedMassNoun;
                                etymology = etymologyMassNoun;
                                targetElementEtymologyArray = etymologyArrayMassNoun;
                                targetDerivedOrInherited = derivedOrInheritedMassNoun;
                                targetDerivationList = derivationListMassNoun;
                        };
                };

                //decides if word will have a derivation
                if(Math.floor(Math.random() * 2) === 1) {
                        let firstItemIndex = firstElementEnglishWordArray.indexOf(arg.word1);
                        let secondItemIndex = secondElementEnglishWordArray.indexOf(arg.word2);

                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(Math.floor(Math.random() * 2) === 1) {
                                derivedInModernOrOld = "old";
                                if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                        olderCompound = firstElement + secondElement;
                                } else {
                                        olderCompound = secondElement + firstElement;
                                }
                                
                        } else {
                                derivedInModernOrOld = "modern";
                                if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                        compound = soundChange(firstElement) + soundChange(secondElement);
                                } else {
                                        compound = soundChange(secondElement) + soundChange(firstElement);
                                };
                        };

                        if(targetEnglishWordArray.includes(arg.compoundMeaning)) {
                                if(derivedInModernOrOld === "old") {
                                        targetElementGeneratedArray[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = olderCompound;
                                        targetDerivedOrInherited[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = "inheritedOldDerived";
                                        if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.compoundMeaning)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp"${to}${firstElementEnglishWordArray[firstItemIndex]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp"${to}${secondElementEnglishWordArray[secondItemIndex]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp <i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                        } else {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.compoundMeaning)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp"${to}${secondElementEnglishWordArray[secondItemIndex]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp"${to}${firstElementEnglishWordArray[firstItemIndex]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp <i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                        }
                                        
                                } else {
                                        targetElementGeneratedArray[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = compound;
                                        targetDerivedOrInherited[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = "derived";
                                        if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(firstElementEnglishWordArray[firstItemIndex])}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(secondElementEnglishWordArray[secondItemIndex])}"-&nbsp${arg.compoundDescription}`;
                                        } else {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(secondElementEnglishWordArray[secondItemIndex])}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(firstElementEnglishWordArray[firstItemIndex])}"-&nbsp${arg.compoundDescription}`;
                                        }
                                        

                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(firstElementDerivationList[firstItemIndex] === "") {
                                                firstElementDerivationList[firstItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                        } else {
                                                firstElementDerivationList[firstItemIndex] = firstElementDerivationList[firstItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                        };
                                        if(secondElementDerivationList[secondItemIndex] === "") {
                                                secondElementDerivationList[secondItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                        } else {
                                                secondElementDerivationList[secondItemIndex] = secondElementDerivationList[secondItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                        };
                                }
                                targetElementEtymologyArray[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = [arg.word1, arg.word2];
                                targetDerivationList[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = "";
                        } else {
                                targetEnglishWordArray.push(arg.compoundMeaning);

                                if(arg.compoundPartOfSpeech === "noun" && arg.compoundType === "count") {
                                        countNounArrayPlural.push(arg.plural);
                                        activePassive.push(arg.activePass);
                                        animInan.push(arg.animateInimate);
                                        divineNonDivine.push(arg.divineProfane);
                                        humanAnimalInan.push(arg.humanAnimal);
                                        mascFemNeut.push(arg.masculineFeminineNeuter);
                                        mascFem.push(arg.masculineFeminine);
                                        naturalArtificial.push(arg.naturalArt);
                                        animacyClassifierArray.push(arg.animacy);
                                        shapeClassifierArray.push(arg.shape);
                                        shortGenericClassifierArray.push(arg.shortGeneric);
                                };

                                if(arg.compoundPartOfSpeech === "noun" && arg.compoundType === "mass") {
                                        singulativeMassNounArray.push(arg.singulative);
                                        pluralSingulativeMassNounArray.push(arg.pluralSingulative);
                                        activePassiveMass.push(arg.activePass);
                                        animInanMass.push(arg.animateInimate);
                                        divineNonDivineMass.push(arg.divineProfane);
                                        humanAnimalInanMass.push(arg.humanAnimal);
                                        mascFemNeutMass.push(arg.masculineFeminineNeuter);
                                        mascFemMass.push(arg.masculineFeminine);
                                        naturalArtificialMass.push(arg.naturalArt);
                                        animacyClassifierMassArray.push(arg.animacy);
                                        shapeClassifierMassArray.push(arg.shape);
                                        shortGenericClassifierMassArray.push(arg.shortGeneric);
                                };
                                
                                targetDerivationList.push("");
                                if(derivedInModernOrOld === "old") {
                                        targetElementGeneratedArray.push(olderCompound);
                                        targetDerivedOrInherited.push("inheritedOldDerived");  
                                        if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                                etymology[targetEnglishWordArray.indexOf(compoundMeaning)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.compoundMeaning)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp"${to}${arg.word1}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp"${to}${arg.word2}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                        } else {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.compoundMeaning)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp"${to}${arg.word2}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp"${to}${arg.word1}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                        }                      
                                        
                                } else {
                                        targetElementGeneratedArray.push(compound) 
                                        targetDerivedOrInherited.push("derived");
                                        if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word1)}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word2)}"-&nbsp${arg.compoundDescription}`;
                                        } else {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word2)}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word1)}"-&nbsp${arg.compoundDescription}`;
                                        }
                                        
                                };

                                //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                if(firstElementDerivationList[firstItemIndex] === "") {
                                        firstElementDerivationList[firstItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                } else {
                                        firstElementDerivationList[firstItemIndex] = firstElementDerivationList[firstItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                }; 
                                if(secondElementDerivationList[secondItemIndex] === "") {
                                        secondElementDerivationList[secondItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                } else {
                                        secondElementDerivationList[secondItemIndex] = secondElementDerivationList[secondItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                }; 
                                targetElementEtymologyArray.push([arg.word1, arg.word2]);                       
                        };
                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                let exampleLi = document.createElement("li");
                                if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                      exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word1)}" + <i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word2)}" > <i>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i> "${arg.compoundMeaning}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;  
                                } else {
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word2)}" + <i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word1)}" > <i>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i> "${arg.compoundMeaning}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;  
                                }
                                
                        };
                };
                
                document.getElementById("compounds").appendChild(li);
                li.appendChild(ul);
        };   

        createExocentric({
                compoundDescription: "exocentric&nbspcompound",
                word1: "hungry",
                word2: "sea",
                compoundMeaning: "stormy&nbspsea",
                //noun
                plural: "stormy&nbspseas",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "active",
                animateInimate: "animate",
                divineProfane: "divine",
                humanAnimal: "secondinanimate",
                masculineFeminineNeuter: "masculine2",
                masculineFeminine: "masculine1",
                naturalArt: "natural",
                animacy: "inedible",
                shape: "shapeless",
                shortGeneric: "natural-inanimate",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createExocentric({
                compoundDescription: "exocentric&nbspcompound",
                word1: "dark",
                word2: "man",
                compoundMeaning: ["evil&nbspman", "degenerate"],
                //noun
                plural: ["evil&nbspmen", "degenerates"],
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "active",
                animateInimate: "animate",
                divineProfane: "profane",
                humanAnimal: "human",
                masculineFeminineNeuter: "masculine2",
                masculineFeminine: "masculine1",
                naturalArt: "natural",
                animacy: "man",
                shape: "long-and-slender",
                shortGeneric: "human2",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createExocentric({
                compoundDescription: "exocentric&nbspcompound",
                word1: "alone",
                word2: "man",
                compoundMeaning: "hermit",
                //noun
                plural: "hermits",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "noun",
                compoundType: "count",
                activePass: "active",
                animateInimate: "animate",
                divineProfane: "profane",
                humanAnimal: "human",
                masculineFeminineNeuter: "masculine2",
                masculineFeminine: "masculine1",
                naturalArt: "natural",
                animacy: "man",
                shape: "long-and-slender",
                shortGeneric: "human2",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
}

function comparison() {
        let li = document.createElement("li");
        let ul = document.createElement("ul");
        let exampleCounter = 0;
        li.innerHTML = `Comparison compounds: Comprised of an adjective and a noun, with the meaning of "as ADJ as N" or "ADJ in the same manner as an N". Often the meaning is simply a more intense form of the adjective`

        function createcomparison(arg) {
                let firstElement = "";
                let secondElement = "";

                let firstElementGeneratedArray = "";
                let secondElementGeneratedArray = "";
                let targetElementGeneratedArray = "";

                let firstElementEnglishWordArray = "";
                let secondElementEnglishWordArray = "";
                let targetEnglishWordArray = "";

                let derivedOrInherited = "";
                let etymology = "";

                let compound = "";
                let olderCompound = "";
                let firstElementDerivationList = "";
                let secondElementDerivationList = "";
                let targetDerivationList = "";

                let firstElementEtymologyArray = "";
                let secondElementEtymologyArray = "";
                let targetElementEtymologyArray = "";

                let targetDerivedOrInherited = "";

                let to = "";

                if(typeof arg.word2 !== "string") {
                        let index = Math.floor(Math.random() * arg.word2.length)
                        arg.word2 = arg.word2[index];
                        arg.compoundMeaning = arg.compoundMeaning[index]
                };

                if(typeof arg.word1 !== "string") {
                        let index = Math.floor(Math.random() * arg.word1.length)
                        arg.word1 = arg.word1[index];
                };
                
                if(arg.firstElementPartOfSpeech === "noun") {
                        if(arg.firstElementType === "count") {
                                firstElement = generatedCountNouns[countNounArray.indexOf(arg.word1)];
                                firstElementEnglishWordArray = countNounArray;
                                firstElementGeneratedArray = generatedCountNouns;
                                firstElementDerivationList = derivationListCountNoun;
                                firstElementEtymologyArray = etymologyArrayCountNoun;
                        } else if (arg.firstElementType === "mass") {
                                firstElement = generatedMassNouns[massNounArray.indexOf(arg.word1)];
                                firstElementEnglishWordArray = massNounArray;
                                firstElementGeneratedArray = generatedMassNouns;
                                firstElementDerivationList = derivationListMassNoun;
                                firstElementEtymologyArray = etymologyArrayMassNoun;
                        };
                } else if (arg.firstElementPartOfSpeech === "adjective") {
                        firstElement = generatedAdjectives[adjectiveArray.indexOf(arg.word1)];
                        firstElementEnglishWordArray = adjectiveArray;
                        firstElementGeneratedArray = generatedAdjectives;
                        firstElementDerivationList = derivationListAdj;
                        firstElementEtymologyArray = etymologyArrayADJ;
                }

                if(arg.secondElementPartOfSpeech === "noun") {
                        if(arg.secondElementType === "count") {
                                secondElement = generatedCountNouns[countNounArray.indexOf(arg.word2)];
                                secondElementEnglishWordArray = countNounArray;
                                secondElementGeneratedArray = generatedCountNouns;
                                secondElementDerivationList = derivationListCountNoun;
                                secondElementEtymologyArray = etymologyArrayCountNoun;
                        } else if (arg.secondElementType === "mass") {
                                secondElement = generatedMassNouns[massNounArray.indexOf(arg.word2)];
                                secondElementEnglishWordArray = massNounArray;
                                secondElementGeneratedArray = generatedMassNouns;
                                secondElementDerivationList = derivationListMassNoun;
                                secondElementEtymologyArray = etymologyArrayMassNoun;
                        };
                };

                if(arg.compoundPartOfSpeech === "noun") {
                        if(arg.compoundType === "count") {
                                targetEnglishWordArray = countNounArray;
                                targetElementGeneratedArray = generatedCountNouns;
                                derivedOrInherited = derivedOrInheritedCountNoun;
                                etymology = etymologyCountNoun;
                                targetElementEtymologyArray = etymologyArrayCountNoun;
                                targetDerivedOrInherited = derivedOrInheritedCountNoun;
                                targetDerivationList = derivationListCountNoun;
                        } else if (arg.compoundType === "mass") {
                                targetEnglishWordArray = massNounArray;
                                targetElementGeneratedArray = generatedMassNouns;
                                derivedOrInherited = derivedOrInheritedMassNoun;
                                etymology = etymologyMassNoun;
                                targetElementEtymologyArray = etymologyArrayMassNoun;
                                targetDerivedOrInherited = derivedOrInheritedMassNoun;
                                targetDerivationList = derivationListMassNoun;
                        };
                } else if(arg.compoundPartOfSpeech === "adjective") {
                        targetEnglishWordArray = adjectiveArray;
                        targetElementGeneratedArray = generatedAdjectives;
                        derivedOrInherited = derivedOrInheritedADJ;
                        etymology = etymologyADJ;
                        targetElementEtymologyArray = etymologyArrayADJ;
                        targetDerivedOrInherited = derivedOrInheritedADJ;
                        targetDerivationList = derivationListAdj;
                }

                //decides if word will have a derivation
                if(Math.floor(Math.random() * 2) === 1) {
                        let firstItemIndex = firstElementEnglishWordArray.indexOf(arg.word1);
                        let secondItemIndex = secondElementEnglishWordArray.indexOf(arg.word2);

                        //decides if term is derived in modern language or old language
                        let derivedInModernOrOld = "";
                        if(Math.floor(Math.random() * 2) === 1) {
                                derivedInModernOrOld = "old";
                                if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                        olderCompound = firstElement + secondElement;
                                } else {
                                        olderCompound = secondElement + firstElement;
                                }
                                
                        } else {
                                derivedInModernOrOld = "modern";
                                if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                        compound = soundChange(firstElement) + soundChange(secondElement);
                                } else {
                                        compound = soundChange(secondElement) + soundChange(firstElement);
                                };
                        };

                        if(targetEnglishWordArray.includes(arg.compoundMeaning)) {
                                if(derivedInModernOrOld === "old") {
                                        targetElementGeneratedArray[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = olderCompound;
                                        targetDerivedOrInherited[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = "inheritedOldDerived";
                                        if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.compoundMeaning)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp"${to}${firstElementEnglishWordArray[firstItemIndex]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp"${to}${secondElementEnglishWordArray[secondItemIndex]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp <i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                        } else {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.compoundMeaning)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp"${to}${secondElementEnglishWordArray[secondItemIndex]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp"${to}${firstElementEnglishWordArray[firstItemIndex]}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp <i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                        }
                                        
                                } else {
                                        targetElementGeneratedArray[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = compound;
                                        targetDerivedOrInherited[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = "derived";
                                        if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(firstElementEnglishWordArray[firstItemIndex])}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(secondElementEnglishWordArray[secondItemIndex])}"-&nbsp${arg.compoundDescription}`;
                                        } else {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(secondElementEnglishWordArray[secondItemIndex])}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(firstElementEnglishWordArray[firstItemIndex])}"-&nbsp${arg.compoundDescription}`;
                                        }
                                        
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                        if(firstElementDerivationList[firstItemIndex] === "") {
                                                firstElementDerivationList[firstItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                        } else {
                                                firstElementDerivationList[firstItemIndex] = firstElementDerivationList[firstItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                        };
                                        if(secondElementDerivationList[secondItemIndex] === "") {
                                                secondElementDerivationList[secondItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                        } else {
                                                secondElementDerivationList[secondItemIndex] = secondElementDerivationList[secondItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                        };
                                }
                                targetElementEtymologyArray[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = [arg.word1, arg.word2];
                                targetDerivationList[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = "";
                        } else {
                                targetEnglishWordArray.push(arg.compoundMeaning);

                                if(arg.compoundPartOfSpeech === "noun" && arg.compoundType === "count") {
                                        countNounArrayPlural.push(arg.plural);
                                        activePassive.push(arg.activePass);
                                        animInan.push(arg.animateInimate);
                                        divineNonDivine.push(arg.divineProfane);
                                        humanAnimalInan.push(arg.humanAnimal);
                                        mascFemNeut.push(arg.masculineFeminineNeuter);
                                        mascFem.push(arg.masculineFeminine);
                                        naturalArtificial.push(arg.naturalArt);
                                        animacyClassifierArray.push(arg.animacy);
                                        shapeClassifierArray.push(arg.shape);
                                        shortGenericClassifierArray.push(arg.shortGeneric);
                                };

                                if(arg.compoundPartOfSpeech === "noun" && arg.compoundType === "mass") {
                                        singulativeMassNounArray.push(arg.singulative);
                                        pluralSingulativeMassNounArray.push(arg.pluralSingulative);
                                        activePassiveMass.push(arg.activePass);
                                        animInanMass.push(arg.animateInimate);
                                        divineNonDivineMass.push(arg.divineProfane);
                                        humanAnimalInanMass.push(arg.humanAnimal);
                                        mascFemNeutMass.push(arg.masculineFeminineNeuter);
                                        mascFemMass.push(arg.masculineFeminine);
                                        naturalArtificialMass.push(arg.naturalArt);
                                        animacyClassifierMassArray.push(arg.animacy);
                                        shapeClassifierMassArray.push(arg.shape);
                                        shortGenericClassifierMassArray.push(arg.shortGeneric);
                                };
                                
                                targetDerivationList.push("");
                                if(derivedInModernOrOld === "old") {
                                        targetElementGeneratedArray.push(olderCompound);
                                        targetDerivedOrInherited.push("inheritedOldDerived");  
                                        if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.compoundMeaning)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp"${to}${arg.word1}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp"${to}${arg.word2}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                        } else {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `Old&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(addGrammaticalAffixes(olderCompound, arg.compoundPartOfSpeech))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.compoundMeaning)}"&nbsp<&nbsp<i>${spell(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech))}</i>&nbsp"${to}${arg.word2}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>)&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech))}</i>&nbsp"${to}${arg.word1}"&nbsp(cf&nbspModern&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>)-&nbsp${arg.compoundDescription}`;
                                        }                      
                                        
                                } else {
                                        targetElementGeneratedArray.push(compound) 
                                        targetDerivedOrInherited.push("derived");
                                        if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word1)}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word2)}"-&nbsp${arg.compoundDescription}`;
                                        } else {
                                                etymology[targetEnglishWordArray.indexOf(arg.compoundMeaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word2)}"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i>&nbsp"${to}${removeDistinguishingLetter(arg.word1)}"-&nbsp${arg.compoundDescription}`;
                                        }
                                        //lists the derived word, so it can be displayed in the dictionary entry of the original word
                                if(firstElementDerivationList[firstItemIndex] === "") {
                                        firstElementDerivationList[firstItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                } else {
                                        firstElementDerivationList[firstItemIndex] = firstElementDerivationList[firstItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                }; 
                                if(secondElementDerivationList[secondItemIndex] === "") {
                                        secondElementDerivationList[secondItemIndex] = `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`
                                } else {
                                        secondElementDerivationList[secondItemIndex] = secondElementDerivationList[secondItemIndex] + `<br>&nbsp&nbsp&nbsp&nbsp-&nbsp<i><strong>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i></strong>&nbsp"${arg.compoundMeaning}"`;
                                }; 
                                };

                        
                                targetElementEtymologyArray.push([arg.word1, arg.word2]);                       
                        };
                        if(exampleCounter < 6 && derivedInModernOrOld === "modern") {
                                let exampleLi = document.createElement("li");
                                if(checkIfHeadInitialOrHeadFinal === "headInitial") {
                                      exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word1)}" + <i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word2)}" > <i>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i> "${arg.compoundMeaning}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;  
                                } else {
                                        exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(secondElementGeneratedArray[secondItemIndex], arg.secondElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word2)}" + <i>${spell(soundChange(addGrammaticalAffixes(firstElementGeneratedArray[firstItemIndex], arg.firstElementPartOfSpeech)))}</i> "${to}${removeDistinguishingLetter(arg.word1)}" > <i>${spell(addGrammaticalAffixes(compound, arg.compoundPartOfSpeech))}</i> "${arg.compoundMeaning}"`;
                                        ul.appendChild(exampleLi);
                                        exampleCounter++;  
                                }
                                
                        };
                };
                
                document.getElementById("compounds").appendChild(li);
                li.appendChild(ul);
        };   

        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "long",
                word2: ["arm", "belt", "javelin", "river", "year"],
                compoundMeaning: ["as&nbsplong&nbspas&nbspan&nbsparm", "as&nbsplong&nbspas&nbspa&nbspbelt", "as&nbsplong&nbspas&nbspa&nbspjavelin", "as&nbsplong&nbspas&nbspa&nbspriver", "yearlong"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "able",
                word2: ["craftsman", "horse", "ox"],
                compoundMeaning: ["as&nbspable&nbspas&nbspa&nbspcraftsman", "as&nbspable&nbspas&nbspa&nbsphorse", "as&nbspable&nbspas&nbspan&nbspox"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "angry",
                word2: "wolf",
                compoundMeaning: ["as&nbspangry&nbspas&nbspa&nbspwolf"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "beautiful",
                word2: ["flower", "butterfly", "star", "crown", "spring"],
                compoundMeaning: ["as&nbspbeautiful&nbspas&nbspa&nbspflower", "as&nbspbeautiful&nbspas&nbspa&nbspbutterfly", "as&nbspbeautiful&nbspas&nbspa&nbspstar", "as&nbspbeautiful&nbspas&nbspa&nbspcrown", "as&nbspbeautiful&nbspas&nbspspring"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "blind",
                word2: ["night", "boulder"],
                compoundMeaning: ["as&nbspblind&nbspas&nbspnight", "as&nbspblind&nbspas&nbspa&nbspboulder"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "dark",
                word2: ["night", "shadow"],
                compoundMeaning: ["as&nbspdark&nbspas&nbspnight", "as&nbspdark&nbspas&nbspa&nbspshadow"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "bright",
                word2: ["sun", "day", "fire", "noon", "sky"],
                compoundMeaning: ["as&nbspbright&nbspas&nbspthe&nbspsun", "as&nbspbright&nbspas&nbspday", "as&nbspbright&nbspas&nbspfire", "as&nbspbright&nbspas&nbspnoon", "as&nbspbright&nbspas&nbspthe&nbspsky"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "fast",
                word2: ["horse", "hare"],
                compoundMeaning: ["as&nbspfast&nbspas&nbspa&nbsphorse", "as&nbspfast&nbspas&nbspa&nbsphare"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "fast",
                word2: "wind",
                compoundMeaning: ["as&nbspfast&nbspas&nbspwind"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "mass",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "evil",
                word2: ["crime", "criminal", "evil"],
                compoundMeaning: ["as&nbspevil&nbspas&nbspcrime", "as&nbspevil&nbspas&nbspa&nbspcriminal", "as&nbspevil&nbspas&nbspa&nbspmonster"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "good",
                word2: ["dog", "friend", "tree"],
                compoundMeaning: ["as&nbspgood&nbspas&nbspa&nbspdog", "as&nbspgood&nbspas&nbspa&nbspfriend", "as&nbspgood&nbspas&nbspa&nbsptree"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "green",
                word2: "grass",
                compoundMeaning: ["as&nbspgreen&nbspas&nbspgrass"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "mass",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "intelligent",
                word2: ["crow", "fire", "raven"],
                compoundMeaning: ["as&nbspintelligent&nbspas&nbspa&nbspcrow", "as&nbspintelligent&nbspas&nbspa&nbspraven", "as&nbspintelligent&nbspas&nbspfire"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: ["holy", "divine"],
                word2: "god",
                compoundMeaning: "as&nbspdivine&nbspas&nbspa&nbspgod",
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "hostile",
                word2: ["enemy", "foreigner", "stranger"],
                compoundMeaning: ["as&nbsphostile&nbspas&nbspan&nbspenemy", "as&nbsphostile&nbspas&nbspa&nbspforeigner", "as&nbsphostile&nbspas&nbspan&nbspstranger"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "healthy",
                word2: ["cow", "bull", "boar"],
                compoundMeaning: ["as&nbsphealthy&nbspas&nbspa&nbspcow", "as&nbsphealthy&nbspas&nbspa&nbspbull", "as&nbsphealthy&nbspas&nbspa&nbspboar"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "hot",
                word2: ["fire", "sun", "furnace"],
                compoundMeaning: ["as&nbsphot&nbspas&nbspfire", "as&nbsphoty&nbspas&nbspthe&nbspsun", "as&nbsphot&nbspas&nbspa&nbspfurnace"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: ["strong", "powerful"],
                word2: ["fort", "stallion", "bear", "ox", "oak", "hammer", "dragon", "boar", "bull", "mammoth"],
                compoundMeaning: ["as&nbspstrong&nbspas&nbspa&nbspfort", "as&nbspstrong&nbspas&nbspa&nbspstallion", "as&nbspstrong&nbspas&nbspa&nbspbear", "as&nbspstrong&nbspas&nbspan&nbspox", "as&nbspstrong&nbspas&nbspan&nbspoak&nbsptree", "as&nbspstrong&nbspas&nbspa&nbsphammer", "as&nbspstrong&nbspas&nbspa&nbspdragon", "as&nbspstrong&nbspas&nbspa&nbspbear", "as&nbspstrong&nbspas&nbspa&nbspbull", "as&nbspstrong&nbspas&nbspa&nbspmammoth"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: ["strong", "powerful"],
                word2: ["fort", "stallion", "bear", "ox", "oak", "hammer", "dragon", "boar", "bull", "mammoth"],
                compoundMeaning: ["as&nbspstrong&nbspas&nbspa&nbspfort", "as&nbspstrong&nbspas&nbspa&nbspstallion", "as&nbspstrong&nbspas&nbspa&nbspbear", "as&nbspstrong&nbspas&nbspan&nbspox", "as&nbspstrong&nbspas&nbspan&nbspoak&nbsptree", "as&nbspstrong&nbspas&nbspa&nbsphammer", "as&nbspstrong&nbspas&nbspa&nbspdragon", "as&nbspstrong&nbspas&nbspa&nbspbear", "as&nbspstrong&nbspas&nbspa&nbspbull", "as&nbspstrong&nbspas&nbspa&nbspmammoth"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "hungry",
                word2: ["wolf", "cow", "dragon"],
                compoundMeaning: ["as&nbsphungry&nbspas&nbspa&nbspwolf", "as&nbsphungry&nbspas&nbspa&nbspcow", "as&nbsphungry&nbspas&nbspa&nbspdragon"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "new",
                word2: ["lamb", "kitten", "puppy"],
                compoundMeaning: ["as&nbspnew&nbspas&nbspa&nbsplamb", "as&nbspnew&nbspas&nbspa&nbspkitten", "as&nbspnew&nbspas&nbspa&nbsppuppy"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "noble",
                word2: ["lord", "honour", "king", "oath", "stag", "tree", "wolf", "crown", "eagle"],
                compoundMeaning: ["as&nbspnoble&nbspas&nbspa&nbsplord", "as&nbspnoble&nbspas&nbspa&nbsphonour", "as&nbspnoble&nbspas&nbspa&nbspking", "as&nbspnoble&nbspas&nbspa&nbspoath", "as&nbspnoble&nbspas&nbspa&nbspstag", "as&nbspnoble&nbspas&nbspa&nbsptree", "as&nbspnoble&nbspas&nbspa&nbspwolf", "as&nbspnoble&nbspas&nbspa&nbspcrown", "as&nbspnoble&nbspas&nbspa&nbspeagle"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "painful",
                word2: "wound",
                compoundMeaning: ["as&nbsppainful&nbspas&nbspa&nbspwound"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "old",
                word2: ["tree", "forest", "stone", "sun"],
                compoundMeaning: ["as&nbspold&nbspas&nbspa&nbsptree", "as&nbspold&nbspas&nbspa&nbspforest", "as&nbspold&nbspas&nbspa&nbspstone", "as&nbspold&nbspas&nbspa&nbspsun"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "pure",
                word2: ["honour", "oath", "star"],
                compoundMeaning: ["as&nbsppure&nbspas&nbsphonour", "as&nbsppure&nbspas&nbspan&nbspoath", "as&nbsppure&nbspas&nbspa&nbspstar"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "quiet",
                word2: ["leaf", "owl", "tree"],
                compoundMeaning: ["as&nbspquiet&nbspas&nbspleaf", "as&nbspquiet&nbspans&nbspowl", "as&nbspquiet&nbspas&nbsptree"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "blunt",
                word2: "club",
                compoundMeaning: "as&nbspblunt&nbspas&nbspa&nbspclub",
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "sharp",
                word2: ["arrow", "axe", "blade", "knife", "razor", "thorn"],
                compoundMeaning: ["as&nbspsharp&nbspas&nbspan&nbsparrow", "as&nbspsharp&nbspas&nbspan&nbspaxe", "as&nbspsharp&nbspas&nbspa&nbspblade", "as&nbspsharp&nbspas&nbspa&nbspknife", "as&nbspsharp&nbspas&nbspa&nbsprazor", "as&nbspsharp&nbspas&nbspa&nbspthorn"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "slow",
                word2: ["snail", "slug"],
                compoundMeaning: ["as&nbspslow&nbspas&nbspa&nbspsnail", "as&nbspslow&nbspas&nbspa&nbspslug"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "soft",
                word2: ["cloud", "sheep"],
                compoundMeaning: ["as&nbspsoft&nbspas&nbspa&nbspcloud", "as&nbspsoft&nbspas&nbspa&nbspsheep"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "stiff",
                word2: ["beam", "bolt", "book", "broom", "oar"],
                compoundMeaning: ["as&nbspstiff&nbspas&nbspa&nbspbeam", "as&nbspstiff&nbspas&nbspa&nbspbolt", "as&nbspstiff&nbspas&nbspa&nbspbook", "as&nbspstiff&nbspas&nbspa&nbspbroom", "as&nbspstiff&nbspas&nbspa&nbspoar"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "tall",
                word2: ["crane", "cliff", "mountain", "door"],
                compoundMeaning: ["as&nbsptall&nbspas&nbspa&nbspcrane", "as&nbsptall&nbspas&nbspa&nbspcliff", "as&nbsptall&nbspas&nbspa&nbspmountain", "as&nbsptall&nbspas&nbspa&nbspdoor"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "violent",
                word2: ["wolf", "storm"],
                compoundMeaning: ["as&nbspviolent&nbspas&nbspa&nbspwolf", "as&nbspviolent&nbspas&nbspa&nbspstorm"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "loud",
                word2: ["dog", "storm", "rooster"],
                compoundMeaning: ["as&nbsploud&nbspas&nbspa&nbspdog", "as&nbsploud&nbspas&nbspa&nbspstorm", "as&nbsploud&nbspas&nbspa&nbsprooster"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "small",
                word2: ["ant", "bee", "gnat", "grain", "louse", "larva", "maggot", "mouse", "pea", "pebble"],
                compoundMeaning: ["as&nbspsmall&nbspas&nbspan&nbspant", "as&nbspsmall&nbspas&nbspa&nbspbee", "as&nbspsmall&nbspas&nbspa&nbspgnat", "as&nbspsmall&nbspas&nbspa&nbspgrain", "as&nbspsmall&nbspas&nbspa&nbsplouse", "as&nbspsmall&nbspas&nbspa&nbsplarva","as&nbspsmall&nbspas&nbspa&nbspmaggot", "as&nbspsmall&nbspas&nbspa&nbspmouse", "as&nbspsmall&nbspas&nbspa&nbsppea", "as&nbspsmall&nbspas&nbspa&nbsppebble"],
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "thin",
                word2: "reed",
                compoundMeaning: "as&nbspthin&nbspas&nbspa&nbspreed",
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        createcomparison({
                compoundDescription: "comparison&nbspcompound",
                word1: "deep",
                word2: "ocean",
                compoundMeaning: "as&nbspdeep&nbspas&nbspan&nbspocean",
                //noun
                plural: "",
                firstElementPartOfSpeech: "adjective",
                secondElementPartOfSpeech: "noun",
                firstElementType: "",
                secondElementType: "count",
                compoundPartOfSpeech: "adjective",
                compoundType: "",
                activePass: "",
                animateInimate: "",
                divineProfane: "",
                humanAnimal: "",
                masculineFeminineNeuter: "",
                masculineFeminine: "",
                naturalArt: "",
                animacy: "",
                shape: "",
                shortGeneric: "",
                //adjective
                comparative: "",
                //verb
                past: "",
                thirdPerson: ""
        });
        
}

function makeVocabStats() {
        let nounNum = countNounArray.length + massNounArray.length;
        let verbNum = transitiveVerbArray.length + intransitiveVerbArray.length;
        let adjNum = adjectiveArray.length;
        let advNum = adverbArray.length;
        let conjNum = conjunctionArray.length;
        let adpoNum = adpositionArray.length;
        let intensNum = intensifierArray.length;
        let quantifierNum = smallQuantifiersArray.length + middingQuantifierArray.length +  bigQuantifierArray.length +  opinionQuantifierArray.length;
        let allQuantifierArray = smallQuantifiersArray.concat(middingQuantifierArray, bigQuantifierArray, opinionQuantifierArray);
        let wordsNum = nounNum + verbNum + adjNum + conjNum + adpoNum + intensNum + advNum + quantifierNum;

        //counts all nouns
        let nounAmount = document.getElementById("amount-of-nouns");
        let nounPercent = Math.round(nounNum/wordsNum * 100);
        nounAmount.innerHTML = `${nounPercent}% (${nounNum})`;

        //counts all verbs
        let verbAmount = document.getElementById("amount-of-verbs");
        let verbPercent = Math.round(verbNum/wordsNum * 100);
        verbAmount.innerHTML = `${verbPercent}% (${verbNum})`;

        //counts all adjectives
        let adjectiveAmount = document.getElementById("amount-of-adj");
        let adjPercent = Math.round(adjNum/wordsNum * 100);
        adjectiveAmount.innerHTML = `${adjPercent}% (${adjNum})`;

        //counts all conjunctions
        let conjAmount = document.getElementById("amount-of-conj");
        let conjPercent = Math.round(conjNum/wordsNum * 100);
        conjAmount.innerHTML = `${conjPercent}% (${conjNum})`;

        //counts all adpositions
        let adpoAmount = document.getElementById("amount-of-adpo");
        let adpoPercent = Math.round(adpoNum/wordsNum * 100);
        adpoAmount.innerHTML = `${adpoPercent}% (${adpoNum})`;

        //counts all adverbs
        let advAmount = document.getElementById("amount-of-adverbs");
        let advPercent = Math.round(advNum/wordsNum * 100);
        advAmount.innerHTML = `${advPercent}% (${advNum})`;

        //counts all intensiiers
        let intensAmount = document.getElementById("amount-of-intens");
        let intensPercent = Math.round(intensNum/wordsNum * 100);
        intensAmount.innerHTML = `${intensPercent}% (${intensNum})`;

        //counts all quanitifers
        let quantifierAmount = document.getElementById("amount-of-quantifiers");
        let quantifierPercent = Math.round(quantifierNum/wordsNum * 100);
        quantifierAmount.innerHTML = `${quantifierPercent}% (${quantifierNum})`;

        //counts all count nouns
        let countNounAmount = document.getElementById("amount-of-count-nouns");;
        let countNounNum = countNounArray.length;
        let countNounPercent = Math.round(countNounNum/nounNum * 100);
        countNounAmount.innerHTML = `${countNounPercent}% (${countNounNum})`;

        //counts all mass nouns
        let massNounAmount = document.getElementById("amount-of-mass-nouns");;
        let massNounNum = massNounArray.length;
        let massNounPercent = Math.round(massNounNum/nounNum * 100);
        massNounAmount.innerHTML = `${massNounPercent}% (${massNounNum})`;

        //counts all transitive nouns
        let transVerbAmount = document.getElementById("amount-of-trans-verbs");;
        let transVerbNum = transitiveVerbArray.length;
        let transVerbPercent = Math.round(transVerbNum/verbNum * 100);
        transVerbAmount.innerHTML = `${transVerbPercent}% (${transVerbNum})`;

        //counts all intransitive nouns
        let intransVerbAmount = document.getElementById("amount-of-intrans-verbs");;
        let intransVerbNum = intransitiveVerbArray.length;
        let intransVerbPercent = Math.round(intransVerbNum/verbNum * 100);
        intransVerbAmount.innerHTML = `${intransVerbPercent}% (${intransVerbNum})`;

        //counts which words were inherited vs derived
        let inheritedWord = document.getElementById("inherited-vocab");
        let derivedWord = document.getElementById("derived-vocab");
        let inheritednounNum = 0;
        let derivednounNum = 0;
        for(let i = 0; i < countNounArray.length; i++) {
                if(derivedOrInheritedCountNoun[i] === "inherited"||derivedOrInheritedCountNoun[i] === "inheritedOldDerived") {
                        inheritednounNum++;
                } else if(derivedOrInheritedCountNoun[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < massNounArray.length; i++) {
                if(derivedOrInheritedMassNoun[i] === "inherited"||derivedOrInheritedMassNoun[i] === "inheritedOldDerived") {
                        inheritednounNum++;
                } else if(derivedOrInheritedMassNoun[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < adjectiveArray.length; i++) {
                if(derivedOrInheritedADJ[i] === "inherited"||derivedOrInheritedADJ[i] === "inheritedOldDerived") {
                        inheritednounNum++;
                } else if(derivedOrInheritedADJ[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < transitiveVerbArray.length; i++) {
                if(derivedOrInheritedTransVerb[i] === "inherited"||derivedOrInheritedTransVerb[i] === "inheritedOldDerived") {
                        inheritednounNum++;
                } else if(derivedOrInheritedTransVerb[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < intransitiveVerbArray.length; i++) {
                if(derivedOrInheritedIntransVerb[i] === "inherited"||derivedOrInheritedIntransVerb[i] === "inheritedOldDerived") {
                        inheritednounNum++;
                } else if(derivedOrInheritedIntransVerb[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < conjunctionArray.length; i++) {
                if(derivedOrInheritedCONJ[i] === "inherited"||derivedOrInheritedCONJ[i] === "inheritedOldDerived") {
                        inheritednounNum++;
                } else if(derivedOrInheritedCONJ[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < adverbArray.length; i++) {
                if(derivedOrInheritedADV[i] === "inherited"||derivedOrInheritedADV[i] === "inheritedOldDerived") {
                        inheritednounNum++;
                } else if(derivedOrInheritedADV[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < intensifierArray.length; i++) {
                if(derivedOrInheritedINTENS[i] === "inherited"||derivedOrInheritedINTENS[i] === "inheritedOldDerived") {
                        inheritednounNum++;
                } else if(derivedOrInheritedINTENS[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < allQuantifierArray.length; i++) {
                if(derivedOrInheritedQuantifier[i] === "inherited"||derivedOrInheritedQuantifier[i] === "inheritedOldDerived") {
                        inheritednounNum++;
                } else if(derivedOrInheritedQuantifier[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < adpositionArray.length; i++) {
                if(derivedOrInheritedADPO[i] === "inherited"||derivedOrInheritedADPO[i] === "inheritedOldDerived") {
                        inheritednounNum++;
                } else if(derivedOrInheritedADPO[i] === "derived") {
                        derivednounNum++;
                };
        };
        inheritedWord.innerHTML = `${Math.round(inheritednounNum/wordsNum*100)}% (${inheritednounNum})`;
        derivedWord.innerHTML = `${Math.round(derivednounNum/wordsNum*100)}% (${derivednounNum})`;

        //counts which nouns were inherited vs derived
        let inheritedNoun = document.getElementById("inherited-vocab-noun");
        let derivedNoun = document.getElementById("derived-vocab-noun");
        let inheritedNounNum = 0;
        let derivedNounNum = 0;
        for(let i = 0; i < countNounArray.length; i++) {
                if(derivedOrInheritedCountNoun[i] === "inherited"||derivedOrInheritedCountNoun[i] === "inheritedOldDerived") {
                        inheritedNounNum++;
                } else if(derivedOrInheritedCountNoun[i] === "derived") {
                        derivedNounNum++;
                };
        };
        for(let i = 0; i < massNounArray.length; i++) {
                if(derivedOrInheritedMassNoun[i] === "inherited"||derivedOrInheritedMassNoun[i] === "inheritedOldDerived") {
                        inheritedNounNum++;
                } else if(derivedOrInheritedMassNoun[i] === "derived") {
                        derivedNounNum++;
                };
        };
        inheritedNoun.innerHTML = `${Math.round(inheritedNounNum/nounNum*100)}% (${inheritedNounNum})`;
        derivedNoun.innerHTML = `${Math.round(derivedNounNum/nounNum*100)}% (${derivedNounNum})`;

        //counts which verbs were inherited vs derived
        let inheritedVerb = document.getElementById("inherited-vocab-verb");
        let derivedVerb = document.getElementById("derived-vocab-verb");
        let inheritedVerbNum = 0;
        let derivedVerbNum = 0;
        for(let i = 0; i < transitiveVerbArray.length; i++) {
                if(derivedOrInheritedTransVerb[i] === "inherited"||derivedOrInheritedTransVerb[i] === "inheritedOldDerived") {
                        inheritedVerbNum++;
                } else if(derivedOrInheritedTransVerb[i] === "derived") {
                        derivedVerbNum++;
                };
        };
        for(let i = 0; i < intransitiveVerbArray.length; i++) {
                if(derivedOrInheritedIntransVerb[i] === "inherited"||derivedOrInheritedIntransVerb[i] === "inheritedOldDerived") {
                        inheritedVerbNum++;
                } else if(derivedOrInheritedIntransVerb[i] === "derived") {
                        derivedVerbNum++;
                };
        };
        inheritedVerb.innerHTML = `${Math.round(inheritedVerbNum/verbNum*100)}% (${inheritedVerbNum})`;
        derivedVerb.innerHTML = `${Math.round(derivedVerbNum/verbNum*100)}% (${derivedVerbNum})`;

        //counts which adjectives were inherited vs derived
        let inheritedAdj = document.getElementById("inherited-vocab-adjectives");
        let derivedAdj = document.getElementById("derived-vocab-adjectives");
        let inheritedAdjNum = 0;
        let derivedAdjNum = 0;
        for(let i = 0; i < adjectiveArray.length; i++) {
                if(derivedOrInheritedADJ[i] === "inherited"||derivedOrInheritedADJ[i] === "inheritedOldDerived") {
                        inheritedAdjNum++;
                } else if(derivedOrInheritedADJ[i] === "derived") {
                        derivedAdjNum++;
                };
        };
        inheritedAdj.innerHTML = `${Math.round(inheritedAdjNum/adjNum*100)}% (${inheritedAdjNum})`;
        derivedAdj.innerHTML = `${Math.round(derivedAdjNum/adjNum*100)}% (${derivedAdjNum})`;

        //counts which adverbs were inherited vs derived
        let inheritedAdv = document.getElementById("inherited-vocab-adverbs");
        let derivedAdv = document.getElementById("derived-vocab-adverbs");
        let inheritedAdvNum = 0;
        let derivedAdvNum = 0;
        for(let i = 0; i < adverbArray.length; i++) {
                if(derivedOrInheritedADV[i] === "inherited"||derivedOrInheritedADV[i] === "inheritedOldDerived") {
                        inheritedAdvNum++;
                } else if(derivedOrInheritedADV[i] === "derived") {
                        derivedAdvNum++;
                };
        };
        inheritedAdv.innerHTML = `${Math.round(inheritedAdvNum/advNum*100)}% (${inheritedAdvNum})`;
        derivedAdv.innerHTML = `${Math.round(derivedAdvNum/advNum*100)}% (${derivedAdvNum})`;

        //counts which conjunctions were inherited vs derived
        let inheritedConj = document.getElementById("inherited-vocab-conj");
        let derivedConj = document.getElementById("derived-vocab-conj");
        let inheritedConjNum = 0;
        let derivedConjNum = 0;
        for(let i = 0; i < conjunctionArray.length; i++) {
                if(derivedOrInheritedCONJ[i] === "inherited"||derivedOrInheritedCONJ[i] === "inheritedOldDerived") {
                        inheritedConjNum++;
                } else if(derivedOrInheritedCONJ[i] === "derived") {
                        derivedConjNum++;
                };
        };
        inheritedConj.innerHTML = `${Math.round(inheritedConjNum/conjNum*100)}% (${inheritedConjNum})`;
        derivedConj.innerHTML = `${Math.round(derivedConjNum/conjNum*100)}% (${derivedConjNum})`;

        //counts which adpositions were inherited vs derived
        let inheritedADPO = document.getElementById("inherited-vocab-adpo");
        let derivedADPO = document.getElementById("derived-vocab-adpo");
        let inheritedADPONum = 0;
        let derivedADPONum = 0;
        for(let i = 0; i < adpositionArray.length; i++) {
                if(derivedOrInheritedADPO[i] === "inherited"||derivedOrInheritedADPO[i] === "inheritedOldDerived") {
                        inheritedADPONum++;
                } else if(derivedOrInheritedADPO[i] === "derived") {
                        derivedADPONum++;
                };
        };
        inheritedADPO.innerHTML = `${Math.round(inheritedADPONum/adpoNum*100)}% (${inheritedADPONum})`;
        derivedADPO.innerHTML = `${Math.round(derivedADPONum/adpoNum*100)}% (${derivedADPONum})`;

        //counts which intensifiers were inherited vs derived
        let inheritedINTENS = document.getElementById("inherited-vocab-intens");
        let derivedINTENS = document.getElementById("derived-vocab-intens");
        let inheritedINTENSNum = 0;
        let derivedINTENSNum = 0;
        for(let i = 0; i < intensifierArray.length; i++) {
                if(derivedOrInheritedADPO[i] === "inherited"||derivedOrInheritedADPO[i] === "inheritedOldDerived") {
                        inheritedINTENSNum++;
                } else if(derivedOrInheritedADPO[i] === "derived") {
                        derivedINTENSNum++;
                };
        };
        inheritedINTENS.innerHTML = `${Math.round(inheritedINTENSNum/intensNum*100)}% (${inheritedINTENSNum})`;
        derivedINTENS.innerHTML = `${Math.round(derivedINTENSNum/intensNum*100)}% (${derivedINTENSNum})`;

        //counts which quantifiers were inherited vs derived
        let inheritedQUANT = document.getElementById("inherited-vocab-quant");
        let derivedQUANT = document.getElementById("derived-vocab-quant");
        let inheritedQUANTNum = 0;
        let derivedQUANTNum = 0;
        for(let i = 0; i < allQuantifierArray.length; i++) {
                if(derivedOrInheritedQuantifier[i] === "inherited"||derivedOrInheritedQuantifier[i] === "inheritedOldDerived") {
                        inheritedQUANTNum++;
                } else if(derivedOrInheritedQuantifier[i] === "derived") {
                        derivedQUANTNum++;
                };
        };
        inheritedQUANT.innerHTML = `${Math.round(inheritedQUANTNum/quantifierNum*100)}% (${inheritedQUANTNum})`;
        derivedQUANT.innerHTML = `${Math.round(derivedQUANTNum/quantifierNum*100)}% (${derivedQUANTNum})`;
};

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    clear();
    mergeQuantifierArrays();
    createAffixes();
    selectDerivationalAffixes();
    makeVocabStats();
    
};



export {countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, adjectiveArray, conjunctionArray, adverbArray, adpositionArray, intensifierArray, countNounArrayPlural, generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, etymologyArrayADJ, derivedOrInheritedADJ, etymologyADJ, etymologyCountNoun, derivedOrInheritedCountNoun, activePassive, animInan, divineNonDivine, humanAnimalInan, mascFemNeut, mascFem, naturalArtificial, animacyClassifierArray, shapeClassifierArray, shortGenericClassifierArray, etymologyArrayCountNoun, pluralSingulativeMassNounArray, singulativeMassNounArray, etymologyMassNoun, etymologyArrayMassNoun, comparativeAdjectiveArray, derivedOrInheritedTransVerb, etymologyArrayTransVerb, etymologyTransVerb,derivedOrInheritedMassNoun, derivationListTransVerb, derivationListIntransVerb, derivedOrInheritedIntransVerb, etymologyArrayIntransVerb, etymologyIntransVerb, derivationListCountNoun, derivationListMassNoun, derivationListAdj, derivationListAdpo, etymologyADPO, derivedOrInheritedADPO, quantifierArray, generatedQuantifiers, etymologyArrayQuantifier, etymologyQuantifier, derivationListQuantfier, derivedOrInheritedQuantifier, derivedOrInheritedINTENS, derivationListIntensifier, derivationListAdverb, derivedOrInheritedADV
}