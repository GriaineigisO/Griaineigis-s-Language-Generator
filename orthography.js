

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
};

function randomUvularFricatives(wordArray) {
    //UVULAR FRICATIVES
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "χ" && allGlottalFricatives.length > 0 && allVelarFricatives.length > 0) {
           return "x";
        };
        if(wordArray[i] === "ʁ" && allVelarFricatives.length > 0) {
            return "ĝ";
        };
        if(wordArray[i] === "χ" && allGlottalFricatives.length > 0 && allVelarFricatives.length === 0 && allAspiratesArray.length === 0) {
            return "kh";
        };
        if(wordArray[i] === "χ" && allGlottalFricatives.length > 0 && allVelarFricatives.length === 0 && allAspiratesArray.length > 0) {
            return "x̂";
        };
        if(wordArray[i] === "χ" && allGlottalFricatives.length === 0 && allVelarFricatives.length === 0) {
            return "h";
        };
        if(wordArray[i] === "χ" && allGlottalFricatives.length === 0 && allVelarFricatives.length > 0) {
            return "kh";
        };
        if(wordArray[i] === "ʁ" && allVelarFricatives.length === 0 && allAspiratesArray.length === 0) {
            return "gh";
        };
        if(wordArray[i] === "ʁ" && allVelarFricatives.length === 0 && allAspiratesArray.length > 0) {
            return "ĝ";
        };
    };
};

function randomPalatal(wordArray) {
    //PALATAL
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "c" && randomNumPalatalFricative === 0) {
            return "c"
        }
        if(wordArray[i] === "ɟ" && randomNumPalatalFricative === 0) {
            return "gi"
        }
        if(wordArray[i] === "ç" && randomNumPalatalFricative === 0) {
            wordArray[i] = "hi"
        }
        if(wordArray[i] === "ʝ" && randomNumPalatalFricative === 0) {
            return "ghi"
        }
        if(wordArray[i] === "ɲ" && randomNumPalatalFricative === 0) {
            return "ni"
        }
        if(wordArray[i] === "ʎ" && randomNumPalatalFricative === 0) {
            return "li"
        }
        if(wordArray[i] === "c" && randomNumPalatalFricative === 1) {
            return "kj"
        }
        if(wordArray[i] === "ɟ" && randomNumPalatalFricative === 1) {
            return "gj"
        }
        if(wordArray[i] === "ç" && randomNumPalatalFricative === 1) {
           return "cj"
        }
        if(wordArray[i] === "ʝ" && randomNumPalatalFricative === 1) {
            return "ghj"
        }
        if(wordArray[i] === "ɲ" && randomNumPalatalFricative === 1) {
            return "nj"
        }
        if(wordArray[i] === "ʎ" && randomNumPalatalFricative === 1) {
            return "lj"
        }
        if(wordArray[i] === "c" && randomNumPalatalFricative > 1) {
            return "ḱ"
        }
        if(wordArray[i] === "ɟ" && randomNumPalatalFricative > 1) {
            return "ǵ"
        }
        if(wordArray[i] === "ç" && randomNumPalatalFricative > 1) {
            return "ç"
        };
        if(wordArray[i] === "ʝ" && randomNumPalatalFricative > 1) {
            return "ġ"
        };
        if(wordArray[i] === "ɲ" && randomNumPalatalFricative > 1) {
            return "ñ"
        };
        if(wordArray[i] === "ʎ" && randomNumPalatalFricative > 1 && consonants.includes("lː")) {
            return "ll"
        } else if (wordArray[i] === "ʎ") {
            return "ļ"
        };
    };
};

function randomGlottalStop(wordArray) {
    //GLOTTAL STOP
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ʔ" && allGlottalFricatives.length === 0 && allVelarFricatives.length === 0 && allUvularFricativesArray.length === 0) {
            return "h";
        } else if (wordArray[i] === "ʔ" && allUvularPlosivesArray.length === 0) {
            return "q";
        } else if (wordArray[i] === "ʔ") {
            return "'";
        };
    };
};

