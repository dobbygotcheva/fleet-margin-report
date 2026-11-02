CREATE TABLE vehicles (
    id integer PRIMARY KEY,
    registration_number text,
    active boolean
);

CREATE TABLE transports (
    id integer PRIMARY KEY,
    vehicle_id integer REFERENCES vehicles(id),
    status text,
    completed_at timestamp,
    revenue_eur numeric(12,2)
);

CREATE TABLE expense_items (
    id integer PRIMARY KEY,
    transport_id integer REFERENCES transports(id),
    amount_eur numeric(12,2)
);
