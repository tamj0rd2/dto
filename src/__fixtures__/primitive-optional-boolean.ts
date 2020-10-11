import { Dto } from '../dto'

export type OptionalBooleanDto = Dto<boolean | undefined>

export const dtoGood: OptionalBooleanDto = false

export const dtoGoodNull: OptionalBooleanDto = null

export const dtoBadUndefined: OptionalBooleanDto = undefined

export const dtoBadString: OptionalBooleanDto = '123897'

export const dtoBadObject: OptionalBooleanDto = { bad: 'times' }
