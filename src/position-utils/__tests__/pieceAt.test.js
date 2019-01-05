import pieceAt from 'position-utils/pieceAt'
import { initialBoard } from 'boards'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,EMPTY,__ } from 'constants/pieces'
import { B1 } from 'constants/algebraic'

describe('pieceAt', () => {
    it('gets the white queen knight from the initial board', () => {
        expect(pieceAt(initialBoard(), B1)).toBe(WN);
    });

    it('gets the black queen from the inital board', () => {
        expect(pieceAt(initialBoard(), [3,7])).toBe(BQ)
    })

    it('gets null for a square without a piece', () => {
        expect(pieceAt(initialBoard(), [0,2])).toBe(__);
    })
})