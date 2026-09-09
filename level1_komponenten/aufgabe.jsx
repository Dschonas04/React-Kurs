// ================================================================
//  Level 1: Komponenten und Props -- AUFGABEN
//  Fülle die Komponenten aus. Prüfen mit:  ./pruefen.sh 1
// ================================================================

// AUFGABE 1.1
// Gruss zeigt "Hallo, <name>!" in einem <p> an.
export function Gruss({ name }) {
  return null; // TODO
}

// AUFGABE 1.2
// Preis zeigt den Betrag mit zwei Nachkommastellen und einem Euro
// dahinter an, etwa "19.90 €". Nutze toFixed(2).
export function Preis({ betrag }) {
  return null; // TODO
}

// AUFGABE 1.3
// Kasten zeigt den Titel in einem <h2> und darunter seine children.
// Beides steckt in einer <section>.
export function Kasten({ titel, children }) {
  return null; // TODO
}

// AUFGABE 1.4
// Zustand zeigt "online" in einem <span> mit der CSS-Klasse "an",
// wenn aktiv wahr ist, sonst "offline" mit der Klasse "aus".
export function Zustand({ aktiv }) {
  return null; // TODO
}

// AUFGABE 1.5
// Liste zeigt eine <ul> mit einem <li> je Eintrag. Jeder Eintrag
// ist ein Objekt { id, name }. Als key gehört die id, nicht der
// Index.
export function Liste({ eintraege }) {
  return null; // TODO
}
