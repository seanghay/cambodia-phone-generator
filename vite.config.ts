import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'

export default defineConfig({
  root: resolve('demo'),
  test: {},
})