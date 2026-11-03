# VoltaRete – Catalogo codici di errore delle colonnine

> Documento sintetico creato per un progetto dimostrativo. VoltaRete è un operatore fittizio; codici, modelli e procedure non appartengono ad alcuna azienda reale.

Ogni codice ha una **priorità** che determina come aprire il ticket:

- **P1 – Critica**: rischio per persone o colonnina completamente ferma in un sito con meno di 2 punti di ricarica attivi. Intervento entro 4 ore.
- **P2 – Alta**: colonnina ferma ma il sito ha altri punti di ricarica funzionanti. Intervento entro 24 ore.
- **P3 – Media**: funzionamento degradato (potenza ridotta, un solo connettore fuori servizio). Intervento entro 72 ore.
- **P4 – Bassa**: difetti estetici o funzioni accessorie (display, illuminazione). Intervento programmato.

---

## E-101 – Connettore bloccato nel veicolo

**Sintomo**: la sessione è terminata ma il connettore non si sgancia dalla presa del veicolo.

**Causa probabile**: attuatore del blocco connettore della colonnina in stallo, oppure blocco lato veicolo ancora attivo.

**Prima verifica**: chiedere al cliente di bloccare e sbloccare il veicolo con la chiave. Molti veicoli rilasciano il connettore solo allo sblocco delle portiere.

**Procedura**: vedi *Procedure di reset → R-01 Sblocco connettore*.

**Priorità**: P2. Diventa P1 se il cliente è bloccato sul posto e non può ripartire.

---

## E-204 – Guasto di isolamento (Insulation fault)

**Sintomo**: la ricarica non parte o si interrompe dopo pochi secondi; la colonnina segnala "Isolation fault".

**Causa probabile**: dispersione verso terra sul cavo, sul connettore o nel veicolo. Spesso causata da umidità o da un cavo danneggiato.

**Prima verifica**: ispezione visiva del cavo e del connettore (tagli, schiacciamenti, acqua nella testa del connettore) **senza aprire la colonnina**.

**Procedura**: NON effettuare reset ripetuti. Mettere fuori servizio il connettore e aprire ticket. Vedi documento *Sicurezza*.

**Priorità**: P1. Il guasto di isolamento è sempre trattato come rischio elettrico.

---

## E-310 – Comunicazione OCPP persa

**Sintomo**: la colonnina risulta "Offline" sulla piattaforma di monitoraggio; in sito può funzionare in modalità locale oppure rifiutare le sessioni.

**Causa probabile**: modem 4G senza segnale, SIM scaduta, router del sito spento, configurazione del backend errata.

**Prima verifica**: controllare il LED del modem (verde fisso = connesso, giallo lampeggiante = ricerca rete, spento = non alimentato). Verificare il segnale con il pannello di servizio.

**Procedura**: vedi *Procedure di reset → R-03 Riavvio modem e comunicazione*.

**Priorità**: P3 se la colonnina eroga in modalità locale, P2 se rifiuta le sessioni.

---

## E-415 – Sovratemperatura modulo di potenza

**Sintomo**: la potenza erogata scende progressivamente (derating) oppure la sessione si interrompe con "Over temperature".

**Causa probabile**: filtri dell'aria intasati, ventole guaste, esposizione diretta al sole con temperature esterne superiori a 35 °C.

**Prima verifica**: controllare che le griglie di aerazione non siano ostruite e che le ventole girino all'avvio di una sessione.

**Procedura**: pulizia o sostituzione dei filtri (vedi *R-04*). Se le ventole non partono, aprire ticket per sostituzione.

**Priorità**: P3.

---

## E-520 – Pagamento rifiutato al terminale

**Sintomo**: il cliente avvicina la carta di pagamento ma la sessione non si avvia.

**Causa probabile**: terminale POS non connesso, carta non abilitata ai pagamenti contactless, preautorizzazione rifiutata dalla banca.

**Prima verifica**: chiedere al cliente di provare con un'altra carta o con l'app VoltaRete. Se nessun metodo funziona, il problema è del terminale.

**Procedura**: riavvio del terminale POS dal pannello di servizio (*R-05*).

**Priorità**: P3. Diventa P2 se il terminale è l'unico metodo di avvio disponibile nel sito.

---

## E-601 – Pulsante di emergenza premuto

**Sintomo**: colonnina completamente ferma, display con messaggio "Emergency stop".

**Causa probabile**: pulsante di arresto di emergenza premuto (volontariamente o per atto vandalico).

**Prima verifica**: chiedere se c'è stata una situazione di pericolo. Ispezionare visivamente la colonnina e l'area circostante.

**Procedura**: se non ci sono danni visibili né odore di bruciato, ruotare il pulsante per riarmarlo e attendere il riavvio (circa 2 minuti). Se ci sono danni, NON riarmare e aprire ticket.

**Priorità**: P2. P1 se ci sono danni visibili.

---

## E-702 – Display non funzionante

**Sintomo**: display nero o con artefatti; la colonnina può comunque erogare se avviata da app.

**Procedura**: riavvio del display dal pannello di servizio. Se non si risolve, aprire ticket per sostituzione.

**Priorità**: P4. P3 se il display è necessario per avviare la sessione (sito senza app).
