const opposites = {
    [Player.Black]: Player.White,
    [Player.White]: Player.Black
}

function otherPlayer (player: string): string {
    return opposites[player];
}
export default otherPlayer;