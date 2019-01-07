import * as values from 'constants/algebraic.ts'

function coordinates(algebraicName: string): GridCoordinates {
    
    return values[algebraicName];
}

export default coordinates;