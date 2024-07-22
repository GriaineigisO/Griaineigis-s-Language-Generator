//@collapse
import { spell } from "./orthography.js";
import { soundChange, voiced, unvoiced, cloneChosen, vowels, consonants, selectFricatives, plosives, randomNumForWordInitialPlosiveClusters, midVowels, highVowels, randomNumForNoResonantsBeforeConsonants, resonants, randomNumForlenitionofPlosivebeforeOtherPlosive,lenitionFromPlosives2, lenitionFromPlosives1, nonHighVowels, allNasalsArray, correctionsForStrings, corrections} from "./soundchange.js";
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
    for(let i = 0; i < cloneChosen.length; i++) {
        if(cloneChosen[i].name === "wordFinalDevoicing") {
            if(soundChangeArray.includes(wordFinalDevoicing) === false) {
                soundChangeArray.push(wordFinalDevoicing);
            }
        };
        if(cloneChosen[i].name === "fricativesDebuccaliseBeforeVowels") {
            if(soundChangeArray.includes(fricativesDebuccaliseBeforeVowels) === false) {
                soundChangeArray.push(fricativesDebuccaliseBeforeVowels);
            }
        };
        if(cloneChosen[i].name === "plosivesCantClusterTogetherWordInitially") {
            if(soundChangeArray.includes(plosivesCantClusterTogetherWordInitially) === false) {
                soundChangeArray.push(plosivesCantClusterTogetherWordInitially);
            }
        };
        if(cloneChosen[i].name === "fricativesLostAfterWordInitialConsonants") {
            if(soundChangeArray.includes(fricativesLostAfterWordInitialConsonants) === false) {
                soundChangeArray.push(fricativesLostAfterWordInitialConsonants);
            }
        };
        if(cloneChosen[i].name === "wordFinalHighVowelsLower") {
            if(soundChangeArray.includes(wordFinalHighVowelsLower) === false) {
                soundChangeArray.push(wordFinalHighVowelsLower);
            }
        };
        if(cloneChosen[i].name === "NoResonantsBeforeConsonants") {
            if(soundChangeArray.includes(NoResonantsBeforeConsonants) === false) {
                soundChangeArray.push(NoResonantsBeforeConsonants);
            }
        };
        if(cloneChosen[i].name === "lenitionofPlosivebeforeOtherPlosive") {
            if(soundChangeArray.includes(lenitionofPlosivebeforeOtherPlosive) === false) {
                soundChangeArray.push(lenitionofPlosivebeforeOtherPlosive);
            }
        };
        if(cloneChosen[i].name === "nonInitialNonHighVowelsBecomeA") {
            if(soundChangeArray.includes(nonInitialNonHighVowelsBecomeA) === false) {
                soundChangeArray.push(nonInitialNonHighVowelsBecomeA);
            }
        };
        if(cloneChosen[i].name === "nasalsCantAppearAfterConsonants") {
            if(soundChangeArray.includes(nasalsCantAppearAfterConsonants) === false) {
                soundChangeArray.push(nasalsCantAppearAfterConsonants);
            }
        };
        if(cloneChosen[i].name === "vowelLostBetweenTwoOfSameConsonant") {
            if(soundChangeArray.includes(vowelLostBetweenTwoOfSameConsonant) === false) {
                soundChangeArray.push(vowelLostBetweenTwoOfSameConsonant);
            }
        };
        if(cloneChosen[i].name === "voicedConsonantsLostIntervocalically") {
            if(soundChangeArray.includes(voicedConsonantsLostIntervocalically) === false) {
                soundChangeArray.push(voicedConsonantsLostIntervocalically);
            }
        };
        if(cloneChosen[i].name === "RVCToVRCMetathesis") {
            if(soundChangeArray.includes(RVCToVRCMetathesis) === false) {
                soundChangeArray.push(RVCToVRCMetathesis);
            }
        };
        if(cloneChosen[i].name === "vowelLostBetweenConsonantAndResonant") {
            if(soundChangeArray.includes(vowelLostBetweenConsonantAndResonant) === false) {
                soundChangeArray.push(vowelLostBetweenConsonantAndResonant);
            }
        };
    }
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
            beforewordFinalDevoicing = word.join("");
            let voicedIndex = voiced.indexOf(word[word.length -1]);
            word[word.length -1] = unvoiced[voicedIndex];
            if(voiced.includes(word[word.length -2])) {
                let voicedIndex = voiced.indexOf(word[word.length -2]);
                word[word.length -2] = unvoiced[voicedIndex];
            } 
            afterwordFinalDevoicing = word.join("");
            let afterExample = "";
