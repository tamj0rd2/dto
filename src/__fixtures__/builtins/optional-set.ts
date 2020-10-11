import { Dto } from '~dto'

export type OptionalSetDto = Dto<Set<number> | undefined>

export const dtoGood: OptionalSetDto = [1, 2, 3]

export const dtoGoodNull: OptionalSetDto = null

export const dtoBadSet: OptionalSetDto = new Set<number>([1, 2, 3])

export const dtoBadUndefined: OptionalSetDto = undefined

export const dtoBadString: OptionalSetDto = 'this is not good'

export const dtoBadNumber: OptionalSetDto = 192843

export const dtoBadObject: OptionalSetDto = { bad: 'times' }
