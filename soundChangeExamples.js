//@collapse
import { spell } from "./orthography.js";
import { soundChange, voiced, unvoiced, chosenSoundChanges, vowels, consonants, selectFricatives, plosives, randomNumForWordInitialPlosiveClusters, midVowels, highVowels, randomNumForNoResonantsBeforeConsonants, resonants, randomNumForlenitionofPlosivebeforeOtherPlosive,lenitionFromPlosives2, lenitionFromPlosives1, nonHighVowels, allNasalsArray, correctionsForStrings, corrections, frontVowels,randomNumForLongVowelsBreak} from "./soundchange.js";
import { languageName } from "./script.js";

let soundChangeArray = [];
let wordFinalDevoicingNum = 0;
let plosivesCantClusterTogetherWordInitiallyNum = 0;
let fricativesLostAfterWordInitialConsonantsNum = 0;
let fricativesDebuccaliseBeforeVowelsNum = 0;
let wordFinalHighVowelsLowerNum = 0;
let NoResonantsBeforeConsonantsNum = 0;
let lenitionofPlosivebeforeOtherPlosiveNum = 0;
let nonInitialNonHighVowelsBecomeANum = 0;
let nasalsCantAppearAfterConsonantsNum = 0;
let vowelLostBetweenTwoOfSameConsonantNum = 0;
let voicedConsonantsLostIntervocalicallyNum = 0;
let RVCToVRCMetathesisNum = 0;
let vowelLostBetweenConsonantAndResonantNum = 0;
let intervocalicVoicingNum = 0;
let hLostAfterConsonantsNum = 0;
let nasalsLostBetweenVowelAndConsonantNum = 0;
let auBecomesOuNum = 0;
let aCaBecomesaCiNum = 0;
let VʔVBecomesVVNum = 0;
let plosivesDebuccaliseInCodaNum = 0;
let CVRBecomesCCVRNum = 0;
let glottalStopJFortitesNum = 0;
let eciBecomesiCiNum = 0;
let iCbecomeseCNum = 0;
let VJbecomesLongINum = 0;
let uNBecomesoNNum = 0;
let gBecomesJNum = 0;
let VvBecomesVVNum = 0;
let eNBecomesiNNum = 0;
let CJBecomesCCNum = 0;
let iUmlautNum = 0;
let vowelShiftInHeavySyllablesNum = 0;
let VCVBecomesVCWordFinallyNum = 0;
let longABecomesONum = 0;
let palatalisationofPlosivesNum = 0;
let eOBecomeJWNum = 0;
let VzbecomesVrNum = 0;
let intialVBecomesHVNum = 0;
let intialJBecomesLNum = 0;
let tDBecomeLNum = 0;
let longVowelsBreakNum = 0;

function clearArrays() {
    num = 0;
    soundChangeArray = [];
    wordFinalDevoicingNum = 0;
    plosivesCantClusterTogetherWordInitiallyNum = 0;
    fricativesLostAfterWordInitialConsonantsNum = 0;
    fricativesDebuccaliseBeforeVowelsNum = 0;
    wordFinalHighVowelsLowerNum = 0;
    NoResonantsBeforeConsonantsNum = 0;
    lenitionofPlosivebeforeOtherPlosiveNum = 0;
    nonInitialNonHighVowelsBecomeANum = 0;
    nasalsCantAppearAfterConsonantsNum = 0;
    vowelLostBetweenTwoOfSameConsonantNum = 0;
    voicedConsonantsLostIntervocalicallyNum = 0;
    RVCToVRCMetathesisNum = 0;
    vowelLostBetweenConsonantAndResonantNum = 0;
    intervocalicVoicingNum = 0;
    hLostAfterConsonantsNum = 0;
    nasalsLostBetweenVowelAndConsonantNum = 0;
    auBecomesOuNum = 0;
    aCaBecomesaCiNum = 0;
    VʔVBecomesVVNum = 0;
    plosivesDebuccaliseInCodaNum = 0;
    CVRBecomesCCVRNum = 0;
    glottalStopJFortitesNum = 0;
    eciBecomesiCiNum = 0;
    iCbecomeseCNum = 0;
    VJbecomesLongINum = 0;
    uNBecomesoNNum = 0;
    gBecomesJNum = 0;
    VvBecomesVVNum= 0;
    eNBecomesiNNum = 0;
    CJBecomesCCNum = 0;
    iUmlautNum = 0;
    vowelShiftInHeavySyllablesNum = 0;
    VCVBecomesVCWordFinallyNum = 0;
    longABecomesONum = 0;
    palatalisationofPlosivesNum = 0;
    eOBecomeJWNum = 0;
    VzbecomesVrNum = 0;
    intialVBecomesHVNum = 0;
    intialJBecomesLNum = 0;
    tDBecomeLNum = 0;
    longVowelsBreakNum = 0;
};

function cloneArray(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
};

let oldName = "";
let newName = "";
function createAbbreviationsForLanguageName() {
    let name = spell(soundChange(languageName));
    let firstLetter = name[0];
    oldName = `Old${firstLetter.toUpperCase()}`;
    newName = `${firstLetter.toUpperCase()}`;
};

