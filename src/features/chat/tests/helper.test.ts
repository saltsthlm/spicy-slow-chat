import { describe, it } from "node:test";
import { equal } from "node:assert/strict";
import { numberOfdaysSinceMonday } from "../helper";

describe("Date helper:", () => {
  it("should return correct number of days since Monday from given timestamp-date", () => {
    const sunday = new Date("Novemver 17, 2024 23:13:00");
    const daysSinceMonday = 6;

    const result = numberOfdaysSinceMonday(sunday);

    equal(result, daysSinceMonday);
  });
});
