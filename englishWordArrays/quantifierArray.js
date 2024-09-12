let smallQuantifiersArray = [];
let middingQuantifierArray = [];
let bigQuantifierArray = [];
let opinionQuantifierArray = [];   
let quantifierArray = [];
let derivedOrInheritedQuantifier = [];
let etymologyArrayQuantifier = [];
let etymologyQuantifier = [];
let derivationListQuantfier = [];

function clear() {
    smallQuantifiersArray = [];
    middingQuantifierArray = [];
    bigQuantifierArray = [];
    opinionQuantifierArray = []; 
    quantifierArray = []; 
    etymologyArrayQuantifier = [];
    etymologyQuantifier = [];
    derivationListQuantfier = [];
    addWords();
}

function addWords() {

smallQuantifiersArray.push("few");
derivedOrInheritedQuantifier.push("inherited");
quantifierArray.push("few")
etymologyArrayQuantifier.push("X");
etymologyQuantifier.push("X");
derivationListQuantfier.push("");

smallQuantifiersArray.push("barely&nbspany");
derivedOrInheritedQuantifier.push("inherited");
quantifierArray.push("barely&nbspany")
etymologyArrayQuantifier.push("X");
etymologyQuantifier.push("X");
derivationListQuantfier.push("");
    
middingQuantifierArray.push("several");
derivedOrInheritedQuantifier.push("inherited");
quantifierArray.push("several")
etymologyArrayQuantifier.push("X");
etymologyQuantifier.push("X");
derivationListQuantfier.push("");

middingQuantifierArray.push("some");
derivedOrInheritedQuantifier.push("inherited");
quantifierArray.push("some")
etymologyArrayQuantifier.push("X");
etymologyQuantifier.push("X");
derivationListQuantfier.push("");

bigQuantifierArray.push("a&nbsplot&nbspof");
derivedOrInheritedQuantifier.push("inherited");
quantifierArray.push("a&nbsplot&nbspof")
etymologyArrayQuantifier.push("X");
etymologyQuantifier.push("X");
derivationListQuantfier.push("");

bigQuantifierArray.push("a&nbspgreat&nbspamount&nbspof");
derivedOrInheritedQuantifier.push("inherited");
quantifierArray.push("a&nbspgreat&nbspamount&nbspof")
etymologyArrayQuantifier.push("X");
etymologyQuantifier.push("X");
derivationListQuantfier.push("");

opinionQuantifierArray.push("enough");
derivedOrInheritedQuantifier.push("inherited");
quantifierArray.push("enough")
etymologyArrayQuantifier.push("X");
etymologyQuantifier.push("X");
derivationListQuantfier.push("");

opinionQuantifierArray.push("too&nbspmuch");
derivedOrInheritedQuantifier.push("inherited");
quantifierArray.push("too&nbspmuch")
etymologyArrayQuantifier.push("X");
etymologyQuantifier.push("X");
derivationListQuantfier.push("");

opinionQuantifierArray.push("not&nbspenough");
derivedOrInheritedQuantifier.push("inherited");
quantifierArray.push("not&nbspenough")
etymologyArrayQuantifier.push("X");
etymologyQuantifier.push("X");
derivationListQuantfier.push("");

};

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", clear);

    export {smallQuantifiersArray, middingQuantifierArray, bigQuantifierArray, opinionQuantifierArray, derivedOrInheritedQuantifier, quantifierArray, etymologyArrayQuantifier, etymologyQuantifier, derivationListQuantfier};