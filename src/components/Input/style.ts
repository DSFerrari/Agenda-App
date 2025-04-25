import styled, {css} from "styled-components/native";
import {TextInput} from "react-native";

export const Container = styled(TextInput)`
flex: 1;

min-height: 56px;  
max-height: 56px;

${({theme}) => css`
  background-color: ${theme.COLORS.COR_INPUT};
  color: ${theme.COLORS.COR_TITULO};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.INPUT}px;
  `};
  border-radius: 6px;
    padding: 16px;
   border-width: 2px;
  border-color: "#000000";
    `;