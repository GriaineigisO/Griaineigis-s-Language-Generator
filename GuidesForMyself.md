# Classifiers

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

   In the line `childClassifier = generatedCountNouns[countNounArray.indexOf("child")]`, the please make sure that the word within the `.indexOf` method already exists in the dictionary. This will not work if the wrd ha snot yet been added.

   When `randomNumForChild` is 0, the word for the child classifier will be taken from a pre-existing noun, in this case the noun "child". You can add as many possible nouns as you want, so long as the last `else if` is `childClassifier = generateWords();`.

3. In the function `callClassifierExamples()` put this at the bottom. make sure that the index of `exampleArray` is one number higher than the previous line of code.

   ```classifierExamplesInDictionaryEntries("child", childArray);
   childExample = exampleArray[15];
   ```

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
       <td><span class="woman"></span> <span class="child-noun sound-change" id="noun1child"></span></td>
       <td>"<span class="noun-meaning1child plural-meaning"></span>"</td>
   </tr>
   ```

   Then add the following table row to the table with `classifier-table-2-headFirst`:

   ```
   <tr>
       <td><strong>Child</strong></td>
       <td><span class="child"></span></td>
       <td><span class="child-noun sound-change" id="noun1child"></span> <span class="woman"></span></td>
       <td>"<span class="noun-meaning1child plural-meaning"></span>"</td>
   </tr>
   ```

8. Go to `styles.css` and add `.child-noun` to the massive list of css selectors to make it italic.

9. The new classifier has now been added.
