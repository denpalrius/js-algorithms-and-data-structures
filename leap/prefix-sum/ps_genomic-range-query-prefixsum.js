/**
 * Genomic Range Query - Prefix sum solution
 *
 * Time complexity - O(m + n)
 *
 * Space complexity - O(1)
 *
 * Codility report: https://app.codility.com/demo/results/training8X7F3U-PZ3
 * @param {string []} S DNA Sequence
 * @param {number []} P starting impact factors
 * @param {number []} Q ending impact factors
 * @returns {number []} minImpactFactors
 */
function GenomicRangeQuery(S, P, Q) {
  const M = P.length;
  const N = S.length;

  const prefixSum_A = [0];
  const prefixSum_C = [0];
  const prefixSum_G = [0];
  const prefixSum_T = [0];

  for (let i = 1; i <= N; i++) {
    prefixSum_A[i] = prefixSum_A[i - 1];
    prefixSum_C[i] = prefixSum_C[i - 1];
    prefixSum_G[i] = prefixSum_G[i - 1];
    prefixSum_T[i] = prefixSum_T[i - 1];

    const nucleotide = S[i - 1];

    switch (nucleotide) {
      case "A":
        prefixSum_A[i]++;
        break;
      case "C":
        prefixSum_C[i]++;
        break;
      case "G":
        prefixSum_G[i]++;
        break;
      default:
        prefixSum_T[i]++;
        break;
    }
  }

  console.log("prefixSum_A: ", prefixSum_A.join(","));
  console.log("prefixSum_C: ", prefixSum_C.join(","));
  console.log("prefixSum_G: ", prefixSum_G.join(","));
  console.log("prefixSum_T: ", prefixSum_T.join(","));

  const minImpactFactors = [];

  for (let j = 0; j < M; j++) {
    // Prefixsum[P->Q] = PrefixSum[Q] - PrefixSum[P-1]
    const start = P[j] + 1; // Start of substring
    const end = Q[j] + 1; // End position of substring

    const AChanged = prefixSum_A[end] - prefixSum_A[start - 1] > 0;
    const CChanged = prefixSum_C[end] - prefixSum_C[start - 1] > 0;
    const GChanged = prefixSum_G[end] - prefixSum_G[start - 1] > 0;

    if (AChanged) {
      minImpactFactors[j] = 1;
    } else if (CChanged) {
      minImpactFactors[j] = 2;
    } else if (GChanged) {
      minImpactFactors[j] = 3;
    } else {
      minImpactFactors[j] = 4;
    }
    console.log(
      "Substring: ",
      S.slice(start - 1, end) + " - " + minImpactFactors[j]
    );
  }

  return minImpactFactors;
}

function test() {
  const testData = [
    { S: "CAGCCTA", P: [2, 5, 0], Q: [4, 5, 6], expectedRes: [2, 4, 1] }, // C = 2 A = 1 G = 3 C = 2  C = 2 T = 4  A = 1
    // { S: "C", P: [0, 0, 0], Q: [0, 0, 0], expectedRes: [2, 2, 2] },
    // { S: "AA", P: [0, 1, 0], Q: [0, 1, 1], expectedRes: [1, 1, 1] },
    // { S: "CC", P: [0, 1, 0], Q: [0, 1, 1], expectedRes: [2, 2, 2] },
    // { S: "GG", P: [0, 1, 0], Q: [0, 1, 1], expectedRes: [3, 3, 3] },
    // { S: "TT", P: [0, 0, 0], Q: [1, 1, 1], expectedRes: [4, 4, 4] },
    // { S: "ATT", P: [0, 0, 0], Q: [1, 1, 1], expectedRes: [1, 1, 1] },
    // { S: "CAGTCAT", P: [0, 1, 3], Q: [0, 5, 4], expectedRes: [2, 1, 2] },
  ];

  console.clear();

  for (const data of testData) {
    const actualResults = GenomicRangeQuery(data.S, data.P, data.Q);
    console.log({
      "Nucleotide ": data.S,
      "Expected results": data.expectedRes,
      "Actual results": actualResults,
    });
    // console.log("<<----------------------->>");
  }
}

test();
