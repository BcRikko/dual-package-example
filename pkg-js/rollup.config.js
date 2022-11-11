export default {
  input: './index.js',
  output: [
    // CommonJS
    { file: './lib/pkg-js.cjs', format: 'cjs' },
    // ES Modules
    { file: './lib/pkg-js.mjs', format: 'es' },
  ]
}