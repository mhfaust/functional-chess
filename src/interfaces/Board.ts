// import { Piece } from 'constants/pieces';
declare type BoardFile =  [string,string,string,string,string,string,string,string];

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