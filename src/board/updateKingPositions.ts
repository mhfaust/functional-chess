import { pieceAt } from "positions/index";

function updateKingPositions(
        board:Board, 
        moveFrom:GridCoordinates, 
        moveTo:GridCoordinates, 
        boardAnnotations: KingAnnotations
    ){
    const revisedKingPosition = pieceAt(board, moveFrom) === Piece.BlackKing 
            ? { blackKingPosition: moveTo }
            : pieceAt(board, moveFrom) === Piece.WhiteKing 
                ? { whiteKingPosition: moveTo }
                : { };

    return {
        ...boardAnnotations,
        ...revisedKingPosition
    }
}

export default updateKingPositions;