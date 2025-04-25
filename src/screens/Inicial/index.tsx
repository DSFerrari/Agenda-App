import { Container } from "./theme";
import { Button } from "@components/Buttons";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { Highlight } from "@components/Highlight";
import { ThemeCard } from "@components/ThemeCard";
import { useEffect, useState } from "react";
import { Loading } from "@components/Loading";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { temasGetAll } from "@storage/tema/temasGetAll";

export function Inicial(){
    const[isLoading, setIsLoading] = useState(true);
    const [groups, setGroups] = useState<string[]>([]);
    
    const Navigation = useNavigation();
    function handleNewGroup(){
        Navigation.navigate('tema');
    }

    async function fetchTemas() {
        try{
            setIsLoading(true);
            const data = await temasGetAll();
            setGroups(data);
        }catch (error) {
            console.log(error);
        }
         finally{
            setIsLoading(false);   
    }
}


    function handleOpenTheme(inicio: string){
        Navigation.navigate('tarefa', {inicio});
    
    }

    useEffect(() => {
        fetchTemas();
    },[]);
    return(
       <Container>
        <Header/>
        <Highlight
        title="Tarefas"
        subTitle="Crie Suas Tarefas por temas"
        logotype="um"
        />
        {isLoading ? <Loading/> :
        <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
        <ThemeCard 
        title={item}
        onPress={() => handleOpenTheme(item)}
        />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (<ListEmpty message="Nenhum tema cadastrado" />)}
        showsVerticalScrollIndicator={false}
        />
    } 
        <Button title="Criar novo Tema"
        onPress={handleNewGroup} />
       </Container>
    );
}
