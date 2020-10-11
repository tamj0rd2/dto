import { Dto } from '~dto'

export type NullDto = Dto<null>

export const dtoGood: NullDto = null

export const dtoBadUndefined: NullDto = undefined

export const dtoBadNumber: NullDto = 123

export const dtoBadObject: NullDto = { hey: 'lol' }
