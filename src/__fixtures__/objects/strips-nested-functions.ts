/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Dto } from '~dto'

interface MyObjWithNestedFuncs {
  hello1: string
  world1(): void
  nested1: {
    hello2: string
    world2(): void
    nested2: {
      hello3: string
      world3(): void
    }
  }
}

type ObjectDto = Dto<MyObjWithNestedFuncs>

export const dtoGood: ObjectDto = {
  hello1: 'hello1',
  nested1: {
    hello2: 'hello2',
    nested2: {
      hello3: 'hello3',
    },
  },
}

export const dtoBadWithFuncs: ObjectDto = {
  hello1: 'hello1',
  world1: () => void undefined,
  nested1: {
    hello2: 'hello2',
    world2: () => void undefined,
    nested2: {
      hello3: 'hello3',
      world3: () => void undefined,
    },
  },
}

export const dtoBadWithOnlyNestedFuncs: ObjectDto = {
  hello1: 'hello1',
  nested1: {
    hello2: 'hello2',
    world2: () => void undefined,
    nested2: {
      hello3: 'hello3',
      world3: () => void undefined,
    },
  },
}

export const dtoBadWithOnlyLayer1Func: ObjectDto = {
  hello1: 'hello1',
  world1: () => void undefined,
  nested1: {
    hello2: 'hello2',
    nested2: {
      hello3: 'hello3',
    },
  },
}

export const dtoBadWithOnlyLayer2Func: ObjectDto = {
  hello1: 'hello1',
  nested1: {
    hello2: 'hello2',
    world2: () => void undefined,
    nested2: {
      hello3: 'hello3',
    },
  },
}

export const dtoBadWithOnlyDeeplyNestedFuncs: ObjectDto = {
  hello1: 'hello1',
  nested1: {
    hello2: 'hello2',
    nested2: {
      hello3: 'hello3',
      world3: () => void undefined,
    },
  },
}

export const dtoBadNull: ObjectDto = null

export const dtoBadUndefined: ObjectDto = undefined
