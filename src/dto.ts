/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

type IsOptional<T> = Extract<T, undefined> extends never ? false : true
type IsFunction<T> = T extends Function ? true : false
type IsValueType<T> = T extends
  | string
  | number
  | boolean
  | null
  | undefined
  | Function
  | Set<any>
  | Map<any, any>
  | Date
  ? true
  : false

type ReplaceDate<T> = T extends Date ? string : T
type ReplaceSet<T> = T extends Set<infer X> ? X[] : T
type ReplaceMap<T> = T extends Map<infer K, infer I>
  ? K extends string | number | symbol
    ? Record<K, I>
    : Record<string, I>
  : T

type ExcludeFuncsFromObj<T> = Pick<T, { [K in keyof T]: IsFunction<T[K]> extends true ? never : K }[keyof T]>

export interface DatedValue<T> {
  date: Date
  value: T
  sourceLink: string
}

type Dtoified<T> = IsValueType<T> extends true
  ? ReplaceDate<ReplaceMap<ReplaceSet<T>>>
  : // ? ReplaceDate<ReplaceMap<ReplaceSet<ReplaceDatedValue<T>>>>
    { [K in keyof ExcludeFuncsFromObj<T>]: Dto<T[K]> }

export type Dto<T> = IsFunction<T> extends true
  ? never
  : IsOptional<T> extends true
  ? Dtoified<Exclude<T, undefined>> | null
  : Dtoified<T>
