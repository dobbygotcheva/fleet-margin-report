import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { prepareFleetReport } from "../src/prepareFleetReport.js";

describe("prepareFleetReport", () => {
  it("returns an empty array when there are no rows", () => {
    assert.deepEqual(prepareFleetReport([]), []);
  });

  it("keeps rows whose registration matches the search and sets margin", () => {
    assert.deepEqual(
      prepareFleetReport(
        [
          {
            registration_number: "CB1234AB",
            revenue_eur: 500,
            expenses_eur: 200
          }
        ],
        "CB12"
      ),
      [
        {
          registration_number: "CB1234AB",
          revenue_eur: 500,
          expenses_eur: 200,
          margin_eur: 300
        }
      ]
    );
  });

  it("orders equal margins by registration ascending", () => {
    assert.deepEqual(
      prepareFleetReport([
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
      ]),
      [
        {
          registration_number: "CB1111AB",
          revenue_eur: 600,
          expenses_eur: 300,
          margin_eur: 300
        },
        {
          registration_number: "CB2222AB",
          revenue_eur: 500,
          expenses_eur: 200,
          margin_eur: 300
        }
      ]
    );
  });
});
