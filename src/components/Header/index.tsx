import { useNavigation } from "@react-navigation/native";
import { Container,Logo,BackIcon,BackButton } from "./styles";


type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
const Navigation = useNavigation();

function handleGoBack() {
    Navigation.navigate('inicial');
}

return (
    <Container>
        {showBackButton && 
            <BackButton onPress={handleGoBack}> 
                <BackIcon />
            </BackButton>
    }
   
    </Container>
    );
}