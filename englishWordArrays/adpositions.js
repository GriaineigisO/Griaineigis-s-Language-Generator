let adpositionArray = [];
let derivedOrInheritedADPO = [];

function clear() {
    adpositionArray = [];
    derivedOrInheritedADPO = [];  
    addWords();  
};

function addWords() {

adpositionArray.push("with");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("in");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("on");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("next&nbspto");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("together&nbspwith");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("from");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("out");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("back");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("away");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("at");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("by");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("to");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("towards");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("onto");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("into");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("behind");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("near");
derivedOrInheritedADPO.push("inherited");

adpositionArray.push("without");
derivedOrInheritedADPO.push("inherited");

};

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", clear);

export {adpositionArray, derivedOrInheritedADPO};