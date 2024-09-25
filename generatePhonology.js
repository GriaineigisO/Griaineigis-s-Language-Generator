//@collapse
import { syllablesArray, approximantSyllables, nasalSyllables,fricativeSyllables, resonantSyllables, aspiratedSyllable } from "./allPossibleSyllables.js";
import {cloneArray} from './library.js'

let allNasalsArray = [];
let allLabialPlosivesArray = [];
let allAlveolarPlosivesArray = [];
let allPalatalPlosivesArray = [];
let allVelarPlosivesArray = [];
let allLabialFricativesArray = [];
let allLabioDentalArray = [];
let allUvularPlosivesArray = [];
let allGlottalPlosives = [];
let allPalatalisedConsonants = [];
let allLabialisedConsonants = [];

let allDentalFricatives = [];
let allAlveolarFricativesArray = [];
let allPostAlveolarFricatives = [];
let allpalatalAffricates = [];
let allVelarFricatives = [];
let allUvularFricativesArray = [];
let allPharyngealFricatives = [];
let allGlottalFricatives = [];
let allPalatalFricatives = []

let allAlveolarRhoticsArray = [];
let allLateralsArray = [];
let allLateralFricatives = [];

let allLabialApproximants = [];
let allLabialDentalApproximants = [];
let allpalatalApproximants = [];

let allLabialDentalAffricates = [];
let allLabialAffricates = [];
let allAlveolarAffricates = [];
let allPostAlveolaraffricates = [];
let allVelaraffricatesArray = [];
let allUvularlAffricates = [];
let allGlottalAffricates = [];
let allUvularaffricatesArray

let allAspiratesArray = [];

let allFrontVowels = [];
let allBackVowels = [];
let allCentralVowels = [];

let allHighVowels = [];
let allHighMidVowels = [];
let allMidVowels = [];
let allLowMidVowels = [];
let allLowVowels = [];

let allLongFrontVowels = [];
let allLongBackVowels = [];
let allLongCentralVowels = [];

let allLongHighVowels = [];
let allLongHighMidVowels = [];
let allLongMidVowels = [];
let allLongLowMidVowels = [];
let allLongLowVowels = [];

let allLongConsonants = [];

let consonants = [];
let vowels = [];

let allPossibleSyllablesArray = [];
let selectedSyllables = [];

let chosenVowels = false;
let chosenConsonants = false;
let chosenVowelArray = [];
let chosenConsonantArray = [];
let chosenVowelSpellingsArray = [];
let chosenConsonantSpellingsArray = [];

let randomisedButton = document.getElementById("randomised");
let customisedButton = document.getElementById("customised");
let randomOption = "";
function randomise() {
    randomOption = true;
};
function customise() {
    randomOption = false;
};
randomisedButton.addEventListener("click", randomise);
customisedButton.addEventListener("click", customise);


//restores the phonology to it's default state every time the button is pushed, before applying the below functions
function restoreDefault() {
    //first, the arrays must be emptied
    selectedSyllables = [];
    allNasalsArray = [];
    allLabialPlosivesArray = [];
    allAlveolarPlosivesArray = [];
    allPalatalPlosivesArray = [];
    allVelarPlosivesArray = [];
    allUvularPlosivesArray = [];
    allUvularPlosivesArray = [];
    allLabialFricativesArray = [];
    allLabioDentalArray = [];
    allDentalFricatives = [];
    allAlveolarFricativesArray = [];
    allPostAlveolarFricatives = [];
    allpalatalAffricates = [];
    allVelarFricatives = [];
    allUvularFricativesArray = [];
    allPharyngealFricatives = [];
    allAlveolarRhoticsArray = [];
    allLateralsArray = [];
    allLabialApproximants = [];
    allLabialDentalApproximants = [];
    allpalatalApproximants = [];
    allGlottalPlosives = [];
    allGlottalFricatives = [];
    allLateralFricatives = [];
    allPalatalFricatives = [];
    allUvularaffricatesArray = [];
    allPalatalisedConsonants = [];
    allLabialisedConsonants = [];
    allLabialDentalAffricates = [];
    allLabialAffricates = [];
    allAlveolarAffricates = [];
    allPostAlveolaraffricates = [];
    allVelaraffricatesArray = [];
    allUvularlAffricates = [];
    allGlottalAffricates = [];
    allUvularaffricatesArray = [];
    allFrontVowels = [];
    allBackVowels = [];
    allCentralVowels = [];
    allHighVowels = [];
    allHighMidVowels = [];
    allMidVowels = [];
    allLowMidVowels = [];
    allLowVowels = [];
    allLongFrontVowels = [];
    allLongBackVowels = [];
    allLongCentralVowels = [];
    allLongHighVowels = [];
    allLongHighMidVowels = [];
    allLongMidVowels = [];
    allLongLowMidVowels = [];
    allLongLowVowels = [];
    allLongConsonants = [];
    consonants = [];
    vowels = [];
    selectedSyllables = [];
    allPossibleSyllablesArray = [];
    allAspiratesArray = [];
    chosenVowelArray = [];
    chosenConsonantArray = [];
    chosenVowelSpellingsArray = [];
    chosenConsonantSpellingsArray = [];
    chosenVowels = false;
    chosenConsonants = false;

    //secondly, the default phonemes can be put back in
    allNasalsArray.push("m");
    allNasalsArray.push("n");
    allLabialPlosivesArray.push("p");
    allAlveolarPlosivesArray.push("t");
    allVelarPlosivesArray.push("k");
    allAlveolarFricativesArray.push("s");
    allAlveolarRhoticsArray.push("r");
    allLateralsArray.push("l");


    //the phonology table is set to display style none after after click
    document.getElementById("nasal-list").style.display = "none"
    document.getElementById("plosive-list").style.display = "none"
    document.getElementById("fricative-list").style.display = "none"
     document.getElementById("affricate-list").style.display = "none"
    document.getElementById("rhotic-list").style.display = "none"
    document.getElementById("lateral-list").style.display = "none"
    document.getElementById("approximant-list").style.display = "none"

    document.getElementById("high-vowel-list").style.display = "none"
    document.getElementById("high-mid-vowel-list").style.display = "none"
    document.getElementById("mid-vowel-list").style.display = "none"
    document.getElementById("low-mid-vowel-list").style.display = "none"
    document.getElementById("low-vowel-list").style.display = "none";
    document.getElementById("vowel-quantities").style.display = "none";

    document.getElementById("syllable-example-list").replaceChildren();
}


