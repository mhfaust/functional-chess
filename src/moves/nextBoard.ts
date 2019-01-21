import { file, rank, pieceAt } from 'position-utils/index';
import { empty } from 'boards/index';

function nextBoard(previousBoard: Board, pieceMovedFromPosition: GridCoordinates, pieceMovedToPosition: GridCoordinates) 
    : Board  {

    const newBoard : Board = empty();
    
    for(let file = 0; file < 8; file++){
        for(let rank = 0; rank < 8; rank++){
            newBoard[file][rank] = pieceAt(previousBoard, [file,rank]);
        }
    }

    newBoard[file(pieceMovedFromPosition)][rank(pieceMovedFromPosition)] = Piece.Empty;
    newBoard[file(pieceMovedToPosition)][rank(pieceMovedToPosition)] = pieceAt(previousBoard, pieceMovedFromPosition)
    
    return newBoard;
}

export default nextBoard;