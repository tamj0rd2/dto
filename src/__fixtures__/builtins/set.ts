import { Dto } from '~dto'

export type SetDto = Dto<Set<number>>

export const dtoGood: SetDto = [1, 2, 3]

export const dtoBadSet: SetDto = new Set<number>([1, 2, 3])

export const dtoBadNull: SetDto = null

export const dtoBadUndefined: SetDto = undefined

export const dtoBadString: SetDto = 'this is not good'

export const dtoBadNumber: SetDto = 192843

export const dtoBadObject: SetDto = { bad: 'times' }
