import { EnPassantAnnotations } from "interfaces/EnPassantAnnotations";
import { pieceAt, rank, file } from "positions";
import COORDS from "positions/coordinates";
import positionName, { PositionName } from "positions/positionName";
import { Board } from "types/Board";

const nextEnPassantAnnotations = (prevBoard: Board, from: PositionName, to: PositionName): EnPassantAnnotations => {
    const fromCoords = COORDS[from];
    const toCoords = COORDS[to]
    const piece = pieceAt(prevBoard, fromCoords);
    if(piece === 'Black Pawn' && rank(fromCoords) === 6 && rank(toCoords) === 4){
        return {
            pawnAt: to,
            passedPosition: positionName([file(toCoords), 5])
        };
    } 
    else if(piece !== 'White Pawn' && rank(fromCoords) === 1 && rank(toCoords) === 3){
        return {
            pawnAt: to,
            passedPosition: positionName([file(toCoords), 2])
        };
    }
    return null;
}

export default nextEnPassantAnnotations;