import { Client, Account, ID, Databases, Query } from 'appwrite';
import { useRouter } from 'next/navigation'

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    projectId: '6743531f002863921725',
    platform: 'tuako',
    databaseId: '674356a400149add9810',
    
    uzivateliaCollectionId: '67435f990002b1bedd5e',
    ponukyCollectionId: '674d6ca4002aea3bd5dd',
}

const {databaseId, uzivateliaCollectionId, ponukyCollectionId} = appwriteConfig 

const client = new Client();
client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)

const account = new Account(client);
const databases = new Databases(client);
export { account };

export async function vytvorenieUzivatela(meno, email, heslo, tel_cislo, priezvisko){
    try {
        const novyUcet = await account.create(
            ID.unique(),
            email,
            heslo,
            meno,
            console.log('mail:', email)
        )

        if(!novyUcet) throw Error;

        await prihlasitSa(email, heslo)

        const novyUzivatel = await databases.createDocument(
            appwriteConfig.databaseId, 
            appwriteConfig.uzivateliaCollectionId,
            ID.unique(),
            {
                meno,
                authId: novyUcet.$id,
                email,
                tel_cislo,
                priezvisko                
            }
        )
        return novyUzivatel
    } catch (error) {           //vypisy chyb
        console.log("Chyba vytvorenia nového užívateľa: " + error)
        alert("Chyba pri vytvarani noveho uzivatela: " + error)
    }    
}

export async function prihlasitSa(email, password){
    try{
        const session = await account.createEmailPasswordSession(email, password)
        return session
    }catch(error){                 //vypisy chyb
        alert("Chyba pri prihlaseni: " + error)
    }
}

export async function odhlasitSa() {
    try {
        const session = await account.deleteSession('current')
        console.log('boli ste odhlaseny')
        return session
    } catch (error) {
        alert("Chyba pri odhlaseni: " + error)
    }
}

export async function getPrihlasenyUzivatel(){
    try{
        const prihlasenyUcet = await account.get()
        
        if(!prihlasenyUcet) throw Error

        const pouzivatel = await databases.listDocuments(
            databaseId,
            uzivateliaCollectionId,
            [Query.equal('authId', prihlasenyUcet.$id)]     //podmienka
        )
        return pouzivatel.documents[0]
    }catch(error){
        console.log('chyba pri ziskavani prihlaseneho uzivatela: ', error)
    }
}


export async function pridaniePonuky(nazov_ponuky, lokacia, cena, popis) {
    try{
        const novaPonuka = await databases.createDocument(
            appwriteConfig.databaseId, 
            appwriteConfig.ponukyCollectionId,
            ID.unique(),
            {
                nazov_ponuky,
                lokacia,
                cena,
                popis           
            }
        ) 
        return novaPonuka
    }catch(error){
        console.log('chyba pri vytvarani ponuky - appwrite - : ', error)
        alert("chyba:", error.message)
    }   
}

export async function getPonuky(){
    try{
        const ponuky = await databases.listDocuments(
            databaseId,
            ponukyCollectionId,
        )
        return ponuky.documents
    }catch(error){
        console.log('chyba pri ziskavani ponuk: ', error)
    }
}









