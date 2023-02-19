import locatePiece from 'positions/locatePiece';
import { initialBoard } from 'board';
import COORDS from 'positions/coordinates'


describe('locatePiece', () => {
    it('locates White King in the initial board', () => {
        expect(locatePiece(initialBoard(), 'White King' )).toEqual(COORDS.E1)
    });
    it('locates White Queen in the initial board', () => {
        expect(locatePiece(initialBoard(), 'White Queen' )).toEqual(COORDS.D1)
    });
})