function populateArray() {
    for(let i = 0; i < chosenSoundChanges.length; i++) {
        if(chosenSoundChanges[i].name === "wordFinalDevoicing") {
            if(soundChangeArray.includes(wordFinalDevoicing) === false) {
                soundChangeArray.push(wordFinalDevoicing);
            }
        };
        if(chosenSoundChanges[i].name === "fricativesDebuccaliseBeforeVowels") {
            if(soundChangeArray.includes(fricativesDebuccaliseBeforeVowels) === false) {
                soundChangeArray.push(fricativesDebuccaliseBeforeVowels);
            }
        };
        if(chosenSoundChanges[i].name === "plosivesCantClusterTogetherWordInitially") {
            if(soundChangeArray.includes(plosivesCantClusterTogetherWordInitially) === false) {
                soundChangeArray.push(plosivesCantClusterTogetherWordInitially);
            }
        };
        if(chosenSoundChanges[i].name === "fricativesLostAfterWordInitialConsonants") {
            if(soundChangeArray.includes(fricativesLostAfterWordInitialConsonants) === false) {
                soundChangeArray.push(fricativesLostAfterWordInitialConsonants);
            }
        };
        if(chosenSoundChanges[i].name === "wordFinalHighVowelsLower") {
            if(soundChangeArray.includes(wordFinalHighVowelsLower) === false) {
                soundChangeArray.push(wordFinalHighVowelsLower);
            }
        };
        if(chosenSoundChanges[i].name === "NoResonantsBeforeConsonants") {
            if(soundChangeArray.includes(NoResonantsBeforeConsonants) === false) {
                soundChangeArray.push(NoResonantsBeforeConsonants);
            }
        };
        if(chosenSoundChanges[i].name === "lenitionofPlosivebeforeOtherPlosive") {
            if(soundChangeArray.includes(lenitionofPlosivebeforeOtherPlosive) === false) {
                soundChangeArray.push(lenitionofPlosivebeforeOtherPlosive);
            }
        };
        if(chosenSoundChanges[i].name === "nonInitialNonHighVowelsBecomeA") {
            if(soundChangeArray.includes(nonInitialNonHighVowelsBecomeA) === false) {
                soundChangeArray.push(nonInitialNonHighVowelsBecomeA);
            }
        };
        if(chosenSoundChanges[i].name === "nasalsCantAppearAfterConsonants") {
            if(soundChangeArray.includes(nasalsCantAppearAfterConsonants) === false) {
                soundChangeArray.push(nasalsCantAppearAfterConsonants);
            }
        };
        if(chosenSoundChanges[i].name === "vowelLostBetweenTwoOfSameConsonant") {
            if(soundChangeArray.includes(vowelLostBetweenTwoOfSameConsonant) === false) {
                soundChangeArray.push(vowelLostBetweenTwoOfSameConsonant);
            }
        };
        if(chosenSoundChanges[i].name === "voicedConsonantsLostIntervocalically") {
            if(soundChangeArray.includes(voicedConsonantsLostIntervocalically) === false) {
                soundChangeArray.push(voicedConsonantsLostIntervocalically);
            }
        };
        if(chosenSoundChanges[i].name === "RVCToVRCMetathesis") {
            if(soundChangeArray.includes(RVCToVRCMetathesis) === false) {
                soundChangeArray.push(RVCToVRCMetathesis);
            }
        };
        if(chosenSoundChanges[i].name === "vowelLostBetweenConsonantAndResonant") {
            if(soundChangeArray.includes(vowelLostBetweenConsonantAndResonant) === false) {
                soundChangeArray.push(vowelLostBetweenConsonantAndResonant);
            }
        };
        if(chosenSoundChanges[i].name === "intervocalicVoicing") {
            if(soundChangeArray.includes(intervocalicVoicing) === false) {
                soundChangeArray.push(intervocalicVoicing);
            }
        };
        if(chosenSoundChanges[i].name === "hLostAfterConsonants") {
            if(soundChangeArray.includes(hLostAfterConsonants) === false) {
                soundChangeArray.push(hLostAfterConsonants);
            }
        };
        if(chosenSoundChanges[i].name === "nasalsLostBetweenVowelAndConsonant") {
            if(soundChangeArray.includes(nasalsLostBetweenVowelAndConsonant) === false) {
                soundChangeArray.push(nasalsLostBetweenVowelAndConsonant);
            }
        };
        if(chosenSoundChanges[i].name === "auBecomesOu") {
            if(soundChangeArray.includes(auBecomesOu) === false) {
                soundChangeArray.push(auBecomesOu);
            }
        };
        if(chosenSoundChanges[i].name === "aCaBecomesaCi") {
            if(soundChangeArray.includes(aCaBecomesaCi) === false) {
                soundChangeArray.push(aCaBecomesaCi);
            }
        };
        if(chosenSoundChanges[i].name === "VʔVBecomesVV") {
            if(soundChangeArray.includes(VʔVBecomesVV) === false) {
                soundChangeArray.push(VʔVBecomesVV);
            }
        };
        if(chosenSoundChanges[i].name === "plosivesDebuccaliseInCoda") {
            if(soundChangeArray.includes(plosivesDebuccaliseInCoda) === false) {
                soundChangeArray.push(plosivesDebuccaliseInCoda);
            }
        };
        if(chosenSoundChanges[i].name === "CVRBecomesCCVR") {
            if(soundChangeArray.includes(CVRBecomesCCVR) === false) {
                soundChangeArray.push(CVRBecomesCCVR);
            }
        };
        if(chosenSoundChanges[i].name === "glottalStopJFortites") {
            if(soundChangeArray.includes(glottalStopJFortites) === false) {
                soundChangeArray.push(glottalStopJFortites);
            }
        };
        if(chosenSoundChanges[i].name === "eciBecomesiCi") {
            if(soundChangeArray.includes(eciBecomesiCi) === false) {
                soundChangeArray.push(eciBecomesiCi);
            }
        };
        if(chosenSoundChanges[i].name === "iCbecomeseC") {
            if(soundChangeArray.includes(iCbecomeseC) === false) {
                soundChangeArray.push(iCbecomeseC);
            }
        };
        if(chosenSoundChanges[i].name === "VJbecomesLongI") {
            if(soundChangeArray.includes(VJbecomesLongI) === false) {
                soundChangeArray.push(VJbecomesLongI);
            }
        };
        if(chosenSoundChanges[i].name === "uNBecomesoN") {
            if(soundChangeArray.includes(uNBecomesoN) === false) {
                soundChangeArray.push(uNBecomesoN);
            }
        };
        if(chosenSoundChanges[i].name === "gBecomesJ") {
            if(soundChangeArray.includes(gBecomesJ) === false) {
                soundChangeArray.push(gBecomesJ);
            }
        };
        if(chosenSoundChanges[i].name === "VvBecomesVV") {
            if(soundChangeArray.includes(VvBecomesVV) === false) {
                soundChangeArray.push(VvBecomesVV);
            }
        };
        if(chosenSoundChanges[i].name === "eNBecomesiN") {
            if(soundChangeArray.includes(eNBecomesiN) === false) {
                soundChangeArray.push(eNBecomesiN);
            }
        };
        if(chosenSoundChanges[i].name === "CJBecomesCC") {
            if(soundChangeArray.includes(CJBecomesCC) === false) {
                soundChangeArray.push(CJBecomesCC);
            }
        };
        if(chosenSoundChanges[i].name === "iUmlaut") {
            if(soundChangeArray.includes(iUmlaut) === false) {
                soundChangeArray.push(iUmlaut);
            }
        };
        if(chosenSoundChanges[i].name === "vowelShiftInHeavySyllables") {
            if(soundChangeArray.includes(vowelShiftInHeavySyllables) === false) {
                soundChangeArray.push(vowelShiftInHeavySyllables);
            }
        };
        if(chosenSoundChanges[i].name === "VCVBecomesVCWordFinally") {
            if(soundChangeArray.includes(VCVBecomesVCWordFinally) === false) {
                soundChangeArray.push(VCVBecomesVCWordFinally);
            }
        };
        if(chosenSoundChanges[i].name === "longABecomesO") {
            if(soundChangeArray.includes(longABecomesO) === false) {
                soundChangeArray.push(longABecomesO);
            }
        };
        if(chosenSoundChanges[i].name === "palatalisationofPlosives") {
            if(soundChangeArray.includes(palatalisationofPlosives) === false) {
                soundChangeArray.push(palatalisationofPlosives);
            }
        };
        if(chosenSoundChanges[i].name === "eOBecomeJW") {
            if(soundChangeArray.includes(eOBecomeJW) === false) {
                soundChangeArray.push(eOBecomeJW);
            }
        };
        if(chosenSoundChanges[i].name === "VzbecomesVr") {
            if(soundChangeArray.includes(VzbecomesVr) === false) {
                soundChangeArray.push(VzbecomesVr);
            }
        };
        if(chosenSoundChanges[i].name === "intialVBecomesHV") {
            if(soundChangeArray.includes(intialVBecomesHV) === false) {
                soundChangeArray.push(intialVBecomesHV);
            }
        };
        if(chosenSoundChanges[i].name === "intialJBecomesL") {
            if(soundChangeArray.includes(intialJBecomesL) === false) {
                soundChangeArray.push(intialJBecomesL);
            }
        };
        if(chosenSoundChanges[i].name === "tDBecomeL") {
            if(soundChangeArray.includes(tDBecomeL) === false) {
                soundChangeArray.push(tDBecomeL);
            }
        };
        if(chosenSoundChanges[i].name === "longVowelsBreak") {
            if(soundChangeArray.includes(longVowelsBreak) === false) {
                soundChangeArray.push(longVowelsBreak);
            }
        };
    };
};

let num = 0;
function soundChangeExample(word) {
    if(num > 0) {
        let before = Array.from(word);
        let originalWord = cloneArray(before);
        for(let i = 0; i < soundChangeArray.length; i++) {
            soundChangeArray[i](before, originalWord)
        };
    };
    num++;
    return word;
};

function wordFinalDevoicing(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(voiced.includes(word[word.length -1])) {
            let beforewordFinalDevoicing = correctionsForStrings(word.join(""));
            let voicedIndex = voiced.indexOf(word[word.length -1]);
            word[word.length -1] = unvoiced[voicedIndex];
            if(voiced.includes(word[word.length -2])) {
                let voicedIndex = voiced.indexOf(word[word.length -2]);
                word[word.length -2] = unvoiced[voicedIndex];
            } 
            let afterwordFinalDevoicing = correctionsForStrings(word.join(""));
            
            let originalJoined = correctionsForStrings(originalWord.join(""));
            let afterExample = "";
            if(soundChange(originalJoined) !== afterwordFinalDevoicing) {
                afterExample = `<i>*${spell(afterwordFinalDevoicing)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            }
            let beforeExample = "";
            if(originalJoined === beforewordFinalDevoicing) {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(beforewordFinalDevoicing)}</i>`
            }
            if(wordFinalDevoicingNum < 6) {
                if(wordFinalDevoicingNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("wordFinalDevoicing").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("wordFinalDevoicing").appendChild(example);
                }
                wordFinalDevoicingNum++;
            }
        }
    } 
    return {word};
}

