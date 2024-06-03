import {vowels, consonants, allGlottalFricatives, allVelarFricatives, allAspiratesArray, allUvularFricativesArray, allUvularPlosivesArray, allLabioDentalArray, chooseVoicing, voicingTrueOrFalse} from './generatePhonology.js'




let vowelsWhichPreventMacrons = ["ɛ", "ɜ", "ɑ", "ɐ", "ɒ", "ə", "ɵ", "ɘ", "ɪ", "ʏ", "ɤ", "ø", "ɞ", "ɨ", "ʉ", "ʊ", "ɯ", "ɔ", "ʌ", "ɛː", "ɜː", "ɑː", "ɐː", "ɒː", "əː", "ɵː", "ɘː", "ɪː", "ʏː", "ɤː", "øː", "ɞː", "ɨː", "ʉː", "ʊː", "ɯː", "ɔː", "ʌː"];
//if vowels contains a vowel present in the above array, then checkIfCanUseMacron() should return false
function checkIfCanUseMacron() {
    if(vowels.some(vowel => vowelsWhichPreventMacrons.includes(vowel))) {
        return false;
    } else{
        return true;
    }
}

//since putting the random numbers within spell() would mean a new random number with every single word, I had to declare then in this function, which generates the same random number consistently within spell(), but changes when the generate language button is pressed
let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", randomNumbers);

