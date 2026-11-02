-- Период: 2026-09-01 включително до 2026-10-01 изключително
WITH transport_totals AS (
    SELECT
        t.id,
        t.vehicle_id,
        t.revenue_eur,
        COALESCE(SUM(e.amount_eur), 0) AS expenses
    FROM transports t
    LEFT JOIN expense_items e
        ON e.transport_id = t.id
    WHERE t.status = 'completed'
      AND t.completed_at >= '2026-09-01'
      AND t.completed_at < '2026-10-01'
    GROUP BY t.id, t.vehicle_id, t.revenue_eur
)
SELECT
    v.registration_number,
    COUNT(tt.id) AS completed_count,
    COALESCE(SUM(tt.revenue_eur), 0) AS revenue_eur,
    COALESCE(SUM(tt.expenses), 0) AS expenses_eur,
    COALESCE(SUM(tt.revenue_eur), 0)
        - COALESCE(SUM(tt.expenses), 0) AS margin_eur
FROM vehicles v
LEFT JOIN transport_totals tt
    ON tt.vehicle_id = v.id
WHERE v.active = TRUE
GROUP BY v.id, v.registration_number
ORDER BY margin_eur DESC, v.registration_number ASC;
