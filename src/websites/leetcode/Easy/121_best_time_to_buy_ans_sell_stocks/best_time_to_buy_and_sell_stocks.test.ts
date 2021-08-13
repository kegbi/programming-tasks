import maxProfit from "./best_time_to_buy_and_sell_stocks";

describe("136 Single number tests", function () {
  test("First example", () => {
    const input = [7, 1, 5, 3, 6, 4];
    const output = 5;
    expect(maxProfit(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [7, 6, 4, 3, 1];
    const output = 0;
    expect(maxProfit(input)).toEqual(output);
  });
});
