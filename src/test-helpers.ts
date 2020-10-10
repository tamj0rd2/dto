export type TestCase = [dirname: string, fileName: string]

export const createTestCase = (...args: TestCase): TestCase => [args[0], args[1]]

export function assertReceivedValueIsTestCase(x: unknown): asserts x is TestCase {
  if (!Array.isArray(x)) throw new Error('Received value should be a tuple of type TestCase')
  if (typeof x[0] !== 'string') throw new Error('dirname should be a string')
  if (typeof x[1] !== 'string') throw new Error('fileName should be a string')
}
