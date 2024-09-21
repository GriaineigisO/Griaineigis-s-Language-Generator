

import {vowels, consonants, allGlottalFricatives, allVelarFricatives, allAspiratesArray, allUvularFricativesArray, allUvularPlosivesArray, allLabioDentalArray, chooseVoicing, voicingTrueOrFalse, chosenVowelSpellingsArray, chosenConsonantSpellingsArray} from './generatePhonology.js'
import { cloneArray } from './library.js';

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

function randomPostAlveolarS(wordArray) {
    //POST ALVEOLAR FRICATIVES AND AFFRICATES AND /J/
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ʧ" && randomNumAlveolarFricative < 16) {
           return "č";
        }
        if(wordArray[i] === "ʤ"&& randomNumAlveolarFricative < 16) {
           return "dž"
        }
        if(wordArray[i] === "ʃ" && randomNumAlveolarFricative < 16) {
            return "š"
        }
        if(wordArray[i] === "ʒ" && randomNumAlveolarFricative < 16) {
            return "ž"
        }
        if(wordArray[i] === "j" && randomNumAlveolarFricative < 16 ) {
            return "j";
        }

        if(wordArray[i] === "j" && randomNumAlveolarFricative === 16) {
            return "y"
         }
        if(wordArray[i] === "ʧ" && randomNumAlveolarFricative === 16) {
            return "ch";
        }
        if(wordArray[i] === "ʤ"&& randomNumAlveolarFricative === 16) {
            return "j";
        }
        if(wordArray[i] === "ʃ" && randomNumAlveolarFricative === 16) {
            return "sh";
        }
        if(wordArray[i] === "ʒ" && randomNumAlveolarFricative === 16) {
            return "zh"
        }

        if(wordArray[i] === "ʧ" && randomNumAlveolarFricative === 15) {
            return "tsj";
        }
        if(wordArray[i] === "ʤ" && randomNumAlveolarFricative === 15) {
            return "dzj"
        }
        if(wordArray[i] === "ʃ" && randomNumAlveolarFricative === 15) {
            return "sj";
        }
        if(wordArray[i] === "ʒ" && randomNumAlveolarFricative === 15) {
            return "zj";
        }
        if(wordArray[i] === "j" && randomNumAlveolarFricative === 15) {
            return "j";
        }
    }
};

function randomVelarNasal(wordArray) {
     //VELAR NASAL
     for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ŋ" && allVelarFricatives.includes(wordArray[i + 1])) {
            return "n"
        } else if(wordArray[i] === "ŋ" && wordArray[i + 1] === "k") {
            return "n";
        } else if(wordArray[i] === "ŋ" && wordArray[i + 1] === "g") {
            return "n";
        }  else if(wordArray[i] === "ŋ") {
            return "ng";
        }
    }
}

