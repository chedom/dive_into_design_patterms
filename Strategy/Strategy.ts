// The strategy interface declares operations common to all
// supported versions of some algorithm. The context uses this
// interface to call the algorithm defined by the concrete
// strategies.
export interface Strategy {
    execute(a: number, b: number): number;
}