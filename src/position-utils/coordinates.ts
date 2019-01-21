import { Position } from 'constants/algebraic.ts'

const mapping : Map<AlgebraicName, GridCoordinates> = new Map<AlgebraicName, GridCoordinates>();

mapping.set(AlgebraicName.A1, Position.A1);
mapping.set(AlgebraicName.A2, Position.A2);
mapping.set(AlgebraicName.A3, Position.A3);
mapping.set(AlgebraicName.A4, Position.A4);
mapping.set(AlgebraicName.A5, Position.A5);
mapping.set(AlgebraicName.A6, Position.A6);
mapping.set(AlgebraicName.A7, Position.A7);
mapping.set(AlgebraicName.B8, Position.B8);
mapping.set(AlgebraicName.B1, Position.B1);
mapping.set(AlgebraicName.B2, Position.B2);
mapping.set(AlgebraicName.B3, Position.B3);
mapping.set(AlgebraicName.B4, Position.B4);
mapping.set(AlgebraicName.B5, Position.B5);
mapping.set(AlgebraicName.B6, Position.B6);
mapping.set(AlgebraicName.B7, Position.B7);
mapping.set(AlgebraicName.B8, Position.B8);
mapping.set(AlgebraicName.C1, Position.C1);
mapping.set(AlgebraicName.C2, Position.C2);
mapping.set(AlgebraicName.C3, Position.C3);
mapping.set(AlgebraicName.C4, Position.C4);
mapping.set(AlgebraicName.C5, Position.C5);
mapping.set(AlgebraicName.C6, Position.C6);
mapping.set(AlgebraicName.C7, Position.C7);
mapping.set(AlgebraicName.C8, Position.C8);
mapping.set(AlgebraicName.D1, Position.D1);
mapping.set(AlgebraicName.D2, Position.D2);
mapping.set(AlgebraicName.D3, Position.D3);
mapping.set(AlgebraicName.D4, Position.D4);
mapping.set(AlgebraicName.D5, Position.D5);
mapping.set(AlgebraicName.D6, Position.D6);
mapping.set(AlgebraicName.D7, Position.D7);
mapping.set(AlgebraicName.D8, Position.D8);
mapping.set(AlgebraicName.E1, Position.E1);
mapping.set(AlgebraicName.E2, Position.E2);
mapping.set(AlgebraicName.E3, Position.E3);
mapping.set(AlgebraicName.E4, Position.E4);
mapping.set(AlgebraicName.E5, Position.E5);
mapping.set(AlgebraicName.E6, Position.E6);
mapping.set(AlgebraicName.E7, Position.E7);
mapping.set(AlgebraicName.E8, Position.E8);
mapping.set(AlgebraicName.F1, Position.F1);
mapping.set(AlgebraicName.F2, Position.F2);
mapping.set(AlgebraicName.F3, Position.F3);
mapping.set(AlgebraicName.F4, Position.F4);
mapping.set(AlgebraicName.F5, Position.F5);
mapping.set(AlgebraicName.F6, Position.F6);
mapping.set(AlgebraicName.F7, Position.F7);
mapping.set(AlgebraicName.F8, Position.F8);
mapping.set(AlgebraicName.G1, Position.G1);
mapping.set(AlgebraicName.G2, Position.G2);
mapping.set(AlgebraicName.G3, Position.G3);
mapping.set(AlgebraicName.G4, Position.G4);
mapping.set(AlgebraicName.G5, Position.G5);
mapping.set(AlgebraicName.G6, Position.G6);
mapping.set(AlgebraicName.G7, Position.G7);
mapping.set(AlgebraicName.G8, Position.G8);
mapping.set(AlgebraicName.H1, Position.H1);
mapping.set(AlgebraicName.H2, Position.H2);
mapping.set(AlgebraicName.H3, Position.H3);
mapping.set(AlgebraicName.H4, Position.H4);
mapping.set(AlgebraicName.H5, Position.H5);
mapping.set(AlgebraicName.H6, Position.H6);
mapping.set(AlgebraicName.H7, Position.H7);
mapping.set(AlgebraicName.H8, Position.H8);


function coordinates(algebraicName: AlgebraicName): GridCoordinates {
    
    return mapping.get(algebraicName);
}

export default coordinates;