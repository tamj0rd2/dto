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

interface MyDeepObj {
  hello1: string
  world1: Date
  nested1: {
    hello2: string
    world2: Date
    nested2: {
      hello3: string
      world3: Date
    }
  }
}

type DeepObjectDTO = Dto<MyDeepObj>

export const goodDeepObject: DeepObjectDTO = {
  hello1: 'hello1',
  world1: 'my iso date',
  nested1: {
    hello2: 'hello2',
    world2: 'my iso date',
    nested2: {
      hello3: 'hello3',
      world3: 'my iso date',
    },
  },
}

export const badDeepObject: DeepObjectDTO = {
  hello1: 'hello1',
  world1: new Date(),
  nested1: {
    hello2: 'hello2',
    world2: new Date(),
    nested2: {
      hello3: 'hello3',
      world3: new Date(),
    },
  },
}
