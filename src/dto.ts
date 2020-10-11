/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

type IsOptional<T> = Extract<T, undefined> extends never ? false : true
type IsFunction<T> = T extends (...args: any[]) => any ? true : false
type IsObject<T> = T extends
  | string
  | number
  | boolean
  | null
  | undefined
  | Function
  | Set<any>
  | Map<any, any>
  | Date
  ? false
  : true

type ReplaceDate<T> = T extends Date ? string : T
type ReplaceSet<T> = T extends Set<infer X> ? X[] : T
type ReplaceMap<T> = T extends Map<infer K, infer I>
  ? K extends string | number | symbol
    ? Record<K, I>
    : Record<string, I>
  : T

type ExcludeFuncsFromObj<T> = Pick<T, { [K in keyof T]: IsFunction<T[K]> extends true ? never : K }[keyof T]>

type Dtoified<T> = IsObject<T> extends true
  ? { [K in keyof ExcludeFuncsFromObj<T>]: Dto<T[K]> }
  : ReplaceDate<ReplaceMap<ReplaceSet<T>>>

export type Dto<T> = IsFunction<T> extends true
  ? never
  : IsOptional<T> extends true
  ? Dtoified<Exclude<T, undefined>> | null
  : Dtoified<T>
