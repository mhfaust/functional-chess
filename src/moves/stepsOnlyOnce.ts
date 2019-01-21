import { pieces } from 'constants/pieces'

const oneSteppers : Set<string> = new Set([
    pieces.BlackKing, 
    pieces.WhiteKing,
    pieces.BlackKnight,
    pieces.WhiteKnight,
    pieces.BlackPawn,
    pieces.WhitePawn,
]);

const stepsOnlyOnce = (piece: string): boolean => oneSteppers.has(piece)

export default stepsOnlyOnce; 