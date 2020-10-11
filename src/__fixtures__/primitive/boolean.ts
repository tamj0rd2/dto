import { Dto } from '~dto'

export type BooleanDto = Dto<boolean>

export const dtoGood: BooleanDto = false

export const dtoBadNull: BooleanDto = null

export const dtoBadUndefined: BooleanDto = undefined

export const dtoBadString: BooleanDto = '123897'

export const dtoBadObject: BooleanDto = { bad: 'times' }
