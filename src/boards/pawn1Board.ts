import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';

export default (): Board => [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [WR,WP,__,__,__,__,BP,BR],
/*  B  */ [WN,WP,__,BP,__,__,__,BN],
/*  C  */ [WB,__,WP,__,BP,__,__,BB],
/*  D  */ [WQ,__,__,WP,__,BP,__,BQ],
/*  E  */ [WK,WP,__,__,BP,__,__,BK],
/*  F  */ [WB,WP,__,__,__,__,BP,BB],
/*  G  */ [WN,WP,__,__,BP,__,__,BN],
/*  H  */ [WR,__,__,WP,BP,__,__,BR],
];

