export interface IBase {
    size: number;
    name: string;
    damage: number;
    selected: boolean;
    destroyed: boolean;
}

export class BaseModel implements IBase {
    size: number;
    name: string;
    damage: number;
    strength: number;
    health: number;
    selected: boolean;
    destroyed: boolean;
}

export class BaseExtention implements BaseModel {

    constructor(public size: number, public name: string) {
        this.damage = 0;
        this.selected = false;
        this.destroyed = false;
    }

    public damage: number;
    public selected: boolean;
    public destroyed: boolean;

    public get strength(): number {
        return  this.size * 100;
    }

    public get health(): number {
        return  this.strength - this.damage;
    }
}

export class BaseDecorator {
    recieveDamage(base: BaseExtention, damageAmount: number):void {
        base.damage = base.damage + damageAmount;
        if (base.health <= 0){
            base.destroyed = true;
        }
    }
}