function checkManuallyEnteredSounds() {
    if(randomOption === false) {
        if(document.getElementById("chosen-vowels").value !== "") {
            chosenVowels = true;
            chosenVowelArray = Array.from(document.getElementById("chosen-vowels").value);

            for(let i = 0; i < chosenVowelArray.length; i++) {
                //removes the whitespaces
                while(chosenVowelArray[i] === " ") {
                    chosenVowelArray.splice(i,1);
                };

                //makes the IPA length marker be part of the same index as the vowel listed before it
                if(chosenVowelArray[i+1] === "ː") {
                    chosenVowelArray[i] = chosenVowelArray[i] + chosenVowelArray[i+1]
                    chosenVowelArray.splice(i+1,1);
                };
            };

            chosenVowelSpellingsArray = cloneArray(chosenVowelArray);
            //now that the array has been cloned to chosenVowelSpellingsArray, notations regarding spelling can now be removed
            for(let i = 0; i < chosenVowelArray.length; i++) {
                //if the spelling is one letter long
                if(chosenVowelArray[i-1] === "(" && chosenVowelArray[i+3] === ")") {
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i-1,1);
                };

                //if the spelling is two letters long
                if(chosenVowelArray[i-1] === "(" && chosenVowelArray[i+4] === ")") {
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i-1,1);
                };

                //if the spelling is three letters long
                if(chosenVowelArray[i-1] === "(" && chosenVowelArray[i+5] === ")") {
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i-1,1);
                };

                //if the spelling is four letters long
                if(chosenVowelArray[i-1] === "(" && chosenVowelArray[i+6] === ")") {
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i+1,1);
                    chosenVowelArray.splice(i-1,1);
                };
            };

            for(let i = 0; i < chosenVowelSpellingsArray.length; i++) {
                //if a spelling for a sound has been chosen, the "=" and then letter are put into the same index as the sound

                //if the spelling is one letter long
                if(chosenVowelSpellingsArray[i-1] === "(" && chosenVowelSpellingsArray[i+3] === ")") {
                    chosenVowelSpellingsArray[i] = chosenVowelSpellingsArray[i] + chosenVowelSpellingsArray[i+1] + chosenVowelSpellingsArray[i+2];

                    chosenVowelSpellingsArray.splice(i-1,1);
                    chosenVowelSpellingsArray.splice(i,1);
                    chosenVowelSpellingsArray.splice(i,1);
                    chosenVowelSpellingsArray.splice(i,1);
                };

                //if the spelling is two letters long
                if(chosenVowelSpellingsArray[i-1] === "(" && chosenVowelSpellingsArray[i+4] === ")") {
                    chosenVowelSpellingsArray[i] = chosenVowelSpellingsArray[i] + chosenVowelSpellingsArray[i+1] + chosenVowelSpellingsArray[i+2] + chosenVowelSpellingsArray[i+3];

                    chosenVowelSpellingsArray.splice(i+1,1);
                    chosenVowelSpellingsArray.splice(i+1,1);
                    chosenVowelSpellingsArray.splice(i+1,1);
                };

                //if the spelling is three letters long
                if(chosenVowelSpellingsArray[i-1] === "(" && chosenVowelSpellingsArray[i+5] === ")") {
                    chosenVowelSpellingsArray[i] = chosenVowelSpellingsArray[i] + chosenVowelSpellingsArray[i+1] + chosenVowelSpellingsArray[i+2] + chosenVowelSpellingsArray[i+3] + chosenVowelSpellingsArray[i+4];

                    chosenVowelSpellingsArray.splice(i+1,1);
                    chosenVowelSpellingsArray.splice(i+1,1);
                    chosenVowelSpellingsArray.splice(i+1,1);
                    chosenVowelSpellingsArray.splice(i+1,1);
                };

                //if the spelling is four letters long
                if(chosenVowelSpellingsArray[i-1] === "(" && chosenVowelSpellingsArray[i+6] === ")") {
                    chosenVowelSpellingsArray[i] = chosenVowelSpellingsArray[i] + chosenVowelSpellingsArray[i+1] + chosenVowelSpellingsArray[i+2] + chosenVowelSpellingsArray[i+3] + chosenVowelSpellingsArray[i+4] + chosenVowelSpellingsArray[i+5];

                    chosenVowelSpellingsArray.splice(i+1,1);
                    chosenVowelSpellingsArray.splice(i+1,1);
                    chosenVowelSpellingsArray.splice(i+1,1);
                    chosenVowelSpellingsArray.splice(i+1,1);
                    chosenVowelSpellingsArray.splice(i+1,1);
                };
            };
        };
        if(document.getElementById("chosen-consonants").value !== "") {
            chosenConsonants = true;
            chosenConsonantArray = Array.from(document.getElementById("chosen-consonants").value);
            for(let i = 0; i < chosenConsonantArray.length; i++) {  

                //puts two superscript characters in the same index as their host letter
                function mergeTwoSuperscripts(superscript1, superscript2) {
                    if (chosenConsonantArray[i] === superscript1 && chosenConsonantArray[i+1] === "-" && chosenConsonantArray[i+2] === superscript2 && chosenConsonantArray[i-1] === "-") {
                        chosenConsonantArray[i-2] = chosenConsonantArray[i-2] + chosenConsonantArray[i] + chosenConsonantArray[i+2];
                        chosenConsonantArray.splice(i-1,1);
                        chosenConsonantArray.splice(i,1);
                        chosenConsonantArray.splice(i,1);
                        chosenConsonantArray.splice(i-1,1);
                    }
                };
                mergeTwoSuperscripts("ʷ", "ʰ");
                mergeTwoSuperscripts("ʰ", "ʲ");

                //puts superscript characters in the same index as their host letter
                function mergeSuperscripts(superscript) {
                    if (chosenConsonantArray[i] === superscript && chosenConsonantArray[i-1] === "-") {
                        chosenConsonantArray[i-2] = chosenConsonantArray[i-2] + chosenConsonantArray[i];
                        chosenConsonantArray.splice(i-1,2);
                    } else if (chosenConsonantArray[i] === superscript && chosenConsonantArray[i+1] === "-") {
                        chosenConsonantArray[i+2] = chosenConsonantArray[i] + chosenConsonantArray[i+2];
                        chosenConsonantArray.splice(i,2);
                    };
                };
                mergeSuperscripts("ʰ");
                mergeSuperscripts("ʷ");
                mergeSuperscripts("ʲ");


                //characters plus superscripts are then converted to single characters to give them a length of 1
                function convertCharPlusSuperscripts(letter, newLetter) {
                    if(chosenConsonantArray[i-2] === letter) {
                        chosenConsonantArray[i-2] = newLetter;
                    };
                };
                convertCharPlusSuperscripts("pʰʲ", "Ì");
                convertCharPlusSuperscripts("bʰʲ", "Í");
                convertCharPlusSuperscripts("tʰʲ", "Î");
                convertCharPlusSuperscripts("dʰʲ", "Ï");
                convertCharPlusSuperscripts("kʰʲ", "Ð");
                convertCharPlusSuperscripts("gʰʲ", "Ñ");
                convertCharPlusSuperscripts("rʰʲ", "Ò");
                convertCharPlusSuperscripts("lʰʲ", "Ó");
                convertCharPlusSuperscripts("sʰʲ", "Ô");
                convertCharPlusSuperscripts("zʰʲ", "Õ");
                convertCharPlusSuperscripts("xʰʲ", "Ö");
                convertCharPlusSuperscripts("ɣʰʲ", "Ø");
                convertCharPlusSuperscripts("fʰʲ", "Ù");
                convertCharPlusSuperscripts("vʰʲ", "Ú");
                convertCharPlusSuperscripts("ɸʰʲ", "Û");
                convertCharPlusSuperscripts("βʰʲ", "Ü");
                convertCharPlusSuperscripts("θʰʲ", "Ý");
                convertCharPlusSuperscripts("ðʰʲ", "Þ");
                convertCharPlusSuperscripts("ʃʰʲ", "Ƃ");
                convertCharPlusSuperscripts("ʒʰʲ", "ƃ");
                convertCharPlusSuperscripts("ʂʰʲ", "Ƅ");
                convertCharPlusSuperscripts("ʐʰʲ", "ƅ");
                convertCharPlusSuperscripts("χʰʲ", "Ɔ");
                convertCharPlusSuperscripts("ʁʰʲ", "Ƈ");
                convertCharPlusSuperscripts("ɬʰʲ", "ƈ");
                convertCharPlusSuperscripts("ɮʰʲ", "Ɖ");
                convertCharPlusSuperscripts("qʰʲ", "Ɗ");
                convertCharPlusSuperscripts("ɢʰʲ", "Ƌ");
                convertCharPlusSuperscripts("ʔʰʲ", "ƌ");
                convertCharPlusSuperscripts("cʰʲ", "Ƒ");
                convertCharPlusSuperscripts("ɟʰʲ", "ƒ");
                convertCharPlusSuperscripts("ʧʰʲ", "Ɠ");
                convertCharPlusSuperscripts("ʤʰʲ", "Ɣ");
                convertCharPlusSuperscripts("ʈʰʲ", "д");
                convertCharPlusSuperscripts("ɖʰʲ", "е");
                convertCharPlusSuperscripts("ɽʰʲ", "ж");
                
                convertCharPlusSuperscripts("pʰ", "P");
                convertCharPlusSuperscripts("bʰ", "B");
                convertCharPlusSuperscripts("tʰ", "T");
                convertCharPlusSuperscripts("dʰ", "D");
                convertCharPlusSuperscripts("kʰ", "K");
                convertCharPlusSuperscripts("gʰ", "G");
                convertCharPlusSuperscripts("ʈʰ", "з");
                convertCharPlusSuperscripts("ɖʰ", "и");
                convertCharPlusSuperscripts("ɽʰ", "й");

                convertCharPlusSuperscripts("ʰp", "1");
                convertCharPlusSuperscripts("ʰb", "2");
                convertCharPlusSuperscripts("ʰt", "3");
                convertCharPlusSuperscripts("ʰd", "4");
                convertCharPlusSuperscripts("ʰk", "5");
                convertCharPlusSuperscripts("ʰg", "6");
                convertCharPlusSuperscripts("pʲ", "!");
                convertCharPlusSuperscripts("bʲ", "£");
                convertCharPlusSuperscripts("tʲ", "$");
                convertCharPlusSuperscripts("dʲ", "%");
                convertCharPlusSuperscripts("kʲ", "^");
                convertCharPlusSuperscripts("gʲ", "&");
                convertCharPlusSuperscripts("rʲ", "*");
                convertCharPlusSuperscripts("lʲ", "J");
                convertCharPlusSuperscripts("sʲ", "K");
                convertCharPlusSuperscripts("zʲ", "#");
                convertCharPlusSuperscripts("xʲ", "@");
                convertCharPlusSuperscripts("ɣʲ", "}");
                convertCharPlusSuperscripts("fʲ", "{");
                convertCharPlusSuperscripts("vʲ", "+");
                convertCharPlusSuperscripts("ɸʲ", "-");
                convertCharPlusSuperscripts("βʲ", ">");
                convertCharPlusSuperscripts("θʲ", "<");
                convertCharPlusSuperscripts("ðʲ", "]");
                convertCharPlusSuperscripts("hʲ", "[");
                convertCharPlusSuperscripts("ɦʲ", "=");
                convertCharPlusSuperscripts("ħʲ", "?");
                convertCharPlusSuperscripts("ʕʲ", "Q");
                convertCharPlusSuperscripts("ʃʲ", "W");
                convertCharPlusSuperscripts("ʒʲ", "E");
                convertCharPlusSuperscripts("ʂʲ", "R");
                convertCharPlusSuperscripts("ʐʲ", "F");
                convertCharPlusSuperscripts("χʲ", "Y");
                convertCharPlusSuperscripts("ʁʲ", "U");
                convertCharPlusSuperscripts("ɬʲ", "I");
                convertCharPlusSuperscripts("ɮʲ", "O");
                convertCharPlusSuperscripts("qʲ", "H");
                convertCharPlusSuperscripts("ɮʲ", "S");
                convertCharPlusSuperscripts("ʔʲ", "A");
                convertCharPlusSuperscripts("mʲ", "M");
                convertCharPlusSuperscripts("nʲ", "N");
                convertCharPlusSuperscripts("ŋʲ", "X");
                convertCharPlusSuperscripts("ʔʲ", "Ã");
                convertCharPlusSuperscripts("cʲ", "Ä");
                convertCharPlusSuperscripts("ɟʲ", "Å");
                convertCharPlusSuperscripts("ʧʲ", "Æ");
                convertCharPlusSuperscripts("ʤʲ", "Ç");
                convertCharPlusSuperscripts("ʈʲ", "ϰ");
                convertCharPlusSuperscripts("ɖʲ", "ϱ");
                convertCharPlusSuperscripts("ɽʲ", "ϡ");
                convertCharPlusSuperscripts("ɭʲ", "Ϩ");


                convertCharPlusSuperscripts("pʷ", "C");
                convertCharPlusSuperscripts("bʷ", "V");
                convertCharPlusSuperscripts("tʷ", "Z");
                convertCharPlusSuperscripts("dʷ", "L");
                convertCharPlusSuperscripts("kʷ", ";");
                convertCharPlusSuperscripts("gʷ", "¡");
                convertCharPlusSuperscripts("rʷ", "¢");
                convertCharPlusSuperscripts("lʷ", "¤");
                convertCharPlusSuperscripts("sʷ", "¥");
                convertCharPlusSuperscripts("zʷ", "¦");
                convertCharPlusSuperscripts("xʷ", "§");
                convertCharPlusSuperscripts("ɣʷ", "¨");
                convertCharPlusSuperscripts("fʷ", "©");
                convertCharPlusSuperscripts("vʷ", "ª");
                convertCharPlusSuperscripts("ɸʷ", "«");
                convertCharPlusSuperscripts("βʷ", "¬");
                convertCharPlusSuperscripts("θʷ", "®");
                convertCharPlusSuperscripts("ðʷ", "¯");
                convertCharPlusSuperscripts("hʷ", "°");
                convertCharPlusSuperscripts("ɦʷ", "±");
                convertCharPlusSuperscripts("ħʷ", "²");
                convertCharPlusSuperscripts("ʕʷ", "³");
                convertCharPlusSuperscripts("ʃʷ", "´");
                convertCharPlusSuperscripts("ʒʷ", "µ");
                convertCharPlusSuperscripts("ʂʷ", "¶");
                convertCharPlusSuperscripts("ʐʷ", "·");
                convertCharPlusSuperscripts("χʷ", "¸");
                convertCharPlusSuperscripts("ʁʷ", "¹");
                convertCharPlusSuperscripts("ɬʷ", "»");
                convertCharPlusSuperscripts("ɮʷ", "¼");
                convertCharPlusSuperscripts("qʷ", "½");
                convertCharPlusSuperscripts("ɢʷ", "¾");
                convertCharPlusSuperscripts("ʔʷ", "¿");
                convertCharPlusSuperscripts("mʷ", "À");
                convertCharPlusSuperscripts("nʷ", "Á");
                convertCharPlusSuperscripts("ŋʷ", "Â");
                convertCharPlusSuperscripts("cʷ", "È");
                convertCharPlusSuperscripts("ɟʷ", "É");
                convertCharPlusSuperscripts("ʧʷ", "Ê");
                convertCharPlusSuperscripts("ʤʷ", "Ë");
                convertCharPlusSuperscripts("ʈʷ", "ϐ");
                convertCharPlusSuperscripts("ɖʷ", "ϓ");
                convertCharPlusSuperscripts("ɽʷ", "ϥ");
                convertCharPlusSuperscripts("ɭʷ", "Ϣ");
                convertCharPlusSuperscripts("ʎʷ", "ϗ");

                convertCharPlusSuperscripts("pʷʰ", "ƕ");
                convertCharPlusSuperscripts("bʷʰ", "Ɩ");
                convertCharPlusSuperscripts("tʷʰ", "Ɨ");
                convertCharPlusSuperscripts("dʷʰ", "Ƙ");
                convertCharPlusSuperscripts("kʷʰ", "ƙ");
                convertCharPlusSuperscripts("gʷʰ", "ƚ");
                convertCharPlusSuperscripts("rʷʰ", "ƛ");
                convertCharPlusSuperscripts("lʷʰ", "Ɯ");
                convertCharPlusSuperscripts("sʷʰ", "Ɲ");
                convertCharPlusSuperscripts("zʷʰ", "Ɵ");
                convertCharPlusSuperscripts("xʷʰ", "Ơ");
                convertCharPlusSuperscripts("ɣʷʰ", "ơ");
                convertCharPlusSuperscripts("fʷʰ", "Ƣ");
                convertCharPlusSuperscripts("vʷʰ", "ƣ");
                convertCharPlusSuperscripts("ɸʷʰ", "Ƥ");
                convertCharPlusSuperscripts("βʷʰ", "ƥ");
                convertCharPlusSuperscripts("θʷʰ", "Ʀ");
                convertCharPlusSuperscripts("ðʷʰ", "Ƨ");
                convertCharPlusSuperscripts("ʃʷʰ", "Ƭ");
                convertCharPlusSuperscripts("ʒʷʰ", "ƭ");
                convertCharPlusSuperscripts("ʂʷʰ", "Ʈ");
                convertCharPlusSuperscripts("ʐʷʰ", "Ư");
                convertCharPlusSuperscripts("χʷʰ", "ư");
                convertCharPlusSuperscripts("ʁʷʰ", "Ʊ");
                convertCharPlusSuperscripts("ɬʷʰ", "Ʋ");
                convertCharPlusSuperscripts("ɮʷʰ", "Ƴ");
                convertCharPlusSuperscripts("qʷʰ", "ƴ");
                convertCharPlusSuperscripts("ɢʷʰ", "Ƶ");
                convertCharPlusSuperscripts("ʔʷʰ", "ƶ");
                convertCharPlusSuperscripts("cʷʰ", "ƺ");
                convertCharPlusSuperscripts("ɟʷʰ", "ƻ");
                convertCharPlusSuperscripts("ʧʷʰ", "Ƽ");
                convertCharPlusSuperscripts("ʤʷʰ", "ƽ");
                convertCharPlusSuperscripts("ʈʷʰ", "а");
                convertCharPlusSuperscripts("ɖʷʰ", "б");
                convertCharPlusSuperscripts("ɽʷʰ", "в");

                //removes the whitespaces
                while(chosenConsonantArray[i] === " ") {
                    chosenConsonantArray.splice(i,1);
                };

                //makes the IPA length marker be part of the same index as the vowel listed before it
                if(chosenConsonantArray[i+1] === "ː") {
                    chosenConsonantArray[i] = chosenConsonantArray[i] + chosenConsonantArray[i+1]
                    chosenConsonantArray.splice(i+1,1);
                };
            };

            chosenConsonantSpellingsArray = cloneArray(chosenConsonantArray);
            //now that the array has been cloned to chosenConsonantArray, notations regarding spelling can now be removed
            for(let i = 0; i < chosenConsonantArray.length; i++) {
                //if the spelling is one letter long
                if(chosenConsonantArray[i-1] === "(" && chosenConsonantArray[i+3] === ")") {
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i-1,1);
                };

                //if the spelling is two letters long
                if(chosenConsonantArray[i-1] === "(" && chosenConsonantArray[i+4] === ")") {
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i-1,1);
                };

                //if the spelling is three letters long
                if(chosenConsonantArray[i-1] === "(" && chosenConsonantArray[i+5] === ")") {
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i-1,1);
                };

                //if the spelling is four letters long
                if(chosenConsonantArray[i-1] === "(" && chosenConsonantArray[i+6] === ")") {
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i+1,1);
                    chosenConsonantArray.splice(i-1,1);
                };
            };

            for(let i = 0; i < chosenConsonantSpellingsArray.length; i++) {
                //if a spelling for a sound has been chosen, the "=" and then letter are put into the same index as the sound

                //if the spelling is one letter long
                if(chosenConsonantSpellingsArray[i-1] === "(" && chosenConsonantSpellingsArray[i+3] === ")") {
                    chosenConsonantSpellingsArray[i] = chosenConsonantSpellingsArray[i] + chosenConsonantSpellingsArray[i+1] + chosenConsonantSpellingsArray[i+2];

                    chosenConsonantSpellingsArray.splice(i-1,1);
                    chosenConsonantSpellingsArray.splice(i,1);
                    chosenConsonantSpellingsArray.splice(i,1);
                    chosenConsonantSpellingsArray.splice(i,1);
                };

                //if the spelling is two letters long
                if(chosenConsonantSpellingsArray[i-1] === "(" && chosenConsonantSpellingsArray[i+4] === ")") {
                    chosenConsonantSpellingsArray[i] = chosenConsonantSpellingsArray[i] + chosenConsonantSpellingsArray[i+1] + chosenConsonantSpellingsArray[i+2] + chosenConsonantSpellingsArray[i+3];

                    chosenConsonantSpellingsArray.splice(i+1,1);
                    chosenConsonantSpellingsArray.splice(i+1,1);
                    chosenConsonantSpellingsArray.splice(i+1,1);
                };

                //if the spelling is three letters long
                if(chosenConsonantSpellingsArray[i-1] === "(" && chosenConsonantSpellingsArray[i+5] === ")") {
                    chosenConsonantSpellingsArray[i] = chosenConsonantSpellingsArray[i] + chosenConsonantSpellingsArray[i+1] + chosenConsonantSpellingsArray[i+2] + chosenConsonantSpellingsArray[i+3] + chosenConsonantSpellingsArray[i+4];

                    chosenConsonantSpellingsArray.splice(i+1,1);
                    chosenConsonantSpellingsArray.splice(i+1,1);
                    chosenConsonantSpellingsArray.splice(i+1,1);
                    chosenConsonantSpellingsArray.splice(i+1,1);
                };

                //if the spelling is four letters long
                if(chosenConsonantSpellingsArray[i-1] === "(" && chosenConsonantSpellingsArray[i+6] === ")") {
                    chosenConsonantSpellingsArray[i] = chosenConsonantSpellingsArray[i] + chosenConsonantSpellingsArray[i+1] + chosenConsonantSpellingsArray[i+2] + chosenConsonantSpellingsArray[i+3] + chosenConsonantSpellingsArray[i+4] + chosenConsonantSpellingsArray[i+5];

                    chosenConsonantSpellingsArray.splice(i+1,1);
                    chosenConsonantSpellingsArray.splice(i+1,1);
                    chosenConsonantSpellingsArray.splice(i+1,1);
                    chosenConsonantSpellingsArray.splice(i+1,1);
                    chosenConsonantSpellingsArray.splice(i+1,1);
                };
            };
        };
    };
};

let randomGeminationNum = 0;
let randomLengthNum = 0;
function makeRandomNumbers() {
    randomGeminationNum = Math.floor(Math.random() * 3);
    randomLengthNum = Math.floor(Math.random() * 8);
}

/*---CHOOSE SECTION----*/
//The functions here will decide if the language has a set of consonants based on Place of Articulation, such a retroflex, palatal etc. The very core PoA like velar, labial and alveolar will be chosen by default, as it is very rare for a language to lack those

