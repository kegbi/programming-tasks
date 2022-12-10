const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8");

type PossibleMoves = "rock" | "paper" | "scissors";
type MyPossibleEncryptedMoves = "X" | "Y" | "Z";
type EnemyPossibleEncryptedMoves = "A" | "B" | "C";

enum RESULT {
  WIN = 6,
  DRAW = 3,
  LOSE = 0,
}

type MovesInfo = {
  [key in PossibleMoves]: {
    name: PossibleMoves;
    myInput: MyPossibleEncryptedMoves;
    enemyInput: EnemyPossibleEncryptedMoves;
    actionRequired: RESULT;
    pointsGain: number;
    results: {
      [key in PossibleMoves]: RESULT;
    };
  };
};

const MOVES_INFO: MovesInfo = {
  rock: {
    name: "rock",
    myInput: "X",
    enemyInput: "A",
    actionRequired: RESULT.LOSE,
    pointsGain: 1,
    results: {
      paper: RESULT.LOSE,
      scissors: RESULT.WIN,
      rock: RESULT.DRAW,
    },
  },
  paper: {
    name: "paper",
    myInput: "Y",
    enemyInput: "B",
    actionRequired: RESULT.DRAW,
    pointsGain: 2,
    results: {
      paper: RESULT.DRAW,
      scissors: RESULT.LOSE,
      rock: RESULT.WIN,
    },
  },
  scissors: {
    name: "scissors",
    myInput: "Z",
    enemyInput: "C",
    actionRequired: RESULT.WIN,
    pointsGain: 3,
    results: {
      paper: RESULT.WIN,
      scissors: RESULT.DRAW,
      rock: RESULT.LOSE,
    },
  },
};

function getGainForMovePoints(
  myDecipheredMove: PossibleMoves,
  enemyDecipheredMove: PossibleMoves,
  isDecipheringOwnMoveRequired?: boolean
) {
  if (isDecipheringOwnMoveRequired) {
    const requiredAction = MOVES_INFO[myDecipheredMove].actionRequired;

    const moveToSelect = Object.keys(MOVES_INFO).find(
      (move: PossibleMoves) =>
        MOVES_INFO[move].results[enemyDecipheredMove] === requiredAction
    );

    return MOVES_INFO[moveToSelect as PossibleMoves].pointsGain;
  } else {
    return MOVES_INFO[myDecipheredMove].pointsGain;
  }
}

function getResultPoints(
  myDecipheredMove: PossibleMoves,
  enemyDecipheredMove: PossibleMoves,
  isDecipheringOwnMoveRequired?: boolean
) {
  if (isDecipheringOwnMoveRequired) {
    return MOVES_INFO[myDecipheredMove].actionRequired;
  } else {
    return MOVES_INFO[myDecipheredMove].results[enemyDecipheredMove];
  }
}

function getPredictedScore(isDecipheringOwnMoveRequired?: boolean) {
  const inputArray = input.split("\n").filter((line: string) => line !== "");

  return inputArray.reduce((acc: number, input: string) => {
    const [enemyInput, myInput] = input.split(" ");

    const trimmedEnemyInput = enemyInput.trim();
    const trimmedMyInput = myInput.trim();

    const myDecipheredInputValue = Object.keys(MOVES_INFO).find(
      (key: PossibleMoves) => MOVES_INFO[key].myInput === trimmedMyInput
    ) as PossibleMoves;
    const enemyDecipheredInputValue = Object.keys(MOVES_INFO).find(
      (key: PossibleMoves) => MOVES_INFO[key].enemyInput === trimmedEnemyInput
    ) as PossibleMoves;

    const resultPoints = getResultPoints(
      myDecipheredInputValue,
      enemyDecipheredInputValue,
      isDecipheringOwnMoveRequired
    );
    const gainPoints = getGainForMovePoints(
      myDecipheredInputValue,
      enemyDecipheredInputValue,
      isDecipheringOwnMoveRequired
    );

    return acc + resultPoints + gainPoints;
  }, 0);
}

// Input 1:
console.log(getPredictedScore());

// Input 2:
console.log(getPredictedScore(true));
