const { fetchInputStr } = require("./data");

exports.getNumberLocations = (str) => {
  const digits = /\d+/g;
  const numbers = [];
  while ((match = digits.exec(str)) != null) {
    numbers.push(match);
  }
  
  return numbers;
};

exports.checkIfSymbolBetweenIndices = (str, startIndex, endIndex) => {
  if (!str) return false;
  const symbols = /[^\d\.\s]/g;
  const adjacentStr = str.slice(startIndex, endIndex);
  return symbols.test(adjacentStr);
};

exports.calculateTotalPartNumbers = (engineSchematic) => {
  let totalPartNumbers = 0;
  let partNumbers = [];
  const engineRows = engineSchematic.split("\n");

  engineRows.forEach((row, index) => {
    const numberLocations = this.getNumberLocations(row);
    numberLocations.forEach((number) => {
      if (
        this.checkIfSymbolBetweenIndices(
          engineRows[index - 1],
          number.index === 0 ? 0 : number.index - 1,
          number.index + number[0].length + 1
        ) ||
        this.checkIfSymbolBetweenIndices(
          engineRows[index],
          number.index === 0 ? 0 : number.index - 1,
          number.index + number[0].length + 1
        ) ||
        this.checkIfSymbolBetweenIndices(
          engineRows[index + 1],
          number.index === 0 ? 0 : number.index - 1,
          number.index + number[0].length + 1
        )
      ) {
        totalPartNumbers += Number(number[0]);
        partNumbers.push(number[0]);
      }
    });
  });

  return totalPartNumbers;
};

fetchInputStr("input.txt").then((inputStr) => {
  const partsTotal = this.calculateTotalPartNumbers(inputStr);
  console.log(partsTotal);
});
