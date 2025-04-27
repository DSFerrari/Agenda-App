import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1; 
  background-color: ${({ theme }) => theme.COLORS.COR_FUNDO};
  padding: 24px
  `;

export const Form = styled.View`
width: 100%;
background-color: ${({ theme }) => theme.COLORS.COR_INPUT};
flex-direction: row;
align-items: center;
border-radius: 8px;
border-width: 1px;
border-color: #000000;
`;

export const HeaderList = styled.View`
width: 100%;

flex-direction: row;
align-items: center;

margin: 32px 0 12px
`;