import { UndirectedGraph } from "./undirected_graph_adjacency_ls.js";
import { RecursiveDFS } from "./dfs_recursive.js";

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
const dfsGraph = new RecursiveDFS();

// Test 1: Simple linear graph
dfsGraph.addVertex("A");
dfsGraph.addVertex("B");
dfsGraph.addVertex("C");
dfsGraph.addEdge("A", "B");
dfsGraph.addEdge("B", "C");
test(dfsGraph.traverse("A"), ["A", "B", "C"], "DFS Linear Graph");

// Test 2: Branching graph
const dfsGraph2 = new RecursiveDFS();
dfsGraph2.addVertex("A");
dfsGraph2.addVertex("B");
dfsGraph2.addVertex("C");
dfsGraph2.addVertex("D");
dfsGraph2.addEdge("A", "B");
dfsGraph2.addEdge("A", "C");
dfsGraph2.addEdge("C", "D");
test(dfsGraph2.traverse("A"), ["A", "B", "C", "D"], "DFS Branching Graph");

// Test 3: Disconnected graph
const dfsGraph3 = new RecursiveDFS();
dfsGraph3.addVertex("A");
dfsGraph3.addVertex("B");
dfsGraph3.addVertex("C");
dfsGraph3.addVertex("D");
dfsGraph3.addEdge("A", "B");
dfsGraph3.addEdge("C", "D");
test(dfsGraph3.traverse("A"), ["A", "B"], "DFS Disconnected Graph Start A");
test(dfsGraph3.traverse("C"), ["C", "D"], "DFS Disconnected Graph Start C");

// Test 4: Single vertex graph
const dfsGraph4 = new RecursiveDFS();
dfsGraph4.addVertex("A");
test(dfsGraph4.traverse("A"), ["A"], "DFS Single Vertex");

// Test 5: Empty graph
const dfsGraph5 = new RecursiveDFS();
test(dfsGraph5.traverse("A"), [], "DFS Empty Graph");

// Test 6: Graph with cycle
const dfsGraph6 = new RecursiveDFS();
dfsGraph6.addVertex("A");
dfsGraph6.addVertex("B");
dfsGraph6.addVertex("C");
dfsGraph6.addEdge("A", "B");
dfsGraph6.addEdge("B", "C");
dfsGraph6.addEdge("C", "A");
test(dfsGraph6.traverse("A"), ["A", "B", "C"], "DFS Graph with Cycle");

// Test 7: Start vertex not in graph
const dfsGraph7 = new RecursiveDFS();
dfsGraph7.addVertex("A");
dfsGraph7.addVertex("B");
dfsGraph7.addEdge("A", "B");
test(dfsGraph7.traverse("C"), [], "DFS Start Vertex Not In Graph");
