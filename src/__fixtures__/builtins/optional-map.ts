import { Dto } from '~dto'

export type MapDto = Dto<Map<string, number> | undefined>

export const dtoGood: MapDto = { item1: 1, item2: 2, item3: 3 }

export const dtoGoodNull: MapDto = null

export const dtoBadMap: MapDto = new Map<string, number>()

export const dtoBadUndefined: MapDto = undefined

export const dtoBadString: MapDto = 'this is not good'

export const dtoBadNumber: MapDto = 192843

export const dtoBadObject: MapDto = { bad: 'times' }
