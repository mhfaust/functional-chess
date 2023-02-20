import { 
    initialBoard, 
    move, 
    initialBoardAnnotations, 
    nextBoardAnnotations } from "board";
import { canMoveTo } from "moves";  
import COORDS from "positions/coordinates";
import { PositionName } from "positions/positionName";

function validateGameMoves(gameMoves: Array<[PositionName, PositionName]>){

    let boardStack = [initialBoard()];
    let annotationsStack = [initialBoardAnnotations()];

    for(let gameMove of gameMoves){
        const moveFrom = gameMove[0];
        const moveTo = gameMove[1];
        const currentBoard = boardStack[boardStack.length - 1];
        const currentAnnotations = annotationsStack[annotationsStack.length - 1];

        if(currentAnnotations.isCheckmate || !canMoveTo(currentBoard, moveFrom, moveTo, currentAnnotations)){
            return false;
        }

        const newBoard = move(currentBoard, COORDS[moveFrom], COORDS[moveTo]);
        boardStack.push(newBoard);
        annotationsStack.push(nextBoardAnnotations(currentBoard, newBoard, currentAnnotations, moveFrom, moveTo));
    };
}

export default validateGameMoves;