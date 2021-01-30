"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triangle_1 = require("./Triangle");
var myTriangle = new Triangle_1.Triangle(10, 5, 6);
var ArrayOfShapes = [myTriangle];
for (var _i = 0, ArrayOfShapes_1 = ArrayOfShapes; _i < ArrayOfShapes_1.length; _i++) {
    var index = ArrayOfShapes_1[_i];
    console.log(index.getInfo());
    console.log(index.multiplyAll());
}
