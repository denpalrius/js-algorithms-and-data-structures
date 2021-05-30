public Node Connect(Node root) {
    if(root == null)
return null;
Queue<Node> unVisited = new Queue<Node>();
   unVisited.Enqueue(root);
Node visited;

while(unVisited.Count > 0){
int size = unVisited.Count;
Console.WriteLine(size);
for (int i = 0; i < size; i++)
{
Node currentNode = unVisited.Dequeue();
if (currentNode.left != null)
{
unVisited.Enqueue(currentNode.left);
}
if (currentNode.right != null)
{
unVisited.Enqueue(currentNode.right); }
Console.WriteLine(size + " at " + i);
if (i == size-1)
{
currentNode.next = null;
}
else
{
currentNode.next = unVisited.Peek();
}
}
}
return root;
}