import {countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, adjectiveArray, conjunctionArray, adverbArray, adpositionArray, intensifierArray, countNounArrayPlural, generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, generateAffixes} from './script.js';
import { spell } from './orthography.js';
import { soundChange, cloneArray } from './soundchange.js';
import {activePassive, animInan, divineNonDivine, humanAnimalInan, mascFemNeut, mascFem, naturalArtificial, animacyClassifierArray, shapeClassifierArray, shortGenericClassifierArray, derivedOrInheritedCountNoun, activePassivepossessorOfCount,
animInanpossessorOfCount,
divineNonDivinepossessorOfCount,
humanAnimalInanpossessorOfCount,
mascFemNeutpossessorOfCount,
mascFempossessorOfCount,
naturalArtificialpossessorOfCount,
animacyClassifierArraypossessorOfCount,
shapeClassifierArraypossessorOfCount,
shortGenericClassifierArraypossessorOfCount, possessorOfCount, etymologyArrayCountNoun, etymologyCountNoun} from './englishWordArrays/Nouns/countNouns.js'
import {proneADJtrans} from '/englishWordArrays/Verbs/englishTransitiveVerbs.js';
import {proneADJintrans} from '/englishWordArrays/Verbs/englishIntransitiveVerbs.js';
import { etymologyArrayADJ, derivedOrInheritedADJ, etymologyADJ} from './englishWordArrays/Adjectives/englishAdjectives.js';

let proneAffix = "";
let possessorAffix = "";

function clear() {
    proneAffix = "";
    possessorAffix = "";
    document.getElementById("derivational-affixes").replaceChildren();
    
};

