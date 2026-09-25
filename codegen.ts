import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnv } from '@rsbuild/core'

const { parsed } = loadEnv({ mode: 'development' })

const config: CodegenConfig = {
  schema: parsed.PUBLIC_GRAPHQL_URI,
  documents: ['src/gql/docs/**/*.ts'],
  generates: {
    './src/gql/graphql/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'unmaskFragment' }
      }
    }
  }
}

export default config