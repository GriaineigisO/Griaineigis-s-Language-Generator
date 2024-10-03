//@collapse
import { spell } from "./orthography.js";
import { soundChange, voiced, unvoiced, chosenSoundChanges, vowels, consonants, selectFricatives, plosives, randomNumForWordInitialPlosiveClusters, midVowels, highVowels, liquids,lenitionFromPlosives2, lenitionFromPlosives1, nonHighVowels, allNasalsArray, correctionsForStrings, corrections, frontVowels, backVowels, obstruents, countClicks} from "./soundchange.js";
import { languageName } from "./script.js";

let soundChangeArray = [];
let wordFinalDevoicingNum = 0;
let plosivesCantClusterTogetherWordInitiallyNum = 0;
let fricativesLostAfterWordInitialConsonantsNum = 0;
let fricativesDebuccaliseBeforeVowelsNum = 0;
let wordFinalHighVowelsLowerNum = 0;
let liquidsLostBeforeConsonantsNum = 0;
let insertIBetweenConsonantAndliquidNum = 0;
let insertUBetweenConsonantAndliquidNum = 0;
let consonantliquidMetathesisNum = 0;
let lenitionofPlosivebeforeOtherPlosive1Num = 0;
let lenitionofPlosivebeforeOtherPlosive2Num = 0;
let nonInitialNonHighVowelsBecomeANum = 0;
let nasalsCantAppearAfterConsonantsNum = 0;
let vowelLostBetweenTwoOfSameConsonantNum = 0;
let voicedConsonantsLostIntervocalicallyNum = 0;
let RVCToVRCMetathesisNum = 0;
let vowelLostBetweenConsonantAndliquidNum = 0;
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
let longVowelsBreakIntoViNum = 0;
let longVowelsBreakIntoUNum = 0;
let longVowelsBreakIntoIPlusRaisingNum = 0;
let longVowelsBreakIntoUPlusRaisingNum = 0;
let longVowelsBreakIntoVjNum = 0;
let longVowelsBreakIntojVwVNum = 0;
let vowelsHeightenBeforeVelarsNum = 0;
let palatalsBecomeVelarNum = 0;
let gwbecomesBNum = 0;
let eRaBecomesARaNum = 0;
let epentheticANum = 0;
let pKWBecomesKwKwNum = 0;
let longEBecomesLongINum = 0;
let wordFinalLongOBecomesLongUNum = 0;
let longVowelsShortenBeforeRCNum = 0;
let CCBecomesXCNum = 0
let pBecomesBBeforeliquidsNum = 0;
let pBecomesUNum = 0;
let pBecomesFNum = 0;
let longOBecomesANum = 0;
let eWBecomesOWNum = 0;
let longUBecomesOUNum = 0;
let velarsDelabialiseNum = 0;
let lossOfAspirationNum = 0;



function clearArrays() {
    num = 0;
    soundChangeArray = [];
    wordFinalDevoicingNum = 0;
    plosivesCantClusterTogetherWordInitiallyNum = 0;
    fricativesLostAfterWordInitialConsonantsNum = 0;
    fricativesDebuccaliseBeforeVowelsNum = 0;
    wordFinalHighVowelsLowerNum = 0;
    liquidsLostBeforeConsonantsNum = 0;
    insertIBetweenConsonantAndliquidNum = 0;
    insertUBetweenConsonantAndliquidNum = 0;
    consonantliquidMetathesisNum = 0;
    lenitionofPlosivebeforeOtherPlosive1Num = 0;
    lenitionofPlosivebeforeOtherPlosive2Num = 0;
    nonInitialNonHighVowelsBecomeANum = 0;
    nasalsCantAppearAfterConsonantsNum = 0;
    vowelLostBetweenTwoOfSameConsonantNum = 0;
    voicedConsonantsLostIntervocalicallyNum = 0;
    RVCToVRCMetathesisNum = 0;
    vowelLostBetweenConsonantAndliquidNum = 0;
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
    longVowelsBreakIntoViNum = 0;
    longVowelsBreakIntoUNum = 0;
    longVowelsBreakIntoIPlusRaisingNum = 0;
    longVowelsBreakIntoUPlusRaisingNum = 0;
    longVowelsBreakIntoVjNum = 0;
    longVowelsBreakIntojVwVNum = 0;
    vowelsHeightenBeforeVelarsNum = 0;
    palatalsBecomeVelarNum = 0;
    gwbecomesBNum = 0; 
    eRaBecomesARaNum = 0;
    epentheticANum = 0;
    pKWBecomesKwKwNum = 0;
    longEBecomesLongINum = 0;
    wordFinalLongOBecomesLongUNum = 0;
    longVowelsShortenBeforeRCNum = 0;
    CCBecomesXCNum = 0;
    pBecomesBBeforeliquidsNum = 0;
    pBecomesUNum = 0;
    pBecomesFNum = 0;
    longOBecomesANum = 0;
    eWBecomesOWNum = 0;
    longUBecomesOUNum = 0;
    velarsDelabialiseNum = 0;
    lossOfAspirationNum = 0;
};

function cloneArray(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
};

