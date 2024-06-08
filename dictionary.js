import {generatedNouns, generatedAdjectives, generatedAdverbs, generatedConjunctions, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdpositions, generatedIntensifiers} from './script.js'
import nounArray from './englishWordArrays/Nouns/englishNouns.js';
import transitiveVerbArray from './englishWordArrays/Verbs/englishTransitiveVerbs.js';
import intransitiveVerbArray from './englishWordArrays/Verbs/englishIntransitiveVerbs.js';
import adjectiveArray from './englishWordArrays/Adjectives/englishAdjectives.js';
import conjunctionArray from './englishWordArrays/conjunctions.js'
import adverbArray from './englishWordArrays/adverbs.js'
import adpositionArray from './englishWordArrays/adpositions.js';
import intensifierArray from './englishWordArrays/intensifier.js';
import {spell} from './orthography.js'
import { soundChange } from './soundchange.js';

function Dictionary(word, partOfSpeech, translation)  {
    this.word = word;
    this.partOfSpeech = partOfSpeech;
    this.translation = translation
};

function makeDictionary() {

    let englishWords = nounArray.concat(adjectiveArray, transitiveVerbArray, intransitiveVerbArray, adverbArray, conjunctionArray, adpositionArray, intensifierArray);

    let languageWords = generatedNouns.concat(generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers);

       //Kerbekulo to English
    for(let i = 0; i < englishWords.length; i++) {
        let pOfSpeech = "";
        if(nounArray.includes(englishWords[i])) {
            pOfSpeech = "n";
        } else if (adjectiveArray.includes(englishWords[i])) {
            pOfSpeech = "adj";
        } else if (transitiveVerbArray.includes(englishWords[i]) || intransitiveVerbArray.includes(englishWords[i])) {
            pOfSpeech = "v";
        } else if (transitiveVerbArray.includes(englishWords[i]) || intransitiveVerbArray.includes(englishWords[i])) {
                pOfSpeech = "v";
        } else if (adverbArray.includes(englishWords[i])) {
                pOfSpeech = "adv";
        }else if (conjunctionArray.includes(englishWords[i])) {
                pOfSpeech = "conj";
        }else if (adpositionArray.includes(englishWords[i])) {
                pOfSpeech = "adpo";
        }else if (intensifierArray.includes(englishWords[i])) {
                pOfSpeech = "adv";
        }

        let word1 = new Dictionary(spell(languageWords[i]), pOfSpeech, englishWords[i]);
        let headWord = document.createElement("span");
        let pOS = document.createElement("span");
        let meaning = document.createElement("span");

        headWord.innerHTML = word1.word;
        pOS.innerHTML = word1.partOfSpeech;
        meaning.innerHTML = `"${word1.translation}"`;

        let entry = document.createElement("div");
        entry.classList.add("entry");
        entry.innerHTML = headWord.innerHTML + " " + pOS.innerHTML + " " + meaning.innerHTML;
        document.getElementById("language-to-english").appendChild(entry);
    }

    //English to Kerkebulo
    for(let i = 0; i < englishWords.length; i++) {

        let pOfSpeech = "";
            if(nounArray.includes(englishWords[i])) {
                pOfSpeech = "n";
            } else if (adjectiveArray.includes(englishWords[i])) {
                pOfSpeech = "adj";
            } else if (transitiveVerbArray.includes(englishWords[i]) || intransitiveVerbArray.includes(englishWords[i])) {
                pOfSpeech = "v";
            } else if (adverbArray.includes(englishWords[i])) {
                pOfSpeech = "adv";
            }else if (conjunctionArray.includes(englishWords[i])) {
                pOfSpeech = "conj";
            }else if (adpositionArray.includes(englishWords[i])) {
                pOfSpeech = "adpo";
            }else if (intensifierArray.includes(englishWords[i])) {
                    pOfSpeech = "adv";
            }


        let word1 = new Dictionary(spell(languageWords[i]), pOfSpeech, englishWords[i]);
        let headWord = document.createElement("span");
        let pOS = document.createElement("span");
        let meaning = document.createElement("span");

        headWord.innerHTML = word1.word;
        pOS.innerHTML = word1.partOfSpeech;
        meaning.innerHTML = word1.translation;

        let entry = document.createElement("div");
        entry.classList.add("entry-english");
        entry.innerHTML = meaning.innerHTML + " " + pOS.innerHTML + " " + headWord.innerHTML;
        document.getElementById("english-to-language").appendChild(entry);
    }

    //Sorts the dictionary alphabetically
    let entryDiv = document.getElementsByClassName("entry");
    let entryEnglish = document.getElementsByClassName("entry-english");
    let entryArray = [];
    let entryEnglishArray = [];
    for(let i = 0; i < entryDiv.length; i++) {
        entryArray.push(entryDiv[i].innerHTML);
        entryEnglishArray.push(entryEnglish[i].innerHTML);
        entryArray.sort();
        entryEnglishArray.sort();
    }

    for(let i = 0; i < entryDiv.length; i++) {
        entryDiv[i].innerHTML = entryArray[i];
        entryEnglish[i].innerHTML = entryEnglishArray[i];
    }

    //styles each part of the entry by turning the single string into three span elements
    for(let i = 0; i < entryDiv.length; i++) {
        let entryText = entryDiv[i].innerHTML;
        let newArray = entryText.split(" ")
        let headWordText = newArray[0];;
        let pOSText = newArray[1];
        let translationText = newArray[2];

        let headWord = document.createElement("span");
        headWord.innerHTML = headWordText;
        headWord.style.fontWeight = "bold";
        headWord.style.marginRight = "5px";

        let pOS = document.createElement("span");
        pOS.innerHTML = pOSText;
        pOS.style.fontStyle = "italic";
        pOS.style.marginRight = "8px";

        let translation = document.createElement("span");
        translation.innerHTML = translationText;

        entryDiv[i].innerHTML = "";
        entryDiv[i].appendChild(headWord)
        entryDiv[i].appendChild(pOS)
        entryDiv[i].appendChild(translation)

    }

     for(let i = 0; i < entryEnglish.length; i++) {
        let entryText = entryEnglish[i].innerHTML;
        let newArray = entryText.split(" ")
        let headWordText = newArray[0];;
        let pOSText = newArray[1];
        let translationText = newArray[2];

        let headWord = document.createElement("span");
        headWord.innerHTML = headWordText;
        headWord.style.fontWeight = "bold";
        headWord.style.marginRight = "5px";

        let pOS = document.createElement("span");
        pOS.innerHTML = pOSText;
        pOS.style.fontStyle = "italic";
        pOS.style.marginRight = "8px";

        let translation = document.createElement("span");
        translation.innerHTML = translationText;

        entryEnglish[i].innerHTML = "";
        entryEnglish[i].appendChild(headWord)
        entryEnglish[i].appendChild(pOS)
        entryEnglish[i].appendChild(translation)

    }

    //counts the amount of words in the dictionary
    for(let i = 0; i < entryDiv.length; i++) {
        document.getElementById("num-of-words").innerHTML = entryDiv.length;
    }
}

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", makeDictionary);