export default {
  input: './index.js',
  output: [
    // CommonJS
    { file: './lib/mypackage.cjs', format: 'cjs' },
    // ES Modules
    { file: './lib/mypackage.mjs', format: 'es' },
  ]
}