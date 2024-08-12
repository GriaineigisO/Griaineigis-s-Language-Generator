import {countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, adjectiveArray, conjunctionArray, adverbArray, adpositionArray, intensifierArray, countNounArrayPlural, generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, generateAffixes} from './script.js';
import { spell } from './orthography.js';
import { soundChange, cloneArray } from './soundchange.js';
import {proneADJ} from '/englishWordArrays/Verbs/englishTransitiveVerbs.js';
import { etymologyArrayADJ, derivedOrInheritedADJ, etymologyADJ} from './englishWordArrays/Adjectives/englishAdjectives.js';

let proneAffix = "";

function clear() {
    proneAffix = "";
    document.getElementById("derivational-affixes").replaceChildren();
    
};

function createAffixes() {
    proneAffix = generateAffixes();
};

function removeVFromVerb(verb) {
    let newArray = Array.from(verb);
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === "V") {
            newArray.splice(i, 1);
            let newVerb = newArray.join("");
            return newVerb;
        }
    }
    return verb;
}

let randomNumberForDerivationSelection = 0;
function selectDerivationalAffixes() {
    let chosenDerivations = [VtoADJprone];
    let potentialDerivations = [
        VtoADJprone
    ];
    
    //selects which derivational affixes will be chosen
    // while(chosenDerivations.length < Math.floor(Math.random() * potentialDerivations.length) + 6) {
    //     randomNumberForDerivationSelection = Math.floor(Math.random() * potentialDerivations.length);
    //     if(chosenDerivations.includes(potentialDerivations[randomNumberForDerivationSelection]) === false) {
    //         chosenDerivations.push(potentialDerivations[randomNumberForDerivationSelection]) 
    //     };
    // };

    //applies the chosen derivation to the word
    for(let i = 0; i < chosenDerivations.length; i++) {
        chosenDerivations[i]();
    };
    //console.log(chosenDerivations)
};

function VtoADJprone() {
    let li = document.createElement("li");
    let ul = document.createElement("ul");

    let derivedTerm = "";
    let suffixOrPrefix = "";
    if(Math.floor(Math.random() * 2) === 0) {
        suffixOrPrefix = "suffix";
    } else {
        suffixOrPrefix = "prefix";
    };
    let exampleCounter = 0;
    for(let i = 0; i < transitiveVerbArray.length; i++) {
        //decides if word will have a derivation
        if(Math.floor(Math.random() * 3) === 1) {
            //decides if the affix will be a suffix or prefix
            if(suffixOrPrefix === "suffix") {
                derivedTerm = soundChange(generatedTransitiveVerbs[i]) + soundChange(proneAffix);
                li.innerHTML = `<i>-${spell(soundChange(proneAffix + "A"))}</i> "derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`
            } else {
                derivedTerm = soundChange(proneAffix) + soundChange(generatedTransitiveVerbs[i]);
                li.innerHTML = `<i>${soundChange("X" + proneAffix)}-</i> "derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`
            };
            //assigns the English meaning of the newly derived term
            //let index = transitiveVerbArray.indexOf(transitiveVerbArray[i]);
            let meaning = "";
            //if the derived meaning is an array of possible meanings, it chooses only one word from the array
            if(typeof proneADJ[i] === "string") {
                meaning = proneADJ[i];
            } else if(typeof proneADJ[i] === "object"){
                let array = cloneArray(proneADJ[i])
                meaning = array[Math.floor(Math.random() * array.length)]
            };
             
            //not all words can have this derivation, such words are marked with X
            if(meaning !== "X") {
                adjectiveArray.push(meaning);
                generatedAdjectives.push(derivedTerm) 
                derivedOrInheritedADJ.push("derived");
                etymologyArrayADJ.push(transitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                    etymologyADJ.push(`<i>-${spell(soundChange(generatedTransitiveVerbs[i]))}-</i>&nbsp"to&nbsp${removeVFromVerb(transitiveVerbArray[i])}"&nbsp+&nbsp<i>-${spell(soundChange(proneAffix + "A"))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`)
                } else {
                    etymologyADJ.push(`<i>${spell(soundChange("X" + proneAffix))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp-<i>${spell(soundChange(generatedTransitiveVerbs[transitiveVerbArray.indexOf(transitiveVerbArray[i])]))}</i>-&nbsp"to&nbsp${removeVFromVerb(transitiveVerbArray[i])}"`)
                };
                if(exampleCounter < 6) {
                    let exampleLi = document.createElement("li");
                    exampleLi.innerHTML = `-<i>${spell(soundChange(generatedTransitiveVerbs[i]))}</i>- "to ${transitiveVerbArray[i]}" > <i>${spell(derivedTerm)}</i> "${meaning}"`;
                    ul.appendChild(exampleLi)
                };
                exampleCounter++; 
            };
        };
    };
    document.getElementById("derivational-affixes").appendChild(li);
    li.appendChild(ul);
};

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    clear();
    createAffixes();
    selectDerivationalAffixes()
};



export {countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, adjectiveArray, conjunctionArray, adverbArray, adpositionArray, intensifierArray, countNounArrayPlural, generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, etymologyArrayADJ, derivedOrInheritedADJ, etymologyADJ}