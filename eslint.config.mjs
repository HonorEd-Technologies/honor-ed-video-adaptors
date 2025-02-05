import js from '@eslint/js'
import tsEslint from 'typescript-eslint'

export default tsEslint.config(
  js.configs.recommended,
  tsEslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', 'eslint.config.js'],
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
  },
  {
    ignores: ['node_modules', 'dist', 'Sources'],
  }
)
