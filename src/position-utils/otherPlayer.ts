import { Player } from '../constants/pieces';
const { Black, White }  = Player;

const opposites = {
    [Black]: White,
    [White]: Black
}

function otherPlayer (player: string): string {
    return opposites[player];
}
export default otherPlayer;