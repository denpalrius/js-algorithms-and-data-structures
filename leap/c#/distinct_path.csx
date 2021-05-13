// using System;



// class Solution {

//     public int solution(Tree T) {

//         return CheckHeight(T,0);

//     }



//     // Create recursive function that returms the length of a subtree

//     private int CheckHeight(Tree T, int depth){

//         int leftSubtreeHeight = 0;
//         int rightSubTreeHeight = 0;

//         if(T.l !=null){
//              leftSubtreeHeight = CheckHeight(T.l, depth+1); // ret 2
//         }

//         if(T.r !=null){
//               rightSubTreeHeight = CheckHeight(T.r, depth+1); // ret 1
//          }

//         int greaterHeight = Math.Max(leftSubtreeHeight, rightSubTreeHeight);

//         return Math.Max(greaterHeight, depth);

//      }

//  private int distinctPath(Tree T, HashSet<int> path, int depth) {
//         if(path.Contains(T.x)) return depth;
//         Console.WriteLine(T.x);

//         // Add unique values to our path
//         path.Add(T.x); // [1]

//         int leftSubtreeDepth = 0;
//         int rightSubTreeDepth = 0;

//         if(T.l !=null){
//              leftSubtreeDepth = distinctPath(T.l, path, depth+1); // ret 2
//         }

//         if(T.r !=null){
//               rightSubTreeDepth = distinctPath(T.r, path, depth+1); // ret 1
//          }

//         return Math.Max(leftSubtreeDepth, rightSubTreeDepth);
        
//         // path.Remove(T.x);
//         // return greaterDepth + depth;
//     }
    
// }