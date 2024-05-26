import {soundChange} from './soundchange.js'

let allNasalsArray = [];
let allLabialPlosivesArray = [];
let allAlveolarPlosivesArray = [];
let allVelarPlosivesArray = [];
let allLabialFricativesArray = [];
let allAlveolarFricativesArray = [];
let allVelarFricativesArray = [];
let allAlveolarRhoticssArray = [];
let allAlveolarLateralsArray = [];

let allLabialApproximants = [];
let allpalatalApproximants = [];


//restores the phonology to it's default state every time the button is pushed, before applying the below functions
function restoreDefault() {
    //first, the arrays must be emptied
    allNasalsArray = [];
    allLabialPlosivesArray = [];
    allAlveolarPlosivesArray = [];
    allVelarPlosivesArray = [];
    allLabialFricativesArray = [];
    allAlveolarFricativesArray = [];
    allVelarFricativesArray = [];
    allAlveolarRhoticssArray = [];
    allAlveolarLateralsArray = [];
    allLabialApproximants = [];
    allpalatalApproximants = [];

    //secondly, the default phonemes can be put back in
    allNasalsArray.push("m"),
    allNasalsArray.push("n")
    allLabialPlosivesArray.push("p");
    allAlveolarPlosivesArray.push("t");
    allVelarPlosivesArray.push("k");
    allAlveolarFricativesArray.push("s");
    allAlveolarRhoticssArray.push("r");
    allAlveolarLateralsArray.push("l");
}


/*---CHOOSE SECTION----*/
//The functions here will decide if the language has a set of consonants based on Place of Articulation, such a retroflex, palatal etc. The very core PoA like velar, labial and alveolar will be chosen by default, as it is very rare for a language to lack those

function chooseVoicing() {//there is a 33% chance that this language will lack voicing
    let randomNum = Math.floor(Math.random() * 4);
    let trueOrFalse = ""
    if (randomNum === 2) { 
        trueOrFalse = false;
    } else {
        trueOrFalse = true;
    }
    if(trueOrFalse) {
        allLabialPlosivesArray.push("b");
        allAlveolarPlosivesArray.push("d");
        allVelarPlosivesArray.push("g");
        
        randomNum = Math.floor(Math.random() * 3);
        if(randomNum === 1) {//there is a 50% chance that there will be /z/
            allAlveolarFricativesArray.push("z");
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
            allAlveolarRhoticssArray.push("ɽ");
            allAlveolarLateralsArray.push("ɭ")
        }
    }
}

function choosePalatal() {//there ise a 20% chance that this language has palatal consonants
    let randomNum = Math.floor(Math.random() * 6);
    if (randomNum === 3) {
        allNasalsArray.push("ɲ");
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
    return spanNasalList.length;
}

function selectPlosives() {
    let spanPlosiveList = document.getElementsByClassName("plosive-list");
    let allPlosivesArray = allLabialPlosivesArray.concat(allAlveolarPlosivesArray, allVelarPlosivesArray);
    let allPlosivesArrayFixed = allPlosivesArray.filter((element, index) => { //removes duplicates
        return allPlosivesArray.indexOf(element) === index;
    });
    for(let i = 0; i < spanPlosiveList.length; i++) {
        spanPlosiveList[i].innerHTML = `/${allPlosivesArrayFixed.join(", ")}/`;
    }
    return allPlosivesArrayFixed.length;
}

function selectFricatives() {
    let spanFricativeList = document.getElementsByClassName("fricative-list");
    let allFricativesArray = allLabialFricativesArray.concat(allAlveolarFricativesArray, allVelarFricativesArray);
    for(let i = 0; i < spanFricativeList.length; i++) {
        spanFricativeList[i].innerHTML = `/${allFricativesArray.join(", ")}/`;
    }
    return allFricativesArray.length;
}

function selectRhotics() {
    let spanRhoticList = document.getElementsByClassName("rhotic-list");
    let allRhoticsArray = allAlveolarRhoticssArray;
    for(let i = 0; i < spanRhoticList.length; i++) {
        spanRhoticList[i].innerHTML = `/${allRhoticsArray.join(", ")}/`;
    }
    return allRhoticsArray.length;
}

function selectLateralApproximants() {
    let spanLateralApproximantsList = document.getElementsByClassName("lateral-list");
    let allLateralApproximantsArray = allAlveolarLateralsArray;
    for(let i = 0; i < spanLateralApproximantsList.length; i++) {
        spanLateralApproximantsList[i].innerHTML = `/${allLateralApproximantsArray.join(", ")}/`;
    }
    return allLateralApproximantsArray.length;
}

function selectApproximants() {
    let spanApproximantsList = document.getElementsByClassName("approximant-list");
    let allApproximantsArray = allLabialApproximants.concat(allpalatalApproximants);
    for(let i = 0; i < spanApproximantsList.length; i++) {
        spanApproximantsList[i].innerHTML = `/${allApproximantsArray.join(", ")}/`;
        if(allApproximantsArray.length === 0) {
            spanApproximantsList[i].innerHTML = 'There are no phonemic approximants.'
        }
    }
    return allApproximantsArray.length;  
}

function countNumberOfConsonants() {
  const numberOfConsonants =  selectNasals() + selectPlosives() + selectFricatives() + selectRhotics() + selectLateralApproximants() + selectApproximants() + 1; //for some reason, the result was 1 too low

  document.getElementById("consonant-number").innerHTML = numberOfConsonants;
}

/*-----^^^SELECTION^^^--------------*/

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generatePhonology);

function generatePhonology() {
    restoreDefault();

    chooseVoicing();
    chooseRetroflex();
    choosePalatal();
    

    
    selectNasals();
    selectPlosives();
    selectFricatives();
    selectRhotics();
    selectLateralApproximants();
    selectApproximants();
    countNumberOfConsonants();
}



export {generatePhonology};