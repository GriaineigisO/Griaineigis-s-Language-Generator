
import {generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedAdverbs, generatedConjunctions, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdpositions, generatedIntensifiers, genderNum, nounGenderArray, genderSuffixOrPrefix, animateAffix, inanimateAffix, masculineAffix, feminineAffix, neuterAffix, divineAffix, profaneAffix, humanAffix, animalAffix, inanimate2Affix, activeAffix, passiveAffix, naturalAffix, artificialAffix, markedSingularOrNot, numberSuffixOrPrefix, singularAffix, typologyNum, randomClassifierNum, grammaticalNumIsolating, randomNumForLongAndSlender, randomNumForShortAndWide, randomNumForRound, randomNumForPointed, randomNumForFlat, branchExample, poleExample, shoulderExample, wedgeExample, appleExample, pebbleExample, ballExample, arrowExample, thornExample, forkExample, slabExample, faceExample, airExample, randomNumForShapeless, manExample, randomNumForMan, womanExample, randomNumForWoman, childExample, randomNumForChild, randomNumForWildAnimal, wolfExample, bearExample, randomNumForMeat, goatExample, randomNumForFur, skinExample, sheepExample, randomNumForLabour,labourExample, pushExample, horseExample, hoofExample, donkeyExample, randomNumForMilk, milkExample,udderExample, cowExample, randomNumForInEdible, thingExample, rockExample, randomNumForEdible, basketExample, berryExample, randomNumForHuman, manExample2, humanExample, personExample, randomNumForTree, oakExample, alderExample, elmExample, beechExample, grassExample, randomNumForGrass, flowerExample, randomNumForFlower, randomNumForLandAnimal, landExample, waterExample, randomNumForWaterAnimal, seaExample, fishExample, skyExample, randomNumForFlyingAnimal, cloudExample, wingExample, randomNumForWord, wordExample, mouthExample, randomNumForTool, axeExample, handleExample, hammerExample, ploughExample, rockExample2, dirtExample, mudExample, randomNumForNatural, randomNumForLiquid, dropExample, poolExample, cupExample, countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, grammaticalNumAgglutinative, 
    adjectiveArray, 
    conjunctionArray,
    adverbArray,
    adpositionArray,
    intensifierArray, countNounArrayPlural,
    activePassive,
    animInan,
    divineNonDivine,
    humanAnimalInan,
    mascFemNeut,
    mascFem,
    naturalArtificial,
    animacyClassifierArray,
    shapeClassifierArray,
    shortGenericClassifierArray, singulativeMassNounArray, pluralSingulativeMassNounArray, activePassiveMass, animInanMass, divineNonDivineMass, humanAnimalInanMass, mascFemMass,  mascFemNeutMass, naturalArtificialMass, animacyClassifierMassArray, shapeClassifierMassArray, shortGenericClassifierMassArray, languageName } from './script.js'
import {grammaticalNumber, nomSgAffix, caseNumber,} from './fusionalNouns.js'

import {spell} from './orthography.js'
import {soundChange} from './soundchange.js';
import { allWordsInThesaurus} from './thesaurus.js'

const animateArray = [];
const inanimateArray = [];
const masculine1Array = [];
const feminine1Array = [];
const masculine2Array = [];
const feminine2Array = [];
const neuterArray = [];
const divineArray = [];
const profaneArray = [];
const humanArray = [];
const animalArray = [];
const inanimate2Array = [];
const activeArray = [];
const passiveArray = [];

