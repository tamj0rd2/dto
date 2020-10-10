import { Dto } from '../dto'

export type NumberDto = Dto<number>

export const dtoGood: NumberDto = 123123

export const dtoBadNull: NumberDto = null

export const dtoBadUndefined: NumberDto = null

export const dtoBadString: NumberDto = '123897'

export const dtoBadObject: NumberDto = { bad: 'times' }
