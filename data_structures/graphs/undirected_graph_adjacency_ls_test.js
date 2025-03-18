import { UndirectedGraph } from "./undirected_graph_adjacency_ls.js";

function test(actual, expected, testName) {
  const res =
    JSON.stringify(actual) === JSON.stringify(expected)
      ? "✅ passed"
      : "🆘 failed";
  console.log(
    `${testName}: ${res} (got ${JSON.stringify(
      actual
    )}, expected ${JSON.stringify(expected)})`
  );
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

export { UndirectedGraph };
