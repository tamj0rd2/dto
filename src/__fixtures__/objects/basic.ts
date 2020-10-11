import { Dto } from '~dto'

type MyObj = { name: string; age: number; favouriteFilms: string[] }
type ObjectDto = Dto<MyObj>

export const dtoGood: ObjectDto = { age: 1, name: 'jeff', favouriteFilms: ['film1', 'film2'] }

export const dtoBadMissingProperties: ObjectDto = { age: 1, favouriteFilms: [] }

export const dtoBadExtraProperties: ObjectDto = { age: 1, name: 'jeff', favouriteFilms: [], location: 'NY' }

export const dtoBadNull: ObjectDto = null

export const dtoBadUndefined: ObjectDto = undefined

export const dtoBadString: ObjectDto = '123897'

export const dtoBadNumber: ObjectDto = 128376

export const dtoBadObject: ObjectDto = { bad: 'times' }
