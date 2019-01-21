import { ALL_PIECES } from 'constants/pieces'
import { file, rank } from 'position-utils/index'
import { pieces } from 'constants/pieces'

function pieceAt (board: Board, position: GridCoordinates): string {
    const found: string = board[file(position)][rank(position)];

    if(ALL_PIECES.has(found))
        return found;
    else
        return pieces.Empty;
}

export default pieceAt;