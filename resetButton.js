//The reset button resets the customisation form

function reset() {
    //empties value of text fields
    document.getElementById("language-name").value = "";
    document.getElementById("chosen-vowels").value = "";
    document.getElementById("chosen-consonants").value = "";
    document.getElementById("chosen-syllables").value = "";
    document.getElementById("few-text-field").value = "";
    document.getElementById("barely-any-text-field").value = "";
    document.getElementById("several-text-field").value = "";
    document.getElementById("some-text-field").value = "";
    document.getElementById("a-lot-of-text-field").value = "";
    document.getElementById("great-amount-text-field").value = "";
    document.getElementById("enough-text-field").value = "";
    document.getElementById("not-enough-text-field").value = "";
    document.getElementById("too-much-text-field").value = "";

    //changes value of dropdown forms to "random"
    document.getElementById("sound-change-menu").value = "random";
    document.getElementById("typology-form").value = "random";
    document.getElementById("gender-form").value = "random";
    document.getElementById("isolating-number-form").value = "random";
    document.getElementById("isolating-number-form").value = "random";
    document.getElementById("classifier-form").value = "random";
    document.getElementById("long-classifier-form").value = "random";


    //selects the "random" option for radio buttons
    document.getElementById("randomisedSoundChange").click();
    document.getElementById("randomisedSoundChange").checked = true;
    document.getElementById("sortable").replaceChildren();

};

document.getElementById("reset-form-buttom").addEventListener("click", reset);