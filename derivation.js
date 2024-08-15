import {countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, adjectiveArray, conjunctionArray, adverbArray, adpositionArray, intensifierArray, countNounArrayPlural, generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, generateAffixes, typologyNum, markedSingularOrNot, singularAffix, numberSuffixOrPrefix, grammaticalNum, generalAffix, genderNum, animateAffix, inanimateAffix, animInanMass, divineNonDivineMass, humanAnimalInanMass, mascFemMass,  mascFemNeutMass, naturalArtificialMass, animacyClassifierMassArray, shapeClassifierMassArray, shortGenericClassifierMassArray, masculineAffix, feminineAffix, neuterAffix, humanAffix, animalAffix, inanimate2Affix, divineAffix, profaneAffix, activeAffix, passiveAffix, naturalAffix, artificialAffix, nominativeAffix} from './script.js';
import { spell } from './orthography.js';
import { soundChange, cloneArray } from './soundchange.js';
import {activePassive, animInan, divineNonDivine, humanAnimalInan, mascFemNeut, mascFem, naturalArtificial, animacyClassifierArray, shapeClassifierArray, shortGenericClassifierArray, derivedOrInheritedCountNoun, activePassivepossessorOfCount,
animInanpossessorOfCount,
divineNonDivinepossessorOfCount,
humanAnimalInanpossessorOfCount,
mascFemNeutpossessorOfCount,
mascFempossessorOfCount,
naturalArtificialpossessorOfCount,
animacyClassifierArraypossessorOfCount,
shapeClassifierArraypossessorOfCount,
shortGenericClassifierArraypossessorOfCount, possessorOfCount, etymologyArrayCountNoun, etymologyCountNoun,possessorOfCountPlural} from './englishWordArrays/Nouns/countNouns.js'
import {derivedOrInheritedMassNoun, possessorOfMass, etymologyArrayMassNoun, etymologyMassNoun, 
activePassivepossessorOfMass,
animInanpossessorOfMass,
divineNonDivinepossessorOfMass,
humanAnimalInanpossessorOfMass,
mascFemNeutpossessorOfMass,
mascFempossessorOfMass,
naturalArtificialpossessorOfMass,
animacyClassifierArraypossessorOfMass,
shapeClassifierArraypossessorOfMass,
shortGenericClassifierArraypossessorOfMass, possessorOfMassPlural} from './englishWordArrays/Nouns/massNouns.js'
import {proneADJtrans} from '/englishWordArrays/Verbs/englishTransitiveVerbs.js';
import {proneADJintrans} from '/englishWordArrays/Verbs/englishIntransitiveVerbs.js';
import { etymologyArrayADJ, derivedOrInheritedADJ, etymologyADJ} from './englishWordArrays/Adjectives/englishAdjectives.js';
import {grammaticalNumber, caseNumber, animSgAffix, inanSgAffix, grammaticalNumber as grammaticalNumberFusional, mascSgAffix, femSgAffix} from './fusionalNouns.js';
import {smallQuantifiersArray, middingQuantifierArray, bigQuantifierArray, opinionQuantifierArray} from './englishWordArrays/quantifierArray.js';


let proneAffix = "";
let possessorAffix = "";

function clear() {
    proneAffix = "";
    possessorAffix = "";
    document.getElementById("derivational-affixes").replaceChildren();
    
};

