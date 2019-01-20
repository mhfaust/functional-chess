import { Piece } from 'constants/pieces'

const oneSteppers : Set<string> = new Set([
    Piece.BlackKing, 
    Piece.WhiteKing,
    Piece.BlackKnight,
    Piece.WhiteKnight,
    Piece.BlackPawn,
    Piece.WhitePawn,
]);

const stepsOnlyOnce = (piece: string): boolean => oneSteppers.has(piece)

export default stepsOnlyOnce; 