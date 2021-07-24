import minOperations from "./crawler_log_folder";

describe("Crawler log folder tests", function () {
  test("First example", () => {
    const logs = ["d1/", "d2/", "../", "d21/", "./"];
    const output = 2;
    expect(minOperations(logs)).toEqual(output);
  });
  test("Second example", () => {
    const logs = ["d1/", "d2/", "./", "d3/", "../", "d31/"];
    const output = 3;
    expect(minOperations(logs)).toEqual(output);
  });
  test("Third example", () => {
    const logs = ["d1/", "../", "../", "../"];
    const output = 0;
    expect(minOperations(logs)).toEqual(output);
  });
});
