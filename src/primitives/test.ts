import { createTestDeps } from '../test-helpers'

describe('Primitives', () => {
  it('does a thing', () => {
    const { getDiagnostics } = createTestDeps()

    expect(getDiagnostics(__dirname)).toHaveLength(0)
  })
})
