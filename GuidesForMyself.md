# Index

- Classifiers
  - How to add a new classifier system
  - How to add a classifier to a pre-existing classifier system
- Words
  - Adding a new word

# Classifiers

## How to add a new classifier system

In this example, the "short generic" classifier system will be added.

1. in `script.js`, there is a list of functions named `createXClassifiers()` (X being the name of the classifier system). After the last of these functions, add `function createShortGenericClassifiers()`. Call the function in the `generateLanguage()` under the most recent `createXClassifiers()` function.

2. Back to the `createShortGenericClassifiers()` function. Directly above where the function is declared, write a list of variable declarations. These will be the random numbers used within the function. They should be titled `randomNumFor` and then the name of each specific classifier in the given system. In this example, this list of variable declarations looks like:

   ```
   let randomNumForHuman = 0;
   let randomNumForTree = 0;
   let randomNumForGrass = 0;
   let randomNumForFlower = 0;
   let randomNumForLandAnimal = 0;
   let randomNumForSeaAnimal = 0;
   let randomNumForFlyingAnimal = 0;
   let randomNumForWord = 0;
   let randomNumForTool = 0;
   let randomNumForNatural = 0;
   let randomNumForLiquid = 0;
   function createShortGenericClassifiers() {
   }
   ```

3. Within the function itself, at the very top, there is yet another list of variable delcarations. The first two will always be the same regardless of the classifier system, they are:

   ```
   let classifiersWithEtymology = 0;
   let classifierEtymologyArray = [];
   ```

After that, a list of variables will be declared with the format `let XExample = "";` where "X" is the name of each individual classifier:

    ```
    let humanExample = "";
    let treeExample = "";
    let grassExample = "";
    let flowerExample = "";
    let landAnimalExample = "";
    let seaAnimalExample = "";
    let flyingAnimalExample = "";
    let wordExample = "";
    let toolExample = "";
    let naturalExample = "";
    let liquidExample = "";
    ```

4. At the very bottom of the function, add the following code. This creates a sentence explaining the origin of any classifier that comes from a pre-existing word.

   ```
   const listOfSpans = [];
   if(classifierEtymologyArray.length === 1) {
       let joinedString = classifierEtymologyArray.join();
       document.getElementById("short-generic-classifiers-etymology-examples").innerHTML = `${joinedString}.`;
   } else {
    classifierEtymologyArray.forEach((element) => listOfSpans.push(element));
       listOfSpans.pop()
       listOfSpans.push(` and ${classifierEtymologyArray[classifierEtymologyArray.length -1]}.`)
       let listOfSpansString =  listOfSpans.join(", ")
       document.getElementById("short-generic-classifiers-etymology-examples").innerHTML = listOfSpansString;
   }
   ```

5. To add the corresponding HTML for the code in step 4, go to `index.html`. Open the following `div`s: `nouns` > `isolating-nouns` > `isolating-quanitifers-and-classifiers-purely-numerical`. At the bottom of `isolating-quanitifers-and-classifiers-purely-numerical`, add the follwing `div`:

   ```
   <div id="short-generic-based-classifier-tables">

   </div>
   ```

6. In said `div`, add the following table. The number after `classifier-table-` should be one greater than the last table of the previous classifier system.

   ```
   <div id="short-generic-based-classifier-tables">
             <table class="example-table headFinal" id="classifier-table-4-headFinal">
               <tr>
                 <th>Category</th>
                 <th>Classifier</th>
                 <th>Example</th>
                 <th>Translation</th>
               </tr>
               <tr>
                 <!--add classifiers here-->
               </tr>
             </table>
           </div>
   ```

7. Under the table add the following code:

   ```
   <p id="short-generic-classifiers-etymology">Some classifiers are derived from pre-existing words such as <span id="short-generic-classifiers-etymology-examples"></span></p>
   ```

8. Finally, in the function `chooseClassifierSystem()`, add this `else if` at the end of the if-statement. `X` should be one number higher than in the last `else if` statement. Change the `.innerHTML` to an appropriate description of the classifier system.

   ```
   else if(randomClassifierNum === X) {
       document.getElementById("short-generic-based-classifier-tables").innerHTML = `Nouns are assigned classifiers based on which semantic category they fall into, based more on folk taxonomy than anything else.`
   }
   ```

9. You must now assign each noun to a certain classifier. In the folder `ClassiferArrays` make a two `.js` files, one named `shortGenericClassifers.js` and `shortGenericClassifersMass.js`. In Each file, make an array. `shortGenericClassifers.js` will correspond to the file `countNouns.js` and `shortGenericClassifersMass.js` with `massNouns.js`. Each line in the array will corrspond with a noun in each list, so make sure that the classifier is in the exact same line as the noun. Export the array and then import it to `script.js`.

## How to add a classifier to a pre-existing classifier system

In this example, the "child" classifier will be added to the Animate classifier system.

1. Declare `let childArray = [];` and `let childClassifier = "";` at the top of `script.js` and then again in `clearGeneratedArrays()`.

