// import { Piece } from 'constants/pieces';
declare type BoardFile =  [Piece,Piece,Piece,Piece,Piece,Piece,Piece,Piece];

declare type Board = [
    BoardFile,
    BoardFile,
    BoardFile,
    BoardFile,
    BoardFile,
    BoardFile,
    BoardFile,
    BoardFile
];
 
//note: if a Piece is null --> empty square.