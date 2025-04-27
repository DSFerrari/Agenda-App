import styled from "styled-components/native";
import { CaretLeft, X,  } from "phosphor-react-native";

export const Container = styled.View`
width: 100%;

flex-direction: row;
align-items: center;
justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
flex: 1;
`;

export const Cancel = styled.TouchableOpacity`
width: 46px;
height: 55px;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.COR_SETA_VOLTAR,
}))``

export const CancelIcon = styled(X).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.COR_EXCLUIR,
}))``