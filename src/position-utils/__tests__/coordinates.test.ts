import coordinates from 'position-utils/coordinates';
import { Position } from 'constants/algebraic';

describe('coordinates', () => {
    it('gets [0,0] for A1', () => {
        expect(coordinates(AlgebraicName.A1)).toEqual(Position.A1);
    });
    it('gets [7,7] for H8', () => {
        expect(coordinates(AlgebraicName.H8)).toEqual(Position.H8);
    });
});