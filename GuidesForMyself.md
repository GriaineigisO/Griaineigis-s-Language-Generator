# Classifiers

##How to add a new set of classifier to a pre-existing classifier system
In this example, the "child" classifier will be added to the Animate classifier system.

1. In the function `createAnimacyClassifiers()` add a variable named `let childExample` at the top of the function. Then add the following code template:
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
   When `randomNumForChild` is 0, the word for the child classifier while be taken from a pre-existing noun, in this case the noun "child". You can add as many possible nouns as you want, so long as the last `else if` is `childClassifier = generateWords();`.
