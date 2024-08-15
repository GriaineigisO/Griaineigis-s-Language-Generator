# Immediate To-Do List
- Add stats about noun gender
- Make fusional nouns with gender but no case
- Make fusional nouns with gender and case
- consonantal root system

# Phonology

Phonotactic ideas:

- perhaps introduce a sound changes from Old X section? To describe some sound changes that do not nexessarily result in productive phonotactics.figure out how to make resulting hponology appear in tables in such

uC > Cu/#_C
uc > Cw/#_V
#uCu >  Cu:
wo > wu
w > ∅/_u
i u > e o/\_R
a > e/\_RCi
a > æ/\_N
ai > aː
ei > eː
ɔN > aN
æw > ɔw
e(C)x i(C)x> eu(C)x iu(C)x
æ > e/\_N
{i u}jV[+back] > {i u}ː
a >e /\_K
ɑ > æ/\_K
e > ɪ/\_K
V > ∅/VC_#
Vː > V/\_(C)#
oː > e
VCrV > VCirV

- Two vowels together must share a quality, like height
- fricatives can't occur after plosives
- /f/ can only occur in onset
- plosives can occur only in onset, either they become fricatives elsewhere or just drop
- plosives can occur only word initially
- V1hV1 = V:
- /h/ lost word initially
- /h/ lost between vowels
- consonants palatalised before front vowels
- CV1CV2CV3 > CV1:CCV3
- CV1CV2CV3 > CV1:CCV3:
- sl > x
- CVCV > CV1:V
- h > j/\_E
- h > w/\_B
- C>∅/C1_C1

* Use inspiration from real language's sound changes. Use the Proto-Finnic > Proto-Livonian sound changes for inspiration too
* use conlang sound changes too

# General

- Use reduplication? The affix can be created by copying the host word, splitting the word into an array and only copying the first N amount of indexes into a new array, which is then joined to form a string. This must happen dymanically with each new word. E.g "buldoris" > copyArray["b", "u", "l", "d", "o", "r", "i", "s"] > randomNum === 3 > newArray["b", "u", "l"] > "bul" > "bulbuldoris".

# Negation

- There may be a singular negative morpheme, and various derivations of it (e.g \*ne- > none, nobody, no, not) or various unrelated negators. These other negators may be derived from existeing vocabulary in the same manner as french pas
- for fusional and agglutinative languages, is negation done with affixation or with a particle?
- verbs may be negated with a negative verb like Uralic languages

# Nouns

- Nominal conjunctions - are two nouns conjoined differently than two adjectives or two verbs? If so, how?
- Can nouns be topicalised? If so, then how? word order change? affixation? particles?
- Case examples must be added once verbs are done.
- Definiteness
  - marked with affixes or by a demonstrative
  - derived from a demonstrative? or from some sort of topicaliser, or a partitive like construction
  - agrees with gender if there is gender
    - do the articles take the same gender endings? or a different set, or perhaps the article and gender affixes are blended together
- Nouns may have negative forms derived with affixation. E.g "sorus" "cat" > "sorusne" "that which is not a cat" just likd the prefix non-

# Adjectives

- are adjective nominal or verbal in nature?
- What degrees of comparison are there? Are they formed with affixation? particles? reduplication>
  - big
  - bigger
  - slightly bigger
  - a lot bigger
- Is there a superlative? is the construction based on the comparative (e.g like in Estonian) or does it have its own. What degrees of superlative are there?
  - biggest
  - biggest by far
- How are similies handles? "as big as X"

# Copula

- is the copula just the verb "to be"? or is it/are they a set of particles?
- If copulas are particles, ideas on where to use them are:
  - between adjectives and nouns
  - between possessed nouns and possesser nouns

# Verbs

several subsections to discuss each feature in this order:

- interrogative mood
- imperative mood
- gerunds
- participles
- Plural verbs

then make a section to show tables with each verb in all possible
inflections much like the inflection noun section

# Pronouns

- Is there is a dedicated third person?
- inclusive vs exclusive distinction
- gender differences depending on wnat gender system is present, are 1st and 2nd pronouns affected also? Assuming a masculine-feminine system. Perhaps pronouns in the divine gender can be used to refer to humans filling divine roles (priests, augurs) and gods

# Possession

