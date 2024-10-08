/* eslint-disable no-loop-func */
import { consonants, vowels as chosenVowels, selectedSyllables, allNasalsArray, selectFricatives, selectNasals, chooseVoicing } from './generatePhonology.js';
import { spell } from './orthography.js'
import { cloneArray } from './library.js'

let addedConsonants = consonants;

// function soundChange(word) {

//     //let vowels = ["a", "ā", "e", "ē", "o", "ō", "u", "ū", "i", "ī", "ə"];
//     //let longVowels = ["ā", "ē", "ō", "ū", "ī", "ə"];
//     //let consonants = ["m", "n", "p", "b", "t", "d", "k", "g", "f", "v", "s", "z", "h", "l", "r", "j", "w"];

//     let letterArray = Array.from(word); /*turns string into an array of individual letters*/

//     /*---------SYNCOPE-----------*/
//     //removes the fourth letter of words longer than four letters, and lengthens the first vowel, or if the third and fourth letters are the same, removes the fifth letter abd lengthens the fourth letter
//     if(vowels.includes(letterArray[0])) {
//         if (letterArray.length > 4) {
//             if (letterArray[1] == letterArray[3]) { //check's if the third and fourth letter are the same
//                 letterArray.splice([4], 1); // 2nd parameter means remove one item only
//                 if (letterArray[2] == "o") {
//                     letterArray[2] = "ō"
//                 } else if (letterArray[2] == "u") {
//                     letterArray[2] = "ū"
//                 } else if (letterArray[2] == "i") {
//                     letterArray[2] = "ī"
//                 } else if (letterArray[2] == "e") {
//                     letterArray[2] = "ē"
//                 } else if (letterArray[23] == "a") {
//                     letterArray[2] = "ā"
//                 }
//             } else if(vowels.includes(letterArray[4])) {
//                 letterArray.splice([2], 1);
//                 if (letterArray[0] == "o") {
//                     letterArray[0] = "ō"
//                 } else if (letterArray[0] == "u") {
//                     letterArray[0] = "ū"
//                 } else if (letterArray[0] == "i") {
//                     letterArray[0] = "ī"
//                 } else if (letterArray[0] == "e") {
//                     letterArray[0] = "ē"
//                 } else if (letterArray[0] == "a") {
//                     letterArray[0] = "ā"
//                 }
//             }
//     }
//     } else { //else if letterArray[0]'s value is a consonant
//         if (letterArray.length > 4) {
//             if (letterArray[2] == letterArray[4]) { //check's if the third and fourth letter are the same
//                 letterArray.splice([5], 1); // 2nd parameter means remove one item only
//                 if (letterArray[3] == "o") {
//                     letterArray[3] = "ō"
//                 } else if (letterArray[3] == "u") {
//                     letterArray[3] = "ū"
//                 } else if (letterArray[3] == "i") {
//                     letterArray[3] = "ī"
//                 } else if (letterArray[3] == "e") {
//                     letterArray[3] = "ē"
//                 } else if (letterArray[3] == "a") {
//                     letterArray[3] = "ā"
//                 }
//             } else if(vowels.includes(letterArray[3])) {
//                 letterArray.splice([3], 1);
//                 if (letterArray[1] == "o") {
//                     letterArray[1] = "ō"
//                 } else if (letterArray[1] == "u") {
//                     letterArray[1] = "ū"
//                 } else if (letterArray[1] == "i") {
//                     letterArray[1] = "ī"
//                 } else if (letterArray[1] == "e") {
//                     letterArray[1] = "ē"
//                 } else if (letterArray[1] == "a") {
//                     letterArray[1] = "ā"
//                 }
//             }
//     }
//     }

//     let syncopedString = letterArray.join(""); //turns the array back into a string

//     let lenitionString0 = syncopedString.replace("pb", "fp");
//     let lenitionString1 = lenitionString0.replace("bp", "fp");
//     let lenitionString2 = lenitionString1.replace("gk", "hk");
//     let lenitionString3 = lenitionString2.replace("kg", "hk");
//     let lenitionString4 = lenitionString3.replace("dt", "st");
//     let lenitionString5 = lenitionString4.replace("td", "st");
//     let lenitionString6 = lenitionString5.replace("bm", "mb");
//     let lenitionString7 = lenitionString6.replace("mt", "md");
//     let lenitionString8 = lenitionString7.replace("mp", "mb");
//     let lenitionString9 = lenitionString8.replace("mk", "mg");

//     let furtherChanges = Array.from(lenitionString9);

//     let rejoinedString = furtherChanges.join(""); //turns the array back into a string

//     //removes "h" if it occurs both after another consonant and before "k". Due to interference with the "h" in the accusative prefix, I had to make this rather clunky workaround. This turns "hk" clusters into "X" (all cases of post-consonantal "h" occur befor "h") and then check if "X" if after a consonant, if it is, then "X" becomes "k", else, it becomes "hk" again
//     let hKtoX = rejoinedString.replace("hk", "X");
//     let beforeX = consonants.includes(hKtoX.charAt(hKtoX.indexOf("X") - 1));
//     let removeCX = hKtoX.includes("X") && beforeX ? hKtoX.replace("X", "k") : hKtoX;
//     let returnXtoHK = removeCX.replace("X", "hk");

//     //checks if "r" is before and after a consonant, and turns it into schwa if so
//     let syllabliseR = returnXtoHK.includes("r") && consonants.includes(returnXtoHK.charAt(returnXtoHK.indexOf("r") + 1)) && consonants.includes(returnXtoHK.charAt(returnXtoHK.indexOf("r") - 1)) ? returnXtoHK.replace("r", "ə") : returnXtoHK;

//     //checks if "l" is before and after a consonant, and turns it into schwa if so
//     let syllabliseL = syllabliseR.includes("l") && consonants.includes(syllabliseR.charAt(syllabliseR.indexOf("l") + 1)) && consonants.includes(syllabliseR.charAt(syllabliseR.indexOf("l") - 1)) ? syllabliseR.replace("l", "ə") : syllabliseR;

//     //turns geminates into singletons
//     let reduceGeminate = syllabliseL.replace("pp", "p");
//     let reduceGeminate1 = reduceGeminate.replace("bb", "b");
//     let reduceGeminate2 = reduceGeminate1.replace("tt", "t");
//     let reduceGeminate3 = reduceGeminate2.replace("dd", "d");
//     let reduceGeminate4 = reduceGeminate3.replace("kk", "k");
//     let reduceGeminate5 = reduceGeminate4.replace("gg", "g");
//     let reduceGeminate6 = reduceGeminate5.replace("ss", "s");
//     let reduceGeminate7 = reduceGeminate6.replace("ll", "l");
//     let reduceGeminate8 = reduceGeminate7.replace("rr", "r");
//     let reduceGeminate9 = reduceGeminate8.replace("nn", "n");
//     let reduceGeminate10 = reduceGeminate9.replace("mm", "m");
//     let reduceGeminate11 = reduceGeminate10.replace("hh", "h");

//     let syllabliseJ = reduceGeminate11.includes("j") && consonants.includes(reduceGeminate11.charAt(reduceGeminate11.indexOf("j") + 1)) || reduceGeminate11[reduceGeminate11.length - 1] == "j" ? reduceGeminate11.replace("j", "i") : reduceGeminate11;

//     let syllabliseW = syllabliseJ.includes("w") && consonants.includes(syllabliseJ.charAt(syllabliseJ.indexOf("w") + 1)) || syllabliseJ[syllabliseJ.length - 1] == "w" ? syllabliseJ.replace("w", "u"): syllabliseJ;

//     let fixMacronUPlusU = syllabliseW.replace("ūu", "ū");
//     let fixUPlusMacronU = fixMacronUPlusU.replace("uū", "ū");
//     let fixUPlusU = fixUPlusMacronU.replace("uu", "ū");
//     let fixMacronUPlusU2 = fixUPlusU.replace("ūu", "ū"); //because "uuw" becomes "uuu" then "ūu" which happens after the first "ūu" > "ū"

//     let fixMacronIPlusI = fixMacronUPlusU2.replace("īi", "ī");
//     let fixIPlusMacronI = fixMacronIPlusI.replace("iī", "ī");
//     let fixIPlusI = fixIPlusMacronI.replace("ii", "ī");

//     let fixMacronEplusE = fixIPlusI.replace("ēe", "ē");
//     let fixEPlusMacronE = fixMacronEplusE.replace("eē", "ē");
//     let fixEPlusE = fixEPlusMacronE.replace("ee", "ē");

//     let fixMacronOplusO = fixEPlusE.replace("ōo", "o");
//     let fixOPlusMacronO = fixMacronOplusO.replace("oō", "ō");
//     let fixOPlusO = fixOPlusMacronO.replace("oo", "ō");

//     let fixMacronAplusA = fixOPlusO.replace("āa", "ā");
//     let fixAPlusMacronA = fixMacronAplusA.replace("aā", "ā");
//     let fixAPlusA = fixAPlusMacronA.replace("aa", "ā");

//     return fixAPlusA;
// }


let voiced = ["b", "d", "g", "z", "bʰ", "dʰ", "gʰ", "ʐ", "ɖ", "ɣ", "v", "ɦ", "ʤ", "ɟ", "ʁ", "ʒ", "ɟ", "ʕ", "bʲ", "dʲ", "gʲ", "bʷ", "dʷ", "gʷ", "bʰʲ", "dʰʲ", "gʰʲ", "bʷʰ", "dʷʰ", "gʷʰ", "ð", "ɮ"];
let unvoiced = ["p", "t", "k", "s", "pʰ", "tʰ", "kʰ", "ʂ", "ʈ", "x", "f", "h", "ʧ", "c", "χ", "ʃ", "ç", "ħ", "pʲ", "tʲ", "kʲ", "pʷ", "tʷ", "kʷ", "pʰʲ", "tʰʲ", "kʰʲ", "pʷʰ", "tʷʰ", "kʷʰ", "θ", "ɬ"]
let highVowels = ["i", "u", "y", "ɯ", "ɨ", "ʉ"];
let midVowels = ["e", "o", "ø", "ɤ", "ɘ", "ɵ", "ə", "ɛ", "œ", "ɜ", "ɞ", "ʌ", "ɔ", "ɑ", "ɒ", "ɐ", "æ"];
let nonHighVowels = ["e", "ø", "ɘ", "ɵ", "ə", "ɛ", "ɜ", "ɞ", "ɪ", "ɔ", "œ", "ɒ", "ʊ", "ʌ", "ɤ", "o", "æ", "ɑ", "ɐ", "a"];
let frontVowels = ["i", "y", "e", "ø", "ɛ", "œ", "æ", "ɪ"];
let backVowels = ["u", "ɔ", "ɒ", "ʊ", "ʌ", "ɤ", "o", "ɑ"];
let vowels = highVowels.concat(nonHighVowels);
let addedVowels = vowels;
let liquids = ["r", "l", "rʲ", "lʲ", "ʎ", "ɽ", "ɭ"];
let plosives = ["b", "d", "g", "bʰ", "dʰ", "gʰ", "ɖ", "ɟ", "bʲ", "dʲ", "gʲ", "bʷ", "dʷ", "gʷ", "bʰʲ", "dʰʲ", "gʰʲ", "bʷʰ", "dʷʰ", "gʷʰ", "p", "t", "k", "pʰ", "tʰ", "kʰ", "ʈ", "c", "pʲ", "tʲ", "kʲ", "pʷ", "tʷ", "kʷ", "pʰʲ", "tʰʲ", "kʰʲ", "pʷʰ", "tʷʰ", "kʷʰ", "ʔ", "q", "ɢ"];
let lenitionFromPlosives1 = ["β", "ð", "ɣ", "β", "ð", "ɣ", "ʐ", "ʝ", "βʲ", "ðʲ", "ɣʲ", "βʷ", "ðʷ", "ɣʷ", "βʲ", "ðʲ", "ɣʲ", "βʷ", "ðʷ", "ɣʷ", "ɸ", "θ", "x", "ɸ", "θ", "x", "θ", "ç", "ɸʲ", "θʲ", "xʲ", "ɸʷ", "θʷ", "xʷ", "ɸʲ", "θʲ", "xʲ", "θʷ", "θʷ", "xʷ", "h", "χ", "ʁ"];
let lenitionFromPlosives2 = ["v", "z", "h", "v", "z", "h", "ʐ", "j", "vʲ", "zʲ", "hʲ", "vʷ", "zʷ", "hʷ", "vʲ", "zʲ", "hʲ", "vʷ", "zʷ", "hʷ", "f", "s", "h", "f", "s", "h", "ʂ", "j", "fʲ", "sʲ", "hʲ", "fʷ", "sʷ", "hʷ", "fʲ", "sʲ", "hʲ", "fʷ", "stʷ", "hʷ", "h", "h", "h"];
let fricatives = ["ɸ", "β", "f", "v", "s", "z", "ʃ", "ʒ", "ʂ", "ʐ", "θ", "ð", "ç", "ʝ", "h", "ɦ", "x", "ɣ", "ʕ", "ħ", "ɬ", "ɮ", "χ", "ʁ"]
let syllablestructuresThatHaveWordFinalConsonants = ["CVC", "VVC", "VVCC", "VCC", "AVC", "CAVCC", "CVNC", "VNC", "CVFC", "FCVC", "CCFV", "CVRC", "CVCR", "CRVC", "CVH", "HVC", "VC"];
let obstruents = plosives.concat(fricatives)

let timeswordFinalDevoicingApplied = 0;
let timesplosivesCantClusterTogetherWordInitiallyApplied = 0;
let timesfricativesLostAfterWordInitialConsonantsApplied = 0;
let timeswordFinalHighVowelsLowerApplied = 0;
let timesliquidsLostAfterConsonantsApplied = 0;
let timesInsertIBetweenConsonantAndliquidApplied = 0;
let timesInsertUBetweenConsonantAndliquidApplied = 0;
let timesConsonantliquidMetathesisApplied = 0;
let timeslenitionofPlosivebeforeOtherPlosive1Applied = 0;
let timeslenitionofPlosivebeforeOtherPlosive2Applied = 0;
let timesnonInitialNonHighVowelsBecomeAApplied = 0;
let timesnasalsCantAppearAfterConsonantsApplied = 0;
let timefricativesDebuccaliseBeforeVowelsApplied = 0;
let timesvowelLostBetweenTwoOfSameConsonantApplied = 0;
let timesvoicedConsonantsLostIntervocalicallyApplied = 0;
let timesRVCToVRCMetathesisApplies = 0;
let timesvowelLostBetweenConsonantAndliquidApplied = 0;
let timesintervocalicVoicing = 0;
let timeshLostAfterConsonants = 0;
let timesnasalsLostBetweenVowelAndConsonant = 0;
let timesauBecomesOu = 0;
let timesaCaBecomesaCi = 0;
let timesVʔVBecomesVV = 0;
let timesplosivesDebuccaliseInCoda = 0;
let timesCVRBecomesCCVR = 0;
let timesglottalStopJFortites = 0;
let timeseciBecomesiCi = 0;
let timesiCbecomeseC = 0;
let timesVJbecomesLongI = 0;
let timesuNBecomesoN = 0;
let timesgBecomesJ = 0;
let timesVvBecomesVV = 0;
let timeseNBecomesiN = 0;
let timesCJBecomesCC = 0;
let timesiUmlaut = 0;
let timesvowelShiftInHeavySyllables = 0;
let timesVCVBecomesVCWordFinally = 0;
let timeslongABecomesO = 0;
let timespalatalisationofPlosives = 0;
let timeseOBecomeJW = 0;
let timesVzbecomesVr = 0;
let timesintialVBecomesHV = 0;
let timesintialJBecomesL = 0;
let timestDBecomeL = 0;
let timeslongVowelsBreakIntoVi = 0;
let timeslongVowelsBreakIntoU = 0;
let timeslongVowelsBreakIntoIPlusRaising = 0;
let timeslongVowelsBreakIntoUPlusRaising = 0;
let timeslongVowelsBreakIntoVj = 0;
let timeslongVowelsBreakIntojVwV = 0;
let timesvowelsHeightenBeforeVelars = 0;
let timespalatalsBecomeVelar = 0;
let timesgwbecomesB = 0;
let timeseRaBecomesARa = 0;
let timesepentheticA = 0;
let timespKWBecomesKwKw = 0;
let timeslongEBecomesLongI = 0;
let timeswordFinalLongOBecomesLongU = 0;
let timeslongVowelsShortenBeforeRC = 0;
let timesCCBecomesXC = 0;
let timespBecomesBBeforeliquids = 0;
let timespBecomesU = 0;
let timespBecomesF = 0;
let timeslongOBecomesA = 0;
let timeseWBecomesOW = 0;
let timeslongUBecomesOU = 0;
let timesvelarsDelabialise = 0;
let timeslossOfAspiration = 0;


//shows language customisation options for Sound Changes
let randomisedSoundChangeButton = document.getElementById("randomisedSoundChange");
let customisedSoundChangeButton = document.getElementById("customisedSoundChange");
let soundChangeMenu = document.getElementById("sound-change-menu-div");
soundChangeMenu.style.display = "none";
let randomSoundChangeOption = true;
let checkIfSoundChangeOptionChecked = "";

