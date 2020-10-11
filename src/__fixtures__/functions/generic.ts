import { Dto } from '~dto'

type MyFunc<R> = (name: string, age: number) => R

export type GenericFunctionDto<R> = Dto<MyFunc<R>>

// this should error because functions cannot be serialized
export const dtoBad: GenericFunctionDto<[string, number]> = (name: string, age: number): [string, number] => [
  name,
  age,
]

// the rest of these should all error because we never want functions to go over
// the wire at all. FunctionDto should be of type never
export const dtoBadNull: GenericFunctionDto<[string, number]> = null

export const dtoBadUndefined: GenericFunctionDto<[string, number]> = undefined

export const dtoBadString: GenericFunctionDto<[string, number]> = '123897'

export const dtoBadNumber: GenericFunctionDto<[string, number]> = 128376

export const dtoBadObject: GenericFunctionDto<[string, number]> = { bad: 'times' }
