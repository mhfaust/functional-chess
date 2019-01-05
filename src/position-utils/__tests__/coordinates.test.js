import coordinates from 'position-utils/coordinates';

describe('coordinates', () => {
    it('gets [0,0] for A1', () => {
        expect(coordinates('A1')).toEqual([0,0]);
    });
    it('gets [7,7] for H8', () => {
        expect(coordinates('H8')).toEqual([7,7]);
    });
});