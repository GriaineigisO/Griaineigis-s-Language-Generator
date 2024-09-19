let adverbArray = [];
let derivedOrInheritedADV = [];
let derivationListAdverb = [];

function clear() {
    adverbArray = [];
    derivedOrInheritedADV = [];
    derivationListAdverb = [];
    addWords();
}

function addWords() {
adverbArray.push("again");
derivedOrInheritedADV.push("inherited");
derivationListAdverb.push("");

adverbArray.push("still");
derivedOrInheritedADV.push("inherited");
derivationListAdverb.push("");

adverbArray.push("during");
derivedOrInheritedADV.push("inherited");
derivationListAdverb.push("");

adverbArray.push("outwards");
derivedOrInheritedADV.push("inherited");
derivationListAdverb.push("");

adverbArray.push("upwards");
derivedOrInheritedADV.push("inherited");
derivationListAdverb.push("");

adverbArray.push("downwards");
derivedOrInheritedADV.push("inherited");
derivationListAdverb.push("");

adverbArray.push("toward");
derivedOrInheritedADV.push("inherited");
derivationListAdverb.push("");

adverbArray.push("afterwards");
derivedOrInheritedADV.push("inherited");
derivationListAdverb.push("");

adverbArray.push("nonetheless");
derivedOrInheritedADV.push("inherited");
derivationListAdverb.push("");

adverbArray.push("quickly");
derivedOrInheritedADV.push("inherited");
derivationListAdverb.push("");

};

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", clear);

export {adverbArray, derivedOrInheritedADV, derivationListAdverb};