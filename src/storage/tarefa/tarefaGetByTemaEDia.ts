import { tarefasGetByTema } from "./tarefasGetByTema";

export async function tarefaGetByTemaEDia(tema: string, dia: string) {
  try {
    const storage = await tarefasGetByTema(tema);
    const tarefas = storage.filter(tarefa => tarefa.dia === dia);
    return tarefas;
  } catch (error) {
    throw error;
  }
}