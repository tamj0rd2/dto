/* eslint-disable @typescript-eslint/no-explicit-any */

type IsOptional<T> = Extract<T, undefined> extends never ? false : true
type IsFunction<T> = T extends (...args: any[]) => any ? true : false
type IsDate<T> = T extends Date ? true : false

type Dtoified<T> = IsDate<T> extends true ? string : T

export type Dto<T> = IsFunction<T> extends true
  ? never
  : IsOptional<T> extends true
  ? Dtoified<Exclude<T, undefined>> | null
  : Dtoified<T>
