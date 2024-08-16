let intensifierArray = [];
let derivedOrInheritedINTENS = [];

function clear() {
    intensifierArray = [];
    derivedOrInheritedINTENS = [];
    addWords();
};

function addWords() {

intensifierArray.push("very")
derivedOrInheritedINTENS.push("inherited");

intensifierArray.push("seriously")
derivedOrInheritedINTENS.push("inherited");

intensifierArray.push("fairly")
derivedOrInheritedINTENS.push("inherited");

intensifierArray.push("quite")
derivedOrInheritedINTENS.push("inherited");

intensifierArray.push("too")
derivedOrInheritedINTENS.push("inherited");
}

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", clear);

export {intensifierArray, derivedOrInheritedINTENS};