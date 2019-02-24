import { rank, file } from 'positions/index';

const grid = [
    [PositionName.A1,PositionName.A2,PositionName.A3,PositionName.A4,PositionName.A5,PositionName.A6,PositionName.A7,PositionName.A8,],
    [PositionName.B1,PositionName.B2,PositionName.B3,PositionName.B4,PositionName.B5,PositionName.B6,PositionName.B7,PositionName.B8,],
    [PositionName.C1,PositionName.C2,PositionName.C3,PositionName.C4,PositionName.C5,PositionName.C6,PositionName.C7,PositionName.C8,],
    [PositionName.D1,PositionName.D2,PositionName.D3,PositionName.D4,PositionName.D5,PositionName.D6,PositionName.D7,PositionName.D8,],
    [PositionName.E1,PositionName.E2,PositionName.E3,PositionName.E4,PositionName.E5,PositionName.E6,PositionName.E7,PositionName.E8,],
    [PositionName.F1,PositionName.F2,PositionName.F3,PositionName.F4,PositionName.F5,PositionName.F6,PositionName.F7,PositionName.F8,],
    [PositionName.G1,PositionName.G2,PositionName.G3,PositionName.G4,PositionName.G5,PositionName.G6,PositionName.G7,PositionName.G8,],
    [PositionName.H1,PositionName.H2,PositionName.H3,PositionName.H4,PositionName.H5,PositionName.H6,PositionName.H7,PositionName.H8,],
]

function positionName (position: GridCoordinates): PositionName {
    
    return grid[file(position)][rank(position)];
}

export default positionName