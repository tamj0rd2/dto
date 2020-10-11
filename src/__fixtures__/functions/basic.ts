import { Dto } from '~dto'

type MyFunc = (name: string, age: number) => [string, number]

export type FunctionDto = Dto<MyFunc>

// this should error because functions cannot be serialized
export const dtoBad: FunctionDto = (name: string, age: number) => [name, age]

// the rest of these should all error because we never want functions to go over
// the wire at all. FunctionDto should be of type never
export const dtoBadNull: FunctionDto = null

export const dtoBadUndefined: FunctionDto = undefined

export const dtoBadString: FunctionDto = '123897'

export const dtoBadNumber: FunctionDto = 128376

export const dtoBadObject: FunctionDto = { bad: 'times' }
