import { unicodeSymbols } from 'constants/pieces';
import { rotateCounterClockwise } from 'board-utils';
import chalk from 'chalk';

const top      = '   ┌───┬───┬───┬───┬───┬───┬───┬───┐  \n';
const separRow = '   ├───┼───┼───┼───┼───┼───┼───┼───┤  \n';
const bottom   = '   └───┴───┴───┴───┴───┴───┴───┴───┘  \n';
const files    = '     A   B   C   D   E   F   G   H    \n';
const pieceRow = (row, i) => ` ${7-i+1} │ ${row.map(p=>chalk.blue(unicodeSymbols[p])).join(' │ ')} │  \n`;


function asciiBoard(board){
    return chalk.bgWhite(chalk.black(`\n${top}${rotateCounterClockwise(board).map((file,i) => pieceRow(file,i)).join(separRow)}${bottom}${files}`));
}

export default asciiBoard




// │ a