/*
C = consonant 
F = fricative
N = nasal
R = liquid
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
"VV",
"CCV",
"VCC",
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
    "VNC",
]

let fricativeSyllables = [
    "CVFC",
    "FCV",
    "FCVC",
    "FCCV",
    "CFV",
 ]

let liquidSyllables = [
    "CRV",
    "CVRC",
    "CVCR",
    "CRVC",
]

let aspiratedSyllable = [
   "CVH",
	"HVC",
    "FHV",
]


export {syllablesArray, approximantSyllables, nasalSyllables, fricativeSyllables, liquidSyllables, aspiratedSyllable};