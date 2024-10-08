//The reset button resets the customisation form

function reset() {
    //empties value of text fields
    document.getElementById("language-name").value = "";
    document.getElementById("chosen-vowels").value = "";
    document.getElementById("chosen-consonants").value = "";
    document.getElementById("chosen-syllables").value = "";
    document.getElementById("affix-chosen-syllables").value = "";
    document.getElementById("few-text-field").value = "";
    document.getElementById("barely-any-text-field").value = "";
    document.getElementById("several-text-field").value = "";
    document.getElementById("some-text-field").value = "";
    document.getElementById("a-lot-of-text-field").value = "";
    document.getElementById("great-amount-text-field").value = "";
    document.getElementById("enough-text-field").value = "";
    document.getElementById("not-enough-text-field").value = "";
    document.getElementById("too-much-text-field").value = "";
    document.getElementById("long-text-field").value = "";
    document.getElementById("long-meaning-text-field").value = "";
    document.getElementById("short-text-field").value = "";
    document.getElementById("short-meaning-text-field").value = "";
    document.getElementById("round-text-field").value = "";
    document.getElementById("round-meaning-text-field").value = "";
    document.getElementById("pointed-text-field").value = "";
    document.getElementById("pointed-meaning-text-field").value = "";
    document.getElementById("flat-text-field").value = "";
    document.getElementById("flat-meaning-text-field").value = "";
    document.getElementById("shapeless-text-field").value = "";
    document.getElementById("shapeless-meaning-text-field").value = "";
    document.getElementById("start-sound").value = "";
    document.getElementById("end-sound").value = "";
    document.getElementById("between1").value = "";
    document.getElementById("between2").value = "";
    document.getElementById("else-environment").value = "";

    let customtextField = document.getElementsByClassName("custom-text-field")
    for(let i = 0; i < customtextField.length; i++) {
        customtextField[i].value = "";
    }
    let textArea = document.getElementsByTagName("textarea");
    for(let i = 0; i < textArea.length; i++) {
        textArea[i].value = "";
    };
    document.getElementById("max-syllables").value = "";
    document.getElementById("min-syllables").value = "";
    document.getElementById("syllable-category-div").replaceChildren();
    document.getElementById("affix-max-syllables").value = "";
    document.getElementById("affix-min-syllables").value = "";
    document.getElementById("affix-syllable-category-div").replaceChildren();

    //changes value of dropdown forms to "random"
    document.getElementById("sound-change-menu").value = "random";
    document.getElementById("typology-form").value = "random";
    document.getElementById("gender-form").value = "random";
    document.getElementById("isolating-number-form").value = "random";
    document.getElementById("isolating-number-form").value = "random";
    document.getElementById("classifier-form").value = "random";
    document.getElementById("long-classifier-form").value = "random";
    document.getElementById("environment").value = "unconditional";
    


    //selects the "random" option for radio buttons
    document.getElementById("randomisedSoundChange").click();
    document.getElementById("randomisedSoundChange").checked = true;
    document.getElementById("sortable").replaceChildren();

    //rehides submenus
    document.getElementById("gender-form-div").style.display = "none";
    document.getElementById("isolating-number-form-div").style.display = "none";
    document.getElementById("long-classifier-form-div").style.display = "none";
    document.getElementById("shape-classifier-text-field-div").style.display = "none";
    document.getElementById("animacy-classifier-text-field-div").style.display = "none";
    document.getElementById("quantifier-text-field-div").style.display = "none";
    document.getElementById("classifier-form-div").style.display = "none";

};

document.getElementById("reset-form-button").addEventListener("click", reset);