import { Piece } from 'positions/piece';
import { PositionName } from 'positions/positionName';
import { MoveAnnotations } from 'interfaces/MoveAnnotations';
import { Moves } from 'interfaces/Moves';
import { 
    bishopMoves, 
    kingMoves, 
    knightMoves, 
    pawnMoves, 
    queenMoves, 
    rookMoves 
} from 'moves';
import { Board } from 'types/Board';

//Each of the piece-specific move functions has a less-demanding signtaure for 
//annotations than the combined moves, so we cury them to match it
const bishop = (b: Board,g: GridCoordinates,a: MoveAnnotations) => bishopMoves(b,g,a);
const knight = (b: Board,g: GridCoordinates,a: MoveAnnotations) => knightMoves(b,g,a);
const rook = (b: Board,g: GridCoordinates,a: MoveAnnotations) => rookMoves(b,g,a);
const pawn = (b: Board,g: GridCoordinates,a: MoveAnnotations) => pawnMoves(b,g,a);
const king = (b: Board,g: GridCoordinates,a: MoveAnnotations) => kingMoves(b,g,a);
const queen = (b: Board,g: GridCoordinates,a: MoveAnnotations) => queenMoves(b,g,a);

const strategies: Map<Piece, Moves> = new Map([
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

function moves (
    board: Board, 
    fromPosition: GridCoordinates, 
    annotations: MoveAnnotations)
    : Set<PositionName> {
        
        const strategy: Moves = strategies.get('White Bishop');
        return strategy(board, fromPosition, annotations);
}

export default moves;