
import {Shape} from "./Shape";
import {Triangle} from "./Triangle";

let myShape = new Shape(10, 5);

let ShapeInfo :string = myShape.getInfo();
console.log(ShapeInfo);


let myTriangle = new Triangle(10, 5, 6);

let TriangleInfo :string = myTriangle.getInfo();
console.log(TriangleInfo);