import { genderNum, markedSingularOrNot, generatedCountNouns, countNounArrayPlural, countNounArray, generatedMassNouns, massNounArray, pluralSingulativeMassNounArray, singulativeMassNounArray, numberSuffixOrPrefix, pluralAffix, singularAffix, dualAffix, collectiveAffix, trialAffix, quadralAffix, generalAffix, greaterPluralAffix, singulativeAffix, chooseTypology, checkIfHeadInitialOrHeadFinal, suffixOrPrefix, nominativeAffix, accusativeAffix, genitiveAffix, dativeAffix, generateAffixes, typologyNum} from './script.js';
import {spell} from './orthography.js'
import {soundChange} from './soundchange.js'
import { soundChangeExample } from './soundChangeExamples.js';
import nounCases from './allPossibleNounCases.js';
import { consonants, vowels } from './generatePhonology.js';
let grammaticalNumberArray = [];
let chosenNounCases = [];

function clearArrays() {
    grammaticalNumberArray = [];
    chosenNounCases = [];

    document.getElementById("fusional-no-gender-case-explanation").replaceChildren();
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

function inflectNouns(noun, affix) {
    let inflectedNoun = "";
    if(numberSuffixOrPrefix === "suffix") {
        inflectedNoun = noun + affix;
    } else {
        inflectedNoun = affix + noun;
    }
    return inflectedNoun;
}

function makeSingular(noun) {
    return inflectNouns(noun, singularAffix);
}

function makePlural(noun) {
    return inflectNouns(noun, pluralAffix);
}

function makeDual(noun) {
    return inflectNouns(noun, dualAffix);
}

function makeTrial(noun) {
    return inflectNouns(noun, trialAffix);
}

function makeQuadral(noun) {
    return inflectNouns(noun, quadralAffix);
}

function makeCollective(noun) {
    return inflectNouns(noun, collectiveAffix);
}

function makeGreaterPlural(noun) {
    return inflectNouns(noun, greaterPluralAffixAffix);
}

function makeGeneral(noun) {
    return inflectNouns(noun, generalAffix);
}

function makeSingulative(noun) {
    return inflectNouns(noun, singulativeAffix);
}

let randomAffixOrderNum = Math.floor(Math.random() * 2)
function determineWhichAffixGoesFirst() {
    if(randomAffixOrderNum === 0) {
        return "affix1First";
    } else {
        return "affix2First";
    }
}

//this function may fuse two affixes together, or simply replace a mix of the two with a completely new generated affix
function makeFusionalAffixes(affix1, affix2) {
    let fusedAffix = "";
    
    if(determineWhichAffixGoesFirst() === "affix1First") {
        fusedAffix = affix1 + affix2;
    } else {
        fusedAffix = affix2 + affix1;
    }

    //the following options will change the combination of the two affixes, to make them appear fused
    if(Math.floor(Math.random() * 3) !== 1) {
        if(fusedAffix.length > 3) {
            let randomIndex = Math.floor(Math.random() * fusedAffix.length) + 1;
            let newArray = Array.from(fusedAffix);
            for(let i = 0; i < 2; i++) {
                newArray.splice(randomIndex, 1);
            }
            let joinedStr = newArray.join("");
            fusedAffix = joinedStr;
        }
    }
    if(Math.floor(Math.random() * 3) !== 1) {
        let newArray = Array.from(fusedAffix);
        for(let i = 0; i < newArray.length; i++) {
            if(consonants.includes(newArray[i]) && consonants.includes(newArray[i + 1])) {
                newArray.splice(i, 1);
            }
        }
        let joinedStr = newArray.join("");
        fusedAffix = joinedStr;
    }
    if(Math.floor(Math.random() * 3) !== 1) {
        let newArray = Array.from(fusedAffix);
        if(consonants.includes(newArray[0]) && consonants.includes(newArray[2]) && vowels.includes(newArray[1])) {
            newArray.splice(1, 1);
        }
        let joinedStr = newArray.join("");
        fusedAffix = joinedStr;
    }
    if(Math.floor(Math.random() * 3) !== 1) {
        let newArray = Array.from(fusedAffix);
        for(let i = 0; i < newArray.length; i++) {
            if(vowels.includes(newArray[i]) && vowels.includes(newArray[i + 1])) {
                if(Math.floor(Math.random() * 2) === 0) {
                    newArray.splice(i, 1);
                    newArray[i + 1] = newArray[i + 1] = "ː";
                } else {
                    newArray.splice(i+1, 1);
                    newArray[i] = newArray[i + 1] = "ː";
                }
            }
        }
        let joinedStr = newArray.join("");
        fusedAffix = joinedStr;
    }
    if(fusedAffix.length >= 4) {
        let newArray = Array.from(fusedAffix);
        newArray.splice(1, 2);
        let joinedStr = newArray.join("");
        fusedAffix = joinedStr;
    }

    //doesn't fuse two pre-existing affixes, just replaces both with a new affix
    if(Math.floor(Math.random() * 11) === 3) {
        fusedAffix = generateAffixes();
    } 
    return fusedAffix;
}

//bases locative cases on the genitive case
function buildLocativeCaseOnGenitive() {
    let builtOnGenitive = makeFusionalAffixes(genitiveAffix, generateAffixes());
    return builtOnGenitive;
}

let locativeAffix = "";
let ablativeAffix = "";
let delativeAffix = "";
let inessiveAffix = "";
let instrumentalAffix = "";
let allativeAffix = ""; 
function makeLocativeCaseAffixes() {
    ablativeAffix = buildLocativeCaseOnGenitive();
    inessiveAffix = buildLocativeCaseOnGenitive();
    locativeAffix = buildLocativeCaseOnGenitive();
    delativeAffix = buildLocativeCaseOnGenitive();
    allativeAffix = buildLocativeCaseOnGenitive();
    instrumentalAffix = buildLocativeCaseOnGenitive();
}

let nomSgAffix = "";
let nomPlAffix = "";
let nomDualAffix = "";
let accSgAffix = "";
let accDualAffix = "";
let accPlAffix = "";
let genSgAffix = "";
let genDualAffix = "";
let genPlAffix = "";
let datSgAffix = "";
let datDualAffix = "";
let datPlAffix = "";
let ablSgAffix = "";
let ablDualAffix = "";
let ablPlAffix = "";
let locSgAffix = "";
let locDualAffix = "";
let locPlAffix = "";
let ineSgAffix = "";
let ineDualAffix = "";
let inePlAffix = "";
let delSgAffix = "";
let delDualAffix = "";
let delPlAffix = "";
let allSgAffix = "";
let allDualAffix = "";
let allPlAffix = "";
let instrSgAffix = "";
let instrDualAffix = "";
let instrPlAffix = "";
function declareFusionalAffixes() {
    nomSgAffix = makeFusionalAffixes(singularAffix, nominativeAffix);
    nomPlAffix = makeFusionalAffixes(pluralAffix, nominativeAffix);
    nomDualAffix = makeFusionalAffixes(dualAffix, nominativeAffix);
    accSgAffix = makeFusionalAffixes(singularAffix, accusativeAffix);
    accDualAffix = makeFusionalAffixes(dualAffix, accusativeAffix);
    accPlAffix = makeFusionalAffixes(pluralAffix, accusativeAffix);
    genSgAffix = makeFusionalAffixes(singularAffix, genitiveAffix);
    genDualAffix = makeFusionalAffixes(dualAffix, genitiveAffix);
    genPlAffix = makeFusionalAffixes(pluralAffix, genitiveAffix);
    datSgAffix = makeFusionalAffixes(singularAffix, dativeAffix);
    datDualAffix = makeFusionalAffixes(dualAffix, dativeAffix);
    datPlAffix = makeFusionalAffixes(pluralAffix, dativeAffix);
    ablSgAffix = makeFusionalAffixes(singularAffix, ablativeAffix);
    ablDualAffix = makeFusionalAffixes(dualAffix, ablativeAffix);
    ablPlAffix = makeFusionalAffixes(pluralAffix, ablativeAffix);
    locSgAffix = makeFusionalAffixes(singularAffix, locativeAffix);
    locDualAffix = makeFusionalAffixes(dualAffix, locativeAffix);
    locPlAffix = makeFusionalAffixes(pluralAffix, locativeAffix);
    ineSgAffix = makeFusionalAffixes(singularAffix, inessiveAffix);
    ineDualAffix = makeFusionalAffixes(dualAffix, inessiveAffix);
    inePlAffix = makeFusionalAffixes(pluralAffix, inessiveAffix);
    delSgAffix = makeFusionalAffixes(singularAffix, delativeAffix);
    delDualAffix = makeFusionalAffixes(dualAffix, delativeAffix);
    delPlAffix = makeFusionalAffixes(pluralAffix, delativeAffix);
    allSgAffix = makeFusionalAffixes(singularAffix, allativeAffix);
    allDualAffix = makeFusionalAffixes(dualAffix, allativeAffix);
    allPlAffix = makeFusionalAffixes(pluralAffix, allativeAffix);
    instrSgAffix = makeFusionalAffixes(singularAffix, instrumentalAffix);
    instrDualAffix = makeFusionalAffixes(dualAffix, instrumentalAffix);
    instrPlAffix = makeFusionalAffixes(pluralAffix, instrumentalAffix);
}

function makeNomSingular(noun) {
    return inflectNouns(noun, nomSgAffix);
}

function makeNomPlural(noun) {
    return inflectNouns(noun, nomPlAffix);
}

function makeNomDual(noun) {
    return inflectNouns(noun, nomDualAffix);
}

function makeAccSingular(noun) {
    return inflectNouns(noun, accSgAffix);
}

function makeAccDual(noun) {
    return inflectNouns(noun, accDualAffix);
}

function makeAccPlural(noun) {
    return inflectNouns(noun, accPlAffix);
}

function makeGenSingular(noun) {
    return inflectNouns(noun, genSgAffix);
}

function makeGenDual(noun) {
    return inflectNouns(noun, genDualAffix);
}

function makeGenPlural(noun) {
    return inflectNouns(noun, genPlAffix);
}

function makeDatSingular(noun) {
    return inflectNouns(noun, datSgAffix);
}

function makeDatDual(noun) {
    return inflectNouns(noun, datDualAffix);
}

function makeDatPlural(noun) {
    return inflectNouns(noun, datPlAffix);
}

function makeAblSingular(noun) {
    return inflectNouns(noun, ablSgAffix);
}

function makeAblDual(noun) {
    return inflectNouns(noun, ablDualAffix);
}

function makeAblPlural(noun) {
    return inflectNouns(noun, ablPlAffix);
}

function makeLocSingular(noun) {
    return inflectNouns(noun, locSgAffix);
}

function makeLocDual(noun) {
    return inflectNouns(noun, locDualAffix);
}

function makeLocPlural(noun) {
    return inflectNouns(noun, locPlAffix);
}

function makeIneSingular(noun) {
    return inflectNouns(noun, ineSgAffix);
}

function makeIneDual(noun) {
    return inflectNouns(noun, ineDualAffix);
}

function makeInePlural(noun) {
    return inflectNouns(noun, inePlAffix);
}

function makeDelSingular(noun) {
    return inflectNouns(noun, delSgAffix);
}

function makeDelDual(noun) {
    return inflectNouns(noun, delDualAffix);
}

function makeDelPlural(noun) {
    return inflectNouns(noun, delPlAffix);
}

function makeAllSingular(noun) {
    return inflectNouns(noun, allSgAffix);
}

function makeAllDual(noun) {
    return inflectNouns(noun, allDualAffix);
}

function makeAllPlural(noun) {
    return inflectNouns(noun, allPlAffix);
}

function makeInstrSingular(noun) {
    return inflectNouns(noun, instrSgAffix);
}

function makeInstrDual(noun) {
    return inflectNouns(noun, instrDualAffix);
}

function makeInstrPlural(noun) {
    return inflectNouns(noun, instrPlAffix);
}

function listAffixesInIsolation(affix) {
    if(affix === "ːː" || affix === "ː") {
        return `bare noun itself with no affixes`
    } else {
        if(numberSuffixOrPrefix === "suffix") {
           return `suffix <i><strong>-${spell(soundChange("A" + affix ))}</i></strong>`;
        } else {
            return `prefix <i><strong>${spell(soundChange("X" + affix + "A"))}-</i></strong>`;
        }
    }
}

let grammaticalNumber
function determineGrammaticalNumber() {
    grammaticalNumber = 6//Math.floor(Math.random() * 31);
    if(grammaticalNumber < 4) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-plural").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "two";
        document.getElementById("grammatical-number-list").innerHTML = "singular and plural";
        return "singular-plural";
    };
    if(grammaticalNumber >= 5 && grammaticalNumber < 7) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-dual-plural").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual and plural";
        return "singular-dual-plural";
    };
    if(grammaticalNumber >= 7 && grammaticalNumber < 12) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-dual-plural-collective").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "four";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual, plural and collective";
        return "singular-dual-plural-collective";
    };
    if(grammaticalNumber >= 12 && grammaticalNumber < 15) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-dual-trial-plural").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "four";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual, trial and plural";
        return "singular-dual-trial-plural";
    };
    if(grammaticalNumber >= 15 && grammaticalNumber < 18) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-dual-trial-quadral-plural").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "five";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual, trial, quadral and plural";
        return "singular-dual-trial-quadral-plural";
    };
    if(grammaticalNumber >= 18 && grammaticalNumber < 21) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-plural-greater-plural").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = "singular, plural and greater plural";
        return "singular-plural-greater-plural";
    };
    if(grammaticalNumber >= 21 && grammaticalNumber < 24) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-plural-general").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = "singular, plural and general";
        return "singular-plural-general";
    };
    if(grammaticalNumber >= 24 && grammaticalNumber < 27) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-general-plural").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "two";
        document.getElementById("grammatical-number-list").innerHTML = "general and plural";
        return "general-plural";
    };
    if(grammaticalNumber >= 27 && grammaticalNumber < 30) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-general-singulative-plural").style.display = "block";
        } 
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = "general, singulative and plural";
        return "general-singulative-plural";
    };
}

