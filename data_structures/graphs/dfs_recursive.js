import { UndirectedGraph } from "./undirected_graph_adjacency_ls.js";

class RecursiveDFS extends UndirectedGraph {
  constructor() {
    super();
  }

  traverse(startVertex) {
    const visited = {};
    const results = [];
    const adjacencyList = this.adjacencyList; // Get the adjacency list from the graph

    const visitVertex = (vertex) => {
      if (!vertex || visited[vertex]) return; // Check for null or visited

      visited[vertex] = true;
      results.push(vertex);

      const neighbors = adjacencyList[vertex]; // Get the neighbors of the current vertex
      if (neighbors) {
        for (const neighbor of neighbors) {
          if (!visited[neighbor]) {
            visitVertex(neighbor);
          }
        }
      }
    };

    if (startVertex && adjacencyList[startVertex]) {
      // Check if the start vertex exists
      visitVertex(startVertex);
    }

    return results;
  }
}

export { RecursiveDFS };
