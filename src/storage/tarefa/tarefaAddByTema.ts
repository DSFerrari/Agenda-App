import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { TAREFA_COLLECTION } from "@storage/storageconfig";
import { tarefasGetByTema } from "./tarefasGetByTema";
import { TarefaStorageDTO } from "./TarefaStorageDTO";

export async function tarefaAddByTema(tarefa: TarefaStorageDTO,tema: string) {
    try {
        const storage = await tarefasGetByTema(tema);
        const tarefaExistente = storage.find(t => t.name === tarefa.name);

        if (tarefaExistente) {
            throw new AppError("Essa tarefa já está anotada");
        }

        const tarefas = JSON.stringify([...storage, tarefa]);

        await AsyncStorage.setItem(`${TAREFA_COLLECTION}-${tema}`, tarefas);
    } catch (error) {
        throw error;
    }
}