function selectConsonants() {
    if(randomOption|| document.getElementById("chosen-consonants").value.length === 0) {
        randomlyChooseConsonants();
    } else if (document.getElementById("chosen-consonants").value.length > 0) {
        //default consonants are removed
        allNasalsArray.length = 0;
        allNasalsArray.length = 0;
        allLabialPlosivesArray.length = 0;
        allAlveolarPlosivesArray.length = 0;
        allVelarPlosivesArray.length = 0;
        allAlveolarFricativesArray.length = 0;
        allAlveolarRhoticsArray.length = 0;
        allLateralsArray.length = 0;

        if(chosenConsonantArray.includes("p")) {
            allLabialPlosivesArray.push("p");
        };
        if(chosenConsonantArray.includes("pː")) {
            allLongConsonants.push("pː");
            allLabialPlosivesArray.push("pː");
        };
        if(chosenConsonantArray.includes("b")) {
            allLabialPlosivesArray.push("b");
        };
        if(chosenConsonantArray.includes("bː")) {
            allLongConsonants.push("bː");
            allLabialPlosivesArray.push("bː");
        };
        if(chosenConsonantArray.includes("t")) {
            allAlveolarPlosivesArray.push("t");
        };
        if(chosenConsonantArray.includes("tː")) {
            allAlveolarPlosivesArray.push("tː");
            allLongConsonants.push("tː");
        };
        if(chosenConsonantArray.includes("d")) {
            allAlveolarPlosivesArray.push("d");
        };
        if(chosenConsonantArray.includes("dː")) {
            allAlveolarPlosivesArray.push("dː");
            allLongConsonants.push("dː");
        };
        if(chosenConsonantArray.includes("k")) {
            allVelarPlosivesArray.push("k");
        };
        if(chosenConsonantArray.includes("kː")) {
            allVelarPlosivesArray.push("kː");
            allLongConsonants.push("kː");
        };
        if(chosenConsonantArray.includes("g")) {
            allVelarPlosivesArray.push("g");
        };
        if(chosenConsonantArray.includes("gː")) {
            allVelarPlosivesArray.push("gː");
            allLongConsonants.push("gː");
        };
        if(chosenConsonantArray.includes("c")) {
            allPalatalPlosivesArray.push("c");
        };
        if(chosenConsonantArray.includes("cː")) {
            allPalatalPlosivesArray.push("cː");
            allLongConsonants.push("cː");
        };
        if(chosenConsonantArray.includes("ɟ")) {
            allPalatalPlosivesArray.push("ɟ");
        };
        if(chosenConsonantArray.includes("ɟː")) {
            allPalatalPlosivesArray.push("ɟː");
            allLongConsonants.push("ɟː");
        };
        if(chosenConsonantArray.includes("ʔ")) {
            allGlottalPlosives.push("ʔ");
        };
        if(chosenConsonantArray.includes("ʔː")) {
            allGlottalPlosives.push("ʔː");
            allLongConsonants.push("ʔː");
        };
        if(chosenConsonantArray.includes("q")) {
            allUvularPlosivesArray.push("q");
        };
        if(chosenConsonantArray.includes("qː")) {
            allUvularPlosivesArray.push("qː");
            allLongConsonants.push("qː");
        };
        if(chosenConsonantArray.includes("ɢ")) {
            allUvularPlosivesArray.push("ɢ");
        };
        if(chosenConsonantArray.includes("ɢː")) {
            allUvularPlosivesArray.push("ɢː");
            allLongConsonants.push("ɢː");
        };
        if(chosenConsonantArray.includes("ʈ")) {
            allAlveolarPlosivesArray.push("ʈ");
        };
        if(chosenConsonantArray.includes("P")) {
            allLabialPlosivesArray.push("pʰ");
            allAspiratesArray.push("pʰ");
        };
        if(chosenConsonantArray.includes("B")) {
            allLabialPlosivesArray.push("bʰ");
            allAspiratesArray.push("bʰ");
        };
        if(chosenConsonantArray.includes("T")) {
            allAlveolarPlosivesArray.push("tʰ");
            allAspiratesArray.push("tʰ");
        };
        if(chosenConsonantArray.includes("D")) {
            allAlveolarPlosivesArray.push("dʰ");
            allAspiratesArray.push("dʰ");
        };
        if(chosenConsonantArray.includes("K")) {
            allVelarPlosivesArray.push("kʰ");
            allAspiratesArray.push("kʰ");
        };
        if(chosenConsonantArray.includes("G")) {
            allVelarPlosivesArray.push("gʰ");
            allAspiratesArray.push("gʰ");
        };
        if(chosenConsonantArray.includes("з")) {
            allAlveolarPlosivesArray.push("ʈʰ");
            allAspiratesArray.push("ʈʰ");
        };
        if(chosenConsonantArray.includes("и")) {
            allAlveolarPlosivesArray.push("ɖʰ");
            allAspiratesArray.push("ɖʰ");
        };
        if(chosenConsonantArray.includes("й")) {
            allAlveolarRhoticsArray.push("ɽʰ");
            allAspiratesArray.push("ɽʰ");
        };
        if(chosenConsonantArray.includes("1")) {
            allLabialPlosivesArray.push("ʰp");
            allAspiratesArray.push("ʰp");
        };
        if(chosenConsonantArray.includes("2")) {
            allLabialPlosivesArray.push("ʰb");
            allAspiratesArray.push("ʰb");
        };
        if(chosenConsonantArray.includes("3")) {
            allAlveolarPlosivesArray.push("ʰt");
            allAspiratesArray.push("ʰt");
        };
        if(chosenConsonantArray.includes("4")) {
            allAlveolarPlosivesArray.push("ʰd");
            allAspiratesArray.push("ʰd");
        };
        if(chosenConsonantArray.includes("5")) {
            allVelarPlosivesArray.push("ʰk");
            allAspiratesArray.push("ʰk");
        };
        if(chosenConsonantArray.includes("6")) {
            allVelarPlosivesArray.push("ʰg");
            allAspiratesArray.push("ʰg");
        };
        if(chosenConsonantArray.includes("!")) {
            allLabialPlosivesArray.push("pʲ");
            allPalatalisedConsonants.push("pʲ");
        };
        if(chosenConsonantArray.includes("£")) {
            allLabialPlosivesArray.push("bʲ");
            allPalatalisedConsonants.push("bʲ");
        };
        if(chosenConsonantArray.includes("$")) {
            allAlveolarPlosivesArray.push("tʲ");
            allPalatalisedConsonants.push("tʲ");
        };
        if(chosenConsonantArray.includes("%")) {
            allAlveolarPlosivesArray.push("dʲ");
            allPalatalisedConsonants.push("dʲ");
        };
        if(chosenConsonantArray.includes("^")) {
            allVelarPlosivesArray.push("kʲ");
            allPalatalisedConsonants.push("kʲ");
        };
        if(chosenConsonantArray.includes("&")) {
            allVelarPlosivesArray.push("gʲ");
            allPalatalisedConsonants.push("gʲ");
        };
        if(chosenConsonantArray.includes("*")) {
            allAlveolarRhoticsArray.push("rʲ");
            allPalatalisedConsonants.push("rʲ");
        };
        if(chosenConsonantArray.includes("J")) {
            allLateralsArray.push("lʲ");
            allPalatalisedConsonants.push("lʲ");
        };
        if(chosenConsonantArray.includes("K")) {
            allAlveolarAffricates.push("sʲ");
            allPalatalisedConsonants.push("sʲ");
        };
        if(chosenConsonantArray.includes("#")) {
            allAlveolarAffricates.push("zʲ");
            allPalatalisedConsonants.push("zʲ");
        };
        if(chosenConsonantArray.includes("ϰ")) {
            allAlveolarPlosivesArray.push("ʈʲ");
            allPalatalisedConsonants.push("ʈʲ");
        };
        if(chosenConsonantArray.includes("ϱ")) {
            allAlveolarPlosivesArray.push("ɖʲ");
            allPalatalisedConsonants.push("ɖʲ");
        };
        if(chosenConsonantArray.includes("ϡ")) {
            allAlveolarRhoticsArray.push("ɽʲ");
            allPalatalisedConsonants.push("ɽʲ");
        };
        if(chosenConsonantArray.includes("Ϩ")) {
            allLateralsArray.push("ɭʲ");
            allPalatalisedConsonants.push("ɭʲ");
        };
        if(chosenConsonantArray.includes("@")) {
            allVelarFricatives.push("xʲ");
            allPalatalisedConsonants.push("xʲ");
        };
        if(chosenConsonantArray.includes("}")) {
            allVelarFricatives.push("ɣʲ");
            allPalatalisedConsonants.push("ɣʲ");
        };
        if(chosenConsonantArray.includes("{")) {
            allLabioDentalArray.push("fʲ");
            allPalatalisedConsonants.push("fʲ");
        };
        if(chosenConsonantArray.includes("+")) {
            allLabioDentalArray.push("vʲ");
            allPalatalisedConsonants.push("vʲ");
        };
        if(chosenConsonantArray.includes("-")) {
            allLabialFricativesArray.push("ɸʲ");
            allPalatalisedConsonants.push("ɸʲ");
        };
        if(chosenConsonantArray.includes(">")) {
            allLabialFricativesArray.push("βʲ");
            allPalatalisedConsonants.push("βʲ");
        };
        if(chosenConsonantArray.includes("<")) {
            allDentalFricatives.push("θʲ");
            allPalatalisedConsonants.push("θʲ");
        };
        if(chosenConsonantArray.includes("]")) {
            allDentalFricatives.push("ðʲ");
            allPalatalisedConsonants.push("ðʲ");
        };
        if(chosenConsonantArray.includes("[")) {
            allGlottalFricatives.push("hʲ");
            allPalatalisedConsonants.push("hʲ");
        };
        if(chosenConsonantArray.includes("=")) {
            allGlottalFricatives.push("ɦʲ");
            allPalatalisedConsonants.push("ɦʲ");
        };
        if(chosenConsonantArray.includes("?")) {
            allPharyngealFricatives.push("ħʲ");
            allPalatalisedConsonants.push("ħʲ");
        };
        if(chosenConsonantArray.includes("Q")) {
            allPalatalPlosivesArray.push("cʲ");
            allPalatalisedConsonants.push("cʲ");
        };
        if(chosenConsonantArray.includes("W")) {
            allPostAlveolarFricatives.push("ʃʲ");
            allPalatalisedConsonants.push("ʃʲ");
        };
        if(chosenConsonantArray.includes("E")) {
            allPostAlveolarFricatives.push("ʒʲ");
            allPalatalisedConsonants.push("ʒʲ");
        };
        if(chosenConsonantArray.includes("R")) {
            allAlveolarFricativesArray.push("ʂʲ");
            allPalatalisedConsonants.push("ʂʲ");
        };
        if(chosenConsonantArray.includes("F")) {
            allAlveolarFricativesArray.push("ʐʲ");
            allPalatalisedConsonants.push("ʐʲ");
        };
        if(chosenConsonantArray.includes("Y")) {
            allUvularFricativesArray.push("χʲ");
            allPalatalisedConsonants.push("χʲ");
        };
        if(chosenConsonantArray.includes("U")) {
            allUvularFricativesArray.push("ʁʲ");
            allPalatalisedConsonants.push("ʁʲ");
        };
        if(chosenConsonantArray.includes("I")) {
            allLateralFricatives.push("ɬʲ");
            allPalatalisedConsonants.push("ɬʲ");
        };
        if(chosenConsonantArray.includes("O")) {
            allLateralFricatives.push("ɮʲ");
            allPalatalisedConsonants.push("ɮʲ");
        };
        if(chosenConsonantArray.includes("H")) {
            allUvularPlosivesArray.push("qʲ");
            allPalatalisedConsonants.push("qʲ");
        };
        if(chosenConsonantArray.includes("S")) {
            allUvularPlosivesArray.push("ɢʲ");
            allPalatalisedConsonants.push("ɢʲ");
        };
        if(chosenConsonantArray.includes("C")) {
            allLabialPlosivesArray.push("pʷ");
            allLabialisedConsonants.push("pʷ");
        };
        if(chosenConsonantArray.includes("V")) {
            allLabialPlosivesArray.push("bʷ");
            allLabialisedConsonants.push("bʷ");
        };
        if(chosenConsonantArray.includes("Z")) {
            allAlveolarPlosivesArray.push("tʷ");
            allLabialisedConsonants.push("tʷ");
        };
        if(chosenConsonantArray.includes("L")) {
            allAlveolarPlosivesArray.push("dʷ");
            allLabialisedConsonants.push("dʷ");
        };
        if(chosenConsonantArray.includes(";")) {
            allVelarPlosivesArray.push("kʷ");
            allLabialisedConsonants.push("kʷ");
        };
        if(chosenConsonantArray.includes("¡")) {
            allVelarPlosivesArray.push("gʷ");
            allLabialisedConsonants.push("gʷ");
        };
        if(chosenConsonantArray.includes("¢")) {
            allAlveolarRhoticsArray.push("rʷ");
            allLabialisedConsonants.push("rʷ");
        };
        if(chosenConsonantArray.includes("¤")) {
            allLateralsArray.push("lʷ");
            allLabialisedConsonants.push("lʷ");
        };
        if(chosenConsonantArray.includes("¥")) {
            allAlveolarFricativesArray.push("sʷ");
            allLabialisedConsonants.push("sʷ");
        }; 
        if(chosenConsonantArray.includes("¦")) {
            allAlveolarFricativesArray.push("zʷ");
            allLabialisedConsonants.push("zʷ");
        }; 
        if(chosenConsonantArray.includes("§")) {
            allVelarFricatives.push("xʷ");
            allLabialisedConsonants.push("xʷ");
        };
        if(chosenConsonantArray.includes("¨")) {
            allVelarFricatives.push("ɣʷ");
            allLabialisedConsonants.push("ɣʷ");
        }; 
        if(chosenConsonantArray.includes("©")) {
            allLabioDentalArray.push("fʷ");
            allLabialisedConsonants.push("fʷ");
        }; 
        if(chosenConsonantArray.includes("ª")) {
            allLabioDentalArray.push("vʷ");
            allLabialisedConsonants.push("vʷ");
        }; 
        if(chosenConsonantArray.includes("«")) {
            allLabialFricativesArray.push("ɸʷ");
            allLabialisedConsonants.push("ɸʷ");
        }; 
        if(chosenConsonantArray.includes("¬")) {
            allLabialFricativesArray.push("βʷ");
            allLabialisedConsonants.push("βʷ");
        }; 
        if(chosenConsonantArray.includes("®")) {
            allDentalFricatives.push("θʷ");
            allLabialisedConsonants.push("θʷ");
        }; 
        if(chosenConsonantArray.includes("ϐ")) {
            allAlveolarPlosivesArray.push("ʈʷ");
            allLabialisedConsonants.push("ʈʷ");
        }; 
        if(chosenConsonantArray.includes("ϓ")) {
            allAlveolarPlosivesArray.push("ɖʷ");
            allLabialisedConsonants.push("ɖʷ");
        }; 
        if(chosenConsonantArray.includes("ϥ")) {
            allAlveolarRhoticsArray.push("ɽʷ");
            allLabialisedConsonants.push("ɽʷ");
        }; 
        if(chosenConsonantArray.includes("Ϣ")) {
            allLateralsArray.push("ɭʷ");
            allLabialisedConsonants.push("ɭʷ");
        }; 
        if(chosenConsonantArray.includes("ϗ")) {
            allDentalFricatives.push("ʎʷ");
            allLabialisedConsonants.push("ʎʷ");
        }; 
        if(chosenConsonantArray.includes("¯")) {
            allDentalFricatives.push("ðʷ");
            allLabialisedConsonants.push("ðʷ");
        }; 
        if(chosenConsonantArray.includes("°")) {
            allGlottalFricatives.push("hʷ");
            allLabialisedConsonants.push("hʷ");
        };
        if(chosenConsonantArray.includes("±")) {
            allGlottalFricatives.push("ɦʷ");
            allLabialisedConsonants.push("ɦʷ");
        }; 
        if(chosenConsonantArray.includes("²")) {
            allPharyngealFricatives.push("ħʷ");
            allLabialisedConsonants.push("ħʷ");
        };
        if(chosenConsonantArray.includes("³")) {
            allPharyngealFricatives.push("ʕʷ");
            allLabialisedConsonants.push("ʕʷ");
        }; 
        if(chosenConsonantArray.includes("´")) {
            allPostAlveolarFricatives.push("ʃʷ");
            allLabialisedConsonants.push("ʃʷ");
        }; 
        if(chosenConsonantArray.includes("µ")) {
            allPostAlveolarFricatives.push("ʒʷ");
            allLabialisedConsonants.push("ʒʷ");
        }; 
        if(chosenConsonantArray.includes("¶")) {
            allAlveolarFricativesArray.push("ʂʷ");
            allLabialisedConsonants.push("ʂʷ");
        };
        if(chosenConsonantArray.includes("·")) {
            allAlveolarFricativesArray.push("ʐʷ");
            allLabialisedConsonants.push("ʐʷ");
        }; 
        if(chosenConsonantArray.includes("¸")) {
            allUvularFricativesArray.push("χʷ");
            allLabialisedConsonants.push("χʷ");
        }; 
        if(chosenConsonantArray.includes("¹")) {
            allUvularFricativesArray.push("ʁʷ");
            allLabialisedConsonants.push("ʁʷ");
        }; 
        if(chosenConsonantArray.includes("»")) {
            allLateralFricatives.push("ɬʷ");
            allLabialisedConsonants.push("ɬʷ");
        }; 
        if(chosenConsonantArray.includes("¼")) {
            allLateralFricatives.push("ɮʷ");
            allLabialisedConsonants.push("ɮʷ");
        }; 
        if(chosenConsonantArray.includes("½")) {
            allLateralFricatives.push("qʷ");
            allLabialisedConsonants.push("qʷ");
        }; 
        if(chosenConsonantArray.includes("¾")) {
            allLateralFricatives.push("ɢʷ");
            allLabialisedConsonants.push("ɢʷ");
        }; 
        if(chosenConsonantArray.includes("¿")) {
            allLateralFricatives.push("ʔʷ");
            allLabialisedConsonants.push("ʔʷ");
        }; 
        if(chosenConsonantArray.includes("À")) {
            allLateralFricatives.push("mʷ");
            allLabialisedConsonants.push("mʷ");
        }; 
        if(chosenConsonantArray.includes("Á")) {
            allLateralFricatives.push("nʷ");
            allLabialisedConsonants.push("nʷ");
        }; 
        if(chosenConsonantArray.includes("Â")) {
            allLateralFricatives.push("ŋʷ");
            allLabialisedConsonants.push("ŋʷ");
        }; 

        if(chosenConsonantArray.includes("Ì")) {
            allLabialPlosivesArray.push("pʰʲ");
            allAspiratesArray.push("pʰʲ");
            allPalatalisedConsonants.push("pʰʲ");
        };
        if(chosenConsonantArray.includes("Í")) {
            allLabialPlosivesArray.push("bʰʲ");
            allAspiratesArray.push("bʰʲ");
            allPalatalisedConsonants.push("bʰʲ");
        };
        if(chosenConsonantArray.includes("Î")) {
            allAlveolarPlosivesArray.push("tʰʲ");
            allAspiratesArray.push("tʰʲ");
            allPalatalisedConsonants.push("tʰʲ");
        };
        if(chosenConsonantArray.includes("Ï")) {
            allAlveolarPlosivesArray.push("dʰʲ");
            allAspiratesArray.push("dʰʲ");
            allPalatalisedConsonants.push("dʰʲ");
        };
        if(chosenConsonantArray.includes("Ð")) {
            allVelarPlosivesArray.push("kʰʲ");
            allAspiratesArray.push("kʰʲ");
            allPalatalisedConsonants.push("kʰʲ");
        };
        if(chosenConsonantArray.includes("Ñ")) {
            allVelarPlosivesArray.push("gʰʲ");
            allAspiratesArray.push("gʰʲ");
            allPalatalisedConsonants.push("gʰʲ");
        };
        if(chosenConsonantArray.includes("Ò")) {
            allAlveolarRhoticsArray.push("rʰʲ");
            allAspiratesArray.push("rʰʲ");
            allPalatalisedConsonants.push("rʰʲ");
        };
        if(chosenConsonantArray.includes("Ó")) {
            allLateralsArray.push("lʰʲ");
            allAspiratesArray.push("lʰʲ");
            allPalatalisedConsonants.push("lʰʲ");
        };
        if(chosenConsonantArray.includes("Ô")) {
            allAlveolarFricativesArray.push("sʰʲ");
            allAspiratesArray.push("sʰʲ");
            allPalatalisedConsonants.push("sʰʲ");
        };
        if(chosenConsonantArray.includes("Õ")) {
            allAlveolarFricativesArray.push("zʰʲ");
            allAspiratesArray.push("zʰʲ");
            allPalatalisedConsonants.push("zʰʲ");
        };
        if(chosenConsonantArray.includes("Ö")) {
            allVelarFricatives.push("xʰʲ");
            allAspiratesArray.push("xʰʲ");
            allPalatalisedConsonants.push("xʰʲ");
        };
        if(chosenConsonantArray.includes("Ø")) {
            allVelarFricatives.push("ɣʰʲ");
            allAspiratesArray.push("ɣʰʲ");
            allPalatalisedConsonants.push("ɣʰʲ");
        };
        if(chosenConsonantArray.includes("Ù")) {
            allLabioDentalArray.push("fʰʲ");
            allAspiratesArray.push("fʰʲ");
            allPalatalisedConsonants.push("fʰʲ");
        };
        if(chosenConsonantArray.includes("Ú")) {
            allLabioDentalArray.push("vʰʲ");
            allAspiratesArray.push("vʰʲ");
            allPalatalisedConsonants.push("vʰʲ");
        };
        if(chosenConsonantArray.includes("Û")) {
            allLabialFricativesArray.push("ɸʰʲ");
            allAspiratesArray.push("ɸʰʲ");
            allPalatalisedConsonants.push("ɸʰʲ");
        };
        if(chosenConsonantArray.includes("Ü")) {
            allLabialFricativesArray.push("βʰʲ");
            allAspiratesArray.push("βʰʲ");
            allPalatalisedConsonants.push("βʰʲ");
        };
        if(chosenConsonantArray.includes("Ý")) {
            allDentalFricatives.push("θʰʲ");
            allAspiratesArray.push("θʰʲ");
            allPalatalisedConsonants.push("θʰʲ");
        };
        if(chosenConsonantArray.includes("Þ")) {
            allDentalFricatives.push("ðʰʲ");
            allAspiratesArray.push("ðʰʲ");
            allPalatalisedConsonants.push("ðʰʲ");
        };
        if(chosenConsonantArray.includes("ß")) {
            allDentalFricatives.push("ðʰʲ");
            allAspiratesArray.push("ðʰʲ");
            allPalatalisedConsonants.push("ðʰʲ");
        };
        if(chosenConsonantArray.includes("Ƃ")) {
            allPostAlveolarFricatives.push("ʃʰʲ");
            allAspiratesArray.push("ʃʰʲ");
            allPalatalisedConsonants.push("ʃʰʲ");
        };
        if(chosenConsonantArray.includes("ƃ")) {
            allPostAlveolarFricatives.push("ʒʰʲ");
            allAspiratesArray.push("ʒʰʲ");
            allPalatalisedConsonants.push("ʒʰʲ");
        };
        if(chosenConsonantArray.includes("Ƅ")) {
            allAlveolarFricativesArray.push("ʂʰʲ");
            allAspiratesArray.push("ʒʰʲ");
            allPalatalisedConsonants.push("ʒʰʲ");
        };
        if(chosenConsonantArray.includes("ƅ")) {
            allAlveolarFricativesArray.push("ʐʰʲ");
            allAspiratesArray.push("ʐʰʲ");
            allPalatalisedConsonants.push("ʐʰʲ");
        };
        if(chosenConsonantArray.includes("Ɔ")) {
            allUvularFricativesArray.push("χʰʲ");
            allAspiratesArray.push("χʰʲ");
            allPalatalisedConsonants.push("χʰʲ");
        };
        if(chosenConsonantArray.includes("Ƈ")) {
            allUvularFricativesArray.push("ʁʰʲ");
            allAspiratesArray.push("ʁʰʲ");
            allPalatalisedConsonants.push("ʁʰʲ");
        };
        if(chosenConsonantArray.includes("ƈ")) {
            allLateralFricatives.push("ɬʰʲ");
            allAspiratesArray.push("ɬʰʲ");
            allPalatalisedConsonants.push("ɬʰʲ");
        };
        if(chosenConsonantArray.includes("Ɖ")) {
            allLateralFricatives.push("ɮʰʲ");
            allAspiratesArray.push("ɮʰʲ");
            allPalatalisedConsonants.push("ɮʰʲ");
        };
        if(chosenConsonantArray.includes("Ɗ")) {
            allUvularPlosivesArray.push("qʰʲ");
            allAspiratesArray.push("qʰʲ");
            allPalatalisedConsonants.push("qʰʲ");
        };
        if(chosenConsonantArray.includes("Ƌ")) {
            allUvularPlosivesArray.push("ɢʰʲ");
            allAspiratesArray.push("ɢʰʲ");
            allPalatalisedConsonants.push("ɢʰʲ");
        };
        if(chosenConsonantArray.includes("ƌ")) {
            allGlottalPlosives.push("ʔʰʲ");
            allAspiratesArray.push("ʔʰʲ");
            allPalatalisedConsonants.push("ʔʰʲ");
        };
        if(chosenConsonantArray.includes("Ƒ")) {
            allPalatalPlosivesArray.push("cʰʲ");
            allAspiratesArray.push("cʰʲ");
            allPalatalisedConsonants.push("cʰʲ");
        };
        if(chosenConsonantArray.includes("ƒ")) {
            allPalatalPlosivesArray.push("ɟʰʲ");
            allAspiratesArray.push("ɟʰʲ");
            allPalatalisedConsonants.push("ɟʰʲ");
        };
        if(chosenConsonantArray.includes("Ɠ")) {
            allPostAlveolaraffricates.push("ʧʰʲ");
            allAspiratesArray.push("ʧʰʲ");
            allPalatalisedConsonants.push("ʧʰʲ");
        };
        if(chosenConsonantArray.includes("Ɣ")) {
            allPostAlveolaraffricates.push("ʤʰʲ");
            allAspiratesArray.push("ʤʰʲ");
            allPalatalisedConsonants.push("ʤʰʲ");
        };


        if(chosenConsonantArray.includes("ƕ")) {
            allLabialPlosivesArray.push("pʷʰ");
            allAspiratesArray.push("pʷʰ");
            allLabialisedConsonants.push("pʷʰ");
        };
        if(chosenConsonantArray.includes("Ɩ")) {
            allLabialPlosivesArray.push("bʷʰ");
            allAspiratesArray.push("bʷʰ");
            allLabialisedConsonants.push("bʷʰ");
        };
        if(chosenConsonantArray.includes("Ɨ")) {
            allAlveolarPlosivesArray.push("tʷʰ");
            allAspiratesArray.push("tʷʰ");
            allLabialisedConsonants.push("tʷʰ");
        };
        if(chosenConsonantArray.includes("Ƙ")) {
            allAlveolarPlosivesArray.push("dʷʰ");
            allAspiratesArray.push("dʷʰ");
            allLabialisedConsonants.push("dʷʰ");
        };
        if(chosenConsonantArray.includes("ƙ")) {
            allVelarPlosivesArray.push("kʷʰ");
            allAspiratesArray.push("kʷʰ");
            allLabialisedConsonants.push("kʷʰ");
        };
        if(chosenConsonantArray.includes("ƚ")) {
            allVelarPlosivesArray.push("gʷʰ");
            allAspiratesArray.push("gʷʰ");
            allLabialisedConsonants.push("gʷʰ");
        };
        if(chosenConsonantArray.includes("ƛ")) {
            allAlveolarRhoticsArray.push("rʷʰ");
            allAspiratesArray.push("rʷʰ");
            allLabialisedConsonants.push("rʷʰ");
        };
        if(chosenConsonantArray.includes("Ɯ")) {
            allLateralsArray.push("lʷʰ");
            allAspiratesArray.push("lʷʰ");
            allLabialisedConsonants.push("lʷʰ");
        };
        if(chosenConsonantArray.includes("Ɲ")) {
            allAlveolarFricativesArray.push("sʷʰ");
            allAspiratesArray.push("sʷʰ");
            allLabialisedConsonants.push("sʷʰ");
        };
        if(chosenConsonantArray.includes("Ɵ")) {
            allAlveolarFricativesArray.push("zʷʰ");
            allAspiratesArray.push("zʷʰ");
            allLabialisedConsonants.push("zʷʰ");
        };
        if(chosenConsonantArray.includes("Ơ")) {
            allVelarFricatives.push("xʷʰ");
            allAspiratesArray.push("xʷʰ");
            allLabialisedConsonants.push("xʷʰ");
        };
        if(chosenConsonantArray.includes("ơ")) {
            allVelarFricatives.push("ɣʷʰ");
            allAspiratesArray.push("ɣʷʰ");
            allLabialisedConsonants.push("ɣʷʰ");
        };
        if(chosenConsonantArray.includes("Ƣ")) {
            allLabioDentalArray.push("fʷʰ");
            allAspiratesArray.push("fʷʰ");
            allLabialisedConsonants.push("fʷʰ");
        };
        if(chosenConsonantArray.includes("ƣ")) {
            allLabioDentalArray.push("vʷʰ");
            allAspiratesArray.push("vʷʰ");
            allLabialisedConsonants.push("vʷʰ");
        };
        if(chosenConsonantArray.includes("Ƥ")) {
            allLabialFricativesArray.push("ɸʷʰ");
            allAspiratesArray.push("ɸʷʰ");
            allLabialisedConsonants.push("ɸʷʰ");
        };
        if(chosenConsonantArray.includes("ƥ")) {
            allLabialFricativesArray.push("βʷʰ");
            allAspiratesArray.push("βʷʰ");
            allLabialisedConsonants.push("βʷʰ");
        };
        if(chosenConsonantArray.includes("Ʀ")) {
            allDentalFricatives.push("θʷʰ");
            allAspiratesArray.push("θʷʰ");
            allLabialisedConsonants.push("θʷʰ");
        };
        if(chosenConsonantArray.includes("Ƨ")) {
            allDentalFricatives.push("ðʷʰ");
            allAspiratesArray.push("ðʷʰ");
            allLabialisedConsonants.push("ðʷʰ");
        };
        if(chosenConsonantArray.includes("Ƭ")) {
            allPostAlveolarFricatives.push("ʃʷʰ");
            allAspiratesArray.push("ʃʷʰ");
            allLabialisedConsonants.push("ʃʷʰ");
        };
        if(chosenConsonantArray.includes("ƭ")) {
            allPostAlveolarFricatives.push("ʒʷʰ");
            allAspiratesArray.push("ʒʷʰ");
            allLabialisedConsonants.push("ʒʷʰ");
        };
        if(chosenConsonantArray.includes("Ʈ")) {
            allAlveolarFricativesArray.push("ʂʷʰ");
            allAspiratesArray.push("ʂʷʰ");
            allLabialisedConsonants.push("ʂʷʰ");
        };
        if(chosenConsonantArray.includes("Ư")) {
            allAlveolarFricativesArray.push("ʐʷʰ");
            allAspiratesArray.push("ʐʷʰ");
            allLabialisedConsonants.push("ʐʷʰ");
        };
        if(chosenConsonantArray.includes("а")) {
            allAlveolarPlosivesArray.push("ʈʷʰ");
            allAspiratesArray.push("ʈʷʰ");
            allLabialisedConsonants.push("ʈʷʰ");
        };
        if(chosenConsonantArray.includes("б")) {
            allAlveolarPlosivesArray.push("ɖʷʰ");
            allAspiratesArray.push("ɖʷʰ");
            allLabialisedConsonants.push("ɖʷʰ");
        };
        if(chosenConsonantArray.includes("в")) {
            allAlveolarRhoticsArray.push("ɽʷʰ");
            allAspiratesArray.push("ɽʷʰ");
            allLabialisedConsonants.push("ɽʷʰ");
        };
        if(chosenConsonantArray.includes("ư")) {
            allUvularFricativesArray.push("χʷʰ");
            allAspiratesArray.push("χʷʰ");
            allLabialisedConsonants.push("χʷʰ");
        };
        if(chosenConsonantArray.includes("Ʊ")) {
            allUvularFricativesArray.push("ʁʷʰ");
            allAspiratesArray.push("ʁʷʰ");
            allLabialisedConsonants.push("ʁʷʰ");
        };
        if(chosenConsonantArray.includes("Ʋ")) {
            allLateralFricatives.push("ɬʷʰ");
            allAspiratesArray.push("ɬʷʰ");
            allLabialisedConsonants.push("ɬʷʰ");
        };
        if(chosenConsonantArray.includes("Ƴ")) {
            allLateralFricatives.push("ɮʷʰ");
            allAspiratesArray.push("ɮʷʰ");
            allLabialisedConsonants.push("ɮʷʰ");
        };
        if(chosenConsonantArray.includes("ƴ")) {
            allUvularPlosivesArray.push("qʷʰ");
            allAspiratesArray.push("qʷʰ");
            allLabialisedConsonants.push("qʷʰ");
        };
        if(chosenConsonantArray.includes("Ƶ")) {
            allUvularPlosivesArray.push("ɢʷʰ");
            allAspiratesArray.push("ɢʷʰ");
            allLabialisedConsonants.push("ɢʷʰ");
        };
        if(chosenConsonantArray.includes("ƺ")) {
            allPalatalPlosivesArray.push("cʷʰ");
            allAspiratesArray.push("cʷʰ");
            allLabialisedConsonants.push("cʷʰ");
        };
        if(chosenConsonantArray.includes("ƻ")) {
            allPalatalPlosivesArray.push("ɟʷʰ");
            allAspiratesArray.push("ɟʷʰ");
            allLabialisedConsonants.push("ɟʷʰ");
        };
        if(chosenConsonantArray.includes("ƶ")) {
            allPalatalPlosivesArray.push("ʔʷʰ");
            allAspiratesArray.push("ʔʷʰ");
            allLabialisedConsonants.push("ʔʷʰ");
        };
        if(chosenConsonantArray.includes("Ƽ")) {
            allPostAlveolaraffricates.push("ʧʷʰ");
            allAspiratesArray.push("ʧʷʰ");
            allLabialisedConsonants.push("ʧʷʰ");
        };
        if(chosenConsonantArray.includes("ƽ")) {
            allPostAlveolaraffricates.push("ʤʷʰ");
            allAspiratesArray.push("ʤʷʰ");
            allLabialisedConsonants.push("ʤʷʰ");
        };
        if(chosenConsonantArray.includes("m")) {
            allNasalsArray.push("m");
        };
        if(chosenConsonantArray.includes("M")) {
            allNasalsArray.push("mʲ");
            allPalatalisedConsonants.push("mʲ");
        };
        if(chosenConsonantArray.includes("N")) {
            allNasalsArray.push("nʲ");
            allPalatalisedConsonants.push("nʲ");
        };
        if(chosenConsonantArray.includes("X")) {
            allNasalsArray.push("ŋʲ");
            allPalatalisedConsonants.push("ŋʲ");
        };
        if(chosenConsonantArray.includes("mː")) {
            allNasalsArray.push("mː");
            allLongConsonants.push("mː");
        };
        if(chosenConsonantArray.includes("n")) {
            allNasalsArray.push("n");
        };
        if(chosenConsonantArray.includes("nː")) {
            allNasalsArray.push("nː");
            allLongConsonants.push("nː");
        };
        if(chosenConsonantArray.includes("s")) {
            allAlveolarFricativesArray.push("s");
        };
        if(chosenConsonantArray.includes("sː")) {
            allAlveolarFricativesArray.push("sː");
            allLongConsonants.push("sː");
        };
        if(chosenConsonantArray.includes("r")) {
            allAlveolarRhoticsArray.push("r");
        };
        if(chosenConsonantArray.includes("rʲ")) {
            allAlveolarRhoticsArray.push("rʲ");
            allPalatalisedConsonants.push("rʲ");
        };
        if(chosenConsonantArray.includes("rː")) {
            allAlveolarRhoticsArray.push("rː");
            allLongConsonants.push("rː");
        };
        if(chosenConsonantArray.includes("l")) {
            allLateralsArray.push("l");
        };
        if(chosenConsonantArray.includes("lː")) {
            allLateralsArray.push("lː");
            allLongConsonants.push("lː");
        };
        if(chosenConsonantArray.includes("lʲ")) {
            allLateralsArray.push("lʲ");
            allPalatalisedConsonants.push("lʲ");
        };
        if(chosenConsonantArray.includes("ʎ")) {
            allLateralsArray.push("ʎ");
        };
        if(chosenConsonantArray.includes("ʎː")) {
            allLateralsArray.push("ʎː");
            allLongConsonants.push("ʎː");
        };
        if(chosenConsonantArray.includes("ɭ")) {
            allLateralsArray.push("ɭ");
        };
        if(chosenConsonantArray.includes("ɭː")) {
            allLateralsArray.push("ɭː");
            allLongConsonants.push("ɭː");
        };
        if(chosenConsonantArray.includes("ɽ")) {
            allAlveolarRhoticsArray.push("ɽ");
        };
        if(chosenConsonantArray.includes("ɽː")) {
            allAlveolarRhoticsArray.push("ɽː");
            allLongConsonants.push("ɽː");
        };
        if(chosenConsonantArray.includes("z")) {
            allAlveolarFricativesArray.push("z");
        };
        if(chosenConsonantArray.includes("zː")) {
            allAlveolarFricativesArray.push("zː");
            allLongConsonants.push("zː");
        };
        if(chosenConsonantArray.includes("ʃ")) {
            allPostAlveolarFricatives.push("ʃ");
        };
        if(chosenConsonantArray.includes("ʃː")) {
            allPostAlveolarFricatives.push("ʃː");
            allLongConsonants.push("ʃː");
        };
        if(chosenConsonantArray.includes("ʒ")) {
            allPostAlveolarFricatives.push("ʒ");
        };
        if(chosenConsonantArray.includes("ʒː")) {
            allPostAlveolarFricatives.push("ʒː");
            allLongConsonants.push("ʒː");
        };
        if(chosenConsonantArray.includes("ç")) {
            allPalatalFricatives.push("ç");
        };
        if(chosenConsonantArray.includes("çː")) {
            allPalatalFricatives.push("çː");
            allLongConsonants.push("çː");
        };
        if(chosenConsonantArray.includes("ʝ")) {
            allPalatalFricatives.push("ʝ");
        };
        if(chosenConsonantArray.includes("ʝː")) {
            allPalatalFricatives.push("ʝː");
            allLongConsonants.push("ʝː");
        };
        if(chosenConsonantArray.includes("f")) {
            allLabioDentalArray.push("f");
        };
        if(chosenConsonantArray.includes("fː")) {
            allLabioDentalArray.push("fː");
            allLongConsonants.push("fː");
        };
        if(chosenConsonantArray.includes("v")) {
            allLabioDentalArray.push("v");
        };
        if(chosenConsonantArray.includes("vː")) {
            allLabioDentalArray.push("vː");
            allLongConsonants.push("vː");
        };
        if(chosenConsonantArray.includes("ɸ")) {
            allLabialFricativesArray.push("ɸ");
        };
        if(chosenConsonantArray.includes("ɸʲ")) {
            allLabialFricativesArray.push("ɸʲ");
            allPalatalisedConsonants.push("ɸʲ");
        };
        if(chosenConsonantArray.includes("ɸː")) {
            allLabialFricativesArray.push("ɸː");
            allLongConsonants.push("ɸː");
        };
        if(chosenConsonantArray.includes("β")) {
            allLabialFricativesArray.push("β");
        };
        if(chosenConsonantArray.includes("βʲ")) {
            allLabialFricativesArray.push("βʲ");
            allPalatalisedConsonants.push("βʲ");
        };
        if(chosenConsonantArray.includes("ϰ")) {
            allLabialFricativesArray.push("ʈʲ");
            allPalatalisedConsonants.push("ʈʲ");
        };
        if(chosenConsonantArray.includes("ϱ")) {
            allLabialFricativesArray.push("ɖʲ");
            allPalatalisedConsonants.push("ɖʲ");
        };
        if(chosenConsonantArray.includes("ϡ")) {
            allLabialFricativesArray.push("ɽʲ");
            allPalatalisedConsonants.push("ɽʲ");
        };
        if(chosenConsonantArray.includes("Ϩ")) {
            allLabialFricativesArray.push("ɭʲ");
            allPalatalisedConsonants.push("ɭʲ");
        };
        if(chosenConsonantArray.includes("βː")) {
            allLabialFricativesArray.push("βː");
            allLongConsonants.push("βː");
        };
        if(chosenConsonantArray.includes("θ")) {
            allDentalFricatives.push("θ");
        };
        if(chosenConsonantArray.includes("θː")) {
            allDentalFricatives.push("θː");
            allLongConsonants.push("θː");
        };
        if(chosenConsonantArray.includes("ð")) {
            allDentalFricatives.push("ð");
        };
        if(chosenConsonantArray.includes("ðː")) {
            allDentalFricatives.push("ðː");
            allLongConsonants.push("ðː");
        };
        if(chosenConsonantArray.includes("h")) {
            allGlottalFricatives.push("h");
        };
        if(chosenConsonantArray.includes("hː")) {
            allGlottalFricatives.push("hː");
            allLongConsonants.push("hː");
        };
        if(chosenConsonantArray.includes("χ")) {
            allUvularFricativesArray.push("χ");
        };
        if(chosenConsonantArray.includes("χː")) {
            allUvularFricativesArray.push("χː");
            allLongConsonants.push("χː");
        };
        if(chosenConsonantArray.includes("ʁ")) {
            allUvularFricativesArray.push("ʁ");
        };
        if(chosenConsonantArray.includes("ʁː")) {
            allUvularFricativesArray.push("ʁː");
            allLongConsonants.push("ʁː");
        };
        if(chosenConsonantArray.includes("x")) {
            allVelarFricatives.push("x");
        };
        if(chosenConsonantArray.includes("xː")) {
            allVelarFricatives.push("xː");
            allLongConsonants.push("xː");
        };
        if(chosenConsonantArray.includes("ɣ")) {
            allVelarFricatives.push("ɣ");
        };
        if(chosenConsonantArray.includes("ɣː")) {
            allVelarFricatives.push("ɣː");
            allLongConsonants.push("ɣː");
        };
        if(chosenConsonantArray.includes("ʐ")) {
            allAlveolarFricativesArray.push("ʐ");
        };
        if(chosenConsonantArray.includes("ʐː")) {
            allAlveolarFricativesArray.push("ʐː");
            allLongConsonants.push("ʐː");
        };
        if(chosenConsonantArray.includes("ʂ")) {
            allAlveolarFricativesArray.push("ʂ");
        };
        if(chosenConsonantArray.includes("ʂː")) {
            allAlveolarFricativesArray.push("ʂː");
            allLongConsonants.push("ʂː");
        };
        if(chosenConsonantArray.includes("ʕ")) {
            allPharyngealFricatives.push("ʕ");
        };
        if(chosenConsonantArray.includes("ʕː")) {
            allPharyngealFricatives.push("ʕː");
            allLongConsonants.push("ʕː");
        };
        if(chosenConsonantArray.includes("ħ")) {
            allPharyngealFricatives.push("ħ");
        };
        if(chosenConsonantArray.includes("ħː")) {
            allPharyngealFricatives.push("ħː");
            allLongConsonants.push("ħː");
        };
        if(chosenConsonantArray.includes("ɬ")) {
            allLateralFricatives.push("ɬ");
        };
        if(chosenConsonantArray.includes("ɬː")) {
            allLateralFricatives.push("ɬː");
            allLongConsonants.push("ɬː");
        };
        if(chosenConsonantArray.includes("ɮ")) {
            allLateralFricatives.push("ɮ");
        };
        if(chosenConsonantArray.includes("ɮː")) {
            allLateralFricatives.push("ɮː");
            allLongConsonants.push("ɮː");
        };
        if(chosenConsonantArray.includes("j")) {
            allpalatalApproximants.push("j");
        };
        if(chosenConsonantArray.includes("jː")) {
            allpalatalApproximants.push("jː");
            allLongConsonants.push("jː");
        };
        if(chosenConsonantArray.includes("w")) {
            allLabialApproximants.push("w");
        };
        if(chosenConsonantArray.includes("wː")) {
            allLabialApproximants.push("wː");
            allLongConsonants.push("wː");
        };
        if(chosenConsonantArray.includes("ŋ")) {
            allNasalsArray.push("ŋ");
        };
        if(chosenConsonantArray.includes("ŋː")) {
            allNasalsArray.push("ŋː");
            allLongConsonants.push("ŋː");
        };
        if(chosenConsonantArray.includes("ʧ")) {
            allPostAlveolaraffricates.push("ʧ");
        };
        if(chosenConsonantArray.includes("ʧː")) {
            allPostAlveolaraffricates.push("ʧː");
            allLongConsonants.push("ʧː");
        };
        if(chosenConsonantArray.includes("ʤ")) {
            allPostAlveolaraffricates.push("ʤ");
        };
        if(chosenConsonantArray.includes("ʤː")) {
            allPostAlveolaraffricates.push("ʤː");
            allLongConsonants.push("ʤː");
        };
    };
};