function randomVelarFricative(wordArray) {
    //VELAR FRICATIVES 
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "x" && allGlottalFricatives.length > 0) {
            return "kh"
        }
        if(wordArray[i] === "x" && allGlottalFricatives.length > 0 && allAspiratesArray.length > 0) {
            return "ch"
        }
        if(wordArray[i] === "x" && allGlottalFricatives.length === 0  && allAspiratesArray.length === 0) {
            return "h"
        }
        if(wordArray[i] === "ɣ") {
            return "gh"
        }
        if(wordArray[i] === "ɣ" && allAspiratesArray.length > 0 ) {
            return "ɣ"
        }
    }
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

    let chosenVowelSpellingsArrayJoined = chosenVowelSpellingsArray.join("");
    let chosenVowelSpellingsArrayJoinedArray = Array.from(chosenVowelSpellingsArrayJoined)

    let chosenConsonantSpellingsArrayJoined = chosenConsonantSpellingsArray.join("");
    let chosenConsonantSpellingsArrayJoinedArray = Array.from(chosenConsonantSpellingsArrayJoined)
    
    function spellIndividualLettersLong(letter, randomLetter, chosenSpellingsArray) {
        //if vowels were manually chosen
        let chosenJoinedArray = [];
        if(chosenSpellingsArray === chosenVowelSpellingsArray) {
            chosenJoinedArray = cloneArray(chosenVowelSpellingsArrayJoinedArray);
        } else {
            chosenJoinedArray = cloneArray(chosenConsonantSpellingsArrayJoinedArray);
        }

        if(randomOption === false) {
                for(let j = 0; j < chosenSpellingsArray.length; j++) {
                    if(chosenSpellingsArray[j][0] === letter && chosenSpellingsArray[j][1] === "ː") {

                        //if a user did not enter a sound manually, but the sound arose via sound changes, it is assigned a random spelling
                        if(chosenJoinedArray.includes(letter) === false) {
                            for(let i = 0; i < wordArray.length; i++) {
                                if(wordArray[i] === letter && wordArray[i+1] === "ː") {
                                    wordArray[i] = randomLetter;
                                    wordArray.splice(i+1,1);
                                };
                            };
                        } else {

                        //if no spelling was given, then a random one is chosen
                        if(chosenSpellingsArray[j].length <= 2) {
                            for(let i = 0; i < wordArray.length; i++) {
                                if(wordArray[i] === letter && wordArray[i+1] === "ː") {
                                    wordArray[i] = randomLetter;
                                    wordArray.splice(i+1,1);
                                };
                            };
                        //if a spelling was manually given and the spelling is one letter
                        } else if(chosenSpellingsArray[j].length === 4) {
                            for(let k = 0; k < chosenSpellingsArray[j].length; k++) {
                                if(chosenSpellingsArray[j][k-1] === "=") {
                                    for(let i = 0; i < wordArray.length; i++) {
                                        if(wordArray[i] === letter && wordArray[i] === wordArray[i+1]) {
                                            wordArray[i] = chosenSpellingsArray[j][k];
                                            wordArray.splice(i+1,1);
                                        };
                                    };
                                };
                            };
                        //if a spelling was manually given and the spelling is two letters
                        } else if(chosenSpellingsArray[j].length > 4) {
                            for(let k = 0; k < chosenSpellingsArray[j].length; k++) {
                                if(chosenSpellingsArray[j][k-1] === "=") {
                                    for(let i = 0; i < wordArray.length; i++) {
                                        let newSpelling = chosenSpellingsArray[j][k] + chosenSpellingsArray[j][k+1];
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
            };
        
        } else {
            for(let i = 0; i < wordArray.length; i++) {
                if(wordArray[i] === letter && wordArray[i+1] === "ː") {
                    wordArray[i] = randomLetter;
                };
            };
        };
    };
    
    function spellIndividualLettersShort(letter, randomLetter, chosenSpellingsArray) {

        let chosenJoinedArray = [];
        if(chosenSpellingsArray === chosenVowelSpellingsArray) {
            chosenJoinedArray = cloneArray(chosenVowelSpellingsArrayJoinedArray);
        } else {
            chosenJoinedArray = cloneArray(chosenConsonantSpellingsArrayJoinedArray);
        }

        //if vowels were manually chosen
        if(randomOption === false) {
            for(let j = 0; j < chosenSpellingsArray.length; j++) {
                //if a user did not enter a sound manually, but the sound arose via sound changes, it is assigned a random spelling
                if(chosenJoinedArray.includes(letter) === false) {
                    for(let i = 0; i < wordArray.length; i++) {
                        if(wordArray[i] === letter) {
                            wordArray[i] = randomLetter;
                        };
                    };
                } else {
                    if(chosenSpellingsArray[j][0] === letter) {
                        //if no spelling was given, then a random one is chosen
                        if(chosenSpellingsArray[j].length <= 2) {
                            for(let i = 0; i < wordArray.length; i++) {
                                if(wordArray[i] === letter) {
                                    wordArray[i] = randomLetter;
                                };
                            };
                        //if a spelling was manually given and the spelling is one letter
                        } else if(chosenSpellingsArray[j].length === 3) {
                            for(let k = 0; k < chosenSpellingsArray[j].length; k++) {
                                if(chosenSpellingsArray[j][k-1] === "=") {
                                    for(let i = 0; i < wordArray.length; i++) {
                                        if(wordArray[i] === letter) {
                                            wordArray[i] = chosenSpellingsArray[j][k];
                                        };
                                    };
                                };
                            };
                        //if a spelling was manually given and the spelling is two letters
                        } else if(chosenSpellingsArray[j].length > 3) {
                            for(let k = 0; k < chosenSpellingsArray[j].length; k++) {
                                // the condition chosenVowelSpellingsArray[j].indexOf("=") === 1 is to check that the index is not a single letter being applied to a long sound, as such an index is also more than 3 characters long but not the desired index here
                                if(chosenSpellingsArray[j][k-1] === "=" && chosenSpellingsArray[j].indexOf("=") === 1) {
                                    for(let i = 0; i < wordArray.length; i++) {
                                        let newSpelling = chosenSpellingsArray[j][k] + chosenSpellingsArray[j][k+1];
                                        if(wordArray[i] === letter) {
                                            wordArray[i] = newSpelling;
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
                if(wordArray[i] === letter) {
                    wordArray[i] = randomLetter;
                };
            };
        };
    };

    spellIndividualLettersLong("i", randomLongI(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("u", randomLongU(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("a", randomLongA(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("o", randomLongO(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("e", randomLongE(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("y", randomLongY(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("æ", randomLongAshSpelling(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("ʊ", "ûû", chosenVowelSpellingsArray);
    spellIndividualLettersLong("ə", randomLongSchwa(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("ɪ", "îî", chosenVowelSpellingsArray);
    spellIndividualLettersLong("ʉ", "üü", chosenVowelSpellingsArray);
    spellIndividualLettersLong("ɵ", "ǒ", chosenVowelSpellingsArray);
    spellIndividualLettersLong("ɘ", "ě",chosenVowelSpellingsArray);
    spellIndividualLettersLong("ɜ", "ĕ", chosenVowelSpellingsArray);
    spellIndividualLettersLong("ɞ", "ŏŏ", chosenVowelSpellingsArray);
    spellIndividualLettersLong("ʏ", randomLongNearHighY(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("ɯ", randomLongHighBackUnroundedU(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("ɤ", "òò", chosenVowelSpellingsArray);
    spellIndividualLettersLong("ʌ", "ùù", chosenVowelSpellingsArray);
    spellIndividualLettersLong("ɒ", randomLongLowBackUnroundedA(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("ø", randomLongRoundedO(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("ɛ", randomLongNearMidE(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("ɔ", randomLongNearMidO(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("œ", "œœ", chosenVowelSpellingsArray);
    spellIndividualLettersLong("ɑ", randomLongBackLowROundedA(), chosenVowelSpellingsArray);
    spellIndividualLettersLong("ɐ", randomLongCentralA(), chosenVowelSpellingsArray);
    

    spellIndividualLettersShort("i", "i", chosenVowelSpellingsArray);
    spellIndividualLettersShort("u", "u", chosenVowelSpellingsArray);
    spellIndividualLettersShort("a", "a", chosenVowelSpellingsArray);
    spellIndividualLettersShort("o", "o", chosenVowelSpellingsArray);
    spellIndividualLettersShort("e", "e", chosenVowelSpellingsArray);
    spellIndividualLettersShort("y", "y", chosenVowelSpellingsArray);
    spellIndividualLettersShort("æ", randomAshSpelling(), chosenVowelSpellingsArray);
    spellIndividualLettersShort("ʊ", "û", chosenVowelSpellingsArray);
    spellIndividualLettersShort("ə", randomSchwaSpelling(), chosenVowelSpellingsArray);
    spellIndividualLettersShort("ɪ", "î", chosenVowelSpellingsArray);
    spellIndividualLettersShort("ʉ", "ü", chosenVowelSpellingsArray);
    spellIndividualLettersShort("ɨ", "ï", chosenVowelSpellingsArray);
    spellIndividualLettersShort("ɵ", "ǒ", chosenVowelSpellingsArray);
    spellIndividualLettersShort("ɘ", "ě", chosenVowelSpellingsArray);
    spellIndividualLettersShort("ɜ", "ĕ", chosenVowelSpellingsArray);
    spellIndividualLettersShort("ɞ", "ŏ", chosenVowelSpellingsArray);
    spellIndividualLettersShort("ʏ", randomNearHighRounded(), chosenVowelSpellingsArray);
    spellIndividualLettersShort("ɯ", randomHighBackUnrouded(), chosenVowelSpellingsArray);
    spellIndividualLettersShort("ɤ", "ò", chosenVowelSpellingsArray);
    spellIndividualLettersShort("ʌ", "ù", chosenVowelSpellingsArray);
    spellIndividualLettersShort("ɒ", randomLowBackUnrouded(), chosenVowelSpellingsArray);
    spellIndividualLettersShort("ø", randomMidFrontRouded(), chosenVowelSpellingsArray);
    spellIndividualLettersShort("ɛ", randomLowMidFrontUnrounded(), chosenVowelSpellingsArray);
    spellIndividualLettersShort("ɔ", randomLowMidBackRounded(), chosenVowelSpellingsArray);
    spellIndividualLettersShort("œ", "œ", chosenVowelSpellingsArray);
    spellIndividualLettersShort("ɑ", randomLowFrontRounded(), chosenVowelSpellingsArray);
    spellIndividualLettersShort("ɐ", randomMidCentreRounded(), chosenVowelSpellingsArray);

    spellIndividualLettersShort("ʃ", randomPostAlveolarS(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ʒ", randomPostAlveolarS(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("j", randomPostAlveolarS(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ʧ", randomPostAlveolarS(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ʤ", randomPostAlveolarS(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ŋ", randomVelarNasal(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("x", randomVelarFricative(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ɣ", randomVelarFricative(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("h", "h", chosenConsonantSpellingsArray);

    //removes redunant "t" and "d" before č and dž
    for(let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "t" && wordArray[i+1] === "č") {
            wordArray.splice(i,1);
        }
        if (wordArray[i] === "d" && wordArray[i+1] === "dž") {
            wordArray.splice(i,1);
        }
    };
    let final = wordArray.join("");
    return final
};

export {spell, checkIfCanUseMacron};
