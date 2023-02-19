import COORDS from 'positions/coordinates'
import { Player } from "board/player";
import { Board } from "types/Board";


//(ep)
const queenSideCastle=('0-0-0');
const kingSideCastle=('0-0');
const rank = '[1-8]';
const file = '[abcdefg]';
const pos = `${file}${rank}`;
const P = '[KQBNRP]';
const ann = `(${P})?`;

const capture = `(${P}|${file})(x|:)?${pos}`//${rank}?

const r = new RegExp(`((${P}|()?x?${pos})(0-0-0)(0-0)`)

const pawnForward = new RegExp(`^${pos}$`); //
const pieceMove = `(${P})(${pos})`; //e.g. Ne4
const pieceWithDepartureFile  = `(${P})(${file})(${pos})`; //e.g. Ne4
const pieceWithDepartureRank  = `(${P})(${rank})(${pos})`; //e.g. Ne4
const pieceWithDeparturePos  = `(${P})(${pos})(${pos})`; //e.g. Ne4

// const strategies = new Map<string, ParsesAlgebraicNotation> ([
//     [ simplePawnForward, (s: string) => {
//         [COORDS.A1, COORDS.A1] 
//     }]
// ]);


function moveFromAlgebraicNotation(notation: string, board: Board, player: Player): [GridCoordinates, GridCoordinates]{

    let pawnForwardNote = notation.match(pawnForward);
    if(pawnForwardNote){
        return 
    }

    return [COORDS.E8, COORDS.E1];
}