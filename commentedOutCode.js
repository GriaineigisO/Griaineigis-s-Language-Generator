//A place to store code which I have commented outerHeight, but may wish to requestAnimationFrame

//1)
/* CHANGES LANGUAGE NAME---------------------*/
// let changeNameButton = document.getElementById("change-name");
// changeNameButton.addEventListener("click", nameChanger);
// let changeName = document.getElementById("changeName");
// let newSpan = document.getElementsByClassName("language-name");
// function nameChanger() {
//     for(let i = 0; i < newSpan.length; i++) {
//         if (newSpan[i].innerHTML != changeName.value) {
//             newSpan[i].innerHTML = changeName.value;
//         }
//     }
// }
// /* CHANGES LANGUAGE NAME^^^^^---------------------*/

//2)
//randomly generates a verb root for "to be"
// function generateCopula() {
    
//     let copulaInput = "";
    
//     let randomNum = Math.floor(Math.random() * 3);

//     if (randomNum === 0) { 
//         //generates a CV root
//         let firstC = consonants[Math.floor(Math.random() * consonants.length)] //selects a consonant at a randomly chosen index
//         let firstV = vowels[Math.floor(Math.random() * vowels.length)] //selects a vowel at a randomly chosen index
//         let CV = firstC + firstV;     
//         copulaInput = CV;

//     } else if(randomNum === 1 ) {
//         //generates a VC root
//         let firstV = vowels[Math.floor(Math.random() * vowels.length)]
//         let firstC = consonants[Math.floor(Math.random() * consonants.length)]
//         let VC = firstV + firstC;
//         copulaInput = VC;

//     } else if(randomNum === 2 ) {
//         //generates a CVC root
//         let firstC = consonants[Math.floor(Math.random() * consonants.length)]
//         let firstV = vowels[Math.floor(Math.random() * vowels.length)]
//         let secondC = consonants[Math.floor(Math.random() * consonants.length)]
//         let CVC = firstC + firstV + secondC;
//         copulaInput = CVC;

//     } else if(randomNum === 3 ) {
//         //generates a CVC root
//         let firstC = consonants[Math.floor(Math.random() * consonants.length)]
//         let firstV = vowels[Math.floor(Math.random() * vowels.length)]
//         let secondC = consonants[Math.floor(Math.random() * consonants.length)]
//         let secondV = vowels[Math.floor(Math.random() * vowels.length)]
//         let CVCV = firstC + firstV + secondC + secondV;
//         copulaInput = CVCV;

//     } 
//     let spanCopula = document.getElementsByClassName("copula");
//     for(let i = 0; i < spanCopula.length; i++) {
//         spanCopula[i].innerHTML = copulaInput;
//     }

// }

//3)
//Takes the words from both text fields and splits them into arrays, then it creates an object using both arrays.
//REDUCE THIS NOW THAT THERE ARE HUNDREDS UPON HUNDREDS OF NOUNS, THIS IS NOT A GOOD IDEA TO SHOW TABLES FOR EVERY SINGLE WORD INFLECTED. INSTEAD, USE ONLY A FEW TABLES AS EXAMPLES IN THE APPROPIATE SECTION. SHOWING THEM ALL SERIOUSLY SLOWED DOWN THE PAGE
// function createNounInflectionTables() {
//     let outputSection = document.getElementById("outputSectionNoun");
//     outputSection.replaceChildren(); //clears the previous output upon refreshing the page

//     //Creates a div to contain the root inflection tables, and adds an h1 to it.
//     let inflectionDiv = document.createElement("div");
//     inflectionDiv.classList.add("inflection-output", "scroll-container");
//     let inflectionH1 = document.createElement("h1");
//     inflectionH1.innerHTML = "Inflected Roots";
//     outputSection.appendChild(inflectionH1);
//     inflectionH1.setAttribute("id", "inflectionH1");

//     outputSection.appendChild(inflectionDiv);

//     //Creates a div to contain the compound inflection tables, and adds an h1 to it.
//     let compoundDiv = document.createElement("div");
//     compoundDiv.classList.add("compound-output", "scroll-container");
//     let compoundH1 = document.createElement("h1");
//     outputSection.appendChild(compoundH1);
//     compoundH1.innerHTML = "Compounds";
//     outputSection.appendChild(compoundDiv);

//     // let inputRoot = document.getElementById("inputRootNoun").value;
//     // let splitInputRoot = inputRoot.split(" ");
//     // let inputMeaning = document.getElementById("inputMeaningNoun").value;
//     // let splitInputMeaning = inputMeaning.split(" ");


//     /*the below are the same as some functions above, I had to place them inside this function also, instead of just calling the functions because that caused an infinite loop for a reason that I do not know*/
//     //makes the singular suffix
//     let sgSuffix = document.getElementsByClassName("sg-suffix")[0].innerHTML;
//     let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;
//     let accPrefix = document.getElementsByClassName("acc-prefix")[0].innerHTML;
//     let genPrefix = document.getElementsByClassName("gen-prefix")[0].innerHTML;
   




//     /*-----------------------INFLECTION HEADWORD--------------------------------------------------------------*
       
//    /* Generates the headword above each inflection table, showing the root and it's meaning as a title */
//     for(let i = 0; i < generatedNouns.length; i++) {
//         let root = generatedNouns[i];
//         let rootMeaning = nounArray[i];

//         /*Creates a new p element to which is appended the root*/
//         let newHeadingProot = document.createElement("P");
//         newHeadingProot.classList.add("headingProot");
//         let newHeadingProotContent = document.createTextNode("-" + root + "-");
//         newHeadingProot.appendChild(newHeadingProotContent);

//         /*Creates a new p element to which is appended the root's meaning*/
//         let newHeadingPmeaning = document.createElement("p");
//         newHeadingPmeaning.classList.add("headingPmeaning");
//         let newHeadingPmeaningContent = document.createTextNode('"' + rootMeaning + '"');
//         newHeadingPmeaning.appendChild(newHeadingPmeaningContent);

//         /* Creates a new div element to contain both the p elements.*/
//         let newHeadWordDiv = document.createElement("div");
//         newHeadWordDiv.classList.add("headWordDiv");
//         newHeadWordDiv.appendChild(newHeadingProot);
//         newHeadWordDiv.appendChild(newHeadingPmeaning);


//         inflectionDiv.appendChild(newHeadWordDiv);


//         /*----------------------^^^-HEADWORD-^^^-------------------------------------------------------------*/

//         /*-----------------------INFLECTION TABLE--------------------------------------------------------------*/
//         /*Generates a table below the headword, showing how the root is inflected.*/

//         let newTable = document.createElement("table");
//         inflectionDiv.appendChild(newTable);

//         for (let j = 0; j < 4; j++) {
//             let newRow = document.createElement("tr");
//             newTable.appendChild(newRow);

//             let newTD1 = document.createElement("td");
//             newTD1.style.fontWeight = "bold";
//             newTD1.style.border = "1px solid black";

//             let newTD2 = document.createElement("td");
//             newTD2.style.border = "1px solid black";
//             newTD2.style.borderRightStyle = "none";

//             let newTD3 = document.createElement("td")
//             newTD3.style.fontStyle = "italic";
//             newTD3.style.border = "1px solid black";
//             newTD3.style.borderLeftStyle = "none";

//             let newTD4 = document.createElement("td");
//             newTD4.style.border = "1px solid black";
//             newTD4.style.borderRightStyle = "none";

//             let newTD5 = document.createElement("td");
//             newTD5.style.fontStyle = "italic";
//             newTD5.style.border = "1px solid black";
//             newTD5.style.borderLeftStyle = "none";

//             let newTH1 = document.createElement("th");
//             newTH1.style.border = "1px solid black";

//             let newTH2 = document.createElement("th");
//             newTH2.style.border = "1px solid black";

//             let newTH3 = document.createElement("th");
//             newTH3.style.border = "1px solid black";

//             let nomSg = root + sgSuffix;
//             let nomPl = root + plSuffix;

//             let nomSgEtymology = " " + " <" + " " + root + "-" + sgSuffix;
//             let nomPlEtymology = " " + " <" + " " + root + "-" + plSuffix;

//             let accSg = accPrefix + root + sgSuffix
//             let accPl = accPrefix + root + plSuffix

