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
export { account };

export const vytvorenieUzivatela = async (meno, email, heslo, tel_cislo, priezvisko) => {
    try {
        const novyUcet = await account.create(
            ID.unique(),
            email,
            heslo,
            meno,
            console.log('mail:', email)
        )

        if(!novyUcet) throw Error;

        const novyUzivatel = await databases.createDocument(
            appwriteConfig.databaseId, 
            appwriteConfig.uzivateliaCollectionId,
            ID.unique(),
            {
                meno,
                authId: novyUcet.$id,
                email,
                heslo,
                tel_cislo,
                priezvisko                
            }
        )

        return novyUzivatel
    } catch (error) {
        console.log("Chyba vytvorenia nového užívateľa: " + error)
        throw new Error(error)
    }    
}

