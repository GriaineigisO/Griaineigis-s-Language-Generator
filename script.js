//The arrays containing the English translations are naturally very large, so I placed each one in its own file and just import them to keep this file tidier.
import nounArray from './englishWordArrays/Nouns/englishNouns.js';
import nounArrayPlural from './englishWordArrays/Nouns/englishPluralNouns.js';
import transitiveVerbArray from './englishWordArrays/Verbs/englishTransitiveVerbs.js';
import intransitiveVerbArray from './englishWordArrays/Verbs/englishIntransitiveVerbs.js';
import transitiveVerbPastArray from './englishWordArrays/Verbs/englishTransitiveVerbsPast.js'
import intransitiveVerbPastArray from './englishWordArrays/Verbs/englishIntransitiveVerbsPast.js'
import adjectiveArray from './englishWordArrays/Adjectives/englishAdjectives.js';
import comparativeAdjectiveArray from './englishWordArrays/Adjectives/EnglishComparative Adjectives.js'
import intransitiveVerb3SArray from './englishWordArrays/Verbs/englishIntransitiveVerbs3S.js'
import transitiveVerb3SArray from './englishWordArrays/Verbs/englishTransitiveVerbs3S.js'

let verbArray = transitiveVerbArray.concat(intransitiveVerbArray); //combines both transitive and intransitive verbs into one list for cases where transitivity is irrelevant
let verbPastArray = transitiveVerbPastArray.concat(intransitiveVerbPastArray);;
let verbThirdPersonSingularArray = intransitiveVerb3SArray.concat(transitiveVerb3SArray);

/* CHANGES LANGUAGE NAME---------------------*/

let changeNameButton = document.getElementById("change-name");
changeNameButton.addEventListener("click", nameChanger);
let changeName = document.getElementById("changeName");
let newSpan = document.getElementsByClassName("language-name");
function nameChanger() {
    for(let i = 0; i < newSpan.length; i++) {
        if (newSpan[i].innerHTML != changeName.value) {
            newSpan[i].innerHTML = changeName.value;
        }
    }
}

/* CHANGES LANGUAGE NAME^^^^^---------------------*/

/*----CLEAR OUTPUT------------*/
let submitButton = document.getElementById("submitWords");
let clearButton = document.getElementById("clear-inputNoun");

submitButton.addEventListener("click", createNounInflectionTables);
clearButton.addEventListener("click", clearOutput);

function clearOutput() { //clears previous results upon clicking "Clear Output"
    outputSectionNoun.replaceChildren();
    document.getElementById("inputRootNoun").value = "";
    document.getElementById("inputMeaningNoun").value = "";
    document.getElementById("inputRootAdj").value = "";
    document.getElementById("inputMeaningAdj").value = "";
    document.getElementById("inputToBe").value = "";
    document.getElementById("inputRootTransitiveVerb").value = "";
    document.getElementById("inputRootIntransitiveVerb").value = "";
    document.getElementById("inputMeaningTransitiveVerb").value = "";
    document.getElementById("inputMeaningIntransitiveVerb").value = "";
    document.getElementById("inputNominaliser").value = "";
    document.getElementById("inputAlso").value = "";
    document.getElementById("inputHere").value = "";
    document.getElementById("inputThere").value = "";
    document.getElementById("inputAgain").value = "";
    document.getElementById("inputPlace").value = "";
    document.getElementById("inputMan").value = "";
    document.getElementById("inputPath").value = "";
    document.getElementById("inputOrigin").value = "";
    document.getElementById("inputTime").value = "";
    document.getElementById("inputAdverbialSuffix").value = "";
    document.getElementById("first-person-pronoun").value = "";
    document.getElementById("second-person-pronoun").value = "";
    document.getElementById("non-past").value = "";
    document.getElementById("singular-suffix").value = "";
    document.getElementById("plural-suffix").value = "";
    document.getElementById("accusative-prefix").value = "";
    document.getElementById("genitive-prefix").value = "";
    document.getElementById("input-habitual-suffix").value = "";
    document.getElementById("input-plural-verb").value = "";
}

/*-------^^^CLEAR OUTPUT^^^--------------/

/*------------SOUND CHANGES------------------------------------------------------*/

function soundChange(word) {

    let vowels = ["a", "ā", "e", "ē", "o", "ō", "u", "ū", "i", "ī", "ə"];
    let longVowels = ["ā", "ē", "ō", "ū", "ī", "ə"];
    let consonants = ["m", "n", "p", "b", "t", "d", "k", "g", "f", "v", "s", "z", "h", "l", "r", "j", "w"];

    let letterArray = Array.from(word); /*turns string into an array of individual letters*/

    /*---------SYNCOPE-----------*/
    //removes the fourth letter of words longer than four letters, and lengthens the first vowel, or if the third and fourth letters are the same, removes the fifth letter abd lengthens the fourth letter
    if(vowels.includes(letterArray[0])) {
        if (letterArray.length > 4) {
            if (letterArray[1] == letterArray[3]) { //check's if the third and fourth letter are the same
                letterArray.splice([4], 1); // 2nd parameter means remove one item only
                if (letterArray[2] == "o") {
                    letterArray[2] = "ō"
                } else if (letterArray[2] == "u") {
                    letterArray[2] = "ū"
                } else if (letterArray[2] == "i") {
                    letterArray[2] = "ī"
                } else if (letterArray[2] == "e") {
                    letterArray[2] = "ē"
                } else if (letterArray[23] == "a") {
                    letterArray[2] = "ā"
                }
            } else if(vowels.includes(letterArray[4])) {
                letterArray.splice([2], 1);
                if (letterArray[0] == "o") {
                    letterArray[0] = "ō"
                } else if (letterArray[0] == "u") {
                    letterArray[0] = "ū"
                } else if (letterArray[0] == "i") {
                    letterArray[0] = "ī"
                } else if (letterArray[0] == "e") {
                    letterArray[0] = "ē"
                } else if (letterArray[0] == "a") {
                    letterArray[0] = "ā"
                }
            }
    }
    } else { //else if letterArray[0]'s value is a consonant
        if (letterArray.length > 4) {
            if (letterArray[2] == letterArray[4]) { //check's if the third and fourth letter are the same
                letterArray.splice([5], 1); // 2nd parameter means remove one item only
                if (letterArray[3] == "o") {
                    letterArray[3] = "ō"
                } else if (letterArray[3] == "u") {
                    letterArray[3] = "ū"
                } else if (letterArray[3] == "i") {
                    letterArray[3] = "ī"
                } else if (letterArray[3] == "e") {
                    letterArray[3] = "ē"
                } else if (letterArray[3] == "a") {
                    letterArray[3] = "ā"
                }
            } else if(vowels.includes(letterArray[3])) {
                letterArray.splice([3], 1);
                if (letterArray[1] == "o") {
                    letterArray[1] = "ō"
                } else if (letterArray[1] == "u") {
                    letterArray[1] = "ū"
                } else if (letterArray[1] == "i") {
                    letterArray[1] = "ī"
                } else if (letterArray[1] == "e") {
                    letterArray[1] = "ē"
                } else if (letterArray[1] == "a") {
                    letterArray[1] = "ā"
                }
            }
    }
    }
    
    let syncopedString = letterArray.join(""); //turns the array back into a string

    let lenitionString0 = syncopedString.replace("pb", "fp");
    let lenitionString1 = lenitionString0.replace("bp", "fp");
    let lenitionString2 = lenitionString1.replace("gk", "hk");
    let lenitionString3 = lenitionString2.replace("kg", "hk");
    let lenitionString4 = lenitionString3.replace("dt", "st");
    let lenitionString5 = lenitionString4.replace("td", "st");
    let lenitionString6 = lenitionString5.replace("bm", "mb");
    let lenitionString7 = lenitionString6.replace("mt", "md");
    let lenitionString8 = lenitionString7.replace("mp", "mb");
    let lenitionString9 = lenitionString8.replace("mk", "mg");

    let furtherChanges = Array.from(lenitionString9);

    let rejoinedString = furtherChanges.join(""); //turns the array back into a string

    //removes "h" if it occurs both after another consonant and before "k". Due to interference with the "h" in the accusative prefix, I had to make this rather clunky workaround. This turns "hk" clusters into "X" (all cases of post-consonantal "h" occur befor "h") and then check if "X" if after a consonant, if it is, then "X" becomes "k", else, it becomes "hk" again
    let hKtoX = rejoinedString.replace("hk", "X");
    let beforeX = consonants.includes(hKtoX.charAt(hKtoX.indexOf("X") - 1));
    let removeCX = hKtoX.includes("X") && beforeX ? hKtoX.replace("X", "k") : hKtoX;
    let returnXtoHK = removeCX.replace("X", "hk");
    
    //checks if "r" is before and after a consonant, and turns it into schwa if so
    let syllabliseR = returnXtoHK.includes("r") && consonants.includes(returnXtoHK.charAt(returnXtoHK.indexOf("r") + 1)) && consonants.includes(returnXtoHK.charAt(returnXtoHK.indexOf("r") - 1)) ? returnXtoHK.replace("r", "ə") : returnXtoHK;

    //checks if "l" is before and after a consonant, and turns it into schwa if so
    let syllabliseL = syllabliseR.includes("l") && consonants.includes(syllabliseR.charAt(syllabliseR.indexOf("l") + 1)) && consonants.includes(syllabliseR.charAt(syllabliseR.indexOf("l") - 1)) ? syllabliseR.replace("l", "ə") : syllabliseR;

    //turns geminates into singletons
    let reduceGeminate = syllabliseL.replace("pp", "p");
    let reduceGeminate1 = reduceGeminate.replace("bb", "b");
    let reduceGeminate2 = reduceGeminate1.replace("tt", "t");
    let reduceGeminate3 = reduceGeminate2.replace("dd", "d");
    let reduceGeminate4 = reduceGeminate3.replace("kk", "k");
    let reduceGeminate5 = reduceGeminate4.replace("gg", "g");
    let reduceGeminate6 = reduceGeminate5.replace("ss", "s");
    let reduceGeminate7 = reduceGeminate6.replace("ll", "l");
    let reduceGeminate8 = reduceGeminate7.replace("rr", "r");
    let reduceGeminate9 = reduceGeminate8.replace("nn", "n");
    let reduceGeminate10 = reduceGeminate9.replace("mm", "m");
    let reduceGeminate11 = reduceGeminate10.replace("hh", "h");
    
    let syllabliseJ = reduceGeminate11.includes("j") && consonants.includes(reduceGeminate11.charAt(reduceGeminate11.indexOf("j") + 1)) || reduceGeminate11[reduceGeminate11.length - 1] == "j" ? reduceGeminate11.replace("j", "i") : reduceGeminate11;

    let syllabliseW = syllabliseJ.includes("w") && consonants.includes(syllabliseJ.charAt(syllabliseJ.indexOf("w") + 1)) || syllabliseJ[syllabliseJ.length - 1] == "w" ? syllabliseJ.replace("w", "u"): syllabliseJ;

    let fixMacronUPlusU = syllabliseW.replace("ūu", "ū");
    let fixUPlusMacronU = fixMacronUPlusU.replace("uū", "ū");
    let fixUPlusU = fixUPlusMacronU.replace("uu", "ū");
    let fixMacronUPlusU2 = fixUPlusU.replace("ūu", "ū"); //because "uuw" becomes "uuu" then "ūu" which happens after the first "ūu" > "ū"

    let fixMacronIPlusI = fixMacronUPlusU2.replace("īi", "ī");
    let fixIPlusMacronI = fixMacronIPlusI.replace("iī", "ī");
    let fixIPlusI = fixIPlusMacronI.replace("ii", "ī");

    let fixMacronEplusE = fixIPlusI.replace("ēe", "ē");
    let fixEPlusMacronE = fixMacronEplusE.replace("eē", "ē");
    let fixEPlusE = fixEPlusMacronE.replace("ee", "ē");

    let fixMacronOplusO = fixEPlusE.replace("ōo", "o");
    let fixOPlusMacronO = fixMacronOplusO.replace("oō", "ō");
    let fixOPlusO = fixOPlusMacronO.replace("oo", "ō");

    let fixMacronAplusA = fixOPlusO.replace("āa", "ā");
    let fixAPlusMacronA = fixMacronAplusA.replace("aā", "ā");
    let fixAPlusA = fixAPlusMacronA.replace("aa", "ā");

    return fixAPlusA;
}

