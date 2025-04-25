import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";


export const Container = styled(TouchableOpacity)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme }) => theme.COLORS.COR_BOTAO};
  border-radius: 6px;

  justify-content: center;
  align-items: center;

  border-width: 2px;
  border-color: "#000000";
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.INPUT}px;
    color: ${theme.COLORS.COR_TEXTO_BOTAO};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
