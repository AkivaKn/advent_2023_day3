const {
  getNumberLocations,
  checkIfSymbolBetweenIndices,
  calculateTotalPartNumbers,
} = require("../gear_ratios");
const { fetchInputStr } = require("../data");

describe("fetchInputStr: returns input file as a string", () => {
  test("Returns a string with a length of 100 when called with example input", () => {
    fetchInputStr("example.txt").then((inputStr) => {
      expect(typeof inputStr).toBe("string");
      expect(inputStr.length).toBe(109);
    });
  });
  test("Returns a string with a length of 19739 when called with full input", () => {
    fetchInputStr("input.txt").then((inputStr) => {
      expect(typeof inputStr).toBe("string");
      expect(inputStr.length).toBe(19739);
    });
  });
});

describe("getNumberLocations: Returns an array of regex matches with index keys", () => {
  test("Returns an array of array of regex matches with the correct values", () => {
    const inputStr = "467..114..";
    const matches = getNumberLocations(inputStr);
    expect(matches.length).toBe(2);
    expect(matches[0][0]).toBe('467');
    expect(matches[1].index).toBe(5)
  });
});

describe("checkIfSymbolBetweenIndices: Returns true if there is a symbol between the given indices, otherwise returns false", () => {
  test("Returns true when there is a symbol between the given indices", () => {
    const inputStr = "...4#...*.";
    expect(checkIfSymbolBetweenIndices(inputStr, 2, 5)).toBeTruthy();
  });
  test("Returns false when there is no symbol between the given indices", () => {
    const inputStr = "...4.£..*.";
    expect(checkIfSymbolBetweenIndices(inputStr, 0, 3)).toBeFalsy();
  });
});

describe("calculateTotalPartNumbers: Returns the parts total when passed an engine schematic string", () => {
  test("Returns correct total for example input", () => {
    fetchInputStr("example.txt").then((inputStr) => {
      expect(calculateTotalPartNumbers(inputStr)).toBe(4361);
    });
  });
});
