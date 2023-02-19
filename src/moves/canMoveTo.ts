import { Piece } from 'enums/piece';
import { CanMoveTo } from 'interfaces/CanMove';
import { MoveAnnotations } from 'interfaces/MoveAnnotations';
import { 
    bishopCanMove, 
    kingCanMove, 
    knightCanMove, 
    pawnCanMove, 
    queenCanMove, 
    rookCanMove 
} from 'moves';
import { pieceAt } from 'positions';
import { Board } from 'types/Board';

//Each of the piece-specific can-move functions has a less-demanding signtaure for 
//annotations than the combined canMoveTo, so we cury them to match it
const bishop = (b: Board, t: GridCoordinates, f: GridCoordinates, a: MoveAnnotations) => bishopCanMove(b, t, f, a);
const knight = (b: Board, t: GridCoordinates, f: GridCoordinates, a: MoveAnnotations) => knightCanMove(b, t, f, a);
const rook = (b: Board, t: GridCoordinates, f: GridCoordinates, a: MoveAnnotations) => rookCanMove(b, t, f, a);
const pawn = (b: Board, t: GridCoordinates, f: GridCoordinates, a: MoveAnnotations) => pawnCanMove(b, t, f, a);
const king = (b: Board, t: GridCoordinates, f: GridCoordinates, a: MoveAnnotations) => kingCanMove(b, t, f, a);
const queen = (b: Board, t: GridCoordinates, f: GridCoordinates, a: MoveAnnotations) => queenCanMove(b, t, f, a);

const strategies: Map<Piece, CanMoveTo> = new Map([
    [ 'BlackBishop', bishop ],
    [ 'WhiteBishop', bishop ],
    [ 'BlackKnight', knight ],
    [ 'WhiteKnight', knight ],
    [ 'BlackRook', rook ],
    [ 'WhiteRook', rook ],
    [ 'BlackQueen', queen ],
    [ 'WhiteQueen', queen ],
    [ 'BlackKing', king ],
    [ 'WhiteKing', king ],
    [ 'BlackPawn', pawn ],
    [ 'WhitePawn', pawn ],
]);

function canMoveTo (
    board: Board, 
    fromPosition: GridCoordinates, 
    toPosition: GridCoordinates, 
    annotations: MoveAnnotations)
     {
        const strategy: CanMoveTo = strategies.get(pieceAt(board, fromPosition));
        return strategy(board, fromPosition, toPosition, annotations);
}

export default canMoveTo;