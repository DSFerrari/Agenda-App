import { useNavigation } from "@react-navigation/native";
import { Container,Cancel,BackIcon,BackButton,CancelIcon } from "./styles";


type Props = {
    showBackButton?: boolean;
    showCancelButton?: boolean;
    onCancel?: () => void;
}

export function Header({ showBackButton = false, showCancelButton = false, onCancel }: Props) {
const Navigation = useNavigation();

function handleGoBack() {
    Navigation.navigate('temas');
}

return (
    <Container>
        {showBackButton && 
            <BackButton onPress={handleGoBack}> 
                <BackIcon />
            </BackButton>

    }
        {showCancelButton &&
        <Cancel onPress={onCancel}>
            <CancelIcon/>
        </Cancel>
}
    </Container>
    );
}