/*-----------^^^-SOUND CHANGES-^^^-----------------------------------------------------*/

let submitCases = document.getElementById("submitWords");
submitCases.addEventListener("click", createNounCases,);

let generateButton = document.getElementById("generate-vocab");
generateButton.addEventListener("click", generateCases);

function generateCases() {
    generateSg();
    generatePl();
    generateAcc();
    generateGen();
}

//randomly generates a word for singular suffix
function generateSg() {
    let sgInput = document.getElementById("singular-suffix");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        sgInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        sgInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        sgInput.value = CVC;
    } 


}

//randomly generates a word for singular suffix
function generatePl() {
    let plInput = document.getElementById("plural-suffix");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        plInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        plInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        plInput.value = CVC;
    } 


}

//randomly generates a accusative prefix
function generateAcc() {
    let accPrefix = document.getElementById("accusative-prefix");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        accPrefix.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        accPrefix.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        accPrefix.value = CVC;
    } 


}

//randomly generates a accusative prefix
function generateGen() {
    let genPrefix = document.getElementById("genitive-prefix");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        genPrefix.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        genPrefix.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        genPrefix.value = CVC;
    } 


}

//Generates the singular suffix
function createSg() {
    let inputSg = document.getElementById("singular-suffix");
    let wordSg = inputSg.value;
    let spanSg = document.getElementsByClassName("sg-suffix");
    for(let i = 0; i < spanSg.length; i++) {
        if (wordSg != "") { //if no word has been input by the user, then nothing happens
            if (spanSg[i].innerHTML != soundChange(wordSg)) {
                spanSg[i].innerHTML = soundChange(wordSg);
            }
        }
    }
    return wordSg
}


/*-------CREATE WORDS-------------------------------*/
//The functions below take the words input by the users, or words randomly generated by the 'generate' functions below, and then send them to the appriopiate elements in the HTML.

//Generates the plural suffix
function createPl() {
    let inputPl = document.getElementById("plural-suffix");
    let wordPl = inputPl.value;
    let spanPl = document.getElementsByClassName("pl-suffix");
    for(let i = 0; i < spanPl.length; i++) {
        if (wordPl != "") { //if no word has been input by the user, then nothing happens
            if (spanPl[i].innerHTML != soundChange(wordPl)) {
                spanPl[i].innerHTML = soundChange(wordPl);
            }
        }
    }
    return wordPl
}

//Generates the accusative prefix
function createAcc() {
    let inputAcc = document.getElementById("accusative-prefix");
    let wordAcc = inputAcc.value;
    let spanAcc = document.getElementsByClassName("acc-prefix");
    for(let i = 0; i < spanAcc.length; i++) {
        if (wordAcc != "") { //if no word has been input by the user, then nothing happens
            if (spanAcc[i].innerHTML != soundChange(wordAcc)) {
                spanAcc[i].innerHTML = soundChange(wordAcc);
            }
        }
    }
    return wordAcc
}

//Generates the genitive prefix
function createGen() {
    let inputGen = document.getElementById("genitive-prefix");
    let wordGen = inputGen.value;
    let spanGen = document.getElementsByClassName("gen-prefix");
    for(let i = 0; i < spanGen.length; i++) {
        if (wordGen != "") { //if no word has been input by the user, then nothing happens
            if (spanGen[i].innerHTML != soundChange(wordGen)) {
                spanGen[i].innerHTML = soundChange(wordGen);
            }
        }
    }
    return wordGen
}

function createNounCases() {
    createSg();
    createPl();
    createAcc();
    createGen();
}

//Takes the words from both text fields and splits them into arrays, then it creates an object using both arrays.
function createNounInflectionTables() {
    let outputSection = document.getElementById("outputSectionNoun");
    outputSection.replaceChildren(); //clears the previous output upon refreshing the page

    //Creates a div to contain the root inflection tables, and adds an h1 to it.
    let inflectionDiv = document.createElement("div");
    inflectionDiv.classList.add("inflection-output", "scroll-container");
    let inflectionH1 = document.createElement("h1");
    inflectionH1.innerHTML = "Inflected Roots";
    outputSection.appendChild(inflectionH1);
    inflectionH1.setAttribute("id", "inflectionH1");

    outputSection.appendChild(inflectionDiv);

    //Creates a div to contain the compound inflection tables, and adds an h1 to it.
    let compoundDiv = document.createElement("div");
    compoundDiv.classList.add("compound-output", "scroll-container");
    let compoundH1 = document.createElement("h1");
    outputSection.appendChild(compoundH1);
    compoundH1.innerHTML = "Compounds";
    outputSection.appendChild(compoundDiv);

    let inputRoot = document.getElementById("inputRootNoun").value;
    let splitInputRoot = inputRoot.split(" ");
    let inputMeaning = document.getElementById("inputMeaningNoun").value;
    let splitInputMeaning = inputMeaning.split(" ");


    /*the below are the same as some functions above, I had to place them inside this function also, instead of just calling the functions because that caused an infinite loop for a reason that I do not know*/
    //makes the singular suffix
    let inputSg = document.getElementById("singular-suffix");
    let sgSuffix = inputSg.value;
    let spanSg = document.getElementsByClassName("sg-suffix");
    for(let i = 0; i < spanSg.length; i++) {
        if (sgSuffix != "") { //if no word has been input by the user, then nothing happens
            spanSg[i].innerHTML = soundChange(sgSuffix);
        
        }
    }
    //makes the plural suffix
    let inputPl = document.getElementById("plural-suffix");
    let plSuffix = inputPl.value;
    let spanPl = document.getElementsByClassName("pl-suffix");
    for(let i = 0; i < spanPl.length; i++) {
        if (plSuffix != "") { //if no word has been input by the user, then nothing happens
            if (spanPl[i].innerHTML != soundChange(plSuffix)) {
                spanPl[i].innerHTML = soundChange(plSuffix);
            }
        }
    }

    //Generates the accusative prefix
    let inputAcc = document.getElementById("accusative-prefix");
    let accPrefix = inputAcc.value;
    let spanAcc = document.getElementsByClassName("acc-prefix");
    for(let i = 0; i < spanAcc.length; i++) {
        if (accPrefix != "") { //if no word has been input by the user, then nothing happens
            if (spanAcc[i].innerHTML != soundChange(accPrefix)) {
                spanAcc[i].innerHTML = soundChange(accPrefix);
            }
        }
    }


    //Generates the genitive prefix
    let inputGen = document.getElementById("genitive-prefix");
    let genPrefix = inputGen.value;
    let spanGen = document.getElementsByClassName("acc-prefix");
    for(let i = 0; i < spanGen.length; i++) {
        if (genPrefix != "") { //if no word has been input by the user, then nothing happens
            if (spanGen[i].innerHTML != soundChange(genPrefix)) {
                spanGen[i].innerHTML = soundChange(genPrefix);
            }
        }
    }





    /*-----------------------INFLECTION HEADWORD--------------------------------------------------------------*
       
   /* Generates the headword above each inflection table, showing the root and it's meaning as a title */
    for(let i = 0; i < splitInputRoot.length; i++) {
        let root = splitInputRoot[i];
        let rootMeaning = splitInputMeaning[i];

        /*Creates a new p element to which is appended the root*/
        let newHeadingProot = document.createElement("P");
        newHeadingProot.classList.add("headingProot");
        let newHeadingProotContent = document.createTextNode("-" + root + "-");
        newHeadingProot.appendChild(newHeadingProotContent);

        /*Creates a new p element to which is appended the root's meaning*/
        let newHeadingPmeaning = document.createElement("p");
        newHeadingPmeaning.classList.add("headingPmeaning");
        let newHeadingPmeaningContent = document.createTextNode('"' + rootMeaning + '"');
        newHeadingPmeaning.appendChild(newHeadingPmeaningContent);

        /* Creates a new div element to contain both the p elements.*/
        let newHeadWordDiv = document.createElement("div");
        newHeadWordDiv.classList.add("headWordDiv");
        newHeadWordDiv.appendChild(newHeadingProot);
        newHeadWordDiv.appendChild(newHeadingPmeaning);


        inflectionDiv.appendChild(newHeadWordDiv);


        /*----------------------^^^-HEADWORD-^^^-------------------------------------------------------------*/

        /*-----------------------INFLECTION TABLE--------------------------------------------------------------*/
        /*Generates a table below the headword, showing how the root is inflected.*/

        let newTable = document.createElement("table");
        inflectionDiv.appendChild(newTable);

        for (let j = 0; j < 4; j++) {
            let newRow = document.createElement("tr");
            newTable.appendChild(newRow);

            let newTD1 = document.createElement("td");
            newTD1.style.fontWeight = "bold";
            newTD1.style.border = "1px solid black";

            let newTD2 = document.createElement("td");
            newTD2.style.border = "1px solid black";
            newTD2.style.borderRightStyle = "none";

            let newTD3 = document.createElement("td")
            newTD3.style.fontStyle = "italic";
            newTD3.style.border = "1px solid black";
            newTD3.style.borderLeftStyle = "none";

            let newTD4 = document.createElement("td");
            newTD4.style.border = "1px solid black";
            newTD4.style.borderRightStyle = "none";

            let newTD5 = document.createElement("td");
            newTD5.style.fontStyle = "italic";
            newTD5.style.border = "1px solid black";
            newTD5.style.borderLeftStyle = "none";

            let newTH1 = document.createElement("th");
            newTH1.style.border = "1px solid black";

            let newTH2 = document.createElement("th");
            newTH2.style.border = "1px solid black";

            let newTH3 = document.createElement("th");
            newTH3.style.border = "1px solid black";

            let nomSg = root + sgSuffix;
            let nomPl = root + plSuffix;

            let nomSgEtymology = " " + " <" + " " + root + "-" + sgSuffix;
            let nomPlEtymology = " " + " <" + " " + root + "-" + plSuffix;

            let accSg = accPrefix + root + sgSuffix
            let accPl = accPrefix + root + plSuffix

            let accSgEtymology = " " + "<" + " " + accPrefix + "-" + root + "-" + sgSuffix;
            let accPlEtymology = " " + "<" + " " + accPrefix + "-" + root + "-" + plSuffix;

            let genSg = genPrefix + root + sgSuffix
            let genPl = genPrefix + root + plSuffix

            let genSgEtymology = " " + "<" + " " + genPrefix + "-" + root + "-" + sgSuffix;
            let genPlEtymology = " " + "<" + " " + genPrefix + "-" + root + "-" + plSuffix;

            if (j == 0) {
                newTH1.innerHTML = " "
                newTH1.setAttribute("colspan", 1)
                newRow.appendChild(newTH1)

                newTH2.innerHTML = "Sg"
                newTH2.setAttribute("colspan", 2)
                newRow.appendChild(newTH2)

                newTH3.innerHTML = "Pl"
                newTH3.setAttribute("colspan", 2)
                newRow.appendChild(newTH3)

            } else if (j == 1) {
                newTD1.innerHTML = "Nom"
                newRow.appendChild(newTD1);

                newTD2.innerHTML = soundChange(nomSg);
                newRow.appendChild(newTD2);

                newTD3.innerHTML = nomSgEtymology
                newRow.appendChild(newTD3);

                newTD4.innerHTML = soundChange(nomPl);
                newRow.appendChild(newTD4);

                newTD5.innerHTML = nomPlEtymology
                newRow.appendChild(newTD5);

            } else if (j == 2) {
                newTD1.innerHTML = "Acc"
                newRow.appendChild(newTD1);

                newTD2.innerHTML = soundChange(accSg);
                newRow.appendChild(newTD2);

                newTD3.innerHTML = accSgEtymology;
                newRow.appendChild(newTD3);

                newTD4.innerHTML = soundChange(accPl);
                newRow.appendChild(newTD4);

                newTD5.innerHTML = accPlEtymology
                newRow.appendChild(newTD5);

            } else if (j == 3) {
                newTD1.innerHTML = "Gen"
                newRow.appendChild(newTD1);

                newTD2.innerHTML = soundChange(genSg);
                newRow.appendChild(newTD2);

                newTD3.innerHTML = genSgEtymology;
                newRow.appendChild(newTD3);

                newTD4.innerHTML = soundChange(genPl);
                newRow.appendChild(newTD4);

                newTD5.innerHTML = genPlEtymology;
                newRow.appendChild(newTD5);

            }
        }
    }

    /*----------------------^^^INFLECTION TABLE-^^^-------------------------------------------------------------*/

    /*-------------COMPOUND------------------------*/
    let compound = ""
    let compoundArray = [];
    let compoundMeaningArray = [];
    for(let i = 0; i < splitInputRoot.length; i++) {
        for(let j = 0; j < splitInputRoot.length; j++) {
            if (splitInputRoot[i] == splitInputRoot[j]) { //prevents a root being compounded with itself
                continue;
            }
            compound = splitInputRoot[i] + splitInputRoot[j];
            let compoundMeaning = splitInputMeaning[i] + "-" + splitInputMeaning[j];

            compoundArray.push(compound);

            compoundMeaningArray.push(compoundMeaning);

        }
    }

    /*-----------------------COMPOUND HEADWORD--------------------------------------------------------------*
       
   /* Generates the headword above each compound table, showing the compound and it's meaning as a title */
    for (let x = 0; x < compoundArray.length; x++) {
        let compoundFromArray = compoundArray[x];
        let compoundMeaningFromArray = compoundMeaningArray[x];

        /*Creates a new p element to which is appended the root*/
        let newHeadingPcompound = document.createElement("p");
        newHeadingPcompound.classList.add("headingProot");
        newHeadingPcompound.innerHTML = compoundFromArray;


        /*Creates a new p element to which is appended the root's meaning */
        let newHeadingPCompoundmeaning = document.createElement("p");
        newHeadingPCompoundmeaning.classList.add("headingPmeaning");
        newHeadingPCompoundmeaning.innerHTML = '"' + compoundMeaningFromArray + '"';

        /* Creates a new div element to contain both the p elements.*/
        let newCompoundHeadWordDiv = document.createElement("div");
        newCompoundHeadWordDiv.classList.add("headWordDiv");
        newCompoundHeadWordDiv.appendChild(newHeadingPcompound);
        newCompoundHeadWordDiv.appendChild(newHeadingPCompoundmeaning);


        compoundDiv.appendChild(newCompoundHeadWordDiv);


        /* ----------------------^^^-HEADWORD-^^^-------------------------------------------------------------*/

        /*-----------------------COMPOUND TABLE--------------------------------------------------------------*/
        /*Generates a table below the headword, showing how the root is inflected.*/
        let newCompoundTable = document.createElement("table");
        compoundDiv.appendChild(newCompoundTable);

        for (let y = 0; y < 4; y++) {
            let newRowCompound = document.createElement("tr");
            newCompoundTable.appendChild(newRowCompound);

            let newTD1Compound = document.createElement("td");
            newTD1Compound.style.fontWeight = "bold";
            newTD1Compound.style.border = "1px solid black";

            let newTD2Compound = document.createElement("td");
            newTD2Compound.style.border = "1px solid black";
            newTD2Compound.style.borderRightStyle = "none";

            let newTD3Compound = document.createElement("td")
            newTD3Compound.style.fontStyle = "italic";
            newTD3Compound.style.border = "1px solid black";
            newTD3Compound.style.borderLeftStyle = "none";

            let newTD4Compound = document.createElement("td");
            newTD4Compound.style.border = "1px solid black";
            newTD4Compound.style.borderRightStyle = "none";

            let newTD5Compound = document.createElement("td");
            newTD5Compound.style.fontStyle = "italic";
            newTD5Compound.style.border = "1px solid black";
            newTD5Compound.style.borderLeftStyle = "none";

            let newTH1Compound = document.createElement("th");
            newTH1Compound.style.border = "1px solid black";

            let newTH2Compound = document.createElement("th");
            newTH2Compound.style.border = "1px solid black";

            let newTH3Compound = document.createElement("th");
            newTH3Compound.style.border = "1px solid black";

            let nomSgCompound = compoundFromArray + sgSuffix
            let nomPlCompound = compoundFromArray + plSuffix

            let nomSgEtymologyCompound = " " + " <" + " " + compoundFromArray + "-" + sgSuffix;
            let nomPlEtymologyCompound = " " + " <" + " " + compoundFromArray + "-" + plSuffix;

            let accSgCompound = accPrefix + compoundFromArray + sgSuffix
            let accPlCompound = accPrefix + compoundFromArray + plSuffix

            let accSgEtymologyCompound = " " + "<" + " " + accPrefix + "-" + compoundFromArray + "-" + sgSuffix;
            let accPlEtymologyCompound = " " + "<" + " " + accPrefix + "-" + compoundFromArray + "-" + plSuffix;

            let genSgCompound = genPrefix + compoundFromArray + sgSuffix
            let genPlCompound = genPrefix + compoundFromArray + plSuffix

            let genSgEtymologyCompound = " " + "<" + " " + genPrefix + "-" + compoundFromArray + "-" + sgSuffix;
            let genPlEtymologyCompound = " " + "<" + " " + genPrefix + "-" + compoundFromArray + "-" + plSuffix;

            if (y == 0) {
                newTH1Compound.innerHTML = " "
                newTH1Compound.setAttribute("colspan", 1)
                newRowCompound.appendChild(newTH1Compound)

                newTH2Compound.innerHTML = "Sg"
                newTH2Compound.setAttribute("colspan", 2)
                newRowCompound.appendChild(newTH2Compound)

                newTH3Compound.innerHTML = "Pl"
                newTH3Compound.setAttribute("colspan", 2)
                newRowCompound.appendChild(newTH3Compound)

            } else if (y == 1) {
                newTD1Compound.innerHTML = "Nom"
                newRowCompound.appendChild(newTD1Compound);

                newTD2Compound.innerHTML = soundChange(nomSgCompound);
                newRowCompound.appendChild(newTD2Compound);

                newTD3Compound.innerHTML = nomSgEtymologyCompound
                newRowCompound.appendChild(newTD3Compound);

                newTD4Compound.innerHTML = soundChange(nomPlCompound);
                newRowCompound.appendChild(newTD4Compound);

                newTD5Compound.innerHTML = nomPlEtymologyCompound
                newRowCompound.appendChild(newTD5Compound);

            } else if (y == 2) {
                newTD1Compound.innerHTML = "Acc"
                newRowCompound.appendChild(newTD1Compound);

                newTD2Compound.innerHTML = soundChange(accSgCompound);
                newRowCompound.appendChild(newTD2Compound);

                newTD3Compound.innerHTML = accSgEtymologyCompound;
                newRowCompound.appendChild(newTD3Compound);

                newTD4Compound.innerHTML = soundChange(accPlCompound);
                newRowCompound.appendChild(newTD4Compound);

                newTD5Compound.innerHTML = accPlEtymologyCompound
                newRowCompound.appendChild(newTD5Compound);

            } else if (y == 3) {
                newTD1Compound.innerHTML = "Gen"
                newRowCompound.appendChild(newTD1Compound);

                newTD2Compound.innerHTML = soundChange(genSgCompound);
                newRowCompound.appendChild(newTD2Compound);

                newTD3Compound.innerHTML = genSgEtymologyCompound;
                newRowCompound.appendChild(newTD3Compound);

                newTD4Compound.innerHTML = soundChange(genPlCompound);
                newRowCompound.appendChild(newTD4Compound);

                newTD5Compound.innerHTML = genPlEtymologyCompound;
                newRowCompound.appendChild(newTD5Compound);

            }

        }

    }


    /*----------------------^^^COMPOUND TABLE-^^^-------------------------------------------------------------*/

}

