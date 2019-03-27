System.register(["constants/position"], function (exports_1, context_1) {
    "use strict";
    var position_1, mapping;
    var __moduleName = context_1 && context_1.id;
    function coordinates(positionName) {
        return mapping.get(positionName);
    }
    return {
        setters: [
            function (position_1_1) {
                position_1 = position_1_1;
            }
        ],
        execute: function () {
            mapping = new Map();
            mapping.set("a1", position_1.Position.A1);
            mapping.set("a2", position_1.Position.A2);
            mapping.set("a3", position_1.Position.A3);
            mapping.set("a4", position_1.Position.A4);
            mapping.set("a5", position_1.Position.A5);
            mapping.set("a6", position_1.Position.A6);
            mapping.set("a7", position_1.Position.A7);
            mapping.set("b8", position_1.Position.B8);
            mapping.set("b1", position_1.Position.B1);
            mapping.set("b2", position_1.Position.B2);
            mapping.set("b3", position_1.Position.B3);
            mapping.set("b4", position_1.Position.B4);
            mapping.set("b5", position_1.Position.B5);
            mapping.set("b6", position_1.Position.B6);
            mapping.set("b7", position_1.Position.B7);
            mapping.set("b8", position_1.Position.B8);
            mapping.set("c1", position_1.Position.C1);
            mapping.set("c2", position_1.Position.C2);
            mapping.set("c3", position_1.Position.C3);
            mapping.set("c4", position_1.Position.C4);
            mapping.set("c5", position_1.Position.C5);
            mapping.set("c6", position_1.Position.C6);
            mapping.set("c7", position_1.Position.C7);
            mapping.set("c8", position_1.Position.C8);
            mapping.set("d1", position_1.Position.D1);
            mapping.set("d2", position_1.Position.D2);
            mapping.set("d3", position_1.Position.D3);
            mapping.set("d4", position_1.Position.D4);
            mapping.set("d5", position_1.Position.D5);
            mapping.set("d6", position_1.Position.D6);
            mapping.set("d7", position_1.Position.D7);
            mapping.set("d8", position_1.Position.D8);
            mapping.set("e1", position_1.Position.E1);
            mapping.set("e2", position_1.Position.E2);
            mapping.set("e3", position_1.Position.E3);
            mapping.set("e4", position_1.Position.E4);
            mapping.set("e5", position_1.Position.E5);
            mapping.set("e6", position_1.Position.E6);
            mapping.set("e7", position_1.Position.E7);
            mapping.set("e8", position_1.Position.E8);
            mapping.set("f1", position_1.Position.F1);
            mapping.set("f2", position_1.Position.F2);
            mapping.set("f3", position_1.Position.F3);
            mapping.set("f4", position_1.Position.F4);
            mapping.set("f5", position_1.Position.F5);
            mapping.set("f6", position_1.Position.F6);
            mapping.set("f7", position_1.Position.F7);
            mapping.set("f8", position_1.Position.F8);
            mapping.set("g1", position_1.Position.G1);
            mapping.set("g2", position_1.Position.G2);
            mapping.set("g3", position_1.Position.G3);
            mapping.set("g4", position_1.Position.G4);
            mapping.set("g5", position_1.Position.G5);
            mapping.set("g6", position_1.Position.G6);
            mapping.set("g7", position_1.Position.G7);
            mapping.set("g8", position_1.Position.G8);
            mapping.set("h1", position_1.Position.H1);
            mapping.set("h2", position_1.Position.H2);
            mapping.set("h3", position_1.Position.H3);
            mapping.set("h4", position_1.Position.H4);
            mapping.set("h5", position_1.Position.H5);
            mapping.set("h6", position_1.Position.H6);
            mapping.set("h7", position_1.Position.H7);
            mapping.set("h8", position_1.Position.H8);
            exports_1("default", coordinates);
        }
    };
});
//# sourceMappingURL=coordinates.js.map