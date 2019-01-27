import { kingVectors, knightVectors, rookVectors, bishopVectors, pawnBlackAttackVectors, pawnWhiteAttackVectors }
    from 'constants/move-vectors'

import { BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP } from 'board-utils/pieces-shorthand';

const knight : AttackPattern = {
    vectors: knightVectors,
    limit: 1,
    canMoveLikeThis: new Set([WN]),
}

const bishop : AttackPattern = {
    vectors: bishopVectors,
    limit: 0,
    canMoveLikeThis: new Set([WN]),
}

export const whiteAttackPatterns: Array<AttackPattern> = [
    { vectors: pawnWhiteAttackVectors, canMoveLikeThis: new Set([WP, WQ, WB, WK]), limit: 1 },
    { vectors: kingVectors, canMoveLikeThis: new Set([WK, WQ]), limit: 1 },
    knight,
    { vectors: bishopVectors, canMoveLikeThis: new Set([WB, WQ]), limit: 0 },
    { vectors: rookVectors, canMoveLikeThis: new Set([WR, WQ]), limit: 0 },
];

export const blackAttackPatterns: Array<AttackPattern> = [
    { vectors: pawnBlackAttackVectors, canMoveLikeThis: new Set([BP, BQ, BB, BK]), limit: 1 },
    { vectors: kingVectors, canMoveLikeThis: new Set([BK, BQ]), limit: 1 },
    { vectors: knightVectors, canMoveLikeThis: new Set([BN]), limit: 1 },
    { vectors: bishopVectors, canMoveLikeThis: new Set([BB, BQ]), limit: 0 },
    { vectors: rookVectors, canMoveLikeThis: new Set([BR, BQ]), limit: 0 },
];