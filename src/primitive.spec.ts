import { readdirSync } from 'fs'
import { resolve } from 'path'

const fixturePrefix = __filename.replace(`${__dirname}/`, '').replace('.spec.ts', '')
const files = readdirSync(resolve(process.cwd(), 'src', '__fixtures__', fixturePrefix))

files.forEach((fileName) => {
  test(fileName, () => {
    expect(`${fixturePrefix}/${fileName}`).toMatchDiagnosticsSnapshot()
  })
})