function markLengthInIPA(word) {
    let array = Array.from(word)
    for(let i = 0; i < array.length; i++) {
        if(array[i] === array[i+1]) {
            array[i+1] = "ː";
        };
    };
    for(let i = 0; i < array.length; i++) {
        while(array[i] === "A" || array[i] === "X") {
            array.splice(i, 1);
        };
    }
    word = array.join("");
    return word;
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
        if(chosenSoundChanges[i].name === "liquidsLostBeforeConsonants") {
            if(soundChangeArray.includes(liquidsLostBeforeConsonants) === false) {
                soundChangeArray.push(liquidsLostBeforeConsonants);
            }
        };
        if(chosenSoundChanges[i].name === "insertIBetweenConsonantAndliquid") {
            if(soundChangeArray.includes(insertIBetweenConsonantAndliquid) === false) {
                soundChangeArray.push(insertIBetweenConsonantAndliquid);
            }
        };
        if(chosenSoundChanges[i].name === "insertUBetweenConsonantAndliquid") {
            if(soundChangeArray.includes(insertUBetweenConsonantAndliquid) === false) {
                soundChangeArray.push(insertUBetweenConsonantAndliquid);
            }
        };
        if(chosenSoundChanges[i].name === "consonantliquidMetathesis") {
            if(soundChangeArray.includes(consonantliquidMetathesis) === false) {
                soundChangeArray.push(consonantliquidMetathesis);
            }
        };
        if(chosenSoundChanges[i].name === "lenitionofPlosivebeforeOtherPlosive1") {
            if(soundChangeArray.includes(lenitionofPlosivebeforeOtherPlosive1) === false) {
                soundChangeArray.push(lenitionofPlosivebeforeOtherPlosive1);
            }
        };
        if(chosenSoundChanges[i].name === "lenitionofPlosivebeforeOtherPlosive2") {
            if(soundChangeArray.includes(lenitionofPlosivebeforeOtherPlosive2) === false) {
                soundChangeArray.push(lenitionofPlosivebeforeOtherPlosive2);
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
        if(chosenSoundChanges[i].name === "vowelLostBetweenConsonantAndliquid") {
            if(soundChangeArray.includes(vowelLostBetweenConsonantAndliquid) === false) {
                soundChangeArray.push(vowelLostBetweenConsonantAndliquid);
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
        if(chosenSoundChanges[i].name === "longVowelsBreakIntoVi") {
            if(soundChangeArray.includes(longVowelsBreakIntoVi) === false) {
                soundChangeArray.push(longVowelsBreakIntoVi);
            }
        };
        if(chosenSoundChanges[i].name === "longVowelsBreakIntoU") {
            if(soundChangeArray.includes(longVowelsBreakIntoU) === false) {
                soundChangeArray.push(longVowelsBreakIntoU);
            }
        };
        if(chosenSoundChanges[i].name === "longVowelsBreakIntoIPlusRaising") {
            if(soundChangeArray.includes(longVowelsBreakIntoIPlusRaising) === false) {
                soundChangeArray.push(longVowelsBreakIntoIPlusRaising);
            }
        };
        if(chosenSoundChanges[i].name === "longVowelsBreakIntoUPlusRaising") {
            if(soundChangeArray.includes(longVowelsBreakIntoUPlusRaising) === false) {
                soundChangeArray.push(longVowelsBreakIntoUPlusRaising);
            }
        };
        if(chosenSoundChanges[i].name === "longVowelsBreakIntoVj") {
            if(soundChangeArray.includes(longVowelsBreakIntoVj) === false) {
                soundChangeArray.push(longVowelsBreakIntoVj);
            }
        };
        if(chosenSoundChanges[i].name === "longVowelsBreakIntojVwV") {
            if(soundChangeArray.includes(longVowelsBreakIntojVwV) === false) {
                soundChangeArray.push(longVowelsBreakIntojVwV);
            }
        };
        if(chosenSoundChanges[i].name === "vowelsHeightenBeforeVelars") {
            if(soundChangeArray.includes(vowelsHeightenBeforeVelars) === false) {
                soundChangeArray.push(vowelsHeightenBeforeVelars);
            }
        };
        if(chosenSoundChanges[i].name === "palatalsBecomeVelar") {
            if(soundChangeArray.includes(palatalsBecomeVelar) === false) {
                soundChangeArray.push(palatalsBecomeVelar);
            }
        };
        if(chosenSoundChanges[i].name === "gwbecomesB") {
            if(soundChangeArray.includes(gwbecomesB) === false) {
                soundChangeArray.push(gwbecomesB);
            }
        };
        if(chosenSoundChanges[i].name === "eRaBecomesARa") {
            if(soundChangeArray.includes(eRaBecomesARa) === false) {
                soundChangeArray.push(eRaBecomesARa);
            }
        };
        if(chosenSoundChanges[i].name === "epentheticA") {
            if(soundChangeArray.includes(epentheticA) === false) {
                soundChangeArray.push(epentheticA);
            }
        };
        if(chosenSoundChanges[i].name === "pKWBecomesKwKw") {
            if(soundChangeArray.includes(pKWBecomesKwKw) === false) {
                soundChangeArray.push(pKWBecomesKwKw);
            }
        };
        if(chosenSoundChanges[i].name === "longEBecomesLongI") {
            if(soundChangeArray.includes(longEBecomesLongI) === false) {
                soundChangeArray.push(longEBecomesLongI);
            }
        };
        if(chosenSoundChanges[i].name === "wordFinalLongOBecomesLongU") {
            if(soundChangeArray.includes(wordFinalLongOBecomesLongU) === false) {
                soundChangeArray.push(wordFinalLongOBecomesLongU);
            }
        };
        if(chosenSoundChanges[i].name === "longVowelsShortenBeforeRC") {
            if(soundChangeArray.includes(longVowelsShortenBeforeRC) === false) {
                soundChangeArray.push(longVowelsShortenBeforeRC);
            }
        };
        if(chosenSoundChanges[i].name === "CCBecomesXC") {
            if(soundChangeArray.includes(CCBecomesXC) === false) {
                soundChangeArray.push(CCBecomesXC);
            }
        };
        if(chosenSoundChanges[i].name === "pBecomesBBeforeliquids") {
            if(soundChangeArray.includes(pBecomesBBeforeliquids) === false) {
                soundChangeArray.push(pBecomesBBeforeliquids);
            }
        };
        if(chosenSoundChanges[i].name === "pBecomesU") {
            if(soundChangeArray.includes(pBecomesU) === false) {
                soundChangeArray.push(pBecomesU);
            }
        };
        if(chosenSoundChanges[i].name === "pBecomesF") {
            if(soundChangeArray.includes(pBecomesF) === false) {
                soundChangeArray.push(pBecomesF);
            }
        };
        if(chosenSoundChanges[i].name === "longOBecomesA") {
            if(soundChangeArray.includes(longOBecomesA) === false) {
                soundChangeArray.push(longOBecomesA);
            }
        };
        if(chosenSoundChanges[i].name === "eWBecomesOW") {
            if(soundChangeArray.includes(eWBecomesOW) === false) {
                soundChangeArray.push(eWBecomesOW);
            }
        };
        if(chosenSoundChanges[i].name === "longUBecomesOU") {
            if(soundChangeArray.includes(longUBecomesOU) === false) {
                soundChangeArray.push(longUBecomesOU);
            }
        };
        if(chosenSoundChanges[i].name === "velarsDelabialise") {
            if(soundChangeArray.includes(velarsDelabialise) === false) {
                soundChangeArray.push(velarsDelabialise);
            }
        };
        if(chosenSoundChanges[i].name === "lossOfAspiration") {
            if(soundChangeArray.includes(lossOfAspiration) === false) {
                soundChangeArray.push(lossOfAspiration);
            }
        } else {
            if(soundChangeArray.includes(chosenSoundChanges[i]) === false) {
                soundChangeArray.push(chosenSoundChanges[i]);
            }
        }
    };
};

let num = 0;
function soundChangeExample(word) {
    if(num > 0) {
        let before = Array.from(word);
        let originalWord = cloneArray(before);
        generateSoundChange(before, originalWord)       
        for(let i = 0; i < soundChangeArray.length; i++) {
            soundChangeArray[i](before, originalWord)
        };
    };
    num++;
    return word;
};


/****************USER GENERATED SOUND CHANGES**************************** */

//this function generates examples for sound changes submitted by the user

function generateSoundChange(word, originalWord) {

    //dynamic key name allows for any number of changes with the same environment to be created without creating a new object item for each one

    for(let j = 0; j < countClicks.length; j++) {

        let key = countClicks[j].environment + countClicks[j].clickNum;
        let startSound = countClicks[j].startSound;
        let endSound = countClicks[j].endSound;
        let environment = countClicks[j].environment;
        let between1 = countClicks[j].between1;
        let between2 = countClicks[j].between2;

        if (environment === "unconditional") {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === startSound) {
                    let before = correctionsForStrings(word.join(""));
                    word[i] = endSound;
                    let after = correctionsForStrings(word.join(""));
                    let afterExample = "";
                    let originalJoined = originalWord.join("");
                    if(soundChange(originalJoined) !== after) {
                        afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
                    } else {
                        afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
                    }
                    let beforeExample = "";
                    if(correctionsForStrings(originalJoined) === before) {
                        beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
                    } else {
                        beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
                    }
                    //if null, it means that a sound change was deleted from the list of chosen options before the user hit "generate a new language"
                    if(document.getElementById(`${key}-examples`) !== null) {
                        let parentDiv = document.getElementById(`${key}-examples`).children
                        if(parentDiv.length < 6) { 
                            if(parentDiv.length === 0) {
                                let example = document.createElement("span");
                                example.innerHTML = `${beforeExample} > ${afterExample}`;
                                document.getElementById(`${key}-examples`).appendChild(example);
                            } else {
                                let example = document.createElement("span");
                                example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                                document.getElementById(`${key}-examples`).appendChild(example);
                            }
                        }
                    } else {
                        continue;
                    }
                };
            };

        };

        if (environment === "between") {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === startSound && word[i-1] === between1 && word[i+1] === between2) {
                    let before = correctionsForStrings(word.join(""));
                    word[i] = endSound;
                    let after = correctionsForStrings(word.join(""));
                    let afterExample = "";
                    let originalJoined = originalWord.join("");
                    if(soundChange(originalJoined) !== after) {
                        afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
                    } else {
                        afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
                    }
                    let beforeExample = "";
                    if(correctionsForStrings(originalJoined) === before) {
                        beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
                    } else {
                        beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
                    }
                    //if null, it means that a sound change was deleted from the list of chosen options before the user hit "generate a new language"
                    if(document.getElementById(`${key}-examples`) !== null) {
                        let parentDiv = document.getElementById(`${key}-examples`).children
                        console.log(parentDiv.length)
                        if(parentDiv.length < 6) { 
                            if(parentDiv.length === 0) {
                                let example = document.createElement("span");
                                example.innerHTML = `${beforeExample} > ${afterExample}`;
                                document.getElementById(`${key}-examples`).appendChild(example);
                            } else {
                                let example = document.createElement("span");
                                example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                                document.getElementById(`${key}-examples`).appendChild(example);
                            }
                        }
                    };
                };
            };

        };
    };
};


