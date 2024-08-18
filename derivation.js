import {countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, adjectiveArray, conjunctionArray, adverbArray, adpositionArray, intensifierArray, countNounArrayPlural, generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, generateAffixes, typologyNum, markedSingularOrNot, singularAffix, numberSuffixOrPrefix, grammaticalNum, generalAffix, genderNum, animateAffix, inanimateAffix, animInanMass, divineNonDivineMass, humanAnimalInanMass, mascFemMass,  mascFemNeutMass, naturalArtificialMass, animacyClassifierMassArray, shapeClassifierMassArray, activePassiveMass, shortGenericClassifierMassArray, masculineAffix, feminineAffix, neuterAffix, humanAffix, animalAffix, inanimate2Affix, divineAffix, profaneAffix, activeAffix, passiveAffix, naturalAffix, artificialAffix, nominativeAffix} from './script.js';
import { spell } from './orthography.js';
import { soundChange, cloneArray } from './soundchange.js';
import {activePassive, animInan, divineNonDivine, humanAnimalInan, mascFemNeut, mascFem, naturalArtificial, animacyClassifierArray, shapeClassifierArray, shortGenericClassifierArray, derivedOrInheritedCountNoun, etymologyArrayCountNoun, etymologyCountNoun, possessorOfQualityCount} from './englishWordArrays/Nouns/countNouns.js'
import {derivedOrInheritedMassNoun, etymologyArrayMassNoun, etymologyMassNoun, possessorOfQualityMass, singulativeMassNounArray, pluralSingulativeMassNounArray} from './englishWordArrays/Nouns/massNouns.js'
import {proneADJtrans, derivedOrInheritedTransVerb} from '/englishWordArrays/Verbs/englishTransitiveVerbs.js';
import {proneADJintrans, derivedOrInheritedIntransVerb} from '/englishWordArrays/Verbs/englishIntransitiveVerbs.js';
import { etymologyArrayADJ, derivedOrInheritedADJ, etymologyADJ} from './englishWordArrays/Adjectives/englishAdjectives.js';
import {grammaticalNumber, caseNumber, animSgAffix, inanSgAffix, grammaticalNumber as grammaticalNumberFusional, mascSgAffix, femSgAffix} from './fusionalNouns.js';
import {smallQuantifiersArray, middingQuantifierArray, bigQuantifierArray, opinionQuantifierArray} from './englishWordArrays/quantifierArray.js';
import {derivedOrInheritedCONJ} from './englishWordArrays/conjunctions.js'
import {derivedOrInheritedADV} from './englishWordArrays/adverbs.js'
import {derivedOrInheritedINTENS} from './englishWordArrays/intensifier.js'
import {derivedOrInheritedQuantifier} from './englishWordArrays/quantifierArray.js'
import {derivedOrInheritedADPO} from './englishWordArrays/adpositions.js'
import {randomIndexOfArray} from './library.js'

let proneAffix = "";
let possessorAffix = "";
let possessorQualityAffix = "";
let bodyPartAffix = "";

function clear() {
    proneAffix = "";
    possessorAffix = "";
    possessorQualityAffix = "";
    bodyPartAffix = "";
    document.getElementById("derivational-affixes").replaceChildren();
    
};

function createAffixes() {
    proneAffix = generateAffixes();
    possessorAffix = generateAffixes();
    possessorQualityAffix = generateAffixes();
    bodyPartAffix = generateAffixes();
};

function removeVFromVerb(verb) {
    let newArray = Array.from(verb);
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === "V") {
            newArray.splice(i, 1);
            let newVerb = newArray.join("");
            return newVerb;
        };
    };
    return verb;
};

