const boardDefault = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const test = [
  ["o", "x", "x"],
  ["", "", ""],
  ["o", "", "x"],
];

// takes in a board and verifies each ArrOfStr ['','',''] all have matching values
const checkForWinFunction = (board: any[]) => {
  for (let i = 0; i < board.length; i++) {
    const ArrOfStrings = board[i];
    if (
      ArrOfStrings[0] === ArrOfStrings[1] &&
      ArrOfStrings[1] === ArrOfStrings[2] &&
      ArrOfStrings[0] !== ""
    ) {
      console.log(`winner is ${ArrOfStrings[0]}`);
      return { winner: ArrOfStrings[0], outcome: "win" };
    }
  }
  return { winner: null, outcome: "continue" };
};
const getColumns = (board: string[][]) => {
  // set columms 1,2,3 to new indexes and put those back into a board [['','','']]
  const col1 = [board[0][0], board[1][0], board[2][0]];

  const col2 = [board[0][1], board[1][1], board[2][1]];

  const col3 = [board[0][2], board[1][2], board[2][2]];
  return [col1, col2, col3];
};

const getDiags = (board) => {
  // left to right
  const diag1 = [board[0][0], board[1][1], board[2][2]];
  const diag2 = [board[2][0], board[1][1], board[0][2]];
  return [diag1, diag2];
};

const checkBoard = (b) => {
  const row = b;
  const diagonals = getDiags(b);
  const columns = getColumns(b);

  const everything = [...row, ...columns, ...diagonals];
  checkForWinFunction(everything);
};

checkBoard(test);
