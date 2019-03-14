import {Builder} from "./Builder";
import {Manual} from "./Manual";

export class CarManualBuilder implements Builder {
    private manual: Manual;
    constructor() {
        this.reset()
    }

    reset() {
        this.manual = new Manual();
    }

    setSeats(num: number) {
    }

    setEngine(power: number) {
    }

    setTripComputer(model: string) {
    }

    setGPS(model: string) {
    }

    getProduct(): Manual {
        const product = this.manual;
        this.reset()
        return product;
    }
}
