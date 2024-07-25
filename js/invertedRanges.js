// Для решения задачи необходимо определить,
//  какие диапазоны чисел между 0 и 100 не охвачены заданным списком диапазонов. Вот пошаговое объяснение решения:

// An empty list of ranges would return a list with a single range between 0 and 100:

// invertedRanges([]) == [[0, 100]];
// A list of ranges which cover numbers between 0 and 100 would return an empty list

// invertedRanges([[0, 100]]) == [];
// invertedRanges([[0, 50], [51, 100]]) == [];
// A list of ranges which cover some numbers between 0 and 100 must return the ranges that aren't covered

// invertedRanges([[0, 25], [51, 75]]) == [[26, 50], [76, 100]];

function invertedRanges(ranges) {
  const lowerBound = 0;
  const upperBound = 100;
  const inverted = [];

  if (ranges.length === 0) {
      return [[lowerBound, upperBound]];
  }

  const firstRange = ranges[0];
  if (firstRange[0] > lowerBound) {
      inverted.push([lowerBound, firstRange[0] - 1]);
  }

  for (let i = 0; i < ranges.length - 1; i++) {
      const currentEnd = ranges[i][1];
      const nextStart = ranges[i + 1][0];
      if (nextStart > currentEnd + 1) {
          inverted.push([currentEnd + 1, nextStart - 1]);
      }
  }

  const lastRange = ranges[ranges.length - 1];
  if (lastRange[1] < upperBound) {
      inverted.push([lastRange[1] + 1, upperBound]);
  }
  return inverted;
}
