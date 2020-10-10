import { existsSync } from 'fs'
import { toMatchSnapshot } from 'jest-snapshot'
import { resolve } from 'path'
import ts from 'typescript'
import { assertReceivedValueIsTestCase } from './test-helpers'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toMatchDiagnosticsSnapshot(): R
    }
  }
}

function getDiagnostics() {
  const diagnostics: ts.Diagnostic[] = []
  const reportDiagnostic = (diagnostic: ts.Diagnostic) => diagnostics.push(diagnostic)
  const solutionBuilderHost = ts.createSolutionBuilderHost(ts.sys, undefined, reportDiagnostic)
  const solutionBuilder = ts.createSolutionBuilder(solutionBuilderHost, ['./tsconfig.tests.json'], {
    incremental: true,
  })
  solutionBuilder.build()

  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n')
    if (!d.file || !d.start) return { message }

    const { line, character } = d.file.getLineAndCharacterOfPosition(d.start)
    return { message, fileName: d.file.fileName, line: line + 1, character: character + 1 }
  })
}

expect.extend({
  toMatchDiagnosticsSnapshot(received: unknown) {
    try {
      assertReceivedValueIsTestCase(received)
    } catch (err) {
      return {
        pass: false,
        message: () => 'Expected received value to be of type TestCase',
      }
    }

    const [dirname, fileName] = received
    const desiredFile = resolve(dirname, 'fixtures', fileName)

    if (!existsSync(desiredFile)) {
      return { message: () => `File ${desiredFile} does not exist`, pass: false }
    }

    const diagnostics = getDiagnostics()
    const otherDiagnostics = diagnostics.filter((x) => !x.fileName)
    const fileDignostics = diagnostics
      .filter((d) => d.fileName === desiredFile)
      .map((d) => ({ ...d, fileName }))

    // @ts-expect-error dunno how to fix this "this" type error
    return toMatchSnapshot.call(this, [...otherDiagnostics, ...fileDignostics])
  },
})