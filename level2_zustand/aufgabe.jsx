// ================================================================
//  Level 2: Zustand und Ereignisse -- AUFGABEN
//  Prüfen mit:  ./pruefen.sh 2
// ================================================================
import { useState } from 'react';

// AUFGABE 2.1
// Zaehler zeigt den Stand in einem <output> und hat zwei Knöpfe:
// "mehr" erhöht um eins, "weniger" verringert um eins.
// Der Anfangswert kommt aus der Prop start (Vorgabe 0).
export function Zaehler({ start = 0 }) {
  return null; // TODO
}

// AUFGABE 2.2
// DoppelKlick hat einen Knopf "zweimal", der den Stand um ZWEI
// erhöht -- mit zwei getrennten Aufrufen der Setzfunktion.
// Achtung: setStand(stand + 1) zweimal ergibt nur +1.
export function DoppelKlick() {
  const [stand, setStand] = useState(0);
  return (
    <div>
      <output>{stand}</output>
      <button onClick={() => { /* TODO */ }}>zweimal</button>
    </div>
  );
}

// AUFGABE 2.3
// Eingabe ist ein kontrolliertes Textfeld. Darunter steht in einem
// <p> die Länge des Textes: "5 Zeichen".
export function Eingabe() {
  return null; // TODO
}

// AUFGABE 2.4
// Schalter zeigt einen Knopf, dessen Beschriftung zwischen "an" und
// "aus" wechselt. Er beginnt bei "aus".
export function Schalter() {
  return null; // TODO
}

// AUFGABE 2.5
// Warenkorb bekommt artikel als Prop: [{ id, name, preis }].
// Er zeigt jeden Artikel und darunter die Summe in einem Element
// mit data-testid="summe", zwei Nachkommastellen und " €".
// Die Summe ist KEIN eigener Zustand.
export function Warenkorb({ artikel }) {
  return null; // TODO
}