//             let accSgEtymology = " " + "<" + " " + accPrefix + "-" + root + "-" + sgSuffix;
//             let accPlEtymology = " " + "<" + " " + accPrefix + "-" + root + "-" + plSuffix;

//             let genSg = genPrefix + root + sgSuffix
//             let genPl = genPrefix + root + plSuffix

//             let genSgEtymology = " " + "<" + " " + genPrefix + "-" + root + "-" + sgSuffix;
//             let genPlEtymology = " " + "<" + " " + genPrefix + "-" + root + "-" + plSuffix;

//             if (j == 0) {
//                 newTH1.innerHTML = " "
//                 newTH1.setAttribute("colspan", 1)
//                 newRow.appendChild(newTH1)

//                 newTH2.innerHTML = "Sg"
//                 newTH2.setAttribute("colspan", 2)
//                 newRow.appendChild(newTH2)

//                 newTH3.innerHTML = "Pl"
//                 newTH3.setAttribute("colspan", 2)
//                 newRow.appendChild(newTH3)

//             } else if (j == 1) {
//                 newTD1.innerHTML = "Nom"
//                 newRow.appendChild(newTD1);

//                 newTD2.innerHTML = soundChange(nomSg);
//                 newRow.appendChild(newTD2);

//                 newTD3.innerHTML = nomSgEtymology
//                 newRow.appendChild(newTD3);

//                 newTD4.innerHTML = soundChange(nomPl);
//                 newRow.appendChild(newTD4);

//                 newTD5.innerHTML = nomPlEtymology
//                 newRow.appendChild(newTD5);

//             } else if (j == 2) {
//                 newTD1.innerHTML = "Acc"
//                 newRow.appendChild(newTD1);

//                 newTD2.innerHTML = soundChange(accSg);
//                 newRow.appendChild(newTD2);

//                 newTD3.innerHTML = accSgEtymology;
//                 newRow.appendChild(newTD3);

//                 newTD4.innerHTML = soundChange(accPl);
//                 newRow.appendChild(newTD4);

//                 newTD5.innerHTML = accPlEtymology
//                 newRow.appendChild(newTD5);

//             } else if (j == 3) {
//                 newTD1.innerHTML = "Gen"
//                 newRow.appendChild(newTD1);

//                 newTD2.innerHTML = soundChange(genSg);
//                 newRow.appendChild(newTD2);

//                 newTD3.innerHTML = genSgEtymology;
//                 newRow.appendChild(newTD3);

//                 newTD4.innerHTML = soundChange(genPl);
//                 newRow.appendChild(newTD4);

//                 newTD5.innerHTML = genPlEtymology;
//                 newRow.appendChild(newTD5);

//             }
//         }
//     }

//     /*----------------------^^^INFLECTION TABLE-^^^-------------------------------------------------------------*/

//     /*-------------COMPOUND------------------------*/
//     //DO NOT COMPOUND EVERY POSSIBLE NOUN. Now that there are hundreds of nouns, the resulting output is too big,
//     //when I get to making a noun derivation section, use only a few compounds as an example
//     let compound = ""
//     let compoundArray = [];
//     let compoundMeaningArray = [];
//     for(let i = 0; i < 4; i++) {
//         for(let j = 0; j < 4; j++) {
//             if (generatedNouns[i] == generatedNouns[j]) { //prevents a root being compounded with itself
//                 continue;
//             }
//             compound = generatedNouns[i] + generatedNouns[j];
//             let compoundMeaning = nounArray[i] + "-" + nounArray[j];

//             compoundMeaningArray.push(compoundMeaning);

//         }
//     }

//     /*-----------------------COMPOUND HEADWORD--------------------------------------------------------------*
       
//    /* Generates the headword above each compound table, showing the compound and it's meaning as a title */
//     for (let x = 0; x < compoundArray.length; x++) {
//         let compoundFromArray = compoundArray[x];
//         let compoundMeaningFromArray = compoundMeaningArray[x];

//         /*Creates a new p element to which is appended the root*/
//         let newHeadingPcompound = document.createElement("p");
//         newHeadingPcompound.classList.add("headingProot");
//         newHeadingPcompound.innerHTML = compoundFromArray;


//         /*Creates a new p element to which is appended the root's meaning */
//         let newHeadingPCompoundmeaning = document.createElement("p");
//         newHeadingPCompoundmeaning.classList.add("headingPmeaning");
//         newHeadingPCompoundmeaning.innerHTML = '"' + compoundMeaningFromArray + '"';

//         /* Creates a new div element to contain both the p elements.*/
//         let newCompoundHeadWordDiv = document.createElement("div");
//         newCompoundHeadWordDiv.classList.add("headWordDiv");
//         newCompoundHeadWordDiv.appendChild(newHeadingPcompound);
//         newCompoundHeadWordDiv.appendChild(newHeadingPCompoundmeaning);


//         compoundDiv.appendChild(newCompoundHeadWordDiv);


//         /* ----------------------^^^-HEADWORD-^^^-------------------------------------------------------------*/

//         /*-----------------------COMPOUND TABLE--------------------------------------------------------------*/
//         /*Generates a table below the headword, showing how the root is inflected.*/
//         let newCompoundTable = document.createElement("table");
//         compoundDiv.appendChild(newCompoundTable);

//         for (let y = 0; y < 4; y++) {
//             let newRowCompound = document.createElement("tr");
//             newCompoundTable.appendChild(newRowCompound);

//             let newTD1Compound = document.createElement("td");
//             newTD1Compound.style.fontWeight = "bold";
//             newTD1Compound.style.border = "1px solid black";

//             let newTD2Compound = document.createElement("td");
//             newTD2Compound.style.border = "1px solid black";
//             newTD2Compound.style.borderRightStyle = "none";

//             let newTD3Compound = document.createElement("td")
//             newTD3Compound.style.fontStyle = "italic";
//             newTD3Compound.style.border = "1px solid black";
//             newTD3Compound.style.borderLeftStyle = "none";

//             let newTD4Compound = document.createElement("td");
//             newTD4Compound.style.border = "1px solid black";
//             newTD4Compound.style.borderRightStyle = "none";

//             let newTD5Compound = document.createElement("td");
//             newTD5Compound.style.fontStyle = "italic";
//             newTD5Compound.style.border = "1px solid black";
//             newTD5Compound.style.borderLeftStyle = "none";

//             let newTH1Compound = document.createElement("th");
//             newTH1Compound.style.border = "1px solid black";

//             let newTH2Compound = document.createElement("th");
//             newTH2Compound.style.border = "1px solid black";

//             let newTH3Compound = document.createElement("th");
//             newTH3Compound.style.border = "1px solid black";

//             let nomSgCompound = compoundFromArray + sgSuffix
//             let nomPlCompound = compoundFromArray + plSuffix

//             let nomSgEtymologyCompound = " " + " <" + " " + compoundFromArray + "-" + sgSuffix;
//             let nomPlEtymologyCompound = " " + " <" + " " + compoundFromArray + "-" + plSuffix;

//             let accSgCompound = accPrefix + compoundFromArray + sgSuffix
//             let accPlCompound = accPrefix + compoundFromArray + plSuffix

//             let accSgEtymologyCompound = " " + "<" + " " + accPrefix + "-" + compoundFromArray + "-" + sgSuffix;
//             let accPlEtymologyCompound = " " + "<" + " " + accPrefix + "-" + compoundFromArray + "-" + plSuffix;

//             let genSgCompound = genPrefix + compoundFromArray + sgSuffix
//             let genPlCompound = genPrefix + compoundFromArray + plSuffix

//             let genSgEtymologyCompound = " " + "<" + " " + genPrefix + "-" + compoundFromArray + "-" + sgSuffix;
//             let genPlEtymologyCompound = " " + "<" + " " + genPrefix + "-" + compoundFromArray + "-" + plSuffix;

//             if (y == 0) {
//                 newTH1Compound.innerHTML = " "
//                 newTH1Compound.setAttribute("colspan", 1)
//                 newRowCompound.appendChild(newTH1Compound)

//                 newTH2Compound.innerHTML = "Sg"
//                 newTH2Compound.setAttribute("colspan", 2)
//                 newRowCompound.appendChild(newTH2Compound)

