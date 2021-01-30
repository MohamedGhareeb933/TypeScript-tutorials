
export class Shape{

    constructor(private _x :number , private _y :number) {

    }

    public get x() :number {
        return this._x;
    }

    public get y() :number {
        return this._y;
    }

    public getInfo() :string {
        return `x = ${this._x}, y = ${this._y}`;
    }


}


