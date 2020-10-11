import { Dto } from '~dto'

type MyObj = { name: string; age: number; speak(): void }
type ObjectDto = Dto<MyObj>

export const dtoGood: ObjectDto = { age: 1, name: 'jeff' }

export const dtoBadWithFunc: ObjectDto = { age: 1, name: 'jeff', speak: () => void undefined }

export const dtoBadMissingProperties: ObjectDto = { age: 1 }

export const dtoBadNull: ObjectDto = null

export const dtoBadUndefined: ObjectDto = undefined
