import {Builder} from "./Builder";

export class Director {
    private builder: Builder;

    setBuilder(builder: Builder) {
        this.builder = builder;
    }

    constructSportCar(builder: Builder) {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine(333);
        builder.setGPS("OOO");
    }

    constructSportSuv(builder: Builder) {
        builder.reset();
        builder.setSeats(5);
        builder.setEngine(112);
        builder.setGPS("OOO");
        builder.setTripComputer("Some special");
    }
}