//if the language requires an affix in the nominative, this function applies ther appropiate affix to the derived term
function addGrammaticalAffixes(word) {
    let inflectedWord = "";

    if(generatedCountNouns.includes(word) || generatedMassNouns.includes(word)){   
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
                        inflectedWord = word + singularAffix;
                } else {
                        inflectedWord = singularAffix + word;
                };
                } else if(grammaticalNumberFusional < 24 && markedSingularOrNot() === false && genderNum < 9 && caseNumber === 0) {
                inflectedWord = word;
                };
                if(grammaticalNumberFusional < 24 && genderNum < 9 && caseNumber > 0) {
                if(numberSuffixOrPrefix === "suffix") {
                        inflectedWord = word + nominativeAffix;
                } else {
                        inflectedWord = nominativeAffix + word;
                };
                };
                if(grammaticalNumberFusional < 24 && genderNum === 9 && caseNumber === 0) {
                for(let i = 0; i < generatedCountNouns.length; i++) {
                        if(generatedCountNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "suffix") {
                                inflectedWord = word + animSgAffix;
                        } else if(generatedCountNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "prefix") {
                                inflectedWord = animSgAffix + word;
                        } else if(generatedCountNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "suffix") {
                                inflectedWord = word + inanSgAffix;
                        } else if(generatedCountNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "prefix") {
                                inflectedWord = inanSgAffix + word;
                        };
                };
                for(let i = 0; i < generatedMassNouns.length; i++) {
                        if(generatedMassNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "suffix") {
                                inflectedWord = word + animSgAffix;
                        } else if(generatedMassNouns[i] === word && animInan[i] === "anim" && numberSuffixOrPrefix === "prefix") {
                                inflectedWord = animSgAffix + word;
                        } else if(generatedMassNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "suffix") {
                                inflectedWord = word + inanSgAffix;
                        } else if(generatedMassNouns[i] === word && animInan[i] === "inan" && numberSuffixOrPrefix === "prefix") {
                                inflectedWord = inanSgAffix + word;
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
                                inflectedWord = word + mascSgAffix;
                        } else if(generatedMassNouns[i] === word && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "prefix") {
                                inflectedWord = mascSgAffix + word;
                        } else if(generatedMassNouns[i] === word && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "suffix") {
                                inflectedWord = word + femSgAffix;
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
    
    return soundChange(inflectedWord);
};

let randomNumberForDerivationSelection = 0;
function selectDerivationalAffixes() {
    let chosenDerivations = [VtoADJprone, NtoNPossessorOf, NADJtoADJpossessorOfQuality, bodyParts];
    let potentialDerivations = [
        VtoADJprone,
        NtoNPossessorOf,
        NADJtoADJpossessorOfQuality,
        bodyParts,
    ];
    
    //selects which derivational affixes will be chosen
    // while(chosenDerivations.length < Math.floor(Math.random() * potentialDerivations.length) + 6) {
    //     randomNumberForDerivationSelection = Math.floor(Math.random() * potentialDerivations.length);
    //     if(chosenDerivations.includes(potentialDerivations[randomNumberForDerivationSelection]) === false) {
    //         chosenDerivations.push(potentialDerivations[randomNumberForDerivationSelection]) 
    //     };
    // };

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
    let suffixOrPrefix = "";
    if(Math.floor(Math.random() * 2) === 0) {
        suffixOrPrefix = "suffix";
    } else {
        suffixOrPrefix = "prefix";
    };
    let exampleCounter = 0;
    for(let i = 0; i < transitiveVerbArray.length; i++) {
        //decides if word will have a derivation
        if(Math.floor(Math.random() * 3) === 1) {
            //decides if the affix will be a suffix or prefix
            if(suffixOrPrefix === "suffix") {
                derivedTerm = soundChange(generatedTransitiveVerbs[i]) + soundChange(proneAffix);
                li.innerHTML = `<i>-${spell(soundChange(proneAffix + "A"))}</i> "derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`
            } else {
                derivedTerm = soundChange(proneAffix) + soundChange(generatedTransitiveVerbs[i]);
                li.innerHTML = `<i>${spell(soundChange("X" + proneAffix))}-</i> "derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`
            };
            //assigns the English meaning of the newly derived term
            let meaning = "";
            //if the derived meaning is an array of possible meanings, it chooses only one word from the array
            if(typeof proneADJtrans[i] === "string") {
                meaning = proneADJtrans[i];
            } else if(typeof proneADJtrans[i] === "object"){
                let array = proneADJtrans[i]
                meaning = array[Math.floor(Math.random() * array.length)]
            } else if(proneADJtrans[i] === undefined){
                continue;
            }
             
            //not all words can have this derivation, such words are marked with X
            if(meaning !== "X") {
                //if the derived meaning already exists, this chooses if the derivation replaces the word or if both exist as synonyms
                if(adjectiveArray.includes(meaning)) {
                        //replaces pre-existing word with new derivation
                        generatedAdjectives[adjectiveArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedADJ[adjectiveArray.indexOf(meaning)] = "derived";
                        etymologyArrayADJ[adjectiveArray.indexOf(meaning)] = transitiveVerbArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyADJ[adjectiveArray.indexOf(meaning)] =`<i>-${spell(soundChange(generatedTransitiveVerbs[i]))}-</i>&nbsp"to&nbsp${removeVFromVerb(transitiveVerbArray[i])}"&nbsp+&nbsp<i>-${spell(soundChange(proneAffix + "A"))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`
                        } else {
                                etymologyADJ[adjectiveArray.indexOf(meaning)] =`<i>${spell(soundChange("X" + proneAffix))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp-<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>-&nbsp"to&nbsp${removeVFromVerb(transitiveVerbArray[i])}"`
                        };
                } else {
                        adjectiveArray.push(meaning);
                        generatedAdjectives.push(derivedTerm) 
                        derivedOrInheritedADJ.push("derived");
                        etymologyArrayADJ.push(transitiveVerbArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyADJ.push(`<i>-${spell(soundChange(generatedTransitiveVerbs[i]))}-</i>&nbsp"to&nbsp${removeVFromVerb(transitiveVerbArray[i])}"&nbsp+&nbsp<i>-${spell(soundChange(proneAffix + "A"))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`)
                        } else {
                                etymologyADJ.push(`<i>${spell(soundChange("X" + proneAffix))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp-<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>-&nbsp"to&nbsp${removeVFromVerb(transitiveVerbArray[i])}"`)
                        };  
                };
                if(exampleCounter < 6) {
                    let exampleLi = document.createElement("li");
                    exampleLi.innerHTML = `-<i>${spell(soundChange(generatedTransitiveVerbs[i]))}</i>- "to ${removeVFromVerb(transitiveVerbArray[i])}" > <i>${spell(soundChange(derivedTerm))}</i> "${meaning}"`;
                    ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            }
        };
    };

    for(let i = 0; i < intransitiveVerbArray.length; i++) {
        //decides if word will have a derivation
        if(Math.floor(Math.random() * 3) === 1) {
            //decides if the affix will be a suffix or prefix
            if(suffixOrPrefix === "suffix") {
                derivedTerm = generatedIntransitiveVerbs[i] + proneAffix;
            } else {
                derivedTerm = proneAffix + generatedIntransitiveVerbs[i];
            };
            //assigns the English meaning of the newly derived term
            let meaning = "";
            //if the derived meaning is an array of possible meanings, it chooses only one word from the array
            if(typeof proneADJintrans[i] === "string") {
                meaning = proneADJintrans[i];
            } else if(typeof proneADJintrans[i] === "object"){
                let array = cloneArray(proneADJintrans[i])
                meaning = array[Math.floor(Math.random() * array.length)]
            }else if(proneADJintrans[i] === undefined){
                continue;
            }
             
            //not all words can have this derivation, such words are marked with X
            if(meaning !== "X") {
                //if the derived meaning already exists, this chooses if the derivation replaces the word or if both exist as synonyms
                if(adjectiveArray.includes(meaning)) {
                        //replaces pre-existing word with new derivation
                        generatedAdjectives[adjectiveArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedADJ[adjectiveArray.indexOf(meaning)] = "derived";
                        etymologyArrayADJ[adjectiveArray.indexOf(meaning)] = intransitiveVerbArray[i];
                        if(suffixOrPrefix === "suffix") {
                    etymologyADJ[adjectiveArray.indexOf(meaning)] = `<i>-${spell(soundChange(generatedIntransitiveVerbs[i]))}-</i>&nbsp"to&nbsp${removeVFromVerb(intransitiveVerbArray[i])}"&nbsp+&nbsp<i>-${spell(soundChange(proneAffix + "A"))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`
                } else {
                    etymologyADJ[adjectiveArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + proneAffix))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp-<i>${spell(soundChange(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[i])]))}</i>-&nbsp"to&nbsp${removeVFromVerb(intransitiveVerbArray[i])}"`
                };
                } else {
                        adjectiveArray.push(meaning);
                        generatedAdjectives.push(derivedTerm) 
                        derivedOrInheritedADJ.push("derived");
                        etymologyArrayADJ.push(intransitiveVerbArray[i]);  
                        if(suffixOrPrefix === "suffix") {
                    etymologyADJ.push(`<i>-${spell(soundChange(generatedIntransitiveVerbs[i]))}-</i>&nbsp"to&nbsp${removeVFromVerb(intransitiveVerbArray[i])}"&nbsp+&nbsp<i>-${spell(soundChange(proneAffix + "A"))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`)
                } else {
                    etymologyADJ.push(`<i>${spell(soundChange("X" + proneAffix))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp-<i>${spell(soundChange(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[i])]))}</i>-&nbsp"to&nbsp${removeVFromVerb(intransitiveVerbArray[i])}"`)
                };
                }; 
                
            };
        };
    };
    document.getElementById("derivational-affixes").appendChild(li);
    li.appendChild(ul);
};

function NtoNPossessorOf() {
    let li = document.createElement("li");
    let ul = document.createElement("ul");

    let derivedTerm = "";
    let suffixOrPrefix = "";
    if(Math.floor(Math.random() * 2) === 0) {
        suffixOrPrefix = "suffix";
    } else {
        suffixOrPrefix = "prefix";
    };
    let exampleCounter = 0;
    //count noun to count noun
    for(let i = 0; i < countNounArray.length; i++) {
        //decides if word will have a derivation
        if(Math.floor(Math.random() * 3) === 1) {
            //decides if the affix will be a suffix or prefix
            if(suffixOrPrefix === "suffix") {
                derivedTerm = generatedCountNouns[i] + possessorAffix;
                li.innerHTML = `<i>-${spell(soundChange(possessorAffix + "A"))}</i> "possessor&nbspof"`
            } else {
                derivedTerm = possessorAffix + generatedCountNouns[i];
                li.innerHTML = `<i>${spell(soundChange("X" + possessorAffix))}-</i> "possessor&nbspof"`
            };
             
            if(countNounArray[i] === "cave") {
                let meaning = "bear";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("bears")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("animal");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("wild-animal");
                        shapeClassifierArray.push("short-and-wide");
                        shortGenericClassifierArray.push("land-animal");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "club") {
                let meaning = "warrior";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("warriors")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "priest") {
                let meaning = "temple";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("temples")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("inan");
                        divineNonDivine.push("divine");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("masculine1");
                        naturalArtificial.push("artificial");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("short-and-wide");
                        shortGenericClassifierArray.push("tool");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "sailor") {
                let meaning = "ship";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("ships")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("inan");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("masculine1");
                        naturalArtificial.push("artificial");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("short-and-wide");
                        shortGenericClassifierArray.push("tool");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "wound") {
                let meaning = "casulty";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("casulties")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("neuter");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "womb") {
                let meaning = "fertile&nbspwoman";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("fertile&nbspwomen")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("feminine2");
                        mascFem.push("feminine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("woman");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "wife") {
                let meaning = "husband";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("husbands")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "whale") {
                let meaning = "ocean";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("oceans")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("anim");
                        divineNonDivine.push("divine");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("shapeless");
                        shortGenericClassifierArray.push("natural-inanimate");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "well") {
                let meaning = "village";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("villages")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("inan");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("feminine1");
                        naturalArtificial.push("artificial");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("shapeless");
                        shortGenericClassifierArray.push("tool");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "weapon") {
                let meaning = "armed&nbspman";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("armed&nbspmen")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "way") {
                let meaning = "guide";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("guides")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "wave") {
                let meaning = "tide";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("tides")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("divine");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("feminine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("shapeless");
                        shortGenericClassifierArray.push("natural-inanimate");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "wagon") {
                let meaning = "carter";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("carters")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("artificial");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "village") {
                let meaning = "chieftan";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("chieftans")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("divine");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "uncle") {
                let meaning = "nephew";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("nephews")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "tribe") {
                let meaning = "chief";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("chiefs")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("divine");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "tree") {
                let meaning = "forest";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("forests")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("anim");
                        divineNonDivine.push("divine");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("feminine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("tree");
                        shapeClassifierArray.push("shapeless");
                        shortGenericClassifierArray.push("natural-inanimate");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "spider") {
                let meaning = "cobweb";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("cobwebs")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("inan");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("feminine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("flat");
                        shortGenericClassifierArray.push("natural-inanimate");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "servant") {
                let meaning = "master";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("masters")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "sheep") {
                let meaning = "shepherd";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("shepherds")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(countNounArray[i] === "yoke") {
                let meaning = "yoked&nbspanimal";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("yoked&nbspanimals")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("animal");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("labour");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("land-animal");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
        };
    };

    //mass noun to count noun
    for(let i = 0; i < massNounArray.length; i++) {
        //decides if word will have a derivation
        if(Math.floor(Math.random() * 3) === 1) {
            //decides if the affix will be a suffix or prefix
            if(suffixOrPrefix === "suffix") {
                derivedTerm = generatedMassNouns[i] + possessorAffix;
            } else {
                derivedTerm = possessorAffix + generatedMassNouns[i];
            };
            if(massNounArray[i] === "admiration") {
                let meaning = "admirer";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("admirers")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("short-and-wide");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "ash") {
                let meaning = "firepit";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("firepits")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("anim");
                        divineNonDivine.push("divine");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("masculine1");
                        naturalArtificial.push("artificial");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("round");
                        shortGenericClassifierArray.push("tool");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "bark") {
                let meaning = "trunk";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("trunks")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("inan");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("tree");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("natural-inanimate");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "beer") {
                let meaning = "pint";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("pints")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("inan");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("feminine1");
                        naturalArtificial.push("artificial");
                        animacyClassifierArray.push("edible");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("tool");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "blood") {
                let meaning = "vein";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("veins")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
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
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "bread") {
                let meaning = "bread-basket";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("bread-baskets")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("inan");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("feminine1");
                        naturalArtificial.push("artificial");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("round");
                        shortGenericClassifierArray.push("tool");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "captivity") {
                let meaning = "captor";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("captors")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "confusion") {
                let meaning = "idiot";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("idiots")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "deception") {
                let meaning = "liar";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("liars")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "hair") {
                let meaning = "scalp";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("scalps")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("inan");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("feminine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("round");
                        shortGenericClassifierArray.push("natural-inanimate");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "honey") {
                let meaning = "beehive";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("beehives")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("inan");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("feminine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("round");
                        shortGenericClassifierArray.push("natural-inanimate");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "hostility") {
                let meaning = "enemy";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("enemies")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "iron") {
                let meaning = "smith";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("smiths")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("divine");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "marrow") {
                let meaning = "bone";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("bones")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
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
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "money") {
                let meaning = "wallet";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("wallets")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("inan");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("feminine1");
                        naturalArtificial.push("artificial");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("short-and-wide");
                        shortGenericClassifierArray.push("natural-inanimate");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "money") {
                let meaning = "wallet";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("wallets")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
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
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "milk") {
                let meaning = "udder";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("udders")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
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
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "porridge") {
                let meaning = "stomach";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("stomachs")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
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
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "rain") {
                let meaning = "raincloud";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("raincloud")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("divine");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("feminine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("shapeless");
                        shortGenericClassifierArray.push("natural-inanimate");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "vigour") {
                let meaning = "hero";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("heroes")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("divine");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "wind") {
                let meaning = "sky";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("skies")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("divine");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("round");
                        shortGenericClassifierArray.push("natural-inanimate");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "sand") {
                let meaning = "beach";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("beaches")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
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
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "trickery") {
                let meaning = "trickster";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("trickster")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("masculine2");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "water") {
                let meaning = "river";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("rivers")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("anim");
                        divineNonDivine.push("divine");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("feminine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("liquid");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "truth") {
                let meaning = "honest&nbspperson";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("honest&nbsppeople")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("inan");
                        divineNonDivine.push("divine");
                        humanAnimalInan.push("human");
                        mascFemNeut.push("neuter");
                        mascFem.push("masculine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("man");
                        shapeClassifierArray.push("long-and-slender");
                        shortGenericClassifierArray.push("human2");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            if(massNounArray[i] === "sight") {
                let meaning = "eye";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("eyes")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("active");
                        animInan.push("inan");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("feminine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("round");
                        shortGenericClassifierArray.push("natural-inanimate");
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
        };
    };

    //count noun to mass noun
    for(let i = 0; i < countNounArray.length; i++) {
        //decides if word will have a derivation
        if(/*Math.floor(Math.random() * 3) === 1*/true) {
            //decides if the affix will be a suffix or prefix
            if(suffixOrPrefix === "suffix") {
                derivedTerm = generatedCountNouns[i] + possessorAffix;
            } else {
                derivedTerm = possessorAffix + generatedCountNouns[i];
            };
            if(countNounArray[i] === "bag") {
                let meaning = randomIndexOfArray(["volume", "capacity"])
                if(massNounArray.includes(meaning)) {
                        generatedMassNouns[massNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedMassNoun[massNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayMassNoun[massNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                                etymologyMassNoun[massNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                        } else {
                                 etymologyMassNoun[massNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        massNounArray.push(meaning);
                        if(meaning === "volume") {
                                singulativeMassNounArray.push("fraction&nbspof&nbspvolume");
                                pluralSingulativeMassNounArray.push("fractions&nbspof&nbspvolume");
                        } else if(meaning === "volume") {
                                singulativeMassNounArray.push("fraction&nbspof&nbspcapacity");
                                pluralSingulativeMassNounArray.push("fractions&nbspof&nbspcapacity");
                        }
                        generatedMassNouns.push(derivedTerm) 
                        derivedOrInheritedMassNoun.push("derived");
                        activePassiveMass.push("passive");
                        animInanMass.push("inan");
                        divineNonDivineMass.push("profane");
                        humanAnimalInanMass.push("secondinanimate");
                        mascFemNeutMass.push("neuter");
                        mascFemMass.push("feminine1");
                        naturalArtificialMass.push("natural");
                        animacyClassifierMassArray.push("inedible");
                        shapeClassifierMassArray.push("shapeless");
                        shortGenericClassifierMassArray.push("natural-inanimate");
                        etymologyArrayMassNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                                console.log("suffix")
                                etymologyMassNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                        } else {
                                console.log("prefix")
                                etymologyMassNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
            
        };
    };

    document.getElementById("derivational-affixes").appendChild(li);
    li.appendChild(ul);
};

function NADJtoADJpossessorOfQuality() {
    let li = document.createElement("li");
    let ul = document.createElement("ul");

    let derivedTerm = "";
    let suffixOrPrefix = "";
    if(Math.floor(Math.random() * 2) === 0) {
        suffixOrPrefix = "suffix";
    } else {
        suffixOrPrefix = "prefix";
    };
    let exampleCounter = 0;
    //count noun to adjective
    for(let i = 0; i < countNounArray.length; i++) {
        //decides if word will have a derivation
        if(Math.floor(Math.random() * 3) === 1) {
            //decides if the affix will be a suffix or prefix
            if(suffixOrPrefix === "suffix") {
                derivedTerm = generatedCountNouns[i] + possessorQualityAffix;
                li.innerHTML = `<i>-${spell(soundChange(possessorQualityAffix + "A"))}</i> "derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`
            } else {
                derivedTerm = possessorQualityAffix + generatedCountNouns[i];
                li.innerHTML = `<i>${spell(soundChange("X" + possessorQualityAffix))}-</i> "derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`
            };
            //assigns the English meaning of the newly derived term
            
            let meaning = "";
            //if the derived meaning is an array of possible meanings, it chooses only one word from the array
            if(typeof possessorOfQualityCount[i] === "string") {
                meaning = possessorOfQualityCount[i];
            } else if(typeof possessorOfQualityCount[i] === "object"){
                let array = cloneArray(possessorOfQualityCount[i])
                meaning = array[Math.floor(Math.random() * array.length)]
            } else if(possessorOfQualityCount[i] === undefined){
                continue;
            }

            //not all words can have this derivation, such words are marked with X
            if(meaning !== "X") {
                if(adjectiveArray.includes(meaning)) {
                        //replaces pre-existing word with new derivation
                        generatedAdjectives[adjectiveArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedADJ[adjectiveArray.indexOf(meaning)] = "derived";
                        etymologyArrayADJ[adjectiveArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                    etymologyADJ[adjectiveArray.indexOf(meaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[i])))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorQualityAffix + "A"))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`
                } else if(suffixOrPrefix === "prefix"){
                    etymologyADJ[adjectiveArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorQualityAffix))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])])))}</i>&nbsp"${countNounArray[i]}"`
                };
                } else {
                        //console.log(meaning)
                        adjectiveArray.push(meaning);
                        generatedAdjectives.push(derivedTerm) 
                        derivedOrInheritedADJ.push("derived");
                        etymologyArrayADJ.push(countNounArray[i]);  
                        if(suffixOrPrefix === "suffix") {
                    etymologyADJ.push(`<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[i])))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorQualityAffix + "A"))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`)
                } else if(suffixOrPrefix === "prefix"){
                    etymologyADJ.push(`<i>${spell(soundChange("X" + possessorQualityAffix))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])])))}</i>&nbsp"${countNounArray[i]}"`)
                };
                };
                if(exampleCounter < 6) {
                    let exampleLi = document.createElement("li");
                    exampleLi.innerHTML = `<i>${spell(soundChange(addGrammaticalAffixes(generatedCountNouns[i])))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(derivedTerm))}</i> "${meaning}"`;
                    ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
        };
    };

    //mass noun to adjective
    for(let i = 0; i < massNounArray.length; i++) {
        //decides if word will have a derivation
        if(Math.floor(Math.random() * 3) === 1) {
            //decides if the affix will be a suffix or prefix
            if(suffixOrPrefix === "suffix") {
                derivedTerm = generatedMassNouns[i] + possessorQualityAffix;
                li.innerHTML = `<i>-${spell(soundChange(possessorQualityAffix + "A"))}</i> "derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`
            } else {
                derivedTerm = soundChange(possessorQualityAffix) + soundChange(generatedMassNouns[i]);
                li.innerHTML = `<i>${spell(soundChange("X" + possessorQualityAffix))}-</i> "derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`
            };
            //assigns the English meaning of the newly derived term
            let meaning = "";
            //if the derived meaning is an array of possible meanings, it chooses only one word from the array
            if(typeof possessorOfQualityMass[i] === "string") {
                meaning = possessorOfQualityMass[i];
            } else if(typeof possessorOfQualityMass[i] === "object"){
                let array = cloneArray(possessorOfQualityMass[i])
                meaning = array[Math.floor(Math.random() * array.length)]
            } else if(possessorOfQualityMass[i] === undefined){
                continue;
            }
             
            //not all words can have this derivation, such words are marked with X
            if(meaning !== "X") {
                if(adjectiveArray.includes(meaning)) {
                        //replaces pre-existing word with new derivation
                        generatedAdjectives[adjectiveArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedADJ[adjectiveArray.indexOf(meaning)] = "derived";
                        etymologyArrayADJ[adjectiveArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                    etymologyADJ[adjectiveArray.indexOf(meaning)] = `<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[i])))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorQualityAffix + "A"))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`
                } else {
                    etymologyADJ[adjectiveArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorQualityAffix))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])])))}</i>&nbsp"${massNounArray[i]}"`
                };
                } else {
                        adjectiveArray.push(meaning);
                        generatedAdjectives.push(derivedTerm) 
                        derivedOrInheritedADJ.push("derived");
                        etymologyArrayADJ.push(massNounArray[i]);  
                        if(suffixOrPrefix === "suffix") {
                    etymologyADJ.push(`<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[i])))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorQualityAffix + "A"))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"`)
                } else {
                    etymologyADJ.push(`<i>${spell(soundChange("X" + possessorQualityAffix))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspnouns&nbspdenoting&nbspthe&nbsppossession&nbspof&nbspa&nbspthing&nbspor&nbspquality"&nbsp+&nbsp<i>${spell(soundChange(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])])))}</i>&nbsp"${massNounArray[i]}"`)
                };
                };
            };
        };
    };
    document.getElementById("derivational-affixes").appendChild(li);
    li.appendChild(ul);   
};

