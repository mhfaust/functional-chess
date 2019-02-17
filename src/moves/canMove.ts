import { bishopCanMove, kingCanMove, knightCanMove, pawnCanMove, queenCanMove, rookCanMove } from 'moves/index';

const strategies: Map<Piece, MoveStrategy> = new Map([
    [ Piece.BlackBishop, bishopCanMove ],
    [ Piece.WhiteBishop, bishopCanMove ],
    [ Piece.BlackKnight, knightCanMove ],
    [ Piece.WhiteKnight, knightCanMove ],
    [ Piece.BlackRook, rookCanMove ],
    [ Piece.WhiteRook, rookCanMove ],
    [ Piece.BlackQueen, queenCanMove ],
    [ Piece.WhiteQueen, queenCanMove ],
    [ Piece.BlackKing, kingCanMove ],
    [ Piece.WhiteKing, kingCanMove ],
    [ Piece.BlackPawn, pawnCanMove ],
    [ Piece.WhitePawn, pawnCanMove ],
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