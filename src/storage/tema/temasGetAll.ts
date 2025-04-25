import AsyncStorage from "@react-native-async-storage/async-storage";
import { TEMA_COLLECTION } from "@storage/storageconfig";

export async function temasGetAll() {
  try {
    const storage = await AsyncStorage.getItem(TEMA_COLLECTION);
    const temas: string[] = storage ? JSON.parse(storage) : [];
    return temas;
  } catch (error) {
    throw error;
  }
}