let voiced = ["b", "d", "g", "z", "bʰ", "dʰ", "gʰ", "ʐ", "ɖ", "ɣ", "v", "ɦ", "dʒ", "ɟ", "ʁ", "ʒ", "ɟ", "ʕ", "bʲ", "dʲ", "gʲ", "bʷ", "dʷ", "gʷ", "bʰʲ", "dʰʲ", "gʰʲ", "bʷʰ", "dʷʰ", "gʷʰ", "ð", "ɮ"];
let voicingTrueOrFalse = ""
    let randomVoiceNum = Math.floor(Math.random() * 4);
    function chooseVoicing() {
        if(randomOption) {
          if (randomVoiceNum === 2) { 
            voicingTrueOrFalse = false;
        } else {
            voicingTrueOrFalse = true;
        }  
        } else {
            //if the user manually entered a voiced consonant
            if(chosenConsonantArray.some(voiced => voiced.includes(voiced))) {
                voicingTrueOrFalse = true;
            } else{
                voicingTrueOrFalse = false;
            }
        }
        
        if(voicingTrueOrFalse && randomOption || voicingTrueOrFalse && document.getElementById("chosen-consonants").value.length === 0) {
            allLabialPlosivesArray.push("b");
            allAlveolarPlosivesArray.push("d");
            allVelarPlosivesArray.push("g");
            
            let randomNum = Math.floor(Math.random() * 3);
            if(randomNum === 1) {//there is a 50% chance that there will be /z/
                allAlveolarFricativesArray.push("z");
            }
        }
        return voicingTrueOrFalse;
    }

