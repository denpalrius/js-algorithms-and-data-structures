class UndirectedGraphMatrix {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacencyMatrix = Array(vertices)
      .fill(null)
      .map(() => Array(vertices).fill(0));
    this.vertexMap = {}; // Map vertex names to indices
    this.indexMap = {}; // Map indices to vertex names
    for (let i = 0; i < vertices; i++) {
      this.vertexMap[i] = i; // Default: vertex names are indices
      this.indexMap[i] = i;
    }
  }

  setVertexNames(vertexNames) {
    if (vertexNames.length !== this.vertices) {
      throw new Error("Number of vertex names must match the number of vertices.");
    }
    for (let i = 0; i < this.vertices; i++) {
      this.vertexMap[vertexNames[i]] = i;
      this.indexMap[i] = vertexNames[i];
    }
  }

  addEdge(vertex1, vertex2) {
    const index1 = this.vertexMap[vertex1];
    const index2 = this.vertexMap[vertex2];
    if (index1 === undefined || index2 === undefined) {
      throw new Error("Invalid vertex names.");
    }
    this.adjacencyMatrix[index1][index2] = 1;
    this.adjacencyMatrix[index2][index1] = 1; // Undirected graph
  }

  removeEdge(vertex1, vertex2) {
    const index1 = this.vertexMap[vertex1];
    const index2 = this.vertexMap[vertex2];
    if (index1 === undefined || index2 === undefined) {
      throw new Error("Invalid vertex names.");
    }
    this.adjacencyMatrix[index1][index2] = 0;
    this.adjacencyMatrix[index2][index1] = 0;
  }

  hasEdge(vertex1, vertex2) {
    const index1 = this.vertexMap[vertex1];
    const index2 = this.vertexMap[vertex2];
    if (index1 === undefined || index2 === undefined) {
      throw new Error("Invalid vertex names.");
    }
    return this.adjacencyMatrix[index1][index2] === 1;
  }

  getNeighbors(vertex) {
    const index = this.vertexMap[vertex];
    if (index === undefined) {
      throw new Error("Invalid vertex name.");
    }
    const neighbors = [];
    for (let i = 0; i < this.vertices; i++) {
      if (this.adjacencyMatrix[index][i] === 1) {
        neighbors.push(this.indexMap[i]);
      }
    }
    return neighbors;
  }

  printGraph() {
    console.log("Adjacency Matrix:");
    for (let i = 0; i < this.vertices; i++) {
      const row = this.adjacencyMatrix[i].join(" ");
      console.log(row);
    }
  }
}

// Example usage:
const graph = new UndirectedGraphMatrix(4);
graph.setVertexNames(["A", "B", "C", "D"]);
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");

graph.printGraph();
console.log("Neighbors of B:", graph.getNeighbors("B"));
graph.removeEdge("B", "C");
graph.printGraph();
console.log("Has edge A and B:", graph.hasEdge("A","B"));
console.log("Has edge B and C:", graph.hasEdge("B","C"));