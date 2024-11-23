module.exports = [
  {
    files: ['**/*.ts'], // Aplica o ESLint apenas nos arquivos TypeScript
    ignores: [
      'node_modules/**', // Ignora node_modules
      'dist/**', // Ignora dist
      'build/**', // Ignora build
      '*.js', // Ignora arquivos JS na raiz
    ],
    languageOptions: {
      parser: require('@typescript-eslint/parser'), // Define o parser para TypeScript
    },
    plugins: {
      prettier: require('eslint-plugin-prettier'), // Plugin Prettier
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'), // Plugin TypeScript
    },
    rules: {
      'no-unused-vars': 'warn', // Aviso para variáveis não utilizadas
      'no-console': 'warn', // Aviso para console.log
      '@typescript-eslint/no-unused-vars': 'warn', // Regra específica para TS
      'prettier/prettier': 'error', // Exibe erro quando regras do Prettier não são seguidas
    },
    extends: [
      'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
      'plugin:prettier/recommended', // Integração Prettier
    ],
  },
];