function makeNoGenderNumberExamples() {
    if(chosenNounCases === 0 && typologyNum === 2) {
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
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeTrial(generatedCountNouns[randomNumForExamples])))}</i> "three ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<br><i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}",  <i>${spell(soundChange(makeTrial(generatedCountNouns[randomNumForExamples])))}</i> "three ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-sg-dual-trial-pl-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "singular-dual-trial-quadral-plural") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeTrial(generatedCountNouns[randomNumForExamples])))}</i> "three ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeQuadral(generatedCountNouns[randomNumForExamples])))}</i> "four ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<br><i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}",  <i>${spell(soundChange(makeTrial(generatedCountNouns[randomNumForExamples])))}</i> "three ${countNounArrayPlural[randomNumForExamples]}",  <i>${spell(soundChange(makeQuadral(generatedCountNouns[randomNumForExamples])))}</i> "four ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-sg-dual-trial-quadral-pl-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "singular-plural-greater-plural") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeGreaterPlural(generatedCountNouns[randomNumForExamples])))}</i> "a lot of ${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<br><i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeGreaterPlural(generatedCountNouns[randomNumForExamples])))}</i> "a lot of ${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-sg-pl-greater-pl-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "singular-plural-general") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeGeneral(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<br><i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeGeneral(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-sg-pl-general-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "general-plural") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
            exampleArray.push(randomExample);
            
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-general-plural-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "general-singulative-plural") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArrayPlural[randomNumForExamples]}" > <i>${spell(soundChange(makeSingulative(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-general-singulative-plural-examples").innerHTML = joinedArray;

        let singulativeExampleArray = [];
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * massNounArray.length);
                let randomExample = `<br><i>${spell(soundChange(generatedMassNouns[randomNumForExamples]))}</i> "${massNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeSingulative(generatedMassNouns[randomNumForExamples])))}</i> "${singulativeMassNounArray[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedMassNouns[randomNumForExamples])))}</i> "${pluralSingulativeMassNounArray[randomNumForExamples]}"`;
                singulativeExampleArray.push(randomExample);
        }
        let joinedSingulativeArray = singulativeExampleArray.join(", ")
        document.getElementById("fusional-no-gender-singulative-examples").innerHTML = joinedSingulativeArray;
    }
}
}

