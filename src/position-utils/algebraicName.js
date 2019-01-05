import { rank, file } from 'position-utils'

const files = 'ABCDEFGH';

function algebraicName (position) {
    return files[file(position)] + (rank(position) + 1);
}

export default algebraicName