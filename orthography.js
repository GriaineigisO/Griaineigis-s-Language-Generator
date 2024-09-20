

import {vowels, consonants, allGlottalFricatives, allVelarFricatives, allAspiratesArray, allUvularFricativesArray, allUvularPlosivesArray, allLabioDentalArray, chooseVoicing, voicingTrueOrFalse, chosenVowelSpellingsArray} from './generatePhonology.js'

let randomisedButton = document.getElementById("randomised");
let customisedButton = document.getElementById("customised");
let randomOption = "";
function randomise() {
    randomOption = true;
};
function customise() {
    randomOption = false;
};
randomisedButton.addEventListener("click", randomise);
customisedButton.addEventListener("click", customise);

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
let frontö = ""
let randomNum = 0;
let randomAshNum = 0;
function randomNumbers() {
    randomNumAlveolarFricative = Math.floor(Math.random() * 15);
    randomNumPalatalFricative = Math.floor(Math.random() * 7);
    randomDentalFricative = Math.floor(Math.random() * 2);
    frontö = Math.floor(Math.random() * 7);
    randomNum = Math.floor(Math.random() * 5)
    randomAshNum  = Math.floor(Math.random() * 3)


};

function randomSchwaSpelling() {
        if(vowels.includes("e") === false && vowels.includes("ɛ") === false) {
            return "e";
        };
        if(vowels.includes("a") === false && vowels.includes("ɑ") === false) {
            return "a";
        } else {
            return "â";
        };
};

function randomAshSpelling() {
    if(vowels.includes("e") === false && vowels.includes("ɛ") === false) {
        return "e";
    };
    if(vowels.includes("a") === false && vowels.includes("ɑ") === false) {
        return "a";
    };
    if(randomAshNum === 0) {
        return "æ";
    } else if(randomAshNum === 1) {
        return "ä";
    } else if(randomAshNum === 1) {
        return "á";
    }
};

function randomNearHighRounded() {
    if(vowels.includes("y") === false) {
        return "y";
    } else {
        return "ŷ";
    };
};

function randomHighBackUnrouded() {
    if(vowels.includes("y") === false) {
        return "y";
    } else {
        return "ỳ";
    };
};

function randomLowBackUnrouded() {
    if(vowels.includes("a") === false && vowels.includes("ə") === false &&  vowels.includes("ɐ") === false) {
        return "a";
    } else {
        return "à";
    };
};

function randomMidFrontRouded() {
    if(frontö < 5) {
        return "ø";
    } else {
        return "ö";
    };
};

function randomLowMidFrontUnrounded() {
    if(vowels.includes("e") === false) {
        return "e";
    } else {
        return "ê";
    };
};

function randomLowMidBackRounded() {
    if(vowels.includes("o") === false) {
        return "o";
    } else {
        return "ô";
    };
};

function randomLowFrontRounded() {
    if(vowels.includes("a") === false && vowels.includes("ə") === false) {
        return "a";
    } else {
        return "á";
    };
};

function randomMidCentreRounded() {
    if(vowels.includes("a") === false && vowels.includes("ə") === false && vowels.includes("ɑ") === false) {
        return "a";
    } else {
        return "ă";
    };
};

function randomLongI() {
    if(checkIfCanUseMacron) {
        return "ī";
    } else {
        return "ii";
    };
};

function randomLongU() {
    if(checkIfCanUseMacron) {
        return "ū";
    } else {
        return "uu";
    };
};

function randomLongA() {
    if(checkIfCanUseMacron) {
        return "ā";
    } else {
        return "aa";
    };
};

function randomLongO() {
    if(checkIfCanUseMacron) {
        return "ō";
    } else {
        return "oo";
    };
};

function randomLongE() {
    if(checkIfCanUseMacron) {
        return "ē";
    } else {
        return "ee";
    };
};

function randomLongY() {
        if(vowels.includes("y") === false) {
            return "yy";
        } else {
            return "ŷŷ";
        };
};

