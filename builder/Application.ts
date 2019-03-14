import {Director} from "./Director";
import {CarBuilder} from "./CarBuilder";
import {CarManualBuilder} from "./CarManualBuilder";

export class Application {
    makeCar() {
        const director = new Director();

        const builder = new CarBuilder();
        director.constructSportCar(builder);
        const car = builder.getProduct();

        const builder2 = new CarManualBuilder();
        director.constructSportCar(builder);
        const car2 = builder.getProduct();
    }
}
