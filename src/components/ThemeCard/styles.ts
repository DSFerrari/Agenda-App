import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 80px;

  background-color: ${({ theme }) => theme.COLORS.COR_INPUT};
  border-radius: 10px;
   border-width: 2px;
  border-color: "#000000";

opacity: 100%;
  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 30px;
  `;

export const Title = styled.Text`
${({ theme }) => css`
font-size: ${theme.FONT_SIZE.INPUT}px;
font-family: ${theme.FONT_FAMILY.REGULAR};
color: ${theme.COLORS.COR_TITULO};
`};
`;
