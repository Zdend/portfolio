import { QueryResolvers, Experience } from '@/types/graphql';

export const experience: QueryResolvers['experience'] = () => {
  return [] as Experience[];
};