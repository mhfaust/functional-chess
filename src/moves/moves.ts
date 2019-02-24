import { bishopMoves, kingMoves, knightMoves, pawnMoves, queenMoves, rookMoves } from 'moves/index';

//Each of the piece-specific move functions has a less-demanding signtaure for 
//annotations than the combined moves, so we cury them to match it
const bishop = (b:Board,f:GridCoordinates,a:MoveAnnotations) => bishopMoves(b,f,a);
const knight = (b:Board,f:GridCoordinates,a:MoveAnnotations) => knightMoves(b,f,a);
const rook = (b:Board,f:GridCoordinates,a:MoveAnnotations) => rookMoves(b,f,a);
const pawn = (b:Board,f:GridCoordinates,a:MoveAnnotations) => pawnMoves(b,f,a);
const king = (b:Board,f:GridCoordinates,a:MoveAnnotations) => kingMoves(b,f,a);
const queen = (b:Board,f:GridCoordinates,a:MoveAnnotations) => queenMoves(b,f,a);

const strategies: Map<Piece, Moves> = new Map([
    [ Piece.BlackBishop, bishop ],
    [ Piece.WhiteBishop, bishop ],
    [ Piece.BlackKnight, knight ],
    [ Piece.WhiteKnight, knight ],
    [ Piece.BlackRook, rook ],
    [ Piece.WhiteRook, rook ],
    [ Piece.BlackQueen, queen ],
    [ Piece.WhiteQueen, queen ],
    [ Piece.BlackKing, king ],
    [ Piece.WhiteKing, king ],
    [ Piece.BlackPawn, pawn ],
    [ Piece.WhitePawn, pawn ],
]);

function moves (
        board:Board, 
        fromPosition:GridCoordinates, 
        annotations:MoveAnnotations)
    : Set<PositionName> {
        
        const strategy:Moves = strategies.get(Piece.WhiteBishop);
        return strategy(board, fromPosition, annotations);
}

export default moves;