/*^^^^^^^^^^^^^^^^^^^^^USER GENERATED SOUND CHANGES^^^^^^^^^^^^^^^^^^^^^^* */

function wordFinalDevoicing(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(voiced.includes(word[word.length -1])) {
            let before = correctionsForStrings(word.join(""));
            let voicedIndex = voiced.indexOf(word[word.length -1]);
            word[word.length -1] = unvoiced[voicedIndex];
            if(voiced.includes(word[word.length -2])) {
                let voicedIndex = voiced.indexOf(word[word.length -2]);
                word[word.length -2] = unvoiced[voicedIndex];
            } 
            let after = correctionsForStrings(word.join(""));
            let originalJoined = correctionsForStrings(originalWord.join(""));
            let afterExample = "";
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
                let before = correctionsForStrings(word.join(""));
                word.splice(0, 1);
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = correctionsForStrings(originalWord.join(""));
                if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
                let before = correctionsForStrings(word.join(""));
                if(postAlveolar.includes(word[i]) === false && tD.includes(word[i-1]) === false) {
                    word[i] = "h";
                }
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = correctionsForStrings(originalWord.join(""));
                if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
        let before = correctionsForStrings(word.join(""));
        word.splice(1, 1);
        let after = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = correctionsForStrings(originalWord.join(""));
        if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
        let before = correctionsForStrings(word.join(""));
        if(word[word.length -2] === word[word.length -1]) {
            word[word.length -2] = midVowels[vowelIndex];
        }
        word[word.length -1] = midVowels[vowelIndex];
        let after = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = correctionsForStrings(originalWord.join(""));
        if(soundChange(originalJoined) !== after) {
            afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
        } else {
            afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
        }
        let beforeExample = "";
        if(correctionsForStrings(originalJoined) === before) {
            beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
        } else {
            beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
        }
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

function liquidsLostBeforeConsonants(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(liquids.includes(word[i]) && consonants.includes(word[i + 1])) {
            let before = correctionsForStrings(word.join(""));
            word.splice(i, 1);
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(liquidsLostBeforeConsonantsNum < 6) {
                if(liquidsLostBeforeConsonantsNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("liquidsLostBeforeConsonants").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("liquidsLostBeforeConsonants").appendChild(example);
                }
                liquidsLostBeforeConsonantsNum++;
            };
        }; 
    };
    return {word};
};

function insertIBetweenConsonantAndliquid(word, originalWord) {
        for(let i = 0; i < word.length; i++) {
            if(liquids.includes(word[i]) && consonants.includes(word[i + 1]) && word[i] !== word[i+1]) {
                let before = correctionsForStrings(word.join(""));
                word.splice(i+1, 0, "i");
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = correctionsForStrings(originalWord.join(""));
                if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
                if(insertIBetweenConsonantAndliquidNum < 6) {
                if(insertIBetweenConsonantAndliquidNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("insertIBetweenConsonantAndliquid").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("insertIBetweenConsonantAndliquid").appendChild(example);
                }
                insertIBetweenConsonantAndliquidNum++;
            };
            };
        };
    return {word};
};

function insertUBetweenConsonantAndliquid(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(liquids.includes(word[i]) && consonants.includes(word[i + 1]) && word[i] !== word[i+1]) {
            let before = correctionsForStrings(word.join(""));
            word.splice(i+1, 0, "u");
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(insertUBetweenConsonantAndliquidNum < 6) {
                if(insertUBetweenConsonantAndliquidNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("insertUBetweenConsonantAndliquid").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("insertUBetweenConsonantAndliquid").appendChild(example);
                }
                insertUBetweenConsonantAndliquidNum++;
            }; 
            };
        };
    return {word};
};

