// ================================================================
//  Level 4: Effekte und eigene Hooks -- AUFGABEN
//  Prüfen mit:  ./pruefen.sh 4
// ================================================================
import { useEffect, useState } from 'react';

// AUFGABE 4.1
// useSchalter ist ein eigener Hook. Er gibt [an, umschalten]
// zurück. umschalten dreht den Wert um.
export function useSchalter(anfang = false) {
  return [false, () => {}]; // TODO
}

// AUFGABE 4.2
// Titel setzt document.title auf `${anzahl} offen`, immer wenn
// sich anzahl ändert -- und nur dann.
export function Titel({ anzahl }) {
  // TODO
  return <p>{anzahl} offen</p>;
}

// AUFGABE 4.3
// Uhr zählt jede 50 ms um eins hoch und zeigt den Stand.
// Beim Aushängen muss der Zeitgeber aufhören -- sonst läuft er
// weiter und schreibt in eine Komponente, die es nicht mehr gibt.
export function Uhr() {
  const [stand, setStand] = useState(0);
  // TODO
  return <output>{stand}</output>;
}

// AUFGABE 4.4
// Laden ruft beim Einhängen die Funktion hole() auf und zeigt:
//   - während des Wartens: "lädt…"
//   - danach: den gelieferten Text
//   - bei einem Fehler: "Fehler: <text>"
// Eine Antwort, die nach dem Aushängen eintrifft, darf keinen
// Zustand mehr setzen.
export function Laden({ hole }) {
  return null; // TODO
}
