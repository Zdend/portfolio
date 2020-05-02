import { Resolvers } from '@/types/graphql'
import Query from './query'
import * as Types from './types'

export const resolvers: Resolvers = {
  ...Types,
  Query,
//   Mutation,
}
export default resolvers