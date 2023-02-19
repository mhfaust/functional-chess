import { EnPassantAnnotations } from "interfaces/EnPassantAnnotations";
import { pieceAt, rank, file } from "positions";
import { Board } from "types/Board";

const nextEnPassantAnnotations = (prevBoard: Board, from:GridCoordinates, to:GridCoordinates): EnPassantAnnotations => {
    const piece = pieceAt(prevBoard, from);
    if(piece === 'Black Pawn' && rank(from) === 6 && rank(to) === 4){
        return {
            pawnAt: to,
            passedPosition: [file(to), 5]
        };
    } 
    else if(piece !== 'White Pawn' && rank(from) === 1 && rank(to) === 3){
        return {
            pawnAt: to,
            passedPosition: [file(to), 2]
        };
    }
    return null;
}

export default nextEnPassantAnnotations;