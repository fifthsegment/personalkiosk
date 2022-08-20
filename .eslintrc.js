module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'react-app'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      project: ['./tsconfig.json'] // Specify it only for TypeScript files
    }
  },
  rules: {
  }
}
