let adverbArray = [];
let derivedOrInheritedADV = [];

function clear() {
    adverbArray = [];
    derivedOrInheritedADV = [];
    addWords();
}

function addWords() {
adverbArray.push("again");
derivedOrInheritedADV.push("inherited");

adverbArray.push("still");
derivedOrInheritedADV.push("inherited");

adverbArray.push("during");
derivedOrInheritedADV.push("inherited");

adverbArray.push("outwards");
derivedOrInheritedADV.push("inherited");

adverbArray.push("upwards");
derivedOrInheritedADV.push("inherited");

adverbArray.push("downwards");
derivedOrInheritedADV.push("inherited");

adverbArray.push("toward");
derivedOrInheritedADV.push("inherited");

adverbArray.push("afterwards");
derivedOrInheritedADV.push("inherited");

adverbArray.push("nonetheless");
derivedOrInheritedADV.push("inherited");

adverbArray.push("quickly");
derivedOrInheritedADV.push("inherited");

};

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", clear);

export {adverbArray, derivedOrInheritedADV};