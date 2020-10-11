/* eslint-disable @typescript-eslint/no-explicit-any */

type IsOptional<T> = Extract<T, undefined> extends never ? false : true
type IsFunction<T> = T extends (...args: any[]) => any ? true : false

type ReplaceDate<T> = T extends Date ? string : T
type ReplaceSet<T> = T extends Set<infer X> ? X[] : T

type Dtoified<T> = ReplaceDate<ReplaceSet<T>>

export type Dto<T> = IsFunction<T> extends true
  ? never
  : IsOptional<T> extends true
  ? Dtoified<Exclude<T, undefined>> | null
  : Dtoified<T>