//                 newTH3Compound.innerHTML = "Pl"
//                 newTH3Compound.setAttribute("colspan", 2)
//                 newRowCompound.appendChild(newTH3Compound)

//             } else if (y == 1) {
//                 newTD1Compound.innerHTML = "Nom"
//                 newRowCompound.appendChild(newTD1Compound);

//                 newTD2Compound.innerHTML = soundChange(nomSgCompound);
//                 newRowCompound.appendChild(newTD2Compound);

//                 newTD3Compound.innerHTML = nomSgEtymologyCompound
//                 newRowCompound.appendChild(newTD3Compound);

//                 newTD4Compound.innerHTML = soundChange(nomPlCompound);
//                 newRowCompound.appendChild(newTD4Compound);

//                 newTD5Compound.innerHTML = nomPlEtymologyCompound
//                 newRowCompound.appendChild(newTD5Compound);

//             } else if (y == 2) {
//                 newTD1Compound.innerHTML = "Acc"
//                 newRowCompound.appendChild(newTD1Compound);

//                 newTD2Compound.innerHTML = soundChange(accSgCompound);
//                 newRowCompound.appendChild(newTD2Compound);

//                 newTD3Compound.innerHTML = accSgEtymologyCompound;
//                 newRowCompound.appendChild(newTD3Compound);

//                 newTD4Compound.innerHTML = soundChange(accPlCompound);
//                 newRowCompound.appendChild(newTD4Compound);

//                 newTD5Compound.innerHTML = accPlEtymologyCompound
//                 newRowCompound.appendChild(newTD5Compound);

//             } else if (y == 3) {
//                 newTD1Compound.innerHTML = "Gen"
//                 newRowCompound.appendChild(newTD1Compound);

//                 newTD2Compound.innerHTML = soundChange(genSgCompound);
//                 newRowCompound.appendChild(newTD2Compound);

//                 newTD3Compound.innerHTML = genSgEtymologyCompound;
//                 newRowCompound.appendChild(newTD3Compound);

//                 newTD4Compound.innerHTML = soundChange(genPlCompound);
//                 newRowCompound.appendChild(newTD4Compound);

//                 newTD5Compound.innerHTML = genPlEtymologyCompound;
//                 newRowCompound.appendChild(newTD5Compound);

//             }

//         }

//     }


//     /*----------------------^^^COMPOUND TABLE-^^^-------------------------------------------------------------*/

// }


//4)
/*-------------------------CREATE SECTION----------------*
/*-------CREATE WORDS-------------------------------*/
//The functions below take the words input by the users, or words randomly generated by the 'generate' functions below, and then send them to the appriopiate elements in the HTML.

