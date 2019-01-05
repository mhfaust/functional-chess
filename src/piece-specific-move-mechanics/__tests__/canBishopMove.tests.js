import canBishopMove from 'piece-specific-move-mechanics/canBishopMove'
import { bishop1Board } from 'boards'
import { A1,A2,A3,A4,A5,A6,A7,A8,B1,B2,B3,B4,B5,B6,B7,B8,C1,C2,C3,C4,C5,C6,C7,C8,D1,D2,D3,D4,D5,D6,D7,D8,E1,E2,E3,E4,E5,E6,E7,E8,F1,F2,F3,F4,F5,F6,F7,F8,G1,G2,G3,G4,G5,G6,G7,G8,H1,H2,H3,H4,H5,H6,H7,H8 } 
    from 'constants/algebraic';
    
describe('canBishopMove', () => {

    it('can advance left', () => {
        const answer = canBishopMove(bishop1Board(), D4, C5);
        expect(answer).toBe(true);
    });

    it('can advance right', () => {
        const answer = canBishopMove(bishop1Board(), D4, F6);
        expect(answer).toBe(true);
    });

    it('can retreat left', () => {
        const answer = canBishopMove(bishop1Board(), D4, A1);
        expect(answer).toBe(true);
    });

    it('can retreat right', () => {
        const answer = canBishopMove(bishop1Board(), D4, G1);
        expect(answer).toBe(true);
    });

    it('cannot move unequal forward and right displacements', () => {
        const answer = canBishopMove(bishop1Board(), D4, H6);
        expect(answer).toBe(false);
    });

    it('canot move laterally', () => {
        const answer = canBishopMove(bishop1Board(), D4, H4);
        expect(answer).toBe(false);
    });

    it('canot advance forward', () => {
        const answer = canBishopMove(bishop1Board(), D4, D8);
        expect(answer).toBe(false);
    });

    it('cannot capture own piece', () => {
        const answer = canBishopMove(bishop1Board(), D4, B6);
        expect(answer).toBe(false);
    });

    it('can capture opponent piece', () => {
        const answer = canBishopMove(bishop1Board(), D4, G7);
        expect(answer).toBe(true);
    });

    it('cannot move beyond a piece', () => {
        const answer = canBishopMove(bishop1Board(), D4, H8);
        expect(answer).toBe(false);
    });
})