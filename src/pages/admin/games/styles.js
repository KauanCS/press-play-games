import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.color.primary};
  justify-content: center;
`;

export const Text = styled.p`
  color: white;
`;
