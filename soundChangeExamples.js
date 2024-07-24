//@collapse
import { spell } from "./orthography.js";
import { soundChange, voiced, unvoiced, chosenSoundChanges, vowels, consonants, selectFricatives, plosives, randomNumForWordInitialPlosiveClusters, midVowels, highVowels, randomNumForNoResonantsBeforeConsonants, resonants, randomNumForlenitionofPlosivebeforeOtherPlosive,lenitionFromPlosives2, lenitionFromPlosives1, nonHighVowels, allNasalsArray, correctionsForStrings, corrections} from "./soundchange.js";
import { languageName } from "./script.js";

let soundChangeArray = [];


function clearArrays() {
    num = 0;
    soundChangeArray = [];
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

let afterwordFinalDevoicing = "";
let beforewordFinalDevoicing = "";
function wordFinalDevoicing(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(voiced.includes(word[word.length -1])) {
            beforewordFinalDevoicing = correctionsForStrings(word.join(""));
            let voicedIndex = voiced.indexOf(word[word.length -1]);
            word[word.length -1] = unvoiced[voicedIndex];
            if(voiced.includes(word[word.length -2])) {
                let voicedIndex = voiced.indexOf(word[word.length -2]);
                word[word.length -2] = unvoiced[voicedIndex];
            } 
            afterwordFinalDevoicing = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforewordFinalDevoicing) !== afterwordFinalDevoicing) {
                afterExample = `<i>*${spell(afterwordFinalDevoicing)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterwordFinalDevoicing)}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforewordFinalDevoicing) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforewordFinalDevoicing)}</i>`
            }
            document.getElementById("wordFinalDevoicing").innerHTML = `${beforeExample} > ${afterExample}`;
        }
    } 
    return {word};
}

let afterplosivesCantClusterTogetherWordInitially = "";
let beforeplosivesCantClusterTogetherWordInitially = "";
function plosivesCantClusterTogetherWordInitially(word, originalWord) {
    //let originalClone = cloneArray(originalWord);
    if(randomNumForWordInitialPlosiveClusters !== 5) {
        for(let i = 0; i < word.length; i++) {
            if(plosives.includes(word[0]) && plosives.includes(word[1])) {
                beforeplosivesCantClusterTogetherWordInitially = correctionsForStrings(word.join(""));
                //let original = originalClone.join("");
                word.splice(0, 1);
                afterplosivesCantClusterTogetherWordInitially = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(beforeplosivesCantClusterTogetherWordInitially) !== afterplosivesCantClusterTogetherWordInitially) {
                    afterExample = `<i>*${spell(afterplosivesCantClusterTogetherWordInitially)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
                } else {
                    afterExample = `${newName} <i>${spell(afterplosivesCantClusterTogetherWordInitially)}</i>`
                }
                let beforeExample = "";
                if(originalJoined === beforeplosivesCantClusterTogetherWordInitially) {
                    beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
                } else {
                    beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeplosivesCantClusterTogetherWordInitially)}</i>`
                }
                if(document.getElementById("plosivesCantClusterTogetherWordInitially") !== null) {
                    document.getElementById("plosivesCantClusterTogetherWordInitially").innerHTML = `${beforeExample} > ${afterExample}`;
                };
            };
        };
    };
    return {word};
};

let afterfricativesDebuccaliseBeforeVowels = "";
let beforeChangefricativesDebuccaliseBeforeVowels = "";
function fricativesDebuccaliseBeforeVowels(word, originalWord) {
   // //let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
        if(selectFricatives().includes(word[i]) && vowels.includes(word[i+1])) {
            beforeChangefricativesDebuccaliseBeforeVowels = correctionsForStrings(word.join(""));
           // //let original = originalClone.join("");
            word[i] = "h";
            afterfricativesDebuccaliseBeforeVowels = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeChangefricativesDebuccaliseBeforeVowels) !== afterfricativesDebuccaliseBeforeVowels) {
                afterExample = `<i>*${spell(afterfricativesDebuccaliseBeforeVowels)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterfricativesDebuccaliseBeforeVowels)}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforeChangefricativesDebuccaliseBeforeVowels) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeChangefricativesDebuccaliseBeforeVowels)}</i>`
            }
            document.getElementById("fricativesDebuccaliseBeforeVowels").innerHTML = `${beforeExample} > ${afterExample}`;
                }
    }
    return {word};
};

