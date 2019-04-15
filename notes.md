ChessBoard (?)
    grid 8x8 array of rows. 
        0,0 is lower-left of standard board in algebraic notation (A1)
        0,1 is A2 position in algebraic notation (white queen-rook-2 in descriptive), etc.

    type constants: WK, WQ WR, WN, WB, WP, BK, BQ, BR, BN, BB, BP
    probably no need for a class

move calculations:
    canMoveTo(fromCoords, toCoords)
    allowedMoves(piceCoords)
    - note, probably not efficient to use canMoveTo as part of allowedMoves
    
isInCheck(player)
isInCheckMate(player)

canMoveTo(coord){
    getPiece at coord
    exit if no piece
    get move explore strategy for piece type
    
}

knight(board, coord){
    const displacements  =[ [-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1] 
}


allowedMoves{

}

pawnMoves
rookMoves
knightMoves
bishopMoves
queenMoves
kingMoves