function randomDentalFricatives(wordArray) {
    //DENTAL FRICATIVES
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "θ" && randomDentalFricative === 0  && allAspiratesArray.length > 0) {
            return "þ";
        }
        if(wordArray[i] === "θ" && randomDentalFricative === 0  && allAspiratesArray.length === 0) {
            return "th";
        }
        if(wordArray[i] === "ð" && randomDentalFricative === 0) {
            return "ð";
        }
        if(wordArray[i] === "θ" && randomDentalFricative === 1 && allAspiratesArray.length === 0) {
            return "th";
        }
        if(wordArray[i] === "θ" && randomDentalFricative === 1  && allAspiratesArray.length > 0) {
            return "th";
        }
        if(wordArray[i] === "ð" && randomDentalFricative === 1 && allAspiratesArray.length === 0) {
            return "dh";
        }
    }
};

function randomBilabialFricatives(wordArray) {
    //BILABIAL FRICATIVES
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ɸ" && allAspiratesArray.length === 0) {
           return "ph";
        } else if(wordArray[i] === "ɸ" && allLabioDentalArray.length === 0) {
            return "f";
        } else if(wordArray[i] === "ɸ") {
            return "fh";
        };

        if(wordArray[i] === "β" && allAspiratesArray.length === 0) {
            return "bh";
        } else if(wordArray[i] === "β" && allLabioDentalArray.length === 0) {
            return "v";
        } else if(wordArray[i] === "β") {
           return "vh";
        }; 
    };
};

function randomRetroflexes(wordArray) {
    //RETROFLEXES
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ʈ") {
           return "ṭ"
        };
        if(wordArray[i] === "ɖ") {
           return "ḍ"
        };
        if(wordArray[i] === "ʂ") {
            return "ṣ"
        };
        if(wordArray[i] === "ʐ") {
            return "ẓ"
        };
        if(wordArray[i] === "ɭ") {
            return "ḷ"
        };
        if(wordArray[i] === "ɽ") {
            return "ṛ"
        };
        if(wordArray[i] === "ɳ") {
            return "ṇ"
        };
    };
};

function randomAspirates(wordArray) {
     //ASPIRATES
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ʰ" && voicingTrueOrFalse) {
            return "h" 
        } else if (voicingTrueOrFalse === false && allAspiratesArray.length > 0) {//if plosives have no voicing distinction, aspirates will be marked by using <p t k> while unvoiced non-aspirated will be <b d g>
            if(wordArray[i] === "p") {
                return "b";
            };
            if(wordArray[i] === "t") {
                return "d"
            };
            if(wordArray[i] === "k") {
                return "g"
            };
            if(wordArray[i] === "P") {
                wordArray.splice(i + 1, 1)
                return "p";
            };
            if(wordArray[i] === "T") {
                wordArray.splice(i + 1, 1)
                return "t";
            };
            if(wordArray[i] === "K") {
                wordArray.splice(i + 1, 1)
                return "k";
            } else if (wordArray[i] === "P") {
                return "ph";
            } else if (wordArray[i] === "B") {
                return "bh";
            } else if (wordArray[i] === "T") {
                return "th";
            } else if (wordArray[i] === "D") {
                return "dh";
            } else if (wordArray[i] === "K") {
                return "kh";
            } else if (wordArray[i] === "G") {
                return "gh";
            } else if (wordArray[i] === "1") {
                return "hp";
            } else if (wordArray[i] === "2") {
                return "kb";
            } else if (wordArray[i] === "3") {
                return "ht";
            } else if (wordArray[i] === "4") {
                return "hd";
            } else if (wordArray[i] === "5") {
                return "hk";
            } else if (wordArray[i] === "6") {
                return "hg";
            }
        };
    };
};

