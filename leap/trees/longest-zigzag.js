function solution(T) {
    return checkmaxPath(T, null, 0); // Using pre-order DFS
}

function checkmaxPath(T, directionFrom, maxTurns) {
    let currentLeftTurns = maxTurns;
    let currentRightTurns = maxTurns;

    let leftSubtreeTurns = 0;
    let rightSubtreeTurns = 0;

    // Traverse to the left
    if (T.l) {
        if (directionFrom === 'right') {
            currentLeftTurns++;
        }
        leftSubtreeTurns = checkmaxPath(T.l, 'left', currentLeftTurns);
    }

    // Traverse to the right
    if (T.r) {
        if (directionFrom === 'left') {
            currentRightTurns++;
        }
        rightSubtreeTurns = checkmaxPath(T.r, 'right', currentRightTurns);
    }

    const greaterTurns = Math.max(leftSubtreeTurns, rightSubtreeTurns);

    return Math.max(maxTurns, greaterTurns);
}