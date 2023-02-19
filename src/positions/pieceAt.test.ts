import pieceAt from 'positions/pieceAt'
import { initialBoard } from 'board'
import { Position } from 'constants/position'


import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';

describe('pieceAt', () => {
    it('gets the white queen knight from the initial board', () => {
        expect(pieceAt(initialBoard(), Position.B1)).toBe('WhiteKnight');
    });

    it('gets the black queen from the inital board', () => {
        expect(pieceAt(initialBoard(), Position.D8)).toBe('BlackQueen')
    })

    it('gets null for a square without a piece', () => {
        expect(pieceAt(initialBoard(), Position.A3)).toBe(null);
    })
})