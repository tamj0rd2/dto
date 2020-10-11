import { Dto } from '~dto'

export type OptionalStringDto = Dto<string | undefined>

export const dtoGood: OptionalStringDto = 'Hello world!'

export const dtoGoodNull: OptionalStringDto = null

export const dtoBadNumber: OptionalStringDto = 28947

export const dtoBadUndefined: OptionalStringDto = undefined

export const dtoBadBool: OptionalStringDto = false

export const dtoBadObject: OptionalStringDto = { hello: 'world' }
