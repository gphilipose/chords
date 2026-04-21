// script.js - shared transposer logic

// State
let currentKey  = 0;   // will be set by the page
let useFlats    = false;

const NOTES_SHARP = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
const NOTES_FLAT  = ["A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"];
const KEY_NAMES   = ["A","A# / Bb","B","C","C# / Db","D","D# / Eb","E","F","F# / Gb","G","G# / Ab"];

function noteList() { return useFlats ? NOTES_FLAT : NOTES_SHARP; }

// Core transpose
// Transposes a chord symbol from oldKey to newKey (both 0-11 semitone indices)
function transposeChord(chordName, oldKey, newKey) {
  if (oldKey === newKey) return chordName;
  const notes = NOTES_SHARP;
  const flats  = NOTES_FLAT;

  // Match root note (with optional sharp/flat) at start of chord
  const match = chordName.match(/^([A-G][#b]?)(.*)/);
  if (!match) return chordName;
  const [, root, suffix] = match;

  // Find semitone index of root
  let idx = notes.indexOf(root);
  if (idx === -1) idx = flats.indexOf(root);
  if (idx === -1) return chordName;

  // Shift by (newKey - oldKey) semitones
  const newIdx = ((idx - oldKey + newKey) % 12 + 12) % 12;
  return noteList()[newIdx] + suffix;
}

// Render chords on a song page 
// Each .chord-segment has data-semitone (offset from baseKey) set at render time
function renderChords(newKey) {
  const segments = document.querySelectorAll(".chord-segment");
  segments.forEach(seg => {
    const semitone = parseInt(seg.dataset.semitone, 10);
    const noteIdx  = ((newKey + semitone) % 12 + 12) % 12;
    seg.textContent = noteList()[noteIdx];
    // Append suffix stored in data-suffix
    if (seg.dataset.suffix) seg.textContent += seg.dataset.suffix;
  });
  currentKey = newKey;
}

// Flat / Sharp toggle
function setAccidentals(flats) {
  useFlats = flats;
  const flatBtn  = document.getElementById("btn-flat");
  const sharpBtn = document.getElementById("btn-sharp");
  if (flatBtn)  flatBtn.classList.toggle("active",  flats);
  if (sharpBtn) sharpBtn.classList.toggle("active", !flats);
  renderChords(currentKey);
}

// Bind panel controls (shared across song pages)
function bindPanel(baseKey) {
  currentKey = baseKey;

  const keySelect = document.getElementById("key");
  if (keySelect) {
    keySelect.value = String(baseKey);
    keySelect.addEventListener("change", () => {
      const newKey = parseInt(keySelect.value, 10);
      renderChords(newKey);
      savePageState(newKey);
    });
  }

  const flatBtn  = document.getElementById("btn-flat");
  const sharpBtn = document.getElementById("btn-sharp");
  if (flatBtn)  flatBtn.addEventListener("click", () => setAccidentals(true));
  if (sharpBtn) sharpBtn.addEventListener("click", () => setAccidentals(false));
}

// Persist key per song (keyed by page URL)
function savePageState(key) {
  try {
    const pageId = location.pathname + location.search;
    localStorage.setItem("key:" + pageId, String(key));
  } catch(e) {}
}

function loadPageState(baseKey) {
  try {
    const pageId = location.pathname + location.search;
    const saved  = localStorage.getItem("key:" + pageId);
    return saved !== null ? parseInt(saved, 10) : baseKey;
  } catch(e) { return baseKey; }
}

// Free-text transposer (transposer.html)
function bindFreeTransposer() {
  const input   = document.getElementById("chord-input");
  const output  = document.getElementById("chord-output");
  const fromSel = document.getElementById("from-key");
  const toSel   = document.getElementById("to-key");
  const flatBtn  = document.getElementById("btn-flat");
  const sharpBtn = document.getElementById("btn-sharp");

  if (!input) return;

  function run() {
    const fromKey = parseInt(fromSel.value, 10);
    const toKey   = parseInt(toSel.value, 10);
    const lines   = input.value.split("\n");

    const result = lines.map(line => {
      // Replace chord tokens (words that look like chords)
      return line.replace(/\b([A-G][#b]?(maj|min|m|sus|aug|dim|add|M)?[0-9]?(?:\/[A-G][#b]?)?)\b/g, token => {
        // Try to transpose
        const m = token.match(/^([A-G][#b]?)(.*)/);
        if (!m) return token;
        const [, root, suffix] = m;
        let idx = NOTES_SHARP.indexOf(root);
        if (idx === -1) idx = NOTES_FLAT.indexOf(root);
        if (idx === -1) return token;
        const newIdx = ((idx - fromKey + toKey) % 12 + 12) % 12;
        return noteList()[newIdx] + suffix;
      });
    });

    output.textContent = result.join("\n");
  }

  input.addEventListener("input", run);
  fromSel.addEventListener("change", run);
  toSel.addEventListener("change", run);
  if (flatBtn)  flatBtn.addEventListener("click", () => { setAccidentals(true);  run(); });
  if (sharpBtn) sharpBtn.addEventListener("click", () => { setAccidentals(false); run(); });
}
