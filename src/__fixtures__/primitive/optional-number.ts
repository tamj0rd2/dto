import { Dto } from '~dto'

export type OptionalNumberDto = Dto<number | undefined>

export const dtoGood: OptionalNumberDto = 123123

export const dtoGoodNull: OptionalNumberDto = null

export const dtoBadUndefined: OptionalNumberDto = undefined

export const dtoBadString: OptionalNumberDto = '123897'

export const dtoBadObject: OptionalNumberDto = { bad: 'times' }
