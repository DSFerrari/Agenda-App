import { Header } from "@components/Header";
import { Container,Content } from "./theme";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { temaCreate } from "@storage/tema/temaCreate";
import { AppError } from "@utils/AppError";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Buttons";

export function NovoTema(){
const [tema, setTema] = useState('');
      const navigation = useNavigation();

async function handleNovoTema() {
    try{
        if(tema.trim().length === 0){
            return Alert.alert('Novo Tema', 'Informe o nome do tema');
        }
        await temaCreate(tema);
    navigation.navigate('tarefa', {tema});
    }catch (error) {
        if(error instanceof AppError){
        Alert.alert('Novo Tema', error.message);
        }else{
            Alert.alert('Novo Tema', 'Não foi possível criar um novo tema');
        console.log(error);
        }
    }
}

    return(
        <Container>
        <Header showBackButton />
        <Content>
        <Highlight
        showlogo
        logotype="dois"
        title="Temas"
        subTitle="Crie um novo tema"
        />
        <Input
        placeholder="tema"
        onChangeText={setTema}
        />
        <Button
        title="Criar"
        style={{ marginTop: 10 }}
        onPress={handleNovoTema}
        />
        </Content>
        </Container>
    );
}