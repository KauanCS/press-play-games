import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.color.publicPrimary};
  height: 100%;
  color: white;
  flex-direction: column;
  overflow-x: hidden;
  && .react-multi-carousel-item {
    display: flex;
    justify-content: center;
  }
`;
