
// Step 1: Recursive function. Returns pAncestors and qAncestors
// Have 2 hash sets/arrays to store ancestors for each node
    // pAncestors
    // qAncestors

// Have 2 hash sets/arrays to store ancestors for each node
    // pFound
    // qFound

// Starting at the root node, traverse the tree
    // Save the ancestors of p and q you find in your journey ???? left vs right
    // When you find p, set pFound to true
    // When you find q, set qFound to true

// At every recursive check, check if both p and q have been found
    // If so, stop the recursion


// Step 2: Find LCA/Intersection. 
// Identify the longest array to use to loop from the end
// Using a nested loop, find the intersection of the 2 has sets
    // e.g.
    // [3,5]
    // [3,5,2,4]

