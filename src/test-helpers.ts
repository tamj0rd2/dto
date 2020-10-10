import { resolve } from 'path'
import ts from 'typescript'

export function createTestDeps() {
  return {
    getDiagnostics(dirname: string, fileName = 'types.ts') {
      const program = ts.createProgram({
        options: {
          noEmit: true,
          noErrorTruncation: true,
          noImplicitAny: true,
          strictNullChecks: true,
        },
        rootNames: [resolve(dirname, fileName)],
      })
      return ts.getPreEmitDiagnostics(program)
    },
  }
}
