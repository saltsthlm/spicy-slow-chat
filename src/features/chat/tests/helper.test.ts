import { describe, it } from "node:test";
import { deepEqual } from "node:assert/strict";
import { getMondayOfCurrentWeek } from "../helper";

describe("Date helper:", () => {
  it("should return correct Monday timestamp given a date", () => {
    const date = new Date("Novemver 17, 2024 23:13:00");
    const monday = new Date("Novemver 11, 2024 00:00:00");

    const result = getMondayOfCurrentWeek(date);

    deepEqual(result, monday);
  });
});
