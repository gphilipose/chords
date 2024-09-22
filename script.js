const menu = document.getElementById("key")
var last = 0; //have it whenever a song is clicked on, it brings up localstorage settings including 'last' value

let str = ["A", "A#", "Bb", "B", "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab"]


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

function transp(chords, num) {
    for(let i=0; i< chords.length; i++) {
        //let regular = new RegExp(`[(A(?![#b]))(A#)(Bb)(B(?![#b]))(C(?![#b]))(C#)(Db)(D(?![#b]))(D#)(Eb)(E(?![#b]))(F(?![#b]))(F#)(Gb)(G(?![#b]))(G#)(Ab)]`, 'g');
        let regular = chords[i].innerHTML.replace(/A(?![#b])|A#|Bb|B(?![#b])|C(?![#b])|C#|Db|D(?![#b])|D#|Eb|E(?![#b])|F(?![#b])|F#|Gb|G(?![#b])|G#|Ab/g, function(match){
            switch (match) { //make all these mod 17 after
                case str[last]: //'A':
                    return str[num];
                case str[(last+1)%17]:
                    return str[(num+1)%17];
                case str[(last+2)%17]:
                    return str[(num+2)%17];
                case str[(last+3)%17]:
                    return str[(num+3)%17];
                case str[(last+4)%17]:
                    return str[(num+4)%17];
                case str[(last+5)%17]:
                    return str[(num+5)%17];
                case str[(last+6)%17]:
                    return str[(num+6)%17];
                case str[(last+7)%17]:
                    return str[(num+7)%17];
                case str[(last+8)%17]:
                    return str[(num+8)%17];
                case str[(last+9)%17]:
                    return str[(num+9)%17];
                case str[(last+10)%17]:
                    return str[(num+10)%17];
                case str[(last+11)%17]:
                    return str[(num+11)%17];
                case str[(last+12)%17]:
                    return str[(num+12)%17];
                case str[(last+13)%17]:
                    return str[(num+13)%17];
                case str[(last+14)%17]:
                    return str[(num+14)%17];
                case str[(last+15)%17]:
                    return str[(num+15)%17];
                case str[(last+16)%17]:
                    return str[(num+16)%17];
                default:
                    return match;
            }
        })       
        chords[i].innerHTML = regular;
    }
    last = num;
}