function capitaliseLanguageName(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function Dictionary(word, partOfSpeech, translation, classifierExplanation, etymology)  {
    this.word = word;
    this.partOfSpeech = partOfSpeech;
    this.translation = translation;
    this.classifierExplanation = classifierExplanation;
    this.etymology = etymology;
};

let word1 = "";
let wordWithAffix = "";
let classifierInfo = "";

function makeDictionary() {
    let englishWords = countNounArray.concat(massNounArray, adjectiveArray, transitiveVerbArray, intransitiveVerbArray, adverbArray, conjunctionArray, adpositionArray, intensifierArray);

    let languageWords = generatedCountNouns.concat(generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers);

    //when an English verb is homophonous with a noun, e.g "to love" and "love", the dictionary assigns both as being nouns. To avoid this, such verbs end with a capital "V", so that the strings are different. This function serves to remove that "V" after the dictionary has designated the word as a verb
    function removeVFromVerb(verb) {
        let newArray = Array.from(verb);
        for(let i = 0; i < newArray.length; i++) {
            if(newArray[i] === "V") {
                newArray.splice(i, 1);
                let newVerb = newArray.join("");
                return newVerb;
            }
        }
        return verb;
    }

       //Kerbekulo to English
    for(let i = 0; i < englishWords.length; i++) {
        let bareRoots = "";
        if(typologyNum !== 0) {
            bareRoots = ` (<i>-${spell(soundChange("X" + languageWords[i] + "A"))}-</i>)`
        } else {
            bareRoots = "";
        }
        let pOfSpeech = "";
        if(countNounArray.includes(englishWords[i])) {
            pOfSpeech = "n" + bareRoots;
            wordWithAffix = languageWords[i];
            classifierInfo = "";
        } else if(massNounArray.includes(englishWords[i])) {
        pOfSpeech = "n" + bareRoots;
        wordWithAffix = languageWords[i];
        } else if (adjectiveArray.includes(englishWords[i])) {
            pOfSpeech = "adj" + bareRoots;
            wordWithAffix = languageWords[i];
            classifierInfo = "";;
        } else if (transitiveVerbArray.includes(englishWords[i]) || intransitiveVerbArray.includes(englishWords[i])) {
            pOfSpeech = "v" + bareRoots;
            wordWithAffix = languageWords[i];
            classifierInfo = "";
        }else if (adverbArray.includes(englishWords[i])) {
                pOfSpeech = "adv";
                wordWithAffix = languageWords[i];
                classifierInfo = "";;
        }else if (conjunctionArray.includes(englishWords[i])) {
                pOfSpeech = "conj";
                wordWithAffix = languageWords[i];
                classifierInfo = "";;
        }else if (adpositionArray.includes(englishWords[i])) {
                pOfSpeech = "adpo";
                wordWithAffix = languageWords[i];
                classifierInfo = "";;
        }else if (intensifierArray.includes(englishWords[i])) {
                pOfSpeech = "adv";
                wordWithAffix = languageWords[i];
                classifierInfo = "";
        }
        if(genderNum > 0 && typologyNum !== 0) {
            if(nounGenderArray.includes("animate") && nounGenderArray.includes("inanimate")) {
                if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(animInan[index] === "anim") {
                    pOfSpeech = "n.anim" + bareRoots;
                    animateArray.push(generatedCountNouns[i])
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + animateAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = animateAffix + languageWords[i];
                    }
                classifierInfo = "";;
                } else if (animInan[index] === "inan"){
                    pOfSpeech = "n.inan" + bareRoots;
                    inanimateArray.push(generatedCountNouns[i])
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + inanimateAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = inanimateAffix + languageWords[i];
                    }
                }
                classifierInfo = "";;
                
            }
            if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(animInanMass[index] === "anim") {
                    pOfSpeech = "n.anim," +  bareRoots;
                    animalArray.push(generatedMassNouns[i])
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + animateAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = animateAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                } else if (animInanMass[index] === "inan"){
                    pOfSpeech = "n.inan" + bareRoots;
                    inanimateArray.push(generatedMassNouns[i])
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + inanimateAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = inanimateAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                }
                
            }
            }
            if(nounGenderArray.includes("masculine1") && nounGenderArray.includes("feminine1") && nounGenderArray.length === 2) {
                if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(mascFem[index] === "masculine1") {
                    pOfSpeech = "n.masc," +  bareRoots;
                    masculine1Array.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + masculineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = masculineAffix + languageWords[i] + "X";
                    }
                    classifierInfo = "";;
                } else if (mascFem[index] === "feminine1"){
                    pOfSpeech = "n.fem" + bareRoots;
                    feminine1Array.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + feminineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = feminineAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                }
            }
            
            if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(mascFemMass[index] === "masculine1") {
                    pOfSpeech = "n.masc," +  bareRoots;
                    masculine1Array.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + masculineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = masculineAffix + languageWords[i] + "X";
                    }
                    classifierInfo = "";;
                } else if (mascFemMass[index] === "feminine1"){
                    pOfSpeech = "n.fem" + bareRoots;
                    feminine1Array.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + feminineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = feminineAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                }
            }
        }
            if(nounGenderArray.includes("masculine2") && nounGenderArray.includes("feminine2") && nounGenderArray.includes("neuter") && nounGenderArray.length === 3) {
                if(countNounArray.includes(englishWords[i])) {
                    let index = countNounArray.indexOf(englishWords[i])
                    if(mascFemNeut[index] === "masculine2") {
                            pOfSpeech = "n.masc" + bareRoots;
                            masculine2Array.push(generatedCountNouns[i]);
                            if(genderSuffixOrPrefix === "suffix") {
                                wordWithAffix = "X" + languageWords[i] + masculineAffix;
                            }
                            if(genderSuffixOrPrefix === "prefix") {
                                wordWithAffix = masculineAffix + languageWords[i];
                            }
                            classifierInfo = "";;
                        } else if (mascFemNeut[index] === "feminine2"){
                            pOfSpeech = "n.fem" + bareRoots;
                            feminine2Array.push(generatedCountNouns[i])
                            if(genderSuffixOrPrefix === "suffix") {
                                wordWithAffix = "X" + languageWords[i] + feminineAffix;
                            }
                            if(genderSuffixOrPrefix === "prefix") {
                                wordWithAffix = feminineAffix + languageWords[i];
                            }
                            classifierInfo = "";;
                        } else if (mascFemNeut[index] === "neuter"){
                            pOfSpeech = "n.neut" + bareRoots;
                            neuterArray.push(generatedCountNouns[i])
                            if(genderSuffixOrPrefix === "suffix") {
                                wordWithAffix = "X" + languageWords[i] + neuterAffix;
                            }
                            if(genderSuffixOrPrefix === "prefix") {
                                wordWithAffix = neuterAffix + languageWords[i];
                            }
                            classifierInfo = "";;
                        }  
                }
                if(massNounArray.includes(englishWords[i])) {
                    let index = massNounArray.indexOf(englishWords[i])
                    if(mascFemNeutMass[index] === "masculine2") {
                            pOfSpeech = "n.masc" + bareRoots;
                            masculine2Array.push(generatedMassNouns[i]);
                            if(genderSuffixOrPrefix === "suffix") {
                                wordWithAffix = "X" + languageWords[i] + masculineAffix;
                            }
                            if(genderSuffixOrPrefix === "prefix") {
                                wordWithAffix = masculineAffix + languageWords[i];
                            }
                            classifierInfo = "";;
                        } else if (mascFemNeutMass[index] === "feminine2"){
                            pOfSpeech = "n.fem" + bareRoots;
                            feminine2Array.push(generatedMassNouns[i])
                            if(genderSuffixOrPrefix === "suffix") {
                                wordWithAffix = "X" + languageWords[i] + feminineAffix;
                            }
                            if(genderSuffixOrPrefix === "prefix") {
                                wordWithAffix = feminineAffix + languageWords[i];
                            }
                            classifierInfo = "";;
                        } else if (mascFemNeutMass[index] === "neuter"){
                            pOfSpeech = "n.neut" + bareRoots;
                            neuterArray.push(generatedMassNouns[i])
                            if(genderSuffixOrPrefix === "suffix") {
                                wordWithAffix = "X" + languageWords[i] + neuterAffix;
                            }
                            if(genderSuffixOrPrefix === "prefix") {
                                wordWithAffix = neuterAffix + languageWords[i];
                            }
                            classifierInfo = "";;
                        }  
                }
            }
            if(nounGenderArray.includes("divine") && nounGenderArray.includes("profane") && nounGenderArray.length === 2) {
                if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(divineNonDivine[index] === "divine") {
                    pOfSpeech = "n.div" + bareRoots;
                    divineArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + divineAffix;
                    }
                    classifierInfo = "";;
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = divineAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                } else if (divineNonDivine[index] === "profane"){
                    pOfSpeech = "n.prof" + bareRoots;
                    profaneArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + profaneAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = profaneAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                }
                }
                if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(divineNonDivineMass[index] === "divine") {
                    pOfSpeech = "n.div" + bareRoots;
                    divineArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + divineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = divineAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                } else if (divineNonDivineMass[index] === "profane"){
                    pOfSpeech = "n.prof" + bareRoots;
                    profaneArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + profaneAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = profaneAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                }
            }
            }   
            if(nounGenderArray.includes("human") && nounGenderArray.includes("animal") && nounGenderArray.includes("secondinanimate") && nounGenderArray.length === 3) {
                if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(humanAnimalInan[index] === "human") {
                    pOfSpeech = "n.human" + bareRoots;
                    humanArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + humanAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = humanAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                } else if (humanAnimalInan[index] === "animal"){
                    pOfSpeech = "n.anim" + bareRoots;
                    animalArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + animalAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = animalAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                } else if (humanAnimalInan[index] === "secondinanimate"){
                    pOfSpeech = "n.inan" + bareRoots;
                    inanimate2Array.push(generatedCountNouns[i])
                    inanimate2Array.push(generatedMassNouns[i])
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + inanimate2Affix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = inanimate2Affix + languageWords[i];
                    }
                    classifierInfo = "";;
                }
            }
            if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(humanAnimalInanMass[index] === "human") {
                    pOfSpeech = "n.human" + bareRoots;
                    humanArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + humanAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = humanAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                } else if (humanAnimalInanMass[index] === "animal"){
                    pOfSpeech = "n.anim" + bareRoots;
                    animalArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + animalAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = animalAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                } else if (humanAnimalInanMass[index] === "secondinanimate"){
                    pOfSpeech = "n.inan" + bareRoots;
                    inanimate2Array.push(generatedMassNouns[i])
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + inanimate2Affix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = inanimate2Affix + languageWords[i];
                    }
                    classifierInfo = "";;
                }
            }
            }
            if(nounGenderArray.includes("active") && nounGenderArray.includes("passive")) {
                if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(activePassive[index] === "active") {
                    pOfSpeech = "n.active" + bareRoots;
                    humanArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + activeAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = activeAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                } else if (activePassive[index] === "passive"){
                    pOfSpeech = "n.passive" + bareRoots;
                    animalArray.push(generatedCountNouns[i])
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + passiveAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = passiveAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                }
                }
                if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(activePassiveMass[index] === "active") {
                    pOfSpeech = "n.active" + bareRoots;
                    humanArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + activeAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = activeAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                } else if (activePassiveMass[index] === "passive"){
                    pOfSpeech = "n.passive" + bareRoots;
                    animalArray.push(generatedMassNouns[i])
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + passiveAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = passiveAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                }
                }
            }
            if(nounGenderArray.includes("natural") && nounGenderArray.includes("artificial")) {
                if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(naturalArtificial[index] === "natural") {
                    pOfSpeech = "n.nat" + bareRoots;
                    humanArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + naturalAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = naturalAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                } else if (naturalArtificial[index] === "artificial"){
                    pOfSpeech = "n.art" + bareRoots;
                    animalArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + artificialAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = artificialAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                }
            }
             if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(naturalArtificialMass[index] === "natural") {
                    pOfSpeech = "n.nat" + bareRoots;
                    humanArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + naturalAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = naturalAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                } else if (naturalArtificialMass[index] === "artificial"){
                    pOfSpeech = "n.art" + bareRoots;
                    animalArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + artificialAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = artificialAffix + languageWords[i];
                    }
                    classifierInfo = "";;
                }
            }
            }
        }
        if(typologyNum === 0 && grammaticalNumIsolating > 5 && randomClassifierNum === 0) {
            if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(shapeClassifierArray[index] === "long-and-slender") {
                    pOfSpeech = "n.long";
                    if(englishWords[i] === "branch" && randomNumForLongAndSlender === 0) {
                        classifierInfo = `; classifier for long&nbspand&nbspslender nouns: ${branchExample}`
                    } else if(englishWords[i] === "pole" && randomNumForLongAndSlender === 1) {
                        classifierInfo = `; classifier for long&nbspand&nbspslender nouns: ${poleExample}`
                    } else {
                        classifierInfo = "";
                    }
                } else if (shapeClassifierArray[index] === "short-and-wide"){
                    pOfSpeech = "n.short"
                    if(englishWords[i] === "shoulder" && randomNumForShortAndWide === 0) {
                        classifierInfo = `; classifier for short&nbspand&nbspwide nouns: ${shoulderExample}`
                    } else if(englishWords[i] === "wedge" && randomNumForShortAndWide === 1) {
                        classifierInfo = `; classifier for short&nbspand&nbspwide nouns: ${wedgeExample}`
                    } else {
                        classifierInfo = "";
                    }
                } else if (shapeClassifierArray[index] === "round"){
                    pOfSpeech = "n.round"
                    if(englishWords[i] === "apple" && randomNumForRound === 0) {
                        classifierInfo = `; classifier for round nouns: ${appleExample}`
                    } else if(englishWords[i] === "pebble" && randomNumForRound === 1) {
                        classifierInfo = `; classifier for round nouns: ${pebbleExample}`
                    } else if(englishWords[i] === "ball" && randomNumForRound === 2) {
                        classifierInfo = `; classifier for round nouns: ${ballExample}`
                    } else {
                        classifierInfo = "";
                    }
                } else if (shapeClassifierArray[index] === "pointed"){
                    pOfSpeech = "n.pointed"
                    if(englishWords[i] === "arrow" && randomNumForPointed === 0) {
                        classifierInfo = `; classifier for pointed nouns: ${arrowExample}`
                    } else if(englishWords[i] === "thorn" && randomNumForPointed === 1) {
                        classifierInfo = `; classifier for pointed nouns: ${thornExample}`
                    } else if(englishWords[i] === "fork" && randomNumForPointed === 2) {
                        classifierInfo = `; classifier for pointed nouns: ${forkExample}`
                    } else {
                        classifierInfo = "";
                    }
                } else if (shapeClassifierArray[index] === "flat"){
                    pOfSpeech = "n.flat"
                    if(englishWords[i] === "slab" && randomNumForFlat === 0) {
                        classifierInfo = `; classifier for flat nouns: ${slabExample}`
                    } else if(englishWords[i] === "face" && randomNumForFlat === 1) {
                        classifierInfo = `; classifier for flat nouns: ${faceExample}`
                    } else {
                        classifierInfo = "";
                    }
                } else if (shapeClassifierArray[index] === "shapeless"){
                    pOfSpeech = "n.shapeless"
                    classifierInfo = "";
                }
            }
            if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(shapeClassifierMassArray[index] === "shapeless") {
                    pOfSpeech = "n.shapeless";
                    if(englishWords[i] === "air" && randomNumForShapeless === 0) {
                        classifierInfo = `; classifier for shapeless nouns: ${airExample}`
                    } else 
                    classifierInfo = "";
                } else if (shapeClassifierMassArray[index] === "long-and-slender"){
                    pOfSpeech = "n.long";
                    classifierInfo = "";
                }
                
            }
        }
        if(typologyNum === 0 && grammaticalNumIsolating > 5 && randomClassifierNum === 1) {
            if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(animacyClassifierArray[index] === "man") {
                    pOfSpeech = "n.man";
                    if(englishWords[i] === "man" && randomNumForMan === 0) {
                        classifierInfo = `; classifier for man nouns: ${manExample}`
                    } else {
                        classifierInfo = "";
                    }
                } else if(animacyClassifierArray[index] === "woman") {
                    pOfSpeech = "n.woman";
                    if(englishWords[i] === "woman" && randomNumForWoman === 0) {
                        classifierInfo = `; classifier for woman nouns: ${womanExample}`
                    } else {
                        classifierInfo = "";
                    }
                } else if(animacyClassifierArray[index] === "child") {
                   pOfSpeech = "n.child";
                   if(englishWords[i] === "child" && randomNumForChild === 0) {
                       classifierInfo = `; classifier for child nouns: ${childExample}`
                   } else {
                       classifierInfo = "";
                   }
               } else if(animacyClassifierArray[index] === "wild-animal") {
                   pOfSpeech = "n.wild";
                   if(englishWords[i] === "wolf" && randomNumForWildAnimal === 0) {
                       classifierInfo = `; classifier for wild&nbspanimal nouns: ${wolfExample}`
                   } else if(englishWords[i] === "bear" && randomNumForWildAnimal === 1) {
                       classifierInfo = `; classifier for wild&nbspanimal nouns: ${bearExample}`
                   } else {
                       classifierInfo = "";
                   }
               } else if(animacyClassifierArray[index] === "meat") {
                   pOfSpeech = "n.meat";
                   if(englishWords[i] === "goat" && randomNumForMeat === 0) {
                       classifierInfo = `; classifier for meat nouns: ${goatExample}`
                   }  else {
                       classifierInfo = "";
                   }
               } else if(animacyClassifierArray[index] === "fur") {
                   pOfSpeech = "n.fur";
                   if(englishWords[i] === "sheep" && randomNumForFur === 1) {
                       classifierInfo = `; classifier for fur nouns: ${sheepExample}`
                   }  else {
                       classifierInfo = "";
                   }
               } else if(animacyClassifierArray[index] === "labour") {
                   pOfSpeech = "n.labour";
                   if(englishWords[i] === "horse" && randomNumForLabour === 2) {
                       classifierInfo = `; classifier for labour nouns: ${horseExample}`
                   } else if(englishWords[i] === "donkey" && randomNumForLabour === 4) {
                       classifierInfo = `; classifier for labour nouns: ${donkeyExample}`
                   } else {
                       classifierInfo = "";
                   }
               } else if(animacyClassifierArray[index] === "inedible") {
                   pOfSpeech = "n.inedible";
                   if(englishWords[i] === "thing" && randomNumForInEdible === 0) {
                       classifierInfo = `; classifier for inedible nouns: ${thingExample}`
                   } else if(englishWords[i] === "rock" && randomNumForInEdible === 1) {
                       classifierInfo = `; classifier for inedible nouns: ${rockExample}`
                   } else if(englishWords[i] === "udder" && randomNumForMilk === 1) {
                       classifierInfo = `; classifier for milk nouns: ${udderExample}`
                   }  else if(englishWords[i] === "hoof" && randomNumForLabour === 3) {
                       classifierInfo = `; classifier for labour nouns: ${hoofExample}`
                   }  else if(englishWords[i] === "basket" && randomNumForEdible === 0) {
                       classifierInfo = `; classifier for edible nouns: ${basketExample}`
                   } else {
                       classifierInfo = "";
                   }
                } else if(animacyClassifierArray[index] === "milk") {
                   pOfSpeech = "n.milk";
                   if(englishWords[i] === "cow" && randomNumForMilk === 2) {
                       classifierInfo = `; classifier for milk nouns: ${cowExample}`
                   } else {
                       classifierInfo = "";
                   }
                } else if(animacyClassifierArray[index] === "edible") {
                   pOfSpeech = "n.edible";
                   if(englishWords[i] === "berry" && randomNumForEdible === 1) {
                       classifierInfo = `; classifier for edible nouns: ${berryExample}`
                   } else {
                       classifierInfo = "";
                   }
                }

            }
            if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i]);
                if(animacyClassifierMassArray[index] === "inedible") {
                   pOfSpeech = "n.inedible";
                   if(englishWords[i] === "skin" && randomNumForFur === 0) {
                       classifierInfo = `; classifier for fur nouns: ${skinExample}`
                   } else if(englishWords[i] === "labour" && randomNumForLabour === 0) {
                       classifierInfo = `; classifier for labour nouns: ${labourExample}`
                   } else {
                       classifierInfo = "";
                   }
               } 
           
                if(animacyClassifierMassArray[index] === "edible") {
                    pOfSpeech = "n.edible";
                    if(englishWords[i] === "milk" && randomNumForMilk === 0) {
                        classifierInfo = `; classifier for milk nouns: ${milkExample}`
                    } else {
                        classifierInfo = "";
                    }
                }
            }
            if(transitiveVerbArray.includes(englishWords[i])) {
                   if(englishWords[i] === "push" && randomNumForLabour === 1) {
                       classifierInfo = `; classifier for labour nouns: ${pushExample}`
                   } else {
                       classifierInfo = "";
                   }
               
            }
        }
        if(typologyNum === 0 && grammaticalNumIsolating > 5 && randomClassifierNum === 2) {
            if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(shortGenericClassifierArray[index] === "human2") {
                    pOfSpeech = "n.human";
                    if(englishWords[i] === "man" && randomNumForHuman === 0) {
                        classifierInfo = `; classifier for human nouns: ${manExample2}`
                    } else if(englishWords[i] === "human" && randomNumForHuman === 1) {
                        classifierInfo = `; classifier for human nouns: ${humanExample}`
                    } else if(englishWords[i] === "person" && randomNumForHuman === 2) {
                        classifierInfo = `; classifier for human nouns: ${personExample}`
                    } else {
                        classifierInfo = "";
                    }
                } else if(shortGenericClassifierArray[index] === "tree") {
                    pOfSpeech = "n.tree";
                    if(englishWords[i] === "oak" && randomNumForTree === 0) {
                        classifierInfo = `; classifier for tree nouns: ${oakExample}`
                    } else if (englishWords[i] === "alder" && randomNumForTree === 1) {
                        classifierInfo = `; classifier for tree nouns: ${alderExample}`
                    } else if (englishWords[i] === "elm" && randomNumForTree === 2) {
                        classifierInfo = `; classifier for tree nouns: ${elmExample}`
                    }  else if (englishWords[i] === "beech" && randomNumForTree === 3) {
                        classifierInfo = `; classifier for tree nouns: ${beechExample}`
                    } else {
                        classifierInfo = "";
                    }
                } else if(shortGenericClassifierArray[index] === "grass") {
                    pOfSpeech = "n.grass";
                    classifierInfo = "";
                } else if(shortGenericClassifierArray[index] === "flower") {
                    pOfSpeech = "n.flower";
                    if(englishWords[i] === "flower" && randomNumForFlower === 0) {
                        classifierInfo = `; classifier for flower nouns: ${flowerExample}`
                    } else {
                        classifierInfo = "";
                    }
                } else if(shortGenericClassifierArray[index] === "natural-inanimate") {
                    pOfSpeech = "n.nat-inan";
                    if(englishWords[i] === "land" && randomNumForLandAnimal === 0) {
                        classifierInfo = `; classifier for land&nbspanimal nouns: ${landExample}`
                    } if(englishWords[i] === "sky" && randomNumForFlyingAnimal === 0) {
                        classifierInfo = `; classifier for flying&nbspanimal nouns: ${skyExample}`
                    } if(englishWords[i] === "cloud" && randomNumForFlyingAnimal === 1) {
                        classifierInfo = `; classifier for flying&nbspanimal nouns: ${cloudExample}`
                    } if(englishWords[i] === "wing" && randomNumForFlyingAnimal === 2) {
                        classifierInfo = `; classifier for flying&nbspanimal nouns: ${wingExample}`
                    } if(englishWords[i] === "rock" && randomNumForNatural === 0) {
                        classifierInfo = `; classifier for natural&nbspinanimate nouns: ${rockExample2}`
                    } else {
                        classifierInfo = "";
                    }
                } else if(shortGenericClassifierArray[index] === "land-animal") {
                    pOfSpeech = "n.land";
                    classifierInfo = "";
                }  else if(shortGenericClassifierArray[index] === "water-animal") {
                    pOfSpeech = "n.water";
                    if(englishWords[i] === "fish" && randomNumForWaterAnimal === 2) {
                        classifierInfo = `; classifier for water&nbspanimal nouns: ${fishExample}`
                    } else {
                        classifierInfo = "";
                    }
                }  else if(shortGenericClassifierArray[index] === "liquid") {
                    pOfSpeech = "n.liquid";
                    if(englishWords[i] === "sea" && randomNumForWaterAnimal === 1) {
                        classifierInfo = `; classifier for water&nbspanimal nouns: ${seaExample}`
                    } else if(englishWords[i] === "drop" && randomNumForLiquid === 0) {
                        classifierInfo = `; classifier for liquid nouns: ${dropExample}`
                    }  else if(englishWords[i] === "pool" && randomNumForLiquid === 1) {
                        classifierInfo = `; classifier for liquid nouns: ${poolExample}`
                    } else {
                        classifierInfo = "";
                    }
                }  else if(shortGenericClassifierArray[index] === "word") {
                    pOfSpeech = "n.word";
                    if(englishWords[i] === "word" && randomNumForWord === 0) {
                        classifierInfo = `; classifier for word nouns: ${wordExample}`
                    } if(englishWords[i] === "mouth" && randomNumForWord === 1) {
                        classifierInfo = `; classifier for word nouns: ${mouthExample}`
                    } else {
                        classifierInfo = "";
                    }
                }  else if(shortGenericClassifierArray[index] === "tool") {
                    pOfSpeech = "n.tool";
                    if(englishWords[i] === "axe" && randomNumForTool === 0) {
                        classifierInfo = `; classifier for tool nouns: ${axeExample}`
                    } else if(englishWords[i] === "handle" && randomNumForTool === 1) {
                        classifierInfo = `; classifier for tool nouns: ${handleExample}`
                    }  else if(englishWords[i] === "hammer" && randomNumForTool === 2) {
                        classifierInfo = `; classifier for tool nouns: ${hammerExample}`
                    }  else if(englishWords[i] === "plough" && randomNumForTool === 3) {
                        classifierInfo = `; classifier for tool nouns: ${ploughExample}`
                    }  else if(englishWords[i] === "cup" && randomNumForLiquid === 2) {
                        classifierInfo = `; classifier for liquid nouns: ${cupExample}`
                    }  else {
                        classifierInfo = "";
                    }
                }
            }
            if (massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i]);
                if(shortGenericClassifierMassArray[index] === "human2") {
                    pOfSpeech = "n.human";
                    classifierInfo = "";
                } else if (shortGenericClassifierMassArray[index] === "grass") {
                    pOfSpeech = "n.grass";
                    if(englishWords[i] === "grass" && randomNumForGrass === 0) {
                        classifierInfo = `; classifier for grass nouns: ${grassExample}`
                    } else {
                        classifierInfo = "";
                    }
                }  else if (shortGenericClassifierMassArray[index] === "tool") {
                    pOfSpeech = "n.tool";
                    classifierInfo = "";
                }  else if (shortGenericClassifierMassArray[index] === "natural-inanimate") {
                    pOfSpeech = "n.nat-inan";
                    if(englishWords[i] === "dirt" && randomNumForNatural === 1) {
                        classifierInfo = `; classifier for natural&nbspinanimate nouns: ${dirtExample}`
                    } else if(englishWords[i] === "mud" && randomNumForNatural === 2) {
                        classifierInfo = `; classifier for natural&nbspinanimate nouns: ${mudExample}`
                    } else {
                        classifierInfo = "";
                    }
                }   else if (shortGenericClassifierMassArray[index] === "liquid") {
                    pOfSpeech = "n.water";
                    if(englishWords[i] === "water" && randomNumForWaterAnimal === 0) {
                        classifierInfo = `; classifier for water&nbspanimal nouns: ${waterExample}`
                    } else {
                        classifierInfo = "";
                    }
                }
            }
            }
            
        //if the language has a marked singular, then the singular affix is added to the dictionary form of nouns
        if(typologyNum === 1 && grammaticalNumAgglutinative < 24  && markedSingularOrNot() === true) {    
            if(countNounArray.includes(englishWords[i])) {
                    if(markedSingularOrNot() && numberSuffixOrPrefix === "suffix") {
                        wordWithAffix = wordWithAffix + singularAffix;
                    }
                    if(markedSingularOrNot() && numberSuffixOrPrefix === "prefix") {
                        wordWithAffix = singularAffix + wordWithAffix;
                    }
                }
            if(massNounArray.includes(englishWords[i])) {
                if(markedSingularOrNot() && numberSuffixOrPrefix === "suffix") {
                    wordWithAffix = wordWithAffix + singularAffix;
                }
                if(markedSingularOrNot() && numberSuffixOrPrefix === "prefix") {
                    wordWithAffix = singularAffix + wordWithAffix;
                }
            }
        }
        //if language is fusional but has no case or gender
        if(typologyNum === 2 && grammaticalNumber < 24 && caseNumber === 0 && markedSingularOrNot() === true) {   
            if(countNounArray.includes(englishWords[i])) {
                    if(markedSingularOrNot() && numberSuffixOrPrefix === "suffix") {
                        wordWithAffix = wordWithAffix + singularAffix;
                    }
                    if(markedSingularOrNot() && numberSuffixOrPrefix === "prefix") {
                        wordWithAffix = singularAffix + wordWithAffix;
                    }
                }
            if(massNounArray.includes(englishWords[i])) {
                if(markedSingularOrNot() && numberSuffixOrPrefix === "suffix") {
                    wordWithAffix = wordWithAffix + singularAffix;
                }
                if(markedSingularOrNot() && numberSuffixOrPrefix === "prefix") {
                    wordWithAffix = singularAffix + wordWithAffix;
                }
            }
        } 

        //if language is fusional and has cases but no gender
        if(typologyNum === 2 && grammaticalNumber < 24 && caseNumber > 0 && genderNum < 9) {   
            if(countNounArray.includes(englishWords[i])) {
                    if(numberSuffixOrPrefix === "suffix") {
                        wordWithAffix = wordWithAffix + nomSgAffix;
                    }
                    if(numberSuffixOrPrefix === "prefix") {
                        wordWithAffix = nomSgAffix + wordWithAffix;
                    }
                }
            if(massNounArray.includes(englishWords[i])) {
                if(numberSuffixOrPrefix === "suffix") {
                    wordWithAffix = wordWithAffix + nomSgAffix;
                }
                if(numberSuffixOrPrefix === "prefix") {
                    wordWithAffix = nomSgAffix + wordWithAffix;
                }
            }
        } 
        
        word1 = new Dictionary(spell(soundChange(wordWithAffix)), pOfSpeech, removeVFromVerb(englishWords[i]), classifierInfo, spell(wordWithAffix));
        let headWord = document.createElement("span");
        let pOS = document.createElement("span");
        let meaning = document.createElement("span");
        let classiferEtymology = document.createElement("span");
        let etymology = document.createElement("span");

        headWord.innerHTML = word1.word;
        pOS.innerHTML = word1.partOfSpeech;
        meaning.innerHTML = word1.translation;
        classiferEtymology.innerHTML = word1.classifierExplanation;
        etymology.innerHTML = `&nbsp<&nbspOld&nbsp${capitaliseLanguageName(languageName)}&nbsp<i>${word1.etymology}</i>`;

        let entry = document.createElement("div");
        entry.classList.add("entry");
        entry.innerHTML = `${headWord.innerHTML} ${pOS.innerHTML} ${meaning.innerHTML} ${classiferEtymology.innerHTML} ${etymology.innerHTML}`;
        document.getElementById("language-to-english").appendChild(entry);
        }   


    //English to Kerkebulo
    for(let i = 0; i < englishWords.length; i++) {
        let pOfSpeech = "";
            if(countNounArray.includes(englishWords[i])) {
                pOfSpeech = "n";
                wordWithAffix = "X" + languageWords[i];
            } else if(massNounArray.includes(englishWords[i])) {
                pOfSpeech = "n";
                wordWithAffix = "X" + languageWords[i];
            } else if (adjectiveArray.includes(englishWords[i])) {
                pOfSpeech = "adj";
                wordWithAffix = "X" + languageWords[i];
            } else if (transitiveVerbArray.includes(englishWords[i]) || intransitiveVerbArray.includes(englishWords[i])) {
                pOfSpeech = "v";
                wordWithAffix = "X" + languageWords[i];
            } else if (adverbArray.includes(englishWords[i])) {
                pOfSpeech = "adv";
                wordWithAffix = "X" + languageWords[i];
            }else if (conjunctionArray.includes(englishWords[i])) {
                pOfSpeech = "conj";
                wordWithAffix = "X" + languageWords[i];
            }else if (adpositionArray.includes(englishWords[i])) {
                pOfSpeech = "adpo";
                wordWithAffix = "X" + languageWords[i];
            }else if (intensifierArray.includes(englishWords[i])) {
                pOfSpeech = "adv";
                wordWithAffix = "X" + languageWords[i];
            }

            if(genderNum > 0 && typologyNum !== 0) {
            if(nounGenderArray.includes("animate") && nounGenderArray.includes("inanimate") && nounGenderArray.length === 2) {
                if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(animInan[index] === "anim") {
                    pOfSpeech = `n.anim`;
                    animateArray.push(generatedCountNouns[i])
                    animalArray.push(generatedMassNouns[i])
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + animateAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = animateAffix + languageWords[i];
                    }
                } else if (animInan[index] === "inan"){
                    pOfSpeech = `n.inan`;
                    inanimateArray.push(generatedCountNouns[i])
                    inanimateArray.push(generatedMassNouns[i])
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + inanimateAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = inanimateAffix + languageWords[i];
                    }
                }
                
            }
            if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(animInanMass[index] === "anim") {
                    pOfSpeech = `n.anim`;
                    animateArray.push(generatedCountNouns[i])
                    animalArray.push(generatedMassNouns[i])
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + animateAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = animateAffix + languageWords[i];
                    }
                } else if (animInanMass[index] === "inan"){
                    pOfSpeech = `n.inan`;
                    inanimateArray.push(generatedCountNouns[i])
                    inanimateArray.push(generatedMassNouns[i])
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + inanimateAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = inanimateAffix + languageWords[i];
                    }
                }
                
            }
            }
            if(nounGenderArray.includes("masculine1") && nounGenderArray.includes("feminine1") && nounGenderArray.length === 2) {
                if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(mascFem[index] === "masc") {
                    pOfSpeech = "n.masc";
                    masculine1Array.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + masculineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = masculineAffix + languageWords[i];
                    }
                } else if (mascFem[index] === "fem"){
                    pOfSpeech = "n.fem";
                    feminine1Array.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + feminineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = feminineAffix + languageWords[i];
                    }
                }
            }
            if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(mascFemMass[index] === "masc") {
                    pOfSpeech = "n.masc";
                    masculine1Array.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + masculineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = masculineAffix + languageWords[i];
                    }
                } else if (mascFemMass[index] === "fem"){
                    pOfSpeech = "n.fem";
                    feminine1Array.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + feminineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = feminineAffix + languageWords[i];
                    }
                }
            }
            }
            if(nounGenderArray.includes("masculine2") && nounGenderArray.includes("feminine2") && nounGenderArray.includes("neuter") && nounGenderArray.length === 3) {
                if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(mascFemNeut[index] === "masculine2") {
                    pOfSpeech = "n.masc";
                    masculine2Array.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "A" + languageWords[i] + "A" + masculineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = masculineAffix + languageWords[i];
                    }
                } else if (mascFemNeut[index] === "feminine2"){
                    pOfSpeech = "n.fem";
                    feminine2Array.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + feminineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = feminineAffix + languageWords[i];
                    }
                } else if (mascFemNeut[index] === "neuter"){
                    pOfSpeech = "n.neut";
                    neuterArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] +neuterAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = neuterAffix + languageWords[i];
                    }
                }
            }
            if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(mascFemNeutMass[index] === "masculine2") {
                    pOfSpeech = "n.masc";
                    masculine2Array.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "A" + languageWords[i] + "A" + masculineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = masculineAffix + languageWords[i];
                    }
                } else if (mascFemNeutMass[index] === "feminine2"){
                    pOfSpeech = "n.fem";
                    feminine2Array.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + feminineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = feminineAffix + languageWords[i];
                    }
                } else if (mascFemNeutMass[index] === "neuter"){
                    pOfSpeech = "n.neut";
                    neuterArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] +neuterAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = neuterAffix + languageWords[i];
                    }
                }
            }
            }
            if(nounGenderArray.includes("divine") && nounGenderArray.includes("profane") && nounGenderArray.length === 2) {
                if(countNounArray.includes(englishWords[i])) {
                let index = englishWords.indexOf(englishWords[i])
                if(divineNonDivine[index] === "divine") {
                    pOfSpeech = "n.div";
                    divineArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + divineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = divineAffix + languageWords[i];
                    }
                } else if (divineNonDivine[index] === "profane"){
                    pOfSpeech = "n.prof";
                    profaneArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + profaneAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = profaneAffix + languageWords[i];
                    }
                }
            }
            if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(divineNonDivineMass[index] === "divine") {
                    pOfSpeech = "n.div";
                    divineArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + divineAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = divineAffix + languageWords[i];
                    }
                } else if (divineNonDivineMass[index] === "profane"){
                    pOfSpeech = "n.prof";
                    profaneArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + profaneAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = profaneAffix + languageWords[i];
                    }
                }
            }
            }
            if(nounGenderArray.includes("human") && nounGenderArray.includes("animal") && nounGenderArray.includes("secondinanimate") && nounGenderArray.length === 3) {
                if(countNounArray.includes(englishWords[i])) {
                let index = englishWords.indexOf(englishWords[i])
                if(humanAnimalInan[index] === "human") {
                    pOfSpeech = "n.human";
                    humanArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + humanAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = humanAffix + languageWords[i];
                    }
                } else if (humanAnimalInan[index] === "animal"){
                    pOfSpeech = "n.animal";
                    animalArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + animalAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = animalAffix + languageWords[i];
                    }
                } else if (humanAnimalInan[index] === "inanimate"){
                    pOfSpeech = "n.inanimate";
                    inanimate2Array.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i]  + inanimate2Affix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = inanimate2Affix + languageWords[i];
                    }
                }
            }
            if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(humanAnimalInanMass[index] === "human") {
                    pOfSpeech = "n.human";
                    humanArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + humanAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = humanAffix + languageWords[i];
                    }
                } else if (humanAnimalInanMass[index] === "animal"){
                    pOfSpeech = "n.animal";
                    animalArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + animalAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = animalAffix + languageWords[i];
                    }
                } else if (humanAnimalInanMass[index] === "inanimate"){
                    pOfSpeech = "n.inanimate";
                    inanimate2Array.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i]  + inanimate2Affix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = inanimate2Affix + languageWords[i];
                    }
                }
            }
            }
            if(nounGenderArray.includes("active") && nounGenderArray.includes("passive")) {
                if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(activePassive[index] === "active") {
                    pOfSpeech = "n.active";
                    humanArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + activeAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = activeAffix + languageWords[i];
                    }
                } else if (activePassive[index] === "passive"){
                    pOfSpeech = "n.passive";
                    animalArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + activeAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = activeAffix + languageWords[i];
                    }
                }
            }
            if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(activePassiveMass[index] === "active") {
                    pOfSpeech = "n.active";
                    humanArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + activeAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = activeAffix + languageWords[i];
                    }
                } else if (activePassiveMass[index] === "passive"){
                    pOfSpeech = "n.passive";
                    animalArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + activeAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = activeAffix + languageWords[i];
                    }
                }
            }
            }
            if(nounGenderArray.includes("natural") && nounGenderArray.includes("artificial")) {
                if(countNounArray.includes(englishWords[i])) {
                let index = countNounArray.indexOf(englishWords[i])
                if(naturalArtificial[index] === "natural") {
                    pOfSpeech = "n.natural";
                    humanArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + naturalAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = naturalAffix + languageWords[i];
                    }
                } else if (naturalArtificial[index] === "artificial"){
                    pOfSpeech = "n.artificial";
                    animalArray.push(generatedCountNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + artificialAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = artificialAffix + languageWords[i];
                    }
                }
            }
             if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(naturalArtificialMass[index] === "natural") {
                    pOfSpeech = "n.natural";
                    humanArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + naturalAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = naturalAffix + languageWords[i];
                    }
                } else if (naturalArtificialMass[index] === "artificial"){
                    pOfSpeech = "n.artificial";
                    animalArray.push(generatedMassNouns[i]);
                    if(genderSuffixOrPrefix === "suffix") {
                        wordWithAffix = "X" + languageWords[i] + artificialAffix;
                    }
                    if(genderSuffixOrPrefix === "prefix") {
                        wordWithAffix = artificialAffix + languageWords[i];
                    }
                }
            }
            }
            }
            if(typologyNum === 0 && grammaticalNumIsolating > 5 && randomClassifierNum === 0) {
                if(countNounArray.includes(englishWords[i])) {
                    let index = countNounArray.indexOf(englishWords[i]);
                    if(shapeClassifierArray[index] === "long-and-slender") {
                        pOfSpeech = "n.long";
                    } else if (shapeClassifierArray[index] === "short-and-wide"){
                        pOfSpeech = "n.short";
                    } else if (shapeClassifierArray[index] === "round"){
                        pOfSpeech = "n.round";
                    } else if (shapeClassifierArray[index] === "pointed"){
                        pOfSpeech = "n.pointed";
                    } else if (shapeClassifierArray[index] === "flat"){
                        pOfSpeech = "n.flat";
                    } else if (shapeClassifierArray[index] === "shapeless"){
                        pOfSpeech = "n.shapeless";
                    }
                }
                if(massNounArray.includes(englishWords[i])) {
                    let index = massNounArray.indexOf(englishWords[i])
                    if(shapeClassifierMassArray[index] === "shapeless") {
                        pOfSpeech = "n.shapeless";
                    } else if (shapeClassifierMassArray[index] === "long-and-slender"){
                        pOfSpeech = "n.long";
                    }
                    
                }
            }
            if(typologyNum === 0 && grammaticalNumIsolating > 5 && randomClassifierNum === 1) {
                if(countNounArray.includes(englishWords[i])) {
                    let index = countNounArray.indexOf(englishWords[i]);
                    if(animacyClassifierArray[index] === "man") {
                        pOfSpeech = "n.man";
                    } else if (animacyClassifierArray[index] === "woman"){
                        pOfSpeech = "n.woman";
                    } else if (animacyClassifierArray[index] === "child"){
                        pOfSpeech = "n.child";
                    } else if (animacyClassifierArray[index] === "wild-animal"){
                        pOfSpeech = "n.wild";
                    } else if (animacyClassifierArray[index] === "meat"){
                        pOfSpeech = "n.meat";
                    } else if (animacyClassifierArray[index] === "fur"){
                        pOfSpeech = "n.fur";
                    } else if (animacyClassifierArray[index] === "labour"){
                        pOfSpeech = "n.labour";
                    } else if (animacyClassifierArray[index] === "milk"){
                        pOfSpeech = "n.milk";
                    } else if (animacyClassifierArray[index] === "edible"){
                        pOfSpeech = "n.edible";
                    } else if (animacyClassifierArray[index] === "inedible"){
                        pOfSpeech = "n.inedible";
                    }
                }
                if(massNounArray.includes(englishWords[i])) {
                    let index = massNounArray.indexOf(englishWords[i])
                    if(animacyClassifierMassArray[index] === "edible") {
                        pOfSpeech = "n.edible";
                    } else if (animacyClassifierMassArray[index] === "inedible"){
                        pOfSpeech = "n.inedible";
                    }
                    
                }
            }
            if(typologyNum === 0 && grammaticalNumIsolating > 5 && randomClassifierNum === 2) {
                if(countNounArray.includes(englishWords[i])) {
                    let index = countNounArray.indexOf(englishWords[i])
                    if(shortGenericClassifierArray[index] === "human2") {
                        pOfSpeech = "n.human";
                    } else if(shortGenericClassifierArray[index] === "tree") {
                        pOfSpeech = "n.tree";
                    } else if(shortGenericClassifierArray[index] === "grass") {
                        pOfSpeech = "n.grass";
                    } else if(shortGenericClassifierArray[index] === "flower") {
                        pOfSpeech = "n.flower";
                    } else if(shortGenericClassifierArray[index] === "natural-inanimate") {
                        pOfSpeech = "n.nat-inan";
                    } else if(shortGenericClassifierArray[index] === "land-animal") {
                        pOfSpeech = "n.land";
                    }  else if(shortGenericClassifierArray[index] === "water-animal") {
                        pOfSpeech = "n.water";
                    }  else if(shortGenericClassifierArray[index] === "liquid") {
                        pOfSpeech = "n.liquid";
                    }  else if(shortGenericClassifierArray[index] === "word") {
                        pOfSpeech = "n.word";
                    }  else if(shortGenericClassifierArray[index] === "tool") {
                        pOfSpeech = "n.tool";
                    }
                }
                if (massNounArray.includes(englishWords[i])) {
                    let index = massNounArray.indexOf(englishWords[i]);
                    if(shortGenericClassifierMassArray[index] === "human2") {
                        pOfSpeech = "n.human";
                    } else if (shortGenericClassifierMassArray[index] === "grass") {
                        pOfSpeech = "n.grass";
                    }  else if (shortGenericClassifierMassArray[index] === "tool") {
                        pOfSpeech = "n.tool";
                    }  else if (shortGenericClassifierMassArray[index] === "natural-inanimate") {
                        pOfSpeech = "n.nat-inan";
                    }   else if (shortGenericClassifierMassArray[index] === "liquid") {
                        pOfSpeech = "n.water";
                    }
                }
                }


                //if the language has a marked singular, then the singular affix is added to the dictionary form of nouns
                if(typologyNum === 1 && grammaticalNumAgglutinative < 24  && markedSingularOrNot() === true) {    
                    if(countNounArray.includes(englishWords[i])) {
                            if(markedSingularOrNot() && numberSuffixOrPrefix === "suffix") {
                                wordWithAffix = wordWithAffix + singularAffix;
                            }
                            if(markedSingularOrNot() && numberSuffixOrPrefix === "prefix") {
                                wordWithAffix = singularAffix + wordWithAffix;
                            }
                        }
                    if(massNounArray.includes(englishWords[i])) {
                        if(markedSingularOrNot() && numberSuffixOrPrefix === "suffix") {
                            wordWithAffix = wordWithAffix + singularAffix;
                        }
                        if(markedSingularOrNot() && numberSuffixOrPrefix === "prefix") {
                            wordWithAffix = singularAffix + wordWithAffix;
                        }
                    }
                }
                //if language is fusional but has no case or gender
                if(typologyNum === 2 && grammaticalNumber < 24 && caseNumber === 0 && markedSingularOrNot() === true) {   
                    if(countNounArray.includes(englishWords[i])) {
                            if(markedSingularOrNot() && numberSuffixOrPrefix === "suffix") {
                                wordWithAffix = wordWithAffix + singularAffix;
                            }
                            if(markedSingularOrNot() && numberSuffixOrPrefix === "prefix") {
                                wordWithAffix = singularAffix + wordWithAffix;
                            }
                        }
                    if(massNounArray.includes(englishWords[i])) {
                        if(markedSingularOrNot() && numberSuffixOrPrefix === "suffix") {
                            wordWithAffix = wordWithAffix + singularAffix;
                        }
                        if(markedSingularOrNot() && numberSuffixOrPrefix === "prefix") {
                            wordWithAffix = singularAffix + wordWithAffix;
                        }
                    }
                } 
        
                //if language is fusional and has cases but no gender
                if(typologyNum === 2 && grammaticalNumber < 24 && caseNumber > 0 && genderNum < 9) {   
                    if(countNounArray.includes(englishWords[i])) {
                            if(numberSuffixOrPrefix === "suffix") {
                                wordWithAffix = wordWithAffix + nomSgAffix;
                            }
                            if(numberSuffixOrPrefix === "prefix") {
                                wordWithAffix = nomSgAffix + wordWithAffix;
                            }
                        }
                    if(massNounArray.includes(englishWords[i])) {
                        if(numberSuffixOrPrefix === "suffix") {
                            wordWithAffix = wordWithAffix + nomSgAffix;
                        }
                        if(numberSuffixOrPrefix === "prefix") {
                            wordWithAffix = nomSgAffix + wordWithAffix;
                        }
                    }
                } 

        word1 = new Dictionary(spell(soundChange(wordWithAffix)), pOfSpeech, removeVFromVerb(englishWords[i]));
        let headWord = document.createElement("span");
        let pOS = document.createElement("span");
        let meaning = document.createElement("span");

        headWord.innerHTML = word1.word;
        pOS.innerHTML = word1.partOfSpeech;
        meaning.innerHTML = word1.translation;

        let entry = document.createElement("div");
        entry.classList.add("entry-english");
        entry.innerHTML = meaning.innerHTML + " " + pOS.innerHTML + " " + headWord.innerHTML;
        document.getElementById("english-to-language").appendChild(entry);
    }

    //Sorts the dictionary alphabetically
    let entryDiv = document.getElementsByClassName("entry");
    let entryEnglish = document.getElementsByClassName("entry-english");
    let entryArray = [];
    let entryEnglishArray = [];
    for(let i = 0; i < entryDiv.length; i++) {
        entryArray.push(entryDiv[i].innerHTML);
        entryEnglishArray.push(entryEnglish[i].innerHTML);
        entryArray.sort();
        entryEnglishArray.sort();
    }

    for(let i = 0; i < entryDiv.length; i++) {
        entryDiv[i].innerHTML = entryArray[i];
        entryEnglish[i].innerHTML = entryEnglishArray[i];
    }

    //styles each part of the entry by turning the single string into three span elements. If the part of speech is a noun, adjective or verb with a bare root listed in the entry, then the length of entryDiv will be 4, if not, the length will be 3
    
    for(let i = 0; i < entryDiv.length; i++) {    
        let entryText = entryDiv[i].innerHTML;
            let newArray = entryText.split(" ");
            let headWordText = "";
            let pOSText = "";
            let translationText = "";
            let classifierInfotext = ""; 
            let etymologyText = "";

            //how the entries are displayed depends on the typology, for example, isolating languages don't need to list the bare root
            //if typology is isolating
            if(typologyNum === 0) {
                //if the word is also a classifier, this is to include a note of such in the entry
                if(newArray[3] === ";" && newArray[4] === "classifier") {
                    headWordText = newArray[0];
                pOSText = newArray[1];
                translationText = newArray[2];
                    classifierInfotext = `${newArray[3]} ${newArray[4]} ${newArray[5]} ${newArray[6]} ${newArray[7]} ${newArray[8]} ${newArray[9]} ${newArray[10]}`
                } else {
                    headWordText = newArray[0];
                    pOSText = newArray[1];
                    translationText = newArray[2];
                    classifierInfotext = newArray[3];
                    etymologyText = newArray[4]
                }
            } else if(typologyNum > 0) { //if typology is agglutinative, the bare root is newArray[2] listed after the part of speech
                //adverbs, conjunctions and adpositions don't need to have bare roots shown, thus the length of their newArray is different
                if(newArray[1] === "conj" || newArray[1] === "adv" || newArray[1] === "adpo") {
                    headWordText = newArray[0];
                    pOSText = newArray[1]
                    translationText = newArray[2];
                    classifierInfotext = newArray[3];
                    etymologyText = newArray[4];
                } else {
                    headWordText = newArray[0];
                    pOSText = newArray[1] + " " + newArray[2];
                    translationText = newArray[3];
                    classifierInfotext = newArray[4];
                    etymologyText = newArray[5];
                }
                
            }
            
        let headWord = document.createElement("span");
        headWord.innerHTML = headWordText;
        headWord.style.fontWeight = "bold";
        headWord.style.fontSize = "18px";
        headWord.style.marginRight = "5px";

        let pOS = document.createElement("span");
        pOS.innerHTML = pOSText;
        pOS.style.fontStyle = "italic";
        pOS.style.marginRight = "8px";

        let translation = document.createElement("span");
        translation.style.fontSize = "18px";

        let chosenMeanings = [];
        for(let i = 0; i < allWordsInThesaurus.length; i++) {
            if(allWordsInThesaurus[i][0] === translationText && Math.floor(Math.random() * 3) === 1) {
                //removes the word from the array, to prevent the entry from listing the same word twice. The array is cloned so that the items in the original array are not removed and can be accessed upon each following generation
                let thesaurusEntryArrayCopy = [].concat(allWordsInThesaurus[i]);
                thesaurusEntryArrayCopy.splice(0, 1)

                //selects a random near-synonmous word
                let randomAmountOfAdditionalMeanings = Math.floor(Math.random() * thesaurusEntryArrayCopy.length) + 1;
                for(let j = 0; j < randomAmountOfAdditionalMeanings; j++) {
                    let randomItem = Math.floor(Math.random() * thesaurusEntryArrayCopy.length);
                    chosenMeanings.push(thesaurusEntryArrayCopy[randomItem]);
                    //removes the word from the array, to prevent the entry from listing the same word twice
                    thesaurusEntryArrayCopy.splice(randomItem, 1);
                }
                let additionalMeanings = chosenMeanings.join(", ");
                if(pOSText[0] === "v") {
                    translation.innerHTML = `"to ${translationText}, ${additionalMeanings}"`; 
                } else {
                    translation.innerHTML = `"${translationText}, ${additionalMeanings}"`; 
                }
                
                break;
            } else {
                if(pOSText[0] === "v") {
                        translation.innerHTML = `"to ${translationText}"`;
                } else {
                    translation.innerHTML = `"${translationText}"`; 
                }
            }
        };
      
        
        //for additional information in entries such as classifier etmyology and such
        let classifierEtymology = document.createElement("span");
        classifierEtymology.style.fontSize = "16px";
        classifierEtymology.innerHTML = classifierInfotext;

        //for additional information in entries such as etmyology and such
        let etymology = document.createElement("span");
        etymology.style.fontSize = "16px";
        etymology.innerHTML = etymologyText;

        entryDiv[i].innerHTML = "";
        entryDiv[i].appendChild(headWord)
        entryDiv[i].appendChild(pOS)
        entryDiv[i].appendChild(translation)
        entryDiv[i].appendChild(classifierEtymology);
        entryDiv[i].appendChild(etymology)
    }

     for(let i = 0; i < entryEnglish.length; i++) {
        let entryText = entryEnglish[i].innerHTML;
        let newArray = entryText.split(" ")
        let headWordText = newArray[0];;
        let pOSText = newArray[1];
        let translationText = newArray[2];

        let headWord = document.createElement("span");
        headWord.innerHTML = headWordText;
        headWord.style.fontWeight = "bold";
        headWord.style.fontSize = "18px";
        headWord.style.marginRight = "5px";

        let pOS = document.createElement("span");
        pOS.innerHTML = pOSText;
        pOS.style.fontStyle = "italic";
        pOS.style.marginRight = "8px";

        let translation = document.createElement("span");
        translation.style.fontSize = "18px";
        translation.innerHTML = translationText;
        

        entryEnglish[i].innerHTML = "";
        entryEnglish[i].appendChild(headWord)
        entryEnglish[i].appendChild(pOS)
        entryEnglish[i].appendChild(translation)

    }

    //counts the amount of words in the dictionary
    for(let i = 0; i < entryDiv.length; i++) {
        let numberWithComma = entryDiv.length.toLocaleString();
        document.getElementById("num-of-words").innerHTML = numberWithComma;
    }
}


let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", makeDictionary);
