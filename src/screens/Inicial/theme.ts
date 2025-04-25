import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1; 
  background-color: ${({ theme }) => theme.COLORS.COR_FUNDO};
  padding: 24px;
  margin-left: 10;
  margin-right: 10;
  `;