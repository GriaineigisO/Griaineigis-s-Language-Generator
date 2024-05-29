/*
C = consonant 
F = fricative
N = nasal
R = resonant
A = approximant
H-aspirated
*/

//Due to CV being a mandatory syllable, it would be odd for a language to lack it, it is not included here but insterted directly into selectedSyllables in generatedPhonolgy.js


// "CVF",
// "CVN",
// "CVR",
// "CVA",

let syllablesArray = [
"V",
"CVC",
"CVV",
"VV",
"VVC",
"VVCC",
"CCV",
]

let approximantSyllables = [
    "CAV",
    "AVC",
    "VCA",
    "AVCC",
    "CAVCC",
]

let nasalSyllables = [
    "CVN",
    "CVNC",
]

let fricativeSyllables = [
    "CVFC",
    "FCV",
    "FCVC",
    "FCCV",
    "CFV",
 ]

let resonantSyllables = [
    "CRV",
    "CVRC",
    "CVCR"
]

let aspiratedSyllable = [
   "CVH",
]


export {syllablesArray, approximantSyllables, nasalSyllables, fricativeSyllables, resonantSyllables, aspiratedSyllable};