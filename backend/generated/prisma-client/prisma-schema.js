module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregatePurchase {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createPurchase(data: PurchaseCreateInput!): Purchase!
  updatePurchase(data: PurchaseUpdateInput!, where: PurchaseWhereUniqueInput!): Purchase
  updateManyPurchases(data: PurchaseUpdateManyMutationInput!, where: PurchaseWhereInput): BatchPayload!
  upsertPurchase(where: PurchaseWhereUniqueInput!, create: PurchaseCreateInput!, update: PurchaseUpdateInput!): Purchase!
  deletePurchase(where: PurchaseWhereUniqueInput!): Purchase
  deleteManyPurchases(where: PurchaseWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Purchase {
  id: ID!
  title: String!
  cost: Int!
  purchasedOn: DateTime!
  user: User!
}

type PurchaseConnection {
  pageInfo: PageInfo!
  edges: [PurchaseEdge]!
  aggregate: AggregatePurchase!
}

input PurchaseCreateInput {
  id: ID
  title: String!
  cost: Int!
  purchasedOn: DateTime!
  user: UserCreateOneWithoutPurchasesInput!
}

input PurchaseCreateManyWithoutUserInput {
  create: [PurchaseCreateWithoutUserInput!]
  connect: [PurchaseWhereUniqueInput!]
}

input PurchaseCreateWithoutUserInput {
  id: ID
  title: String!
  cost: Int!
  purchasedOn: DateTime!
}

type PurchaseEdge {
  node: Purchase!
  cursor: String!
}

enum PurchaseOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  cost_ASC
  cost_DESC
  purchasedOn_ASC
  purchasedOn_DESC
}

type PurchasePreviousValues {
  id: ID!
  title: String!
  cost: Int!
  purchasedOn: DateTime!
}

input PurchaseScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  cost: Int
  cost_not: Int
  cost_in: [Int!]
  cost_not_in: [Int!]
  cost_lt: Int
  cost_lte: Int
  cost_gt: Int
  cost_gte: Int
  purchasedOn: DateTime
  purchasedOn_not: DateTime
  purchasedOn_in: [DateTime!]
  purchasedOn_not_in: [DateTime!]
  purchasedOn_lt: DateTime
  purchasedOn_lte: DateTime
  purchasedOn_gt: DateTime
  purchasedOn_gte: DateTime
  AND: [PurchaseScalarWhereInput!]
  OR: [PurchaseScalarWhereInput!]
  NOT: [PurchaseScalarWhereInput!]
}

type PurchaseSubscriptionPayload {
  mutation: MutationType!
  node: Purchase
  updatedFields: [String!]
  previousValues: PurchasePreviousValues
}

input PurchaseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PurchaseWhereInput
  AND: [PurchaseSubscriptionWhereInput!]
  OR: [PurchaseSubscriptionWhereInput!]
  NOT: [PurchaseSubscriptionWhereInput!]
}

input PurchaseUpdateInput {
  title: String
  cost: Int
  purchasedOn: DateTime
  user: UserUpdateOneRequiredWithoutPurchasesInput
}

input PurchaseUpdateManyDataInput {
  title: String
  cost: Int
  purchasedOn: DateTime
}

input PurchaseUpdateManyMutationInput {
  title: String
  cost: Int
  purchasedOn: DateTime
}

input PurchaseUpdateManyWithoutUserInput {
  create: [PurchaseCreateWithoutUserInput!]
  delete: [PurchaseWhereUniqueInput!]
  connect: [PurchaseWhereUniqueInput!]
  set: [PurchaseWhereUniqueInput!]
  disconnect: [PurchaseWhereUniqueInput!]
  update: [PurchaseUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [PurchaseUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [PurchaseScalarWhereInput!]
  updateMany: [PurchaseUpdateManyWithWhereNestedInput!]
}

input PurchaseUpdateManyWithWhereNestedInput {
  where: PurchaseScalarWhereInput!
  data: PurchaseUpdateManyDataInput!
}

input PurchaseUpdateWithoutUserDataInput {
  title: String
  cost: Int
  purchasedOn: DateTime
}

input PurchaseUpdateWithWhereUniqueWithoutUserInput {
  where: PurchaseWhereUniqueInput!
  data: PurchaseUpdateWithoutUserDataInput!
}

input PurchaseUpsertWithWhereUniqueWithoutUserInput {
  where: PurchaseWhereUniqueInput!
  update: PurchaseUpdateWithoutUserDataInput!
  create: PurchaseCreateWithoutUserInput!
}

input PurchaseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  cost: Int
  cost_not: Int
  cost_in: [Int!]
  cost_not_in: [Int!]
  cost_lt: Int
  cost_lte: Int
  cost_gt: Int
  cost_gte: Int
  purchasedOn: DateTime
  purchasedOn_not: DateTime
  purchasedOn_in: [DateTime!]
  purchasedOn_not_in: [DateTime!]
  purchasedOn_lt: DateTime
  purchasedOn_lte: DateTime
  purchasedOn_gt: DateTime
  purchasedOn_gte: DateTime
  user: UserWhereInput
  AND: [PurchaseWhereInput!]
  OR: [PurchaseWhereInput!]
  NOT: [PurchaseWhereInput!]
}

input PurchaseWhereUniqueInput {
  id: ID
}

type Query {
  purchase(where: PurchaseWhereUniqueInput!): Purchase
  purchases(where: PurchaseWhereInput, orderBy: PurchaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Purchase]!
  purchasesConnection(where: PurchaseWhereInput, orderBy: PurchaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PurchaseConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  purchase(where: PurchaseSubscriptionWhereInput): PurchaseSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  firstName: String!
  lastName: String
  purchases(where: PurchaseWhereInput, orderBy: PurchaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Purchase!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String
  purchases: PurchaseCreateManyWithoutUserInput
}

input UserCreateOneWithoutPurchasesInput {
  create: UserCreateWithoutPurchasesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPurchasesInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  firstName: String!
  lastName: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  firstName: String
  lastName: String
  purchases: PurchaseUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  firstName: String
  lastName: String
}

input UserUpdateOneRequiredWithoutPurchasesInput {
  create: UserCreateWithoutPurchasesInput
  update: UserUpdateWithoutPurchasesDataInput
  upsert: UserUpsertWithoutPurchasesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPurchasesDataInput {
  email: String
  firstName: String
  lastName: String
}

input UserUpsertWithoutPurchasesInput {
  update: UserUpdateWithoutPurchasesDataInput!
  create: UserCreateWithoutPurchasesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  purchases_every: PurchaseWhereInput
  purchases_some: PurchaseWhereInput
  purchases_none: PurchaseWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    