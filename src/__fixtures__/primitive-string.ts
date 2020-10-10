import { Dto } from '../dto'

export type StringDto = Dto<string>

export const dtoGood: StringDto = 'Hello world!'

export const dtoBadNumber: StringDto = 28947

export const dtoBadUndefined: StringDto = undefined

export const dtoBadBool: StringDto = false

export const dtoBadNull: StringDto = null

export const dtoBadObject: StringDto = { hello: 'world' }