function randomlyChooseConsonants() {
    function chooseGemination() {
        if(randomGeminationNum === 2 ) {
            return true;
        } else {
            return false;
        }
    }

    function chooseAspiration() {
            function preAspiration() {
                randomNum = Math.floor(Math.random() * 18);
                let trueOrFalse = "";
                if(randomNum === 4 ) {
                    trueOrFalse = true;
                } else {
                    trueOrFalse = false;
                }
                allLabialPlosivesArray.push("ʰp");
                allAspiratesArray.push("ʰp");
                allAlveolarPlosivesArray.push("ʰt");
                allAspiratesArray.push("ʰt");
                allVelarPlosivesArray.push("ʰk");
                allAspiratesArray.push("ʰk");
                return trueOrFalse;
            }

            function postAspiration() {
                randomNum = Math.floor(Math.random() * 11);
                let trueOrFalse = "";
                if(randomNum === 4 ) {
                    trueOrFalse = true;
                } else {
                    trueOrFalse = false;
                }
                allLabialPlosivesArray.push("pʰ");
                allAspiratesArray.push("pʰ");
                randomNum = Math.floor(Math.random() * 3);
                    if(randomNum === 2 && chooseVoicing()) {
                        allLabialPlosivesArray.push("bʰ");
                        allAspiratesArray.push("bʰ");
                    }
                allAlveolarPlosivesArray.push("tʰ");
                allAspiratesArray.push("tʰ");
                randomNum = Math.floor(Math.random() * 3);
                    if(randomNum === 2 && chooseVoicing()) {
                        allLabialPlosivesArray.push("dʰ");
                        allAspiratesArray.push("dʰ");
                    }
                allVelarPlosivesArray.push("kʰ");
                allAspiratesArray.push("kʰ");
                    randomNum = Math.floor(Math.random() * 3);
                    if(randomNum === 2 && chooseVoicing()) {
                        allLabialPlosivesArray.push("gʰ");
                        allAspiratesArray.push("gʰ");
                    }
                return trueOrFalse;
            }
        let randomNum = Math.floor(Math.random() * 10);
        let chosenAspiration = "";
        if(randomNum === 1) { 
            let randomNum = Math.floor(Math.random() * 3);
            if(randomNum === 2) {
                chosenAspiration = preAspiration();
            } else {
                chosenAspiration = postAspiration();
        } 
        return chosenAspiration;
        }
    }

    function chooseLabial() {
        let randomNum = Math.floor(Math.random() * 3);
        if (randomNum === 1) {
            randomNum = Math.floor(Math.random() * 6);
            if(randomNum === 2) {
                allLabialFricativesArray.push("ɸ");
                randomNum = Math.floor(Math.random() * 6)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialApproximants.push("ɸː");
                    allLongConsonants.push("ɸː")
                }
            }
            if(chooseVoicing()) {
                randomNum = Math.floor(Math.random() * 2);
                if(randomNum === 1) {
                    allLabialFricativesArray.push("β");
                    randomNum = Math.floor(Math.random() * 6)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialApproximants.push("βː");
                        allLongConsonants.push("βː")
                    }
                    }
            }
            allLabialApproximants.push("w")
            randomNum = Math.floor(Math.random() * 6)
            if(randomNum === 4 && chooseGemination()) {
                allLabialApproximants.push("wː")
                allLongConsonants.push("wː")
            }
            
            randomNum = Math.floor(Math.random() * 25)
            if(randomNum === 2) {
                allLabialAffricates.push("pɸ")
                randomNum = Math.floor(Math.random() * 6)
                if(randomNum === 4 && chooseVoicing()) {
                    allLabialAffricates.push("bβ")
                }
            }
        }
        if(chooseGemination()) {
            if(Math.floor(Math.random() * 2) === 1) {
                allNasalsArray.push("mː");
                allLongConsonants.push("mː");
            }
        }
        if(chooseGemination()) {
            if(Math.floor(Math.random() * 2) === 1) {
                allLabialPlosivesArray.push("pː");
                allLongConsonants.push("pː");
            }
            if(Math.floor(Math.random() * 2) === 1) {
                allLabialPlosivesArray.push("bː");
                allLongConsonants.push("bː");
            }
        }
    };
    chooseLabial();

    function chooseLabioDental() {
        let randomNum = Math.floor(Math.random() * 11);
        if(randomNum === 5) {
            allLabioDentalArray.push("f");
            randomNum = Math.floor(Math.random() * 10)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("fː")
                    allLongConsonants.push("fː")
                }
            if(chooseVoicing()) {
                randomNum = Math.floor(Math.random() * 11)
                if(randomNum !== 2) {
                    allLabioDentalArray.push("v");
                    randomNum = Math.floor(Math.random() * 23)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialDentalApproximants.push("vː")
                        allLongConsonants.push("vː")
                    }
                }
            }
            randomNum = Math.floor(Math.random() * 11)
            if(randomNum !== 2) {
                allLabialDentalApproximants.push("ʋ")
                randomNum = Math.floor(Math.random() * 30)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialDentalApproximants.push("ʋː")
                        allLongConsonants.push("ʋː")
                    }
            }
            randomNum = Math.floor(Math.random() * 31)
            if(randomNum === 2) {
                allLabialDentalAffricates.push("pf")
                randomNum = Math.floor(Math.random() * 30)
                    if(randomNum === 4 && chooseVoicing()) {
                        allLabialDentalAffricates.push("bv")
                    }
            }
        }
    };
    chooseLabioDental();

    function chooseDental() {
        let randomNum = Math.floor(Math.random() * 21);
        if (randomNum === 4) {
            allDentalFricatives.push("θ");
            randomNum = Math.floor(Math.random() * 23)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialDentalApproximants.push("θː")
                        allLongConsonants.push("θː")
                    }
            if(chooseVoicing()) {
                randomNum = Math.floor(Math.random() * 3);
                if(randomNum === 2) {
                    allDentalFricatives.push("ð");
                    randomNum = Math.floor(Math.random() * 23)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialDentalApproximants.push("ðː")
                        allLongConsonants.push("ðː")
                    }
                } 
            }
        }
    }
    chooseDental()

    function chooseAlveolar() {
        let randomNum = Math.floor(Math.random() * 7);
        if(randomNum === 4 && chooseGemination()) {
            allAlveolarRhoticsArray.push("rː");
            allLongConsonants.push("rː");
            allLateralsArray.push("lː");
            allLongConsonants.push("lː");
        }
        randomNum = Math.floor(Math.random() * 25);
        if (randomNum === 23) { 
            allLateralFricatives.push("ɬ");
            randomNum = Math.floor(Math.random() * 4);
            if(randomNum === 2 && chooseVoicing()) { 
                allLateralFricatives.push("ɮ");
            }
        }
        randomNum = Math.floor(Math.random() * 20);
        if (randomNum === 23) { 
            allAlveolarAffricates.push("ts");
            randomNum = Math.floor(Math.random() * 4);
            if(randomNum === 2 && chooseVoicing()) { 
                allAlveolarAffricates.push("dz");
            }
        }

        if(chooseGemination()) {
            if(Math.floor(Math.random() * 2) === 1) {
                allNasalsArray.push("nː");
                allLongConsonants.push("nː");
            }
            if(Math.floor(Math.random() * 2) === 1) {
                allAlveolarPlosivesArray.push("tː");
                allLongConsonants.push("tː");
            }
            if(Math.floor(Math.random() * 2) === 1) {
                allAlveolarPlosivesArray.push("dː");
                allLongConsonants.push("dː");
            }
            if(Math.floor(Math.random() * 2) === 1) {
                allAlveolarFricativesArray.push("sː");
                allLongConsonants.push("sː");
            }
            if(Math.floor(Math.random() * 2) === 1) {
                allAlveolarFricativesArray.push("zː");
                allLongConsonants.push("zː");
            }
        }
    };
    chooseAlveolar()

    function choosePostAlveolar() {
        let randomNum = Math.floor(Math.random() * 4);
        if (randomNum === 2) {
            allPostAlveolarFricatives.push("ʃ");
            randomNum = Math.floor(Math.random() * 11)
                    if(randomNum === 4 && chooseGemination()) {
                        allPostAlveolarFricatives.push("ʃː")
                        allLongConsonants.push("ʃː")
                    }
            if (chooseVoicing()) {
                randomNum = Math.floor(Math.random() * 3);
                allPostAlveolarFricatives.push("ʒ");
                randomNum = Math.floor(Math.random() * 11)
                    if(randomNum === 4 && chooseGemination()) {
                        allPostAlveolarFricatives.push("ʒː")
                        allLongConsonants.push("ʒː")
                    }
            }
            randomNum = Math.floor(Math.random() * 9)
            if(randomNum === 4) {
                allPostAlveolaraffricates.push("tʃ");
                randomNum = Math.floor(Math.random() * 5)
                if(randomNum === 4 && chooseVoicing()) {
                    allPostAlveolaraffricates.push("dʒ")
                }
            }
            
        }
    };
    choosePostAlveolar()

    function chooseRetroflex() {//there ise a 10% chance that this language has retroflexes
        let randomNum = Math.floor(Math.random() * 11);
        let trueOrFalse = "";
        if(randomNum === 2) {//if false, then there will be no retroflexes
            trueOrFalse = true;
        } else {
            trueOrFalse = false;
        }
        if (trueOrFalse) {
            allNasalsArray.push("ɳ");

            randomNum = Math.floor(Math.random() * 4);
            if (randomNum !== 3) {//there is a 60% chance that ʈ is added 
                allAlveolarPlosivesArray.push("ʈ");
                if(chooseVoicing()) {
                    allAlveolarPlosivesArray.push("ɖ");
                }
                allAlveolarFricativesArray.push("ʂ");
                if(chooseVoicing()) {
                    allAlveolarFricativesArray.push("ʐ");
                }
                allAlveolarRhoticsArray.push("ɽ");
                allLateralsArray.push("ɭ")
            }
        }
    };
    chooseRetroflex()

    function choosePalatal() {//there ise a 20% chance that this language has palatal consonants
        let randomNum =  Math.floor(Math.random() * 6);
        if (randomNum === 3) {
            allNasalsArray.push("ɲ");
            randomNum = Math.floor(Math.random() * 30)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialDentalApproximants.push("ɲː")
                        allLongConsonants.push("ɲː")
                    }
        } 
        randomNum = Math.floor(Math.random() * 6)
        if (randomNum === 4) {
            allLateralsArray.push("ʎ");
            randomNum = Math.floor(Math.random() * 30)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialDentalApproximants.push("ʎː")
                        allLongConsonants.push("ʎː")
                    }
        }
        randomNum = Math.floor(Math.random() * 8)
        if (randomNum === 2) {
            allPalatalPlosivesArray.push("c");
            randomNum = Math.floor(Math.random() * 30)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialDentalApproximants.push("cː")
                        allLongConsonants.push("cː")
                    }
            if(chooseVoicing()) {
                allPalatalPlosivesArray.push("ɟ");
                randomNum = Math.floor(Math.random() * 30)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialDentalApproximants.push("ɟː")
                        allLongConsonants.push("ɟː")
                    }
            }
        }
        randomNum = Math.floor(Math.random() * 6)
        if (randomNum === 4) {
            allPalatalFricatives.push("ç")
            randomNum = Math.floor(Math.random() * 30)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialDentalApproximants.push("çː")
                        allLongConsonants.push("çː")
                    }
            if(chooseVoicing()) {
                allPalatalFricatives.push("ʝ");
                randomNum = Math.floor(Math.random() * 30)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialDentalApproximants.push("ʝː")
                        allLongConsonants.push("ʝː")
                    }
            }
        }
        randomNum = Math.floor(Math.random() * 2)
        if (randomNum === 1) {
            allpalatalApproximants.push("j");
            randomNum = Math.floor(Math.random() * 30)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialDentalApproximants.push("jː")
                        allLongConsonants.push("jː")
                    }
            
        }
        

    };
    choosePalatal()

    function chooseVelar() {
        let randomNum = Math.floor(Math.random() * 6);
        if (randomNum === 3) {
            allVelarFricatives.push("x");
            randomNum = Math.floor(Math.random() * 11)
                    if(randomNum === 4 && chooseGemination()) {
                        allVelarFricatives.push("xː")
                        allLongConsonants.push("xː")
                    }
            if(chooseVoicing()) {
                randomNum = Math.floor(Math.random() * 2);
                allVelarFricatives.push("ɣ");
                randomNum = Math.floor(Math.random() * 11)
                    if(randomNum === 4 && chooseGemination()) {
                        allVelarFricatives.push("ɣː")
                        allLongConsonants.push("ɣː")
                    }
            }
            randomNum = Math.floor(Math.random() * 31);
            if(randomNum === 4 && chooseGemination()) {
                allVelaraffricatesArray.push("kx");
                if(chooseVoicing()) {
                randomNum = Math.floor(Math.random() * 11)
                    if(randomNum === 4 && chooseGemination()) {
                        allVelaraffricatesArray.push("gɣ")
                    }
            }
            }

            randomNum = Math.floor(Math.random() * 201);
            if(randomNum === 6) {
                allLateralsArray.push("ʟ");
                randomNum = Math.floor(Math.random() * 11)
                    if(randomNum === 4 && chooseGemination()) {
                        allLateralsArray.push("ʟː")
                        allLongConsonants.push("ʟː")
                    }
            }
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum !== 3) {
            allNasalsArray.push("ŋ");  
            randomNum = Math.floor(Math.random() * 30)
                    if(randomNum === 4 && chooseGemination()) {
                        allNasalsArray.push("ŋː")
                        allLongConsonants.push("ŋː")
                    }
            }
        } 
        if(chooseGemination()) {
            if(Math.floor(Math.random() * 2) === 1) {
                allVelarPlosivesArray.push("kː");
                allLongConsonants.push("kː");
            }
            if(Math.floor(Math.random() * 2) === 1) {
                allVelarPlosivesArray.push("gː");
                allLongConsonants.push("gː");
            }
        }
    }
    chooseVelar()

    function chooseUvular() {
        let randomNum = Math.floor(Math.random() * 21);
        if(randomNum === 5) {
            allUvularPlosivesArray.push("q");
            randomNum = Math.floor(Math.random() * 11)
                    if(randomNum === 4 && chooseGemination()) {
                        allUvularPlosivesArray.push("qː")
                        allLongConsonants.push("qː")
                    }
                    if(randomNum === 4 && chooseAspiration()) {
                        allUvularPlosivesArray.push("qʰ")
                        allAspiratesArray.push("qʰ")
                    }
            if(chooseVoicing()) {
                randomNum = Math.floor(Math.random() * 11);
                if (randomNum !== 4) {
                    allUvularPlosivesArray.push("ɢ");
                    randomNum = Math.floor(Math.random() * 21)
                    if(randomNum === 4 && chooseGemination()) {
                        allUvularPlosivesArray.push("ɢː")
                        allLongConsonants.push("ɢː")
                    }
                    if(randomNum === 4 && chooseAspiration()) {
                        allUvularPlosivesArray.push("ɢʰ")
                        allAspiratesArray.push("ɢʰ")
                    }
                }
            }
            randomNum = Math.floor(Math.random() * 5);
                if (randomNum === 4) {
                    allUvularFricativesArray.push("χ");
                    randomNum = Math.floor(Math.random() * 30)
                    if(randomNum === 4 && chooseGemination()) {
                        allUvularFricativesArray.push("χː")
                        allLongConsonants.push("χː")
                    }
                    if(chooseVoicing()) {
                        randomNum = Math.floor(Math.random() * 4);
                        if (randomNum !== 4) {
                            allUvularFricativesArray.push("ʁ");
                            randomNum = Math.floor(Math.random() * 30)
                    if(randomNum === 4 && chooseGemination()) {
                        allUvularFricativesArray.push("ʁː")
                        allLongConsonants.push("ʁː")
                    }
                        }
                    }
                }
            randomNum = Math.floor(Math.random() * 34);
                if (randomNum === 4) {
                    allUvularaffricatesArray.push("q͡χ");
                    if(chooseVoicing()) {
                        randomNum = Math.floor(Math.random() * 30);
                        if (randomNum === 4) {
                            allUvularaffricatesArray.push("ɢ͡ʁ");
                        }
                    }
                }
        }
    };
    chooseUvular()

    function choosePharyngeal() {
        let randomNum = Math.floor(Math.random() * 21);
        if(randomNum === 5) {
            allPharyngealFricatives.push("ħ");
            randomNum = Math.floor(Math.random() * 40)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialDentalApproximants.push("ħː")
                        allLongConsonants.push("ħː")
                    }
            if(chooseVoicing()) {
                randomNum = Math.floor(Math.random() * 10);
                if (randomNum !== 4) {
                    allPharyngealFricatives.push("ʕ");
                    randomNum = Math.floor(Math.random() * 40)
                    if(randomNum === 4 && chooseGemination()) {
                        allLabialDentalApproximants.push("ʕː")
                        allLongConsonants.push("ʕː")
                    }
                }
            }
        }
    };
    choosePharyngeal()

    function chooseGlottal() {
        let randomNum = Math.floor(Math.random() * 6);
        if(randomNum === 5) {
            allGlottalFricatives.push("h");
            randomNum = Math.floor(Math.random() * 30)
                    if(randomNum === 4 && chooseGemination()) {
                        allGlottalFricatives.push("hː")
                        allLongConsonants.push("hː")
                    }
            if(chooseVoicing()) {
                randomNum = Math.floor(Math.random() * 11);
                if (randomNum === 4) {
                    allGlottalFricatives.push("ɦ");
                    randomNum = Math.floor(Math.random() * 40)
                    if(randomNum === 4 && chooseGemination()) {
                        allGlottalFricatives.push("ɦː")
                        allLongConsonants.push("ɦː")
                    }
                }
            }
            randomNum = Math.floor(Math.random() * 2);
            if(randomNum === 1) {
                allGlottalPlosives.push("ʔ");
                randomNum = Math.floor(Math.random() * 40)
                    if(randomNum === 4 && chooseGemination()) {
                        allGlottalPlosives.push("ʔː")
                        allLongConsonants.push("ʔː")
                    }
                    
            }
            randomNum = Math.floor(Math.random() * 40);
            if(randomNum === 1) {
                allGlottalAffricates.push("ʔh");

            }
        }
    };
    chooseGlottal()

    function choosePalatalised() {
        let randomNum = Math.floor(Math.random() * 14);
        if(randomNum === 5) {
            allPalatalisedConsonants.push("tʲ");
            allAlveolarPlosivesArray.push("tʲ");
                if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                    allPalatalisedConsonants.push("dʲ");
                    allAlveolarPlosivesArray.push("dʲ");
                    if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allPalatalisedConsonants.push("dʰʲ");
                    allAlveolarPlosivesArray.push("dʰʲ");
                        allAspiratesArray.push("dʰʲ");
                }
                }
                if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allPalatalisedConsonants.push("tʰʲ");
                    allAlveolarPlosivesArray.push("tʰʲ");
                    allAspiratesArray.push("tʰʲ");
                }

            randomNum = Math.floor(Math.random() * 7);
            if(randomNum === 30) {
                allPalatalisedConsonants.push("sʲ");
                allAlveolarFricativesArray.push("sʲ");
                if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                    allPalatalisedConsonants.push("zʲ");
                    allAlveolarFricativesArray.push("zʲ");
                }
            }

            randomNum = Math.floor(Math.random() * 7);
            if(randomNum === 30) {
                allPalatalisedConsonants.push("pʲ");
                allLabialPlosivesArray.push("pʲ");
                if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                    allPalatalisedConsonants.push("bʲ");
                    allLabialPlosivesArray.push("bʲ");
                    if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {;
                    allPalatalisedConsonants.push("bʰʲ");
                    allLabialPlosivesArray.push("bʰʲ");
                        allAspiratesArray.push("bʰʲ");
                }
                }
                if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allPalatalisedConsonants.push("pʰʲ");
                    allLabialPlosivesArray.push("pʰʲ");
                    allAspiratesArray.push("pʰʲ");
                }
            }

            randomNum = Math.floor(Math.random() * 7);
            if(randomNum === 30) {
                allPalatalisedConsonants.push("kʲ");
                allVelarPlosivesArray.push("kʲ");
                if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allPalatalisedConsonants.push("kʰʲ");
                    allVelarPlosivesArray.push("kʰʲ");
                    allAspiratesArray.push("kʰʲ");
                }
                if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                    allPalatalisedConsonants.push("gʲ");
                    allVelarPlosivesArray.push("gʲ");
                    if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allAspiratesArray.push("gʰʲ");
                }
                }
            }
            randomNum = Math.floor(Math.random() * 7);
            if(randomNum === 30) {
                allPalatalisedConsonants.push("qʲ");
                allUvularPlosivesArray.push("qʲ");
                if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allPalatalisedConsonants.push("qʰʲ");
                    allUvularPlosivesArray.push("qʰʲ");
                    allAspiratesArray.push("qʰʲ");
                }
                if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                    allPalatalisedConsonants.push("ɢʲ");
                    allUvularPlosivesArray.push("ɢʲ");
                    if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allAspiratesArray.push("ɢʰʲ");
                }
                }
            }
        }
    };
    choosePalatalised()

    function chooseLabialisation() {
        let randomNum = Math.floor(Math.random() * 10);
        if(randomNum === 5) {
            allLabialisedConsonants.push("tʷ");
            allAlveolarPlosivesArray.push("tʷ");
                if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                    allLabialisedConsonants.push("dʷ");
                    allAlveolarPlosivesArray.push("dʷ");
                    if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allLabialisedConsonants.push("dʷʰ");
                    allAlveolarPlosivesArray.push("dʷʰ");
                        allAspiratesArray.push("dʷʰ");
                }
                }
                if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allLabialisedConsonants.push("tʷʰ");
                    allAlveolarPlosivesArray.push("tʷʰ");
                    allAspiratesArray.push("tʷʰ");
                }

            randomNum = Math.floor(Math.random() * 4);
            if(randomNum === 3) {
                allLabialisedConsonants.push("sʷ");
                allAlveolarFricativesArray.push("sʷ");
                if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                    allLabialisedConsonants.push("zʷ");
                    allAlveolarFricativesArray.push("zʷ");
                }
            }

            randomNum = Math.floor(Math.random() * 7);
            if(randomNum === 3) {
                allLabialisedConsonants.push("pʷ");
                allLabialPlosivesArray.push("pʷ");
                if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                    allLabialisedConsonants.push("bʷ");
                    allLabialPlosivesArray.push("bʷ");
                    if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {;
                    allLabialisedConsonants.push("bʷʰ");
                    allLabialPlosivesArray.push("bʷʰ");
                        allAspiratesArray.push("bʷʰ");
                }
                }
                if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allLabialisedConsonants.push("pʷʰ");
                    allLabialPlosivesArray.push("pʷʰ");
                    allAspiratesArray.push("pʷʰ");
                }
            }

            randomNum = Math.floor(Math.random() * 7);
            if(randomNum === 3) {
                allLabialisedConsonants.push("kʷ");
                allVelarPlosivesArray.push("kʷ");
                if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allLabialisedConsonants.push("kʷʰ");
                    allVelarPlosivesArray.push("kʷʰ");
                    allAspiratesArray.push("kʷʰ");
                }
                if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                    allLabialisedConsonants.push("gʷ");
                    allVelarPlosivesArray.push("gʷ");
                    if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allAspiratesArray.push("gʷʰ");
                }
                }
            }
            randomNum = Math.floor(Math.random() * 7);
            if(randomNum === 30) {
                allLabialisedConsonants.push("qʷ");
                allUvularPlosivesArray.push("qʷ");
                if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allLabialisedConsonants.push("qʷʰ");
                    allUvularPlosivesArray.push("qʷʰ");
                    allAspiratesArray.push("qʷʰ");
                }
                if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                    allLabialisedConsonants.push("ɢʷ");
                    allUvularPlosivesArray.push("ɢʷ");
                    if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                    allAspiratesArray.push("ɢʷʰ");
                }
                }
            }
        }
    };
    chooseLabialisation();
}
/*---^^^CHOOSE SECTION^^^----*/

