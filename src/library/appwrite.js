import { Client, Account, ID, Databases, Query } from 'appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    projectId: '6743531f002863921725',
    platform: 'tuako',
    databaseId: '674356a400149add9810',
    
    uzivateliaCollectionId: '67435f990002b1bedd5e',
    ponukyCollectionId: '674d6ca4002aea3bd5dd',


}

const client = new Client();
client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)

const account = new Account(client);
const databases = new Databases(client);

account.create()

