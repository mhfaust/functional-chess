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
            mapping.set("A1", position_1.Position.A1);
            mapping.set("A2", position_1.Position.A2);
            mapping.set("A3", position_1.Position.A3);
            mapping.set("A4", position_1.Position.A4);
            mapping.set("A5", position_1.Position.A5);
            mapping.set("A6", position_1.Position.A6);
            mapping.set("A7", position_1.Position.A7);
            mapping.set("B8", position_1.Position.B8);
            mapping.set("B1", position_1.Position.B1);
            mapping.set("B2", position_1.Position.B2);
            mapping.set("B3", position_1.Position.B3);
            mapping.set("B4", position_1.Position.B4);
            mapping.set("B5", position_1.Position.B5);
            mapping.set("B6", position_1.Position.B6);
            mapping.set("B7", position_1.Position.B7);
            mapping.set("B8", position_1.Position.B8);
            mapping.set("C1", position_1.Position.C1);
            mapping.set("C2", position_1.Position.C2);
            mapping.set("C3", position_1.Position.C3);
            mapping.set("C4", position_1.Position.C4);
            mapping.set("C5", position_1.Position.C5);
            mapping.set("C6", position_1.Position.C6);
            mapping.set("C7", position_1.Position.C7);
            mapping.set("C8", position_1.Position.C8);
            mapping.set("D1", position_1.Position.D1);
            mapping.set("D2", position_1.Position.D2);
            mapping.set("D3", position_1.Position.D3);
            mapping.set("D4", position_1.Position.D4);
            mapping.set("D5", position_1.Position.D5);
            mapping.set("D6", position_1.Position.D6);
            mapping.set("D7", position_1.Position.D7);
            mapping.set("D8", position_1.Position.D8);
            mapping.set("E1", position_1.Position.E1);
            mapping.set("E2", position_1.Position.E2);
            mapping.set("E3", position_1.Position.E3);
            mapping.set("E4", position_1.Position.E4);
            mapping.set("E5", position_1.Position.E5);
            mapping.set("E6", position_1.Position.E6);
            mapping.set("E7", position_1.Position.E7);
            mapping.set("E8", position_1.Position.E8);
            mapping.set("F1", position_1.Position.F1);
            mapping.set("F2", position_1.Position.F2);
            mapping.set("F3", position_1.Position.F3);
            mapping.set("F4", position_1.Position.F4);
            mapping.set("F5", position_1.Position.F5);
            mapping.set("F6", position_1.Position.F6);
            mapping.set("F7", position_1.Position.F7);
            mapping.set("F8", position_1.Position.F8);
            mapping.set("G1", position_1.Position.G1);
            mapping.set("G2", position_1.Position.G2);
            mapping.set("G3", position_1.Position.G3);
            mapping.set("G4", position_1.Position.G4);
            mapping.set("G5", position_1.Position.G5);
            mapping.set("G6", position_1.Position.G6);
            mapping.set("G7", position_1.Position.G7);
            mapping.set("G8", position_1.Position.G8);
            mapping.set("H1", position_1.Position.H1);
            mapping.set("H2", position_1.Position.H2);
            mapping.set("H3", position_1.Position.H3);
            mapping.set("H4", position_1.Position.H4);
            mapping.set("H5", position_1.Position.H5);
            mapping.set("H6", position_1.Position.H6);
            mapping.set("H7", position_1.Position.H7);
            mapping.set("H8", position_1.Position.H8);
            exports_1("default", coordinates);
        }
    };
});
//# sourceMappingURL=coordinates.js.map