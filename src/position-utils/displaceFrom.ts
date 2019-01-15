import { rank, file } from 'position-utils/index';
    
    function displaceFrom  (currentPosition: GridCoordinates, vector: MoveVector)
        : GridCoordinates {
            const newFileIndex = file(currentPosition) - file(vector);
            const newRankIndex = rank(currentPosition) - rank(vector)

            return [
                newFileIndex,
                newRankIndex
            ];
        };

export default displaceFrom;