/*-----SELECT SECTION---------*/
//Here, each final list of phonemes, nasals, plosives, etc are sent to the DOM as strings
function selectNasals() {
    let spanNasalList = document.getElementsByClassName("nasal-list");
    for(let i = 0; i < spanNasalList.length; i++) {
        spanNasalList[i].innerHTML = `/${allNasalsArray.join(", ")}/`;
    }
    if(allNasalsArray.length > 0) {
        document.getElementById("nasal-list").style.display = "block";
    }
    return allNasalsArray
}

function selectPlosives() {
    let spanPlosiveList = document.getElementsByClassName("plosive-list");
    let allPlosivesArray = allLabialPlosivesArray.concat(allAlveolarPlosivesArray, allPalatalPlosivesArray, allVelarPlosivesArray, allUvularPlosivesArray, allGlottalPlosives);
    let allPlosivesArrayFixed = allPlosivesArray.filter((element, index) => { //removes duplicates
        return allPlosivesArray.indexOf(element) === index;
    });
    for(let i = 0; i < spanPlosiveList.length; i++) {
        spanPlosiveList[i].innerHTML = `/${allPlosivesArrayFixed.join(", ")}/`;
    }
    if(allPlosivesArray.length > 0) {
        document.getElementById("plosive-list").style.display = "block";
    }
    return allPlosivesArrayFixed;
}

