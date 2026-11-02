export function prepareFleetReport(rows, search = "") {
  const query = String(search).toLowerCase();
  return rows
    .filter(row =>
      String(row.registration_number ?? "")
        .toLowerCase()
        .includes(query)
    )
    .map(row => {
      const revenue = Number(row.revenue_eur ?? 0);
      const expenses = Number(row.expenses_eur ?? 0);
      return {
        ...row,
        margin_eur: revenue - expenses
      };
    })
    .sort((a, b) =>
      b.margin_eur - a.margin_eur ||
      String(a.registration_number).localeCompare(
        String(b.registration_number)
      )
    );
}
