-- Synthetic demo data. VoltaRete is a fictional operator.
insert into public.sites (code, name, city, address) values
 ('VR-MIL-01','Milano Lorenteggio','Milano','Via Lorenteggio 240 (parcheggio centro commerciale)'),
 ('VR-MIL-02','Milano Tangenziale Est','Milano','Area di servizio Tangenziale Est, uscita 5'),
 ('VR-TOR-01','Torino Lingotto','Torino','Via Nizza 280 (parcheggio multipiano)'),
 ('VR-BOL-01','Bologna Fiera','Bologna','Viale della Fiera 20'),
 ('VR-ROM-01','Roma Eur','Roma','Viale Europa 100'),
 ('VR-CAT-01','Catania Etnapolis','Catania','Via Valcorrente 23, Belpasso');

insert into public.chargers (code, site_code, model, status, active_error) values
 ('VR-MIL-01-C1','VR-MIL-01','VR-DC150','charging',null),
 ('VR-MIL-01-C2','VR-MIL-01','VR-DC150','offline','E-310'),
 ('VR-MIL-01-C3','VR-MIL-01','VR-AC22','available',null),
 ('VR-MIL-02-C1','VR-MIL-02','VR-DC150','available',null),
 ('VR-MIL-02-C2','VR-MIL-02','VR-DC50','available',null),
 ('VR-TOR-01-C1','VR-TOR-01','VR-DC50','available',null),
 ('VR-TOR-01-C2','VR-TOR-01','VR-AC22','degraded','E-520'),
 ('VR-BOL-01-C1','VR-BOL-01','VR-DC150','degraded','E-415'),
 ('VR-BOL-01-C2','VR-BOL-01','VR-DC150','charging',null),
 ('VR-ROM-01-C1','VR-ROM-01','VR-DC50','available',null),
 ('VR-ROM-01-C2','VR-ROM-01','VR-DC150','out_of_service','E-204'),
 ('VR-CAT-01-C1','VR-CAT-01','VR-AC22','available','E-101'),
 ('VR-CAT-01-C2','VR-CAT-01','VR-DC50','available',null);

-- Fault history (last 30 days): VR-MIL-01-C2 has a recurring comms issue
insert into public.fault_events (charger_code, error_code, occurred_at) values
 ('VR-MIL-01-C2','E-310', now() - interval '26 days'),
 ('VR-MIL-01-C2','E-310', now() - interval '17 days'),
 ('VR-MIL-01-C2','E-310', now() - interval '8 days'),
 ('VR-MIL-01-C2','E-310', now() - interval '2 hours'),
 ('VR-BOL-01-C1','E-415', now() - interval '12 days'),
 ('VR-BOL-01-C1','E-415', now() - interval '1 day'),
 ('VR-TOR-01-C2','E-520', now() - interval '3 hours'),
 ('VR-ROM-01-C2','E-204', now() - interval '5 hours'),
 ('VR-CAT-01-C1','E-101', now() - interval '20 minutes');