function consonantliquidMetathesis(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(liquids.includes(word[i]) && consonants.includes(word[i + 1])) {
            let before = correctionsForStrings(word.join(""));
            let liquid = word[i]; 
            let followingConsonant = word[i+1];
            word[i] = followingConsonant;
            word[i+1] = liquid;
            if(liquids.includes(word[i]) && liquids.includes(word[i + 1])) {
                word.splice(i+1, 0, "u");
            }
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(consonantliquidMetathesisNum < 6) {
                if(consonantliquidMetathesisNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("consonantliquidMetathesis").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("consonantliquidMetathesis").appendChild(example);
                }
                consonantliquidMetathesisNum++;
            }; 
        };
    };
    return {word};
};

function lenitionofPlosivebeforeOtherPlosive1(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(plosives.includes(word[i]) && plosives.includes(word[i - 1])  && word[i] !== word[i-1]) {
            let firstPlosiveIndex = plosives.indexOf(word[i-1])
            let before = correctionsForStrings(word.join(""));
            word[i-1] = lenitionFromPlosives1[firstPlosiveIndex];
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
             if(lenitionofPlosivebeforeOtherPlosive1Num < 6) {
                if(lenitionofPlosivebeforeOtherPlosive1Num === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("lenitionofPlosivebeforeOtherPlosive1").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("lenitionofPlosivebeforeOtherPlosive1").appendChild(example);
                }
                lenitionofPlosivebeforeOtherPlosive1Num++;
            }; 
        }
    }
    return {word};
};

function lenitionofPlosivebeforeOtherPlosive2(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(plosives.includes(word[i]) && plosives.includes(word[i - 1])  && word[i] !== word[i-1]) {
            let firstPlosiveIndex = plosives.indexOf(word[i-1])
            let before = correctionsForStrings(word.join(""));
            word[i-1] = lenitionFromPlosives2[firstPlosiveIndex]
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(lenitionofPlosivebeforeOtherPlosive2Num < 6) {
                if(lenitionofPlosivebeforeOtherPlosive2Num === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("lenitionofPlosivebeforeOtherPlosive2").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("lenitionofPlosivebeforeOtherPlosive2").appendChild(example);
                }
                lenitionofPlosivebeforeOtherPlosive2Num++;
            }; 
        }
    }
    return {word};
};

function nonInitialNonHighVowelsBecomeA(word, originalWord) {
    let num = 0;
    for(let i = 0; i < word.length; i++) {
        if(nonHighVowels.includes(word[i]) && num !== 0) {
            let before = correctionsForStrings(word.join(""));
            word[i] = "a";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
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
            let before = correctionsForStrings(word.join(""));
            word.splice(i+1, 0, "i");
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = correctionsForStrings(originalWord.join(""));
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
        let before = correctionsForStrings(word.join(""));
        word.splice(i, 2);
        let after = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = correctionsForStrings(originalWord.join(""));
        if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
        let before = correctionsForStrings(word.join(""));
        word.splice(i, 1);
        let after = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = originalWord.join("");
        if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
        }
    }
    return {word};
};

