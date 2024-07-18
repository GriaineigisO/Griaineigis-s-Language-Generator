import { genderNum, markedSingularOrNot, generatedCountNouns, countNounArrayPlural, countNounArray, generatedMassNouns, massNounArray, pluralSingulativeMassNounArray, singulativeMassNounArray, numberSuffixOrPrefix, pluralAffix, singularAffix, dualAffix, collectiveAffix, trialAffix, quadralAffix, generalAffix, greaterPluralAffix, singulativeAffix, chooseTypology, checkIfHeadInitialOrHeadFinal, suffixOrPrefix, nominativeAffix, accusativeAffix, genitiveAffix, dativeAffix, generateAffixes} from './script.js';
import {spell} from './orthography.js'
import {soundChange} from './soundchange.js'
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

    function removeChar(timesToLoop, str) {
        let randomIndex = Math.floor(Math.random() * str.length) + 1;
        let newArray = Array.from(str);
        for(let i = 0; i < timesToLoop; i++) {
            newArray.splice(randomIndex, 1);
        }
        let joinedStr = newArray.join("");
        return joinedStr;
    }

    function removeCluster(str) {
        let newArray = Array.from(str);
        for(let i = 0; i < newArray.length; i++) {
            if(consonants.includes(newArray[i]) && consonants.includes(newArray[i + 1])) {
                newArray.splice(i, 1);
            }
        }
        let joinedStr = newArray.join("");
        return joinedStr;
    }

    function removeFirstVowel(str) {
        let newArray = Array.from(str);
        if(consonants.includes(newArray[0]) && consonants.includes(newArray[2]) && vowels.includes(newArray[1])) {
            newArray.splice(1, 1);
        }
        let joinedStr = newArray.join("");
        return joinedStr;
    }

    function mergeTwoVowels(str) {
        let newArray = Array.from(str);
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
        return joinedStr;
    }

    //the following options will change the combination of the two affixes, to make them appear fused
    if(Math.floor(Math.random() * 3) === 1) {
        fusedAffix = removeChar(2, fusedAffix);
    }
    if(Math.floor(Math.random() * 3) === 1) {
        fusedAffix = removeCluster(fusedAffix);
    }
    if(Math.floor(Math.random() * 3) === 1) {
        fusedAffix = removeFirstVowel(fusedAffix);
    }
    if(/*Math.floor(Math.random() * 3)*/1 === 1) {
        fusedAffix = mergeTwoVowels(fusedAffix);
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
let accSgAffix = "";
let accPlAffix = "";
let genSgAffix = "";
let genPlAffix = "";
let datSgAffix = "";
let datPlAffix = "";
let ablSgAffix = "";
let ablPlAffix = "";
let locSgAffix = "";
let locPlAffix = "";
let ineSgAffix = "";
let inePlAffix = "";
let delSgAffix = "";
let delPlAffix = "";
let allSgAffix = "";
let allPlAffix = "";
let instrSgAffix = "";
let instrPlAffix = "";
function declareFusionalAffixes() {
    nomSgAffix = makeFusionalAffixes(singularAffix, nominativeAffix);
    nomPlAffix = makeFusionalAffixes(pluralAffix, nominativeAffix);
    accSgAffix = makeFusionalAffixes(singularAffix, accusativeAffix);
    accPlAffix = makeFusionalAffixes(pluralAffix, accusativeAffix);
    genSgAffix = makeFusionalAffixes(singularAffix, genitiveAffix);
    genPlAffix = makeFusionalAffixes(pluralAffix, genitiveAffix);
    datSgAffix = makeFusionalAffixes(singularAffix, dativeAffix);
    datPlAffix = makeFusionalAffixes(pluralAffix, dativeAffix);
    ablSgAffix = makeFusionalAffixes(singularAffix, ablativeAffix);
    ablPlAffix = makeFusionalAffixes(pluralAffix, ablativeAffix);
    locSgAffix = makeFusionalAffixes(singularAffix, locativeAffix);
    locPlAffix = makeFusionalAffixes(pluralAffix, locativeAffix);
    ineSgAffix = makeFusionalAffixes(singularAffix, inessiveAffix);
    inePlAffix = makeFusionalAffixes(pluralAffix, inessiveAffix);
    delSgAffix = makeFusionalAffixes(singularAffix, delativeAffix);
    delPlAffix = makeFusionalAffixes(pluralAffix, delativeAffix);
    allSgAffix = makeFusionalAffixes(singularAffix, allativeAffix);
    allPlAffix = makeFusionalAffixes(pluralAffix, allativeAffix);
    instrSgAffix = makeFusionalAffixes(singularAffix, instrumentalAffix);
    instrPlAffix = makeFusionalAffixes(pluralAffix, instrumentalAffix);
}

function makeNomSingular(noun) {
    return inflectNouns(noun, nomSgAffix);
}

function makeNomPlural(noun) {
    return inflectNouns(noun, nomPlAffix);
}

function makeAccSingular(noun) {
    return inflectNouns(noun, accSgAffix);
}

function makeAccPlural(noun) {
    return inflectNouns(noun, accPlAffix);
}

function makeGenSingular(noun) {
    return inflectNouns(noun, genSgAffix);
}

function makeGenPlural(noun) {
    return inflectNouns(noun, genPlAffix);
}

function makeDatSingular(noun) {
    return inflectNouns(noun, datSgAffix);
}

function makeDatPlural(noun) {
    return inflectNouns(noun, datPlAffix);
}

function makeAblSingular(noun) {
    return inflectNouns(noun, ablSgAffix);
}

function makeAblPlural(noun) {
    return inflectNouns(noun, ablPlAffix);
}

function makeLocSingular(noun) {
    return inflectNouns(noun, locSgAffix);
}

function makeLocPlural(noun) {
    return inflectNouns(noun, locPlAffix);
}

function makeIneSingular(noun) {
    return inflectNouns(noun, ineSgAffix);
}

function makeInePlural(noun) {
    return inflectNouns(noun, inePlAffix);
}

function makeDelSingular(noun) {
    return inflectNouns(noun, delSgAffix);
}

function makeDelPlural(noun) {
    return inflectNouns(noun, delPlAffix);
}

function makeAllSingular(noun) {
    return inflectNouns(noun, allSgAffix);
}

function makeAllPlural(noun) {
    return inflectNouns(noun, allPlAffix);
}

function makeInstrSingular(noun) {
    return inflectNouns(noun, instrSgAffix);
}

function makeInstrPlural(noun) {
    return inflectNouns(noun, instrPlAffix);
}

let nomSgAffixIsolated = "";
let nomPlAffixIsolated = "";
let accSgAffixIsolated = "";
let accPlAffixIsolated = "";
let genSgAffixIsolated = "";
let genPlAffixIsolated = "";
let datSgAffixIsolated = "";
let datPlAffixIsolated = "";
let ablSgAffixIsolated = "";
let ablPlAffixIsolated = "";
let locSgAffixIsolated = "";
let locPlAffixIsolated = "";
let ineSgAffixIsolated = "";
let inePlAffixIsolated = "";
let delSgAffixIsolated = "";
let delPlAffixIsolated = "";
let allSgAffixIsolated = "";
let allPlAffixIsolated = "";
let instrSgAffixIsolated = "";
let instrPlAffixIsolated = "";
function listAffixesInIsolation() {
    if(numberSuffixOrPrefix === "suffix") {
        nomSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + nomSgAffix ))}</i></strong>`;
        nomPlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + nomPlAffix ))}</i></strong>`;
        accSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + accSgAffix ))}</i></strong>`;
        accPlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + accPlAffix ))}</i></strong>`;
        genSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + genSgAffix ))}</i></strong>`;
        genPlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + genPlAffix ))}</i></strong>`;
        datSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + datSgAffix ))}</i></strong>`;
        datPlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + datPlAffix ))}</i></strong>`;
        ablSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + ablSgAffix ))}</i></strong>`;
        ablPlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + ablPlAffix ))}</i></strong>`;
        locSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + locSgAffix ))}</i></strong>`;
        locPlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + locPlAffix ))}</i></strong>`;
        ineSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + ineSgAffix ))}</i></strong>`;
        inePlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + inePlAffix ))}</i></strong>`;
        delSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + delSgAffix ))}</i></strong>`;
        delPlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + delPlAffix ))}</i></strong>`;
        allSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + allSgAffix ))}</i></strong>`;
        allPlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + allPlAffix ))}</i></strong>`;
        instrSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + instrSgAffix ))}</i></strong>`;
        instrPlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + instrPlAffix ))}</i></strong>`;
    } else {
        nomSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + nomSgAffix + "A"))}-</i></strong>`;
        nomPlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + nomPlAffix + "A"))}-</i></strong>`;
        accSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + accSgAffix + "A"))}-</i></strong>`;
        accPlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + accPlAffix + "A"))}-</i></strong>`;
        genSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + genSgAffix + "A"))}-</i></strong>`;
        genPlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + genPlAffix + "A"))}-</i></strong>`;
        datSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + datSgAffix + "A"))}-</i></strong>`;
        datPlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + datPlAffix + "A"))}-</i></strong>`;
        ablSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + ablSgAffix + "A"))}-</i></strong>`;
        ablPlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + ablPlAffix + "A"))}-</i></strong>`;
        locSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + locSgAffix + "A"))}-</i></strong>`;
        locPlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + locPlAffix + "A"))}-</i></strong>`;
        ineSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + ineSgAffix + "A"))}-</i></strong>`;
        inePlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + inePlAffix + "A"))}-</i></strong>`;
        delSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + delSgAffix + "A"))}-</i></strong>`;
        delPlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + delPlAffix + "A"))}-</i></strong>`;
        allSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + allSgAffix + "A"))}-</i></strong>`;
        allPlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + allPlAffix + "A"))}-</i></strong>`;
        instrSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + instrSgAffix + "A"))}-</i></strong>`;
        instrPlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + instrPlAffix + "A"))}-</i></strong>`;
    }
}

