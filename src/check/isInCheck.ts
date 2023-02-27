import { generateLinesOfAttack } from 'check'
import { Player } from 'types/Player';
import { Board } from 'types/Board';
import kingPosition from 'positions/kingPosition';

const cache = new Map<Player, Map<Board, boolean>>()
    .set("Black", new Map())
    .set("White", new Map())

function isInCheck(
    board: Board, 
    player: Player
): boolean {

    const playerCache = cache.get(player);
    if(playerCache.get(board)){
        return playerCache.get(board);
    }

    const attackLines = generateLinesOfAttack(board, player, kingPosition(board, player));
    const checkLine = attackLines.next()
    const isInCheck = checkLine.value !== null;
    playerCache.set(board, isInCheck);
    return isInCheck;
}

export default isInCheck;