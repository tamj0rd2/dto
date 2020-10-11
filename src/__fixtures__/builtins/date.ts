import { Dto } from '~dto'

export type DateDto = Dto<Date>

export const dtoGood: DateDto = 'an iso date string'

export const dtoBadDate: DateDto = new Date()

export const dtoBadNull: DateDto = null

export const dtoBadUndefined: DateDto = undefined

export const dtoBadObject: DateDto = { bad: 'times' }
