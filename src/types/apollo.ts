import { GraphQLResolveInfo, FieldNode } from 'graphql'
import { IdGetterObj, InMemoryCache } from 'apollo-cache-inmemory'

export interface ResolverContext {
  cache: InMemoryCache;
  getCacheKey: (obj: IdGetterObj) => string;
}

export interface ResolverInfo extends GraphQLResolveInfo {
  readonly field: FieldNode;
}
