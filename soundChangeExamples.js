//@collapse
import { spell } from "./orthography.js";
import { soundChange, voiced, unvoiced, cloneChosen, vowels, consonants, selectFricatives, plosives, randomNumForWordInitialPlosiveClusters, midVowels, highVowels, randomNumForNoResonantsBeforeConsonants, resonants, randomNumForlenitionofPlosivebeforeOtherPlosive,lenitionFromPlosives2, lenitionFromPlosives1, nonHighVowels, allNasalsArray} from "./soundchange.js";
import { languageName } from "./script.js";

let soundChangeArray = [];


function clearArrays() {
    num = 0;
    soundChangeArray = [];
}

function cloneArray(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

let oldName = "";
let newName = "";
function createAbbreviationsForLanguageName() {
    let name = spell(soundChange(languageName));
    let firstLetter = name[0];
    oldName = `Old${firstLetter.toUpperCase()}`;
    newName = `${firstLetter.toUpperCase()}`;
}

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
}

let num = 0;
function soundChangeExample(word) {
    if(num > 0) {
        let before = Array.from(word);
    /*CORRECTIVE CHANGES - not genuine sound changes, just meant to tidy up the roots in the mother language. These will not be described at all in the grammar*/

       //the generated words often form doublets across syllable boundries e.g 'ga-ag' > 'gaag'. These can be confused for long vowels or long consonants which is especially unwanted if the language lacks length altogether. So these accidental doublets are removed first.
       for(let i = 0; i < before.length; i++) {
        while(before[i] === before[i + 1]) {
            before.splice(i, 1)
        } 
    }

    //since long vowels in the IPA are marked like 'iː', with ː being an extra character, this loop deletes the following long vowel if it is the same
    for(let i = 0; i < before.length; i++) {
        if(before[i + 1] === "ː" && before[i + 2] === before[i] && before[i + 3] === "ː") {
            before.splice(i+2, 1)
            before.splice(i+2, 1)
        } 
    }
    for(let i = 0; i < before.length; i++) {
        if(before[i] === "ː") {
            before[i] = before[i - 1]
        }
    }

    //prevent preaspirated consonants occuring word initially
    if(before[0] === "ʰ") {
        before.splice(0, 1);
    }
    //also remove normal /h/ word initially before plosives
    if(before[0] === "h" && plosives.includes(before[1])) {
        before.splice(0, 1);
    }
    //prevents a single sound clustering with a long sound of the same quality
    for(let i = 0; i < before.length; i++) {
        if(before[i] === "ː" && before[i-1] === before[i+1]) {
            before.splice(i+1, 1);
        }
    }
    //prevents homoorganic clusters with different voicing from clustering
    for(let i = 0; i < before.length; i++) {
        if(unvoiced.includes(before[i]) && voiced.includes(before[i + 1])) {
            let unvoicedIndex = unvoiced.indexOf(before[i])
            if(before[i + 1] === voiced[unvoicedIndex]) {
                before.splice(i, 1);
                    }          
        } else {
            for(let i = 0; i < before.length; i++) {
                if(unvoiced.includes(before[i]) && voiced.includes(before[i + 1])) {
                    let unvoicedIndex = unvoiced.indexOf(before[i])
                    if(before[i + 1] === voiced[unvoicedIndex]) {
                    before.splice(i+1, 1);
                    }
                }
            }
        }
        if(voiced.includes(before[i]) && unvoiced.includes(before[i + 1])) {
            let voicedIndex = voiced.indexOf(before[i])
            if(before[i + 1] === voiced[voicedIndex]) {
                before.splice(i, 1);
                    }          
        } else {
            for(let i = 0; i < before.length; i++) {
                if(voiced.includes(before[i]) && unvoiced.includes(before[i + 1])) {
                    let voicedIndex = voiced.indexOf(before[i])
                    if(before[i + 1] === unvoiced[voicedIndex]) {
                    before.splice(i+1, 1);
                    }
                }
            }
        }
        }
    /*^^CORRECTIVE CHANGES^^^****/

    let originalWord = before;

    for(let i = 0; i < soundChangeArray.length; i++) {
        soundChangeArray[i](before, originalWord)
    }
    }
    num++;
    return word;
}