function randomiseSoundChange() {
    if (randomisedSoundChangeButton.checked) {
        soundChangeMenu.style.display = "none";
        randomSoundChangeOption = true;
        checkIfSoundChangeOptionChecked = "checked";
        document.getElementById("sound-change-warning").style.display = "none";
    };
};

function customiseSoundChange() {
    if (customisedSoundChangeButton.checked) {
        soundChangeMenu.style.display = "block";
        randomSoundChangeOption = false;
        checkIfSoundChangeOptionChecked = "checked";
        document.getElementById("sound-change-warning").style.display = "none";
    };
};
randomisedSoundChangeButton.addEventListener("click", randomiseSoundChange);
customisedSoundChangeButton.addEventListener("click", customiseSoundChange);

function clearPreviousOutput() {
    document.getElementById("sound-change-explanation").replaceChildren();
    timeswordFinalDevoicingApplied = 0;
    timesplosivesCantClusterTogetherWordInitiallyApplied = 0;
    timesfricativesLostAfterWordInitialConsonantsApplied = 0;
    timeswordFinalHighVowelsLowerApplied = 0;
    timesliquidsLostAfterConsonantsApplied = 0;
    timesInsertIBetweenConsonantAndliquidApplied = 0;
    timesInsertUBetweenConsonantAndliquidApplied = 0;
    timesConsonantliquidMetathesisApplied = 0;
    timeslenitionofPlosivebeforeOtherPlosive1Applied = 0;
    timeslenitionofPlosivebeforeOtherPlosive2Applied = 0;
    timesnonInitialNonHighVowelsBecomeAApplied = 0;
    timesnasalsCantAppearAfterConsonantsApplied = 0;
    timefricativesDebuccaliseBeforeVowelsApplied = 0;
    timesvowelLostBetweenTwoOfSameConsonantApplied = 0;
    timesvoicedConsonantsLostIntervocalicallyApplied = 0;
    timesRVCToVRCMetathesisApplies = 0;
    timesvowelLostBetweenConsonantAndliquidApplied = 0;
    timesintervocalicVoicing = 0;
    timeshLostAfterConsonants = 0;
    timesnasalsLostBetweenVowelAndConsonant = 0;
    timesauBecomesOu = 0;
    timesaCaBecomesaCi = 0;
    timesVʔVBecomesVV = 0;
    timesplosivesDebuccaliseInCoda = 0;
    timesCVRBecomesCCVR = 0;
    timesglottalStopJFortites = 0;
    timeseciBecomesiCi = 0;
    timesiCbecomeseC = 0;
    timesVJbecomesLongI = 0;
    timesuNBecomesoN = 0;
    timesgBecomesJ = 0;
    timesVvBecomesVV = 0;
    timeseNBecomesiN = 0;
    timesCJBecomesCC = 0;
    timesiUmlaut = 0;
    timesvowelShiftInHeavySyllables = 0;
    timesVCVBecomesVCWordFinally = 0;
    timeslongABecomesO = 0;
    timespalatalisationofPlosives = 0;
    timeseOBecomeJW = 0;
    timesVzbecomesVr = 0;
    timesintialVBecomesHV = 0;
    timesintialJBecomesL = 0;
    timestDBecomeL = 0;
    timeslongVowelsBreakIntoVi = 0;
    timeslongVowelsBreakIntoU = 0;
    timeslongVowelsBreakIntoIPlusRaising = 0;
    timeslongVowelsBreakIntoUPlusRaising = 0;
    timeslongVowelsBreakIntoVj = 0;
    timeslongVowelsBreakIntojVwV = 0;
    timesvowelsHeightenBeforeVelars = 0;
    timespalatalsBecomeVelar = 0;
    timesgwbecomesB = 0;
    timeseRaBecomesARa = 0;
    timesepentheticA = 0;
    timespKWBecomesKwKw = 0;
    timeslongEBecomesLongI = 0;
    timeswordFinalLongOBecomesLongU = 0;
    timeslongVowelsShortenBeforeRC = 0;
    timesCCBecomesXC = 0;
    timespBecomesBBeforeliquids = 0;
    timespBecomesU = 0;
    timespBecomesF = 0;
    timeslongOBecomesA = 0;
    timeseWBecomesOW = 0;
    timeslongUBecomesOU = 0;
    timesvelarsDelabialise = 0;
    timeslossOfAspiration = 0;
};

//all possible sound changes are called in this array
let potentialSoundChanges = [
    plosivesCantClusterTogetherWordInitially,
    wordFinalDevoicing,
    fricativesLostAfterWordInitialConsonants,
    lenitionofPlosivebeforeOtherPlosive1,
    lenitionofPlosivebeforeOtherPlosive2,
    wordFinalHighVowelsLower,
    liquidsLostBeforeConsonants,
    insertIBetweenConsonantAndliquid,
    insertUBetweenConsonantAndliquid,
    consonantliquidMetathesis,
    nonInitialNonHighVowelsBecomeA,
    nasalsCantAppearAfterConsonants,
    fricativesDebuccaliseBeforeVowels,
    vowelLostBetweenTwoOfSameConsonant,
    voicedConsonantsLostIntervocalically,
    RVCToVRCMetathesis,
    vowelLostBetweenConsonantAndliquid,
    intervocalicVoicing,
    hLostAfterConsonants,
    nasalsLostBetweenVowelAndConsonant,
    auBecomesOu,
    aCaBecomesaCi,
    VʔVBecomesVV,
    plosivesDebuccaliseInCoda,
    CVRBecomesCCVR,
    glottalStopJFortites,
    eciBecomesiCi,
    iCbecomeseC,
    VJbecomesLongI,
    uNBecomesoN,
    gBecomesJ,
    VvBecomesVV,
    eNBecomesiN,
    CJBecomesCC,
    iUmlaut,
    vowelShiftInHeavySyllables,
    VCVBecomesVCWordFinally,
    longABecomesO,
    palatalisationofPlosives,
    eOBecomeJW,
    VzbecomesVr,
    intialVBecomesHV,
    intialJBecomesL,
    tDBecomeL,
    longVowelsBreakIntoVi,
    longVowelsBreakIntoU,
    longVowelsBreakIntoIPlusRaising,
    longVowelsBreakIntoUPlusRaising,
    longVowelsBreakIntoVj,
    longVowelsBreakIntojVwV,
    vowelsHeightenBeforeVelars,
    palatalsBecomeVelar,
    gwbecomesB,
    eRaBecomesARa,
    epentheticA,
    pKWBecomesKwKw,
    longEBecomesLongI,
    wordFinalLongOBecomesLongU,
    longVowelsShortenBeforeRC,
    CCBecomesXC,
    pBecomesBBeforeliquids,
    pBecomesU,
    pBecomesF,
    longOBecomesA,
    eWBecomesOW,
    longOBecomesA,
    longUBecomesOU,
    velarsDelabialise,
    lossOfAspiration
];

let chosenSoundChanges = [];

//if custom sound changes were selected, then the chosenSoundChanges array is populated with those options
function useChosenSoundChanges() {
    if (randomSoundChangeOption === false) {
        //the items in chosenSoundChanges from the previous generation are removed
        chosenSoundChanges = [];
        let soundChangeList = document.getElementById("sortable");
        let children = soundChangeList.children;

        for (let i = 0; i < children.length; i++) {
            //the resulting string, with the "-list" removed, is now identical to the function names
            let soundChangeName = children[i].id.replace("-list", "");

            //each function name in potentialSoundChanges is converted to a string. If the string is identical to soundChangeName, the function name is pushed to chosenSoundChanges
            for (let j = 0; j < potentialSoundChanges.length; j++) {
                let functionNameToString = potentialSoundChanges[j].name.toString()
                if (functionNameToString === soundChangeName) {
                    chosenSoundChanges.push(potentialSoundChanges[j]);
                };
            };
        };
    };
    //console.log(chosenSoundChanges)
};
let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", useChosenSoundChanges);

function countAmountOfSoundChanges() {
    document.getElementById("sound-change-number").innerHTML = potentialSoundChanges.length;
};
customisedSoundChangeButton.addEventListener("click", countAmountOfSoundChanges);

function checkIfWordFinalConsonantsArePossible() {
    for (let i = 0; i < syllablestructuresThatHaveWordFinalConsonants.length; i++) {
        if (selectedSyllables.includes(syllablestructuresThatHaveWordFinalConsonants[i])) {
            return true
        } else {
            return false;
        };
    };
};

//A list of titles for every sound change is placed into the array "potentialSoundChanges". Then a random number and selection of these titles are pushed into the "chosenSoundChanges" array. If the "chosenSoundChanges" contains a sound changes title, the sound change may occur.

let wordArray = [];
let wordFinalDevoicingTrueOrFalse = "";
let randomNumForWordInitialPlosiveClusters = "";
let randomNumForWordInitialNasalClusters = "";
let randomNumForNoFricativesAsLatterElementOfInitialClusters = ""


//Some sound changes won't be considered as part of an explicitly listed phonotactic, but still apply to stop the output consisting of rare features. For example, the output kept giving words with complex clusters of plosives word initially, which is plausible, but it did it far too much to be natural. In these cases, I intentionally stunt these results by making sound changes to undo them and give these sound changes a very high chance of occuring. So the unusual results can still happen but will be much rarer and thus more natural. These changes will be governed by their own random numbers instead of being chosen based on whether they made it to the chosenSoundChanges array.

let cloneChosen = [];
let randomNumberForSoundChangeSelection = 0;

