
Tree ER2 = new Tree(9, null, null);
Tree DL1 = new Tree(6, null, null);
Tree DR1 = new Tree(30, null, ER2);
Tree DR2 = new Tree(8, null, null);

Tree CL1 = new Tree(20, DL1, null);
Tree CR1 = new Tree(1, null, null);
Tree CR2 = new Tree(15, DR1, DR2);

Tree BL = new Tree(3, CL1, null);
Tree BR = new Tree(10, CR1, CR2);

Tree A = new Tree(5, BL, BR);

int res = ZigZag(A, 0, Direction.None);
Console.WriteLine($"Solution: {res}");

int ZigZag(Tree T, int count, Direction direction)
{
    int leftSubtreeCount = 0;
    int rightSubTreeCount = 0;

    int leftCount = count;
    int rightCount = count;

    if (T.l != null)
    {
        if (direction == Direction.R)
        {
            leftCount += 1;
        };
        leftSubtreeCount = ZigZag(T.l, leftCount, Direction.L);
    }

    if (T.r != null)
    {
        if (direction == Direction.L)
        {
            rightCount += 1;
        };
        rightSubTreeCount = ZigZag(T.r, rightCount, Direction.R);
    }

    int greaterCount = Math.Max(leftSubtreeCount, rightSubTreeCount);
    return Math.Max(greaterCount, count);
}

enum Direction
{
    R,
    L,
    None
}

class Tree
{
    public Tree(int _x, Tree _l, Tree _r)
    {
        x = _x;
        l = _l;
        r = _r;
    }
    public int x;
    public Tree l;
    public Tree r;
};



