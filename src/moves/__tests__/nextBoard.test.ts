import nextBoard from '../nextBoard'
import { pieces } from 'constants/pieces'
import { Position } from 'constants/algebraic'
const { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,Empty,__ } = pieces;

describe('nextBoard', () => {

    it('is in checkmate (1)', () => {
        const boardBefore: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,WP,BP,BR],
/*  G  */ [__,__,__,__,__,BP,BQ,BK],
/*  H  */ [__,__,__,__,__,__,BP,__],
        ];

        const boardAfter: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,WP,BP,BR],
/*  G  */ [__,__,__,__,__,BP,BQ,__],
/*  H  */ [__,__,__,__,__,__,BP,BK],
        ];        

        expect(nextBoard(boardBefore, Position.G8, Position.H8)).toEqual(boardAfter)
    })
})