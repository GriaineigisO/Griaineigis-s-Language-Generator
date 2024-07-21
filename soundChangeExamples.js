import { spell } from "./orthography.js";
import { soundChange, voiced, unvoiced, cloneChosen, vowels, consonants, selectFricatives, plosives, randomNumForWordInitialPlosiveClusters, midVowels, highVowels, randomNumForNoResonantsBeforeConsonants, resonants } from "./soundchange.js";

let soundChangeArray = [];

let num = 0;
function clearArrays() {
    num = 0;
    soundChangeArray = [];
}

function populateArray() {
    for(let i = 0; i < cloneChosen.length; i++) {
       console.log(cloneChosen[i].name)
        if(cloneChosen[i].name === "wordFinalDevoicing") {
            if(soundChangeArray.includes(wordFinalDevoicing) === false) {
                soundChangeArray.push(wordFinalDevoicing);
            }
        }
        if(cloneChosen[i].name === "fricativesDebuccaliseBeforeVowels") {
            if(soundChangeArray.includes(fricativesDebuccaliseBeforeVowels) === false) {
                soundChangeArray.push(fricativesDebuccaliseBeforeVowels);
            }
        }
        if(cloneChosen[i].name === "plosivesCantClusterTogetherWordInitially") {
            if(soundChangeArray.includes(plosivesCantClusterTogetherWordInitially) === false) {
                soundChangeArray.push(plosivesCantClusterTogetherWordInitially);
            }
        }
        if(cloneChosen[i].name === "fricativesLostAfterWordInitialConsonants") {
            if(soundChangeArray.includes(fricativesLostAfterWordInitialConsonants) === false) {
                soundChangeArray.push(fricativesLostAfterWordInitialConsonants);
            }
        }
        if(cloneChosen[i].name === "wordFinalHighVowelsLower") {
            if(soundChangeArray.includes(wordFinalHighVowelsLower) === false) {
                soundChangeArray.push(wordFinalHighVowelsLower);
            }
        }
        if(cloneChosen[i].name === "NoResonantsBeforeConsonants") {
            if(soundChangeArray.includes(NoResonantsBeforeConsonants) === false) {
                soundChangeArray.push(NoResonantsBeforeConsonants);
            }
        }

        console.log(soundChangeArray)
    }
}

function soundChangeExample(word) {
    if(num > 0) {
        let before = word;
        for(let i = 0; i < soundChangeArray.length; i++) {
            soundChangeArray[i](before)
        }
    }
    num++;
    return word;
}


let afterwordFinalDevoicing = "";
let beforewordFinalDevoicing = "";
function wordFinalDevoicing(word) {
    let array = Array.from(word);
    for(let i = 0; i < array.length; i++) {
        if(voiced.includes(array[array.length -1])) {
            beforewordFinalDevoicing = array.join("");
            let voicedIndex = voiced.indexOf(array[array.length -1]);
            array[array.length -1] = unvoiced[voicedIndex];
            if(voiced.includes(array[array.length -2])) {
                let voicedIndex = voiced.indexOf(array[array.length -2]);
                array[array.length -2] = unvoiced[voicedIndex];
            } 
            afterwordFinalDevoicing = array.join("");
        }
    }
    let afterExample = "";
    if(soundChange(beforewordFinalDevoicing) !== afterwordFinalDevoicing) {
        afterExample = `<i>*${spell(afterwordFinalDevoicing)}</i> (> <i>${spell(soundChange(beforewordFinalDevoicing))}</i>)`
    } else {
        afterExample = `<i>${spell(afterwordFinalDevoicing)}</i>`
    }

    document.getElementById("wordFinalDevoicing").innerHTML = `<i>${spell(beforewordFinalDevoicing)}</i> > ${afterExample}`;
    word = array.join("");
    return word
}

let afterplosivesCantClusterTogetherWordInitially = "";
let beforeplosivesCantClusterTogetherWordInitially = "";
function plosivesCantClusterTogetherWordInitially(word) {
    let array = Array.from(word);
    if(randomNumForWordInitialPlosiveClusters !== 5) {
        for(let i = 0; i < array.length; i++) {
        if(plosives.includes(array[0]) && plosives.includes(array[1])) {
            beforeplosivesCantClusterTogetherWordInitially = array.join("");
            array.splice(0, 1);
            afterplosivesCantClusterTogetherWordInitially = array.join("");
    
            let afterExample = "";
            if(soundChange(beforeplosivesCantClusterTogetherWordInitially) !== afterplosivesCantClusterTogetherWordInitially) {
                afterExample = `<i>*${spell(afterplosivesCantClusterTogetherWordInitially)}</i> (> <i>${spell(soundChange(beforeplosivesCantClusterTogetherWordInitially))}</i>)`
            } else {
                afterExample = `<i>${spell(afterplosivesCantClusterTogetherWordInitially)}</i>`
            }

            document.getElementById("plosivesCantClusterTogetherWordInitially").innerHTML = `<i>${spell(beforeplosivesCantClusterTogetherWordInitially)}</i> > ${afterExample}`;
        }
    }
    }
    word = array.join("");
    return word
};