let grammaticalNumber
function determineGrammaticalNumber() {
    grammaticalNumber = 2//Math.floor(Math.random() * 31);
    if(grammaticalNumber < 4) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-plural").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "two";
        document.getElementById("grammatical-number-list").innerHTML = "singular and plural";
        return "singular-plural";
    };
    if(grammaticalNumber >= 5 && grammaticalNumber < 7) {
        document.getElementById("fusional-no-gender-singular-dual-plural").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual and plural";
        return "singular-dual-plural";
    };
    if(grammaticalNumber >= 7 && grammaticalNumber < 12) {
        document.getElementById("fusional-no-gender-singular-dual-plural-collective").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "four";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual, plural and collective";
        return "singular-dual-plural-collective";
    };
    if(grammaticalNumber >= 12 && grammaticalNumber < 15) {
        document.getElementById("fusional-no-gender-singular-dual-trial-plural").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "four";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual, trial and plural";
        return "singular-dual-trial-plural";
    };
    if(grammaticalNumber >= 15 && grammaticalNumber < 18) {
        document.getElementById("fusional-no-gender-singular-dual-trial-quadral-plural").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "five";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual, trial, quadral and plural";
        return "singular-dual-trial-quadral-plural";
    };
    if(grammaticalNumber >= 18 && grammaticalNumber < 21) {
        document.getElementById("fusional-no-gender-singular-plural-greater-plural").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = "singular, plural and greater plural";
        return "singular-plural-greater-plural";
    };
    if(grammaticalNumber >= 21 && grammaticalNumber < 24) {
        document.getElementById("fusional-no-gender-singular-plural-general").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = "singular, plural and general";
        return "singular-plural-general";
    };
    if(grammaticalNumber >= 24 && grammaticalNumber < 27) {
        document.getElementById("fusional-no-gender-general-plural").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "two";
        document.getElementById("grammatical-number-list").innerHTML = "general and plural";
        return "general-plural";
    };
    if(grammaticalNumber >= 27 && grammaticalNumber < 30) {
        document.getElementById("fusional-no-gender-general-singulative-plural").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = "general, singulative and plural";
        return "general-singulative-plural";
    };
}

