

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
        } else if (voicingTrueOrFalse === false && allAspiratesArray.length > 0) {
            //if plosives have no voicing distinction, aspirates will be marked by using <p t k> while unvoiced non-aspirated will be <b d g>
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
            }
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
            };
    };
};

function randomPalatalised(wordArray) {
    let charsForPalatalised = ["!", "£", "$", "%", "^", "&", "*", "J", "K", "#", "@", "}", "{", "+", "-", ">", "<", "]", "[", "=", "?", "Q", "W", "E", "R", "F", "Y", "U", "I", "O", "H", "S", "M", "N", "X", "Ã", "Ä", "Å", "Æ", "Ç", "ϰ", "ϱ", "ϡ", "Ϩ"];

    let palatalisedCons = ["p", "b", "t", "d", "k", "g", "r", "l", "s", "z", "x", "ɣ", "f", "v", "ɸ", "β", "θ", "ð", "h", "ɦ", "ħ", "c", "ʃ", "ʒ", "ʂ", "ʐ", "χ", "ʁ", "ɬ", "ɮ", "q", "ɢ", "m", "n", "ŋ", "ʔ", "c", "ɟ", "ʧ", "ʤ", "ʈ", "ɖ", "ɽ", "ɭ"];
    
    for(let i = 0; i < wordArray.length; i++) {
        if(charsForPalatalised.includes(wordArray[i]) && randomNum === 0) {
            let index = charsForPalatalised.indexOf(wordArray[i])
            let cons = palatalisedCons[index];
            return cons + "j";
        }
        if(charsForPalatalised.includes(wordArray[i]) && randomNum === 1) {
           let index = charsForPalatalised.indexOf(wordArray[i])
            let cons = palatalisedCons[index];
            return cons + "ʲ";
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

function randomLabialised(wordArray) {
    let charsForLabialised = ["C", "V", "Z", "L", ";", "¡", "¢", "¤", "¥", "¦", "§", "¨", "©", "ª", "«", "¬", "®", "¯", "°", "±", "²", "³", "´", "µ", "¶", "·", "¸", "¹", "»", "¼", "½", "¾", "¿", "À", "Á", "Â", "È", "É", "Ê", "Ë", "ʈ", "ɖ", "ɽ"];

    let labialisedCons = ["p", "b", "t", "d", "k", "g", "r", "l", "s", "z", "x", "ɣ", "f", "v", "ɸ", "β", "θ", "ð", "h", "ɦ", "ħ", "c", "ʃ", "ʒ", "ʂ", "ʐ", "χ", "ʁ", "ɬ", "ɮ", "q", "ɢ", "ʔ", "m", "n", "ŋ", "c", "ɟ", "ʧ", "ʤ", "а", "б", "в"];

    for(let i = 0; i < wordArray.length; i++) {
        let randomNum = Math.floor(Math.random() * 3)
        if(charsForLabialised.includes(wordArray[i]) && randomNum === 3) {
            let index = charsForLabialised.indexOf(wordArray[i])
            let cons = labialisedCons[index];
            return cons + "w";
        } else if(charsForLabialised.includes(wordArray[i]) && randomNum !== 3) {
            let index = charsForLabialised.indexOf(wordArray[i])
            let cons = labialisedCons[index];
            return cons + "ʷ";
        };
    };
};

function randomAspiratedPalatalised(wordArray) {
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ʰ" && wordArray[i] === "ʲ" && voicingTrueOrFalse) {
            if(randomNum === 0) {
                return "hj"
            } else if(randomNum > 1) {
                 return "hʲ"
            }
             
        } else if (voicingTrueOrFalse === false && allAspiratesArray.length > 0) {//if plosives have no voicing distinction, aspirates will be marked by using <p t k> while unvoiced non-aspirated will be <b d g>
            if(wordArray[i] === "Ì") {
                if(randomNum === 0) {
                    return "bj"
                } else if(randomNum > 1) {
                    return "bʲ"
                };
            };
            if(wordArray[i] === "Î") {
                if(randomNum === 0) {
                    return "dj"
                } else if(randomNum > 1) {
                    return "dʲ"
                };
            };
            if(wordArray[i] === "Ð") {
                if(randomNum === 0) {
                    return "gj"
                } else if(randomNum > 1) {
                    return "gʲ"
                };
        };
    }  else if (wordArray[i] === "Ì") {
                if(randomNum === 0) {
                    return "phj"
                } else if(randomNum > 1) {
                    return "phʲ"
                };
            } else if (wordArray[i] === "Í") {
                if(randomNum === 0) {
                    return "bhj"
                } else if(randomNum > 1) {
                    return "bhʲ"
                };
            } else if (wordArray[i] === "Î") {
                console.log("hello")
                if(randomNum === 0) {
                    return "thj"
                } else if(randomNum > 1) {
                    return "thʲ"
                };
            } else if (wordArray[i] === "Ï") {
                if(randomNum === 0) {
                    return "dhj"
                } else if(randomNum > 1) {
                    return "dhʲ"
                };
            } else if (wordArray[i] === "Ð") {
                if(randomNum === 0) {
                    return "khj"
                } else if(randomNum > 1) {
                    return "khʲ"
                };
            } else if (wordArray[i] === "Ñ") {
                if(randomNum === 0) {
                    return "ghj"
                } else if(randomNum > 1) {
                    return "ghʲ"
                };
            } else if (wordArray[i] === "Ó") {
                if(randomNum === 0) {
                    return "rhj"
                } else if(randomNum > 1) {
                    return "rhʲ"
                };
            } else if (wordArray[i] === "Ó") {
                if(randomNum === 0) {
                    return "lhj"
                } else if(randomNum > 1) {
                    return "lhʲ"
                };
            } else if (wordArray[i] === "Ô") {
                if(randomNum === 0) {
                    return "shj"
                } else if(randomNum > 1) {
                    return "shʲ"
                };
            } else if (wordArray[i] === "д") {
                if(randomNum === 0) {
                    return "ṭhj"
                } else if(randomNum > 1) {
                    return "ṭhʲ"
                };
            } else if (wordArray[i] === "е") {
                if(randomNum === 0) {
                    return "ḍhj"
                } else if(randomNum > 1) {
                    return "ḍhʲ"
                };
            } else if (wordArray[i] === "ж") {
                if(randomNum === 0) {
                    return "ṛhj"
                } else if(randomNum > 1) {
                    return "ṛhʲ"
                };
            } else if (wordArray[i] === "Õ") {
                if(randomNum === 0) {
                    return "zhj"
                } else if(randomNum > 1) {
                    return "zhʲ"
                };
            } else if (wordArray[i] === "Ö") {
                if(allGlottalFricatives.length > 0) {
                    if(randomNum === 0) {
                    return "khhj"
                } else if(randomNum > 1) {
                    return "khhʲ"
                };
                }
                if(allGlottalFricatives.length > 0 && allAspiratesArray.length > 0) {
                    if(randomNum === 0) {
                    return "chhj"
                } else if(randomNum > 1) {
                    return "chhʲ"
                };
                }
                if(allGlottalFricatives.length === 0  &&    allAspiratesArray.length === 0) {
                    if(randomNum === 0) {
                    return "hhj"
                } else if(randomNum > 1) {
                    return "hhʲ"
                };
                }
            } else if (wordArray[i] === "Ø") {
                if(allAspiratesArray.length === 0) {
                    if(randomNum === 0) {
                    return "ghj"
                } else if(randomNum > 1) {
                    return "ghʲ"
                };
                }
                if(allAspiratesArray.length > 0 ) {
                    if(randomNum === 0) {
                    return "ɣhj"
                } else if(randomNum > 1) {
                    return "ɣhʲ"
                };
                }
            } else if (wordArray[i] === "Ù") {
                if(randomNum === 0) {
                    return "fhj"
                } else if(randomNum > 1) {
                    return "fhʲ"
                };
            } else if (wordArray[i] === "Ú") {
                if(randomNum === 0) {
                    return "vhj"
                } else if(randomNum > 1) {
                    return "vhʲ"
                };
            } else if (wordArray[i] === "Û") {
                if(allAspiratesArray.length === 0) {
                    if(randomNum === 0) {
                    return "phj"
                } else if(randomNum > 1) {
                    return "phʲ"
                };
                } else if(allLabioDentalArray.length === 0) {
                    if(randomNum === 0) {
                    return "fhj"
                } else if(randomNum > 1) {
                    return "fhʲ"
                };
                } else {
                    if(randomNum === 0) {
                    return "fhhj"
                } else if(randomNum > 1) {
                    return "fhhʲ"
                };
                };
            }  else if (wordArray[i] === "Ü") {
                if(allAspiratesArray.length === 0) {
                    if(randomNum === 0) {
                    return "bhj"
                } else if(randomNum > 1) {
                    return "bhʲ"
                };
                } else if(allLabioDentalArray.length === 0) {
                    if(randomNum === 0) {
                    return "vhj"
                } else if(randomNum > 1) {
                    return "vhʲ"
                };
                } else {
                    if(randomNum === 0) {
                    return "vhhj"
                } else if(randomNum > 1) {
                    return "vhhʲ"
                };
                };
            }  else if (wordArray[i] === "Ý") {
                if(randomDentalFricative === 0  && allAspiratesArray.length > 0) {
                    if(randomNum === 0) {
                    return "þhj"
                } else if(randomNum > 1) {
                    return "þhʲ"
                };
                }
                if(randomDentalFricative === 0  && allAspiratesArray.length === 0) {
                    if(randomNum === 0) {
                    return "thj"
                } else if(randomNum > 1) {
                    return "thʲ"
                };
                }
                if(randomDentalFricative === 1 && allAspiratesArray.length === 0) {
                    if(randomNum === 0) {
                    return "thj"
                } else if(randomNum > 1) {
                    return "thʲ"
                };
                }
                if(randomDentalFricative === 1  && allAspiratesArray.length > 0) {
                    if(randomNum === 0) {
                    return "thj"
                } else if(randomNum > 1) {
                    return "thʲ"
                };
                }
            } else if (wordArray[i] === "Þ") {
                if(randomDentalFricative === 0) {
                    if(randomNum === 0) {
                    return "ðhj"
                } else if(randomNum > 1) {
                    return "ðhʲ"
                };
                }
                if(randomDentalFricative === 1 && allAspiratesArray.length === 0) {
                    if(randomNum === 0) {
                    return "dhj"
                } else if(randomNum > 1) {
                    return "dhʲ"
                };
                }
            } else if (wordArray[i] === "Ƃ") {
                if(randomNumAlveolarFricative < 16) {
                    if(randomNum === 0) {
                        return "šhj"
                    } else if(randomNum > 1) {
                        return "šhʲ"
                    };
                }
                if(randomNumAlveolarFricative === 16) {
                    if(randomNum === 0) {
                        return "shhj"
                    } else if(randomNum > 1) {
                        return "shhʲ"
                    };
                }
                if(randomNumAlveolarFricative === 15) {
                    if(randomNum === 0) {
                        return "sjhj"
                    } else if(randomNum > 1) {
                        return "sjhʲ"
                    };
                }
            }  else if (wordArray[i] === "ƃ") {
                if(randomNumAlveolarFricative < 16) {
                    if(randomNum === 0) {
                        return "žhj"
                    } else if(randomNum > 1) {
                        return "žhʲ"
                    };
                }
                if(randomNumAlveolarFricative === 16) {
                    if(randomNum === 0) {
                        return "zhhj"
                    } else if(randomNum > 1) {
                        return "zhhʲ"
                    };
                }
                if(randomNumAlveolarFricative === 15) {
                    if(randomNum === 0) {
                        return "zjhj"
                    } else if(randomNum > 1) {
                        return "zjhʲ"
                    };
                }
            }  else if (wordArray[i] === "Ƅ") {
                if(randomNum === 0) {
                    return "ṣhj"
                } else if(randomNum > 1) {
                    return "ṣhʲ"
                };
            }  else if (wordArray[i] === "Ƅ") {
                if(randomNum === 0) {
                    return "ẓhj"
                } else if(randomNum > 1) {
                    return "ẓhʲ"
                };
            } else if (wordArray[i] === "Ɔ") {
                if(allGlottalFricatives.length > 0 && allVelarFricatives.length > 0) {
                    if(randomNum === 0) {
                        return "xhj"
                    } else if(randomNum > 1) {
                        return "xhʲ"
                    };
                };
                if(allGlottalFricatives.length > 0 && allVelarFricatives.length === 0 && allAspiratesArray.length === 0) {
                    if(randomNum === 0) {
                        return "khhj"
                    } else if(randomNum > 1) {
                        return "khhʲ"
                    };
                };
                if(allGlottalFricatives.length > 0 && allVelarFricatives.length === 0 && allAspiratesArray.length > 0) {
                     if(randomNum === 0) {
                        return "x̂hj"
                    } else if(randomNum > 1) {
                        return "x̂hʲ"
                    };
                };
                if(allGlottalFricatives.length === 0 && allVelarFricatives.length === 0) {
                    if(randomNum === 0) {
                        return "hhj"
                    } else if(randomNum > 1) {
                        return "hhʲ"
                    };
                };
                if(allGlottalFricatives.length === 0 && allVelarFricatives.length > 0) {
                    if(randomNum === 0) {
                        return "khhj"
                    } else if(randomNum > 1) {
                        return "khhʲ"
                    };
                };
            } else if (wordArray[i] === "Ƈ") {
                if(allVelarFricatives.length > 0) {
                    if(randomNum === 0) {
                        return "ĝhj"
                    } else if(randomNum > 1) {
                        return "ĝhʲ"
                    };
                };
                if(allVelarFricatives.length === 0 && allAspiratesArray.length === 0) {
                    if(randomNum === 0) {
                        return "ghhj"
                    } else if(randomNum > 1) {
                        return "ghhʲ"
                    };
                };
                if(allVelarFricatives.length === 0 && allAspiratesArray.length > 0) {
                   if(randomNum === 0) {
                        return "ĝhj"
                    } else if(randomNum > 1) {
                        return "ĝhʲ"
                    };
                };
            } else if (wordArray[i] === "ƈ") {
                if(randomNum === 0) {
                    return "ɬhj"
                } else if(randomNum > 1) {
                    return "ɬhʲ"
                };
            }  else if (wordArray[i] === "Ɖ") {
                if(randomNum === 0) {
                    return "ɮhj"
                } else if(randomNum > 1) {
                    return "ɮhʲ"
                };
            }  else if (wordArray[i] === "Ɗ") {
                if(randomNum === 0) {
                    return "qhj"
                } else if(randomNum > 1) {
                    return "qhʲ"
                };
            }   else if (wordArray[i] === "Ƌ") {
                if(randomNum === 0) {
                    return "ɢhj"
                } else if(randomNum > 1) {
                    return "ɢhʲ"
                };
            }  else if (wordArray[i] === "ƌ") {
                if(allGlottalFricatives.length === 0 && allVelarFricatives.length === 0 && allUvularFricativesArray.length === 0) {
                   if(randomNum === 0) {
                    return "hhj"
                } else if(randomNum > 1) {
                    return "hhʲ"
                };
                } else if (allUvularPlosivesArray.length === 0) {
                    if(randomNum === 0) {
                    return "qhj"
                } else if(randomNum > 1) {
                    return "qhʲ"
                };
                } else if (wordArray[i] === "ʔ") {
                    if(randomNum === 0) {
                    return "'s'hj"
                } else if(randomNum > 1) {
                    return "'hʲ"
                };
                };
            } else if (wordArray[i] === "Ƒ") {
                if(randomNumPalatalFricative === 0) {
                    if(randomNum === 0) {
                        return "chj"
                    } else if(randomNum > 1) {
                        return "chʲ"
                    };
                }
                if(randomNumPalatalFricative === 1) {
                    if(randomNum === 0) {
                        return "kjhj"
                    } else if(randomNum > 1) {
                        return "kjhʲ"
                    };
                }
                if(randomNumPalatalFricative > 1) {
                    if(randomNum === 0) {
                        return "ḱhj"
                    } else if(randomNum > 1) {
                        return "ḱhʲ"
                    };
                }
            }else if (wordArray[i] === "ƒ") {
                if(randomNumPalatalFricative === 0) {
                    if(randomNum === 0) {
                        return "gihj"
                    } else if(randomNum > 1) {
                        return "gihʲ"
                    };
                }
                if(randomNumPalatalFricative === 1) {
                    if(randomNum === 0) {
                        return "gjhj"
                    } else if(randomNum > 1) {
                        return "gjhʲ"
                    };
                }
                if(randomNumPalatalFricative > 1) {
                    if(randomNum === 0) {
                        return "ǵhj"
                    } else if(randomNum > 1) {
                        return "ǵhʲ"
                    };
                }
            } else if (wordArray[i] === "Ɠ") {
                 if(randomNumAlveolarFricative < 16) {
                    if(randomNum === 0) {
                        return "čhj"
                    } else if(randomNum > 1) {
                        return "čhʲ"
                    };
                }
                if(randomNumAlveolarFricative === 16) {
                    if(randomNum === 0) {
                        return "chhj"
                    } else if(randomNum > 1) {
                        return "chhʲ"
                    };
                }
                if(randomNumAlveolarFricative === 15) {
                    if(randomNum === 0) {
                        return "tsjhj"
                    } else if(randomNum > 1) {
                        return "tsjhʲ"
                    };
                }
            } else if (wordArray[i] === "Ɣ") {
                 if(randomNumAlveolarFricative < 16) {
                    if(randomNum === 0) {
                        return "džhj"
                    } else if(randomNum > 1) {
                        return "džhʲ"
                    };
                }
                if(randomNumAlveolarFricative === 16) {
                    if(randomNum === 0) {
                        return "jhy"
                    } else if(randomNum > 1) {
                        return "jhʲ"
                    };
                }
                if(randomNumAlveolarFricative === 15) {
                    if(randomNum === 0) {
                        return "dzjhj"
                    } else if(randomNum > 1) {
                        return "dzjhʲ"
                    };
                }
            }
}
};

function randomAspiratedLabialised(wordArray) {
    
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

    function mergeCharAndTwoSuperscript(char, superscript1, superscript2, newLetter) {
        for(let i = 0; i < wordArray.length; i++) {
            if(wordArray[i] === char && wordArray[i+1] === superscript1 && wordArray[i+2] === superscript2) {
                wordArray[i] = newLetter;
                wordArray.splice(i+1,2);
            };
        };
    };

    mergeCharAndTwoSuperscript("p", "ʰ", "ʲ", "Ì");
    mergeCharAndTwoSuperscript("b", "ʰ", "ʲ", "Í");
    mergeCharAndTwoSuperscript("t", "ʰ", "ʲ", "Î");
    mergeCharAndTwoSuperscript("d", "ʰ", "ʲ", "Ï");
    mergeCharAndTwoSuperscript("k", "ʰ", "ʲ", "Ð");
    mergeCharAndTwoSuperscript("g", "ʰ", "ʲ", "Ñ");
    mergeCharAndTwoSuperscript("r", "ʰ", "ʲ", "Ò");
    mergeCharAndTwoSuperscript("l", "ʰ", "ʲ", "Ó");
    mergeCharAndTwoSuperscript("s", "ʰ", "ʲ", "Ô");
    mergeCharAndTwoSuperscript("z", "ʰ", "ʲ", "Õ");
    mergeCharAndTwoSuperscript("x", "ʰ", "ʲ", "Ö");
    mergeCharAndTwoSuperscript("ɣ", "ʰ", "ʲ", "Ø");
    mergeCharAndTwoSuperscript("f", "ʰ", "ʲ", "Ù");
    mergeCharAndTwoSuperscript("v", "ʰ", "ʲ", "Ú");
    mergeCharAndTwoSuperscript("ɸ", "ʰ", "ʲ", "Û");
    mergeCharAndTwoSuperscript("β", "ʰ", "ʲ", "Ü");
    mergeCharAndTwoSuperscript("θ", "ʰ", "ʲ", "Ý");
    mergeCharAndTwoSuperscript("ð", "ʰ", "ʲ", "Þ");
    mergeCharAndTwoSuperscript("ʃ", "ʰ", "ʲ", "Ƃ");
    mergeCharAndTwoSuperscript("ʒ", "ʰ", "ʲ", "ƃ");
    mergeCharAndTwoSuperscript("ʂ", "ʰ", "ʲ", "Ƅ");
    mergeCharAndTwoSuperscript("ʐ", "ʰ", "ʲ", "ƅ");
    mergeCharAndTwoSuperscript("χ", "ʰ", "ʲ", "Ɔ");
    mergeCharAndTwoSuperscript("ʁ", "ʰ", "ʲ", "Ƈ");
    mergeCharAndTwoSuperscript("ɬ", "ʰ", "ʲ", "ƈ");
    mergeCharAndTwoSuperscript("ɮ", "ʰ", "ʲ", "Ɖ");
    mergeCharAndTwoSuperscript("q", "ʰ", "ʲ", "Ɗ");
    mergeCharAndTwoSuperscript("ɢ", "ʰ", "ʲ", "Ƌ");
    mergeCharAndTwoSuperscript("ʔ", "ʰ", "ʲ", "ƌ");
    mergeCharAndTwoSuperscript("c", "ʰ", "ʲ", "Ƒ");
    mergeCharAndTwoSuperscript("ɟ", "ʰ", "ʲ", "ƒ");
    mergeCharAndTwoSuperscript("ʧ", "ʰ", "ʲ", "Ɠ");
    mergeCharAndTwoSuperscript("ʤ", "ʰ", "ʲ", "Ɣ");
    mergeCharAndTwoSuperscript("ʈ", "ʰ", "ʲ", "д");
    mergeCharAndTwoSuperscript("ɖ", "ʰ", "ʲ", "е");
    mergeCharAndTwoSuperscript("ɽ", "ʰ", "ʲ", "ж");

    mergeCharAndTwoSuperscript("p", "ʷ", "ʰ", "ƕ");
    mergeCharAndTwoSuperscript("b", "ʷ", "ʰ", "Ɩ");
    mergeCharAndTwoSuperscript("t", "ʷ", "ʰ", "Ɨ");
    mergeCharAndTwoSuperscript("d", "ʷ", "ʰ", "Ƙ");
    mergeCharAndTwoSuperscript("k", "ʷ", "ʰ", "ƙ");
    mergeCharAndTwoSuperscript("g", "ʷ", "ʰ", "ƚ");
    mergeCharAndTwoSuperscript("r", "ʷ", "ʰ", "ƛ");
    mergeCharAndTwoSuperscript("l", "ʷ", "ʰ", "Ɯ");
    mergeCharAndTwoSuperscript("s", "ʷ", "ʰ", "Ɲ");
    mergeCharAndTwoSuperscript("z", "ʷ", "ʰ", "Ɵ");
    mergeCharAndTwoSuperscript("x", "ʷ", "ʰ", "Ơ");
    mergeCharAndTwoSuperscript("ɣ", "ʷ", "ʰ", "ơ");
    mergeCharAndTwoSuperscript("f", "ʷ", "ʰ", "Ƣ");
    mergeCharAndTwoSuperscript("v", "ʷ", "ʰ", "ƣ");
    mergeCharAndTwoSuperscript("ɸ", "ʷ", "ʰ", "Ƥ");
    mergeCharAndTwoSuperscript("β", "ʷ", "ʰ", "ƥ");
    mergeCharAndTwoSuperscript("θ", "ʷ", "ʰ", "Ʀ");
    mergeCharAndTwoSuperscript("ð", "ʷ", "ʰ", "Ƨ");
    mergeCharAndTwoSuperscript("ʃ", "ʷ", "ʰ", "Ƭ");
    mergeCharAndTwoSuperscript("ʒ", "ʷ", "ʰ", "ƭ");
    mergeCharAndTwoSuperscript("ʂ", "ʷ", "ʰ", "Ʈ");
    mergeCharAndTwoSuperscript("ʐ", "ʷ", "ʰ", "Ư");
    mergeCharAndTwoSuperscript("χ", "ʷ", "ʰ", "ư");
    mergeCharAndTwoSuperscript("ʁ", "ʷ", "ʰ", "Ʊ");
    mergeCharAndTwoSuperscript("ɬ", "ʷ", "ʰ", "Ʋ");
    mergeCharAndTwoSuperscript("ɮ", "ʷ", "ʰ", "Ƴ");
    mergeCharAndTwoSuperscript("q", "ʷ", "ʰ", "ƴ");
    mergeCharAndTwoSuperscript("ɢ", "ʷ", "ʰ", "Ƶ");
    mergeCharAndTwoSuperscript("c", "ʷ", "ʰ", "ƺ");
    mergeCharAndTwoSuperscript("ɟ", "ʷ", "ʰ", "ƻ");
    mergeCharAndTwoSuperscript("ʧ", "ʷ", "ʰ", "Ƽ");
    mergeCharAndTwoSuperscript("ʤ", "ʷ", "ʰ", "ƽ");
    mergeCharAndTwoSuperscript("ʔ", "ʷ", "ʰ", "ƶ");
    mergeCharAndTwoSuperscript("ʈ", "ʷ", "ʰ", "а");
    mergeCharAndTwoSuperscript("ɖ", "ʷ", "ʰ", "б");
    mergeCharAndTwoSuperscript("ɽ", "ʷ", "ʰ", "в");

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
    mergeCharAndSuperscript("ʕ", "ʲ", "Q", "post");
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
    mergeCharAndSuperscript("ʔ", "ʲ", "Ã", "post");
    mergeCharAndSuperscript("m", "ʲ", "M", "post");
    mergeCharAndSuperscript("n", "ʲ", "N", "post");
    mergeCharAndSuperscript("ŋ", "ʲ", "X", "post");

    mergeCharAndSuperscript("p", "ʷ", "C", "post");
    mergeCharAndSuperscript("b", "ʷ", "V", "post");
    mergeCharAndSuperscript("t", "ʷ", "Z", "post");
    mergeCharAndSuperscript("d", "ʷ", "L", "post");
    mergeCharAndSuperscript("k", "ʷ", ";", "post");
    mergeCharAndSuperscript("g", "ʷ", "¡", "post");
    mergeCharAndSuperscript("r", "ʷ", "¢", "post");
    mergeCharAndSuperscript("l", "ʷ", "¤", "post");
    mergeCharAndSuperscript("s", "ʷ", "¥", "post");
    mergeCharAndSuperscript("z", "ʷ", "¦", "post");
    mergeCharAndSuperscript("x", "ʷ", "§", "post");
    mergeCharAndSuperscript("ɣ", "ʷ", "¨", "post");
    mergeCharAndSuperscript("f", "ʷ", "©", "post");
    mergeCharAndSuperscript("v", "ʷ", "ª", "post");
    mergeCharAndSuperscript("ɸ", "ʷ", "«", "post");
    mergeCharAndSuperscript("β", "ʷ", "¬", "post");
    mergeCharAndSuperscript("θ", "ʷ", "®", "post");
    mergeCharAndSuperscript("ð", "ʷ", "¯", "post");
    mergeCharAndSuperscript("h", "ʷ", "°", "post");
    mergeCharAndSuperscript("ɦ", "ʷ", "±", "post");
    mergeCharAndSuperscript("ħ", "ʷ", "²", "post");
    mergeCharAndSuperscript("ʕ", "ʷ", "³", "post");
    mergeCharAndSuperscript("ʃ", "ʷ", "´", "post");
    mergeCharAndSuperscript("ʒ", "ʷ", "µ", "post");
    mergeCharAndSuperscript("ʂ", "ʷ", "¶", "post");
    mergeCharAndSuperscript("ʐ", "ʷ", "·", "post");
    mergeCharAndSuperscript("χ", "ʷ", "¸", "post");
    mergeCharAndSuperscript("ʁ", "ʷ", "¹", "post");
    mergeCharAndSuperscript("ɬ", "ʷ", "»", "post");
    mergeCharAndSuperscript("ɮ", "ʷ", "¼", "post");
    mergeCharAndSuperscript("q", "ʷ", "½", "post");
    mergeCharAndSuperscript("ɢ", "ʷ", "¾", "post");
    mergeCharAndSuperscript("ʔ", "ʷ", "¿", "post");
    mergeCharAndSuperscript("m", "ʷ", "À", "post");
    mergeCharAndSuperscript("n", "ʷ", "Á", "post");
    mergeCharAndSuperscript("ŋ", "ʷ", "Â", "post");  
    

   
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
        let textField = "";
        if(chosenSpellingsArray === chosenVowelSpellingsArray) {
            chosenJoinedArray = cloneArray(chosenVowelSpellingsArrayJoinedArray);
            textField = document.getElementById("chosen-vowels").value;
        } else {
            chosenJoinedArray = cloneArray(chosenConsonantSpellingsArrayJoinedArray);
            textField = document.getElementById("chosen-consonants").value;
        }

        //if sounds were manually chosen
        if(randomOption === false && textField.length > 0) {
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
                        //if a spelling was manually given
                        } else if(chosenSpellingsArray[j].length > 3) {
                            for(let k = 0; k < chosenSpellingsArray[j].length; k++) {
                                // the condition chosenVowelSpellingsArray[j].indexOf("=") === 1 is to check that the index is not a single letter being applied to a long sound, as such an index is also more than 3 characters long but not the desired index here
                                if(chosenSpellingsArray[j][k-1] === "=" && chosenSpellingsArray[j].indexOf("=") === 1) {
                                    for(let i = 0; i < wordArray.length; i++) {
                                        let newSpelling = "";
                                        //if the spelling is 4 characters long
                                        if(chosenSpellingsArray[j][k+2] !== undefined && chosenSpellingsArray[j][k+3] !== undefined && chosenSpellingsArray[j][k+4] !== undefined) {
                                            newSpelling = chosenSpellingsArray[j][k] + chosenSpellingsArray[j][k+1] + chosenSpellingsArray[j][k+2] + chosenSpellingsArray[j][k+3] + chosenSpellingsArray[j][k+4];
                                        
                                        //if the spelling is 3 characters long
                                        } else if(chosenSpellingsArray[j][k+2] !== undefined && chosenSpellingsArray[j][k+3] !== undefined && chosenSpellingsArray[j][k+4] === undefined) {
                                            newSpelling = chosenSpellingsArray[j][k] + chosenSpellingsArray[j][k+1] + chosenSpellingsArray[j][k+2] + chosenSpellingsArray[j][k+3];

                                        //if the spelling is 2 characters long
                                        } else if (chosenSpellingsArray[j][k+2] !== undefined && chosenSpellingsArray[j][k+3] === undefined && chosenSpellingsArray[j][k+4] === undefined) {
                                            newSpelling = chosenSpellingsArray[j][k] + chosenSpellingsArray[j][k+1] + chosenSpellingsArray[j][k+2];

                                        //if the spelling is 2 characters long
                                        } else if (chosenSpellingsArray[j][k+2] === undefined && chosenSpellingsArray[j][k+3] === undefined && chosenSpellingsArray[j][k+4] === undefined) {
                                            newSpelling = chosenSpellingsArray[j][k] + chosenSpellingsArray[j][k+1];
                                        }
                                        
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
                                        if(sound === letter) {
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

    //console.log(wordArray)

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
    spellIndividualLettersShort("Ã", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ä", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Å", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Æ", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ç", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ϰ", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ϱ", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ϡ", randomPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ϩ", randomPalatalised(wordArray), chosenConsonantSpellingsArray);

    spellIndividualLettersShort("C", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("V", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Z", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("L", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort(";", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("¡", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("¢", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("¤", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("¥", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("¦", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("§", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("¨", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("©", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ª", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("«", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("¬", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("®", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("¯", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("°", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("±", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("²", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("³", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("´", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("µ", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("¶", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("·", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("¸", randomLabialised(wordArray), chosenConsonantSpellingsArray);spellIndividualLettersShort("¹", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("»", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("¼", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("½", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("¾", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("¿", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("À", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Á", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Â", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("È", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("É", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ê", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ë", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ϐ", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ϓ", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ϥ", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ϣ", randomLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ϗ", randomLabialised(wordArray), chosenConsonantSpellingsArray);

    spellIndividualLettersShort("Ì", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Í", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Î", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ï", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ð", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ñ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ò", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ó", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ô", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Õ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ö", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ø", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ù", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ú", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Û", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ü", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ý", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Þ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ƃ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƃ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ƅ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƅ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ɔ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ƈ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƈ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ɖ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ɗ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ƌ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƌ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ƒ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƒ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ɠ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ɣ", randomAspiratedPalatalised(wordArray), chosenConsonantSpellingsArray);

    spellIndividualLettersShort("ƕ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ɩ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ɨ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ƙ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƙ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƚ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƛ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ɯ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ɲ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ɵ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ơ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ơ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ƣ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƣ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ƥ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƥ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ʀ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ƨ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ƭ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƭ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ʈ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ư", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ư", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ʊ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ʋ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ƴ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƴ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ƶ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƺ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƻ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("Ƽ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƽ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);
    spellIndividualLettersShort("ƶ", randomAspiratedLabialised(wordArray), chosenConsonantSpellingsArray);

    //console.log(wordArray)

    //removes redundant "t" and "d" before č and dž
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
