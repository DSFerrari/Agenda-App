import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inicial } from "@screens/Inicial";
import { NovaTarefa } from "@screens/NovaTarefa";
import { NovoTema } from "@screens/NovoTema";

const {Navigator,Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
            name='temas'
            component={Inicial}
            />
            <Screen
            name='tarefa'
            component={NovaTarefa}
            />
            <Screen
            name='novotema'
            component={NovoTema}
            />
        </Navigator>
    );
}