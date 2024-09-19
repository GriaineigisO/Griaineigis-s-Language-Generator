let intensifierArray = [];
let derivedOrInheritedINTENS = [];
let derivationListIntensifier = [];

function clear() {
    intensifierArray = [];
    derivationListIntensifier = [];
    derivedOrInheritedINTENS = [];
    addWords();
};

function addWords() {

intensifierArray.push("very")
derivedOrInheritedINTENS.push("inherited");
derivationListIntensifier.push("");

intensifierArray.push("seriously")
derivedOrInheritedINTENS.push("inherited");
derivationListIntensifier.push("");

intensifierArray.push("fairly")
derivedOrInheritedINTENS.push("inherited");
derivationListIntensifier.push("");

intensifierArray.push("quite")
derivedOrInheritedINTENS.push("inherited");
derivationListIntensifier.push("");

intensifierArray.push("too")
derivedOrInheritedINTENS.push("inherited");
derivationListIntensifier.push("");
}

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", clear);

export {intensifierArray, derivedOrInheritedINTENS, derivationListIntensifier};