// ================================================================
//  Level 3: Listen und Formulare -- AUFGABEN
//  Prüfen mit:  ./pruefen.sh 3
// ================================================================
import { useState } from 'react';

// AUFGABE 3.1
// NeuerEintrag zeigt ein Formular mit einem beschrifteten Feld
// ("Aufgabe") und einem Knopf "hinzufügen".
// Beim Absenden ruft es onHinzufuegen mit dem getrimmten Text auf
// und leert das Feld. Leere Eingaben werden nicht gemeldet.
// Die Seite darf sich nicht neu laden.
export function NeuerEintrag({ onHinzufuegen }) {
  return null; // TODO
}

// AUFGABE 3.2
// Aufgabenliste verwaltet die Liste. Jeder Eintrag ist
// { id, text, erledigt }.
//
// Sie zeigt:
//   - das Formular von oben
//   - eine <ul> mit einem <li> je Eintrag
//   - je Eintrag eine Checkbox (beschriftet mit dem Text), die
//     erledigt umschaltet
//   - je Eintrag einen Knopf "löschen"
//   - ein Element mit data-testid="offen", das die Zahl der noch
//     offenen Einträge zeigt, etwa "2 offen"
//
// Erledigte Einträge bekommen am <li> die Klasse "erledigt".
export function Aufgabenliste({ anfang = [] }) {
  const [liste, setListe] = useState(anfang);
  return null; // TODO
}
