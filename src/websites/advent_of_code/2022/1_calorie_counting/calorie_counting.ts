const fs = require("fs");

function getArrayOfCaloriesSum() {
  const input = fs.readFileSync("input.txt", "utf8");
  const foodByElf = input.split(/\n\s*\n/);

  const arrayOfCaloriesSum = foodByElf.map((foodString) => {
    const food = foodString.split("\n").map((line) => {
      return Number(line);
    });

    return food.reduce((acc, food) => {
      return acc + food;
    }, 0);
  });

  return arrayOfCaloriesSum.sort((a, b) => b - a);
}

const arrayOfCaloriesSum = getArrayOfCaloriesSum();

// Task one:
console.log(arrayOfCaloriesSum[0]);

// Task two:
function getTopThreeCalories() {
  return arrayOfCaloriesSum.slice(0, 3).reduce((acc, calorie) => {
    return acc + calorie;
  });
}

console.log(getTopThreeCalories());
