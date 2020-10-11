import { Dto } from '~dto'

type MyObj = { name: string; age: number }
type ObjectDto = Dto<MyObj>

export const dtoGood: ObjectDto = { age: 1, name: 'jeff' }

export const dtoBadMissingProperties: ObjectDto = { age: 1 }

export const dtoBadExtraProperties: ObjectDto = { age: 1, name: 'jeff', location: 'NY' }

export const dtoBadNull: ObjectDto = null

export const dtoBadUndefined: ObjectDto = undefined

export const dtoBadString: ObjectDto = '123897'

export const dtoBadNumber: ObjectDto = 128376

export const dtoBadObject: ObjectDto = { bad: 'times' }
