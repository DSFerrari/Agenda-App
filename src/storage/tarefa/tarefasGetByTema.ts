import AsyncStorage from "@react-native-async-storage/async-storage";
import { TarefaStorageDTO } from "./TarefaStorageDTO";
import { TAREFA_COLLECTION } from "@storage/storageconfig";

export async function tarefasGetByTema(tema: string) {
    try{
        const storage = await AsyncStorage.getItem(`${TAREFA_COLLECTION}-${tema}`);

        const tarefas: TarefaStorageDTO[] = storage ? JSON.parse(storage) : [];

        return tarefas;
    }catch(error){
        throw error;
    }
}