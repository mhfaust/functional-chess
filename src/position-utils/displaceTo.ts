import { rank, file } from 'position-utils/index';
    
    function displaceTo  (currentPosition: GridCoordinates, vector: MoveVector)
        : GridCoordinates {
            const newFileIndex = file(currentPosition) + file(vector);
            const newRankIndex = rank(currentPosition) + rank(vector)

            return [
                newFileIndex,
                newRankIndex
            ];
        };

export default displaceTo;