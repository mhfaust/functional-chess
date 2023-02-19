import { CastlingAnnotations } from "interfaces/CastlingAnnotations";
import { EnPassantAnnotations } from "interfaces/EnPassantAnnotations";
import { KingAnnotations } from "interfaces/KingAnnotations";

export type MoveAnnotations = 
    KingAnnotations & 
    CastlingAnnotations & 
    EnPassantAnnotations 