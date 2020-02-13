export interface IBase {
    size: number;
    name: string;
    damage: number;
    selected: boolean;
}

export class BaseModel implements IBase {
    size: number;
    name: string;
    damage: number;
    strength: number;
    health: number;
    selected: boolean;
}

export class BaseExtention implements BaseModel {

    constructor(public size: number, public name: string) {
        this.damage = 0;
        this.selected = false;
    }

    public damage: number;
    public selected: boolean;

    public get strength(): number {
        return  this.size * 100;
    }

    public get health(): number {
        return  this.strength - this.damage;
    }
}
