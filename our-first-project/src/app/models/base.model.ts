export class Base{
    
    constructor(public size: number, public name: string){
        this.damage = 0;
    }
    
    public damage: number;
    
    public get strength() : number {
        return  this.size * 100;
    }
    
    public get health() : number {
        return  this.strength - this.damage;
    }
}

export interface IBase{
    size: number;
    name: string;
    damage: number;
    strength: number;
    health: number;
}