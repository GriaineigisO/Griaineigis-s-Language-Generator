import {countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, adjectiveArray, conjunctionArray, adverbArray, adpositionArray, intensifierArray, countNounArrayPlural, generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers,animInanMass, divineNonDivineMass, humanAnimalInanMass, mascFemMass,  mascFemNeutMass, naturalArtificialMass, animacyClassifierMassArray, shapeClassifierMassArray, activePassiveMass, shortGenericClassifierMassArray} from './script.js';

import {transitiveVerb3SArray, transitiveVerbPastArray} from './englishWordArrays/Verbs/englishTransitiveVerbs.js';

import {activePassive, animInan, divineNonDivine, humanAnimalInan, mascFemNeut, mascFem, naturalArtificial, animacyClassifierArray, shapeClassifierArray, shortGenericClassifierArray, etymologyArrayCountNoun, etymologyCountNoun, derivationListCountNoun, derivedOrInheritedCountNoun, oldCountNounArray} from './englishWordArrays/Nouns/countNouns.js';

import {oldMassNounArray} from './englishWordArrays/Nouns/massNouns.js'

import {cloneArray, randomIndexOfArray} from './library.js';


function semanticShiftCountNounToCountNoun(meaning, newMeaning, newMeaningPlural, num1, num2) {
	
    if(typeof meaning !== "string") {
        let meaningArray = cloneArray(meaning);
        meaning = randomIndexOfArray(meaningArray);
	};
    
    if(typeof newMeaning !== "string") {
        let newMeaningArray = cloneArray(newMeaning);
        newMeaning = randomIndexOfArray(newMeaningArray);
        newMeaningPlural = newMeaningPlural[newMeaningArray.indexOf(newMeaning)];
	};

	if(Math.floor(Math.random() * num1) === num2) {
        //if newMeaning is already a the meaning of another word that exists in the lexicon, the other word is deleted
        if(countNounArray.includes(newMeaning)) {
            let index = countNounArray.indexOf(newMeaning)
            countNounArray.splice(index, 1);
            countNounArrayPlural.splice(index, 1);
            generatedCountNouns.splice(index, 1);
            activePassive.splice(index, 1);
            animInan.splice(index, 1);
            divineNonDivine.splice(index, 1);
            humanAnimalInan.splice(index, 1);
            mascFemNeut.splice(index, 1);
            mascFem.splice(index, 1);
            naturalArtificial.splice(index, 1);
            animacyClassifierArray.splice(index, 1);
            shapeClassifierArray.splice(index, 1);
            shortGenericClassifierArray.splice(index, 1);
            derivationListCountNoun.splice(index, 1);
            etymologyCountNoun.splice(index, 1);
            etymologyArrayCountNoun.splice(index, 1);
            derivedOrInheritedCountNoun.splice(index, 1);
            oldCountNounArray.splice(index, 1);
        };
        oldCountNounArray[countNounArray.indexOf(meaning)] = meaning;
		countNounArray[countNounArray.indexOf(meaning)] = newMeaning;
        countNounArrayPlural[countNounArray.indexOf(meaning)] = newMeaningPlural
	};
};

function applySemanticShifts() {
    //the last two numbers are for the random number. The first number is the maximum range of the random number and the second number is the number to be chosen
    semanticShiftCountNounToCountNoun("sun", "day", "days", 5, 1);
    semanticShiftCountNounToCountNoun("foreigner", ["giant", "monster"], ["giants", "monsters"], 2, 1);
    semanticShiftCountNounToCountNoun("hand", ["finger", "toe", "side", "kind", "wing", "branch", "ray", "strait", "strength", "domestic&nbspanimal", "leaf", "direction"], ["fingers", "toes", "sides", "kinds", "wings", "branches", "rays", "straits", "strengths", "domestic&nbspanimals", "leaves", "directions"], 5, 1);
    semanticShiftCountNounToCountNoun("knot", "bud", "buds", 2, 1);
    semanticShiftCountNounToCountNoun("tooth", ["sword", "mouth", "beak", "grain", "seed", "clove", "bone", "blade", "berry", "wolf", "stick", "thorn"], ["swords", "mouths", "beaks", "grains", "seeds", "cloves", "bones", "blades", "berries", "wolves", "sticks", "thorns"], 5, 1);
    semanticShiftCountNounToCountNoun(["almond", "plum"], "tonsil", "tonsils", 2, 1);
    semanticShiftCountNounToCountNoun("sword", "reed", "reeds", 5, 1);
    semanticShiftCountNounToCountNoun("servant", "soldier", "soldiers", 5, 1);
    semanticShiftCountNounToCountNoun("berry", "nipple", "nipples", 5, 1);
    semanticShiftCountNounToCountNoun("scorpion", "spider", "spiders", 5, 1);
    semanticShiftCountNounToCountNoun("stallion", "slacker", "slackers", 5, 1);
    semanticShiftCountNounToCountNoun("forest", "wolf", "wolves", 5, 1);
    semanticShiftCountNounToCountNoun(["lord", "wing"], "eagle", "eagles", 6, 1);
    semanticShiftCountNounToCountNoun("hollow&nbsptree", "lazy&nbspperson", "lazy&nbsppeople", 6, 1);
}

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    applySemanticShifts();
};

export {countNounArray, massNounArray, transitiveVerbArray, intransitiveVerbArray, adjectiveArray, conjunctionArray, adverbArray, adpositionArray, intensifierArray, countNounArrayPlural, transitiveVerb3SArray, transitiveVerbPastArray, generatedCountNouns, generatedMassNouns, generatedAdjectives, generatedTransitiveVerbs, generatedIntransitiveVerbs, generatedAdverbs, generatedConjunctions, generatedAdpositions, generatedIntensifiers, activePassive, animInan, divineNonDivine, humanAnimalInan, mascFemNeut, mascFem, naturalArtificial, animacyClassifierArray, shapeClassifierArray, shortGenericClassifierArray, etymologyArrayCountNoun, etymologyCountNoun, derivationListCountNoun, derivedOrInheritedCountNoun, oldCountNounArray, oldMassNounArray, animInanMass, divineNonDivineMass, humanAnimalInanMass, mascFemMass,  mascFemNeutMass, naturalArtificialMass, animacyClassifierMassArray, shapeClassifierMassArray, activePassiveMass, shortGenericClassifierMassArray} 