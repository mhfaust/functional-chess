import { areSamePositions } from "positions";
import COORDS from 'positions/coordinates'
import { CastlingAnnotations } from "interfaces/CastlingAnnotations";



function nextCastlingAnnotations(
    pieceMovedFromPosition: GridCoordinates,
    previousAnnotations: CastlingAnnotations
): CastlingAnnotations {

    const movedFrom = (from: GridCoordinates) : boolean => areSamePositions(pieceMovedFromPosition, from)

    return{
        whiteQueenSideCastlingPrecluded: previousAnnotations.whiteQueenSideCastlingPrecluded || movedFrom(COORDS.F1) || movedFrom(COORDS.A1),
        whiteKingSideCastlingPrecluded: previousAnnotations.whiteKingSideCastlingPrecluded || movedFrom(COORDS.F1) || movedFrom(COORDS.H1),
        blackQueenSideCastlingPrecluded: previousAnnotations.blackQueenSideCastlingPrecluded || movedFrom(COORDS.F8) || movedFrom(COORDS.A8),
        blackKingSideCastlingPrecluded: previousAnnotations.blackKingSideCastlingPrecluded || movedFrom(COORDS.F8) || movedFrom(COORDS.H8),
    }
}

export default nextCastlingAnnotations;