//Generates the word for "here"
function createHere() {
    let inputHere = document.getElementById("inputHere");
    let wordHere = inputHere.value;
    let spanHere = document.getElementsByClassName("here");
    for(let i = 0; i < spanHere.length; i++) {
        if (wordHere != "") { //if no word has been input by the user, then nothing happens
            if (spanHere[i].innerHTML != soundChange(wordHere)) {
                spanHere[i].innerHTML = soundChange(wordHere);
            }
        }
    }
    return wordHere
}

//Generates the word for "here"
function createThere() {
    let inputThere = document.getElementById("inputThere");
    let wordThere = inputThere.value;
    let spanThere = document.getElementsByClassName("there");
    for(let i = 0; i < spanThere.length; i++) {
        if (wordThere != "") { //if no word has been input by the user, then nothing happens
            if (spanThere[i].innerHTML != soundChange(wordThere)) {
                spanThere[i].innerHTML = soundChange(wordThere);
            }
        }
    }
    return wordThere
}

//Generates the adverbial suffix
function createAdverbialSuffix() {
    let inputAdverbialSuffix = document.getElementById("inputAdverbialSuffix");
    let wordAdverbialSuffix = inputAdverbialSuffix.value;
    let spanAdverbialSuffix = document.getElementsByClassName("adverbial-suffix");
    for(let i = 0; i < spanAdverbialSuffix.length; i++) {
        if (wordAdverbialSuffix != "") { //if no word has been input by the user, then nothing happens
            if (spanAdverbialSuffix[i].innerHTML != soundChange(wordAdverbialSuffix)) {
                spanAdverbialSuffix[i].innerHTML = soundChange(wordAdverbialSuffix);
            }
        }
    }
    return wordAdverbialSuffix
}

//Creates a word for "these" by adding the plural suffix to "this"
function createThese() {
    let plSuffix = document.getElementById("plural-suffix").value;

    let thisWord = createThis();
    let thesePronoun = thisWord + plSuffix;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanThese = document.getElementsByClassName("these-pronoun");
    for(let i = 0; i < spanThese.length; i++) {
        if (thesePronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanThese[i].innerHTML != soundChange(thesePronoun)) {
                spanThese[i].innerHTML = soundChange(thesePronoun);
            }
        }
    }
    return thesePronoun
}

//Merges the word for "there" and the adverbial suffix to create the demonstrative pronoun "that"
function createThat() {
    let wordThere = createThere(); //assigns the word "there"
    let wordAdverbialSuffix = createAdverbialSuffix(); //assigns the adverbial suffix
    let thatPronoun = wordThere + wordAdverbialSuffix;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanThat = document.getElementsByClassName("that-pronoun");
    for(let i = 0; i < spanThat.length; i++) {
        if (thatPronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanThat[i].innerHTML != soundChange(thatPronoun)) {
                spanThat[i].innerHTML = soundChange(thatPronoun);
            }
        }
    }
    return thatPronoun
}

//Creates a word for "those" by adding the plural suffix to "that"
function createThose() {
    let plSuffix = document.getElementById("plural-suffix").value;

    let thatWord = createThat();
    let thosePronoun = thatWord + plSuffix;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanThose = document.getElementsByClassName("those-pronoun");
    for(let i = 0; i < spanThose.length; i++) {
        if (thosePronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanThose[i].innerHTML != soundChange(thosePronoun)) {
                spanThose[i].innerHTML = soundChange(thosePronoun);
            }
        }
    }
    return thosePronoun
}

//Merges the word for "here" and the adverbial suffix to create the demonstrative pronoun "this"
function createThis() {
    let wordHere = createHere(); //assigns the word "here"
    let wordAdverbialSuffix = createAdverbialSuffix(); //assigns the adverbial suffix
    let pronounThis = wordHere + wordAdverbialSuffix;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanThis = document.getElementsByClassName("this-pronoun");
    for(let i = 0; i < spanThis.length; i++) {
        if (pronounThis != "") { //if no word has been input by the user, then nothing happens
            if (spanThis[i].innerHTML != soundChange(pronounThis)) {
                spanThis[i].innerHTML = soundChange(pronounThis);
            }
        }
    }
    return soundChange(pronounThis);
}

//Creates accusative forms for the demonstrative pronouns. This has a distinct function from the one that creates accusative plural nouns, since demonstratives do not take on an overt singular suffix.
//takes a randomly selected noun and puts it in the nominative singular
function createAccDemonstrative() {
    let accPrefix = document.getElementById("accusative-prefix").value;
    let spanDem = document.getElementsByClassName("accusative-pronoun");
        for(let i = 0; i < spanDem.length; i++) {
            let accDemonstrative = accPrefix + spanDem[i].innerHTML;
            if (accDemonstrative != "") { //if no word has been input by the user, then nothing happens
                if (spanDem[i].innerHTML != soundChange(accDemonstrative)) {
                    spanDem[i].innerHTML = soundChange(accDemonstrative);

            }
        }
    }
}