let afterfricativesDebuccaliseBeforeVowels = "";
let beforeChangefricativesDebuccaliseBeforeVowels = "";
function fricativesDebuccaliseBeforeVowels(word) {
    let array = Array.from(word);
    for(let i = 0; i < array.length; i++) {
        if(selectFricatives().includes(array[i]) && vowels.includes(array[i+1])) {
            beforeChangefricativesDebuccaliseBeforeVowels = array.join("");
            array[i] = "h";
            afterfricativesDebuccaliseBeforeVowels = array.join("");
        }
    }

    let afterExample = "";
    if(soundChange(beforeChangefricativesDebuccaliseBeforeVowels) !== afterfricativesDebuccaliseBeforeVowels) {
        afterExample = `<i>*${spell(afterfricativesDebuccaliseBeforeVowels)}</i> (> <i>${spell(soundChange(beforeChangefricativesDebuccaliseBeforeVowels))}</i>)`
    } else {
        afterExample = `<i>${spell(afterfricativesDebuccaliseBeforeVowels)}</i>`
    }

    document.getElementById("fricativesDebuccaliseBeforeVowels").innerHTML = `<i>${spell(beforeChangefricativesDebuccaliseBeforeVowels)}</i> > ${afterExample}`;
    word = array.join("");
    return word
}

let afterfricativesLostAfterWordInitialConsonants = "";
let beforefricativesLostAfterWordInitialConsonants = "";
function fricativesLostAfterWordInitialConsonants(word) {
    let array = Array.from(word)
    if(consonants.includes(array[0]) && selectFricatives().includes(array[1])) {
        beforefricativesLostAfterWordInitialConsonants = array.join("");
        array.splice(1, 1);
        afterfricativesLostAfterWordInitialConsonants = array.join("");

        let afterExample = "";
            if(soundChange(beforefricativesLostAfterWordInitialConsonants) !== afterfricativesLostAfterWordInitialConsonants) {
                afterExample = `<i>*${spell(afterfricativesLostAfterWordInitialConsonants)}</i> (> <i>${spell(soundChange(beforefricativesLostAfterWordInitialConsonants))}</i>)`
            } else {
                afterExample = `<i>${spell(afterfricativesLostAfterWordInitialConsonants)}</i>`
            }
            if(document.getElementById("fricativesLostAfterWordInitialConsonants").length > 0) {
                document.getElementById("fricativesLostAfterWordInitialConsonants").innerHTML = `<i>${spell(beforefricativesLostAfterWordInitialConsonants)}</i> > ${afterExample}`;
            }
    }
    if(consonants.includes(array[1]) && selectFricatives().includes(array[2]) && array[0] === "X") {
        array.splice(2, 1);
    }
    word = array.join("");
    return word
}

let afterwordFinalHighVowelsLower = "";
let beforewordFinalHighVowelsLower = "";
function wordFinalHighVowelsLower(word) {
    let array = Array.from(word)
    if(highVowels.includes(array[array.length -1])) {
        let vowelIndex = highVowels.indexOf(array[array.length -1]);
        beforewordFinalHighVowelsLower = array.join("")
        array[array.length -1] = midVowels[vowelIndex];
        afterwordFinalHighVowelsLower = array.join("");

        let afterExample = "";
        if(soundChange(beforewordFinalHighVowelsLower) !== afterwordFinalHighVowelsLower) {
            afterExample = `<i>*${spell(afterwordFinalHighVowelsLower)}</i> (> <i>${spell(soundChange(beforewordFinalHighVowelsLower))}</i>)`
        } else {
            afterExample = `<i>${spell(afterwordFinalHighVowelsLower)}</i>`
        }
        if(document.getElementById("wordFinalHighVowelsLower") !== null) {
            document.getElementById("wordFinalHighVowelsLower").innerHTML = `<i>${spell(beforewordFinalHighVowelsLower)}</i> > ${afterExample}`;
        }
        
    }
    word = array.join("");
    return word
}