function selectSoundChanges() {
    wordArray = [];
    wordFinalDevoicingTrueOrFalse = "";
    //console.log(`Number of sound changes: ${potentialSoundChanges.length}`)

    //selects which sound changes will be randomly chosen
    if (randomSoundChangeOption) {
        chosenSoundChanges = [];
        while (chosenSoundChanges.length < Math.floor(Math.random() * potentialSoundChanges.length) + 6) {
            randomNumberForSoundChangeSelection = Math.floor(Math.random() * potentialSoundChanges.length);
            if (chosenSoundChanges.includes(potentialSoundChanges[randomNumberForSoundChangeSelection]) === false) {
                chosenSoundChanges.push(potentialSoundChanges[randomNumberForSoundChangeSelection])
            }
        };
    };

    //console.log(chosenSoundChanges)
    randomNumForWordInitialNasalClusters = Math.floor(Math.random() * 30);
    randomNumForNoFricativesAsLatterElementOfInitialClusters = Math.floor(Math.random() * 50);

    for (let i = 0; i < chosenSoundChanges.length; i++) {
        if (chosenSoundChanges[i] === wordFinalDevoicing) {
            let li = document.createElement("li");
            li.setAttribute("id", "wordFinalDevoicing-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Word Final Devoicing`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "wordFinalDevoicing-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Voiced consonants devoiced word finally: <div class="sound-change-example" id="wordFinalDevoicing"></div>`;
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        }
        if (chosenSoundChanges[i] === plosivesCantClusterTogetherWordInitially) {
            let li = document.createElement("li");
            li.setAttribute("id", "plosivesCantClusterTogetherWordInitially-li");
            li.style.fontWeight = "bold";
            li.innerHTML = `Word Initial Clusters Simplified`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "plosivesCantClusterTogetherWordInitially-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `A word initial plosive is lost if another plosive follows it: <div class="sound-change-example" id="plosivesCantClusterTogetherWordInitially"></div>`;
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        }
        if (chosenSoundChanges[i] === fricativesLostAfterWordInitialConsonants) {
            let li = document.createElement("li");
            li.setAttribute("id", "fricativesLostAfterWordInitialConsonants-li");
            li.style.fontWeight = "bold";
            li.innerHTML = `Fricatives Dropped in Word Initial Clusters`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "fricativesLostAfterWordInitialConsonants-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `A fricative is lost when it is the first consonant in a word initial cluster: <div class="sound-change-example" id="fricativesLostAfterWordInitialConsonants"></div>`;
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        }
        if (chosenSoundChanges[i] === lenitionofPlosivebeforeOtherPlosive1) {
            let li = document.createElement("li");
            li.setAttribute("id", "lenitionofPlosivebeforeOtherPlosive1-li");
            li.style.fontWeight = "bold";
            li.innerHTML = `Lenition in Clusters`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "lenitionofPlosivebeforeOtherPlosive1-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Plosives lenite when they occur before other plosives. Plosives lenite in the following way.`
            let lenitionUl = document.createElement("ul");
            lenitionUl.setAttribute("id", "lenition-before-list-1");
            let examples = document.createElement("span");
            examples.innerHTML = `<div class="sound-change-example" id="lenitionofPlosivebeforeOtherPlosive1"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
            nestUl.appendChild(lenitionUl);
            nestUl.appendChild(examples);
        };
        if (chosenSoundChanges[i] === lenitionofPlosivebeforeOtherPlosive2) {
            let li = document.createElement("li");
            li.setAttribute("id", "lenitionofPlosivebeforeOtherPlosive2-li");
            li.style.fontWeight = "bold";
            li.innerHTML = `Lenition in Clusters`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "lenitionofPlosivebeforeOtherPlosive2-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Plosives lenite when they occur before other plosives. Plosives lenite in the following way.`
            let lenitionUl = document.createElement("ul");
            lenitionUl.setAttribute("id", "lenition-before-list-2");
            let examples = document.createElement("span");
            examples.innerHTML = `<span id="lenitionofPlosivebeforeOtherPlosive2"></span>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
            nestUl.appendChild(lenitionUl);
            nestUl.appendChild(examples);
        };
        if (chosenSoundChanges[i] === wordFinalHighVowelsLower) {
            let li = document.createElement("li");
            li.setAttribute("id", "wordFinalHighVowelsLower-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Word Final High Vowels Lower`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "wordFinalHighVowelsLower-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `High vowels lower to become mid vowels when word final: <div class="sound-change-example" id="wordFinalHighVowelsLower"></div>`;
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === liquidsLostBeforeConsonants) {
            let li = document.createElement("li");
            li.setAttribute("id", "liquidsLostBeforeConsonants-li");
            li.style.fontWeight = "bold";
            li.innerHTML = `liquids Lost Before Consonants`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "liquidsLostBeforeConsonants-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `liquids are lost before consonants: <div class="sound-change-example" id="liquidsLostBeforeConsonants"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        }
        if (chosenSoundChanges[i] === insertIBetweenConsonantAndliquid) {
            let li = document.createElement("li");
            li.setAttribute("id", "insertIBetweenConsonantAndliquid-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Epenthesis of /i/ Between Consonants And liquids`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "insertIBetweenConsonantAndliquid-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `When a liquid occurs before a consonant, an epenthetic /i/ is inserted after the liquids: <span id="insertIBetweenConsonantAndliquid"></span>`;
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        }
        if (chosenSoundChanges[i] === insertUBetweenConsonantAndliquid) {
            let li = document.createElement("li");
            li.setAttribute("id", "insertUBetweenConsonantAndliquid-li");
            li.style.fontWeight = "bold";
            li.innerHTML = `Epenthesis of /u/ Between Consonants And liquids`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "insertUBetweenConsonantAndliquid-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `When a liquid occurs before a consonant, an epenthetic /u/ is inserted after the liquid: <span id="insertUBetweenConsonantAndliquid"></span>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === consonantliquidMetathesis) {
            let li = document.createElement("li");
            li.setAttribute("id", "consonantliquidMetathesis-li");
            li.style.fontWeight = "bold";
            li.innerHTML = `RC to CR Metathesis`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "consonantliquidMetathesis-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `A liquid which once preceded a consonant now follows it: <span id="consonantliquidMetathesis"></span>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        }
        if (chosenSoundChanges[i] === nonInitialNonHighVowelsBecomeA) {
            let li = document.createElement("li");
            li.setAttribute("id", "nonInitialNonHighVowelsBecomeA-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Non-initial Non-High Vowels Become /a/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "nonInitialNonHighVowelsBecomeA-ul")
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `All non-high vowels merge with /a/ when not in the first syllable of a word: <div class="sound-changhe-example" id="nonInitialNonHighVowelsBecomeA"></div/>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === nasalsCantAppearAfterConsonants) {
            let li = document.createElement("li");
            li.setAttribute("id", "nasalsCantAppearAfterConsonants-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Epenthesis of /i/ before Post-Consonantal Nasals`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "nasalsCantAppearAfterConsonants-ul")
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `An epenthetic /i/ is placed before any nasal which occurs after a consonant: <div class="sound-change-example" id="nasalsCantAppearAfterConsonants"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === fricativesDebuccaliseBeforeVowels) {
            let li = document.createElement("li");
            li.setAttribute("id", "fricativesDebuccaliseBeforeVowels-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Debuccalisation of Pre-Vocalic Fricatives`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "fricativesDebuccaliseBeforeVowels-ul")
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            let fricativeList = selectFricatives().join(", ");
            let fricativeOrFricatives = "";
            let becomeOrBecomes = ";"
            if (fricativeList.length > 1) {
                fricativeOrFricatives = "fricatives;"
                becomeOrBecomes = "become";
            } else {
                fricativeOrFricatives = "fricative";
                becomeOrBecomes = "becomes";
            }
            nestLi.innerHTML = `The short ${fricativeOrFricatives} /${fricativeList}/ ${becomeOrBecomes} /h/ when before a vowel: <div class="sound-change-example" id="fricativesDebuccaliseBeforeVowels"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === vowelLostBetweenTwoOfSameConsonant) {
            let li = document.createElement("li");
            li.setAttribute("id", "vowelLostBetweenTwoOfSameConsonant-li");
            li.style.fontWeight = "bold";
            li.innerHTML = `Loss of Vowels Between Two of the Same Consonant`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "vowelLostBetweenTwoOfSameConsonant-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `When a vowel is sandwiched by two of the same consonant, it is lost: <div class="sound-change-example" id="vowelLostBetweenTwoOfSameConsonant"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === voicedConsonantsLostIntervocalically) {
            let li = document.createElement("li");
            li.setAttribute("id", "voicedConsonantsLostIntervocalically-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Loss of Intervocalic Voiced Consonants`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "voicedConsonantsLostIntervocalically-ul")
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Short voiced plosives and fricatives are lost entirely when between two vowels: <div class="sound-change-example" id="voicedConsonantsLostIntervocalically"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === RVCToVRCMetathesis) {
            let li = document.createElement("li");
            li.setAttribute("id", "RVCToVRCMetathesis-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `RVC to VRC Metathesis`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "RVCToVRCMetathesis-ul")
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `When a word initial liquid comes before a vowel, and if a consonant follows this vowel, then the liquid and vowel will switch places: <div class="sound-change-example" id="RVCToVRCMetathesis"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === vowelLostBetweenConsonantAndliquid) {
            let li = document.createElement("li");
            li.setAttribute("id", "vowelLostBetweenConsonantAndliquid-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Syncope Between a Consonant and a liquid`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "vowelLostBetweenConsonantAndliquid-ul")
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Vowels are lost when after a consonant and before a liquid if said liquid precedes another vowel: <div class="sound-change-example" id="vowelLostBetweenConsonantAndliquid"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === intervocalicVoicing) {
            let li = document.createElement("li");
            li.setAttribute("id", "intervocalicVoicing-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Intervocalic Voicing`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "intervocalicVoicing-ul")
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Voiceless consonants become voiced between two vowels: <div class="sound-change-example" id="intervocalicVoicing"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === hLostAfterConsonants) {
            let li = document.createElement("li");
            li.setAttribute("id", "hLostAfterConsonants-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `h is Lost After Consonants`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "hLostAfterConsonants-ul")
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The glottal fricative /h/ is lost after consonants: <div class="sound-change-example" id="hLostAfterConsonants"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === nasalsLostBetweenVowelAndConsonant) {
            let li = document.createElement("li");
            li.setAttribute("id", "nasalsLostBetweenVowelAndConsonant-li");
            li.style.fontWeight = "bold";
            li.innerHTML = `Nasals Are Lost Between a Vowel and Consonant`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "nasalsLostBetweenVowelAndConsonant-ul")
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `When a nasal consonant occurs after a vowel and before a consonant, the nasal is lost and the vowel lengthens: <div class="sound-change-example" id="nasalsLostBetweenVowelAndConsonant"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === auBecomesOu) {
            let li = document.createElement("li");
            li.setAttribute("id", "auBecomesOu-li");
            li.style.fontWeight = "bold";
            li.innerHTML = `/a/ Raises Before /u/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "auBecomesOu-ul")
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `/au/ becomes /ou/: <div class="sound-change-example" id="auBecomesOu"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === aCaBecomesaCi) {
            let li = document.createElement("li");
            li.setAttribute("id", "aCaBecomesaCi-li");
            li.style.fontWeight = "bold";
            li.innerHTML = `Dissimilation of a...a to a...i`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "aCaBecomesaCi-ul")
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `/a/ becomes /i/ when the previous syllable also contains /a/: <div class="sound-change-example" id="aCaBecomesaCi"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === VʔVBecomesVV) {
            let li = document.createElement("li");
            li.setAttribute("id", "VʔVBecomesVV-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Loss of Intervocalic Glottal Stops`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "VʔVBecomesVV-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `When a glottal stop occurs between two vowels, both the glottal stop and the second vowel are lost and the first vowel lengthens: <div class="sound-change-example" id="VʔVBecomesVV"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === plosivesDebuccaliseInCoda) {
            let li = document.createElement("li");
            li.setAttribute("id", "plosivesDebuccaliseInCoda-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Debuccalisation of Plosives in the Coda`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "plosivesDebuccaliseInCoda-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            let labialisationComment = "";
            if (consonants.includes("ʷ")) {
                labialisationComment = `. If the plosive is labialised, the labialisation becomes the full vowel /u/ after the glottal stop`
            }
            let palatalisationComment = "";
            if (consonants.includes("ʲ")) {
                palatalisationComment = `. If the plosive is palatalised, the palatalisation becomes the full vowel /i/ after the glottal stop`
            }
            nestLi.innerHTML = `When a plosives occurs in the coda of a syllable, i.e before another consonant or word finally, then the plosive becomes a glottal stop ${labialisationComment} ${palatalisationComment}: <div class="sound-change-example" id="plosivesDebuccaliseInCoda"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === CVRBecomesCCVR) {
            let li = document.createElement("li");
            li.setAttribute("id", "CVRBecomesCCVR-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Metathesis and Gemination of VCRV sequences`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "CVRBecomesCCVR-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `If a liquid, which preces the vowel, follows a post-vocalic consonant, the liquid and vowel switch places and the consonant lengthens: <div class="sound-change-example" id="CVRBecomesCCVR"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === glottalStopJFortites) {
            let li = document.createElement("li");
            li.setAttribute("id", "glottalStopJFortites-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Fortition of Approximants Around Glottal Stops`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "glottalStopJFortites-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The clusters /ʔj/ and /ʔw/ merge to become /g/: <div class="sound-change-example" id="glottalStopJFortites"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === eciBecomesiCi) {
            let li = document.createElement("li");
            li.setAttribute("id", "eciBecomesiCi-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `eC{i,j} becomes iC{i,j}`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "eciBecomesiCi-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `When the vowel /e/ occurs before a consonant, which precedes either /i/ or /j/, it raises to become /i/: <div class="sound-change-example" id="eciBecomesiCi"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === iCbecomeseC) {
            let li = document.createElement("li");
            li.setAttribute("id", "iCbecomeseC-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `/i/ Lowers to /e/ before Post-Consonantal Non-High Vowels`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "iCbecomeseC-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `When the vowel /i/ occurs before a consonant, which precedes a non-high vowel, it lowers to become /e/: <div class="sound-change-example" id="iCbecomeseC"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === VJbecomesLongI) {
            let li = document.createElement("li");
            li.setAttribute("id", "VJbecomesLongI-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Vj Becomes Long /i/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "VJbecomesLongI-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The sequence of any vowel plus /j/ merges to become the long vowel /iː/: <div class="sound-change-example" id="VJbecomesLongI"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === uNBecomesoN) {
            let li = document.createElement("li");
            li.setAttribute("id", "uNBecomesoN-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `/u/ Lowers to /o/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "uNBecomesoN-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The vowel /u/ lowers to /o/ when before a nasal consonant which precedes a non-high vowel: <div class="sound-change-example" id="uNBecomesoN"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === gBecomesJ) {
            let li = document.createElement("li");
            li.setAttribute("id", "gBecomesJ-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Palatalisation of /g/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "gBecomesJ-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `/g/ becomes /j/ when after a front vowel: <div class="sound-change-example" id="gBecomesJ"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === VvBecomesVV) {
            let li = document.createElement("li");
            li.setAttribute("id", "VvBecomesVV-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `/Vu/ Sequences Collapse into Long Vowels`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "VvBecomesVV-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `when /u/ occurs after a vowel, it is lost and the previous vowel lengthens: <div class="sound-change-example" id="VvBecomesVV"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === eNBecomesiN) {
            let li = document.createElement("li");
            li.setAttribute("id", "eNBecomesiN-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `/e/ becomes /i/ Before Nasals`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "eNBecomesiN-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            let nasalList = selectNasals().join(", ");
            nestLi.innerHTML = `When the vowel /e/ occurs before one of the nasal consonants /${nasalList}/, it raises to  become /i/: <div class="sound-change-example" id="eNBecomesiN"></di>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === CJBecomesCC) {
            let li = document.createElement("li");
            li.setAttribute("id", "CJBecomesCC-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Consonants Lengthen Before /j/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "CJBecomesCC-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `When a consonant, following a vowel, occurs before /j/, the consonant lengthens and the /j/ drops: <div class="sound-change-example" id="CJBecomesCC"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === iUmlaut) {
            let li = document.createElement("li");
            li.setAttribute("id", "iUmlaut-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Umlaut`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "iUmlaut-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The following vowel shifts occur when the following syllable contains /i/ or /j/:`;
            let umlautUl = document.createElement("ul");
            umlautUl.setAttribute("id", "i-umlaut-list");
            let examples = document.createElement("span");
            examples.innerHTML = `<div class="sound-change-example" id="iUmlaut"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
            nestUl.appendChild(umlautUl);
            nestUl.appendChild(examples);
        };
        if (chosenSoundChanges[i] === vowelShiftInHeavySyllables) {
            let li = document.createElement("li");
            li.setAttribute("id", "vowelShiftInHeavySyllables-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Vowels Become Lax in Heavy Syllables`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "vowelShiftInHeavySyllables-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The following vowel shifts occur when a vowel occurs before two or more consonants, or before a single word final consonant:`;
            let vowelShiftInHeavySyllablesUl = document.createElement("ul");
            vowelShiftInHeavySyllablesUl.setAttribute("id", "vowelShiftInHeavySyllables-list");
            let examples = document.createElement("span");
            examples.innerHTML = `<div class="sound-change-example" id="vowelShiftInHeavySyllables"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
            nestUl.appendChild(vowelShiftInHeavySyllablesUl);
            nestUl.appendChild(examples);
        };
        if (chosenSoundChanges[i] === VCVBecomesVCWordFinally) {
            let li = document.createElement("li");
            li.setAttribute("id", "VCVBecomesVCWordFinally-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Loss of Word Final Vowels`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "VCVBecomesVCWordFinally-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Word final short vowels are lost when they occur after a single consonant which follows a vowel:`;
            let VCVBecomesVCWordFinallyUl = document.createElement("ul");
            VCVBecomesVCWordFinallyUl.setAttribute("id", "VCVBecomesVCWordFinally-list");
            let examples = document.createElement("span");
            examples.innerHTML = `<div class="sound-change-example" id="VCVBecomesVCWordFinally"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
            nestUl.appendChild(VCVBecomesVCWordFinallyUl);
            nestUl.appendChild(examples);
        };
        if (chosenSoundChanges[i] === longABecomesO) {
            let li = document.createElement("li");
            li.setAttribute("id", "longABecomesO-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Long A becomes Long O`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "longABecomesO-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The long vowel /aː/ becomes /oː/: <div class="sound-change-example" id="longABecomesO"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === palatalisationofPlosives) {
            let li = document.createElement("li");
            li.setAttribute("id", "palatalisationofPlosives-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Plosives Palatalise Before Front Vowels`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "palatalisationofPlosives-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            let ifUvular = "";
            if (consonants.includes("ʔ")) {
                ifUvular = `velar and uvular`
            } else {
                ifUvular = `velar`
            }
            let ifVoiced = "";
            if (chooseVoicing() === true) {
                ifVoiced = ` and voiced alveolar and ${ifUvular} plosives become /ʤ/`
            };
            let ifGlottal = "";
            if (consonants.includes("ʔ")) {
                ifGlottal = `. The glottal stop becomes /j/`
            };
            nestLi.innerHTML = `Voicless alveolar and ${ifUvular} plosives become /ʧ/ before front vowels${ifVoiced}${ifGlottal}: <div class="sound-change-example" id="palatalisationofPlosives"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === eOBecomeJW) {
            let li = document.createElement("li");
            li.setAttribute("id", "eOBecomeJW-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Pre-Vocalic Mid Vowels Becomes Approximants`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "eOBecomeJW-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            let mid_vowels = "";
            if (vowels.includes("e") && vowels.includes("o")) {
                mid_vowels = `The mid vowels /e/ and /o/ become /j/ and /w/ when before another vowel`
            } else if (vowels.includes("e") && vowels.includes("o") === false) {
                mid_vowels = `The mid vowels /e/ becomes /j/ when before another vowel`
            } else if (vowels.includes("e") === false && vowels.includes("o")) {
                mid_vowels = `The mid vowel /o/ becomes /w/ when before another vowel`
            }
            nestLi.innerHTML = `${mid_vowels}: <div class="sound-change-example" id="eOBecomeJW"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === VzbecomesVr) {
            let li = document.createElement("li");
            li.setAttribute("id", "VzbecomesVr-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Rhoticisation of /z/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "VzbecomesVr-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `/z/ becomes /r/ when after a vowel: <div class="sound-change-example" id="VzbecomesVr"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === intialVBecomesHV) {
            let li = document.createElement("li");
            li.setAttribute("id", "intialVBecomesHV-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Epenthesis of /ħ/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "intialVBecomesHV-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The pharyngeal fricative /ħ/ is inserted before all word initial vowels: <div class="sound-change-example" id="intialVBecomesHV"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === intialJBecomesL) {
            let li = document.createElement("li");
            li.setAttribute("id", "intialJBecomesL-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Word Initial /j/ becomes /l/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "intialJBecomesL-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The palatal approximant /j/ becomes /l/ word initially: <div class="sound-change-example" id="intialJBecomesL"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === tDBecomeL) {
            let li = document.createElement("li");
            li.setAttribute("id", "tDBecomeL-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Intervocalic Alveolar Plosives Become /l/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "tDBecomeL-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            let tDsoundChange = "";
            if (chooseVoicing() === true) {
                tDsoundChange = `The plosives /t/ and /d/ become /l/ when between two vowels`
            } else {
                tDsoundChange = `The plosive /t/ becomes /l/ when between two vowels`
            }
            nestLi.innerHTML = `${tDsoundChange}: <div class="sound-change-example" id="tDBecomeL"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === longVowelsBreakIntoVi) {
            let li = document.createElement("li");
            li.setAttribute("id", "longVowelsBreakIntoVi-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Long Vowels Break`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "longVowelsBreakIntoVi-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Long vowels break into short vowels followed by /i/. The long vowel /iː/ is not affected: <div class="sound-change-example" id="longVowelsBreakIntoVi"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);

        };
        if (chosenSoundChanges[i] === longVowelsBreakIntoU) {
            let li = document.createElement("li");
            li.setAttribute("id", "longVowelsBreakIntoU-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Long Vowels Break`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "longVowelsBreakIntoU-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Long vowels break into short vowels followed by /u/. The long vowel /uː/ is not affected: <div class="sound-change-example" id="longVowelsBreakIntoU"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);

        };
        if (chosenSoundChanges[i] === longVowelsBreakIntoIPlusRaising) {
            let li = document.createElement("li");
            li.setAttribute("id", "longVowelsBreakIntoIPlusRaising-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Long Vowels Break`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "longVowelsBreakIntoIPlusRaising-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Long vowels break into short vowels followed by /i/, the short vowel then heightens. The long vowel /iː/ is not affected, other high vowels break into /Vi/ but don't heighten any further: <div class="sound-change-example" id="longVowelsBreakIntoIPlusRaising"></div>`;
            let ul = document.createElement("ul");
            ul.setAttribute("id", "longVowelsBreakIntoIPlusRaisingExample-list");
            let examples = document.createElement("span");
            examples.innerHTML = `<div class="sound-change-example" id="longVowelsBreakIntoIPlusRaising"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
            nestUl.appendChild(ul);
            nestUl.appendChild(examples);
        };
        if (chosenSoundChanges[i] === longVowelsBreakIntoUPlusRaising) {
            let li = document.createElement("li");
            li.setAttribute("id", "longVowelsBreakIntoUPlusRaising-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Long Vowels Break`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "longVowelsBreakIntoUPlusRaising-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Long vowels break into short vowels followed by /u/, the short vowel then heightens. The long vowel /uː/ is not affected, other high vowels break into /Vu/ but don't heighten any further: <div class="sound-change-example" id="longVowelsBreakIntoUPlusRaising"></div>`;
            let ul = document.createElement("ul");
            ul.setAttribute("id", "longVowelsBreakIntoUPlusRaisingExample-list");
            let examples = document.createElement("span");
            examples.innerHTML = `<div class="sound-change-example" id="longVowelsBreakIntoUPlusRaising"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
            nestUl.appendChild(ul);
            nestUl.appendChild(examples);
        };
        if (chosenSoundChanges[i] === longVowelsBreakIntoVj) {
            let li = document.createElement("li");
            li.setAttribute("id", "longVowelsBreakIntoVj-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Long Vowels Break`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "longVowelsBreakIntoVj-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Long vowels break into short vowels preceded by /j/: <div class="sound-change-example" id="longVowelsBreakIntoVj"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === longVowelsBreakIntojVwV) {
            let li = document.createElement("li");
            li.setAttribute("id", "longVowelsBreakIntojVwV-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Long Vowels Break`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "longVowelsBreakIntojVwV-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Long front vowels break into /jV/ sequences, all other vowels break into /wV/ sequences: <div class="sound-change-example" id="longVowelsBreakIntojVwV"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);

        };
        if (chosenSoundChanges[i] === vowelsHeightenBeforeVelars) {
            let li = document.createElement("li");
            li.setAttribute("id", "vowelsHeightenBeforeVelars-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Vowels Raise Before Velars`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "vowelsHeightenBeforeVelars-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Non-high vowels raise, and high vowels lengthen, when they occur before velar consonants:`;
            let ul = document.createElement("ul");
            ul.setAttribute("id", "vowelsHeightenBeforeVelarsExample-list");
            let examples = document.createElement("span");
            examples.innerHTML = `<div class="sound-change-example" id="vowelsHeightenBeforeVelars"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
            nestUl.appendChild(ul);
            nestUl.appendChild(examples);
        };
        if (chosenSoundChanges[i] === palatalsBecomeVelar) {
            let li = document.createElement("li");
            li.setAttribute("id", "palatalsBecomeVelar-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Palatals Become Velars`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "palatalsBecomeVelar-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `<span id="palatalsBecomeVelar-list"></span>: <div class="sound-change-example" id="palatalsBecomeVelar"></div>`;
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === gwbecomesB) {
            let li = document.createElement("li");
            li.setAttribute("id", "gwbecomesB-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `/gʷ/ Becomes /b/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "gwbecomesB-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The labialised velar plosive /gʷ/ merges with /b/: <div class="sound-change-example" id="gwbecomesB"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === eRaBecomesARa) {
            let li = document.createElement("li");
            li.setAttribute("id", "eRaBecomesARa-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `/eRa/ Becomes /aRa/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "eRaBecomesARa-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `When the vowel /e/ comes before a liquid after which there is the vowel /a/, the vowel /e/ becomes /a/: <div class="sound-change-example" id="eRaBecomesARa"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === epentheticA) {
            let li = document.createElement("li");
            li.setAttribute("id", "epentheticA-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `/CRC/ Becomes /CaRC/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "epentheticA-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The vowel /a/ is inserted between a consonant and a liquid followed by a consonant: <div class="sound-change-example" id="epentheticA"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === pKWBecomesKwKw) {
            let li = document.createElement("li");
            li.setAttribute("id", "pKWBecomesKwKw-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `p...kʷ > kʷ...kʷ`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "pKWBecomesKwKw-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The labial plosive /p/ becomes the labialised velar plosive /kʷ/ when /kʷ/ occurs later in the word: <div class="sound-change-example" id="pKWBecomesKwKw"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === longEBecomesLongI) {
            let li = document.createElement("li");
            li.setAttribute("id", "longEBecomesLongI-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Long E Becomes Long I`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "longEBecomesLongI-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The long front mid-vowel /eː/ raises to become /iː/: <div class="sound-change-example" id="longEBecomesLongI"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === wordFinalLongOBecomesLongU) {
            let li = document.createElement("li");
            li.setAttribute("id", "wordFinalLongOBecomesLongU-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Word Final /oː/ Raises`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "wordFinalLongOBecomesLongU-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Word final /oː/ becomes /uː/: <div class="sound-change-example" id="wordFinalLongOBecomesLongU"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === longVowelsShortenBeforeRC) {
            let li = document.createElement("li");
            li.setAttribute("id", "longVowelsShortenBeforeRC-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Long Vowels Shorten Before RC`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "longVowelsShortenBeforeRC-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Long vowels shorten before a liquid followed by a consonant: <div class="sound-change-example" id="longVowelsShortenBeforeRC"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === CCBecomesXC) {
            let li = document.createElement("li");
            li.setAttribute("id", "CCBecomesXC-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `CC Becomes xC`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "CCBecomesXC-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Any consonant becomes the velar fricative /x/ when a plosive or /s/ follows: <div class="sound-change-example" id="CCBecomesXC"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === pBecomesBBeforeliquids) {
            let li = document.createElement("li");
            li.setAttribute("id", "pBecomesBBeforeliquids-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `/p/ Voices Before liquids`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "pBecomesBBeforeliquids-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The voiceless labial plosive /p/ voices to /b/ when a liquid follows: <div class="sound-change-example" id="pBecomesBBeforeliquids"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === pBecomesU) {
            let li = document.createElement("li");
            li.setAttribute("id", "pBecomesU-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `/p/ lenites to /u/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "pBecomesU-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `/p/ becomes /u/ when after a back vowel and before a nasal: <div class="sound-change-example" id="pBecomesU"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === pBecomesF) {
            let li = document.createElement("li");
            li.setAttribute("id", "pBecomesF-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `/p/ Lenites to /f/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "pBecomesF-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `All instances of /p/become /f/: <div class="sound-change-example" id="pBecomesF"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === longOBecomesA) {
            let li = document.createElement("li");
            li.setAttribute("id", "longOBecomesA-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Long O Becomes Long A`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "longOBecomesA-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The long vowel /oː/ lowers to /aː/: <div class="sound-change-example" id="longOBecomesA"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === eWBecomesOW) {
            let li = document.createElement("li");
            li.setAttribute("id", "eWBecomesOW-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `/ew/ Becomes /ow/`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "eWBecomesOW-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The front vowel /e/ becomes the back vowel /o/ before /w/: <div class="sound-change-example" id="eWBecomesOW"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === longUBecomesOU) {
            let li = document.createElement("li");
            li.setAttribute("id", "longUBecomesOU-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Long /uː/ Breaks`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "longUBecomesOU-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `The long vowel /uː/ becomes /ou/ when it occurs before a plosive or a fricative: <div class="sound-change-example" id="longUBecomesOU"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === velarsDelabialise) {
            let li = document.createElement("li");
            li.setAttribute("id", "velarsDelabialise-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Velars Delabialise`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "velarsDelabialise-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Labialised velar plosives lose their labialisation: <div class="sound-change-example" id="velarsDelabialise"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        };
        if (chosenSoundChanges[i] === lossOfAspiration) {
            let li = document.createElement("li");
            li.setAttribute("id", "lossOfAspiration-li")
            li.style.fontWeight = "bold";
            li.innerHTML = `Aspiration is Lost`;
            let nestUl = document.createElement("ul");
            nestUl.setAttribute("id", "lossOfAspiration-ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `All aspirated consonants lose their aspiration: <div class="sound-change-example" id="lossOfAspiration"></div>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        } else {
            chosenSoundChanges[i]("text");
        }
    };
};

function corrections(wordArray) {
    /*CORRECTIVE CHANGES - not genuine sound changes, just meant to tidy up the roots in the mother language. These will not be described at all in the grammar*/

    //the generated words often form doublets across syllable boundries e.g 'ga-ag' > 'gaag'. These can be confused for long vowels or long consonants which is especially unwanted if the language lacks length altogether. So these accidental doublets are removed first.
    for (let i = 0; i < wordArray.length; i++) {
        while (wordArray[i] === wordArray[i + 1]) {
            wordArray.splice(i, 1)
        }
    }
    //since long vowels in the IPA are marked like 'iː', with ː being an extra character, this loop deletes the following long vowel if it is the same
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i + 1] === "ː" && wordArray[i + 2] === wordArray[i] && wordArray[i + 3] === "ː") {
            wordArray.splice(i + 2, 1)
            wordArray.splice(i + 2, 1)
        }
    }
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === wordArray[i + 1] && wordArray[i + 2] === "ː") {
            wordArray.splice(i, 1);
        }
    }
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "ː") {
            wordArray[i] = wordArray[i - 1]
        }
    }

    //prevent preaspirated consonants occuring word initially
    if (wordArray[0] === "ʰ") {
        wordArray.splice(0, 1);
    }
    //also remove normal /h/ word initially before plosives
    if (wordArray[0] === "h" && plosives.includes(wordArray[1])) {
        wordArray.splice(0, 1);
    }
    //prevents a single sound clustering with a long sound of the same quality
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "ː" && wordArray[i - 1] === wordArray[i + 1]) {
            wordArray.splice(i + 1, 1);
        }
    }
    //prevents homoorganic clusters with different voicing from clustering
    for (let i = 0; i < wordArray.length; i++) {
        if (unvoiced.includes(wordArray[i]) && voiced.includes(wordArray[i + 1])) {
            let unvoicedIndex = unvoiced.indexOf(wordArray[i])
            if (wordArray[i + 1] === voiced[unvoicedIndex]) {
                wordArray.splice(i, 1);
            }
        } else {
            for (let i = 0; i < wordArray.length; i++) {
                if (unvoiced.includes(wordArray[i]) && voiced.includes(wordArray[i + 1])) {
                    let unvoicedIndex = unvoiced.indexOf(wordArray[i])
                    if (wordArray[i + 1] === voiced[unvoicedIndex]) {
                        wordArray.splice(i + 1, 1);
                    }
                }
            }
        }
        if (voiced.includes(wordArray[i]) && unvoiced.includes(wordArray[i + 1])) {
            let voicedIndex = voiced.indexOf(wordArray[i])
            if (wordArray[i + 1] === voiced[voicedIndex]) {
                wordArray.splice(i, 1);
            }
        } else {
            for (let i = 0; i < wordArray.length; i++) {
                if (voiced.includes(wordArray[i]) && unvoiced.includes(wordArray[i + 1])) {
                    let voicedIndex = voiced.indexOf(wordArray[i])
                    if (wordArray[i + 1] === unvoiced[voicedIndex]) {
                        wordArray.splice(i + 1, 1);
                    }
                }
            }
        }
    }
    //turns j and w to i and u between consonants
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "j" && consonants.includes(wordArray[i - 1]) && consonants.includes(wordArray[i + 1])) {
            wordArray[i] = "i";
        };
        if (wordArray[wordArray.length - 1] === "j") {
            wordArray[i] = "i";
        };
        if (wordArray[i] === "w" && consonants.includes(wordArray[i - 1]) && consonants.includes(wordArray[i + 1])) {
            wordArray[i] = "u";
        };
        if (wordArray[wordArray.length - 1] === "w") {
            wordArray[i] = "u";
        };
        if (wordArray[0] === "j" && consonants.includes(wordArray[1])) {
            wordArray[i] = "i";
        };
        if (wordArray[0] === "w" && consonants.includes(wordArray[1])) {
            wordArray[i] = "u";
        };

    }

    /*^^CORRECTIVE CHANGES^^^****/

    return wordArray;
};

function correctionsForStrings(word) {
    let wordArray = Array.from(word)
    /*CORRECTIVE CHANGES - not genuine sound changes, just meant to tidy up the roots in the mother language. These will not be described at all in the grammar*/

    //the generated words often form doublets across syllable boundries e.g 'ga-ag' > 'gaag'. These can be confused for long vowels or long consonants which is especially unwanted if the language lacks length altogether. So these accidental doublets are removed first.
    for (let i = 0; i < wordArray.length; i++) {
        while (wordArray[i] === wordArray[i + 1]) {
            wordArray.splice(i, 1)
        }
    }

    //since long vowels in the IPA are marked like 'iː', with ː being an extra character, this loop deletes the following long vowel if it is the same
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i + 1] === "ː" && wordArray[i + 2] === wordArray[i] && wordArray[i + 3] === "ː") {
            wordArray.splice(i + 2, 1)
            wordArray.splice(i + 2, 1)
        }
    }
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "ː") {
            wordArray[i] = wordArray[i - 1]
        }
    }

    //prevent preaspirated consonants occuring word initially
    if (wordArray[0] === "ʰ") {
        wordArray.splice(0, 1);
    }
    //also remove normal /h/ word initially before plosives
    if (wordArray[0] === "h" && plosives.includes(wordArray[1])) {
        wordArray.splice(0, 1);
    }
    //prevents a single sound clustering with a long sound of the same quality
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "ː" && wordArray[i - 1] === wordArray[i + 1]) {
            wordArray.splice(i + 1, 1);
        }
    }
    //prevents homoorganic clusters with different voicing from clustering
    for (let i = 0; i < wordArray.length; i++) {
        if (unvoiced.includes(wordArray[i]) && voiced.includes(wordArray[i + 1])) {
            let unvoicedIndex = unvoiced.indexOf(wordArray[i])
            if (wordArray[i + 1] === voiced[unvoicedIndex]) {
                wordArray.splice(i, 1);
            }
        } else {
            for (let i = 0; i < wordArray.length; i++) {
                if (unvoiced.includes(wordArray[i]) && voiced.includes(wordArray[i + 1])) {
                    let unvoicedIndex = unvoiced.indexOf(wordArray[i])
                    if (wordArray[i + 1] === voiced[unvoicedIndex]) {
                        wordArray.splice(i + 1, 1);
                    }
                }
            }
        }
        if (voiced.includes(wordArray[i]) && unvoiced.includes(wordArray[i + 1])) {
            let voicedIndex = voiced.indexOf(wordArray[i])
            if (wordArray[i + 1] === voiced[voicedIndex]) {
                wordArray.splice(i, 1);
            }
        } else {
            for (let i = 0; i < wordArray.length; i++) {
                if (voiced.includes(wordArray[i]) && unvoiced.includes(wordArray[i + 1])) {
                    let voicedIndex = voiced.indexOf(wordArray[i])
                    if (wordArray[i + 1] === unvoiced[voicedIndex]) {
                        wordArray.splice(i + 1, 1);
                    }
                }
            }
        }
    }
    //turns j and w to i and u between consonants
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "j" && consonants.includes(wordArray[i - 1]) && consonants.includes(wordArray[i + 1])) {
            wordArray[i] = "i";
        };
        if (wordArray[i] === "w" && consonants.includes(wordArray[i - 1]) && consonants.includes(wordArray[i + 1])) {
            wordArray[i] = "u";
        };
    };
    if (wordArray[0] === "j" && consonants.includes(wordArray[1])) {
        wordArray[0] = "i";
    };
    if (wordArray[0] === "w" && consonants.includes(wordArray[1])) {
        wordArray[0] = "u";
    };
    if (wordArray[wordArray.length - 1] === "w") {
        wordArray[wordArray.length - 1] = "u";
    };
    if (wordArray[wordArray.length - 1] === "j") {
        wordArray[wordArray.length - 1] = "i";
    };


    for (let i = 0; i < wordArray.length; i++) {
        while (wordArray[i] === "A" || wordArray[i] === "X") {
            wordArray.splice(i, 1);
        };
    }

    /*^^CORRECTIVE CHANGES^^^****/

    let joined = wordArray.join("");
    return joined;
};

function soundChange(word) {
    wordArray = Array.from(word);
    corrections(wordArray)

    //applies the chosen sound changes to the word
    for (let i = 0; i < chosenSoundChanges.length; i++) {
        chosenSoundChanges[i](wordArray)
    };

    //to prevent word final sound changes applying to prefixes, when listed in isolation, an "A" is inserted at the end, this for loop serves to remove that "A" after those sound changes have been applied
    for (let i = 0; i < wordArray.length; i++) {
        while (wordArray[i] === "A" || wordArray[i] === "X") {
            wordArray.splice(i, 1);
        };
    }

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === wordArray[i + 1] && wordArray[i] === wordArray[i + 2]) {
            wordArray.splice(i, 1);
        }
    }
    let final = wordArray.join("");
    return final;
}

/****************USER GENERATED SOUND CHANGES**************************** */

//this function generates sound changes submitted by the user


//each click sends one number higher to array
let countClicks = [];
let clickNum = 1;
document.getElementById("submit-sound-change").addEventListener("click", () => {
    const startSound = document.getElementById("start-sound").value;
    const endSound = document.getElementById("end-sound").value;
    const environment = document.getElementById("environment").value;
    const between1 = document.getElementById("between1").value;
    const between2 = document.getElementById("between2").value;
    const elseCondition = document.getElementById("else-environment").value;

    let clickObject = {
        clickNum: clickNum,
        startSound: startSound,
        endSound: endSound,
        environment: environment,
        between1: between1,
        between2: between2,
        elseCondition: elseCondition
    };

    countClicks.push(clickObject);
    clickNum++;
});

function generateSoundChange() {

    for(let j = 0; j < countClicks.length; j++) {
        let key = countClicks[j].environment + countClicks[j].clickNum;
        let startSound = countClicks[j].startSound;
        let endSound = countClicks[j].endSound;
        let environment = countClicks[j].environment;
        let between1 = countClicks[j].between1;
        let between2 = countClicks[j].between2;
        let elseCondition = countClicks[j].elseCondition

        if (environment === "unconditional") {
            //dynamic key name allows for any number of changes with the same environment to be created without creating a new object item for each one
            let unconditionalKey = "unconditional" + countClicks[j].clickNum;

            let unconditional = {
                [unconditionalKey]: function (arg) {
                    if(arg === wordArray) {
                        //when wordArray means that the functioned is being used to pass words through to be changes
                        for (let i = 0; i < wordArray.length; i++) {
                            if (wordArray[i] === startSound) {
                                wordArray[i] = endSound;
                            };
                        };
                        return wordArray;
                    } else if (arg === "text") {
                        //produces text which explains the sound change
                        //when "text", means that the function is being used to display this explanatory text once in the document

                        //checks that the parent <div> doesn't already had a child with the same id, because the same li kept appearing twice
                        if(document.getElementById("sound-change-explanation").querySelector(`#${key}-li`) === null) {
                            let li = document.createElement("li");
                            li.setAttribute("id", `${key}-li`)
                            li.style.fontWeight = "bold";
                            li.style.display = "none";
                            li.innerHTML = `/${startSound}/ becomes /${endSound}/`;
                            let nestUl = document.createElement("ul");
                            nestUl.setAttribute("id", `${key}-ul`);
                            let nestLi = document.createElement("li");
                            nestUl.style.display = "none";
                            nestLi.style.listStyleType = "none";
                            nestLi.innerHTML = `All instances of /${startSound}/ become /${endSound}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            document.getElementById("sound-change-explanation").appendChild(li);
                            document.getElementById("sound-change-explanation").appendChild(nestUl);
                            nestUl.appendChild(nestLi);
                        }
                        
                    }
                },
            };
            unconditional[`unconditional${countClicks[j].clickNum}`](wordArray);
            potentialSoundChanges.push(unconditional[`unconditional${countClicks[j].clickNum}`])
        };

        if (environment === "between") {
            //dynamic key name allows for any number of changes with the same environment to be created without creating a new object item for each one
            let betweenKey = "between" + countClicks[j].clickNum;

            let between = {
                [betweenKey]: function (arg) {
                    if(arg === wordArray) {
                        //if startSound is empty, it means that epenthesis is the desired changw
                        if(startSound === "") {
                            for (let i = 0; i < wordArray.length; i++) {
                                if (wordArray[i] === between1 && wordArray[i+1] === between2) {
                                    wordArray.splice(i+1, 0, endSound);
                                };
                            };
                        } else {
                            for (let i = 0; i < wordArray.length; i++) {
                                if (wordArray[i] === startSound && wordArray[i-1] === between1 && wordArray[i+1] === between2) {
                                    wordArray[i] = endSound;
                                };
                            };
                        }
                        return wordArray;
                    } else if (arg === "text") {
                        //produces text which explains the sound change
                        //when "text", means that the function is being used to display this explanatory text once in the document

                        //checks that the parent <div> doesn't already had a child with the same id, because the same li kept appearing twice
                        if(document.getElementById("sound-change-explanation").querySelector(`#${key}-li`) === null) {
                            let li = document.createElement("li");
                            li.setAttribute("id", `${key}-li`)
                            li.style.fontWeight = "bold";
                            li.style.display = "none";

                            //if nothing was entered for endSound, it means that the sound was lost. If nothing was entered for startSound, it means epenthesis
                            if(startSound === "") {
                                li.innerHTML = `/${endSound}/ is inserted between /${between1}/ and /${between2}/`;
                            } else {
                                 if(endSound === "") {
                                    li.innerHTML = `/${startSound}/ is lost between /${between1}/ and /${between2}/`;
                                } else {
                                    li.innerHTML = `/${startSound}/ becomes /${endSound}/ between /${between1}/ and /${between2}/`;
                                }
                            };
                            let nestUl = document.createElement("ul");
                            nestUl.setAttribute("id", `${key}-ul`);
                            nestUl.style.display = "none";
                            let nestLi = document.createElement("li");
                            nestLi.style.listStyleType = "none";
                            if(endSound === "") {
                                nestLi.innerHTML = `/${startSound}/ is lost between /${between1}/ and /${between2}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            } else if (startSound === "") {
                                nestLi.innerHTML = `/${endSound}/ is inserted between /${between1}/ and /${between2}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            } else {
                                nestLi.innerHTML = `/${startSound}/ becomes /${endSound}/ when between /${between1}/ and /${between2}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            }
                            document.getElementById("sound-change-explanation").appendChild(li);
                            document.getElementById("sound-change-explanation").appendChild(nestUl);
                            nestUl.appendChild(nestLi);
                        };
                    };
                },
            };
            between[`between${countClicks[j].clickNum}`](wordArray);
            potentialSoundChanges.push(between[`between${countClicks[j].clickNum}`])
        };

        if (environment === "before") {
            //dynamic key name allows for any number of changes with the same environment to be created without creating a new object item for each one
            let beforeKey = "before" + countClicks[j].clickNum;

            let before = {
                [beforeKey]: function (arg) {
                    if(arg === wordArray) {
                        //if startSound is empty, it means that epenthesis is the desired changw
                        for (let i = 0; i < wordArray.length; i++) {
                            if (wordArray[i] === startSound && wordArray[i+1] === elseCondition) {
                                wordArray[i] = endSound;
                            };
                        };
                        return wordArray;
                    } else if (arg === "text") {
                        //produces text which explains the sound change
                        //when "text", means that the function is being used to display this explanatory text once in the document

                        //checks that the parent <div> doesn't already had a child with the same id, because the same li kept appearing twice
                        if(document.getElementById("sound-change-explanation").querySelector(`#${key}-li`) === null) {
                            let li = document.createElement("li");
                            li.setAttribute("id", `${key}-li`)
                            li.style.fontWeight = "bold";
                            li.style.display = "none";

                            if(endSound === "") {
                                li.innerHTML = `/${startSound}/ is lost before /${elseCondition}/`;
                            } else {
                                li.innerHTML = `/${startSound}/ becomes /${endSound}/ before /${elseCondition}/`;
                            }
                            let nestUl = document.createElement("ul");
                            nestUl.setAttribute("id", `${key}-ul`);
                            let nestLi = document.createElement("li");
                            nestLi.style.listStyleType = "none";
                            nestUl.style.display = "none";
                            if(endSound === "") {
                                nestLi.innerHTML = `/${startSound}/ is lost before /${elseCondition}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            } else {
                                nestLi.innerHTML = `/${startSound}/ becomes /${endSound}/ when before /${elseCondition}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            }
                            document.getElementById("sound-change-explanation").appendChild(li);
                            document.getElementById("sound-change-explanation").appendChild(nestUl);
                            nestUl.appendChild(nestLi);
                        };
                    };
                },
            };
            before[`before${countClicks[j].clickNum}`](wordArray);
            potentialSoundChanges.push(before[`before${countClicks[j].clickNum}`])
        };

        if (environment === "after") {
            //dynamic key name allows for any number of changes with the same environment to be created without creating a new object item for each one
            let afterKey = "after" + countClicks[j].clickNum;

            let after = {
                [afterKey]: function (arg) {
                    if(arg === wordArray) {
                        //if startSound is empty, it means that epenthesis is the desired changw
                        for (let i = 0; i < wordArray.length; i++) {
                            if (wordArray[i] === startSound && wordArray[i-1] === elseCondition) {
                                wordArray[i] = endSound;
                            };
                        };
                        return wordArray;
                    } else if (arg === "text") {
                        //produces text which explains the sound change
                        //when "text", means that the function is being used to display this explanatory text once in the document

                        //checks that the parent <div> doesn't already had a child with the same id, because the same li kept appearing twice
                        if(document.getElementById("sound-change-explanation").querySelector(`#${key}-li`) === null) {
                            let li = document.createElement("li");
                            li.setAttribute("id", `${key}-li`)
                            li.style.fontWeight = "bold";
                            li.style.display = "none";

                            if(endSound === "") {
                                li.innerHTML = `/${startSound}/ is lost after /${elseCondition}/`;
                            } else {
                                li.innerHTML = `/${startSound}/ becomes /${endSound}/ after /${elseCondition}/`;
                            }
                            let nestUl = document.createElement("ul");
                            nestUl.setAttribute("id", `${key}-ul`);
                            nestUl.style.display = "none";
                            let nestLi = document.createElement("li");
                            nestLi.style.listStyleType = "none";
                            if(endSound === "") {
                                nestLi.innerHTML = `/${startSound}/ is lost after /${elseCondition}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            } else {
                                nestLi.innerHTML = `/${startSound}/ becomes /${endSound}/ when after /${elseCondition}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            }
                            document.getElementById("sound-change-explanation").appendChild(li);
                            document.getElementById("sound-change-explanation").appendChild(nestUl);
                            nestUl.appendChild(nestLi);
                        };
                    };
                },
            };
            after[`after${countClicks[j].clickNum}`](wordArray);
            potentialSoundChanges.push(after[`after${countClicks[j].clickNum}`])
        };

        if (environment === "word-initially") {
            //dynamic key name allows for any number of changes with the same environment to be created without creating a new object item for each one
            let wordInitialKey = "wordInitial" + countClicks[j].clickNum;

            let wordInitial = {
                [wordInitialKey]: function (arg) {
                    if(arg === wordArray) {
                        //if startSound is empty, it means that epenthesis is the desired change
                        if(startSound === "") {
                            wordArray.splice(0, 0, endSound);
                        } else if (wordArray[0] === startSound) {
                               wordArray[0] = endSound;
                        } else if (wordArray[0] === "X" && wordArray[1] === startSound) {
                               wordArray[1] = endSound;
                        }
                        return wordArray;
                    } else if (arg === "text") {
                        //produces text which explains the sound change
                        //when "text", means that the function is being used to display this explanatory text once in the document

                        //checks that the parent <div> doesn't already had a child with the same id, because the same li kept appearing twice
                        if(document.getElementById("sound-change-explanation").querySelector(`#${key}-li`) === null) {
                            let li = document.createElement("li");
                            li.setAttribute("id", `${key}-li`)
                            li.style.fontWeight = "bold";
                            li.style.display = "none";

                            if(endSound === "") {
                                li.innerHTML = `/${startSound}/ is lost word initially`;
                            }  else if(startSound === "") {
                                li.innerHTML = `/${startSound}/ is inserted word initially`;
                            } else {
                                li.innerHTML = `/${startSound}/ becomes /${endSound}/ word initially`;
                            }
                            let nestUl = document.createElement("ul");
                            nestUl.setAttribute("id", `${key}-ul`);
                            nestUl.style.display = "none";
                            let nestLi = document.createElement("li");
                            nestLi.style.listStyleType = "none";
                            if(endSound === "") {
                                nestLi.innerHTML = `/${startSound}/ is lost when at the beginning of a word: <div id="${key}-examples" class="sound-change-example"></div>`
                            }  else if(startSound === "") {
                                nestLi.innerHTML = `/${startSound}/ is inserted at the beginning of words: <div id="${key}-examples" class="sound-change-example"></div>`
                            } else {
                                nestLi.innerHTML = `/${startSound}/ becomes /${endSound}/ when at the beginning of a word: <div id="${key}-examples" class="sound-change-example"></div>`
                            }
                            document.getElementById("sound-change-explanation").appendChild(li);
                            document.getElementById("sound-change-explanation").appendChild(nestUl);
                            nestUl.appendChild(nestLi);
                        };
                    };
                },
            };
            wordInitial[`wordInitial${countClicks[j].clickNum}`](wordArray);
            potentialSoundChanges.push(wordInitial[`wordInitial${countClicks[j].clickNum}`])
        };

        if (environment === "word-initially-before") {
            //dynamic key name allows for any number of changes with the same environment to be created without creating a new object item for each one
            let wordInitialBeforeKey = "wordInitialBefore" + countClicks[j].clickNum;
            
            let wordInitialBefore = {
                [wordInitialBeforeKey]: function (arg) {
                    if(arg === wordArray) {
                        //if startSound is empty, it means that epenthesis is the desired change
                        if(startSound === "" && wordArray[0] === elseCondition) {
                            wordArray.splice(0, 0, endSound);
                        } else if(startSound === "" && wordArray[0] === "X" && wordArray[1] === elseCondition) {
                            wordArray.splice(1, 0, endSound);
                        } else if (wordArray[0] === startSound && wordArray[1] === elseCondition) {
                               wordArray[0] = endSound;
                        } else if (wordArray[0] === "X" && wordArray[1] === startSound  && wordArray[2] === elseCondition) {
                               wordArray[1] = endSound;
                        }
                        return wordArray;
                    } else if (arg === "text") {
                        //produces text which explains the sound change
                        //when "text", means that the function is being used to display this explanatory text once in the document

                        //checks that the parent <div> doesn't already had a child with the same id, because the same li kept appearing twice
                        if(document.getElementById("sound-change-explanation").querySelector(`#${key}-li`) === null) {
                            let li = document.createElement("li");
                            li.setAttribute("id", `${key}-li`)
                            li.style.fontWeight = "bold";
                            li.style.display = "none";

                            if(endSound === "") {
                                li.innerHTML = `/${startSound}/ is lost word initially before /${elseCondition}/`;
                            } else if(startSound === "") {
                                li.innerHTML = `/${endSound}/ is inserted word initially before /${elseCondition}/`;
                            } else {
                                li.innerHTML = `/${startSound}/ becomes /${endSound}/ word initially before /${elseCondition}/`;
                            }
                            let nestUl = document.createElement("ul");
                            nestUl.setAttribute("id", `${key}-ul`);
                            nestUl.style.display = "none";
                            let nestLi = document.createElement("li");
                            nestLi.style.listStyleType = "none";
                            if(endSound === "") {
                                nestLi.innerHTML = `/${startSound}/ is lost when at the beginning of a word and before /${elseCondition}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            } else if(startSound === "") {
                                nestLi.innerHTML = `/${endSound}/ is inserted before word initial /${elseCondition}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            } else {
                                nestLi.innerHTML = `/${startSound}/ becomes /${endSound}/ when at the beginning of a word and before /${elseCondition}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            }
                            document.getElementById("sound-change-explanation").appendChild(li);
                            document.getElementById("sound-change-explanation").appendChild(nestUl);
                            nestUl.appendChild(nestLi);
                        };
                    };
                },
            };
            wordInitialBefore[`wordInitialBefore${countClicks[j].clickNum}`](wordArray);
            potentialSoundChanges.push(wordInitialBefore[`wordInitialBefore${countClicks[j].clickNum}`])
        };

        if (environment === "word-finally") {
            //dynamic key name allows for any number of changes with the same environment to be created without creating a new object item for each one
            let wordFinalKey = "wordFinal" + countClicks[j].clickNum;

            let wordFinal = {
                [wordFinalKey]: function (arg) {
                    if(arg === wordArray) {
                        if (wordArray[wordArray.length-1] === startSound) {
                               wordArray[wordArray.length-1] = endSound;
                        } else if (wordArray[wordArray.length-1] === "X" && wordArray[wordArray.length-2] === startSound) {
                            wordArray[wordArray.length-2] = endSound;
                        }
                        return wordArray;
                    } else if (arg === "text") {
                        //produces text which explains the sound change
                        //when "text", means that the function is being used to display this explanatory text once in the document

                        //checks that the parent <div> doesn't already had a child with the same id, because the same li kept appearing twice
                        if(document.getElementById("sound-change-explanation").querySelector(`#${key}-li`) === null) {
                            let li = document.createElement("li");
                            li.setAttribute("id", `${key}-li`)
                            li.style.fontWeight = "bold";
                            li.style.display = "none";

                            if(endSound === "") {
                                li.innerHTML = `/${startSound}/ is lost word finally`;
                            }  else {
                                li.innerHTML = `/${startSound}/ becomes /${endSound}/ word finally`;
                            }
                            let nestUl = document.createElement("ul");
                            nestUl.setAttribute("id", `${key}-ul`);
                            nestUl.style.display = "none";
                            let nestLi = document.createElement("li");
                            nestLi.style.listStyleType = "none";
                            if(endSound === "") {
                                nestLi.innerHTML = `/${startSound}/ is lost when at the end of a word: <div id="${key}-examples" class="sound-change-example"></div>`
                            }  else if(startSound === "") {
                                nestLi.innerHTML = `/${startSound}/ is inserted at the end of words: <div id="${key}-examples" class="sound-change-example"></div>`
                            } else {
                                nestLi.innerHTML = `/${startSound}/ becomes /${endSound}/ when at the end of a word: <div id="${key}-examples" class="sound-change-example"></div>`
                            }
                            document.getElementById("sound-change-explanation").appendChild(li);
                            document.getElementById("sound-change-explanation").appendChild(nestUl);
                            nestUl.appendChild(nestLi);
                        };
                    };
                },
            };
            wordFinal[`wordFinal${countClicks[j].clickNum}`](wordArray);
            potentialSoundChanges.push(wordFinal[`wordFinal${countClicks[j].clickNum}`])
        };

        if (environment === "word-finally-after") {
            //dynamic key name allows for any number of changes with the same environment to be created without creating a new object item for each one
            let wordFinalAfterKey = "wordFinalAfter" + countClicks[j].clickNum;
            
            let wordFinalAfter = {
                [wordFinalAfterKey]: function (arg) {
                    if(arg === wordArray) {
                        //if startSound is empty, it means that epenthesis is the desired change
                        if(startSound === "" && wordArray[wordArray.length-1] === elseCondition) {
                            wordArray.splice(wordArray.length-1, 0, endSound);
                        } else if(startSound === "" && wordArray[wordArray.length-1] === "A" && wordArray[wordArray.length-2] === elseCondition) {
                            wordArray.splice(wordArray.length-1, 0, endSound);
                        } else if (wordArray[wordArray.length-1] === startSound && wordArray[wordArray.length-2] === elseCondition) {
                               wordArray[wordArray.length-1] = endSound;
                        } else if (wordArray[wordArray.length-1] === "A" && wordArray[wordArray.length-2] === startSound  && wordArray[wordArray.length-3] === elseCondition) {
                               wordArray[wordArray.length-2] = endSound;
                        }
                        return wordArray;
                    } else if (arg === "text") {
                        //produces text which explains the sound change
                        //when "text", means that the function is being used to display this explanatory text once in the document

                        //checks that the parent <div> doesn't already had a child with the same id, because the same li kept appearing twice
                        if(document.getElementById("sound-change-explanation").querySelector(`#${key}-li`) === null) {
                            let li = document.createElement("li");
                            li.setAttribute("id", `${key}-li`)
                            li.style.fontWeight = "bold";
                            li.style.display = "none";

                            if(endSound === "") {
                                li.innerHTML = `/${startSound}/ is lost word finally after /${elseCondition}/`;
                            } else if(startSound === "") {
                                li.innerHTML = `/${endSound}/ is inserted word finally after /${elseCondition}/`;
                            } else {
                                li.innerHTML = `/${startSound}/ becomes /${endSound}/ word finally after /${elseCondition}/`;
                            }
                            let nestUl = document.createElement("ul");
                            nestUl.setAttribute("id", `${key}-ul`);
                            nestUl.style.display = "none";
                            let nestLi = document.createElement("li");
                            nestLi.style.listStyleType = "none";
                            if(endSound === "") {
                                nestLi.innerHTML = `/${startSound}/ is lost when at the end of a word and after /${elseCondition}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            } else if(startSound === "") {
                                nestLi.innerHTML = `/${endSound}/ is inserted after word final /${elseCondition}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            } else {
                                nestLi.innerHTML = `/${startSound}/ becomes /${endSound}/ when at the end of a word and after /${elseCondition}/: <div id="${key}-examples" class="sound-change-example"></div>`
                            }
                            document.getElementById("sound-change-explanation").appendChild(li);
                            document.getElementById("sound-change-explanation").appendChild(nestUl);
                            nestUl.appendChild(nestLi);
                        };
                    };
                },
            };
            wordFinalAfter[`wordFinalAfter${countClicks[j].clickNum}`](wordArray);
            potentialSoundChanges.push(wordFinalAfter[`wordFinalAfter${countClicks[j].clickNum}`])
        };
    };
};


let submitSoundChangeButton = document.getElementById("submit-sound-change");
submitSoundChangeButton.addEventListener("click", generateSoundChange);

/*^^^^^^^^^^^^^^^^^^^^^USER GENERATED SOUND CHANGES^^^^^^^^^^^^^^^^^^^^^^* */


function wordFinalDevoicing(wordArray) {
    if (voiced.includes(wordArray[wordArray.length - 1])) {
        let voicedIndex = voiced.indexOf(wordArray[wordArray.length - 1]);
        wordArray[wordArray.length - 1] = unvoiced[voicedIndex];
        if (voiced.includes(wordArray[wordArray.length - 2])) {
            let voicedIndex = voiced.indexOf(wordArray[wordArray.length - 2]);
            wordArray[wordArray.length - 2] = unvoiced[voicedIndex];
        };
        timeswordFinalDevoicingApplied++;
        if (timeswordFinalDevoicingApplied > 0) {
            document.getElementById("wordFinalDevoicing-li").style.display = "block";
            document.getElementById("wordFinalDevoicing-ul").style.display = "block";
        };
    };
    return wordArray;
}

function plosivesCantClusterTogetherWordInitially(wordArray) {
    if (randomNumForWordInitialPlosiveClusters !== 5) {
        if (plosives.includes(wordArray[0]) && plosives.includes(wordArray[1])) {
            wordArray.splice(0, 1);
            timesplosivesCantClusterTogetherWordInitiallyApplied++
            if (timesplosivesCantClusterTogetherWordInitiallyApplied > 0) {
                document.getElementById("plosivesCantClusterTogetherWordInitially-li").style.display = "block";
                document.getElementById("plosivesCantClusterTogetherWordInitially-ul").style.display = "block";
            }
        }
    }
    return wordArray;
};

function fricativesLostAfterWordInitialConsonants(wordArray) {
    let tD = ["t", "d"];
    let sZ = ["ʃ", "ʒ"]
    if (consonants.includes(wordArray[0]) && selectFricatives().includes(wordArray[1])) {
        if (tD.includes(wordArray[0]) === false && sZ.includes(wordArray[1]) === false) {
            wordArray.splice(1, 1);
        }

        timesfricativesLostAfterWordInitialConsonantsApplied++;
        if (timesfricativesLostAfterWordInitialConsonantsApplied > 0) {
            document.getElementById("fricativesLostAfterWordInitialConsonants-li").style.display = "block";
            document.getElementById("fricativesLostAfterWordInitialConsonants-ul").style.display = "block";
        }
    }
    if (consonants.includes(wordArray[1]) && selectFricatives().includes(wordArray[2]) && wordArray[0] === "X") {
        wordArray.splice(2, 1);
    }
    return wordArray
}

function wordFinalHighVowelsLower(wordArray) {
    if (highVowels.includes(wordArray[wordArray.length - 1])) {
        let vowelIndex = highVowels.indexOf(wordArray[wordArray.length - 1]);
        if (wordArray[wordArray.length - 2] === wordArray[wordArray.length - 1]) {
            wordArray[wordArray.length - 2] = midVowels[vowelIndex];
        }
        wordArray[wordArray.length - 1] = midVowels[vowelIndex];

        timeswordFinalHighVowelsLowerApplied++
        if (timeswordFinalHighVowelsLowerApplied > 0) {
            document.getElementById("wordFinalHighVowelsLower-li").style.display = "block";
            document.getElementById("wordFinalHighVowelsLower-ul").style.display = "block";
        }
    }
    return wordArray;
}

function liquidsLostBeforeConsonants(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (liquids.includes(wordArray[i]) && consonants.includes(wordArray[i + 1])) {
            wordArray.splice(i, 1);
            timesliquidsLostAfterConsonantsApplied++;
            if (timesliquidsLostAfterConsonantsApplied > 0) {
                document.getElementById("liquidsLostBeforeConsonants-li").style.display = "block";
                document.getElementById("liquidsLostBeforeConsonants-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function insertIBetweenConsonantAndliquid(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (liquids.includes(wordArray[i]) && consonants.includes(wordArray[i + 1]) && wordArray[i] !== wordArray[i + 1]) {
            wordArray.splice(i + 1, 0, "i");
            timesInsertIBetweenConsonantAndliquidApplied++;
            if (timesInsertIBetweenConsonantAndliquidApplied > 0) {
                document.getElementById("insertIBetweenConsonantAndliquid-li").style.display = "block";
                document.getElementById("insertIBetweenConsonantAndliquid-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function insertUBetweenConsonantAndliquid(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (liquids.includes(wordArray[i]) && consonants.includes(wordArray[i + 1]) && wordArray[i] !== wordArray[i + 1]) {
            wordArray.splice(i + 1, 0, "u");
            timesInsertUBetweenConsonantAndliquidApplied++;
            if (timesInsertUBetweenConsonantAndliquidApplied > 0) {
                document.getElementById("insertUBetweenConsonantAndliquid-li").style.display = "block";
                document.getElementById("insertUBetweenConsonantAndliquid-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function consonantliquidMetathesis(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (liquids.includes(wordArray[i]) && consonants.includes(wordArray[i + 1])) {
            let liquid = wordArray[i];
            let followingConsonant = wordArray[i + 1];
            wordArray[i] = followingConsonant;
            wordArray[i + 1] = liquid;
            timesConsonantliquidMetathesisApplied++;
            if (timesConsonantliquidMetathesisApplied > 0) {
                document.getElementById("consonantliquidMetathesis-li").style.display = "block";
                document.getElementById("consonantliquidMetathesis-ul").style.display = "block";
            }
            if (liquids.includes(wordArray[i]) && liquids.includes(wordArray[i + 1])) {
                wordArray.splice(i + 1, 0, "u");
            }
        }
    }
    return wordArray;
};

function lenitionofPlosivebeforeOtherPlosive1(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (plosives.includes(wordArray[i]) && plosives.includes(wordArray[i - 1]) && wordArray[i] !== wordArray[i - 1]) {
            let firstPlosiveIndex = plosives.indexOf(wordArray[i - 1]);
            wordArray[i - 1] = lenitionFromPlosives1[firstPlosiveIndex];
            timeslenitionofPlosivebeforeOtherPlosive1Applied++;
            if (timeslenitionofPlosivebeforeOtherPlosive1Applied > 0) {
                document.getElementById("lenitionofPlosivebeforeOtherPlosive1-li").style.display = "block";
                document.getElementById("lenitionofPlosivebeforeOtherPlosive1-ul").style.display = "block";
                for (let i = 0; i < plosives.length; i++) {
                    if (consonants.includes(plosives[i]) && timeslenitionofPlosivebeforeOtherPlosive1Applied === 1) {
                        let newLi = document.createElement("li");
                        newLi.innerHTML = `${plosives[i]} > [${lenitionFromPlosives1[i]}] ⟨${spell(lenitionFromPlosives1[i])}⟩`
                        document.getElementById("lenition-before-list-1").appendChild(newLi)
                    }
                };
            };
        }
    };
    return wordArray;
};

function lenitionofPlosivebeforeOtherPlosive2(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (plosives.includes(wordArray[i]) && plosives.includes(wordArray[i - 1]) && wordArray[i] !== wordArray[i - 1]) {
            let firstPlosiveIndex = plosives.indexOf(wordArray[i - 1]);
            wordArray[i - 1] = lenitionFromPlosives2[firstPlosiveIndex];
            timeslenitionofPlosivebeforeOtherPlosive2Applied++;
            if (timeslenitionofPlosivebeforeOtherPlosive2Applied > 0) {
                document.getElementById("lenitionofPlosivebeforeOtherPlosive2-li").style.display = "block";
                document.getElementById("lenitionofPlosivebeforeOtherPlosive2-ul").style.display = "block";
                for (let i = 0; i < plosives.length; i++) {
                    if (consonants.includes(plosives[i]) && timeslenitionofPlosivebeforeOtherPlosive2Applied === 1) {
                        let newLi = document.createElement("li");
                        newLi.innerHTML = `${plosives[i]} > [${lenitionFromPlosives2[i]}] ⟨${spell(lenitionFromPlosives2[i])}⟩`
                        document.getElementById("lenition-before-list-2").appendChild(newLi)
                    }
                }
            };
        };
    };
    return wordArray;
}

function nonInitialNonHighVowelsBecomeA(wordArray) {
    let num = 0;
    for (let i = 0; i < wordArray.length; i++) {
        if (nonHighVowels.includes(wordArray[i]) && num !== 0) {
            wordArray[i] = "a";
            timesnonInitialNonHighVowelsBecomeAApplied++;
            if (timesnonInitialNonHighVowelsBecomeAApplied > 0) {
                document.getElementById("nonInitialNonHighVowelsBecomeA-li").style.display = "block";
                document.getElementById("nonInitialNonHighVowelsBecomeA-ul").style.display = "block";
            };
        };
        if (vowels.includes(wordArray[i])) {
            num++;
        };
    };
    return wordArray;
}

function nasalsCantAppearAfterConsonants(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (consonants.includes(wordArray[i]) && allNasalsArray.includes(wordArray[i + 1]) && wordArray[i] !== wordArray[i + 1]) {
            wordArray.splice(i + 1, 0, "i");
            timesnasalsCantAppearAfterConsonantsApplied++
            if (timesnasalsCantAppearAfterConsonantsApplied > 0) {
                document.getElementById("nasalsCantAppearAfterConsonants-li").style.display = "block";
                document.getElementById("nasalsCantAppearAfterConsonants-ul").style.display = "block";
            }
        }
    };
    return wordArray;
}

function fricativesDebuccaliseBeforeVowels(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (selectFricatives().includes(wordArray[i]) && vowels.includes(wordArray[i + 1]) && wordArray[i] !== wordArray[i - 1]) {
            timefricativesDebuccaliseBeforeVowelsApplied++;
            if (timefricativesDebuccaliseBeforeVowelsApplied > 0) {
                document.getElementById("fricativesDebuccaliseBeforeVowels-li").style.display = "block";
                document.getElementById("fricativesDebuccaliseBeforeVowels-ul").style.display = "block";
            }
        }
    }
    return wordArray
}

function vowelLostBetweenTwoOfSameConsonant(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (consonants.includes(wordArray[i - 1]) && wordArray[i - 1] === wordArray[i + 1] && vowels.includes(wordArray[i])) {
            wordArray.splice(i, 2);
            timesvowelLostBetweenTwoOfSameConsonantApplied++;
            if (timesvowelLostBetweenTwoOfSameConsonantApplied > 0) {
                document.getElementById("vowelLostBetweenTwoOfSameConsonant-li").style.display = "block";
                document.getElementById("vowelLostBetweenTwoOfSameConsonant-ul").style.display = "block";
            };
        };
    };
    return wordArray;
}

function voicedConsonantsLostIntervocalically(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        while (vowels.includes(wordArray[i - 1]) && vowels.includes(wordArray[i + 1]) && voiced.includes(wordArray[i]) ||
            vowels.includes(wordArray[i - 2]) && vowels.includes(wordArray[i + 2]) && wordArray[i - 1] === "ː" && wordArray[i + 1] === "ː" && voiced.includes(wordArray[i]) ||
            vowels.includes(wordArray[i - 1]) && wordArray[i + 1] === "ː" && voiced.includes(wordArray[i]) ||
            vowels.includes(wordArray[i + 1]) && wordArray[i - 1] === "ː" && voiced.includes(wordArray[i])
        ) {
            wordArray.splice(i, 1);
            timesvoicedConsonantsLostIntervocalicallyApplied++;
            if (timesvoicedConsonantsLostIntervocalicallyApplied > 0) {
                document.getElementById("voicedConsonantsLostIntervocalically-li").style.display = "block";
                document.getElementById("voicedConsonantsLostIntervocalically-ul").style.display = "block";
            };
        };
    };
    return wordArray
};

function RVCToVRCMetathesis(wordArray) {
    if (liquids.includes(wordArray[0]) && vowels.includes(wordArray[1]) && consonants.includes(wordArray[2])) {
        let liquid = wordArray[0];
        let vowel = wordArray[1];
        wordArray[0] = vowel;
        wordArray[1] = liquid;
        timesRVCToVRCMetathesisApplies++;
        if (timesRVCToVRCMetathesisApplies > 0) {
            document.getElementById("RVCToVRCMetathesis-li").style.display = "block";
            document.getElementById("RVCToVRCMetathesis-ul").style.display = "block";
        }
    };
    if (wordArray[0] === "X" && liquids.includes(wordArray[1]) && vowels.includes(wordArray[2]) && consonants.includes(wordArray[3])) {
        let liquid = wordArray[1];
        let vowel = wordArray[2];
        wordArray[1] = vowel;
        wordArray[2] = liquid;

    };
    return wordArray;
};

function vowelLostBetweenConsonantAndliquid(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (consonants.includes(wordArray[i]) && vowels.includes(wordArray[i + 1]) && liquids.includes(wordArray[i + 2]) && vowels.includes(wordArray[i + 3])) {
            timesvowelLostBetweenConsonantAndliquidApplied++;
            if (timesvowelLostBetweenConsonantAndliquidApplied > 0) {
                document.getElementById("vowelLostBetweenConsonantAndliquid-li").style.display = "block";
                document.getElementById("vowelLostBetweenConsonantAndliquid-ul").style.display = "block";
            }
            wordArray.splice(i + 1, 1)
        }
        if (wordArray[i] === "X" && consonants.includes(wordArray[i + 1]) && vowels.includes(wordArray[i + 2]) && liquids.includes(wordArray[i + 3]) && vowels.includes(wordArray[i + 4])) {
            wordArray.splice(i + 2, 1)
        }
    }
    return wordArray
}

function intervocalicVoicing(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        while (unvoiced.includes(wordArray[i]) && vowels.includes(wordArray[i - 1]) && vowels.includes(wordArray[i + 1])) {
            let unvoicedIndex = unvoiced.indexOf(wordArray[i]);
            wordArray[i] = voiced[unvoicedIndex];
            timesintervocalicVoicing++;
            if (timesintervocalicVoicing > 0) {
                document.getElementById("intervocalicVoicing-li").style.display = "block";
                document.getElementById("intervocalicVoicing-ul").style.display = "block";
            };
        };
    };
    return wordArray;
}

function hLostAfterConsonants(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (consonants.includes(wordArray[i - 1]) && wordArray[i] === "h") {
            wordArray.splice(i, 1);
            timeshLostAfterConsonants++;
            if (timeshLostAfterConsonants > 0) {
                document.getElementById("hLostAfterConsonants-li").style.display = "block";
                document.getElementById("hLostAfterConsonants-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function nasalsLostBetweenVowelAndConsonant(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (allNasalsArray.includes(wordArray[i]) && consonants.includes(wordArray[i + 1]) && vowels.includes(wordArray[i - 1])) {

            if (wordArray[i - 1] === wordArray[i - 2]) {
                wordArray.splice(i, 1)
            } else {
                wordArray[i] = wordArray[i - 1];
            }
            timesnasalsLostBetweenVowelAndConsonant++;
            if (timesnasalsLostBetweenVowelAndConsonant > 0) {
                document.getElementById("nasalsLostBetweenVowelAndConsonant-li").style.display = "block";
                document.getElementById("nasalsLostBetweenVowelAndConsonant-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function auBecomesOu(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "a" && wordArray[i + 1] === "u") {
            wordArray[i] = "o";
            timesauBecomesOu++;
            if (timesauBecomesOu > 0) {
                document.getElementById("auBecomesOu-li").style.display = "block";
                document.getElementById("auBecomesOu-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function aCaBecomesaCi(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "a" && wordArray[i - 2] === "a" && consonants.includes(wordArray[i - 1]) || wordArray[i] === "a" && wordArray[i - 3] === "a" && consonants.includes(wordArray[i - 1] && consonants[wordArray[i - 2]])) {
            wordArray[i] = "i";
            if (wordArray[i + 1] === "a") {
                wordArray[i + 1] = "i";
            }
            timesaCaBecomesaCi++;
            if (timesaCaBecomesaCi > 0) {
                document.getElementById("aCaBecomesaCi-li").style.display = "block";
                document.getElementById("aCaBecomesaCi-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function VʔVBecomesVV(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "ʔ" && vowels.includes(wordArray[i - 1]) && vowels.includes(wordArray[i + 1])) {
            wordArray[i] = wordArray[i - 1];
            wordArray.splice(i + 1, 1);
            timesVʔVBecomesVV++;
            if (timesVʔVBecomesVV > 0) {
                document.getElementById("VʔVBecomesVV-li").style.display = "block";
                document.getElementById("VʔVBecomesVV-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function plosivesDebuccaliseInCoda(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (i !== 0) {
            if (plosives.includes(wordArray[i]) && consonants.includes(wordArray[i + 1]) && wordArray[i + 1] !== wordArray[i]) {
                wordArray[i] = "ʔ";
                timesplosivesDebuccaliseInCoda++;
            } else if (plosives.includes(wordArray[wordArray.length - 1])) {
                wordArray[wordArray.length - 1] = "ʔ";
                timesplosivesDebuccaliseInCoda++;
            } else if (plosives.includes(wordArray[i]) && wordArray[i + 1] === "ʷ") {
                wordArray[i] = "ʔ";
                wordArray[i + 1] = "u"
                timesplosivesDebuccaliseInCoda++;
            } else if (plosives.includes(wordArray[i]) && wordArray[i + 1] === "ʲ") {
                wordArray[i] = "ʔ";
                wordArray[i + 1] = "i"
                timesplosivesDebuccaliseInCoda++;
            }
            if (timesplosivesDebuccaliseInCoda > 0) {
                document.getElementById("plosivesDebuccaliseInCoda-li").style.display = "block";
                document.getElementById("plosivesDebuccaliseInCoda-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function CVRBecomesCCVR(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (consonants.includes(wordArray[i]) && vowels.includes(wordArray[i - 1]) && liquids.includes(wordArray[i + 1] && wordArray[i] !== wordArray[i + 1]) && vowels.includes(wordArray[i + 2])) {
            let doubledConsonant = wordArray[i];
            let liquidIndex = wordArray[i + 1];
            let vowelIndex = wordArray[i + 2];
            wordArray[i + 2] = liquidIndex;
            wordArray[i + 1] = vowelIndex;
            wordArray.splice(i, 0, doubledConsonant);
            timesCVRBecomesCCVR++;
            if (timesCVRBecomesCCVR > 0) {
                document.getElementById("CVRBecomesCCVR-li").style.display = "block";
                document.getElementById("CVRBecomesCCVR-ul").style.display = "block";
            };
        }
    };
    return wordArray;
};

function glottalStopJFortites(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "ʔ" && wordArray[i + 1] === "j") {
            wordArray[i] = "g";
            wordArray.splice(i + 1, 1);
            timesglottalStopJFortites++
        } else if (wordArray[i] === "ʔ" && wordArray[i + 1] === "w") {
            wordArray[i] = "g";
            wordArray.splice(i + 1, 1);
            timesglottalStopJFortites++
        };
        if (timesglottalStopJFortites > 0) {
            document.getElementById("glottalStopJFortites-li").style.display = "block";
            document.getElementById("glottalStopJFortites-ul").style.display = "block";
        };
    }
    return wordArray;
}

function eciBecomesiCi(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        let iOrJ = ["i", "j"];
        if (wordArray[i] === "e" && consonants.includes(wordArray[i + 1]) && iOrJ.includes(wordArray[i + 2])) {
            wordArray[i] = "i";
            if (wordArray[i - 1] === "e") {
                wordArray[i - 1] = "i";
            };
            timeseciBecomesiCi++;
            if (timeseciBecomesiCi > 0) {
                document.getElementById("eciBecomesiCi-li").style.display = "block";
                document.getElementById("eciBecomesiCi-ul").style.display = "block";
            };
        }
    }
}

function iCbecomeseC(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "i" && consonants.includes(wordArray[i + 1]) && nonHighVowels.includes(wordArray[i + 2])) {
            wordArray[i] = "e";
            if (wordArray[i - 1] === "i") {
                wordArray[i - 1] = "e";
            }
            timesiCbecomeseC++;
            if (timesiCbecomeseC > 0) {
                document.getElementById("iCbecomeseC-li").style.display = "block";
                document.getElementById("iCbecomeseC-ul").style.display = "block";
            };
        }
    }
    return wordArray;
};

function VJbecomesLongI(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (vowels.includes(wordArray[i]) && wordArray[i + 1] === "j") {
            wordArray[i] = "i";
            wordArray[i + 1] = "i";
            if (wordArray[i - 1] === "i") {
                wordArray.splice(i - 1, 1);
            }
            timesVJbecomesLongI++;
            if (timesVJbecomesLongI > 0) {
                document.getElementById("VJbecomesLongI-li").style.display = "block";
                document.getElementById("VJbecomesLongI-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function uNBecomesoN(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "u" && allNasalsArray.includes(wordArray[i + 1]) && nonHighVowels.includes(wordArray[i + 2])) {
            wordArray[i] = "o";
            if (wordArray[i - 1] === "u") {
                wordArray[i - 1] = "o";
            }
            timesuNBecomesoN++;
            if (timesuNBecomesoN > 0) {
                document.getElementById("uNBecomesoN-li").style.display = "block";
                document.getElementById("uNBecomesoN-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function gBecomesJ(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "g" && frontVowels.includes(wordArray[i - 1]) || wordArray[i] === "g" && wordArray[i - 1] === "j") {
            wordArray[i] = "j";
            if (wordArray[i - 1] === "g") {
                wordArray[i - 1] = "j"
            }
            timesgBecomesJ++;
            if (timesgBecomesJ > 0) {
                document.getElementById("gBecomesJ-li").style.display = "block";
                document.getElementById("gBecomesJ-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function VvBecomesVV(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "u" && vowels.includes(wordArray[i - 1]) && wordArray[i - 1] !== "u") {
            wordArray[i] = wordArray[i - 1];
            timesVvBecomesVV++;
            if (timesVvBecomesVV > 0) {
                document.getElementById("VvBecomesVV-li").style.display = "block";
                document.getElementById("VvBecomesVV-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function eNBecomesiN(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "e" && allNasalsArray.includes(wordArray[i + 1])) {
            wordArray[i] = "i";
            if (wordArray[i - 1] === "e") {
                wordArray[i - 1] = "i";
            };
            timeseNBecomesiN++;
            if (timeseNBecomesiN > 0) {
                document.getElementById("eNBecomesiN-li").style.display = "block";
                document.getElementById("eNBecomesiN-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function CJBecomesCC(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "j" && consonants.includes(wordArray[i - 1])) {
            wordArray[i] = wordArray[i - 1];
            timesCJBecomesCC++;
            if (timesCJBecomesCC > 0) {
                document.getElementById("CJBecomesCC-li").style.display = "block";
                document.getElementById("CJBecomesCC-ul").style.display = "block";
            };
        };
    };
    return wordArray;
};

function iUmlaut(wordArray) {
    let umlautVowels = ["i", "y", "y", "i", "i", "y", "i", "ø", "e", "ø", "e", "e", "e", "ø", "i", "œ", "e", "æ", "y", "e", "e", "ø", "e", "æ", "æ", "æ"]
    let umlautCauser = ["i", "j"]
    for (let i = 0; i < wordArray.length; i++) {
        if ((vowels.includes(wordArray[i]) && umlautCauser.includes(wordArray[i + 1])) ||
            (vowels.includes(wordArray[i]) && umlautCauser.includes(wordArray[i + 2])) ||
            (vowels.includes(wordArray[i]) && umlautCauser.includes(wordArray[i + 3]))) {
            let vowelIndex = vowels.indexOf(wordArray[i]);
            if (wordArray[i - 1] === wordArray[i]) {
                wordArray[i - 1] = umlautVowels[vowelIndex];
            }
            wordArray[i] = umlautVowels[vowelIndex];
            timesiUmlaut++;
            if (timesiUmlaut > 0) {
                document.getElementById("iUmlaut-li").style.display = "block";
                document.getElementById("iUmlaut-ul").style.display = "block";
            };
            if (timesiUmlaut === 1) {
                for (let j = 0; j < vowels.length; j++) {
                    if (chosenVowels.includes(vowels[j])) {
                        let newLi = document.createElement("li");
                        newLi.innerHTML = `${vowels[j]} > [${umlautVowels[j]}] ⟨${spell(umlautVowels[j])}⟩`
                        if (vowels[j] !== "i") {
                            document.getElementById("i-umlaut-list").appendChild(newLi)
                        }
                    };
                };
            };
        };
    };
    return wordArray;
};

function vowelShiftInHeavySyllables(wordArray) {
    let tense = ["i", "u", "a", "e", "o"];
    let lax = ["e", "o", "ə", "ɛ", "ɔ"];
    for (let i = 0; i < wordArray.length; i++) {
        if (tense.includes(wordArray[i]) && consonants.includes(wordArray[i + 1]) && consonants.includes(wordArray[i + 2]) || tense.includes(wordArray[i]) && consonants.includes(wordArray[i + 1]) && wordArray[i + 1] === wordArray[wordArray.length - 1]) {
            let tenseIndex = tense.indexOf(wordArray[i]);
            if (wordArray[i + 1] === wordArray[i]) {
                wordArray[i + 1] = "ː";
            }
            wordArray[i] = lax[tenseIndex];
            timesvowelShiftInHeavySyllables++;
            if (timesvowelShiftInHeavySyllables > 0) {
                document.getElementById("vowelShiftInHeavySyllables-li").style.display = "block";
                document.getElementById("vowelShiftInHeavySyllables-ul").style.display = "block";
            };
            if (timesvowelShiftInHeavySyllables === 1) {
                for (let j = 0; j < vowels.length; j++) {
                    if (chosenVowels.includes(vowels[j]) && tense.includes(vowels[j])) {
                        let index = tense.indexOf(vowels[j]);
                        let newLi = document.createElement("li");
                        newLi.innerHTML = `${vowels[j]} > [${lax[index]}] ⟨${spell(lax[index])}⟩`
                        document.getElementById("vowelShiftInHeavySyllables-list").appendChild(newLi)
                    };
                };
            };
        };
    };
    return wordArray
};

function VCVBecomesVCWordFinally(wordArray) {
    if (vowels.includes(wordArray[wordArray.length - 1]) && consonants.includes(wordArray[wordArray.length - 2]) && vowels.includes(wordArray[wordArray.length - 3])) {
        wordArray.splice(wordArray.length - 1, 1);
        timesVCVBecomesVCWordFinally++;
        if (timesVCVBecomesVCWordFinally > 0) {
            document.getElementById("VCVBecomesVCWordFinally-li").style.display = "block";
            document.getElementById("VCVBecomesVCWordFinally-ul").style.display = "block";
        };
    };
};

function longABecomesO(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "a" && wordArray[i - 1] === "a") {
            wordArray[i] = "o";
            wordArray[i - 1] = "o";
            timeslongABecomesO++;
            if (timeslongABecomesO > 0) {
                document.getElementById("longABecomesO-li").style.display = "block";
                document.getElementById("longABecomesO-ul").style.display = "block";
            };
        }
    }
};

function palatalisationofPlosives(wordArray) {
    let labial = ["b", "bʰ", "bʲ", "bʷ", "bʰʲ", "bʷʰ", "p", "pʰ", "pʲ", "pʷ", "pʰʲ", "pʷʰ"];
    let palatalised = ["b", "ʤ", "ʤ", "bʰ", "ʤ", "ʤ", "ʤ", "ʤ", "bʲ", "ʤ", "ʤ", "bʷ", "ʤʷ", "ʤʷ", "bʰʲ", "ʤ", "ʤ", "bʷʰ", "ʤʷ", "ʤ", "p", "ʧ", "ʧ", "pʰ", "ʧ", "ʧ", "ʧ", "ʧ", "pʲ", "ʧ", "ʧ", "pʷ", "ʧ", "ʧ", "pʰʲ", "ʧ", "ʧ", "pʷʰ", "ʧ", "ʧ", "j", "ʧ", "ʤ"];

    for (let i = 0; i < wordArray.length; i++) {
        if (frontVowels.includes(wordArray[i]) && plosives.includes(wordArray[i - 1]) && labial.includes(wordArray[i - 1]) === false) {
            let index = plosives.indexOf(wordArray[i - 1]);
            wordArray[i - 1] = palatalised[index];
            timespalatalisationofPlosives++;
            if (timespalatalisationofPlosives > 0) {
                document.getElementById("palatalisationofPlosives-li").style.display = "block";
                document.getElementById("palatalisationofPlosives-ul").style.display = "block";
            };
        };
    };
};

function eOBecomeJW(wordArray) {
    let eO = ["e", "o"];
    let jW = ["j", "w"]
    for (let i = 0; i < wordArray.length; i++) {
        if (eO.includes(wordArray[i]) && vowels.includes(wordArray[i + 1]) && wordArray[i] !== wordArray[i + 1]) {
            let index = eO.indexOf(wordArray[i]);
            wordArray[i] = jW[index];
            timeseOBecomeJW++;
            if (timeseOBecomeJW > 0) {
                document.getElementById("eOBecomeJW-li").style.display = "block";
                document.getElementById("eOBecomeJW-ul").style.display = "block";
            };
        }
    }
}

function VzbecomesVr(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        while (wordArray[i] === "z" && vowels.includes(wordArray[i - 1])) {
            wordArray[i] = "r";
            timesVzbecomesVr++;
            if (timesVzbecomesVr > 0) {
                document.getElementById("VzbecomesVr-li").style.display = "block";
                document.getElementById("VzbecomesVr-ul").style.display = "block";
            };
        };
    };
};

function intialVBecomesHV(wordArray) {
    if (vowels.includes(wordArray[0])) {
        wordArray.splice(0, 0, "ħ");
        timesintialVBecomesHV++;
        if (timesintialVBecomesHV > 0) {
            document.getElementById("intialVBecomesHV-li").style.display = "block";
            document.getElementById("intialVBecomesHV-ul").style.display = "block";
        };
    };
};

function intialJBecomesL(wordArray) {
    if (wordArray[0] === "j") {
        wordArray[0] = "l";
        timesintialJBecomesL++;
        if (timesintialJBecomesL > 0) {
            document.getElementById("intialJBecomesL-li").style.display = "block";
            document.getElementById("intialJBecomesL-ul").style.display = "block";
        };
    };
};

function tDBecomeL(wordArray) {
    let tD = ["t", "d"]
    for (let i = 0; i < wordArray.length; i++) {
        if (tD.includes(wordArray[i]) && vowels.includes(wordArray[i - 1]) && vowels.includes(wordArray[i + 1])) {
            wordArray[i] = "l";
            timestDBecomeL++;
            if (timestDBecomeL > 0) {
                document.getElementById("tDBecomeL-li").style.display = "block";
                document.getElementById("tDBecomeL-ul").style.display = "block";
            };
        }
    };
};

function longVowelsBreakIntoVi(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (vowels.includes(wordArray[i]) && wordArray[i] === wordArray[i + 1]) {
            timeslongVowelsBreakIntoVi++;
            //breaks into short vowel + i
            wordArray[i + 1] = "i";
            if (timeslongVowelsBreakIntoVi > 0) {
                document.getElementById("longVowelsBreakIntoVi-li").style.display = "block";
                document.getElementById("longVowelsBreakIntoVi-ul").style.display = "block";
            };
        };
    };
};

function longVowelsBreakIntoU(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (vowels.includes(wordArray[i]) && wordArray[i] === wordArray[i + 1]) {
            timeslongVowelsBreakIntoU++;
            //breaks into short vowel + u
            if (timeslongVowelsBreakIntoU === 1 && wordArray[i] !== "u") {
                wordArray[i + 1] = "u";
            };
            if (timeslongVowelsBreakIntoU > 0) {
                document.getElementById("longVowelsBreakIntoU-li").style.display = "block";
                document.getElementById("longVowelsBreakIntoU-ul").style.display = "block";
            };
        };
    };
};

function longVowelsBreakIntoIPlusRaising(wordArray) {
    let originalVowel = ["e", "ø", "ɘ", "ɵ", "ə", "ɛ", "ɜ", "ɞ", "ɪ", "ɔ", "œ", "ɒ", "ʊ", "ʌ", "ɤ", "o", "æ", "ɑ", "ɐ", "a", "i", "u", "y", "ɯ", "ɨ", "ʉ"];
    let heightenedVowel = ["ɪ", "ʏ", "ɨ", "ʉ", "ɘ", "e", "ɘ", "ɵ", "i", "o", "ø", "ɔ", "u", "ɤ", "ɯ", "u", "ɛ", "ʌ", "ɜ", "æ", "i", "u", "y", "ɯ", "ɨ", "ʉ"]

    for (let i = 0; i < wordArray.length; i++) {
        if (vowels.includes(wordArray[i]) && wordArray[i] === wordArray[i + 1]) {
            timeslongVowelsBreakIntoIPlusRaising++;
            //breaks into higher short vowel + i
            wordArray[i + 1] = "i";
            let index = originalVowel.indexOf(wordArray[i]);
            wordArray[i] = heightenedVowel[index];
            if (timeslongVowelsBreakIntoIPlusRaising === 1) {
                for (let j = 0; j < vowels.length; j++) {
                    if (chosenVowels.includes(vowels[j]) && originalVowel.includes(vowels[j])) {
                        let newLi = document.createElement("li");
                        let exampleIndex = originalVowel.indexOf(vowels[j]);
                        newLi.innerHTML = `${vowels[j]} > [${heightenedVowel[exampleIndex]}] ⟨${spell(heightenedVowel[exampleIndex])}⟩`
                        document.getElementById("longVowelsBreakIntoIPlusRaisingExample-list").appendChild(newLi)
                    };
                };
            };

            if (timeslongVowelsBreakIntoIPlusRaising > 0) {
                document.getElementById("longVowelsBreakIntoIPlusRaising-li").style.display = "block";
                document.getElementById("longVowelsBreakIntoIPlusRaising-ul").style.display = "block";
            };
        };
    };
};

function longVowelsBreakIntoUPlusRaising(wordArray) {
    let originalVowel = ["e", "ø", "ɘ", "ɵ", "ə", "ɛ", "ɜ", "ɞ", "ɪ", "ɔ", "œ", "ɒ", "ʊ", "ʌ", "ɤ", "o", "æ", "ɑ", "ɐ", "a", "i", "u", "y", "ɯ", "ɨ", "ʉ"];
    let heightenedVowel = ["ɪ", "ʏ", "ɨ", "ʉ", "ɘ", "e", "ɘ", "ɵ", "i", "o", "ø", "ɔ", "u", "ɤ", "ɯ", "u", "ɛ", "ʌ", "ɜ", "æ", "i", "u", "y", "ɯ", "ɨ", "ʉ"]

    for (let i = 0; i < wordArray.length; i++) {
        if (vowels.includes(wordArray[i]) && wordArray[i] === wordArray[i + 1]) {
            timeslongVowelsBreakIntoUPlusRaising++;
            //breaks into higher short vowel + u
            if (wordArray[i] !== "u") {
                wordArray[i + 1] = "u";
                let index = originalVowel.indexOf(wordArray[i]);
                wordArray[i] = heightenedVowel[index];
                if (timeslongVowelsBreakIntoUPlusRaising === 1) {
                    for (let j = 0; j < vowels.length; j++) {
                        if (chosenVowels.includes(vowels[j]) && originalVowel.includes(vowels[j])) {
                            let newLi = document.createElement("li");
                            let exampleIndex = originalVowel.indexOf(vowels[j]);
                            newLi.innerHTML = `${vowels[j]} > [${heightenedVowel[exampleIndex]}] ⟨${spell(heightenedVowel[exampleIndex])}⟩`
                            document.getElementById("longVowelsBreakIntoUPlusRaisingExample-list").appendChild(newLi)
                        };
                    };
                };
            };

            if (timeslongVowelsBreakIntoUPlusRaising > 0) {
                document.getElementById("longVowelsBreakIntoUPlusRaising-li").style.display = "block";
                document.getElementById("longVowelsBreakIntoUPlusRaising-ul").style.display = "block";
            };

        }
    }
};

function longVowelsBreakIntoVj(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (vowels.includes(wordArray[i]) && wordArray[i] === wordArray[i + 1]) {
            timeslongVowelsBreakIntoVj++;
            //breaks into j + short vowel
            wordArray[i] = "j";

            if (timeslongVowelsBreakIntoVj > 0) {
                document.getElementById("longVowelsBreakIntoVj-li").style.display = "block";
                document.getElementById("longVowelsBreakIntoVj-ul").style.display = "block";
            };
        };
    };
};

function longVowelsBreakIntojVwV(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (vowels.includes(wordArray[i]) && wordArray[i] === wordArray[i + 1]) {
            timeslongVowelsBreakIntojVwV++;
            //breaks into jV or wV depending on frontness
            if (frontVowels.includes(wordArray[i])) {
                wordArray[i] = "j";
            } else {
                wordArray[i] = "w";
            };

            if (timeslongVowelsBreakIntojVwV > 0) {
                document.getElementById("longVowelsBreakIntojVwV-li").style.display = "block";
                document.getElementById("longVowelsBreakIntojVwV-ul").style.display = "block";
            };
        };
    };
};

function vowelsHeightenBeforeVelars(wordArray) {
    let originalVowel = ["e", "ø", "ɘ", "ɵ", "ə", "ɛ", "ɜ", "ɞ", "ɪ", "ɔ", "œ", "ɒ", "ʊ", "ʌ", "ɤ", "o", "æ", "ɑ", "ɐ", "a", "i", "u", "y", "ɯ", "ɨ", "ʉ"];
    let heightenedVowel = ["ɪ", "ʏ", "ɨ", "ʉ", "ɘ", "e", "ɘ", "ɵ", "i", "o", "ø", "ɔ", "u", "ɤ", "ɯ", "u", "ɛ", "ʌ", "ɜ", "æ", "ii", "uu", "yy", "ɯɯ", "ɨɨ", "ʉʉ"];
    let velars = ["k", "g", "x", "ɣ"]

    for (let i = 0; i < wordArray.length; i++) {
        if (vowels.includes(wordArray[i]) && velars.includes(wordArray[i + 1])) {
            timesvowelsHeightenBeforeVelars++;
            let index = originalVowel.indexOf(wordArray[i]);
            if (wordArray[i - 1] === wordArray[i]) {
                wordArray[i] = heightenedVowel[index];
                wordArray[i - 1] = wordArray[i];
            } else {
                wordArray[i] = heightenedVowel[index];
            };

            if (timesvowelsHeightenBeforeVelars === 1) {
                for (let j = 0; j < vowels.length; j++) {
                    if (chosenVowels.includes(vowels[j])) {
                        let newLi = document.createElement("li");
                        let exampleIndex = originalVowel.indexOf(vowels[j]);
                        newLi.innerHTML = `${vowels[j]} > [${heightenedVowel[exampleIndex]}] ⟨${spell(heightenedVowel[exampleIndex])}⟩`
                        document.getElementById("vowelsHeightenBeforeVelarsExample-list").appendChild(newLi);
                    };
                };
            };
            if (timesvowelsHeightenBeforeVelars > 0) {
                document.getElementById("vowelsHeightenBeforeVelars-li").style.display = "block";
                document.getElementById("vowelsHeightenBeforeVelars-ul").style.display = "block";
            };
        };
    };
};

function palatalsBecomeVelar(wordArray) {
    let palatal = ["c", "ɟ", "ç", "ʝ", "j", "ʎ"];
    let velar = ["k", "g", "x", "ɣ", "x", "ɣ"];
    for (let i = 0; i < wordArray.length; i++) {
        if (palatal.includes(wordArray[i])) {
            let index = palatal.indexOf(wordArray[i]);
            wordArray[i] = velar[index];
            timespalatalsBecomeVelar++;
            if (timespalatalsBecomeVelar > 0) {
                document.getElementById("palatalsBecomeVelar-li").style.display = "block";
                document.getElementById("palatalsBecomeVelar-ul").style.display = "block";
            };
        };
    };
    let existingPalatals = [];
    let resultingVelars = [];
    for (let i = 0; i < palatal.length; i++) {
        if (consonants.includes(palatal[i])) {
            existingPalatals.push(palatal[i]);
            resultingVelars.push(velar[i])
        };
    };
    let joinedPalatals = existingPalatals.join(", ");
    let joinedVelars = resultingVelars.join(", ");
    let palatalText = "";
    if (existingPalatals.length === 1) {
        palatalText = `The palatal consonant /${joinedPalatals}/ becomes the velar consonant /${joinedVelars}/`;
    } else if (existingPalatals.length > 1) {
        palatalText = `The palatal consonants /${joinedPalatals}/ become the velar consonants /${joinedVelars}/`;
    }
    document.getElementById("palatalsBecomeVelar-list").innerHTML = palatalText;
};

function gwbecomesB(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "g" && wordArray[i + 1] === "ʷ") {
            wordArray[i] = "b";
            wordArray.splice(i + 1, 1);
            timesgwbecomesB++;
            if (timesgwbecomesB > 0) {
                document.getElementById("gwbecomesB-li").style.display = "block";
                document.getElementById("gwbecomesB-ul").style.display = "block";
            };
        }
    }
};

function eRaBecomesARa(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "e" && liquids.includes(wordArray[i + 1]) && wordArray[i + 2] === "a") {
            wordArray[i] = "a";
            timeseRaBecomesARa++;
            if (timeseRaBecomesARa > 0) {
                document.getElementById("eRaBecomesARa-li").style.display = "block";
                document.getElementById("eRaBecomesARa-ul").style.display = "block";
            };
        }
    }
};

function epentheticA(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (consonants.includes(wordArray[i]) && liquids.includes(wordArray[i + 1]) && consonants.includes(wordArray[i + 2])) {
            wordArray.splice(i + 1, 0, "a");
            timesepentheticA++;
            if (timesepentheticA > 0) {
                document.getElementById("epentheticA-li").style.display = "block";
                document.getElementById("epentheticA-ul").style.display = "block";
            };
        }
    }
};

function pKWBecomesKwKw(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "p" && wordArray.includes("k")) {
            let index = wordArray.indexOf("k");
            if (wordArray[index + 1] === "ʷ" && index > i) {
                wordArray[i] = "kʷ";
                timespKWBecomesKwKw++;
                if (timespKWBecomesKwKw > 0) {
                    document.getElementById("pKWBecomesKwKw-li").style.display = "block";
                    document.getElementById("pKWBecomesKwKw-ul").style.display = "block";
                };
            };
        }
    }
};

function longEBecomesLongI(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "e" && wordArray[i + 1] === "e") {
            wordArray[i] = "i";
            wordArray[i + 1] = "i";
            timeslongEBecomesLongI++;
            if (timeslongEBecomesLongI > 0) {
                document.getElementById("longEBecomesLongI-li").style.display = "block";
                document.getElementById("longEBecomesLongI-ul").style.display = "block";
            };
        }
    }
};

function wordFinalLongOBecomesLongU(wordArray) {
    if (wordArray[wordArray.length - 1] === "o" && wordArray[wordArray.length - 2] === "o") {
        wordArray[wordArray.length - 1] = "u";
        wordArray[wordArray.length - 2] = "u";
        timeswordFinalLongOBecomesLongU++;
        if (timeswordFinalLongOBecomesLongU > 0) {
            document.getElementById("wordFinalLongOBecomesLongU-li").style.display = "block";
            document.getElementById("wordFinalLongOBecomesLongU-ul").style.display = "block";
        };
    }
};

function longVowelsShortenBeforeRC(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (vowels.includes(wordArray[i]) && wordArray[i - 1] === wordArray[i] && liquids.includes(wordArray[i + 1]) && consonants.includes(wordArray[i + 2])) {
            wordArray.splice(i, 1);
            timeslongVowelsShortenBeforeRC++;
            if (timeslongVowelsShortenBeforeRC > 0) {
                document.getElementById("longVowelsShortenBeforeRC-li").style.display = "block";
                document.getElementById("longVowelsShortenBeforeRC-ul").style.display = "block";
            };
        }
    }
};

function CCBecomesXC(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (consonants.includes(wordArray[i]) && plosives.includes(wordArray[i + 1]) && wordArray[i] !== wordArray[i + 1] || consonants.includes(wordArray[i]) && wordArray[i + 1] === "s" && wordArray[i] !== wordArray[i + 1]) {
            wordArray[i] = "x";
            timesCCBecomesXC++;
            if (timesCCBecomesXC > 0) {
                document.getElementById("CCBecomesXC-li").style.display = "block";
                document.getElementById("CCBecomesXC-ul").style.display = "block";
            };
        }
    }
};

function pBecomesBBeforeliquids(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "p" && liquids.includes(wordArray[i + 1])) {
            wordArray[i] = "b";
            timespBecomesBBeforeliquids++;
            if (timespBecomesBBeforeliquids > 0) {
                document.getElementById("pBecomesBBeforeliquids-li").style.display = "block";
                document.getElementById("pBecomesBBeforeliquids-ul").style.display = "block";
            };
        }
    }
};

function pBecomesU(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "p" && backVowels.includes(wordArray[i - 1]) && allNasalsArray.includes(wordArray[i + 1])) {
            wordArray[i] = "u";
            timespBecomesU++;
            if (timespBecomesU > 0) {
                document.getElementById("pBecomesU-li").style.display = "block";
                document.getElementById("pBecomesU-ul").style.display = "block";
            };
        }
    };
};

function pBecomesF(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "p" && wordArray[i + 1] !== "ʰ" || wordArray[i] === "p" && wordArray[i + 1] !== "ʷ") {
            wordArray[i] = "f";
            timespBecomesF++;
            if (timespBecomesF > 0) {
                document.getElementById("pBecomesF-li").style.display = "block";
                document.getElementById("pBecomesF-ul").style.display = "block";
            };
        }
    };
};

function longOBecomesA(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "o" && wordArray[i - 1] === "o") {
            wordArray[i] = "a";
            wordArray[i - 1] = "a";
            timeslongOBecomesA++;
            if (timeslongOBecomesA > 0) {
                document.getElementById("longOBecomesA-li").style.display = "block";
                document.getElementById("longOBecomesA-ul").style.display = "block";
            };
        }
    }
};

function eWBecomesOW(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "e" && wordArray[i + 1] === "w") {
            wordArray[i] = "o";
            timeseWBecomesOW++;
            if (timeseWBecomesOW > 0) {
                document.getElementById("eWBecomesOW-li").style.display = "block";
                document.getElementById("eWBecomesOW-ul").style.display = "block";
            };
        }
    }
};

