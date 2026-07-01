import { it, expect, describe } from "vitest"; //it lets us create a test //describe lets us group tests together
import { formatMoney } from "./money.js"; //import the function we want to test

describe("formatMoney", () => {
  it("formats 1999 cents as $19.99", () => {
    const result = formatMoney(1999);
    expect(result).toBe("$19.99");
  });

  it("displays 2 decimals", () => {
    expect(formatMoney(1090)).toBe("$10.90");
    expect(formatMoney(1000)).toBe("$10.00");
  });
});
