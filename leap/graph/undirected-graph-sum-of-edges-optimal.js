// write your code in C# 6.0 with .NET 4.5 (Mono)

//declare list
//use DFC
// Get the node values
// Have one value as implitude variable we go updating if >

//return the value


// public int solution(int N, int[] A, int[] B) {
//     // write your code in C# 6.0 with .NET 4.5 (Mono)
    
    
    
//     int E = A.Length;
//     int[] countEdges = new int[N+1];
    
    
//     // for each edge increment the count at the starting point
//     // and at the end point
//     for (int i = 0; i < E; i++ )
//     {
//     countEdges[A[i]]++;
//     countEdges[B[i]]++;
//     }
    
    
    
//     // sort the array from largest number of edges from a node
//     // to the least
//     Array.Sort(countEdges);
//     int sum = 0;
    
    
    
//     // assign the N to the node with the largest number of connected
//     // edges
//     // assign 1 to the node with the least number of connected edges
//     // sum up the number of edges connected to a node * its value
//     for (int i = N; i > 0; i--)
//     {
//     sum += countEdges[i] * i;
//     }
    
    
    
//     return sum;