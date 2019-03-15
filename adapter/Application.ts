import {SquarePeg} from "./SquarePeg";
import {RoundHole} from "./RoundHole";
import {RoundPeg} from "./RoundPeg";
import {SquarePegAdapter} from "./SquarePegAdapter";

export class Application {
    main() {
        const hole = new RoundHole(5);
        const rpeg = new RoundPeg(5);
        hole.fit(rpeg);

        const smallSqpeg = new SquarePeg(2);
        const largeSqpeg = new SquarePeg(5);

        const smallSqpegAdapter = new SquarePegAdapter(smallSqpeg);
        const largeSqpegAdapter = new SquarePegAdapter(largeSqpeg);

        hole.fit(smallSqpegAdapter);
        hole.fit(largeSqpegAdapter);
    }
}
