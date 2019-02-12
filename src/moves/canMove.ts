import { canBishopMove, canKingMove, canKnightMove, canPawnMove, canQueenMove, canRookMove } from 'moves/index';

const strategies: Map<Piece, MoveStrategy> = new Map([
    [ Piece.BlackBishop, canBishopMove ],
    [ Piece.WhiteBishop, canBishopMove ],
    [ Piece.BlackKnight, canKnightMove ],
    [ Piece.WhiteKnight, canKnightMove ],
    [ Piece.BlackRook, canRookMove ],
    [ Piece.WhiteRook, canRookMove ],
    [ Piece.BlackQueen, canQueenMove ],
    [ Piece.WhiteQueen, canQueenMove ],
    [ Piece.BlackKing, canKingMove ],
    [ Piece.WhiteKing, canKingMove ],
    [ Piece.BlackPawn, canPawnMove ],
    [ Piece.WhitePawn, canPawnMove ],
]);

function canMove (
        board:Board, 
        fromPosition:GridCoordinates, 
        toPosition:GridCoordinates, 
        annotations:HasKingPositions)
    : boolean {
        
        const strategy:MoveStrategy = strategies.get(Piece.WhiteBishop);
        return strategy(board, fromPosition, toPosition, annotations);
}

export default canMove;