let randomNumAlveolarFricative = 0;
let randomNumPalatalFricative = 0;
let randomDentalFricative = 0;
//let voicingTrueOrFalse = "";
let frontö = ";"
function randomNumbers() {
    randomNumAlveolarFricative = Math.floor(Math.random() * 7);
    randomNumPalatalFricative = Math.floor(Math.random() * 7);
    randomDentalFricative = Math.floor(Math.random() * 2);
    //voicingTrueOrFalse = chooseVoicing();
    frontö = Math.floor(Math.random() * 7);

}

    
function spell(word) {
   checkIfCanUseMacron()

   let wordArray = [];
   if(typeof word === "string") {
        wordArray = Array.from(word)
   } else if (typeof word === "object") {
    let str = word.join("");
    wordArray = Array.from(str)
   }
   

   
   /***CLEANUP***/ 
    /*move to sound change once the sound change function is back*/

    //the generated words often form doublets across syllable boundries e.g 'ga-ag' > 'gaag'. These can be confused for long vowels or long consonants which is especially unwanted if the language lacks length altogether. So these accidental doublets are removed first.
    
    

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
        //removes word inital geminates
        if(wordArray[i] === wordArray[0] && wordArray[i] === wordArray[i + 1] && consonants.includes(wordArray[i])) {
            wordArray.splice(i, 1)
        }
        //deletes a vowel if two vowels follow, too many words had long unbroken lines of vowels
        if(vowels.includes(wordArray[i]) && vowels.includes(wordArray[i + 1]) && vowels.includes(wordArray[i + 2])) {
            wordArray.splice(i, 1)
        }
    }
   /*^^^move to sound change once the sound change function is back^^^*/




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


    //POST ALVEOLAR FRICATIVES AND AFFRICATES AND /J/
   // let randomNum = Math.floor(Math.random() * 7) 
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "tʃ" && randomNumAlveolarFricative < 5) {
            wordArray[i] = "č"
        }
        if(wordArray[i] === "dʒ" && randomNumAlveolarFricative < 5) {
            wordArray[i] = "dž"
        }
        if(wordArray[i] === "ʃ" && randomNumAlveolarFricative < 5) {
            wordArray[i] = "š"
        }
        if(wordArray[i] === "ʒ" && randomNumAlveolarFricative < 5) {
            wordArray[i] = "ž"
        }

        if(wordArray[i] === "tʃ" && randomNumAlveolarFricative === 5) {
            wordArray[i] = "ch"
        }
        if(wordArray[i] === "dʒ" && randomNumAlveolarFricative === 5) {
            wordArray[i] = "j"
        }
        if(wordArray[i] === "ʃ" && randomNumAlveolarFricative === 5) {
            wordArray[i] = "sh"
        }
        if(wordArray[i] === "ʒ" && randomNumAlveolarFricative === 5) {
            wordArray[i] = "zh"
        }
        if(wordArray[i] === "j" && randomNumAlveolarFricative === 5) {
            wordArray[i] = "y"
        }

        if(wordArray[i] === "tʃ" && randomNumAlveolarFricative > 5) {
            wordArray[i] = "tsj"
        }
        if(wordArray[i] === "dʒ" && randomNumAlveolarFricative > 5) {
            wordArray[i] = "dzj"
        }
        if(wordArray[i] === "ʃ" && randomNumAlveolarFricative > 5) {
            wordArray[i] = "sj"
        }
        if(wordArray[i] === "ʒ" && randomNumAlveolarFricative > 5) {
            wordArray[i] = "zj"
        }
    }

     //VELAR NASAL
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ŋ" && allVelarFricatives.includes(wordArray[i + 1])) {
            wordArray[i] = "n"
        } else if(wordArray[i] === "ŋ" && wordArray[i + 1] === "k") {
            wordArray[i] = "n";
        } else if(wordArray[i] === "ŋ" && wordArray[i + 1] === "g") {
            wordArray[i] = "n";
        }  else if(wordArray[i] === "ŋ") {
            wordArray[i] = "ng";
        }
    }

    //VELAR FRICATIVES 
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "x" && allGlottalFricatives.length > 0) {
            wordArray[i] = "kh"
        }
        if(wordArray[i] === "x" && allGlottalFricatives.length > 0 && allAspiratesArray.length > 0) {
            wordArray[i] = "ch"
        }
        if(wordArray[i] === "x" && allGlottalFricatives.length === 0) {
            wordArray[i] = "h"
        }
        if(wordArray[i] === "ɣ") {
            wordArray[i] = "gh"
        }
        if(wordArray[i] === "ɣ" && allAspiratesArray.length > 0 ) {
            wordArray[i] = "ɣ"
        }
    }

    //UVULAR FRICATIVES
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "χ" && allGlottalFricatives.length > 0 && allVelarFricatives.length > 0) {
            wordArray[i] = "x"
        }
        if(wordArray[i] === "ʁ" && allVelarFricatives.length > 0) {
            wordArray[i] = "ĝ"
        }

        if(wordArray[i] === "χ" && allGlottalFricatives.length > 0 && allVelarFricatives.length === 0 && allAspiratesArray.length === 0) {
            wordArray[i] = "kh"
        }
        if(wordArray[i] === "χ" && allGlottalFricatives.length > 0 && allVelarFricatives.length === 0 && allAspiratesArray.length > 0) {
            wordArray[i] = "x̂"
        }
        if(wordArray[i] === "χ" && allGlottalFricatives.length === 0 && allVelarFricatives.length === 0) {
            wordArray[i] = "h"
        }
        if(wordArray[i] === "χ" && allGlottalFricatives.length === 0 && allVelarFricatives.length > 0) {
            wordArray[i] = "kh"
        }
        if(wordArray[i] === "ʁ" && allVelarFricatives.length === 0 && allAspiratesArray.length === 0) {
            wordArray[i] = "gh"
        }
        if(wordArray[i] === "ʁ" && allVelarFricatives.length === 0 && allAspiratesArray.length > 0) {
            wordArray[i] = "ĝ"
        }

    }

    //GLOTTAL STOP
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ʔ" && allGlottalFricatives.length === 0 && allVelarFricatives.length === 0 && allUvularFricativesArray.length === 0) {
            wordArray[i] = "h"
        } else if (wordArray[i] === "ʔ" && allUvularPlosivesArray.length === 0) {
            wordArray[i] = "q"
        } else if (wordArray[i] === "ʔ") {
            wordArray[i] = "'"
        }

    }

    //PALATAL
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "c" && randomNumPalatalFricative === 0) {
            wordArray[i] = "c"
        }
        if(wordArray[i] === "ɟ" && randomNumPalatalFricative === 0) {
            wordArray[i] = "gi"
        }
        if(wordArray[i] === "ç" && randomNumPalatalFricative === 0) {
            wordArray[i] = "hi"
        }
        if(wordArray[i] === "ʝ" && randomNumPalatalFricative === 0) {
            wordArray[i] = "ghi"
        }
        if(wordArray[i] === "ɲ" && randomNumPalatalFricative === 0) {
            wordArray[i] = "ni"
        }
        if(wordArray[i] === "ʎ" && randomNumPalatalFricative === 0) {
            wordArray[i] = "li"
        }
        if(wordArray[i] === "c" && randomNumPalatalFricative === 1) {
            wordArray[i] = "kj"
        }
        if(wordArray[i] === "ɟ" && randomNumPalatalFricative === 1) {
            wordArray[i] = "gj"
        }
        if(wordArray[i] === "ç" && randomNumPalatalFricative === 1) {
            wordArray[i] = "cj"
        }
        if(wordArray[i] === "ʝ" && randomNumPalatalFricative === 1) {
            wordArray[i] = "ghj"
        }
        if(wordArray[i] === "ɲ" && randomNumPalatalFricative === 1) {
            wordArray[i] = "nj"
        }
        if(wordArray[i] === "ʎ" && randomNumPalatalFricative === 1) {
            wordArray[i] = "lj"
        }
        if(wordArray[i] === "c" && randomNumPalatalFricative > 1) {
            wordArray[i] = "ḱ"
        }
        if(wordArray[i] === "ɟ" && randomNumPalatalFricative > 1) {
            wordArray[i] = "ǵ"
        }
        if(wordArray[i] === "ç" && randomNumPalatalFricative > 1) {
            wordArray[i] = "ç"
        }
        if(wordArray[i] === "ʝ" && randomNumPalatalFricative > 1) {
            wordArray[i] = "ġ"
        }
        if(wordArray[i] === "ɲ" && randomNumPalatalFricative > 1) {
            wordArray[i] = "ñ"
        }
        if(wordArray[i] === "ʎ" && randomNumPalatalFricative > 1) {
            wordArray[i] = "ʎ"
        }
    }

    //DENTAL FRICATIVES
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "θ" && randomDentalFricative === 0) {
            wordArray[i] = "þ"
        }
        if(wordArray[i] === "ð" && randomDentalFricative === 0) {
            wordArray[i] = "ð"
        }
        if(wordArray[i] === "θ" && randomDentalFricative === 1 && allAspiratesArray.length === 0) {
            wordArray[i] = "th"
        }
        if(wordArray[i] === "ð" && randomDentalFricative === 1 && allAspiratesArray.length === 0) {
            wordArray[i] = "dh"
        }
    }
   
    //BILABIAL FRICATIVES
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ɸ" && allAspiratesArray.length === 0) {
            wordArray[i] = "ph"
        } else if(wordArray[i] === "ɸ" && allLabioDentalArray.length === 0) {
            wordArray[i] = "f"
        } else if(wordArray[i] === "ɸ") {
            wordArray[i] = "fh"
        }
        if(wordArray[i] === "β" && allAspiratesArray.length === 0) {
            wordArray[i] = "bh"
        } else if(wordArray[i] === "β" && allLabioDentalArray.length === 0) {
            wordArray[i] = "v"
        } else if(wordArray[i] === "β") {
            wordArray[i] = "vh"
        }
        
        
        
    }
    
    //RETROFLEXES
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ʈ") {
            wordArray[i] = "ṭ"
        }
        if(wordArray[i] === "ɖ") {
            wordArray[i] = "ḍ"
        }
        if(wordArray[i] === "ʂ") {
            wordArray[i] = "ṣ"
        }
        if(wordArray[i] === "ʐ") {
            wordArray[i] = "ẓ"
        }
        if(wordArray[i] === "ɭ") {
            wordArray[i] = "ḷ"
        }
        if(wordArray[i] === "ɽ") {
            wordArray[i] = "ṛ"
        }
        if(wordArray[i] === "ɳ") {
            wordArray[i] = "ṇ"
        }
    }

    //ASPIRATES
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ʰ" && voicingTrueOrFalse) {
            wordArray[i] = "h" 
        } else if (voicingTrueOrFalse === false && allAspiratesArray.length > 0) {//if plosives have no voicing distinction, aspirates will be marked by using <p t k> while unvoices non-aspirated will be <b d g>
            if(wordArray[i] == "p") {
                wordArray[i] = "b"
            }
            if(wordArray[i] == "t") {
                wordArray[i] = "d"
            }
            if(wordArray[i] == "k") {
                wordArray[i] = "g"
            }
            if(wordArray[i] == "b" && wordArray[i + 1] === "ʰ") {
                wordArray[i] = "p";
                wordArray.splice(i + 1, 1)
            }
            if(wordArray[i] == "d" && wordArray[i + 1] === "ʰ") {
                wordArray[i] = "t";
                wordArray.splice(i + 1, 1)
            }
            if(wordArray[i] == "g" && wordArray[i + 1] === "ʰ") {
                wordArray[i] = "k";
                wordArray.splice(i + 1, 1)
            } else if (wordArray[i] === "ʰ") {
                wordArray[i] = "h";
            }
        }
    }

    //SCHWA
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ə" && vowels.includes("e") === false && vowels.includes("ɛ") === false) {
            wordArray[i] = "e";
        }
        if(wordArray[i] === "ə" && vowels.includes("a") === false && vowels.includes("ɑ") === false) {
            wordArray[i] = "a";
        } else if(wordArray[i] === "ə") {
            wordArray[i] = "â";
        }
    }

    //LAX E AND O
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ɛ" && vowels.includes("e") === false) {
            wordArray[i] = "e"
        } else if(wordArray[i] === "ɛ") {
            wordArray[i] = "ê"
        }
        if(wordArray[i] === "ɔ" && vowels.includes("o") === false) {
            wordArray[i] = "o"
        } else if(wordArray[i] === "ɔ") {
            wordArray[i] = "ô"
        }
    }

    //NEAR HIGH VOWELS
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ɪ") {
            wordArray[i] = "î"
        }
        if(wordArray[i] === "ʊ") {
            wordArray[i] = "û"
        }
        if(wordArray[i] === "ʏ" && vowels.includes("y" === false)) {
            wordArray[i] = "y"
        } else if(wordArray[i] === "ʏ") {
            wordArray[i] = "ŷ"
        }
    }

    //CENTRAL VOWELS
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ʉ") {
            wordArray[i] = "ü"
        }
        if(wordArray[i] === "ɨ") {
            wordArray[i] = "ï"
        }
        if(wordArray[i] === "ɵ") {
            wordArray[i] = "ǒ"
        }
        if(wordArray[i] === "ɘ") {
            wordArray[i] = "ě"
        }
        if(wordArray[i] === "ɜ") {
            wordArray[i] = "ĕ"
        }
        if(wordArray[i] === "ɞ") {
            wordArray[i] = "ŏ"
        }
    }

    //BACK UNROUNDED VOWELS
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ɤ") {
            wordArray[i] = "ò"
        }
        if(wordArray[i] === "ɯ" && vowels.includes("y") === false) {
            wordArray[i] = "y"
        } else if (wordArray[i] === "ɯ") {
            wordArray[i] = "ỳ";
        }
        if(wordArray[i] === "ɒ" && vowels.includes("a") === false && vowels.includes("ə") === false &&  vowels.includes("ɐ") === false) {
            wordArray[i] = "a"
        } else if (wordArray[i] === "ɒ") {
            wordArray[i] = "à"
        }
        if(wordArray[i] === "ʌ") {
            wordArray[i] = "ù"
        }
    }

    //FRONT ROUNDED VOWELS
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ø" && frontö !== 3) {
            wordArray[i] = "ö"
        } else if (wordArray[i] === "ø") {
            wordArray[i] = "ø"
        }
    }

    //LOW BACK VOWELS
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ɐ" && vowels.includes("a") === false && vowels.includes("ə") === false && vowels.includes("ɑ") === false) {
            wordArray[i] = "a"
        } else if (wordArray[i] === "ɐ") {
            wordArray[i] = "ă"
        }
        if(wordArray[i] === "ɑ" && vowels.includes("a") === false && vowels.includes("ə") === false) {
            wordArray[i] = "a"
        } else if (wordArray[i] === "ɑ") {
            wordArray[i] = "á"
        }
    }

    //LABIODENTAL APPROXIMANT
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ʋ" && consonants.includes("w") === false) {
            wordArray[i] = "w"
        } else if(wordArray[i] === "ʋ" && consonants.includes("w")) {
            wordArray[i] = "ụ"
        }
    }

    //VOICED PHARYNGEAL FRICATIVE
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ʕ") {
            wordArray[i] = "ḥ"
        }
    }

    //LABIALISED CONSONANTS
    for(let i = 0; i < wordArray[i]; i++) {
        let randomNum = Math.floor(Math.random() * 3)
        if(wordArray[i] === "ʷ" && randomNum === 3) {
            wordArray[i] = "w"
        } else if(wordArray[i] === "ʷ" && randomNum !== 3) {
            wordArray[i] = "ʷ"
        }
    }

    //Palatalised CONSONANTS
    for(let i = 0; i < wordArray[i]; i++) {
        let randomNum = Math.floor(Math.random() * 3)
        if(wordArray[i] === "ʲ" && randomNum === 0) {
            wordArray[i] = "j"
        } else if(wordArray[i] === "ʲ" && randomNum === 1) {
            wordArray[i] = "’"
        }else if(wordArray[i] === "ʲ" && randomNum === 2) {
            wordArray[i] = "ʲ"
        }
    }

    let final = wordArray.join("");

    return final
}


export {spell, checkIfCanUseMacron};
