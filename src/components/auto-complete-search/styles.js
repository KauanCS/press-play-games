import styled from 'styled-components';
import {
  AutoComplete as AntAutoComplete,
  Input as AntInput,
} from 'antd';

export const Container = styled.div`
  display: flex;
`;

export const AutoComplete = styled(AntAutoComplete)`
  width: ${(props) => (props.width ? props.width : '250px')};
`;

export const InputSearch = styled(AntInput.Search)``;
