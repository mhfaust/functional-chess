interface AttackPattern {
    vectors: ReadonlyArray<MoveVector>, 
    canAttackLikeThis: Set<Piece>, 
    limit: number,
}