function RVCToVRCMetathesis(word, originalWord) {
    if(liquids.includes(word[0]) && vowels.includes(word[1]) && consonants.includes(word[2])) {
        let before = correctionsForStrings(word.join(""));
        let liquid = word[0];
        let vowel = word[1];
        word[0] = vowel;
        word[1] = liquid;
        let after = correctionsForStrings(word.join(""));
        let afterExample = "";
        let originalJoined = originalWord.join("");
        if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
    if(word[0] === "X" && liquids.includes(word[1]) && vowels.includes(word[2]) && consonants.includes(word[3])) {
        let liquid = word[1];
        let vowel = word[2];
        word[1] = vowel;
        word[2] = liquid;
    }
    return {word}
};

function vowelLostBetweenConsonantAndliquid(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(consonants.includes(word[i]) && vowels.includes(word[i+1]) && liquids.includes(word[i+2]) && vowels.includes(word[i+3])) {
            let before = correctionsForStrings(word.join(""));
            word.splice(i+1,1);
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(vowelLostBetweenConsonantAndliquidNum < 6) {
            if(vowelLostBetweenConsonantAndliquidNum === 0) {
                let example = document.createElement("span");
                example.innerHTML = `${beforeExample} > ${afterExample}`;
                document.getElementById("vowelLostBetweenConsonantAndliquid").appendChild(example);
            } else {
                let example = document.createElement("span");
                example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                document.getElementById("vowelLostBetweenConsonantAndliquid").appendChild(example);
            }
            vowelLostBetweenConsonantAndliquidNum++;
        };
        }
        if(word[i] === "X" && consonants.includes(word[i+1]) && vowels.includes(word[i+2]) && liquids.includes(word[i+3]) && vowels.includes(word[i+4])) {
            word.splice(i+2,1) 
        };
    };
    return {word, originalWord}
};

function intervocalicVoicing(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(unvoiced.includes(word[i]) && vowels.includes(word[i-1]) && vowels.includes(word[i+1])) {
            let before = correctionsForStrings(word.join(""));
            let unvoicedIndex = unvoiced.indexOf(word[i]);
            word[i] = voiced[unvoicedIndex];
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            word.splice(i, 1);
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            let lengthMarkedWithTriangles = cloneArray(word);
            word[i] = word[i-1];
            lengthMarkedWithTriangles[i] = "ː";
            let after = correctionsForStrings(lengthMarkedWithTriangles.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            word[i] = "o";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            word[i] = "i";
            if(word[i+1] === "a") {
                word[i+1] = "i";
            }
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            word[i] = word[i-1];
            let lengthMarkedWithTriangles = corrections(cloneArray(word));
            word.splice(i+1, 1);
            lengthMarkedWithTriangles[i] = "ː";
            let after = correctionsForStrings(lengthMarkedWithTriangles.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            word[i] = "ʔ";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            word[word.length - 1] = "ʔ";
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
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(correctionsForStrings(before))}</i>`
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
            let before = correctionsForStrings(word.join(""));
            word[i] = "ʔ";
            word[i+1] = "u"
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
            let before = correctionsForStrings(word.join(""));
            word[i] = "ʔ";
            word[i+1] = "i"
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i>)`
            } else {
                afterExample = `${newName} <i><strong>${spell(after)}</strong></i>`
            };
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i>`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> > *<i>${spell(before)}</i>`
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
        if(consonants.includes(word[i]) && vowels.includes(word[i-1]) && liquids.includes(word[i+1]) && word[i] !== word[i+1] && vowels.includes(word[i+2])) {
            let before = correctionsForStrings(word.join(""));
            let liquidIndex = word[i+1];
            let vowelIndex = word[i+2];
            word.splice(i+1, 0, "ː");
            word[i+3] = liquidIndex;
            word[i+2] = vowelIndex;
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            word[i] = "g";
            word.splice(i+1, 1);
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            word[i] = "g";
            word.splice(i+1, 1);
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            word[i] = "i";
            if(word[i-1] === "e") {
                word[i-1] = "i";
            };
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            word[i] === "e";
            if(word[i-1] === "i") {
                word[i-1] = "e";
            }
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            let lengthMarkedWithTriangles = cloneArray(word);
            word[i] = "i";
            word[i+1] = "i";
            if(word[i-1] === "i") {
                word.splice(i-1,1);
            }
            let after = correctionsForStrings(lengthMarkedWithTriangles);
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            if(word[i-1] === "u") {
                word[i-1] = "o";
            }
            word[i] = "o";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            word[i] = "j";
            if(word[i-1] === "g") {
                word[i-1] = "j"
            }
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            let lengthMarkedWithTriangles = cloneArray(word);
            word[i] = word[i-1];
            lengthMarkedWithTriangles[i] = "ː"
            let after = correctionsForStrings(lengthMarkedWithTriangles);
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            word[i] = "i";
            if(word[i-1] === "e") {
                word[i-1] = "i";
            };
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            let lengthMarkedWithTriangles = cloneArray(word);
            word[i] = word[i-1];
            lengthMarkedWithTriangles[i] = "ː";
            let after = correctionsForStrings(lengthMarkedWithTriangles.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
            let before = correctionsForStrings(word.join(""));
            if(word[i-1] === word[i]) {
                word[i-1] = umlautVowels[vowelIndex];
            }
            word[i] = umlautVowels[vowelIndex];
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
        };
     };
     return word;
};

function vowelShiftInHeavySyllables(word, originalWord) {
    let tense = ["i", "u", "a", "e", "o"];
    let lax = ["e", "o", "ə", "ɛ", "ɔ"];
    for(let i = 0; i < word.length; i++) {
        if(tense.includes(word[i]) && consonants.includes(word[i+1]) && consonants.includes(word[i+2]) || tense.includes(word[i]) && consonants.includes(word[i+1]) && word[i+1] === word[word.length - 1]) {
            let before = correctionsForStrings(word.join(""));
            let tenseIndex = tense.indexOf(word[i]);
            if(word[i-1] === word[i]) {
                word[i-1] = lax[tenseIndex];
            }
            word[i] = lax[tenseIndex];
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
        };
    };
    return word
};

function VCVBecomesVCWordFinally(word, originalWord) {
    if(vowels.includes(word[word.length-1]) && consonants.includes(word[word.length-2]) && vowels.includes(word[word.length-3])) {
        let before = correctionsForStrings(word.join(""));
        word.splice(word.length-1, 1);
        let after = correctionsForStrings(word.join(""));
         let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
};

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
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
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

function longVowelsBreakIntoVi(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i]) && word[i+1] === "ː") {
            //breaks into short vowel + i
                let before = correctionsForStrings(word.join(""));
                word[i+1] = "i";
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(originalJoined) !== after) {
                    afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))})]`
                } else {
                    afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
                };
                let beforeExample = "";
                if(correctionsForStrings(originalJoined) === before) {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
                };
                if(longVowelsBreakIntoViNum < 6) {    
                    if(longVowelsBreakIntoViNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreakIntoVi").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreakIntoVi").appendChild(example);
                    };
                    longVowelsBreakIntoViNum++;   
                };
        };
    };
};

function longVowelsBreakIntoU(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i]) && word[i+1] === "ː") {
            //breaks into short vowel + u
                let before = correctionsForStrings(word.join(""));
                word[i+1] = "u";
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(originalJoined) !== after) {
                    afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
                } else {
                    afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
                };
                let beforeExample = "";
                if(correctionsForStrings(originalJoined) === before) {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
                };
                if(longVowelsBreakIntoUNum < 6) {    
                    if(longVowelsBreakIntoUNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreakIntoU").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreakIntoU").appendChild(example);
                    }
                    longVowelsBreakIntoUNum++;   
                };
        };
    };
};

function longVowelsBreakIntoIPlusRaising(word, originalWord) {
    let originalVowel = ["e", "ø", "ɘ", "ɵ", "ə", "ɛ", "ɜ", "ɞ", "ɪ", "ɔ", "œ", "ɒ", "ʊ", "ʌ", "ɤ", "o", "æ", "ɑ", "ɐ", "a", "i", "u", "y", "ɯ", "ɨ", "ʉ"];
    let heightenedVowel = ["ɪ", "ʏ", "ɨ", "ʉ", "ɘ", "e", "ɘ", "ɵ", "i", "o", "ø", "ɔ", "u", "ɤ", "ɯ", "u", "ɛ", "ʌ", "ɜ", "æ", "i", "u", "y", "ɯ", "ɨ", "ʉ"]

    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i]) && word[i+1] === "ː") {
            //breaks into higher short vowel + i
                let before = correctionsForStrings(word.join(""));
                word[i+1] = "i";
                let index = originalVowel.indexOf(word[i]);
                word[i] = heightenedVowel[index];
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(originalJoined) !== after) {
                    afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
                } else {
                    afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
                };
                let beforeExample = "";
                if(correctionsForStrings(originalJoined) === before) {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i>`
                };
                if(longVowelsBreakIntoIPlusRaisingNum < 6) {    
                    if(longVowelsBreakIntoIPlusRaisingNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreakIntoIPlusRaising").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreakIntoIPlusRaising").appendChild(example);
                    }
                    longVowelsBreakIntoIPlusRaisingNum++;   
                };
        };
    };
};

