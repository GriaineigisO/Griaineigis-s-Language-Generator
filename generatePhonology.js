import { syllablesArray, approximantSyllables, nasalSyllables,fricativeSyllables, resonantSyllables, aspiratedSyllable } from "./allPossibleSyllables.js";


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
let allLabialisedPlosives = [];

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
    allLabialisedPlosives = [];

    allLabialDentalAffricates = [];
    allLabialAffricates = [];
    allAlveolarAffricates = [];
    allPostAlveolaraffricates = [];
    allVelaraffricatesArray = [];
    allUvularlAffricates = [];
    allGlottalAffricates = [];
    allUvularaffricatesArray

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

    

    //secondly, the default phonemes can be put back in
    allNasalsArray.push("m"),
    allNasalsArray.push("n")
    allLabialPlosivesArray.push("p");
    allAlveolarPlosivesArray.push("t");
    allVelarPlosivesArray.push("k");
    allAlveolarFricativesArray.push("s");
    allAlveolarRhoticsArray.push("r");
    allLateralsArray.push("l");
    selectedSyllables.push("CV")


    //the phonology table is set to display style none after after click
    document.getElementById("nasal-list").style.display = "none"
    document.getElementById("plosive-list").style.display = "none"
    document.getElementById("fricative-list").style.display = "none"
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


/*---CHOOSE SECTION----*/
//The functions here will decide if the language has a set of consonants based on Place of Articulation, such a retroflex, palatal etc. The very core PoA like velar, labial and alveolar will be chosen by default, as it is very rare for a language to lack those

let voicingTrueOrFalse = ""
let randomVoiceNum = Math.floor(Math.random() * 4);
function chooseVoicing() {//there is a 33% chance that this language will lack voicing
    if (randomVoiceNum === 2) { 
        voicingTrueOrFalse = false;
    } else {
        voicingTrueOrFalse = true;
    }
    if(voicingTrueOrFalse) {
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

let randomGeminationNum = Math.floor(Math.random() * 21);
function chooseGemination() {
    let trueOrFalse = "";
    if(randomGeminationNum === 4 ) {
        trueOrFalse = true;
    } else {
        trueOrFalse = false;
    }
    if(trueOrFalse) {
        allNasalsArray.push("mː");
        allLongConsonants.push("mː");
        allNasalsArray.push("nː");
        allLongConsonants.push("nː");
        allLabialPlosivesArray.push("pː");
        allLongConsonants.push("pː");
        allAlveolarPlosivesArray.push("tː");
        allLongConsonants.push("tː");
        allVelarPlosivesArray.push("kː");
        allLongConsonants.push("kː");
        allAlveolarFricativesArray.push("sː");
        allLongConsonants.push("sː");
        
        let randomNum = Math.floor(Math.random() * 10);
        if(randomNum === 1 && chooseVoicing()) {//there is a 50% chance that there will be /z/
            allLabialPlosivesArray.push("bː");
            allLongConsonants.push("bː");
            allAlveolarPlosivesArray.push("dː");
            allLongConsonants.push("dː");
            allVelarPlosivesArray.push("gː");
            allLongConsonants.push("gː");
            allAlveolarFricativesArray.push("zː");
            allLongConsonants.push("zː");
        }
    }
    return trueOrFalse;
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
    

    let randomNum = Math.floor(Math.random() * 21);
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
    let randomNum = Math.floor(Math.random() * 15);
    if (randomNum === 4) {
        allLabialFricativesArray.push("ɸ");
        randomNum = Math.floor(Math.random() * 6)
            if(randomNum === 4 && chooseGemination()) {
                allLabialApproximants.push("ɸː");
                allLongConsonants.push("ɸː")
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
        randomNum = Math.floor(Math.random() * 6)
        if(randomNum !== 2) {
            allLabialApproximants.push("w")
            randomNum = Math.floor(Math.random() * 6)
            if(randomNum === 4 && chooseGemination()) {
                allLabialApproximants.push("wː")
                allLongConsonants.push("wː")
            }
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
}

function chooseLabioDental() {
    let randomNum = Math.floor(Math.random() * 11);
    if(randomNum === 5) {
        allLabioDentalArray.push("f");
        randomNum = Math.floor(Math.random() * 23)
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
}

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
}

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
}

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
}

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
    

}

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
}

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
}

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
}

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
                allPharyngealFricatives.push("ɦ");
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
}

function choosePalatalised() {
    let randomNum = 5//Math.floor(Math.random() * 14);
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
}

