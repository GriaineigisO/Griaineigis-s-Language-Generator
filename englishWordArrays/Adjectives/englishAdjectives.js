let adjectiveArray = [];
let comparativeAdjectiveArray = [];

function clearArrays() {
    adjectiveArray = [];
    comparativeAdjectiveArray = [];
}

//add adverb forms, and comparative and superlative forms (superlative forms come after "the" e.g "I lived the longest")

function addWords() {
    adjectiveArray.push("short");
    comparativeAdjectiveArray.push("shorter");

    adjectiveArray.push("able");
    comparativeAdjectiveArray.push("more&nbspable");

    adjectiveArray.push("abundant");
    comparativeAdjectiveArray.push("more&nbspabundant");

    adjectiveArray.push("afraid");
    comparativeAdjectiveArray.push("more&nbspafraid");

    adjectiveArray.push("alive");
    comparativeAdjectiveArray.push("more&nbspalive");

    adjectiveArray.push("alone");
    comparativeAdjectiveArray.push("more&nbspalone");

    adjectiveArray.push("angry");
    comparativeAdjectiveArray.push("angrier");

    adjectiveArray.push("awake");
    comparativeAdjectiveArray.push("more&nbspawake");

    adjectiveArray.push("bad");
    comparativeAdjectiveArray.push("worse");

    adjectiveArray.push("bald");
    comparativeAdjectiveArray.push("balder");

    adjectiveArray.push("bare");
    comparativeAdjectiveArray.push("barer");

    adjectiveArray.push("beautiful");
    comparativeAdjectiveArray.push("more&nbspbeautiful");

    adjectiveArray.push("big");
    comparativeAdjectiveArray.push("bigger");

    adjectiveArray.push("bitter");
    comparativeAdjectiveArray.push("more&nbspbitter");

    adjectiveArray.push("blind");
    comparativeAdjectiveArray.push("more&nbspblind");

    adjectiveArray.push("brown");
    comparativeAdjectiveArray.push("browner");

    adjectiveArray.push("cold");
    comparativeAdjectiveArray.push("colder");

    adjectiveArray.push("correct");
    comparativeAdjectiveArray.push("more&nbspcorrect");

    adjectiveArray.push("crooked");
    comparativeAdjectiveArray.push("more&nbspcrooked");

    adjectiveArray.push("damp");
    comparativeAdjectiveArray.push("more&nbspdamp");

    adjectiveArray.push("dark");
    comparativeAdjectiveArray.push("darker");

    adjectiveArray.push("deaf");
    comparativeAdjectiveArray.push("deafer");

    adjectiveArray.push("dear");
    comparativeAdjectiveArray.push("dearer");

    adjectiveArray.push("deep");
    comparativeAdjectiveArray.push("deeper");

    adjectiveArray.push("difficult");
    comparativeAdjectiveArray.push("more&nbspdifficult");

    adjectiveArray.push("dry");
    comparativeAdjectiveArray.push("drier");

    adjectiveArray.push("dumb");
    comparativeAdjectiveArray.push("dumber");

    adjectiveArray.push("early");
    comparativeAdjectiveArray.push("earlier");

    adjectiveArray.push("empty");
    comparativeAdjectiveArray.push("emptier");

    adjectiveArray.push("evil");
    comparativeAdjectiveArray.push("more&nbspevil");

    adjectiveArray.push("fast");
    comparativeAdjectiveArray.push("faster");

    adjectiveArray.push("fat");
    comparativeAdjectiveArray.push("fatter");

    adjectiveArray.push("fertile");
    comparativeAdjectiveArray.push("more&nbspfertile");

    adjectiveArray.push("firm");
    comparativeAdjectiveArray.push("firmer");

    adjectiveArray.push("flat");
    comparativeAdjectiveArray.push("flatter");

    adjectiveArray.push("foul");
    comparativeAdjectiveArray.push("fouler");

    adjectiveArray.push("free");
    comparativeAdjectiveArray.push("freer");
    
    adjectiveArray.push("fresh");
    comparativeAdjectiveArray.push("fresher");

    adjectiveArray.push("full");
    comparativeAdjectiveArray.push("fuller");

    adjectiveArray.push("fun");
    comparativeAdjectiveArray.push("funner");

    adjectiveArray.push("funny");
    comparativeAdjectiveArray.push("funnier");

    adjectiveArray.push("good");
    comparativeAdjectiveArray.push("better");

    adjectiveArray.push("gracious");
    comparativeAdjectiveArray.push("more&nbspgracious");

    adjectiveArray.push("gray");
    comparativeAdjectiveArray.push("grayer");

    adjectiveArray.push("green");
    comparativeAdjectiveArray.push("greener");

    adjectiveArray.push("half");
    comparativeAdjectiveArray.push("X");

    adjectiveArray.push("happy");
    comparativeAdjectiveArray.push("happier");

    adjectiveArray.push("hard");
    comparativeAdjectiveArray.push("harder");

    adjectiveArray.push("healthy");
    comparativeAdjectiveArray.push("healthier");

    adjectiveArray.push("high");
    comparativeAdjectiveArray.push("higher");

    adjectiveArray.push("hollow");
    comparativeAdjectiveArray.push("hollower");

    adjectiveArray.push("holy");
    comparativeAdjectiveArray.push("holier");

    adjectiveArray.push("hostile");
    comparativeAdjectiveArray.push("more&nbsphostile");

    adjectiveArray.push("hot");
    comparativeAdjectiveArray.push("hotter");

    adjectiveArray.push("hungry");
    comparativeAdjectiveArray.push("hungrier");

    adjectiveArray.push("impure");
    comparativeAdjectiveArray.push("more&nbspimpure");

    adjectiveArray.push("intelligent");
    comparativeAdjectiveArray.push("more&nbspintelligent");

    adjectiveArray.push("intense");
    comparativeAdjectiveArray.push("more&nbspintense");

    adjectiveArray.push("lean");
    comparativeAdjectiveArray.push("leaner");

    adjectiveArray.push("light&nbsp(of&nbspweight)");
    comparativeAdjectiveArray.push("lighter");

    adjectiveArray.push("long");
    comparativeAdjectiveArray.push("longer");

    adjectiveArray.push("loose");
    comparativeAdjectiveArray.push("looser");

    adjectiveArray.push("mild");
    comparativeAdjectiveArray.push("milder");

    adjectiveArray.push("moist");
    comparativeAdjectiveArray.push("moister");

    adjectiveArray.push("naked");
    comparativeAdjectiveArray.push("more&nbspnaked");

    adjectiveArray.push("narrow");
    comparativeAdjectiveArray.push("narrower");

    adjectiveArray.push("near");
    comparativeAdjectiveArray.push("nearer");

    adjectiveArray.push("new");
    comparativeAdjectiveArray.push("newer");

    adjectiveArray.push("noble");
    comparativeAdjectiveArray.push("nobler");

    adjectiveArray.push("normal");
    comparativeAdjectiveArray.push("more&nbspnormal");

    adjectiveArray.push("nourishing");
    comparativeAdjectiveArray.push("more&nbspnourishing");

    adjectiveArray.push("obvious");
    comparativeAdjectiveArray.push("more&nbspobvious");

    adjectiveArray.push("old");
    comparativeAdjectiveArray.push("older");

    adjectiveArray.push("other");
    comparativeAdjectiveArray.push("X");

    adjectiveArray.push("padded");
    comparativeAdjectiveArray.push("more&nbsppadded");

    adjectiveArray.push("pale");
    comparativeAdjectiveArray.push("paler");

    adjectiveArray.push("polluted");
    comparativeAdjectiveArray.push("more&nbsppolluted");

    adjectiveArray.push("powerful");
    comparativeAdjectiveArray.push("more&nbsppowerful");

    adjectiveArray.push("pure");
    comparativeAdjectiveArray.push("purer");

    adjectiveArray.push("quiet");
    comparativeAdjectiveArray.push("quieter");

    adjectiveArray.push("raw");
    comparativeAdjectiveArray.push("rawer");

    adjectiveArray.push("ready");
    comparativeAdjectiveArray.push("more&nbspready");

    adjectiveArray.push("real");
    comparativeAdjectiveArray.push("more&nbspreal");

    adjectiveArray.push("rich");
    comparativeAdjectiveArray.push("richer");

    adjectiveArray.push("right");
    comparativeAdjectiveArray.push("righter");

    adjectiveArray.push("rough");
    comparativeAdjectiveArray.push("rougher");
    
    adjectiveArray.push("rude");
    comparativeAdjectiveArray.push("ruder");

    adjectiveArray.push("scared");
    comparativeAdjectiveArray.push("more&nbspscared");

    adjectiveArray.push("sharp");
    comparativeAdjectiveArray.push("sharper");

    adjectiveArray.push("skinny");
    comparativeAdjectiveArray.push("skinnier");

    adjectiveArray.push("slippery");
    comparativeAdjectiveArray.push("more&nbspslippery");

    adjectiveArray.push("slow");
    comparativeAdjectiveArray.push("slower");

    adjectiveArray.push("small");
    comparativeAdjectiveArray.push("smaller");

    adjectiveArray.push("smooth");
    comparativeAdjectiveArray.push("smoother");

    adjectiveArray.push("soft");
    comparativeAdjectiveArray.push("softer");

    adjectiveArray.push("sour");
    comparativeAdjectiveArray.push("more&nbspsour");

    adjectiveArray.push("speckled");
    comparativeAdjectiveArray.push("more&nbspspeckled");

    adjectiveArray.push("stiff");
    comparativeAdjectiveArray.push("stiffer");

    adjectiveArray.push("stinky");
    comparativeAdjectiveArray.push("stinkier");

    adjectiveArray.push("strong");
    comparativeAdjectiveArray.push("stronger");

    adjectiveArray.push("tall");
    comparativeAdjectiveArray.push("taller");

    adjectiveArray.push("tasty");
    comparativeAdjectiveArray.push("tastier");

    adjectiveArray.push("thick");
    comparativeAdjectiveArray.push("thicker");

    adjectiveArray.push("thin");
    comparativeAdjectiveArray.push("thinner");

    adjectiveArray.push("tired");
    comparativeAdjectiveArray.push("more&nbsptired");

    adjectiveArray.push("tough");
    comparativeAdjectiveArray.push("tougher");

    adjectiveArray.push("true");
    comparativeAdjectiveArray.push("truer");

    adjectiveArray.push("unhealthy");
    comparativeAdjectiveArray.push("more&nbspunhealthy");

    adjectiveArray.push("unpleasant");
    comparativeAdjectiveArray.push("more&nbspunpleasant");

    adjectiveArray.push("useful");
    comparativeAdjectiveArray.push("more&nbspuseful");

    adjectiveArray.push("unusual");
    comparativeAdjectiveArray.push("X");

    adjectiveArray.push("violent");
    comparativeAdjectiveArray.push("more&nbspviolent");

    adjectiveArray.push("visible");
    comparativeAdjectiveArray.push("more&nbspvisible");

    adjectiveArray.push("weak");
    comparativeAdjectiveArray.push("weaker");

    adjectiveArray.push("weird");
    comparativeAdjectiveArray.push("weirder");

    adjectiveArray.push("wet");
    comparativeAdjectiveArray.push("wetter");

    adjectiveArray.push("white");
    comparativeAdjectiveArray.push("whiter");

    adjectiveArray.push("wide");
    comparativeAdjectiveArray.push("wider");

    adjectiveArray.push("wild");
    comparativeAdjectiveArray.push("wilder");

    adjectiveArray.push("wonderful");
    comparativeAdjectiveArray.push("more&nbspwonderful");

    adjectiveArray.push("yellow");
    comparativeAdjectiveArray.push("yellower");

    adjectiveArray.push("young");
    comparativeAdjectiveArray.push("younger");
}

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", clearArrays);
generateLanguageButton.addEventListener("click", addWords);

export {adjectiveArray, comparativeAdjectiveArray}