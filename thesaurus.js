
let allWordsInThesaurus = [];
let aliveArray = ["alive", "extant"];
allWordsInThesaurus.push(aliveArray);
let dogArray = ["dog", "hound", "canid"];
allWordsInThesaurus.push(dogArray);
let enemyArray = ["enemy", "opponent", "demon"];
allWordsInThesaurus.push(enemyArray);
let violentArray = ["violent", "aggressive", "dangerous"];
allWordsInThesaurus.push(violentArray);


// function makeThesaurus(word) {
//     let chosenMeanings = [];
//     let resultingEntryTranslation

//     for(let i = 0; i < allWordsInThesaurus.length; i++) {
//         if(allWordsInThesaurus[i].includes(word) /*&& Math.floor(Math.random() * 2) === 1*/) {
//             //removes the word from the array, to prevent the entry from listing the same word twice. The array is cloned so that the items in the original array are not removed and can be accessed upon each following generation
//             let thesaurusEntryArrayCopy = [].concat(allWordsInThesaurus[i]);
//             thesaurusEntryArrayCopy.splice(thesaurusEntryArrayCopy.indexOf(word), 1)

//             //selects a random near-synonmous word
//             let randomAmountOfAdditionalMeanings = Math.floor(Math.random() * thesaurusEntryArrayCopy.length) + 1;
//             for(let j = 0; j < randomAmountOfAdditionalMeanings; j++) {
//                 let randomItem = Math.floor(Math.random() * thesaurusEntryArrayCopy.length);
//                 chosenMeanings.push(thesaurusEntryArrayCopy[randomItem]);
//                 //removes the word from the array, to prevent the entry from listing the same word twice
//                 thesaurusEntryArrayCopy.splice(randomItem, 1);
//             }
            
//             let additionalMeanings = chosenMeanings.join(", ");
//             resultingEntryTranslation = `${word}, ${additionalMeanings}`; 
//             console.log(resultingEntryTranslation)
//         } else {
//             resultingEntryTranslation = word;
//         }
//     } 
//     return resultingEntryTranslation;
// };

export { allWordsInThesaurus };
