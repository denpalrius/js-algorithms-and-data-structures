/**
 * Competitive game problem
 *
 * Time complexity - O(n)
 *
 * Space complexity - O(1)
 * @param {number} k minimum rank for leveing up (Cut off)
 * @param {number []} scores Scores from the team members
 * @returns {number} Number of players able to level up
 */
function solution(k, scores) {
  const n = scores.length;

  // Handle constraints
  if (n < 1 || n > Math.pow(10, 5) || k > n) {
    return 0;
  }

  // Create a leaderboard with all the occuring scores
  const leaderboard = {};
  for (let i = 0; i < n; i++) {
    const score = scores[i];
    leaderboard[score] = leaderboard[score] ? leaderboard[score] + 1 : 1;
  }

  let players = 0;

  //   Count all scores from the leaderboard that make the cut off
  for (let score = 100; score >= 0; score--) {
    if (leaderboard[score] && k > players) {
      players += leaderboard[score];
    }
  }

  return players;
}

const testDataSet = [
  { scores: [100, 50, 50, 25], k: 3, expectedRes: 3 },
  { scores: [20, 40, 60, 80, 100], k: 4, expectedRes: 4 },
  {
    scores: [50, 2, 10, 60, 15, 15, 15, 20, 20, 30, 3],
    k: 6,
    expectedRes: 8,
  },
  {
    scores: [2, 10, 15, 15, 15, 20, 20, 30, 3],
    k: 4,
    expectedRes: 6,
  },
];

for (data of testDataSet) {
  const results = solution(data.k, data.scores);
  console.log({ expected: data.expectedRes, got: results });
}
