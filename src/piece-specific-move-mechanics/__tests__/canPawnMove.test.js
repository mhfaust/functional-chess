import canPawnMove from 'piece-specific-move-mechanics/canPawnMove'
import { pawn1Board } from 'boards'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,EMPTY,__ } from 'constants/pieces';
import { A1,A2,A3,A4,A5,A6,A7,A8,B1,B2,B3,B4,B5,B6,B7,B8,C1,C2,C3,C4,C5,C6,C7,C8,D1,D2,D3,D4,D5,D6,D7,D8,E1,E2,E3,E4,E5,E6,E7,E8,F1,F2,F3,F4,F5,F6,F7,F8,G1,G2,G3,G4,G5,G6,G7,G8,H1,H2,H3,H4,H5,H6,H7,H8 } 
    from 'constants/algebraic';


describe('canPawnMove', () => {

    describe('white', () => {
        it('can move one space forward when NOT blocked', () => {
            const answer = canPawnMove(pawn1Board(), C3, C4);
            expect(answer).toBe(true);
        });
    
        it('cannot move one space forward when IS blocked', () => {
            const answer = canPawnMove(pawn1Board(), H4, H5);
            expect(answer).toBe(false);
        });
    
        it('can capture forward right', () => {
            const answer = canPawnMove(pawn1Board(), D4, E5);
            expect(answer).toBe(true);
        });
    
        it('can capture forward left', () => {
            const answer = canPawnMove(pawn1Board(), C3, B4);
            expect(answer).toBe(true);
        });

        it('cannot move foward left to empty square', () => {
            const answer = canPawnMove(pawn1Board(), G2, F3);
            expect(answer).toBe(false);
        })

        it('cannot move foward right to empty square', () => {
            const answer = canPawnMove(pawn1Board(), E2, F3);
            expect(answer).toBe(false);
        })

        it('cannot move backward', () => {
            const answer = canPawnMove(pawn1Board(), G5, H5);
            expect(answer).toBe(false);
        });

        it('cannot move sideways', () => {
            const answer = canPawnMove(pawn1Board(), H4, G4);
            expect(answer).toBe(false);
        })
    });

    describe('black', () => {
        it('can move one space forward when NOT blocked', () => {
            const answer = canPawnMove(pawn1Board(), E5, E4);
            expect(answer).toBe(true);
        });
    
        it('can move one space forward when IS blocked', () => {
            const answer = canPawnMove(pawn1Board(), D5, D4);
            expect(answer).toBe(false);
        });
    
        it('can capture forward right', () => {
            const answer = canPawnMove(pawn1Board(), E5, D4);
            expect(answer).toBe(true);
        });
    
        it('can capture forward left', () => {
            const answer = canPawnMove(pawn1Board(), G5, H4);
            expect(answer).toBe(true);
        });

        it('cannot move backward', () => {
            const answer = canPawnMove(pawn1Board(), B4, B5);
            expect(answer).toBe(false);
        });

        it('cannot move sideways', () => {
            const answer = canPawnMove(pawn1Board(), H4, G4);
            expect(answer).toBe(false);
        })
    });
});