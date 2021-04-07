/**
 * Genomic Range Query - Naive solution
 *
 * Time complexity - O(m * n)
 *
 * Space complexity - O(1)
 *
 * Codility report: https://app.codility.com/demo/results/trainingX6HFKH-QH2/
 * @param {string []} S DNA Sequence
 * @param {number []} P starting impact factors
 * @param {number []} Q ending impact factors
 * @returns {number []} minImpactFactors
 */
function GenomicRangeQuery(S, P, Q) {
  const M = P.length;
  const nucleotides = new Map([
    ["A", 1],
    ["C", 2],
    ["G", 3],
    ["T", 4],
  ]);

  const minImpactFactors = [];

  for (let i = 0; i < M; i++) {
    const startPosition = P[i];
    const endPosition = Q[i];

    let minImpactFactor = S[startPosition];

    for (let j = startPosition; j <= endPosition; j++) {
      const impactFactor = S[j];

      if (impactFactor < minImpactFactor) {
        minImpactFactor = impactFactor;
      }
    }

    minImpactFactors[i] = nucleotides.get(minImpactFactor);
  }

  return minImpactFactors;
}

function test() {
  const testData = [
    { S: "CAGCCTA", P: [2, 5, 0], Q: [4, 5, 6], expectedRes: [2, 4, 1] }, // C = 2 A = 1 G = 3 C = 2  C = 2 T = 4  A = 1
    { S: "C", P: [0, 0, 0], Q: [0, 0, 0], expectedRes: [2, 2, 2] },
    { S: "AA", P: [0, 1, 0], Q: [0, 1, 1], expectedRes: [1, 1, 1] },
    { S: "CC", P: [0, 1, 0], Q: [0, 1, 1], expectedRes: [2, 2, 2] },
    { S: "GG", P: [0, 1, 0], Q: [0, 1, 1], expectedRes: [3, 3, 3] },
    { S: "TT", P: [0, 0, 0], Q: [1, 1, 1], expectedRes: [4, 4, 4] },
    { S: "ATT", P: [0, 0, 0], Q: [1, 1, 1], expectedRes: [1, 1, 1] },
    { S: "CAGTCAT", P: [0, 1, 3], Q: [0, 5, 4], expectedRes: [2, 1, 2] },
  ];

  for (const data of testData) {
    const actualResults = GenomicRangeQuery(data.S, data.P, data.Q);
    console.log({
      "Expected results: ": data.expectedRes,
      "Actual results:": actualResults,
    });
  }
}

test();
