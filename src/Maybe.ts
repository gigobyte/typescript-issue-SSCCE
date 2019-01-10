export class Maybe<T> {
  constructor(public value?: T) {}

  'fantasy-land/alt' = this.alt

  alt(other: Maybe<T>): Maybe<T> {
    return other
  }
}

export const Nothing: Maybe<never> = new Maybe()
