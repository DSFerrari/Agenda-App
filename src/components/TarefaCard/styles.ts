import styled, {css} from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
    width: 100%;
    height: 56px;

    background-color: ${({theme}) => theme.COLORS.COR_INPUT};
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    margin-bottom: 16px
`;

export const Name = styled.Text`
flex: 1;
${({theme}) => css`
font-size: ${theme.FONT_SIZE.INPUT}px;
color: ${theme.COLORS.COR_TITULO};
font-family: ${theme.FONT_FAMILY.REGULAR};
`
};
`;

export const Icon = styled.Image`
size:24;
margin-left: 16px;
margin-right: 4px;
`;