import { createTestCase } from '../test-helpers'

describe('Primitives', () => {
  const fixtures = ['null', 'boolean', 'number', 'string']

  fixtures.forEach((fixture) => {
    it(`returns correct diagnostics for ${fixture} cases`, () => {
      expect(createTestCase(__dirname, `${fixture}.ts`)).toMatchDiagnosticsSnapshot()
    })
  })
})