//Creates genitive forms for the demonstrative pronouns. This has a distinct function from the one that creates accusative plural nouns, since demonstratives do not take on an overt singular suffix.
function createGenDemonstrative() {
    let genPrefix = document.getElementById("genitive-prefix").value;
    let spanDem = document.getElementsByClassName("genitive-pronoun");
        for(let i = 0; i < spanDem.length; i++) {
            let genDemonstrative = genPrefix + spanDem[i].innerHTML;
            if (genDemonstrative != "") { //if no word has been input by the user, then nothing happens
                if (spanDem[i].innerHTML != soundChange(genDemonstrative)) {
                    spanDem[i].innerHTML = soundChange(genDemonstrative);
                }
            }
        }
       
}

//Generates the word for "also"
function createAlso() {
    let inputAlso = document.getElementById("inputAlso");
    let wordAlso = inputAlso.value;
    let spanAlso = document.getElementsByClassName("also");
    for(let i = 0; i < spanAlso.length; i++) {
        if (wordAlso != "") {
            if (spanAlso[i].innerHTML != soundChange(wordAlso)) {
                spanAlso[i].innerHTML = soundChange(wordAlso);
            }
        }
    }
    return wordAlso
}

//Generates the word for "again"
function createAgain() {
    let inputAgain = document.getElementById("inputAgain");
    let wordAgain = inputAgain.value;
    let spanAgain = document.getElementsByClassName("again");
    for(let i = 0; i < spanAgain.length; i++) {
        if (wordAgain != "") {
            if (spanAgain[i].innerHTML != soundChange(wordAgain)) {
                spanAgain[i].innerHTML = soundChange(wordAgain);
            }
        }
    }
    return wordAgain
}

//Generates the word for interrogative suffix
function createInterrogativeSuffix() {
    let inputAgain = document.getElementById("inputAgain");
    let wordAgain = inputAgain.value;
    let firstTwoLetters = [];
    firstTwoLetters.push(wordAgain[0]);
    firstTwoLetters.push(wordAgain[1]);
    let interrogativePrefix = firstTwoLetters.join("")

    let spanAgain = document.getElementsByClassName("interrogative");
    for(let i = 0; i < spanAgain.length; i++) {
        if (interrogativePrefix != "") {
            if (spanAgain[i].innerHTML != soundChange(interrogativePrefix)) {
                spanAgain[i].innerHTML = soundChange(interrogativePrefix);
            }
        }
    }
    return interrogativePrefix
}

//Generates the word for "place"
function createPlace() {
    let inputPlace = document.getElementById("inputPlace");
    let wordPlace = inputPlace.value;
    let spanPlace = document.getElementsByClassName("place");
    for(let i = 0; i < spanPlace.length; i++) {
        if (wordPlace != "") {
            if (spanPlace[i].innerHTML != soundChange(wordPlace)) {
                spanPlace[i].innerHTML = soundChange(wordPlace);
            }
        }
    }
    return wordPlace
}

//Generates the word for "man"
function createMan() {
    let inputMan = document.getElementById("inputMan");
    let wordMan = inputMan.value;
    let spanMan = document.getElementsByClassName("man");
    for(let i = 0; i < spanMan.length; i++) {
        if (wordMan != "") {
            if (spanMan[i].innerHTML != soundChange(wordMan)) {
                spanMan[i].innerHTML = soundChange(wordMan);
            }
        }
    }
    return wordMan
}

//Generates the word for "path"
function createPath() {
    let inputPath = document.getElementById("inputPath");
    let wordPath = inputPath.value;
    let spanPath = document.getElementsByClassName("path");
    for(let i = 0; i < spanPath.length; i++) {
        if (wordPath != "") {
            if (spanPath[i].innerHTML != soundChange(wordPath)) {
                spanPath[i].innerHTML = soundChange(wordPath);
            }
        }
    }
    return soundChange(wordPath)
}

//Generates the word for "origin"
function createOrigin() {
    let inputOrigin = document.getElementById("inputOrigin");
    let wordOrigin = inputOrigin.value;
    let spanOrigin = document.getElementsByClassName("origin");
    for(let i = 0; i < spanOrigin.length; i++) {
        if (wordOrigin != "") {
            if (spanOrigin[i].innerHTML != soundChange(wordOrigin)) {
                spanOrigin[i].innerHTML = soundChange(wordOrigin);
            }
        }
    }
    return soundChange(wordOrigin)
}

//Generates the word for "time"
function createTime() {
    let inputTime = document.getElementById("inputTime");
    let wordTime = inputTime.value;
    let spanTime = document.getElementsByClassName("time");
    for(let i = 0; i < spanTime.length; i++) {
        if (wordTime != "") {
            if (spanTime[i].innerHTML != soundChange(wordTime)) {
                spanTime[i].innerHTML = soundChange(wordTime);
            }
        }
    }
    return wordTime
}

//Generates the word for "where"
function createWhere() {
    let place = document.getElementById("inputPlace").value;
    let affix = createInterrogativeSuffix();
    let where = affix + soundChange(place);
    let spanWhen = document.getElementsByClassName("where");
    for(let i = 0; i < spanWhen.length; i++) {
        if (where != " ") {
            if (spanWhen[i].innerHTML != soundChange(where)) {
                spanWhen[i].innerHTML = soundChange(where);
            }
        }
    }
    return where
}

//Generates the word for "who"
function createWho() {
    let man = document.getElementById("inputMan").value;
    let affix = createInterrogativeSuffix();
    let who = affix + soundChange(man);
    let spanWho = document.getElementsByClassName("who");
    for(let i = 0; i < spanWho.length; i++) {
        if (who != " ") {
            if (spanWho[i].innerHTML != soundChange(who)) {
                spanWho[i].innerHTML = soundChange(who);
            }
        }
    }
    return who
}

//Generates the word for "when"
function createWhen() {
    let time = createTime();
    let affix = createInterrogativeSuffix();
    let when = affix + soundChange(time);
    let spanWhen = document.getElementsByClassName("when");
    for(let i = 0; i < spanWhen.length; i++) {
        if (when != " ") {
            if (spanWhen[i].innerHTML != soundChange(when)) {
                spanWhen[i].innerHTML = soundChange(when);
            }
        }
    }
    return when
}

//Generates the word for "what"
function createWhat() {
    let thisWord = createThis();
    let affix = createInterrogativeSuffix();
    let what = affix + thisWord;
    let spanWhat = document.getElementsByClassName("what");
    for(let i = 0; i < spanWhat.length; i++) {
        if (what != " ") {
            if (spanWhat[i].innerHTML != soundChange(what)) {
                spanWhat[i].innerHTML = soundChange(what);
            }
        }
    }
    return what
}

//Generates the word for "how"
function createHow() {
    let path = createPath();
    let affix = createInterrogativeSuffix();
    let how = affix + path;
    let spanHow = document.getElementsByClassName("how");
    for(let i = 0; i < spanHow.length; i++) {
        if (how != " ") {
            if (spanHow[i].innerHTML != soundChange(how)) {
                spanHow[i].innerHTML = soundChange(how);
            }
        }
    }
    return soundChange(how);
}

//Generates the word for "why"
function createWhy() {
    let origin = createOrigin();
    let affix = createInterrogativeSuffix();
    let why = affix + origin;
    let spanWhy = document.getElementsByClassName("why");
    for(let i = 0; i < spanWhy.length; i++) {
        if (why != " ") {
            if (spanWhy[i].innerHTML != soundChange(why)) {
                spanWhy[i].innerHTML = soundChange(why);
            }
        }
    }
    return soundChange(why);
}

//Generates the relative pronoun by merging the word for "this" and "also"
function createRelativePronoun() {
    let wordThis = createThis(); //assigns the word "this"
    let wordAlso = createAlso(); //assigns the word "also"
    let RelativePronoun = wordThis + wordAlso;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanRelativePronoun = document.getElementsByClassName("relative-pronoun");
    for(let i = 0; i < spanRelativePronoun.length; i++) {
        if (RelativePronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanRelativePronoun[i].innerHTML != soundChange(RelativePronoun)) {
                spanRelativePronoun[i].innerHTML = soundChange(RelativePronoun);
            }
        }
    }
    return soundChange(RelativePronoun)
}

//Generates the nominaliser suffix
function createNominaliserSuffix() {
    let inputNominaliserSuffix = document.getElementById("inputNominaliser");
    let nominaliserSuffix = inputNominaliserSuffix.value;
    let spanNominaliserSuffix = document.getElementsByClassName("nominaliser-suffix");
    for(let i = 0; i < spanNominaliserSuffix.length; i++) {
        if (nominaliserSuffix != "") { //if no word has been input by the user, then nothing happens
            if (spanNominaliserSuffix[i].innerHTML != soundChange(nominaliserSuffix)) {
                spanNominaliserSuffix[i].innerHTML = soundChange(nominaliserSuffix);
            }
        }
    }
    return nominaliserSuffix
}

//Generates the first person pronoun
function createFirstPersonPronoun() {
    let inputFirstPersonPronoun = document.getElementById("first-person-pronoun");
    let FirstPersonPronoun = inputFirstPersonPronoun.value;
    let spanFirstPersonPronoun = document.getElementsByClassName("firstPersonPronoun");
    for(let i = 0; i < spanFirstPersonPronoun.length; i++) {
        if (FirstPersonPronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanFirstPersonPronoun[i].innerHTML != soundChange(FirstPersonPronoun)) {
                spanFirstPersonPronoun[i].innerHTML = soundChange(FirstPersonPronoun);
            }
        }
    }
    return FirstPersonPronoun
}

//Generates the first person pronoun
function createSecondPersonPronoun() {
    let inputSecondPersonPronoun = document.getElementById("second-person-pronoun");
    let SecondPersonPronoun = inputSecondPersonPronoun.value;
    let spanSecondPersonPronoun = document.getElementsByClassName("secondPersonPronoun");
    for(let i = 0; i < spanSecondPersonPronoun.length; i++) {
        if (SecondPersonPronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanSecondPersonPronoun[i].innerHTML != soundChange(SecondPersonPronoun)) {
                spanSecondPersonPronoun[i].innerHTML = soundChange(SecondPersonPronoun);
            }
        }
    }
    return SecondPersonPronoun
}

//Generates the non-past-suffix"
function createNonPastSuffix() {
    let inputNonPastSuffix = document.getElementById("non-past");
    let wordNonPastSuffix = inputNonPastSuffix.value;
    let spanNonPastSuffix = document.getElementsByClassName("non-past");
    for(let i = 0; i < spanNonPastSuffix.length; i++) {
        if (wordNonPastSuffix != "") {
            if (spanNonPastSuffix[i].innerHTML != soundChange(wordNonPastSuffix)) {
                spanNonPastSuffix[i].innerHTML = soundChange(wordNonPastSuffix);
            }
        }
    }
    return wordNonPastSuffix;
}

function createCopula() {
    let inputCopula = document.getElementById("inputToBe");
    let wordCopula = inputCopula.value;
    let spanCopula = document.getElementsByClassName("copula");
    for(let i = 0; i < spanCopula.length; i++) {
        if (wordCopula != "") {
            if (spanCopula[i].innerHTML != soundChange(wordCopula)) {
                spanCopula[i].innerHTML = soundChange(wordCopula);
            }
        }
    }
    return wordCopula
}

function createCopulaSgNonPast() {
    let copula = createCopula();
    let nonPastSuffix = createNonPastSuffix();
    let CopulaSgNonPast = copula + nonPastSuffix

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanRelativeCopulaSgNonPast = document.getElementsByClassName("copula-sg-non-past");
    for(let i = 0; i < spanRelativeCopulaSgNonPast.length; i++) {
        if (copula != "") { //if no word has been input by the user, then nothing happens
            if (spanRelativeCopulaSgNonPast[i].innerHTML != soundChange(CopulaSgNonPast)) {
                spanRelativeCopulaSgNonPast[i].innerHTML = soundChange(CopulaSgNonPast);
            }
        }
    }
    return CopulaSgNonPast;
}

function createCopulaPlNonPast() {

    let plSuffix = document.getElementById("plural-suffix").value;

    let copula = createCopula();
    let nonPastSuffix = createNonPastSuffix();
    let CopulaPlNonPast = plSuffix + copula + nonPastSuffix
    
    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanRelativeCopulaPlNonPast = document.getElementsByClassName("copula-pl-non-past");
    for(let i = 0; i < spanRelativeCopulaPlNonPast.length; i++) {
        if (copula != "") { //if no word has been input by the user, then nothing happens
            if (spanRelativeCopulaPlNonPast[i].innerHTML != soundChange(CopulaPlNonPast)) {
                spanRelativeCopulaPlNonPast[i].innerHTML = soundChange(CopulaPlNonPast);
            }
        }
    }
    return CopulaPlNonPast;

}

