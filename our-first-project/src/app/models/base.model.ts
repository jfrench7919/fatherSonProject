export interface IBase {
    size: number;
    name: string;
    damage: number;
}

export class BaseModel implements IBase {
    size: number;
    name: string;
    damage: number;
    strength: number;
    health: number;
}

export class BaseExtention extends BaseModel {

    constructor(public size: number, public name: string) {
        super();
        this.damage = 0;
    }

    public damage: number;

    public get strength(): number {
        return  this.size * 100;
    }

    public get health(): number {
        return  this.strength - this.damage;
    }
}
