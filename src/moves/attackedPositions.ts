import { kingMoves, queenMoves, bishopMoves, knightMoves, rookMoves, pawnMoves } from 'moves/index';
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';

const moveStrategies = {
    [BK]: kingMoves,
    [WK]: kingMoves,
    [WQ]: queenMoves,
    [BQ]: queenMoves,
    [WB]: bishopMoves,
    [BB]: bishopMoves,
    [WN]: knightMoves,
    [BN]: knightMoves,
    [WR]: rookMoves,
    [BR]: rookMoves,
    [WP]: pawnMoves,
    [BP]: pawnMoves
}

function attackedPositions(board: Board, position: GridCoordinates, piece: Piece)
    : Set<AlgebraicName> {
        return moveStrategies[piece](board, position);
}

export default attackedPositions;