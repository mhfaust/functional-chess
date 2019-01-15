import algebraicName from 'position-utils/algebraicName'

describe('algebraicName', () => {
    it('gets A1 for [0,0]', () => {
        expect(algebraicName([0,0])).toBe('A1');
    })
})