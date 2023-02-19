// import { initialBoard, move } from "board";
// import initialBoardAnnotations from "board/initialBoardAnnotations";
// import canMoveTo from "moves/canMoveTo";
// import nextBoardAnnotations from "board/nextBoardAnnotations";

import { Turn } from "interfaces/Turn";

type Game = Array<Turn>

// class Game {
//     constructor(turns:Array<Turn>)
//     constructor(moves:Array<[GridCoordinates, GridCoordinates]>)
//     constructor(arg:Array<[GridCoordinates, GridCoordinates]> | Array<Turn>){

//     }

//     private _turns:Array<Turn> 

//     get turns():Array<Turn>{
//         return [];
//     }

//     private validateMoves(moves:Array<[GridCoordinates, GridCoordinates]>){

//         let boardStack = [initialBoard()];
//         let annotationsStack = [initialBoardAnnotations()];

//         for(let move of moves){
//             const moveFrom:GridCoordinates = move[0];
//             const moveTo:GridCoordinates = move[1];
//             const currentBoard = boardStack[boardStack.length - 1];
//             const currentAnnotations = annotationsStack[annotationsStack.length - 1];

//             if(currentAnnotations.isCheckmate || !canMoveTo(currentBoard, moveFrom, moveTo, currentAnnotations)){
//                 return false;
//             }

//             const newBoard = move(currentBoard, moveFrom, moveTo);
//             boardStack.push(newBoard);
//             annotationsStack.push(nextBoardAnnotations(currentBoard, newBoard, currentAnnotations, moveFrom, moveTo));
//         };
//     }

//     private validateTurns(turns:Array<Turn>){

//     }

// } 

// const g = new Game([])

