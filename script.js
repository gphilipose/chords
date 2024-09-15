const menu = document.getElementById("key")
var last = 0;

let str = ["A", "A#", "Bb", "B", "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab"]
const chordLetters = document.getElementsByClassName("transpose")



window.addEventListener("load", function() {
    menu.value = "0";
});

// fix this:
menu.addEventListener("input", function(){
    //menu.value = "C";
    var lastLetter = str[last];
    for (let i = 0; i < chordLetters.length; i++) {
        let regular = new RegExp(`(${lastLetter})(?![#b])`, 'g');
        //let regular = new RegExp(`{$lastLetter}(?![#b])`, 'g');
        //let current = chordLetters[i].innerHTML.replace(`{$variableValue}(?![#b])`, str[menu.value])
        let current = chordLetters[i].innerHTML.replace(regular, str[menu.value]);
        //current = chordLetters[i].innerHTML.replace(/A(?!#)/g, str[1]);




        
        chordLetters[i].innerHTML = current;
        
    }
    last = menu.value; 

    
});