let afterfricativesLostAfterWordInitialConsonants = "";
let beforefricativesLostAfterWordInitialConsonants = "";
function fricativesLostAfterWordInitialConsonants(word, originalWord) {
    //let originalClone = cloneArray(originalWord);
    if(consonants.includes(word[0]) && selectFricatives().includes(word[1])) {
        beforefricativesLostAfterWordInitialConsonants = correctionsForStrings(word.join(""));
        //let original = originalClone.join("");
        word.splice(1, 1);
        afterfricativesLostAfterWordInitialConsonants = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = originalWord.join("");
        if(soundChange(beforefricativesLostAfterWordInitialConsonants) !== afterfricativesLostAfterWordInitialConsonants) {
            afterExample = `<i>*${spell(afterfricativesLostAfterWordInitialConsonants)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(afterfricativesLostAfterWordInitialConsonants)}</i>`
        }
        let beforeExample = "";
        if(originalJoined === beforefricativesLostAfterWordInitialConsonants) {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforefricativesLostAfterWordInitialConsonants)}</i>`
        }
        if(document.getElementById("fricativesLostAfterWordInitialConsonants") !== null) {
            document.getElementById("fricativesLostAfterWordInitialConsonants").innerHTML = `${beforeExample} > ${afterExample}`;
        }
}
    if(consonants.includes(word[1]) && selectFricatives().includes(word[2]) && word[0] === "X") {
        word.splice(2, 1);
    }
    
    
    return {word};
};

let afterwordFinalHighVowelsLower = "";
let beforewordFinalHighVowelsLower = "";
function wordFinalHighVowelsLower(word, originalWord) {
    if(highVowels.includes(word[word.length -1])) {
        let vowelIndex = highVowels.indexOf(word[word.length -1]);
        beforewordFinalHighVowelsLower = correctionsForStrings(word.join(""));
        word[word.length -1] = midVowels[vowelIndex];
        afterwordFinalHighVowelsLower = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = originalWord.join("");
        if(soundChange(beforewordFinalHighVowelsLower) !== afterwordFinalHighVowelsLower) {
            afterExample = `<i>*${spell(afterwordFinalHighVowelsLower)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(afterwordFinalHighVowelsLower)}</i>`
        };
        let beforeExample = "";
        if(originalJoined === beforewordFinalHighVowelsLower) {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforewordFinalHighVowelsLower)}</i>`
        };
        if(document.getElementById("wordFinalHighVowelsLower") !== null) {
            document.getElementById("wordFinalHighVowelsLower").innerHTML = `${beforeExample} > ${afterExample}`;
        };
    };
    return {word};
}

