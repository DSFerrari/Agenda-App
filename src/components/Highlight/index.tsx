import { Container, Title, SubTitle, Logo } from "./styles";
import logoImg from '@assets/TelaInicial.png';
import logoImage2 from '@assets/Tema.png';

type Props = {
    title: string;
    subTitle: string;
    logotype: "um" | "dois";
    };

export function Highlight({ title, subTitle, logotype }: Props) {
    return (
        <Container>
            <Logo source={logotype=== "um" ? logoImg : logoImage2} />
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </Container>
    );
}