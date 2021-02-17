# dto

A generic typescript utility type that transforms a given type into something that can go over the wire. For example, Sets are turned into arrays and optional values (denoted by `?` or `| undefined`) are converted to null.

I made this playground as a way to safely iterate on the DTO type without regression

## How it works

The DTO is located in [src/dto.ts](./src/dto.ts)

The tests are located in the __fixtures__ folder.

Each test declares a type that uses a DTO. For example, `type numberDTO = DTO<number>`. The lines following that are test cases, some of which I expect to cause errors and some of which I expect to compile successfully.

For example, taking a look at /__fixtures__/primitive/optional-string:

```typescript
import { Dto } from '~dto'

// this is a DTO of a string
export type StringDto = Dto<string>

// I expect this not to give compiler errors because a string can be sent over the wire without any transformations
export const dtoGood: StringDto = 'Hello world!'

// I expect this to fail because numbers are not strings
export const dtoBadNumber: StringDto = 28947

// I expect this to fail because we haven't made our string optional
export const dtoBadUndefined: StringDto = undefined

// I expect this to fail because bools are not strings
export const dtoBadBool: StringDto = false

// I expect this to fail because we haven't made our string optional
export const dtoBadNull: StringDto = null

// I expect this to fail because objects are not strings
export const dtoBadObject: StringDto = { hello: 'world' }
```

If you open up the fixtures files in your editor, you should easily be able to see which lines pass and which lines fail

Run `npm run test` to see and capture the typescript compiler output as a jest snapshot
