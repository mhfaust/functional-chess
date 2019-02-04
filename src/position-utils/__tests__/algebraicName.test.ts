import positionName from 'position-utils/positionName'

describe('positionName', () => {
    it('gets A1 for [0,0]', () => {
        expect(positionName([0,0])).toBe('A1');
    })
})