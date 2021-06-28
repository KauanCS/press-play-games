import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-right: 40px;
  padding-left: 16px;
  margin-top: 10px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex: ${({ bigSize }) => (bigSize ? '1.5' : '1')};
  justify-content: center;
  align-items: baseline;
`;

export const Title = styled.h3`
  color: ${(props) => (props.theme.color.white)};
`;
