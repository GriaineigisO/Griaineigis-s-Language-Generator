let smallQuantifiersArray = [];
let middingQuantifierArray = [];
let bigQuantifierArray = [];
let opinionQuantifierArray = [];   
let derivedOrInheritedQuantifier = [];

function clear() {
    smallQuantifiersArray = [];
    middingQuantifierArray = [];
    bigQuantifierArray = [];
    opinionQuantifierArray = [];  
    addWords();
}

function addWords() {

smallQuantifiersArray.push("few");
derivedOrInheritedQuantifier.push("inherited");

smallQuantifiersArray.push("barely&nbspany");
derivedOrInheritedQuantifier.push("inherited");
    
middingQuantifierArray.push("several");
derivedOrInheritedQuantifier.push("inherited");

middingQuantifierArray.push("some");
derivedOrInheritedQuantifier.push("inherited");

bigQuantifierArray.push("a&nbsplot&nbspof");
derivedOrInheritedQuantifier.push("inherited");

bigQuantifierArray.push("a&nbspgreat&nbspamount&nbspof");
derivedOrInheritedQuantifier.push("inherited");

opinionQuantifierArray.push("enough");
derivedOrInheritedQuantifier.push("inherited");

opinionQuantifierArray.push("too&nbspmuch");
derivedOrInheritedQuantifier.push("inherited");

opinionQuantifierArray.push("not&nbspenough");
derivedOrInheritedQuantifier.push("inherited");

};

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", clear);

    export {smallQuantifiersArray, middingQuantifierArray, bigQuantifierArray, opinionQuantifierArray, derivedOrInheritedQuantifier};