import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.color.primary};
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.h1`
  color: white;
`;
