import { QueryResolvers, Skill } from '@/types/graphql';

export const skills: QueryResolvers['skills'] = () => {
  return [] as Skill[];
};