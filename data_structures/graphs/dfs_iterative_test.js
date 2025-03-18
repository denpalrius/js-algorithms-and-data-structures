import { IterativeDFS } from "./iterative_dfs.js";

function test(actual, expected, testName) {
  const res = JSON.stringify(actual) === JSON.stringify(expected) ? "✅ passed" : "🆘 failed";
  console.log(`${testName}: ${res} (got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)})`);
}

// Tests for IterativeDFS
const graph = new IterativeDFS();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");

test(graph.traverse("A"), ["A", "B", "C", "D"], "Iterative DFS Linear Graph");

const graph2 = new IterativeDFS();
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addEdge("A", "B");
graph2.addEdge("A", "C");
graph2.addEdge("C", "D");

test(graph2.traverse("A"), ["A", "C", "D", "B"], "Iterative DFS Branching Graph");

const graph3 = new IterativeDFS();
graph3.addVertex("A");
graph3.addVertex("B");
graph3.addVertex("C");
graph3.addVertex("D");
graph3.addEdge("A", "B");
graph3.addEdge("C", "D");
test(graph3.traverse("A"), ["A", "B"], "Iterative DFS Disconnected Graph Start A");
test(graph3.traverse("C"), ["C", "D"], "Iterative DFS Disconnected Graph Start C");

const graph4 = new IterativeDFS();
graph4.addVertex("A");
test(graph4.traverse("A"), ["A"], "Iterative DFS Single Vertex");

const graph5 = new IterativeDFS();
test(graph5.traverse("A"), [], "Iterative DFS Empty Graph");

const graph6 = new IterativeDFS();
graph6.addVertex("A");
graph6.addVertex("B");
graph6.addVertex("C");
graph6.addEdge("A", "B");
graph6.addEdge("B", "C");
graph6.addEdge("C", "A");
test(graph6.traverse("A"), ["A", "B", "C"], "Iterative DFS Graph with Cycle");

const graph7 = new IterativeDFS();
graph7.addVertex("A");
graph7.addVertex("B");
graph7.addEdge("A", "B");
test(graph7.traverse("C"), [], "Iterative DFS Start Vertex Not In Graph");

// Test with the new graph structure
const graph8 = new IterativeDFS();
graph8.addVertex("A");
graph8.addVertex("B");
graph8.addVertex("C");
graph8.addVertex("D");
graph8.addVertex("E");
graph8.addVertex("F");
graph8.addEdge("A", "B");
graph8.addEdge("A", "C");
graph8.addEdge("B", "D");
graph8.addEdge("C", "E");
graph8.addEdge("D", "E");
graph8.addEdge("D", "F");
graph8.addEdge("E", "F");

test(graph8.traverse("A"), ["A", "C", "E", "F", "D", "B"], "Iterative DFS Complex Graph");