import {vowels, consonants, chooseLength} from './generatePhonology.js'


let vowelsWhichPreventMacrons = ["ɛ", "ɜ", "ɑ", "ɐ", "ɒ", "ə", "ɵ", "ɘ", "ɪ", "ʏ", "ɤ", "ø", "ɞ", "ɨ", "ʉ", "ʊ", "ɯ", "ɔ", "ʌ"];
//if vowels contains a vowel present in the above array, then checkIfCanUseMacron() should return false
function checkIfCanUseMacron() {
    for(let i = 0; i < vowelsWhichPreventMacrons.length; i++) {
        if(vowels.includes(vowelsWhichPreventMacrons[i])) {
          return false;
        } else{
           return true;
        }
    }
}


    
function spell(word) {
   checkIfCanUseMacron()

   /***CLEANUP***/ 
    /*move to sound change once the sound change function is back*/

    //the generated words often form doublets across syllable boundries e.g 'ga-ag' > 'gaag'. These can be confused for long vowels or long consonants which is especially unwanted if the language lacks length altogether. So these accidental doublets are removed first.
   
    let str = word.join("");
    let wordArray = Array.from(str)

    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === wordArray[i + 1]) {
            wordArray.splice(i, 1)
        } 
    }

    //since long vowels in the IPA are marked like 'iː', with ː being an extra character, this loop deletes the following long vowel if it is the same
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i + 1] === "ː" && wordArray[i + 2] === wordArray[i] && wordArray[i + 3] === "ː") {
            wordArray.splice(i+2, 1)
            wordArray.splice(i+2, 1)
        } 
    }

   for(let i = 0; i < wordArray.length; i++) {
    if(wordArray[i] === "ː") {
        wordArray[i] = wordArray[i - 1]
     }
   }

   //there were far too many long vowels and consonants generated, so this serves to random shorten many of them to stop the vast majority of vowels in most words being long
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === wordArray[i + 1] && Math.floor(Math.random() * 5) !== 3) {
            wordArray.splice(i, 1)
        } 
        //removes word intial geminates
        if(wordArray[i] === wordArray[0] && wordArray[i] === wordArray[i + 1] && consonants.includes(wordArray[i])) {
            wordArray.splice(i, 1)
        }
        //deletes a vowel if two vowels follow, too many words had long unbroken lines of vowels
        if(vowels.includes(wordArray[i]) && vowels.includes(wordArray[i + 1]) && vowels.includes(wordArray[i + 2])) {
            wordArray.splice(i, 1)
        }
    }
   
   /*^^^move to sound change once the sound change function is back^^^*/

    console.log(checkIfCanUseMacron())


    for(let i = 0; i <  wordArray.length; i++) {
        if(checkIfCanUseMacron() && wordArray[i] === wordArray[i + 1] && vowels.includes(wordArray[i])) {
            if(wordArray[i] === "i") {
                wordArray[i] = "ī"
            } else if (wordArray[i] == "e") {
                wordArray[i] = "ē"
            } else if (wordArray[i] == "a") {
                wordArray[i] = "ā"
            } else if (wordArray[i] == "o") {
                wordArray[i] = "ō"
            } else if (wordArray[i] == "u") {
                wordArray[i] = "ū"
            } else if (wordArray[i] == "y") {
                wordArray[i] = "ȳ"
            } else if (wordArray[i] == "æ") {
                wordArray[i] = "ǣ"
            }else if (wordArray[i] == "œ") {
                wordArray[i] = "œ̄"
            }
            wordArray.splice(i + 1, 1)
        }
    }

    // let macronWord = wordArray.join("");
    // let longI = macronWord.replace("ii", "ī");
    // let longE = longI.replace("ee", "ē");
    // let longA = longE.replace("aa", "ā");
    // let longO = longA.replace("oo", "ō");
    // let longU = longO.replace("uu", "ū");
    // let longY = longU.replace("yy", "ȳ");
    // let longAsh = longY.replace("ææ", "ǣ");



    let final = wordArray.join("");

  return final

}


export {spell};
