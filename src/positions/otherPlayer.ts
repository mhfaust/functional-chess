import { Player } from "board/player";

function otherPlayer (player: Player): Player {
    return player === 'White' ? 'Black' : 'White'
}
export default otherPlayer;