- Alienable vs inalienable possession.
  - Alienable possession shown by
    - Dative construction e.g "the car to me"
    - adpositional "with, by, on at" etc
    - B-possession "the car (that) belongs to me"
    - some kind of "distance" derivational affix?/particle?

# Derivation

- When new words are created, figure out how to add them to the dictionary. The language word can be pushed to the appropriate generatedArray, but since dictionary.js imports the english word arrays right from the source files and not via script.js, I can't simply push the derived word's meaning to the english word array. I'll have to import the english word array to dictionary.js via script.ja, to allow me to change them before they are use to create the dictionary
- figure out how to determine the newly generated word's meaning. I may have to create several arrays with each possible outcome

# Things to Add Later, but are not a current priority

- add example sentences for each word in the dictionary. Whether it actually shows will be random

- at the bottom, generate a block of text when all parts of speech have been
  given. There will be several templates, chosen at random (there will be a button
  to cycle through different templates without changing the rest of the page). e.g
  &{det} &{adj} &{noun} &{verb} &{conj} that white horse ran
- Tri-consonental roots? How will I go about adding that?
  Example root: M-G-D
  example morpheme: plural is CoCCa
  Insert "o" at [1] and [a] at [-1]
  how to generate this template? CoCCa. by populating an array, at each index, the item may be "C" or a random vowel. There is a max allowance of 3 "C"'s
  Then when it is inflecting, it loops through the affix array, in each loop it asks if the item is "C", if so, then the loop "continues" onto the next index until it finds an item that is not "C" aka the vowel. It then saves the item itself and the index. In this case, there is an "o" at index [1], and thus to inflect the root an "o" will be inserted at index [1]
- add more than one meaning to a word, make a psuedo thesaurus? - if a word has related
  terms listed, then the other terms will also be assigned at random

_-_ when making compounds for dictionary, have each part of a compound be from a specific set of nouns chosen by their meaning to ensure that the compounds aren't totally nonsensical.

- COLOUR-ANIMAL
- COLOUR-PLANT
- TRADE-PERSON
- SIZE-ANIMAL
- COLOUR-FOOD

- Common phrases like greetings to be generated a wide variety of ways, randomly chosen of course.

## Choosing Vocabulary

To prevent the exact same set of English words being chosen every time, there will be certian if-statements to control what words are added. Mostly cultural and habiat soecies vocab

1. Habitat: temperate forest, upland area, tropical rainforest, desert, swamps, bogs, temperate forests, taiga, tundra (several may be chosen if different habitats can co-exist side by side)
2. lifestyle: hunter-gatherer, agricultural, pastoralist (if the speaker have trade, then they may have words for traded goods from other lifestyles)
   3 governance: fuedal, small bands of families, tribal confederation etc
   4 Military class?
3. time period: paleolithic, neolithic, copper age, bronze age, iron age, classical, medieval, induztrial revolution, modern, future

Colour metaohors?

## Features to be randomized/chosen

- Stative verbs vs nominal adjectives
- If adjectives agree at all, and if so, with what
- Verb tenses
- Verb mood
- Verb aspect
- Derivational methods
- Different sets of vocabulary for different climates and cultures? i.e marine terms vs desert vs tundra etc
- Sets of words to be chosen based on a random culture and habitat. So the vocabulary has a sense of cohesion e.g not having a word both for camel and polarbear
- Add a placename and personalname generator, which randomly selects a style of name derivation and then generates names using that.
- Generator for the language name. The name can be derived from a fictional place where it is spoken (using a generated placename), or by using a random noun or adjective + the word language, or by creating an ethnonym for the speakers and then using that + the word language

## Etymology ideas

- oath < "to bind"
- yoke < "to bind"
- place < "to stand"
- solar < sun
- lunar < moon
- stellar < star
- paternal kinsman < father
- maternal kinsman < mother
- libation < pour+nominaliser; divine-pouring; god's-drink; liquid-sacrifice; -backgive
- adpo/adv > adjective
  - here > present
  - away > absent

## Derivational Morphology Ideas

- danger affix
- unstable affix

### Gender Swtiching

### natural > artificial:

- things made from natural material

  -

- natural animal > artificial - cooked meat from the animal
  - cow > beef
  - pug > pork
  - deer > venison