let afterwordFinalDevoicing = "";
let beforewordFinalDevoicing = "";
function wordFinalDevoicing(word, originalWord) {
    let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
        if(voiced.includes(word[word.length -1])) {
            beforewordFinalDevoicing = word.join("");
            let original = originalWord.join("");
      
            let voicedIndex = voiced.indexOf(word[word.length -1]);
            word[word.length -1] = unvoiced[voicedIndex];
            if(voiced.includes(word[word.length -2])) {
                let voicedIndex = voiced.indexOf(word[word.length -2]);
                word[word.length -2] = unvoiced[voicedIndex];
            } 
            afterwordFinalDevoicing = word.join("");
            let afterExample = "";
            if(soundChange(beforewordFinalDevoicing) !== afterwordFinalDevoicing) {
                afterExample = `<i>*${spell(afterwordFinalDevoicing)}</i> (> ${newName} <i>${spell(soundChange(beforewordFinalDevoicing))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterwordFinalDevoicing)}</i>`
            }
            let beforeExample = "";
            if(original === beforewordFinalDevoicing) {
                beforeExample = `${oldName} <i>${spell(original)}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforewordFinalDevoicing)}</i>`
            }
            document.getElementById("wordFinalDevoicing").innerHTML = `${beforeExample} > ${afterExample}`;
                }
    } 
    
    return {word, originalClone};
}

let afterplosivesCantClusterTogetherWordInitially = "";
let beforeplosivesCantClusterTogetherWordInitially = "";
function plosivesCantClusterTogetherWordInitially(word, originalWord) {
    let originalClone = cloneArray(originalWord);
    if(randomNumForWordInitialPlosiveClusters !== 5) {
        for(let i = 0; i < word.length; i++) {
        if(plosives.includes(word[0]) && plosives.includes(word[1])) {
            beforeplosivesCantClusterTogetherWordInitially = word.join("");
            let original = originalWord.join("");
            word.splice(0, 1);
            afterplosivesCantClusterTogetherWordInitially = word.join("");
    
            let afterExample = "";
            if(soundChange(beforeplosivesCantClusterTogetherWordInitially) !== afterplosivesCantClusterTogetherWordInitially) {
                afterExample = `<i>*${spell(afterplosivesCantClusterTogetherWordInitially)}</i> (> ${newName} <i>${spell(soundChange(beforeplosivesCantClusterTogetherWordInitially))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterplosivesCantClusterTogetherWordInitially)}</i>`
            }
            let beforeExample = "";
            if(original === beforeplosivesCantClusterTogetherWordInitially) {
                beforeExample = `${oldName} <i>${spell(original)}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforeplosivesCantClusterTogetherWordInitially)}</i>`
            }

            if(document.getElementById("plosivesCantClusterTogetherWordInitially") !== null) {
                document.getElementById("plosivesCantClusterTogetherWordInitially").innerHTML = `${beforeExample} > ${afterExample}`;
            }
        }
    }
    }
    
    return {word, originalClone};
};

let afterfricativesDebuccaliseBeforeVowels = "";
let beforeChangefricativesDebuccaliseBeforeVowels = "";
function fricativesDebuccaliseBeforeVowels(word, originalWord) {
    let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
        if(selectFricatives().includes(word[i]) && vowels.includes(word[i+1])) {
            beforeChangefricativesDebuccaliseBeforeVowels = word.join("");
            let original = originalWord.join("");
            word[i] = "h";
            afterfricativesDebuccaliseBeforeVowels = word.join("");
            let afterExample = "";
            if(soundChange(beforeChangefricativesDebuccaliseBeforeVowels) !== afterfricativesDebuccaliseBeforeVowels) {
                afterExample = `<i>*${spell(afterfricativesDebuccaliseBeforeVowels)}</i> (> ${newName} <i>${spell(soundChange(beforeChangefricativesDebuccaliseBeforeVowels))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterfricativesDebuccaliseBeforeVowels)}</i>`
            }
            let beforeExample = "";
            if(original === beforeChangefricativesDebuccaliseBeforeVowels) {
                beforeExample = `${oldName} <i>${spell(original)}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforeChangefricativesDebuccaliseBeforeVowels)}</i>`
            }
            document.getElementById("fricativesDebuccaliseBeforeVowels").innerHTML = `${beforeExample} > ${afterExample}`;
                }
    }
    
    return {word, originalClone};
}

