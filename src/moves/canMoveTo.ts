import { Piece } from 'positions/piece';
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
import enPassantSquare from './enPassantSquare';
import { Move } from 'game/validateMoves';
import { PositionName } from 'positions/positionName';
import { CastlingPreclusions } from 'types/CastlingPreclusions';

//Each of the piece-specific can-move functions has a less-demanding signtaure for 
//annotations than the combined canMoveTo, so we cury them to match it
const bishop = (b: Board, f: PositionName, t: PositionName) => bishopCanMove(b, f, t);
const knight = (b: Board, f: PositionName, t: PositionName) => knightCanMove(b, f, t);
const rook = (b: Board, f: PositionName, t: PositionName) => rookCanMove(b, f, t);
const pawn = (b: Board, f: PositionName, t: PositionName, _: unknown, a: PositionName) => pawnCanMove(b, f, t, a);
const king = (b: Board, f: PositionName, t: PositionName, a: CastlingPreclusions) => kingCanMove(b, f, t, a);
const queen = (b: Board, f: PositionName, t: PositionName) => queenCanMove(b, f, t);

const strategies = new Map([
    [ 'Black Bishop', bishop ],
    [ 'White Bishop', bishop ],
    [ 'Black Knight', knight ],
    [ 'White Knight', knight ],
    [ 'Black Rook', rook ],
    [ 'White Rook', rook ],
    [ 'Black Queen', queen ],
    [ 'White Queen', queen ],
    [ 'Black King', king ],
    [ 'White King', king ],
    [ 'Black Pawn', pawn ],
    [ 'White Pawn', pawn ],
]);

export type CanMoveTo = 
    (...params: Parameters<typeof canMoveTo>) => boolean;


function canMoveTo (
    board: Board,
    from: PositionName, 
    to: PositionName, 
    castlingPreclusions: CastlingPreclusions = null,
    enPassantSquare: PositionName = null,
): boolean {

    const strategy = strategies.get(pieceAt(board, from));
    return strategy(board, from, to, castlingPreclusions, enPassantSquare);

}

export default canMoveTo;