function createAffixes() {
    proneAffix = generateAffixes();
    possessorAffix = generateAffixes();
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
    let chosenDerivations = [VtoADJprone, NtoNabstract];
    let potentialDerivations = [
        VtoADJprone,
        NtoNabstract
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
                li.innerHTML = `<i>${spell(soundChange("X" + proneAffix))}-</i> "derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`
            };
            //assigns the English meaning of the newly derived term
            let meaning = "";
            //if the derived meaning is an array of possible meanings, it chooses only one word from the array
            if(typeof proneADJtrans[i] === "string") {
                meaning = proneADJtrans[i];
            } else if(typeof proneADJtrans[i] === "object"){
                let array = cloneArray(proneADJtrans[i])
                meaning = array[Math.floor(Math.random() * array.length)]
            };
             
            //not all words can have this derivation, such words are marked with X
            if(meaning !== "X") {
                //if the derived meaning already exists, this chooses if the derivation replaces the word or if both exist as synonyms
                if(adjectiveArray.includes(meaning)) {
                    if(Math.floor(Math.random() * 2) === 0) {
                        //both exist as synonyms
                        adjectiveArray.push(meaning);
                    } else {
                        //replaces pre-existing word with new derivation
                        let adjIndex = adjectiveArray.indexOf(meaning);
                        adjectiveArray.splice(adjIndex, 1);
                        generatedAdjectives.splice(adjIndex, 1);
                        adjectiveArray.push(meaning);
                    };
                };
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

    for(let i = 0; i < intransitiveVerbArray.length; i++) {
        //decides if word will have a derivation
        if(Math.floor(Math.random() * 3) === 1) {
            //decides if the affix will be a suffix or prefix
            if(suffixOrPrefix === "suffix") {
                derivedTerm = soundChange(generatedIntransitiveVerbs[i]) + soundChange(proneAffix);
            } else {
                derivedTerm = soundChange(proneAffix) + soundChange(generatedIntransitiveVerbs[i]);
            };
            //assigns the English meaning of the newly derived term
            let meaning = "";
            //if the derived meaning is an array of possible meanings, it chooses only one word from the array
            if(typeof proneADJintrans[i] === "string") {
                meaning = proneADJintrans[i];
            } else if(typeof proneADJintrans[i] === "object"){
                let array = cloneArray(proneADJintrans[i])
                meaning = array[Math.floor(Math.random() * array.length)]
            };
             
            //not all words can have this derivation, such words are marked with X
            if(meaning !== "X") {
                //if the derived meaning already exists, this chooses if the derivation replaces the word or if both exist as synonyms
                if(adjectiveArray.includes(meaning)) {
                    if(Math.floor(Math.random() * 2) === 0) {
                        //both exist as synonyms
                        adjectiveArray.push(meaning);
                    } else {
                        //replaces pre-existing word with new derivation
                        let adjIndex = adjectiveArray.indexOf(meaning);
                        adjectiveArray.splice(adjIndex, 1);
                        generatedAdjectives.splice(adjIndex, 1);
                        adjectiveArray.push(meaning);
                    };
                };  
                generatedAdjectives.push(derivedTerm) 
                derivedOrInheritedADJ.push("derived");
                etymologyArrayADJ.push(intransitiveVerbArray[i]);
                if(suffixOrPrefix === "suffix") {
                    etymologyADJ.push(`<i>-${spell(soundChange(generatedIntransitiveVerbs[i]))}-</i>&nbsp"to&nbsp${removeVFromVerb(intransitiveVerbArray[i])}"&nbsp+&nbsp<i>-${spell(soundChange(proneAffix + "A"))}</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"`)
                } else {
                    etymologyADJ.push(`<i>${spell(soundChange("X" + proneAffix))}-</i>&nbsp"derives&nbspadjectives&nbspfrom&nbspverbs&nbspdescribing&nbspthe&nbspstate&nbspof&nbspthe&nbspagent&nbspof&nbspthe&nbspaction"&nbsp+&nbsp-<i>${spell(soundChange(generatedIntransitiveVerbs[intransitiveVerbArray.indexOf(intransitiveVerbArray[i])]))}</i>-&nbsp"to&nbsp${removeVFromVerb(intransitiveVerbArray[i])}"`)
                };
            };
        };
    };
    document.getElementById("derivational-affixes").appendChild(li);
    li.appendChild(ul);
};

function NtoNabstract() {
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
    for(let i = 0; i < countNounArray.length; i++) {
        //decides if word will have a derivation
        if(/*Math.floor(Math.random() * 3)*/1 === 1) {
            //decides if the affix will be a suffix or prefix
            if(suffixOrPrefix === "suffix") {
                derivedTerm = soundChange(generatedCountNouns[i]) + soundChange(possessorAffix);
                li.innerHTML = `<i>-${spell(soundChange(possessorAffix + "A"))}</i> "possessor&nbspof"`
            } else {
                derivedTerm = soundChange(possessorAffix) + soundChange(generatedCountNouns[i]);
                li.innerHTML = `<i>${spell(soundChange("X" + possessorAffix))}-</i> "possessor&nbspof"`
            };
            //assigns the English meaning of the newly derived term
            let meaning = "";
            //if the derived meaning is an array of possible meanings, it chooses only one word from the array
            if(typeof possessorOfCount[i] === "string") {
                meaning = possessorOfCount[i];
            } else if(typeof possessorOfCount[i] === "object"){
                let array = cloneArray(possessorOfCount[i])
                meaning = array[Math.floor(Math.random() * array.length)]
            };
             
            //not all words can have this derivation, such words are marked with X
            if(meaning !== "X") {
                //replaces pre-existing word with new derivation
                if(countNounArray.includes(meaning)) {
                    let nIndex = countNounArray.indexOf(meaning);
                    countNounArray.splice(nIndex, 1);
                    generatedCountNouns.splice(nIndex, 1);
                    countNounArrayPlural.splice(nIndex, 1);
                    activePassive.splice(nIndex, 1);
                    animInan.splice(nIndex, 1);
                    divineNonDivine.splice(nIndex, 1);
                    humanAnimalInan.splice(nIndex, 1);
                    mascFemNeut.splice(nIndex, 1);
                    mascFem.splice(nIndex, 1);
                    naturalArtificial.splice(nIndex, 1);
                    animacyClassifierArray.splice(nIndex, 1);
                    shapeClassifierArray.splice(nIndex, 1);
                    shortGenericClassifierArray.splice(nIndex, 1);
                    derivedOrInheritedCountNoun.splice(nIndex, 1);
                    possessorOfCount.splice(nIndex, 1);
                    activePassivepossessorOfCount.splice(nIndex, 1);
                    animInanpossessorOfCount.splice(nIndex, 1);
                    divineNonDivinepossessorOfCount.splice(nIndex, 1);
                    humanAnimalInanpossessorOfCount.splice(nIndex, 1);
                    mascFemNeutpossessorOfCount.splice(nIndex, 1);
                    mascFempossessorOfCount.splice(nIndex, 1);
                    naturalArtificialpossessorOfCount.splice(nIndex, 1);
                    animacyClassifierArraypossessorOfCount.splice(nIndex, 1);
                    shapeClassifierArraypossessorOfCount.splice(nIndex, 1);
                    shortGenericClassifierArraypossessorOfCount.splice(nIndex, 1);
                    etymologyCountNoun.splice(nIndex, 1);
                    etymologyArrayCountNoun.splice(nIndex, 1);
                };

                countNounArray.push(meaning);
                generatedCountNouns.push(derivedTerm) 
                derivedOrInheritedCountNoun.push("derived");
                possessorOfCount.push("X");
                activePassive.push(activePassivepossessorOfCount[i]);
                animInan.push(animInanpossessorOfCount[i]);
                divineNonDivine.push(divineNonDivinepossessorOfCount[i]);
                humanAnimalInan.push(humanAnimalInanpossessorOfCount[i]);
                mascFemNeut.push(mascFemNeutpossessorOfCount[i]);
                mascFem.push(mascFempossessorOfCount[i]);
                naturalArtificial.push(naturalArtificialpossessorOfCount[i]);
                animacyClassifierArray.push(animacyClassifierArraypossessorOfCount[i]);
                shapeClassifierArray.push(shapeClassifierArraypossessorOfCount[i]);
                shortGenericClassifierArray.push(shortGenericClassifierArraypossessorOfCount[i]);
                etymologyArrayCountNoun.push(countNounArray[i]);
                console.log(meaning + " " + derivedOrInheritedCountNoun[countNounArray.indexOf(meaning)])

                if(suffixOrPrefix === "suffix") {
                    etymologyCountNoun.push(`<i>-${spell(soundChange(generatedCountNouns[i]))}-</i>&nbsp"${countNounArray[i]}"&nbsp+&nbsp<i>-${spell(soundChange(possessorAffix + "A"))}</i>&nbsp"possessor&nbspof"`)
                } else {
                    etymologyCountNoun.push(`<i>${spell(soundChange("X" + possessorAffix))}-</i>&nbsp"possessor&nbspof"&nbsp+&nbsp-<i>${spell(soundChange(generatedCountNouns[countNounArray.indexOf(countNounArray[i])]))}</i>-&nbsp"${countNounArray[i]}"`)
                };
                if(exampleCounter < 6) {
                    let exampleLi = document.createElement("li");
                    exampleLi.innerHTML = `-<i>${spell(soundChange(generatedCountNouns[i]))}</i>- "${countNounArray[i]}" > <i>${spell(derivedTerm)}</i> "${meaning}"`;
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



export {countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, adjectiveArray, conjunctionArray, adverbArray, adpositionArray, intensifierArray, countNounArrayPlural, generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, etymologyArrayADJ, derivedOrInheritedADJ, etymologyADJ, etymologyCountNoun, derivedOrInheritedCountNoun, activePassive, animInan, divineNonDivine, humanAnimalInan, mascFemNeut, mascFem, naturalArtificial, animacyClassifierArray, shapeClassifierArray, shortGenericClassifierArray, etymologyArrayCountNoun
}