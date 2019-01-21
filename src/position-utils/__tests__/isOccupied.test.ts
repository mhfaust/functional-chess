import isOccupied from 'position-utils/isOccupied'
import { initialBoard } from 'boards/index'
import { Position } 
    from 'constants/algebraic';

import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';

describe('isOccupied', () => {
    it('reports true for initially positioned rook', () => {
        expect(isOccupied(initialBoard(), Position.A1)).toBe(true);
    })

    it('reports false for empty square', () => {
        expect(isOccupied(initialBoard(), Position.A3)).toBe(false);
    })
})