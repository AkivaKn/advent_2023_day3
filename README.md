# Gear Ratios Advent of Code

[Challenge instructions](https://adventofcode.com/2023/day/3)

## Challenge Description

Part 1 of the challenge involves identifying and totalling all numeric "part numbers" in a 2d "engine schematic" that are adjacent (horizontally, vertically, or diagonally) to any symbols except for a period. Numbers not adjacent to symbols are excluded from the total.
Part 2 involves calculating the total gear ratios in an "engine schematic". A gear ratio is the multiplication of 2 numbers adjacent to a *. Only gears that have exactly two part numbers adjacent are included.

## Technologies used

- JavaScript
- Node
- Jest

## Setup

You will need to have Node.js and npm installed globally on your machine.

Clone the repo

```bash
git clone https://github.com/AkivaKn/advent_2023_day3.git
```

Install dependencies

```bash
npm install
```

Run tests
```bash
npm test
```

Run part 1

```bash
node gear_ratios_p1.js
```

Run part 2

```bash
node gear_ratios_p2.js
```

The result will be displayed in your terminal. To test with another input save the input in a .txt file and amend the file name accordingly in gear_ratios_p1.js line 52 and gear_ratios_p2.js line 56.