function selectFricatives() {
    let spanFricativeList = document.getElementsByClassName("fricative-list");
    let allFricativesArray = allLabialFricativesArray.concat(allLabioDentalArray, allDentalFricatives, allAlveolarFricativesArray, allPostAlveolarFricatives, allLateralFricatives, allPalatalFricatives, allVelarFricatives,allUvularFricativesArray, allPharyngealFricatives, allGlottalFricatives);

    let allFricativesArrayFixed = allFricativesArray.filter((element, index) => { //removes duplicates
        return allFricativesArray.indexOf(element) === index;
    });

    for(let i = 0; i < spanFricativeList.length; i++) {
        spanFricativeList[i].innerHTML = `/${allFricativesArrayFixed.join(", ")}/`;
    }
    if(allFricativesArray.length > 0) {
        document.getElementById("fricative-list").style.display = "block";
    }
    return allFricativesArrayFixed;
}

function selectAffricates() {
    let spanAffricateList = document.getElementsByClassName("affricate-list");
    let allaffricatesArray = allLabialDentalAffricates.concat(allLabialAffricates, allAlveolarAffricates, allPostAlveolaraffricates, allVelaraffricatesArray, allUvularlAffricates, allGlottalAffricates);

    let allAffricatesArrayFixed = allaffricatesArray.filter((element, index) => { //removes duplicates
        return allaffricatesArray.indexOf(element) === index;
    });

    for(let i = 0; i < spanAffricateList.length; i++) {
        spanAffricateList[i].innerHTML = `/${allAffricatesArrayFixed.join(", ")}/`;
    }
    if(allaffricatesArray.length > 0) {
        document.getElementById("affricate-list").style.display = "block";
    }
    return allAffricatesArrayFixed;
}

function selectRhotics() {
    let spanRhoticList = document.getElementsByClassName("rhotic-list");
    let allRhoticsArray = allAlveolarRhoticsArray;
    for(let i = 0; i < spanRhoticList.length; i++) {
        spanRhoticList[i].innerHTML = `/${allRhoticsArray.join(", ")}/`;
    }
    if(allRhoticsArray.length > 0) {
        document.getElementById("rhotic-list").style.display = "block";
    }
    return allRhoticsArray;
}

function selectLateralApproximants() {
    let spanLateralApproximantsList = document.getElementsByClassName("lateral-list");
    let allLateralApproximantsArray = allLateralsArray;
    for(let i = 0; i < spanLateralApproximantsList.length; i++) {
        spanLateralApproximantsList[i].innerHTML = `/${allLateralApproximantsArray.join(", ")}/`;
    }
    if(allLateralApproximantsArray.length > 0) {
        document.getElementById("lateral-list").style.display = "block";
    }
    return allLateralApproximantsArray;
}

function selectApproximants() {
    let spanApproximantsList = document.getElementsByClassName("approximant-list");
    let allApproximantsArray = allLabialApproximants.concat(allLabialDentalApproximants, allpalatalApproximants);
    for(let i = 0; i < spanApproximantsList.length; i++) {
        spanApproximantsList[i].innerHTML = `/${allApproximantsArray.join(", ")}/`;
    }
    if(allApproximantsArray.length > 0) {
        document.getElementById("approximant-list").style.display = "inline";
    }
    return allApproximantsArray;  
}

function countNumberOfConsonants() {
  const numberOfConsonants =  selectNasals().length + selectPlosives().length + selectFricatives().length + selectAffricates().length + selectRhotics().length + selectLateralApproximants().length + selectApproximants().length; //for some reason, the result was 1 too low

  document.getElementById("consonant-number").innerHTML = numberOfConsonants;
}

function collectAllConsonants() {

    consonants = allNasalsArray.concat(allLabialPlosivesArray, allAlveolarPlosivesArray, allVelarPlosivesArray, allLabialFricativesArray, allAlveolarFricativesArray, allVelarFricatives, allAlveolarRhoticsArray, allLateralsArray, allLabialApproximants, allpalatalApproximants, allPalatalPlosivesArray, allPostAlveolarFricatives, allpalatalAffricates, allPalatalFricatives, allDentalFricatives, allLabioDentalArray, allLabialDentalApproximants, allUvularPlosivesArray, allUvularFricativesArray, allPharyngealFricatives, allGlottalPlosives, allGlottalFricatives, allLateralFricatives, allLabialDentalAffricates, allLabialAffricates, allAlveolarAffricates, allPostAlveolaraffricates, allVelaraffricatesArray, allUvularlAffricates, allGlottalAffricates, allPalatalisedConsonants, allLabialisedConsonants);
    
}

/*********************VOWELS*******************/
function chooseLength() {
    let trueOrFalse = "";
    if(randomLengthNum === 1) {
        trueOrFalse = true;
    } else {
        trueOrFalse = false;
    }
    return trueOrFalse;
}

//if no vowels were manually selected, a set of vowels will be randomly generted
function selectVowels() {
    if(randomOption || document.getElementById("chosen-vowels").value.length === 0) {
       randomlyChooseVowels();
    } else if (document.getElementById("chosen-vowels").value.length > 0) {
        if(chosenVowelArray.includes("i")) {
            allHighVowels.push("i");
            allFrontVowels.push("i");
        };
        if(chosenVowelArray.includes("iː")) {
            allLongHighVowels.push("iː");
            allLongFrontVowels.push("iː");
        };
        if(chosenVowelArray.includes("u")) {
            allHighVowels.push("u");
            allBackVowels.push("u");
        };
        if(chosenVowelArray.includes("uː")) {
            allLongHighVowels.push("uː");
            allLongBackVowels.push("uː");
        };
        if(chosenVowelArray.includes("a")) {
            allCentralVowels.push("a");
            allLowVowels.push("a");
        };
        if(chosenVowelArray.includes("aː")) {
            allLongCentralVowels.push("aː");
            allLongLowVowels.push("aː");
        };
        if(chosenVowelArray.includes("yː")) {
            allLongHighVowels.push("yː");
            allLongFrontVowels.push("yː");
        };
        if(chosenVowelArray.includes("y")) {
            allHighVowels.push("y");
            allFrontVowels.push("y");
        };
        if(chosenVowelArray.includes("ɯ")) {
            allHighVowels.push("ɯ");
            allBackVowels.push("ɯ");
        };
        if(chosenVowelArray.includes("ɯː")) {
            allLongHighVowels.push("ɯː");
            allLongBackVowels.push("ɯː");
        };
        if(chosenVowelArray.includes("ɨ")) {
            allHighVowels.push("ɨ");
            allCentralVowels.push("ɨ");
        };
        if(chosenVowelArray.includes("ɨː")) {
            allLongHighVowels.push("ɨː");
            allLongCentralVowels.push("ɨː");
        };
        if(chosenVowelArray.includes("ʉ")) {
            allHighVowels.push("ʉ");
            allCentralVowels.push("ʉ");
        };
        if(chosenVowelArray.includes("ʉː")) {
            allLongHighVowels.push("ʉː");
            allLongCentralVowels.push("ʉː");
        };
        if(chosenVowelArray.includes("e")) {
            allMidVowels.push("e");
            allFrontVowels.push("e");
        };
        if(chosenVowelArray.includes("eː")) {
            allLongMidVowels.push("eː");
            allLongFrontVowels.push("eː");
        };
        if(chosenVowelArray.includes("ø")) {
            allMidVowels.push("ø");
            allFrontVowels.push("ø");
        };
        if(chosenVowelArray.includes("øː")) {
            allLongMidVowels.push("øː");
            allLongFrontVowels.push("øː");
        };
        if(chosenVowelArray.includes("ɘ")) {
            allMidVowels.push("ɘ");
            allCentralVowels.push("ɘ");
        };
        if(chosenVowelArray.includes("ɘː")) {
            allLongMidVowels.push("ɘː");
            allLongCentralVowels.push("ɘː");
        };
        if(chosenVowelArray.includes("ɵ")) {
            allMidVowels.push("ɵ");
            allCentralVowels.push("ɵ");
        };
        if(chosenVowelArray.includes("ɵː")) {
            allLongMidVowels.push("ɵː");
            allLongCentralVowels.push("ɵː");
        };
        if(chosenVowelArray.includes("ə")) {
            allMidVowels.push("ə");
            allCentralVowels.push("ə");
        };
        if(chosenVowelArray.includes("əː")) {
            allLongMidVowels.push("əː");
            allLongCentralVowels.push("əː");
        };
        if(chosenVowelArray.includes("ɛ")) {
            allLowMidVowels.push("ɛ");
            allFrontVowels.push("ɛ");
        };
        if(chosenVowelArray.includes("ɛː")) {
            allLongLowMidVowels.push("ɛː");
            allLongFrontVowels.push("ɛː");
        };
        if(chosenVowelArray.includes("ɜ")) {
            allCentralVowels.push("ɜ");
            allLowMidVowels.push("ɜ");
        };
        if(chosenVowelArray.includes("ɜː")) {
            allLongCentralVowels.push("ɜː");
            allLongLowMidVowels.push("ɜː");
        };
        if(chosenVowelArray.includes("ɞ")) {
            allCentralVowels.push("ɞ");
            allLowMidVowels.push("ɞ");
        };
        if(chosenVowelArray.includes("ɞː")) {
            allLongCentralVowels.push("ɞː");
            allLongLowMidVowels.push("ɞː");
        };
        if(chosenVowelArray.includes("ɪ")) {
            allHighMidVowels.push("ɪ");
            allFrontVowels.push("ɪ");
        };
        if(chosenVowelArray.includes("ɪː")) {
            allLongHighMidVowels.push("ɪː");
            allLongFrontVowels.push("ɪː");
        };
        if(chosenVowelArray.includes("ɔ")) {
            allBackVowels.push("ɔ");
            allLowMidVowels.push("ɔ");
        };
        if(chosenVowelArray.includes("ɔː")) {
            allLongBackVowels.push("ɔː");
            allLongLowMidVowels.push("ɔː");
        };
        if(chosenVowelArray.includes("æ")) {
            allLowMidVowels.push("æ");
            allFrontVowels.push("æ");
        };
        if(chosenVowelArray.includes("æː")) {
            allLongLowMidVowels.push("æː");
            allLongFrontVowels.push("æː");
        };
        if(chosenVowelArray.includes("ɐ")) {
            allLowMidVowels.push("ɐ");
            allCentralVowels.push("ɐ");
        };
        if(chosenVowelArray.includes("ɐː")) {
            allLongLowMidVowels.push("ɐː");
            allLongCentralVowels.push("ɐː");
        };
        if(chosenVowelArray.includes("ɒ")) {
            allLowVowels.push("ɒ");
            allBackVowels.push("ɒ");
        };
        if(chosenVowelArray.includes("ɒː")) {
            allLongLowVowels.push("ɒː");
            allLongBackVowels.push("ɒː");
        };
        if(chosenVowelArray.includes("ʊ")) {
            allBackVowels.push("ʊ");
            allHighMidVowels.push("ʊ");
        };
        if(chosenVowelArray.includes("ʊː")) {
            allLongBackVowels.push("ʊː");
            allLongHighMidVowels.push("ʊː");
        };
        if(chosenVowelArray.includes("ʌ")) {
            allBackVowels.push("ʌ");
            allLowMidVowels.push("ʌ");
        };
        if(chosenVowelArray.includes("ʌː")) {
            allLongBackVowels.push("ʌː");
            allLongLowMidVowels.push("ʌː");
        };
        if(chosenVowelArray.includes("ɤ")) {
            allMidVowels.push("ɤ");
            allBackVowels.push("ɤ");
        };
        if(chosenVowelArray.includes("ɤː")) {
            allLongMidVowels.push("ɤː");
            allLongBackVowels.push("ɤː");
        };
        if(chosenVowelArray.includes("o")) {
            allMidVowels.push("o");
            allBackVowels.push("o");
        };
        if(chosenVowelArray.includes("oː")) {
            allLongMidVowels.push("oː");
            allLongBackVowels.push("oː");
        };
        if(chosenVowelArray.includes("ɒ")) {
            allLowVowels.push("ɒ");
            allBackVowels.push("ɒ");
        };
        if(chosenVowelArray.includes("ɒ")) {
            allLongLowVowels.push("ɒː");
            allLongBackVowels.push("ɒː");
        };
    };
};

