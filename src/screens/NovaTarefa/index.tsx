import { Header } from "@components/Header";
import { Container, Form, HeaderList } from "./theme";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/InputToTarefa";
import { ListEmpty } from "@components/ListEmpty";
import { Filter } from "@components/Filter";
import { ButtonIcon } from "@components/ButtonIcon";

import { Alert, FlatList, TextInput } from "react-native";
import { useState, useEffect, useRef } from "react";
import { useNavigation,useRoute } from "@react-navigation/native";

import { AppError } from "@utils/AppError";

import { tarefaAddByTema } from "@storage/tarefa/tarefaAddByTema";
import { tarefaGetByTemaEDia } from "@storage/tarefa/tarefaGetByTemaEDia";
import { tarefaRemoveByTema } from "@storage/tarefa/tarefaRemoveByTema";
import { TarefaStorageDTO } from "@storage/tarefa/TarefaStorageDTO";
import { temaRemoveByName } from "@storage/tema/temaRemoveByName";
import { Loading } from "@components/Loading";
import { TarefaCard } from "@components/TarefaCard";

type RouteParams = {
    tema: string;
}
export function NovaTarefa(){
 const [isLoading, setIsLoading] = useState(true);
 const [tarefas, setTarefas] = useState<TarefaStorageDTO[]>([]);
 const [dia, setDia] = useState('Seg');
 const [newTarefaName, setNewTarefaName] = useState('');

 const navigation = useNavigation();
    const route = useRoute();
    const {tema} = route.params as RouteParams;

    const newTarefaNameInputRef = useRef<TextInput>(null);
    
    async function handleAddTarefa() {
        if(newTarefaName.trim().length === 0){
            return Alert.alert('Nova tarefa', 'Informe o nome da tarefa');
        }
        const newTarefa = {
            name: newTarefaName,
            dia,
        }

        try{
            await tarefaAddByTema(newTarefa, tema);

            newTarefaNameInputRef.current?.blur();
            setNewTarefaName('');
            fetchTarefasByDia();
        }catch(error){
            if(error instanceof AppError){
                Alert.alert('Nova Tarefa', error.message);
            }else{
                Alert.alert('Nova Tarefa', 'Não Foi Possivel Adicionar uma nova tarefa');
            }
        }
    }

    async function fetchTarefasByDia() {
        try{
            setIsLoading(true);
            const tarefasByDia = await tarefaGetByTemaEDia(tema,dia);
            setTarefas(tarefasByDia);
        }catch(error){
        Alert.alert('Tarefas','Não possivel buscar as tarefas do dia selecionado');
        }finally{
            setIsLoading(false);
        }
    }

    async function temaRemove() {
        try{
            await temaRemoveByName(tema);
            navigation.navigate('temas');
        }catch(error){
            Alert.alert('Remover tema', 'Não foi possivel remover esse tema');
        }
    }

    async function handleTarefaRemove(tarefaName: string) {
        try{
            await tarefaRemoveByTema(tarefaName, tema);
            fetchTarefasByDia();
        }catch(error){
            Alert.alert('Remover tarefa','Não foi possivel remover essa tarefa');
        }
    }

    async function handleTemaRemove(){
        Alert.alert(
            'Remover',
            'Deseja remover o tema ?',
            [
                {text: 'Não', style: 'cancel'},
                {text: 'Sim', onPress: () => temaRemove()}
            ]
        )
    }

    useEffect(() => {
        fetchTarefasByDia();
    }, [dia]);

    return(
    <Container>
    <Header showBackButton showCancelButton onCancel={handleTemaRemove}/>
    <Highlight
    title={tema}
    subTitle="Crie as tarefas"
    />
    <Form>
        <Input
        inputRef={newTarefaNameInputRef}
        onChangeText={setNewTarefaName}
        value={newTarefaName}
        placeholder="Nome da Tarefa"
        autoCorrect={false}
        onSubmitEditing={handleAddTarefa}
        returnKeyType="done"
        />
        <ButtonIcon icon="add"
        onPress={handleAddTarefa}
        />
    </Form>

    <HeaderList>
        <FlatList
        data={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']}
        keyExtractor={item => item}
        renderItem={({item}) => (
            <Filter
            title={item}
            isActive={item === dia}
            onPress={() => setDia(item)}
            />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
    </HeaderList>
{
    isLoading ? <Loading/> :

<FlatList
    data={tarefas}
    keyExtractor={item => item.name}
    renderItem={({ item }) =>(
        <TarefaCard
        name={item.name}
        onRemove={() => handleTarefaRemove(item.name)}/>
    )}
    ListEmptyComponent={() => (
        <ListEmpty
        message="Não há tarefas para esse dia"
        />
    )}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={[
        {paddingBottom: 100},
        tarefas.length === 0 && {flex: 1}
        ]}
        />
}
    </Container>
    );
}