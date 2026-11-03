# VoltaRete – Modelli di colonnina installati

> Documento sintetico creato per un progetto dimostrativo. VoltaRete è un operatore fittizio e i modelli sono inventati.

## VR-DC150 – Colonnina in corrente continua ad alta potenza

- Potenza massima: 150 kW, condivisa tra due connettori.
- Connettori: 2 × CCS2.
- Tempo di riavvio software: circa 3 minuti.
- Raffreddamento: ad aria forzata con filtri sostituibili (da pulire ogni 6 mesi, ogni 3 mesi in siti polverosi).
- Errori più frequenti: E-415 (sovratemperatura in estate), E-310 (comunicazione).

## VR-DC50 – Colonnina in corrente continua

- Potenza massima: 50 kW.
- Connettori: 1 × CCS2, 1 × CHAdeMO.
- Tempo di riavvio software: circa 3 minuti.
- Note: il connettore CHAdeMO è meno usato; un suo guasto è di norma P3.

## VR-AC22 – Colonnina in corrente alternata

- Potenza massima: 22 kW per presa.
- Connettori: 2 prese Tipo 2 (il cliente usa il proprio cavo).
- Tempo di riavvio software: circa 1 minuto.
- Errori più frequenti: E-101 (blocco della presa), E-520 (pagamento).

## Stati di ricarica (IEC 61851, semplificato)

Il pannello di servizio mostra lo stato del dialogo tra colonnina e veicolo:

- **A** – veicolo non collegato.
- **B** – veicolo collegato, ricarica non ancora richiesta.
- **C** – ricarica in corso.
- **E / F** – errore o colonnina non disponibile.

Una colonnina che resta in stato **B** con il veicolo collegato indica di solito che il veicolo non richiede energia (batteria piena, programmazione della ricarica attiva sul veicolo) oppure che l'autorizzazione non è avvenuta.
