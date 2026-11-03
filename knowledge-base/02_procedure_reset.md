# VoltaRete – Procedure di reset e risoluzione in sito

> Documento sintetico creato per un progetto dimostrativo. VoltaRete è un operatore fittizio.

Regole generali:

- Prima di qualsiasi procedura, verificare che **non ci sia una sessione di ricarica in corso** con un cliente collegato, salvo dove indicato.
- Le procedure di questo documento si eseguono **dal pannello di servizio esterno** (sportello con chiave triangolare). Non richiedono l'apertura del vano di potenza.
- Se una procedura fallisce **due volte**, non ripeterla: aprire ticket di secondo livello.
- Al termine, verificare con una sessione di prova di almeno 2 minuti.

---

## R-01 – Sblocco connettore (per E-101)

1. Chiedere al cliente di bloccare e poi sbloccare il veicolo con la chiave.
2. Se il connettore resta bloccato, dal pannello di servizio selezionare **Servizio → Connettori → Sblocco forzato** sul connettore interessato.
3. Attendere 10 secondi e chiedere al cliente di estrarre il connettore con decisione ma senza fare leva.
4. Se ancora bloccato: **non forzare** il connettore con attrezzi. Esiste uno sblocco meccanico di emergenza sul veicolo (vedere il manuale del veicolo). Aprire ticket P1 se il cliente non può ripartire.

## R-02 – Riavvio software della colonnina

Da usare per blocchi generici del software, sessioni che non si avviano senza codice di errore, display bloccato.

1. Pannello di servizio → **Sistema → Riavvio software**.
2. Attendere il riavvio completo: circa 3 minuti per i modelli DC, 1 minuto per i modelli AC.
3. Controllare che lo stato sul display torni a "Disponibile".
4. Avviare una sessione di prova.

Non usare il riavvio software in caso di E-204 (guasto di isolamento) o E-601 con danni visibili.

## R-03 – Riavvio modem e comunicazione (per E-310)

1. Pannello di servizio → **Rete → Stato connessione**: annotare l'intensità del segnale (in dBm).
   - Migliore di -85 dBm: segnale buono.
   - Tra -85 e -100 dBm: segnale debole, possibile instabilità.
   - Peggiore di -100 dBm: segnale insufficiente; serve un'antenna esterna (aprire ticket P3).
2. Selezionare **Rete → Riavvio modem**. Attendere 2 minuti.
3. Verificare che il LED del modem sia verde fisso.
4. Chiedere conferma al centro di controllo che la colonnina risulti "Online". Se resta offline dopo due tentativi, aprire ticket indicando l'intensità del segnale rilevata.

## R-04 – Pulizia filtri aria (per E-415)

1. Mettere la colonnina in stato **Fuori servizio** dal pannello di servizio.
2. Rimuovere le griglie esterne di aerazione (4 viti, lato sinistro e destro).
3. Estrarre i filtri, pulirli con aria compressa a bassa pressione o sostituirli se molto sporchi o danneggiati.
4. Rimontare le griglie e rimettere in servizio.
5. Durante la sessione di prova, verificare che le ventole si avviino entro 30 secondi.

## R-05 – Riavvio terminale POS (per E-520)

1. Pannello di servizio → **Pagamenti → Riavvio terminale**.
2. Attendere che il terminale mostri il logo di pagamento contactless (circa 1 minuto).
3. Effettuare una transazione di prova con la carta di servizio del tecnico; la preautorizzazione viene annullata automaticamente.
4. Se il terminale non si accende, aprire ticket P3 (P2 se è l'unico metodo di avvio nel sito).

## R-06 – Messa fuori servizio di un connettore

Da usare quando un connettore è danneggiato o in caso di E-204.

1. Pannello di servizio → **Servizio → Connettori → Disabilita** sul connettore interessato.
2. Applicare il cartellino "Fuori servizio" sulla testa del connettore.
3. Verificare che sull'app VoltaRete il connettore risulti non disponibile.
4. Aprire ticket indicando il motivo.