function plosivesCantClusterTogetherWordInitially(word, originalWord) {
    if(randomNumForWordInitialPlosiveClusters !== 5) {
        for(let i = 0; i < word.length; i++) {
            if(plosives.includes(word[0]) && plosives.includes(word[1])) {
                let beforeplosivesCantClusterTogetherWordInitially = correctionsForStrings(word.join(""));
                word.splice(0, 1);
                let afterplosivesCantClusterTogetherWordInitially = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = correctionsForStrings(originalWord.join(""));
                if(soundChange(originalJoined) !== afterplosivesCantClusterTogetherWordInitially) {
                    afterExample = `<i>*${spell(afterplosivesCantClusterTogetherWordInitially)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
                } else {
                    afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
                }
                let beforeExample = "";
                if(originalJoined === beforeplosivesCantClusterTogetherWordInitially) {
                    beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i>`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(beforeplosivesCantClusterTogetherWordInitially)}</i>`
                }
                if(plosivesCantClusterTogetherWordInitiallyNum < 6) {
                    if(plosivesCantClusterTogetherWordInitiallyNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("plosivesCantClusterTogetherWordInitially").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("plosivesCantClusterTogetherWordInitially").appendChild(example);
                    }
                    plosivesCantClusterTogetherWordInitiallyNum++;
                };
            };
        };
    };
    return {word};
};

function fricativesDebuccaliseBeforeVowels(word, originalWord) {
    let postAlveolar = ["ʃ", "ʒ"];
    let tD = ["t", "d"];
    for(let i = 0; i < word.length; i++) {
        if(word[i] !== word[i-1]) {
            if(selectFricatives().includes(word[i]) && vowels.includes(word[i+1]) && word[i-1] !== word[i]) {
                let beforeFricativesDebuccaliseBeforeVowels = correctionsForStrings(word.join(""));
                if(postAlveolar.includes(word[i]) === false && tD.includes(word[i-1]) === false) {
                    word[i] = "h";
                }
                let afterfricativesDebuccaliseBeforeVowels = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = correctionsForStrings(originalWord.join(""));
                if(soundChange(originalJoined) !== afterfricativesDebuccaliseBeforeVowels) {
                    afterExample = `<i>*${spell(afterfricativesDebuccaliseBeforeVowels)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
                } else {
                    afterExample = `${newName} <i><strong>${spell(afterfricativesDebuccaliseBeforeVowels)}</strong></i>`
                }
                let beforeExample = "";
                if(originalJoined === beforeFricativesDebuccaliseBeforeVowels) {
                    beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i>`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(beforeFricativesDebuccaliseBeforeVowels)}</i>`
                }
                if(fricativesDebuccaliseBeforeVowelsNum < 6) {
                    if(fricativesDebuccaliseBeforeVowelsNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("fricativesDebuccaliseBeforeVowels").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("fricativesDebuccaliseBeforeVowels").appendChild(example);
                    }
                    fricativesDebuccaliseBeforeVowelsNum++;
                };
            };
        };
    }
    return {word};
};

function fricativesLostAfterWordInitialConsonants(word, originalWord) {
    if(consonants.includes(word[0]) && selectFricatives().includes(word[1])) {
        let beforefricativesLostAfterWordInitialConsonants = correctionsForStrings(word.join(""));
        word.splice(1, 1);
        let afterfricativesLostAfterWordInitialConsonants = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = correctionsForStrings(originalWord.join(""));
        if(soundChange(originalJoined) !== afterfricativesLostAfterWordInitialConsonants) {
            afterExample = `<i>*${spell(afterfricativesLostAfterWordInitialConsonants)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
        } else {
            afterExample = `${newName} <i>${spell(afterfricativesLostAfterWordInitialConsonants)}</i>`
        }
        let beforeExample = "";
        if(originalJoined === beforefricativesLostAfterWordInitialConsonants) {
            beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i>`;
        } else {
            beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(beforefricativesLostAfterWordInitialConsonants)}</i>`
        }
        if(fricativesLostAfterWordInitialConsonantsNum < 6) {
            if(fricativesLostAfterWordInitialConsonantsNum === 0) {
                let example = document.createElement("span");
                example.innerHTML = `${beforeExample} > ${afterExample}`;
                document.getElementById("fricativesLostAfterWordInitialConsonants").appendChild(example);
            } else {
                let example = document.createElement("span");
                example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                document.getElementById("fricativesLostAfterWordInitialConsonants").appendChild(example);
            }
            fricativesLostAfterWordInitialConsonantsNum++;
        };
}
    if(consonants.includes(word[1]) && selectFricatives().includes(word[2]) && word[0] === "X") {
        word.splice(2, 1);
    }
    
    
    return {word};
};

function wordFinalHighVowelsLower(word, originalWord) {
    if(highVowels.includes(word[word.length -1])) {
        let vowelIndex = highVowels.indexOf(word[word.length -1]);
        let beforewordFinalHighVowelsLower = correctionsForStrings(word.join(""));
        if(word[word.length -2] === word[word.length -1]) {
            word[word.length -2] = midVowels[vowelIndex];
        }
        word[word.length -1] = midVowels[vowelIndex];
        let afterwordFinalHighVowelsLower = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = correctionsForStrings(originalWord.join(""));
        if(soundChange(originalWord) !== afterwordFinalHighVowelsLower) {
            afterExample = `<i>*${spell(afterwordFinalHighVowelsLower)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
        } else {
            afterExample = `${newName} <i>${spell(afterwordFinalHighVowelsLower)}</i>`
        };
        let beforeExample = "";
        if(originalJoined === beforewordFinalHighVowelsLower) {
            beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i>`;
        } else {
            beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(beforewordFinalHighVowelsLower)}</i>`
        };
        if(wordFinalHighVowelsLowerNum < 6) {
            if(wordFinalHighVowelsLowerNum === 0) {
                let example = document.createElement("span");
                example.innerHTML = `${beforeExample} > ${afterExample}`;
                document.getElementById("wordFinalHighVowelsLower").appendChild(example);
            } else {
                let example = document.createElement("span");
                example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                document.getElementById("wordFinalHighVowelsLower").appendChild(example);
            }
            wordFinalHighVowelsLowerNum++;
        };
    };
    return {word};
}

function NoResonantsBeforeConsonants(word, originalWord) {
    if(randomNumForNoResonantsBeforeConsonants === 0) {
    for(let i = 0; i < word.length; i++) {
        if(resonants.includes(word[i]) && consonants.includes(word[i + 1])) {
            let beforeNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
            word.splice(i, 1);
            let afterNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== afterNoResonantsBeforeConsonants) {
                afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(afterNoResonantsBeforeConsonants)}</strong></i>`
            }
            let beforeExample = "";
            if(originalJoined === beforeNoResonantsBeforeConsonants) {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(beforeNoResonantsBeforeConsonants)}</i>`
            }
            if(NoResonantsBeforeConsonantsNum < 6) {
                if(NoResonantsBeforeConsonantsNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("NoResonantsBeforeConsonants").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("NoResonantsBeforeConsonants").appendChild(example);
                }
                NoResonantsBeforeConsonantsNum++;
            };
        }; 
    };
    };
    if(randomNumForNoResonantsBeforeConsonants === 1) {
        for(let i = 0; i < word.length; i++) {
            if(resonants.includes(word[i]) && consonants.includes(word[i + 1]) && word[i] !== word[i+1]) {
                let beforeNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
                word.splice(i+1, 0, "i");
                let afterNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = correctionsForStrings(originalWord.join(""));
                if(soundChange(originalJoined) !== afterNoResonantsBeforeConsonants) {
                    afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
                } else {
                    afterExample = `${newName} <i><strong>${spell(afterNoResonantsBeforeConsonants)}</strong></i>`
                }
                let beforeExample = "";
                if(originalJoined === beforeNoResonantsBeforeConsonants) {
                    beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i>`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(beforeNoResonantsBeforeConsonants)}</i>`
                }
                if(NoResonantsBeforeConsonantsNum < 6) {
                if(NoResonantsBeforeConsonantsNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("NoResonantsBeforeConsonants").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("NoResonantsBeforeConsonants").appendChild(example);
                }
                NoResonantsBeforeConsonantsNum++;
            };
                
            } 
        }
    }
    if(randomNumForNoResonantsBeforeConsonants === 2) {
    for(let i = 0; i < word.length; i++) {
        if(resonants.includes(word[i]) && consonants.includes(word[i + 1]) && word[i] !== word[i+1]) {
            let beforeNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
            word.splice(i+1, 0, "u");
            let afterNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== afterNoResonantsBeforeConsonants) {
                afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(afterNoResonantsBeforeConsonants)}</strong></i>`
            }
            let beforeExample = "";
            if(originalJoined === beforeNoResonantsBeforeConsonants) {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(beforeNoResonantsBeforeConsonants)}</i>`
            }
            if(NoResonantsBeforeConsonantsNum < 6) {
                if(NoResonantsBeforeConsonantsNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("NoResonantsBeforeConsonants").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("NoResonantsBeforeConsonants").appendChild(example);
                }
                NoResonantsBeforeConsonantsNum++;
            }; 
            }
            
        }
    }
    if(randomNumForNoResonantsBeforeConsonants === 3) {
    for(let i = 0; i < word.length; i++) {
        if(resonants.includes(word[i]) && consonants.includes(word[i + 1])) {
            let beforeNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
            let resonant = word[i]; 
            let followingConsonant = word[i+1];
            word[i] = followingConsonant;
            word[i+1] = resonant;
            if(resonants.includes(word[i]) && resonants.includes(word[i + 1])) {
                word.splice(i+1, 0, "u");
            }
            let afterNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== afterNoResonantsBeforeConsonants) {
                afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(afterNoResonantsBeforeConsonants)}</strong></i>`
            }
            let beforeExample = "";
            if(originalJoined === beforeNoResonantsBeforeConsonants) {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(beforeNoResonantsBeforeConsonants)}</i>`
            }
            if(NoResonantsBeforeConsonantsNum < 6) {
                if(NoResonantsBeforeConsonantsNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("NoResonantsBeforeConsonants").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("NoResonantsBeforeConsonants").appendChild(example);
                }
                NoResonantsBeforeConsonantsNum++;
            }; 
        }
    }
    }
    return {word};
};

