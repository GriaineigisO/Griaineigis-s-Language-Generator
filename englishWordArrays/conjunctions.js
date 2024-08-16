let conjunctionArray = [];
let derivedOrInheritedCONJ = [];

function clear() {
    conjunctionArray = [];
    derivedOrInheritedCONJ = [];
    addWords();
};

function addWords() {
conjunctionArray.push("also");
derivedOrInheritedCONJ.push("inherited");

conjunctionArray.push("and");
derivedOrInheritedCONJ.push("inherited");

conjunctionArray.push("as");
derivedOrInheritedCONJ.push("inherited");

conjunctionArray.push("as&nbspwell&nbspas");
derivedOrInheritedCONJ.push("inherited");

conjunctionArray.push("or");
derivedOrInheritedCONJ.push("inherited");

conjunctionArray.push("but");
derivedOrInheritedCONJ.push("inherited");

conjunctionArray.push("either");
derivedOrInheritedCONJ.push("inherited");

conjunctionArray.push("otherwise");
derivedOrInheritedCONJ.push("inherited");

conjunctionArray.push("however");
derivedOrInheritedCONJ.push("inherited");

conjunctionArray.push("except");
derivedOrInheritedCONJ.push("inherited");

};

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", clear);

export {conjunctionArray, derivedOrInheritedCONJ};