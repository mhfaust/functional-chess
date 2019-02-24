import { pieceAt } from "positions/index";

function nextKingPositions(
        board:Board,
        moveFrom:GridCoordinates,
        moveTo:GridCoordinates,
        boardAnnotations: HasKingPositions
    ):HasKingPositions {
    
    const p:HasKingPositions = {
        whiteKingPosition: boardAnnotations.whiteKingPosition,
        blackKingPosition: boardAnnotations.blackKingPosition
    }

    if(pieceAt(board, moveFrom) === Piece.BlackKing){
        p.blackKingPosition = moveTo;
    }
    else if(pieceAt(board, moveFrom) === Piece.WhiteKing){
        p.whiteKingPosition = moveTo;
    }
    return boardAnnotations;

}

export default nextKingPositions;