function lenitionofPlosivebeforeOtherPlosive(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
    if(randomNumForlenitionofPlosivebeforeOtherPlosive === 0) {
        if(plosives.includes(word[i]) && plosives.includes(word[i - 1])  && word[i] !== word[i-1]) {
            let firstPlosiveIndex = plosives.indexOf(word[i-1])
            let beforelenitionofPlosivebeforeOtherPlosive = correctionsForStrings(word.join(""));
            word[i-1] = lenitionFromPlosives1[firstPlosiveIndex];
            let afterlenitionofPlosivebeforeOtherPlosive = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== afterlenitionofPlosivebeforeOtherPlosive) {
                afterExample = `<i>*${spell(afterlenitionofPlosivebeforeOtherPlosive)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(afterlenitionofPlosivebeforeOtherPlosive)}</strong></i>`
            }
            let beforeExample = "";
            if(originalJoined === beforelenitionofPlosivebeforeOtherPlosive) {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(beforelenitionofPlosivebeforeOtherPlosive)}</i>`
            }
             if(lenitionofPlosivebeforeOtherPlosiveNum < 6) {
                if(lenitionofPlosivebeforeOtherPlosiveNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("lenitionofPlosivebeforeOtherPlosive").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("lenitionofPlosivebeforeOtherPlosive").appendChild(example);
                }
                lenitionofPlosivebeforeOtherPlosiveNum++;
            }; 
        }
    } else if(randomNumForlenitionofPlosivebeforeOtherPlosive === 1) {
        if(plosives.includes(word[i]) && plosives.includes(word[i - 1])  && word[i] !== word[i-1]) {
            let firstPlosiveIndex = plosives.indexOf(word[i-1])
            let beforelenitionofPlosivebeforeOtherPlosive = correctionsForStrings(word.join(""));
            word[i-1] = lenitionFromPlosives2[firstPlosiveIndex]
            let afterlenitionofPlosivebeforeOtherPlosive = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== afterlenitionofPlosivebeforeOtherPlosive) {
                afterExample = `<i>*${spell(afterlenitionofPlosivebeforeOtherPlosive)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterlenitionofPlosivebeforeOtherPlosive)}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforelenitionofPlosivebeforeOtherPlosive) {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(beforelenitionofPlosivebeforeOtherPlosive)}</i>`
            }
            if(lenitionofPlosivebeforeOtherPlosiveNum < 6) {
                if(lenitionofPlosivebeforeOtherPlosiveNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("lenitionofPlosivebeforeOtherPlosive").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("lenitionofPlosivebeforeOtherPlosive").appendChild(example);
                }
                lenitionofPlosivebeforeOtherPlosiveNum++;
            }; 
        }
    } 
    }
    return {word};
};

function nonInitialNonHighVowelsBecomeA(word, originalWord) {
    let num = 0;
    for(let i = 0; i < word.length; i++) {
        if(nonHighVowels.includes(word[i]) && num !== 0) {
            let beforenonInitialNonHighVowelsBecomeA = correctionsForStrings(word.join(""));
            word[i] = "a";
            let afternonInitialNonHighVowelsBecomeA = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== afternonInitialNonHighVowelsBecomeA) {
                afterExample = `<i>*${spell(afternonInitialNonHighVowelsBecomeA)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i>${spell(soundChange(originalJoined))}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforenonInitialNonHighVowelsBecomeA) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforenonInitialNonHighVowelsBecomeA)}</i>`
            };
            if(nonInitialNonHighVowelsBecomeANum < 6) {
                if(nonInitialNonHighVowelsBecomeANum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("nonInitialNonHighVowelsBecomeA").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("nonInitialNonHighVowelsBecomeA").appendChild(example);
                }
                nonInitialNonHighVowelsBecomeANum++;
            }; 
        }
        if(vowels.includes(word[i])) {
            num++;
        };    
    };
    return {word};
};

function nasalsCantAppearAfterConsonants(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        while(consonants.includes(word[i]) && allNasalsArray.includes(word[i+1])&& word[i] !== word[i+1]) {
            let beforenasalsCantAppearAfterConsonants = correctionsForStrings(word.join(""));
            word.splice(i+1, 0, "i");
            let afternasalsCantAppearAfterConsonants = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== afternasalsCantAppearAfterConsonants) {
                afterExample = `<i>*${spell(afternasalsCantAppearAfterConsonants)}</i> (> ${newName} <i><strong>${spell(spell(soundChange(originalJoined)))}</strong></i>)`
            } else {
                afterExample = `${newName} <i>${spell(soundChange(originalJoined))}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforenasalsCantAppearAfterConsonants) {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(beforenasalsCantAppearAfterConsonants)}</i>`
            }
            if(nasalsCantAppearAfterConsonantsNum < 6) {
                if(nasalsCantAppearAfterConsonantsNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("nasalsCantAppearAfterConsonants").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("nasalsCantAppearAfterConsonants").appendChild(example);
                }
                nasalsCantAppearAfterConsonantsNum++;
            }; 
        };
    };
    return {word};
};

function vowelLostBetweenTwoOfSameConsonant(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
    if(consonants.includes(word[i-1]) && word[i-1] === word[i+1] && vowels.includes(word[i])) {
        let beforevowelLostBetweenTwoOfSameConsonant = correctionsForStrings(word.join(""));

        word.splice(i, 2);
        let aftervowelLostBetweenTwoOfSameConsonant = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = correctionsForStrings(originalWord.join(""));
        if(soundChange(originalJoined) !== aftervowelLostBetweenTwoOfSameConsonant) {
            afterExample = `<i>*${spell(aftervowelLostBetweenTwoOfSameConsonant)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
        } else {
            afterExample = `${newName} <i>${spell(soundChange(originalJoined))}</i>`
        };
        let beforeExample = "";
        if(originalJoined === beforevowelLostBetweenTwoOfSameConsonant) {
            beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i>`;
        } else {
            beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(beforevowelLostBetweenTwoOfSameConsonant)}</i>`
        }
        if(vowelLostBetweenTwoOfSameConsonantNum < 6) {
                if(vowelLostBetweenTwoOfSameConsonantNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("vowelLostBetweenTwoOfSameConsonant").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("vowelLostBetweenTwoOfSameConsonant").appendChild(example);
                }
                vowelLostBetweenTwoOfSameConsonantNum++;
            }; 
    }
    }
    return {word, originalWord}
};

