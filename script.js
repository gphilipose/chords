const menu = document.getElementById("key")
var last = 0; //have it whenever a song is clicked on, it brings up localstorage settings including 'last' value

/// add a save feature + more later on / when I get time

const flat = document.getElementById("flat");
const sharp = document.getElementById("sharp");

// rewrite array to exclude Ab, Bb, Db, Eb, and Gb - add an extra button to concert sharps to flats (for any key) + vice versa
// when changing key after button has been pushed, use sharp key conversion button and then change normally to chosen key
// change all sharp select menu options to also display flat - Ex: A# / Gb

let str = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]


//const chordsButton = getElementById("")



window.addEventListener("load", function() {
    localStorage.setItem("page", "HereIAm");


    let restore = localStorage.getItem("HereIAm")
    let restoreJson = JSON.parse(restore);

    let getContent = localStorage.getItem("HereIAm1");
    let content = JSON.parse(getContent);

    // if (restore){
    //     if(restoreJson.name=="HereIAm"){
    //         last = restoreJson.lastKey;
    //         menu.value = last;
    //         const chordLetters = document.getElementsByClassName("transpose")
    //         for(let i=0; i<chordLetters.length; i++) {
    //             chordLetters[i].innerHTML = content[i];
    //         }
    //     }
    // }
});

menu.addEventListener("input", function(){ menuEvent(); });

function menuEvent(){
    const chordLetters = document.getElementsByClassName("transpose")
    let num = Number(menu.value);
    transp(chordLetters, num);
    let temp = [];
    for (let i=0; i<chordLetters.length;i++){
        temp.push(chordLetters[i].innerHTML);
    }
    const content = JSON.stringify(temp);
    localStorage.setItem("HereIAm1", content);


     let settings = {
        name: "HereIAm",
        lastKey: last
    }
    const setString = JSON.stringify(settings);
    localStorage.setItem("HereIAm", setString);
}

flat.addEventListener("click", function() {
    const chordLetters = document.getElementsByClassName("transpose")
    for(let i=0; i< chordLetters.length; i++) {
        
        //let regular = chords[i].innerHTML.replace(/A(?![#b])|A#|Bb|B(?![#b])|C(?![#b])|C#|Db|D(?![#b])|D#|Eb|E(?![#b])|F(?![#b])|F#|Gb|G(?![#b])|G#|Ab/g, function(match){
            let regular = chordLetters[i].innerHTML.replace(/A#|C#|D#|F#|G#/g, function(match){
            switch (match) { //make all these mod 17 after
                case "A#": //'A':
                    return "Bb";
                case "C#":
                    return "Db";
                case "D#":
                    return "Eb";
                case "F#":
                    return "Gb";
                case "G#":
                    return "Ab";
                default:
                    return match;
            }
        });
        chordLetters[i].innerHTML = regular;
    }
})

function sharpFunction() {
    
    const chordLetters = document.getElementsByClassName("transpose")
    for(let i=0; i< chordLetters.length; i++) {
        
        //let regular = chords[i].innerHTML.replace(/A(?![#b])|A#|Bb|B(?![#b])|C(?![#b])|C#|Db|D(?![#b])|D#|Eb|E(?![#b])|F(?![#b])|F#|Gb|G(?![#b])|G#|Ab/g, function(match){
            let regular = chordLetters[i].innerHTML.replace(/Ab|Bb|Db|Eb|Gb/g, function(match){
            switch (match) { //make all these mod 17 after
                case "Ab": //'A':
                    return "G#";
                case "Bb":
                    return "A#";
                case "Db":
                    return "C#";
                case "Eb":
                    return "D#";
                case "Gb":
                    return "F#";
                default:
                    return match;
            }
        });
        chordLetters[i].innerHTML = regular;
    }
}
sharp.addEventListener("click", function() {
    sharpFunction();
})




function transp(chords, num) {
    sharpFunction();
    for(let i=0; i< chords.length; i++) {
        //let regular = chords[i].innerHTML.replace(/A(?![#b])|A#|Bb|B(?![#b])|C(?![#b])|C#|Db|D(?![#b])|D#|Eb|E(?![#b])|F(?![#b])|F#|Gb|G(?![#b])|G#|Ab/g, function(match){
            let regular = chords[i].innerHTML.replace(/A(?![#b])|A#|B(?![#b])|C(?![#b])|C#|D(?![#b])|D#|E(?![#b])|F(?![#b])|F#|G(?![#b])|G#/g, function(match){
            switch (match) { //make all these mod 17 after
                case str[last]: //'A':
                    return str[num];
                case str[(last+1)%12]:
                    return str[(num+1)%12];
                case str[(last+2)%12]:
                    return str[(num+2)%12];
                case str[(last+3)%12]:
                    return str[(num+3)%12];
                case str[(last+4)%12]:
                    return str[(num+4)%12];
                case str[(last+5)%12]:
                    return str[(num+5)%12];
                case str[(last+6)%12]:
                    return str[(num+6)%12];
                case str[(last+7)%12]:
                    return str[(num+7)%12];
                case str[(last+8)%12]:
                    return str[(num+8)%12];
                case str[(last+9)%12]:
                    return str[(num+9)%12];
                case str[(last+10)%12]:
                    return str[(num+10)%12];
                case str[(last+11)%12]:
                    return str[(num+11)%12];
                default:
                    return match;
            }
        })       
        chords[i].innerHTML = regular;
    }
    last = num;
}




