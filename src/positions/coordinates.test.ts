import coordinates from 'positions/coordinates';
import { Position } from 'constants/position';

describe('coordinates', () => {
    it('gets [0,0] for A1', () => {
        expect(coordinates(PositionName.A1)).toEqual(Position.A1);
    });
    it('gets [7,7] for H8', () => {
        expect(coordinates(PositionName.H8)).toEqual(Position.H8);
    });
});