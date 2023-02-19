import locatePiece from 'positions/locatePiece';
import { initialBoard } from 'board';
import { Position } from 'constants/position'


describe('locatePiece', () => {
    it('locates White King in the initial board', () => {
        expect(locatePiece(initialBoard(), 'White King' )).toEqual(Position.E1)
    });
    it('locates White Queen in the initial board', () => {
        expect(locatePiece(initialBoard(), 'White Queen' )).toEqual(Position.D1)
    });
})