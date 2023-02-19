import locatePiece from 'positions/locatePiece';
import { initialBoard } from 'board';
import { Position } from 'constants/position'


describe('locatePiece', () => {
    it('locates White King in the initial board', () => {
        expect(locatePiece(initialBoard(), 'WhiteKing' )).toEqual(Position.E1)
    });
    it('locates White Queen in the initial board', () => {
        expect(locatePiece(initialBoard(), 'WhiteQueen' )).toEqual(Position.D1)
    });
})