import { unicodeSymbols } from "constants/pieces";
import { rotateCounterClockwise } from "board";
import chalk  from "chalk";
import { Board } from "types/Board";
import { Piece } from "positions/piece";

const { bgWhite, black, blue } = chalk;

const topLine     = '   ┌───┬───┬───┬───┬───┬───┬───┬───┐  \n';
const separLine   = '   ├───┼───┼───┼───┼───┼───┼───┼───┤  \n';
const bottomLine  = '   └───┴───┴───┴───┴───┴───┴───┴───┘  \n';
const filesLine   = '     A   B   C   D   E   F   G   H    \n';

const pieceLine = (row: string[], i: number) => {
    const drawPiece = (p: Piece) => {
        return blue(unicodeSymbols[p] ?? ' ')
    };
    return ` ${7-i+1} │ ${row.map(drawPiece).join(' │ ')} │  \n`
};


function asciiBoard(board: Board){
    const pieceLines = rotateCounterClockwise(board)
        .map(pieceLine)
        .join(separLine);

    return bgWhite(black(
        `\n${topLine}${pieceLines}${bottomLine}${filesLine}`
    ));
}

export default asciiBoard;