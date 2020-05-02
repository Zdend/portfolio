import { ContactResolvers } from '@/types/graphql';
import { contact } from '@/fixtures/contact';

export const Contact: ContactResolvers = {
    id: () => contact.id,
    phoneNumber: () => contact.phoneNumber,
    email: () => contact.email,
    location: () => contact.location,
}