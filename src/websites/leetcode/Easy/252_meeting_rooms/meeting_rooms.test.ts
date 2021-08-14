import canAttendMeetings from "./meeting_rooms";

describe("252 meeting rooms tests", function () {
  test("First example", () => {
    const input = [
      [0, 30],
      [5, 10],
      [15, 20],
    ];
    const output = false;
    expect(canAttendMeetings(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [
      [7, 10],
      [2, 4],
    ];
    const output = true;
    expect(canAttendMeetings(input)).toEqual(output);
  });
});
