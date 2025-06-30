function getMinimumUnits(targetValue, unitSet) {
  const minUnits = Array(targetValue + 1).fill(Infinity);
  minUnits[0] = 0;

  for (let value = 1; value <= targetValue; value++) {
    for (let unit of unitSet) {
      if (value >= unit) {
        minUnits[value] = Math.min(minUnits[value], minUnits[value - unit] + 1);
      }
    }
  }

  return minUnits[targetValue];
}

function calculateAverageUnits(unitSet) {
  let totalUnitsUsed = 0;

  for (let value = 1; value < 100; value++) {
    totalUnitsUsed += getMinimumUnits(value, unitSet);
  }

  const averageUnits = totalUnitsUsed / 99;
  console.log(`Unit Set: [${unitSet.join(', ')}], Average Units Used: ${averageUnits.toFixed(2)}`);
}


const unitSet = [1, 2, 5, 10, 20, 50];
calculateAverageUnits(unitSet);