function longUBecomesOU(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "u" && wordArray[i + 1] === "u" && obstruents.includes(wordArray[i + 2])) {
            wordArray[i] = "o";
            timeslongUBecomesOU++;
            if (timeslongUBecomesOU > 0) {
                document.getElementById("longUBecomesOU-li").style.display = "block";
                document.getElementById("longUBecomesOU-ul").style.display = "block";
            };
        }
    }
};

function velarsDelabialise(wordArray) {
    let velars = ["k", "g", "kʰ", "gʰ"];
    for (let i = 0; i < wordArray.length; i++) {
        if (velars.includes(wordArray[i]) && wordArray[i + 1] === "ʷ") {
            wordArray.splice(i + 1, 1);
            timesvelarsDelabialise++;
            if (timesvelarsDelabialise > 0) {
                document.getElementById("velarsDelabialise-li").style.display = "block";
                document.getElementById("velarsDelabialise-ul").style.display = "block";
            };
        }
    }
};

function lossOfAspiration(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "ʰ") {
            wordArray.splice(i, 1);
            timeslossOfAspiration++;
            if (timeslossOfAspiration > 0) {
                document.getElementById("lossOfAspiration-li").style.display = "block";
                document.getElementById("lossOfAspiration-ul").style.display = "block";
            };
        }
    }
};

/*------------------------------------------------------*/


document.getElementById("generate-language").addEventListener("click", () => {
    selectSoundChanges();
})


export { soundChange, chosenSoundChanges, checkIfWordFinalConsonantsArePossible, wordFinalDevoicingTrueOrFalse, selectSoundChanges, clearPreviousOutput, lenitionFromPlosives1, lenitionFromPlosives2, nonHighVowels, randomNumForWordInitialPlosiveClusters, addedVowels, addedConsonants, voiced, unvoiced, cloneChosen, vowels, selectFricatives, randomNumberForSoundChangeSelection, plosives, consonants, midVowels, highVowels, liquids, allNasalsArray, correctionsForStrings, corrections, frontVowels, backVowels, obstruents, cloneArray, checkIfSoundChangeOptionChecked, countClicks};