let afterfricativesLostAfterWordInitialConsonants = "";
let beforefricativesLostAfterWordInitialConsonants = "";
function fricativesLostAfterWordInitialConsonants(word, originalWord) {
    let originalClone = cloneArray(originalWord);
    if(consonants.includes(word[0]) && selectFricatives().includes(word[1])) {
        beforefricativesLostAfterWordInitialConsonants = word.join("");
        let original = originalWord.join("");
        word.splice(1, 1);
        afterfricativesLostAfterWordInitialConsonants = word.join("");
        let afterExample = "";
        if(soundChange(beforefricativesLostAfterWordInitialConsonants) !== afterfricativesLostAfterWordInitialConsonants) {
            afterExample = `<i>*${spell(afterfricativesLostAfterWordInitialConsonants)}</i> (> ${newName} <i>${spell(soundChange(beforefricativesLostAfterWordInitialConsonants))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(afterfricativesLostAfterWordInitialConsonants)}</i>`
        }
        
        let beforeExample = "";
        if(original === beforefricativesLostAfterWordInitialConsonants) {
            beforeExample = `${oldName} <i>${spell(original)}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforefricativesLostAfterWordInitialConsonants)}</i>`
        }
        if(document.getElementById("fricativesLostAfterWordInitialConsonants") !== null) {
            document.getElementById("fricativesLostAfterWordInitialConsonants").innerHTML = `${beforeExample} > ${afterExample}`;
        }
}
    if(consonants.includes(word[1]) && selectFricatives().includes(word[2]) && word[0] === "X") {
        word.splice(2, 1);
    }
    
    
    return {word, originalClone};
}

let afterwordFinalHighVowelsLower = "";
let beforewordFinalHighVowelsLower = "";
function wordFinalHighVowelsLower(word, originalWord) {
    let originalClone = cloneArray(originalWord);
    if(highVowels.includes(word[word.length -1])) {
        let vowelIndex = highVowels.indexOf(word[word.length -1]);
        beforewordFinalHighVowelsLower = word.join("");
        let original = originalWord.join("");
        word[word.length -1] = midVowels[vowelIndex];
        afterwordFinalHighVowelsLower = word.join("");
        let afterExample = "";
        if(soundChange(beforewordFinalHighVowelsLower) !== afterwordFinalHighVowelsLower) {
            afterExample = `<i>*${spell(afterwordFinalHighVowelsLower)}</i> (> ${newName} <i>${spell(soundChange(beforewordFinalHighVowelsLower))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(afterwordFinalHighVowelsLower)}</i>`
        };
        let beforeExample = "";
        if(original === beforewordFinalHighVowelsLower) {
            beforeExample = `${oldName} <i>${spell(original)}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforewordFinalHighVowelsLower)}</i>`
        }
        if(document.getElementById("wordFinalHighVowelsLower") !== null) {
            document.getElementById("wordFinalHighVowelsLower").innerHTML = `${beforeExample} > ${afterExample}`;
        }
        
    }
    
    return {word, originalClone};
}