let afterNoResonantsBeforeConsonants = "";
let beforeNoResonantsBeforeConsonants = "";
function NoResonantsBeforeConsonants(word, originalWord) {
    if(randomNumForNoResonantsBeforeConsonants === 0) {
    for(let i = 0; i < word.length; i++) {
        if(resonants.includes(word[i]) && consonants.includes(word[i + 1])) {
            beforeNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
            word.splice(i, 1);
            afterNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterNoResonantsBeforeConsonants)}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforeNoResonantsBeforeConsonants) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeNoResonantsBeforeConsonants)}</i>`
            }
            if(document.getElementById("NoResonantsBeforeConsonants") !== null) {
                document.getElementById("NoResonantsBeforeConsonants").innerHTML = `${beforeExample} > ${afterExample}`;
            }
            
        } 
    } 
    } 
    if(randomNumForNoResonantsBeforeConsonants === 1) {
    //inserts /i/ between resonant and consonant
        for(let i = 0; i < word.length; i++) {
            if(resonants.includes(word[i]) && consonants.includes(word[i + 1])) {
                beforeNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
                //let original = originalClone.join("");
                word.splice(i+1, 0, "i");
                afterNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                    afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
                } else {
                    afterExample = `${newName} <i>${spell(afterNoResonantsBeforeConsonants)}</i>`
                }
                let beforeExample = "";
                if(originalJoined === beforeNoResonantsBeforeConsonants) {
                    beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
                } else {
                    beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeNoResonantsBeforeConsonants)}</i>`
                }
                if(document.getElementById("NoResonantsBeforeConsonants") !== null) {
                    document.getElementById("NoResonantsBeforeConsonants").innerHTML = `${beforeExample} > ${afterExample}`;
                }
                
            } 
        }
    }
    if(randomNumForNoResonantsBeforeConsonants === 2) {
    //inserts /u/ between resonant and consonant
    for(let i = 0; i < word.length; i++) {
        if(resonants.includes(word[i]) && consonants.includes(word[i + 1])) {
            beforeNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
            //let original = originalClone.join("");
            word.splice(i+1, 0, "u");
            afterNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterNoResonantsBeforeConsonants)}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforeNoResonantsBeforeConsonants) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeNoResonantsBeforeConsonants)}</i>`
            }
            if(document.getElementById("NoResonantsBeforeConsonants") !== null) {
                document.getElementById("NoResonantsBeforeConsonants").innerHTML = `${beforeExample} > ${afterExample}`;
            }  
            }
            
        }
    }
    if(randomNumForNoResonantsBeforeConsonants === 3) {
    //the resonant and consonant switch places
    for(let i = 0; i < word.length; i++) {
        if(resonants.includes(word[i]) && consonants.includes(word[i + 1])) {
            beforeNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
            //let original = originalClone.join("");
            let resonant = word[i]; 
            let followingConsonant = word[i+1];
            word[i] = followingConsonant;
            word[i+1] = resonant;
            if(resonants.includes(word[i]) && resonants.includes(word[i + 1])) {
                word.splice(i+1, 0, "u");
            }
            afterNoResonantsBeforeConsonants = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterNoResonantsBeforeConsonants)}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforeNoResonantsBeforeConsonants) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeNoResonantsBeforeConsonants)}</i>`
            }
            if(document.getElementById("NoResonantsBeforeConsonants") !== null) {
                document.getElementById("NoResonantsBeforeConsonants").innerHTML = `${beforeExample} > ${afterExample}`;
            }  
        }
    }
    }
    return {word};
};

let afterlenitionofPlosivebeforeOtherPlosive = "";
let beforelenitionofPlosivebeforeOtherPlosive = "";
function lenitionofPlosivebeforeOtherPlosive(word, originalWord) {
    //let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
    if(randomNumForlenitionofPlosivebeforeOtherPlosive === 0) {
        if(plosives.includes(word[i]) && plosives.includes(word[i - 1])) {
            let firstPlosiveIndex = plosives.indexOf(word[i-1])
            beforelenitionofPlosivebeforeOtherPlosive = correctionsForStrings(word.join(""));
            //let original = originalClone.join("");
            word[i-1] = lenitionFromPlosives1[firstPlosiveIndex];
            afterlenitionofPlosivebeforeOtherPlosive = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforelenitionofPlosivebeforeOtherPlosive) !== afterlenitionofPlosivebeforeOtherPlosive) {
                afterExample = `<i>*${spell(afterlenitionofPlosivebeforeOtherPlosive)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterlenitionofPlosivebeforeOtherPlosive)}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforelenitionofPlosivebeforeOtherPlosive) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforelenitionofPlosivebeforeOtherPlosive)}</i>`
            }
           if(document.getElementById("lenitionofPlosivebeforeOtherPlosive") !== null) {
                document.getElementById("lenitionofPlosivebeforeOtherPlosive").innerHTML = `${beforeExample} > ${afterExample}`;
           }
        }
    } else if(randomNumForlenitionofPlosivebeforeOtherPlosive === 1) {
        if(plosives.includes(word[i]) && plosives.includes(word[i - 1])) {
            let firstPlosiveIndex = plosives.indexOf(word[i-1])
            beforelenitionofPlosivebeforeOtherPlosive = correctionsForStrings(word.join(""));
            //let original = originalClone.join("");
            word[i-1] = lenitionFromPlosives2[firstPlosiveIndex]
            afterlenitionofPlosivebeforeOtherPlosive = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforelenitionofPlosivebeforeOtherPlosive) !== afterlenitionofPlosivebeforeOtherPlosive) {
                afterExample = `<i>*${spell(afterlenitionofPlosivebeforeOtherPlosive)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterlenitionofPlosivebeforeOtherPlosive)}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforelenitionofPlosivebeforeOtherPlosive) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforelenitionofPlosivebeforeOtherPlosive)}</i>`
            }
            if(document.getElementById("lenitionofPlosivebeforeOtherPlosive") !== null) {
                document.getElementById("lenitionofPlosivebeforeOtherPlosive").innerHTML = `${beforeExample} > ${afterExample}`;
            }
        }
    } 
    }
    return {word};
};