let caseNumber = 0;
function chooseCases() {
    caseNumber = 6//Math.floor(Math.random() * 11)
    //there will be no cases if language is isolating
    if(chooseTypology() === "fusional") {
        //decides if the language has cases or not
        if(caseNumber !== 0) {
            const randomNum = 8//Math.floor(Math.random() * 8);
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

function explainCases() {
    if(chosenNounCases.length > 0) {
        const listOfCases = [];
        chosenNounCases.forEach((element) => listOfCases.push(element));
        listOfCases.pop()
        listOfCases.push(` and ${chosenNounCases[chosenNounCases.length -1]}`)
        let listOfCasesString =  listOfCases.join(", ")

        document.getElementById("fusional-chosen-noun-case-length").innerHTML = chosenNounCases.length;
        document.getElementById("list-of-cases-fusional").innerHTML = listOfCasesString;
    }

    if(determineGrammaticalNumber() === "singular-plural") {
        let tableDiv = document.createElement("div");
        tableDiv.classList.add("inflection-table-div");

        let inflectionTable = document.createElement("table");
        inflectionTable.classList.add("inflection-table");
        let headingRow = document.createElement("tr")
        let emptyCell = document.createElement("th");
        let sgHeading = document.createElement("th");
        sgHeading.innerHTML = `Singular`
        let plHeading = document.createElement("th");
        plHeading.innerHTML = `Plural`

        inflectionTable.appendChild(headingRow);
        headingRow.appendChild(emptyCell);
        headingRow.appendChild(sgHeading);
        headingRow.appendChild(plHeading);


        if(chosenNounCases.includes("Nominative")) {
            let nominativeH4 = document.createElement("h4");
            nominativeH4.innerHTML = `<strong>Nominative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(nominativeH4);
            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = "";
                if(numberSuffixOrPrefix === "suffix") {
                    example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                } else {
                    example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let nomSgExamples = makeExamples(makeNomSingular, countNounArray);
            let nomPlExamples = makeExamples(makeNomPlural, countNounArrayPlural);

            let singularPluralNominative = document.createElement("p");
            singularPluralNominative.innerHTML = `The nominative case is used to mark the subject of a verb, the noun which is the performer of an action. The nominative singular is formed with the ${listAffixesInIsolation(nomSgAffix)}: ${nomSgExamples}.<br>The nominative plural is formed with the ${listAffixesInIsolation(nomPlAffix)}: ${nomPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralNominative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Nominative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + nomSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + nomPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(nomSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(nomPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Accusative")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Accusative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

            if(determineGrammaticalNumber() === "singular-plural") {
                let exampleArray = []
                function makeExamples(make, nounArray) {
                    for(let i = 0; i < 11; i++) {
                    let randomIndex = Math.floor(Math.random() * nounArray.length);
                    let example = "";
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                    }
                    exampleArray.push(example);
                    }   
                    let joinedList = exampleArray.join(", ")
                    exampleArray = [];
                    return joinedList;
                }
                let accSgExamples = makeExamples(makeAccSingular, countNounArray);
                let accPlExamples = makeExamples(makeAccPlural, countNounArrayPlural);

                let singularPluralAccusative = document.createElement("p");
                singularPluralAccusative.innerHTML = `The accusative case is used to mark the object of a verb, the noun which is the recipient of an action. The accusative singular is formed with the ${listAffixesInIsolation(accSgAffix)}: ${accSgExamples}.<br>The accusative plural is formed with the ${listAffixesInIsolation(accPlAffix)}: ${accPlExamples}.`;
                document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAccusative);
            }
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Accusative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + accSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + accPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(accSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(accPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Genitive")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Genitive Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

            if(determineGrammaticalNumber() === "singular-plural") {
                let exampleArray = []
                function makeExamples(make, nounArray) {
                    for(let i = 0; i < 11; i++) {
                    let randomIndex = Math.floor(Math.random() * nounArray.length);
                    let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of ${nounArray[randomIndex]}"`
                    exampleArray.push(example);
                    }   
                    let joinedList = exampleArray.join(", ")
                    exampleArray = [];
                    return joinedList;
                }
                let genSgExamples = makeExamples(makeGenSingular, countNounArray);
                let genPlExamples = makeExamples(makeGenPlural, countNounArrayPlural);

                let singularPluralGenitive = document.createElement("p");
                singularPluralGenitive.innerHTML = `The genitive case is used to mark possession. The genitive singular is formed with the ${listAffixesInIsolation(genSgAffix)}: ${genSgExamples}.<br>The genitive plural is formed with the ${listAffixesInIsolation(genPlAffix)}: ${genPlExamples}.`;
                document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralGenitive);
            }
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Genitive</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + genSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + genPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(genSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(genPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Dative")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Dative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

            if(determineGrammaticalNumber() === "singular-plural") {
                let exampleArray = []
                function makeExamples(make, nounArray) {
                    for(let i = 0; i < 11; i++) {
                    let randomIndex = Math.floor(Math.random() * nounArray.length);
                    let example = "";
if(numberSuffixOrPrefix === "suffix") {
	example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
} else {
	example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
}
                    exampleArray.push(example);
                    }   
                    let joinedList = exampleArray.join(", ")
                    exampleArray = [];
                    return joinedList;
                }
                let datSgExamples = makeExamples(makeDatSingular, countNounArray);
                let datPlExamples = makeExamples(makeDatPlural, countNounArrayPlural);

                let singularPluralDative = document.createElement("p");
                singularPluralDative.innerHTML = `The dative case is used to mark indirect objects, nouns that are not the direct recipients of an action. Such nouns in English occur after prepositions e.g the noun "boy" in "I gave a book to the boy. The dative singular is formed with the ${listAffixesInIsolation(datSgAffix)}: ${datSgExamples}.<br>The dative plural is formed with the ${listAffixesInIsolation(datPlAffix)}: ${datPlExamples}.`;
                document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDative);
            }
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Dative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + datSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + datPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(datSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(datPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Ablative")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Ablative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

            if(determineGrammaticalNumber() === "singular-plural") {
                let exampleArray = []
                function makeExamples(make, nounArray) {
                    for(let i = 0; i < 11; i++) {
                    let randomIndex = Math.floor(Math.random() * nounArray.length);
                    let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "away from ${nounArray[randomIndex]}"`
                    exampleArray.push(example);
                    }   
                    let joinedList = exampleArray.join(", ")
                    exampleArray = [];
                    return joinedList;
                }
                let ablSgExamples = makeExamples(makeAblSingular, countNounArray);
                let ablPlExamples = makeExamples(makeAblPlural, countNounArrayPlural);

                let singularPluralAblative = document.createElement("p");
                singularPluralAblative.innerHTML = `The ablative case is used to mark motion away from a noun. The ablative singular is formed with the ${listAffixesInIsolation(ablSgAffix)}: ${ablSgExamples}.<br>The ablative plural is formed with the ${listAffixesInIsolation(ablPlAffix)}: ${ablPlExamples}.`;
                document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAblative);
            }
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Ablative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ablSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + ablPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ablSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(ablPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Locative")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Locative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

            if(determineGrammaticalNumber() === "singular-plural") {
                let exampleArray = []
                function makeExamples(make, nounArray) {
                    for(let i = 0; i < 11; i++) {
                    let randomIndex = Math.floor(Math.random() * nounArray.length);
                    let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "on the ${nounArray[randomIndex]}"`
                    exampleArray.push(example);
                    }   
                    let joinedList = exampleArray.join(", ")
                    exampleArray = [];
                    return joinedList;
                }
                let locSgExamples = makeExamples(makeLocSingular, countNounArray);
                let locPlExamples = makeExamples(makeLocPlural, countNounArrayPlural);

                let singularPluralLocative = document.createElement("p");
                singularPluralLocative.innerHTML = `The locative case is used to mark a noun used with an adposition e.g "in the forest" or "on a mountain". The locative singular is formed with the ${listAffixesInIsolation(locSgAffix)}: ${locSgExamples}.<br>The locative plural is formed with the ${listAffixesInIsolation(locPlAffix)}: ${locPlExamples}.`;
                document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralLocative);
            }
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Locative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + locSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + locPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(locSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(locPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Inessive")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Inessive Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

            if(determineGrammaticalNumber() === "singular-plural") {
                let exampleArray = []
                function makeExamples(make, nounArray) {
                    for(let i = 0; i < 11; i++) {
                    let randomIndex = Math.floor(Math.random() * nounArray.length);
                    let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in the ${nounArray[randomIndex]}"`
                    exampleArray.push(example);
                    }   
                    let joinedList = exampleArray.join(", ")
                    exampleArray = [];
                    return joinedList;
                }
                let ineSgExamples = makeExamples(makeIneSingular, countNounArray);
                let inePlExamples = makeExamples(makeInePlural, countNounArrayPlural);

                let singularPluralInessive = document.createElement("p");
                singularPluralInessive.innerHTML = `The inessive case is used to mark "in" e.g "in the forest" or "on a mountain". The inessive singular is formed with the ${listAffixesInIsolation(ineSgAffix)}: ${ineSgExamples}.<br>The inessive plural is formed with the ${listAffixesInIsolation(inePlAffix)}: ${inePlExamples}.`;
                document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInessive);
            }
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Inessive</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ineSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + inePlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ineSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(inePlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Delative")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Delative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

            if(determineGrammaticalNumber() === "singular-plural") {
                let exampleArray = []
                function makeExamples(make, nounArray) {
                    for(let i = 0; i < 11; i++) {
                    let randomIndex = Math.floor(Math.random() * nounArray.length);
                    let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from the ${nounArray[randomIndex]}"`
                    exampleArray.push(example);
                    }   
                    let joinedList = exampleArray.join(", ")
                    exampleArray = [];
                    return joinedList;
                }
                let delSgExamples = makeExamples(makeDelSingular, countNounArray);
                let delPlExamples = makeExamples(makeDelPlural, countNounArrayPlural);

                let singularPluralDelative = document.createElement("p");
                singularPluralDelative.innerHTML = `The delative case is used to mark "in" e.g "in the forest" or "on a mountain". The delative singular is formed with the ${listAffixesInIsolation(delSgAffix)}: ${delSgExamples}.<br>The delative plural is formed with the ${listAffixesInIsolation(delPlAffix)}: ${delPlExamples}.`;
                document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDelative);
            }
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Delative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + delSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + delPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(delSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(delPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Allative")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Allative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

            if(determineGrammaticalNumber() === "singular-plural") {
                let exampleArray = []
                function makeExamples(make, nounArray) {
                    for(let i = 0; i < 11; i++) {
                    let randomIndex = Math.floor(Math.random() * nounArray.length);
                    let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to the ${nounArray[randomIndex]}"`
                    exampleArray.push(example);
                    }   
                    let joinedList = exampleArray.join(", ")
                    exampleArray = [];
                    return joinedList;
                }
                let allSgExamples = makeExamples(makeAllSingular, countNounArray);
                let allPlExamples = makeExamples(makeAllPlural, countNounArrayPlural);

                let singularPluralAllative = document.createElement("p");
                singularPluralAllative.innerHTML = `The allative case is used to mark motion towards a noun e.g "to the forest" or "to a mountain". The allative singular is formed with the ${listAffixesInIsolation(allSgAffix)}: ${allSgExamples}.<br>The allative plural is formed with the ${listAffixesInIsolation(allPlAffix)}: ${allPlExamples}.`;
                document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAllative);
            }
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Allative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + allSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + allPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(allSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(allPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Instrumental")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Instrumental Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

            if(determineGrammaticalNumber() === "singular-plural") {
                let exampleArray = []
                function makeExamples(make, nounArray) {
                    for(let i = 0; i < 11; i++) {
                    let randomIndex = Math.floor(Math.random() * nounArray.length);
                    let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with the ${nounArray[randomIndex]}"`
                    exampleArray.push(example);
                    }   
                    let joinedList = exampleArray.join(", ")
                    exampleArray = [];
                    return joinedList;
                }
                let instrSgExamples = makeExamples(makeInstrSingular, countNounArray);
                let instrPlExamples = makeExamples(makeInstrPlural, countNounArrayPlural);

                let singularPluralInstrumental = document.createElement("p");
                singularPluralInstrumental.innerHTML = `The instrumental case is used to mark a noun by which an action is achieved i.e "I walked <u>by land</u>" or "I stabbed him <u>with a knife</u>". The instrumental singular is formed with the ${listAffixesInIsolation(instrSgAffix)}: ${instrSgExamples}.<br>The instrumental plural is formed with the ${listAffixesInIsolation(instrPlAffix)}: ${instrPlExamples}.`;
                document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInstrumental);
            }
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Instrumental</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + instrSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + instrPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(instrSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(instrPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
        }

        tableDiv.appendChild(inflectionTable)
        document.getElementById("fusional-no-gender-case-explanation").appendChild(tableDiv);

    };

    if(determineGrammaticalNumber() === "singular-dual-plural") {
        let tableDiv = document.createElement("div");
        tableDiv.classList.add("inflection-table-div");
        
        let inflectionTable = document.createElement("table");
        inflectionTable.classList.add("inflection-table");
        let headingRow = document.createElement("tr")
        let emptyCell = document.createElement("th");
        let sgHeading = document.createElement("th");
        sgHeading.innerHTML = `Singular`
        let dualHeading = document.createElement("th");
        dualHeading.innerHTML = `Dual`
        let plHeading = document.createElement("th");
        plHeading.innerHTML = `Plural`

        inflectionTable.appendChild(headingRow);
        headingRow.appendChild(emptyCell);
        headingRow.appendChild(sgHeading);
        headingRow.appendChild(dualHeading);
        headingRow.appendChild(plHeading);


        if(chosenNounCases.includes("Nominative")) {
            let nominativeH4 = document.createElement("h4");
            nominativeH4.innerHTML = `<strong>Nominative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(nominativeH4);
            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = "";
                if(numberSuffixOrPrefix === "suffix") {
                    example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                } else {
                    example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                }
                
                if(make === makeNomDual) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "two ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "two ${nounArray[randomIndex]}"`
                    }
                    }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let nomSgExamples = makeExamples(makeNomSingular, countNounArray);
            let nomDualExamples = makeExamples(makeNomDual, countNounArrayPlural);
            let nomPlExamples = makeExamples(makeNomPlural, countNounArrayPlural);

            let singularPluralNominative = document.createElement("p");
            singularPluralNominative.innerHTML = `The nominative case is used to mark the subject of a verb, the noun which is the performer of an action. The nominative singular is formed with the ${listAffixesInIsolation(nomSgAffix)}: ${nomSgExamples}.
            <br>The nominative dual is formed with the ${listAffixesInIsolation(nomDualAffix)}: ${nomDualExamples}.
            <br>The nominative plural is formed with the ${listAffixesInIsolation(nomPlAffix)}: ${nomPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralNominative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Nominative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + nomSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + nomDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + nomPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(nomSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(nomDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(nomPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Accusative")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Accusative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = "";
                if(numberSuffixOrPrefix === "suffix") {
                    example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                } else {
                 example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                }
                if(make === makeAccDual) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "two ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "two ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let accSgExamples = makeExamples(makeAccSingular, countNounArray);
            let accDualExamples = makeExamples(makeAccDual, countNounArrayPlural);
            let accPlExamples = makeExamples(makeAccPlural, countNounArrayPlural);

            let singularDualPluralAccusative = document.createElement("p");
            singularDualPluralAccusative.innerHTML = `The accusative case is used to mark the object of a verb, the noun which is the recipient of an action. The accusative singular is formed with the ${listAffixesInIsolation(accSgAffix)}: ${accSgExamples}.
            <br>The accusative dual is formed with the ${listAffixesInIsolation(accDualAffix)}: ${accDualExamples}.;
            <br>The accusative plural is formed with the ${listAffixesInIsolation(accPlAffix)}: ${accPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralAccusative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Accusative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + accSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + accDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + accPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(accSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(accDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(accPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Genitive")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Genitive Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = "";
                if(numberSuffixOrPrefix === "suffix") {
                    example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of the ${nounArray[randomIndex]}"`
                } else {
                    example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of the ${nounArray[randomIndex]}"`
                }
                if(make === makeGenDual) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of two ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of two ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let genSgExamples = makeExamples(makeGenSingular, countNounArray);
            let genDualExamples = makeExamples(makeGenDual, countNounArrayPlural);
            let genPlExamples = makeExamples(makeGenPlural, countNounArrayPlural);

            let singularDualPluralGenitive = document.createElement("p");
            singularDualPluralGenitive.innerHTML = `The genitive case is used to mark possession. The genitive singular is formed with the ${listAffixesInIsolation(genSgAffix)}: ${genSgExamples}.
            <br>The genitive dual is formed with the ${listAffixesInIsolation(genDualAffix)}: ${genDualExamples}.
            <br>The genitive plural is formed with the ${listAffixesInIsolation(genPlAffix)}: ${genPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralGenitive);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Genitive</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + genSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + genDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + genPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(genSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(genDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(genPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Dative")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Dative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);


            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = "";
                if(numberSuffixOrPrefix === "suffix") {
                    example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                } else {
                    example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
}
                if(make === makeDatDual) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let datSgExamples = makeExamples(makeDatSingular, countNounArray);
            let datDualExamples = makeExamples(makeDatDual, countNounArrayPlural);
            let datPlExamples = makeExamples(makeDatPlural, countNounArrayPlural);

            let singularPluralDative = document.createElement("p");
            singularPluralDative.innerHTML = `The dative case is used to mark indirect objects, nouns that are not the direct recipients of an action. Such nouns in English occur after prepositions e.g the noun "boy" in "I gave a book to the boy. The dative singular is formed with the ${listAffixesInIsolation(datSgAffix)}: ${datSgExamples}.
            <br>The dative dual is formed with the ${listAffixesInIsolation(datDualAffix)}: ${datDualExamples}.
            <br>The dative plural is formed with the ${listAffixesInIsolation(datPlAffix)}: ${datPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Dative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + datSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + datDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + datPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(datSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(datDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(datPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Ablative")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Ablative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = "";
                if(numberSuffixOrPrefix === "suffix") {
                    example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "away from  ${nounArray[randomIndex]}"`
                } else {
                    example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "away from ${nounArray[randomIndex]}"`
                }
                if(make === makeAblDual) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "away from two ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "away from two ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let ablSgExamples = makeExamples(makeAblSingular, countNounArray);
            let ablDualExamples = makeExamples(makeAblDual, countNounArrayPlural);
            let ablPlExamples = makeExamples(makeAblPlural, countNounArrayPlural);

            let singularPluralAblative = document.createElement("p");
            singularPluralAblative.innerHTML = `The ablative case is used to mark motion away from a noun. The ablative singular is formed with the ${listAffixesInIsolation(ablSgAffix)}: ${ablSgExamples}.
            <br>The ablative dual is formed with the ${listAffixesInIsolation(ablDualAffix)}: ${ablDualExamples}.
            <br>The ablative plural is formed with the ${listAffixesInIsolation(ablPlAffix)}: ${ablPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAblative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Ablative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ablSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + ablDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + ablPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ablSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(ablDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(ablPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Locative")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Locative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);


            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = "";
                if(numberSuffixOrPrefix === "suffix") {
                    example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "on the   ${nounArray[randomIndex]}"`
                } else {
                    example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "on the  ${nounArray[randomIndex]}"`
                }
                if(make === makeLocDual) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "on two ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "on two ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let locSgExamples = makeExamples(makeLocSingular, countNounArray);
            let locDualExamples = makeExamples(makeLocDual, countNounArrayPlural);
            let locPlExamples = makeExamples(makeLocPlural, countNounArrayPlural);

            let singularPluralLocative = document.createElement("p");
            singularPluralLocative.innerHTML = `The locative case is used to mark a noun used with an adposition e.g "in the forest" or "on a mountain". The locative singular is formed with the ${listAffixesInIsolation(locSgAffix)}: ${locSgExamples}.
            <br>The locative dual is formed with the ${listAffixesInIsolation(locDualAffix)}: ${locDualExamples}.
            <br>The locative plural is formed with the ${listAffixesInIsolation(locPlAffix)}: ${locPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralLocative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Locative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + locSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + locDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + locPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(locSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(locDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(locPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Inessive")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Inessive Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = "";
                if(numberSuffixOrPrefix === "suffix") {
                    example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in the   ${nounArray[randomIndex]}"`
                } else {
                    example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in the  ${nounArray[randomIndex]}"`
                }
                if(make === makeIneDual) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in two ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in two ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let ineSgExamples = makeExamples(makeIneSingular, countNounArray);
            let ineDualExamples = makeExamples(makeIneDual, countNounArrayPlural);
            let inePlExamples = makeExamples(makeInePlural, countNounArrayPlural);

            let singularPluralInessive = document.createElement("p");
            singularPluralInessive.innerHTML = `The inessive case is used to mark "in" e.g "in the forest" or "on a mountain". The inessive singular is formed with the ${listAffixesInIsolation(ineSgAffix)}: ${ineSgExamples}.
            <br>The inessive dual is formed with the ${listAffixesInIsolation(ineDualAffix)}: ${ineDualExamples}
            <br>The inessive plural is formed with the ${listAffixesInIsolation(inePlAffix)}: ${inePlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInessive);
        
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Inessive</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ineSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + ineDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + inePlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ineSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(ineDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(inePlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Delative")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Delative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);


            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = "";
                if(numberSuffixOrPrefix === "suffix") {
                    example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from the   ${nounArray[randomIndex]}"`
                } else {
                    example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from the  ${nounArray[randomIndex]}"`
                }
                if(make === makeDelDual) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from two ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from two ${nounArray[randomIndex]}"`
                    }
                    
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let delSgExamples = makeExamples(makeDelSingular, countNounArray);
            let delDualExamples = makeExamples(makeDelDual, countNounArrayPlural);
            let delPlExamples = makeExamples(makeDelPlural, countNounArrayPlural);

            let singularPluralDelative = document.createElement("p");
            singularPluralDelative.innerHTML = `The delative case is used to mark "in" e.g "in the forest" or "on a mountain". The delative singular is formed with the ${listAffixesInIsolation(delSgAffix)}: ${delSgExamples}.
            <br>The delative dual is formed with the ${listAffixesInIsolation(delDualAffix)}: ${delDualExamples}.
            <br>The delative plural is formed with the ${listAffixesInIsolation(delPlAffix)}: ${delPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDelative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Delative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + delSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + delDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + delPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(delSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(delDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(delPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Allative")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Allative Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);


            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = "";
                if(numberSuffixOrPrefix === "suffix") {
                    example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to the   ${nounArray[randomIndex]}"`
                } else {
                    example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to the  ${nounArray[randomIndex]}"`
                }
                if(make === makeAllDual) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to two ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to two ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let allSgExamples = makeExamples(makeAllSingular, countNounArray);
            let allDualExamples = makeExamples(makeAllDual, countNounArrayPlural);
            let allPlExamples = makeExamples(makeAllPlural, countNounArrayPlural);

            let singularPluralAllative = document.createElement("p");
            singularPluralAllative.innerHTML = `The allative case is used to mark motion towards a noun e.g "to the forest" or "to a mountain". The allative singular is formed with the ${listAffixesInIsolation(allSgAffix)}: ${allSgExamples}.
            <br>The allative dual is formed with the ${listAffixesInIsolation(allDualAffix)}: ${allDualExamples}.
            <br>The allative plural is formed with the ${listAffixesInIsolation(allPlAffix)}: ${allPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAllative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Allative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + allSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + allDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + allPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(allSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(allDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(allPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
        }
        if(chosenNounCases.includes("Instrumental")) {
            let caseH4 = document.createElement("h4");
            caseH4.innerHTML = `<strong>Instrumental Case</strong>`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);


            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = "";
                if(numberSuffixOrPrefix === "suffix") {
                    example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with the   ${nounArray[randomIndex]}"`
                } else {
                    example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with the  ${nounArray[randomIndex]}"`
                }
                if(make === makeInstrDual) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with two ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with two ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let instrSgExamples = makeExamples(makeInstrSingular, countNounArray);
            let instrDualExamples = makeExamples(makeInstrDual, countNounArrayPlural);
            let instrPlExamples = makeExamples(makeInstrPlural, countNounArrayPlural);

            let singularPluralInstrumental = document.createElement("p");
            singularPluralInstrumental.innerHTML = `The instrumental case is used to mark a noun by which an action is achieved i.e "I walked <u>by land</u>" or "I stabbed him <u>with a knife</u>". The instrumental singular is formed with the ${listAffixesInIsolation(instrSgAffix)}: ${instrSgExamples}.
            <br>The instrumental dual is formed with the ${listAffixesInIsolation(instrDualAffix)}: ${instrDualExamples}
            <br>The instrumental plural is formed with the ${listAffixesInIsolation(instrPlAffix)}: ${instrPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInstrumental);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Instrumental</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + instrSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + instrDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + instrPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(instrSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(instrDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(instrPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
        }

        tableDiv.appendChild(inflectionTable)
        document.getElementById("fusional-no-gender-case-explanation").appendChild(tableDiv);
        

    }
}

function makeFusionalNounHeader() {
    if(caseNumber === 0) {
        document.getElementById("fusional-noun-header").innerHTML = "Grammatical Number"
    } else {
        document.getElementById("fusional-noun-header").innerHTML = "Case and Number"
    }
}
    


let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    clearArrays();
    chooseCases();
    markedSingular();
    makeLocativeCaseAffixes();
    declareFusionalAffixes();
    determineGrammaticalNumber();
    makeNoGenderNumberExamples();
    explainCases();
    makeFusionalNounHeader();
}

export {grammaticalNumber, nomSgAffix, caseNumber};