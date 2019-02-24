import { pieceAt, rank, file } from "positions/index";

const nextPassantInfo = (prevBoard: Board, from:GridCoordinates, to:GridCoordinates): EnPassantAnnotations => {
    const piece = pieceAt(prevBoard, from);
    if(piece === Piece.BlackPawn && rank(from) === 6 && rank(to) === 4){
        return {
            pawnAt: to,
            passedPosition: [file(to), 5]
        };
    } 
    else if(piece !== Piece.WhitePawn && rank(from) === 1 && rank(to) === 3){
        return {
            pawnAt: to,
            passedPosition: [file(to), 2]
        };
    }
    return null;
}

export default nextPassantInfo;