function randomLongAshSpelling() {
    if(checkIfCanUseMacron) {
        return "ǣ";
    } else {
        return "ææ";
    };
};

function randomLongSchwa() {
    if(vowels.includes("e") === false && vowels.includes("ɛ") === false) {
        return "ee";
    };
    if(vowels.includes("a") === false && vowels.includes("ɑ") === false) {
        return "aa";
    } else {
        return "ââ";
    };
};

function randomLongNearHighY() {
    if(vowels.includes("y") === false) {
        return "yy";
    } else {
        return "ŷŷ";
    };
};

function randomLongHighBackUnroundedU() {
    if(vowels.includes("y") === false) {
        return "yy";
    } else {
        return "ỳỳ";
    };
}

function randomLongLowBackUnroundedA() {
    if(vowels.includes("a") === false && vowels.includes("ə") === false &&  vowels.includes("ɐ") === false) {
        return "aa";
    } else {
        return "àà";
    };
}

function randomLongRoundedO() {
    if(frontö < 5) {
        return "øø";
    } else {
        return "öö";
    };
};

function randomLongNearMidE() {
    if(vowels.includes("e") === false) {
        return "ee";
    } else {
        return "êê";
    };
};

function randomLongNearMidO() {
    if(vowels.includes("o") === false) {
        return "oo";
    } else {
        return "ôô";
    };
};

function randomLongBackLowROundedA() {
    if(vowels.includes("a") === false && vowels.includes("ə") === false) {
        return "aa";
    } else {
        return "áá";
    };
};

