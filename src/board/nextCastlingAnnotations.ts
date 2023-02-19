import { areSamePositions } from "positions";
import { Position } from "constants/position";
import { CastlingAnnotations } from "interfaces/CastlingAnnotations";



function nextCastlingAnnotations(
    pieceMovedFromPosition:GridCoordinates,
    previousAnnotations: CastlingAnnotations
): CastlingAnnotations {

    const movedFrom = (from: GridCoordinates) :boolean => areSamePositions(pieceMovedFromPosition, from)

    return{
        whiteQueenSideCastlingPrecluded: previousAnnotations.whiteQueenSideCastlingPrecluded || movedFrom(Position.F1) || movedFrom(Position.A1),
        whiteKingSideCastlingPrecluded: previousAnnotations.whiteKingSideCastlingPrecluded || movedFrom(Position.F1) || movedFrom(Position.H1),
        blackQueenSideCastlingPrecluded: previousAnnotations.blackQueenSideCastlingPrecluded || movedFrom(Position.F8) || movedFrom(Position.A8),
        blackKingSideCastlingPrecluded: previousAnnotations.blackKingSideCastlingPrecluded || movedFrom(Position.F8) || movedFrom(Position.H8),
    }
}

export default nextCastlingAnnotations;