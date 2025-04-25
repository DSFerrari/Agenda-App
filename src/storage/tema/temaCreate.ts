import AsyncStorage from "@react-native-async-storage/async-storage";
import { TEMA_COLLECTION } from "@storage/storageconfig";
import { temasGetAll } from "./temasGetAll";
import { AppError } from "@utils/AppError";

export async function temaCreate(newTema: string) {
    try {
        const storageTemas = await temasGetAll();
    
        const temaAlreadyExists = storageTemas.includes(newTema);
    
        if (temaAlreadyExists) {
        throw new AppError("Tema já cadastrado");
        }
    
        const storage = JSON.stringify([...storageTemas, newTema]);
        await AsyncStorage.setItem(TEMA_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
    }