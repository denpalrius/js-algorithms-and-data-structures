import { UndirectedGraph } from "./undirected_graph_adjacency_ls.js";

class IterativeDFS extends UndirectedGraph {
  constructor() {
    super();
  }

  traverse(startVertex) {
    const visited = {};
    const results = [];
    const stack = [startVertex]; // Use a stack for iterative DFS

    if (!this.adjacencyList[startVertex]) {
      return []; // Return empty if startVertex doesn't exist
    }

    while (stack.length > 0) {
      const vertex = stack.pop();

      if (!visited[vertex]) {
        visited[vertex] = true;
        results.push(vertex);

        const neighbors = this.adjacencyList[vertex];
        if (neighbors) {
          // Push neighbors onto the stack in reverse order to maintain DFS order
          for (let i = neighbors.length - 1; i >= 0; i--) {
            if (!visited[neighbors[i]]) {
              stack.push(neighbors[i]);
            }
          }
        }
      }
    }

    return results;
  }
}

export { IterativeDFS };