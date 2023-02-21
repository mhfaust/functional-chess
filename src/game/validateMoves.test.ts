import { PositionName } from "positions/positionName";
import validateGameMoves, { Move } from "game/validateMoves";
import textRender from "board/textRender";
// import asciiBoard from 'board/'

const moves: Move[] = [
  ["E2", 'E4'], ['E7', 'E6'],
  ['D2', 'D4'], ['D7', 'D5'],
  ['B1', 'C3'], ['F8', 'B4'],
  ['E4', 'E5']
];

describe("validateMoves", () => {

  it ('Validates an valid game correctly', () => {
    const { validMoves, error } = validateGameMoves(moves);
    // const m = validMoves.pop();
    // console.log(textRender(m.board))
    expect(error).toBe(null);
  })
})

