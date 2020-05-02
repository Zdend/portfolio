import { decrypt } from '@/shared/crypt';
import { ResidencyStatus } from '@/types/graphql';

export const profile = {
	id: 'profile-1',
	firstName: decrypt('YzNXbVJsYm1WcnAw'),
	lastName: decrypt('YzNWbVZqWldzPXAw'),
	nickName: 'Zen',
	jobTitle: 'Senior Front End Developer',
	shortDescription: `I love building software using React, Vue, Typescript, GraphQL, Node.js, Jest. I focus on UX, testability, scalability, performance and developer experience while remaining pragmatic.`,
	residencyStatus: ResidencyStatus.PERMANENT_RESIDENT,
}