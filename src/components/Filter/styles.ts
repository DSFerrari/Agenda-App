import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export type FilterStyleProps = {
    isActive: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
    ${({theme, isActive}) => isActive && css`
    border: 2px solid ${theme.COLORS.COR_DIA_SELECIONADO};
    `};

    border-radius: 2px;
    

    height: 38px;
    width: 50px;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SUBTITULO}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    color: ${({theme}) => theme.COLORS.COR_SUBTITULO};
`;