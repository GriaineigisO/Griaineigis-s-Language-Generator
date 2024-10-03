# Immediate To-Do List

## Options for customisation

- figure out why sound changes examples don't appear when less than 6 words changed
- fix custom syllable structure examples
- update generateAffixes to also be custom
- next set of custom words is short generic based classifiers
- add ability to enter classifiers - for all classifier systems, same for quantifiers and measure words. When a classifier system is selected, textfields for each classifier appear for the user to type in. For the long classifier system, the textfield will only apear for the apprioate classifier when it has been selected in the dropdown menu (it won't be a simple <li> item anymore)
- allow user greater control over syllable structure. Perhaps use a similar system as awkwords, using a text field which corresponds to a letter. the input becomes an array. This will give the user greater control. Also, make it so that IPA can be directly entered: so sCV is /s/ followed by any CV
- customisation option where a user can decide what specific words will be - the template will be: textfield(english word - if the word has not been added manually by me, it will be added by this event) dropdownmenu(for part of speech) textfield(desired word) noun gender/classifier/etc
- absract nouns behaving odd
- find out why length is lost between old > modern derived terms
- add keyboard that inputs the IPA characters directly into the vowels and consonants text fields, one keyboard for vowels, another for consonants
- classifier system/number/cases
- marked singular
- which sounds changes
- which derivational methods (and if they are prefixes or suffixes)
- cover page template
- picture on cover
- words to add
- the culture/time period of the speakers

- make it so that derivational affixes may be taken from existing vocabulary e.g "body" > "-like/-ly"
- function to apply certain sound changes only across morphome boundries. The functions takes the two morphemes as arguments, and then determines which sound changes are in chosenChanges. If a change is conditional and the condition is met at the morpheme boundrie e.g bak-or where intervocalic voicing detects that the final sound in word1 is a voiceless plosive following a vowel and that the first sound in word2 is a vowel, intervocalic voicing will be triggered and only at the boundry
- Add stats about noun gender
- Make fusional nouns with gender but no case
- Make fusional nouns with gender and case
- consonantal root system
- after fusional nouns are done, make it so that all inflected forms of a noun appear in the dictionary entry before the etymology on a new line in small text

# Phonology

Phonotactic ideas:

- perhaps introduce a sound changes from Old X section? To describe some sound changes that do not nexessarily result in productive phonotactics.figure out how to make resulting hponology appear in tables in such

uC > Cu/#_C
uc > Cw/#\_V
#uCu > Cu:
wo > wu
w > ∅/\_u
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
C1VC1 > C1VV
VC1VC1 > VVC1

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
- derives frequentive verbs
- derives verbs of greater intensity
- derives verbs of lesser intensity
- N > ADJ derives adjectives describing the prototypical state of the noun (mother > maternal, wolf > lupine etc)
- N > N -worthy of: describes a noun which is worthy of having X, or worthy because of deeds relating to X (battle-worthy, cattle-worthy)

## Derivational Morphology Ideas

- danger affix
- unstable affix
  VERB FORMING SUFFIXES
  Noun/Adj: to become, intransitive change of state: old > get old/age, married > get married, happy > cheer up, absent > wither
  Adj > v: to grow X: wary > to grow wary, angry > grow angry
  intrans v > trans v causative affix
  noun > verb "to do X", "to perform an X", "to make an X"

  Adjective-Forming Suffixes:

-ēs - Primarily forms last members of adjectival bahuvrīhi compounds
-ōn - Derives adjectives indicating possession, denoting burden, authority
-inos - Creates adjectives of materials
-iskos - Characteristic of, typical of, pertaining to
-kos - Creates deadjectival and desubstantival adjectives denoting the characteristic of, typical of, pertaining to
-nós - Creates verbal adjectives from roots, master of, lord of, pertaining to, belonging to
-onts - Forms adjectives from Caland system roots, forms participles
-rós - Forms adjectives from Caland system roots
-teros, -eros - Contrastive or oppositional adjectival suffix
-t'm̥mós, -'m̥ós, -'m̥mós - absolute superlative adjectival suffix
-t'n̥nós - Used to form adjectives related to time
-tós - Creates verbal adjectives from verb stems
-us - Forms adjectives from Caland system roots
-wénts - Forms possessive adjectives from nominal stems
-wós - Creates adjectives from verb stems
-wōs - Forms perfect participles from verbs
-jós - Creates adjectives from noun stems
-jōs - Forms adjectives from roots, meaning "very" or "rather"
Noun-Forming Suffixes:

-dhlom, -dhrom, -tlom, -trom - forms neuter nouns denoting a tool or instrument
-ḗn - derives masculine nouns from roots
-ā - creates feminine collective nouns and mass nouns; creates action nouns and abstract nouns
-ōn - creates nouns indicating possession, denoting burden, authority
-ī - feminizes athematic nominal stems
-is - forms feminine nouns from verbs
-lós - forms agent nouns from verbal roots; forms diminutive nouns from noun stems
-mḗn(masculine), -mn‌(neuter), -mō(masculine), -mon(masculine), -mōn(masculine) - creates agent nouns or result nouns from verbs
-mós, -mos - creates masculine action/result nouns from verb stems
-nī - feminizes athematic nominal stems
-ōn - creates masculine “individualizing” or “participant” nouns from nouns and adjectives, agent or patient nouns from verbs
_gʷréh₂us (“heavy”) + ‎_-ō → ‎*gʷréh₂wōn (“millstone”, literally “the heavy one”)
‎*tḗtḱti (“to create”) + ‎*-ō → ‎*tétḱōn (“carpenter”, literally “one who creates”)
‎*(s)kérti (“to cut”) + ‎*-ō → ‎*(s)kérōn (“meat”, literally “something cut”) (> Latin carō)
(rare) Derives nouns from nouns or roots, often with unclear distinction
*h₂eḱs- + ‎*-ō → ‎*h₂éksōn (“axis”) (> Ancient Greek ἄξων (áxōn))
‎*meh₂k- + ‎*-ō → ‎*méh₂kōn (“poppy”) (> Proto-Germanic *mōhô)
-ónts - derives masculine nouns indicating body parts(it is a participle)
-ós - Creates masculine agent nouns from verb stems, denoting someone or something that performs that verb's action
-ōs - Creates masculine and feminine action nouns or result nouns from verbs
-ót'r‌ - Derives neuter action nouns from verbal stems
-os - Creates neuter action nouns or result nouns from verbs
-'r‌ - Derives neuter nouns from roots, frequently mass nouns
-s - Derives feminine mobile-accented root nouns from roots
-snā - Used to form feminine nouns denoting an object
-sōr - Derives feminine gender stems from roots
-tḗr - Derives agent masculine nouns from verbs, denoting someone or something whose role or purpose it is to perform the verb's action
-tā - Used to form feminine nouns representing state of being
-tāts - Used to form feminine nouns representing state of being
-tis - Derives feminine abstract/action nouns from verb roots
-tōr - Derives masculine agent nouns from verbs, denoting someone or something who has performed the verb's action
-t'r‌ - Derives neuter nouns from verbal roots
-trī - Derives feminine agent nouns from verbs, denoting someone or something who has performed the verb's action
-tus - Derives masculine action nouns from verb nouns
-twā - Forms feminine nouns from verbs
-w'r‌ - Forms neuter object nouns from verbal roots(ex: per- "to go through" > pérwr‌ "ford, crossing")

## Semantic Shift Ideas

- to wander, to roam > to wander in mind, to ponder, to get lost
- barefoot > naked
- aware > awake
- long > late
- smoke > steam, breath, cloud

### Gender Swtiching

### natural > artificial:

- things made from natural material

  -

- natural animal > artificial - cooked meat from the animal
  - cow > beef
  - pug > pork
  - deer > venison