function bodyParts() {
    let li = document.createElement("li");
    let ul = document.createElement("ul");

    let derivedTerm = "";
    let suffixOrPrefix = "";
    if(Math.floor(Math.random() * 2) === 0) {
        suffixOrPrefix = "suffix";
    } else {
        suffixOrPrefix = "prefix";
    };
    let exampleCounter = 0;
    //count noun to count noun
    for(let i = 0; i < countNounArray.length; i++) {
         if(Math.floor(Math.random() * 3) === 1) {
        //decides if the affix will be a suffix or prefix
        if(suffixOrPrefix === "suffix") {
        derivedTerm = generatedCountNouns[i] + bodyPartAffix;
        li.innerHTML = `<i>-${spell(soundChange(bodyPartAffix + "A"))}</i> "derives&nbspterms&nbspfor&nbspbody&nbspparts"`
        } else {
        derivedTerm = bodyPartAffix + generatedCountNouns[i];
        li.innerHTML = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i> "derives&nbspterms&nbspfor&nbspbody&nbspparts"`
        };

        if(countNounArray[i] === "club") {
        let meaning = "penis";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("penises")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        };
        if(countNounArray[i] === "coin") {
        let meaning = "nipple";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("nipples")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };

        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(countNounArray[i] === "corner") {
        let meaning = "elbow";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("elbows")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(countNounArray[i] === "crown") {
        let meaning = "forehead";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("foreheads")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shapeClassifierArray.push("flat");
                shortGenericClassifierArray.push("natural-inanimate");
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(countNounArray[i] === "cup") {
        let meaning = "lip";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("lips")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(countNounArray[i] === "dent") {
        let meaning = "bellybutton";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("bellybuttons")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(countNounArray[i] === "groove") {
        let meaning = "wrinkle";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("wrinkles")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(countNounArray[i] === "hammer") {
        let meaning = "fist";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("fists")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(countNounArray[i] === "hare"|| countNounArray[i] === "harp") {
                let meaning = "ear";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("ears")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
                        activePassive.push("passive");
                        animInan.push("inan");
                        divineNonDivine.push("profane");
                        humanAnimalInan.push("secondinanimate");
                        mascFemNeut.push("neuter");
                        mascFem.push("feminine1");
                        naturalArtificial.push("natural");
                        animacyClassifierArray.push("inedible");
                        shapeClassifierArray.push("flat");
                        shortGenericClassifierArray.push("natural-inanimate");
                        etymologyArrayCountNoun.push(countNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                        } else {
                        etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                        };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
        };
        if(countNounArray[i] === "kiss") {
        let meaning = "lip";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("lips")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(countNounArray[i] === "blade") {
        let meaning = "claw";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("claws")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shapeClassifierArray.push("pointed");
                shortGenericClassifierArray.push("natural-inanimate");
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(countNounArray[i] === "walk") {
        let meaning = "foot";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("feet")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(countNounArray[i] === "well") {
        let meaning = "throat";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("throats")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(countNounArray[i] === "wheel") {
        let meaning = "ankle";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("ankles")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(countNounArray[i] === "whip") {
        let meaning = "ponytail";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("ponytails")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(countNounArray[i] === "cherry") {
        let meaning = "testicle";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("testicles")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(countNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        };
    };

    //mass noun to count noun
    for(let i = 0; i < massNounArray.length; i++) {
         if(Math.floor(Math.random() * 3) === 1) {
        //decides if word will have a derivation
        if(Math.floor(Math.random() * 3) === 1) {
            //decides if the affix will be a suffix or prefix
            if(suffixOrPrefix === "suffix") {
                derivedTerm = generatedMassNouns[i] + bodyPartAffix;
            } else {
                derivedTerm = bodyPartAffix + generatedMassNouns[i];
            };
        };
            
        if(massNounArray[i] === "admiration") {
        let meaning = "heart";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("hearts")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(massNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
        };

        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(massNounArray[i] === "air") {
                let meaning = "lung";
                if(countNounArray.includes(meaning)) {
                        generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                        derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                        etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                        } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                        };
                } else {
                        countNounArray.push(meaning);
                        countNounArrayPlural.push("lungs")
                        generatedCountNouns.push(derivedTerm) 
                        derivedOrInheritedCountNoun.push("derived");
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
                        etymologyArrayCountNoun.push(massNounArray[i]);
                        if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                        } else {
                        etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                        };
                };
                if(exampleCounter < 6) {
                        let exampleLi = document.createElement("li");
                        exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                        ul.appendChild(exampleLi)
                };
                exampleCounter++; 
        };
        if(massNounArray[i] === "glass") {
        let meaning = "eye";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("eyes")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(massNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
        };

        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(massNounArray[i] === "love") {
        let meaning = "heart";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("hearts")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(massNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
        };

        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(massNounArray[i] === "meat") {
        let meaning = "muscle";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("muscles")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(massNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
        };

        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(massNounArray[i] === "prose") {
        let meaning = "mind";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("minds")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(massNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
        };

        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(massNounArray[i] === "rain") {
        let meaning = "tear&nbspduct";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("tear&nbspducts")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(massNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
        };

        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(massNounArray[i] === "rope") {
        let potentialMeanings = ["penis", "artery"]
        let meaning = potentialMeanings[Math.floor(Math.random() * potentialMeanings.length)];
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("penises")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(massNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
        };

        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(massNounArray[i] === "string") {
        let meaning = "sinew";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("sinews")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(massNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
        };

        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(massNounArray[i] === "vigour") {
        let meaning = "liver";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("livers")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(massNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
        };

        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(massNounArray[i] === "water") {
        let meaning = "bladder";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("bladders")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(massNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
        };

        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        if(massNounArray[i] === "wind") {
        let meaning = "nostril";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("nostrils")
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
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
                etymologyArrayCountNoun.push(massNounArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                };
        };

        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i> "${massNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };
        exampleCounter++; 
        };
    };
   
    //transitive verb to count noun
    for(let i = 0; i < transitiveVerbArray.length; i++) {
        //decides if word will have a derivation
        if(/*Math.floor(Math.random() * 3) === 1*/ 1===1) {
            //decides if the affix will be a suffix or prefix
            if(suffixOrPrefix === "suffix") {
                derivedTerm = generatedTransitiveVerbs[i] + bodyPartAffix;
            } else {
                derivedTerm = bodyPartAffix + generatedTransitiveVerbs[i];
            };

        if(transitiveVerbArray[i] === "hear") {
        let meaning = "ear";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = transitiveVerbArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}-</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("ears");
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shortGenericClassifierArray.push("natural-inanimate");
                shapeClassifierArray.push("flat");
                etymologyArrayCountNoun.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };

        if(transitiveVerbArray[i] === "arrange"||transitiveVerbArray[i] === "do"||transitiveVerbArray[i] === "attain"||transitiveVerbArray[i] === "grasp"||transitiveVerbArray[i] === "grip"||transitiveVerbArray[i]=== "hold"||transitiveVerbArray[i] === "put"||transitiveVerbArray[i] === "rub") {
        let meaning = "hand";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = transitiveVerbArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}-</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("hands");
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shortGenericClassifierArray.push("natural-inanimate");
                shapeClassifierArray.push("flat");
                etymologyArrayCountNoun.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };

        if(transitiveVerbArray[i] === "bearV" ||transitiveVerbArray[i] === "throw") {
        let potentialMeanings = ["arm", "shoulder"];
        let meaning = randomIndexOfArray(potentialMeanings);
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = transitiveVerbArray[i];
                if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}-</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                if(meaning === "arm") {
                        countNounArrayPlural.push("arms");
                        shapeClassifierArray.push("long-and-slender");
                };
                if(meaning === "shoulder") {
                        countNounArrayPlural.push("shoulders")
                        shapeClassifierArray.push("round");
                };
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shortGenericClassifierArray.push("natural-inanimate");
                etymologyArrayCountNoun.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };

        if(transitiveVerbArray[i] === "bend") {
        let potentialMeanings = ["elbow", "knee", "joint"];
        let meaning = randomIndexOfArray(potentialMeanings);
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = transitiveVerbArray[i];
                if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}-</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                if(meaning === "elbow") {
                        countNounArrayPlural.push("elbows");
                        shapeClassifierArray.push("round");
                };
                if(meaning === "shoulder") {
                        countNounArrayPlural.push("knee")
                        shapeClassifierArray.push("round");
                };
                if(meaning === "joint&nbsp(anatomical)") {
                        countNounArrayPlural.push("joint&nbsp(anatomical)")
                        shapeClassifierArray.push("round");
                };
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shortGenericClassifierArray.push("natural-inanimate");
                etymologyArrayCountNoun.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };

        if(transitiveVerbArray[i] === "bite"||transitiveVerbArray[i] === "chew") {
        let potentialMeanings = ["tooth", "jaw", "mouth"];
        let meaning = randomIndexOfArray(potentialMeanings);
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = transitiveVerbArray[i];
                if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}-</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                if(meaning === "tooth") {
                        countNounArrayPlural.push("teeth");
                        shapeClassifierArray.push("pointed");
                };
                if(meaning === "jaw") {
                        countNounArrayPlural.push("jaws")
                        shapeClassifierArray.push("short-and-wide");
                };
                if(meaning === "mouth)") {
                        countNounArrayPlural.push("mouths")
                        shapeClassifierArray.push("round");
                };
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shortGenericClassifierArray.push("natural-inanimate");
                etymologyArrayCountNoun.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };

        if(transitiveVerbArray[i] === "blowV") {
        let potentialMeanings = ["mouth", "pursed&nbsplip", "lip"];
        let meaning = randomIndexOfArray(potentialMeanings);
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = transitiveVerbArray[i];
                if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}-</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                if(meaning === "mouth") {
                        countNounArrayPlural.push("mouths");
                        shapeClassifierArray.push("round");
                };
                if(meaning === "pursed&nbsplip") {
                        countNounArrayPlural.push("pursed&nbsplips")
                        shapeClassifierArray.push("round");
                };
                if(meaning === "lip") {
                        countNounArrayPlural.push("lips")
                        shapeClassifierArray.push("long-and-slender");
                };
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shortGenericClassifierArray.push("natural-inanimate");
                etymologyArrayCountNoun.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };

        if(transitiveVerbArray[i] === "breathe ") {
        let meaning = "lung";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = transitiveVerbArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}-</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("lungs");
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shortGenericClassifierArray.push("natural-inanimate");
                shapeClassifierArray.push("flat");
                etymologyArrayCountNoun.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };

        if(transitiveVerbArray[i] === "compel"||transitiveVerbArray[i] === "strike"||transitiveVerbArray[i] === "loveV") {
        let meaning = "heart";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = transitiveVerbArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}-</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("hearts");
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shortGenericClassifierArray.push("natural-inanimate");
                shapeClassifierArray.push("round");
                etymologyArrayCountNoun.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };

        if(transitiveVerbArray[i] === "curse"||transitiveVerbArray[i] === "drink"||transitiveVerbArray[i] === "eat"||transitiveVerbArray[i] === "praise"||transitiveVerbArray[i] === "invoke"||transitiveVerbArray[i] === "persuade"||transitiveVerbArray[i] === "say") {
        let meaning = "mouth";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = transitiveVerbArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}-</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("mouths");
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shortGenericClassifierArray.push("natural-inanimate");
                shapeClassifierArray.push("round");
                etymologyArrayCountNoun.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };

        if(transitiveVerbArray[i] === "deem"||transitiveVerbArray[i] === "learn"||transitiveVerbArray[i] === "know") {
        let potentialMeanings = ["mind", "brain", "thought"];
        let meaning = randomIndexOfArray(potentialMeanings);
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = transitiveVerbArray[i];
                if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}-</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                if(meaning === "mind") {
                        countNounArrayPlural.push("minds");
                        shapeClassifierArray.push("shapeless");
                };
                if(meaning === "brain") {
                        countNounArrayPlural.push("brains")
                        shapeClassifierArray.push("round");
                };
                if(meaning === "thought)") {
                        countNounArrayPlural.push("thoughts")
                        shapeClassifierArray.push("shapeless");
                };
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shortGenericClassifierArray.push("natural-inanimate");
                etymologyArrayCountNoun.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };

        if(transitiveVerbArray[i] === "desire") {
        let potentialMeanings = ["heart", "genital", "penis", "vagina"];
        let meaning = randomIndexOfArray(potentialMeanings);
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = transitiveVerbArray[i];
                if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}-</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                if(meaning === "heart") {
                        countNounArrayPlural.push("hearts");
                        shapeClassifierArray.push("round");
                };
                if(meaning === "genital") {
                        countNounArrayPlural.push("genitals")
                        shapeClassifierArray.push("round");
                };
                if(meaning === "penis") {
                        countNounArrayPlural.push("penises")
                        shapeClassifierArray.push("long-and-slender");
                };
                if(meaning === "vagina") {
                        countNounArrayPlural.push("vaginas")
                        shapeClassifierArray.push("round");
                };
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shortGenericClassifierArray.push("natural-inanimate");
                etymologyArrayCountNoun.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };

        if(transitiveVerbArray[i] === "strike") {
        let meaning = "fist";
        if(countNounArray.includes(meaning)) {
                generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = transitiveVerbArray[i];
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`;
                } else {
                etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}-</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`;
                };
        } else {
                countNounArray.push(meaning);
                countNounArrayPlural.push("fists");
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                activePassive.push("passive");
                animInan.push("inan");
                divineNonDivine.push("profane");
                humanAnimalInan.push("secondinanimate");
                mascFemNeut.push("neuter");
                mascFem.push("feminine1");
                naturalArtificial.push("natural");
                animacyClassifierArray.push("inedible");
                shortGenericClassifierArray.push("natural-inanimate");
                shapeClassifierArray.push("round");
                etymologyArrayCountNoun.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedTransitiveVerbs[i]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(bodyPartAffix + "A"))}</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"`)
                } else {
                etymologyCountNoun.push(`<i>${spell(soundChange("X" + bodyPartAffix))}-</i>&nbsp"derives&nbspterms&nbspfor&nbspbody&nbspparts"&nbsp+&nbsp<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>&nbsp"to&nbsp${transitiveVerbArray[i]}"`)
                };
        };
        
        if(exampleCounter < 6) {
                let exampleLi = document.createElement("li");
                exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(soundChange(addGrammaticalAffixes(derivedTerm)))}</i> "${meaning}"`;
                ul.appendChild(exampleLi)
        };
        exampleCounter++; 
        };

        

        

     document.getElementById("derivational-affixes").appendChild(li);
    li.appendChild(ul);
        };
    };
};

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
                if(derivedOrInheritedCountNoun[i] === "inherited") {
                        inheritednounNum++;
                } else if(derivedOrInheritedCountNoun[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < massNounArray.length; i++) {
                if(derivedOrInheritedMassNoun[i] === "inherited") {
                        inheritednounNum++;
                } else if(derivedOrInheritedMassNoun[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < adjectiveArray.length; i++) {
                if(derivedOrInheritedADJ[i] === "inherited") {
                        inheritednounNum++;
                } else if(derivedOrInheritedADJ[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < transitiveVerbArray.length; i++) {
                if(derivedOrInheritedTransVerb[i] === "inherited") {
                        inheritednounNum++;
                } else if(derivedOrInheritedTransVerb[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < intransitiveVerbArray.length; i++) {
                if(derivedOrInheritedIntransVerb[i] === "inherited") {
                        inheritednounNum++;
                } else if(derivedOrInheritedIntransVerb[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < conjunctionArray.length; i++) {
                if(derivedOrInheritedCONJ[i] === "inherited") {
                        inheritednounNum++;
                } else if(derivedOrInheritedCONJ[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < adverbArray.length; i++) {
                if(derivedOrInheritedADV[i] === "inherited") {
                        inheritednounNum++;
                } else if(derivedOrInheritedADV[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < intensifierArray.length; i++) {
                if(derivedOrInheritedINTENS[i] === "inherited") {
                        inheritednounNum++;
                } else if(derivedOrInheritedINTENS[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < allQuantifierArray.length; i++) {
                if(derivedOrInheritedQuantifier[i] === "inherited") {
                        inheritednounNum++;
                } else if(derivedOrInheritedQuantifier[i] === "derived") {
                        derivednounNum++;
                };
        };
        for(let i = 0; i < adpositionArray.length; i++) {
                if(derivedOrInheritedADPO[i] === "inherited") {
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
                if(derivedOrInheritedCountNoun[i] === "inherited") {
                        inheritedNounNum++;
                } else if(derivedOrInheritedCountNoun[i] === "derived") {
                        derivedNounNum++;
                };
        };
        for(let i = 0; i < massNounArray.length; i++) {
                if(derivedOrInheritedMassNoun[i] === "inherited") {
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
                if(derivedOrInheritedTransVerb[i] === "inherited") {
                        inheritedVerbNum++;
                } else if(derivedOrInheritedTransVerb[i] === "derived") {
                        derivedVerbNum++;
                };
        };
        for(let i = 0; i < intransitiveVerbArray.length; i++) {
                if(derivedOrInheritedIntransVerb[i] === "inherited") {
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
                if(derivedOrInheritedADJ[i] === "inherited") {
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
                if(derivedOrInheritedADV[i] === "inherited") {
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
                if(derivedOrInheritedCONJ[i] === "inherited") {
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
                if(derivedOrInheritedADPO[i] === "inherited") {
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
                if(derivedOrInheritedADPO[i] === "inherited") {
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
                if(derivedOrInheritedQuantifier[i] === "inherited") {
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
    createAffixes();
    selectDerivationalAffixes();
    makeVocabStats();
};



export {countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, adjectiveArray, conjunctionArray, adverbArray, adpositionArray, intensifierArray, countNounArrayPlural, generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, etymologyArrayADJ, derivedOrInheritedADJ, etymologyADJ, etymologyCountNoun, derivedOrInheritedCountNoun, activePassive, animInan, divineNonDivine, humanAnimalInan, mascFemNeut, mascFem, naturalArtificial, animacyClassifierArray, shapeClassifierArray, shortGenericClassifierArray, etymologyArrayCountNoun, pluralSingulativeMassNounArray, singulativeMassNounArray, etymologyMassNoun, etymologyArrayMassNoun
}