//selects a random adjective from the adjectives entered by the user
function createRandomAdjective() {
    //puts all of the input adjectives into one array
    let inputAdjective = document.getElementById("inputRootAdj").value;
    let splitAdjective = inputAdjective.split(" ");

    //puts all of the input adjectives' meanings into one array
    let inputAdjectiveMeaning = document.getElementById("inputMeaningAdj").value;
    let splitAdjectiveMeaning = inputAdjectiveMeaning.split(" ");
    let spanAdjective = document.getElementsByClassName("adjective");

    let num = 1;
    for(let i = 0; i <= spanAdjective.length; i++) {
        let randomNumber = Math.floor(Math.random() * splitAdjective.length);
        let randomAdjective = splitAdjective[randomNumber] 
        document.getElementById("adjective" + num.toString()).innerHTML = soundChange(randomAdjective);
        document.getElementById("adjective-meaning" + num.toString()).innerHTML = splitAdjectiveMeaning[randomNumber]
        num++;
    }

    //creates copy of the adjectives's meaning
    let copyNum = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-adjective-meaning").length; i++) {   
        let adjectiveMeaning =  document.getElementById("adjective-meaning" + copyNum.toString())
        let adjectiveMeaningCopy = document.getElementsByClassName("adjective-meaning-copy" + copyNum.toString())
        for(let j = 0; j < adjectiveMeaningCopy.length; j++) {
            adjectiveMeaningCopy[j].innerHTML = adjectiveMeaning.innerHTML;
        }
        copyNum++;
    }
    
    //creates copies of the adjective
    let copyNum2 = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-adjective").length; i++) {  
        let adjective =  document.getElementById("adjective" + copyNum2.toString())
        let adjectiveCopy = document.getElementsByClassName("adjective-copy" + copyNum2.toString())
        for(let j = 0; j < adjectiveCopy.length; j++) {
            adjectiveCopy[j].innerHTML = adjective.innerHTML;
            adjectiveCopy[j].style.fontStyle = "italic"
        }
         copyNum2++;
    }
}

//selects a random noun from the nouns entered by the user
function createRandomNoun() {
    //puts all of the input adjectives into one array
    let inputNoun = document.getElementById("inputRootNoun").value;
    let splitNoun = inputNoun.split(" ");

    //puts all of the input adjectives' meanings into one array
    let inputNounMeaning = document.getElementById("inputMeaningNoun").value;
    let splitNounMeaning = inputNounMeaning.split(" ");
    let spanNoun = document.getElementsByClassName("noun");
    
    let num = 1;
    for(let i = 0; i < spanNoun.length; i++) {
        let randomNumber = Math.floor(Math.random() * splitNoun.length);
        let randomNoun = splitNoun[randomNumber] 
        document.getElementById("noun" + num.toString()).innerHTML = soundChange(randomNoun);
        document.getElementById("noun-meaning" + num.toString()).innerHTML = splitNounMeaning[randomNumber]
        num++;
    }
    //creates copy of the noun's meaning
    let copyNum = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-noun-meaning").length; i++) {   
        let nounMeaning =  document.getElementById("noun-meaning" + copyNum.toString())
        let nounMeaningCopy = document.getElementsByClassName("noun-meaning-copy" + copyNum.toString())
        for(let j = 0; j < nounMeaningCopy.length; j++) {
            nounMeaningCopy[j].innerHTML = nounMeaning.innerHTML;
        }
        copyNum++;
        }
    //creates copies of the noun
    let copyNum2 = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-noun").length; i++) {   
        let noun =  document.getElementById("noun" + copyNum2.toString())
        let nounCopy = document.getElementsByClassName("noun-copy" + copyNum2.toString())
            for(let j = 0; j < nounCopy.length; j++) {
                nounCopy[j].innerHTML = noun.innerHTML;
            }
        copyNum2++;
        }
}

//selects both transitive and intransitive verbs
function createRandomVerb() {
    //puts all of the input verbs into one array
    let inputTransitiveVerb = document.getElementById("inputRootTransitiveVerb").value;
    let inputIntransitiveVerb = document.getElementById("inputRootIntransitiveVerb").value;
    let splitTransitiveVerb = inputTransitiveVerb.split(" ");
    let splitIntransitiveVerb = inputIntransitiveVerb.split(" ");
    let allVerbs = splitTransitiveVerb.concat(splitIntransitiveVerb);

    //puts all of the input verbs meanings into one array
    let inputTransitiveVerbMeaning = document.getElementById("inputMeaningTransitiveVerb").value;
    let inputIntransitiveVerbMeaning = document.getElementById("inputMeaningIntransitiveVerb").value;
    let splitTransitiveVerbMeaning = inputTransitiveVerbMeaning.split(" ");
    let splitIntransitiveVerbMeaning = inputIntransitiveVerbMeaning.split(" ");
    let allVerbMeanings = splitTransitiveVerbMeaning.concat(splitIntransitiveVerbMeaning);

    let spanVerb = document.getElementsByClassName("verb");

    let num = 1;
    for(let i = 0; i < spanVerb.length; i++) {
        let randomNumber = Math.floor(Math.random() * allVerbs.length);
        let randomVerb = allVerbs[randomNumber] //random verb from the array
        document.getElementById("verb" + num.toString()).innerHTML = soundChange(randomVerb);
        document.getElementById("verb-meaning" + num.toString()).innerHTML = allVerbMeanings[randomNumber]
        document.getElementById("verb-past-meaning" + num.toString()).innerHTML = allVerbMeanings[randomNumber]
    
        num++;
    
    }
    //creates copy of the verb's meaning
    let copyNum = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-verb-meaning").length; i++) {   
        let verbMeaning =  document.getElementById("verb-meaning" + copyNum.toString())
        let verbMeaningCopy = document.getElementsByClassName("verb-meaning-copy" + copyNum.toString())
        for(let j = 0; j < verbMeaningCopy.length; j++) {
            verbMeaningCopy[j].innerHTML = verbMeaning.innerHTML;
        }
        copyNum++;
        }

    //creates copies of the verb
    let copyNum2 = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-verb").length; i++) {   
        let verb =  document.getElementById("verb" + copyNum2.toString())
        let verbCopy = document.getElementsByClassName("verb-copy" + copyNum2.toString())
            for(let j = 0; j < verbCopy.length; j++) {
                verbCopy[j].innerHTML = verb.innerHTML;
            }
        copyNum2++;
        }


}


function createRandomTransitiveVerb() {
    //puts all of the input verbs into one array
    let inputVerb = document.getElementById("inputRootTransitiveVerb").value;
    let splitVerb = inputVerb.split(" ");

    //puts all of the input verbs meanings into one array
    let inputVerbMeaning = document.getElementById("inputMeaningTransitiveVerb").value;
    let splitVerbMeaning = inputVerbMeaning.split(" ");

    let spanVerb = document.getElementsByClassName("transitive-verb");

    let num = 1;
    for(let i = 0; i < spanVerb.length; i++) {
        let randomNumber = Math.floor(Math.random() * splitVerb.length);
        let randomVerb = splitVerb[randomNumber] //random verb from the array
        document.getElementById("transitive-verb" + num.toString()).innerHTML = soundChange(randomVerb);
        document.getElementById("transitive-verb-meaning" + num.toString()).innerHTML = splitVerbMeaning[randomNumber]
        if(document.getElementById("transitive-verb-past-meaning" + num.toString()) === null) {
            let hiddenSpan = document.createElement("span");
            hiddenSpan.classList.add("hidden");
            hiddenSpan.setAttribute("id", "transitive-verb-past-meaning" + num.toString())
            hiddenSpan.innerHTML = splitVerbMeaning[randomNumber];
            document.getElementById("hidden-section").appendChild(hiddenSpan);
        } else {
             document.getElementById("transitive-verb-past-meaning" + num.toString()).innerHTML = splitVerbMeaning[randomNumber];
        }
        num++;
        }
        
    
    
    //creates copy of the verb's meaning
    let copyNum = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-transitive-verb-meaning").length; i++) {   
        let verbMeaning =  document.getElementById("transitive-verb-meaning" + copyNum.toString())
        let verbMeaningCopy = document.getElementsByClassName("transitive-verb-meaning-copy" + copyNum.toString())
        for(let j = 0; j < verbMeaningCopy.length; j++) {
            verbMeaningCopy[j].innerHTML = verbMeaning.innerHTML;
        }
        copyNum++;
        }

    //creates copies of the verb
    let copyNum2 = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-transitive-verb").length; i++) {   
        let verb =  document.getElementById("transitive-verb" + copyNum2.toString())
        let verbCopy = document.getElementsByClassName("transitive-verb-copy" + copyNum2.toString())
            for(let j = 0; j < verbCopy.length; j++) {
                verbCopy[j].innerHTML = verb.innerHTML;
            }
        copyNum2++;
        }

    }


function createRandomIntransitiveVerb() {
    //puts all of the input verbs into one array
    let inputVerb = document.getElementById("inputRootIntransitiveVerb").value;
    let splitVerb = inputVerb.split(" ");

    //puts all of the input verbs meanings into one array
    let inputVerbMeaning = document.getElementById("inputMeaningIntransitiveVerb").value;
    let splitVerbMeaning = inputVerbMeaning.split(" ");

    let spanVerb = document.getElementsByClassName("intransitive-verb");

    let num = 1;
    for(let i = 0; i < spanVerb.length; i++) {
        let randomNumber = Math.floor(Math.random() * splitVerb.length);
        let randomVerb = splitVerb[randomNumber] //random verb from the array
        document.getElementById("intransitive-verb" + num.toString()).innerHTML = soundChange(randomVerb);
        document.getElementById("intransitive-verb-meaning" + num.toString()).innerHTML = splitVerbMeaning[randomNumber]
        if(document.getElementById("intransitive-verb-past-meaning" + num.toString()) === null) {
            let hiddenSpan = document.createElement("span");
            hiddenSpan.classList.add("hidden");
            hiddenSpan.setAttribute("id", "intransitive-verb-past-meaning" + num.toString())
            hiddenSpan.innerHTML = splitVerbMeaning[randomNumber];
            document.getElementById("hidden-section").appendChild(hiddenSpan);
        } else {
             document.getElementById("intransitive-verb-past-meaning" + num.toString()).innerHTML = splitVerbMeaning[randomNumber];
        }
        num++;
    
    }
    //creates copy of the verb's meaning
    let copyNum = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-intransitive-verb-meaning").length; i++) {   
        let verbMeaning =  document.getElementById("intransitive-verb-meaning" + copyNum.toString())
        let verbMeaningCopy = document.getElementsByClassName("intransitive-verb-meaning-copy" + copyNum.toString())
        for(let j = 0; j < verbMeaningCopy.length; j++) {
            verbMeaningCopy[j].innerHTML = verbMeaning.innerHTML;
        }
        copyNum++;
        }

    //creates copies of the verb
    let copyNum2 = 1;
    for(let i = 0; i < document.getElementsByClassName("copy-intransitive-verb").length; i++) {   
        let verb =  document.getElementById("intransitive-verb" + copyNum2.toString())
        let verbCopy = document.getElementsByClassName("intransitive-verb-copy" + copyNum2.toString())
            for(let j = 0; j < verbCopy.length; j++) {
                verbCopy[j].innerHTML = verb.innerHTML;
            }
        copyNum2++;
        }


}

//takes a randomly selected noun and puts it in the nominative singular
function createNounNomSg() {
    let sgSuffix = document.getElementById("singular-suffix").value;
    let spanNoun = document.getElementsByClassName("noun-nom-sg")
        for(let i = 0; i < spanNoun.length; i++) {
            let nounNomSg = spanNoun[i].innerHTML + sgSuffix;
            if (nounNomSg != "") { //if no word has been input by the user, then nothing happens
                if (spanNoun[i].innerHTML != soundChange(nounNomSg)) {
                    spanNoun[i].innerHTML = soundChange(nounNomSg);
                }
            }
        }
}

