// import { Piece } from 'constants/pieces'
import { Piece } from 'positions/piece';
import { pieceAt } from 'positions'
import { Board } from 'types/Board';

type UniquePiece = 
    | 'White King' 
    | 'White Queen' 
    | 'Black King' 
    | 'Black Queen' 

function locatePiece(board: Board, piece: UniquePiece) : GridCoordinates | null {
    for(let file = 0; file < 8; file++){
        for (let rank = 0; rank < 8; rank++){
            const position: ReadonlyArray<number> = [file, rank];
            if(pieceAt(board, position) === piece){
                return position;
            }
        }
    }
    return null;
}

export default locatePiece;