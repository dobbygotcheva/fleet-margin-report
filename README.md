# Fleet margin report

September 2026 margin per active vehicle. The SQL query sums completed transports and their expenses. `prepareFleetReport` filters those rows by registration, recomputes margin, and sorts by margin descending, then registration ascending.

## Run

```bash
npm test
npm start
```

## SQL

PostgreSQL. Apply in order:

```bash
psql -f sql/schema.sql
psql -f sql/seed.sql
psql -f sql/fleet_report.sql
```

The seed keeps two active vehicles with the same margin (300). A transport before 1 September, a transport that is not completed, and an inactive vehicle stay out of the result. With equal margins, `CB1111AB` comes before `CB2222AB`.