function voicedConsonantsLostIntervocalically(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        while(vowels.includes(word[i-1]) && vowels.includes(word[i+1]) && voiced.includes(word[i]) ||
         vowels.includes(word[i-2]) && vowels.includes(word[i+2]) && word[i-1] === "ː" && word[i+1] === "ː" && voiced.includes(word[i]) || 
         vowels.includes(word[i-1]) && word[i+1] === "ː" && voiced.includes(word[i]) ||
         vowels.includes(word[i+1]) && word[i-1] === "ː" && voiced.includes(word[i])
        ) {
        let beforevoicedConsonantsLostIntervocalically = correctionsForStrings(word.join(""));
        word.splice(i, 1);
        let aftervoicedConsonantsLostIntervocalically = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = originalWord.join("");
        if(soundChange(correctionsForStrings(originalWord)) !== aftervoicedConsonantsLostIntervocalically) {
            afterExample = `<i>*${spell(aftervoicedConsonantsLostIntervocalically)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
        } else {
            afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
        };
        let beforeExample = "";
        if(correctionsForStrings(originalJoined) === beforevoicedConsonantsLostIntervocalically) {
            beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
        } else {
            beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforevoicedConsonantsLostIntervocalically)}</i>`
        }
        if(voicedConsonantsLostIntervocalicallyNum < 6) {
                if(voicedConsonantsLostIntervocalicallyNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("voicedConsonantsLostIntervocalically").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("voicedConsonantsLostIntervocalically").appendChild(example);
                }
                voicedConsonantsLostIntervocalicallyNum++;
        }; 
        }
    }
    return {word};
};

function RVCToVRCMetathesis(word, originalWord) {
    if(resonants.includes(word[0]) && vowels.includes(word[1]) && consonants.includes(word[2])) {
        let beforeRVCToVRCMetathesis = correctionsForStrings(word.join(""));
        let resonant = word[0];
        let vowel = word[1];
        word[0] = vowel;
        word[1] = resonant;
        let afterRVCToVRCMetathesis = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = originalWord.join("");
        if(soundChange(originalJoined) !== afterRVCToVRCMetathesis) {
            afterExample = `<i>*${spell(afterRVCToVRCMetathesis)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
        } else {
            afterExample = `${newName} <i>${spell(soundChange(originalJoined))}</i>`
        };
        let beforeExample = "";
        if(correctionsForStrings(originalJoined) === beforeRVCToVRCMetathesis) {
            beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
        } else {
            beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeRVCToVRCMetathesis)}</i>`
        }
        if(RVCToVRCMetathesisNum < 6) {
            if(RVCToVRCMetathesisNum === 0) {
                let example = document.createElement("span");
                example.innerHTML = `${beforeExample} > ${afterExample}`;
                document.getElementById("RVCToVRCMetathesis").appendChild(example);
            } else {
                let example = document.createElement("span");
                example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                document.getElementById("RVCToVRCMetathesis").appendChild(example);
            }
            RVCToVRCMetathesisNum++;
        };
    }
    if(word[0] === "X" && resonants.includes(word[1]) && vowels.includes(word[2]) && consonants.includes(word[3])) {
        let resonant = word[1];
        let vowel = word[2];
        word[1] = vowel;
        word[2] = resonant;
    }
    return {word}
};

function vowelLostBetweenConsonantAndResonant(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(consonants.includes(word[i]) && vowels.includes(word[i+1]) && resonants.includes(word[i+2]) && vowels.includes(word[i+3])) {
            let beforevowelLostBetweenConsonantAndResonant = correctionsForStrings(word.join(""));
            word.splice(i+1,1);
            let aftervowelLostBetweenConsonantAndResonant = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== aftervowelLostBetweenConsonantAndResonant) {
                afterExample = `<i>*${spell(aftervowelLostBetweenConsonantAndResonant)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforevowelLostBetweenConsonantAndResonant) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforevowelLostBetweenConsonantAndResonant)}</i>`
            }
            if(vowelLostBetweenConsonantAndResonantNum < 6) {
            if(vowelLostBetweenConsonantAndResonantNum === 0) {
                let example = document.createElement("span");
                example.innerHTML = `${beforeExample} > ${afterExample}`;
                document.getElementById("vowelLostBetweenConsonantAndResonant").appendChild(example);
            } else {
                let example = document.createElement("span");
                example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                document.getElementById("vowelLostBetweenConsonantAndResonant").appendChild(example);
            }
            vowelLostBetweenConsonantAndResonantNum++;
        };
        }
        if(word[i] === "X" && consonants.includes(word[i+1]) && vowels.includes(word[i+2]) && resonants.includes(word[i+3]) && vowels.includes(word[i+4])) {
            word.splice(i+2,1) 
        };
    };
    return {word, originalWord}
};

function intervocalicVoicing(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(unvoiced.includes(word[i]) && vowels.includes(word[i-1]) && vowels.includes(word[i+1])) {
            let beforeintervocalicVoicing = correctionsForStrings(word.join(""));
            let unvoicedIndex = unvoiced.indexOf(word[i]);
            word[i] = voiced[unvoicedIndex];
            let afterintervocalicVoicing = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterintervocalicVoicing) {
                afterExample = `<i>*${spell(afterintervocalicVoicing)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeintervocalicVoicing) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeintervocalicVoicing)}</i>`
            }
            if(intervocalicVoicingNum < 6) {    
                if(intervocalicVoicingNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("intervocalicVoicing").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("intervocalicVoicing").appendChild(example);
                }
            intervocalicVoicingNum++;
            };
        };
    };
    return word;
};

function hLostAfterConsonants(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "h" && consonants.includes(word[i-1])) {
            let beforehLostAfterConsonants = correctionsForStrings(word.join(""));
            word.splice(i, 1);
            let afterhLostAfterConsonants = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterhLostAfterConsonants) {
                afterExample = `<i>*${spell(afterhLostAfterConsonants)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterhLostAfterConsonants)}</i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforehLostAfterConsonants) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i><strong>${spell(beforehLostAfterConsonants)}</strong></i>`
            }
            if(hLostAfterConsonantsNum < 6) {    
                if(hLostAfterConsonantsNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("hLostAfterConsonants").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("hLostAfterConsonants").appendChild(example);
                }
            hLostAfterConsonantsNum++;
            };
            
        };
    };
    return word;
};

function nasalsLostBetweenVowelAndConsonant(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(allNasalsArray.includes(word[i]) && consonants.includes(word[i+1]) && vowels.includes(word[i-1]) && word[i] !== word[i+1]) {
            let beforenasalsLostBetweenVowelAndConsonant = correctionsForStrings(word.join(""));
            let lengthMarkedWithTriangles = cloneArray(word);
            word[i] = word[i-1];
            lengthMarkedWithTriangles[i] = "ː";
            let afternasalsLostBetweenVowelAndConsonant = correctionsForStrings(lengthMarkedWithTriangles.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afternasalsLostBetweenVowelAndConsonant) {
                afterExample = `<i>*${spell(afternasalsLostBetweenVowelAndConsonant)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforenasalsLostBetweenVowelAndConsonant) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforenasalsLostBetweenVowelAndConsonant)}</strong></i>`
            }
            if(nasalsLostBetweenVowelAndConsonantNum < 6) {    
                if(nasalsLostBetweenVowelAndConsonantNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("nasalsLostBetweenVowelAndConsonant").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("nasalsLostBetweenVowelAndConsonant").appendChild(example);
                }
            nasalsLostBetweenVowelAndConsonantNum++;
            };
        };
    };
    return word;
};

function auBecomesOu(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "a" && word[i+1] === "u") {
            let beforeauBecomesOu = correctionsForStrings(word.join(""));
            word[i] = "o";
            let afterauBecomesOu = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterauBecomesOu) {
                afterExample = `<i>*${spell(afterauBecomesOu)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeauBecomesOu) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeauBecomesOu)}</i>`
            }
            if(auBecomesOuNum < 6) {    
                if(auBecomesOuNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("auBecomesOu").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("auBecomesOu").appendChild(example);
                }
            auBecomesOuNum++;
            };
        };
    };
    return word;
};

function aCaBecomesaCi(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "a" && word[i-2] === "a" && consonants.includes(word[i-1]) || word[i] === "a" && word[i-3] === "a" && consonants.includes(word[i-1] && consonants[word[i-2]])) {
            let beforeaCaBecomesaCi = correctionsForStrings(word.join(""));
            word[i] = "i";
            if(word[i+1] === "a") {
                word[i+1] = "i";
            }
            let afteraCaBecomesaCi = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afteraCaBecomesaCi) {
                afterExample = `<i>*${spell(afteraCaBecomesaCi)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeaCaBecomesaCi) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeaCaBecomesaCi)}</i>`
            }
            if(aCaBecomesaCiNum < 6) {    
                if(aCaBecomesaCiNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("aCaBecomesaCi").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("aCaBecomesaCi").appendChild(example);
                }
            aCaBecomesaCiNum++;
            };
        };


    };
    return word;
};

