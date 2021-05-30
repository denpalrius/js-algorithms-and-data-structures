/**
 * Leetcode problem: https://leetcode.com/problems/unique-paths/submissions/
 * @param {number} m
 * @param {number} n
 * @return {number} uniquePaths
 */
var uniquePaths = function(m, n) {
    // create a 2 D array to store values: paths[rows,cols]
    const paths = [];

    // The first row and column have value 1 because the robot can only move right and down so its one path

    for (let height = 0; height < m; height++) {
        paths[(height, 0)] = 1;
    }

    for (let row = 0; row < n; row++) {
        paths[(0, row)] = 1;
    }

    // for each square, we calculate its value based on the sum of the value from the cell on the left and the one on top
    // since we can only move right or up
    for (let height = 1; height < m; height++) {
        for (let row = 1; row < n; row++) {
            paths[(height, row)] =
                paths[(height, row - 1)] + paths[(height - 1, row)];
        }
    }

    // return last value at paths[m-1 and n-1] since all the cells will have the number of unique paths
    return paths[(m - 1, n - 1)];
};