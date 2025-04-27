import { Container, Icon, Name } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import img from "@assets/Tema.png"

type Props = {
    name: string;
    onRemove: () => void;
}

export function TarefaCard({name, onRemove}: Props){
    return(
        <Container>
            <Icon
            src="img"
            />
            <Name>
            {name}
            </Name>
            
            
            <ButtonIcon
            icon="check"
            type="SECONDARY"
            onPress={onRemove}
            />
        </Container>
    );
}