2. Above the function `classifierExamplesInDictionaryEntries()` there is a list of variable delcarations, add `let childExample === "";` to the end of this list. In the function `createAnimacyClassifiers()` add a variable named `let childExample` at the top of the function. Then add the following code template:

   ```
    let child = document.getElementsByClassName("child");
   randomNumForChild = Math.floor(Math.random() * 2);
   if(randomNumForChild === 0) {
       childClassifier = generatedCountNouns[countNounArray.indexOf("child")]
       classifiersWithEtymology++;
       childExample = `<i>${spell(soundChange(childClassifier))}</i> "child"`;
       classifierEtymologyArray.push(childExample);
   } else if (randomNumForChild === 1) {
       childClassifier = generateWords();
   }
   for(let i = 0; i < child.length; i++) {
       child[i].innerHTML = spell(soundChange(childClassifier));
   }
   ```

   In the line `childClassifier = generatedCountNouns[countNounArray.indexOf("child")]`, please make sure that the word within the `.indexOf` method already exists in the dictionary. This will not work if the word has not yet been added. If the noun if a mass noun then be sure to use `generatedMassNouns[massNounArray.indexOf()` instead of `generatedCountNouns[countNounArray.indexOf()`. It is possible to use a verb or adjective root as a classifier, in such a case, use the functions `verbClassifierExamplesInDictionaryEntries()` and `adjectiveClassifierExamplesInDictionaryEntries` instead.

   When `randomNumForChild` is 0, the word for the child classifier will be taken from a pre-existing noun, in this case the noun "child". You can add as many possible nouns as you want, so long as the last `else if` is `childClassifier = generateWords();`.

3. In the function `callClassifierExamples()` put this at the bottom. make sure that the index of `exampleArray` is one number higher than the previous line of code.

   ```
   classifierExamplesInDictionaryEntries("child", childArray, "count", "count");
   childExample = exampleArray[15];
   ```

   The first "count" is for when the noun being used as the classifier is a count noun. The second "count" is for when the random noun chosen for the example is a count noun. Choose either to "mass" if need be.

4. In the function `isolatingNouns()` put this near the other classifiers of the same classifier system.

   ```
   selectNounsClassifier(animacyClassifierArray, childArray, "child");
   ```

   If the classifier can be used with mass nouns, then include this also, just be sure that `childMassArray` has been declared already:

   ```
   selectMassNounsClassifier(animacyClassifierMassArray, childMassArray , "child");
   ```

5. Export `randomNumForChild` and `childExample` from `script.js`. Then import both into `dictionary.js`.

6. In `dictionary.js`, within the for-loop labelled as "Kerbekulo to English", scroll down to the if-statement with `typologyNum === 0 && grammaticalNumIsolating > 5 && randomClassifierNum === 1` (randomClassifierNum does not have to be 1, only for this specific example). Within the if-statement `if(countNounArray.includes(englishWords[i])) ` there is another if-statement labelled `if(animacyClassifierArray[index] === "man") {`, add the following `else if` to this:

   ```
   else if(animacyClassifierArray[index] === "child") {
                   pOfSpeech = "n.child";
                   if(englishWords[i] === "child" && randomNumForChild === 0) {
                       classifierInfo = `; classifier for child nouns: ${childExample}`
                   } else {
                       classifierInfo = "";
                   }
               }
   ```

7. Go to `index.html` and find the appropriate example table for the classifier system which you are adding too, in this example, it is the table withing the `div` with the `id` of `id="animacy-based-classifier-tables"`. There are two tables, one if the language is head-first and the other if the language is head-final. Add the following table row to the table with `classifier-table-2-headFinal`:

   ```
   <tr>
       <td><strong>Child</strong></td>
       <td><span class="child"></span></td>
       <td><span class="child"></span> <span class="child-noun sound-change" id="noun1child"></span></td>
       <td>"<span class="noun-meaning1child plural-meaning"></span>"</td>
   </tr>
   ```

   Then add the following table row to the table with `classifier-table-2-headFirst`:

   ```
   <tr>
       <td><strong>Child</strong></td>
       <td><span class="child"></span></td>
       <td><span class="child-noun sound-change" id="noun1child"></span> <span class="child"></span></td>
       <td>"<span class="noun-meaning1child plural-meaning"></span>"</td>
   </tr>
   ```

8. Go to `styles.css` and add `.child-noun` and `.child` to the massive list of css selectors to make it italic.

9. The new classifier has now been added.

# Words

## Adding a New Noun

1. Open the folder `englishWordArrays`. Then open the folder `Nouns`.

2. Determine if the new word is a count noun or mass noun. Go to either `countNouns.js` or `massNouns.js`. In the file, add the new word. The arrays are alphabetically sorted.

3. If you added a count noun, go to `countNounsPLural.js`. Go to the same line as that which you added the new word to in `countNouns.js`. For example, the word "child" was added to line 68, so in `countNounsPLural.js` the plural form "children" will be added to line 68.

4. If you added a mass noun, go to `singulativeMassNouns.js` and add the appropriate singulative form to the same line in that file. For example, if the word "water" was added to line 25, the singulative form "drop of water" will be added to line 25 in `singulativeMassNouns.js`. Then go to `pluralSingulativeMassNouns.js` and add the plural form of the singulative at the same line again, in this example it would be "drops of water" on line 25.

5. The gender of the word must now be listed in each gender array. Open the folder `nounGender`. In each file in this folder, at the same line that the new word added in either `countNouns.js` or `massNouns.js`, add which gender this word is. Do this for every gender file there. If the new noun is a mass noun, then add it to the mass noun version of the file which will have the same name but with "Mass" at the end.

6. Now the same must be done but for the classifier systems. Open the folder `ClassifierArrays` and follow the same process as listed in step 5.

7. The new noun has now been added.
