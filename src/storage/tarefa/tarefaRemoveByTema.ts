import AsyncStorage from "@react-native-async-storage/async-storage";
import { TAREFA_COLLECTION } from "@storage/storageconfig";
import { tarefasGetByTema } from "./tarefasGetByTema";

export async function tarefaRemoveByTema(tema: string, tarefaName: string) {
    try{
        const storage = await tarefasGetByTema(tema);
        const filtrado = storage.filter(tarefa => tarefa.name !== tarefaName);
        const tarefas = JSON.stringify(filtrado);

        await AsyncStorage.setItem(`${TAREFA_COLLECTION}-${tema}`, tarefas);
    }catch(error){
        throw error;
    }
}