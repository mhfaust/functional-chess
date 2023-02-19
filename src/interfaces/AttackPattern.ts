import { Piece } from "positions/piece";

export type AttackPattern = {
    vectors: ReadonlyArray<MoveVector>; 
    canAttackLikeThis: Set<Piece>; 
    limit: number;
}