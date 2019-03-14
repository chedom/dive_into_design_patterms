export interface Builder {
    reset()
    setSeats(num: number)
    setEngine(power: number)
    setTripComputer(model: string)
    setGPS(model: string)
}