let afternonInitialNonHighVowelsBecomeA = "";
let beforenonInitialNonHighVowelsBecomeA = "";
function nonInitialNonHighVowelsBecomeA(word, originalWord) {
    let num = 0;
    for(let i = 0; i < word.length; i++) {
        if(nonHighVowels.includes(word[i]) && num !== 0) {
            beforenonInitialNonHighVowelsBecomeA = correctionsForStrings(word.join(""));
            word[i] = "a";
            afternonInitialNonHighVowelsBecomeA = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforenonInitialNonHighVowelsBecomeA) !== afternonInitialNonHighVowelsBecomeA) {
                afterExample = `<i>*${spell(afternonInitialNonHighVowelsBecomeA)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afternonInitialNonHighVowelsBecomeA)}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforenonInitialNonHighVowelsBecomeA) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforenonInitialNonHighVowelsBecomeA)}</i>`
            };
            if(document.getElementById("nonInitialNonHighVowelsBecomeA") !== null) {
                document.getElementById("nonInitialNonHighVowelsBecomeA").innerHTML = `${beforeExample} > ${afterExample}`;
            };
        }
        if(vowels.includes(word[i])) {
            num++;
        };    
    };
    return {word};
};

let afternasalsCantAppearAfterConsonants = "";
let beforenasalsCantAppearAfterConsonants = "";
function nasalsCantAppearAfterConsonants(word, originalWord) {
    //let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
        while(consonants.includes(word[i]) && allNasalsArray.includes(word[i+1])) {
            beforenasalsCantAppearAfterConsonants = correctionsForStrings(word.join(""));
            //let original = originalClone.join("");
            word.splice(i+1, 0, "i");
            afternasalsCantAppearAfterConsonants = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforenasalsCantAppearAfterConsonants) !== afternasalsCantAppearAfterConsonants) {
                afterExample = `<i>*${spell(afternasalsCantAppearAfterConsonants)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(correctionsForStrings(afternasalsCantAppearAfterConsonants))}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforenasalsCantAppearAfterConsonants) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforenasalsCantAppearAfterConsonants)}</i>`
            }
            if(document.getElementById("nasalsCantAppearAfterConsonants") !== null) {
                document.getElementById("nasalsCantAppearAfterConsonants").innerHTML = `${beforeExample} > ${afterExample}`;
            };
        };
    };
    return {word};
};

