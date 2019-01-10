export declare class Maybe<T> {
    value?: T | undefined;
    constructor(value?: T | undefined);
    'fantasy-land/alt': (other: Maybe<T>) => Maybe<T>;
    alt(other: Maybe<T>): Maybe<T>;
}
export declare const Nothing: Maybe<never>;
