
/* CHANGES LANGUAGE NAME---------------------*/

let changeNameButton = document.getElementById("change-name");
changeNameButton.addEventListener("click", nameChanger);

let changeName = document.getElementById("changeName");
let newSpan = document.getElementsByClassName("language-name");

function nameChanger() {
    for (i = 0; i < newSpan.length; i++) {
        if (newSpan[i].innerHTML != changeName.value) {
            newSpan[i].innerHTML = changeName.value;
        }
    }


}

/* CHANGES LANGUAGE NAME^^^^^---------------------*/

/*---------------------------------------*/


let submitButton = document.getElementById("submitNoun");
let clearButton = document.getElementById("clear-inputNoun");

submitButton.addEventListener("click", createArrays);
clearButton.addEventListener("click", clearOutput);

function clearOutput() { //clears previous results upon clicking "Clear Output"
    outputSectionNoun.replaceChildren();
    document.getElementById("inputRootNoun").value = "";
    document.getElementById("inputMeaningNoun").value = "";
}

/*------------SOUND CHANGES------------------------------------------------------*/

function soundChange(word) {


    let vowels = ["a", "ā", "e", "ē", "o", "ō", "u", "ū", "i", "ī", "ə"];

    let consonants = ["m", "n", "p", "b", "t", "d", "k", "g", "f", "v", "s", "z", "h", "l", "r", "j", "w"];

    letterArray = Array.from(word); /*turns string into an array of individual letters*/

    /*---------SYNCOPE-----------*/
    //removes the fourth letter of words longer than four letters, and lengthens the first vowel, or if the third and fourth letters are the same, removes the fifth letter abd lengthens the fourth letter
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
        } else {
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

    //checks if "j" occurs before a consonant and turns it into "i" 
    let syllabliseJ = returnXtoHK.includes("j") && consonants.includes(returnXtoHK.charAt(returnXtoHK.indexOf("j") + 1)) ? returnXtoHK.replace("j", "i") : returnXtoHK;

    //checks if "w" occurs before a consonant and turns it into "u"
    let syllabliseW = syllabliseJ.includes("w") && consonants.includes(syllabliseJ.charAt(syllabliseJ.indexOf("w") + 1)) ? syllabliseJ.replace("w", "u") : syllabliseJ;

    //checks if "r" is before and after a consonant, and turns it into schwa if so
    let syllabliseR = syllabliseW.includes("r") && consonants.includes(syllabliseW.charAt(syllabliseW.indexOf("r") + 1)) && consonants.includes(syllabliseW.charAt(syllabliseW.indexOf("r") - 1)) ? syllabliseJ.replace("r", "ə") : syllabliseW;

    //checks if "l" is before and after a consonant, and turns it into schwa if so
    let syllabliseL = syllabliseW.includes("l") && consonants.includes(syllabliseW.charAt(syllabliseW.indexOf("l") + 1)) && consonants.includes(syllabliseW.charAt(syllabliseW.indexOf("l") - 1)) ? syllabliseJ.replace("l", "ə") : syllabliseR;

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



    let fixMacronUPlusU = reduceGeminate11.replace("ūu", "ū");
    let fixUPlusMacronU = fixMacronUPlusU.replace("uū", "ū");
    let fixMacronIPlusI = fixUPlusMacronU.replace("īi", "ī");
    let fixIPlusMacronI = fixMacronIPlusI.replace("iī", "ī");


    return fixIPlusMacronI;


}

/*-----------^^^-SOUND CHANGES-^^^-----------------------------------------------------*/




