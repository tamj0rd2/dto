import { resolve } from 'path'
import { readdirSync } from 'fs'

export const runTests = (testFolder: string, testPath: string) => {
  const fixturePrefix = testPath.replace(`${testFolder}/`, '').replace('.spec.ts', '')
  const files = readdirSync(resolve(process.cwd(), 'src', '__fixtures__', fixturePrefix))

  files.forEach((fileName) => {
    test(fileName, () => {
      expect(`${fixturePrefix}/${fileName}`).toMatchDiagnosticsSnapshot()
    })
  })
}
