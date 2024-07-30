import { genderNum, markedSingularOrNot, generatedCountNouns, countNounArrayPlural, countNounArray, generatedMassNouns, massNounArray, pluralSingulativeMassNounArray, singulativeMassNounArray, numberSuffixOrPrefix, genderSuffixOrPrefix, pluralAffix, singularAffix, dualAffix, collectiveAffix, trialAffix, quadralAffix, generalAffix, greaterPluralAffix, singulativeAffix, chooseTypology, checkIfHeadInitialOrHeadFinal, suffixOrPrefix, nominativeAffix, accusativeAffix, genitiveAffix, dativeAffix, generateAffixes, typologyNum, animateAffix, inanimateAffix, animInan, mascFem, mascFemNeut, humanAnimalInan, activePassive, naturalArtificial} from './script.js';

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
    document.getElementById("fusional-gender-no-case-explanation").replaceChildren();
}

let grammaticalNumber = 0;
function makeRandomNumbers() {
    grammaticalNumber = 2//Math.floor(Math.random() * 31);
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
let nomCollAffix = "";
let nomDualAffix = "";
let nomTrialAffix = "";
let nomQuadralAffix = "";
let nomGreaterAffix = "";
let nomGeneralAffix = "";
let nomSingulativeAffix = "";
let accSgAffix = "";
let accDualAffix = "";
let accPlAffix = "";
let accCollAffix = "";
let accTrialAffix = "";
let accQuadralAffix = "";
let accGreaterAffix = "";
let accGeneralAffix = "";
let accSingulativeAffix = "";
let genSgAffix = "";
let genDualAffix = "";
let genPlAffix = "";
let genCollAffix = "";
let genTrialAffix = "";
let genQuadralAffix = "";
let genGreaterAffix = "";
let genGeneralAffix = "";
let genSingulativeAffix = "";
let datSgAffix = "";
let datDualAffix = "";
let datPlAffix = "";
let datCollAffix = "";
let datTrialAffix = "";
let datQuadralAffix = "";
let datGreaterAffix = "";
let datGeneralAffix = "";
let datSingulativeAffix = "";
let ablSgAffix = "";
let ablDualAffix = "";
let ablPlAffix = "";
let ablCollAffix = "";
let ablTrialAffix = "";
let ablQuadralAffix = "";
let ablGreaterAffix = "";
let ablGeneralAffix = "";
let ablSingulativeAffix = "";
let locSgAffix = "";
let locDualAffix = "";
let locPlAffix = "";
let locCollAffix = "";
let locTrialAffix = "";
let locQuadralAffix = "";
let locGreaterAffix = "";
let locGeneralAffix = "";
let locSingulativeAffix = "";
let ineSgAffix = "";
let ineDualAffix = "";
let inePlAffix = "";
let ineCollAffix = "";
let ineTrialAffix = "";
let ineQuadralAffix = "";
let ineGreaterAffix = "";
let ineGeneralAffix = "";
let ineSingulativeAffix = "";
let delSgAffix = "";
let delDualAffix = "";
let delPlAffix = "";
let delCollAffix = "";
let delTrialAffix = "";
let delQuadralAffix = "";
let delGreaterAffix = "";
let delGeneralAffix = "";
let delSingulativeAffix = "";
let allSgAffix = "";
let allDualAffix = "";
let allPlAffix = "";
let allCollAffix = "";
let allTrialAffix = "";
let allQuadralAffix = "";
let allGreaterAffix = "";
let allGeneralAffix = "";
let allSingulativeAffix = "";
let instrSgAffix = "";
let instrDualAffix = "";
let instrPlAffix = "";
let instrCollAffix = "";
let instrTrialAffix = "";
let instrQuadralAffix = "";
let instrGreaterAffix = "";
let instrGeneralAffix = "";
let instrSingulativeAffix = "";
let animSgAffix = "";
let animPlAffix = "";
let inanSgAffix = "";
let inanPlAffix = "";
function declareFusionalAffixes() {
    nomSgAffix = makeFusionalAffixes(singularAffix, nominativeAffix);
    nomPlAffix = makeFusionalAffixes(pluralAffix, nominativeAffix);
    nomCollAffix = makeFusionalAffixes(collectiveAffix, nominativeAffix);
    nomDualAffix = makeFusionalAffixes(dualAffix, nominativeAffix);
    nomTrialAffix = makeFusionalAffixes(trialAffix, nominativeAffix);
    nomQuadralAffix = makeFusionalAffixes(quadralAffix, nominativeAffix);
    nomGreaterAffix = makeFusionalAffixes(greaterPluralAffix, nominativeAffix);
    nomGeneralAffix = makeFusionalAffixes(generalAffix, nominativeAffix);
    nomSingulativeAffix = makeFusionalAffixes(singulativeAffix, nominativeAffix);
    accSgAffix = makeFusionalAffixes(singularAffix, accusativeAffix);
    accDualAffix = makeFusionalAffixes(dualAffix, accusativeAffix);
    accPlAffix = makeFusionalAffixes(pluralAffix, accusativeAffix);
    accCollAffix = makeFusionalAffixes(collectiveAffix, accusativeAffix);
    accTrialAffix = makeFusionalAffixes(trialAffix, accusativeAffix);
    accQuadralAffix = makeFusionalAffixes(quadralAffix, accusativeAffix);
    accGreaterAffix = makeFusionalAffixes(greaterPluralAffix, accusativeAffix);
    accGeneralAffix = makeFusionalAffixes(generalAffix, accusativeAffix);
    accSingulativeAffix = makeFusionalAffixes(singulativeAffix, accusativeAffix);
    genSgAffix = makeFusionalAffixes(singularAffix, genitiveAffix);
    genDualAffix = makeFusionalAffixes(dualAffix, genitiveAffix);
    genPlAffix = makeFusionalAffixes(pluralAffix, genitiveAffix);
    genCollAffix = makeFusionalAffixes(collectiveAffix, genitiveAffix);
    genTrialAffix = makeFusionalAffixes(trialAffix, genitiveAffix);
    genQuadralAffix = makeFusionalAffixes(quadralAffix, genitiveAffix);
    genGreaterAffix = makeFusionalAffixes(greaterPluralAffix, genitiveAffix);
    genGeneralAffix = makeFusionalAffixes(generalAffix, genitiveAffix);
    genSingulativeAffix = makeFusionalAffixes(singulativeAffix, genitiveAffix);
    datSgAffix = makeFusionalAffixes(singularAffix, dativeAffix);
    datDualAffix = makeFusionalAffixes(dualAffix, dativeAffix);
    datPlAffix = makeFusionalAffixes(pluralAffix, dativeAffix);
    datCollAffix = makeFusionalAffixes(collectiveAffix, dativeAffix);
    datTrialAffix = makeFusionalAffixes(trialAffix, dativeAffix);
    datQuadralAffix = makeFusionalAffixes(quadralAffix, dativeAffix);
    datGreaterAffix = makeFusionalAffixes(greaterPluralAffix, dativeAffix);
    datGeneralAffix = makeFusionalAffixes(generalAffix, dativeAffix);
    datSingulativeAffix = makeFusionalAffixes(singulativeAffix, dativeAffix);
    ablSgAffix = makeFusionalAffixes(singularAffix, ablativeAffix);
    ablDualAffix = makeFusionalAffixes(dualAffix, ablativeAffix);
    ablPlAffix = makeFusionalAffixes(pluralAffix, ablativeAffix);
    ablCollAffix = makeFusionalAffixes(collectiveAffix, ablativeAffix);
    ablTrialAffix = makeFusionalAffixes(trialAffix, ablativeAffix);
    ablQuadralAffix = makeFusionalAffixes(quadralAffix, ablativeAffix);
    ablGreaterAffix = makeFusionalAffixes(greaterPluralAffix, ablativeAffix);
    ablGeneralAffix = makeFusionalAffixes(generalAffix, ablativeAffix);
    ablSingulativeAffix = makeFusionalAffixes(singulativeAffix, ablativeAffix);
    locSgAffix = makeFusionalAffixes(singularAffix, locativeAffix);
    locDualAffix = makeFusionalAffixes(dualAffix, locativeAffix);
    locPlAffix = makeFusionalAffixes(pluralAffix, locativeAffix);
    locCollAffix = makeFusionalAffixes(collectiveAffix, locativeAffix);
    locTrialAffix = makeFusionalAffixes(trialAffix, locativeAffix);
    locQuadralAffix = makeFusionalAffixes(quadralAffix, locativeAffix);
    locGreaterAffix = makeFusionalAffixes(greaterPluralAffix, locativeAffix);
    locGeneralAffix = makeFusionalAffixes(generalAffix, locativeAffix);
    locSingulativeAffix = makeFusionalAffixes(singulativeAffix, locativeAffix);
    ineSgAffix = makeFusionalAffixes(singularAffix, inessiveAffix);
    ineDualAffix = makeFusionalAffixes(dualAffix, inessiveAffix);
    inePlAffix = makeFusionalAffixes(pluralAffix, inessiveAffix);
    ineCollAffix = makeFusionalAffixes(collectiveAffix, inessiveAffix);
    ineQuadralAffix = makeFusionalAffixes(quadralAffix, inessiveAffix);
    ineTrialAffix = makeFusionalAffixes(trialAffix, inessiveAffix);
    ineGreaterAffix = makeFusionalAffixes(greaterPluralAffix, inessiveAffix);
    ineGeneralAffix = makeFusionalAffixes(generalAffix, inessiveAffix);
    ineSingulativeAffix = makeFusionalAffixes(singulativeAffix, inessiveAffix);
    delSgAffix = makeFusionalAffixes(singularAffix, delativeAffix);
    delDualAffix = makeFusionalAffixes(dualAffix, delativeAffix);
    delPlAffix = makeFusionalAffixes(pluralAffix, delativeAffix);
    delCollAffix = makeFusionalAffixes(collectiveAffix, delativeAffix);
    delTrialAffix = makeFusionalAffixes(trialAffix, delativeAffix);
    delQuadralAffix = makeFusionalAffixes(quadralAffix, delativeAffix);
    delGreaterAffix = makeFusionalAffixes(greaterPluralAffix, delativeAffix);
    delGeneralAffix = makeFusionalAffixes(generalAffix, delativeAffix);
    delSingulativeAffix = makeFusionalAffixes(singulativeAffix, delativeAffix);
    allSgAffix = makeFusionalAffixes(singularAffix, allativeAffix);
    allDualAffix = makeFusionalAffixes(dualAffix, allativeAffix);
    allPlAffix = makeFusionalAffixes(pluralAffix, allativeAffix);
    allCollAffix = makeFusionalAffixes(collectiveAffix, allativeAffix);
    allTrialAffix = makeFusionalAffixes(trialAffix, allativeAffix);
    allQuadralAffix = makeFusionalAffixes(quadralAffix, allativeAffix);
    allGreaterAffix = makeFusionalAffixes(greaterPluralAffix, allativeAffix);
    allGeneralAffix = makeFusionalAffixes(generalAffix, allativeAffix);
    allSingulativeAffix = makeFusionalAffixes(singulativeAffix, allativeAffix);
    instrSgAffix = makeFusionalAffixes(singularAffix, instrumentalAffix);
    instrDualAffix = makeFusionalAffixes(dualAffix, instrumentalAffix);
    instrPlAffix = makeFusionalAffixes(pluralAffix, instrumentalAffix);
    instrCollAffix = makeFusionalAffixes(collectiveAffix, instrumentalAffix);
    instrTrialAffix = makeFusionalAffixes(trialAffix, instrumentalAffix);
    instrQuadralAffix = makeFusionalAffixes(quadralAffix, instrumentalAffix);
    instrGreaterAffix = makeFusionalAffixes(greaterPluralAffix, instrumentalAffix);
    instrGeneralAffix = makeFusionalAffixes(generalAffix, instrumentalAffix);
    instrSingulativeAffix = makeFusionalAffixes(singulativeAffix, instrumentalAffix);
    animSgAffix = makeFusionalAffixes(singularAffix, animateAffix);
    animPlAffix = makeFusionalAffixes(pluralAffix, animateAffix);
    inanSgAffix = makeFusionalAffixes(singularAffix, inanimateAffix);
    inanPlAffix = makeFusionalAffixes(pluralAffix, inanimateAffix);
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

function makeNomColl(noun) {
    return inflectNouns(noun, nomCollAffix);
}

function makeNomTrial(noun) {
    return inflectNouns(noun, nomTrialAffix);
}

function makeNomQuadral(noun) {
    return inflectNouns(noun, nomQuadralAffix);
}

function makeNomGreater(noun) {
    return inflectNouns(noun, nomGreaterAffix);
}

function makeNomGeneral(noun) {
    return inflectNouns(noun, nomGeneralAffix);
}

function makeNomSingulative(noun) {
    return inflectNouns(noun, nomSingulativeAffix);
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

function makeAccColl(noun) {
    return inflectNouns(noun, accCollAffix);
}

function makeAccTrial(noun) {
    return inflectNouns(noun, accTrialAffix);
}

function makeAccQuadral(noun) {
    return inflectNouns(noun, accQuadralAffix);
}

function makeAccGreater(noun) {
    return inflectNouns(noun, accGreaterAffix);
}

function makeAccGeneral(noun) {
    return inflectNouns(noun, accGeneralAffix);
}

function makeAccSingulative(noun) {
    return inflectNouns(noun, accSingulativeAffix);
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

function makeGenColl(noun) {
    return inflectNouns(noun, genCollAffix);
}

function makeGenTrial(noun) {
    return inflectNouns(noun, genTrialAffix);
}

function makeGenQuadral(noun) {
    return inflectNouns(noun, genQuadralAffix);
}

function makeGenGeneral(noun) {
    return inflectNouns(noun, genGeneralAffix);
}

function makeGenSingulative(noun) {
    return inflectNouns(noun, genSingulativeAffix);
}

function makeGenGreater(noun) {
    return inflectNouns(noun, genGreaterAffix);
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

function makeDatColl(noun) {
    return inflectNouns(noun, datCollAffix);
}

function makeDatTrial(noun) {
    return inflectNouns(noun, datTrialAffix);
}

function makeDatQuadral(noun) {
    return inflectNouns(noun, datQuadralAffix);
}

function makeDatGreater(noun) {
    return inflectNouns(noun, datGreaterAffix);
}

function makeDatGeneral(noun) {
    return inflectNouns(noun, datGeneralAffix);
}

function makeDatSingulative(noun) {
    return inflectNouns(noun, datSingulativeAffix);
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

function makeAblColl(noun) {
    return inflectNouns(noun, ablCollAffix);
}

function makeAblTrial(noun) {
    return inflectNouns(noun, ablTrialAffix);
}

function makeAblQuadral(noun) {
    return inflectNouns(noun, ablQuadralAffix);
}

function makeAblGreater(noun) {
    return inflectNouns(noun, ablGreaterAffix);
}

function makeAblGeneral(noun) {
    return inflectNouns(noun, ablGeneralAffix);
}

function makeAblSingulative(noun) {
    return inflectNouns(noun, ablSingulativeAffix);
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

function makeLocColl(noun) {
    return inflectNouns(noun, locCollAffix);
}

function makeLocTrial(noun) {
    return inflectNouns(noun, locTrialAffix);
}

function makeLocQuadral(noun) {
    return inflectNouns(noun, locQuadralAffix);
}

function makeLocGreater(noun) {
    return inflectNouns(noun, locGreaterAffix);
}

function makeLocGeneral(noun) {
    return inflectNouns(noun, locGeneralAffix);
}

function makeLocSingulative(noun) {
    return inflectNouns(noun, locSingulativeAffix);
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

function makeIneColl(noun) {
    return inflectNouns(noun, ineCollAffix);
}

function makeIneTrial(noun) {
    return inflectNouns(noun, ineTrialAffix);
}

function makeIneQuadral(noun) {
    return inflectNouns(noun, ineQuadralAffix);
}

function makeIneGreater(noun) {
    return inflectNouns(noun, ineGreaterAffix);
}

function makeIneGeneral(noun) {
    return inflectNouns(noun, ineGeneralAffix);
}

function makeIneSingulative(noun) {
    return inflectNouns(noun, ineSingulativeAffix);
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

function makeDelColl(noun) {
    return inflectNouns(noun, delCollAffix);
}

function makeDelTrial(noun) {
    return inflectNouns(noun, delTrialAffix);
}

function makeDelQuadral(noun) {
    return inflectNouns(noun, delQuadralAffix);
}

function makeDelGeneral(noun) {
    return inflectNouns(noun, delGeneralAffix);
}

function makeDelGreater(noun) {
    return inflectNouns(noun, delGreaterAffix);
}

function makeDelSingulative(noun) {
    return inflectNouns(noun, delSingulativeAffix);
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

function makeAllColl(noun) {
    return inflectNouns(noun, allCollAffix);
}

function makeAllQuadral(noun) {
    return inflectNouns(noun, allQuadralAffix);
}

function makeAllTrial(noun) {
    return inflectNouns(noun, allTrialAffix);
}

function makeAllGreater(noun) {
    return inflectNouns(noun, allGreaterAffix);
}

function makeAllGeneral(noun) {
    return inflectNouns(noun, allGeneralAffix);
}

function makeAllSingulative(noun) {
    return inflectNouns(noun, allSingulativeAffix);
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

function makeInstrColl(noun) {
    return inflectNouns(noun, instrCollAffix);
}

function makeInstrTrial(noun) {
    return inflectNouns(noun, instrTrialAffix);
}

function makeInstrQuadral(noun) {
    return inflectNouns(noun, instrQuadralAffix);
}

function makeInstrGreater(noun) {
    return inflectNouns(noun, instrGreaterAffix);
}

function makeInstrGeneral(noun) {
    return inflectNouns(noun, instrGeneralAffix);
}

function makeInstrSingulative(noun) {
    return inflectNouns(noun, instrSingulativeAffix);
}

function makeAnimSingular(noun) {
    return inflectNouns(noun, animSgAffix);
};

function makeAnimPlural(noun) {
    return inflectNouns(noun, animPlAffix);
}

function makeInanSingular(noun) {
    return inflectNouns(noun, inanSgAffix);
};

function makeInanPlural(noun) {
    return inflectNouns(noun, inanPlAffix);
}

function listAffixesInIsolation(affix) {
    if(affix === "ːː" || affix === "ː") {
        return `bare noun itself with no affixes`
    } 
    if (genderNum < 9) {
        if(numberSuffixOrPrefix === "suffix") {
           return `suffix <i><strong>-${spell(soundChange("A" + affix ))}</i></strong>`;
        } else if (numberSuffixOrPrefix === "prefix") {
            return `prefix <i><strong>${spell(soundChange("X" + affix + "A"))}-</i></strong>`;
        } 
    } 
    if(genderNum > 8 && genderSuffixOrPrefix === "suffix") {
        return `suffix <i><strong>-${spell(soundChange("A" + affix ))}</i></strong>`;
    } else if(genderNum > 8 && genderSuffixOrPrefix === "prefix") {
        return `prefix <i><strong>${spell(soundChange("X" + affix + "A"))}-</i></strong>`;
    }
}

function determineGrammaticalNumber() {
    if(grammaticalNumber < 4) {
        if(caseNumber === 0 && genderNum < 9) {
            document.getElementById("fusional-no-gender-singular-plural").style.display = "block";
        };
        document.getElementById("grammatical-number-amount").innerHTML = "two";
        document.getElementById("grammatical-number-list").innerHTML = "singular and plural";
        return "singular-plural";
    };
    if(grammaticalNumber >= 5 && grammaticalNumber < 7) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-dual-plural").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual and plural. The dual signifies two of a noun";
        return "singular-dual-plural";
    };
    if(grammaticalNumber >= 7 && grammaticalNumber < 12) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-dual-plural-collective").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "four";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual, plural and collective. The dual signifies two of a noun while the collective refers to every instance, or all, of a noun";
        return "singular-dual-plural-collective";
    };
    if(grammaticalNumber >= 12 && grammaticalNumber < 15) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-dual-trial-plural").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "four";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual, trial and plural. The dual signifies two of a noun and the trial three";
        return "singular-dual-trial-plural";
    };
    if(grammaticalNumber >= 15 && grammaticalNumber < 18) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-dual-trial-quadral-plural").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "five";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual, trial, quadral and plural. The dual signifies two of a noun, the trial three and the quadral four";
        return "singular-dual-trial-quadral-plural";
    };
    if(grammaticalNumber >= 18 && grammaticalNumber < 21) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-plural-greater-plural").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = `singular, plural and greater plural. The greater plural signifies "a lot of X", "many X", "a great amount of", "a multitude of" and so on`;
        return "singular-plural-greater-plural";
    };
    if(grammaticalNumber >= 21 && grammaticalNumber < 24) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-plural-general").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = `singular, plural and general. The general number is used when the amount of a noun is irrelevant, or to refer to unnumbered instances of the noun in general e.g "I like dogs" (not specific dogs, just dogs in general)`;
        return "singular-plural-general";
    };
    if(grammaticalNumber >= 24 && grammaticalNumber < 27) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-general-plural").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "two";
        document.getElementById("grammatical-number-list").innerHTML = `general and plural. The general number is used when the amount of a noun is irrelevant, or to refer to unnumbered instances of the noun in general e.g "I like dogs" (not specific dogs, just dogs in general). Given the context it may also refer to a single noun. It is broadly a "non-plural" number`;
        return "general-plural";
    };
    if(grammaticalNumber >= 27 && grammaticalNumber < 30) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-general-singulative-plural").style.display = "block";
        } 
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = `general, singulative and plural. The general number is used when the amount of a noun is irrelevant, or to refer to unnumbered instances of the noun in general e.g "I like dogs" (not specific dogs, just dogs in general). The singulative is derived from the general and marks a specific and singular instance of a noun`;
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
    caseNumber = 0//Math.floor(Math.random() * 11)
    //there will be no cases if language is isolating
    if(chooseTypology() === "fusional") {
        //decides if the language has cases or not
        if(caseNumber !== 0) {
            document.getElementById("fusional-no-gender-case").style.display = "block";
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
        

    };
    if(determineGrammaticalNumber() === "singular-dual-plural-collective") {
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
        let collHeading = document.createElement("th");
        collHeading.innerHTML = `Collective`

        inflectionTable.appendChild(headingRow);
        headingRow.appendChild(emptyCell);
        headingRow.appendChild(sgHeading);
        headingRow.appendChild(dualHeading);
        headingRow.appendChild(plHeading);
        headingRow.appendChild(collHeading);


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
                if(make === makeNomColl) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "all ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "all ${nounArray[randomIndex]}"`
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
            let nomCollExamples = makeExamples(makeNomColl, countNounArrayPlural);

            let singularPluralNominative = document.createElement("p");
            singularPluralNominative.innerHTML = `The nominative case is used to mark the subject of a verb, the noun which is the performer of an action. The nominative singular is formed with the ${listAffixesInIsolation(nomSgAffix)}: ${nomSgExamples}.
            <br>The nominative dual is formed with the ${listAffixesInIsolation(nomDualAffix)}: ${nomDualExamples}.
            <br>The nominative plural is formed with the ${listAffixesInIsolation(nomPlAffix)}: ${nomPlExamples}.
            <br>The nominative collective is formed with the ${listAffixesInIsolation(nomCollAffix)}: ${nomCollExamples}`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralNominative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Nominative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            let collTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + nomSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + nomDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + nomPlAffix))}</i>`
                collTD.innerHTML = `-<i>${spell(soundChange("A" + nomCollAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(nomSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(nomDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(nomPlAffix +  "X"))}</i>-`;
                collTD.innerHTML = `-<i>${spell(soundChange("A" + nomCollAffix))}</i>`
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
            newRow.appendChild(collTD);
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
                if(make === makeAccColl) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "all ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "all ${nounArray[randomIndex]}"`
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
            let accCollExamples = makeExamples(makeAccColl, countNounArrayPlural);

            let singularDualPluralAccusative = document.createElement("p");
            singularDualPluralAccusative.innerHTML = `The accusative case is used to mark the object of a verb, the noun which is the recipient of an action. The accusative singular is formed with the ${listAffixesInIsolation(accSgAffix)}: ${accSgExamples}.
            <br>The accusative dual is formed with the ${listAffixesInIsolation(accDualAffix)}: ${accDualExamples}.;
            <br>The accusative plural is formed with the ${listAffixesInIsolation(accPlAffix)}: ${accPlExamples}.
            <br>The accusative collective is formed with the ${listAffixesInIsolation(accCollAffix)}: ${accCollExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralAccusative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Accusative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            let collTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + accSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + accDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + accPlAffix))}</i>`
                collTD.innerHTML = `-<i>${spell(soundChange("A" + accCollAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(accSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(accDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(accPlAffix +  "X"))}</i>-`;
                collTD.innerHTML = `<i>${spell(soundChange(accCollAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
            newRow.appendChild(collTD);
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
                if(make === makeGenColl) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of all ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of all ${nounArray[randomIndex]}"`
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
            let genCollExamples = makeExamples(makeGenColl, countNounArrayPlural);

            let singularDualPluralGenitive = document.createElement("p");
            singularDualPluralGenitive.innerHTML = `The genitive case is used to mark possession. The genitive singular is formed with the ${listAffixesInIsolation(genSgAffix)}: ${genSgExamples}.
            <br>The genitive dual is formed with the ${listAffixesInIsolation(genDualAffix)}: ${genDualExamples}.
            <br>The genitive plural is formed with the ${listAffixesInIsolation(genPlAffix)}: ${genPlExamples}.
            <br>The genitive collective is formed with the ${listAffixesInIsolation(genCollAffix)}: ${genCollExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralGenitive);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Genitive</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            let collTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + genSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + genDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + genPlAffix))}</i>`
                collTD.innerHTML = `-<i>${spell(soundChange("A" + genCollAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(genSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(genDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(genPlAffix +  "X"))}</i>-`;
                collTD.innerHTML = `<i>${spell(soundChange(genCollAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
            newRow.appendChild(collTD);
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
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "two ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "two ${nounArray[randomIndex]}"`
                    }
                }
                if(make === makeDatColl) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "all ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "all ${nounArray[randomIndex]}"`
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
            let datCollExamples = makeExamples(makeDatColl, countNounArrayPlural);

            let singularPluralDative = document.createElement("p");
            singularPluralDative.innerHTML = `The dative case is used to mark indirect objects, nouns that are not the direct recipients of an action. Such nouns in English occur after prepositions e.g the noun "boy" in "I gave a book to the boy. The dative singular is formed with the ${listAffixesInIsolation(datSgAffix)}: ${datSgExamples}.
            <br>The dative dual is formed with the ${listAffixesInIsolation(datDualAffix)}: ${datDualExamples}.
            <br>The dative plural is formed with the ${listAffixesInIsolation(datPlAffix)}: ${datPlExamples}.
            <br>The dative collective is formed with the ${listAffixesInIsolation(datCollAffix)}: ${datCollExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Dative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            let collTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + datSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + datDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + datPlAffix))}</i>`
                collTD.innerHTML = `-<i>${spell(soundChange("A" + datCollAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(datSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(datDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(datPlAffix +  "X"))}</i>-`;
                collTD.innerHTML = `<i>${spell(soundChange(datCollAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
            newRow.appendChild(collTD);
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
                if(make === makeAblColl) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "away from all ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "away from all ${nounArray[randomIndex]}"`
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
            let ablCollExamples = makeExamples(makeAblColl, countNounArrayPlural);

            let singularPluralAblative = document.createElement("p");
            singularPluralAblative.innerHTML = `The ablative case is used to mark motion away from a noun. The ablative singular is formed with the ${listAffixesInIsolation(ablSgAffix)}: ${ablSgExamples}.
            <br>The ablative dual is formed with the ${listAffixesInIsolation(ablDualAffix)}: ${ablDualExamples}.
            <br>The ablative plural is formed with the ${listAffixesInIsolation(ablPlAffix)}: ${ablPlExamples}.
            <br>The ablative collective is formed with the ${listAffixesInIsolation(ablCollAffix)}: ${ablCollExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAblative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Ablative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            let collTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ablSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + ablDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + ablPlAffix))}</i>`
                collTD.innerHTML = `-<i>${spell(soundChange("A" + ablCollAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ablSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(ablDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(ablPlAffix +  "X"))}</i>-`;
                collTD.innerHTML = `<i>${spell(soundChange(ablCollAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
            newRow.appendChild(collTD);
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
                if(make === makeLocColl) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "on all ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "on all ${nounArray[randomIndex]}"`
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
            let locCollExamples = makeExamples(makeLocColl, countNounArrayPlural);

            let singularPluralLocative = document.createElement("p");
            singularPluralLocative.innerHTML = `The locative case is used to mark a noun used with an adposition e.g "in the forest" or "on a mountain". The locative singular is formed with the ${listAffixesInIsolation(locSgAffix)}: ${locSgExamples}.
            <br>The locative dual is formed with the ${listAffixesInIsolation(locDualAffix)}: ${locDualExamples}.
            <br>The locative plural is formed with the ${listAffixesInIsolation(locPlAffix)}: ${locPlExamples}.
            <br>The locative collective is formed with the ${listAffixesInIsolation(locCollAffix)}: ${locCollExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralLocative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Locative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            let collTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + locSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + locDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + locPlAffix))}</i>`
                collTD.innerHTML = `-<i>${spell(soundChange("A" + locCollAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(locSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(locDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(locPlAffix +  "X"))}</i>-`;
                collTD.innerHTML = `<i>${spell(soundChange(locCollAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
            newRow.appendChild(collTD);
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
                if(make === makeIneColl) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in all ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in all ${nounArray[randomIndex]}"`
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
            let ineCollExamples = makeExamples(makeIneColl, countNounArrayPlural);

            let singularPluralInessive = document.createElement("p");
            singularPluralInessive.innerHTML = `The inessive case is used to mark "in" e.g "in the forest" or "on a mountain". The inessive singular is formed with the ${listAffixesInIsolation(ineSgAffix)}: ${ineSgExamples}.
            <br>The inessive dual is formed with the ${listAffixesInIsolation(ineDualAffix)}: ${ineDualExamples}
            <br>The inessive plural is formed with the ${listAffixesInIsolation(inePlAffix)}: ${inePlExamples}.
            <br>The inessive collective is formed with the ${listAffixesInIsolation(ineCollAffix)}: ${ineCollExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInessive);
        
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Inessive</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            let collTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ineSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + ineDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + inePlAffix))}</i>`
                collTD.innerHTML = `-<i>${spell(soundChange("A" + ineCollAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ineSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(ineDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(inePlAffix +  "X"))}</i>-`;
                collTD.innerHTML = `<i>${spell(soundChange(ineCollAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
            newRow.appendChild(collTD);
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
                if(make === makeDelColl) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from all ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from all ${nounArray[randomIndex]}"`
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
            let delCollExamples = makeExamples(makeDelColl, countNounArrayPlural);

            let singularPluralDelative = document.createElement("p");
            singularPluralDelative.innerHTML = `The delative case is used to mark "in" e.g "in the forest" or "on a mountain". The delative singular is formed with the ${listAffixesInIsolation(delSgAffix)}: ${delSgExamples}.
            <br>The delative dual is formed with the ${listAffixesInIsolation(delDualAffix)}: ${delDualExamples}.
            <br>The delative plural is formed with the ${listAffixesInIsolation(delPlAffix)}: ${delPlExamples}.
            <br>The delative collective is formed with the ${listAffixesInIsolation(delCollAffix)}: ${delCollExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDelative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Delative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            let collTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + delSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + delDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + delPlAffix))}</i>`
                collTD.innerHTML = `-<i>${spell(soundChange("A" + delCollAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(delSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(delDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(delPlAffix +  "X"))}</i>-`;
                collTD.innerHTML = `<i>${spell(soundChange(delCollAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
            newRow.appendChild(collTD);
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
                if(make === makeAllColl) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to all ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to all ${nounArray[randomIndex]}"`
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
            let allCollExamples = makeExamples(makeAllColl, countNounArrayPlural);

            let singularPluralAllative = document.createElement("p");
            singularPluralAllative.innerHTML = `The allative case is used to mark motion towards a noun e.g "to the forest" or "to a mountain". The allative singular is formed with the ${listAffixesInIsolation(allSgAffix)}: ${allSgExamples}.
            <br>The allative dual is formed with the ${listAffixesInIsolation(allDualAffix)}: ${allDualExamples}.
            <br>The allative plural is formed with the ${listAffixesInIsolation(allPlAffix)}: ${allPlExamples}.
            <br>The allative collective is formed with the ${listAffixesInIsolation(allCollAffix)}: ${allCollExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAllative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Allative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            let collTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + allSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + allDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + allPlAffix))}</i>`
                collTD.innerHTML = `-<i>${spell(soundChange("A" + allCollAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(allSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(allDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(allPlAffix +  "X"))}</i>-`;
                collTD.innerHTML = `<i>${spell(soundChange(allCollAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
            newRow.appendChild(collTD);
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
                if(make === makeInstrColl) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with all ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with all ${nounArray[randomIndex]}"`
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
            let instrCollExamples = makeExamples(makeInstrColl, countNounArrayPlural);

            let singularPluralInstrumental = document.createElement("p");
            singularPluralInstrumental.innerHTML = `The instrumental case is used to mark a noun by which an action is achieved i.e "I walked <u>by land</u>" or "I stabbed him <u>with a knife</u>". The instrumental singular is formed with the ${listAffixesInIsolation(instrSgAffix)}: ${instrSgExamples}.
            <br>The instrumental dual is formed with the ${listAffixesInIsolation(instrDualAffix)}: ${instrDualExamples}
            <br>The instrumental plural is formed with the ${listAffixesInIsolation(instrPlAffix)}: ${instrPlExamples}.
            <br>The instrumental collective is formed with the ${listAffixesInIsolation(instrCollAffix)}: ${instrCollExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInstrumental);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Instrumental</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let plTD = document.createElement("td");
            let collTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + instrSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + instrDualAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + instrPlAffix))}</i>`
                collTD.innerHTML = `-<i>${spell(soundChange("A" + instrCollAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(instrSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(instrDualAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(instrPlAffix +  "X"))}</i>-`;
                collTD.innerHTML = `<i>${spell(soundChange(instrCollAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(plTD);
            newRow.appendChild(collTD);
        }

        tableDiv.appendChild(inflectionTable)
        document.getElementById("fusional-no-gender-case-explanation").appendChild(tableDiv);
        

    };
    if(determineGrammaticalNumber() === "singular-dual-trial-plural") {
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
        let trialHeading = document.createElement("th");
        trialHeading.innerHTML = `Trial`
        let plHeading = document.createElement("th");
        plHeading.innerHTML = `Plural`

        inflectionTable.appendChild(headingRow);
        headingRow.appendChild(emptyCell);
        headingRow.appendChild(sgHeading);
        headingRow.appendChild(dualHeading);
        headingRow.appendChild(trialHeading);
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
                if(make === makeNomTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "three ${nounArray[randomIndex]}"`
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
            let nomTrialExamples = makeExamples(makeNomTrial, countNounArrayPlural);
            let nomPlExamples = makeExamples(makeNomPlural, countNounArrayPlural);

            let singularPluralNominative = document.createElement("p");
            singularPluralNominative.innerHTML = `The nominative case is used to mark the subject of a verb, the noun which is the performer of an action. The nominative singular is formed with the ${listAffixesInIsolation(nomSgAffix)}: ${nomSgExamples}.
            <br>The nominative dual is formed with the ${listAffixesInIsolation(nomDualAffix)}: ${nomDualExamples}.
            <br>The nominative trial is formed with the ${listAffixesInIsolation(nomTrialAffix)}: ${nomTrialExamples}.
            <br>The nominative plural is formed with the ${listAffixesInIsolation(nomPlAffix)}: ${nomPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralNominative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Nominative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + nomSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + nomDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + nomTrialAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + nomPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(nomSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(nomDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(nomTrialAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(nomPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
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
                if(make === makeAccTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "three ${nounArray[randomIndex]}"`
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
            let accTrialExamples = makeExamples(makeAccTrial, countNounArrayPlural);
            let accPlExamples = makeExamples(makeAccPlural, countNounArrayPlural);

            let singularDualPluralAccusative = document.createElement("p");
            singularDualPluralAccusative.innerHTML = `The accusative case is used to mark the object of a verb, the noun which is the recipient of an action. The accusative singular is formed with the ${listAffixesInIsolation(accSgAffix)}: ${accSgExamples}.
            <br>The accusative dual is formed with the ${listAffixesInIsolation(accDualAffix)}: ${accDualExamples}.
            <br>The accusative trial is formed with the ${listAffixesInIsolation(accTrialAffix)}: ${accTrialExamples}.
            <br>The accusative plural is formed with the ${listAffixesInIsolation(accPlAffix)}: ${accPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralAccusative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Accusative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + accSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + accDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + accTrialAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + accPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(accSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(accDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(accTrialAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(accPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD)
            newRow.appendChild(trialTD);;
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
                if(make === makeGenTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of three ${nounArray[randomIndex]}"`
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
            let genTrialExamples = makeExamples(makeGenTrial, countNounArrayPlural);
            let genPlExamples = makeExamples(makeGenPlural, countNounArrayPlural);

            let singularDualPluralGenitive = document.createElement("p");
            singularDualPluralGenitive.innerHTML = `The genitive case is used to mark possession. The genitive singular is formed with the ${listAffixesInIsolation(genSgAffix)}: ${genSgExamples}.
            <br>The genitive dual is formed with the ${listAffixesInIsolation(genDualAffix)}: ${genDualExamples}.
            <br>The genitive trial is formed with the ${listAffixesInIsolation(genTrialAffix)}: ${genTrialExamples}.
            <br>The genitive plural is formed with the ${listAffixesInIsolation(genPlAffix)}: ${genPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralGenitive);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Genitive</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + genSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + genDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + genTrialAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + genPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(genSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(genDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(genTrialAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(genPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
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
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "two ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "two ${nounArray[randomIndex]}"`
                    }
                }
                if(make === makeDatTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "three ${nounArray[randomIndex]}"`
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
            let datTrialExamples = makeExamples(makeDatTrial, countNounArrayPlural);
            let datPlExamples = makeExamples(makeDatPlural, countNounArrayPlural);

            let singularPluralDative = document.createElement("p");
            singularPluralDative.innerHTML = `The dative case is used to mark indirect objects, nouns that are not the direct recipients of an action. Such nouns in English occur after prepositions e.g the noun "boy" in "I gave a book to the boy. The dative singular is formed with the ${listAffixesInIsolation(datSgAffix)}: ${datSgExamples}.
            <br>The dative dual is formed with the ${listAffixesInIsolation(datDualAffix)}: ${datDualExamples}.
            <br>The dative trial is formed with the ${listAffixesInIsolation(datTrialAffix)}: ${datTrialExamples}.
            <br>The dative plural is formed with the ${listAffixesInIsolation(datPlAffix)}: ${datPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Dative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + datSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + datDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + datTrialAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + datPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(datSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(datDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(datTrialAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(datPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
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
                if(make === makeAblTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "away from three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "away from three ${nounArray[randomIndex]}"`
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
            let ablTrialExamples = makeExamples(makeAblTrial, countNounArrayPlural);
            let ablPlExamples = makeExamples(makeAblPlural, countNounArrayPlural);

            let singularPluralAblative = document.createElement("p");
            singularPluralAblative.innerHTML = `The ablative case is used to mark motion away from a noun. The ablative singular is formed with the ${listAffixesInIsolation(ablSgAffix)}: ${ablSgExamples}.
            <br>The ablative dual is formed with the ${listAffixesInIsolation(ablDualAffix)}: ${ablDualExamples}.
            <br>The ablative trial is formed with the ${listAffixesInIsolation(ablTrialAffix)}: ${ablTrialExamples}.
            <br>The ablative plural is formed with the ${listAffixesInIsolation(ablPlAffix)}: ${ablPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAblative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Ablative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ablSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + ablDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + ablTrialAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + ablPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ablSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(ablDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(ablTrialAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(ablPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
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
                if(make === makeLocTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "on three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "on three ${nounArray[randomIndex]}"`
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
            let locTrialExamples = makeExamples(makeLocTrial, countNounArrayPlural);
            let locPlExamples = makeExamples(makeLocPlural, countNounArrayPlural);

            let singularPluralLocative = document.createElement("p");
            singularPluralLocative.innerHTML = `The locative case is used to mark a noun used with an adposition e.g "in the forest" or "on a mountain". The locative singular is formed with the ${listAffixesInIsolation(locSgAffix)}: ${locSgExamples}.
            <br>The locative dual is formed with the ${listAffixesInIsolation(locDualAffix)}: ${locDualExamples}.
            <br>The locative trial is formed with the ${listAffixesInIsolation(locTrialAffix)}: ${locTrialExamples}.
            <br>The locative plural is formed with the ${listAffixesInIsolation(locPlAffix)}: ${locPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralLocative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Locative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + locSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + locDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + locTrialAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + locPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(locSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(locDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(locTrialAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(locPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
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
                if(make === makeIneTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in three ${nounArray[randomIndex]}"`
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
            let ineTrialExamples = makeExamples(makeIneTrial, countNounArrayPlural);
            let inePlExamples = makeExamples(makeInePlural, countNounArrayPlural);

            let singularPluralInessive = document.createElement("p");
            singularPluralInessive.innerHTML = `The inessive case is used to mark "in" e.g "in the forest" or "on a mountain". The inessive singular is formed with the ${listAffixesInIsolation(ineSgAffix)}: ${ineSgExamples}.
            <br>The inessive dual is formed with the ${listAffixesInIsolation(ineDualAffix)}: ${ineDualExamples}.
            <br>The inessive trial is formed with the ${listAffixesInIsolation(ineTrialAffix)}: ${ineTrialExamples}.
            <br>The inessive plural is formed with the ${listAffixesInIsolation(inePlAffix)}: ${inePlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInessive);
        
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Inessive</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ineSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + ineDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + ineTrialAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + inePlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ineSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(ineDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(ineTrialAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(inePlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
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
                if(make === makeDelTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from three ${nounArray[randomIndex]}"`
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
            let delTrialExamples = makeExamples(makeDelTrial, countNounArrayPlural);
            let delPlExamples = makeExamples(makeDelPlural, countNounArrayPlural);

            let singularPluralDelative = document.createElement("p");
            singularPluralDelative.innerHTML = `The delative case is used to mark "in" e.g "in the forest" or "on a mountain". The delative singular is formed with the ${listAffixesInIsolation(delSgAffix)}: ${delSgExamples}.
            <br>The delative dual is formed with the ${listAffixesInIsolation(delDualAffix)}: ${delDualExamples}.
            <br>The delative trial is formed with the ${listAffixesInIsolation(delTrialAffix)}: ${delTrialExamples}.
            <br>The delative plural is formed with the ${listAffixesInIsolation(delPlAffix)}: ${delPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDelative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Delative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + delSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + delDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + delTrialAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + delPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(delSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(delDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(delTrialAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(delPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
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
                if(make === makeAllTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to three ${nounArray[randomIndex]}"`
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
            let allTrialExamples = makeExamples(makeAllTrial, countNounArrayPlural);
            let allPlExamples = makeExamples(makeAllPlural, countNounArrayPlural);

            let singularPluralAllative = document.createElement("p");
            singularPluralAllative.innerHTML = `The allative case is used to mark motion towards a noun e.g "to the forest" or "to a mountain". The allative singular is formed with the ${listAffixesInIsolation(allSgAffix)}: ${allSgExamples}.
            <br>The allative dual is formed with the ${listAffixesInIsolation(allDualAffix)}: ${allDualExamples}.
            <br>The allative trial is formed with the ${listAffixesInIsolation(allTrialAffix)}: ${allTrialExamples}.
            <br>The allative plural is formed with the ${listAffixesInIsolation(allPlAffix)}: ${allPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAllative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Allative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + allSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + allDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + allTrialAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + allPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(allSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(allDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(allTrialAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(allPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
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
                if(make === makeInstrTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with three ${nounArray[randomIndex]}"`
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
            let instrTrialExamples = makeExamples(makeInstrTrial, countNounArrayPlural);
            let instrPlExamples = makeExamples(makeInstrPlural, countNounArrayPlural);

            let singularPluralInstrumental = document.createElement("p");
            singularPluralInstrumental.innerHTML = `The instrumental case is used to mark a noun by which an action is achieved i.e "I walked <u>by land</u>" or "I stabbed him <u>with a knife</u>". The instrumental singular is formed with the ${listAffixesInIsolation(instrSgAffix)}: ${instrSgExamples}.
            <br>The instrumental dual is formed with the ${listAffixesInIsolation(instrDualAffix)}: ${instrDualExamples}.
            <br>The instrumental trial is formed with the ${listAffixesInIsolation(instrTrialAffix)}: ${instrTrialExamples}.
            <br>The instrumental plural is formed with the ${listAffixesInIsolation(instrPlAffix)}: ${instrPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInstrumental);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Instrumental</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + instrSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + instrDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + instrTrialAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + instrPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(instrSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(instrDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(instrTrialAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(instrPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
            newRow.appendChild(plTD);
        }

        tableDiv.appendChild(inflectionTable)
        document.getElementById("fusional-no-gender-case-explanation").appendChild(tableDiv);
        

    };
    if(determineGrammaticalNumber() === "singular-dual-trial-quadral-plural") {
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
        let trialHeading = document.createElement("th");
        trialHeading.innerHTML = `Trial`
        let quadralHeading = document.createElement("th");
        quadralHeading.innerHTML = `Quadral`
        let plHeading = document.createElement("th");
        plHeading.innerHTML = `Plural`

        inflectionTable.appendChild(headingRow);
        headingRow.appendChild(emptyCell);
        headingRow.appendChild(sgHeading);
        headingRow.appendChild(dualHeading);
        headingRow.appendChild(trialHeading);
        headingRow.appendChild(quadralHeading);
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
                if(make === makeNomTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "three ${nounArray[randomIndex]}"`
                    }
                }
                if(make === makeNomQuadral) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "four ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "four ${nounArray[randomIndex]}"`
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
            let nomTrialExamples = makeExamples(makeNomTrial, countNounArrayPlural);
            let nomQuadralExamples = makeExamples(makeNomQuadral, countNounArrayPlural);
            let nomPlExamples = makeExamples(makeNomPlural, countNounArrayPlural);

            let singularPluralNominative = document.createElement("p");
            singularPluralNominative.innerHTML = `The nominative case is used to mark the subject of a verb, the noun which is the performer of an action. The nominative singular is formed with the ${listAffixesInIsolation(nomSgAffix)}: ${nomSgExamples}.
            <br>The nominative dual is formed with the ${listAffixesInIsolation(nomDualAffix)}: ${nomDualExamples}.
            <br>The nominative trial is formed with the ${listAffixesInIsolation(nomTrialAffix)}: ${nomTrialExamples}.
             <br>The nominative quadral is formed with the ${listAffixesInIsolation(nomQuadralAffix)}: ${nomQuadralExamples}.
            <br>The nominative plural is formed with the ${listAffixesInIsolation(nomPlAffix)}: ${nomPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralNominative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Nominative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let quadralTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + nomSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + nomDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + nomTrialAffix))}</i>`
                quadralTD.innerHTML = `-<i>${spell(soundChange("A" + nomQuadralAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + nomPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(nomSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(nomDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(nomTrialAffix + "X"))}</i>-`;
                quadralTD.innerHTML = `<i>${spell(soundChange(nomQuadralAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(nomPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
            newRow.appendChild(quadralTD);
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
                if(make === makeAccTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "three ${nounArray[randomIndex]}"`
                    }
                }
                if(make === makeAccQuadral) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "four ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "four ${nounArray[randomIndex]}"`
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
            let accTrialExamples = makeExamples(makeAccTrial, countNounArrayPlural);
            let accQuadralExamples = makeExamples(makeAccQuadral, countNounArrayPlural);
            let accPlExamples = makeExamples(makeAccPlural, countNounArrayPlural);

            let singularDualPluralAccusative = document.createElement("p");
            singularDualPluralAccusative.innerHTML = `The accusative case is used to mark the object of a verb, the noun which is the recipient of an action. The accusative singular is formed with the ${listAffixesInIsolation(accSgAffix)}: ${accSgExamples}.
            <br>The accusative dual is formed with the ${listAffixesInIsolation(accDualAffix)}: ${accDualExamples}.
            <br>The accusative trial is formed with the ${listAffixesInIsolation(accTrialAffix)}: ${accTrialExamples}.
            <br>The accusative quadral is formed with the ${listAffixesInIsolation(accQuadralAffix)}: ${accQuadralExamples}.
            <br>The accusative plural is formed with the ${listAffixesInIsolation(accPlAffix)}: ${accPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralAccusative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Accusative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let quadralTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + accSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + accDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + accTrialAffix))}</i>`
                quadralTD.innerHTML = `-<i>${spell(soundChange("A" + accQuadralAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + accPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(accSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(accDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(accTrialAffix + "X"))}</i>-`;
                quadralTD.innerHTML = `<i>${spell(soundChange(accQuadralAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(accPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD)
            newRow.appendChild(trialTD);
            newRow.appendChild(quadralTD);
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
                if(make === makeGenTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of three ${nounArray[randomIndex]}"`
                    }
                }
                if(make === makeGenQuadral) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of four ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of four ${nounArray[randomIndex]}"`
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
            let genTrialExamples = makeExamples(makeGenTrial, countNounArrayPlural);
            let genQuadralExamples = makeExamples(makeGenQuadral, countNounArrayPlural);
            let genPlExamples = makeExamples(makeGenPlural, countNounArrayPlural);

            let singularDualPluralGenitive = document.createElement("p");
            singularDualPluralGenitive.innerHTML = `The genitive case is used to mark possession. The genitive singular is formed with the ${listAffixesInIsolation(genSgAffix)}: ${genSgExamples}.
            <br>The genitive dual is formed with the ${listAffixesInIsolation(genDualAffix)}: ${genDualExamples}.
            <br>The genitive trial is formed with the ${listAffixesInIsolation(genTrialAffix)}: ${genTrialExamples}.
            <br>The genitive quadral is formed with the ${listAffixesInIsolation(genQuadralAffix)}: ${genQuadralExamples}.
            <br>The genitive plural is formed with the ${listAffixesInIsolation(genPlAffix)}: ${genPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralGenitive);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Genitive</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let quadralTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + genSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + genDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + genTrialAffix))}</i>`
                quadralTD.innerHTML = `-<i>${spell(soundChange("A" + genQuadralAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + genPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(genSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(genDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(genTrialAffix + "X"))}</i>-`;
                quadralTD.innerHTML = `<i>${spell(soundChange(genQuadralAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(genPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
            newRow.appendChild(quadralTD);
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
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "two ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "two ${nounArray[randomIndex]}"`
                    }
                }
                if(make === makeDatTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "three ${nounArray[randomIndex]}"`
                    }
                }
                if(make === makeDatQuadral) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "four ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "four ${nounArray[randomIndex]}"`
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
            let datTrialExamples = makeExamples(makeDatTrial, countNounArrayPlural);
            let datQuadralExamples = makeExamples(makeDatQuadral, countNounArrayPlural);
            let datPlExamples = makeExamples(makeDatPlural, countNounArrayPlural);

            let singularPluralDative = document.createElement("p");
            singularPluralDative.innerHTML = `The dative case is used to mark indirect objects, nouns that are not the direct recipients of an action. Such nouns in English occur after prepositions e.g the noun "boy" in "I gave a book to the boy. The dative singular is formed with the ${listAffixesInIsolation(datSgAffix)}: ${datSgExamples}.
            <br>The dative dual is formed with the ${listAffixesInIsolation(datDualAffix)}: ${datDualExamples}.
            <br>The dative trial is formed with the ${listAffixesInIsolation(datTrialAffix)}: ${datTrialExamples}.
            <br>The dative quadral is formed with the ${listAffixesInIsolation(datQuadralAffix)}: ${datQuadralExamples}.
            <br>The dative plural is formed with the ${listAffixesInIsolation(datPlAffix)}: ${datPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Dative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let quadralTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + datSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + datDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + datTrialAffix))}</i>`
                quadralTD.innerHTML = `-<i>${spell(soundChange("A" + datQuadralAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + datPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(datSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(datDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(datTrialAffix + "X"))}</i>-`;
                quadralTD.innerHTML = `<i>${spell(soundChange(datQuadralAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(datPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
            newRow.appendChild(quadralTD);
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
                if(make === makeAblTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "away from three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "away from three ${nounArray[randomIndex]}"`
                    }
                }
                if(make === makeAblQuadral) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "away from four ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "away from four ${nounArray[randomIndex]}"`
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
            let ablTrialExamples = makeExamples(makeAblTrial, countNounArrayPlural);
            let ablQuadralExamples = makeExamples(makeAblQuadral, countNounArrayPlural);
            let ablPlExamples = makeExamples(makeAblPlural, countNounArrayPlural);

            let singularPluralAblative = document.createElement("p");
            singularPluralAblative.innerHTML = `The ablative case is used to mark motion away from a noun. The ablative singular is formed with the ${listAffixesInIsolation(ablSgAffix)}: ${ablSgExamples}.
            <br>The ablative dual is formed with the ${listAffixesInIsolation(ablDualAffix)}: ${ablDualExamples}.
            <br>The ablative trial is formed with the ${listAffixesInIsolation(ablTrialAffix)}: ${ablTrialExamples}.
            <br>The ablative quadral is formed with the ${listAffixesInIsolation(ablQuadralAffix)}: ${ablTrialExamples}.
            <br>The ablative plural is formed with the ${listAffixesInIsolation(ablPlAffix)}: ${ablPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAblative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Ablative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let quadralTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ablSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + ablDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + ablTrialAffix))}</i>`
                quadralTD.innerHTML = `-<i>${spell(soundChange("A" + ablQuadralAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + ablPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ablSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(ablDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(ablTrialAffix + "X"))}</i>-`;
                quadralTD.innerHTML = `<i>${spell(soundChange(ablQuadralAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(ablPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
            newRow.appendChild(quadralTD);
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
                if(make === makeLocTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "on three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "on three ${nounArray[randomIndex]}"`
                    }
                }
                if(make === makeLocQuadral) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "on four ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "on four ${nounArray[randomIndex]}"`
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
            let locTrialExamples = makeExamples(makeLocTrial, countNounArrayPlural);
            let locQuadralExamples = makeExamples(makeLocQuadral, countNounArrayPlural);
            let locPlExamples = makeExamples(makeLocPlural, countNounArrayPlural);

            let singularPluralLocative = document.createElement("p");
            singularPluralLocative.innerHTML = `The locative case is used to mark a noun used with an adposition e.g "in the forest" or "on a mountain". The locative singular is formed with the ${listAffixesInIsolation(locSgAffix)}: ${locSgExamples}.
            <br>The locative dual is formed with the ${listAffixesInIsolation(locDualAffix)}: ${locDualExamples}.
            <br>The locative trial is formed with the ${listAffixesInIsolation(locTrialAffix)}: ${locTrialExamples}.
            <br>The locative quadral is formed with the ${listAffixesInIsolation(locQuadralAffix)}: ${locQuadralExamples}.
            <br>The locative plural is formed with the ${listAffixesInIsolation(locPlAffix)}: ${locPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralLocative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Locative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let quadralTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + locSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + locDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + locTrialAffix))}</i>`
                quadralTD.innerHTML = `-<i>${spell(soundChange("A" + locQuadralAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + locPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(locSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(locDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(locTrialAffix + "X"))}</i>-`;
                quadralTD.innerHTML = `<i>${spell(soundChange(locQuadralAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(locPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
            newRow.appendChild(quadralTD);
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
                if(make === makeIneTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in three ${nounArray[randomIndex]}"`
                    }
                }
                if(make === makeIneQuadral) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in four ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in four ${nounArray[randomIndex]}"`
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
            let ineTrialExamples = makeExamples(makeIneTrial, countNounArrayPlural);
            let ineQuadralExamples = makeExamples(makeIneQuadral, countNounArrayPlural);
            let inePlExamples = makeExamples(makeInePlural, countNounArrayPlural);

            let singularPluralInessive = document.createElement("p");
            singularPluralInessive.innerHTML = `The inessive case is used to mark "in" e.g "in the forest" or "on a mountain". The inessive singular is formed with the ${listAffixesInIsolation(ineSgAffix)}: ${ineSgExamples}.
            <br>The inessive dual is formed with the ${listAffixesInIsolation(ineDualAffix)}: ${ineDualExamples}.
            <br>The inessive trial is formed with the ${listAffixesInIsolation(ineTrialAffix)}: ${ineTrialExamples}.
            <br>The inessive quadral is formed with the ${listAffixesInIsolation(ineQuadralAffix)}: ${ineQuadralExamples}.
            <br>The inessive plural is formed with the ${listAffixesInIsolation(inePlAffix)}: ${inePlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInessive);
        
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Inessive</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let quadralTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ineSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + ineDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + ineTrialAffix))}</i>`
                quadralTD.innerHTML = `-<i>${spell(soundChange("A" + ineQuadralAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + inePlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ineSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(ineDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(ineTrialAffix + "X"))}</i>-`;
                quadralTD.innerHTML = `<i>${spell(soundChange(ineQuadralAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(inePlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
            newRow.appendChild(quadralTD);
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
                if(make === makeDelTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from three ${nounArray[randomIndex]}"`
                    } 
                }
                if(make === makeDelQuadral) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from four ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from four ${nounArray[randomIndex]}"`
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
            let delTrialExamples = makeExamples(makeDelTrial, countNounArrayPlural);
            let delQuadralExamples = makeExamples(makeDelQuadral, countNounArrayPlural);
            let delPlExamples = makeExamples(makeDelPlural, countNounArrayPlural);

            let singularPluralDelative = document.createElement("p");
            singularPluralDelative.innerHTML = `The delative case is used to mark "in" e.g "in the forest" or "on a mountain". The delative singular is formed with the ${listAffixesInIsolation(delSgAffix)}: ${delSgExamples}.
            <br>The delative dual is formed with the ${listAffixesInIsolation(delDualAffix)}: ${delDualExamples}.
            <br>The delative trial is formed with the ${listAffixesInIsolation(delTrialAffix)}: ${delTrialExamples}.
            <br>The delative quadral is formed with the ${listAffixesInIsolation(delQuadralAffix)}: ${delQuadralExamples}.
            <br>The delative plural is formed with the ${listAffixesInIsolation(delPlAffix)}: ${delPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDelative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Delative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let quadralTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + delSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + delDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + delTrialAffix))}</i>`
                quadralTD.innerHTML = `-<i>${spell(soundChange("A" + delQuadralAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + delPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(delSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(delDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(delTrialAffix + "X"))}</i>-`;
                quadralTD.innerHTML = `<i>${spell(soundChange(delQuadralAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(delPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
            newRow.appendChild(quadralTD);
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
                if(make === makeAllTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to three ${nounArray[randomIndex]}"`
                    }
                }
                if(make === makeAllQuadral) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to four ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to four ${nounArray[randomIndex]}"`
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
            let allTrialExamples = makeExamples(makeAllTrial, countNounArrayPlural);
            let allQuadralExamples = makeExamples(makeAllQuadral, countNounArrayPlural);
            let allPlExamples = makeExamples(makeAllPlural, countNounArrayPlural);

            let singularPluralAllative = document.createElement("p");
            singularPluralAllative.innerHTML = `The allative case is used to mark motion towards a noun e.g "to the forest" or "to a mountain". The allative singular is formed with the ${listAffixesInIsolation(allSgAffix)}: ${allSgExamples}.
            <br>The allative dual is formed with the ${listAffixesInIsolation(allDualAffix)}: ${allDualExamples}.
            <br>The allative trial is formed with the ${listAffixesInIsolation(allTrialAffix)}: ${allTrialExamples}.
            <br>The allative quadral is formed with the ${listAffixesInIsolation(allQuadralAffix)}: ${allQuadralExamples}.
            <br>The allative plural is formed with the ${listAffixesInIsolation(allPlAffix)}: ${allPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAllative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Allative</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let quadralTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + allSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + allDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + allTrialAffix))}</i>`
                quadralTD.innerHTML = `-<i>${spell(soundChange("A" + allQuadralAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + allPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(allSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(allDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(allTrialAffix + "X"))}</i>-`;
                quadralTD.innerHTML = `<i>${spell(soundChange(allQuadralAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(allPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
            newRow.appendChild(quadralTD);
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
                if(make === makeInstrTrial) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with three ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with three ${nounArray[randomIndex]}"`
                    }
                }
                if(make === makeInstrQuadral) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with four ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with four ${nounArray[randomIndex]}"`
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
            let instrTrialExamples = makeExamples(makeInstrTrial, countNounArrayPlural);
            let instrQuadralExamples = makeExamples(makeInstrQuadral, countNounArrayPlural);
            let instrPlExamples = makeExamples(makeInstrPlural, countNounArrayPlural);

            let singularPluralInstrumental = document.createElement("p");
            singularPluralInstrumental.innerHTML = `The instrumental case is used to mark a noun by which an action is achieved i.e "I walked <u>by land</u>" or "I stabbed him <u>with a knife</u>". The instrumental singular is formed with the ${listAffixesInIsolation(instrSgAffix)}: ${instrSgExamples}.
            <br>The instrumental dual is formed with the ${listAffixesInIsolation(instrDualAffix)}: ${instrDualExamples}.
            <br>The instrumental trial is formed with the ${listAffixesInIsolation(instrTrialAffix)}: ${instrTrialExamples}.
            <br>The instrumental quadral is formed with the ${listAffixesInIsolation(instrQuadralAffix)}: ${instrQuadralExamples}.
            <br>The instrumental plural is formed with the ${listAffixesInIsolation(instrPlAffix)}: ${instrPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInstrumental);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Instrumental</strong>`;
            let sgTD = document.createElement("td");
            let dualTD = document.createElement("td");
            let trialTD = document.createElement("td");
            let quadralTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + instrSgAffix))}</i>`
                dualTD.innerHTML = `-<i>${spell(soundChange("A" + instrDualAffix))}</i>`
                trialTD.innerHTML = `-<i>${spell(soundChange("A" + instrTrialAffix))}</i>`
                quadralTD.innerHTML = `-<i>${spell(soundChange("A" + instrQuadralAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + instrPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(instrSgAffix + "X"))}</i>-`;
                dualTD.innerHTML = `<i>${spell(soundChange(instrDualAffix + "X"))}</i>-`;
                trialTD.innerHTML = `<i>${spell(soundChange(instrTrialAffix + "X"))}</i>-`;
                quadralTD.innerHTML = `<i>${spell(soundChange(instrQuadralAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(instrPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(dualTD);
            newRow.appendChild(trialTD);
            newRow.appendChild(quadralTD);
            newRow.appendChild(plTD);
        }

        tableDiv.appendChild(inflectionTable)
        document.getElementById("fusional-no-gender-case-explanation").appendChild(tableDiv);
        

    };
    if(determineGrammaticalNumber() === "singular-plural-greater-plural") {
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
        let greaterplHeading = document.createElement("th");
        greaterplHeading.innerHTML = `Greater Plural`

        inflectionTable.appendChild(headingRow);
        headingRow.appendChild(emptyCell);
        headingRow.appendChild(sgHeading);
        headingRow.appendChild(plHeading);
        headingRow.appendChild(greaterplHeading);


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
                
                if(make === makeNomGreater) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "a lot of ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "a lot of ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let nomSgExamples = makeExamples(makeNomSingular, countNounArray);
            let nomPlExamples = makeExamples(makeNomPlural, countNounArrayPlural);
            let nomGreaterExamples = makeExamples(makeNomGreater, countNounArrayPlural);

            let singularPluralNominative = document.createElement("p");
            singularPluralNominative.innerHTML = `The nominative case is used to mark the subject of a verb, the noun which is the performer of an action. The nominative singular is formed with the ${listAffixesInIsolation(nomSgAffix)}: ${nomSgExamples}.
            <br>The nominative plural is formed with the ${listAffixesInIsolation(nomPlAffix)}: ${nomPlExamples}.
            <br>The nominative greater plural is formed with the ${listAffixesInIsolation(nomGreaterAffix)}: ${nomGreaterExamples}`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralNominative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Nominative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let greaterplTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + nomSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + nomPlAffix))}</i>`
                greaterplTD.innerHTML = `-<i>${spell(soundChange("A" + nomGreaterAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(nomSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(nomPlAffix +  "X"))}</i>-`;
                greaterplTD.innerHTML = `<i>${spell(soundChange(nomGreaterAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(greaterplTD);
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
                if(make === makeAccGreater) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "a lot of ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "a lot of ${nounArray[randomIndex]}"`
                    }
                }
            
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let accSgExamples = makeExamples(makeAccSingular, countNounArray);
            let accPlExamples = makeExamples(makeAccPlural, countNounArrayPlural);
            let accGreaterExamples = makeExamples(makeAccGreater, countNounArrayPlural);

            let singularDualPluralAccusative = document.createElement("p");
            singularDualPluralAccusative.innerHTML = `The accusative case is used to mark the object of a verb, the noun which is the recipient of an action. The accusative singular is formed with the ${listAffixesInIsolation(accSgAffix)}: ${accSgExamples}.
            <br>The accusative plural is formed with the ${listAffixesInIsolation(accPlAffix)}: ${accPlExamples}.
            <br>The accusative greater plural is formed with the ${listAffixesInIsolation(accGreaterAffix)}: ${accGreaterExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralAccusative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Accusative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let greaterplTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + accSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + accPlAffix))}</i>`
                greaterplTD.innerHTML = `-<i>${spell(soundChange("A" + accGreaterAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(accSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(accPlAffix +  "X"))}</i>-`;
                greaterplTD.innerHTML = `<i>${spell(soundChange(accGreaterAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(greaterplTD);
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
                
                if(make === makeGenGreater) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "a lot of ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "a lot of ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let genSgExamples = makeExamples(makeGenSingular, countNounArray);
            let genPlExamples = makeExamples(makeGenPlural, countNounArrayPlural);
            let genGreaterExamples = makeExamples(makeGenGreater, countNounArrayPlural);

            let singularDualPluralGenitive = document.createElement("p");
            singularDualPluralGenitive.innerHTML = `The genitive case is used to mark possession. The genitive singular is formed with the ${listAffixesInIsolation(genSgAffix)}: ${genSgExamples}.
            <br>The genitive plural is formed with the ${listAffixesInIsolation(genPlAffix)}: ${genPlExamples}.
            <br>The genitive greater plural is formed with the ${listAffixesInIsolation(genGreaterAffix)}: ${genGreaterExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralGenitive);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Genitive</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let greaterplTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + genSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + genPlAffix))}</i>`
                greaterplTD.innerHTML = `-<i>${spell(soundChange("A" + genGreaterAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(genSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(genPlAffix +  "X"))}</i>-`;
                greaterplTD.innerHTML = `<i>${spell(soundChange(genGreaterAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(greaterplTD);
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
                
                if(make === makeDatGreater) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "a lot of ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "a lot of ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let datSgExamples = makeExamples(makeDatSingular, countNounArray);
            let datPlExamples = makeExamples(makeDatPlural, countNounArrayPlural);
            let datGreaterExamples = makeExamples(makeDatGreater, countNounArrayPlural);

            let singularPluralDative = document.createElement("p");
            singularPluralDative.innerHTML = `The dative case is used to mark indirect objects, nouns that are not the direct recipients of an action. Such nouns in English occur after prepositions e.g the noun "boy" in "I gave a book to the boy. The dative singular is formed with the ${listAffixesInIsolation(datSgAffix)}: ${datSgExamples}.
            <br>The dative plural is formed with the ${listAffixesInIsolation(datPlAffix)}: ${datPlExamples}.
             <br>The dative greater plural is formed with the ${listAffixesInIsolation(datGreaterAffix)}: ${datGreaterExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Dative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let greaterplTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + datSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + datPlAffix))}</i>`
                greaterplTD.innerHTML = `-<i>${spell(soundChange("A" + datGreaterAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(datSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(datPlAffix +  "X"))}</i>-`;
                greaterplTD.innerHTML = `<i>${spell(soundChange(datGreaterAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(greaterplTD);
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
                
                if(make === makeAblGreater) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "a lot of ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "a lot of ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let ablSgExamples = makeExamples(makeAblSingular, countNounArray);
            let ablPlExamples = makeExamples(makeAblPlural, countNounArrayPlural);
            let ablGreaterExamples = makeExamples(makeAblGreater, countNounArrayPlural);

            let singularPluralAblative = document.createElement("p");
            singularPluralAblative.innerHTML = `The ablative case is used to mark motion away from a noun. The ablative singular is formed with the ${listAffixesInIsolation(ablSgAffix)}: ${ablSgExamples}.
            <br>The ablative plural is formed with the ${listAffixesInIsolation(ablPlAffix)}: ${ablPlExamples}.;
            <br>The ablative greater plural is formed with the ${listAffixesInIsolation(ablGreaterAffix)}: ${ablGreaterExamples}.`
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAblative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Ablative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let greaterplTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ablSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + ablPlAffix))}</i>`
                greaterplTD.innerHTML = `-<i>${spell(soundChange("A" + ablGreaterAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ablSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(ablPlAffix +  "X"))}</i>-`;
                greaterplTD.innerHTML = `<i>${spell(soundChange(ablGreaterAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(greaterplTD);
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
                if(make === makeLocGreater) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "a lot of ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "a lot of ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let locSgExamples = makeExamples(makeLocSingular, countNounArray);
            let locPlExamples = makeExamples(makeLocPlural, countNounArrayPlural);
            let locGreaterExamples = makeExamples(makeLocGreater, countNounArrayPlural);

            let singularPluralLocative = document.createElement("p");
            singularPluralLocative.innerHTML = `The locative case is used to mark a noun used with an adposition e.g "in the forest" or "on a mountain". The locative singular is formed with the ${listAffixesInIsolation(locSgAffix)}: ${locSgExamples}.
            <br>The locative plural is formed with the ${listAffixesInIsolation(locPlAffix)}: ${locPlExamples}.
            <br>The locative greater plural is formed with the ${listAffixesInIsolation(locGreaterAffix)}: ${locGreaterExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralLocative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Locative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let greaterplTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + locSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + locPlAffix))}</i>`
                greaterplTD.innerHTML = `-<i>${spell(soundChange("A" + locGreaterAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(locSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(locPlAffix +  "X"))}</i>-`;
                greaterplTD.innerHTML = `<i>${spell(soundChange(locGreaterAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(greaterplTD);
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
                if(make === makeIneGreater) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in a lot of ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "in a lot of ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let ineSgExamples = makeExamples(makeIneSingular, countNounArray);
            let inePlExamples = makeExamples(makeInePlural, countNounArrayPlural);
            let ineGreaterExamples = makeExamples(makeIneGreater, countNounArrayPlural);

            let singularPluralInessive = document.createElement("p");
            singularPluralInessive.innerHTML = `The inessive case is used to mark "in" e.g "in the forest" or "on a mountain". The inessive singular is formed with the ${listAffixesInIsolation(ineSgAffix)}: ${ineSgExamples}.
            <br>The inessive plural is formed with the ${listAffixesInIsolation(inePlAffix)}: ${inePlExamples}.
            <br>The inessive greater plural is formed with the ${listAffixesInIsolation(ineGreaterAffix)}: ${ineGreaterExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInessive);
        
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Inessive</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let greaterplTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ineSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + inePlAffix))}</i>`
                greaterplTD.innerHTML = `-<i>${spell(soundChange("A" + ineGreaterAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ineSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(inePlAffix +  "X"))}</i>-`;
                greaterplTD.innerHTML = `<i>${spell(soundChange(ineGreaterAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(greaterplTD);
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
                if(make === makeDelGreater) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from a lot of ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "from a lot of ${nounArray[randomIndex]}"`
                    } 
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let delSgExamples = makeExamples(makeDelSingular, countNounArray);
            let delPlExamples = makeExamples(makeDelPlural, countNounArrayPlural);
            let delGreaterExamples = makeExamples(makeDelGreater, countNounArrayPlural);

            let singularPluralDelative = document.createElement("p");
            singularPluralDelative.innerHTML = `The delative case is used to mark "in" e.g "in the forest" or "on a mountain". The delative singular is formed with the ${listAffixesInIsolation(delSgAffix)}: ${delSgExamples}.
            <br>The delative plural is formed with the ${listAffixesInIsolation(delPlAffix)}: ${delPlExamples}.
            <br>The delative greater plural is formed with the ${listAffixesInIsolation(delGreaterAffix)}: ${delGreaterExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDelative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Delative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let greaterplTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + delSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + delPlAffix))}</i>`
                greaterplTD.innerHTML = `-<i>${spell(soundChange("A" + delGreaterAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(delSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(delPlAffix +  "X"))}</i>-`;
                greaterplTD.innerHTML = `<i>${spell(soundChange(delGreaterAffix +  "X"))}</i>-`;
            }
            
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(greaterplTD);
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
                if(make === makeAllGreater) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to a lot of ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "to a lot of ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let allSgExamples = makeExamples(makeAllSingular, countNounArray);
            let allPlExamples = makeExamples(makeAllPlural, countNounArrayPlural);
            let allGreaterExamples = makeExamples(makeAllGreater, countNounArrayPlural);

            let singularPluralAllative = document.createElement("p");
            singularPluralAllative.innerHTML = `The allative case is used to mark motion towards a noun e.g "to the forest" or "to a mountain". The allative singular is formed with the ${listAffixesInIsolation(allSgAffix)}: ${allSgExamples}.
            <br>The allative plural is formed with the ${listAffixesInIsolation(allPlAffix)}: ${allPlExamples}.
            <br>The allative greater plural is formed with the ${listAffixesInIsolation(allGreaterAffix)}: ${allGreaterExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAllative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Allative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let greaterplTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + allSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + allPlAffix))}</i>`
                greaterplTD.innerHTML = `-<i>${spell(soundChange("A" + allGreaterAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(allSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(allPlAffix +  "X"))}</i>-`;
                greaterplTD.innerHTML = `<i>${spell(soundChange(allGreaterAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(greaterplTD);
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
                if(make === makeInstrGreater) {
                    if(numberSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[randomIndex] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with a lot of ${nounArray[randomIndex]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[randomIndex]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "with a lot of ${nounArray[randomIndex]}"`
                    }
                }
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let instrSgExamples = makeExamples(makeInstrSingular, countNounArray);
            let instrPlExamples = makeExamples(makeInstrPlural, countNounArrayPlural);
            let instrGreaterExamples = makeExamples(makeInstrGreater, countNounArrayPlural);

            let singularPluralInstrumental = document.createElement("p");
            singularPluralInstrumental.innerHTML = `The instrumental case is used to mark a noun by which an action is achieved i.e "I walked <u>by land</u>" or "I stabbed him <u>with a knife</u>". The instrumental singular is formed with the ${listAffixesInIsolation(instrSgAffix)}: ${instrSgExamples}.
            <br>The instrumental plural is formed with the ${listAffixesInIsolation(instrPlAffix)}: ${instrPlExamples}.
            <br>The instrumental greater plural is formed with the ${listAffixesInIsolation(instrGreaterAffix)}: ${instrGreaterExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInstrumental);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Instrumental</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let greaterplTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + instrSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + instrPlAffix))}</i>`
                greaterplTD.innerHTML = `-<i>${spell(soundChange("A" + instrGreaterAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(instrSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(instrPlAffix +  "X"))}</i>-`;
                greaterplTD.innerHTML = `<i>${spell(soundChange(instrGreaterAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(greaterplTD);
        }

        tableDiv.appendChild(inflectionTable)
        document.getElementById("fusional-no-gender-case-explanation").appendChild(tableDiv);
        

    };
    if(determineGrammaticalNumber() === "singular-plural-general") {
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
        let greaterplHeading = document.createElement("th");
        greaterplHeading.innerHTML = `General`

        inflectionTable.appendChild(headingRow);
        headingRow.appendChild(emptyCell);
        headingRow.appendChild(sgHeading);
        headingRow.appendChild(plHeading);
        headingRow.appendChild(greaterplHeading);


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
            let nomGeneralExamples = makeExamples(makeNomGeneral, countNounArrayPlural);

            let singularPluralNominative = document.createElement("p");
            singularPluralNominative.innerHTML = `The nominative case is used to mark the subject of a verb, the noun which is the performer of an action. The nominative singular is formed with the ${listAffixesInIsolation(nomSgAffix)}: ${nomSgExamples}.
            <br>The nominative plural is formed with the ${listAffixesInIsolation(nomPlAffix)}: ${nomPlExamples}.
            <br>The nominative general is formed with the ${listAffixesInIsolation(nomGeneralAffix)}: ${nomGeneralExamples}`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralNominative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Nominative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + nomSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + nomPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + nomGeneralAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(nomSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(nomPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(nomGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
            
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let accSgExamples = makeExamples(makeAccSingular, countNounArray);
            let accPlExamples = makeExamples(makeAccPlural, countNounArrayPlural);
            let accGeneralExamples = makeExamples(makeAccGeneral, countNounArrayPlural);

            let singularDualPluralAccusative = document.createElement("p");
            singularDualPluralAccusative.innerHTML = `The accusative case is used to mark the object of a verb, the noun which is the recipient of an action. The accusative singular is formed with the ${listAffixesInIsolation(accSgAffix)}: ${accSgExamples}.
            <br>The accusative plural is formed with the ${listAffixesInIsolation(accPlAffix)}: ${accPlExamples}.
            <br>The accusative general is formed with the ${listAffixesInIsolation(accGeneralAffix)}: ${accGeneralExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralAccusative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Accusative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + accSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + accPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + accGeneralAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(accSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(accPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(accGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let genSgExamples = makeExamples(makeGenSingular, countNounArray);
            let genPlExamples = makeExamples(makeGenPlural, countNounArrayPlural);
            let geGeneralExamples = makeExamples(makeGenGeneral, countNounArrayPlural);

            let singularDualPluralGenitive = document.createElement("p");
            singularDualPluralGenitive.innerHTML = `The genitive case is used to mark possession. The genitive singular is formed with the ${listAffixesInIsolation(genSgAffix)}: ${genSgExamples}.
            <br>The genitive plural is formed with the ${listAffixesInIsolation(genPlAffix)}: ${genPlExamples}.
            <br>The genitive general is formed with the ${listAffixesInIsolation(genGeneralAffix)}: ${geGeneralExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralGenitive);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Genitive</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + genSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + genPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + genGeneralAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(genSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(genPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(genGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let datSgExamples = makeExamples(makeDatSingular, countNounArray);
            let datPlExamples = makeExamples(makeDatPlural, countNounArrayPlural);
            let datGeneralExamples = makeExamples(makeDatGeneral, countNounArrayPlural);

            let singularPluralDative = document.createElement("p");
            singularPluralDative.innerHTML = `The dative case is used to mark indirect objects, nouns that are not the direct recipients of an action. Such nouns in English occur after prepositions e.g the noun "boy" in "I gave a book to the boy. The dative singular is formed with the ${listAffixesInIsolation(datSgAffix)}: ${datSgExamples}.
            <br>The dative plural is formed with the ${listAffixesInIsolation(datPlAffix)}: ${datPlExamples}.
             <br>The dative general is formed with the ${listAffixesInIsolation(datGeneralAffix)}: ${datGeneralExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Dative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + datSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + datPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + datGeneralAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(datSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(datPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(datGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let ablSgExamples = makeExamples(makeAblSingular, countNounArray);
            let ablPlExamples = makeExamples(makeAblPlural, countNounArrayPlural);
            let ablGeneralExamples = makeExamples(makeAblGeneral, countNounArrayPlural);

            let singularPluralAblative = document.createElement("p");
            singularPluralAblative.innerHTML = `The ablative case is used to mark motion away from a noun. The ablative singular is formed with the ${listAffixesInIsolation(ablSgAffix)}: ${ablSgExamples}.
            <br>The ablative plural is formed with the ${listAffixesInIsolation(ablPlAffix)}: ${ablPlExamples}.;
            <br>The ablative general is formed with the ${listAffixesInIsolation(ablGeneralAffix)}: ${ablGeneralExamples}.`
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAblative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Ablative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ablSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + ablPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + ablGeneralAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ablSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(ablPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(ablGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let locSgExamples = makeExamples(makeLocSingular, countNounArray);
            let locPlExamples = makeExamples(makeLocPlural, countNounArrayPlural);
            let locGeneralExamples = makeExamples(makeLocGeneral, countNounArrayPlural);

            let singularPluralLocative = document.createElement("p");
            singularPluralLocative.innerHTML = `The locative case is used to mark a noun used with an adposition e.g "in the forest" or "on a mountain". The locative singular is formed with the ${listAffixesInIsolation(locSgAffix)}: ${locSgExamples}.
            <br>The locative plural is formed with the ${listAffixesInIsolation(locPlAffix)}: ${locPlExamples}.
            <br>The locative general is formed with the ${listAffixesInIsolation(locGeneralAffix)}: ${locGeneralExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralLocative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Locative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + locSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + locPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + locGeneralAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(locSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(locPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(locGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let ineSgExamples = makeExamples(makeIneSingular, countNounArray);
            let inePlExamples = makeExamples(makeInePlural, countNounArrayPlural);
            let ineGeneralExamples = makeExamples(makeIneGeneral, countNounArrayPlural);

            let singularPluralInessive = document.createElement("p");
            singularPluralInessive.innerHTML = `The inessive case is used to mark "in" e.g "in the forest" or "on a mountain". The inessive singular is formed with the ${listAffixesInIsolation(ineSgAffix)}: ${ineSgExamples}.
            <br>The inessive plural is formed with the ${listAffixesInIsolation(inePlAffix)}: ${inePlExamples}.
            <br>The inessive general is formed with the ${listAffixesInIsolation(ineGeneralAffix)}: ${ineGeneralExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInessive);
        
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Inessive</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ineSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + inePlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + ineGeneralAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(ineSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(inePlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(ineGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let delSgExamples = makeExamples(makeDelSingular, countNounArray);
            let delPlExamples = makeExamples(makeDelPlural, countNounArrayPlural);
            let delGeneralExamples = makeExamples(makeDelGeneral, countNounArrayPlural);

            let singularPluralDelative = document.createElement("p");
            singularPluralDelative.innerHTML = `The delative case is used to mark "in" e.g "in the forest" or "on a mountain". The delative singular is formed with the ${listAffixesInIsolation(delSgAffix)}: ${delSgExamples}.
            <br>The delative plural is formed with the ${listAffixesInIsolation(delPlAffix)}: ${delPlExamples}.
            <br>The delative general is formed with the ${listAffixesInIsolation(delGeneralAffix)}: ${delGeneralExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDelative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Delative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + delSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + delPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + delGeneralAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(delSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(delPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(delGeneralAffix +  "X"))}</i>-`;
            }
            
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let allSgExamples = makeExamples(makeAllSingular, countNounArray);
            let allPlExamples = makeExamples(makeAllPlural, countNounArrayPlural);
            let allGeneralExamples = makeExamples(makeAllGeneral, countNounArrayPlural);

            let singularPluralAllative = document.createElement("p");
            singularPluralAllative.innerHTML = `The allative case is used to mark motion towards a noun e.g "to the forest" or "to a mountain". The allative singular is formed with the ${listAffixesInIsolation(allSgAffix)}: ${allSgExamples}.
            <br>The allative plural is formed with the ${listAffixesInIsolation(allPlAffix)}: ${allPlExamples}.
            <br>The allative general is formed with the ${listAffixesInIsolation(allGeneralAffix)}: ${allGeneralExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAllative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Allative</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + allSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + allPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + allGeneralAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(allSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(allPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(allGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let instrSgExamples = makeExamples(makeInstrSingular, countNounArray);
            let instrPlExamples = makeExamples(makeInstrPlural, countNounArrayPlural);
            let instrGeneralExamples = makeExamples(makeInstrGeneral, countNounArrayPlural);

            let singularPluralInstrumental = document.createElement("p");
            singularPluralInstrumental.innerHTML = `The instrumental case is used to mark a noun by which an action is achieved i.e "I walked <u>by land</u>" or "I stabbed him <u>with a knife</u>". The instrumental singular is formed with the ${listAffixesInIsolation(instrSgAffix)}: ${instrSgExamples}.
            <br>The instrumental plural is formed with the ${listAffixesInIsolation(instrPlAffix)}: ${instrPlExamples}.
            <br>The instrumental general is formed with the ${listAffixesInIsolation(instrGeneralAffix)}: ${instrGeneralExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInstrumental);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Instrumental</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + instrSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + instrPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + instrGeneralAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(instrSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(instrPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(instrGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
        }
        tableDiv.appendChild(inflectionTable)
        document.getElementById("fusional-no-gender-case-explanation").appendChild(tableDiv);
    };
    if(determineGrammaticalNumber() === "general-plural") {
        let tableDiv = document.createElement("div");
        tableDiv.classList.add("inflection-table-div");
        
        let inflectionTable = document.createElement("table");
        inflectionTable.classList.add("inflection-table");
        let headingRow = document.createElement("tr")
        let emptyCell = document.createElement("th");
        let greaterplHeading = document.createElement("th");
        greaterplHeading.innerHTML = `General`
        let plHeading = document.createElement("th");
        plHeading.innerHTML = `Plural`

        inflectionTable.appendChild(headingRow);
        headingRow.appendChild(emptyCell);
        headingRow.appendChild(greaterplHeading);
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

            let nomPlExamples = makeExamples(makeNomPlural, countNounArrayPlural);
            let nomGeneralExamples = makeExamples(makeNomGeneral, countNounArray);

            let singularPluralNominative = document.createElement("p");
            singularPluralNominative.innerHTML = `The nominative case is used to mark the subject of a verb, the noun which is the performer of an action. <br>The nominative general is formed with the ${listAffixesInIsolation(nomGeneralAffix)}: ${nomGeneralExamples}.
            <br>The nominative plural is formed with the ${listAffixesInIsolation(nomPlAffix)}: ${nomPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralNominative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Nominative</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + nomPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + nomGeneralAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(nomPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(nomGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
            
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let accPlExamples = makeExamples(makeAccPlural, countNounArrayPlural);
            let accGeneralExamples = makeExamples(makeAccGeneral, countNounArray);

            let singularDualPluralAccusative = document.createElement("p");
            singularDualPluralAccusative.innerHTML = `The accusative case is used to mark the object of a verb, the noun which is the recipient of an action. <br>The accusative general is formed with the ${listAffixesInIsolation(accGeneralAffix)}: ${accGeneralExamples}.
            <br>The accusative plural is formed with the ${listAffixesInIsolation(accPlAffix)}: ${accPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralAccusative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Accusative</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + accPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + accGeneralAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(accPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(accGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let genPlExamples = makeExamples(makeGenPlural, countNounArrayPlural);
            let geGeneralExamples = makeExamples(makeGenGeneral, countNounArray);

            let singularDualPluralGenitive = document.createElement("p");
            singularDualPluralGenitive.innerHTML = `The genitive case is used to mark possession. <br>The genitive general is formed with the ${listAffixesInIsolation(genGeneralAffix)}: ${geGeneralExamples}.
            <br>The genitive plural is formed with the ${listAffixesInIsolation(genPlAffix)}: ${genPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralGenitive);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Genitive</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + genPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + genGeneralAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(genPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(genGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let datPlExamples = makeExamples(makeDatPlural, countNounArrayPlural);
            let datGeneralExamples = makeExamples(makeDatGeneral, countNounArray);

            let singularPluralDative = document.createElement("p");
            singularPluralDative.innerHTML = `The dative case is used to mark indirect objects, nouns that are not the direct recipients of an action. Such nouns in English occur after prepositions e.g the noun "boy" in "I gave a book to the boy.  <br>The dative general is formed with the ${listAffixesInIsolation(datGeneralAffix)}: ${datGeneralExamples}.
            <br>The dative plural is formed with the ${listAffixesInIsolation(datPlAffix)}: ${datPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Dative</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + datPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + datGeneralAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(datPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(datGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let ablPlExamples = makeExamples(makeAblPlural, countNounArrayPlural);
            let ablGeneralExamples = makeExamples(makeAblGeneral, countNounArray);

            let singularPluralAblative = document.createElement("p");
            singularPluralAblative.innerHTML = `The ablative case is used to mark motion away from a noun. <br>The ablative general is formed with the ${listAffixesInIsolation(ablGeneralAffix)}: ${ablGeneralExamples}.
            <br>The ablative plural is formed with the ${listAffixesInIsolation(ablPlAffix)}: ${ablPlExamples}.`
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAblative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Ablative</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + ablPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + ablGeneralAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(ablPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(ablGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let locPlExamples = makeExamples(makeLocPlural, countNounArrayPlural);
            let locGeneralExamples = makeExamples(makeLocGeneral, countNounArray);

            let singularPluralLocative = document.createElement("p");
            singularPluralLocative.innerHTML = `The locative case is used to mark a noun used with an adposition e.g "in the forest" or "on a mountain". <br>The locative general is formed with the ${listAffixesInIsolation(locGeneralAffix)}: ${locGeneralExamples}.
            <br>The locative plural is formed with the ${listAffixesInIsolation(locPlAffix)}: ${locPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralLocative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Locative</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + locPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + locGeneralAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(locPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(locGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let inePlExamples = makeExamples(makeInePlural, countNounArrayPlural);
            let ineGeneralExamples = makeExamples(makeIneGeneral, countNounArray);

            let singularPluralInessive = document.createElement("p");
            singularPluralInessive.innerHTML = `The inessive case is used to mark "in" e.g "in the forest" or "on a mountain". <br>The inessive general is formed with the ${listAffixesInIsolation(ineGeneralAffix)}: ${ineGeneralExamples}.
            <br>The inessive plural is formed with the ${listAffixesInIsolation(inePlAffix)}: ${inePlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInessive);
        
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Inessive</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + inePlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + ineGeneralAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(inePlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(ineGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let delPlExamples = makeExamples(makeDelPlural, countNounArrayPlural);
            let delGeneralExamples = makeExamples(makeDelGeneral, countNounArray);

            let singularPluralDelative = document.createElement("p");
            singularPluralDelative.innerHTML = `The delative case is used to mark "in" e.g "in the forest" or "on a mountain". <br>The delative general is formed with the ${listAffixesInIsolation(delGeneralAffix)}: ${delGeneralExamples}.
            <br>The delative plural is formed with the ${listAffixesInIsolation(delPlAffix)}: ${delPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDelative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Delative</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + delPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + delGeneralAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(delPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(delGeneralAffix +  "X"))}</i>-`;
            }
            
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let allPlExamples = makeExamples(makeAllPlural, countNounArrayPlural);
            let allGeneralExamples = makeExamples(makeAllGeneral, countNounArray);

            let singularPluralAllative = document.createElement("p");
            singularPluralAllative.innerHTML = `The allative case is used to mark motion towards a noun e.g "to the forest" or "to a mountain". <br>The allative general is formed with the ${listAffixesInIsolation(allGeneralAffix)}: ${allGeneralExamples}.
            <br>The allative plural is formed with the ${listAffixesInIsolation(allPlAffix)}: ${allPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAllative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Allative</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + allPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + allGeneralAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(allPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(allGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let instrPlExamples = makeExamples(makeInstrPlural, countNounArrayPlural);
            let instrGeneralExamples = makeExamples(makeInstrGeneral, countNounArray);

            let singularPluralInstrumental = document.createElement("p");
            singularPluralInstrumental.innerHTML = `The instrumental case is used to mark a noun by which an action is achieved i.e "I walked <u>by land</u>" or "I stabbed him <u>with a knife</u>". <br>The instrumental general is formed with the ${listAffixesInIsolation(instrGeneralAffix)}: ${instrGeneralExamples}.
            <br>The instrumental plural is formed with the ${listAffixesInIsolation(instrPlAffix)}: ${instrPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInstrumental);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Instrumental</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + instrPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + instrGeneralAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(instrPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(instrGeneralAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
        }
        tableDiv.appendChild(inflectionTable)
        document.getElementById("fusional-no-gender-case-explanation").appendChild(tableDiv);
    };
    if(determineGrammaticalNumber() === "general-singulative-plural") {
        let tableDiv = document.createElement("div");
        tableDiv.classList.add("inflection-table-div");
        
        let inflectionTable = document.createElement("table");
        inflectionTable.classList.add("inflection-table");
        let headingRow = document.createElement("tr")
        let emptyCell = document.createElement("th");
        let greaterplHeading = document.createElement("th");
        greaterplHeading.innerHTML = `General`
        let singulativelHeading = document.createElement("th");
        singulativelHeading.innerHTML = `Singulative`
        let plHeading = document.createElement("th");
        plHeading.innerHTML = `Plural`

        inflectionTable.appendChild(headingRow);
        headingRow.appendChild(emptyCell);
        headingRow.appendChild(greaterplHeading);
        headingRow.appendChild(singulativelHeading);
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

            let nomPlExamples = makeExamples(makeNomPlural, countNounArrayPlural);
            let nomSgExamples = makeExamples(makeNomSingulative, countNounArray);
            let nomGeneralExamples = makeExamples(makeNomGeneral, countNounArrayPlural);

            let singularPluralNominative = document.createElement("p");
            singularPluralNominative.innerHTML = `The nominative case is used to mark the subject of a verb, the noun which is the performer of an action. <br>The nominative general is formed with the ${listAffixesInIsolation(nomGeneralAffix)}: ${nomGeneralExamples}.
            <br>The nominative singulative is formed with the ${listAffixesInIsolation(nomSingulativeAffix)}: ${nomSgExamples}.
            <br>The nominative plural is formed with the ${listAffixesInIsolation(nomPlAffix)}: ${nomPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralNominative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Nominative</strong>`;
            let plTD = document.createElement("td");
            let sgTD  = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + nomPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + nomGeneralAffix))}</i>`
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + nomSingulativeAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(nomPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(nomGeneralAffix +  "X"))}</i>-`;
                sgTD.innerHTML = `<i>${spell(soundChange(nomSingulativeAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(generalTD);
            newRow.appendChild(sgTD);
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
            
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let accPlExamples = makeExamples(makeAccPlural, countNounArrayPlural);
            let accSingulativeExamples = makeExamples(makeAccSingulative, countNounArrayPlural);
            let accGeneralExamples = makeExamples(makeAccGeneral, countNounArray);

            let singularDualPluralAccusative = document.createElement("p");
            singularDualPluralAccusative.innerHTML = `The accusative case is used to mark the object of a verb, the noun which is the recipient of an action. <br>The accusative general is formed with the ${listAffixesInIsolation(accGeneralAffix)}: ${accGeneralExamples}.
            <br>The accusative singulative is formed with the ${listAffixesInIsolation(accSingulativeAffix)}: ${accSingulativeExamples}.
            <br>The accusative plural is formed with the ${listAffixesInIsolation(accPlAffix)}: ${accPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralAccusative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Accusative</strong>`;
            let plTD = document.createElement("td");
            let sgTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + accPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + accGeneralAffix))}</i>`
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + accSingulativeAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(accPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(accGeneralAffix +  "X"))}</i>-`;
                sgTD.innerHTML = `<i>${spell(soundChange(accSingulativeAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(generalTD);
            newRow.appendChild(sgTD);
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
                
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let genPlExamples = makeExamples(makeGenPlural, countNounArrayPlural);
            let geGeneralExamples = makeExamples(makeGenGeneral, countNounArrayPlural);
            let genSingulativeExamples = makeExamples(makeGenSingulative, countNounArray);

            let singularDualPluralGenitive = document.createElement("p");
            singularDualPluralGenitive.innerHTML = `The genitive case is used to mark possession. <br>The genitive general is formed with the ${listAffixesInIsolation(genGeneralAffix)}: ${geGeneralExamples}.
            <br>The genitive singulative is formed with the ${listAffixesInIsolation(genPlAffix)}: ${genPlExamples}.
            <br>The genitive plural is formed with the ${listAffixesInIsolation(genSingulativeAffix)}: ${genSingulativeExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularDualPluralGenitive);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Genitive</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            let sgTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + genPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + genGeneralAffix))}</i>`
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + genSingulativeAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(genPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(genGeneralAffix +  "X"))}</i>-`;
                sgTD.innerHTML = `<i>${spell(soundChange(genSingulativeAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(generalTD);
            newRow.appendChild(sgTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let datPlExamples = makeExamples(makeDatPlural, countNounArrayPlural);
            let datGeneralExamples = makeExamples(makeDatGeneral, countNounArrayPlural);
            let datSingulativeExamples = makeExamples(makeDatSingulative, countNounArray);

            let singularPluralDative = document.createElement("p");
            singularPluralDative.innerHTML = `The dative case is used to mark indirect objects, nouns that are not the direct recipients of an action. Such nouns in English occur after prepositions e.g the noun "boy" in "I gave a book to the boy. 
            <br>The dative general is formed with the ${listAffixesInIsolation(datGeneralAffix)}: ${datGeneralExamples}.
             <br>The dative singulative is formed with the ${listAffixesInIsolation(datSingulativeAffix)}: ${datSingulativeExamples}.
            <br>The dative plural is formed with the ${listAffixesInIsolation(datPlAffix)}: ${datPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Dative</strong>`;
            let plTD = document.createElement("td");
            let sgTD = document.createElement("td");
            let generalTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + datPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + datGeneralAffix))}</i>`
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + datSingulativeAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(datPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(datGeneralAffix +  "X"))}</i>-`;
                sgTD.innerHTML = `<i>${spell(soundChange(datSingulativeAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(generalTD);
            newRow.appendChild(sgTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let ablPlExamples = makeExamples(makeAblPlural, countNounArrayPlural);
            let ablGeneralExamples = makeExamples(makeAblGeneral, countNounArrayPlural);
            let ablSingulativeExamples = makeExamples(makeAblSingulative, countNounArray);

            let singularPluralAblative = document.createElement("p");
            singularPluralAblative.innerHTML = `The ablative case is used to mark motion away from a noun. <br>The ablative general is formed with the ${listAffixesInIsolation(ablGeneralAffix)}: ${ablGeneralExamples}.
             <br>The ablative singulative is formed with the ${listAffixesInIsolation(ablSingulativeAffix)}: ${ablSingulativeExamples}.
            <br>The ablative plural is formed with the ${listAffixesInIsolation(ablPlAffix)}: ${ablPlExamples}.`
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAblative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Ablative</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            let singulativeTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + ablPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + ablGeneralAffix))}</i>`
                singulativeTD.innerHTML = `-<i>${spell(soundChange("A" + ablSingulativeAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(ablPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(ablGeneralAffix +  "X"))}</i>-`;
                singulativeTD.innerHTML = `<i>${spell(soundChange(ablSingulativeAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(generalTD);
            newRow.appendChild(singulativeTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let locPlExamples = makeExamples(makeLocPlural, countNounArrayPlural);
            let locGeneralExamples = makeExamples(makeLocGeneral, countNounArrayPlural);
            let locSingulativeExamples = makeExamples(makeLocSingulative, countNounArray);

            let singularPluralLocative = document.createElement("p");
            singularPluralLocative.innerHTML = `The locative case is used to mark a noun used with an adposition e.g "in the forest" or "on a mountain". 
            <br>The locative general is formed with the ${listAffixesInIsolation(locGeneralAffix)}: ${locGeneralExamples}.
            <br>The locative singulative is formed with the ${listAffixesInIsolation(locSingulativeAffix)}: ${locSingulativeExamples}.
            <br>The locative plural is formed with the ${listAffixesInIsolation(locPlAffix)}: ${locPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralLocative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Locative</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            let sgTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + locPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + locGeneralAffix))}</i>`
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + locSingulativeAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(locPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(locGeneralAffix +  "X"))}</i>-`;
                sgTD.innerHTML = `<i>${spell(soundChange(locSingulativeAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(generalTD);
            newRow.appendChild(sgTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let inePlExamples = makeExamples(makeInePlural, countNounArrayPlural);
            let ineGeneralExamples = makeExamples(makeIneGeneral, countNounArrayPlural);
            let ineSingulativeExamples = makeExamples(makeIneSingulative, countNounArray);

            let singularPluralInessive = document.createElement("p");
            singularPluralInessive.innerHTML = `The inessive case is used to mark "in" e.g "in the forest" or "on a mountain". <br>The inessive general is formed with the ${listAffixesInIsolation(ineGeneralAffix)}: ${ineGeneralExamples}.
            <br>The inessive singulative is formed with the ${listAffixesInIsolation(ineSingulativeAffix)}: ${ineSingulativeExamples}.
            <br>The inessive plural is formed with the ${listAffixesInIsolation(inePlAffix)}: ${inePlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInessive);
        
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Inessive</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            let sgTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + inePlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + ineGeneralAffix))}</i>`
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + ineSingulativeExamples))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(inePlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(ineGeneralAffix +  "X"))}</i>-`;
                sgTD.innerHTML = `<i>${spell(soundChange(ineSingulativeExamples +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(generalTD);
             newRow.appendChild(sgTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let delPlExamples = makeExamples(makeDelPlural, countNounArrayPlural);
            let delGeneralExamples = makeExamples(makeDelGeneral, countNounArrayPlural);
            let delSingulativeExamples = makeExamples(makeDelSingulative, countNounArray);

            let singularPluralDelative = document.createElement("p");
            singularPluralDelative.innerHTML = `The delative case is used to mark "in" e.g "in the forest" or "on a mountain". <br>The delative general is formed with the ${listAffixesInIsolation(delGeneralAffix)}: ${delGeneralExamples}.
             <br>The delative singulative is formed with the ${listAffixesInIsolation(delSingulativeAffix)}: ${delSingulativeExamples}.
            <br>The delative plural is formed with the ${listAffixesInIsolation(delPlAffix)}: ${delPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDelative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Delative</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            let sgTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + delPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + delGeneralAffix))}</i>`
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + delSingulativeAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(delPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(delGeneralAffix +  "X"))}</i>-`;
                sgTD.innerHTML = `<i>${spell(soundChange(delSingulativeAffix +  "X"))}</i>-`;
            }
            
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(plTD);
            newRow.appendChild(generalTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let allPlExamples = makeExamples(makeAllPlural, countNounArrayPlural);
            let allGeneralExamples = makeExamples(makeAllGeneral, countNounArrayPlural);
            let alSingulativeExamples = makeExamples(makeAllSingulative, countNounArray);

            let singularPluralAllative = document.createElement("p");
            singularPluralAllative.innerHTML = `The allative case is used to mark motion towards a noun e.g "to the forest" or "to a mountain". <br>The allative general is formed with the ${listAffixesInIsolation(allGeneralAffix)}: ${allGeneralExamples}.
             <br>The allative singulative is formed with the ${listAffixesInIsolation(allSingulativeAffix)}: ${alSingulativeExamples}.
            <br>The allative plural is formed with the ${listAffixesInIsolation(allPlAffix)}: ${allPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAllative);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Allative</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            let sgTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + allPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + allGeneralAffix))}</i>`
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + allSingulativeAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(allPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(allGeneralAffix +  "X"))}</i>-`;
                sgTD.innerHTML = `<i>${spell(soundChange(allSingulativeAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(generalTD);
            newRow.appendChild(sgTD);
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
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let instrPlExamples = makeExamples(makeInstrPlural, countNounArrayPlural);
            let instrGeneralExamples = makeExamples(makeInstrGeneral, countNounArrayPlural);
            let instrSingulativeExamples = makeExamples(makeInstrSingulative, countNounArray);

            let singularPluralInstrumental = document.createElement("p");
            singularPluralInstrumental.innerHTML = `The instrumental case is used to mark a noun by which an action is achieved i.e "I walked <u>by land</u>" or "I stabbed him <u>with a knife</u>". <br>The instrumental general is formed with the ${listAffixesInIsolation(instrGeneralAffix)}: ${instrGeneralExamples}.
            <br>The instrumental singulative is formed with the ${listAffixesInIsolation(instrSingulativeAffix)}: ${instrSingulativeExamples}.
            <br>The instrumental plural is formed with the ${listAffixesInIsolation(instrPlAffix)}: ${instrPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralInstrumental);
            
            let newRow = document.createElement("tr");
            let caseLabelTD = document.createElement("td");
            caseLabelTD.innerHTML = `<strong>Instrumental</strong>`;
            let plTD = document.createElement("td");
            let generalTD = document.createElement("td");
            let sgTD = document.createElement("td");
            if(numberSuffixOrPrefix === "suffix") {
                plTD.innerHTML = `-<i>${spell(soundChange("A" + instrPlAffix))}</i>`
                generalTD.innerHTML = `-<i>${spell(soundChange("A" + instrGeneralAffix))}</i>`
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + instrSingulativeAffix))}</i>`
            } else {
                plTD.innerHTML = `<i>${spell(soundChange(instrPlAffix +  "X"))}</i>-`;
                generalTD.innerHTML = `<i>${spell(soundChange(instrGeneralAffix +  "X"))}</i>-`;
                sgTD.innerHTML = `<i>${spell(soundChange(instrSingulativeAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(newRow);
            newRow.appendChild(caseLabelTD);
            newRow.appendChild(generalTD);
            newRow.appendChild(sgTD);
            newRow.appendChild(plTD);
            
        }
        tableDiv.appendChild(inflectionTable)
        document.getElementById("fusional-no-gender-case-explanation").appendChild(tableDiv);
    };
}

function explainGenders() {
    if(genderNum === 9 && chosenNounCases.length === 0) {
        document.getElementById("gender-length").innerHTML = "two";
        document.getElementById("list-of-genders-fusional").innerHTML = '"animate" and "inanimate". The animate gender encompasses all nouns that refer to living things, as well as some non-living but "dynamic" things such as fire and moving water. Trees and plants are animate, though their produce, seeds and individual parts are inanimate'

        if(determineGrammaticalNumber() === "singular-plural") {
            document.getElementById("number-length").innerHTML = "two";
            document.getElementById("grammatical-number-list-gender-no-case").innerHTML = "singular and plural"
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

            let animateH4 = document.createElement("h4");
            animateH4.innerHTML = `<strong>Animate</strong>`;

            let animArray = [];
            for(let i = 0; i < countNounArray.length; i++) {
                let index = countNounArray.indexOf(countNounArray[i])
                if(animInan[index] === "anim") {
                    animArray.push(countNounArray[i]);
                }
            }
            
            let exampleArray = []
            function makeExamples(make, nounArray, genderArray) {
                for(let i = 0; i < 11; i++) {
                    let randomIndex = Math.floor(Math.random() * genderArray.length);
                    let example = "";
                    if(genderSuffixOrPrefix === "suffix") {
                        example = `*<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(genderArray[randomIndex])] + "A"))}</i>- > <i>${spell(soundChange(make(generatedCountNouns[countNounArray.indexOf(genderArray[randomIndex])])))}</i> "${nounArray[countNounArray.indexOf(genderArray[randomIndex])]}"`
                    } else {
                        example = `*-<i>${spell(soundChange("X" + generatedCountNouns[countNounArray.indexOf(genderArray[randomIndex])]))}</i> > <i>${spell(soundChange(make(generatedCountNouns[countNounArray.indexOf(genderArray[randomIndex])])))}</i> "${nounArray[countNounArray.indexOf(genderArray[randomIndex])]}"`
                    }
                    exampleArray.push(example);
                }
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let animSgExamples = makeExamples(makeAnimSingular, countNounArray, animArray);
            let animPlExamples = makeExamples(makeAnimPlural, countNounArrayPlural, animArray);

            let animP = document.createElement("p");
            animP.innerHTML = `The animate singular is marked with the ${listAffixesInIsolation(animSgAffix)}: ${animSgExamples}.
            <br>The animate plural is marked with the ${listAffixesInIsolation(animPlAffix)}: ${animPlExamples}`;

            let animRow = document.createElement("tr");
            let animTD = document.createElement("td");
            animTD.innerHTML = `<strong>Animate</strong>`;
            let animSgTD = document.createElement("td");
            let animPlTD = document.createElement("td");
            if(genderSuffixOrPrefix === "suffix") {
                animSgTD.innerHTML = `-<i>${spell(soundChange("A" + animSgAffix))}</i>`
                animPlTD.innerHTML = `-<i>${spell(soundChange("A" + animPlAffix))}</i>`
            } else {
                animSgTD.innerHTML = `<i>${spell(soundChange(animSgAffix + "X"))}</i>-`;
                animPlTD.innerHTML = `<i>${spell(soundChange(animPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(animRow);
            animRow.appendChild(animTD);
            animRow.appendChild(animSgTD);
            animRow.appendChild(animPlTD);

             let inanimateH4 = document.createElement("h4");
            inanimateH4.innerHTML = `<strong>Inanimate</strong>`;

            let inanArray = [];
            for(let i = 0; i < countNounArray.length; i++) {
                let index = countNounArray.indexOf(countNounArray[i])
                if(animInan[index] === "inan") {
                    inanArray.push(countNounArray[i]);
                }
            }
            
            let inanSgExamples = makeExamples(makeInanSingular, countNounArray, inanArray);
            let inanPlExamples = makeExamples(makeInanPlural, countNounArrayPlural, inanArray);

            let inanP = document.createElement("p");
            inanP.innerHTML = `The inanimate singular is marked with the ${listAffixesInIsolation(inanSgAffix)}: ${inanSgExamples}.
            <br>The inanimate plural is marked with the ${listAffixesInIsolation(inanPlAffix)}: ${inanPlExamples}`;

            let inanRow = document.createElement("tr");
            let inanTD = document.createElement("td");
            inanTD.innerHTML = `<strong>Inanimate</strong>`;
            let sgTD = document.createElement("td");
            let plTD = document.createElement("td");
            if(genderSuffixOrPrefix === "suffix") {
                sgTD.innerHTML = `-<i>${spell(soundChange("A" + inanSgAffix))}</i>`
                plTD.innerHTML = `-<i>${spell(soundChange("A" + inanPlAffix))}</i>`
            } else {
                sgTD.innerHTML = `<i>${spell(soundChange(inanSgAffix + "X"))}</i>-`;
                plTD.innerHTML = `<i>${spell(soundChange(inanPlAffix +  "X"))}</i>-`;
            }
            inflectionTable.appendChild(inanRow);
            inanRow.appendChild(inanTD);
            inanRow.appendChild(sgTD);
            inanRow.appendChild(plTD);

            document.getElementById("fusional-gender-no-case-explanation").appendChild(animateH4);
            document.getElementById("fusional-gender-no-case-explanation").appendChild(animP);
            document.getElementById("fusional-gender-no-case-explanation").appendChild(inanimateH4);
            document.getElementById("fusional-gender-no-case-explanation").appendChild(inanP);

           
            tableDiv.appendChild(inflectionTable)
            document.getElementById("fusional-gender-no-case-explanation").appendChild(tableDiv)

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
    makeRandomNumbers();
    chooseCases();
    markedSingular();
    makeLocativeCaseAffixes();
    declareFusionalAffixes();
    determineGrammaticalNumber();
    makeNoGenderNumberExamples();
    explainCases();
    explainGenders();
    makeFusionalNounHeader();
}

export {grammaticalNumber, nomSgAffix, caseNumber, animSgAffix, inanSgAffix};