function createAffixes() {
    proneAffix = generateAffixes();
    possessorAffix = generateAffixes();
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
function addGrammaticalAffixes(noun) {
    let inflectedNoun = "";
    if(typologyNum === 1) {
        if(grammaticalNum < 24 && markedSingularOrNot() && genderNum < 9) {
            if(numberSuffixOrPrefix === "suffix") {
                inflectedNoun = noun + singularAffix;
            } else {
                inflectedNoun = singularAffix + noun;
            }
        } if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 9) {
            for(let i = 0; i < countNounArray.length; i++) {
                if(generatedCountNouns[i] === noun && animInan[i] === "anim" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + animateAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && animInan[i] === "anim" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + animateAffix + noun;
                } else if(generatedCountNouns[i] === noun && animInan[i] === "inan" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + inanimateAffix + singularAffix;
                        console.log(noun + " " + inanimateAffix + " " + singularAffix)
                } else if(generatedCountNouns[i] === noun && animInan[i] === "inan" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + inanimateAffix + noun;
                };
            };
        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 9) {
            for(let i = 0; i < generatedCountNouns.length; i++) {
                if(generatedCountNouns[i] === noun && animInan[i] === "anim" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + animateAffix;
                } else if(generatedCountNouns[i] === noun && animInan[i] === "anim" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = animateAffix + noun;
                } else if(generatedCountNouns[i] === noun && animInan[i] === "inan" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + inanimateAffix;
                } else if(generatedCountNouns[i] === noun && animInan[i] === "inan" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = inanimateAffix + noun;
                };
            };
            for(let i = 0; i < generatedMassNouns.length; i++) {
                if(generatedMassNouns[i] === noun && animInan[i] === "anim" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + animateAffix;
                } else if(generatedMassNouns[i] === noun && animInan[i] === "anim" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = animateAffix + noun;
                } else if(generatedMassNouns[i] === noun && animInan[i] === "inan" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + inanimateAffix;
                } else if(generatedMassNouns[i] === noun && animInan[i] === "inan" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = inanimateAffix + noun;
                };
            };
        } else if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 10) {
            for(let i = 0; i < countNounArray.length; i++) {
                if(generatedCountNouns[i] === noun && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + masculineAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + masculineAffix + noun;
                } else if(generatedCountNouns[i] === noun && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + feminineAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + feminineAffix + noun;
                };
            };
            for(let i = 0; i < massNounArray.length; i++) {
                if(generatedMassNouns[i] === noun && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + masculineAffix + singularAffix;
                } else if(generatedMassNouns[i] === noun && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + masculineAffix + noun;
                } else if(generatedMassNouns[i] === noun && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + feminineAffix + singularAffix;
                } else if(generatedMassNouns[i] === noun && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + feminineAffix + noun;
                };
            };
        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 10) {
            for(let i = 0; i < generatedCountNouns.length; i++) {
                if(generatedCountNouns[i] === noun && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + masculineAffix;
                } else if(generatedCountNouns[i] === noun && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = masculineAffix + noun;
                } else if(generatedCountNouns[i] === noun && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + feminineAffix;
                } else if(generatedCountNouns[i] === noun && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = feminineAffix + noun;
                };
            };
            for(let i = 0; i < generatedMassNouns.length; i++) {
                if(generatedMassNouns[i] === noun && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + masculineAffix;
                } else if(generatedMassNouns[i] === noun && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = masculineAffix + noun;
                } else if(generatedMassNouns[i] === noun && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + feminineAffix;
                } else if(generatedMassNouns[i] === noun && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = feminineAffix + noun;
                };
            };
        } else if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 11) {
            for(let i = 0; i < countNounArray.length; i++) {
                if(generatedCountNouns[i] === noun && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + masculineAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + masculineAffix + noun;
                } else if(generatedCountNouns[i] === noun && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + feminineAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + feminineAffix + noun;
                } else if(generatedCountNouns[i] === noun && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + neuterAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + neuterAffix + noun;
                };
            };
            for(let i = 0; i < massNounArray.length; i++) {
                if(generatedMassNouns[i] === noun && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + masculineAffix + singularAffix;
                } else if(generatedMassNouns[i] === noun && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + masculineAffix + noun;
                } else if(generatedMassNouns[i] === noun && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + feminineAffix + singularAffix;
                } else if(generatedMassNouns[i] === noun && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + feminineAffix + noun;
                } else if(generatedMassNouns[i] === noun && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + neuterAffix + singularAffix;
                } else if(generatedMassNouns[i] === noun && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + neuterAffix + noun;
                };
            };
        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 11) {
            for(let i = 0; i < generatedCountNouns.length; i++) {
                if(generatedCountNouns[i] === noun && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + masculineAffix;
                } else if(generatedCountNouns[i] === noun && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = masculineAffix + noun;
                } else if(generatedCountNouns[i] === noun && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + feminineAffix;
                } else if(generatedCountNouns[i] === noun && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = feminineAffix + noun;
                } else if(generatedCountNouns[i] === noun && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + neuterAffix;
                } else if(generatedCountNouns[i] === noun && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = neuterAffix + noun;
                };
            };
            for(let i = 0; i < generatedMassNouns.length; i++) {
                if(generatedMassNouns[i] === noun && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + masculineAffix;
                } else if(generatedMassNouns[i] === noun && mascFemNeut[i] === "masculine2" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = masculineAffix + noun;
                } else if(generatedMassNouns[i] === noun && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + feminineAffix;
                } else if(generatedMassNouns[i] === noun && mascFemNeut[i] === "feminine2" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = feminineAffix + noun;
                } else if(generatedMassNouns[i] === noun && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + neuterAffix;
                } else if(generatedMassNouns[i] === noun && mascFemNeut[i] === "neuter" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = neuterAffix + noun;
                };
            };
        } else if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 12) {
            for(let i = 0; i < countNounArray.length; i++) {
                if(generatedCountNouns[i] === noun && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + humanAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + humanAffix + noun;
                } else if(generatedCountNouns[i] === noun && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + animalAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + animalAffix + noun;
                } else if(generatedCountNouns[i] === noun && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + inanimate2Affix + singularAffix;
                } else if(generatedCountNouns[i] === noun && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + inanimate2Affix + noun;
                };
            };
            for(let i = 0; i < massNounArray.length; i++) {
                if(generatedMassNouns[i] === noun && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + humanAffix + singularAffix;
                } else if(generatedMassNouns[i] === noun && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + humanAffix + noun;
                } else if(generatedMassNouns[i] === noun && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + animalAffix + singularAffix;
                } else if(generatedMassNouns[i] === noun && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + animalAffix + noun;
                } else if(generatedMassNouns[i] === noun && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + inanimate2Affix + singularAffix;
                } else if(generatedMassNouns[i] === noun && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + inanimate2Affix + noun;
                };
            };
        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 12) {
            for(let i = 0; i < generatedCountNouns.length; i++) {
                if(generatedCountNouns[i] === noun && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + humanAffix;
                } else if(generatedCountNouns[i] === noun && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = humanAffix + noun;
                } else if(generatedCountNouns[i] === noun && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + animalAffix;
                } else if(generatedCountNouns[i] === noun && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = animalAffix + noun;
                } else if(generatedCountNouns[i] === noun && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + inanimate2Affix;
                } else if(generatedCountNouns[i] === noun && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = inanimate2Affix + noun;
                };
            };
            for(let i = 0; i < generatedMassNouns.length; i++) {
                if(generatedMassNouns[i] === noun && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + humanAffix;
                } else if(generatedMassNouns[i] === noun && humanAnimalInan[i] === "human" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = humanAffix + noun;
                } else if(generatedMassNouns[i] === noun && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + animalAffix;
                } else if(generatedMassNouns[i] === noun && humanAnimalInan[i] === "animal" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = animalAffix + noun;
                } else if(generatedMassNouns[i] === noun && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + inanimate2Affix;
                } else if(generatedMassNouns[i] === noun && humanAnimalInan[i] === "secondinanimate" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = inanimate2Affix + noun;
                };
            };
        } else if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 13) {                                                                          
            for(let i = 0; i < countNounArray.length; i++) {
                if(generatedCountNouns[i] === noun && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + divineAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + divineAffix + noun;
                } else if(generatedCountNouns[i] === noun && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + profaneAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + profaneAffix + noun;
                };
            };
            for(let i = 0; i < massNounArray.length; i++) {
                if(generatedMassNouns[i] === noun && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + divineAffix + singularAffix;
                } else if(generatedMassNouns[i] === noun && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + divineAffix + noun;
                } else if(generatedMassNouns[i] === noun && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + profaneAffix + singularAffix;
                } else if(generatedMassNouns[i] === noun && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + profaneAffix + noun;
                };
            };
        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 13) {
            for(let i = 0; i < generatedCountNouns.length; i++) {
                if(generatedCountNouns[i] === noun && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + divineAffix;
                } else if(generatedCountNouns[i] === noun && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = divineAffix + noun;
                } else if(generatedCountNouns[i] === noun && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + profaneAffix;
                } else if(generatedCountNouns[i] === noun && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = profaneAffix + noun;
                };
            };
            for(let i = 0; i < generatedMassNouns.length; i++) {
                if(generatedMassNouns[i] === noun && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + divineAffix;
                } else if(generatedMassNouns[i] === noun && divineNonDivine[i] === "divine" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = divineAffix + noun;
                } else if(generatedMassNouns[i] === noun && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + profaneAffix;
                } else if(generatedMassNouns[i] === noun && divineNonDivine[i] === "profane" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = profaneAffix + noun;
                };
            };
        } else if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 14) {                                                                          
            for(let i = 0; i < countNounArray.length; i++) {
                if(generatedCountNouns[i] === noun && activePassive[i] === "active" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + activeAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && activePassive[i] === "active" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + activeAffix + noun;
                } else if(generatedCountNouns[i] === noun && activePassive[i] === "passive" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + passiveAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && activePassive[i] === "passive" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + passiveAffix + noun;
                };
            };
            for(let i = 0; i < massNounArray.length; i++) {
                if(generatedMassNouns[i] === noun && activePassive[i] === "active" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + activeAffix + singularAffix;
                } else if(generatedMassNouns[i] === noun && activePassive[i] === "active" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + activeAffix + noun;
                } else if(generatedMassNouns[i] === noun && activePassive[i] === "passive" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + passiveAffix + singularAffix;
                } else if(generatedMassNouns[i] === noun && activePassive[i] === "passive" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + passiveAffix + noun;
                };
            };
        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 14) {
            for(let i = 0; i < generatedCountNouns.length; i++) {
                if(generatedCountNouns[i] === noun && activePassive[i] === "active" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + activeAffix;
                } else if(generatedCountNouns[i] === noun && activePassive[i] === "active" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = activeAffix + noun;
                } else if(generatedCountNouns[i] === noun && activePassive[i] === "passive" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + passiveAffix;
                } else if(generatedCountNouns[i] === noun && activePassive[i] === "passive" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = passiveAffix + noun;
                };
            };
            for(let i = 0; i < generatedMassNouns.length; i++) {
                if(generatedMassNouns[i] === noun && activePassive[i] === "active" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + activeAffix;
                } else if(generatedMassNouns[i] === noun && activePassive[i] === "active" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = activeAffix + noun;
                } else if(generatedMassNouns[i] === noun && activePassive[i] === "passive" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + passiveAffix;
                } else if(generatedMassNouns[i] === noun && activePassive[i] === "passive" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = passiveAffix + noun;
                };
            };
        }  else if(grammaticalNum < 24 && markedSingularOrNot() && genderNum === 15) {                                                                          
            for(let i = 0; i < countNounArray.length; i++) {
                if(generatedCountNouns[i] === noun && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + naturalAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + naturalAffix + noun;
                } else if(generatedCountNouns[i] === noun && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + artificialAffix + singularAffix;
                } else if(generatedCountNouns[i] === noun && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + artificialAffix + noun;
                };
            };
            for(let i = 0; i < massNounArray.length; i++) {
                if(generatedMassNouns[i] === noun && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + naturalAffix + singularAffix;
                } else if(generatedMassNouns[i] === noun && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + naturalAffix + noun;
                } else if(generatedMassNouns[i] === noun && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + artificialAffix + singularAffix;
                } else if(generatedMassNouns[i] === noun && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = singularAffix + artificialAffix + noun;
                };
            };
        } else if(grammaticalNum < 24 && markedSingularOrNot() === false && genderNum === 15) {
            for(let i = 0; i < generatedCountNouns.length; i++) {
                if(generatedCountNouns[i] === noun && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + naturalAffix;
                } else if(generatedCountNouns[i] === noun && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = naturalAffix + noun;
                } else if(generatedCountNouns[i] === noun && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + artificialAffix;
                } else if(generatedCountNouns[i] === noun && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = artificialAffix + noun;
                };
            };

            for(let i = 0; i < generatedMassNouns.length; i++) {
                if(generatedMassNouns[i] === noun && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + naturalAffix;
                } else if(generatedMassNouns[i] === noun && naturalArtificial[i] === "natural" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = naturalAffix + noun;
                } else if(generatedMassNouns[i] === noun && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + artificialAffix;
                } else if(generatedMassNouns[i] === noun && naturalArtificial[i] === "artificial" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = artificialAffix + noun;
                };
            };
        };
    } else if (typologyNum === 2) {
        if(grammaticalNumberFusional < 24 && markedSingularOrNot() && genderNum < 9 && caseNumber === 0) {
            if(numberSuffixOrPrefix === "suffix") {
                inflectedNoun = noun + singularAffix;
            } else {
                inflectedNoun = singularAffix + noun;
            };
        } else if(grammaticalNumberFusional < 24 && markedSingularOrNot() === false && genderNum < 9 && caseNumber === 0) {
            inflectedNoun = noun;
        };
        if(grammaticalNumberFusional < 24 && genderNum < 9 && caseNumber > 0) {
            if(numberSuffixOrPrefix === "suffix") {
                inflectedNoun = noun + nominativeAffix;
            } else {
                inflectedNoun = nominativeAffix + noun;
            };
        };
        if(grammaticalNumberFusional < 24 && genderNum === 9 && caseNumber === 0) {
            for(let i = 0; i < generatedCountNouns.length; i++) {
                if(generatedCountNouns[i] === noun && animInan[i] === "anim" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + animSgAffix;
                } else if(generatedCountNouns[i] === noun && animInan[i] === "anim" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = animSgAffix + noun;
                } else if(generatedCountNouns[i] === noun && animInan[i] === "inan" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + inanSgAffix;
                } else if(generatedCountNouns[i] === noun && animInan[i] === "inan" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = inanSgAffix + noun;
                };
            };
            for(let i = 0; i < generatedMassNouns.length; i++) {
                if(generatedMassNouns[i] === noun && animInan[i] === "anim" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + animSgAffix;
                } else if(generatedMassNouns[i] === noun && animInan[i] === "anim" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = animSgAffix + noun;
                } else if(generatedMassNouns[i] === noun && animInan[i] === "inan" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + inanSgAffix;
                } else if(generatedMassNouns[i] === noun && animInan[i] === "inan" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = inanSgAffix + noun;
                };
            };
        };
        if(grammaticalNumberFusional < 24 && genderNum === 10 && caseNumber === 0) {
            for(let i = 0; i < generatedCountNouns.length; i++) {
                if(generatedCountNouns[i] === noun && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + mascSgAffix;
                } else if(generatedCountNouns[i] === noun && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = mascSgAffix + noun;
                } else if(generatedCountNouns[i] === noun && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + femSgAffix;
                } else if(generatedCountNouns[i] === noun && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = femSgAffix + noun;
                };
            };
            for(let i = 0; i < generatedMassNouns.length; i++) {
                if(generatedMassNouns[i] === noun && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + mascSgAffix;
                } else if(generatedMassNouns[i] === noun && mascFem[i] === "masculine1" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = mascSgAffix + noun;
                } else if(generatedMassNouns[i] === noun && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "suffix") {
                        inflectedNoun = noun + femSgAffix;
                } else if(generatedMassNouns[i] === noun && mascFem[i] === "feminine1" && numberSuffixOrPrefix === "prefix") {
                        inflectedNoun = femSgAffix + noun;
                };
            };
        };
    /**add more here */     
    } else {
        inflectedNoun = noun;
    };
    return soundChange(inflectedNoun);
};

