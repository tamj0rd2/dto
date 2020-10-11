import { Dto } from '~dto'

export type ArrayDto = Dto<number[]>

export const dtoGood: ArrayDto = [1, 2, 3]

export const dtoBadSet: ArrayDto = new Set<number>([1, 2, 3])

export const dtoBadNull: ArrayDto = null

export const dtoBadUndefined: ArrayDto = undefined

export const dtoBadString: ArrayDto = 'this is not good'

export const dtoBadNumber: ArrayDto = 192843

export const dtoBadObject: ArrayDto = { bad: 'times' }
