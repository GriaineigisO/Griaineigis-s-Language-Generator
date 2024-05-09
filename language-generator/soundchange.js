let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", createArrays);
    
/*------------SOUND CHANGES------------------------------------------------------*/

function soundChange(word) {
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
    
    let lenitionString1 = syncopedString.replace("gk", "hk"); 
    let lenitionString2 = lenitionString1.replace("dt", "st");
    let lenitionString3 = lenitionString2.replace("bm", "mb");
    let lenitionString4 = lenitionString3.replace("mt", "md");

    return lenitionString4;
}

/*-----------^^^-SOUND CHANGES-^^^-----------------------------------------------------*/




//Takes the words from both text fields and splits them into arrays, then it creates an object using both arrays.
function createArrays() {
    document.getElementById("outputSection").replaceChildren();
    
    let inputRoot = document.getElementById("inputRoot").value;
    let splitInputRoot = inputRoot.split(" ");

    let inputMeaning = document.getElementById("inputMeaning").value;
    let splitInputMeaning = inputMeaning.split(" ");

 /*-----------------------HEADWORD--------------------------------------------------------------*
    
/* Generates the headword above each inflection table, showing the root and it's meaning as a title */
    for(i = 0; i < splitInputRoot.length; i++) {
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

        let outputSection = document.getElementById("outputSection");
        outputSection.appendChild(newHeadWordDiv);
   

 /*----------------------^^^-HEADWORD-^^^-------------------------------------------------------------*/
    
  /*-----------------------TABLE--------------------------------------------------------------*/   
        /*Generates a table below the headword, showing how the root is inflected.*/

        let newTable = document.createElement("table");
        document.getElementById("outputSection").appendChild(newTable);

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
           let accPlEtymology = " " + "<" + " " + "he" + "-" +  root + "-" + "te";

           let genSg = "pi" + root + "ko"
           let genPl = "pi" + root + "te"

           let genSgEtymology = " " + "<" + " " + "pi" + "-" +  root + "-" + "ko";
           let genPlEtymology = " " + "<" + " " + "pi" + "-" +  root + "-" + "te";
           
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

        
        


  /*----------------------^^^-TABLE-^^^-------------------------------------------------------------*/
 }
}



