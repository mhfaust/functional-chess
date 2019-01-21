import { rank, file } from 'position-utils/index';

const grid = [
    [AlgebraicName.A1,AlgebraicName.A2,AlgebraicName.A3,AlgebraicName.A4,AlgebraicName.A5,AlgebraicName.A6,AlgebraicName.A7,AlgebraicName.A8,],
    [AlgebraicName.B1,AlgebraicName.B2,AlgebraicName.B3,AlgebraicName.B4,AlgebraicName.B5,AlgebraicName.B6,AlgebraicName.B7,AlgebraicName.B8,],
    [AlgebraicName.C1,AlgebraicName.C2,AlgebraicName.C3,AlgebraicName.C4,AlgebraicName.C5,AlgebraicName.C6,AlgebraicName.C7,AlgebraicName.C8,],
    [AlgebraicName.D1,AlgebraicName.D2,AlgebraicName.D3,AlgebraicName.D4,AlgebraicName.D5,AlgebraicName.D6,AlgebraicName.D7,AlgebraicName.D8,],
    [AlgebraicName.E1,AlgebraicName.E2,AlgebraicName.E3,AlgebraicName.E4,AlgebraicName.E5,AlgebraicName.E6,AlgebraicName.E7,AlgebraicName.E8,],
    [AlgebraicName.F1,AlgebraicName.F2,AlgebraicName.F3,AlgebraicName.F4,AlgebraicName.F5,AlgebraicName.F6,AlgebraicName.F7,AlgebraicName.F8,],
    [AlgebraicName.G1,AlgebraicName.G2,AlgebraicName.G3,AlgebraicName.G4,AlgebraicName.G5,AlgebraicName.G6,AlgebraicName.G7,AlgebraicName.G8,],
    [AlgebraicName.H1,AlgebraicName.H2,AlgebraicName.H3,AlgebraicName.H4,AlgebraicName.H5,AlgebraicName.H6,AlgebraicName.H7,AlgebraicName.H8,],
]

function algebraicName (position: GridCoordinates): AlgebraicName {
    
    return grid[file(position)][rank(position)];
}

export default algebraicName