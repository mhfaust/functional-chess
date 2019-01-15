import { Player } from 'constants/pieces';
import { isInCheck } from 'moves/index';

function isInCheckmate(board: Board, player: Player, knownInCheckStatus: boolean){
    if(knownInCheckStatus === false)
        return false;

    if(knownInCheckStatus !== true && !isInCheck(board, player, null)){
        return false;
    }

    
    
}

//ALGORITHM

// Assumes in check (?) if passed in as an arg. Otherwise try if NOT isInCheck --> FALSE

// get all defended king's moves
//    if any --> not in check --> FALSE

//Find all checking pieces, with array of spaces from attacker to king 
//    if > 2 --> TRUE   (no way to remove check from 2 pieces w/o moving king)
//    
//    get array of spaces from attacker to king 
//        for each, get all pieces attacking each space
//        do any moves un-check the king (do isInCheck)?
//            yes --> FALSE
//            no --> TRUE