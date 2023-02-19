import coordinates from 'positions/coordinates';
import { Position } from 'constants/position';

describe('coordinates', () => {
    it('gets [0,0] for A1', () => {
        expect(coordinates('A1')).toEqual(Position.A1);
    });
    it('gets [7,7] for H8', () => {
        expect(coordinates('H8')).toEqual(Position.H8);
    });
});