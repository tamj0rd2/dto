import { Dto } from '~dto'

interface DatedValue<T> {
  date: Date
  value: T
  sourceLink: string
}

type DatedValueDto<T> = Dto<DatedValue<T>>

export const goodStringDatedValue: DatedValueDto<string> = {
  date: 'iso date string',
  sourceLink: 'a sourcelink',
  value: 'a value',
}

export const badStringDatedValue: DatedValueDto<string> = {
  date: 'iso date string',
  sourceLink: 'a sourcelink',
  value: 238947,
}

export const goodNumberDatedValue: DatedValueDto<number> = {
  date: 'iso date string',
  sourceLink: 'a sourcelink',
  value: 123,
}

export const badNumberDatedValue: DatedValueDto<number> = {
  date: 'iso date string',
  sourceLink: 'a sourcelink',
  value: 'not a number',
}

type MyObj = { name: string; age: number }
export const goodObjectDatedValue: DatedValueDto<MyObj> = {
  date: 'iso date string',
  sourceLink: 'a sourcelink',
  value: { age: 123, name: 'jeff' },
}

export const badObjectDatedValue: DatedValueDto<MyObj> = {
  date: 'iso date string',
  sourceLink: 'a sourcelink',
  value: { grade: 123, subject: 'math' },
}

export const goodFunctionDatedValue: DatedValueDto<() => void> = {
  date: 'date',
  sourceLink: 'source link',
}

export const badFunctionDatedValue: DatedValueDto<() => void> = {
  date: 'date',
  sourceLink: 'source link',
  value: () => void undefined,
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function serializeDatedValue<T extends Function>(value: DatedValue<T>): never
export function serializeDatedValue<T>(value: DatedValue<T>): Dto<DatedValue<T>>
export function serializeDatedValue<T>(value: DatedValue<T>): Dto<DatedValue<unknown>> {
  if (typeof value === 'function') throw new Error('Functions cannot be serialized')

  return {
    date: 'my iso date',
    sourceLink: 'my source link',
    value: value,
  }
}

export const goodSerializedFunctionDto: never = serializeDatedValue({
  date: new Date(),
  sourceLink: 'sourceLink',
  value: () => void undefined,
})

export const badSerializedFunctionDto: never = serializeDatedValue({
  date: new Date(),
  sourceLink: 'sourceLink',
})

export const goodSerializedStringDto: DatedValueDto<string> = serializeDatedValue({
  date: new Date(),
  sourceLink: 'sourceLInk',
  value: 'woah',
})

export const badSerializedStringDto: DatedValueDto<string> = serializeDatedValue({
  date: new Date(),
  sourceLink: 'sourceLInk',
  value: 123123,
})

type MyObjWithFn = { age: number; name: string; speak(): void }
export const goodSerializedObjectDto: DatedValueDto<MyObjWithFn> = serializeDatedValue<MyObjWithFn>({
  date: new Date(),
  sourceLink: 'sourceLink',
  value: { age: 123, name: 'asdf', speak: () => void undefined },
})

export const badSerializedObjectDto: DatedValueDto<MyObjWithFn> = serializeDatedValue({
  date: new Date(),
  sourceLink: 'sourceLink',
  value: { score: 2384 },
})
