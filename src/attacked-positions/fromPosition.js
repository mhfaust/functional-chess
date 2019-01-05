import { pieceAt } from "../position-utils";
import { king, queen, bishop, knight, rook, pawn } from './'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,EMPTY,__ } from 'constants/pieces'

const moveStrategies = {
    [BK]: king,
    [WK]: king,
    [WQ]: queen,
    [BQ]: queen,
    [WB]: bishop,
    [BB]: bishop,
    [WN]: knight,
    [BN]: knight,
    [WR]: rook,
    [BR]: rook,
    [WP]: pawn,
    [BP]: pawn
}

function fromPosition(board, position){
    const piece = pieceAt(board, position);
    return moveStrategies[piece](board, position);
}