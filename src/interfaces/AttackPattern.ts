type AttackPattern = {
    vectors: ReadonlyArray<MoveVector>, 
    canMoveLikeThis: Set<Piece>, 
    limit: number,
}