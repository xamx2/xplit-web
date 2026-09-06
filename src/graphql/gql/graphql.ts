/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GroupInput = {
  name?: string | null | undefined;
};

export type GroupMemberInput = {
  name?: string | null | undefined;
};

export type TransactionInput = {
  amount: number;
  description?: string | null | undefined;
  memberId: number;
  splits: Array<TransactionSplitInput>;
};

export type TransactionSplitInput = {
  amount: number;
  memberId: number;
};

export type CoreGroupFieldsFragment = { id: number, name: string } & { ' $fragmentName'?: 'CoreGroupFieldsFragment' };

export type CoreMemberFieldsFragment = { id: number, name: string | null } & { ' $fragmentName'?: 'CoreMemberFieldsFragment' };

export type CoreTransactionFieldsFragment = { id: number, amount: number, description: string | null } & { ' $fragmentName'?: 'CoreTransactionFieldsFragment' };

export type CreateGroupMutationVariables = Exact<{
  input: GroupInput;
}>;


export type CreateGroupMutation = { createGroup: { ' $fragmentRefs'?: { 'CoreGroupFieldsFragment': CoreGroupFieldsFragment } } };

export type CreateGroupMemberMutationVariables = Exact<{
  groupId: string | number;
  input: GroupMemberInput;
}>;


export type CreateGroupMemberMutation = { createGroupMember: { ' $fragmentRefs'?: { 'CoreMemberFieldsFragment': CoreMemberFieldsFragment } } };

export type CreateTransactionMutationVariables = Exact<{
  groupId: string | number;
  input: TransactionInput;
}>;


export type CreateTransactionMutation = { createTransaction: { ' $fragmentRefs'?: { 'CoreTransactionFieldsFragment': CoreTransactionFieldsFragment } } };

export type GroupQueryVariables = Exact<{
  groupId: string | number;
}>;


export type GroupQuery = { currentUser: { id: number, group: { ' $fragmentRefs'?: { 'CoreGroupFieldsFragment': CoreGroupFieldsFragment } } } };

export type GroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupsQuery = { currentUser: { id: number, groups: Array<{ ' $fragmentRefs'?: { 'CoreGroupFieldsFragment': CoreGroupFieldsFragment } }> } };

export type MembersQueryVariables = Exact<{
  groupId: string | number;
}>;


export type MembersQuery = { currentUser: { group: { id: number, members: Array<{ ' $fragmentRefs'?: { 'CoreMemberFieldsFragment': CoreMemberFieldsFragment } }> } } };

export type TransactionsQueryVariables = Exact<{
  groupId: string | number;
}>;


export type TransactionsQuery = { currentUser: { group: { id: number, transactions: Array<{ ' $fragmentRefs'?: { 'CoreTransactionFieldsFragment': CoreTransactionFieldsFragment } }> } } };

export const CoreGroupFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreGroupFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Group"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<CoreGroupFieldsFragment, unknown>;
export const CoreMemberFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreMemberFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupMember"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<CoreMemberFieldsFragment, unknown>;
export const CoreTransactionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreTransactionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<CoreTransactionFieldsFragment, unknown>;
export const CreateGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreGroupFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreGroupFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Group"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<CreateGroupMutation, CreateGroupMutationVariables>;
export const CreateGroupMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGroupMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GroupMemberInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGroupMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"groupId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreMemberFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreMemberFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupMember"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<CreateGroupMemberMutation, CreateGroupMemberMutationVariables>;
export const CreateTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TransactionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"groupId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreTransactionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreTransactionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<CreateTransactionMutation, CreateTransactionMutationVariables>;
export const GroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Group"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreGroupFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreGroupFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Group"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GroupQuery, GroupQueryVariables>;
export const GroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreGroupFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreGroupFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Group"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GroupsQuery, GroupsQueryVariables>;
export const MembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Members"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreMemberFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreMemberFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupMember"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<MembersQuery, MembersQueryVariables>;
export const TransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Transactions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreTransactionFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreTransactionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<TransactionsQuery, TransactionsQueryVariables>;