function longVowelsBreakIntoUPlusRaising(word, originalWord) {
    let originalVowel = ["e", "ø", "ɘ", "ɵ", "ə", "ɛ", "ɜ", "ɞ", "ɪ", "ɔ", "œ", "ɒ", "ʊ", "ʌ", "ɤ", "o", "æ", "ɑ", "ɐ", "a", "i", "u", "y", "ɯ", "ɨ", "ʉ"];
    let heightenedVowel = ["ɪ", "ʏ", "ɨ", "ʉ", "ɘ", "e", "ɘ", "ɵ", "i", "o", "ø", "ɔ", "u", "ɤ", "ɯ", "u", "ɛ", "ʌ", "ɜ", "æ", "i", "u", "y", "ɯ", "ɨ", "ʉ"]

    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i]) && word[i+1] === "ː") {
            //breaks into higher short vowel + u
                let before = correctionsForStrings(word.join(""));
                word[i+1] = "u";
                let index = originalVowel.indexOf(word[i]);
                word[i] = heightenedVowel[index];
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(originalJoined) !== after) {
                    afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
                } else {
                    afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
                };
                let beforeExample = "";
                if(correctionsForStrings(originalJoined) === before) {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
                };
                if(longVowelsBreakIntoUPlusRaisingNum < 6) {    
                    if(longVowelsBreakIntoUPlusRaisingNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreakIntoUPlusRaising").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreakIntoUPlusRaising").appendChild(example);
                    };
                    longVowelsBreakIntoUPlusRaisingNum++;   
                };

        }
    }
};

function longVowelsBreakIntoVj(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i]) && word[i+1] === "ː") {
            //breaks into j + short vowel
                let before = correctionsForStrings(word.join(""));
                word[i+1] = word[i];
                word[i] = "j";
                let after = correctionsForStrings(word.join(""));
                let afterExample = "";
                let originalJoined = originalWord.join("");
                if(soundChange(originalJoined) !== after) {
                    afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
                } else {
                    afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
                };
                let beforeExample = "";
                if(correctionsForStrings(originalJoined) === before) {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
                };
                if(longVowelsBreakIntoVjNum < 6) {    
                    if(longVowelsBreakIntoVjNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreakIntoVj").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreakIntoVj").appendChild(example);
                    }
                    longVowelsBreakIntoVjNum++;   
                };
        }
    }
};

function longVowelsBreakIntojVwV(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i]) && word[i+1] === "ː") {
            //breaks into jV or wV depending on frontness
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
                    afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
                } else {
                    afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
                };
                let beforeExample = "";
                if(correctionsForStrings(originalJoined) === before) {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
                } else {
                    beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
                };
                if(longVowelsBreakIntojVwVNum < 6) {    
                    if(longVowelsBreakIntojVwVNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreakIntojVwV").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("longVowelsBreakIntojVwV").appendChild(example);
                    }
                    longVowelsBreakIntojVwVNum++;   
                };
        };
    };
};