function randomLongCentralA() {
    if(vowels.includes("a") === false && vowels.includes("ə") === false && vowels.includes("ɑ") === false) {
        return "aa";
    } else {
        return "ăă";
    };
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


   for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ː") {
            wordArray[i] = wordArray[i-1]
        };
   };

   for(let i = 0; i < wordArray.length; i++) {
        while(wordArray[i] === "A" || wordArray[i] === "X") {
            wordArray.splice(i, 1);
        };
    }
   
    // for(let i = 0; i <  wordArray.length; i++) {
    //     if(checkIfCanUseMacron() && wordArray[i] === wordArray[i + 1] && vowels.includes(wordArray[i])) {
    //         if(wordArray[i] === "i") {
    //             wordArray[i] = "ī"
    //         } else if (wordArray[i] == "e") {
    //             wordArray[i] = "ē"
    //         } else if (wordArray[i] == "a") {
    //             wordArray[i] = "ā"
    //         } else if (wordArray[i] == "o") {
    //             wordArray[i] = "ō"
    //         } else if (wordArray[i] == "u") {
    //             wordArray[i] = "ū"
    //         } else if (wordArray[i] == "y") {
    //             wordArray[i] = "ȳ"
    //         } else if (wordArray[i] == "æ") {
    //             wordArray[i] = "ǣ"
    //         }else if (wordArray[i] == "œ") {
    //             wordArray[i] = "œ̄"
    //         } 
    //         wordArray.splice(i + 1, 1)
            
    //     }
    // }

    //POST ALVEOLAR FRICATIVES AND AFFRICATES AND /J/
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ʃ" && wordArray[i-1] === "t" && randomNumAlveolarFricative < 16) {
            wordArray[i] = "č";
            wordArray.splice(i-1,1);
        }
        if(wordArray[i] === "ʒ" && wordArray[i-1] === "d" && randomNumAlveolarFricative < 16) {
            wordArray[i] = "dž"
            wordArray.splice(i-1,1);
        }
        if(wordArray[i] === "ʃ" && randomNumAlveolarFricative < 16) {
            wordArray[i] = "š"
        }
        if(wordArray[i] === "ʒ" && randomNumAlveolarFricative < 16) {
            wordArray[i] = "ž"
        }

        if(wordArray[i] === "ʃ" && wordArray[i-1] === "t" && randomNumAlveolarFricative === 16) {
            wordArray[i] = "ch"
            wordArray.splice(i-1,1);
        }
        if(wordArray[i] === "ʒ" && wordArray[i-1] === "d" && randomNumAlveolarFricative === 16) {
            wordArray[i] = "j"
            wordArray.splice(i-1,1);
        }
        if(wordArray[i] === "ʃ" && randomNumAlveolarFricative === 16) {
            wordArray[i] = "sh"
        }
        if(wordArray[i] === "ʒ" && randomNumAlveolarFricative === 16) {
            wordArray[i] = "zh"
        }
        if(wordArray[i] === "j" && randomNumAlveolarFricative === 16) {
            wordArray[i] = "y"
        }

        if(wordArray[i] === "ʃ" && wordArray[i-1] === "t" && randomNumAlveolarFricative === 15) {
            wordArray[i] = "tsj"
            wordArray.splice(i-1,1);
        }
        if(wordArray[i] === "ʒ" && wordArray[i-1] === "d" && randomNumAlveolarFricative === 15) {
            wordArray[i] = "dzj"
            wordArray.splice(i-1,1);
        }
        if(wordArray[i] === "ʃ" && randomNumAlveolarFricative === 15) {
            wordArray[i] = "sj"
        }
        if(wordArray[i] === "ʒ" && randomNumAlveolarFricative === 15) {
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
        if(wordArray[i] === "x" && allGlottalFricatives.length === 0  && allAspiratesArray.length === 0) {
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
        if(wordArray[i] === "ʎ" && randomNumPalatalFricative > 1 && consonants.includes("lː")) {
            wordArray[i] = "ll"
        } else if (wordArray[i] === "ʎ") {
            wordArray[i] = "ļ"
        }
    }

    //DENTAL FRICATIVES
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "θ" && randomDentalFricative === 0  && allAspiratesArray.length > 0) {
            wordArray[i] = "þ"
        }
        if(wordArray[i] === "θ" && randomDentalFricative === 0  && allAspiratesArray.length === 0) {
            wordArray[i] = "th"
        }
        if(wordArray[i] === "ð" && randomDentalFricative === 0) {
            wordArray[i] = "ð"
        }
        if(wordArray[i] === "θ" && randomDentalFricative === 1 && allAspiratesArray.length === 0) {
            wordArray[i] = "th"
        }
        if(wordArray[i] === "θ" && randomDentalFricative === 1  && allAspiratesArray.length > 0) {
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
    for(let i = 0; i < wordArray.length; i++) {
        let randomNum = Math.floor(Math.random() * 3)
        if(wordArray[i] === "ʷ" && randomNum === 3) {
            wordArray[i] = "w"
        } else if(wordArray[i] === "ʷ" && randomNum !== 3) {
            wordArray[i] = "ʷ"
        }
    }

    //Palatalised CONSONANTS
    for(let i = 0; i < wordArray.length; i++) {
      
        if(wordArray[i] === "ʲ" && randomNum === 0) {
            wordArray[i] = "j"
        }
        if(wordArray[i] === "ʲ" && randomNum === 1) {
            wordArray[i] = "’"
        }
        if(wordArray[i] === "ʲ" && randomNum === 2) {
            wordArray[i] = "ʲ"
        } 
        if(wordArray[i] === "ʲ" && randomNum > 2) {
            if(wordArray[i - 1] === "t") {
                wordArray[i - 1] = "ț"
                 wordArray.splice(i, 1)
            }
            if(wordArray[i - 1] === "d") {
                wordArray[i - 1] = "d̦"
                 wordArray.splice(i, 1)
            }
            if(wordArray[i - 1] === "k") {
                wordArray[i - 1] = "ķ"
                 wordArray.splice(i, 1)
            }
            if(wordArray[i - 1] === "g") {
                wordArray[i - 1] = "ģ"
                 wordArray.splice(i, 1)
            }
            if(wordArray[i - 1] === "s") {
                wordArray[i - 1] = "ș"
                 wordArray.splice(i, 1)
            }
            if(wordArray[i - 1] === "l") {
                wordArray[i - 1] = "ļ"
                 wordArray.splice(i, 1)
            }
            if(wordArray[i - 1] === "n") {
                wordArray[i - 1] = "ņ"
                 wordArray.splice(i, 1)
            }
            if(wordArray[i - 1] === "r") {
                wordArray[i - 1] = "ŗ"
                 wordArray.splice(i, 1)
            }            
        }
    }

    function spellIndividualLettersShort(letter, randomLetter) {
        //if vowels were manually chosen
        if(randomOption === false) {
            for(let j = 0; j < chosenVowelSpellingsArray.length; j++) {
                //if the vowel schwa was manually entered
                if(chosenVowelSpellingsArray[j][0] === letter) {
                    //if no spelling was given, then a random one is chosen
                    if(chosenVowelSpellingsArray[j].length <= 2) {
                        for(let i = 0; i < wordArray.length; i++) {
                            if(wordArray[i] === letter) {
                                wordArray[i] = randomLetter;
                            };
                        };
                    //if a spelling was manually given and the spelling is one letter
                    } else if(chosenVowelSpellingsArray[j].length === 3) {
                        for(let k = 0; k < chosenVowelSpellingsArray[j].length; k++) {
                            if(chosenVowelSpellingsArray[j][k-1] === "=") {
                                for(let i = 0; i < wordArray.length; i++) {
                                    if(wordArray[i] === letter) {
                                        wordArray[i] = chosenVowelSpellingsArray[j][k];
                                    };
                                };
                            };
                        };
                    //if a spelling was manually given and the spelling is two letters
                    } else if(chosenVowelSpellingsArray[j].length > 3) {
                        for(let k = 0; k < chosenVowelSpellingsArray[j].length; k++) {
                            if(chosenVowelSpellingsArray[j][k-1] === "=") {
                                for(let i = 0; i < wordArray.length; i++) {
                                    let newSpelling = chosenVowelSpellingsArray[j][k] + chosenVowelSpellingsArray[j][k+1];
                                    if(wordArray[i] === letter) {
                                        wordArray[i] = newSpelling;
                                    };
                                };
                            };
                        };
                    };
                };
            };


        } else {
            for(let i = 0; i < wordArray.length; i++) {
                if(wordArray[i] === letter) {
                    wordArray[i] = randomLetter;
                };
            };
        };
    };

    function spellIndividualLettersLong(letter, randomLetter) {
        //if vowels were manually chosen
        if(randomOption === false) {
            for(let j = 0; j < chosenVowelSpellingsArray.length; j++) {
                //if the vowel schwa was manually entered
                if(chosenVowelSpellingsArray[j][0] === letter && chosenVowelSpellingsArray[j][1] === "ː") {
                    //if no spelling was given, then a random one is chosen
                    if(chosenVowelSpellingsArray[j].length <= 2) {
                        for(let i = 0; i < wordArray.length; i++) {
                            if(wordArray[i] === letter && wordArray[i+1] === "ː") {
                                wordArray[i] = randomLetter;
                                wordArray.splice(i+1,1);
                            };
                        };
                    //if a spelling was manually given and the spelling is one letter
                    } else if(chosenVowelSpellingsArray[j].length === 4) {
                        for(let k = 0; k < chosenVowelSpellingsArray[j].length; k++) {
                            if(chosenVowelSpellingsArray[j][k-1] === "=") {
                                for(let i = 0; i < wordArray.length; i++) {
                                    if(wordArray[i] === letter && wordArray[i] === wordArray[i+1]) {
                                        wordArray[i] = chosenVowelSpellingsArray[j][k];
                                        wordArray.splice(i+1,1);
                                        
                                    };
                                };
                            };
                        };
                    //if a spelling was manually given and the spelling is two letters
                    } else if(chosenVowelSpellingsArray[j].length > 4) {
                        for(let k = 0; k < chosenVowelSpellingsArray[j].length; k++) {
                            if(chosenVowelSpellingsArray[j][k-1] === "=") {
                                for(let i = 0; i < wordArray.length; i++) {
                                    let newSpelling = chosenVowelSpellingsArray[j][k] + chosenVowelSpellingsArray[j][k+1];
                                    if(wordArray[i] === letter && wordArray[i] === wordArray[i+1]) {
                                        wordArray[i] = newSpelling;
                                        wordArray.splice(i+1,1);
                                        if(wordArray[i+1] === wordArray[i]) {
                                            wordArray.splice(i+1,1);
                                            wordArray.splice(i+1,1);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        } else {
            for(let i = 0; i < wordArray.length; i++) {
                if(wordArray[i] === letter && wordArray[i+1] === "ː") {
                    wordArray[i] = randomLetter;
                };
            };
        };
    };


    spellIndividualLettersLong("i", randomLongI());
    spellIndividualLettersLong("u", randomLongU());
    spellIndividualLettersLong("a", randomLongA());
    spellIndividualLettersLong("o", randomLongO());
    spellIndividualLettersLong("e", randomLongE());
    spellIndividualLettersLong("y", randomLongY());
    spellIndividualLettersLong("æ", randomLongAshSpelling());
    spellIndividualLettersLong("ʊ", "ûû");
    spellIndividualLettersLong("ə", randomLongSchwa());
    spellIndividualLettersLong("ɪ", "îî");
    spellIndividualLettersLong("ʉ", "üü");
    spellIndividualLettersLong("ɵ", "ǒ");
    spellIndividualLettersLong("ɘ", "ě");
    spellIndividualLettersLong("ɜ", "ĕ");
    spellIndividualLettersLong("ɞ", "ŏŏ");
    spellIndividualLettersLong("ʏ", randomLongNearHighY());
    spellIndividualLettersLong("ɯ", randomLongHighBackUnroundedU());
    spellIndividualLettersLong("ɤ", "òò");
    spellIndividualLettersLong("ʌ", "ùù");
    spellIndividualLettersLong("ɒ", randomLongLowBackUnroundedA());
    spellIndividualLettersLong("ø", randomLongRoundedO());
    spellIndividualLettersLong("ɛ", randomLongNearMidE());
    spellIndividualLettersLong("ɔ", randomLongNearMidO());
    spellIndividualLettersLong("œ", "œœ");
    spellIndividualLettersLong("ɑ", randomLongBackLowROundedA());
    spellIndividualLettersLong("ɐ", randomLongCentralA());

    spellIndividualLettersShort("i", "i");
    spellIndividualLettersShort("u", "u");
    spellIndividualLettersShort("a", "a");
    spellIndividualLettersShort("o", "o");
    spellIndividualLettersShort("e", "e");
    spellIndividualLettersShort("y", "y");
    spellIndividualLettersShort("æ", randomAshSpelling());
    spellIndividualLettersShort("ʊ", "û");
    spellIndividualLettersShort("ə", randomSchwaSpelling());
    spellIndividualLettersShort("ɪ", "î");
    spellIndividualLettersShort("ʉ", "ü");
    spellIndividualLettersShort("ɵ", "ǒ");
    spellIndividualLettersShort("ɘ", "ě");
    spellIndividualLettersShort("ɜ", "ĕ");
    spellIndividualLettersShort("ɞ", "ŏ");
    spellIndividualLettersShort("ʏ", randomNearHighRounded());
    spellIndividualLettersShort("ɯ", randomHighBackUnrouded());
    spellIndividualLettersShort("ɤ", "ò");
    spellIndividualLettersShort("ʌ", "ù");
    spellIndividualLettersShort("ɒ", randomLowBackUnrouded());
    spellIndividualLettersShort("ø", randomMidFrontRouded());
    spellIndividualLettersShort("ɛ", randomLowMidFrontUnrounded());
    spellIndividualLettersShort("ɔ", randomLowMidBackRounded());
    spellIndividualLettersShort("œ", "œ");
    spellIndividualLettersShort("ɑ", randomLowFrontRounded());
    spellIndividualLettersShort("ɐ", randomMidCentreRounded());

    let final = wordArray.join("");
    return final
};

export {spell, checkIfCanUseMacron};