function randomPalatalised(wordArray) {
    let charsForPalatalised = ["!", "£", "$", "%", "^", "&", "*", "J", "K", "#", "@", "}", "{", "+", "-", ">", "<", "]", "[", "=", "?", "Q", "W", "E", "R", "F", "Y", "U", "I", "O", "H", "S", "M", "N", "X"];

    let palatalisedCons = ["p", "b", "t", "d", "k", "g", "r", "l", "s", "z", "x", "ɣ", "f", "v", "ɸ", "β", "θ", "ð", "h", "ɦ", "ħ", "c", "ʃ", "ʒ", "ʂ", "ʐ", "χ", "ʁ", "ɬ", "ɮ", "q", "ɢ", "m", "n", "ŋ"];
    
    for(let i = 0; i < wordArray.length; i++) {
        if(charsForPalatalised.includes(wordArray[i]) && randomNum === 0) {
            let index = charsForPalatalised.indexOf(wordArray[i])
            let cons = palatalisedCons[index];
            return cons + "j";
        }
        if(charsForPalatalised.includes(wordArray[i]) && randomNum === 1) {
           let index = charsForPalatalised.indexOf(wordArray[i])
            let cons = palatalisedCons[index];
            return cons + "j";
        }
        if(charsForPalatalised.includes(wordArray[i]) && randomNum > 2) {
            if(wordArray[i] === "$") {
                return "ț"
            }
            if(wordArray[i] === "%") {
                return "d̦";
            }
            if(wordArray[i] === "^") {
                return "ķ";
            }
            if(wordArray[i] === "g") {
                return "&";
            }
            if(wordArray[i] === "K") {
                return "ș";
            }
            if(wordArray[i] === "J") {
                return "ļ";
            }
            if(wordArray[i] === "N") {
                return "ņ";
            }
            if(wordArray[i] === "*") {
                return "ŗ";
            }            
        } else if(charsForPalatalised.includes(wordArray[i]) && randomNum === 2) {
            let index = charsForPalatalised.indexOf(wordArray[i])
            let cons = palatalisedCons[index];
            return cons + "j";
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

    //converts superscripts into single characters. This is needed to allow character+superscript combinations to be respelled
    function mergeCharAndSuperscript(char, superscript, newLetter, postOrPre) {
        if(postOrPre === "post") {
            for(let i = 0; i < wordArray.length; i++) {
                if(wordArray[i] === char && wordArray[i+1] === superscript) {
                    wordArray[i] = newLetter;
                    wordArray.splice(i+1,1);
                };
            };
        };

        if(postOrPre === "pre") {
            for(let i = 0; i < wordArray.length; i++) {
                if(wordArray[i] === char && wordArray[i-1] === superscript) {
                    wordArray[i] = newLetter;
                    wordArray.splice(i-1,1);
                };
            };
        };
    };

    mergeCharAndSuperscript("p", "ʰ", "P", "post");
    mergeCharAndSuperscript("b", "ʰ", "B", "post");
    mergeCharAndSuperscript("t", "ʰ", "T", "post");
    mergeCharAndSuperscript("d", "ʰ", "D", "post");
    mergeCharAndSuperscript("k", "ʰ", "K", "post");
    mergeCharAndSuperscript("g", "ʰ", "G", "post");
    mergeCharAndSuperscript("p", "ʰ", "1", "pre");
    mergeCharAndSuperscript("b", "ʰ", "2", "pre");
    mergeCharAndSuperscript("t", "ʰ", "3", "pre");
    mergeCharAndSuperscript("d", "ʰ", "4", "pre");
    mergeCharAndSuperscript("k", "ʰ", "5", "pre");
    mergeCharAndSuperscript("g", "ʰ", "6", "pre");

    mergeCharAndSuperscript("p", "ʲ", "!", "post");
    mergeCharAndSuperscript("b", "ʲ", "£", "post");
    mergeCharAndSuperscript("t", "ʲ", "$", "post");
    mergeCharAndSuperscript("d", "ʲ", "%", "post");
    mergeCharAndSuperscript("k", "ʲ", "^", "post");
    mergeCharAndSuperscript("g", "ʲ", "&", "post");
    mergeCharAndSuperscript("r", "ʲ", "*", "post");
    mergeCharAndSuperscript("l", "ʲ", "J", "post");
    mergeCharAndSuperscript("s", "ʲ", "K", "post");
    mergeCharAndSuperscript("z", "ʲ", "#", "post");
    mergeCharAndSuperscript("x", "ʲ", "@", "post");
    mergeCharAndSuperscript("ɣ", "ʲ", "}", "post");
    mergeCharAndSuperscript("f", "ʲ", "{", "post");
    mergeCharAndSuperscript("v", "ʲ", "+", "post");
    mergeCharAndSuperscript("ɸ", "ʲ", "-", "post");
    mergeCharAndSuperscript("β", "ʲ", ">", "post");
    mergeCharAndSuperscript("θ", "ʲ", "<", "post");
    mergeCharAndSuperscript("ð", "ʲ", "]", "post");
    mergeCharAndSuperscript("h", "ʲ", "[", "post");
    mergeCharAndSuperscript("ɦ", "ʲ", "=", "post");
    mergeCharAndSuperscript("ħ", "ʲ", "?", "post");
    mergeCharAndSuperscript("c", "ʲ", "Q", "post");
    mergeCharAndSuperscript("ʃ", "ʲ", "W", "post");
    mergeCharAndSuperscript("ʒ", "ʲ", "E", "post");
    mergeCharAndSuperscript("ʂ", "ʲ", "R", "post");
    mergeCharAndSuperscript("ʐ", "ʲ", "F", "post");
    mergeCharAndSuperscript("χ", "ʲ", "Y", "post");
    mergeCharAndSuperscript("ʁ", "ʲ", "U", "post");
    mergeCharAndSuperscript("ɬ", "ʲ", "I", "post");
    mergeCharAndSuperscript("ɮ", "ʲ", "O", "post");
    mergeCharAndSuperscript("q", "ʲ", "H", "post");
    mergeCharAndSuperscript("ɢ", "ʲ", "S", "post");
    mergeCharAndSuperscript("m", "ʲ", "M", "post");
    mergeCharAndSuperscript("n", "ʲ", "N", "post");
    mergeCharAndSuperscript("ŋ", "ʲ", "X", "post");
    
    
    
    
   
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

        //if the letter is a character plus a superscript character, both get merged into one string in one index
        // if(letter.length === 2) {
        //     let letterArray = Array.from(letter);
        //     letterArray[0] = letterArray[0] + letterArray[1];
        //     letterArray.splice(1,1);
        //     letter = letterArray.join("");
        // };

        let chosenJoinedArray = [];
        if(chosenSpellingsArray === chosenVowelSpellingsArray) {
            chosenJoinedArray = cloneArray(chosenVowelSpellingsArrayJoinedArray);
        } else {
            chosenJoinedArray = cloneArray(chosenConsonantSpellingsArrayJoinedArray);
        }

        //if sounds were manually chosen
        if(randomOption === false) {
            for(let j = 0; j < chosenSpellingsArray.length; j++) {

                //if chosenSpellingsArray[j][1] is a superscript character, it is merged with the previous character
                // if(chosenSpellingsArray[j][1] === "ʰ") {
                //     let spellingArray = Array.from(chosenSpellingsArray[j]);
                //     spellingArray[0] = spellingArray[0] + spellingArray[1];
                //     spellingArray.splice(1,0);
                //     chosenSpellingsArray[j] = spellingArray.join("");
                // }
                
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

                            //if the sound is a diphthong, or a combination of a sound plus superscript
                            for(let k = 0; k < chosenSpellingsArray[j].length; k++) {
                                
                                if(chosenSpellingsArray[j][k-1] === "=") {
                                    for(let i = 0; i < wordArray.length; i++) {
                                        let sound = wordArray[i] + wordArray[i+1];
                                        console.log(sound)
                                        if(sound === letter) {
                                            console.log("hello")
                                            wordArray[i] = chosenSpellingsArray[j][k];
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
                if(wordArray[i] === letter) {
                    wordArray[i] = randomLetter;
                };
            };
        };
    };

    //console.log(chosenConsonantSpellingsArray)
    // console.log(chosenConsonantSpellingsArray[0])

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
    spellIndividualLettersShort("χ", randomUvularFricatives(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ʁ", randomUvularFricatives(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ʔ", randomGlottalStop(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("c", randomPalatal(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ɟ", randomPalatal(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ç", randomPalatal(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ɲ", randomPalatal(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ʎ", randomPalatal(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("θ", randomDentalFricatives(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ð", randomDentalFricatives(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ɸ", randomBilabialFricatives(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("β", randomBilabialFricatives(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ʈ", randomRetroflexes(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ɖ", randomRetroflexes(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ʂ", randomRetroflexes(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ɭ", randomRetroflexes(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ɽ", randomRetroflexes(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ɳ", randomRetroflexes(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ʐ", randomRetroflexes(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("P", randomAspirates(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("K", randomAspirates(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("B", randomAspirates(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("T", randomAspirates(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("D", randomAspirates(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("G", randomAspirates(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("1", randomAspirates(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("2", randomAspirates(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("3", randomAspirates(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("4", randomAspirates(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("5", randomAspirates(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("6", randomAspirates(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("!", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("£", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("$", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("%", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("^", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("&", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("*", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("J", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("K", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("#", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("@", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("}", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("{", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("+", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("-", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort(">", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("<", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("]", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("[", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("=", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("?", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Q", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("W", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("E", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("R", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("F", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Y", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("U", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("I", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("O", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("H", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("S", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("M", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("N", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("X", randomPalatalised(wordArray), chosenConsonantSpellingsArray);

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
