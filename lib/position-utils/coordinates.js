System.register(["constants/algebraic.ts"], function (exports_1, context_1) {
    "use strict";
    var _a, algebraic_ts_1, mapping;
    var __moduleName = context_1 && context_1.id;
    function coordinates(algebraicName) {
        return mapping[algebraicName];
    }
    return {
        setters: [
            function (algebraic_ts_1_1) {
                algebraic_ts_1 = algebraic_ts_1_1;
            }
        ],
        execute: function () {
            mapping = (_a = {},
                _a["A1"] = algebraic_ts_1.Position.A1,
                _a["A2"] = algebraic_ts_1.Position.A2,
                _a["A3"] = algebraic_ts_1.Position.A3,
                _a["A4"] = algebraic_ts_1.Position.A4,
                _a["A5"] = algebraic_ts_1.Position.A5,
                _a["A6"] = algebraic_ts_1.Position.A6,
                _a["A7"] = algebraic_ts_1.Position.A7,
                _a["B8"] = algebraic_ts_1.Position.B8,
                _a["B1"] = algebraic_ts_1.Position.B1,
                _a["B2"] = algebraic_ts_1.Position.B2,
                _a["B3"] = algebraic_ts_1.Position.B3,
                _a["B4"] = algebraic_ts_1.Position.B4,
                _a["B5"] = algebraic_ts_1.Position.B5,
                _a["B6"] = algebraic_ts_1.Position.B6,
                _a["B7"] = algebraic_ts_1.Position.B7,
                _a["B8"] = algebraic_ts_1.Position.B8,
                _a["C1"] = algebraic_ts_1.Position.C1,
                _a["C2"] = algebraic_ts_1.Position.C2,
                _a["C3"] = algebraic_ts_1.Position.C3,
                _a["C4"] = algebraic_ts_1.Position.C4,
                _a["C5"] = algebraic_ts_1.Position.C5,
                _a["C6"] = algebraic_ts_1.Position.C6,
                _a["C7"] = algebraic_ts_1.Position.C7,
                _a["C8"] = algebraic_ts_1.Position.C8,
                _a["D1"] = algebraic_ts_1.Position.D1,
                _a["D2"] = algebraic_ts_1.Position.D2,
                _a["D3"] = algebraic_ts_1.Position.D3,
                _a["D4"] = algebraic_ts_1.Position.D4,
                _a["D5"] = algebraic_ts_1.Position.D5,
                _a["D6"] = algebraic_ts_1.Position.D6,
                _a["D7"] = algebraic_ts_1.Position.D7,
                _a["D8"] = algebraic_ts_1.Position.D8,
                _a["E1"] = algebraic_ts_1.Position.E1,
                _a["E2"] = algebraic_ts_1.Position.E2,
                _a["E3"] = algebraic_ts_1.Position.E3,
                _a["E4"] = algebraic_ts_1.Position.E4,
                _a["E5"] = algebraic_ts_1.Position.E5,
                _a["E6"] = algebraic_ts_1.Position.E6,
                _a["E7"] = algebraic_ts_1.Position.E7,
                _a["E8"] = algebraic_ts_1.Position.E8,
                _a["F1"] = algebraic_ts_1.Position.F1,
                _a["F2"] = algebraic_ts_1.Position.F2,
                _a["F3"] = algebraic_ts_1.Position.F3,
                _a["F4"] = algebraic_ts_1.Position.F4,
                _a["F5"] = algebraic_ts_1.Position.F5,
                _a["F6"] = algebraic_ts_1.Position.F6,
                _a["F7"] = algebraic_ts_1.Position.F7,
                _a["F8"] = algebraic_ts_1.Position.F8,
                _a["G1"] = algebraic_ts_1.Position.G1,
                _a["G2"] = algebraic_ts_1.Position.G2,
                _a["G3"] = algebraic_ts_1.Position.G3,
                _a["G4"] = algebraic_ts_1.Position.G4,
                _a["G5"] = algebraic_ts_1.Position.G5,
                _a["G6"] = algebraic_ts_1.Position.G6,
                _a["G7"] = algebraic_ts_1.Position.G7,
                _a["G8"] = algebraic_ts_1.Position.G8,
                _a["H1"] = algebraic_ts_1.Position.H1,
                _a["H2"] = algebraic_ts_1.Position.H2,
                _a["H3"] = algebraic_ts_1.Position.H3,
                _a["H4"] = algebraic_ts_1.Position.H4,
                _a["H5"] = algebraic_ts_1.Position.H5,
                _a["H6"] = algebraic_ts_1.Position.H6,
                _a["H7"] = algebraic_ts_1.Position.H7,
                _a["H8"] = algebraic_ts_1.Position.H8,
                _a);
            exports_1("default", coordinates);
        }
    };
});
//# sourceMappingURL=coordinates.js.map