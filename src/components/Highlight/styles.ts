import styled, {css} from "styled-components/native";

export const Container = styled.View`
width: 100%;
margin: 32px 0;
`;

export const Logo = styled.Image`
align-self: center;
width: 91px;
height: 91px;
`;

export const Title = styled.Text`
text-align: center;
${({theme}) => css`
font-size: ${theme.FONT_SIZE.TITULOS}px;
font-family: ${theme.FONT_FAMILY.BOLD};
color: ${theme.COLORS.COR_TITULO};
margin-bottom: 12px;
`};
`;

export const SubTitle = styled.Text`
text-align: center;
${({theme}) => css`
font-size: ${theme.FONT_SIZE.SUBTITULO}px;
font-family: ${theme.FONT_FAMILY.REGULAR};
color: ${theme.COLORS.COR_SUBTITULO};
margin-bottom: 15px;
`};
`;
