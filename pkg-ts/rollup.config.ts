import type { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'

const config: RollupOptions = {
  input: './index.ts',
  output: [
    // CommonJS
    { file: './lib/pkg-ts.cjs', format: 'cjs' },
    // ES Modules
    { file: './lib/pkg-ts.mjs', format: 'es' },
  ],
  plugins: [typescript({
    tsconfig: './tsconfig.json'
  })]
}

export default config