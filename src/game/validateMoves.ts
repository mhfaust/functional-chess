import { 
    initialBoard, 
    nextBoard, 
    initialBoardAnnotations, 
    nextBoardAnnotations } from "board";
import { canMove } from "moves";

function validateGameMoves(moves:Array<[GridCoordinates, GridCoordinates]>){

    let boardStack = [initialBoard()];
    let annotationsStack = [initialBoardAnnotations()];

    for(let move of moves){
        const moveFrom:GridCoordinates = move[0];
        const moveTo:GridCoordinates = move[1];
        const currentBoard = boardStack[boardStack.length - 1];
        const currentAnnotations = annotationsStack[annotationsStack.length - 1];

        if(currentAnnotations.isCheckmate || !canMove(currentBoard, moveFrom, moveTo, currentAnnotations)){
            return false;
        }

        const newBoard = nextBoard(currentBoard, moveFrom, moveTo);
        boardStack.push(newBoard);
        annotationsStack.push(nextBoardAnnotations(currentBoard, newBoard, currentAnnotations, moveFrom, moveTo));
    };
}

export default validateGameMoves;