//Takes the words from both text fields and splits them into arrays, then it creates an object using both arrays.
function createArrays() {
    let outputSection = document.getElementById("outputSectionNoun");
    outputSection.replaceChildren(); //clears the previous output upon refreshing the page

    //Creates a div to contain the root inflection tables, and adds an h1 to it.
    let inflectionDiv = document.createElement("div");
    inflectionDiv.classList.add("inflection-output");
    let inflectionH1 = document.createElement("h1");
    inflectionH1.innerHTML = "Inflected Roots";
    inflectionDiv.appendChild(inflectionH1);
    outputSection.appendChild(inflectionDiv);

    //Creates a div to contain the compound inflection tables, and adds an h1 to it.
    let compoundDiv = document.createElement("div");
    compoundDiv.classList.add("compound-output");
    let compoundH1 = document.createElement("h1");
    compoundH1.innerHTML = "Compounds";
    compoundDiv.appendChild(compoundH1);
    outputSection.appendChild(compoundDiv);

    let inputRoot = document.getElementById("inputRootNoun").value;
    let splitInputRoot = inputRoot.split(" ");
    let inputMeaning = document.getElementById("inputMeaningNoun").value;
    let splitInputMeaning = inputMeaning.split(" ");

    /*-----------------------INFLECTION HEADWORD--------------------------------------------------------------*
       
   /* Generates the headword above each inflection table, showing the root and it's meaning as a title */
    for (i = 0; i < splitInputRoot.length; i++) {
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

        for (j = 0; j < 4; j++) {
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

            let nomSg = root + "ko"
            let nomPl = root + "te"

            let nomSgEtymology = " " + " <" + " " + root + "-" + "ko";
            let nomPlEtymology = " " + " <" + " " + root + "-" + "te";

            let accSg = "he" + root + "ko"
            let accPl = "he" + root + "te"

            let accSgEtymology = " " + "<" + " " + "he" + "-" + root + "-" + "ko";
            let accPlEtymology = " " + "<" + " " + "he" + "-" + root + "-" + "te";

            let genSg = "pi" + root + "ko"
            let genPl = "pi" + root + "te"

            let genSgEtymology = " " + "<" + " " + "pi" + "-" + root + "-" + "ko";
            let genPlEtymology = " " + "<" + " " + "pi" + "-" + root + "-" + "te";

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
    for (i = 0; i < splitInputRoot.length; i++) {
        for (j = 0; j < splitInputRoot.length; j++) {
            if (splitInputRoot[i] == splitInputRoot[j]) { //prevents a root being compounded with itself
                continue;
            }
            compound = splitInputRoot[i] + splitInputRoot[j];
            compoundMeaning = splitInputMeaning[i] + "-" + splitInputMeaning[j];

            compoundArray.push(compound);

            compoundMeaningArray.push(compoundMeaning);

        }
    }

    /*-----------------------COMPOUND HEADWORD--------------------------------------------------------------*
       
   /* Generates the headword above each compound table, showing the compound and it's meaning as a title */
    for (x = 0; x < compoundArray.length; x++) {
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

        for (y = 0; y < 4; y++) {
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

            let nomSgCompound = compoundFromArray + "ko"
            let nomPlCompound = compoundFromArray + "te"

            let nomSgEtymologyCompound = " " + " <" + " " + compoundFromArray + "-" + "ko";
            let nomPlEtymologyCompound = " " + " <" + " " + compoundFromArray + "-" + "te";

            let accSgCompound = "he" + compoundFromArray + "ko"
            let accPlCompound = "he" + compoundFromArray + "te"

            let accSgEtymologyCompound = " " + "<" + " " + "he" + "-" + compoundFromArray + "-" + "ko";
            let accPlEtymologyCompound = " " + "<" + " " + "he" + "-" + compoundFromArray + "-" + "te";

            let genSgCompound = "pi" + compoundFromArray + "ko"
            let genPlCompound = "pi" + compoundFromArray + "te"

            let genSgEtymologyCompound = " " + "<" + " " + "pi" + "-" + compoundFromArray + "-" + "ko";
            let genPlEtymologyCompound = " " + "<" + " " + "pi" + "-" + compoundFromArray + "-" + "te";

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



/*------------------------------------------------------*/



//Generates the word for "here"
function createHere() {
    let inputHere = document.getElementById("inputHere");
    let wordHere = inputHere.value;
    let spanHere = document.getElementsByClassName("here");
    for (i = 0; i < spanHere.length; i++) {
        if (wordHere != "") { //if no word has been input by the user, then nothing happens
            if (spanHere[i].innerHTML != soundChange(wordHere)) {
                spanHere[i].innerHTML = soundChange(wordHere);
            }
        }
    }
    return wordHere
}

//Generates the adverbial suffix
function createAdverbialSuffix() {
    let inputAdverbialSuffix = document.getElementById("inputAdverbialSuffix");
    let wordAdverbialSuffix = inputAdverbialSuffix.value;
    let spanAdverbialSuffix = document.getElementsByClassName("adverbial-suffix");
    for (i = 0; i < spanAdverbialSuffix.length; i++) {
        if (wordAdverbialSuffix != "") { //if no word has been input by the user, then nothing happens
            if (spanAdverbialSuffix[i].innerHTML != soundChange(wordAdverbialSuffix)) {
                spanAdverbialSuffix[i].innerHTML = soundChange(wordAdverbialSuffix);
            }
        }
    }
    return wordAdverbialSuffix
}

//Merges the word for "here" and the adverbial suffix to create the demonstrative pronoun "this"
function createThis() {
    let wordHere = createHere(); //assigns the word "here"
    let wordAdverbialSuffix = createAdverbialSuffix(); //assigns the adverbial suffix
    let thisPronoun = wordHere + wordAdverbialSuffix;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanThis = document.getElementsByClassName("this-pronoun");
    for (i = 0; i < spanThis.length; i++) {
        if (thisPronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanThis[i].innerHTML != soundChange(thisPronoun)) {
                spanThis[i].innerHTML = soundChange(thisPronoun);
            }
        }
    }
    return thisPronoun
}

//Generates the word for "also"
function createAlso() {
    let inputAlso = document.getElementById("inputAlso");
    let wordAlso = inputAlso.value;
    let spanAlso = document.getElementsByClassName("also");
    for (i = 0; i < spanAlso.length; i++) {
        if (wordAlso != "") {
            if (spanAlso[i].innerHTML != soundChange(wordAlso)) {
                spanAlso[i].innerHTML = soundChange(wordAlso);
            }
        }
    }
    return wordAlso
}

//Generates the relative pronoun by merging the word for "this" and "also"
function createRelativePronoun() {
    let wordThis = createThis(); //assigns the word "this"
    let wordAlso = createAlso(); //assigns the word "also"
    let RelativePronoun = wordThis + wordAlso;

    //assigns the merged result to the appropriate span elements, and applies the sound changes
    let spanRelativePronoun = document.getElementsByClassName("relative-pronoun");
    for (i = 0; i < spanRelativePronoun.length; i++) {
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
    for (i = 0; i < spanNominaliserSuffix.length; i++) {
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
    for (i = 0; i < spanFirstPersonPronoun.length; i++) {
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
    for (i = 0; i < spanSecondPersonPronoun.length; i++) {
        if (SecondPersonPronoun != "") { //if no word has been input by the user, then nothing happens
            if (spanSecondPersonPronoun[i].innerHTML != soundChange(SecondPersonPronoun)) {
                spanSecondPersonPronoun[i].innerHTML = soundChange(SecondPersonPronoun);
            }
        }
    }
    return SecondPersonPronoun
}

//selects a random noun from the nouns entered by the user
function createRandomAdjective() {
    //puts all of the input adjectives into one array
    let inputAdjective = document.getElementById("inputRootAdj").value;
    let splitAdjective = inputAdjective.split(" ");

    //puts all of the input adjectives' meanings into one array
    let inputAdjectiveMeaning = document.getElementById("inputMeaningAdj").value;
    let splitAdjectiveMeaning = inputAdjectiveMeaning.split(" ");

    let spanAdjective = document.getElementsByClassName("adjective");
    let spanAdjectiveMeaning = document.getElementsByClassName("adjective-meaning");

    for (i = 0; i < spanAdjective.length; i++) {
        let randomNumber = Math.floor(Math.random() * splitAdjective.length);//chooses a random integer between 0 and the array's length
        let randomAdjective = splitAdjective[randomNumber] //random adjective from the array
        let randomAdjectiveMeaning = splitAdjectiveMeaning[randomNumber]

        spanAdjective[i].innerHTML = soundChange(randomAdjective);
        spanAdjectiveMeaning[i].innerHTML = randomAdjectiveMeaning;
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
    let spanNounMeaning = document.getElementsByClassName("noun-meaning");

    for (i = 0; i < spanNoun.length; i++) {
        let randomNumber = Math.floor(Math.random() * splitNoun.length);//chooses a random integer between 0 and the array's length
        let randomNoun = splitNoun[randomNumber] //random noun from the array
        let randomNounMeaning = splitNounMeaning[randomNumber]

        spanNoun[i].innerHTML = soundChange(randomNoun);
        spanNounMeaning[i].innerHTML = randomNounMeaning;
    }
}

//When I wish to display the same randomly generated word several times within the same example, only the first instance is randomly generated, the rest merely copy the test content of the first
function createCopy() {

    let noun1 = document.getElementById("noun1");
    let noun1Content = noun1.innerHTML;
    let nounCopy1 = document.getElementsByClassName("noun1-copy");
    for (i = 0; i < noun1.length; i++) {
        nounCopy1[i].innerHTML = noun1Content;
    }

    let noun5 = document.getElementById("noun5");
    let noun5Content = noun5.innerHTML;
    let nounCopy5 = document.getElementById("noun5-copy");
    nounCopy5.innerHTML = noun5Content;
    
    
    let nounMeaning1 = document.getElementById("noun-meaning1");
    let nounMeaning1Content = nounMeaning1.innerHTML;
    let NounMeaningCopy1 = document.getElementsByClassName("noun-meaning1-copy");
    for (i = 0; i < NounMeaningCopy1.length; i++) {
        NounMeaningCopy1[i].innerHTML = nounMeaning1Content;
    }

    let nounMeaning2 = document.getElementById("noun-meaning2");
    let nounMeaning2Content = nounMeaning2.innerHTML;
    let NounMeaningCopy2 = document.getElementsByClassName("noun-meaning2-copy");
    for (i = 0; i < NounMeaningCopy2.length; i++) {
        NounMeaningCopy2[i].innerHTML = nounMeaning2Content;
    }

    let nounMeaning3 = document.getElementById("noun-meaning3");
    let nounMeaning3Content = nounMeaning3.innerHTML;
    let NounMeaningCopy3 = document.getElementsByClassName("noun-meaning3-copy");
    for (i = 0; i < NounMeaningCopy3.length; i++) {
        NounMeaningCopy3[i].innerHTML = nounMeaning3Content;
    }

    let nounMeaning4 = document.getElementById("noun-meaning4");
    let nounMeaning4Content = nounMeaning4.innerHTML;
    let NounMeaningCopy4 = document.getElementsByClassName("noun-meaning4-copy");
    for (i = 0; i < NounMeaningCopy4.length; i++) {
        NounMeaningCopy4[i].innerHTML = nounMeaning4Content;
    }

    let nounMeaning5 = document.getElementById("noun-meaning5");
    let nounMeaning5Content = nounMeaning5.innerHTML;
    let NounMeaningCopy5 = document.getElementsByClassName("noun-meaning5-copy");
    for (i = 0; i < NounMeaningCopy5.length; i++) {
        NounMeaningCopy5[i].innerHTML = nounMeaning5Content;
    }

    let adjective1 = document.getElementById("adjective1");
    let adjective1Content = adjective1.innerHTML;
    let adjectiveCopy1 = document.getElementsByClassName("adjective1-copy");
    for (i = 0; i < adjectiveCopy1.length; i++) {
        adjectiveCopy1[i].innerHTML = adjective1Content;
    }

    let adjective2 = document.getElementById("adjective2");
    let adjective2Content = adjective2.innerHTML;
    let adjectiveCopy2 = document.getElementsByClassName("adjective2-copy");
    for (i = 0; i < adjectiveCopy2.length; i++) {
        adjectiveCopy2[i].innerHTML = adjective2Content;
    }

    let adjective3 = document.getElementById("adjective3");
    let adjective3Content = adjective3.innerHTML;
    let adjectiveCopy3 = document.getElementsByClassName("adjective3-copy");
    for (i = 0; i < adjectiveCopy3.length; i++) {
        adjectiveCopy3[i].innerHTML = adjective3Content;
    }

    let adjective4 = document.getElementById("adjective4");
    let adjective4Content = adjective4.innerHTML;
    let adjectiveCopy4 = document.getElementsByClassName("adjective4-copy");
    for (i = 0; i < adjectiveCopy4.length; i++) {
        adjectiveCopy4[i].innerHTML = adjective4Content;
    }

    let adjective5 = document.getElementById("adjective5");
    let adjective5Content = adjective5.innerHTML;
    let adjectiveCopy5 = document.getElementsByClassName("adjective5-copy");
    for (i = 0; i < adjectiveCopy5.length; i++) {
        adjectiveCopy5[i].innerHTML = adjective5Content;
    }


    let adjectiveMeaning1 = document.getElementById("adjective-meaning1");
    let adjectiveMeaning1Content = adjectiveMeaning1.innerHTML;
    let adjectiveMeaningCopy1 = document.getElementsByClassName("adjective-meaning1-copy");
    for (i = 0; i < adjectiveMeaningCopy1.length; i++) {
        adjectiveMeaningCopy1[i].innerHTML = adjectiveMeaning1Content;
    }

    let adjectiveMeaning2 = document.getElementById("adjective-meaning2");
    let adjectiveMeaning2Content = adjectiveMeaning2.innerHTML;
    let adjectiveMeaningCopy2 = document.getElementsByClassName("adjective-meaning2-copy");
    for (i = 0; i < adjectiveMeaningCopy2.length; i++) {
        adjectiveMeaningCopy2[i].innerHTML = adjectiveMeaning2Content;
    }

    let adjectiveMeaning3 = document.getElementById("adjective-meaning3");
    let adjectiveMeaning3Content = adjectiveMeaning3.innerHTML;
    let adjectiveMeaningCopy3 = document.getElementsByClassName("adjective-meaning3-copy");
    for (i = 0; i < adjectiveMeaningCopy3.length; i++) {
        adjectiveMeaningCopy3[i].innerHTML = adjectiveMeaning3Content;
    }

    let adjectiveMeaning4 = document.getElementById("adjective-meaning4");
    let adjectiveMeaning4Content = adjectiveMeaning4.innerHTML;
    let adjectiveMeaningCopy4 = document.getElementsByClassName("adjective-meaning4-copy");
    for (i = 0; i < adjectiveMeaningCopy4.length; i++) {
        adjectiveMeaningCopy4[i].innerHTML = adjectiveMeaning4Content;
    }

    let adjectiveMeaning5 = document.getElementById("adjective-meaning5");
    let adjectiveMeaning5Content = adjectiveMeaning5.innerHTML;
    let adjectiveMeaningCopy5 = document.getElementsByClassName("adjective-meaning5-copy");
    for (i = 0; i < adjectiveMeaningCopy5.length; i++) {
        adjectiveMeaningCopy5[i].innerHTML = adjectiveMeaning5Content;
    }


}


//takes a randomly selected noun and puts it in the nominative singular
function createNounNomSg() {
    let spanNoun = document.getElementsByClassName("noun-nom-sg")
    for (i = 0; i < spanNoun.length; i++) {
        let nounNomSg = spanNoun[i].innerHTML + "ko";
        if (nounNomSg != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounNomSg)) {
                spanNoun[i].innerHTML = soundChange(nounNomSg);
            }
        }
    }
}


//creates a bahuvrihi compound for the example shown in the adjective section
function createBahuvrihi() {
    let noun = document.getElementById("noun5");
    let nominaliser = createNominaliserSuffix();
    let adjective = document.getElementById("adjective5");
    let adjectiveCopy = document.getElementById("adjective5");
   
    let adjectiveNominaliserSg = adjective.innerHTML + nominaliser + "ko";

    let bahuvrihi = noun.innerHTML + soundChange(adjectiveNominaliserSg);
   document.getElementById("bahuvrihi").innerHTML = soundChange(bahuvrihi);

    let nounInBreakdown = document.getElementById("noun5Also");
    nounInBreakdown.innerHTML = noun.innerHTML;

    let adjInBreakdown = document.getElementById("adjective5Also");
    adjInBreakdown.innerHTML = adjectiveCopy.innerHTML;

    
}

//takes a randomly selected noun and puts it in the nominative plural
function createNounNomPl() {
    let spanNoun = document.getElementsByClassName("noun-nom-pl")
    for (i = 0; i < spanNoun.length; i++) {
        let nounNomPl = spanNoun[i].innerHTML + "te";
        if (nounNomPl != "") { //if no word has been input by the user, then nothing happens
            if (spanNoun[i].innerHTML != soundChange(nounNomPl)) {
                spanNoun[i].innerHTML = soundChange(nounNomPl);
            }
        }
    }
}

//takes a randomly selected adjective, attaches the nominaliser suffix, and puts it in the nominative singular
function createAdjNomSg() {
    let nominaliser = createNominaliserSuffix();
    let spanAdj = document.getElementsByClassName("adjective-nom-sg")
    for (i = 0; i < spanAdj.length; i++) {
        let adjNomSg = spanAdj[i].innerHTML + nominaliser + "ko";
        if (adjNomSg != "") { //if no word has been input by the user, then nothing happens
            if (spanAdj[i].innerHTML != soundChange(adjNomSg)) {
                spanAdj[i].innerHTML = soundChange(adjNomSg);
            }
        }

    }
}

//takes a randomly selected noun and puts it in the nominative plural
function createAdjNomPl() {
    let nominaliser = createNominaliserSuffix();
    let spanAdj = document.getElementsByClassName("adjective-nom-pl")
    for (i = 0; i < spanAdj.length; i++) {
        let adjNomPl = spanAdj[i].innerHTML + nominaliser + "te";
        if (adjNomPl != "") { //if no word has been input by the user, then nothing happens
            if (spanAdj[i].innerHTML != soundChange(adjNomPl)) {
                spanAdj[i].innerHTML = soundChange(adjNomPl);
            }
        }
    }
}



/*--------------*/

let submitRest = document.getElementById("submitRest");
submitRest.addEventListener("click", buttonFunctions,);

function buttonFunctions() {
    createHere();
    createAdverbialSuffix();
    createThis();
    createAlso();
    createRelativePronoun();
    createNominaliserSuffix();
    createFirstPersonPronoun();
    createSecondPersonPronoun();
    createRandomAdjective();
    createRandomNoun();
    createCopy();
    createNounNomSg();
    createAdjNomSg();
    createNounNomPl();
    createAdjNomPl();
    createBahuvrihi();
}