let originalJoined = originalWord.join("");
            if(soundChange(beforewordFinalDevoicing) !== afterwordFinalDevoicing) {
                afterExample = `<i>*${spell(correctionsForStrings(afterwordFinalDevoicing))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(correctionsForStrings(afterwordFinalDevoicing))}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforewordFinalDevoicing) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforewordFinalDevoicing))}</i>`
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
                beforeplosivesCantClusterTogetherWordInitially = word.join("");
                //let original = originalClone.join("");
                word.splice(0, 1);
                afterplosivesCantClusterTogetherWordInitially = word.join("");
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(beforeplosivesCantClusterTogetherWordInitially) !== afterplosivesCantClusterTogetherWordInitially) {
                    afterExample = `<i>*${spell(correctionsForStrings(afterplosivesCantClusterTogetherWordInitially))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
                } else {
                    afterExample = `${newName} <i>${spell(correctionsForStrings(afterplosivesCantClusterTogetherWordInitially))}</i>`
                }
                let beforeExample = "";
                if(originalJoined === beforeplosivesCantClusterTogetherWordInitially) {
                    beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
                } else {
                    beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforeplosivesCantClusterTogetherWordInitially))}</i>`
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
            beforeChangefricativesDebuccaliseBeforeVowels = word.join("");
           // //let original = originalClone.join("");
            word[i] = "h";
            afterfricativesDebuccaliseBeforeVowels = word.join("");
            let afterExample = "";
let originalJoined = originalWord.join("");
            if(soundChange(beforeChangefricativesDebuccaliseBeforeVowels) !== afterfricativesDebuccaliseBeforeVowels) {
                afterExample = `<i>*${spell(correctionsForStrings(afterfricativesDebuccaliseBeforeVowels))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(correctionsForStrings(afterfricativesDebuccaliseBeforeVowels))}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforeChangefricativesDebuccaliseBeforeVowels) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforeChangefricativesDebuccaliseBeforeVowels))}</i>`
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
        beforefricativesLostAfterWordInitialConsonants = word.join("");
        //let original = originalClone.join("");
        word.splice(1, 1);
        afterfricativesLostAfterWordInitialConsonants = word.join("");
        let afterExample = "";
        let originalJoined = originalWord.join("");
        if(soundChange(beforefricativesLostAfterWordInitialConsonants) !== afterfricativesLostAfterWordInitialConsonants) {
            afterExample = `<i>*${spell(correctionsForStrings(afterfricativesLostAfterWordInitialConsonants))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(correctionsForStrings(afterfricativesLostAfterWordInitialConsonants))}</i>`
        }
        let beforeExample = "";
        if(originalJoined === beforefricativesLostAfterWordInitialConsonants) {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforefricativesLostAfterWordInitialConsonants))}</i>`
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
        beforewordFinalHighVowelsLower = word.join("");
        word[word.length -1] = midVowels[vowelIndex];
        afterwordFinalHighVowelsLower = word.join("");
        let afterExample = "";
let originalJoined = originalWord.join("");
        if(soundChange(beforewordFinalHighVowelsLower) !== afterwordFinalHighVowelsLower) {
            afterExample = `<i>*${spell(correctionsForStrings(afterwordFinalHighVowelsLower))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(correctionsForStrings(afterwordFinalHighVowelsLower))}</i>`
        };
        let beforeExample = "";
        if(originalJoined === beforewordFinalHighVowelsLower) {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforewordFinalHighVowelsLower))}</i>`
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
    //let originalClone = cloneArray(originalWord);
    if(randomNumForNoResonantsBeforeConsonants === 0) {
    //deletes the resonant
    for(let i = 0; i < word.length; i++) {
        if(resonants.includes(word[i]) && consonants.includes(word[i + 1])) {
            beforeNoResonantsBeforeConsonants = word.join("");
            //let original = originalClone.join("");
            word.splice(i, 1);
            afterNoResonantsBeforeConsonants = word.join("");
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                afterExample = `<i>*${spell(correctionsForStrings(afterNoResonantsBeforeConsonants))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(correctionsForStrings(afterNoResonantsBeforeConsonants))}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforeNoResonantsBeforeConsonants) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforeNoResonantsBeforeConsonants))}</i>`
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
                beforeNoResonantsBeforeConsonants = word.join("");
                //let original = originalClone.join("");
                word.splice(i+1, 0, "i");
                afterNoResonantsBeforeConsonants = word.join("");
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                    afterExample = `<i>*${spell(correctionsForStrings(afterNoResonantsBeforeConsonants))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
                } else {
                    afterExample = `${newName} <i>${spell(correctionsForStrings(afterNoResonantsBeforeConsonants))}</i>`
                }
                let beforeExample = "";
                if(originalJoined === beforeNoResonantsBeforeConsonants) {
                    beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
                } else {
                    beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforeNoResonantsBeforeConsonants))}</i>`
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
            beforeNoResonantsBeforeConsonants = word.join("");
            //let original = originalClone.join("");
            word.splice(i+1, 0, "u");
            afterNoResonantsBeforeConsonants = word.join("");
            let afterExample = "";
let originalJoined = originalWord.join("");
            if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                afterExample = `<i>*${spell(correctionsForStrings(afterNoResonantsBeforeConsonants))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(correctionsForStrings(afterNoResonantsBeforeConsonants))}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforeNoResonantsBeforeConsonants) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforeNoResonantsBeforeConsonants))}</i>`
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
            beforeNoResonantsBeforeConsonants = word.join("");
            //let original = originalClone.join("");
            let resonant = word[i]; 
            let followingConsonant = word[i+1];
            word[i] = followingConsonant;
            word[i+1] = resonant;
            if(resonants.includes(word[i]) && resonants.includes(word[i + 1])) {
                word.splice(i+1, 0, "u");
            }
            afterNoResonantsBeforeConsonants = word.join("");
            let afterExample = "";
let originalJoined = originalWord.join("");
            if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                afterExample = `<i>*${spell(correctionsForStrings(afterNoResonantsBeforeConsonants))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(correctionsForStrings(afterNoResonantsBeforeConsonants))}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforeNoResonantsBeforeConsonants) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforeNoResonantsBeforeConsonants))}</i>`
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
            beforelenitionofPlosivebeforeOtherPlosive = word.join("");
            //let original = originalClone.join("");
            word[i-1] = lenitionFromPlosives1[firstPlosiveIndex];
            afterlenitionofPlosivebeforeOtherPlosive = word.join("");
            let afterExample = "";
let originalJoined = originalWord.join("");
            if(soundChange(beforelenitionofPlosivebeforeOtherPlosive) !== afterlenitionofPlosivebeforeOtherPlosive) {
                afterExample = `<i>*${spell(correctionsForStrings(afterlenitionofPlosivebeforeOtherPlosive))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(correctionsForStrings(afterlenitionofPlosivebeforeOtherPlosive))}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforelenitionofPlosivebeforeOtherPlosive) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforelenitionofPlosivebeforeOtherPlosive))}</i>`
            }

           document.getElementById("lenitionofPlosivebeforeOtherPlosive").innerHTML = `${beforeExample} > ${afterExample}`;
            
        }
    } else if(randomNumForlenitionofPlosivebeforeOtherPlosive === 1) {
        if(plosives.includes(word[i]) && plosives.includes(word[i - 1])) {
            let firstPlosiveIndex = plosives.indexOf(word[i-1])
            beforelenitionofPlosivebeforeOtherPlosive = word.join("");
            //let original = originalClone.join("");
            word[i-1] = lenitionFromPlosives2[firstPlosiveIndex]
            afterlenitionofPlosivebeforeOtherPlosive = word.join("");
            let afterExample = "";
let originalJoined = originalWord.join("");
            if(soundChange(beforelenitionofPlosivebeforeOtherPlosive) !== afterlenitionofPlosivebeforeOtherPlosive) {
                afterExample = `<i>*${spell(correctionsForStrings(afterlenitionofPlosivebeforeOtherPlosive))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(correctionsForStrings(afterlenitionofPlosivebeforeOtherPlosive))}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforelenitionofPlosivebeforeOtherPlosive) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforelenitionofPlosivebeforeOtherPlosive))}</i>`
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
            beforenonInitialNonHighVowelsBecomeA = word.join("");
            word[i] = "a";
            afternonInitialNonHighVowelsBecomeA = word.join("");
            let afterExample = "";
let originalJoined = originalWord.join("");
            if(soundChange(beforenonInitialNonHighVowelsBecomeA) !== afternonInitialNonHighVowelsBecomeA) {
                afterExample = `<i>*${spell(correctionsForStrings(afternonInitialNonHighVowelsBecomeA))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(correctionsForStrings(afternonInitialNonHighVowelsBecomeA))}</i>`
            }
            let beforeExample = "";
            if(originalJoined === beforenonInitialNonHighVowelsBecomeA) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforenonInitialNonHighVowelsBecomeA))}</i>`
            };
            if(document.getElementById("nonInitialNonHighVowelsBecomeA") !== null) {
                document.getElementById("nonInitialNonHighVowelsBecomeA").innerHTML = `${beforeExample} > ${afterExample}`;
            };
        }
        if(vowels.includes(word[i])) {
            num++;
        }
        
    
    };
    return {word};
};

let afternasalsCantAppearAfterConsonants = "";
let beforenasalsCantAppearAfterConsonants = "";
function nasalsCantAppearAfterConsonants(word, originalWord) {
    //let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
        while(consonants.includes(word[i]) && allNasalsArray.includes(word[i+1])) {
            beforenasalsCantAppearAfterConsonants = word.join("");
            //let original = originalClone.join("");
            word.splice(i+1, 0, "i");
            afternasalsCantAppearAfterConsonants = word.join("");
            let afterExample = "";
let originalJoined = originalWord.join("");
            if(soundChange(beforenasalsCantAppearAfterConsonants) !== afternasalsCantAppearAfterConsonants) {
                afterExample = `<i>*${spell(correctionsForStrings(afternasalsCantAppearAfterConsonants))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(correctionsForStrings(afternasalsCantAppearAfterConsonants))}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforenasalsCantAppearAfterConsonants) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforenasalsCantAppearAfterConsonants))}</i>`
            }
            if(document.getElementById("nasalsCantAppearAfterConsonants") !== null) {
                document.getElementById("nasalsCantAppearAfterConsonants").innerHTML = `${beforeExample} > ${afterExample}`;
            }
        }
    }
    return {word};
};

let aftervowelLostBetweenTwoOfSameConsonant = "";
let beforevowelLostBetweenTwoOfSameConsonant = "";
function vowelLostBetweenTwoOfSameConsonant(word, originalWord) {
    //let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
    if(consonants.includes(word[i-1]) && word[i-1] === word[i+1] && vowels.includes(word[i])) {
        beforevowelLostBetweenTwoOfSameConsonant = word.join("");
        //let original = originalClone.join("");
        word.splice(i, 2);
        aftervowelLostBetweenTwoOfSameConsonant = word.join("");
        let afterExample = "";
let originalJoined = originalWord.join("");
        if(soundChange(beforevowelLostBetweenTwoOfSameConsonant) !== aftervowelLostBetweenTwoOfSameConsonant) {
            afterExample = `<i>*${spell(correctionsForStrings(aftervowelLostBetweenTwoOfSameConsonant))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(correctionsForStrings(aftervowelLostBetweenTwoOfSameConsonant))}</i>`
        };
        let beforeExample = "";
        if(originalJoined === beforevowelLostBetweenTwoOfSameConsonant) {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforevowelLostBetweenTwoOfSameConsonant))}</i>`
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
        beforevoicedConsonantsLostIntervocalically = word.join("");
        //let original = originalClone.join("");
        word.splice(i, 1);
        aftervoicedConsonantsLostIntervocalically = word.join("");
        let afterExample = "";
