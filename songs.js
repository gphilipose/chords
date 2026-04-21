// songs.js: Central song data store
// baseKey: index into chromatic scale (0=A, 1=A#, 2=B, 3=C, 4=C#, 5=D, 6=D#, 7=E, 8=F, 9=F#, 10=G, 11=G#)

const SONGS = {
  "amazinglove": {
    title: "You Are My King (Amazing Love)",
    artist: "Billy James Foote",
    baseKey: 10, // G
    sections: [
      {
        label: "Verse 1",
        parts: [
          { chords: [["G", 0], ["D", 4]], lyric: "I'm forgiven because You were forsaken" },
          { chords: [["Em", 7], ["C", 3]], lyric: "I'm accepted, You were condemned" },
          { chords: [["G", 0], ["D", 4], ["Em", 7]], lyric: "You, You are my King" },
        ]
      },
      {
        label: "Chorus",
        parts: [
          { chords: [["C", 3], ["G", 0]], lyric: "Amazing love, how can it be" },
          { chords: [["D", 4], ["G", 0]], lyric: "That You, my King, would die for me" },
          { chords: [["C", 3], ["G", 0]], lyric: "Amazing love, I know it's true" },
          { chords: [["D", 4], ["G", 0]], lyric: "And it's my joy to honor You" },
        ]
      },
      {
        label: "Bridge",
        parts: [
          { chords: [["C", 3], ["G", 0]], lyric: "You are my King" },
          { chords: [["C", 3], ["G", 0]], lyric: "You are my King" },
          { chords: [["D", 4]], lyric: "Jesus, You are my King" },
          { chords: [["C", 3], ["G", 0]], lyric: "You are my King" },
        ]
      }
    ]
  },

  "lordineedyou": {
    title: "Lord I Need You",
    artist: "Matt Maher",
    baseKey: 3, // C
    sections: [
      {
        label: "Verse 1",
        parts: [
          { chords: [["C", 0], ["G", 7]], lyric: "Lord, I come, I confess" },
          { chords: [["Am", 9], ["F", 5]], lyric: "Bowing here I find my rest" },
          { chords: [["C", 0], ["G", 7]], lyric: "Without You I fall apart" },
          { chords: [["Am", 9], ["F", 5]], lyric: "You're the one that guides my heart" },
        ]
      },
      {
        label: "Chorus",
        parts: [
          { chords: [["C", 0], ["G", 7]], lyric: "Lord, I need You, oh, I need You" },
          { chords: [["Am", 9], ["F", 5]], lyric: "Every hour I need You" },
          { chords: [["C", 0], ["G", 7]], lyric: "My one defense, my righteousness" },
          { chords: [["F", 5], ["C", 0]], lyric: "Oh God, how I need You" },
        ]
      }
    ]
  },

  "comebeholdthewondrousmystery": {
    title: "Come Behold The Wondrous Mystery",
    artist: "Matt Boswell",
    baseKey: 5, // D
    sections: [
      {
        label: "Verse 1",
        parts: [
          { chords: [["D", 0], ["A", 7]], lyric: "Come behold the wondrous mystery" },
          { chords: [["Bm", 9], ["G", 5]], lyric: "In the dawning of the King" },
          { chords: [["D", 0], ["A", 7]], lyric: "He the theme of heaven's praises" },
          { chords: [["G", 5], ["D", 0]], lyric: "Robed in frail humanity" },
        ]
      },
      {
        label: "Chorus",
        parts: [
          { chords: [["G", 5], ["D", 0]], lyric: "Oh that suffering servant crucified" },
          { chords: [["A", 7], ["D", 0]], lyric: "Died that I might live" },
        ]
      }
    ]
  },

  "greatisthyfaithfulness": {
    title: "Great Is Thy Faithfulness",
    artist: "Thomas O. Chisholm",
    baseKey: 7, // E
    sections: [
      {
        label: "Verse 1",
        parts: [
          { chords: [["E", 0], ["A", 5]], lyric: "Great is Thy faithfulness, O God my Father" },
          { chords: [["E", 0], ["B7", 9]], lyric: "There is no shadow of turning with Thee" },
          { chords: [["E", 0], ["A", 5]], lyric: "Thou changest not, Thy compassions they fail not" },
          { chords: [["E", 0], ["B7", 9], ["E", 0]], lyric: "As Thou hast been Thou forever wilt be" },
        ]
      },
      {
        label: "Chorus",
        parts: [
          { chords: [["A", 5], ["E", 0]], lyric: "Great is Thy faithfulness" },
          { chords: [["A", 5], ["B7", 9]], lyric: "Great is Thy faithfulness" },
          { chords: [["E", 0], ["A", 5]], lyric: "Morning by morning new mercies I see" },
          { chords: [["A", 5], ["E", 0], ["B7", 9], ["E", 0]], lyric: "All I have needed Thy hand hath provided" },
          { chords: [["A", 5], ["E", 0]], lyric: "Great is Thy faithfulness, Lord, unto me" },
        ]
      }
    ]
  },

  "agnusdei": {
    title: "Agnus Dei",
    artist: "Michael W. Smith",
    baseKey: 0, // A
    sections: [
      {
        label: "Verse",
        parts: [
          { chords: [["A", 0], ["D", 5]], lyric: "Alleluia, alleluia" },
          { chords: [["A", 0], ["E", 7]], lyric: "For the Lord God Almighty reigns" },
        ]
      },
      {
        label: "Chorus",
        parts: [
          { chords: [["D", 5], ["A", 0]], lyric: "Holy, holy are You, Lord God Almighty" },
          { chords: [["E", 7], ["A", 0]], lyric: "Worthy is the Lamb, worthy is the Lamb" },
        ]
      }
    ]
  },

  "howgreatisOurGod": {
    title: "How Great Is Our God",
    artist: "Chris Tomlin",
    baseKey: 3, // C
    sections: [
      {
        label: "Verse 1",
        parts: [
          { chords: [["C", 0]], lyric: "The splendor of the King, clothed in majesty" },
          { chords: [["Am", 9]], lyric: "Let all the earth rejoice, all the earth rejoice" },
          { chords: [["F", 5]], lyric: "He wraps Himself in light, and darkness tries to hide" },
          { chords: [["G", 7]], lyric: "And trembles at His voice, trembles at His voice" },
        ]
      },
      {
        label: "Chorus",
        parts: [
          { chords: [["C", 0]], lyric: "How great is our God, sing with me" },
          { chords: [["Am", 9]], lyric: "How great is our God, and all will see" },
          { chords: [["F", 5], ["G", 7]], lyric: "How great, how great is our God" },
        ]
      }
    ]
  },

  "oceans": {
    title: "Oceans (Where Feet May Fail)",
    artist: "Hillsong United",
    baseKey: 7, // E (Bm feel but E key)
    sections: [
      {
        label: "Verse 1",
        parts: [
          { chords: [["Bm", 9], ["G", 5]], lyric: "You call me out upon the waters" },
          { chords: [["D", 0], ["A", 7]], lyric: "The great unknown where feet may fail" },
          { chords: [["Bm", 9], ["G", 5]], lyric: "And there I find You in the mystery" },
          { chords: [["D", 0], ["A", 7]], lyric: "In oceans deep my faith will stand" },
        ]
      },
      {
        label: "Chorus",
        parts: [
          { chords: [["Bm", 9], ["G", 5]], lyric: "And I will call upon Your name" },
          { chords: [["D", 0], ["A", 7]], lyric: "And keep my eyes above the waves" },
          { chords: [["Bm", 9], ["G", 5]], lyric: "When oceans rise, my soul will rest in Your embrace" },
          { chords: [["D", 0], ["A", 7]], lyric: "For I am Yours and You are mine" },
        ]
      }
    ]
  },

  "10000reasons": {
    title: "10,000 Reasons (Bless The Lord)",
    artist: "Matt Redman",
    baseKey: 10, // G
    sections: [
      {
        label: "Chorus",
        parts: [
          { chords: [["G", 0], ["D", 4]], lyric: "Bless the Lord, O my soul, O my soul" },
          { chords: [["Em", 7], ["C", 3]], lyric: "Worship His holy name" },
          { chords: [["G", 0], ["D", 4]], lyric: "Sing like never before, O my soul" },
          { chords: [["C", 3], ["G", 0]], lyric: "I'll worship Your holy name" },
        ]
      },
      {
        label: "Verse 1",
        parts: [
          { chords: [["D", 4], ["Em", 7]], lyric: "The sun comes up, it's a new day dawning" },
          { chords: [["C", 3], ["G", 0]], lyric: "It's time to sing Your song again" },
          { chords: [["D", 4], ["Em", 7]], lyric: "Whatever may pass and whatever lies before me" },
          { chords: [["C", 3], ["D", 4]], lyric: "Let me be singing when the evening comes" },
        ]
      }
    ]
  }
};

// All songs index for the song list page
const SONG_INDEX = [
  { id: "agnusdei",                    title: "Agnus Dei",                            key: 0  },
  { id: "amazinglove",                 title: "You Are My King (Amazing Love)",        key: 10 },
  { id: "comebeholdthewondrousmystery",title: "Come Behold The Wondrous Mystery",      key: 5  },
  { id: "greatisthyfaithfulness",      title: "Great Is Thy Faithfulness",             key: 7  },
  { id: "howgreatisOurGod",            title: "How Great Is Our God",                  key: 3  },
  { id: "lordineedyou",                title: "Lord I Need You",                       key: 3  },
  { id: "oceans",                      title: "Oceans (Where Feet May Fail)",          key: 7  },
  { id: "10000reasons",                title: "10,000 Reasons (Bless The Lord)",       key: 10 },
  // Add more songs here following the same pattern
];


