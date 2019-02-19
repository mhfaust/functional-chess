import { bishopMoves, kingMoves, knightMoves, pawnMoves, queenMoves, rookMoves } from 'moves/index';

const strategies: Map<Piece, Moves> = new Map([
    [ Piece.BlackBishop, bishopMoves ],
    [ Piece.WhiteBishop, bishopMoves ],
    [ Piece.BlackKnight, knightMoves ],
    [ Piece.WhiteKnight, knightMoves ],
    [ Piece.BlackRook, rookMoves ],
    [ Piece.WhiteRook, rookMoves ],
    [ Piece.BlackQueen, queenMoves ],
    [ Piece.WhiteQueen, queenMoves ],
    [ Piece.BlackKing, kingMoves ],
    [ Piece.WhiteKing, kingMoves ],
    [ Piece.BlackPawn, pawnMoves ],
    [ Piece.WhitePawn, pawnMoves ],
]);

function moves (
        board:Board, 
        fromPosition:GridCoordinates, 
        annotations:BoardAnnotations)
    : Set<PositionName> {
        
        const strategy:Moves = strategies.get(Piece.WhiteBishop);
        return strategy(board, fromPosition, annotations);
}

export default moves;