function VʔVBecomesVV(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "ʔ" && vowels.includes(word[i-1]) && vowels.includes(word[i+1])) {
            let beforeVʔVBecomesVV = correctionsForStrings(word.join(""));
            word[i] = word[i-1];
            let lengthMarkedWithTriangles = corrections(cloneArray(word));
            word.splice(i+1, 1);
            lengthMarkedWithTriangles[i] = "ː";
            let afterVʔVBecomesVV = correctionsForStrings(lengthMarkedWithTriangles.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterVʔVBecomesVV) {
                afterExample = `<i>*${spell(afterVʔVBecomesVV)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeVʔVBecomesVV) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeVʔVBecomesVV)}</i>`
            }
            if(VʔVBecomesVVNum < 6) {    
                if(VʔVBecomesVVNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("VʔVBecomesVV").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("VʔVBecomesVV").appendChild(example);
                }
            VʔVBecomesVVNum++;
            };
        }
    };
    return word
}

function plosivesDebuccaliseInCoda(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(i !== 0 && word[i] !== word[i-1]) {
        if(plosives.includes(word[i]) && consonants.includes(word[i+1]) && word[i]) {
            let beforeplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            word[i] = "ʔ";
            let afterplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterplosivesDebuccaliseInCoda) {
                afterExample = `<i>*${spell(afterplosivesDebuccaliseInCoda)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeplosivesDebuccaliseInCoda) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeplosivesDebuccaliseInCoda)}</i>`
            }
            if(plosivesDebuccaliseInCodaNum < 6) {    
                if(plosivesDebuccaliseInCodaNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("plosivesDebuccaliseInCoda").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("plosivesDebuccaliseInCoda").appendChild(example);
                }
                plosivesDebuccaliseInCodaNum++;
            };
           
        } else if (plosives.includes(word[word.length - 1])) {
            let beforeplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            word[word.length - 1] = "ʔ";
            let afterplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterplosivesDebuccaliseInCoda) {
                afterExample = `<i>*${spell(afterplosivesDebuccaliseInCoda)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeplosivesDebuccaliseInCoda) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(correctionsForStrings(beforeplosivesDebuccaliseInCoda))}</i>`
            }
            if(plosivesDebuccaliseInCodaNum < 6) {    
                if(plosivesDebuccaliseInCodaNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("plosivesDebuccaliseInCoda").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("plosivesDebuccaliseInCoda").appendChild(example);
                }
                plosivesDebuccaliseInCodaNum++;
            };

        }  else if (plosives.includes(word[i]) && word[i+1] === "ʷ") {
            let beforeplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            word[i] = "ʔ";
            word[i+1] = "u"
            let afterplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterplosivesDebuccaliseInCoda) {
                afterExample = `<i>*${spell(afterplosivesDebuccaliseInCoda)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeplosivesDebuccaliseInCoda) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeplosivesDebuccaliseInCoda)}</i>`
            }
            if(plosivesDebuccaliseInCodaNum < 6) {    
                if(plosivesDebuccaliseInCodaNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("plosivesDebuccaliseInCoda").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("plosivesDebuccaliseInCoda").appendChild(example);
                }
                plosivesDebuccaliseInCodaNum++;
            };
        } else if (plosives.includes(word[i]) && word[i+1] === "ʲ") {
            let beforeplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            word[i] = "ʔ";
            word[i+1] = "i"
            let afterplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterplosivesDebuccaliseInCoda) {
                afterExample = `<i>*${spell(afterplosivesDebuccaliseInCoda)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(afterplosivesDebuccaliseInCoda)}</strong></i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeplosivesDebuccaliseInCoda) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeplosivesDebuccaliseInCoda)}</i>`
            }
            if(plosivesDebuccaliseInCodaNum < 6) {    
                if(plosivesDebuccaliseInCodaNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("plosivesDebuccaliseInCoda").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("plosivesDebuccaliseInCoda").appendChild(example);
                }
                plosivesDebuccaliseInCodaNum++;
            };
         
        }
    };
    };
    return word;
};

function CVRBecomesCCVR(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(consonants.includes(word[i]) && vowels.includes(word[i-1]) && resonants.includes(word[i+1]) && word[i] !== word[i+1] && vowels.includes(word[i+2])) {
            let beforeCVRBecomesCCVR = correctionsForStrings(word.join(""));
            let resonantIndex = word[i+1];
            let vowelIndex = word[i+2];
            word.splice(i+1, 0, "ː");
            word[i+3] = resonantIndex;
            word[i+2] = vowelIndex;
            let afterCVRBecomesCCVR = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterCVRBecomesCCVR) {
                afterExample = `<i>*${spell(afterCVRBecomesCCVR)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeCVRBecomesCCVR) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeCVRBecomesCCVR)}</i>`
            }
            if(CVRBecomesCCVRNum < 6) {    
                if(CVRBecomesCCVRNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("CVRBecomesCCVR").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("CVRBecomesCCVR").appendChild(example);
                }
                CVRBecomesCCVRNum++;
            };
        }
    };
    return word;
};

function glottalStopJFortites(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "ʔ" && word[i+1] === "j") {
            let beforeglottalStopJFortites = correctionsForStrings(word.join(""));
            word[i] = "g";
            word.splice(i+1, 1);
            let afterglottalStopJFortites = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterglottalStopJFortites) {
                afterExample = `<i>*${spell(afterglottalStopJFortites)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeglottalStopJFortites) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeglottalStopJFortites)}</i>`
            }
            if(glottalStopJFortitesNum < 6) {    
                if(glottalStopJFortitesNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("glottalStopJFortites").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("glottalStopJFortites").appendChild(example);
                }
                glottalStopJFortitesNum++;
            };
            
        } else if(word[i] === "ʔ" && word[i+1] === "w") {
            let beforeglottalStopJFortites = correctionsForStrings(word.join(""));
            word[i] = "g";
            word.splice(i+1, 1);
            let afterglottalStopJFortites = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterglottalStopJFortites) {
                afterExample = `<i>*${spell(afterglottalStopJFortites)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeglottalStopJFortites) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(originalJoined)}</strong></i> > *<i>${spell(correctionsForStrings(beforeglottalStopJFortites))}</i>`
            }
             if(glottalStopJFortitesNum < 6) {    
                if(glottalStopJFortitesNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("glottalStopJFortites").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("glottalStopJFortites").appendChild(example);
                }
                glottalStopJFortitesNum++;
            };
        };
    }
    return word;
};

function eciBecomesiCi(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        let iOrJ = ["i", "j"];
        if(word[i] === "e" && consonants.includes(word[i+1]) && iOrJ.includes(word[i+2])) {
            let beforeeciBecomesiCi = correctionsForStrings(word.join(""));
            word[i] = "i";
            if(word[i-1] === "e") {
                word[i-1] = "i";
            };
            let aftereciBecomesiCi = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== aftereciBecomesiCi) {
                afterExample = `<i>*${spell(aftereciBecomesiCi)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeeciBecomesiCi) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeeciBecomesiCi)}</i>`
            }
            if(eciBecomesiCiNum < 6) {    
                if(eciBecomesiCiNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("eciBecomesiCi").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("eciBecomesiCi").appendChild(example);
                }
                eciBecomesiCiNum++;
            };
        };
    };
    return word;
};

function iCbecomeseC(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "i" && consonants.includes(word[i+1]) && nonHighVowels.includes(word[i+2])) {
            let beforeiCbecomeseC = correctionsForStrings(word.join(""));
            word[i] === "e";
            if(word[i-1] === "i") {
                word[i-1] = "e";
            }
            let afteriCbecomeseC = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afteriCbecomeseC) {
                afterExample = `<i>*${spell(afteriCbecomeseC)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeiCbecomeseC) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeiCbecomeseC)}</i>`
            }
            if(iCbecomeseCNum < 6) {    
                if(iCbecomeseCNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("iCbecomeseC").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("iCbecomeseC").appendChild(example);
                }
                iCbecomeseCNum++;
            };
        };
    };
    return word;
};

function VJbecomesLongI(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i]) && word[i+1] === "j") {
            let beforeVJbecomesLongI = correctionsForStrings(word.join(""));
            let lengthMarkedWithTriangles = cloneArray(word);
            word[i] = "i";
            word[i+1] = "i";
            if(word[i-1] === "i") {
                word.splice(i-1,1);
            }
            let afterVJbecomesLongI = correctionsForStrings(lengthMarkedWithTriangles);
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterVJbecomesLongI) {
                afterExample = `<i>*${spell(afterVJbecomesLongI)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeVJbecomesLongI) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeVJbecomesLongI)}</i>`
            }
            if(VJbecomesLongINum < 6) {    
                if(VJbecomesLongINum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("VJbecomesLongI").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("VJbecomesLongI").appendChild(example);
                }
                VJbecomesLongINum++;
            };
        };
    };
    return word;
};