let aftervowelLostBetweenTwoOfSameConsonant = "";
let beforevowelLostBetweenTwoOfSameConsonant = "";
function vowelLostBetweenTwoOfSameConsonant(word, originalWord) {
    //let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
    if(consonants.includes(word[i-1]) && word[i-1] === word[i+1] && vowels.includes(word[i])) {
        beforevowelLostBetweenTwoOfSameConsonant = correctionsForStrings(word.join(""));
        //let original = originalClone.join("");
        word.splice(i, 2);
        aftervowelLostBetweenTwoOfSameConsonant = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = originalWord.join("");
        if(soundChange(beforevowelLostBetweenTwoOfSameConsonant) !== aftervowelLostBetweenTwoOfSameConsonant) {
            afterExample = `<i>*${spell(aftervowelLostBetweenTwoOfSameConsonant)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(aftervowelLostBetweenTwoOfSameConsonant)}</i>`
        };
        let beforeExample = "";
        if(originalJoined === beforevowelLostBetweenTwoOfSameConsonant) {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforevowelLostBetweenTwoOfSameConsonant)}</i>`
        }
        if(document.getElementById("vowelLostBetweenTwoOfSameConsonant") !== null) {
            document.getElementById("vowelLostBetweenTwoOfSameConsonant").innerHTML = `${beforeExample} > ${afterExample}`;
        }
    }
    }
    return {word, originalWord}
};

let aftervoicedConsonantsLostIntervocalically = "";
let beforevoicedConsonantsLostIntervocalically = "";
function voicedConsonantsLostIntervocalically(word, originalWord) {
    //let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
        while(vowels.includes(word[i-1]) && vowels.includes(word[i+1]) && voiced.includes(word[i]) ||
         vowels.includes(word[i-2]) && vowels.includes(word[i+2]) && word[i-1] === "ː" && word[i+1] === "ː" && voiced.includes(word[i]) || 
         vowels.includes(word[i-1]) && word[i+1] === "ː" && voiced.includes(word[i]) ||
         vowels.includes(word[i+1]) && word[i-1] === "ː" && voiced.includes(word[i])
        ) {
        beforevoicedConsonantsLostIntervocalically = correctionsForStrings(word.join(""));
        //let original = originalClone.join("");
        word.splice(i, 1);
        aftervoicedConsonantsLostIntervocalically = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = originalWord.join("");
        if(soundChange(beforevoicedConsonantsLostIntervocalically) !== aftervoicedConsonantsLostIntervocalically) {
            afterExample = `<i>*${spell(aftervoicedConsonantsLostIntervocalically)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(aftervoicedConsonantsLostIntervocalically)}</i>`
        };
        let beforeExample = "";
        if(originalJoined === beforevoicedConsonantsLostIntervocalically) {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforevoicedConsonantsLostIntervocalically)}</i>`
        }
        if(document.getElementById("voicedConsonantsLostIntervocalically") !== null) {
            document.getElementById("voicedConsonantsLostIntervocalically").innerHTML = `${beforeExample} > ${afterExample}`;
        }
        }
    }
    return {word};
};

