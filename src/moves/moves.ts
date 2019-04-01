import { 
    bishopMoves, 
    kingMoves, 
    knightMoves, 
    pawnMoves, 
    queenMoves, 
    rookMoves } from 'moves';

//Each of the piece-specific move functions has a less-demanding signtaure for 
//annotations than the combined moves, so we cury them to match it
const bishop = (b:Board,g:GridCoordinates,a:MoveAnnotations) => bishopMoves(b,g,a);
const knight = (b:Board,g:GridCoordinates,a:MoveAnnotations) => knightMoves(b,g,a);
const rook = (b:Board,g:GridCoordinates,a:MoveAnnotations) => rookMoves(b,g,a);
const pawn = (b:Board,g:GridCoordinates,a:MoveAnnotations) => pawnMoves(b,g,a);
const king = (b:Board,g:GridCoordinates,a:MoveAnnotations) => kingMoves(b,g,a);
const queen = (b:Board,g:GridCoordinates,a:MoveAnnotations) => queenMoves(b,g,a);

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