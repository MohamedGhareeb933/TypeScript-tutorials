
import {Shape} from "./Shape"

export class Triangle extends Shape {

    constructor(_x :number, _y :number, private _z :number) {
        super(_x, _y);
    }

    public get z() :number {
        return this._z;
    }

    public getInfo() :string  {
        return super.getInfo() + ` z = ${this._z}`;
    }
}
