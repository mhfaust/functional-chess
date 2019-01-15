import { rank, file } from 'position-utils/index'

const files = 'ABCDEFGH';

function algebraicName (position: GridCoordinates): string {
    
    return files[file(position)] + (rank(position) + 1);
}

export default algebraicName