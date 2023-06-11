import {createClient} from '@sanity/client'

export const client = createClient({
    dataset: 'production',
    projectId: 'rh6jajnj',
    apiVersion: '2022-03-24',
    useCdn: 'true',
});