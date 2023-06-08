export interface FiguraGeometrica {
    name: string;
    area(): number;
}

export interface Polyghon {
    sides: number;
    perimeter(): number;
}

export interface Square extends FiguraGeometrica, Polyghon {
    info(): string;
}

export class SquareImplementation implements Square {
    
    constructor(name: string, sides: number) {
        this.name = name;
        this.sides = sides;
    }

    info(): string {
        throw new Error("Method not implemented.");
    }

    name: string;
    area(): number {
        throw new Error("Method not implemented.");
    }
    
    sides: number;
    perimeter(): number {
        throw new Error("Method not implemented.");
    }

}