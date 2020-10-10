import { createTestCase } from '../test-helpers'

describe('Primitives', () => {
  describe('string', () => {
    const stringTestCases = ['string-good.ts', 'string-null.ts', 'string-undefined.ts']
    stringTestCases.forEach((fileName) =>
      it(`returns the correct dianostics for fixture ${fileName}`, () =>
        expect(createTestCase(__dirname, fileName)).toMatchDiagnosticsSnapshot()),
    )
  })
})
