import { Position } from 'constants/position'
import { PositionName } from 'enums/positionName';

const mapping : Map<PositionName, GridCoordinates> = new Map<PositionName, GridCoordinates>();

mapping.set('A1', Position.A1);
mapping.set('A2', Position.A2);
mapping.set('A3', Position.A3);
mapping.set('A4', Position.A4);
mapping.set('A5', Position.A5);
mapping.set('A6', Position.A6);
mapping.set('A7', Position.A7);
mapping.set('B8', Position.B8);
mapping.set('B1', Position.B1);
mapping.set('B2', Position.B2);
mapping.set('B3', Position.B3);
mapping.set('B4', Position.B4);
mapping.set('B5', Position.B5);
mapping.set('B6', Position.B6);
mapping.set('B7', Position.B7);
mapping.set('B8', Position.B8);
mapping.set('C1', Position.C1);
mapping.set('C2', Position.C2);
mapping.set('C3', Position.C3);
mapping.set('C4', Position.C4);
mapping.set('C5', Position.C5);
mapping.set('C6', Position.C6);
mapping.set('C7', Position.C7);
mapping.set('C8', Position.C8);
mapping.set('D1', Position.D1);
mapping.set('D2', Position.D2);
mapping.set('D3', Position.D3);
mapping.set('D4', Position.D4);
mapping.set('D5', Position.D5);
mapping.set('D6', Position.D6);
mapping.set('D7', Position.D7);
mapping.set('D8', Position.D8);
mapping.set('E1', Position.E1);
mapping.set('E2', Position.E2);
mapping.set('E3', Position.E3);
mapping.set('E4', Position.E4);
mapping.set('E5', Position.E5);
mapping.set('E6', Position.E6);
mapping.set('E7', Position.E7);
mapping.set('E8', Position.E8);
mapping.set('F1', Position.F1);
mapping.set('F2', Position.F2);
mapping.set('F3', Position.F3);
mapping.set('F4', Position.F4);
mapping.set('F5', Position.F5);
mapping.set('F6', Position.F6);
mapping.set('F7', Position.F7);
mapping.set('F8', Position.F8);
mapping.set('G1', Position.G1);
mapping.set('G2', Position.G2);
mapping.set('G3', Position.G3);
mapping.set('G4', Position.G4);
mapping.set('G5', Position.G5);
mapping.set('G6', Position.G6);
mapping.set('G7', Position.G7);
mapping.set('G8', Position.G8);
mapping.set('H1', Position.H1);
mapping.set('H2', Position.H2);
mapping.set('H3', Position.H3);
mapping.set('H4', Position.H4);
mapping.set('H5', Position.H5);
mapping.set('H6', Position.H6);
mapping.set('H7', Position.H7);
mapping.set('H8', Position.H8);


function coordinates(positionName: PositionName): GridCoordinates {
    
    return mapping.get(positionName);
}

export default coordinates;