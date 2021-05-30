using System.Collections.Generic;
using System.Linq;

class Solution {
    public int solution(int N, int[] A, int[] B) {
        int counter = 0;
        int M = A.Length;

        Dictionary<int, List<int>> adjacencyList = new Dictionary<int, List<int>>();
        Dictionary<int, int> connections = new Dictionary<int, int>();
        Dictionary<int, int> vertexValues = new Dictionary<int, int>();
        Dictionary<string, bool> visitedEdges = new Dictionary<string, bool>();

        for(int i = 0; i<M; i++){
            int aVal = A[i];
            int bVal = B[i];

            if(!adjacencyList.ContainsKey(aVal)){
                adjacencyList.Add(aVal, new List<int>(){bVal});
            } else{
                adjacencyList[aVal].Add(bVal);
            }

            if(!adjacencyList.ContainsKey(bVal)){
                adjacencyList.Add(bVal, new List<int>(){aVal});
            } else{
                adjacencyList[bVal].Add(aVal);
            }

            if(!connections.ContainsKey(aVal)){
                connections.Add(aVal, 1);
            } else{
                connections[aVal]++;
            }
            if(!connections.ContainsKey(bVal)){
                connections.Add(bVal, 1);
            } else{
                connections[bVal]++;
            }              
        }

        var orderedConnections = connections.OrderByDescending(key=> key.Value);
 
        int loopCounter = 0 ;
        foreach (KeyValuePair<int, int> item in orderedConnections){
            int vertexValue = N-loopCounter;
            vertexValues.Add(item.Key, vertexValue);
            
            loopCounter++;
        }

        foreach (KeyValuePair<int, List<int>> item in adjacencyList ){
            int vertex = item.Key;
            List<int> adjacentVertices = item.Value;

            foreach (int adjacentVertex in adjacentVertices ){
                string uniquEdge = $"{vertex}{adjacentVertex}";
                string duplicateEdge = $"{adjacentVertex}{vertex}";

                if(!visitedEdges.ContainsKey(uniquEdge) && !visitedEdges.ContainsKey(duplicateEdge)){
                    int edge = vertexValues[vertex]+vertexValues[adjacentVertex];
                    counter+=edge;
                    
                    visitedEdges.Add(uniquEdge, true);
                    visitedEdges.Add(duplicateEdge, true);
                }
            }
        }

        return counter;
    }
}

// construct the graph/connections using an adjacency list ✔
// Sample output:
// 1 : 2,4
// 2 : 1, 3, 4
// 3 : 2
// 4 : 1, 2

// As that happens, create a dictionary with number of connections  ✔
// Sample output:
// 1 : 2
// 2 : 3
// 3 : 1
// 4 : 2

// Order the vertices based on the number of connections in descending order ✔
// Sample output:
// 2 : 3
// 1 : 2
// 4 : 2
// 3 : 1
// 5 : 0

// Assign the values of N to each  vertex in the previous step starting from N ✔
// Sample output:
// 2 : 5
// 1 : 4
// 4 : 3
// 3 : 2
// 5 : 1

// Create a counter to store the final value  ✔

// Loop through the adjacency list and determine all edges, and increment the counter ✔
    // Edge case: Ensure we don't add reverse edges

