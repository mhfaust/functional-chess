import { unicodeSymbols } from "constants/pieces";
import { rotateCounterClockwise } from "board-utils";
import { bgWhite, black, blue }  from "chalk";

const topLine     = "   ┌───┬───┬───┬───┬───┬───┬───┬───┐  \n";
const separLine   = "   ├───┼───┼───┼───┼───┼───┼───┼───┤  \n";
const bottomLine  = "   └───┴───┴───┴───┴───┴───┴───┴───┘  \n";
const filesLine   = "     A   B   C   D   E   F   G   H    \n";
const pieceLine = (row, i) => ` ${7-i+1} │ ${row.map(p=>blue(unicodeSymbols[p])).join(" │ ")} │  \n`;


function asciiBoard(board){
    const pieceLines = rotateCounterClockwise(board)
        .map(pieceLine)
        .join(separLine);

    return bgWhite(black(
        `\n${topLine}${pieceLines}${bottomLine}${filesLine}`
    ));
}

export default asciiBoard;




// │ a