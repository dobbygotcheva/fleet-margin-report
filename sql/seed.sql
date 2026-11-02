INSERT INTO vehicles (id, registration_number, active) VALUES
    (1, 'CB1111AB', TRUE),
    (2, 'CB2222AB', TRUE),
    (3, 'CB9999XX', FALSE);

INSERT INTO transports (id, vehicle_id, status, completed_at, revenue_eur) VALUES
    (1, 1, 'completed', '2026-09-15 10:00:00', 600.00),
    (2, 2, 'completed', '2026-09-20 12:00:00', 500.00),
    (3, 1, 'completed', '2026-08-31 23:59:00', 999.00),
    (4, 2, 'planned', '2026-09-10 08:00:00', 100.00),
    (5, 3, 'completed', '2026-09-12 08:00:00', 800.00);

INSERT INTO expense_items (id, transport_id, amount_eur) VALUES
    (1, 1, 200.00),
    (2, 1, 100.00),
    (3, 2, 200.00),
    (4, 3, 1.00),
    (5, 5, 50.00);