//takes a noun and puts it in the accusative singular
function createAccNomSg() {
    let sgSuffix = document.getElementById("singular-suffix").value;
    let accPrefix = document.getElementById("accusative-prefix").value;

    let spanNoun = document.getElementsByClassName("noun-acc-sg")
    for(let i = 0; i < spanNoun.length; i++) {
        let nounAccSg = accPrefix + spanNoun[i].innerHTML + sgSuffix;
        if (nounAccSg != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounAccSg)) {
                spanNoun[i].innerHTML = soundChange(nounAccSg);
            }
        }
    }
}

//takes a noun and puts it in the genitive singular
function createGenNomSg() {
    let sgSuffix = document.getElementById("singular-suffix").value;
    let genPrefix = document.getElementById("genitive-prefix").value;
    let spanNoun = document.getElementsByClassName("noun-gen-sg")
    for(let i = 0; i < spanNoun.length; i++) {
        let nounGenSg = genPrefix + spanNoun[i].innerHTML + sgSuffix;
        if (nounGenSg != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounGenSg)) {
                spanNoun[i].innerHTML = soundChange(nounGenSg);
            }
        }
    }
}

//takes a noun and puts it in the nominative plural
function createNounNomPl() {
    let plSuffix = document.getElementById("plural-suffix").value;
    let spanNoun = document.getElementsByClassName("noun-nom-pl")
    for(let i = 0; i < spanNoun.length; i++) {
        let nounNomPl = spanNoun[i].innerHTML + plSuffix;
        if (nounNomPl != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounNomPl)) {
                spanNoun[i].innerHTML = soundChange(nounNomPl);
            }
        }
    }
}

//takes a noun and puts it in the accusative plural
function createNounAccPl() {
    let plSuffix = document.getElementById("plural-suffix").value;
    let accPrefix = document.getElementById("accusative-prefix").value;

    let spanNoun = document.getElementsByClassName("noun-acc-pl")
    for(let i = 0; i < spanNoun.length; i++) {
        let nounAccPl = accPrefix + spanNoun[i].innerHTML + plSuffix;
        if (nounAccPl != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounAccPl)) {
                spanNoun[i].innerHTML = soundChange(nounAccPl);
            }
        }
    }
}

//takes a noun and puts it in the genitive plural
function createNounGenPl() {
    let plSuffix = document.getElementById("plural-suffix").value;
    let genPrefix = document.getElementById("genitive-prefix").value;
    let spanNoun = document.getElementsByClassName("noun-gen-pl")
    for(let i = 0; i < spanNoun.length; i++) {
        let nounGenPl = genPrefix + spanNoun[i].innerHTML + plSuffix;
        if (nounGenPl != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounGenPl)) {
                spanNoun[i].innerHTML = soundChange(nounGenPl);
            }
        }
    }
}

//creates a bahuvrihi compound for the example shown in the adjective section
function createBahuvrihi() {
    let sgSuffix = document.getElementById("singular-suffix").value;

    let noun = document.getElementById("noun5");
    let nominaliser = createNominaliserSuffix();
    let adjective = document.getElementById("adjective5");
    let adjectiveCopy = document.getElementById("adjective5");
   
    let adjectiveNominaliserSg = adjective.innerHTML + nominaliser + sgSuffix;

    let bahuvrihi = noun.innerHTML + soundChange(adjectiveNominaliserSg);
   document.getElementById("bahuvrihi").innerHTML = soundChange(bahuvrihi);

   
   let nounInBreakdown = document.getElementById("noun5Also");
   nounInBreakdown.innerHTML = noun.innerHTML;

   let nounNomSgInBreakdown = document.getElementById("noun5AlsoNomSg");
   let nounPlusKo = noun.innerHTML + sgSuffix
   nounNomSgInBreakdown.innerHTML = soundChange(nounPlusKo);
   
    

    let adjInBreakdown = document.getElementById("adjective5Also");
    adjInBreakdown.innerHTML = adjectiveCopy.innerHTML;

    
}

//takes a randomly selected adjective, attaches the nominaliser suffix, and puts it in the nominative singular
function createAdjNomSg() {
    let sgSuffix = document.getElementById("singular-suffix").value;
    let nominaliser = createNominaliserSuffix();
    let spanAdj = document.getElementsByClassName("adjective-nom-sg")
    for(let i = 0; i < spanAdj.length; i++) {
        let adjNomSg = spanAdj[i].innerHTML + nominaliser + sgSuffix;
        if (adjNomSg != "") { //if no word has been input by the user, then nothing happens
            if (spanAdj[i].innerHTML != soundChange(adjNomSg)) {
                spanAdj[i].innerHTML = soundChange(adjNomSg);
            }
        }

    }
}

//takes a randomly selected noun and puts it in the nominative plural
function createAdjNomPl() {
    let plSuffix = document.getElementById("plural-suffix").value;
    let nominaliser = createNominaliserSuffix();
    let spanAdj = document.getElementsByClassName("adjective-nom-pl")
    for(let i = 0; i < spanAdj.length; i++) {
        let adjNomPl = spanAdj[i].innerHTML + nominaliser + plSuffix;
        if (adjNomPl != "") { //if no word has been input by the user, then nothing happens
            if (spanAdj[i].innerHTML != soundChange(adjNomPl)) {
                spanAdj[i].innerHTML = soundChange(adjNomPl);
            }
        }
    }

    
}

//if a noun is plural, this makes sure that it's English translation is also plural
function makeMeaningPlural() {
    let Plural = document.getElementsByClassName("plural-meaning")
    for(let i = 0; i < Plural.length; i++) {
        let indexNum = nounArray.indexOf(Plural[i].innerHTML);
        Plural[i].innerHTML = nounArrayPlural[indexNum];
    }
}

//if a verb is in the past tense, this makes sure that it's English translation is also past tense
function makeMeaningPast() {
    let past = document.getElementsByClassName("past")
    for(let i = 0; i < past.length; i++) {
        let indexNum = verbArray.indexOf(past[i].innerHTML);
        past[i].innerHTML = verbPastArray[indexNum];
    }
}

function createThirdPersonSingularVerb() {
    let thirdP = document.getElementsByClassName("third-person-singular")
    for(let i = 0; i < thirdP.length; i++) {
        let indexNum = verbArray.indexOf(thirdP[i].innerHTML);
        thirdP[i].innerHTML = verbThirdPersonSingularArray[indexNum];
    }
}

function createThirdPersonSingularTransitiveVerb() {
    let thirdP = document.getElementsByClassName("third-person-singular-transitive")
    for(let i = 0; i < thirdP.length; i++) {
        let indexNum = transitiveVerbArray.indexOf(thirdP[i].innerHTML);
        thirdP[i].innerHTML = transitiveVerb3SArray[indexNum];
    }
}

function createThirdPersonSingularIntransitiveVerb() {
    let thirdP = document.getElementsByClassName("third-person-singular-intransitive")
    for(let i = 0; i < thirdP.length; i++) {
        let indexNum = intransitiveVerbArray.indexOf(thirdP[i].innerHTML);
        thirdP[i].innerHTML = intransitiveVerb3SArray[indexNum];

    }
}

//takes a randomly selected verb and puts it in the non-past-tense
function createVerbNonPast() {
    let nonPastSuffix = document.getElementById("non-past").value;
    let spanNonPast = document.getElementsByClassName("verb-non-past")
        for(let i = 0; i < spanNonPast.length; i++) {
            let verbNonPast = spanNonPast[i].innerHTML + nonPastSuffix;
            if (verbNonPast != "") { //if no word has been input by the user, then nothing happens
                if (spanNonPast[i].innerHTML != soundChange(verbNonPast)) {
                    spanNonPast[i].innerHTML = soundChange(verbNonPast);
                }
            }
        }
}

function createFirstPersonVerbPrefix() {
    let firstPersonPronoun = document.getElementById("first-person-pronoun");
    let pronoun = firstPersonPronoun.value;
    let firstTwoLetters = [];
    firstTwoLetters.push(pronoun[0]);
    firstTwoLetters.push(pronoun[1]);
    let prefix = firstTwoLetters.join("")

    let spanPrefix = document.getElementsByClassName("first-person-prefix");
    for(let i = 0; i < spanPrefix.length; i++) {
        if (prefix != "") {
            if (spanPrefix[i].innerHTML != soundChange(prefix)) {
                spanPrefix[i].innerHTML = soundChange(prefix);
            }
        }
    }
    return prefix
}

function createSecondPersonVerbPrefix() {
    let secondPersonPronoun = document.getElementById("second-person-pronoun");
    let pronoun = secondPersonPronoun.value;
    let firstTwoLetters = [];
    firstTwoLetters.push(pronoun[0]);
    firstTwoLetters.push(pronoun[1]);
    let prefix = firstTwoLetters.join("")

    let spanPrefix = document.getElementsByClassName("second-person-prefix");
    for(let i = 0; i < spanPrefix.length; i++) {
        if (prefix != "") {
            if (spanPrefix[i].innerHTML != soundChange(prefix)) {
                spanPrefix[i].innerHTML = soundChange(prefix);
            }
        }
    }
    return prefix
}

//takes a randomly selected verb and puts it in the first-person
function createVerbFirstPerson() {
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let spanFirstPerson = document.getElementsByClassName("first-person")
        for(let i = 0; i < spanFirstPerson.length; i++) {
            let verbFirstPerson = firstPersonPrefix + spanFirstPerson[i].innerHTML;
            if (verbFirstPerson != "") { //if no word has been input by the user, then nothing happens
                if (spanFirstPerson[i].innerHTML != soundChange(verbFirstPerson)) {
                    spanFirstPerson[i].innerHTML = soundChange(verbFirstPerson);
                }
            }
        }
}

//takes a randomly selected verb and puts it in the second-person
function createVerbSecondPerson() {
    let secondPersonPrefix = createSecondPersonVerbPrefix();
    let spanSecondPerson = document.getElementsByClassName("second-person")
        for(let i = 0; i < spanSecondPerson.length; i++) {
            let verbSecondPerson = secondPersonPrefix + spanSecondPerson[i].innerHTML;
            if (verbSecondPerson != "") { //if no word has been input by the user, then nothing happens
                if (spanSecondPerson[i].innerHTML != soundChange(verbSecondPerson)) {
                    spanSecondPerson[i].innerHTML = soundChange(verbSecondPerson);
                }
            }
        }
}

function createPluralVerbSuffix() {
    let inputPluralVerb = document.getElementById("input-plural-verb");
    let pluralVerbSuffix = inputPluralVerb.value;
    let spanPluralVerbSuffix = document.getElementsByClassName("plural-verb-suffix");
    for(let i = 0; i < spanPluralVerbSuffix.length; i++) {
        if (pluralVerbSuffix != "") {
            if (spanPluralVerbSuffix[i].innerHTML != soundChange(pluralVerbSuffix)) {
                spanPluralVerbSuffix[i].innerHTML = soundChange(pluralVerbSuffix);
            }
        }
    }
    return pluralVerbSuffix;
}

