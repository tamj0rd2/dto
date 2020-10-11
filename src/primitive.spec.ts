import { readdirSync } from 'fs'
import { resolve } from 'path'

const fixturePrefix = __filename.replace(`${__dirname}/`, '').replace('.spec.ts', '')
const files = readdirSync(resolve(process.cwd(), 'src', '__fixtures__'))

files
  .filter((fileName) => fileName.startsWith(fixturePrefix))
  .forEach((fileName) => {
    test(fileName, () => {
      expect(fileName).toMatchDiagnosticsSnapshot()
    })
  })
