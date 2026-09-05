/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment CoreGroupFields on Group {\n    id\n    name\n  }\n": typeof types.CoreGroupFieldsFragmentDoc,
    "\n  mutation CreateGroup($input: GroupInput!) {\n    createGroup(input: $input) {\n      ...CoreGroupFields\n    }\n  }\n": typeof types.CreateGroupDocument,
    "\n  query Group($id: ID!) {\n    currentUser {\n      id\n      group(id: $id) {\n        ...CoreGroupFields\n      }\n    }\n  }\n": typeof types.GroupDocument,
    "\n  query Groups {\n    currentUser {\n      id\n      groups {\n        ...CoreGroupFields\n      }\n    }\n  }\n": typeof types.GroupsDocument,
};
const documents: Documents = {
    "\n  fragment CoreGroupFields on Group {\n    id\n    name\n  }\n": types.CoreGroupFieldsFragmentDoc,
    "\n  mutation CreateGroup($input: GroupInput!) {\n    createGroup(input: $input) {\n      ...CoreGroupFields\n    }\n  }\n": types.CreateGroupDocument,
    "\n  query Group($id: ID!) {\n    currentUser {\n      id\n      group(id: $id) {\n        ...CoreGroupFields\n      }\n    }\n  }\n": types.GroupDocument,
    "\n  query Groups {\n    currentUser {\n      id\n      groups {\n        ...CoreGroupFields\n      }\n    }\n  }\n": types.GroupsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CoreGroupFields on Group {\n    id\n    name\n  }\n"): (typeof documents)["\n  fragment CoreGroupFields on Group {\n    id\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateGroup($input: GroupInput!) {\n    createGroup(input: $input) {\n      ...CoreGroupFields\n    }\n  }\n"): (typeof documents)["\n  mutation CreateGroup($input: GroupInput!) {\n    createGroup(input: $input) {\n      ...CoreGroupFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Group($id: ID!) {\n    currentUser {\n      id\n      group(id: $id) {\n        ...CoreGroupFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query Group($id: ID!) {\n    currentUser {\n      id\n      group(id: $id) {\n        ...CoreGroupFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Groups {\n    currentUser {\n      id\n      groups {\n        ...CoreGroupFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query Groups {\n    currentUser {\n      id\n      groups {\n        ...CoreGroupFields\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;