
import {Shape} from "./Shape";
import {Triangle} from "./Triangle";


let myTriangle = new Triangle(10, 5, 6);

let ArrayOfShapes :Shape[] = [myTriangle];

for(let index of ArrayOfShapes) {
    console.log(index.getInfo());
    console.log(index.multiplyAll())
}