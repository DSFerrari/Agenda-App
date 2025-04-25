import AsyncStorage from "@react-native-async-storage/async-storage";
import { TEMA_COLLECTION, TAREFA_COLLECTION } from "@storage/storageconfig";
import { temasGetAll } from "./temasGetAll";

export async function temaRemoveByName(temaDeleted: string) {
    try {
        const storageTemas = await temasGetAll();
        const temas = storageTemas.filter((tema) => tema !== temaDeleted);

        await AsyncStorage.setItem(TEMA_COLLECTION, JSON.stringify(temas));
        await AsyncStorage.removeItem(`${TAREFA_COLLECTION}-${temaDeleted}`);
    }catch (error) {
        throw error;
    }  
}