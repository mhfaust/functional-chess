import { canBishopMove, canKingMove, canKnightMove, canPawnMove, canQueenMove, canRookMove } from 'moves/index';
import { pieceAt } from 'position-utils/index';

const strategies: Map<string, MoveStrategy> = new Map([
    [ Piece.BlackKing, canKingMove ],
    [ Piece.WhiteKing, canKingMove ],
    [ Piece.BlackBishop, canBishopMove ],
    [ Piece.WhiteBishop, canBishopMove ],
    [ Piece.BlackKnight, canKnightMove ],
    [ Piece.WhiteKnight, canKnightMove ],
    [ Piece.BlackPawn, canPawnMove ],
    [ Piece.WhitePawn, canPawnMove ],
    [ Piece.BlackQueen, canQueenMove ],
    [ Piece.WhiteQueen, canQueenMove ],
    [ Piece.BlackRook, canRookMove ],
    [ Piece.WhiteRook, canRookMove ]
]);

function canMove (
        board: Board, 
        fromPosition: GridCoordinates, 
        toPosition: GridCoordinates, 
        annotations:HasKingPositions)
    : boolean {
        
        const movingPiece = pieceAt(board, fromPosition);
        console.log(strategies);
        const strategy:MoveStrategy = strategies.get(Piece.WhiteBishop);

console.log(strategy)

        return strategy(board, fromPosition, toPosition, annotations);
}

export default canMove;