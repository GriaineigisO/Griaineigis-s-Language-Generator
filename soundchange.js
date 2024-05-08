let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", createArrays);
    
//Takes the words from both text fields and splits them into arrays, then it creates an object using both arrays.
function createArrays() {
    let inputRoot = document.getElementById("inputRoot").value;
    let splitInputRoot = inputRoot.split(" ");

    let inputMeaning = document.getElementById("inputMeaning").value;
    let splitInputMeaning = inputMeaning.split(" ");

 
    

    for(i = 0; i < splitInputRoot.length; i++) {
        let root = splitInputRoot[i]; 
        let rootMeaning = splitInputMeaning[i];
        
        /* Generates the headword above each inflection table, showing the root and it's meaning as a title */
        /*Creates a new H3 element to which is appended the root*/ 
        let newHeadingH3 = document.createElement("h3");
        let newHeadingH3Content = document.createTextNode(root);
        newHeadingH3.appendChild(newHeadingH3Content);

        /*Creates a new p element to which is appended the root's meaning*/ 
        let newHeadingP = document.createElement("p");
        let newHeadingPContent = document.createTextNode(rootMeaning);
        newHeadingP.appendChild(newHeadingPContent);
        
        /* Creates a new div element to contain both the h3 and p elements. In the stylesheet the div is inline so that the H3 and p elements are side by side, functioning as one single title*/
        let newHeadWordDiv = document.createElement("div");
        newHeadWordDiv.classList.add("headWordDiv");
        newHeadWordDiv.appendChild(newHeadingH3);
        newHeadWordDiv.appendChild(newHeadingP);

        let outputSection = document.getElementById("outputSection");
        outputSection.appendChild(newHeadWordDiv);
    }


    /*for(i = 0; i < splitInputRoot.length; i++) {
        let root = splitInputRoot[i]; 
        let rootMeaning = splitInputMeaning[i];

        let headWord = root + " " + rootMeaning;

        let newHeader = document.createElement("h3");
        let newContent = document.createTextNode(headWord);
        newHeader.appendChild(newContent);

        let outputSection = document.getElementById("outputSection");
        outputSection.appendChild(newHeader);
    }*/

    
    
    
}


    