function createPluralVerb() {
    let pluralVerbSuffix = createPluralVerbSuffix();
    let spanVerb = document.getElementsByClassName("plural-verb")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = spanVerb[i].innerHTML + pluralVerbSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createPluralVerbNonPast() {
    let pluralVerbSuffix = createPluralVerbSuffix();
    let nonPastSuffix = createNonPastSuffix();
    let spanVerb = document.getElementsByClassName("plural-verb-non-past")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = spanVerb[i].innerHTML + pluralVerbSuffix + nonPastSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createFirstPersonVerbNonPast() {
    let nonPastSuffix = createNonPastSuffix();
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let spanVerb = document.getElementsByClassName("first-person-verb-non-past")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + nonPastSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createFirstPersonVerbNonPastHabitual() {
    let nonPastSuffix = createNonPastSuffix();
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let habitualSuffix = createHabitualSuffix();
    let spanVerb = document.getElementsByClassName("first-person-verb-non-past-habitual")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + nonPastSuffix + habitualSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createFirstPersonVerbHabitual() {
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let habitualSuffix = createHabitualSuffix();
    let spanVerb = document.getElementsByClassName("first-person-verb-habitual")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + habitualSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createSecondPersonVerbNonPast() {
    let nonPastSuffix = createNonPastSuffix();
    let secondPersonPrefix = createSecondPersonVerbPrefix();
    let spanVerb = document.getElementsByClassName("second-person-verb-non-past")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = secondPersonPrefix + spanVerb[i].innerHTML + nonPastSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createSecondPersonVerbNonPastHabitual() {
    let nonPastSuffix = createNonPastSuffix();
    let secondPersonPrefix = createSecondPersonVerbPrefix();
    let habitualSuffix = createHabitualSuffix();
    let spanVerb = document.getElementsByClassName("second-person-verb-non-past-habitual")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = secondPersonPrefix + spanVerb[i].innerHTML + nonPastSuffix + habitualSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createSecondPersonVerbHabitual() {
    let secondPersonPrefix = createSecondPersonVerbPrefix();
    let habitualSuffix = createHabitualSuffix();
    let spanVerb = document.getElementsByClassName("second-person-verb-habitual")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = secondPersonPrefix + spanVerb[i].innerHTML + habitualSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createVerbNonPastHabitual() {
    let nonPastSuffix = createNonPastSuffix();
    let habitualSuffix = createHabitualSuffix();
    let spanVerb = document.getElementsByClassName("verb-non-past-habitual")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = spanVerb[i].innerHTML + nonPastSuffix + habitualSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createVerbHabitual() {
    let habitualSuffix = createHabitualSuffix();
    let spanVerb = document.getElementsByClassName("verb-habitual")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = spanVerb[i].innerHTML + habitualSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}


function createFirstPersonPluralVerbNonPast() {
    let pluralVerbSuffix = createPluralVerbSuffix();
    let nonPastSuffix = createNonPastSuffix();
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let spanVerb = document.getElementsByClassName("first-person-plural-verb-non-past")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + pluralVerbSuffix + nonPastSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createSecondPersonPluralVerbNonPast() {
    let pluralVerbSuffix = createPluralVerbSuffix();
    let nonPastSuffix = createNonPastSuffix();
    let firstPersonPrefix = createSecondPersonVerbPrefix();
    let spanVerb = document.getElementsByClassName("second-person-plural-verb-non-past")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + pluralVerbSuffix + nonPastSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createFirstPersonPluralVerb() {
    let pluralVerbSuffix = createPluralVerbSuffix();
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let spanVerb = document.getElementsByClassName("first-person-plural-verb")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + pluralVerbSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createSecondPersonPluralVerb() {
    let pluralVerbSuffix = createPluralVerbSuffix();
    let firstPersonPrefix = createSecondPersonVerbPrefix();
    let spanVerb = document.getElementsByClassName("second-person-plural-verb")
        for(let i = 0; i < spanVerb.length; i++) {
            let pluralVerb = firstPersonPrefix + spanVerb[i].innerHTML + pluralVerbSuffix;
            if (pluralVerb != "") { //if no word has been input by the user, then nothing happens
                if (spanVerb != soundChange(pluralVerb)) {
                    spanVerb[i].innerHTML = soundChange(pluralVerb);
                }
            }
        }
}

function createHabitualSuffix() {
    let habitualInput = document.getElementById("input-habitual-suffix");
    let habitualSuffix = habitualInput.value;
    let spanHabitualSuffix = document.getElementsByClassName("habitual-suffix");
    for(let i = 0; i < spanHabitualSuffix.length; i++) {
        if (habitualSuffix != "") {
            if (spanHabitualSuffix[i].innerHTML != soundChange(habitualSuffix)) {
                spanHabitualSuffix[i].innerHTML = soundChange(habitualSuffix);
            }
        }
    }
    return habitualSuffix;
}

let submitWords = document.getElementById("submitWords");
submitWords.addEventListener("click", buttonFunctions,);

function buttonFunctions() {
    createHere();
    createThere()
    createAdverbialSuffix();
    createThis();
    createThese();
    createThat();
    createThose();
    createAccDemonstrative();
    createGenDemonstrative();
    createAlso();
    createAgain();
    createPlace();
    createWhere();
    createMan();
    createPath();
    createOrigin();
    createTime();
    createWhere();
    createWho();
    createWhat();
    createWhen();
    createHow();
    createWhy();
    createInterrogativeSuffix();
    createRelativePronoun();
    createNominaliserSuffix();
    createFirstPersonPronoun();
    createSecondPersonPronoun();
    createNonPastSuffix();
    createCopula();
    createCopulaSgNonPast();
    createCopulaPlNonPast();
    createRandomAdjective();
    createRandomNoun();
    createRandomVerb();
    createRandomTransitiveVerb();
    createRandomIntransitiveVerb();
    createNounNomSg();
    createAccNomSg();
    createGenNomSg();
    createNounNomPl();
    createNounAccPl();
    createNounGenPl();
    createAdjNomSg();
    createAdjNomPl();
    createBahuvrihi();
    makeMeaningPlural();
    makeMeaningPast();
    createVerbNonPast();
    createFirstPersonVerbPrefix();
    createSecondPersonVerbPrefix();
    createThirdPersonSingularVerb();
    createVerbFirstPerson();
    createVerbSecondPerson();
    createPluralVerbSuffix();
    createPluralVerb();
    createPluralVerbNonPast();
    createFirstPersonVerbNonPast();
    createSecondPersonVerbNonPast();
    createFirstPersonPluralVerbNonPast();
    createFirstPersonVerbNonPastHabitual();
    createSecondPersonPluralVerbNonPast();
    createVerbNonPastHabitual();
    createSecondPersonVerbNonPastHabitual()
    createFirstPersonPluralVerb();
    createSecondPersonPluralVerb();
    createHabitualSuffix();
    createThirdPersonSingularTransitiveVerb();
    createThirdPersonSingularIntransitiveVerb();
    createFirstPersonVerbHabitual();
    createSecondPersonVerbHabitual();
    createVerbHabitual();
    
}

/*-------RANDOM GENERATION---------------------------------------------------------*/
//The function below are for the random generation of syllables and a random selection for what they translate to. If the user inputs his own roots and meanings. 

/*-----Generates Phonemic Inventory----*/
let consonants = ["m", "n", "p", "b", "t", "d", "k", "g", "f", "s", "r", "l", "j", "w"];
let vowels = ["i", "u", "o", "e", "a"];

let generatePhonemeButton = document.getElementById("generatePhonemes");
generatePhonemeButton.addEventListener("click", generatePhonemicInventory)
let resetPhonemes = document.getElementById("resetPhonemes")
resetPhonemes.addEventListener("click", resetInventory);

function generatePhonemicInventory() {
    let enteredConsonants = document.getElementById("consonants").value;
    let enteredVowels = document.getElementById("vowels").value;

    consonants = enteredConsonants.split(" ");
    vowels = enteredVowels.split(" ");
}

function resetInventory() {
   document.getElementById("consonants").value = "m n p b t d k g f s r l j w"
   document.getElementById("vowels").value = "a e i o u"
}

/*---Generates Words-----*/

let generateVocabButton = document.getElementById("generate-vocab");
generateVocabButton.addEventListener("click", generateVocab);

//randomly generates roots according to the root structure, as well as assigning them randomly selected meanings
function generateNouns() {
    let nounInput = document.getElementById("inputRootNoun");
    let randomNounArray = [] 
    let numberOfNouns = document.getElementById("select-amount").value;
    numberOfNouns = Number(numberOfNouns);
    
    for(let i = 0; i < numberOfNouns; i++) {
        let randomNum = Math.floor(Math.random() * 6);
        if (randomNum === 0) { 
            //generates a CV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
            let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
            let CV = firstC + firstV;     
            randomNounArray.push(CV)
        } else if(randomNum === 1 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVC = firstC + firstV + secondC;
            randomNounArray.push(CVC)
        } else if(randomNum === 2 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCV = firstC + firstV + secondC + secondV;
            randomNounArray.push(CVCV)

        } else if(randomNum === 3 ) {
            //generates a CVCVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCVC = firstC + firstV + secondC + secondV + thirdC;
            randomNounArray.push(CVCVC)

        } else if(randomNum === 4 ) {
            //generates a CVCC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCC = firstC + firstV + secondC + thirdC;
            randomNounArray.push(CVCC)

        } else if(randomNum === 5 ) {
            //generates a CVCCV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCCV = firstC + firstV + secondC + thirdC + secondV;
            randomNounArray.push(CVCCV)
        }
    }

    //collects each generated word from each loop and puts them into one array, which is then joined into a single string 
    let generatedWordsArray = [];
    for (let i = 0; i < numberOfNouns; i++) {
        generatedWordsArray.push(randomNounArray[i])
    }

    nounInput.value = generatedWordsArray.join(" ");
}

//randomly selects meanings for the randomly generated adjectives
function generateNounMeanings() {
    let nounMeaningInput = document.getElementById("inputMeaningNoun");
    let numberOfNouns = document.getElementById("select-amount").value;

    //collects each select word from each loop and puts them into one array, which is then joined into a single string 
    let selectedWordsArray = [];
    for(let i = 0; i < numberOfNouns; i++) {
        selectedWordsArray.push(nounArray[Math.floor(Math.random() * nounArray.length)])
    }

    nounMeaningInput.value = selectedWordsArray.join(" ");
}

//randomly generates roots according to the root structure, as well as assigning them randomly selected meanings
function generateAdjectives() {
    let adjectiveInput = document.getElementById("inputRootAdj");
    let randomAdjectiveArray = [] 

    let numberOfAdjectives = document.getElementById("select-amount").value;
    numberOfAdjectives = Number(numberOfAdjectives);

    for(let i = 0; i < numberOfAdjectives; i++) {
        let randomNum = Math.floor(Math.random() * 6);

        if (randomNum === 0) { 
            //generates a CV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
            let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
            let CV = firstC + firstV;     
            randomAdjectiveArray.push(CV)

        } else if(randomNum === 1 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVC = firstC + firstV + secondC;
            randomAdjectiveArray.push(CVC)

        } else if(randomNum === 2 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCV = firstC + firstV + secondC + secondV;
            randomAdjectiveArray.push(CVCV)

        } else if(randomNum === 3 ) {
            //generates a CVCVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCVC = firstC + firstV + secondC + secondV + thirdC;
            randomAdjectiveArray.push(CVCVC)

        } else if(randomNum === 4 ) {
            //generates a CVCC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCC = firstC + firstV + secondC + thirdC;
            randomAdjectiveArray.push(CVCC)
        } else if(randomNum === 5 ) {
            //generates a CVCCV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCCV = firstC + firstV + secondC + thirdC + secondV;
            randomAdjectiveArray.push(CVCCV)
        }
    }
        
    let generatedWordsArray = [];
    for(let i = 0; i < numberOfAdjectives; i++) {
        generatedWordsArray.push(randomAdjectiveArray[i])
    }

    adjectiveInput.value = generatedWordsArray.join(" ");
}

//randomly selects meanings for the randomly generated adjectives
function generateAdjectiveMeaning() {
    let adjectiveMeaningInput = document.getElementById("inputMeaningAdj");
   let numberOfAdjectives = document.getElementById("select-amount").value;

    //collects each select word from each loop and puts them into one array, which is then joined into a single string 
    let selectedWordsArray = [];
    for(let i = 0; i < numberOfAdjectives; i++) {
        selectedWordsArray.push(adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)])
    }

    adjectiveMeaningInput.value = selectedWordsArray.join(" ");

}

//randomly generates a verb root for "to be"
function generateCopula() {
    let copulaInput = document.getElementById("inputToBe");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        copulaInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        copulaInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        copulaInput.value = CVC;

    } else if(randomNum === 3 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        copulaInput.value = CVCV;

    } 

}

//randomly generates roots according to the root structure, as well as assigning them randomly selected meanings
function generateTransitiveVerbs() {
    let verbInput = document.getElementById("inputRootTransitiveVerb");
    let randomVerbArray = [] 

    let numberOfVerbs = document.getElementById("select-amount").value;
    numberOfVerbs = Number(numberOfVerbs);
    
    for(let i = 0; i < numberOfVerbs; i++) {
        let randomNum = Math.floor(Math.random() * 6);

        if (randomNum === 0) { 
            //generates a CV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
            let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
            let CV = firstC + firstV;     
            randomVerbArray.push(CV)

        } else if(randomNum === 1 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVC = firstC + firstV + secondC;
            randomVerbArray.push(CVC)

        } else if(randomNum === 2 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCV = firstC + firstV + secondC + secondV;
            randomVerbArray.push(CVCV)

        } else if(randomNum === 3 ) {
            //generates a CVCVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCVC = firstC + firstV + secondC + secondV + thirdC;
            randomVerbArray.push(CVCVC)

        } else if(randomNum === 4 ) {
            //generates a CVCC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCC = firstC + firstV + secondC + thirdC;
            randomVerbArray.push(CVCC)

        } else if(randomNum === 5 ) {
            //generates a CVCCV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCCV = firstC + firstV + secondC + thirdC + secondV;
            randomVerbArray.push(CVCCV)
        }
    }


    //collects each generated word from each loop and puts them into one array, which is then joined into a single string 
    let generatedWordsArray = [];
    for(let i = 0; i < numberOfVerbs; i++) {
        generatedWordsArray.push(randomVerbArray[i])
    }

    verbInput.value = generatedWordsArray.join(" ");
}

function generateIntransitiveVerbs() {
    let verbInput = document.getElementById("inputRootIntransitiveVerb");
    let randomVerbArray = [] 

    let numberOfVerbs = document.getElementById("select-amount").value;
    numberOfVerbs = Number(numberOfVerbs);
    
    for(let i = 0; i < numberOfVerbs; i++) {
        let randomNum = Math.floor(Math.random() * 6);

        if (randomNum === 0) { 
            //generates a CV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
            let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
            let CV = firstC + firstV;     
            randomVerbArray.push(CV)

        } else if(randomNum === 1 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVC = firstC + firstV + secondC;
            randomVerbArray.push(CVC)

        } else if(randomNum === 2 ) {
            //generates a CVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCV = firstC + firstV + secondC + secondV;
            randomVerbArray.push(CVCV)

        } else if(randomNum === 3 ) {
            //generates a CVCVC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCVC = firstC + firstV + secondC + secondV + thirdC;
            randomVerbArray.push(CVCVC)

        } else if(randomNum === 4 ) {
            //generates a CVCC root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let CVCC = firstC + firstV + secondC + thirdC;
            randomVerbArray.push(CVCC)

        } else if(randomNum === 5 ) {
            //generates a CVCCV root
            let firstC = consonants[Math.floor(Math.random() * consonants.length)]
            let firstV = vowels[Math.floor(Math.random() * vowels.length)]
            let secondC = consonants[Math.floor(Math.random() * consonants.length)]
            let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
            let secondV = vowels[Math.floor(Math.random() * vowels.length)]
            let CVCCV = firstC + firstV + secondC + thirdC + secondV;
            randomVerbArray.push(CVCCV)
        }
    }


    //collects each generated word from each loop and puts them into one array, which is then joined into a single string 
    let generatedWordsArray = [];
    for(let i = 0; i < numberOfVerbs; i++) {
        generatedWordsArray.push(randomVerbArray[i])
    }

    verbInput.value = generatedWordsArray.join(" ");
}

//randomly selects meanings for the randomly generated verbs
function generateTransitiveVerbMeanings() {
    let verbMeaningInput = document.getElementById("inputMeaningTransitiveVerb");

    let numberOfVerbMeanings = document.getElementById("select-amount").value;

    //collects each select word from each loop and puts them into one array, which is then joined into a single string 
    let selectedWordsArray = [];
    for(let i = 0; i < numberOfVerbMeanings; i++) {
        selectedWordsArray.push(transitiveVerbArray[Math.floor(Math.random() * transitiveVerbArray.length)])
    }

    verbMeaningInput.value = selectedWordsArray.join(" ");
}

function generateIntransitiveVerbMeanings() {
    let verbMeaningInput = document.getElementById("inputMeaningIntransitiveVerb");

    let numberOfVerbMeanings = document.getElementById("select-amount").value;

    //collects each select word from each loop and puts them into one array, which is then joined into a single string 
    let selectedWordsArray = [];
    for(let i = 0; i < numberOfVerbMeanings; i++) {
        selectedWordsArray.push(intransitiveVerbArray[Math.floor(Math.random() * intransitiveVerbArray.length)])
    }

    verbMeaningInput.value = selectedWordsArray.join(" ");
}

//randomly generates a Nominaliser suffix
function generateNominaliser() {
    let nominaliserInput = document.getElementById("inputNominaliser");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        nominaliserInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        nominaliserInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        nominaliserInput.value = CVC;

    } 


}

//randomly generates a word for "also"
function generateAlso() {
    let alsoInput = document.getElementById("inputAlso");
    
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        alsoInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        alsoInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        alsoInput.value = CVC;
    } 


}

//randomly generates a word for "also"
function generateAgain() {
    let againInput = document.getElementById("inputAgain");
    
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 0) { 
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        againInput.value = CVC;

    } else if(randomNum === 1 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        againInput.value = CVCV;

    } else if(randomNum === 2 ) {
        //generates a CVCVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCVC = firstC + firstV + secondC + secondV + thirdC;
        againInput.value = CVCVC;

    } else if(randomNum === 3 ) {
        //generates a CVCC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCC = firstC + firstV + secondC + thirdC;
        againInput.value = CVCC;

    } else if(randomNum === 4 ) {
        //generates a CVCCV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCCV = firstC + firstV + secondC + thirdC + secondV;
        againInput.value = CVCCV;
    }


}

//randomly generates a word for "place"
function generatePlace() {
    let placeInput = document.getElementById("inputPlace");
    
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 0) { 
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        placeInput.value = CVC;

    } else if(randomNum === 1 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        placeInput.value = CVCV;

    } else if(randomNum === 2 ) {
        //generates a CVCVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCVC = firstC + firstV + secondC + secondV + thirdC;
        placeInput.value = CVCVC;

    } else if(randomNum === 3 ) {
        //generates a CVCC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCC = firstC + firstV + secondC + thirdC;
        placeInput.value = CVCC;

    } else if(randomNum === 4 ) {
        //generates a CVCCV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCCV = firstC + firstV + secondC + thirdC + secondV;
        placeInput.value = CVCCV;
    }


}

//randomly generates a word for "man"
function generateMan() {
    let inputMan = document.getElementById("inputMan");
    
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 0) { 
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        inputMan.value = CVC;

    } else if(randomNum === 1 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        inputMan.value = CVCV;

    } else if(randomNum === 2 ) {
        //generates a CVCVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCVC = firstC + firstV + secondC + secondV + thirdC;
        inputMan.value = CVCVC;

    } else if(randomNum === 3 ) {
        //generates a CVCC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCC = firstC + firstV + secondC + thirdC;
        inputMan.value = CVCC;

    } else if(randomNum === 4 ) {
        //generates a CVCCV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCCV = firstC + firstV + secondC + thirdC + secondV;
        inputMan.value = CVCCV;
    }


}

//randomly generates a word for "path"
function generatePath() {
    let inputPath = document.getElementById("inputPath");
    
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 0) { 
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        inputPath.value = CVC;

    } else if(randomNum === 1 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        inputPath.value = CVCV;

    } else if(randomNum === 2 ) {
        //generates a CVCVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCVC = firstC + firstV + secondC + secondV + thirdC;
        inputPath.value = CVCVC;

    } else if(randomNum === 3 ) {
        //generates a CVCC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCC = firstC + firstV + secondC + thirdC;
        inputPath.value = CVCC;

    } else if(randomNum === 4 ) {
        //generates a CVCCV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCCV = firstC + firstV + secondC + thirdC + secondV;
        inputPath.value = CVCCV;
    }


}

//randomly generates a word for "path"
function generateOrigin() {
    let inputOrigin = document.getElementById("inputOrigin");
    
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 0) { 
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        inputOrigin.value = CVC;

    } else if(randomNum === 1 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        inputOrigin.value = CVCV;

    } else if(randomNum === 2 ) {
        //generates a CVCVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCVC = firstC + firstV + secondC + secondV + thirdC;
        inputOrigin.value = CVCVC;

    } else if(randomNum === 3 ) {
        //generates a CVCC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCC = firstC + firstV + secondC + thirdC;
        inputOrigin.value = CVCC;

    } else if(randomNum === 4 ) {
        //generates a CVCCV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCCV = firstC + firstV + secondC + thirdC + secondV;
        inputOrigin.value = CVCCV;
    }


}

//randomly generates a word for "time"
function generateTime() {
    let inputTime = document.getElementById("inputTime");
    
    let randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 0) { 
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        inputTime.value = CVC;

    } else if(randomNum === 1 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCV = firstC + firstV + secondC + secondV;
        inputTime.value = CVCV;

    } else if(randomNum === 2 ) {
        //generates a CVCVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCVC = firstC + firstV + secondC + secondV + thirdC;
        inputTime.value = CVCVC;

    } else if(randomNum === 3 ) {
        //generates a CVCC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVCC = firstC + firstV + secondC + thirdC;
        inputTime.value = CVCC;

    } else if(randomNum === 4 ) {
        //generates a CVCCV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let thirdC = consonants[Math.floor(Math.random() * consonants.length)]
        let secondV = vowels[Math.floor(Math.random() * vowels.length)]
        let CVCCV = firstC + firstV + secondC + thirdC + secondV;
        inputTime.value = CVCCV;
    }


}

//randomly generates a word for "here"
function generateHere() {
    let hereInput = document.getElementById("inputHere");
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        hereInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        hereInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        hereInput.value = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        hereInput.value = V;
    } 


}