function makeNoGenderNumberExamples() {
    if(chosenNounCases === 0) {
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
    if(chooseTypology() !== "isolating") {
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

    if(chosenNounCases.includes("Nominative")) {
        let nominativeH4 = document.createElement("h4");
        nominativeH4.innerHTML = `<strong>Nominative Case</strong>`;
        document.getElementById("fusional-no-gender-case-explanation").appendChild(nominativeH4);

        if(determineGrammaticalNumber() === "singular-plural") {
            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let nomSgExamples = makeExamples(makeNomSingular, countNounArray);
            let nomPlExamples = makeExamples(makeNomPlural, countNounArrayPlural);

            let singularPluralNominative = document.createElement("p");
            singularPluralNominative.innerHTML = `The nominative case is used to mark the subject of a verb, the noun which is the performer of an action. The nominative singular is formed with the ${nomSgAffixIsolated}: ${nomSgExamples}.<br>The nominative plural is formed with the ${nomPlAffixIsolated}: ${nomPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralNominative);
        }
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
                let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let accSgExamples = makeExamples(makeAccSingular, countNounArray);
            let accPlExamples = makeExamples(makeAccPlural, countNounArrayPlural);

            let singularPluralAccusative = document.createElement("p");
            singularPluralAccusative.innerHTML = `The accusative case is used to mark the object of a verb, the noun which is the recipient of an action. The accusative singular is formed with the ${accSgAffixIsolated}: ${accSgExamples}.<br>The accusative plural is formed with the ${accPlAffixIsolated}: ${accPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAccusative);
        }
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
            singularPluralGenitive.innerHTML = `The genitive case is used to mark possession. The genitive singular is formed with the ${genSgAffixIsolated}: ${genSgExamples}.<br>The genitive plural is formed with the ${genPlAffixIsolated}: ${genPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralGenitive);
        }
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
                let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let datSgExamples = makeExamples(makeDatSingular, countNounArray);
            let datPlExamples = makeExamples(makeDatPlural, countNounArrayPlural);

            let singularPluralDative = document.createElement("p");
            singularPluralDative.innerHTML = `The dative case is used to mark indirect objects, nouns that are not the direct recipients of an action. Such nouns in English occur after prepositions e.g the noun "boy" in "I gave a book to the boy. The dative singular is formed with the ${datSgAffixIsolated}: ${datSgExamples}.<br>The dative plural is formed with the ${datPlAffixIsolated}: ${datPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDative);
        }
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
            singularPluralAblative.innerHTML = `The ablative case is used to mark motion away from a noun. The ablative singular is formed with the ${ablSgAffixIsolated}: ${ablSgExamples}.<br>The ablative plural is formed with the ${ablPlAffixIsolated}: ${ablPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAblative);
        }
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
            singularPluralLocative.innerHTML = `The locative case is used to mark a noun used with an adposition e.g "in the forest" or "on a mountain". The locative singular is formed with the ${locSgAffixIsolated}: ${locSgExamples}.<br>The locative plural is formed with the ${locPlAffixIsolated}: ${locPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralLocative);
        }
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
            singularPluralInessive.innerHTML = `The inessive case is used to mark "in" e.g "in the forest" or "on a mountain". The inessive singular is formed with the ${ineSgAffixIsolated}: ${ineSgExamples}.<br>The inessive plural is formed with the ${inePlAffixIsolated}: ${inePlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInessive);
        }
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
            singularPluralDelative.innerHTML = `The delative case is used to mark "in" e.g "in the forest" or "on a mountain". The delative singular is formed with the ${delSgAffixIsolated}: ${delSgExamples}.<br>The delative plural is formed with the ${delPlAffixIsolated}: ${delPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDelative);
        }
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
            singularPluralAllative.innerHTML = `The allative case is used to mark motion towards a noun e.g "to the forest" or "to a mountain". The allative singular is formed with the ${allSgAffixIsolated}: ${allSgExamples}.<br>The allative plural is formed with the ${allPlAffixIsolated}: ${allPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAllative);
        }
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
            singularPluralInstrumental.innerHTML = `The instrumental case is used to mark a noun by which an action is achieved i.e "I walked <u>by land</u>" or "I stabbed him <u>with a knife</u>". The instrumental singular is formed with the ${instrSgAffixIsolated}: ${instrSgExamples}.<br>The instrumental plural is formed with the ${instrPlAffixIsolated}: ${instrPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInstrumental);
        }
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
    listAffixesInIsolation();
    determineGrammaticalNumber();
    makeNoGenderNumberExamples();
    explainCases();
    makeFusionalNounHeader();
}

export {grammaticalNumber, nomSgAffix, caseNumber};