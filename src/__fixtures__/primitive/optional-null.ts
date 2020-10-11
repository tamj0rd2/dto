import { Dto } from '~dto'

export type OptionalNullDto = Dto<null | undefined>

export const dtoGood: OptionalNullDto = null

export const dtoBadUndefined: OptionalNullDto = undefined

export const dtoBadNumber: OptionalNullDto = 123

export const dtoBadObject: OptionalNullDto = { hey: 'lol' }
