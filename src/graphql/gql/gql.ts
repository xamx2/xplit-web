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
    "\n  fragment CoreMemberFields on GroupMember {\n    id\n    name\n  }\n": typeof types.CoreMemberFieldsFragmentDoc,
    "\n  fragment CoreTransactionFields on Transaction {\n    id\n    amount\n    description\n  }\n": typeof types.CoreTransactionFieldsFragmentDoc,
    "\n  mutation CreateGroup($input: GroupInput!) {\n    createGroup(input: $input) {\n      ...CoreGroupFields\n    }\n  }\n": typeof types.CreateGroupDocument,
    "\n  mutation CreateGroupMember($groupId: ID!, $input: GroupMemberInput!) {\n    createGroupMember(groupId: $groupId, input: $input) {\n      ...CoreMemberFields\n    }\n  }\n": typeof types.CreateGroupMemberDocument,
    "\n  mutation CreateTransaction($groupId: ID!, $input: TransactionInput!) {\n    createTransaction(groupId: $groupId, input: $input) {\n      ...CoreTransactionFields\n    }\n  }\n": typeof types.CreateTransactionDocument,
    "\n  query Group($groupId: ID!) {\n    currentUser {\n      id\n      group(id: $groupId) {\n        ...CoreGroupFields\n      }\n    }\n  }\n": typeof types.GroupDocument,
    "\n  query Groups {\n    currentUser {\n      id\n      groups {\n        ...CoreGroupFields\n      }\n    }\n  }\n": typeof types.GroupsDocument,
    "\n  query Members($groupId: ID!) {\n    currentUser {\n      group(id: $groupId) {\n        id\n        members {\n          ...CoreMemberFields\n        }\n      }\n    }\n  }\n": typeof types.MembersDocument,
    "\n  query Transactions($groupId: ID!) {\n    currentUser {\n      group(id: $groupId) {\n        id\n        transactions {\n          ...CoreTransactionFields\n        }\n      }\n    }\n  }\n": typeof types.TransactionsDocument,
};
const documents: Documents = {
    "\n  fragment CoreGroupFields on Group {\n    id\n    name\n  }\n": types.CoreGroupFieldsFragmentDoc,
    "\n  fragment CoreMemberFields on GroupMember {\n    id\n    name\n  }\n": types.CoreMemberFieldsFragmentDoc,
    "\n  fragment CoreTransactionFields on Transaction {\n    id\n    amount\n    description\n  }\n": types.CoreTransactionFieldsFragmentDoc,
    "\n  mutation CreateGroup($input: GroupInput!) {\n    createGroup(input: $input) {\n      ...CoreGroupFields\n    }\n  }\n": types.CreateGroupDocument,
    "\n  mutation CreateGroupMember($groupId: ID!, $input: GroupMemberInput!) {\n    createGroupMember(groupId: $groupId, input: $input) {\n      ...CoreMemberFields\n    }\n  }\n": types.CreateGroupMemberDocument,
    "\n  mutation CreateTransaction($groupId: ID!, $input: TransactionInput!) {\n    createTransaction(groupId: $groupId, input: $input) {\n      ...CoreTransactionFields\n    }\n  }\n": types.CreateTransactionDocument,
    "\n  query Group($groupId: ID!) {\n    currentUser {\n      id\n      group(id: $groupId) {\n        ...CoreGroupFields\n      }\n    }\n  }\n": types.GroupDocument,
    "\n  query Groups {\n    currentUser {\n      id\n      groups {\n        ...CoreGroupFields\n      }\n    }\n  }\n": types.GroupsDocument,
    "\n  query Members($groupId: ID!) {\n    currentUser {\n      group(id: $groupId) {\n        id\n        members {\n          ...CoreMemberFields\n        }\n      }\n    }\n  }\n": types.MembersDocument,
    "\n  query Transactions($groupId: ID!) {\n    currentUser {\n      group(id: $groupId) {\n        id\n        transactions {\n          ...CoreTransactionFields\n        }\n      }\n    }\n  }\n": types.TransactionsDocument,
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
export function graphql(source: "\n  fragment CoreMemberFields on GroupMember {\n    id\n    name\n  }\n"): (typeof documents)["\n  fragment CoreMemberFields on GroupMember {\n    id\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CoreTransactionFields on Transaction {\n    id\n    amount\n    description\n  }\n"): (typeof documents)["\n  fragment CoreTransactionFields on Transaction {\n    id\n    amount\n    description\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateGroup($input: GroupInput!) {\n    createGroup(input: $input) {\n      ...CoreGroupFields\n    }\n  }\n"): (typeof documents)["\n  mutation CreateGroup($input: GroupInput!) {\n    createGroup(input: $input) {\n      ...CoreGroupFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateGroupMember($groupId: ID!, $input: GroupMemberInput!) {\n    createGroupMember(groupId: $groupId, input: $input) {\n      ...CoreMemberFields\n    }\n  }\n"): (typeof documents)["\n  mutation CreateGroupMember($groupId: ID!, $input: GroupMemberInput!) {\n    createGroupMember(groupId: $groupId, input: $input) {\n      ...CoreMemberFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTransaction($groupId: ID!, $input: TransactionInput!) {\n    createTransaction(groupId: $groupId, input: $input) {\n      ...CoreTransactionFields\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTransaction($groupId: ID!, $input: TransactionInput!) {\n    createTransaction(groupId: $groupId, input: $input) {\n      ...CoreTransactionFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Group($groupId: ID!) {\n    currentUser {\n      id\n      group(id: $groupId) {\n        ...CoreGroupFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query Group($groupId: ID!) {\n    currentUser {\n      id\n      group(id: $groupId) {\n        ...CoreGroupFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Groups {\n    currentUser {\n      id\n      groups {\n        ...CoreGroupFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query Groups {\n    currentUser {\n      id\n      groups {\n        ...CoreGroupFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Members($groupId: ID!) {\n    currentUser {\n      group(id: $groupId) {\n        id\n        members {\n          ...CoreMemberFields\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Members($groupId: ID!) {\n    currentUser {\n      group(id: $groupId) {\n        id\n        members {\n          ...CoreMemberFields\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Transactions($groupId: ID!) {\n    currentUser {\n      group(id: $groupId) {\n        id\n        transactions {\n          ...CoreTransactionFields\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Transactions($groupId: ID!) {\n    currentUser {\n      group(id: $groupId) {\n        id\n        transactions {\n          ...CoreTransactionFields\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;