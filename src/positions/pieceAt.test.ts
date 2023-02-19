import pieceAt from 'positions/pieceAt'
import { initialBoard } from 'board'
import COORDS from 'positions/coordinates'


import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';

describe('pieceAt', () => {
    it('gets the white queen knight from the initial board', () => {
        expect(pieceAt(initialBoard(), COORDS.B1)).toBe('White Knight');
    });

    it('gets the black queen from the inital board', () => {
        expect(pieceAt(initialBoard(), COORDS.D8)).toBe('Black Queen')
    })

    it('gets null for a square without a piece', () => {
        expect(pieceAt(initialBoard(), COORDS.A3)).toBe(null);
    })
})