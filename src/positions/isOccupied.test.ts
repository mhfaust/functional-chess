import isOccupied from 'positions/isOccupied'
import { initialBoard } from 'board'
import { Position } 
    from 'constants/position';

import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';

describe('isOccupied', () => {
    it('reports true for initially positioned rook', () => {
        expect(isOccupied(initialBoard(), Position.A1)).toBe(true);
    })

    it('reports false for empty square', () => {
        expect(isOccupied(initialBoard(), Position.A3)).toBe(false);
    })
})