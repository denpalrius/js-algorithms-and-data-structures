function GenomicRangeQuery(S: string, P: number[], Q: number[]) {
  // Contruct the prefix sum of each code
  // Store each prefix sum in its own array
  // Loop through M(P/Q.length)
  // Remember that MinImpact = Prefix_A[Q[i]]- Prefix_A[P[i-1]]
  // If

  const results: number[] = [];
  const M = P.length;
  const N = S.length;

  const prefixSum_A = [];
  const prefixSum_C = [];
  const prefixSum_G = [];
  const prefixSum_T = [];

  for (let i = 0; i < N; i++) {
    prefixSum_A[i] = prefixSum_A[i - 1] || 0;
    prefixSum_C[i] = prefixSum_C[i - 1] || 0;
    prefixSum_G[i] = prefixSum_G[i - 1] || 0;
    prefixSum_T[i] = prefixSum_T[i - 1] || 0;

    switch (S[i]) {
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

  // console.log("prefixSum_A: ", prefixSum_A);
  // console.log("prefixSum_C: ", prefixSum_C);
  // console.log("prefixSum_G: ", prefixSum_G);
  // console.log("prefixSum_T: ", prefixSum_T);

  
  return results;
}

GenomicRangeQuery("CAGCCTA", [2, 5, 0], [4, 5, 6]);
