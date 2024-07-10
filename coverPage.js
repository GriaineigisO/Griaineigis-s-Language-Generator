function makePDFCoverPage() {
    //this function randomly selects which cover page template will be used in the resulting pdf
    let randomNum = Math.floor(Math.random() * 11)
    let coverPageDiv = document.createElement("div");

    if(randomNum === 0) {
        coverPageDiv.innerHTML =  
        `
        <p id="pdf1">The</p>
        <p id="pdf2">Grammar and Dictionary</p>
        <p id="pdf3">of the</p>
        <p id="pdf4" class="language-name">kerbekulo</p>
        <p id="pdf5">Language</p>
        <hr>
        `
    }
    if(randomNum === 1) {
        coverPageDiv.innerHTML =  
        `
        <p id="pdf4-1" class="language-name">kerbekulo</p>
        <p id="pdf2">A Reference Grammar</p>
        <hr>
        `
    }
    if(randomNum === 2) {
        coverPageDiv.innerHTML =  
        `
        <p id="pdf4-1" class="language-name">kerbekulo</p>
        <p id="pdf2-2">An Essential Grammar</p>
        <hr>
        `
    }
    if(randomNum === 3) {
        coverPageDiv.innerHTML =  
        `
        <p id="author-name">Ódónoñ's</p>
        <p id="pdf2-3"><span id="cover-page-language-name" class="language-name">kerbekulo</span> Grammar</p>
        <hr>
        `
    }
    if(randomNum === 4) {
        coverPageDiv.innerHTML =  
        `
        <p id="pdf2-3">A <span id="cover-page-language-name" class="language-name">kerbekulo</span> GRAMMAR</p>
        <hr>
        <p id="pdf2-2">FOR STUDENTS</p>
        `
    }
    if(randomNum === 5) {
        coverPageDiv.innerHTML =  
        `
        <p id="pdf2-3"><span id="cover-page-language-name" class="language-name">kerbekulo</span></p>
        <hr>
        <p id="pdf2-2">An Essential Grammar</p>
        `
    }
    if(randomNum === 6) {
        coverPageDiv.innerHTML =  
        `
        <p id="pdf2-6"><span id="cover-page-language-name" class="language-name">kerbekulo</span></p>
        <hr>
        <p id="pdf1-6">An Introduction to the Language of the <span class="language-speaker-name">Kerbekulian</span> People</p>
        `
    }
    if(randomNum === 7) {
        coverPageDiv.innerHTML =  
        `
        <p id="pdf2-6">The <span id="cover-page-language-name" class="language-name">kerbekulo</span> Language</p>
        <hr>
        <p id="pdf1-6">A Dictionary and Grammatical Sketch</p>
        `
    }
    if(randomNum === 8) {
        coverPageDiv.innerHTML =  
        `
        <p id="pdf1-8">The Essential Guide to the</p>
        <p id="pdf2-6"><span id="cover-page-language-name" class="language-name">kerbekulo</span></p>
        <p id="pdf5">Language</p>
        <hr>
        <p id="pdf1-6">The Language of <span class="language-country">Kerbekulia</span></p>
        `
    }
    if(randomNum === 9) {
        coverPageDiv.innerHTML =  
        `
        <p id="pdf2-6"><span id="cover-page-language-name" class="language-name">kerbekulo</span></p>
        <hr>
        <p id="pdf1-6">Grammar</p>
        <p id="pdf1-6">Texts</p>
        <p id="pdf1-6">Dictionary</p>
        `
    }
    if(randomNum === 10) {
        coverPageDiv.innerHTML =  
        `
        <p id="pdf1-8">A Description of the</p>
        <p id="pdf2-6"><span id="cover-page-language-name" class="language-name">kerbekulo</span></p>
        <p id="pdf5">Language</p>
        <hr>
        <p id="pdf1-6">Grammar</p>
        <p id="pdf1-6">Naming Practices</p>
        <p id="pdf1-6">Texts</p>
        <p id="pdf1-6">Dictionary</p>
        `
    }
    document.getElementById("title-for-pdf").appendChild(coverPageDiv)

    let logoDiv = document.createElement("div");
    logoDiv.setAttribute("id", "logo-div");
    let logo = document.createElement("img");
    logo.src = "images/Ogma logo compressed.png";
    logo.style.maxWidth = "10cm";
    if(randomNum !== 10) {
        logo.style.paddingTop = "5cm"
    }
    logo.setAttribute("id", "pdf-logo");
    document.getElementById("title-for-pdf").appendChild(logoDiv)
    document.getElementById("logo-div").appendChild(logo)

}

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", makePDFCoverPage);