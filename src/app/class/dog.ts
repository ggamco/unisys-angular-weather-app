import { Animal } from "./animal";

export class Dog extends Animal {
    public bark() {
        console.log('${this.name} is barking')
    }
}
