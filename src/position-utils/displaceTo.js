import { rank, file } from 'position-utils';
    
    const displaceTo = (currentPosition, displacement) =>[ 
        file(currentPosition) + file(displacement), 
        rank(currentPosition) + rank(displacement)
];

export default displaceTo;