let originalJoined = originalWord.join("");
        if(soundChange(beforevoicedConsonantsLostIntervocalically) !== aftervoicedConsonantsLostIntervocalically) {
            afterExample = `<i>*${spell(correctionsForStrings(aftervoicedConsonantsLostIntervocalically))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(correctionsForStrings(aftervoicedConsonantsLostIntervocalically))}</i>`
        };
        let beforeExample = "";
        if(originalJoined === beforevoicedConsonantsLostIntervocalically) {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforevoicedConsonantsLostIntervocalically))}</i>`
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
        beforeRVCToVRCMetathesis = word.join("");
        //let original = originalClone.join("");
        let resonant = word[0];
        let vowel = word[1];
        word[0] = vowel;
        word[1] = resonant;
        afterRVCToVRCMetathesis = word.join("");
        let afterExample = "";
let originalJoined = originalWord.join("");
        if(soundChange(beforeRVCToVRCMetathesis) !== afterRVCToVRCMetathesis) {
            afterExample = `<i>*${spell(correctionsForStrings(afterRVCToVRCMetathesis))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(correctionsForStrings(afterRVCToVRCMetathesis))}</i>`
        };
        let beforeExample = "";
        if(originalJoined === beforeRVCToVRCMetathesis) {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforeRVCToVRCMetathesis))}</i>`
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
    //let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
        if(consonants.includes(word[i]) && vowels.includes(word[i+1]) && resonants.includes(word[i+2]) && vowels.includes(word[i+3])) {
            beforevowelLostBetweenConsonantAndResonant = word.join("");
            //let original = originalClone.join("");
            word.splice(i+1,1);
            aftervowelLostBetweenConsonantAndResonant = word.join("");
            let afterExample = "";
let originalJoined = originalWord.join("");
            if(soundChange(beforevowelLostBetweenConsonantAndResonant) !== aftervowelLostBetweenConsonantAndResonant) {
                afterExample = `<i>*${spell(correctionsForStrings(aftervowelLostBetweenConsonantAndResonant))}</i> (> ${newName} <i>${spell(soundChange(originalJoined))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(correctionsForStrings(aftervowelLostBetweenConsonantAndResonant))}</i>`
            };
            let beforeExample = "";
            if(originalJoined === beforevowelLostBetweenConsonantAndResonant) {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(correctionsForStrings(originalJoined))}</i> > *<i>${spell(correctionsForStrings(beforevowelLostBetweenConsonantAndResonant))}</i>`
            }
            if(document.getElementById("vowelLostBetweenConsonantAndResonant") !== null) {
                document.getElementById("vowelLostBetweenConsonantAndResonant").innerHTML = `${beforeExample} > ${afterExample}`;
            }
        }
        if(word[i] === "X" && consonants.includes(word[i+1]) && vowels.includes(word[i+2]) && resonants.includes(word[i+3]) && vowels.includes(word[i+4])) {
            word.splice(i+2,1) 
        }
    }
    return {word, originalWord}
};

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    clearArrays();
    createAbbreviationsForLanguageName();
    populateArray();
    soundChangeExample();
};

export {soundChangeExample};