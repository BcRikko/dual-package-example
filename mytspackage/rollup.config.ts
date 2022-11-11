import type { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'

const config: RollupOptions = {
  input: './index.ts',
  output: [
    // CommonJS
    { file: './lib/mytspackage.cjs', format: 'cjs' },
    // ES Modules
    { file: './lib/mytspackage.mjs', format: 'es' },
  ],
  plugins: [typescript({
    tsconfig: './tsconfig.json'
  })]
}

export default config