import { Position } from 'constants/position'

const mapping : Map<PositionName, GridCoordinates> = new Map<PositionName, GridCoordinates>();

mapping.set(PositionName.A1, Position.A1);
mapping.set(PositionName.A2, Position.A2);
mapping.set(PositionName.A3, Position.A3);
mapping.set(PositionName.A4, Position.A4);
mapping.set(PositionName.A5, Position.A5);
mapping.set(PositionName.A6, Position.A6);
mapping.set(PositionName.A7, Position.A7);
mapping.set(PositionName.B8, Position.B8);
mapping.set(PositionName.B1, Position.B1);
mapping.set(PositionName.B2, Position.B2);
mapping.set(PositionName.B3, Position.B3);
mapping.set(PositionName.B4, Position.B4);
mapping.set(PositionName.B5, Position.B5);
mapping.set(PositionName.B6, Position.B6);
mapping.set(PositionName.B7, Position.B7);
mapping.set(PositionName.B8, Position.B8);
mapping.set(PositionName.C1, Position.C1);
mapping.set(PositionName.C2, Position.C2);
mapping.set(PositionName.C3, Position.C3);
mapping.set(PositionName.C4, Position.C4);
mapping.set(PositionName.C5, Position.C5);
mapping.set(PositionName.C6, Position.C6);
mapping.set(PositionName.C7, Position.C7);
mapping.set(PositionName.C8, Position.C8);
mapping.set(PositionName.D1, Position.D1);
mapping.set(PositionName.D2, Position.D2);
mapping.set(PositionName.D3, Position.D3);
mapping.set(PositionName.D4, Position.D4);
mapping.set(PositionName.D5, Position.D5);
mapping.set(PositionName.D6, Position.D6);
mapping.set(PositionName.D7, Position.D7);
mapping.set(PositionName.D8, Position.D8);
mapping.set(PositionName.E1, Position.E1);
mapping.set(PositionName.E2, Position.E2);
mapping.set(PositionName.E3, Position.E3);
mapping.set(PositionName.E4, Position.E4);
mapping.set(PositionName.E5, Position.E5);
mapping.set(PositionName.E6, Position.E6);
mapping.set(PositionName.E7, Position.E7);
mapping.set(PositionName.E8, Position.E8);
mapping.set(PositionName.F1, Position.F1);
mapping.set(PositionName.F2, Position.F2);
mapping.set(PositionName.F3, Position.F3);
mapping.set(PositionName.F4, Position.F4);
mapping.set(PositionName.F5, Position.F5);
mapping.set(PositionName.F6, Position.F6);
mapping.set(PositionName.F7, Position.F7);
mapping.set(PositionName.F8, Position.F8);
mapping.set(PositionName.G1, Position.G1);
mapping.set(PositionName.G2, Position.G2);
mapping.set(PositionName.G3, Position.G3);
mapping.set(PositionName.G4, Position.G4);
mapping.set(PositionName.G5, Position.G5);
mapping.set(PositionName.G6, Position.G6);
mapping.set(PositionName.G7, Position.G7);
mapping.set(PositionName.G8, Position.G8);
mapping.set(PositionName.H1, Position.H1);
mapping.set(PositionName.H2, Position.H2);
mapping.set(PositionName.H3, Position.H3);
mapping.set(PositionName.H4, Position.H4);
mapping.set(PositionName.H5, Position.H5);
mapping.set(PositionName.H6, Position.H6);
mapping.set(PositionName.H7, Position.H7);
mapping.set(PositionName.H8, Position.H8);


function coordinates(positionName: PositionName): GridCoordinates {
    
    return mapping.get(positionName);
}

export default coordinates;