import { GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ResolverInfo as GraphQLResolveInfo } from '@/types/apollo';
import { ResolverContext } from '@/types/apollo';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: String;
};


export enum Level {
  LOW = 'LOW',
  MODERATE = 'MODERATE',
  HIGH = 'HIGH'
}

export enum ResidencyStatus {
  CITIZEN = 'CITIZEN',
  PERMANENT_RESIDENT = 'PERMANENT_RESIDENT'
}

export type File = {
   __typename?: 'File';
  id: Scalars['ID'];
  filename: Scalars['String'];
  url: Scalars['String'];
};

export type Contact = {
   __typename?: 'Contact';
  id: Scalars['ID'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  location?: Maybe<Scalars['String']>;
};

export type Skill = {
   __typename?: 'Skill';
  id: Scalars['ID'];
  title: Scalars['String'];
  image: File;
  passion?: Maybe<Level>;
  expertise?: Maybe<Level>;
};

export type Experience = {
   __typename?: 'Experience';
  id: Scalars['ID'];
  position: Scalars['String'];
  companyName: Scalars['String'];
  from: Scalars['Date'];
  to?: Maybe<Scalars['Date']>;
};

export type Project = {
   __typename?: 'Project';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  skills: Array<Skill>;
};

export type Profile = {
   __typename?: 'Profile';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nickName?: Maybe<Scalars['String']>;
  contact: Contact;
  jobTitle: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  cv?: Maybe<File>;
  linkedInUrl?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  residencyStatus: ResidencyStatus;
};

export type Query = {
   __typename?: 'Query';
  profile: Profile;
  skills: Array<Skill>;
  experience: Array<Experience>;
  projects: Array<Project>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Date: ResolverTypeWrapper<any>,
  Level: Level,
  ResidencyStatus: ResidencyStatus,
  File: ResolverTypeWrapper<File>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Contact: ResolverTypeWrapper<Contact>,
  Skill: ResolverTypeWrapper<Skill>,
  Experience: ResolverTypeWrapper<Omit<Experience, 'from' | 'to'> & { from: ResolversTypes['Date'], to?: Maybe<ResolversTypes['Date']> }>,
  Project: ResolverTypeWrapper<Project>,
  Profile: ResolverTypeWrapper<Profile>,
  Query: ResolverTypeWrapper<{}>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Date: any,
  Level: Level,
  ResidencyStatus: ResidencyStatus,
  File: File,
  ID: Scalars['ID'],
  Contact: Contact,
  Skill: Skill,
  Experience: Omit<Experience, 'from' | 'to'> & { from: ResolversParentTypes['Date'], to?: Maybe<ResolversParentTypes['Date']> },
  Project: Project,
  Profile: Profile,
  Query: {},
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type FileResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ContactResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SkillResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['Skill'] = ResolversParentTypes['Skill']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<ResolversTypes['File'], ParentType, ContextType>,
  passion?: Resolver<Maybe<ResolversTypes['Level']>, ParentType, ContextType>,
  expertise?: Resolver<Maybe<ResolversTypes['Level']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ExperienceResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['Experience'] = ResolversParentTypes['Experience']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  position?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  companyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  from?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  to?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ProjectResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ProfileResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  nickName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  contact?: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  jobTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  cv?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>,
  linkedInUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  residencyStatus?: Resolver<ResolversTypes['ResidencyStatus'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>,
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>,
  experience?: Resolver<Array<ResolversTypes['Experience']>, ParentType, ContextType>,
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = ResolverContext> = {
  Date?: GraphQLScalarType,
  File?: FileResolvers<ContextType>,
  Contact?: ContactResolvers<ContextType>,
  Skill?: SkillResolvers<ContextType>,
  Experience?: ExperienceResolvers<ContextType>,
  Project?: ProjectResolvers<ContextType>,
  Profile?: ProfileResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ResolverContext> = Resolvers<ContextType>;
