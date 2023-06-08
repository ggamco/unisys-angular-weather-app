export class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public eat() {
        console.log('${this.name} is eating');
    }
}