let afterRVCToVRCMetathesis = "";
let beforeRVCToVRCMetathesis = "";
function RVCToVRCMetathesis(word, originalWord) {
    //let originalClone = cloneArray(originalWord);
    if(resonants.includes(word[0]) && vowels.includes(word[1]) && consonants.includes(word[2])) {
        beforeRVCToVRCMetathesis = correctionsForStrings(word.join(""));
        //let original = originalClone.join("");
        let resonant = word[0];
        let vowel = word[1];
        word[0] = vowel;
        word[1] = resonant;
        afterRVCToVRCMetathesis = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = originalWord.join("");
        if(soundChange(beforeRVCToVRCMetathesis) !== afterRVCToVRCMetathesis) {
            afterExample = `<i>*${spell(afterRVCToVRCMetathesis)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(afterRVCToVRCMetathesis)}</i>`
        };
        let beforeExample = "";
        if(originalJoined === beforeRVCToVRCMetathesis) {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeRVCToVRCMetathesis)}</i>`
        }
        if(document.getElementById("RVCToVRCMetathesis") !== null) {
            document.getElementById("RVCToVRCMetathesis").innerHTML = `${beforeExample} > ${afterExample}`;
        }
    }
    if(word[0] === "X" && resonants.includes(word[1]) && vowels.includes(word[2]) && consonants.includes(word[3])) {
        let resonant = word[1];
        let vowel = word[2];
        word[1] = vowel;
        word[2] = resonant;
    }
    return {word}
};

let aftervowelLostBetweenConsonantAndResonant = "";
let beforevowelLostBetweenConsonantAndResonant = "";
function vowelLostBetweenConsonantAndResonant(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(consonants.includes(word[i]) && vowels.includes(word[i+1]) && resonants.includes(word[i+2]) && vowels.includes(word[i+3])) {
            beforevowelLostBetweenConsonantAndResonant = correctionsForStrings(word.join(""));
            word.splice(i+1,1);
            aftervowelLostBetweenConsonantAndResonant = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforevowelLostBetweenConsonantAndResonant) !== aftervowelLostBetweenConsonantAndResonant) {
                afterExample = `<i>*${spell(aftervowelLostBetweenConsonantAndResonant)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(correctionsForStrings(aftervowelLostBetweenConsonantAndResonant))}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforevowelLostBetweenConsonantAndResonant) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforevowelLostBetweenConsonantAndResonant)}</i>`
            }
            if(document.getElementById("vowelLostBetweenConsonantAndResonant") !== null) {
                document.getElementById("vowelLostBetweenConsonantAndResonant").innerHTML = `${beforeExample} > ${afterExample}`;
            }
        }
        if(word[i] === "X" && consonants.includes(word[i+1]) && vowels.includes(word[i+2]) && resonants.includes(word[i+3]) && vowels.includes(word[i+4])) {
            word.splice(i+2,1) 
        };
    };
    return {word, originalWord}
};

let afterintervocalicVoicing = "";
let beforeintervocalicVoicing = "";
function intervocalicVoicing(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(unvoiced.includes(word[i]) && vowels.includes(word[i-1]) && vowels.includes(word[i+1])) {
            beforeintervocalicVoicing = correctionsForStrings(word.join(""));
            let unvoicedIndex = unvoiced.indexOf(word[i]);
            word[i] = voiced[unvoicedIndex];
            afterintervocalicVoicing = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeintervocalicVoicing) !== afterintervocalicVoicing) {
                afterExample = `<i>*${spell(afterintervocalicVoicing)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterintervocalicVoicing)}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeintervocalicVoicing) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeintervocalicVoicing)}</i>`
            }
            if(document.getElementById("intervocalicVoicing") !== null) {
                document.getElementById("intervocalicVoicing").innerHTML = `${beforeExample} > ${afterExample}`;
            }
        };
    };
    return word;
};

let afterhLostAfterConsonants = "";
let beforehLostAfterConsonants = "";
function hLostAfterConsonants(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "h" && consonants.includes(word[i-1])) {
            beforehLostAfterConsonants = correctionsForStrings(word.join(""));
            word.splice(i, 1);
            afterhLostAfterConsonants = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforehLostAfterConsonants) !== afterhLostAfterConsonants) {
                afterExample = `<i>*${spell(afterhLostAfterConsonants)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterhLostAfterConsonants)}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforehLostAfterConsonants) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforehLostAfterConsonants)}</i>`
            }
            document.getElementById("hLostAfterConsonants").innerHTML = `${beforeExample} > ${afterExample}`;
            
        };
    };
    return word;
};

let afternasalsLostBetweenVowelAndConsonant = "";
let beforenasalsLostBetweenVowelAndConsonant = "";
function nasalsLostBetweenVowelAndConsonant(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(allNasalsArray.includes(word[i]) && consonants.includes(word[i+1]) && vowels.includes(word[i-1])) {
            beforenasalsLostBetweenVowelAndConsonant = correctionsForStrings(word.join(""));
            let lengthMarkedWithTriangles = cloneArray(word);
            word[i] = word[i-1];
            lengthMarkedWithTriangles[i] = "ː";
            afternasalsLostBetweenVowelAndConsonant = correctionsForStrings(lengthMarkedWithTriangles.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforenasalsLostBetweenVowelAndConsonant) !== afternasalsLostBetweenVowelAndConsonant) {
                afterExample = `<i>*${spell(afternasalsLostBetweenVowelAndConsonant)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afternasalsLostBetweenVowelAndConsonant)}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforenasalsLostBetweenVowelAndConsonant) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforenasalsLostBetweenVowelAndConsonant)}</i>`
            }
            document.getElementById("nasalsLostBetweenVowelAndConsonant").innerHTML = `${beforeExample} > ${afterExample}`;
        };
    };
    return word;
};

let afterauBecomesOu = "";
let beforeauBecomesOu = "";
function auBecomesOu(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "a" && word[i+1] === "u") {
            beforeauBecomesOu = correctionsForStrings(word.join(""));
            word[i] = "o";
            afterauBecomesOu = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeauBecomesOu) !== afterauBecomesOu) {
                afterExample = `<i>*${spell(afterauBecomesOu)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterauBecomesOu)}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeauBecomesOu) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeauBecomesOu)}</i>`
            }
            document.getElementById("auBecomesOu").innerHTML = `${beforeExample} > ${afterExample}`;
        };
    };
    return word;
};

let afteraCaBecomesaCi = "";
let beforeaCaBecomesaCi = "";
function aCaBecomesaCi(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "a" && word[i-2] === "a" && consonants.includes(word[i-1]) || word[i] === "a" && word[i-3] === "a" && consonants.includes(word[i-1] && consonants[word[i-2]])) {
            beforeaCaBecomesaCi = correctionsForStrings(word.join(""));
            word[i] = "i";
            afteraCaBecomesaCi = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeaCaBecomesaCi) !== afteraCaBecomesaCi) {
                afterExample = `<i>*${spell(afteraCaBecomesaCi)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afteraCaBecomesaCi)}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeaCaBecomesaCi) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeaCaBecomesaCi)}</i>`
            }
            document.getElementById("aCaBecomesaCi").innerHTML = `${beforeExample} > ${afterExample}`;
        };


    };
    return word;
};

let afterVʔVBecomesVV = "";
let beforeVʔVBecomesVV = "";
function VʔVBecomesVV(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "ʔ" && vowels.includes(word[i-1]) && vowels.includes(word[i+1])) {
            beforeVʔVBecomesVV = correctionsForStrings(word.join(""));
            word[i] = word[i-1];
            let lengthMarkedWithTriangles = correctionsForStrings(cloneArray(word));
            word.splice(i+1, 1);
            lengthMarkedWithTriangles[i] = "ː";
            afterVʔVBecomesVV = lengthMarkedWithTriangles.join("");
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeVʔVBecomesVV) !== afterVʔVBecomesVV) {
                afterExample = `<i>*${spell(afterVʔVBecomesVV)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterVʔVBecomesVV)}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeVʔVBecomesVV) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeVʔVBecomesVV)}</i>`
            }
            document.getElementById("VʔVBecomesVV").innerHTML = `${beforeExample} > ${afterExample}`;
        }
    };
    return word
}

let afterplosivesDebuccaliseInCoda = "";
let beforeplosivesDebuccaliseInCoda = "";
function plosivesDebuccaliseInCoda(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(plosives.includes(word[i]) && consonants.includes(word[i+1])) {
            beforeplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            word[i] = "ʔ";
            afterplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeplosivesDebuccaliseInCoda) !== afterplosivesDebuccaliseInCoda) {
                afterExample = `<i>*${spell(afterplosivesDebuccaliseInCoda)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterplosivesDebuccaliseInCoda)}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeplosivesDebuccaliseInCoda) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeplosivesDebuccaliseInCoda)}</i>`
            }
            document.getElementById("plosivesDebuccaliseInCoda").innerHTML = `${beforeExample} > ${afterExample}`;
           
        } else if (plosives.includes(word[word.length - 1])) {
            beforeplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            word[word.length - 1] = "ʔ";
            afterplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeplosivesDebuccaliseInCoda) !== afterplosivesDebuccaliseInCoda) {
                afterExample = `<i>*${spell(afterplosivesDebuccaliseInCoda)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterplosivesDebuccaliseInCoda)}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeplosivesDebuccaliseInCoda) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeplosivesDebuccaliseInCoda)}</i>`
            }
            document.getElementById("plosivesDebuccaliseInCoda").innerHTML = `${beforeExample} > ${afterExample}`;
        }  else if (plosives.includes(word[i]) && word[i+1] === "ʷ") {
            beforeplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            word[i] = "ʔ";
            word[i+1] = "u"
            afterplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeplosivesDebuccaliseInCoda) !== afterplosivesDebuccaliseInCoda) {
                afterExample = `<i>*${spell(afterplosivesDebuccaliseInCoda)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterplosivesDebuccaliseInCoda)}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeplosivesDebuccaliseInCoda) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeplosivesDebuccaliseInCoda)}</i>`
            }
            document.getElementById("plosivesDebuccaliseInCoda").innerHTML = `${beforeExample} > ${afterExample}`;
        } else if (plosives.includes(word[i]) && word[i+1] === "ʲ") {
            beforeplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            word[i] = "ʔ";
            word[i+1] = "i"
            afterplosivesDebuccaliseInCoda = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeplosivesDebuccaliseInCoda) !== afterplosivesDebuccaliseInCoda) {
                afterExample = `<i>*${spell(afterplosivesDebuccaliseInCoda)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterplosivesDebuccaliseInCoda)}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeplosivesDebuccaliseInCoda) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeplosivesDebuccaliseInCoda)}</i>`
            }
            document.getElementById("plosivesDebuccaliseInCoda").innerHTML = `${beforeExample} > ${afterExample}`;
         
        }
       
    };
    return word;
};

let afterCVRBecomesCCVR = "";
let beforeCVRBecomesCCVR = "";
function CVRBecomesCCVR(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(consonants.includes(word[i]) && vowels.includes(word[i-1]) && resonants.includes(word[i+1]) && vowels.includes(word[i+2])) {
            beforeCVRBecomesCCVR = correctionsForStrings(word.join(""));
            let doubledConsonant = word[i];
            let resonantIndex = word[i+1];
            let vowelIndex = word[i+2];
            word[i+2] = resonantIndex;
            word[i+1] = vowelIndex;
            word.splice(i, 0, doubledConsonant);
            afterCVRBecomesCCVR = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeCVRBecomesCCVR) !== afterCVRBecomesCCVR) {
                afterExample = `<i>*${spell(afterCVRBecomesCCVR)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterCVRBecomesCCVR)}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeCVRBecomesCCVR) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeCVRBecomesCCVR)}</i>`
            }
            document.getElementById("CVRBecomesCCVR").innerHTML = `${beforeExample} > ${afterExample}`;
        }
    };
    return word;
};

let afterglottalStopJFortites = "";
let beforeglottalStopJFortites = "";
function glottalStopJFortites(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "ʔ" && word[i+1] === "j") {
            beforeglottalStopJFortites = correctionsForStrings(word.join(""));
            word[i] = "g";
            word.splice(i+1, 1);
            afterglottalStopJFortites = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeglottalStopJFortites) !== afterglottalStopJFortites) {
                afterExample = `<i>*${spell(afterglottalStopJFortites)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterglottalStopJFortites)}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeglottalStopJFortites) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeglottalStopJFortites)}</i>`
            }
            document.getElementById("glottalStopJFortites").innerHTML = `${beforeExample} > ${afterExample}`;
            
        } else if(word[i] === "ʔ" && word[i+1] === "w") {
            beforeglottalStopJFortites = correctionsForStrings(word.join(""));
            word[i] = "g";
            word.splice(i+1, 1);
            afterglottalStopJFortites = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeglottalStopJFortites) !== afterglottalStopJFortites) {
                afterExample = `<i>*${spell(afterglottalStopJFortites)}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterglottalStopJFortites)}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforeglottalStopJFortites) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(beforeglottalStopJFortites)}</i>`
            }
            document.getElementById("glottalStopJFortites").innerHTML = `${beforeExample} > ${afterExample}`;
        };
    }
    return word;
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