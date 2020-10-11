import { Dto } from '~dto'

export type OptionalDateDto = Dto<Date | undefined>

export const dtoGood: OptionalDateDto = 'an iso date string'

export const dtoGoodNull: OptionalDateDto = null

export const dtoBadDate: OptionalDateDto = new Date()

export const dtoBadUndefined: OptionalDateDto = undefined

export const dtoBadObject: OptionalDateDto = { bad: 'times' }
