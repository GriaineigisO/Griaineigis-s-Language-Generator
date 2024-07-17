import { genderNum, markedSingularOrNot, generatedCountNouns, countNounArrayPlural, countNounArray, numberSuffixOrPrefix, pluralAffix, singularAffix, dualAffix, collectiveAffix, chooseTypology, checkIfHeadInitialOrHeadFinal, suffixOrPrefix} from './script.js';
import {spell} from './orthography.js'
import {soundChange} from './soundchange.js'

let grammaticalNumberArray = [];
let chosenNounCases = [];

function clearArrays() {
    grammaticalNumberArray = [];
    chosenNounCases = [];
}

let caseNumber = 0;
function chooseCases() {
    caseNumber = 0//Math.floor(Math.random() * 11)
    //there will be no cases if language is isolating
    if(chooseTypology() !== "isolating") {
        //decides if the language has cases or not
        if(caseNumber !== 0) {
            const randomNum = Math.floor(Math.random() * 8);
            if(randomNum <= 4) {
                chosenNounCases.push("Nominative");
                chosenNounCases.push("Accusative");
                chosenNounCases.push("Genitive");
                chosenNounCases.push("Dative");
                }
            if(randomNum > 4) {
                chosenNounCases.push("Nominative");
                chosenNounCases.push("Accusative");
                chosenNounCases.push("Genitive");
                chosenNounCases.push("Dative");
                //chooses additional cases
                const randomCase = Math.floor(Math.random() * nounCases.length);
                while(chosenNounCases.length < Math.floor(Math.random() * 15) + 4) {
                    chosenNounCases.push(nounCases[Math.floor(Math.random() * nounCases.length)])
                }       
            }   
        }
    }
}

function markedSingular() {
    let markedSingularExplanation = document.getElementsByClassName("marked-singular");
    if(markedSingularOrNot()) {
        for(let i = 0; i < markedSingularExplanation.length; i++) {
            markedSingularExplanation[i].style.display = "inline";
        }
    } else {
        for(let i = 0; i < markedSingularExplanation.length; i++) {
            markedSingularExplanation[i].style.display = "none";
        }
    }
}

function makeSingular(noun) {
    let singularNoun = "";
    if(numberSuffixOrPrefix === "suffix") {
        singularNoun = noun + singularAffix;
    } else {
        singularNoun = singularAffix + noun;
    }
    return singularNoun;
}

function makePlural(noun) {
    let pluralNoun = "";
    if(numberSuffixOrPrefix === "suffix") {
        pluralNoun = noun + pluralAffix;
    } else {
        pluralNoun = pluralAffix + noun;
    }
    return pluralNoun;
}

function makeDual(noun) {
    let dualNoun = "";
    if(numberSuffixOrPrefix === "suffix") {
        dualNoun = noun + dualAffix;
    } else {
        dualNoun = dualAffix + noun;
    }
    return dualNoun;
}

function makeCollective(noun) {
    let collectiveNoun = "";
    if(numberSuffixOrPrefix === "suffix") {
        collectiveNoun = noun + collectiveAffix;
    } else {
        collectiveNoun = collectiveAffix + noun;
    }
    return collectiveNoun;
}

let grammaticalNumber = 0;
function determineGrammaticalNumber() {
    let grammaticalNumber = 6//Math.floor(Math.random() * 31);
    if(grammaticalNumber < 4) {
        document.getElementById("fusional-no-gender-singular-plural").style.display = "block";
        return "singular-plural";
    };
    if(grammaticalNumber >= 5 && grammaticalNumber < 7) {
        document.getElementById("fusional-no-gender-singular-dual-plural").style.display = "block";
        return "singular-dual-plural";
    };
    if(grammaticalNumber >= 7 && grammaticalNumber < 12) {
        document.getElementById("fusional-no-gender-singular-dual-plural-collective").style.display = "block";
        return "singular-dual-plural-collective";
    };
    if(grammaticalNumber >= 12 && grammaticalNumber < 15) {
        document.getElementById("fusional-no-gender-singular-dual-trial-plural").style.display = "block";
        return "singular-dual-trial-plural";
    };
    if(grammaticalNumber >= 15 && grammaticalNumber < 18) {
        document.getElementById("fusional-no-gender-singular-dual-trial-quadral-plural").style.display = "block";
        return "singular-dual-trial-quadral-plural";
    };
    if(grammaticalNumber >= 18 && grammaticalNumber < 21) {
        return "singular-plural-greater-plural";
    };
    if(grammaticalNumber >= 21 && grammaticalNumber < 24) {
        return "singular-plural-general";
    };
    if(grammaticalNumber >= 24 && grammaticalNumber < 27) {
        return "general-plural";
    };
    if(grammaticalNumber >= 27 && grammaticalNumber < 30) {
        return "general-singulative-plural";
    };
}


function makeNoGenderNumberExamples() {
    let exampleArray = [];
    let joinedArray = "";
    if(determineGrammaticalNumber() === "singular-plural"){
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }   
        }
        joinedArray = exampleArray.join(", ");
        document.getElementById("fusional-sg-pl-examples").innerHTML = joinedArray;
    }

    if(determineGrammaticalNumber() === "singular-dual-plural") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<br><i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-sg-dual-pl-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "singular-dual-plural-collective") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeCollective(generatedCountNouns[randomNumForExamples])))}</i> "all ${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<br><i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}",  <i>${spell(soundChange(makeCollective(generatedCountNouns[randomNumForExamples])))}</i> "all ${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-sg-dual-pl-collective-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "singular-dual-trial-plural") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeCollective(generatedCountNouns[randomNumForExamples])))}</i> "all ${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<br><i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}",  <i>${spell(soundChange(makeCollective(generatedCountNouns[randomNumForExamples])))}</i> "all ${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-sg-dual-trial-pl-examples").innerHTML = joinedArray;
    }
}


let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    clearArrays();
    chooseCases();
    markedSingular();
    determineGrammaticalNumber();
    makeNoGenderNumberExamples();
   
}