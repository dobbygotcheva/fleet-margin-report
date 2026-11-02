import { prepareFleetReport } from "./prepareFleetReport.js";

// Тест 1: Празен масив
console.log(prepareFleetReport([]));

// Тест 2: Търсене по регистрация
console.log(prepareFleetReport([
  {
    registration_number: "CB1234AB",
    revenue_eur: 500,
    expenses_eur: 200
  }
], "CB12"));

// Тест 3: Равни маржове
console.log(prepareFleetReport([
  {
    registration_number: "CB2222AB",
    revenue_eur: 500,
    expenses_eur: 200
  },
  {
    registration_number: "CB1111AB",
    revenue_eur: 600,
    expenses_eur: 300
  }
]));
