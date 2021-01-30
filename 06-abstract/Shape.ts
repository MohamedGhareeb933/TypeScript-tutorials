
export abstract class Shape{

    constructor(protected _x :number , protected _y :number) {
    }
    
    public getInfo() :string {
        return `x = ${this._x}, y = ${this._y}`;
    }

    public abstract multiplyAll() : number;
}


