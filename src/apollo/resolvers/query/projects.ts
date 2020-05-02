import { QueryResolvers, Project } from '@/types/graphql';

export const projects: QueryResolvers['projects'] = () => {
  return [] as Project[];
};