let randomNumberForDerivationSelection = 0;
function selectDerivationalAffixes() {
    let chosenDerivations = [VtoADJprone, NtoNPossessorOf];
    let potentialDerivations = [
        VtoADJprone,
        NtoNPossessorOf
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
                let array = cloneArray(proneADJtrans[i])
                meaning = array[Math.floor(Math.random() * array.length)]
            };
             
            //not all words can have this derivation, such words are marked with X
            if(meaning !== "X") {
                //if the derived meaning already exists, this chooses if the derivation replaces the word or if both exist as synonyms
                if(adjectiveArray.includes(meaning)) {
                    if(Math.floor(Math.random() * 2) === 0) {
                        //both exist as synonyms
                        adjectiveArray.push(meaning);
                    } else {
                        //replaces pre-existing word with new derivation
                        let adjIndex = adjectiveArray.indexOf(meaning);
                        adjectiveArray.splice(adjIndex, 1);
                        generatedAdjectives.splice(adjIndex, 1);
                        adjectiveArray.push(meaning);
                    };
                };
                generatedAdjectives.push(derivedTerm) 
                derivedOrInheritedADJ.push("derived");
                etymologyArrayADJ.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                    etymologyADJ.push(`<i>-${spell(soundChange(generatedTransitiveVerbs[i]))}-</i>&nbsp"to&nbsp${removeVFromVerb(transitiveVerbArray[i])}"&nbsp+&nbsp<i>-${spell(soundChange(proneAffix + "A"))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`)
                } else {
                    etymologyADJ.push(`<i>${spell(soundChange("X" + proneAffix))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp-<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>-&nbsp"to&nbsp${removeVFromVerb(transitiveVerbArray[i])}"`)
                };
                if(exampleCounter < 6) {
                    let exampleLi = document.createElement("li");
                    exampleLi.innerHTML = `-<i>${spell(soundChange(generatedTransitiveVerbs[i]))}</i>- "to ${transitiveVerbArray[i]}" > <i>${spell(derivedTerm)}</i> "${meaning}"`;
                    ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
        };
    };

    for(let i = 0; i < intransitiveVerbArray.length; i++) {
        //decides if word will have a derivation
        if(Math.floor(Math.random() * 3) === 1) {
            //decides if the affix will be a suffix or prefix
            if(suffixOrPrefix === "suffix") {
                derivedTerm = soundChange(generatedIntransitiveVerbs[i]) + soundChange(proneAffix);
            } else {
                derivedTerm = soundChange(proneAffix) + soundChange(generatedIntransitiveVerbs[i]);
            };
            //assigns the English meaning of the newly derived term
            let meaning = "";
            //if the derived meaning is an array of possible meanings, it chooses only one word from the array
            if(typeof proneADJintrans[i] === "string") {
                meaning = proneADJintrans[i];
            } else if(typeof proneADJintrans[i] === "object"){
                let array = cloneArray(proneADJintrans[i])
                meaning = array[Math.floor(Math.random() * array.length)]
            };
             
            //not all words can have this derivation, such words are marked with X
            if(meaning !== "X") {
                //if the derived meaning already exists, this chooses if the derivation replaces the word or if both exist as synonyms
                if(adjectiveArray.includes(meaning)) {
                    if(Math.floor(Math.random() * 2) === 0) {
                        //both exist as synonyms
                        adjectiveArray.push(meaning);
                    } else {
                        //replaces pre-existing word with new derivation
                        let adjIndex = adjectiveArray.indexOf(meaning);
                        adjectiveArray.splice(adjIndex, 1);
                        generatedAdjectives.splice(adjIndex, 1);
                        adjectiveArray.push(meaning);
                    };
                };  
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
    document.getElementById("derivational-affixes").appendChild(li);
    li.appendChild(ul);
};

function NtoNPossessorOf() {
    let li = document.createElement("li");
    let ul = document.createElement("ul");

    let derivedTerm = "";
    let suffixOrPrefix = "";
    if(/*Math.floor(Math.random() * 2)*/0 === 0) {
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
            //assigns the English meaning of the newly derived term
            let meaning = "";
            //if the derived meaning is an array of possible meanings, it chooses only one word from the array
            if(typeof possessorOfCount[i] === "string") {
                meaning = possessorOfCount[i];
            } else if(typeof possessorOfCount[i] === "object"){
                let array = cloneArray(possessorOfCount[i])
                meaning = array[Math.floor(Math.random() * array.length)]
            };
             
            //not all words can have this derivation, such words are marked with X
            if(meaning !== "X") {
                //if the derived meaning is already present in the vocab, the pre-existing word is replaced with new derivation
                if(countNounArray.includes(meaning)) {
                    generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                    derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                    etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = countNounArray[i];
                    possessorOfCount[countNounArray.indexOf(meaning)] = "X";
                    possessorOfCountPlural[countNounArray.indexOf(meaning)] = "X";
                    if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                    } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`;
                    };
                } else {//if the derived meaning is not already present in the vocab, it shall be added as a new word
                    countNounArray.push(meaning);
                    countNounArrayPlural.push(possessorOfCountPlural[i])
                    generatedCountNouns.push(derivedTerm) 
                    derivedOrInheritedCountNoun.push("derived");
                    possessorOfCount.push("X");
                    possessorOfCountPlural.push("X");
                    activePassive.push(activePassivepossessorOfCount[i]);
                    animInan.push(animInanpossessorOfCount[i]);
                    divineNonDivine.push(divineNonDivinepossessorOfCount[i]);
                    humanAnimalInan.push(humanAnimalInanpossessorOfCount[i]);
                    mascFemNeut.push(mascFemNeutpossessorOfCount[i]);
                    mascFem.push(mascFempossessorOfCount[i]);
                    naturalArtificial.push(naturalArtificialpossessorOfCount[i]);
                    animacyClassifierArray.push(animacyClassifierArraypossessorOfCount[i]);
                    shapeClassifierArray.push(shapeClassifierArraypossessorOfCount[i]);
                    shortGenericClassifierArray.push(shortGenericClassifierArraypossessorOfCount[i]);
                    etymologyArrayCountNoun.push(countNounArray[i]);
                    if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                    } else {
                        etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>&nbsp"${countNounArray[i]}"`)
                    };
                };
                
                if(exampleCounter < 6) {
                    let exampleLi = document.createElement("li");
                    exampleLi.innerHTML = `<i>${spell(addGrammaticalAffixes(generatedCountNouns[i]))}</i> "${countNounArray[i]}" > <i>${spell(addGrammaticalAffixes(derivedTerm))}</i> "${meaning}"`;
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
            //assigns the English meaning of the newly derived term
            let meaning = "";
            //if the derived meaning is an array of possible meanings, it chooses only one word from the array
            if(typeof possessorOfMass[i] === "string") {
                meaning = possessorOfMass[i];
            } else if(typeof possessorOfMass[i] === "object"){
                let array = cloneArray(possessorOfMass[i])
                meaning = array[Math.floor(Math.random() * array.length)]
            };
             
            //not all words can have this derivation, such words are marked with X
            if(meaning !== "X") {
                //if the derived meaning is already present in the vocab, the pre-existing word is replaced with new derivation
                if(countNounArray.includes(meaning)) {
                    generatedCountNouns[countNounArray.indexOf(meaning)] = derivedTerm;
                    derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)] = "derived";
                    etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                    possessorOfCount[countNounArray.indexOf(meaning)] = "X";
                    possessorOfCountPlural[countNounArray.indexOf(meaning)] = "X";
                    activePassive[countNounArray.indexOf(meaning)] = activePassivepossessorOfMass[i];
                    animInan[countNounArray.indexOf(meaning)] = animInanpossessorOfMass[i];
                    divineNonDivine[countNounArray.indexOf(meaning)] = divineNonDivinepossessorOfMass[i];
                    humanAnimalInan[countNounArray.indexOf(meaning)] = humanAnimalInanpossessorOfMass[i];
                    mascFemNeut[countNounArray.indexOf(meaning)] = mascFemNeutpossessorOfMass[i];
                    mascFem[countNounArray.indexOf(meaning)] = mascFempossessorOfMass[i];
                    naturalArtificial[countNounArray.indexOf(meaning)] = naturalArtificialpossessorOfMass[i];
                    animacyClassifierArray[countNounArray.indexOf(meaning)] = animacyClassifierArraypossessorOfMass[i];
                    shapeClassifierArray[countNounArray.indexOf(meaning)] = shapeClassifierArraypossessorOfMass[i];
                    shortGenericClassifierArray[countNounArray.indexOf(meaning)] = shortGenericClassifierArraypossessorOfMass[i];
                    etymologyArrayCountNoun[countNounArray.indexOf(meaning)] = massNounArray[i];
                    if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`;
                    } else {
                        etymologyCountNoun[countNounArray.indexOf(meaning)] = `<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"`;
                    };
                } else {//if the derived meaning is not already present in the vocab, it shall be added as a new word
                    countNounArray.push(meaning);
                    countNounArrayPlural.push(possessorOfMassPlural[i])
                    generatedCountNouns.push(derivedTerm) 
                    derivedOrInheritedCountNoun.push("derived");
                    possessorOfCount.push("X");
                    possessorOfCountPlural.push("X");
                    activePassive.push(activePassivepossessorOfMass[i]);
                    animInan.push(animInanpossessorOfMass[i]);
                    divineNonDivine.push(divineNonDivinepossessorOfMass[i]);
                    humanAnimalInan.push(humanAnimalInanpossessorOfMass[i]);
                    mascFemNeut.push(mascFemNeutpossessorOfMass[i]);
                    mascFem.push(mascFempossessorOfMass[i]);
                    naturalArtificial.push(naturalArtificialpossessorOfMass[i]);
                    animacyClassifierArray.push(animacyClassifierArraypossessorOfMass[i]);
                    shapeClassifierArray.push(shapeClassifierArraypossessorOfMass[i]);
                    shortGenericClassifierArray.push(shortGenericClassifierArraypossessorOfMass[i]);
                    etymologyArrayCountNoun.push(massNounArray[i]);
                    if(suffixOrPrefix === "suffix") {
                        etymologyCountNoun.push(`<i>${spell(addGrammaticalAffixes(generatedMassNouns[i]))}</i>&nbsp"${massNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                    } else {
                        etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp<i>${spell(soundChange(generatedMassNouns[massNounArray.indexOf(massNounArray[i])]))}</i>&nbsp"${massNounArray[i]}"`)
                    };
                };
            };
        };
    };

    document.getElementById("derivational-affixes").appendChild(li);
    li.appendChild(ul);
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

        //counts which nouns were inherites vs derived
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

        //counts which adjectives were inherites vs derived
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


};

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    clear();
    createAffixes();
    selectDerivationalAffixes();
    makeVocabStats();
};



export {countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, adjectiveArray, conjunctionArray, adverbArray, adpositionArray, intensifierArray, countNounArrayPlural, generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, etymologyArrayADJ, derivedOrInheritedADJ, etymologyADJ, etymologyCountNoun, derivedOrInheritedCountNoun, activePassive, animInan, divineNonDivine, humanAnimalInan, mascFemNeut, mascFem, naturalArtificial, animacyClassifierArray, shapeClassifierArray, shortGenericClassifierArray, etymologyArrayCountNoun
}