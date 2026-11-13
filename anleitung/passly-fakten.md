<!-- Kopie von tokn-on-sol/scripts/blog/fakten.md, Stand 2026-11-13. Lokal immer das Original lesen; diese Kopie ist nur für Cloud-Sitzungen ohne das Hauptrepo. Nachziehen: npm run fakten -->
# Fakten über Passly (einzige Quelle für Produktaussagen)

Alles, was ein Artikel über Passly behauptet, muss hier stehen. Was hier nicht
steht, gibt es für den Artikel nicht. Lieber eine Funktion weglassen als eine
erfinden. Stand: 2026-11-05. Bei jeder Produktänderung, die Veranstalter sehen,
diese Datei mitziehen.

## Was Passly ist
- Ticketsystem für Veranstalter in Deutschland: Sportvereine, Clubs, Kultur, Vereinsfeste.
- Zielgruppe: Veranstalter, die bisher per Instagram ankündigen, per DM und Überweisung kassieren und an der Tür eine Namensliste abhaken. Nicht Großveranstalter.
- Website getpassly.de, auf Deutsch, du-Form.

## Geld
- Für Veranstalter kostenlos: keine Grundgebühr, keine Einrichtungskosten, keine Mindestlaufzeit, kein Anteil am Ticketpreis.
- Pro Ticket eine Servicegebühr, gestaffelt wie die Einkommensteuer: 7,9 % auf den Teil des Preises bis 15 €, 5,9 % auf den Teil von 15 bis 50 €, 4,5 % auf alles darüber. Mindestens 0,99 € pro Ticket. Kostenlose Tickets: keine Gebühr.
- Beispielrechnungen stehen unten (vom Skript aus dem echten Checkout-Code berechnet). Nur diese Zahlen verwenden oder auf /preise verweisen.
- Wer die Gebühr trägt, entscheidet der Veranstalter je Event: der Gast (Standard, kommt sichtbar obendrauf, Veranstalter bekommt den vollen Ticketpreis), halbe-halbe, oder der Veranstalter selbst (dann ist der Ticketpreis der Endpreis, praktisch für runde Preise auf Plakaten).
- Zahlungsarten im Checkout: Karte, Apple Pay, Google Pay. Keine anderen nennen.
- Zahlungsabwicklung über Stripe. Vor dem ersten bezahlten Verkauf prüft Stripe einmal die Identität des Veranstalters (Ausweis, Bankkonto; bei Vereinen und Firmen die entsprechenden Angaben).
- Auszahlung automatisch aufs Bankkonto ab dem Tag nach dem Event, bei der allerersten Auszahlung drei Tage nach dem Event. Pro Event kann ein längerer Puffer (bis 90 Tage) eingestellt werden. Eine vorzeitige Auszahlung kann im Dashboard angefragt werden. Jede Auszahlung ist einzeln nachvollziehbar.
- Absage: Sagt der Veranstalter ein Event ab, werden alle noch nicht ausgezahlten Zahlungen automatisch vollständig erstattet, inklusive Servicegebühr. Nur was der Zahlungsdienstleister bei einer Erstattung einbehält, wird mit der nächsten Auszahlung verrechnet.
- Einzelne Tickets kann der Veranstalter aus dem Dashboard erstatten.

## Pläne
- Kostenlos: unbegrenzt Events (öffentlich oder privat per Link), bis zu 20 Preiskategorien je Event, Markenseite unter getpassly.de/@name, eigene Vereins- oder Markenfarbe, Einlass-Scanner im Browser auch ohne Empfang, Türlinks fürs Personal ohne eigenen Zugang, Team mit bis zu fünf Zugängen und eigenen Rechten, Rabattcodes (Prozent, Betrag, Mitgliederpreis), Gästeliste über 100-%-Codes, Abendkasse für Barverkauf, Rückgabe und Neuverkauf zum Originalpreis, Pässe für ganze Reihen (Dauerkarten), Auswertung (Umsatz, Verlauf, Funnel, Kanäle, Prognose), Warteliste bei Ausverkauf, Nachricht an alle Käufer eines Events, bis zu 500 kostenlose Tickets je Event.
- Pro (monatlich oder jährlich, jederzeit zum Ende der Laufzeit kündbar; Preis nie nennen, auf /preise verweisen): Kundenübersicht, Segmente (Stammgäste, Neue, Gefährdete, VIP), Kohorten, E-Mail-Kampagnen an Segmente, Treueprogramm mit bis zu fünf Stufen, eigene Abzeichen, CSV-Export der Kundenliste, Team bis 50 Zugänge, Aktivitätsprotokoll, mehr als 500 Gratistickets, hervorgehobenes Event auf dem Profil. An der Servicegebühr ändert Pro nichts.