function randomlyChooseVowels() {
    function chooseNumberOfMainVowels() {
        let randomNum = Math.floor(Math.random() * 6)
        let numberOfVowels = 0;
        if(randomNum === 0) {//produces two vowel qualities, i and u
            allFrontVowels.push("i");
            allBackVowels.push("u");
            allHighVowels.push("i");
            allHighVowels.push("u");
            if(chooseLength()) {
                randomNum = Math.floor(Math.random() * 11);
                if(randomNum !== 3) {
                    allLongFrontVowels.push("iː");
                    allLongHighVowels.push("iː");
                }
                randomNum = Math.floor(Math.random() * 11);
                if(randomNum !== 3) {
                    allLongHighVowels.push("uː");
                    allLongBackVowels.push("uː");
                }
            }
            numberOfVowels = 2;
        } else if (randomNum === 1) {//produces three vowel qualities, i, u and a
            allFrontVowels.push("i");
            allHighVowels.push("i");
            allBackVowels.push("u");
            allHighVowels.push("u");
            allCentralVowels.push("a");
            allLowVowels.push("a");
            if(chooseLength()) {
                randomNum = Math.floor(Math.random() * 11);
                if(randomNum !== 3) {
                    allLongFrontVowels.push("iː");
                    allLongHighVowels.push("iː");
                }
                randomNum = Math.floor(Math.random() * 11);
                if(randomNum !== 3) {
                    allLongHighVowels.push("uː");
                    allLongBackVowels.push("uː");
                }
                randomNum = Math.floor(Math.random() * 11);
                if(randomNum !== 3) {
                    allLongLowVowels.push("aː");
                    allLongCentralVowels.push("aː");
                }
            }
            numberOfVowels = 3;
        } else {//produces five vowel qualities, i, u, e, o and a
            allFrontVowels.push("i");
            allHighVowels.push("i");
            allFrontVowels.push("e");
            allMidVowels.push("e");
            allBackVowels.push("u");
            allHighVowels.push("u");
            allBackVowels.push("o");
            allMidVowels.push("o");
            allCentralVowels.push("a");
            allLowVowels.push("a");
            if(chooseLength()) {
                randomNum = Math.floor(Math.random() * 11);
                if(randomNum !== 3) {
                    allLongFrontVowels.push("iː");
                    allLongHighVowels.push("iː");
                }
                randomNum = Math.floor(Math.random() * 11);
                if(randomNum !== 3) {
                    allLongHighVowels.push("uː");
                    allLongBackVowels.push("uː");
                }
                randomNum = Math.floor(Math.random() * 11);
                if(randomNum !== 3) {
                    allLongLowVowels.push("aː");
                    allLongCentralVowels.push("aː");
                }
                randomNum = Math.floor(Math.random() * 11);
                if(randomNum !== 3) {
                    allLongMidVowels.push("eː");
                    allLongFrontVowels.push("eː");
                }
                randomNum = Math.floor(Math.random() * 11);
                if(randomNum !== 3) {
                    allLongMidVowels.push("oː");
                    allLongBackVowels.push("oː");
                }
            }
            numberOfVowels = 5;
        }
        return numberOfVowels;
    };
    chooseNumberOfMainVowels();

    function chooseFrontRoundedVowels() {
        let randomNum = Math.floor(Math.random() * 11);
        if(randomNum === 3) {
            allHighVowels.push("y");
            allFrontVowels.push("y");
            if(chooseLength()) {
                allLongHighVowels.push("yː");
                allLongFrontVowels.push("yː");
            }
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum === 3) {
                allMidVowels.push("ø");
                allFrontVowels.push("ø");
                if(chooseLength()) {
                allLongMidVowels.push("øː");
                allLongFrontVowels.push("øː");
            }
            }    
        }
    }

    function chooseBackUnroundedVowels() {
        let randomNum = Math.floor(Math.random() * 11);
        if(randomNum === 3) {
            allHighVowels.push("ɯ");
            allBackVowels.push("ɯ");
            if(chooseLength()) {
                allLongHighVowels.push("ɯː");
                allLongBackVowels.push("ɯː");
            }
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum === 3) {
                allMidVowels.push("ɤ");
                allBackVowels.push("ɤ");
                if(chooseLength()) {
                allLongMidVowels.push("ɤː");
                allLongBackVowels.push("ɤː");
                }
            }  
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum === 3) {
                allLowVowels.push("ɑ");
                allBackVowels.push("ɑ");
                if(chooseLength()) {
                allLongLowVowels.push("ɑː");
                allLongBackVowels.push("ɑː");
                }
            }   
        }  
    }

    function chooseCentralVowels() {
        let randomNum = Math.floor(Math.random() * 21);
        if(randomNum === 3) {
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum === 3) {
                allHighVowels.push("ɨ");
                allCentralVowels.push("ɨ");
                if(chooseLength()) {
                    allLongHighVowels.push("ɨː");
                    allLongCentralVowels.push("ɨː");
                }
                }
            randomNum = Math.floor(Math.random() * 7);
            if(randomNum === 4) {
                allHighVowels.push("ʉ");
                allCentralVowels.push("ʉ");
                if(chooseLength()) {
                    allLongHighVowels.push("ʉː");
                    allLongCentralVowels.push("ʉː");
                }
            }
            randomNum = Math.floor(Math.random() * 7);
            if(randomNum === 4) {
                allMidVowels.push("ɘ");
                allCentralVowels.push("ɘ");
                if(chooseLength()) {
                    allLongMidVowels.push("ɘː");
                    allLongCentralVowels.push("ɘː");
                }
            }
            randomNum = Math.floor(Math.random() * 7);
            if(randomNum === 4) {
                allMidVowels.push("ɵ");
                allCentralVowels.push("ɵ");
                if(chooseLength()) {
                    allLongMidVowels.push("ɵː");
                    allLongCentralVowels.push("ɵː");
                }
            }
            }
        }

    function chooseSchwa() {
        let randomNum = Math.floor(Math.random() * 11);
        if(randomNum === 3) {
            allMidVowels.push("ə");
        }
    }
    chooseSchwa();

    function chooseHighMidVowels() {
        let randomNum = Math.floor(Math.random() * 21);
        if(randomNum === 4) {
            randomNum = Math.floor(Math.random() * 6);
            if(randomNum !== 4) {
                allHighMidVowels.push("ɪ");
                allFrontVowels.push("ɪ");
                if(chooseLength) {
                    randomNum = Math.floor(Math.random() * 5);
                    if(randomNum === 2) {
                        allLongHighMidVowels.push("ɪː");
                        allLongFrontVowels.push("ɪː");
                    }
                }
                if(chooseFrontRoundedVowels()) {
                    randomNum = Math.floor(Math.random() * 5);
                    if(randomNum !== 3) {
                        allHighMidVowels.push("ʏ");
                        allFrontVowels.push("ʏ");
                        if(chooseLength) {
                            randomNum = Math.floor(Math.random() * 5);
                            if(randomNum === 2) {
                                allLongHighMidVowels.push("ʏː");
                                allLongFrontVowels.push("ʏː");
                            }
                        }
                    }
                }
            }
            randomNum = Math.floor(Math.random() * 6);
            if(randomNum !== 4 && chooseBackUnroundedVowels()) {
                allBackVowels.push("ʊ")
                allHighMidVowels.push("ʊ");
                if(chooseLength()) {
                    randomNum = Math.floor(Math.random() * 5);
                    if(randomNum === 2) {
                        allLongHighMidVowels.push("ʊː");
                        allLongBackVowels.push("ʊː");
                    }
                }
            }
        }
    }
    chooseHighMidVowels();

    function chooseLowMidVowels() {
        let randomNum = Math.floor(Math.random() * 21);
        if(randomNum === 5) {
            randomNum = Math.floor(Math.random() * 6);
            if(randomNum !== 2) {
                allLowMidVowels.push("ɛ");
                allFrontVowels.push("ɛ")
                if(chooseLength()) {
                    randomNum = Math.floor(Math.random() * 6);
                    if(randomNum === 2) {
                        allLongLowMidVowels.push("ɛː");
                        allLongFrontVowels.push("ɛː")
                    }
                }
                if(chooseFrontRoundedVowels()) {
                    allLowMidVowels.push("œ");
                    allFrontVowels.push("œ")
                        if(chooseLength()) {
                        randomNum = Math.floor(Math.random() * 6);
                    if(randomNum === 2) {
                        allLongLowMidVowels.push("œː");
                        allLongFrontVowels.push("œː")
                    }
                }
            }
        }
        randomNum = Math.floor(Math.random() * 6);  
        if(randomNum === 3 && chooseCentralVowels()) {
            allCentralVowels.push("ɜ");
            allLowMidVowels.push("ɜ");
            randomNum = Math.floor(Math.random() * 6);  
                if(randomNum === 4 && chooseLength()) {
                    allLongCentralVowels.push("ɜː");
                    allLongLowMidVowels.push("ɜː");
                }
            randomNum = Math.floor(Math.random() * 6);  
            if(randomNum === 4) {
                allCentralVowels.push("ɞ");
                allLowMidVowels.push("ɞ");
                randomNum = Math.floor(Math.random() * 6);
                if(randomNum === 4 && chooseLength()) {
                    allLongCentralVowels.push("ɞː");
                    allLongLowMidVowels.push("ɞː");
                }
            }
        }
        randomNum = Math.floor(Math.random() * 6);
            if(randomNum !== 2) {
                allLowMidVowels.push("æ");
                allFrontVowels.push("æ")
                if(chooseLength()) {
                    randomNum = Math.floor(Math.random() * 6);
                    if(randomNum === 2) {
                        allLongLowMidVowels.push("æː");
                        allLongFrontVowels.push("æː")
                    }
                }
            }
        randomNum = Math.floor(Math.random() * 6);
        if(randomNum !== 2) {
            allLowMidVowels.push("ɐ");
            allCentralVowels.push("ɐ")
            if(chooseLength()) {
                randomNum = Math.floor(Math.random() * 6);
                if(randomNum === 2) {
                    allLongLowMidVowels.push("ɐː");
                    allLongCentralVowels.push("ɐː")
                }
            }
        }
            randomNum = Math.floor(Math.random() * 6);  
            if(randomNum === 4) {
                allBackVowels.push("ɔ");
                allLowMidVowels.push("ɔ");
                randomNum = Math.floor(Math.random() * 6);
                if(randomNum === 4 && chooseLength()) {
                    allLongBackVowels.push("ɔː");
                    allLongLowMidVowels.push("ɔː");
                }
            randomNum = Math.floor(Math.random() * 4);  
            if(randomNum !== 3 && chooseBackUnroundedVowels()) {
                allBackVowels.push("ʌ");
                allLowMidVowels.push("ʌ");
                randomNum = Math.floor(Math.random() * 6);  
                if(randomNum === 4 && chooseLength()) {
                    allLongBackVowels.push("ʌː");
                    allLongLowMidVowels.push("ʌː");
                }
            }
        }
        }
    }
    chooseLowMidVowels();

    function chooseLowVowels() {
        let randomNum = Math.floor(Math.random() * 21);
        if( randomNum === 4) {
            allLowVowels.push("ɒ");
            allBackVowels.push("ɒ");
            randomNum = Math.floor(Math.random() * 8);
            if(randomNum === 3 && chooseLength()) {
                allLongLowVowels.push("ɒː");
                allLongBackVowels.push("ɒː");
            }
        } 
        
    };
    chooseLowVowels();

};

let shortVowels = [];
let allLongVowels = [];
let allVowelsArrayFixed = [];
function collectAllVowels() {

    if(chosenVowels) {
        //sorts manually selected short vowels from long ones
        for(let i = 0; i < chosenVowelArray.length; i++) {
            if(chosenVowelArray[i].length === 2) {
                allLongVowels.push(chosenVowelArray[i]);
            } else {
                shortVowels.push(chosenVowelArray[i]);
            };
        };
    } else {
        shortVowels = allFrontVowels.concat(allCentralVowels, allBackVowels, allHighVowels, allHighMidVowels, allMidVowels, allLowMidVowels, allLowVowels);

        allLongVowels = allLongFrontVowels.concat(allLongBackVowels, allLongCentralVowels, allLongHighVowels, allLongHighMidVowels, allLongMidVowels, allLongLowMidVowels, allLongLowVowels);
    };

    allVowelsArrayFixed = shortVowels.filter((element, index) => { //removes duplicates
    return shortVowels.indexOf(element) === index;
    });

    if(chosenVowels) {
        vowels = cloneArray(chosenVowelArray);
        document.getElementById("vowel-number").innerHTML = vowels.length
    } else {
        vowels = allVowelsArrayFixed.concat(allLongFrontVowels, allLongBackVowels, allLongCentralVowels, allLongHighVowels, allLongHighMidVowels, allLongMidVowels, allLongLowMidVowels, allLongLowVowels);

        document.getElementById("vowel-number").innerHTML = vowels.length
    };

    if(allLongVowels.length > 0) {
         document.getElementById("vowel-quantities").style.display = "inline";
    }

    return vowels;

}

function populateVowelLists() {
    //HIGH 
    let shortAndLongHighVowels = allHighVowels.concat(allLongHighVowels)

    let shortAndLongHighVowelsfixed = shortAndLongHighVowels.filter((element, index) => { //removes duplicates
        return shortAndLongHighVowels.indexOf(element) === index;
    });
    document.getElementById("high-vowels").innerHTML = `/${shortAndLongHighVowelsfixed.join(", ")}/`;
    if(shortAndLongHighVowelsfixed.length > 0) {
        document.getElementById("high-vowel-list").style.display = "block";
    }

    //HIGH MID
    let shortAndLongHighMidVowels = allHighMidVowels.concat(allLongHighMidVowels);

    let shortAndLongHighMidVowelsfixed = shortAndLongHighMidVowels.filter((element, index) => { //removes duplicates
        return allHighMidVowels.indexOf(element) === index;
        });
    document.getElementById("high-mid-vowels").innerHTML = `/${shortAndLongHighMidVowelsfixed.join(", ")}/`;
        if(shortAndLongHighMidVowelsfixed.length > 0) {
        document.getElementById("high-mid-vowel-list").style.display = "block";
        }

    //MID
    let shortAndLongMidVowels = allMidVowels.concat(allLongMidVowels);

    let shortAndLongMidVowelsfixed = shortAndLongMidVowels.filter((element, index) => { //removes duplicates
        return shortAndLongMidVowels.indexOf(element) === index;
        });
    document.getElementById("mid-vowels").innerHTML = `/${shortAndLongMidVowelsfixed.join(", ")}/`;
        if(shortAndLongMidVowelsfixed.length > 0) {
        document.getElementById("mid-vowel-list").style.display = "block";
        }

    //LOW MID
    let shortAndLongLowMidVowels = allLowMidVowels.concat(allLongLowMidVowels);

    let shortAndLongLowMidVowelsfixed = shortAndLongLowMidVowels.filter((element, index) => { //removes duplicates
        return shortAndLongLowMidVowels.indexOf(element) === index;
        });
    document.getElementById("low-mid-vowels").innerHTML = `/${shortAndLongLowMidVowelsfixed.join(", ")}/`;
        if(shortAndLongLowMidVowelsfixed.length > 0) {
        document.getElementById("low-mid-vowel-list").style.display = "block";
        }

    //LOW
    let shortAndLongLowVowels = allLowVowels.concat(allLongLowVowels);

    let shortAndLongLowVowelsfixed = shortAndLongLowVowels .filter((element, index) => { //removes duplicates
        return shortAndLongLowVowels.indexOf(element) === index;
        });
    document.getElementById("low-vowels").innerHTML = `/${shortAndLongLowVowelsfixed.join(", ")}/`;
        if(shortAndLongLowVowelsfixed.length > 0) {
        document.getElementById("low-vowel-list").style.display = "block";
        }
}

/*-----^^^SELECTION^^^--------------*/

/****SYLLABLE STRUCTURE**************/
function chooseSyllablesToBeUsed() {    
    if(randomOption || document.getElementById("chosen-syllables").value === "") {
        selectedSyllables = ["CV"]
        syllablesArray.forEach((element) => allPossibleSyllablesArray.push(element))
        
        //if the language has no approximants, then no syllable structure specifying approximent e.g CAV will be added
        if(selectApproximants().length  > 0 && Math.floor(Math.random() * 2) === 2) {
            approximantSyllables.forEach((element) => allPossibleSyllablesArray.push(element))
        }
        if(Math.floor(Math.random() * 6) === 2) {
            nasalSyllables.forEach((element) => allPossibleSyllablesArray.push(element))
        }
        if(Math.floor(Math.random() * 6) === 2) {
            fricativeSyllables.forEach((element) => allPossibleSyllablesArray.push(element))
        }
        if(Math.floor(Math.random() * 6) === 2) {
            resonantSyllables.forEach((element) => allPossibleSyllablesArray.push(element))
        }
        if(allAspiratesArray.length > 0 && Math.floor(Math.random() * 6) === 2) {
            aspiratedSyllable.forEach((element) => allPossibleSyllablesArray.push(element))
        }

        let randomNum = Math.floor(Math.random() * 30);
        if(randomNum < 4) {//all syllables are CV
        selectedSyllables = ["CV"];
        };
        if(randomNum === 4) {
            selectedSyllables.push("V"); //syllables are CV or V
        }
        if(randomNum === 5) {
            selectedSyllables.push("V", "VC"); //syllables are CV, V, VC        
        }
        if(randomNum === 6) {
            selectedSyllables.push("VC"); //syllables are CV and VC
        }
        if(randomNum === 7) {
            selectedSyllables.push("CVC"); //syllables are CV and CVN
        }
        if(randomNum === 8) {
            selectedSyllables.push("CCV"); //syllables are CV and CCV
        }
        if(randomNum === 9) {
            selectedSyllables.push("CVCC"); //syllables are CV and CCV
        }
        if(randomNum === 10) {
            selectedSyllables.push("CCVCC"); //syllables are CV and CCV
        }
        if(randomNum > 10) {
            randomNum = Math.floor(Math.random() * 6) + 1; //the maximum amount of possible syllable structures a generated language can have is 5
            for(let i = 0; i < randomNum; i++) {
                let randomIndex = Math.floor(Math.random() * allPossibleSyllablesArray.length);
                if(selectedSyllables.includes(allPossibleSyllablesArray[randomIndex])) {
                    continue;
                } else {
                    selectedSyllables.push(allPossibleSyllablesArray[randomIndex])
                }
            }
        }
    } else {
            let chosenSyllables = Array.from(document.getElementById("chosen-syllables").value);

            for(let i = 0; i < chosenSyllables.length; i++) {
                if(chosenSyllables[i+1] !== " " && chosenSyllables[i] !== " " && chosenSyllables[i+1] !== undefined) {
                    chosenSyllables[i] = chosenSyllables[i] + chosenSyllables[i+1];
                    chosenSyllables.splice(i+1,1)
                } 
                
                if(chosenSyllables[i-1] !== " " && chosenSyllables[i] !== " " && chosenSyllables[i-1] !== undefined) {
                    chosenSyllables[i] = chosenSyllables[i-1] + chosenSyllables[i];
                    chosenSyllables.splice(i-1,1)
                }
            };

            for(let i = 0; i < chosenSyllables.length; i++) {
                while(chosenSyllables[i] === " ") {
                    chosenSyllables.splice(i,1);
                };
            }

            selectedSyllables = cloneArray(chosenSyllables)
        };
    document.getElementById("syllable-structure-list").innerHTML = selectedSyllables.join(", ");

}

/*************^^^GENERATES EXAMPLES FOR SYLLABLE STRUCTURE^^^************ */
let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generatePhonology);

function generatePhonology() {
    restoreDefault();
    checkManuallyEnteredSounds();
    makeRandomNumbers();
    selectConsonants();
    chooseVoicing();
    selectNasals();
    selectPlosives();
    selectFricatives();
    selectAffricates();
    selectRhotics();
    selectLateralApproximants();
    selectApproximants();
    countNumberOfConsonants();
    collectAllConsonants()
    chooseLength();
    selectVowels();
    collectAllVowels();
    populateVowelLists();
    chooseSyllablesToBeUsed();
};

export {consonants, vowels, selectedSyllables, selectApproximants, selectFricatives, selectNasals, selectPlosives, selectAffricates, selectRhotics, selectLateralApproximants, allAspiratesArray, chooseLength, allGlottalFricatives, allVelarFricatives, allUvularFricativesArray, allUvularPlosivesArray, allLabioDentalArray, chooseVoicing, allLongVowels, allLongConsonants, voicingTrueOrFalse, allHighVowels, allNasalsArray, chosenVowelSpellingsArray, chosenConsonantSpellingsArray};