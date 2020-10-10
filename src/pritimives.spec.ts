describe('Primitives', () => {
  const fixtures = ['null', 'boolean', 'number', 'string']

  fixtures.forEach((fixture) => {
    it(`returns correct diagnostics for ${fixture} cases`, () => {
      expect(`primitive-${fixture}.ts`).toMatchDiagnosticsSnapshot()
    })
  })
})
