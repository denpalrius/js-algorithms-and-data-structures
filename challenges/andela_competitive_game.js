function numPlayers(k, scores) {
  // k is cut off rank cut
  //  Handle constraints
  if (
    !scores ||
    !k ||
    k > scores.length ||
    scores.length < 1 ||
    scores.length >= Math.pow(10, 5)
  ) {
    return 0;
  }

  // Sort the scores in desceding order
  scores.sort((a, b) => b - a);
  console.log(scores);

  const results = [];
  // Slice array to get the first k items
  // Remove the items where the score is 0
  //   Throw if there is an item with value greater than 100 and less than 1

  for (let i = 0; i < k; i++) {
    const score = scores[i];
    //   Validate constraints
    if (0 > score || score > 100) break;

    if (score > 0) {
      results.push(score);
    }
  }

  // Return array length
  return results.length;
}

// Simple tests
console.log("3", numPlayers(3, [100, 50, 50, 25]));
console.log("4", numPlayers(4, [20, 40, 60, 80, 100]));
console.log("3", numPlayers(3, [100, 100, 100, 25]));
console.log("2", numPlayers(2, [20, 100, 10, 60, 25, 40]));
// Edge case tests
console.log("2", numPlayers(3, [0, 0, 10, 25, 0]));
console.log("0", numPlayers(3, [0, 0, 0, 0, 0]));
console.log("1", numPlayers(3, [0, 0, 0, 2, 0]));
console.log("4", numPlayers(2, [100, 100, 100, 100, 25]));
