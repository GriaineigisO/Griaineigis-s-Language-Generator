let adpositionArray = [];
let derivedOrInheritedADPO = [];
let derivationListAdpo = [];
let etymologyADPO = [];

function clear() {
    adpositionArray = [];
    derivedOrInheritedADPO = [];  
    derivationListAdpo = [];
    etymologyADPO = [];
    addWords();  
};

function addWords() {

adpositionArray.push("with");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("in");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("on");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("next&nbspto");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("together&nbspwith");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("from");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("out");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("back");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("away");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("at");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("by");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("to");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("towards");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("onto");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("into");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("behind");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

adpositionArray.push("without");
derivedOrInheritedADPO.push("inherited");
derivationListAdpo.push("");
etymologyADPO.push("");

};

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", clear);

export {adpositionArray, derivedOrInheritedADPO, derivationListAdpo, etymologyADPO};