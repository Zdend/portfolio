import { QueryResolvers, Profile } from '@/types/graphql';
import { profile as profileData } from '@/fixtures/profile';

export const profile: QueryResolvers['profile'] = () => {
  return profileData as Profile;
};