## Verkauf
- Gäste kaufen auf der Eventseite, mit oder ohne Konto. Ohne Konto bekommen sie einen Bestell-Link per E-Mail, der das Ticket ist.
- Anmeldung für Konten per E-Mail-Code, ohne Passwort.
- Pro Bestellung einstellbar 1 bis 10 Tickets.
- Preiskategorien, auf Wunsch gruppiert in Bereiche (z. B. Südseite: VIP, Standard).
- Mehrtägige Events (z. B. Festival von Freitag bis Sonntag).
- Mindestalter als Hinweis (ab 16, ab 18), wird an der Tür angezeigt, nicht automatisch geprüft.
- Virtueller Warteraum für Vorverkaufsstarts mit großem Andrang.
- Vorlagen: ein Event ohne Datum speichern und daraus viele Termine auf einmal anlegen (bis 60 pro Durchgang, z. B. einen ganzen Spielplan einfügen).
- Locations: Spielstätte mit Bereichen und Kapazitäten speichern und für neue Events übernehmen.
- Ticketkarte zum Einbinden auf der eigenen Vereinswebsite.
- QR-Code des Event-Links für Plakate (PNG und SVG für die Druckerei).
- Event duplizieren für das nächste Mal.

## Pässe (Dauerkarten, Saisonkarten, Abos)
- Ein Ticket für viele Termine. Eigene Kategorien mit eigenem Preis und eigener Kapazität; ein Pass hält in jedem Spiel einen Platz frei.
- Verkaufszeitraum einstellbar. „Später einsteigen wird günstiger": der Preis sinkt mit jedem vergangenen Termin, mit Mindestpreis.
- An der Tür wird der Pass pro Termin einmal eingelassen.

## Einlass
- Gäste zeigen ihr Ticket auf dem Handy. Der QR-Code erneuert sich jede Minute; ein Screenshot funktioniert deshalb nicht. Was geprüft wird: dass das Ticket echt ist, dass es der Person gehört, die es zeigt, und dass es noch nicht eingelassen wurde.
- Gescannt wird mit dem Handy im Browser, ohne App. Mehrere Geräte gleichzeitig.
- Ohne Empfang scannt das Gerät weiter und gleicht später ab (der Stand wird alle 60 Sekunden geladen, solange Netz da ist).
- Türlinks: zeitlich begrenzter Zugang für Einlasspersonal ohne eigenes Konto, jederzeit widerrufbar.
- Gast suchen per E-Mail oder Ticketnummer (#PSL-XXXX), falls ein Handy leer ist.
- Wiedereinlass optional je Event: derselbe Code checkt aus und wieder ein, mit Sperrzeit gegen Weiterreichen.
- Kein statisches Ticket und kein PDF zum Einlass. Öffnet der Gast sein Ticket am Eventtag einmal mit Netz, wechselt der Code auch ohne Empfang weiter: in der App dauerhaft, im Browser nur, solange die Ticketseite offen bleibt. Sonst sucht das Team den Gast über E-Mail oder Ticketnummer.
- Abendkasse: Barverkauf an der Tür; alternativ zeigt die Kasse einen QR-Code, und der Gast kauft auf dem eigenen Handy (dann ist es ein normaler Online-Kauf).
- **Preis an der Abendkasse = Preis online, auf den Cent.** Der Gast zahlt bar genau das, was er online zahlen würde, also inklusive seines Anteils an der Servicegebühr (trägt der Gast die Gebühr: 8 € Ticket = 8,99 € bar). Der Veranstalter behält davon dasselbe wie online; die Servicegebühr aus Barverkäufen wird mit seiner nächsten Auszahlung verrechnet. Wer an der Tür einen runden Barpreis will, stellt für das Event ein, dass der Veranstalter die Gebühr trägt. Nie schreiben, die Abendkasse sei günstiger oder teurer als online.
- Online und Abendkasse verkaufen aus denselben Preiskategorien und demselben Bestand; es gibt kein eigenes Abendkassen-Kontingent und keine Überbuchung zwischen beiden. Wer Plätze für spontane Gäste zurückhalten will, setzt die Kapazität im Vorverkauf niedriger und erhöht sie am Spieltag.
- Dunkler Modus für den Scanner nachts.
- Markenname für den Kopierschutz: Passly Seal (/seal). Öffentlich prüfbares Ticketregister: Passly Proof (/proof).

## Gäste
- Weitergeben: Gast erstellt einen Weitergabe-Link, der Empfänger bekommt das Ticket.
- Rückgabe (wenn der Veranstalter sie freischaltet): bis zum Tag vor dem Event, Platz geht zum Originalpreis zurück in den Verkauf, nach Weiterverkauf bekommt der Gast den Ticketpreis abzüglich 10 % (mindestens 1 €) zurück. Kein Weiterverkauf über dem Originalpreis möglich.
- Tagesvorher-Erinnerung per E-Mail, Kalendereintrag zum Download.

## Was es NICHT gibt (nie behaupten)
- Keine Sitzplatzpläne mit Platzwahl, keine nummerierten Plätze.
- Keine Kartenzahlung per Lesegerät an der Abendkasse.
- Keine PayPal-Zahlung (nicht nennen).
- Keine Lastschrift, keine Rechnung auf Ziel.
- Kein Merch- oder Getränkeverkauf.
- Keine Kundenzahlen, Kundenlogos, Erfahrungsberichte (es gibt noch keine öffentlichen).
- Keine Aussagen über Wettbewerber oder deren Preise.
- Keine App-Pflicht, keine Aussagen über App-Stores.