function uNBecomesoN(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "u" && allNasalsArray.includes(word[i+1]) && nonHighVowels.includes(word[i+2])) {
            let beforeuNBecomesoN = correctionsForStrings(word.join(""));
            if(word[i-1] === "u") {
                word[i-1] = "o";
            }
            word[i] = "o";
            let afteruNBecomesoN = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afteruNBecomesoN) {
                afterExample = `<i>*${spell(afteruNBecomesoN)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeuNBecomesoN) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeuNBecomesoN)}</i>`
            }
            if(uNBecomesoNNum < 6) {    
                if(uNBecomesoNNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("uNBecomesoN").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("uNBecomesoN").appendChild(example);
                }
                uNBecomesoNNum++;
            };
        };
    };
    return word;
};

function gBecomesJ(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "g" && frontVowels.includes(word[i-1])) {
            let beforegBecomesJ = correctionsForStrings(word.join(""));
            word[i] = "j";
            if(word[i-1] === "g") {
                word[i-1] = "j"
            }
            let aftergBecomesJ = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== aftergBecomesJ) {
                afterExample = `<i>*${spell(aftergBecomesJ)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforegBecomesJ) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforegBecomesJ)}</i>`
            }
            if(gBecomesJNum < 6) {    
                if(gBecomesJNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("gBecomesJ").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("gBecomesJ").appendChild(example);
                }
                gBecomesJNum++;
            };
        };
    };
    return word;
};

function VvBecomesVV(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "u" && vowels.includes(word[i-1])  && word[i-1] !== "u") {
            let beforeVvBecomesVV = correctionsForStrings(word.join(""));
            let lengthMarkedWithTriangles = cloneArray(word);
            word[i] = word[i-1];
            lengthMarkedWithTriangles[i] = "ː"
            let afterVvBecomesVV = correctionsForStrings(lengthMarkedWithTriangles);
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterVvBecomesVV) {
                afterExample = `<i>*${spell(afterVvBecomesVV)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeVvBecomesVV) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(correctionsForStrings(beforeVvBecomesVV))}</i>`
            }
            if(VvBecomesVVNum < 6) {    
                if(VvBecomesVVNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("VvBecomesVV").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("VvBecomesVV").appendChild(example);
                }
                VvBecomesVVNum++;
            };
        };
    };
    return word;
};

function eNBecomesiN(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "e" && allNasalsArray.includes(word[i+1])) {
            let beforeeNBecomesiN = correctionsForStrings(word.join(""));
            word[i] = "i";
            if(word[i-1] === "e") {
                word[i-1] = "i";
            };
            let aftereNBecomesiN = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== aftereNBecomesiN) {
                afterExample = `<i>*${spell(aftereNBecomesiN)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeeNBecomesiN) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeeNBecomesiN)}</i>`
            }
            if(eNBecomesiNNum < 6) {    
                if(eNBecomesiNNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("eNBecomesiN").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("eNBecomesiN").appendChild(example);
                }
                eNBecomesiNNum++;
            };
        };
    };
    return word;
};

function CJBecomesCC(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "j" && consonants.includes(word[i-1])) {
            let beforeCJBecomesCC = correctionsForStrings(word.join(""));
            let lengthMarkedWithTriangles = cloneArray(word);
            word[i] = word[i-1];
            lengthMarkedWithTriangles[i] = "ː";
            let afterCJBecomesCC = correctionsForStrings(lengthMarkedWithTriangles.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterCJBecomesCC) {
                afterExample = `<i>*${spell(afterCJBecomesCC)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeCJBecomesCC) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeCJBecomesCC)}</i>`
            }
            if(CJBecomesCCNum < 6) {    
                if(CJBecomesCCNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("CJBecomesCC").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("CJBecomesCC").appendChild(example);
                }
                CJBecomesCCNum++;
            };
        };
    };
    return word;
};

function iUmlaut(word, originalWord) {
    let umlautVowels = ["i", "y", "y", "i", "i", "y", "i", "ø", "e", "ø", "i", "e", "e", "ø", "i", "œ", "e", "æ", "y", "e", "e", "ø", "e", "æ", "æ", "æ"]
    let umlautCauser = ["i", "j"]
    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i]) && umlautCauser.includes(word[i+1]) && word[i] !== "i"||
        vowels.includes(word[i]) && umlautCauser.includes(word[i+2]) && word[i] !== "i" ||
        vowels.includes(word[i]) && umlautCauser.includes(word[i+3]) && word[i] !== "i") {
            let vowelIndex = vowels.indexOf(word[i]);
            let beforeiUmlaut = correctionsForStrings(word.join(""));
            if(word[i-1] === word[i]) {
                word[i-1] = umlautVowels[vowelIndex];
            }
            word[i] = umlautVowels[vowelIndex];
            let afteriUmlaut = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afteriUmlaut) {
                afterExample = `<i>*${spell(afteriUmlaut)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeiUmlaut) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeiUmlaut)}</i>`
            }
            if(iUmlautNum < 6) {    
                if(iUmlautNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("iUmlaut").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("iUmlaut").appendChild(example);
                }
                iUmlautNum++;
            };
        };
     };
     return word;
};

function vowelShiftInHeavySyllables(word, originalWord) {
    let tense = ["i", "u", "a", "e", "o"];
    let lax = ["e", "o", "ə", "ɛ", "ɔ"];
    for(let i = 0; i < word.length; i++) {
        if(tense.includes(word[i]) && consonants.includes(word[i+1]) && consonants.includes(word[i+2]) || tense.includes(word[i]) && consonants.includes(word[i+1]) && word[i+1] === word[word.length - 1]) {
            let beforevowelShiftInHeavySyllables = correctionsForStrings(word.join(""));
            let tenseIndex = tense.indexOf(word[i]);
            if(word[i-1] === word[i]) {
                word[i-1] = lax[tenseIndex];
            }
            word[i] = lax[tenseIndex];
            let aftervowelShiftInHeavySyllables = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== aftervowelShiftInHeavySyllables) {
                afterExample = `<i>*${spell(aftervowelShiftInHeavySyllables)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforevowelShiftInHeavySyllables) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforevowelShiftInHeavySyllables)}</i>`
            }
            if(vowelShiftInHeavySyllablesNum < 6) {    
                if(vowelShiftInHeavySyllablesNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("vowelShiftInHeavySyllables").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("vowelShiftInHeavySyllables").appendChild(example);
                }
                vowelShiftInHeavySyllablesNum++;
            };
        };
    };
    return word
};

function VCVBecomesVCWordFinally(word, originalWord) {
    if(vowels.includes(word[word.length-1]) && consonants.includes(word[word.length-2]) && vowels.includes(word[word.length-3])) {
        let beforeVCVBecomesVCWordFinally = correctionsForStrings(word.join(""));
        word.splice(word.length-1, 1);
        let afterVCVBecomesVCWordFinally = correctionsForStrings(word.join(""));
         let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== afterVCVBecomesVCWordFinally) {
                afterExample = `<i>*${spell(afterVCVBecomesVCWordFinally)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === beforeVCVBecomesVCWordFinally) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(beforeVCVBecomesVCWordFinally)}</i>`
            }
            if(VCVBecomesVCWordFinallyNum < 6) {    
                if(VCVBecomesVCWordFinallyNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("VCVBecomesVCWordFinally").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("VCVBecomesVCWordFinally").appendChild(example);
                }
                VCVBecomesVCWordFinallyNum++;   
    };
};
    return word;
};

function longABecomesO(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "a" && word[i+1] === "ː") {
            let before = correctionsForStrings(word.join(""));
            word[i] = "o";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
            }
            if(longABecomesONum < 6) {    
                if(longABecomesONum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("longABecomesO").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("longABecomesO").appendChild(example);
                }
                longABecomesONum++;   
            };
        };
    };
    return word;
}

