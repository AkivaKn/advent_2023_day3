const { fetchInputStr } = require("./data");
const { getNumberLocations } = require("./gear_ratios_p1");

exports.getGearLocations = (str) => {
  const gears = /\*/g;
  const gearLocations = [];
  while ((match = gears.exec(str)) != null) {
    gearLocations.push(match);
  }

  return gearLocations;
};

exports.getAdjacentParts = (row, index) => {
  const adjacentParts = [];
  const numberLocations = getNumberLocations(row);
  numberLocations.forEach((number) => {
    if (number.index >= index - number[0].length && number.index <= index + 1) {
      adjacentParts.push(number[0]);
    }
  });
  return adjacentParts;
};

exports.calculateTotalGearRatios = (engineSchematic) => {
  let totalGearRatios = 0;
  const engineRows = engineSchematic.split("\n");
  engineRows.forEach((row, index) => {
    const gearLocations = this.getGearLocations(row);
    gearLocations.forEach((gear) => {
      const adjacentPartsPreviousRow = this.getAdjacentParts(
        engineRows[index - 1],
        gear.index
      );
      const adjacentPartsCurrentRow = this.getAdjacentParts(
        engineRows[index],
        gear.index
      );
      const adjacentPartsNextRow = this.getAdjacentParts(
        engineRows[index + 1],
        gear.index
      );
      const adjacentParts = [
        ...adjacentPartsPreviousRow,
        ...adjacentPartsCurrentRow,
        ...adjacentPartsNextRow,
      ];
      if (adjacentParts.length === 2) {
        totalGearRatios += adjacentParts[0] * adjacentParts[1];
      }
    });
  });
  return totalGearRatios;
};

fetchInputStr("input.txt").then((inputStr) => {
  const gearRatiosTotal = this.calculateTotalGearRatios(inputStr);
  console.log(gearRatiosTotal);
});
