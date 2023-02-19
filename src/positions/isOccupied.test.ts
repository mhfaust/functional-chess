import isOccupied from 'positions/isOccupied'
import { initialBoard } from 'board'

import COORDS from './coordinates';

describe('isOccupied', () => {
    it('reports true for initially positioned rook', () => {
        expect(isOccupied(initialBoard(), COORDS.A1)).toBe(true);
    })

    it('reports false for empty square', () => {
        expect(isOccupied(initialBoard(), COORDS.A3)).toBe(false);
    })
})