function vowelsHeightenBeforeVelars(word, originalWord) {
    let originalVowel = ["e", "ø", "ɘ", "ɵ", "ə", "ɛ", "ɜ", "ɞ", "ɪ", "ɔ", "œ", "ɒ", "ʊ", "ʌ", "ɤ", "o", "æ", "ɑ", "ɐ", "a", "i", "u", "y", "ɯ", "ɨ", "ʉ"];
    let heightenedVowel = ["ɪ", "ʏ", "ɨ", "ʉ", "ɘ", "e", "ɘ", "ɵ", "i", "o", "ø", "ɔ", "u", "ɤ", "ɯ", "u", "ɛ", "ʌ", "ɜ", "æ", "ii", "uu", "yy", "ɯɯ", "ɨɨ", "ʉʉ"];
    let velars = ["k", "g", "x", "ɣ"]

    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i]) && velars.includes(word[i+1])) {
            let index = originalVowel.indexOf(word[i]);
            let before = correctionsForStrings(word.join(""));
            if(word[i-1] === word[i]) {
                word[i] = heightenedVowel[index];
                word[i-1] =  word[i];
            } else {
                word[i] = heightenedVowel[index];
            }
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(vowelsHeightenBeforeVelarsNum < 6) {    
                if(vowelsHeightenBeforeVelarsNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("vowelsHeightenBeforeVelars").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("vowelsHeightenBeforeVelars").appendChild(example);
                }
                vowelsHeightenBeforeVelarsNum++;   
            };
        };
    };
};

function palatalsBecomeVelar(word, originalWord) {
    let palatal = ["c", "ɟ", "ç", "ʝ", "ʎ", "j"];
    let velar = ["k", "g", "x", "ɣ", "ɣ", "x"];
    for(let i = 0; i < word.length; i++) {
        if(palatal.includes(word[i])) {
            let before = correctionsForStrings(word.join(""));
            let index = palatal.indexOf(word[i]);
            word[i] = velar[index];
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(palatalsBecomeVelarNum < 6) {    
                if(palatalsBecomeVelarNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("palatalsBecomeVelar").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("palatalsBecomeVelar").appendChild(example);
                }
                palatalsBecomeVelarNum++;   
            };
        };
    };
   
};

function gwbecomesB(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "g" && word[i+1] === "ʷ") {
            let before = correctionsForStrings(word.join(""));
            word[i] = "b";
            word.splice(i+1,1);
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(gwbecomesBNum < 6) {    
                if(gwbecomesBNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("gwbecomesB").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("gwbecomesB").appendChild(example);
                }
                gwbecomesBNum++;   
            };
        }
    }
};

function eRaBecomesARa(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "e" && liquids.includes(word[i+1]) && word[i+2] === "a") {
            let before = correctionsForStrings(word.join(""));
            word[i] = "a";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(eRaBecomesARaNum < 6) {    
                if(eRaBecomesARaNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("eRaBecomesARa").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("eRaBecomesARa").appendChild(example);
                }
                eRaBecomesARaNum++;   
            };
        }
    }
};

function epentheticA(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(consonants.includes(word[i]) && liquids.includes(word[i+1]) && consonants.includes(word[i+2])) {
            let before = correctionsForStrings(word.join(""));
            word.splice(i+1, 0, "a");
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(epentheticANum < 6) {    
                if(epentheticANum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("epentheticA").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("epentheticA").appendChild(example);
                }
                epentheticANum++;   
            };
        }
    }
};

function pKWBecomesKwKw(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "p" && word.includes("k")) {
            let index = word.indexOf("k");
            if(word[index+1] === "ʷ" && index > i) {
                let before = correctionsForStrings(word.join(""));
                word[i] = "kʷ";
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
                if(pKWBecomesKwKwNum < 6) {    
                    if(pKWBecomesKwKwNum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("pKWBecomesKwKw").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("pKWBecomesKwKw").appendChild(example);
                    }
                    pKWBecomesKwKwNum++;   
                };
                };
        }
    }
};

function longEBecomesLongI(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "e" && word[i+1] === "ː") {
            let before = correctionsForStrings(word.join(""));
            word[i] = "i";
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
                if(longEBecomesLongINum < 6) {    
                    if(longEBecomesLongINum === 0) {
                        let example = document.createElement("span");
                        example.innerHTML = `${beforeExample} > ${afterExample}`;
                        document.getElementById("longEBecomesLongI").appendChild(example);
                    } else {
                        let example = document.createElement("span");
                        example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                        document.getElementById("longEBecomesLongI").appendChild(example);
                    }
                    longEBecomesLongINum++;   
                };
                };
        }
};

function wordFinalLongOBecomesLongU(word, originalWord) {
    if(word[word.length-1] === "ː" && word[word.length-2] === "o") {
        let before = correctionsForStrings(word.join(""));
        word[word.length-2] = "u";
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
        if(wordFinalLongOBecomesLongUNum < 6) {    
            if(wordFinalLongOBecomesLongUNum === 0) {
                let example = document.createElement("span");
                example.innerHTML = `${beforeExample} > ${afterExample}`;
                document.getElementById("wordFinalLongOBecomesLongU").appendChild(example);
            } else {
                let example = document.createElement("span");
                example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                document.getElementById("wordFinalLongOBecomesLongU").appendChild(example);
            }
            wordFinalLongOBecomesLongUNum++;   
        };
    }
};