let afterNoResonantsBeforeConsonants = "";
let beforeNoResonantsBeforeConsonants = "";
function NoResonantsBeforeConsonants(word, originalWord) {
    let originalClone = cloneArray(originalWord);
    if(randomNumForNoResonantsBeforeConsonants === 0) {
    //deletes the resonant
    for(let i = 0; i < word.length; i++) {
        if(resonants.includes(word[i]) && consonants.includes(word[i + 1])) {
            beforeNoResonantsBeforeConsonants = word.join("");
            let original = originalWord.join("");
            word.splice(i, 1);
            afterNoResonantsBeforeConsonants = word.join("");
            let afterExample = "";
            if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> ${newName} <i>${spell(soundChange(beforeNoResonantsBeforeConsonants))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterNoResonantsBeforeConsonants)}</i>`
            }
            let beforeExample = "";
            if(original === beforeNoResonantsBeforeConsonants) {
                beforeExample = `${oldName} <i>${spell(original)}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforewordFinalDevoicing)}</i>`
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
                let original = originalWord.join("");
                word.splice(i+1, 0, "i");
                afterNoResonantsBeforeConsonants = word.join("");
                let afterExample = "";
                if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                    afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> ${newName} <i>${spell(soundChange(beforeNoResonantsBeforeConsonants))}</i>)`
                } else {
                    afterExample = `${newName} <i>${spell(afterNoResonantsBeforeConsonants)}</i>`
                }
                let beforeExample = "";
                if(original === beforeNoResonantsBeforeConsonants) {
                    beforeExample = `${oldName} <i>${spell(original)}</i>`;
                } else {
                    beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforeNoResonantsBeforeConsonants)}</i>`
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
            let original = originalWord.join("");
            word.splice(i+1, 0, "u");
            afterNoResonantsBeforeConsonants = word.join("");
            let afterExample = "";
            if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> ${newName} <i>${spell(soundChange(beforeNoResonantsBeforeConsonants))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterNoResonantsBeforeConsonants)}</i>`
            }
            let beforeExample = "";
            if(original === beforeNoResonantsBeforeConsonants) {
                beforeExample = `${oldName} <i>${spell(original)}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforeNoResonantsBeforeConsonants)}</i>`
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
            let original = originalWord.join("");
            let resonant = word[i]; 
            let followingConsonant = word[i+1];
            word[i] = followingConsonant;
            word[i+1] = resonant;
            if(resonants.includes(word[i]) && resonants.includes(word[i + 1])) {
                word.splice(i+1, 0, "u");
            }
            afterNoResonantsBeforeConsonants = word.join("");
            let afterExample = "";
            if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> ${newName} <i>${spell(soundChange(beforeNoResonantsBeforeConsonants))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterNoResonantsBeforeConsonants)}</i>`
            }
            let beforeExample = "";
            if(original === beforeNoResonantsBeforeConsonants) {
                beforeExample = `${oldName} <i>${spell(original)}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforeNoResonantsBeforeConsonants)}</i>`
            }
            if(document.getElementById("NoResonantsBeforeConsonants") !== null) {
                document.getElementById("NoResonantsBeforeConsonants").innerHTML = `${beforeExample} > ${afterExample}`;
            }
                
        }
    }
    }
    
    return {word, originalClone};;
}

let afterlenitionofPlosivebeforeOtherPlosive = "";
let beforelenitionofPlosivebeforeOtherPlosive = "";
function lenitionofPlosivebeforeOtherPlosive(word, originalWord) {
    let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
    if(randomNumForlenitionofPlosivebeforeOtherPlosive === 0) {
        if(plosives.includes(word[i]) && plosives.includes(word[i - 1])) {
            let firstPlosiveIndex = plosives.indexOf(word[i-1])
            beforelenitionofPlosivebeforeOtherPlosive = word.join("");
            let original = originalWord.join("");
            word[i-1] = lenitionFromPlosives1[firstPlosiveIndex];
            afterlenitionofPlosivebeforeOtherPlosive = word.join("");
            let afterExample = "";
            if(soundChange(beforelenitionofPlosivebeforeOtherPlosive) !== afterlenitionofPlosivebeforeOtherPlosive) {
                afterExample = `<i>*${spell(afterlenitionofPlosivebeforeOtherPlosive)}</i> (> ${newName} <i>${spell(soundChange(beforelenitionofPlosivebeforeOtherPlosive))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterlenitionofPlosivebeforeOtherPlosive)}</i>`
            }
            let beforeExample = "";
            if(original === beforelenitionofPlosivebeforeOtherPlosive) {
                beforeExample = `${oldName} <i>${spell(original)}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforelenitionofPlosivebeforeOtherPlosive)}</i>`
            }
            if(document.getElementById("lenitionofPlosivebeforeOtherPlosive") !== null) {
                document.getElementById("lenitionofPlosivebeforeOtherPlosive").innerHTML = `${beforeExample} > ${afterExample}`;
            }
        }
    } else if(randomNumForlenitionofPlosivebeforeOtherPlosive === 1) {
        if(plosives.includes(word[i]) && plosives.includes(word[i - 1])) {
            let firstPlosiveIndex = plosives.indexOf(word[i-1])
            beforelenitionofPlosivebeforeOtherPlosive = word.join("");
            let original = originalWord.join("");
            word[i-1] = lenitionFromPlosives2[firstPlosiveIndex]
            afterlenitionofPlosivebeforeOtherPlosive = word.join("");
            let afterExample = "";
            if(soundChange(beforelenitionofPlosivebeforeOtherPlosive) !== afterlenitionofPlosivebeforeOtherPlosive) {
                afterExample = `<i>*${spell(afterlenitionofPlosivebeforeOtherPlosive)}</i> (> ${newName} <i>${spell(soundChange(beforelenitionofPlosivebeforeOtherPlosive))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afterlenitionofPlosivebeforeOtherPlosive)}</i>`
            }
            let beforeExample = "";
            if(original === beforelenitionofPlosivebeforeOtherPlosive) {
                beforeExample = `${oldName} <i>${spell(original)}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforelenitionofPlosivebeforeOtherPlosive)}</i>`
            }
            if(document.getElementById("lenitionofPlosivebeforeOtherPlosive") !== null) {
                document.getElementById("lenitionofPlosivebeforeOtherPlosive").innerHTML = `${beforeExample} > ${afterExample}`;
            }
        }
    } 
    }
    
    return {word, originalClone};;
}

let afternonInitialNonHighVowelsBecomeA = "";
let beforenonInitialNonHighVowelsBecomeA = "";
function nonInitialNonHighVowelsBecomeA(word, originalWord) {
    let originalClone = cloneArray(originalWord);
    let num = 0;
    let original = "";
        for(let i = 0; i < word.length; i++) {
            if(nonHighVowels.includes(word[i]) && num !== 0) {
                beforenonInitialNonHighVowelsBecomeA = word.join("");
                original = originalWord.join("");
                word[i] = "a";
                afternonInitialNonHighVowelsBecomeA = word.join("");
            }
            if(vowels.includes(word[i])) {
                num++;
            }
            let afterExample = "";
            if(soundChange(beforenonInitialNonHighVowelsBecomeA) !== afternonInitialNonHighVowelsBecomeA) {
                afterExample = `<i>*${spell(afternonInitialNonHighVowelsBecomeA)}</i> (> ${newName} <i>${spell(soundChange(beforenonInitialNonHighVowelsBecomeA))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afternonInitialNonHighVowelsBecomeA)}</i>`
            }
            let beforeExample = "";
            if(original === beforenonInitialNonHighVowelsBecomeA) {
                beforeExample = `${oldName} <i>${spell(original)}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforenonInitialNonHighVowelsBecomeA)}</i>`
            }
            if(document.getElementById("nonInitialNonHighVowelsBecomeA") !== null) {
                document.getElementById("nonInitialNonHighVowelsBecomeA").innerHTML = `${beforeExample} > ${afterExample}`;
            };
        }
    
    
    return {word, originalClone};;
}

let afternasalsCantAppearAfterConsonants = "";
let beforenasalsCantAppearAfterConsonants = "";
function nasalsCantAppearAfterConsonants(word, originalWord) {
    let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
        if(consonants.includes(word[i]) && allNasalsArray.includes(word[i+1])) {
            beforenasalsCantAppearAfterConsonants = word.join("");
            let original = originalWord.join("");
            word.splice(i+1, 0, "i");
            afternasalsCantAppearAfterConsonants = word.join("");
            let afterExample = "";
            if(soundChange(beforenasalsCantAppearAfterConsonants) !== afternasalsCantAppearAfterConsonants) {
                afterExample = `<i>*${spell(afternasalsCantAppearAfterConsonants)}</i> (> ${newName} <i>${spell(soundChange(beforenasalsCantAppearAfterConsonants))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(afternasalsCantAppearAfterConsonants)}</i>`
            };
            let beforeExample = "";
            if(original === beforenasalsCantAppearAfterConsonants) {
                beforeExample = `${oldName} <i>${spell(original)}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforenasalsCantAppearAfterConsonants)}</i>`
            }
            if(document.getElementById("nasalsCantAppearAfterConsonants") !== null) {
                document.getElementById("nasalsCantAppearAfterConsonants").innerHTML = `${beforeExample} > ${afterExample}`;
            }
        }
}

    return {word, originalClone};
};

let aftervowelLostBetweenTwoOfSameConsonant = "";
let beforevowelLostBetweenTwoOfSameConsonant = "";
function vowelLostBetweenTwoOfSameConsonant(word, originalWord) {
    let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
    if(consonants.includes(word[i-1]) && word[i-1] === word[i+1] && vowels.includes(word[i])) {
        beforevowelLostBetweenTwoOfSameConsonant = word.join("");
        let original = originalWord.join("");
        word.splice(i, 1);
        aftervowelLostBetweenTwoOfSameConsonant = word.join("");
        let afterExample = "";
        if(soundChange(beforevowelLostBetweenTwoOfSameConsonant) !== aftervowelLostBetweenTwoOfSameConsonant) {
            afterExample = `<i>*${spell(aftervowelLostBetweenTwoOfSameConsonant)}</i> (> ${newName} <i>${spell(soundChange(beforevowelLostBetweenTwoOfSameConsonant))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(aftervowelLostBetweenTwoOfSameConsonant)}</i>`
        };
        let beforeExample = "";
        if(original === beforevowelLostBetweenTwoOfSameConsonant) {
            beforeExample = `${oldName} <i>${spell(original)}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforevowelLostBetweenTwoOfSameConsonant)}</i>`
        }
        if(document.getElementById("vowelLostBetweenTwoOfSameConsonant") !== null) {
            document.getElementById("vowelLostBetweenTwoOfSameConsonant").innerHTML = `${beforeExample} > ${afterExample}`;
        }
    }
    }
    return {word, originalClone}
}

let aftervoicedConsonantsLostIntervocalically = "";
let beforevoicedConsonantsLostIntervocalically = "";
function voicedConsonantsLostIntervocalically(word, originalWord) {
    let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
        while(vowels.includes(word[i-1]) && vowels.includes(word[i+1]) && voiced.includes(word[i]) ||
         vowels.includes(word[i-2]) && vowels.includes(word[i+2]) && word[i-1] === "ː" && word[i+1] === "ː" && voiced.includes(word[i]) || 
         vowels.includes(word[i-1]) && word[i+1] === "ː" && voiced.includes(word[i]) ||
         vowels.includes(word[i+1]) && word[i-1] === "ː" && voiced.includes(word[i])
        ) {
        beforevoicedConsonantsLostIntervocalically = word.join("");
        let original = originalWord.join("");
        word.splice(i, 1);
        aftervoicedConsonantsLostIntervocalically = word.join("");
        let afterExample = "";
        if(soundChange(beforevoicedConsonantsLostIntervocalically) !== aftervoicedConsonantsLostIntervocalically) {
            afterExample = `<i>*${spell(aftervoicedConsonantsLostIntervocalically)}</i> (> ${newName} <i>${spell(soundChange(beforevoicedConsonantsLostIntervocalically))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(aftervoicedConsonantsLostIntervocalically)}</i>`
        };
        let beforeExample = "";
        if(original === beforevoicedConsonantsLostIntervocalically) {
            beforeExample = `${oldName} <i>${spell(original)}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforevoicedConsonantsLostIntervocalically)}</i>`
        }
        if(document.getElementById("voicedConsonantsLostIntervocalically") !== null) {
            document.getElementById("voicedConsonantsLostIntervocalically").innerHTML = `${beforeExample} > ${afterExample}`;
        }
        }
    }
    return {word, originalClone}
};

let afterRVCToVRCMetathesis = "";
let beforeRVCToVRCMetathesis = "";
function RVCToVRCMetathesis(word, originalWord) {
    let originalClone = cloneArray(originalWord);
    if(resonants.includes(word[0]) && vowels.includes(word[1]) && consonants.includes(word[2])) {
        beforeRVCToVRCMetathesis = word.join("");
        let original = originalWord.join("");
        let resonant = word[0];
        let vowel = word[1];
        word[0] = vowel;
        word[1] = resonant;
        afterRVCToVRCMetathesis = word.join("");
        let afterExample = "";
        if(soundChange(beforeRVCToVRCMetathesis) !== afterRVCToVRCMetathesis) {
            afterExample = `<i>*${spell(afterRVCToVRCMetathesis)}</i> (> ${newName} <i>${spell(soundChange(beforeRVCToVRCMetathesis))}</i>)`
        } else {
            afterExample = `${newName} <i>${spell(afterRVCToVRCMetathesis)}</i>`
        };
        let beforeExample = "";
        if(original === beforeRVCToVRCMetathesis) {
            beforeExample = `${oldName} <i>${spell(original)}</i>`;
        } else {
            beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforeRVCToVRCMetathesis)}</i>`
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
    return {word, originalClone}
};

