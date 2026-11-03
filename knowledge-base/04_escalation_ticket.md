# VoltaRete – Escalation e apertura ticket

> Documento sintetico creato per un progetto dimostrativo. VoltaRete è un operatore fittizio.

## Quando aprire un ticket

Aprire sempre un ticket quando:

- la procedura di primo livello non risolve il problema dopo **due tentativi**;
- il codice di errore ha priorità P1 (vedi *Catalogo errori*);
- serve un intervento vietato dal documento *Sicurezza*;
- serve un ricambio (ventole, filtri danneggiati, display, terminale POS);
- il problema è stato risolto ma si è ripetuto più di 3 volte negli ultimi 30 giorni sulla stessa colonnina.

## Informazioni obbligatorie

Un ticket completo contiene:

1. **Codice sito** (formato `VR-XXX-00`, es. `VR-MIL-01`).
2. **Codice colonnina** (formato `VR-XXX-00-C0`, es. `VR-MIL-01-C2`).
3. **Codice di errore** se presente (es. `E-310`).
4. **Descrizione** di cosa è stato osservato e quali procedure sono già state tentate.
5. **Priorità** (P1–P4) secondo il *Catalogo errori*.
6. **Stato della colonnina** dopo l'intervento: in servizio, in servizio degradato, fuori servizio.

L'assistente vocale deve raccogliere queste informazioni dal tecnico **prima** di aprire il ticket, una domanda alla volta, e riepilogarle per conferma.

## Livelli di supporto

- **Primo livello**: il tecnico in sito con l'assistente vocale. Gestisce reset, verifiche visive, pulizie, messa fuori servizio.
- **Secondo livello**: tecnico specializzato abilitato ai lavori elettrici. Gestisce sostituzioni di componenti e guasti elettrici.
- **Centro di controllo**: monitora le colonnine da remoto, può verificare lo stato online/offline e riavviare da remoto.

## Tempi di intervento per priorità

| Priorità | Tempo massimo di intervento | Chi interviene |
| --- | --- | --- |
| P1 | 4 ore | Secondo livello, reperibile |
| P2 | 24 ore | Secondo livello |
| P3 | 72 ore | Primo o secondo livello |
| P4 | Programmato | Primo livello |
