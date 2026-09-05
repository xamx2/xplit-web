import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnv } from '@rsbuild/core'

const { parsed } = loadEnv({ mode: 'development' })

const config: CodegenConfig = {
  schema: parsed.PUBLIC_GRAPHQL_URI,
  documents: ['src/graphql/docs/**/*.ts'],
  generates: {
    './src/graphql/gql/': {
      preset: 'client'
    }
  }
}

export default config