function palatalisationofPlosives(word, originalWord) {
    let labial = ["b", "bʰ", "bʲ", "bʷ", "bʰʲ", "bʷʰ", "p", "pʰ", "pʲ", "pʷ","pʰʲ", "pʷʰ"];
    let palatalised = ["b", "dʒ", "dʒ", "bʰ", "dʒ", "dʒ", "dʒ", "dʒ", "bʲ", "dʒ", "dʒ", "bʷ", "dʒʷ", "dʒʷ", "bʰʲ", "dʒ", "dʒ", "bʷʰ", "dʒʷ", "dʒ", "p", "tʃ", "tʃ", "pʰ", "tʃ", "tʃ", "tʃ", "tʃ", "pʲ", "tʃ", "tʃ", "pʷ", "tʃ", "tʃ", "pʰʲ", "tʃ", "tʃ", "pʷʰ", "tʃ", "tʃ", "j", "tʃ", "dʒ"];
    for(let i = 0; i < word.length; i++) {
        if(frontVowels.includes(word[i]) && plosives.includes(word[i-1]) && labial.includes(word[i-1]) === false) {
            let before = correctionsForStrings(word.join(""));
            let index = plosives.indexOf(word[i-1]);
            word[i-1] = palatalised[index];
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
            }
            if(palatalisationofPlosivesNum < 6) {    
                if(palatalisationofPlosivesNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("palatalisationofPlosives").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("palatalisationofPlosives").appendChild(example);
                }
                palatalisationofPlosivesNum++;   
            };
        };
    };
};

function eOBecomeJW(word, originalWord) {
    let eO = ["e", "o"];
    let jW = ["j", "w"]
    for(let i = 0; i < word.length; i++) {
        if(eO.includes(word[i]) && vowels.includes(word[i+1]) && word[i] !== word[i+1]) {
            if(word[i] === word[i+1]) {
                word.splice(i+1, 1)
            }
            let before = correctionsForStrings(word.join(""));
            let index = eO.indexOf(word[i]);
            word[i] = jW[index];
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
            }
            if(eOBecomeJWNum < 6) {    
                if(eOBecomeJWNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("eOBecomeJW").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("eOBecomeJW").appendChild(example);
                }
                eOBecomeJWNum++;   
            };
        }
    }
}

function VzbecomesVr(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        while(word[i] === "z" && vowels.includes(word[i-1])) {
            let before = correctionsForStrings(word.join(""));
            word[i] = "r";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
            }
            if(VzbecomesVrNum < 6) {    
                if(VzbecomesVrNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("VzbecomesVr").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("VzbecomesVr").appendChild(example);
                }
                VzbecomesVrNum++;   
            };
        };
    };
};

function intialVBecomesHV(word, originalWord) {
    if(vowels.includes(word[0])) {
        let before = correctionsForStrings(word.join(""));
        word.splice(0, 0, "ħ");
        let after = correctionsForStrings(word.join(""));
        let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
            }
            if(intialVBecomesHVNum < 6) {    
                if(intialVBecomesHVNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("intialVBecomesHV").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("intialVBecomesHV").appendChild(example);
                }
                intialVBecomesHVNum++;   
            };
    }
};

function intialJBecomesL(word, originalWord) {
    if(word[0] ===  "j") {
        let before = correctionsForStrings(word.join(""));
        word[0] = "l";
        let after = correctionsForStrings(word.join(""));
        let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
            }
            if(intialJBecomesLNum < 6) {    
                if(intialJBecomesLNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("intialJBecomesL").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("intialJBecomesL").appendChild(example);
                }
                intialJBecomesLNum++;   
            };

    }
};

function tDBecomeL(word, originalWord) {
    let tD = ["t", "d"]
    for(let i = 0; i <  word.length; i++) {
        if(tD.includes(word[i]) && vowels.includes(word[i-1]) && vowels.includes(word[i+1])) {
            let before = correctionsForStrings(word.join(""));
            word[i] = "l";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
            }
            if(tDBecomeLNum < 6) {    
                if(tDBecomeLNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("tDBecomeL").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("tDBecomeL").appendChild(example);
                }
                tDBecomeLNum++;   
            };
        }
    };
};

function longVowelsBreak(word, originalWord) {
    let originalVowel = ["e", "ø", "ɘ", "ɵ", "ə", "ɛ", "ɜ", "ɞ", "ɪ", "ɔ", "œ", "ɒ", "ʊ", "ʌ", "ɤ", "o", "æ", "ɑ", "ɐ", "a", "i", "u", "y", "ɯ", "ɨ", "ʉ"];
    let heightenedVowel = ["ɪ", "ʏ", "ɨ", "ʉ", "ɘ", "e", "ɘ", "ɵ", "i", "o", "ø", "ɔ", "u", "ɤ", "ɯ", "u", "ɛ", "ʌ", "ɜ", "æ", "i", "u", "y", "ɯ", "ɨ", "ʉ"]

    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i]) && word[i+1] === "ː") {
            //breaks into short vowel + i
            if(randomNumForLongVowelsBreak === 0 && word[i] !== "i") {
                let before = correctionsForStrings(word.join(""));
                word[i+1] = "i";
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(originalJoined) !== after) {
                    afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
                } else {
                    afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
                };
                let beforeExample = "";
                if(correctionsForStrings(originalJoined) === before) {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
                };
                if(longVowelsBreakNum < 6) {    
                    if(longVowelsBreakNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreak").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreak").appendChild(example);
                    }
                    longVowelsBreakNum++;   
                };
            };
            //breaks into short vowel + u
            if(randomNumForLongVowelsBreak === 1 && word[i] !== "u") {
                let before = correctionsForStrings(word.join(""));
                word[i+1] = "u";
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(originalJoined) !== after) {
                    afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
                } else {
                    afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
                };
                let beforeExample = "";
                if(correctionsForStrings(originalJoined) === before) {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
                };
                if(longVowelsBreakNum < 6) {    
                    if(longVowelsBreakNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreak").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreak").appendChild(example);
                    }
                    longVowelsBreakNum++;   
                };
            };
            //breaks into higher short vowel + i
            if(randomNumForLongVowelsBreak === 2 && word[i] !== "i") {
                let before = correctionsForStrings(word.join(""));
                word[i+1] = "i";
                let index = originalVowel.indexOf(word[i]);
                word[i] = heightenedVowel[index];
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(originalJoined) !== after) {
                    afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
                } else {
                    afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
                };
                let beforeExample = "";
                if(correctionsForStrings(originalJoined) === before) {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
                };
                if(longVowelsBreakNum < 6) {    
                    if(longVowelsBreakNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreak").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreak").appendChild(example);
                    }
                    longVowelsBreakNum++;   
                };
            };
            //breaks into higher short vowel + u
            if(randomNumForLongVowelsBreak === 3 && word[i] !== "u") {
                let before = correctionsForStrings(word.join(""));
                word[i+1] = "u";
                let index = originalVowel.indexOf(word[i]);
                word[i] = heightenedVowel[index];
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(originalJoined) !== after) {
                    afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
                } else {
                    afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
                };
                let beforeExample = "";
                if(correctionsForStrings(originalJoined) === before) {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
                };
                if(longVowelsBreakNum < 6) {    
                    if(longVowelsBreakNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreak").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreak").appendChild(example);
                    }
                    longVowelsBreakNum++;   
                };
            };
            //breaks into j + short vowel
            if(randomNumForLongVowelsBreak === 4) {
                let before = correctionsForStrings(word.join(""));
                word[i+1] = word[i];
                word[i] = "j";
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(originalJoined) !== after) {
                    afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
                } else {
                    afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
                };
                let beforeExample = "";
                if(correctionsForStrings(originalJoined) === before) {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
                };
                if(longVowelsBreakNum < 6) {    
                    if(longVowelsBreakNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreak").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreak").appendChild(example);
                    }
                    longVowelsBreakNum++;   
                };
            };
            //breaks into jV or wV depending on frontness
            if(randomNumForLongVowelsBreak === 5) {
                let before = correctionsForStrings(word.join(""));
                if(frontVowels.includes(word[i])) {
                    word[i+1] = word[i];
                    word[i] = "j";
                } else {
                    word[i+1] = word[i];
                    word[i] = "w";
                }
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(originalJoined) !== after) {
                    afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
                } else {
                    afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>`
                };
                let beforeExample = "";
                if(correctionsForStrings(originalJoined) === before) {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
                };
                if(longVowelsBreakNum < 6) {    
                    if(longVowelsBreakNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreak").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreak").appendChild(example);
                    }
                    longVowelsBreakNum++;   
                };
            };
        }
    }
};

/*--------------------------------------------------------------------*/

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    clearArrays();
    createAbbreviationsForLanguageName();
    populateArray();
    soundChangeExample();
};

export {soundChangeExample};