let afterNoResonantsBeforeConsonants = "";
let beforeNoResonantsBeforeConsonants = "";
function NoResonantsBeforeConsonants(word) {
    let array = Array.from(word);
    if(randomNumForNoResonantsBeforeConsonants === 0) {
    //deletes the resonant
    for(let i = 0; i < array.length; i++) {
        if(resonants.includes(array[i]) && consonants.includes(array[i + 1])) {
            beforeNoResonantsBeforeConsonants = array.join("");
            array.splice(i, 1);
            afterNoResonantsBeforeConsonants = array.join("");
            let afterExample = "";
            if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> <i>${spell(soundChange(beforeNoResonantsBeforeConsonants))}</i>)`
            } else {
                afterExample = `<i>${spell(afterNoResonantsBeforeConsonants)}</i>`
            }
            if(document.getElementById("NoResonantsBeforeConsonants") !== null) {
                document.getElementById("NoResonantsBeforeConsonants").innerHTML = `<i>${spell(beforeNoResonantsBeforeConsonants)}</i> > ${afterExample}`;
            }
            
        } 
    } 
    } 

    if(randomNumForNoResonantsBeforeConsonants === 1) {
    //inserts /i/ between resonant and consonant
        for(let i = 0; i < array.length; i++) {
            if(resonants.includes(array[i]) && consonants.includes(array[i + 1])) {
                beforeNoResonantsBeforeConsonants = array.join("");
                array.splice(i+1, 0, "i");
                afterNoResonantsBeforeConsonants = array.join("");
                let afterExample = "";
                if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                    afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> <i>${spell(soundChange(beforeNoResonantsBeforeConsonants))}</i>)`
                } else {
                    afterExample = `<i>${spell(afterNoResonantsBeforeConsonants)}</i>`
                }
                if(document.getElementById("NoResonantsBeforeConsonants") !== null) {
                    document.getElementById("NoResonantsBeforeConsonants").innerHTML = `<i>${spell(beforeNoResonantsBeforeConsonants)}</i> > ${afterExample}`;
                }
                
            } 
        }
    }
    if(randomNumForNoResonantsBeforeConsonants === 2) {
    //inserts /u/ between resonant and consonant
    for(let i = 0; i < array.length; i++) {
        if(resonants.includes(array[i]) && consonants.includes(array[i + 1])) {
            beforeNoResonantsBeforeConsonants = array.join("");
            array.splice(i+1, 0, "u");
            afterNoResonantsBeforeConsonants = array.join("");
            let afterExample = "";
                if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                    afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> <i>${spell(soundChange(beforeNoResonantsBeforeConsonants))}</i>)`
                } else {
                    afterExample = `<i>${spell(afterNoResonantsBeforeConsonants)}</i>`
                }
                if(document.getElementById("NoResonantsBeforeConsonants") !== null) {
                    document.getElementById("NoResonantsBeforeConsonants").innerHTML = `<i>${spell(beforeNoResonantsBeforeConsonants)}</i> > ${afterExample}`;
                }
                
                
                
            }
            
        }
    }
    

    if(randomNumForNoResonantsBeforeConsonants === 3) {
    //the resonant and consonant switch places
    for(let i = 0; i < array.length; i++) {
        if(resonants.includes(array[i]) && consonants.includes(array[i + 1])) {
            beforeNoResonantsBeforeConsonants = array.join("");
            let resonant = array[i]; 
            let followingConsonant = array[i+1];
            array[i] = followingConsonant;
            array[i+1] = resonant;
            if(resonants.includes(array[i]) && resonants.includes(array[i + 1])) {
                array.splice(i+1, 0, "u");
            }
            afterNoResonantsBeforeConsonants = array.join("");
            let afterExample = "";
                if(soundChange(beforeNoResonantsBeforeConsonants) !== afterNoResonantsBeforeConsonants) {
                    afterExample = `<i>*${spell(afterNoResonantsBeforeConsonants)}</i> (> <i>${spell(soundChange(beforeNoResonantsBeforeConsonants))}</i>)`
                } else {
                    afterExample = `<i>${spell(afterNoResonantsBeforeConsonants)}</i>`
                }
                document.getElementById("NoResonantsBeforeConsonants").innerHTML = `<i>${spell(beforeNoResonantsBeforeConsonants)}</i> > ${afterExample}`;
        }
    }
    }

    word = array.join("")
    return word;
}

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    clearArrays();
    populateArray();
    soundChangeExample();
}

export {soundChangeExample}