function chooseLabialisation() {
    let randomNum = Math.floor(Math.random() * 14);
    if(randomNum === 5) {
        allLabialisedPlosives.push("tʷ");
        allAlveolarPlosivesArray.push("tʷ");
            if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                allLabialisedPlosives.push("dʷ");
                allAlveolarPlosivesArray.push("dʷ");
                if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                allLabialisedPlosives.push("dʷʰ");
                allAlveolarPlosivesArray.push("dʷʰ");
                    allAspiratesArray.push("dʷʰ");
            }
            }
            if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                allLabialisedPlosives.push("tʷʰ");
                allAlveolarPlosivesArray.push("tʷʰ");
                allAspiratesArray.push("tʷʰ");
            }

        randomNum = Math.floor(Math.random() * 7);
        if(randomNum === 30) {
            allLabialisedPlosives.push("sʷ");
            allAlveolarFricativesArray.push("sʷ");
            if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                allLabialisedPlosives.push("zʷ");
                allAlveolarFricativesArray.push("zʷ");
            }
        }

        randomNum = Math.floor(Math.random() * 7);
        if(randomNum === 30) {
            allLabialisedPlosives.push("pʷ");
            allLabialPlosivesArray.push("pʷ");
            if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                allLabialisedPlosives.push("bʷ");
                allLabialPlosivesArray.push("bʷ");
                if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {;
                allLabialisedPlosives.push("bʷʰ");
                allLabialPlosivesArray.push("bʷʰ");
                    allAspiratesArray.push("bʷʰ");
            }
            }
            if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                allLabialisedPlosives.push("pʷʰ");
                allLabialPlosivesArray.push("pʷʰ");
                allAspiratesArray.push("pʷʰ");
            }
        }

        randomNum = Math.floor(Math.random() * 7);
        if(randomNum === 30) {
            allLabialisedPlosives.push("kʷ");
            allVelarPlosivesArray.push("kʷ");
            if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                allLabialisedPlosives.push("kʷʰ");
                allVelarPlosivesArray.push("kʷʰ");
                allAspiratesArray.push("kʷʰ");
            }
            if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                allLabialisedPlosives.push("gʷ");
                allVelarPlosivesArray.push("gʷ");
                if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                allAspiratesArray.push("gʷʰ");
            }
            }
        }
        randomNum = Math.floor(Math.random() * 7);
        if(randomNum === 30) {
            allLabialisedPlosives.push("qʷ");
            allUvularPlosivesArray.push("qʷ");
            if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                allLabialisedPlosives.push("qʷʰ");
                allUvularPlosivesArray.push("qʷʰ");
                allAspiratesArray.push("qʷʰ");
            }
            if(chooseVoicing() && Math.floor(Math.random() * 2) === 1) {
                allLabialisedPlosives.push("ɢʷ");
                allUvularPlosivesArray.push("ɢʷ");
                if(chooseAspiration() && Math.floor(Math.random() * 2) === 1) {
                allAspiratesArray.push("ɢʷʰ");
            }
            }
        }
    }
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
    consonants = allNasalsArray.concat(allLabialPlosivesArray, allAlveolarPlosivesArray, allVelarPlosivesArray, allLabialFricativesArray, allAlveolarFricativesArray, allVelarFricatives, allAlveolarRhoticsArray, allLateralsArray, allLabialApproximants, allpalatalApproximants, allPalatalPlosivesArray, allPostAlveolarFricatives, allpalatalAffricates, allPalatalFricatives, allDentalFricatives, allLabioDentalArray, allLabialDentalApproximants, allUvularPlosivesArray, allUvularFricativesArray, allPharyngealFricatives, allGlottalPlosives, allGlottalFricatives, allLateralFricatives, allLabialDentalAffricates, allLabialAffricates, allAlveolarAffricates, allPostAlveolaraffricates, allVelaraffricatesArray, allUvularlAffricates, allGlottalAffricates, allPalatalisedConsonants, allLabialisedPlosives);
    
}


/*********************VOWELS*******************/

function chooseLength() {
    let randomNum = Math.floor(Math.random() * 11);
    let trueOrFalse = "";
    if(randomNum === 1) {
        trueOrFalse = true;
    } else {
        trueOrFalse = false;
    }
    return trueOrFalse;
}



