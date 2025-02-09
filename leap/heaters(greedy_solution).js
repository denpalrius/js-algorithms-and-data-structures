/**
 * https://leetcode.com/problems/heaters/
 * 
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    let maxRadius = 0;

    for (let i = 0; i < houses.length; i++) {
        let minRadius = Math.abs(heaters[0] - houses[i]);
        for (let j = 1; j < heaters.length; j++) {
            const radius = Math.abs(houses[i] - heaters[j]);
            if (minRadius > radius) {
                minRadius = radius;
            }
        }

        if (minRadius > maxRadius) {
            maxRadius = minRadius;
        }
    }

    return maxRadius;
};

// Python solution using bit manipulation
// class Solution:
//     def findRadius(self, houses: List[int], heaters: List[int]) -> int:

//         #Initialize a variable to store minimum radius
//         radius = 0

//         #Sort the heaters
//         heaters.sort() 

//         #Iterate through hpouses
//         for house in houses: 
//             #Find closest heater 
//             minDist = self.closestHeater(house, heaters)

//             #Compare minDist with radius so far 
//             radius = max(radius, minDist)

//         return radius 


//     def closestHeater(self, currHouse: int, heaters: List[int]) -> int: 

//         low = 0

//         high = len(heaters) - 1

//         #Set minimum distance to largest possible number
//         minDist = float('inf')

//         while(low <= high):

//             mid= int((low + high) / 2)

//             midHse = heaters[mid]

//             dist = midHse - currHouse

//             if abs(dist) < minDist: 
//                 minDist = abs(dist)

//             if dist == 0: 
//                 return 0 

//             if dist > 0: 
//                 #check towards the left
//                 high = mid - 1
//             elif dist < 0: 
//                 # check towards the right
//                 low = mid + 1

//         return minDist