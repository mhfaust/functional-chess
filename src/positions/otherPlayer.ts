const opposites = {
    [Player.Black]: Player.White,
    [Player.White]: Player.Black
}

function otherPlayer (player: Player): Player {
    return opposites[player];
}
export default otherPlayer;