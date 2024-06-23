import {generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedAdverbs, generatedConjunctions, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdpositions, generatedIntensifiers, genderNum, nounGenderArray, genderSuffixOrPrefix, animateAffix, inanimateAffix, masculineAffix, feminineAffix, neuterAffix, divineAffix, profaneAffix, humanAffix, animalAffix, inanimate2Affix, activeAffix, passiveAffix, naturalAffix, artificialAffix, markedSingularOrNot, numberSuffixOrPrefix, singularAffix, typologyNum, randomClassifierNum, grammaticalNumIsolating, branchExample, poleExample, randomNumForLongAndSlender, randomNumForShortAndWide, randomNumForRound, shoulderExample, wedgeExample, appleExample, pebbleExample, ballExample} from './script.js'
import countNounArray from './englishWordArrays/Nouns/countNouns.js';
import massNounArray from './englishWordArrays/Nouns/massNouns.js';
import transitiveVerbArray from './englishWordArrays/Verbs/englishTransitiveVerbs.js';
import intransitiveVerbArray from './englishWordArrays/Verbs/englishIntransitiveVerbs.js';
import adjectiveArray from './englishWordArrays/Adjectives/englishAdjectives.js';
import conjunctionArray from './englishWordArrays/conjunctions.js'
import adverbArray from './englishWordArrays/adverbs.js'
import adpositionArray from './englishWordArrays/adpositions.js';
import intensifierArray from './englishWordArrays/intensifier.js';
import {spell} from './orthography.js'
import animInan from './nounGender/anim_inan.js'
import animInanMass from './nounGender/anim_inan_mass.js';
import mascFem from './nounGender/masc_fem.js'
import mascFemMass from './nounGender/masc_fem_mass.js'
import mascFemNeut from './nounGender/masc_fem_neut.js'
import mascFemNeutMass from './nounGender/masc_fem_neut_mass.js'
import divineNonDivine from './nounGender/divine_nondivine.js';
import divineNonDivineMass from './nounGender/divineNondivineMass.js'
import humanAnimalInan from './nounGender/human_animal_inan.js'
import humanAnimalInanMass from './nounGender/human_animal_inan_mass.js'
import activePassive from './nounGender/active_passive.js'
import activePassiveMass from './nounGender/active_passive_mass.js'
import naturalArtificial from './nounGender/natural_artificial.js' 
import naturalArtificialMass from './nounGender/natural_artificial_mass.js'
import {soundChange} from './soundchange.js'
import shapeClassifierArray from './ClassifierArrays/shapeClassifiers.js';
import shapeClassifierMassArray from './ClassifierArrays/shapeClassifiersMass.js';

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

function Dictionary(word, partOfSpeech, translation, classifierExplanation)  {
    this.word = word;
    this.partOfSpeech = partOfSpeech;
    this.translation = translation;
    this.classifierExplanation = classifierExplanation;
};

let word1 = "";
let wordWithAffix = "";
let classifierInfo = "";;

function makeDictionary() {


    let englishWords = countNounArray.concat(massNounArray, adjectiveArray, transitiveVerbArray, intransitiveVerbArray, adverbArray, conjunctionArray, adpositionArray, intensifierArray);

    let languageWords = generatedCountNouns.concat(generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers);

    //to add more to an entry after the english translation
    

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
            classifierInfo = "";;
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
            classifierInfo = "";;
        } else if (transitiveVerbArray.includes(englishWords[i]) || intransitiveVerbArray.includes(englishWords[i])) {
                pOfSpeech = "v" + bareRoots;
                wordWithAffix = languageWords[i];
                classifierInfo = "";;
        } else if (adverbArray.includes(englishWords[i])) {
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
                classifierInfo = "";;
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
                    classifierInfo = "";
                } else if (shapeClassifierArray[index] === "flat"){
                    pOfSpeech = "n.flat"
                    classifierInfo = "";
                } else if (shapeClassifierArray[index] === "shapeless"){
                    pOfSpeech = "n.shapeless"
                    classifierInfo = "";
                }
            }
            if(massNounArray.includes(englishWords[i])) {
                let index = massNounArray.indexOf(englishWords[i])
                if(shapeClassifierMassArray[index] === "shapeless") {
                    pOfSpeech = "n.shapeless";
                    classifierInfo = "";;
                } else if (shapeClassifierMassArray[index] === "long-and-slender"){
                    pOfSpeech = "n.long";
                    classifierInfo = "";;
                }
                
            }
        }

        //if the language has a marked singular, then the singular affix is added to the dictionary form of nouns
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
        
        word1 = new Dictionary(spell(soundChange(wordWithAffix)), pOfSpeech, englishWords[i], classifierInfo);
        //let word1 = new Dictionary(spell(soundChange("A" + languageWords[i] + "A")), pOfSpeech, englishWords[i]);
        let headWord = document.createElement("span");
        let pOS = document.createElement("span");
        let meaning = document.createElement("span");
        let classiferEtymology = document.createElement("span");

        headWord.innerHTML = word1.word;
        pOS.innerHTML = word1.partOfSpeech;
        meaning.innerHTML = `"${word1.translation}"`;
        classiferEtymology.innerHTML = word1.classifierExplanation;

        let entry = document.createElement("div");
        entry.classList.add("entry");
        entry.innerHTML = `${headWord.innerHTML} ${pOS.innerHTML} ${meaning.innerHTML} ${classiferEtymology.innerHTML}`;
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


    //if the language has a marked singular, then the singular affix is added to the dictionary form of nouns
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

        word1 = new Dictionary(spell(soundChange(wordWithAffix)), pOfSpeech, englishWords[i]);
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
                }
            } else if(typologyNum === 1) { //if typology is agglutinative, the bare root is newArray[2] listed after the part of speech
                headWordText = newArray[0];
                pOSText = newArray[1] + " " + newArray[2];
                translationText = newArray[3];
                classifierInfotext = newArray[4];
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
        translation.innerHTML = translationText;

        //for additional information in entries such as etmyology and such
        let classifierEtymology = document.createElement("span");
        classifierEtymology.style.fontSize = "16px";
        classifierEtymology.innerHTML = classifierInfotext;

        entryDiv[i].innerHTML = "";
        entryDiv[i].appendChild(headWord)
        entryDiv[i].appendChild(pOS)
        entryDiv[i].appendChild(translation)
        entryDiv[i].appendChild(classifierEtymology)

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
        document.getElementById("num-of-words").innerHTML = entryDiv.length;
    }
}


let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", makeDictionary);
