import locatePiece from 'position-utils/locatePiece';
import { initialBoard } from 'boards/index';
import { Position } from 'constants/algebraic'


describe('locatePiece', () => {
    it('locates White King in the initial board', () => {
        expect(locatePiece(initialBoard(), Piece.WhiteKing )).toEqual(Position.E1)
    });
    it('locates White Queen in the initial board', () => {
        expect(locatePiece(initialBoard(), Piece.WhiteQueen )).toEqual(Position.D1)
    });
})