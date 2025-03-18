class UndirectedGraph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
      if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
  
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  
    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {  
          while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
          }
          delete this.adjacencyList[vertex];
        }
      }
  
    getNeighbours(vertex) {
      return this.adjacencyList[vertex];
    }
  
    printGraph() {
      for (const vertex in this.adjacencyList) {
        console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
      }
    }
  }
  
  function test(actual, expected, testName) {
    const res = JSON.stringify(actual) === JSON.stringify(expected) ? "✅ passed" : "🆘 failed";
    console.log(`${testName}: ${res} (got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)})`);
  }
  
  // Tests
  const graph = new UndirectedGraph();
  
  // Test addVertex and addEdge
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  
  test(graph.getNeighbours("A"), ["B"], "addEdge and getNeighbours A");
  test(graph.getNeighbours("B"), ["A", "C"], "addEdge and getNeighbours B");
  test(graph.getNeighbours("C"), ["B"], "addEdge and getNeighbours C");
  
  // Test removeEdge
  graph.removeEdge("A", "B");
  test(graph.getNeighbours("A"), [], "removeEdge A");
  test(graph.getNeighbours("B"), ["C"], "removeEdge B");
  
  // Test removeVertex
  graph.addVertex("D");
  graph.addEdge("C", "D");
  graph.removeVertex("B");
  test(graph.getNeighbours("A"), [], "removeVertex A");
  test(graph.getNeighbours("B"), undefined, "removeVertex B");
  test(graph.getNeighbours("C"), ["D"], "removeVertex C");
  test(graph.getNeighbours("D"), ["C"], "removeVertex D");
  
  // Test remove vertex which has no edges.
  const graph2 = new UndirectedGraph();
  
  graph2.addVertex("A");
  graph2.addVertex("B");
  graph2.addVertex("C");
  
  graph2.removeVertex("A");
  
  test(graph2.getNeighbours("A"), undefined, "remove vertex with no edges");
  
  // Test remove vertex from empty graph
  const graph3 = new UndirectedGraph();
  
  graph3.removeVertex("A");
  
  test(graph3.getNeighbours("A"), undefined, "remove vertex from empty graph");