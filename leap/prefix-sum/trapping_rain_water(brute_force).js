/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length <= 0) return 0;

    let trappedWater = 0;

    for (let i = 1; i < height.length - 1; i++) {
        // Look for leftmost longest height
        let leftMostHeight = height[i];
        for (let j = i - 1; j >= 0; j--) {
            leftMostHeight = Math.max(height[j], leftMostHeight);
        }

        // Look for rightmost longest height
        let rightMostHeight = height[i];
        for (let j = i + 1; j < height.length; j++) {
            rightMostHeight = Math.max(height[j], rightMostHeight);
        }

        const minHeight = Math.min(rightMostHeight, leftMostHeight);
        trappedWater += (minHeight - height[i]);
    }

    return trappedWater;
};

// TODO:
// Enhance this using a prefixsum algorithm