//Creates a word for "these" by adding the plural suffix to "this"
function createThese() {
    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;

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
    let wordAdverbialSuffix = document.getElementsByClassName("adverbial-suffix")[0].innerHTML;
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
    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;

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
    let wordAdverbialSuffix = document.getElementsByClassName("adverbial-suffix")[0].innerHTML;
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
    let accPrefix = document.getElementsByClassName("acc-prefix")[0].innerHTML;
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
    let genPrefix = document.getElementsByClassName("gen-prefix")[0].innerHTML;
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

//Generates the word for interrogative suffix
function createInterrogativeSuffix() {
    let wordAgain = createAgain()
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
    let num = nounArray.indexOf("place");
    let wordPlace = generatedNouns[num];
    let spanPlace = document.getElementsByClassName("place");
    for(let i = 0; i < spanPlace.length; i++) {
        if (wordPlace != "") {
            if (spanPlace[i].innerHTML != soundChange(wordPlace)) {
                spanPlace[i].innerHTML = soundChange(wordPlace);
            }
        }
    }
    return wordPlace;
}

//Generates the word for "man"
function createMan() {
    let num = nounArray.indexOf("man");
    let wordMan = generatedNouns[num];
    let spanMan = document.getElementsByClassName("man");
    for(let i = 0; i < spanMan.length; i++) {
        if (wordMan != "") {
            if (spanMan[i].innerHTML != soundChange(wordMan)) {
                spanMan[i].innerHTML = soundChange(wordMan);
            }
        }
    }
    return wordMan;
}

//Generates the word for "path"
function createPath() {
    let num = nounArray.indexOf("path");
    let wordPath = generatedNouns[num];
    let spanPath = document.getElementsByClassName("path");
    for(let i = 0; i < spanPath.length; i++) {
        if (wordPath != "") {
            if (spanPath[i].innerHTML != soundChange(wordPath)) {
                spanPath[i].innerHTML = soundChange(wordPath);
            }
        }
    }
    return wordPath;
}

//Generates the word for "origin"
function createOrigin() {
    let num = nounArray.indexOf("origin");
    let wordOrigin = generatedNouns[num];
    let spanOrigin = document.getElementsByClassName("origin");
    for(let i = 0; i < spanOrigin.length; i++) {
        if (wordOrigin != "") {
            if (spanOrigin[i].innerHTML != soundChange(wordOrigin)) {
                spanOrigin[i].innerHTML = soundChange(wordOrigin);
            }
        }
    }
    return wordOrigin;
}

//Generates the word for "time"
function createTime() {
    let num = nounArray.indexOf("time");
    let wordTime = generatedNouns[num];
    let spanTime = document.getElementsByClassName("time");
    for(let i = 0; i < spanTime.length; i++) {
        if (wordTime != "") {
            if (spanTime[i].innerHTML != soundChange(wordTime)) {
                spanTime[i].innerHTML = soundChange(wordTime);
            }
        }
    }
    return wordTime;
}

//Generates the word for "where"
function createWhere() {
    let place = createPlace();
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
    let man = createMan();
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

function createToday() {
    let day = nounArray[nounArray.indexOf("day")];
    let thisWord = createThis();
    let today = thisWord + day;
    let spanToday = document.getElementsByClassName("today");
    for(let i = 0; i < spanToday.length; i++) {
        if (today != " ") {
            if (spanToday[i].innerHTML != soundChange(today)) {
                spanToday[i].innerHTML = soundChange(today);
            }
        }
    }
    return soundChange(today);
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


function createCopulaSgNonPast() {
    let copula = document.getElementsByClassName("copula")[0].innerHTML;
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
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

    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;

    let copula = document.getElementsByClassName("copula")[0].innerHTML;
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
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

//selects a random adjective from the adjective array
function createRandomAdjective() {
    let spanAdjective = document.getElementsByClassName("adjective");
    let num = 1;
    for(let i = 0; i <= spanAdjective.length; i++) {
        let randomNumber = Math.floor(Math.random() * generatedAdjectives.length);
        let randomAdjective = generatedAdjectives[randomNumber] 
        document.getElementById("adjective" + num.toString()).innerHTML = soundChange(randomAdjective);
        document.getElementById("adjective-meaning" + num.toString()).innerHTML = adjectiveArray[randomNumber]
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
    let spanNoun = document.getElementsByClassName("noun");
    
    let num = 1;
    for(let i = 0; i < spanNoun.length; i++) {
        let randomNumber = Math.floor(Math.random() * generatedNouns.length);
        let randomNoun = generatedNouns[randomNumber] 
        document.getElementById("noun" + num.toString()).innerHTML = soundChange(randomNoun);
        document.getElementById("noun-meaning" + num.toString()).innerHTML = nounArray[randomNumber]
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
    let spanVerb = document.getElementsByClassName("verb");
    let allGeneratedVerbs = generatedTransitiveVerbs.concat(generatedIntransitiveVerbs);
    let num = 1;
    for(let i = 0; i < spanVerb.length; i++) {
        let randomNumber = Math.floor(Math.random() * allGeneratedVerbs.length);
        let randomVerb = allGeneratedVerbs[randomNumber] //random verb from the array
        
        document.getElementById("verb" + num.toString()).innerHTML = soundChange(randomVerb);
        document.getElementById("verb-meaning" + num.toString()).innerHTML = verbArray[randomNumber]
        document.getElementById("verb-past-meaning" + num.toString()).innerHTML = verbArray[randomNumber]
    
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
    // let inputVerb = document.getElementById("inputRootTransitiveVerb").value;
    // let splitVerb = inputVerb.split(" ");

    // //puts all of the input verbs meanings into one array
    // let inputVerbMeaning = document.getElementById("inputMeaningTransitiveVerb").value;
    // let splitVerbMeaning = inputVerbMeaning.split(" ");

    let spanVerb = document.getElementsByClassName("transitive-verb");

    let num = 1;
    for(let i = 0; i < spanVerb.length; i++) {
        let randomNumber = Math.floor(Math.random() * generatedTransitiveVerbs.length);
        let randomVerb = generatedTransitiveVerbs[randomNumber] //random verb from the array
        document.getElementById("transitive-verb" + num.toString()).innerHTML = soundChange(randomVerb);
        document.getElementById("transitive-verb-meaning" + num.toString()).innerHTML = transitiveVerbArray[randomNumber]
        if(document.getElementById("transitive-verb-past-meaning" + num.toString()) === null) {
            let hiddenSpan = document.createElement("span");
            hiddenSpan.classList.add("hidden");
            hiddenSpan.setAttribute("id", "transitive-verb-past-meaning" + num.toString())
            hiddenSpan.innerHTML = transitiveVerbArray[randomNumber];
            document.getElementById("hidden-section").appendChild(hiddenSpan);
        } else {
             document.getElementById("transitive-verb-past-meaning" + num.toString()).innerHTML = transitiveVerbPastArray[randomNumber];
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
    // let inputVerb = document.getElementById("inputRootIntransitiveVerb").value;
    // let splitVerb = inputVerb.split(" ");

    // //puts all of the input verbs meanings into one array
    // let inputVerbMeaning = document.getElementById("inputMeaningIntransitiveVerb").value;
    // let splitVerbMeaning = inputVerbMeaning.split(" ");

    let spanVerb = document.getElementsByClassName("intransitive-verb");

    let num = 1;
    for(let i = 0; i < spanVerb.length; i++) {
        let randomNumber = Math.floor(Math.random() * generatedIntransitiveVerbs.length);
        let randomVerb = generatedIntransitiveVerbs[randomNumber] //random verb from the array
        document.getElementById("intransitive-verb" + num.toString()).innerHTML = soundChange(randomVerb);
        document.getElementById("intransitive-verb-meaning" + num.toString()).innerHTML = intransitiveVerbArray[randomNumber]
        if(document.getElementById("intransitive-verb-past-meaning" + num.toString()) === null) {
            let hiddenSpan = document.createElement("span");
            hiddenSpan.classList.add("hidden");
            hiddenSpan.setAttribute("id", "intransitive-verb-past-meaning" + num.toString())
            hiddenSpan.innerHTML = intransitiveVerbArray[randomNumber];
            document.getElementById("hidden-section").appendChild(hiddenSpan);
        } else {
             document.getElementById("intransitive-verb-past-meaning" + num.toString()).innerHTML = intransitiveVerbPastArray[randomNumber];
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
    let sgSuffix = document.getElementsByClassName("sg-suffix")[0].innerHTML;
    let spanNoun = document.getElementsByClassName("noun-nom-sg");
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
    let sgSuffix = document.getElementsByClassName("sg-suffix")[0].innerHTML;
    let accPrefix = document.getElementsByClassName("acc-prefix")[0].innerHTML;

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
    let sgSuffix = document.getElementsByClassName("sg-suffix")[0].innerHTML;
    let genPrefix = document.getElementsByClassName("gen-prefix")[0].innerHTML;
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
    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;
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
    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;
    let accPrefix = document.getElementsByClassName("acc-prefix")[0].innerHTML;

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
    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;
    let genPrefix = document.getElementsByClassName("gen-prefix")[0].innerHTML;
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
    let sgSuffix = document.getElementsByClassName("sg-suffix")[0].innerHTML;

    let noun = document.getElementById("noun5");
    let nominaliser = document.getElementsByClassName("nominaliser-suffix")[0].innerHTML;
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
    let sgSuffix = document.getElementsByClassName("sg-suffix")[0].innerHTML;
    let nominaliser = document.getElementsByClassName("nominaliser-suffix")[0].innerHTML;
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
    let plSuffix = document.getElementsByClassName("pl-suffix")[0].innerHTML;
    let nominaliser = document.getElementsByClassName("nominaliser-suffix")[0].innerHTML;
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
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
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
    let pronoun = document.getElementsByClassName("firstPersonPronoun")[0].innerHTML;
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
    let pronoun = document.getElementsByClassName("secondPersonPronoun")[0].innerHTML;
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

function createPluralVerb() {
    let pluralVerbSuffix = document.getElementById("plural-verb-suffix").innerHTML;
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
    let pluralVerbSuffix = document.getElementById("plural-verb-suffix").innerHTML;
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
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
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
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
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let firstPersonPrefix = createFirstPersonVerbPrefix();
    let habitualSuffix = document.getElementById("habitual-suffix").innerHTML;
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
    let habitualSuffix = document.getElementById("habitual-suffix").innerHTML;
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
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
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
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let secondPersonPrefix = createSecondPersonVerbPrefix();
    let habitualSuffix = document.getElementById("habitual-suffix").innerHTML;
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
    let habitualSuffix = document.getElementById("habitual-suffix").innerHTML;
    let secondPersonPrefix = createSecondPersonVerbPrefix();
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
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
    let habitualSuffix = document.getElementById("habitual-suffix").innerHTML;
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
    let habitualSuffix = document.getElementById("habitual-suffix").innerHTML;
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
    let pluralVerbSuffix = document.getElementById("plural-verb-suffix").innerHTML;
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
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
    let pluralVerbSuffix = document.getElementById("plural-verb-suffix").innerHTML;
    let nonPastSuffix = document.getElementById("non-past").innerHTML;
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
    let pluralVerbSuffix = document.getElementById("plural-verb-suffix").innerHTML;
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
    let pluralVerbSuffix = document.getElementById("plural-verb-suffix").innerHTML;
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


    createThis();
    createThese();
    createThat();
    createThose();
    createAccDemonstrative();
    createGenDemonstrative();
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
    createFirstPersonPronoun();
    createSecondPersonPronoun();
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
    createThirdPersonSingularTransitiveVerb();
    createThirdPersonSingularIntransitiveVerb();
    createFirstPersonVerbHabitual();
    createSecondPersonVerbHabitual();
    createVerbHabitual();
    createToday();











    <!--
     

      <h2>Morphophonology</h2>

      <p>
        When different morphemes are concatenated together, such as attaching a
        prefix or suffix, or compounding two roots together, several sound
        changes occur. Such that the root <i>-gu-</i> "eye" with the singular
        suffix <i>-ko</i> and accusative prefix <i>he-</i> does not create
        <i>*heguko</i> but <i>hēhko</i>. The rules are as follows.
      </p>

      <h3>Syncope</h3>

      <p>
        In a word that is at least three syllables long, the vowel in the second
        syllable is lost and the vowel in the first syllable becomes long:
        <i>he-lu-ko</i> > <i>hēlko</i>, <i>weri-ko</i> > <i>wērko</i>.<br />
        However, if the vowel of the second syllable is surrounded by two of the
        same consonant, then it is the vowel of the third syllable that is lost
        and the vowel of the second syllable becomes long: <i>rako-ko</i> >
        <i>rakōk</i>.
      </p>

      <p>
        In a word that is two syllables long or more, but the first syllable is
        heavy (has a consonant following the vowel), then the first consonant of
        the second syllable is lost and the vowel of the first syllable becomes
        long. The first consonant of the second syllable is also lost:
        <i>gim-ko</i> > <i>gīmo</i>. For such nouns, the singular suffix
        <i>-ko</i> and plural suffix <i>-te</i> become <i>-o</i> and <i>-te</i>:
        <i>-gim-</i> > <i>gīmo, gīme</i><br />
        If the first syllable was super-heavy (has two consonants following the
        vowel) then the second consonant of the first syllable is lost:
        <i>pand-ko</i> > <i>pānko</i>.
      </p>

      <h3>Lenition</h3>

      <p>
        <span class="language-name">Kerbekulo</span> does not allow a plosive to
        cluster before a plosive of the same place of articulation. when such
        clusters occur, the first plosive lenites to a voiceless fricative. If
        the second plosive was voiced, it devoices after the fricative<br />
      </p>
      <ul>
        <li>
          <b>pb, bp</b> > <b>fp</b>: <i>he-lob-perg-ko</i> > <i>hēlbperko</i> >
          <i>hēlfperko</i>; <i>he-wirpbego-ko</i> > <i>hēurpbegoko</i> >
          <i>hēurfpegoko</i>
        </li>
        <li>
          <b>dt, td</b> > <b>st</b>: <i>mud-te</i> > <i>muste</i>;
          <i>he-ritdolm-ko</i> > <i>hērtdolmgo</i> > <i>hērstolmgo</i>
        </li>
        <li>
          <b>kg, gk</b> > <b>hk</b>: <i>bego-ko</i> > <i>bēgko</i> >
          <i>bēhko</i>
        </li>
      </ul>

      <h3>Metathesis</h3>

      <p>
        The cluster <i>bm</i> becomes <i>mb</i>: <i>durib-melon-ko</i> >
        <i>dūrmbelonko</i>
      </p>

      <h3>Voicing of mC clusters</h3>

      <p>Voiceless plosives become voiced when after <i>m</i>.</p>

      <ul>
        <li>
          <b>mp</b> > <b>mb</b>: <i>kerem-parki-ko</i> > <i>kērmbarkiko</i>
        </li>
        <li><b>mt</b> > <b>md</b>: <i>barum-te</i> > <i>bārmde</i></li>
        <li>
          <b>mk</b> > <b>mg</b>: <i>pergo-losem-ko</i> > <i>pērolosemgo</i>
        </li>
      </ul>

      <h3>Syllabification</h3>

      <p>
        If <i>w</i> or <i>j</i> are made to occur before a consonant, as a
        result of syncope, then they syllabify into <i>u</i> and
        <i>i</i> respectively: <i>dawo-ko</i> > <i>dāwko</i> > <i>dāuko</i>;
        <i>suje-te</i> > <i>sūjte</i> > <i>sūite</i>.
      </p>

      <p>
        The sonorants <i>r</i> and <i>l</i> syllabify into a schwa <i>ə</i> but
        only when they are both before and after a consonant. The schwa is
        unaffected by syncope, as this syllabification occurs after syncope
        takes place: <i>he-mul-ko</i> > <i>hēmlko</i> > <i>hēməko</i>;
        <i>tebor-te</i> > <i>tēbrte</i> > <i>tēbəte</i>.
      </p>

      <h3>Loss of /h/ After Consonants</h3>

      <p>
        The consonant /h/, which occurs in
        <span class="language-name">Kerbekulo</span> exclusively as a result of
        <i>kg, gk</i> > <i>hk</i>, is lost when it occurs after another
        consonant: <i>sebeg-ko</i> > <i>sēbgko</i> > <i>sēbhko</i> >
        <i>sēbko</i>.
      </p>

      <h3>Shortening of Geminates</h3>

      <p>
        Two of the same consonants may cluster together as a result of
        compounding. <span class="language-name">Kerbekulo</span> avoids these
        clusters by shortening the geminate consonants into one single short
        consonant: <i>balis-sol-ko</i> > <i>bālssolko</i> > <i>bālsolko</i>
      </p>
    </section>

    <section class="inputSection">
      <h2><span class="language-name">Kerbekulo</span> Morpheme Generator</h2>

      <p>
        Use this tool to generate your own
        <span class="language-name">Kerbekulo</span> roots and see how they inflect! You can insert any roots that you want, even
        ones that you made up! So long as they follow
        <span class="language-name">Kerbekulo</span>'s root structure! It is
        possible to ignore <span class="language-name">Kerbekulo</span>'s root
        structure and add letters that don't occur in
        <span class="language-name">Kerbekulo</span>, but the results won't be
        accurate, but you can play with this also if you wish. Enter as many
        words as you want, be sure to divide each word with a blank space, don't
        use commas.
      </p>
      <p>
        Alternatively, you can have new noun roots and their meanings randomly generated.
      </p>
      
    
    </section>

    

    -->

    
    <h2 id="sectionH1">Nouns</h2>

    <h3>Morphology</h3>
    <section class="intro">
      <p>
        <span class="language-name">Kerbekulo</span> nouns have two grammatical
        numbers, singular and plural, and three noun cases, nominative,
        accusative and genitive.
        <a href="https://en.wikipedia.org/wiki/Grammatical_case" target="_blank"
          >What are noun cases?</a
        >.<br />
        Grammatical number is marked with two suffixes: <span class="sg-suffix"></span> marks the
        singular and <span class="pl-suffix"></span> marks the plural.<br /><br />
      </p>
      <ul>
        <li><i>gu-<span class="sg-suffix"></span></i> "eye"</li>
        <li><i>gu-<span class="pl-suffix"></span></i> "eyes"</li>
      </ul>

      <p>
        Noun case is marked with two prefixes: <span class="acc-prefix"></span> for the accusative and
        <span class="genitive"></span> for the genitive. The nominative case is unmarked.<br />

        Noun case and number combine in an agglutinative fashion, so a singular
        accusative noun has the prefix <span class="acc-prefix"></span> and the suffix <span class="genitive"></span>.
      </p>

      <ul>
        <li><i><span class="acc-prefix"></span>-gu-<span class="sg-suffix"></span></i></i> "eye" (accusative)</li>
        <li><i><span class="acc-prefix"></span>-gu-<span class="pl-suffix"></span></i> "eyes" (accusative)</li>
        <li><i><span class="gen-prefix"></span>-gu-<span class="sg-suffix"></span></i></i> "eye's" (genitive)</li>
        <li><i><span class="gen-prefix"></span>-gu-<span class="pl-suffix"></span></i> "eyes'" (genitive)</li>
      </ul>
    </section>

    <section id="outputSectionNoun"></section>

    <h2>Adjectives</h2>
    <section class="intro">

      <!--The following two spans do not display. they are here merely to hold the bare forms of the given noun and adjective, before they forms are inflected. I needed the bare forms for the bahuvrihi below-->
      <span class="noun hidden" id="noun5">BLANK</span>
      <span class="adjective hidden" id="adjective5">BLANK</span>

      <p>
        Adjectives in <span class="language-name">Kerbekulo</span> are only true
        adjectives when they occur predicatively, which in English is when they
        occur after the noun and the verb to be e.g "the dog is large" or "the
        horse is white". When an adjective is predicative it is not changed in
        any way. Since this language is SOV, to say "Noun is ADJ" you say "NOUN
        ADj is". The verb "to be" is <span class="copula"></span>
      </p>
       <ul>
        <li>
         <span class="noun noun-nom-sg" id="noun6">BLANK</span> 
         <span class="adjective"  id="adjective6"></span>
         <span class="copula-sg-non-past">BLANK</span>
         "the
          <span id="noun-meaning6">BLANK</span>
          is
          <span id="adjective-meaning6">BLANK</span>"
        </li>
        <li>
         <span class="noun noun-nom-sg" id="noun7">BLANK</span> 
         <span class="adjective"  id="adjective7"></span>
         <span class="copula-sg-non-past">BLANK</span>
         "the
          <span id="noun-meaning7">BLANK</span>
          is
          <span id="adjective-meaning7">BLANK</span>"
        </li>

        <li>
         <span class="noun noun-nom-pl" id="noun8">BLANK</span> 
         <span class="adjective"  id="adjective8"></span>
         <span class="copula-pl-non-past">BLANK</span>
         "the
          <span class="plural-meaning" id="noun-meaning8">BLANK</span>
          are
          <span id="adjective-meaning8">BLANK</span>"
        </li>

        <li>
         <span class="noun noun-nom-pl" id="noun9">BLANK</span> 
         <span class="adjective"  id="adjective9"></span>
         <span class="copula-pl-non-past">BLANK</span>
         "the
          <span class="plural-meaning" id="noun-meaning9">BLANK</span>
          are
          <span id="adjective-meaning9">BLANK</span>"
        </li>
      </ul>

      <p>
        In English, attributive language are simply placed before the noun e.g
        "large dog", "white horse".
        <span class="language-name">Kerbekulo</span> deals with this in a rather
        different way. The adjective instead has a noun derived from it using
        the nominaliser suffix <span class="nominaliser-suffix">BLANK</span> and is then placed after
        the noun. Then the relative pronoun <span class="relative-pronoun">BLANK</span> is inserted after
        the noun, and the adjective-turned-noun then takes on the nominative
        singular or plural suffix, depending on whether the noun is singular or
        plural, but it never takes any case prefixes. So in
        <span class="language-name">Kerbekulo</span> you don't say "white horse"
        but rather something more like "horse that is a white thing".
      </p>

      <ul>
        <li>
          <span class="copy-adjective adjective-copy1">BLANK</span> "<span class="adjective-meaning-copy1">BLANK</span>"; <span class="noun noun-nom-sg" id="noun1">BLANK</span> <span class="relative-pronoun">BLANK</span> <span class="adjective-nom-sg" id="adjective1">BLANK</span> > "<span id="adjective-meaning1">BLANK</span> <span id="noun-meaning1">BLANK</span>" - literally "<span class="copy-noun-meaning noun-meaning-copy1">BLANK</span> that is a <span class=" copy-adjective-meaning adjective-meaning-copy1">BLANK</span> one"
        </li> 

        <li>
          <span class="copy-adjective adjective-copy2">BLANK</span> "<span class="adjective-meaning-copy2">BLANK</span>"; <span class="noun noun-nom-sg" id="noun2">BLANK</span> <span class="relative-pronoun">BLANK</span> <span class="adjective adjective-nom-sg" id="adjective2">BLANK</span> > "<span id="adjective-meaning2">BLANK</span> <span id="noun-meaning2">BLANK</span>" - literally "<span class="copy-noun-meaning noun-meaning-copy2">BLANK</span> that is a <span class=" copy-adjective-meaning adjective-meaning-copy2">BLANK</span> one"
        </li> 

        <li>
          <span class="copy-adjective adjective-copy3">BLANK</span> "<span class="adjective-meaning-copy3">BLANK</span>"; <span class="noun noun-nom-pl" id="noun3">BLANK</span> <span class="relative-pronoun">BLANK</span> <span class="adjective adjective-nom-pl" id="adjective3">BLANK</span> > "<span id="adjective-meaning3">BLANK</span> <span class="plural-meaning" id="noun-meaning3">BLANK</span>" 
          - literally "<span class="copy-noun-meaning noun-meaning-copy3 plural-meaning">BLANK</span> that are <span class=" copy-adjective-meaning adjective-meaning-copy3">BLANK</span> ones"
        </li> 

        <li>
          <span class="copy-adjective adjective-copy4">BLANK</span> "<span class="adjective-meaning-copy4">BLANK</span>"; <span class="noun noun-nom-pl" id="noun4">BLANK</span> <span class="relative-pronoun">BLANK</span> <span class="adjective adjective-nom-pl" id="adjective4">BLANK</span> > "<span id="adjective-meaning4">BLANK</span> <span class="plural-meaning" id="noun-meaning4">BLANK</span>" - literally "<span class="copy-noun-meaning noun-meaning-copy4 plural-meaning">BLANK</span> that are <span class="copy-adjective-meaning adjective-meaning-copy4">BLANK</span> ones"
        </li> 
      </ul>

      <p>
        The relative pronoun <span class="relative-pronoun">BLANK</span> is a
        compound of <span class="this-pronoun">BLANK</span> "this" and <span class="also">BLANK</span> "also.
      </p>

      <p>
        A <a href="https://en.wikipedia.org/wiki/Bahuvrihi#:~:text=Bahuvrihi%20compounds%20are%20called%20possessive,is%20on%20the%20first%20constituent." target="_blank">bahuvrihi</a> compound may be formed by compounding the bare noun root and the adjective, with the nominaliser suffix, followed by either the singular or plural suffix: 
        <span class="noun-nom-sg" id="noun5AlsoNomSg">BLANK</span>
        <span class="relative-pronoun">BLANK</span>
        <span class="copy-adjective adjective-copy5 adjective-nom-sg">BLANK</span>
        "<span id="adjective-meaning5">BLANK</span>
        <span id="noun-meaning5">BLANK</span>" > 

        <span id="bahuvrihi"></span> 
        
        "that which has a <span class="copy-adjective-meaning adjective-meaning-copy5"></span>
        <span class="copy-noun-meaning noun-meaning-copy5">BLANK</span>"

        (< <span id="noun5Also">BLANK</span>-<span id="adjective5Also">BLANK</span>-<span class="nominaliser-suffix">BLANK</span>-<span class="sg-suffix"></span>
        )
      </p>
    </section>

    <h2>Pronouns</h2>
    <section class="intro">
    <h3>Personal Pronouns</h3>

    <p>
      <span class="language-name">Kerbekulo</span> has only two pronominal roots: -<span class="firstPersonPronoun">BLANK</span>- "I" for the first person, and -<span class="secondPersonPronoun">BLANK</span>- "you" for the second person. There is no pronoun devoted solely to the third person, rather the demonstrative pronoun -<span class="this-pronoun"></span>- "this" is used for the third person singular ("he, she, it").
    </p>

    <p>
      Personal pronouns inflect just like any other noun, taking on the same suffixes and prefixes. 
    </p>

    <table style="text-align:center;">
      <tr>
        <th></th>
        <th colspan="3">Sg</th>
        <th colspan="3">Pl</th>
      </tr>
      <tr>
        <td>Person:</td>
        <td>1 <br>("I")</td>
        <td>2 <br>("you")</td>
        <td>3 <br>("he, she, it, this")</td>
        <td>1 <br>("we")</td>
        <td>2 <br>("you")</td>
        <td>3 <br>("they, these")</td>
      </tr>
      <tr>
        <td>Nominative</td>
        <td><span class="noun-nom-sg firstPersonPronoun"></span></td>
        <td><span class="noun-nom-sg secondPersonPronoun"></span></td>
        <td><span class="noun-nom-sg this-pronoun"></span></td>
        <td><span class="noun-nom-pl firstPersonPronoun"></span></td>
        <td><span class="noun-nom-pl secondPersonPronoun"></span></td>
        <td><span class="noun-nom-pl these-pronoun"></span></td>
      </tr>
      <tr>
        <td>Accusative</td>
        <td><span class="noun-acc-sg firstPersonPronoun"></span></td>
        <td><span class="noun-acc-sg secondPersonPronoun"></span></td>
        <td><span class="noun-acc-sg this-pronoun"></span></td>
        <td><span class="noun-acc-pl firstPersonPronoun"></span></td>
        <td><span class="noun-acc-pl secondPersonPronoun"></span></td>
        <td><span class="noun-acc-pl these-pronoun"></span></td>
      </tr>
      <tr>
        <td>Genitive</td>
        <td><span class="noun-gen-sg firstPersonPronoun"></span></td>
        <td><span class="noun-gen-sg secondPersonPronoun"></span></td>
        <td><span class="noun-gen-sg this-pronoun"></span></td>
        <td><span class="noun-gen-pl firstPersonPronoun"></span></td>
        <td><span class="noun-gen-pl secondPersonPronoun"></span></td>
        <td><span class="noun-gen-pl these-pronoun"></span></td>
      </tr>
    </table>

    <p>
      The genitive forms also function as possessive pronouns:
    </p>
    <ul>
      <li>
        <span class="noun-gen-sg firstPersonPronoun"></span> 
        <span class="noun noun-nom-sg" id="noun10">BLANK</span> 
        "my <span id="noun-meaning10">BLANK</span>"
      </li>

      <li>
        <span class="noun-gen-sg secondPersonPronoun"></span> 
        <span class="noun noun-nom-sg" id="noun11">BLANK</span> 
        "you <span id="noun-meaning11">BLANK</span>"
      </li>

      <li>
        <span class="noun-gen-sg this-pronoun"></span> 
        <span class="noun noun-nom-sg" id="noun12">BLANK</span> 
        "his/her/its <span id="noun-meaning12">BLANK</span>"
      </li>

      <li>
        <span class="noun-gen-pl firstPersonPronoun"></span> 
        <span class="noun noun-nom-sg" id="noun13">BLANK</span> 
        "our <span id="noun-meaning13">BLANK</span>"
      </li>

      <li>
        <span class="noun-gen-pl secondPersonPronoun"></span> 
        <span class="noun noun-nom-sg" id="noun14">BLANK</span> 
        "your <span id="noun-meaning14">BLANK</span>"
      </li>

      <li>
        <span class="noun-gen-pl this-pronoun"></span> 
        <span class="noun noun-nom-sg" id="noun15">BLANK</span> 
        "their <span id="noun-meaning15">BLANK</span>"
      </li>
    </ul>

    <h3>Demonstrative Pronouns</h3>

    <p>
      Demonstrative pronouns have a number distinction ("this" vs "these") and a proximal distinction ("this" vs "that"). The proximal distinction is older. The pronouns <span class="this-pronoun"></span> and <span class="that-pronoun"></span> "that" both descend from adverbial forms of "here" and "there" respectively. The number distinction came simply by applying the normal plural suffixes to create <span class="these-pronoun"></span> "these" and <span class="those-pronoun"></span> "those".
    </p>

    <ul>
      <li>
        <span class="here"></span> "here" + <span class="adverbial-suffix"></span> "adverbial suffix" > <span class="this-pronoun"></span> "this" + <span class="pl-suffix"></span> "plural suffix" > <span class="these-pronoun"></span> "these"
      </li>
      <li>
        <span class="there"></span> "there" + <span class="adverbial-suffix"></span> "adverbial suffix" > <span class="that-pronoun"></span> "that" + <span class="pl-suffix"></span> "plural suffix" > <span class="those-pronoun"></span> "those"
      </li>
    </ul>

    <p>
      Demonstratives also take on case prefixes, to agree with the noun that they govern. They are unlike nouns, in that they take no overt singular suffix when in the nominative case.
    </p>

    <table>
      <tr>
        <th></th>
        <th colspan="2">Singular</th>
        <th colspan="2">Plural</th>
      </tr>
      <tr>
        <td>Proximity</td>
        <td>near</td>
        <td>far</td>
        <td>near</td>
        <td>far</td>
      </tr>
      <tr>
        <td>Nominative</td>
        <td><span class="this-pronoun"></span></td>
        <td><span class="that-pronoun"></span></td>
        <td><span class="these-pronoun"></span></td>
        <td><span class="those-pronoun"></span></td>
      </tr>
      <tr>
        <td>Accusative</td>
        <td><span class="noun-acc-sg this-pronoun"></span></td>
        <td><span class="noun-acc-sg that-pronoun"></span></td>
        <td><span class="noun-acc-pl these-pronoun"></span></td>
        <td><span class="noun-acc-pl those-pronoun"></span></td>
      </tr>
      <tr>
        <td>Genitive</td>
        <td><span class="noun-gen-sg this-pronoun"></span></td>
        <td><span class="noun-gen-sg that-pronoun"></span></td>
        <td><span class="noun-gen-pl these-pronoun"></span></td>
        <td><span class="noun-gen-pl those-pronoun"></span></td>
      </tr>
    </table>

    <h3>Interrogative Pronouns</h3>

    <p>Interrogative pronouns are created by placing the interrogative affix  <span class="interrogative"></span> onto a certain set of nouns as a prefix. The prefix is derived from <span class="again"></span> "again".</p>

    <table>
      <tr>
        <td>Locative:</td>
        <td><span class="interrogative"></span></td>
        <td>+</td>
        <td><span class="place"></span></td>
        <td>"place"</td>
        <td>></td>
        <td><span class="where"></span></td>
        <td>"where?"</td>
      </tr>
      <tr>
        <td>Animate:</td>
        <td><span class="interrogative"></span></td>
        <td>+</td>
        <td><span class="man"></span></td>
        <td>"man"</td> 
        <td>></td>
        <td><span class="who"></span></td>
        <td>"who?"</td>
      </tr>
      <tr>
        <td>Inanimate:</td>
        <td><span class="interrogative"></span></td>
        <td>+</td>
        <td><span class="this-pronoun"></span></td>
        <td>"this"</td>
        <td>></td>
        <td><span class="what"></span></td>
        <td>"what?"</td>
      </tr>
      <tr>
        <td>Temporal:</td>
        <td><span class="interrogative"></span></td>
        <td>+</td>
        <td><span class="time"></span></td>
        <td>"time"</td>
        <td>></td>
        <td><span class="when"></span></td>
        <td>"when?"</td>
      </tr>
      <tr>
        <td>Method:</td>
        <td><span class="interrogative"></span></td>
        <td>+</td>
        <td><span class="path"></span></td>
        <td>"path"</td>
        <td>></td>
        <td><span class="how"></span></td>
        <td>"how?"</td>
      </tr>
      <tr>
        <td>Reason:</td>
        <td><span class="interrogative"></span></td>
        <td>+</td>
        <td><span class="origin"></span></td>
        <td>"origin"</td>
        <td>></td>
        <td><span class="why"></span></td>
        <td>"why?"</td>
      </tr>
    </table>

    </section>

    <section class="intro">
      <h2>Verbs</h2>

      <h3>Tense</h3>
        <p>  
        <span class="language-name">Kerbekulo</span> verbs have two tenses: past and non-past. Verbs by default are in the past tense and must take on the suffix -<span id="non-past"></span> to become non-past. The non-past tense is used for any present or future action.
        <p>

      <ul>
        <li>
          <span class="verb" id="verb1">BLANK</span>-
          "<span class="past" id="verb-past-meaning1">BLANK</span>"
          >
          <span class="copy-verb verb-non-past verb-copy1">BLANK</span>-
          "<span id="verb-meaning1">BLANK</span>"
        </li>
       <li>
          <span class="verb" id="verb2">BLANK</span>-
          "<span class="past" id="verb-past-meaning2">BLANK</span>"
          >
          <span class="copy-verb verb-non-past verb-copy2">BLANK</span>-
          "<span id="verb-meaning2">BLANK</span>"
        </li>
        <li>
          <span class="verb" id="verb3">BLANK</span>-
          "<span class="past" id="verb-past-meaning3">BLANK</span>"
          >
          <span class="copy-verb verb-non-past verb-copy3">BLANK</span>-
          "<span id="verb-meaning3">BLANK</span>"
        </li>
      </ul>

      <h3>Person Marking</h3>

      <p>
        Verbs agree with their subjects by taking on a set of person-marking prefixes. The prefixes derive from the personal pronouns; the first person is marked with the prefix <span class="first-person-prefix">BLANK</span>- from <span class="noun-nom-sg firstPersonPronoun">BLANK</span> "I" and the second person is marked with the prefix <span class="second-person-prefix">BLANK</span>- from <span class="noun-nom-sg secondPersonPronoun">BLANK</span> "you". There is no third person prefix, a verb with no over person-marking prefix is by default in the third person.
      </p>

     <ul>
        <li>
          -<span class="verb" id="verb4"></span>-
          "<span id="verb-meaning4"></span>"
            
          <ul>
              <li>
                <span class="first-person-verb-non-past copy-verb verb-copy4"></span>
                "I <span class="copy-verb-meaning verb-meaning-copy4">BLANK</span>"
              </li>
              <li>
               <span class="copy-verb first-person verb-copy4"></span>
                "I <span class="past" id="verb-past-meaning4"></span>"
              </li>

              <li>
                <span class="second-person-verb-non-past copy-verb verb-copy4"></span>
                "You <span class="copy-verb-meaning verb-meaning-copy4">BLANK</span>"
              </li>

              <li>
               <span class="copy-verb second-person verb-copy4"></span>
                "You <span class="past copy-verb-meaning verb-meaning-copy4">BLANK</span>"
              </li>

               <li>
                <span class="copy-verb verb-non-past verb-copy4"></span>
                "He/she/it <span class="copy-verb-meaning verb-meaning-copy4">BLANK</span>"
              </li>

              <li>
               <span class="copy-verb verb-copy4"></span>
                "He/she/it <span class="past copy-verb-meaning verb-meaning-copy4">BLANK</span>"
              </li>

            </ul>
        </li>

        <li>
          -<span class="verb" id="verb5"></span>-
          "<span id="verb-meaning5"></span>"
            
          <ul>
              <li>
                <span class="copy-verb first-person verb-non-past verb-copy5"></span>
                "I <span class="copy-verb-meaning verb-meaning-copy5">BLANK</span>"
              </li>
              <li>
               <span class="copy-verb first-person verb-copy5"></span>
                "I <span class="past" id="verb-past-meaning5"></span>"
              </li>

              <li>
                <span class="copy-verb second-person verb-non-past verb-copy5"></span>
                "You <span class="copy-verb-meaning verb-meaning-copy5">BLANK</span>"
              </li>

              <li>
               <span class="copy-verb second-person verb-copy5"></span>
                "You <span class="past copy-verb-meaning verb-meaning-copy5">BLANK</span>"
              </li>

               <li>
                <span class="copy-verb verb-non-past verb-copy5"></span>
                "He/she/it <span class="copy-verb-meaning verb-meaning-copy5">BLANK</span>"
              </li>

              <li>
               <span class="copy-verb verb-copy5"></span>
                "He/she/it <span class="past copy-verb-meaning  verb-meaning-copy5">BLANK</span>"
              </li>

            </ul>
        </li>
      </ul>

      <h4>Plural Verbs</h4>

      <p>
        It may be noticed above, that no prefixes serving to mark the plural persons exist. The plural pronouns in <span class="language-name">Kerbekulo</span> are simply the singular forms but with the standard plural suffix, which hints at their fairly young age. The usage of pronouns as verbal prefixes likely predates the formation of <span class="language-name">Kerbekulo</span>'s plural pronouns altogether, hence their absence. Instead, of having explicit plural forms for each person, <span class="language-name">Kerbekulo</span> has plural verbs. The same prefixes for the singular persons applied to a plural verb serve to mark plural persons. A plural verb without any person-marking prefixes is assumed to mark the third person plural. A verb is made plural with the suffix -<span id="plural-verb-suffix">BLANK</span>. The plural verb suffix applies before the non-past suffix.
      </p>

      <ul>
        <li>
          -<span class="verb" id="verb6"></span>-
          "<span id="verb-meaning6"></span> (pl)"
            
          <ul>
              <li>
                <span class="first-person-plural-verb-non-past copy-verb verb-copy6"></span>
                "We <span class="copy-verb-meaning verb-meaning-copy6">BLANK</span>"
              </li>
              <li>
               <span class="first-person-plural-verb copy-verb verb-copy6"></span>
                "We <span class="past" id="verb-past-meaning6"></span>"
              </li>

              <li>
                <span class="second-person-plural-verb-non-past copy-verb verb-copy6"></span>
                "You <span class="copy-verb-meaning verb-meaning-copy6">BLANK</span>"
              </li>

              <li>
               <span class="second-person-plural-verb copy-verb verb-copy6"></span>
                "You <span class="past copy-verb-meaning verb-meaning-copy6">BLANK</span>"
              </li>

               <li>
                <span class="plural-verb-non-past copy-verb verb-copy6"></span>
                "They <span class="copy-verb-meaning verb-meaning-copy6">BLANK</span>"
              </li>

              <li>
               <span class="plural-verb copy-verb verb-copy6"></span>
                "They <span class="past copy-verb-meaning verb-meaning-copy6">BLANK</span>"
              </li>

            </ul>
        </li>

        <li>
          -<span class="verb" id="verb7"></span>-
          "<span id="verb-meaning7"></span> (pl)"
            
          <ul>
              <li>
                <span class="first-person-plural-verb-non-past copy-verb verb-copy7"></span>
                "We <span class="copy-verb-meaning verb-meaning-copy7">BLANK</span>"
              </li>
              <li>
               <span class="first-person-plural-verb copy-verb verb-copy7"></span>
                "We <span class="past" id="verb-past-meaning7"></span>"
              </li>

              <li>
                <span class="second-person-plural-verb-non-past copy-verb verb-copy7"></span>
                "You <span class="copy-verb-meaning verb-meaning-copy7">BLANK</span>"
              </li>

              <li>
               <span class="second-person-plural-verb copy-verb verb-copy7"></span>
                "You <span class="past copy-verb-meaning verb-meaning-copy7">BLANK</span>"
              </li>

               <li>
                <span class="plural-verb-non-past copy-verb verb-copy7"></span>
                "They <span class="copy-verb-meaning verb-meaning-copy7">BLANK</span>"
              </li>

              <li>
               <span class="plural-verb copy-verb verb-copy7"></span>
                "They <span class="past copy-verb-meaning verb-meaning-copy7">BLANK</span>"
              </li>

            </ul>
        </li>
      </ul>

      <h4>Aspect</h4>

      <p>
        <span class="language-name">Kerbekulo</span> verbs have two aspects, completive and habitual. Completive refers to a singular completed action while the habitual marks any action that has no definite end, or was repeated over a duration of time. Verbs are completive by default and are made habitual with the suffix -<span id="habitual-suffix"></span>.
      </p>

      <ul>
        <li>
          <span class="transitive-verb" id="transitive-verb1"></span>- 
          "<span id="transitive-verb-meaning1"></span>"
          >
      
          <span class="noun noun-acc-pl" id="noun16"></span>
          <span class="copy-transitive-verb first-person-verb-non-past-habitual transitive-verb-copy1"></span> 

          "I often
          <span class="copy-transitive-verb-meaning transitive-verb-meaning-copy1"></span>
          <span class="plural-meaning" id="noun-meaning16"></span>
          "
        </li>

        <li>
          <span class="transitive-verb" id="transitive-verb2"></span>- 
          "<span id="transitive-verb-meaning2"></span>"
          >

          <span class="noun noun-acc-pl" id="noun17"></span>
          <span class="copy-transitive-verb second-person-verb-non-past-habitual transitive-verb-copy2"></span> 

          "You tend to
          <span class="copy-transitive-verb-meaning transitive-verb-meaning-copy2"></span>
          <span class="plural-meaning" id="noun-meaning17"></span>
          "
        </li>

        <li>
          <span class="transitive-verb" id="transitive-verb3"></span>- 
          "<span id="transitive-verb-meaning3"></span>"
          >
     
          <span class="noun noun-acc-pl" id="noun18"></span>
          <span class="copy-transitive-verb verb-non-past-habitual transitive-verb-copy3"></span> 

          "he usually
          <span class="copy-transitive-verb-meaning transitive-verb-meaning-copy3 third-person-singular-transitive"></span>
          <span class="plural-meaning" id="noun-meaning18"></span>
          "
        </li>

      </ul>

      <p>
        When the habitual is used in the past tense, it means "used to":
      </p>

       <ul>
        <li>
          <span class="transitive-verb" id="transitive-verb4"></span>- 
          "<span id="transitive-verb-meaning4"></span>"
          >
        
          <span class="noun noun-acc-pl" id="noun19"></span>
          <span class="copy-transitive-verb first-person-verb-habitual transitive-verb-copy4"></span> 

          "I used to
          <span class="copy-transitive-verb-meaning transitive-verb-meaning-copy4"></span>
          <span class="plural-meaning" id="noun-meaning19"></span>
          "
        </li>

        <li>
          <span class="intransitive-verb" id="intransitive-verb1"></span>- 
          "<span id="intransitive-verb-meaning1"></span>"
          >

          <span class="copy-intransitive-verb second-person-verb-habitual intransitive-verb-copy1"></span> 

          "You used to
          <span class="copy-intransitive-verb-meaning intransitive-verb-meaning-copy1"></span>
          "
        </li>

        <li>
          <span class="intransitive-verb" id="intransitive-verb2"></span>- 
          "<span id="intransitive-verb-meaning2"></span>"
          >
  
          <span class="copy-intransitive-verb verb-habitual intransitive-verb-copy2"></span> 

          "he used to
          <span class="copy-intransitive-verb-meaning intransitive-verb-meaning-copy2"></span>
          "
        </li>

      </ul>

      <p>
        When combined with an adverb referencing a future event, the habitual in the non-past tense is understood be future in meaning. It can also refer to the future without such an adverb if the context is regarding a future event. In this case the meaning is not truly habitual, but moreso non-completive, as future actions are not yet completed actions.
      </p>



      <h4>Interrogative Mood</h4>

    </section>

    <section id="hidden-section">

    </section>

    <section id="dictionary">
      <h2>Dictionary</h2>

    </section>