let aftervowelLostBetweenConsonantAndResonant = "";
let beforevowelLostBetweenConsonantAndResonant = "";
function vowelLostBetweenConsonantAndResonant(word, originalWord) {
    let originalClone = cloneArray(originalWord);
    for(let i = 0; i < word.length; i++) {
        if(consonants.includes(word[i]) && vowels.includes(word[i+1]) && resonants.includes(word[i+2]) && vowels.includes(word[i+3])) {
            beforevowelLostBetweenConsonantAndResonant = word.join("");
            let original = originalWord.join("");
            word.splice(i+1,1);
            aftervowelLostBetweenConsonantAndResonant = word.join("");
            let afterExample = "";
            if(soundChange(beforevowelLostBetweenConsonantAndResonant) !== aftervowelLostBetweenConsonantAndResonant) {
                afterExample = `<i>*${spell(aftervowelLostBetweenConsonantAndResonant)}</i> (> ${newName} <i>${spell(soundChange(beforevowelLostBetweenConsonantAndResonant))}</i>)`
            } else {
                afterExample = `${newName} <i>${spell(aftervowelLostBetweenConsonantAndResonant)}</i>`
            };
            let beforeExample = "";
            if(original === beforevowelLostBetweenConsonantAndResonant) {
                beforeExample = `${oldName} <i>${spell(original)}</i>`;
            } else {
                beforeExample = `${oldName} <i>${spell(original)}</i> > *<i>${spell(beforevowelLostBetweenConsonantAndResonant)}</i>`
            }
            if(document.getElementById("vowelLostBetweenConsonantAndResonant") !== null) {
                document.getElementById("vowelLostBetweenConsonantAndResonant").innerHTML = `${beforeExample} > ${afterExample}`;
            }
        }
        if(word[i] === "X" && consonants.includes(word[i+1]) && vowels.includes(word[i+2]) && resonants.includes(word[i+3]) && vowels.includes(word[i+4])) {
            word.splice(i+2,1) 
        }
    }
    return {word, originalClone}
}

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    clearArrays();
    createAbbreviationsForLanguageName();
    populateArray();
    soundChangeExample();
}

export {soundChangeExample}