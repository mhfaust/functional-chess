type AttackPattern = {
    name: Piece, 
    vectors: ReadonlyArray<MoveVector>, 
    canMoveLikeThis: Set<Piece>, 
    onlyOnce: boolean,
}