function longVowelsShortenBeforeRC(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i-1]) && word[i] === "ː" && liquids.includes(word[i+1]) && consonants.includes(word[i+2])) {
            let before = correctionsForStrings(word.join(""));
            word.splice(i,1);
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
        if(longVowelsShortenBeforeRCNum < 6) {    
            if(longVowelsShortenBeforeRCNum === 0) {
                let example = document.createElement("span");
                example.innerHTML = `${beforeExample} > ${afterExample}`;
                document.getElementById("longVowelsShortenBeforeRC").appendChild(example);
            } else {
                let example = document.createElement("span");
                example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                document.getElementById("longVowelsShortenBeforeRC").appendChild(example);
            }
            longVowelsShortenBeforeRCNum++;   
        };
        }
    }
};

function CCBecomesXC(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(consonants.includes(word[i]) && plosives.includes(word[i+1]) && word[i] !== word[i+1]|| consonants.includes(word[i]) && word[i+1] === "s"&& word[i] !== word[i+1]) {
            let before = correctionsForStrings(word.join(""));
            word[i] = "x";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(CCBecomesXCNum < 6) {    
                if(CCBecomesXCNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("CCBecomesXC").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("CCBecomesXC").appendChild(example);
                }
                CCBecomesXCNum++;   
            };
        }
    }
};

function pBecomesBBeforeliquids(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "p" && liquids.includes(word[i+1])) {
            let before = correctionsForStrings(word.join(""));
            word[i] = "b";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(pBecomesBBeforeliquidsNum < 6) {    
                if(pBecomesBBeforeliquidsNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("pBecomesBBeforeliquids").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("pBecomesBBeforeliquids").appendChild(example);
                }
                pBecomesBBeforeliquidsNum++;   
            };
        }
    }
};

function pBecomesU(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "p" && backVowels.includes(word[i-1]) && allNasalsArray.includes(word[i+1])) {
            let before = correctionsForStrings(word.join(""));
            word[i] = "u";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(pBecomesUNum < 6) {    
                if(pBecomesUNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("pBecomesU").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("pBecomesU").appendChild(example);
                }
                pBecomesUNum++;   
            };
        }
    };
};

function pBecomesF(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if((word[i] === "p" && word[i+1] !== "ʰ") || (word[i] === "p" && word[i+1] !== "ʷ")) {
            let before = correctionsForStrings(word.join(""));
            word[i] = "f";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(pBecomesFNum < 6) {    
                if(pBecomesFNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("pBecomesF").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("pBecomesF").appendChild(example);
                }
                pBecomesFNum++;   
            };
        };
    };
};

function longOBecomesA(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "o" && word[i+1] === "ː") {
            let before = correctionsForStrings(word.join(""));
            word[i] = "a";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(longOBecomesANum < 6) {    
                if(longOBecomesANum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("longOBecomesA").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("longOBecomesA").appendChild(example);
                }
                longOBecomesANum++;   
            };
        };
    };
    return word;
};

function eWBecomesOW(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "e" && word[i+1] === "w") {
            let before = correctionsForStrings(word.join(""));
            word[i] = "o";
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(eWBecomesOWNum < 6) {    
                if(eWBecomesOWNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("eWBecomesOW").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("eWBecomesOW").appendChild(example);
                }
                eWBecomesOWNum++;   
            };
        }
    }
};

function longUBecomesOU(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "u" && word[i+1] === "ː" && obstruents.includes(word[i+2])) {
            let before = correctionsForStrings(word.join(""));
            word[i] = "o";
            word[i+1] = "u"
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(longUBecomesOUNum < 6) {    
                if(longUBecomesOUNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("longUBecomesOU").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("longUBecomesOU").appendChild(example);
                }
                longUBecomesOUNum++;   
            };
        }
    }
};

function velarsDelabialise(word, originalWord) {
    let velars = ["k", "g", "kʰ", "gʰ"];
    for(let i = 0; i < word.length; i++) {
        if(velars.includes(word[i]) && word[i+1] === "ʷ") {
            let before = correctionsForStrings(word.join(""));
            word.splice(i+1,1);
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(velarsDelabialiseNum < 6) {    
                if(velarsDelabialiseNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("velarsDelabialise").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("velarsDelabialise").appendChild(example);
                }
                velarsDelabialiseNum++;   
            };
        }
    }
};

function lossOfAspiration(word, originalWord) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "ʰ") {
            let before = correctionsForStrings(word.join(""));
            word.splice(i,1);
            let after = correctionsForStrings(word.join(""));
            let afterExample = "";
            let originalJoined = originalWord.join("");
            if(soundChange(originalJoined) !== after) {
                afterExample = `<i>*${spell(after)}</i> [${markLengthInIPA(after)}] (> ${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}])`
            } else {
                afterExample = `${newName} <i><strong>${spell(soundChange(originalJoined))}</strong></i> [${markLengthInIPA(soundChange(originalJoined))}]`
            }
            let beforeExample = "";
            if(correctionsForStrings(originalJoined) === before) {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}]`;
            } else {
                beforeExample = `${oldName} <i><strong>${spell(correctionsForStrings(originalJoined))}</strong></i> [${markLengthInIPA(originalJoined)}] > *<i>${spell(before)}</i> [${markLengthInIPA(before)}]`
            }
            if(lossOfAspirationNum < 6) {    
                if(lossOfAspirationNum === 0) {
                    let example = document.createElement("span");
                    example.innerHTML = `${beforeExample} > ${afterExample}`;
                    document.getElementById("lossOfAspiration").appendChild(example);
                } else {
                    let example = document.createElement("span");
                    example.innerHTML = `, ${beforeExample} > ${afterExample}`;
                    document.getElementById("lossOfAspiration").appendChild(example);
                }
                lossOfAspirationNum++;   
            };
        }
    }
};

/*--------------------------------------------------------------------*/


document.getElementById("generate-language").addEventListener("click", generateLanguage);

function generateLanguage() {
    clearArrays();
    createAbbreviationsForLanguageName();
    populateArray();
    //soundChangeExample();
};

export {soundChangeExample};