import { areSamePositions } from "positions";
import COORDS from 'positions/coordinates'
import { CastlingAnnotations } from "interfaces/CastlingAnnotations";
import { PositionName } from "positions/positionName";


function nextCastlingAnnotations(
    movedFrom: PositionName,
    previousAnnotations: CastlingAnnotations
): CastlingAnnotations {

    return{
        whiteQueenSideCastlingPrecluded: previousAnnotations.whiteQueenSideCastlingPrecluded || movedFrom === 'F1' || movedFrom === 'A1',
        whiteKingSideCastlingPrecluded: previousAnnotations.whiteKingSideCastlingPrecluded || movedFrom === 'F1' || movedFrom === 'H1',
        blackQueenSideCastlingPrecluded: previousAnnotations.blackQueenSideCastlingPrecluded || movedFrom === 'F8' || movedFrom === 'A8',
        blackKingSideCastlingPrecluded: previousAnnotations.blackKingSideCastlingPrecluded || movedFrom === 'F8' || movedFrom === 'H8',
    }
}

export default nextCastlingAnnotations;