function chooseNumberOfMainVowels() {
    let randomNum = Math.floor(Math.random() * 3)
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
                allLongHighVowels .push("iː");
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
                allLongHighVowels .push("iː");
            }
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum !== 3) {
                allLongHighVowels.push("uː");
                allLongBackVowels.push("uː");
            }
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum !== 3) {
                allLongLowVowels .push("aː");
                allLongCentralVowels .push("aː");
            }
        }
        numberOfVowels = 3;
    } else if (randomNum === 2) {//produces five vowel qualities, i, u, e, o and a
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
    
}

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
            allMidVowels .push("ɘ");
            allCentralVowels.push("ɘ");
            if(chooseLength()) {
                allLongMidVowels .push("ɘː");
                allLongCentralVowels.push("ɘː");
            }
          }
          randomNum = Math.floor(Math.random() * 7);
        if(randomNum === 4) {
            allMidVowels .push("ɵ");
            allCentralVowels.push("ɵ");
            if(chooseLength()) {
                allLongMidVowels .push("ɵː");
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
                    allLongHighMidVowels  .push("ɪː");
                    allLongFrontVowels .push("ɪː");
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
                            allLongFrontVowels .push("ʏː");
                        }
                    }
                }
            }
        }
        randomNum = Math.floor(Math.random() * 6);
        if(randomNum !== 4 && chooseBackUnroundedVowels()) {
            allHighMidVowels.push("ʊ");
            if(chooseLength()) {
                randomNum = Math.floor(Math.random() * 5);
                if(randomNum === 2) {
                     allLongBackVowels .push("ʊː")
            	  }
            }
        }
    }
}

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
    
}

let shortVowels = [];
let allLongVowels = [];
let allVowelsArrayFixed = [];
function collectAllVowels() {
    shortVowels = allFrontVowels.concat(allCentralVowels, allBackVowels, allHighVowels, allHighMidVowels, allMidVowels, allLowMidVowels, allLowVowels);

    allVowelsArrayFixed = shortVowels.filter((element, index) => { //removes duplicates
    return shortVowels.indexOf(element) === index;
    });

    vowels = allVowelsArrayFixed.concat(allLongFrontVowels, allLongBackVowels, allLongCentralVowels, allLongHighVowels, allLongHighMidVowels, allLongMidVowels, allLongLowMidVowels, allLongLowVowels)
    
    document.getElementById("vowel-number").innerHTML = allVowelsArrayFixed.length

    allLongVowels = allLongFrontVowels.concat(allLongBackVowels, allLongCentralVowels, allLongHighVowels, allLongHighMidVowels, allLongMidVowels, allLongLowMidVowels, allLongLowVowels);

    if(allLongVowels.length > 0) {
         document.getElementById("vowel-quantities").style.display = "inline";
    }

    return vowels;

}


function populateVowelLists() {
    //HIGH 
    let shortAndLongHighVowels = allHighVowels.concat(allLongHighVowels )

    let shortAndLongHighVowelsfixed = shortAndLongHighVowels.filter((element, index) => { //removes duplicates
        return shortAndLongHighVowels.indexOf(element) === index;
        });
    document.getElementById("high-vowels").innerHTML = `/${shortAndLongHighVowelsfixed.join(", ")}/`;
        if(shortAndLongHighVowelsfixed.length > 0) {
        document.getElementById("high-vowel-list").style.display = "block";
        }

    //HIGH MID
    let shortAndLongHighMidVowels = allHighMidVowels.concat(allLongHighMidVowels);

    let shortAndLongHighMidVowelsfixed = shortAndLongHighMidVowels .filter((element, index) => { //removes duplicates
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


selectedSyllables = ["CV"]
function chooseSyllablesToBeUsed() {    
    
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
    document.getElementById("syllable-structure-list").innerHTML = selectedSyllables.join(", ");
}




/*************^^^GENERATES EXAMPLES FOR SYLLABLE STRUCTURE^^^************ */

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generatePhonology);

function generatePhonology() {
    restoreDefault();

    chooseVoicing();
    chooseGemination();
    chooseAspiration();

    chooseLabial();
    chooseLabioDental();
    chooseRetroflex();
    chooseDental();
    chooseAlveolar();
    choosePostAlveolar();
    choosePalatal();
    chooseVelar();
    chooseUvular();
    choosePharyngeal();
    chooseGlottal();
    choosePalatalised();
    chooseLabialisation();
    
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
    chooseFrontRoundedVowels();
    chooseNumberOfMainVowels();
    chooseBackUnroundedVowels();
    chooseCentralVowels();
    chooseSchwa();
    chooseHighMidVowels();
    chooseLowMidVowels();
    chooseLowVowels();
    collectAllVowels();
    populateVowelLists();

    chooseSyllablesToBeUsed();

}

export {consonants, vowels, selectedSyllables, selectApproximants, selectFricatives, selectNasals, selectPlosives, selectAffricates, selectRhotics, selectLateralApproximants, allAspiratesArray, chooseLength, allGlottalFricatives, allVelarFricatives, allUvularFricativesArray, allUvularPlosivesArray, allLabioDentalArray, chooseVoicing, allLongVowels, allLongConsonants, voicingTrueOrFalse, allHighVowels, allNasalsArray};