//randomly generates a word for "there"
function generateThere() {
    let thereInput = document.getElementById("inputThere");
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        thereInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        thereInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        thereInput.value = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        thereInput.value = V;
    } 


}

//randomly generates an adverbial suffix
function generateAdverbialSuffix() {
    let adverbialSuffixInput = document.getElementById("inputAdverbialSuffix");
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        adverbialSuffixInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        adverbialSuffixInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        adverbialSuffixInput.value = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        adverbialSuffixInput.value = V;
    } 


}

//randomly generates an first person pronoun
function generateFirstPersonPronoun() {
    let FirstPersonPronounInput = document.getElementById("first-person-pronoun");
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        FirstPersonPronounInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        FirstPersonPronounInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        FirstPersonPronounInput.value = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        FirstPersonPronounInput.value = V;
    } 


}

//randomly generates an second person pronoun
function generateSecondPersonPronoun() {
    let SecondPersonPronounInput = document.getElementById("second-person-pronoun");
    
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        SecondPersonPronounInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        SecondPersonPronounInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let secondC = consonants[Math.floor(Math.random() * consonants.length)]
        let CVC = firstC + firstV + secondC;
        SecondPersonPronounInput.value = CVC;
    } 
    else if(randomNum === 3 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        SecondPersonPronounInput.value = V;
    } 


}

//randomly generates an non-past suffix
function generateNonPastSuffix() {
    let nonPastSuffixInput = document.getElementById("non-past");
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        nonPastSuffixInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        nonPastSuffixInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a V root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let V = firstV;
        nonPastSuffixInput.value = V;
    } 


}

function generatePluralVerbSuffix() {
let pluralVerbInput = document.getElementById("input-plural-verb");
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        pluralVerbInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        pluralVerbInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let secondC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let CVC = firstC + firstV + secondC;    
        pluralVerbInput.value = CVC;
    } 
}

function generateHabitualSuffix() {
let habitualInput = document.getElementById("input-habitual-suffix");
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) { 
        //generates a CV root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let CV = firstC + firstV;     
        habitualInput.value = CV;

    } else if(randomNum === 1 ) {
        //generates a VC root
        let firstV = vowels[Math.floor(Math.random() * vowels.length)]
        let firstC = consonants[Math.floor(Math.random() * consonants.length)]
        let VC = firstV + firstC;
        habitualInput.value = VC;

    } else if(randomNum === 2 ) {
        //generates a CVC root
        let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
        let secondC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
        let CVC = firstC + firstV + secondC;    
        habitualInput.value = CVC;
    } 
}

function generateVocab() {
    generateNouns();
    generateNounMeanings();
    generateAdjectives();
    generateAdjectiveMeaning();
    generateCopula();
    generateTransitiveVerbs();
    generateIntransitiveVerbs();
    generateTransitiveVerbMeanings();
    generateIntransitiveVerbMeanings();
    generateNominaliser();
    generateAlso();
    generateAgain();
    generatePlace();
    generateMan();
    generateTime();
    generateHere()
    generateThere();
    generatePath();
    generateOrigin();
    generateAdverbialSuffix();
    generateFirstPersonPronoun();
    generateSecondPersonPronoun();
    generateNonPastSuffix();
    generatePluralVerbSuffix();
    generateHabitualSuffix();
}