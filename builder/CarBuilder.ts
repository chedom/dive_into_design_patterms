import {Builder} from "./Builder";
import {Car} from "./Car";

export class CarBuilder implements Builder {
    private car: Car;

    constructor() {
        this.reset();
    }

    reset() {
        this.car = new Car();
    }

    setSeats(num: number) {
    }

    setEngine(power: number) {
    }

    setGPS(model: string) {
    }

    setTripComputer(model: string) {
    }

    getProduct(): Car {
        const product = this.car;
        this.reset();
        return product;
    }

}
