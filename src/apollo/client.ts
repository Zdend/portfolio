import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import schema from './schema.json';
import { buildClientSchema, printSchema, IntrospectionQuery } from 'graphql';
import resolvers from './resolvers';

export const createClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    resolvers: resolvers as any,
    typeDefs: printSchema(buildClientSchema(schema as any as IntrospectionQuery))
  });  
}